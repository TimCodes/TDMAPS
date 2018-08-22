import ItemPropertiesMap from "./ItemPropertiesMap";

var TdWellTagExample = {
  partno: {
    fieldvalue: "1589",
    sortposition: 0,
    fieldname: "partno",
    displayname: "Well Tag No.",
    islisted: "Y",
    sortorder: 10,
    fieldtype: "text"
  },
  flexfield15: {
    fieldvalue: "34E",
    sortposition: 0,
    fieldname: "flexfield15",
    displayname: "Range",
    islisted: "Y",
    sortorder: 140,
    fieldtype: "text"
  }
};

var WellTagMapMetaExample = {
  url:
    "https://waterweb.sbtribes.com/arcgis/rest/services/WellPrac/FeatureServer/0",
  query: "1=1",
  gisfield: "TAG_NO_",
  tdfield: "partno",
  mainheader: "PARTNO",
  mainheaderlabel: "Well Tag No",
  secondheader: "FLEXFIELD21",
  secondheaderlabel: "POD ID",
  descriptionheader: "CBRN",
  descriptionheaderlabel: "Orignal Owner",
  outfields: "*"
};

let propTest = new ItemPropertiesMap(
  WellTagMapMetaExample.url,
  WellTagMapMetaExample.gisfield,
  TdWellTagExample[WellTagMapMetaExample.tdfield].fieldvalue
);
