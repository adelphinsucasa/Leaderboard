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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Fredericka the Great', sans-serif;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: #000;\r\n\r\n  /* background-image: linear-gradient(rgb(54, 1, 1), rgb(111, 111, 40)); */\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.upSection {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 0;\r\n  margin-top: 10px;\r\n}\r\n\r\n.container .players .playersHeader .btnRefresh {\r\n  box-shadow: 2px 2px 5px 2px #888;\r\n  padding: 5px 15px;\r\n}\r\n\r\n.container .players .playersHeader .btnRefresh:hover {\r\n  background-color: gray;\r\n}\r\n\r\n.container .players .playersHeader .btnRefresh:active {\r\n  background-color: rgb(3, 60, 3);\r\n  color: white;\r\n  box-shadow: 0 5px rgb(36, 32, 32);\r\n  transform: translateY(3px);\r\n}\r\n\r\n.container .players .playersList {\r\n  border: 2px solid #000;\r\n  width: 100%;\r\n  margin: 5px 0;\r\n  height: 100vh;\r\n  overflow: auto;\r\n  background-color: white;\r\n}\r\n\r\n.container .players .playersList li {\r\n  display: flex;\r\n  list-style: none;\r\n  height: 30px;\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  body {\r\n    background-repeat: repeat;\r\n  }\r\n\r\n  header {\r\n    text-align: center;\r\n    margin: 0 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .upSection {\r\n    flex-direction: column-reverse;\r\n    align-items: center;\r\n    gap: 15px;\r\n  }\r\n\r\n  .container .players {\r\n    width: 90%;\r\n    height: 200px;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    padding: 0 20px;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .players .playersHeader {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .titleSquare {\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    letter-spacing: 0.08em;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh {\r\n    width: 35%;\r\n    box-shadow: 2px 2px 5px 2px #888;\r\n    padding: 2px 2px;\r\n    color: white;\r\n    background-color: orange;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 8px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .container .players .playersList {\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .container .players .playersList li {\r\n    display: flex;\r\n    list-style: none;\r\n    height: 20px;\r\n    align-items: center;\r\n    padding: 0 2px;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(even) {\r\n    background-color: rgb(201, 143, 41);\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(odd) {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n  .container .addNewData {\r\n    width: 90%;\r\n    height: 120px;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 0 40px;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 2px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .formAddNewData {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    padding: 2px;\r\n  }\r\n\r\n  .container .formAddNewData input {\r\n    width: 100%;\r\n    height: 20px;\r\n    color: black;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit {\r\n    width: auto;\r\n    align-self: flex-end;\r\n    padding: 0 5px;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n    background-color: orange;\r\n    border-radius: 20px;\r\n    border: 1px solid white;\r\n    font-weight: bold;\r\n    font-size: 8px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .pictures {\r\n    position: absolute;\r\n    z-index: -3;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 1000px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  header {\r\n    margin: 10px 40px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 40px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .upSection {\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    gap: 15px;\r\n  }\r\n\r\n  .container .players {\r\n    width: 40%;\r\n    height: 500px;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    padding: 0 10px;\r\n    border: 8px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .players .playersHeader {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .titleSquare {\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    flex-grow: 4;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh {\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    padding: 5px 15px;\r\n    color: white;\r\n    background-color: orange;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n    width: 40%;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .container .players .playersList {\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .container .players .playersList li {\r\n    display: flex;\r\n    list-style: none;\r\n    height: 30px;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(even) {\r\n    background-color: rgb(201, 143, 41);\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(odd) {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n  .container .addNewData {\r\n    width: 40%;\r\n    height: 500px;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 0 10px;\r\n    border: 8px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader h2 {\r\n    text-align: center;\r\n  }\r\n\r\n  .container .formAddNewData {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .container .formAddNewData input {\r\n    width: 100%;\r\n    height: 30px;\r\n    color: black;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit {\r\n    width: auto;\r\n    align-self: flex-end;\r\n    padding: 0 15px;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n    background-color: orange;\r\n    border-radius: 20px;\r\n    border: 1px solid white;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .pictures {\r\n    position: absolute;\r\n    z-index: -3;\r\n    top: 0;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n.container .formAddNewData .btnSubmit:hover {\r\n  background-color: gray;\r\n}\r\n\r\n.container .formAddNewData .btnSubmit:active {\r\n  background-color: rgb(3, 60, 3);\r\n  color: white;\r\n  box-shadow: 0 5px rgb(36, 32, 32);\r\n  transform: translateY(3px);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,+CAA+C;EAC/C,YAAY;EACZ,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;;EAEtB,yEAAyE;AAC3E;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,8BAA8B;EAC9B,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,iCAAiC;EACjC,0BAA0B;AAC5B;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,aAAa;EACb,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE;IACE,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;IAClB,cAAc;IACd,aAAa;EACf;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;EACX;;EAEA;IACE,UAAU;IACV,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,kCAAkC;EACpC;;EAEA;IACE,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,8BAA8B;IAC9B,UAAU;IACV,gBAAgB;EAClB;;EAEA;IACE,uBAAuB;IACvB,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,gCAAgC;IAChC,gBAAgB;IAChB,YAAY;IACZ,wBAAwB;IACxB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;IACd,mBAAmB;EACrB;;EAEA;IACE,2BAA2B;IAC3B,iCAAiC;IACjC,YAAY;EACd;;EAEA;IACE,iCAAiC;IACjC,YAAY;IACZ,iCAAiC;IACjC,0BAA0B;EAC5B;;EAEA;IACE,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,mCAAmC;EACrC;;EAEA;IACE,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,kCAAkC;EACpC;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,sBAAsB;IACtB,QAAQ;IACR,YAAY;EACd;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,WAAW;IACX,oBAAoB;IACpB,cAAc;IACd,iCAAiC;IACjC,YAAY;IACZ,wBAAwB;IACxB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,cAAc;IACd,mBAAmB;EACrB;;EAEA;IACE,2BAA2B;IAC3B,iCAAiC;IACjC,YAAY;EACd;;EAEA;IACE,iCAAiC;IACjC,YAAY;IACZ,iCAAiC;IACjC,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,WAAW;IACX,cAAc;EAChB;AACF;;AAEA;EACE;IACE,4BAA4B;EAC9B;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,UAAU;IACV,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,kCAAkC;EACpC;;EAEA;IACE,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,8BAA8B;IAC9B,UAAU;IACV,gBAAgB;EAClB;;EAEA;IACE,uBAAuB;IACvB,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,iCAAiC;IACjC,iBAAiB;IACjB,YAAY;IACZ,wBAAwB;IACxB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,2BAA2B;IAC3B,iCAAiC;IACjC,YAAY;EACd;;EAEA;IACE,iCAAiC;IACjC,YAAY;IACZ,iCAAiC;IACjC,0BAA0B;EAC5B;;EAEA;IACE,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,mCAAmC;EACrC;;EAEA;IACE,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,kCAAkC;EACpC;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,sBAAsB;IACtB,SAAS;IACT,aAAa;EACf;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,WAAW;IACX,oBAAoB;IACpB,eAAe;IACf,iCAAiC;IACjC,YAAY;IACZ,wBAAwB;IACxB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,2BAA2B;IAC3B,iCAAiC;IACjC,YAAY;EACd;;EAEA;IACE,iCAAiC;IACjC,YAAY;IACZ,iCAAiC;IACjC,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,WAAW;IACX,YAAY;EACd;AACF;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,iCAAiC;EACjC,0BAA0B;AAC5B","sourcesContent":["@import url('https://fonts.cdnfonts.com/css/fredericka-the-great');\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: 'Fredericka the Great', sans-serif;\r\n  color: white;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: #000;\r\n\r\n  /* background-image: linear-gradient(rgb(54, 1, 1), rgb(111, 111, 40)); */\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.upSection {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 0;\r\n  margin-top: 10px;\r\n}\r\n\r\n.container .players .playersHeader .btnRefresh {\r\n  box-shadow: 2px 2px 5px 2px #888;\r\n  padding: 5px 15px;\r\n}\r\n\r\n.container .players .playersHeader .btnRefresh:hover {\r\n  background-color: gray;\r\n}\r\n\r\n.container .players .playersHeader .btnRefresh:active {\r\n  background-color: rgb(3, 60, 3);\r\n  color: white;\r\n  box-shadow: 0 5px rgb(36, 32, 32);\r\n  transform: translateY(3px);\r\n}\r\n\r\n.container .players .playersList {\r\n  border: 2px solid #000;\r\n  width: 100%;\r\n  margin: 5px 0;\r\n  height: 100vh;\r\n  overflow: auto;\r\n  background-color: white;\r\n}\r\n\r\n.container .players .playersList li {\r\n  display: flex;\r\n  list-style: none;\r\n  height: 30px;\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  body {\r\n    background-repeat: repeat;\r\n  }\r\n\r\n  header {\r\n    text-align: center;\r\n    margin: 0 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .upSection {\r\n    flex-direction: column-reverse;\r\n    align-items: center;\r\n    gap: 15px;\r\n  }\r\n\r\n  .container .players {\r\n    width: 90%;\r\n    height: 200px;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    padding: 0 20px;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .players .playersHeader {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .titleSquare {\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    letter-spacing: 0.08em;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh {\r\n    width: 35%;\r\n    box-shadow: 2px 2px 5px 2px #888;\r\n    padding: 2px 2px;\r\n    color: white;\r\n    background-color: orange;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 8px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .container .players .playersList {\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .container .players .playersList li {\r\n    display: flex;\r\n    list-style: none;\r\n    height: 20px;\r\n    align-items: center;\r\n    padding: 0 2px;\r\n    font-weight: bold;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(even) {\r\n    background-color: rgb(201, 143, 41);\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(odd) {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n  .container .addNewData {\r\n    width: 90%;\r\n    height: 120px;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 0 40px;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 2px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .formAddNewData {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    padding: 2px;\r\n  }\r\n\r\n  .container .formAddNewData input {\r\n    width: 100%;\r\n    height: 20px;\r\n    color: black;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit {\r\n    width: auto;\r\n    align-self: flex-end;\r\n    padding: 0 5px;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n    background-color: orange;\r\n    border-radius: 20px;\r\n    border: 1px solid white;\r\n    font-weight: bold;\r\n    font-size: 8px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .pictures {\r\n    position: absolute;\r\n    z-index: -3;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 1000px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  header {\r\n    margin: 10px 40px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 40px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .upSection {\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    gap: 15px;\r\n  }\r\n\r\n  .container .players {\r\n    width: 40%;\r\n    height: 500px;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    padding: 0 10px;\r\n    border: 8px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .players .playersHeader {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 0;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .titleSquare {\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    flex-grow: 4;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh {\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    padding: 5px 15px;\r\n    color: white;\r\n    background-color: orange;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n    width: 40%;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .players .playersHeader .btnRefresh:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .container .players .playersList {\r\n    border: 2px solid white;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    background-color: white;\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .container .players .playersList li {\r\n    display: flex;\r\n    list-style: none;\r\n    height: 30px;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(even) {\r\n    background-color: rgb(201, 143, 41);\r\n  }\r\n\r\n  .container .players .playersList li:nth-child(odd) {\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n\r\n  .container .addNewData {\r\n    width: 40%;\r\n    height: 500px;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 0 10px;\r\n    border: 8px solid white;\r\n    border-radius: 20px;\r\n    box-shadow: 2px 2px 5px 2px orange;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    padding: 0 5px;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container .addNewData .addNewDataHeader h2 {\r\n    text-align: center;\r\n  }\r\n\r\n  .container .formAddNewData {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .container .formAddNewData input {\r\n    width: 100%;\r\n    height: 30px;\r\n    color: black;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit {\r\n    width: auto;\r\n    align-self: flex-end;\r\n    padding: 0 15px;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n    background-color: orange;\r\n    border-radius: 20px;\r\n    border: 1px solid white;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 4px;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:hover {\r\n    background-color: orangered;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    color: white;\r\n  }\r\n\r\n  .container .formAddNewData .btnSubmit:active {\r\n    background-color: rgb(24, 16, 49);\r\n    color: white;\r\n    box-shadow: 2px 2px 5px 2px white;\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  .pictures {\r\n    position: absolute;\r\n    z-index: -3;\r\n    top: 0;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n.container .formAddNewData .btnSubmit:hover {\r\n  background-color: gray;\r\n}\r\n\r\n.container .formAddNewData .btnSubmit:active {\r\n  background-color: rgb(3, 60, 3);\r\n  color: white;\r\n  box-shadow: 0 5px rgb(36, 32, 32);\r\n  transform: translateY(3px);\r\n}\r\n"],"sourceRoot":""}]);
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
      data.result.sort((a, b) => a.score - b.score).forEach((item) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlDQUFpQyxLQUFLLFdBQVcsZ0ZBQWdGLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEs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SUFBSSxXQUFXO0FBQ2hELE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFTO0FBQ2I7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9hc3NldHMvaW1hZ2VzL0dhbWVCYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9hc3NldHMvaW1hZ2VzL0xlYWRlcmJvYXJkLmpwZyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvYXBpTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3VwZGF0ZURvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvZnJlZGVyaWNrYS10aGUtZ3JlYXQpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyZWRlcmlja2EgdGhlIEdyZWF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcblxcclxcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig1NCwgMSwgMSksIHJnYigxMTEsIDExMSwgNDApKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBTZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaCB7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggIzg4ODtcXHJcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIgLmJ0blJlZnJlc2g6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCA2MCwgMyk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCByZ2IoMzYsIDMyLCAzMik7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3Qge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51cFNlY3Rpb24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCBvcmFuZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZVNxdWFyZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIgLmJ0blJlZnJlc2gge1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggIzg4ODtcXHJcXG4gICAgcGFkZGluZzogMnB4IDJweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIgLmJ0blJlZnJlc2g6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNiwgNDkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiA1cHggMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMCAycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAxNDMsIDQxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCBvcmFuZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5hZGROZXdEYXRhIC5hZGROZXdEYXRhSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgcGFkZGluZzogMCAycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgLmJ0blN1Ym1pdCB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNiwgNDkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGljdHVyZXMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IC0zO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIG1hcmdpbjogMTBweCA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51cFNlY3Rpb24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyB7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICBib3JkZXI6IDhweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IG9yYW5nZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlU3F1YXJlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmbGV4LWdyb3c6IDQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTYsIDQ5KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3Qge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCBsaTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAxNDMsIDQxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCBvcmFuZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5hZGROZXdEYXRhIC5hZGROZXdEYXRhSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmFkZE5ld0RhdGEgLmFkZE5ld0RhdGFIZWFkZXIgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNiwgNDkpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGljdHVyZXMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IC0zO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgLmJ0blN1Ym1pdDphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDYwLCAzKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IHJnYigzNiwgMzIsIDMyKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLCtDQUErQztFQUMvQyxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSx5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c0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsaUNBQWlDO0lBQ2pDLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL2ZyZWRlcmlja2EtdGhlLWdyZWF0Jyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmVkZXJpY2thIHRoZSBHcmVhdCcsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG5cXHJcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoNTQsIDEsIDEpLCByZ2IoMTExLCAxMTEsIDQwKSk7ICovXFxyXFxufVxcclxcblxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwU2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIgLmJ0blJlZnJlc2gge1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4ICM4ODg7XFxyXFxuICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgNjAsIDMpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggcmdiKDM2LCAzMiwgMzIpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaDIge1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXBTZWN0aW9uIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggb3JhbmdlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGVTcXVhcmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoIHtcXHJcXG4gICAgd2lkdGg6IDM1JTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4ICM4ODg7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAycHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIC5idG5SZWZyZXNoOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTYsIDQ5KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3Qge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMTQzLCA0MSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5hZGROZXdEYXRhIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggb3JhbmdlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuYWRkTmV3RGF0YSAuYWRkTmV3RGF0YUhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgLmJ0blN1Ym1pdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0OmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTYsIDQ5KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpY3R1cmVzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAtMztcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBtYXJnaW46IDEwcHggNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaDIge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXBTZWN0aW9uIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgYm9yZGVyOiA4cHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCBvcmFuZ2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZVNxdWFyZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZmxleC1ncm93OiA0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaCB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNIZWFkZXIgLmJ0blJlZnJlc2g6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0hlYWRlciAuYnRuUmVmcmVzaDphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDE2LCA0OSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDVweCAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWluZXIgLnBsYXllcnMgLnBsYXllcnNMaXN0IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAucGxheWVycyAucGxheWVyc0xpc3QgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMTQzLCA0MSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5wbGF5ZXJzIC5wbGF5ZXJzTGlzdCBsaTpudGgtY2hpbGQob2RkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5hZGROZXdEYXRhIHtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggb3JhbmdlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuYWRkTmV3RGF0YSAuYWRkTmV3RGF0YUhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5hZGROZXdEYXRhIC5hZGROZXdEYXRhSGVhZGVyIGgyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0IHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDJweCB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhaW5lciAuZm9ybUFkZE5ld0RhdGEgLmJ0blN1Ym1pdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0OmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTYsIDQ5KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBpY3R1cmVzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAtMztcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIC5mb3JtQWRkTmV3RGF0YSAuYnRuU3VibWl0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLmZvcm1BZGROZXdEYXRhIC5idG5TdWJtaXQ6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCA2MCwgMyk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCByZ2IoMzYsIDMyLCAzMik7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9HYW1lQmFja2dyb3VuZC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9MZWFkZXJib2FyZC5qcGdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9HYW1lQmFja2dyb3VuZC5qcGcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvTGVhZGVyYm9hcmQuanBnJztcbmltcG9ydCB1cGRhdGVEb20gZnJvbSAnLi9tb2R1bGVzL3VwZGF0ZURvbS5qcyc7XG5cbnVwZGF0ZURvbSgpO1xuIiwiY29uc3QgdXJpID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzL3ZRUHkyeERuOGx0RG5DUk16eHFaL3Njb3Jlcy8nO1xuXG5jb25zdCBBZGRQbGF5ZXIgPSBhc3luYyAoZGF0YSA9IHt9KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJpLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgR2V0UGxheWVycyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmkpO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IHsgQWRkUGxheWVyLCBHZXRQbGF5ZXJzIH07IiwiaW1wb3J0IHsgQWRkUGxheWVyLCBHZXRQbGF5ZXJzIH0gZnJvbSAnLi9hcGlNYW5hZ2VtZW50LmpzJztcblxuY29uc3QgYnRuUmVmcmVzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5SZWZyZXNoJyk7XG5jb25zdCBmb3JtQWRkTmV3RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQWRkTmV3RGF0YScpO1xuY29uc3QgdHh0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG5jb25zdCB0eHRTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xuY29uc3QgcGljdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWN0dXJlcycpO1xuY29uc3QgaW1nQkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuY29uc3QgdXBkYXRlRG9tID0gKCkgPT4ge1xuICBsZXQgY0F1eCA9ICcnO1xuICBHZXRQbGF5ZXJzKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZGF0YS5yZXN1bHQuc29ydCgoYSwgYikgPT4gYS5zY29yZSAtIGIuc2NvcmUpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY0F1eCArPSBgPGxpPiR7aXRlbS51c2VyfTogJHtpdGVtLnNjb3JlfTwvbGk+YDtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcnNMaXN0JykuaW5uZXJIVE1MID0gY0F1eDtcbiAgICB9KTtcbn07XG5cbmltZ0JHLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltYWdlcy9HYW1lQmFja2dyb3VuZC5qcGcnKTtcbmltZ0JHLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0dhbWUgQmFja2dyb3VuZCcpO1xucGljdHVyZS5hcHBlbmRDaGlsZChpbWdCRyk7XG5pZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpLm1hdGNoZXMpIHtcbiAgcGljdHVyZS5hcHBlbmRDaGlsZChpbWdCRy5jbG9uZU5vZGUodHJ1ZSkpO1xufVxuXG5idG5SZWZyZXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyc0xpc3QnKS5pbm5lckhUTUwgPSAnJztcbiAgdXBkYXRlRG9tKCk7XG59KTtcblxuZm9ybUFkZE5ld0RhdGEuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgbGV0IG5ld0VyciA9IGZhbHNlO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKHR4dE5hbWUudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgIG5ld0VyciA9IHRydWU7XG4gIH1cbiAgaWYgKHR4dFNjb3JlLnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICBuZXdFcnIgPSB0cnVlO1xuICB9IGVsc2UgaWYgKE51bWJlci5pc05hTih0eHRTY29yZS52YWx1ZS50cmltKCkpKSB7XG4gICAgbmV3RXJyID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICghbmV3RXJyKSB7XG4gICAgY29uc3QgYVBsYXllciA9IHtcbiAgICAgIHVzZXI6IHR4dE5hbWUudmFsdWUsXG4gICAgICBzY29yZTogTnVtYmVyKHR4dFNjb3JlLnZhbHVlKSxcbiAgICB9O1xuICAgIEFkZFBsYXllcihhUGxheWVyKVxuICAgICAgLnRoZW4oKCkgPT4gZm9ybUFkZE5ld0RhdGEuc3VibWl0KCkpO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlRG9tOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==