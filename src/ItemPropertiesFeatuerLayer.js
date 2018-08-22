import { featureLayer } from "esri-leaflet";
import L from "leaflet";

class ItemListFeatureLayer {
  constructor(map, geoRestURL, gisField, whereCond, styleFnc = null) {
    if (!map) throw "map object is requried";
    if (!geoRestURL) throw "Rest URL for gis Required";
    if (!gisField) throw "gis field Required";
    if (!whereCond) throw "where condition field Required";

    this.map = map;
    this.gisField = gisField;
    this.fLayer = featureLayer({
      url: geoRestURL,
      fields: ["*"],
      where: whereCond,
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
    this.fLayer.once("load", () => {
      const Bounds = L.latLngBounds([]);
      this.fLayer.eachFeature(layer =>
        Bounds.extend(layer._bounds || layer._latlng)
      );
    });
  }

  render() {
    this.fLayer.addTo(this.map);
  }
}

export default ItemListFeatureLayer;

//`${this.props.itemMap.gisfield}='${theField[0].fieldvalue}'`;
