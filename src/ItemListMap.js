import { map } from "leaflet";
import { basemapLayer, featureLayer } from "esri-leaflet";
import "leaflet/dist/leaflet.css";

import ItemListFeatureLayer from "./ItemListFeatureLayer";
import ItemListFeatureLayerPopup from "./ItemFeatureLayerPopup";

class ItemListMap {
  constructor(
    gisRestUrl,
    gisField,
    onPopup,
    onNavClick,
    divID = "map",
    center = [43.0, -112.4383]
  ) {
    this.tdMap = map(divID).setView(center, 9);
    this.onPopup = onPopup;
    this.onNavClick = onNavClick;
    this.onPopup = this.onPopup.bind(this);
    this.setPopUp = this.setPopUp.bind(this);
    this.fLayer = new ItemListFeatureLayer(
      this.tdMap,
      this.setPopUp,
      gisRestUrl,
      gisField
    );

    this.init();
  }

  init() {
    basemapLayer("ImageryClarity").addTo(this.tdMap);
    this.fLayer.init();
    this.fLayer.render();
  }

  setPopUp(gisFieldValue, popup) {
    let popUpPromise = this.onPopup(gisFieldValue);
    popUpPromise.then(popUpContnet => {
      let {
        headerLabel,
        headerValue,
        secondaryHeader,
        secondaryValue,
        descriptionHeader,
        desriptionValue
      } = popUpContnet;
      //secondaryHeader = popUpContnet.secondaryHeader;
      let fLayerPopUp = new ItemListFeatureLayerPopup(
        headerLabel,
        headerValue,
        secondaryHeader,
        secondaryValue,
        descriptionHeader,
        desriptionValue,
        popup,
        this.onNavClick
      );
      fLayerPopUp.render();
    });
  }
}

export default ItemListMap;
