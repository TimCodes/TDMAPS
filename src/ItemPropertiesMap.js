import { map } from "leaflet";
import { basemapLayer, featureLayer } from "esri-leaflet";
import "leaflet/dist/leaflet.css";

import ItemPropertiesFeatureLayer from "./ItemPropertiesFeatuerLayer";

class ItemPropertiesMap {
  constructor(
    geoRestURL,
    gisField,
    tdFieldValue,
    divID = "map",
    center = [43.0, -112.4383]
  ) {
    this.tdMap = map(divID).setView(center, 9);
    basemapLayer("ImageryClarity").addTo(this.tdMap);
    let whereCond = `${gisField}='${tdFieldValue}'`;
    this.fLayer = new ItemPropertiesFeatureLayer(
      this.tdMap,
      geoRestURL,
      gisField,
      whereCond
    );
    this.fLayer.init();
    this.fLayer.render();
  }
}

export default ItemPropertiesMap;
