"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/fredericka-the-great);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Fredericka the Great', sans-serif;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgb(54, 1, 1);\r\n  background-image: linear-gradient(rgb(54, 1, 1), rgb(111, 111, 40));\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.upSection {\r\n  display: flex;\r\n  width: 100%;\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  body {\r\n    background-repeat: repeat;\r\n  }\r\n\r\n  header {\r\n    text-align: center;\r\n    margin: 0 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .upSection {\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .container .players {\r\n    width: 90%;\r\n    height: 200px;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    padding: 0 20px;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .players .playersHeader {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .titleSquare {\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh {\r\n    box-shadow: 2px 2px 5px 2px #888;\r\n    padding: 2px 2px;\r\n    color: white;\r\n    background-color: orange;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .container .players .playersList {\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .container .players .playersList li {\r\n    display: flex;\r\n    list-style: none;\r\n    height: 20px;\r\n    align-items: center;\r\n    padding: 0 2px;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(even) {\r\n    background-color: rgb(201, 143, 41);\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(odd) {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n  .container .addNewData {\r\n    width: 90%;\r\n    height: 120px;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 0 40px;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 2px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .formAddNewData {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    padding: 2px;\r\n  }\r\n\r\n  .container .formAddNewData input {\r\n    width: 100%;\r\n    height: 20px;\r\n    color: black;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit {\r\n    width: auto;\r\n    align-self: flex-end;\r\n    padding: 0 5px;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n    background-color: orange;\r\n    border-radius: 20px;\r\n    border: 1px solid white;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .pictures {\r\n    position: absolute;\r\n    z-index: -3;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 1000px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  header {\r\n    margin: 10px 40px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 40px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .upSection {\r\n    flex-direction: row;\r\n    justify-content: center;\r\n  }\r\n\r\n  .container .players {\r\n    width: 40%;\r\n    height: 500px;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    padding: 0 10px;\r\n    border: 8px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .players .playersHeader {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .titleSquare {\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    flex-grow: 4;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh {\r\n    box-shadow: 2px 2px 5px 2px #888;\r\n    padding: 5px 15px;\r\n    color: white;\r\n    background-color: orange;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n    width: 40%;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .container .players .playersList {\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .container .players .playersList li {\r\n    display: flex;\r\n    list-style: none;\r\n    height: 30px;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(even) {\r\n    background-color: rgb(201, 143, 41);\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(odd) {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n  .container .addNewData {\r\n    width: 40%;\r\n    height: 500px;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 0 10px;\r\n    border: 8px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader h2 {\r\n    text-align: center;\r\n  }\r\n\r\n  .container .formAddNewData {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .container .formAddNewData input {\r\n    width: 100%;\r\n    height: 30px;\r\n    color: black;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit {\r\n    width: auto;\r\n    align-self: flex-end;\r\n    padding: 0 15px;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n    background-color: orange;\r\n    border-radius: 20px;\r\n    border: 1px solid white;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .pictures {\r\n    position: absolute;\r\n    z-index: -3;\r\n    top: 0;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.cdnfonts.com/css/fredericka-the-great');\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: 'Fredericka the Great', sans-serif;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgb(54, 1, 1);\r\n  background-image: linear-gradient(rgb(54, 1, 1), rgb(111, 111, 40));\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.upSection {\r\n  display: flex;\r\n  width: 100%;\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  body {\r\n    background-repeat: repeat;\r\n  }\r\n\r\n  header {\r\n    text-align: center;\r\n    margin: 0 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .upSection {\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .container .players {\r\n    width: 90%;\r\n    height: 200px;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    padding: 0 20px;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .players .playersHeader {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .titleSquare {\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh {\r\n    box-shadow: 2px 2px 5px 2px #888;\r\n    padding: 2px 2px;\r\n    color: white;\r\n    background-color: orange;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .container .players .playersList {\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .container .players .playersList li {\r\n    display: flex;\r\n    list-style: none;\r\n    height: 20px;\r\n    align-items: center;\r\n    padding: 0 2px;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(even) {\r\n    background-color: rgb(201, 143, 41);\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(odd) {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n  .container .addNewData {\r\n    width: 90%;\r\n    height: 120px;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 0 40px;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 2px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .formAddNewData {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    padding: 2px;\r\n  }\r\n\r\n  .container .formAddNewData input {\r\n    width: 100%;\r\n    height: 20px;\r\n    color: black;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit {\r\n    width: auto;\r\n    align-self: flex-end;\r\n    padding: 0 5px;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n    background-color: orange;\r\n    border-radius: 20px;\r\n    border: 1px solid white;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .pictures {\r\n    position: absolute;\r\n    z-index: -3;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 1000px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  header {\r\n    margin: 10px 40px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 40px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .upSection {\r\n    flex-direction: row;\r\n    justify-content: center;\r\n  }\r\n\r\n  .container .players {\r\n    width: 40%;\r\n    height: 500px;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    padding: 0 10px;\r\n    border: 8px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .players .playersHeader {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .titleSquare {\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    flex-grow: 4;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh {\r\n    box-shadow: 2px 2px 5px 2px #888;\r\n    padding: 5px 15px;\r\n    color: white;\r\n    background-color: orange;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n    width: 40%;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .container .players .playersList {\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .container .players .playersList li {\r\n    display: flex;\r\n    list-style: none;\r\n    height: 30px;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(even) {\r\n    background-color: rgb(201, 143, 41);\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(odd) {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n  .container .addNewData {\r\n    width: 40%;\r\n    height: 500px;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 0 10px;\r\n    border: 8px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader h2 {\r\n    text-align: center;\r\n  }\r\n\r\n  .container .formAddNewData {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .container .formAddNewData input {\r\n    width: 100%;\r\n    height: 30px;\r\n    color: black;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit {\r\n    width: auto;\r\n    align-self: flex-end;\r\n    padding: 0 15px;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n    background-color: orange;\r\n    border-radius: 20px;\r\n    border: 1px solid white;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .pictures {\r\n    position: absolute;\r\n    z-index: -3;\r\n    top: 0;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/images/GameBackground.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/GameBackground.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/GameBackground.jpg");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _assets_images_GameBackground_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/GameBackground.jpg */ "./src/assets/images/GameBackground.jpg");
/* harmony import */ var _modules_updateDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/updateDom.js */ "./src/modules/updateDom.js");




(0,_modules_updateDom_js__WEBPACK_IMPORTED_MODULE_2__["default"])();


/***/ }),

/***/ "./src/modules/apiManagement.js":
/*!**************************************!*\
  !*** ./src/modules/apiManagement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPlayer": () => (/* binding */ AddPlayer),
/* harmony export */   "GetPlayers": () => (/* binding */ GetPlayers)
/* harmony export */ });
const uri = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vQPy2xDn8ltDnCRMzxqZ/scores/';

const AddPlayer = async (data = {}) => {
  const response = await fetch(uri, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return response.json();
};

const GetPlayers = async () => {
  const response = await fetch(uri);

  return response.json();
};



/***/ }),

/***/ "./src/modules/updateDom.js":
/*!**********************************!*\
  !*** ./src/modules/updateDom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiManagement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiManagement.js */ "./src/modules/apiManagement.js");


const btnRefresh = document.querySelector('.btnRefresh');
const formAddNewData = document.querySelector('.formAddNewData');
const txtName = document.getElementById('name');
const txtScore = document.getElementById('score');
const picture = document.getElementById('pictures');
const imgBG = document.createElement('img');

const updateDom = () => {
  let cAux = '';
  (0,_apiManagement_js__WEBPACK_IMPORTED_MODULE_0__.GetPlayers)()
    .then((data) => {
      data.result.forEach((item) => {
        cAux += `<li>${item.user}: ${item.score}</li>`;
      });
      document.getElementById('playersList').innerHTML = cAux;
    });
};

imgBG.setAttribute('src', './assets/images/GameBackground.jpg');
imgBG.setAttribute('alt', 'Game Background');
picture.appendChild(imgBG);
if (window.matchMedia('(max-width: 767px)').matches) {
  picture.appendChild(imgBG.cloneNode(true));
}

btnRefresh.addEventListener('click', () => {
  document.getElementById('playersList').innerHTML = '';
  updateDom();
});

formAddNewData.addEventListener('submit', (e) => {
  let newErr = false;
  e.preventDefault();

  if (txtName.value.trim() === '') {
    newErr = true;
  }
  if (txtScore.value.trim() === '') {
    newErr = true;
  } else if (Number.isNaN(txtScore.value.trim())) {
    newErr = true;
  }

  if (!newErr) {
    const aPlayer = {
      user: txtName.value,
      score: Number(txtScore.value),
    };
    (0,_apiManagement_js__WEBPACK_IMPORTED_MODULE_0__.AddPlayer)(aPlayer)
      .then(() => formAddNewData.submit());
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDom);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZ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QUFDQTtBQUNBLEVBQUUsNkRBQVU7QUFDWjtBQUNBO0FBQ0EsdUJBQXVCLFVBQVUsSUFBSSxXQUFXO0FBQ2hELE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFTO0FBQ2I7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9hc3NldHMvaW1hZ2VzL0dhbWVCYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvYXBpTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3VwZGF0ZURvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvZnJlZGVyaWNrYS10aGUtZ3JlYXQpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyZWRlcmlja2EgdGhlIEdyZWF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDEsIDEpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig1NCwgMSwgMSksIHJnYigxMTEsIDExMSwgNDApKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBTZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51cFNlY3Rpb24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggb3JhbmdlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGVTcXVhcmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4ICM4ODg7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAycHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIgLmJ0blJlZnJlc2g6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDE2LCA0OSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDVweCAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE0MywgNDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuYWRkTmV3RGF0YSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IG9yYW5nZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEgLmFkZE5ld0RhdGFIZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBwYWRkaW5nOiAwIDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0IHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNiwgNDkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGljdHVyZXMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IC0zO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIG1hcmdpbjogMTBweCA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51cFNlY3Rpb24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCBvcmFuZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZVNxdWFyZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZmxleC1ncm93OiA0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaCB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCAjODg4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTYsIDQ5KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3Qge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAxNDMsIDQxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCBvcmFuZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5hZGROZXdEYXRhIC5hZGROZXdEYXRhSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEgLmFkZE5ld0RhdGFIZWFkZXIgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNiwgNDkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGljdHVyZXMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IC0zO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7RUFDdEIsK0NBQStDO0VBQy9DLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixt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QUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvZnJlZGVyaWNrYS10aGUtZ3JlYXQnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyZWRlcmlja2EgdGhlIEdyZWF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDEsIDEpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig1NCwgMSwgMSksIHJnYigxMTEsIDExMSwgNDApKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBTZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51cFNlY3Rpb24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggb3JhbmdlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGVTcXVhcmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4ICM4ODg7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAycHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIgLmJ0blJlZnJlc2g6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDE2LCA0OSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDVweCAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE0MywgNDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuYWRkTmV3RGF0YSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IG9yYW5nZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEgLmFkZE5ld0RhdGFIZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBwYWRkaW5nOiAwIDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0IHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNiwgNDkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGljdHVyZXMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IC0zO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIG1hcmdpbjogMTBweCA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51cFNlY3Rpb24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCBvcmFuZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZVNxdWFyZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZmxleC1ncm93OiA0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaCB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCAjODg4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTYsIDQ5KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3Qge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAxNDMsIDQxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCBvcmFuZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5hZGROZXdEYXRhIC5hZGROZXdEYXRhSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEgLmFkZE5ld0RhdGFIZWFkZXIgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNiwgNDkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGljdHVyZXMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IC0zO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvR2FtZUJhY2tncm91bmQuanBnXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvR2FtZUJhY2tncm91bmQuanBnJztcbmltcG9ydCB1cGRhdGVEb20gZnJvbSAnLi9tb2R1bGVzL3VwZGF0ZURvbS5qcyc7XG5cbnVwZGF0ZURvbSgpO1xuIiwiY29uc3QgdXJpID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzL3ZRUHkyeERuOGx0RG5DUk16eHFaL3Njb3Jlcy8nO1xuXG5jb25zdCBBZGRQbGF5ZXIgPSBhc3luYyAoZGF0YSA9IHt9KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJpLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgR2V0UGxheWVycyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmkpO1xuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5leHBvcnQgeyBBZGRQbGF5ZXIsIEdldFBsYXllcnMgfTsiLCJpbXBvcnQgeyBBZGRQbGF5ZXIsIEdldFBsYXllcnMgfSBmcm9tICcuL2FwaU1hbmFnZW1lbnQuanMnO1xuXG5jb25zdCBidG5SZWZyZXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blJlZnJlc2gnKTtcbmNvbnN0IGZvcm1BZGROZXdEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1BZGROZXdEYXRhJyk7XG5jb25zdCB0eHROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbmNvbnN0IHR4dFNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG5jb25zdCBwaWN0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY3R1cmVzJyk7XG5jb25zdCBpbWdCRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG5jb25zdCB1cGRhdGVEb20gPSAoKSA9PiB7XG4gIGxldCBjQXV4ID0gJyc7XG4gIEdldFBsYXllcnMoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkYXRhLnJlc3VsdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNBdXggKz0gYDxsaT4ke2l0ZW0udXNlcn06ICR7aXRlbS5zY29yZX08L2xpPmA7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJzTGlzdCcpLmlubmVySFRNTCA9IGNBdXg7XG4gICAgfSk7XG59O1xuXG5pbWdCRy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWFnZXMvR2FtZUJhY2tncm91bmQuanBnJyk7XG5pbWdCRy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdHYW1lIEJhY2tncm91bmQnKTtcbnBpY3R1cmUuYXBwZW5kQ2hpbGQoaW1nQkcpO1xuaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XG4gIHBpY3R1cmUuYXBwZW5kQ2hpbGQoaW1nQkcuY2xvbmVOb2RlKHRydWUpKTtcbn1cblxuYnRuUmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcnNMaXN0JykuaW5uZXJIVE1MID0gJyc7XG4gIHVwZGF0ZURvbSgpO1xufSk7XG5cbmZvcm1BZGROZXdEYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGxldCBuZXdFcnIgPSBmYWxzZTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlmICh0eHROYW1lLnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICBuZXdFcnIgPSB0cnVlO1xuICB9XG4gIGlmICh0eHRTY29yZS52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgbmV3RXJyID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChOdW1iZXIuaXNOYU4odHh0U2NvcmUudmFsdWUudHJpbSgpKSkge1xuICAgIG5ld0VyciA9IHRydWU7XG4gIH1cblxuICBpZiAoIW5ld0Vycikge1xuICAgIGNvbnN0IGFQbGF5ZXIgPSB7XG4gICAgICB1c2VyOiB0eHROYW1lLnZhbHVlLFxuICAgICAgc2NvcmU6IE51bWJlcih0eHRTY29yZS52YWx1ZSksXG4gICAgfTtcbiAgICBBZGRQbGF5ZXIoYVBsYXllcilcbiAgICAgIC50aGVuKCgpID0+IGZvcm1BZGROZXdEYXRhLnN1Ym1pdCgpKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZURvbTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=