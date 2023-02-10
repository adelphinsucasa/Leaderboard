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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Fredericka the Great', sans-serif;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgb(54, 1, 1);\r\n  background-image: linear-gradient(rgb(54, 1, 1), rgb(111, 111, 40));\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.upSection {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 0;\r\n  margin-top: 10px;\r\n}\r\n\r\n.container .players .playersHeader .btnRefresh {\r\n  box-shadow: 2px 2px 5px 2px #888;\r\n  padding: 5px 15px;\r\n}\r\n\r\n.container .players .playersHeader .btnRefresh:hover {\r\n  background-color: gray;\r\n}\r\n\r\n.container .players .playersHeader .btnRefresh:active {\r\n  background-color: rgb(3, 60, 3);\r\n  color: white;\r\n  box-shadow: 0 5px rgb(36, 32, 32);\r\n  transform: translateY(3px);\r\n}\r\n\r\n.container .players .playersList {\r\n  border: 2px solid #000;\r\n  width: 100%;\r\n  margin: 5px 0;\r\n  height: 100vh;\r\n  overflow: auto;\r\n  background-color: white;\r\n}\r\n\r\n.container .players .playersList li {\r\n  display: flex;\r\n  list-style: none;\r\n  height: 30px;\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  body {\r\n    background-repeat: repeat;\r\n  }\r\n\r\n  header {\r\n    text-align: center;\r\n    margin: 0 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .upSection {\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .container .players {\r\n    width: 90%;\r\n    height: 200px;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    padding: 0 20px;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .players .playersHeader {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .titleSquare {\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh {\r\n    box-shadow: 2px 2px 5px 2px #888;\r\n    padding: 2px 2px;\r\n    color: white;\r\n    background-color: orange;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .container .players .playersList {\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .container .players .playersList li {\r\n    display: flex;\r\n    list-style: none;\r\n    height: 20px;\r\n    align-items: center;\r\n    padding: 0 2px;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(even) {\r\n    background-color: rgb(201, 143, 41);\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(odd) {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n  .container .addNewData {\r\n    width: 90%;\r\n    height: 120px;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 0 40px;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 2px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .formAddNewData {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    padding: 2px;\r\n  }\r\n\r\n  .container .formAddNewData input {\r\n    width: 100%;\r\n    height: 20px;\r\n    color: black;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit {\r\n    width: auto;\r\n    align-self: flex-end;\r\n    padding: 0 5px;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n    background-color: orange;\r\n    border-radius: 20px;\r\n    border: 1px solid white;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .pictures {\r\n    position: absolute;\r\n    z-index: -3;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 1000px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  header {\r\n    margin: 10px 40px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 40px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .upSection {\r\n    flex-direction: row;\r\n    justify-content: center;\r\n  }\r\n\r\n  .container .players {\r\n    width: 40%;\r\n    height: 500px;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    padding: 0 10px;\r\n    border: 8px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .players .playersHeader {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .titleSquare {\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    flex-grow: 4;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh {\r\n    box-shadow: 2px 2px 5px 2px #888;\r\n    padding: 5px 15px;\r\n    color: white;\r\n    background-color: orange;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n    width: 40%;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .container .players .playersList {\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .container .players .playersList li {\r\n    display: flex;\r\n    list-style: none;\r\n    height: 30px;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(even) {\r\n    background-color: rgb(201, 143, 41);\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(odd) {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n  .container .addNewData {\r\n    width: 40%;\r\n    height: 500px;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 0 10px;\r\n    border: 8px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader h2 {\r\n    text-align: center;\r\n  }\r\n\r\n  .container .formAddNewData {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .container .formAddNewData input {\r\n    width: 100%;\r\n    height: 30px;\r\n    color: black;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit {\r\n    width: auto;\r\n    align-self: flex-end;\r\n    padding: 0 15px;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n    background-color: orange;\r\n    border-radius: 20px;\r\n    border: 1px solid white;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .pictures {\r\n    position: absolute;\r\n    z-index: -3;\r\n    top: 0;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n.container .formAddNewData .btnSubmit:hover {\r\n  background-color: gray;\r\n}\r\n\r\n.container .formAddNewData .btnSubmit:active {\r\n  background-color: rgb(3, 60, 3);\r\n  color: white;\r\n  box-shadow: 0 5px rgb(36, 32, 32);\r\n  transform: translateY(3px);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.cdnfonts.com/css/fredericka-the-great');\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: 'Fredericka the Great', sans-serif;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgb(54, 1, 1);\r\n  background-image: linear-gradient(rgb(54, 1, 1), rgb(111, 111, 40));\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.upSection {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 0;\r\n  margin-top: 10px;\r\n}\r\n\r\n.container .players .playersHeader .btnRefresh {\r\n  box-shadow: 2px 2px 5px 2px #888;\r\n  padding: 5px 15px;\r\n}\r\n\r\n.container .players .playersHeader .btnRefresh:hover {\r\n  background-color: gray;\r\n}\r\n\r\n.container .players .playersHeader .btnRefresh:active {\r\n  background-color: rgb(3, 60, 3);\r\n  color: white;\r\n  box-shadow: 0 5px rgb(36, 32, 32);\r\n  transform: translateY(3px);\r\n}\r\n\r\n.container .players .playersList {\r\n  border: 2px solid #000;\r\n  width: 100%;\r\n  margin: 5px 0;\r\n  height: 100vh;\r\n  overflow: auto;\r\n  background-color: white;\r\n}\r\n\r\n.container .players .playersList li {\r\n  display: flex;\r\n  list-style: none;\r\n  height: 30px;\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  body {\r\n    background-repeat: repeat;\r\n  }\r\n\r\n  header {\r\n    text-align: center;\r\n    margin: 0 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .upSection {\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .container .players {\r\n    width: 90%;\r\n    height: 200px;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    padding: 0 20px;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .players .playersHeader {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .titleSquare {\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh {\r\n    box-shadow: 2px 2px 5px 2px #888;\r\n    padding: 2px 2px;\r\n    color: white;\r\n    background-color: orange;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .container .players .playersList {\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .container .players .playersList li {\r\n    display: flex;\r\n    list-style: none;\r\n    height: 20px;\r\n    align-items: center;\r\n    padding: 0 2px;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(even) {\r\n    background-color: rgb(201, 143, 41);\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(odd) {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n  .container .addNewData {\r\n    width: 90%;\r\n    height: 120px;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 0 40px;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 2px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .formAddNewData {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    padding: 2px;\r\n  }\r\n\r\n  .container .formAddNewData input {\r\n    width: 100%;\r\n    height: 20px;\r\n    color: black;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit {\r\n    width: auto;\r\n    align-self: flex-end;\r\n    padding: 0 5px;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n    background-color: orange;\r\n    border-radius: 20px;\r\n    border: 1px solid white;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .pictures {\r\n    position: absolute;\r\n    z-index: -3;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 1000px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  header {\r\n    margin: 10px 40px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 40px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .upSection {\r\n    flex-direction: row;\r\n    justify-content: center;\r\n  }\r\n\r\n  .container .players {\r\n    width: 40%;\r\n    height: 500px;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    padding: 0 10px;\r\n    border: 8px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .players .playersHeader {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .titleSquare {\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    flex-grow: 4;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh {\r\n    box-shadow: 2px 2px 5px 2px #888;\r\n    padding: 5px 15px;\r\n    color: white;\r\n    background-color: orange;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n    width: 40%;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .container .players .playersList {\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .container .players .playersList li {\r\n    display: flex;\r\n    list-style: none;\r\n    height: 30px;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(even) {\r\n    background-color: rgb(201, 143, 41);\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(odd) {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n  .container .addNewData {\r\n    width: 40%;\r\n    height: 500px;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 0 10px;\r\n    border: 8px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader h2 {\r\n    text-align: center;\r\n  }\r\n\r\n  .container .formAddNewData {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .container .formAddNewData input {\r\n    width: 100%;\r\n    height: 30px;\r\n    color: black;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit {\r\n    width: auto;\r\n    align-self: flex-end;\r\n    padding: 0 15px;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n    background-color: orange;\r\n    border-radius: 20px;\r\n    border: 1px solid white;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .pictures {\r\n    position: absolute;\r\n    z-index: -3;\r\n    top: 0;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n.container .formAddNewData .btnSubmit:hover {\r\n  background-color: gray;\r\n}\r\n\r\n.container .formAddNewData .btnSubmit:active {\r\n  background-color: rgb(3, 60, 3);\r\n  color: white;\r\n  box-shadow: 0 5px rgb(36, 32, 32);\r\n  transform: translateY(3px);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/images/Leaderboard.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/Leaderboard.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Leaderboard.jpg");

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
/* harmony import */ var _assets_images_Leaderboard_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/Leaderboard.jpg */ "./src/assets/images/Leaderboard.jpg");
/* harmony import */ var _modules_updateDom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/updateDom.js */ "./src/modules/updateDom.js");





(0,_modules_updateDom_js__WEBPACK_IMPORTED_MODULE_3__["default"])();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVks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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBUztBQUNiO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2Fzc2V0cy9pbWFnZXMvR2FtZUJhY2tncm91bmQuanBnIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2Fzc2V0cy9pbWFnZXMvTGVhZGVyYm9hcmQuanBnIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9hcGlNYW5hZ2VtZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvdXBkYXRlRG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9mcmVkZXJpY2thLXRoZS1ncmVhdCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJlZGVyaWNrYSB0aGUgR3JlYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgMSwgMSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDU0LCAxLCAxKSwgcmdiKDExMSwgMTExLCA0MCkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi51cFNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoIHtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCAjODg4O1xcclxcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIgLmJ0blJlZnJlc2g6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaDphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDYwLCAzKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IHJnYigzNiwgMzIsIDMyKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVwU2VjdGlvbiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCBvcmFuZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZVNxdWFyZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIgLmJ0blJlZnJlc2gge1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggIzg4ODtcXHJcXG4gICAgcGFkZGluZzogMnB4IDJweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTYsIDQ5KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3Qge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMTQzLCA0MSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5hZGROZXdEYXRhIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggb3JhbmdlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuYWRkTmV3RGF0YSAuYWRkTmV3RGF0YUhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgLmJ0blN1Ym1pdDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDE2LCA0OSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5waWN0dXJlcyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogLTM7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVwU2VjdGlvbiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyB7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICBib3JkZXI6IDhweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IG9yYW5nZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlU3F1YXJlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmbGV4LWdyb3c6IDQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4ICM4ODg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIgLmJ0blJlZnJlc2g6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNiwgNDkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiA1cHggMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE0MywgNDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuYWRkTmV3RGF0YSB7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICBib3JkZXI6IDhweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IG9yYW5nZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEgLmFkZE5ld0RhdGFIZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuYWRkTmV3RGF0YSAuYWRkTmV3RGF0YUhlYWRlciBoMiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgLmJ0blN1Ym1pdCB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgLmJ0blN1Ym1pdDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDE2LCA0OSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5waWN0dXJlcyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogLTM7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgLmJ0blN1Ym1pdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0OmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgNjAsIDMpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggcmdiKDM2LCAzMiwgMzIpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7RUFDdEIsK0NBQStDO0VBQy9DLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixtRUFBbUU7QUFDckU7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNC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LDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvZnJlZGVyaWNrYS10aGUtZ3JlYXQnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyZWRlcmlja2EgdGhlIEdyZWF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDEsIDEpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig1NCwgMSwgMSksIHJnYigxMTEsIDExMSwgNDApKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBTZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaCB7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggIzg4ODtcXHJcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIgLmJ0blJlZnJlc2g6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCA2MCwgMyk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCByZ2IoMzYsIDMyLCAzMik7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3Qge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51cFNlY3Rpb24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggb3JhbmdlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGVTcXVhcmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4ICM4ODg7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAycHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIgLmJ0blJlZnJlc2g6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDE2LCA0OSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDVweCAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE0MywgNDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuYWRkTmV3RGF0YSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZzogMCA0MHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IG9yYW5nZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEgLmFkZE5ld0RhdGFIZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBwYWRkaW5nOiAwIDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0IHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNiwgNDkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGljdHVyZXMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IC0zO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIG1hcmdpbjogMTBweCA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51cFNlY3Rpb24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCBvcmFuZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZVNxdWFyZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZmxleC1ncm93OiA0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaCB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCAjODg4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTYsIDQ5KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3Qge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAxNDMsIDQxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCBvcmFuZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5hZGROZXdEYXRhIC5hZGROZXdEYXRhSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEgLmFkZE5ld0RhdGFIZWFkZXIgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNiwgNDkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGljdHVyZXMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IC0zO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgLmJ0blN1Ym1pdDphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDYwLCAzKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IHJnYigzNiwgMzIsIDMyKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL0dhbWVCYWNrZ3JvdW5kLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL0xlYWRlcmJvYXJkLmpwZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvR2FtZUJhY2tncm91bmQuanBnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvTGVhZGVyYm9hcmQuanBnJztcclxuaW1wb3J0IHVwZGF0ZURvbSBmcm9tICcuL21vZHVsZXMvdXBkYXRlRG9tLmpzJztcclxuXHJcbnVwZGF0ZURvbSgpO1xyXG4iLCJjb25zdCB1cmkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvdlFQeTJ4RG44bHREbkNSTXp4cVovc2NvcmVzLyc7XHJcblxyXG5jb25zdCBBZGRQbGF5ZXIgPSBhc3luYyAoZGF0YSA9IHt9KSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmksIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuY29uc3QgR2V0UGxheWVycyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IEFkZFBsYXllciwgR2V0UGxheWVycyB9OyIsImltcG9ydCB7IEFkZFBsYXllciwgR2V0UGxheWVycyB9IGZyb20gJy4vYXBpTWFuYWdlbWVudC5qcyc7XHJcblxyXG5jb25zdCBidG5SZWZyZXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0blJlZnJlc2gnKTtcclxuY29uc3QgZm9ybUFkZE5ld0RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUFkZE5ld0RhdGEnKTtcclxuY29uc3QgdHh0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcbmNvbnN0IHR4dFNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XHJcbmNvbnN0IHBpY3R1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGljdHVyZXMnKTtcclxuY29uc3QgaW1nQkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbmNvbnN0IHVwZGF0ZURvbSA9ICgpID0+IHtcclxuICBsZXQgY0F1eCA9ICcnO1xyXG4gIEdldFBsYXllcnMoKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5yZXN1bHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNBdXggKz0gYDxsaT4ke2l0ZW0udXNlcn06ICR7aXRlbS5zY29yZX08L2xpPmA7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyc0xpc3QnKS5pbm5lckhUTUwgPSBjQXV4O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5pbWdCRy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9pbWFnZXMvR2FtZUJhY2tncm91bmQuanBnJyk7XHJcbmltZ0JHLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0dhbWUgQmFja2dyb3VuZCcpO1xyXG5waWN0dXJlLmFwcGVuZENoaWxkKGltZ0JHKTtcclxuaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzKSB7XHJcbiAgcGljdHVyZS5hcHBlbmRDaGlsZChpbWdCRy5jbG9uZU5vZGUodHJ1ZSkpO1xyXG59XHJcblxyXG5idG5SZWZyZXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJzTGlzdCcpLmlubmVySFRNTCA9ICcnO1xyXG4gIHVwZGF0ZURvbSgpO1xyXG59KTtcclxuXHJcbmZvcm1BZGROZXdEYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgbGV0IG5ld0VyciA9IGZhbHNlO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgaWYgKHR4dE5hbWUudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgbmV3RXJyID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKHR4dFNjb3JlLnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgIG5ld0VyciA9IHRydWU7XHJcbiAgfSBlbHNlIGlmIChOdW1iZXIuaXNOYU4odHh0U2NvcmUudmFsdWUudHJpbSgpKSkge1xyXG4gICAgbmV3RXJyID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmICghbmV3RXJyKSB7XHJcbiAgICBjb25zdCBhUGxheWVyID0ge1xyXG4gICAgICB1c2VyOiB0eHROYW1lLnZhbHVlLFxyXG4gICAgICBzY29yZTogTnVtYmVyKHR4dFNjb3JlLnZhbHVlKSxcclxuICAgIH07XHJcbiAgICBBZGRQbGF5ZXIoYVBsYXllcilcclxuICAgICAgLnRoZW4oKCkgPT4gZm9ybUFkZE5ld0RhdGEuc3VibWl0KCkpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVEb207Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9