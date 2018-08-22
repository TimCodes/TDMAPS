import { map } from "leaflet";
import { basemapLayer, featureLayer } from "esri-leaflet";
import "leaflet/dist/leaflet.css";

import ItemListFeatureLayer from "./ItemListFeatureLayer";
import ItemListFeatureLayerPopup from "./ItemFeatureLayerPopup";
import ItemListMap from "./ItemListMap";
import ItemPropertiesFeatureLayer from "./ItemPropertiesFeatuerLayer";
import ItemPropertiesMap from "./ItemPropertiesMap";

window.ItemListFeatureLayer = ItemListFeatureLayer;
window.ItemListMap = ItemListMap;
window.ItemPropertiesFeatureLayer = ItemListFeatureLayer;
window.ItemPropertiesMap = ItemPropertiesMap;

export {
  ItemListFeatureLayer,
  ItemListMap,
  ItemPropertiesFeatureLayer,
  ItemPropertiesMap
};
