import ItemListMap from "./ItemListMap";

var mapMetaRequest = new Request("./MapMetaSample.json");
fetch(mapMetaRequest)
  .then(r => r.json())
  .then(r => {
    let wellTagMeta = r["part_welltag"];
    CreatePopUpHandler(wellTagMeta);
    let testLayer = new ItemListMap(
      wellTagMeta.url,
      wellTagMeta.gisfield,
      CreatePopUpHandler(wellTagMeta),
      navHand
    );
  })
  .catch(console.log);

//etWellPropInfo();
// this simulates getting item properties where
// where itemtype = part and subtype= welltag
// and partno = "1589"
// the 1589 comes from the gisfieldvalue
// which is returned from the gis server
function getWellPropInfo(gisFieldValue) {
  console.log("---- gis field value -----");
  console.log(gisFieldValue);
  let wellPropRequest = new Request("./WellPropertiesSample.json");
  return fetch(wellPropRequest)
    .then(r => r.json())
    .catch(console.log);
}

function CreatePopUpHandler(wellTagMeta) {
  const popUpHandler = gisFieldValue => {
    //let popUpContnet = {};
    return getWellPropInfo(gisFieldValue)
      .then(r => r[0])
      .then(wellProp => {
        let headerValue =
          wellProp[wellTagMeta.mainheader.toLowerCase()].fieldvalue;
        let secondaryValue =
          wellProp[wellTagMeta.mainheader.toLowerCase()].fieldvalue;
        let desriptionValue =
          wellProp[wellTagMeta.descriptionheader.toLowerCase()].fieldvalue;

        let popUpContnets = {
          headerLabel: wellTagMeta.mainheaderlabel,
          headerValue: headerValue,
          secondaryHeader: wellTagMeta.secondheaderlabel,
          secondaryValue: secondaryValue,
          descriptionHeader: wellTagMeta.descriptionheaderlabel,
          desriptionValue: desriptionValue
        };
        return popUpContnets;
      });
  };
  return popUpHandler;
}
const navHand = () => {
  window.open("https://tribald.com/sbwaternew", "_blank");
};
