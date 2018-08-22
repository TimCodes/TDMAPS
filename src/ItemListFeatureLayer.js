import { featureLayer } from "esri-leaflet";
import L from "leaflet";

class ItemListFeatureLayer {
  constructor(map, onPopUp, geoRestURL, gisField, styleFnc = null) {
    if (!map) throw "map object is requried";
    if (!onPopUp) throw "onPopUp call back required";
    if (!geoRestURL) throw "Rest URL for gis Required";
    this.map = map;
    this.onPopUp = onPopUp;
    this.gisField = gisField;
    this.fLayer = featureLayer({
      url: geoRestURL,
      fields: ["*"],
      pointToLayer: function(geojson, latlng) {
        return L.circleMarker(latlng, {
          color: "white",
          weight: 1,
          fillColor: "darkorange",
          fillOpacity: 0.6
        });
      }
    });
  }

  init() {
    this.fLayer.bindPopup(e => "...loading");
    this.fLayer.once("load", () => {
      const Bounds = L.latLngBounds([]);
      this.fLayer.eachFeature(layer =>
        Bounds.extend(layer._bounds || layer._latlng)
      );
    });
    this.fLayer.on("click", e => this.handleLayerClick(e));
  }

  handleLayerClick(e) {
    let gisFieldValue = e.layer.feature.properties[this.gisField];
    this.onPopUp(gisFieldValue, this.fLayer.getPopup());
  }

  render() {
    console.log("add to map ");
    console.log(this.map);
    this.fLayer.addTo(this.map);
  }
}

export default ItemListFeatureLayer;
