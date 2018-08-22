import ItemListMap from "./ItemListMap";

var myRequest = new Request("./MapMetaSample.json");
fetch(myRequest)
  .then(r => r.json())
  .then(r => console.log(r))
  .catch(console.log);

let popUpContnet = {
  headerLabel: "well Tag No.",
  headerValue: "1351",
  secondaryHeader: "Pod Id",
  secondaryValue: "2012dgdg",
  descriptionHeader: "status",
  desriptionValue: "Open"
};

const popUpHandler = () => {
  return Promise.resolve(popUpContnet);
};

const navHand = () => {
  window.open("https://www.codexworld.com", "_blank");
};
let url =
  "https://waterweb.sbtribes.com/arcgis/rest/services/Allotments/FeatureServer/0";
let gisField = "LSTMOSS_AT";

let testLayer = new ItemListMap(url, gisField, popUpHandler, navHand);
