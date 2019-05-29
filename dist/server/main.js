(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RouterModuleNgFactory, RenderType_ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_0, View_ɵEmptyOutletComponent_Host_0, ɵEmptyOutletComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModuleNgFactory", function() { return RouterModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵEmptyOutletComponent", function() { return RenderType_ɵEmptyOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵEmptyOutletComponent_0", function() { return View_ɵEmptyOutletComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵEmptyOutletComponent_Host_0", function() { return View_ɵEmptyOutletComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵEmptyOutletComponentNgFactory", function() { return ɵEmptyOutletComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var RouterModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [ɵEmptyOutletComponentNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]])]); });

var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });

function View_ɵEmptyOutletComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵEmptyOutletComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponent"], [], null, null)], null, null); }
var ɵEmptyOutletComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponent"], View_ɵEmptyOutletComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/alpha/alpha.component.css.ngstyle.js":
/*!******************************************************!*\
  !*** ./src/app/alpha/alpha.component.css.ngstyle.js ***!
  \******************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FscGhhL2FscGhhLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/alpha/alpha.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/alpha/alpha.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_AlphaComponent, View_AlphaComponent_0, View_AlphaComponent_Host_0, AlphaComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AlphaComponent", function() { return RenderType_AlphaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AlphaComponent_0", function() { return View_AlphaComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AlphaComponent_Host_0", function() { return View_AlphaComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaComponentNgFactory", function() { return AlphaComponentNgFactory; });
/* harmony import */ var _alpha_component_css_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alpha.component.css.ngstyle */ "./src/app/alpha/alpha.component.css.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chat_renderer_chat_renderer_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-renderer/chat-renderer.component.ngfactory */ "./src/app/alpha/chat-renderer/chat-renderer.component.ngfactory.js");
/* harmony import */ var _chat_renderer_chat_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-renderer/chat-renderer.component */ "./src/app/alpha/chat-renderer/chat-renderer.component.ts");
/* harmony import */ var _alpha_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alpha.component */ "./src/app/alpha/alpha.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _message_processor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message-processor.service */ "./src/app/message-processor.service.ts");
/* harmony import */ var _biliws_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../biliws.service */ "./src/app/biliws.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_AlphaComponent = [_alpha_component_css_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AlphaComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_AlphaComponent, data: {} });

function View_AlphaComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { renderer: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "yt-live-chat-renderer", [], null, [[null, "onawake"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onawake" === en)) {
        var pd_0 = (_co.onload() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _chat_renderer_chat_renderer_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ChatRendererComponent_0"], _chat_renderer_chat_renderer_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ChatRendererComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, [[1, 4], ["renderer", 4]], 0, _chat_renderer_chat_renderer_component__WEBPACK_IMPORTED_MODULE_3__["ChatRendererComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { displayMode: [0, "displayMode"] }, { onawake: "onawake" })], function (_ck, _v) { var currVal_0 = 3; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AlphaComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-alpha", [], null, null, null, View_AlphaComponent_0, RenderType_AlphaComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _alpha_component__WEBPACK_IMPORTED_MODULE_4__["AlphaComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"], _message_processor_service__WEBPACK_IMPORTED_MODULE_7__["MessageProcessorService"], _biliws_service__WEBPACK_IMPORTED_MODULE_8__["BiliwsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AlphaComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-alpha", _alpha_component__WEBPACK_IMPORTED_MODULE_4__["AlphaComponent"], View_AlphaComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/alpha/alpha.component.ts":
/*!******************************************!*\
  !*** ./src/app/alpha/alpha.component.ts ***!
  \******************************************/
/*! exports provided: AlphaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaComponent", function() { return AlphaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _message_processor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message-processor.service */ "./src/app/message-processor.service.ts");
/* harmony import */ var _chat_renderer_chat_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-renderer/chat-renderer.component */ "./src/app/alpha/chat-renderer/chat-renderer.component.ts");
/* harmony import */ var _biliws_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../biliws.service */ "./src/app/biliws.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__);









var AlphaComponent = /** @class */ (function () {
    function AlphaComponent(route, title, proc, bili, http, translate) {
        this.route = route;
        this.title = title;
        this.proc = proc;
        this.bili = bili;
        this.http = http;
        this.translate = translate;
    }
    AlphaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentRoomId = this.route.snapshot.params['id'];
        this.translate.get('ROOM').subscribe(function (value) {
            _this.title.setTitle(value + ' ' + _this.currentRoomId);
        });
        if (this.route.snapshot.queryParamMap.has('loadAvatar')) {
            this.proc.loadAvatar = this.route.snapshot.queryParamMap.get('loadAvatar').toLowerCase() === 'true';
        }
        if (this.route.snapshot.queryParamMap.has('levelFilter')) {
            this.proc.userLevelFilter = Number(this.route.snapshot.queryParamMap.get('levelFilter'));
        }
        if (this.route.snapshot.queryParamMap.has('hideGiftDanmaku')) {
            this.proc.hideGiftDanmaku = this.route.snapshot.queryParamMap.get('hideGiftDanmaku').toLowerCase() === 'true';
        }
        if (this.route.snapshot.queryParamMap.has('showGift')) {
            this.proc.showGift = this.route.snapshot.queryParamMap.get('showGift').toLowerCase() === 'true';
        }
        if (this.route.snapshot.queryParamMap.has('giftOnly')) {
            this.renderer.displayMode = this.route.snapshot.queryParamMap.get('giftOnly').toLowerCase() === 'true' ? 2 : 3;
        }
        if (this.route.snapshot.queryParamMap.has('wordFilter')) {
            this.proc.wordFilter = this.proc.wordFilter.concat(String(this.route.snapshot.queryParamMap.get('wordFilter')).split(','));
        }
        if (this.route.snapshot.queryParamMap.has('blackList')) {
            this.proc.blackList = this.proc.blackList.concat(String(this.route.snapshot.queryParamMap.get('blackList')).split(',').map(function (x) { return Number(x); }));
        }
        if (this.route.snapshot.queryParamMap.has('groupSimilar')) {
            this.renderer.groupSimilar = this.route.snapshot.queryParamMap.get('groupSimilar').toLowerCase() === 'true';
        }
        if (this.route.snapshot.queryParamMap.has('pure')) {
            this.proc.pure = this.route.snapshot.queryParamMap.get('pure').toLowerCase() === 'true';
        }
        if (this.route.snapshot.queryParamMap.has('minGiftValue')) {
            this.proc.minGiftValue = Number(this.route.snapshot.queryParamMap.get('minGiftValue'));
        }
        if (this.route.snapshot.queryParamMap.has('silverGiftRatio')) {
            this.proc.silverGiftRatio = Number(this.route.snapshot.queryParamMap.get('silverGiftRatio'));
        }
        if (this.route.snapshot.queryParamMap.has('showJP')) {
            this.proc.showJP = this.route.snapshot.queryParamMap.get('showJP').toLowerCase() === 'true';
        }
    };
    AlphaComponent.prototype.onload = function () {
        var _this = this;
        if (this.currentRoomId <= 0) {
            this.translate.get('IDFORMATERROR').subscribe(function (value) {
                _this.renderer.sendSystemInfo(value);
            });
            return;
        }
        if (this.proc.pure) {
            this.start(this.currentRoomId);
        }
        else {
            this.translate.get('GETROOMINFO').subscribe(function (value) {
                _this.renderer.sendSystemInfo(value);
            });
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].api_server + "/stat/" + this.currentRoomId).subscribe(function (x) {
                _this.bili.ownerId = x.uid;
                if (x.config) {
                    _this.proc.loadAvatar = x.config.loadAvatar || _this.proc.loadAvatar;
                    _this.proc.userLevelFilter = x.config.levelFilter || _this.proc.userLevelFilter;
                    _this.proc.hideGiftDanmaku = x.config.hideGiftDanmaku || _this.proc.hideGiftDanmaku;
                    _this.proc.showGift = x.config.showGift || _this.proc.showGift;
                    _this.proc.minGiftValue = x.config.minGiftValue || _this.proc.minGiftValue;
                    _this.proc.silverGiftRatio = x.config.silverGiftRatio || _this.proc.silverGiftRatio;
                    _this.proc.wordFilter = _this.proc.wordFilter.concat(x.config.wordFilter || []);
                    _this.proc.blackList = _this.proc.blackList.concat(x.config.blackList || []);
                    _this.proc.customEmotions = x.config.customEmotions || [];
                    _this.proc.customGiftLevel = x.config.customGiftLevel || _this.proc.customGiftLevel;
                    _this.proc.customGiftLevel.sort(function (a, b) { return b.value - a.value; }); // sort from large to small
                    _this.renderer.displayMode = x.config.displayMode || _this.renderer.displayMode;
                    _this.renderer.groupSimilar = x.config.groupSimilar || _this.renderer.groupSimilar;
                    _this.renderer.groupSimilarWindow = x.config.groupSimilarWindow || _this.renderer.groupSimilarWindow;
                    _this.renderer.maxDammakuNum = x.config.maxDammakuNumber || _this.renderer.maxDammakuNum;
                }
                _this.start(x.room_id);
            }, function (e) {
                _this.translate.get('ROOMINFORAWID').subscribe(function (value) {
                    _this.renderer.sendSystemInfo(value);
                });
                _this.start(_this.currentRoomId);
            });
        }
    };
    AlphaComponent.prototype.start = function (realRoomId) {
        var _this = this;
        this.translate.get('CONNECTING').subscribe(function (value) {
            _this.renderer.sendSystemInfo(value + realRoomId + '...');
        });
        this.bili.connect(Number(realRoomId)).subscribe(function (message) {
            if (message.type === 'connected') {
                _this.translate.get('CONNECTED').subscribe(function (value) {
                    _this.renderer.sendSystemInfo(value);
                });
                if (_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].official) {
                    // this.renderer.sendSystemInfo('你正在使用公共服务器提供的服务，为了更高的稳定性，建议使用本地部署版本。详情访问https://bilichat.3shain.com');
                }
            }
            else {
                _this.renderer.sendDanmaku(message);
            }
        }, function (e) {
            if (e.target.readyState === WebSocket.CLOSED) {
                _this.translate.get('CONNECTCLOSED').subscribe(function (value) {
                    _this.renderer.sendSystemInfo(value);
                });
                setTimeout(function () { return _this.start(realRoomId); }, 5000);
            }
        }, function () {
            _this.translate.get('DISCONNECTED').subscribe(function (value) {
                _this.renderer.sendSystemInfo(value);
            });
            _this.start(realRoomId); // 重连
        });
    };
    return AlphaComponent;
}());



/***/ }),

/***/ "./src/app/alpha/chat-renderer/chat-renderer.component.css.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/alpha/chat-renderer/chat-renderer.component.css.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["yt-live-chat-renderer[_ngcontent-%COMP%] {\n    font-family: 'Microsoft YaHei';\n    font-size: 13px;\n    --yt-emoji-picker-renderer-height: 30%;\n    --yt-button-default-text-color: var(--yt-live-chat-button-default-text-color);\n    --yt-button-default-background-color: var(--yt-live-chat-button-default-background-color);\n    --yt-button-dark-text-color: var(--yt-live-chat-button-dark-text-color);\n    --yt-button-dark-background-color: var(--yt-live-chat-button-dark-background-color);\n    --yt-button-payment-background-color: var(--yt-live-chat-sponsor-color);\n}\n\nyt-live-chat-paid-message-renderer[_ngcontent-%COMP%] {\n    position: relative;\n    display: block;\n    padding: 4px 24px;\n    font-size: 15px;\n    --yt-live-chat-paid-message-background-color: var(--yt-live-chat-paid-message-primary-color);\n    --yt-live-chat-paid-message-header-background-color: var(--yt-live-chat-paid-message-secondary-color);\n    --yt-live-chat-text-input-field-placeholder-color: var(--yt-live-chat-paid-message-color);\n    --yt-live-chat-item-timestamp-display: var(--yt-live-chat-paid-message-timestamp-display, none);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxwaGEvY2hhdC1yZW5kZXJlci9jaGF0LXJlbmRlcmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsNkVBQTZFO0lBQzdFLHlGQUF5RjtJQUN6Rix1RUFBdUU7SUFDdkUsbUZBQW1GO0lBQ25GLHVFQUF1RTtBQUMzRTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0RkFBNEY7SUFDNUYscUdBQXFHO0lBQ3JHLHlGQUF5RjtJQUN6RiwrRkFBK0Y7QUFDbkciLCJmaWxlIjoic3JjL2FwcC9hbHBoYS9jaGF0LXJlbmRlcmVyL2NoYXQtcmVuZGVyZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxueXQtbGl2ZS1jaGF0LXJlbmRlcmVyIHtcbiAgICBmb250LWZhbWlseTogJ01pY3Jvc29mdCBZYUhlaSc7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC0teXQtZW1vamktcGlja2VyLXJlbmRlcmVyLWhlaWdodDogMzAlO1xuICAgIC0teXQtYnV0dG9uLWRlZmF1bHQtdGV4dC1jb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LWJ1dHRvbi1kZWZhdWx0LXRleHQtY29sb3IpO1xuICAgIC0teXQtYnV0dG9uLWRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LWJ1dHRvbi1kZWZhdWx0LWJhY2tncm91bmQtY29sb3IpO1xuICAgIC0teXQtYnV0dG9uLWRhcmstdGV4dC1jb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LWJ1dHRvbi1kYXJrLXRleHQtY29sb3IpO1xuICAgIC0teXQtYnV0dG9uLWRhcmstYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LWJ1dHRvbi1kYXJrLWJhY2tncm91bmQtY29sb3IpO1xuICAgIC0teXQtYnV0dG9uLXBheW1lbnQtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LXNwb25zb3ItY29sb3IpO1xufVxuXG55dC1saXZlLWNoYXQtcGFpZC1tZXNzYWdlLXJlbmRlcmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogNHB4IDI0cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIC0teXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15dC1saXZlLWNoYXQtcGFpZC1tZXNzYWdlLXByaW1hcnktY29sb3IpO1xuICAgIC0teXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1zZWNvbmRhcnktY29sb3IpO1xuICAgIC0teXQtbGl2ZS1jaGF0LXRleHQtaW5wdXQtZmllbGQtcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtY29sb3IpO1xuICAgIC0teXQtbGl2ZS1jaGF0LWl0ZW0tdGltZXN0YW1wLWRpc3BsYXk6IHZhcigtLXl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtdGltZXN0YW1wLWRpc3BsYXksIG5vbmUpO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/alpha/chat-renderer/chat-renderer.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/alpha/chat-renderer/chat-renderer.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_ChatRendererComponent, View_ChatRendererComponent_0, View_ChatRendererComponent_Host_0, ChatRendererComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChatRendererComponent", function() { return RenderType_ChatRendererComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChatRendererComponent_0", function() { return View_ChatRendererComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChatRendererComponent_Host_0", function() { return View_ChatRendererComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRendererComponentNgFactory", function() { return ChatRendererComponentNgFactory; });
/* harmony import */ var _chat_renderer_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-renderer.component.css.shim.ngstyle */ "./src/app/alpha/chat-renderer/chat-renderer.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _message_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message/message.component.ngfactory */ "./src/app/alpha/message/message.component.ngfactory.js");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message/message.component */ "./src/app/alpha/message/message.component.ts");
/* harmony import */ var _biliws_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../biliws.service */ "./src/app/biliws.service.ts");
/* harmony import */ var _paid_message_paid_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../paid-message/paid-message.component.ngfactory */ "./src/app/alpha/paid-message/paid-message.component.ngfactory.js");
/* harmony import */ var _paid_message_paid_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../paid-message/paid-message.component */ "./src/app/alpha/paid-message/paid-message.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _chat_renderer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-renderer.component */ "./src/app/alpha/chat-renderer/chat-renderer.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_ChatRendererComponent = [_chat_renderer_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChatRendererComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChatRendererComponent, data: {} });

function View_ChatRendererComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "yt-live-chat-text-message-renderer", [], null, null, null, _message_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MessageComponent_0"], _message_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"], [_biliws_service__WEBPACK_IMPORTED_MODULE_4__["BiliwsService"]], { item: [0, "item"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ChatRendererComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "yt-live-chat-paid-message-renderer", [], null, null, null, _paid_message_paid_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_LegacyPaidMessageComponent_0"], _paid_message_paid_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_LegacyPaidMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _paid_message_paid_message_component__WEBPACK_IMPORTED_MODULE_6__["LegacyPaidMessageComponent"], [], { item: [0, "item"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ChatRendererComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatRendererComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatRendererComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.type; _ck(_v, 1, 0, currVal_0); var currVal_1 = "danmaku"; _ck(_v, 3, 0, currVal_1); var currVal_2 = "gift"; _ck(_v, 5, 0, currVal_2); }, null); }
function View_ChatRendererComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "style-scope yt-live-chat-item-list-render yt-live-chat-renderer"], ["id", "items"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatRendererComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.danmakuList; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ChatRendererComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "yt-live-chat-renderer", [], null, null, null, View_ChatRendererComponent_0, RenderType_ChatRendererComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chat_renderer_component__WEBPACK_IMPORTED_MODULE_8__["ChatRendererComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChatRendererComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("yt-live-chat-renderer", _chat_renderer_component__WEBPACK_IMPORTED_MODULE_8__["ChatRendererComponent"], View_ChatRendererComponent_Host_0, { maxDammakuNum: "maxDammakuNum", displayMode: "displayMode", groupSimilar: "groupSimilar", groupSimilarWindow: "groupSimilarWindow" }, { onawake: "onawake" }, []);



/***/ }),

/***/ "./src/app/alpha/chat-renderer/chat-renderer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/alpha/chat-renderer/chat-renderer.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRendererComponent", function() { return ChatRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_danmaku_def__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/danmaku.def */ "./src/app/danmaku.def.ts");



var ChatRendererComponent = /** @class */ (function () {
    function ChatRendererComponent(plat) {
        this.plat = plat;
        this.maxDammakuNum = 100;
        this.displayMode = 3;
        this.groupSimilar = true;
        this.groupSimilarWindow = 5;
        this.danmakuList = [];
        this.waitForRendering = [];
        this.groupSimilarCache = [];
        this.onawake = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChatRendererComponent.prototype.onFrame = function () {
        if (Date.now() - this.lastRenderInvoke > 1000) { // 窗口不在active状态时，此方法不会被调用。
            this.waitForRendering = [];
            // this.sendSystemInfo('窗口已恢复激活');
        }
        this.lastRenderInvoke = Date.now();
        if (this.waitForRendering.length > 0) {
            if (Date.now() - this.lastRenderPush >= (1000.0 / this.waitForRendering.length)) {
                this.lastRenderPush = Date.now();
                while (this.danmakuList.length > this.maxDammakuNum) {
                    this.danmakuList.shift();
                }
                this.danmakuList.push(this.waitForRendering.shift());
            }
        }
        requestAnimationFrame(this.onFrame.bind(this));
    };
    ChatRendererComponent.prototype.ngOnInit = function () {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.plat)) {
            return;
        }
        requestAnimationFrame(this.awake.bind(this));
    };
    ChatRendererComponent.prototype.awake = function () {
        this.onawake.emit();
        this.lastRenderInvoke = Date.now();
        this.lastRenderPush = Date.now();
        requestAnimationFrame(this.onFrame.bind(this));
    };
    ChatRendererComponent.prototype.sendSystemInfo = function (msg, force) {
        if (force === void 0) { force = false; }
        this.sendDanmaku(new _app_danmaku_def__WEBPACK_IMPORTED_MODULE_2__["DanmakuMessage"](-1, 'BILICHAT', msg, 0, true, undefined, 'assets/logo_icon.png'), force);
    };
    ChatRendererComponent.prototype.sendDanmaku = function (msg, force) {
        if (force === void 0) { force = false; }
        if ((this.displayMode & msg.mode) === 0 && msg.uid !== -1) {
            return;
        }
        if (msg.type === 'danmaku' && msg.uid > 0) {
            for (var _i = 0, _a = this.groupSimilarCache; _i < _a.length; _i++) {
                var c = _a[_i];
                if (this.groupSimilar
                    && (c.message.indexOf(msg.message) !== -1 || msg.message.indexOf(c.message) !== -1)
                    && (Math.abs(c.message.length - msg.message.length) < Math.min(c.message.length, msg.message.length))) {
                    c.repeat++;
                    return; // 如果存在相似元素,会在这里被截断
                }
            }
            this.groupSimilarCache.unshift(msg);
            while (this.groupSimilarCache.length > this.groupSimilarWindow) {
                this.groupSimilarCache.pop();
            }
        }
        if (force) {
            this.danmakuList.push(msg);
        }
        else {
            this.waitForRendering.push(msg);
        }
    };
    return ChatRendererComponent;
}());



/***/ }),

/***/ "./src/app/alpha/image/image.component.css.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/alpha/image/image.component.css.ngstyle.js ***!
  \************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["yt-img-shadow.no-transition {\n    opacity: 1;\n    transition: none;\n}\n\nyt-img-shadow[loaded] {\n    opacity: 1;\n}\n\nyt-img-shadow {\n    display: inline-block;\n    opacity: 0;\n    transition: opacity 0.2s;\n    flex: none;\n}\n\nimg.yt-img-shadow {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n}\n\nimg.yt-img-shadow {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    max-height: none;\n    max-width: 100%;\n    border-radius: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxwaGEvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLHdCQUF3QjtJQUd4QixVQUFVO0FBQ2Q7O0FBR0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FscGhhL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ5dC1pbWctc2hhZG93Lm5vLXRyYW5zaXRpb24ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxueXQtaW1nLXNoYWRvd1tsb2FkZWRdIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG55dC1pbWctc2hhZG93IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgIGZsZXg6IG5vbmU7XG59XG5cblxuaW1nLnl0LWltZy1zaGFkb3cge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW1nLnl0LWltZy1zaGFkb3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/alpha/image/image.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/alpha/image/image.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_ImageComponent, View_ImageComponent_0, View_ImageComponent_Host_0, ImageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ImageComponent", function() { return RenderType_ImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ImageComponent_0", function() { return View_ImageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ImageComponent_Host_0", function() { return View_ImageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponentNgFactory", function() { return ImageComponentNgFactory; });
/* harmony import */ var _image_component_css_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.component.css.ngstyle */ "./src/app/alpha/image/image.component.css.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.component */ "./src/app/alpha/image/image.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ImageComponent = [_image_component_css_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ImageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_ImageComponent, data: {} });

function View_ImageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["class", "style-scope yt-img-shadow"], ["id", "img"], ["referrerpolicy", "no-referer"]], [[8, "height", 0], [8, "width", 0], [8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.height, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.width, ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.avatarUrl, ""); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_ImageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "yt-img-shadow", [], null, null, null, View_ImageComponent_0, RenderType_ImageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _image_component__WEBPACK_IMPORTED_MODULE_2__["ImageComponent"], [], null, null)], null, null); }
var ImageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("yt-img-shadow", _image_component__WEBPACK_IMPORTED_MODULE_2__["ImageComponent"], View_ImageComponent_Host_0, { avatarUrl: "avatarUrl", height: "height", width: "width" }, {}, []);



/***/ }),

/***/ "./src/app/alpha/image/image.component.ts":
/*!************************************************!*\
  !*** ./src/app/alpha/image/image.component.ts ***!
  \************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
    }
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/alpha/message/message.component.css.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/alpha/message/message.component.css.ngstyle.js ***!
  \****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#content.yt-live-chat-text-message-renderer {\n    -ms-align-self: center;\n    align-self: center;\n    min-width: 0;\n}\n\n#emotion.yt-live-chat-text-message-renderer{\n    vertical-align: text-top;\n    height: unset !important;\n    width: unset !important;\n    max-height: 120px;\n    opacity: var(--yt-live-chat-text-message-renderer-message-message-style_-_opacity);\n}\n\n#message.yt-live-chat-text-message-renderer {\n    color: var(--yt-live-chat-primary-text-color, var(--yt-primary-text-color));\n    line-height: 16px;\n    overflow: hidden;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-word;\n    font-style: var(--yt-live-chat-text-message-renderer-message-message-style_-_font-style);\n    opacity: var(--yt-live-chat-text-message-renderer-message-message-style_-_opacity);\n}\n\n#repeat_count.yt-live-chat-text-message-renderer {\n    color: white;\n    line-height: 16px;\n    overflow: hidden;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-word;\n    font-style: var(--yt-live-chat-text-message-renderer-message-message-style_-_font-style);\n    opacity: var(--yt-live-chat-text-message-renderer-message-message-style_-_opacity);\n    \n    margin-left: 0.5em;\n    border-radius: 0.5em;\n    padding: 0 0.35em;\n    text-shadow: none !important;\n}\n\n#author-photo.yt-live-chat-text-message-renderer {\n    display: block;\n    margin-right: 16px;\n    overflow: hidden;\n    border-radius: 50%;\n    flex: none;\n}\n\nspan.yt-live-chat-text-message-renderer,\ndiv.yt-live-chat-text-message-renderer\n{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n}\n\nyt-live-chat-author-chip.yt-live-chat-text-message-renderer {\n    margin-right: 8px;\n}\n\n#author-name.yt-live-chat-author-chip {\n    box-sizing: border-box;\n    border-radius: 2px;\n    color: var(--yt-live-chat-secondary-text-color);\n    font-weight: 500;\n}\n\n#author-name.yt-live-chat-author-chip[type='member'] {\n    color: var(--yt-live-chat-sponsor-color);\n}\n\n#author-name.yt-live-chat-author-chip[type='moderator'] {\n    color: var(--yt-live-chat-moderator-color);\n}\n\nimg.yt-live-chat-author-badge-renderer,\ndiv.yt-live-chat-author-badge-renderer,\nspan.yt-live-chat-author-chip{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: transparent;\n}\n\nyt-live-chat-text-message-renderer {\n    position: relative;\n    font-size: 13px;\n    padding: 4px 24px;\n    overflow: hidden;\n    --yt-endpoint-color: var(--yt-live-chat-primary-text-color, hsl(0, 0%, 6.7%));\n    --yt-endpoint-hover-color: var(--yt-live-chat-primary-text-color, var(--yt-endpoint-color));\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n}\n\nyt-live-chat-author-badge-renderer.yt-live-chat-author-chip {\n    margin: 0 0 0 2px;\n    vertical-align: sub;\n}\n\nyt-live-chat-author-badge-renderer[type='member'] {\n    color: var(--yt-live-chat-sponsor-color, #107516);\n}\n\nyt-live-chat-author-badge-renderer[type='moderator'] {\n    color: var(--yt-live-chat-moderator-color, #5e84f1);\n}\n\nyt-live-chat-author-badge-renderer {\n    display: inline-block;\n}\n\nimg.yt-live-chat-author-badge-renderer, yt-icon.yt-live-chat-author-badge-renderer {\n    display: block;\n    width: 16px;\n    height: 16px;\n}\n\nyt-icon, .yt-icon-container.yt-icon {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    vertical-align: middle;\n    fill: currentcolor;\n    stroke: none;\n    width: var(--iron-icon-width, 24px);\n    height: var(--iron-icon-height, 24px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxwaGEvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFFdEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0ZBQWtGO0FBQ3RGOztBQUVBO0lBQ0ksMkVBQTJFO0lBQzNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsd0ZBQXdGO0lBQ3hGLGtGQUFrRjtBQUN0Rjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHdGQUF3RjtJQUN4RixrRkFBa0Y7SUFDbEYsNERBQTREO0lBQzVELGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUdsQixVQUFVO0FBQ2Q7O0FBRUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDZFQUE2RTtJQUM3RSwyRkFBMkY7SUFDM0YsYUFBYTtJQUdiLG1CQUFtQjtJQUduQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOztBQUNBO0lBQ0ksbURBQW1EO0FBQ3ZEOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBR3BCLG1CQUFtQjtJQUduQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxxQ0FBcUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9hbHBoYS9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50Lnl0LWxpdmUtY2hhdC10ZXh0LW1lc3NhZ2UtcmVuZGVyZXIge1xuICAgIC1tcy1hbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMDtcbn1cblxuI2Vtb3Rpb24ueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlcntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xuICAgIG9wYWNpdHk6IHZhcigtLXl0LWxpdmUtY2hhdC10ZXh0LW1lc3NhZ2UtcmVuZGVyZXItbWVzc2FnZS1tZXNzYWdlLXN0eWxlXy1fb3BhY2l0eSk7XG59XG5cbiNtZXNzYWdlLnl0LWxpdmUtY2hhdC10ZXh0LW1lc3NhZ2UtcmVuZGVyZXIge1xuICAgIGNvbG9yOiB2YXIoLS15dC1saXZlLWNoYXQtcHJpbWFyeS10ZXh0LWNvbG9yLCB2YXIoLS15dC1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC1zdHlsZTogdmFyKC0teXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlci1tZXNzYWdlLW1lc3NhZ2Utc3R5bGVfLV9mb250LXN0eWxlKTtcbiAgICBvcGFjaXR5OiB2YXIoLS15dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyLW1lc3NhZ2UtbWVzc2FnZS1zdHlsZV8tX29wYWNpdHkpO1xufVxuXG4jcmVwZWF0X2NvdW50Lnl0LWxpdmUtY2hhdC10ZXh0LW1lc3NhZ2UtcmVuZGVyZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC1zdHlsZTogdmFyKC0teXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlci1tZXNzYWdlLW1lc3NhZ2Utc3R5bGVfLV9mb250LXN0eWxlKTtcbiAgICBvcGFjaXR5OiB2YXIoLS15dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyLW1lc3NhZ2UtbWVzc2FnZS1zdHlsZV8tX29wYWNpdHkpO1xuICAgIC8qYmFja2dyb3VuZDogdmFyKC0teXQtbGl2ZS1jaGF0LW1lbnRpb24tYmFja2dyb3VuZC1jb2xvcik7Ki9cbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgcGFkZGluZzogMCAwLjM1ZW07XG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuI2F1dGhvci1waG90by55dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgIGZsZXg6IG5vbmU7XG59XG5cbnNwYW4ueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlcixcbmRpdi55dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyXG57XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG55dC1saXZlLWNoYXQtYXV0aG9yLWNoaXAueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbiNhdXRob3ItbmFtZS55dC1saXZlLWNoYXQtYXV0aG9yLWNoaXAge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGNvbG9yOiB2YXIoLS15dC1saXZlLWNoYXQtc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNhdXRob3ItbmFtZS55dC1saXZlLWNoYXQtYXV0aG9yLWNoaXBbdHlwZT0nbWVtYmVyJ10ge1xuICAgIGNvbG9yOiB2YXIoLS15dC1saXZlLWNoYXQtc3BvbnNvci1jb2xvcik7XG59XG5cbiNhdXRob3ItbmFtZS55dC1saXZlLWNoYXQtYXV0aG9yLWNoaXBbdHlwZT0nbW9kZXJhdG9yJ10ge1xuICAgIGNvbG9yOiB2YXIoLS15dC1saXZlLWNoYXQtbW9kZXJhdG9yLWNvbG9yKTtcbn1cblxuaW1nLnl0LWxpdmUtY2hhdC1hdXRob3ItYmFkZ2UtcmVuZGVyZXIsXG5kaXYueXQtbGl2ZS1jaGF0LWF1dGhvci1iYWRnZS1yZW5kZXJlcixcbnNwYW4ueXQtbGl2ZS1jaGF0LWF1dGhvci1jaGlwe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nOiA0cHggMjRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC0teXQtZW5kcG9pbnQtY29sb3I6IHZhcigtLXl0LWxpdmUtY2hhdC1wcmltYXJ5LXRleHQtY29sb3IsIGhzbCgwLCAwJSwgNi43JSkpO1xuICAgIC0teXQtZW5kcG9pbnQtaG92ZXItY29sb3I6IHZhcigtLXl0LWxpdmUtY2hhdC1wcmltYXJ5LXRleHQtY29sb3IsIHZhcigtLXl0LWVuZHBvaW50LWNvbG9yKSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxueXQtbGl2ZS1jaGF0LWF1dGhvci1iYWRnZS1yZW5kZXJlci55dC1saXZlLWNoYXQtYXV0aG9yLWNoaXAge1xuICAgIG1hcmdpbjogMCAwIDAgMnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG59XG5cbnl0LWxpdmUtY2hhdC1hdXRob3ItYmFkZ2UtcmVuZGVyZXJbdHlwZT0nbWVtYmVyJ10ge1xuICAgIGNvbG9yOiB2YXIoLS15dC1saXZlLWNoYXQtc3BvbnNvci1jb2xvciwgIzEwNzUxNik7XG59XG55dC1saXZlLWNoYXQtYXV0aG9yLWJhZGdlLXJlbmRlcmVyW3R5cGU9J21vZGVyYXRvciddIHtcbiAgICBjb2xvcjogdmFyKC0teXQtbGl2ZS1jaGF0LW1vZGVyYXRvci1jb2xvciwgIzVlODRmMSk7XG59XG55dC1saXZlLWNoYXQtYXV0aG9yLWJhZGdlLXJlbmRlcmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmltZy55dC1saXZlLWNoYXQtYXV0aG9yLWJhZGdlLXJlbmRlcmVyLCB5dC1pY29uLnl0LWxpdmUtY2hhdC1hdXRob3ItYmFkZ2UtcmVuZGVyZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbn1cblxueXQtaWNvbiwgLnl0LWljb24tY29udGFpbmVyLnl0LWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZmlsbDogY3VycmVudGNvbG9yO1xuICAgIHN0cm9rZTogbm9uZTtcbiAgICB3aWR0aDogdmFyKC0taXJvbi1pY29uLXdpZHRoLCAyNHB4KTtcbiAgICBoZWlnaHQ6IHZhcigtLWlyb24taWNvbi1oZWlnaHQsIDI0cHgpO1xufVxuIl19 */"];



/***/ }),

/***/ "./src/app/alpha/message/message.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/alpha/message/message.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_MessageComponent, View_MessageComponent_0, View_MessageComponent_Host_0, MessageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MessageComponent", function() { return RenderType_MessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MessageComponent_0", function() { return View_MessageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MessageComponent_Host_0", function() { return View_MessageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponentNgFactory", function() { return MessageComponentNgFactory; });
/* harmony import */ var _message_component_css_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.component.css.ngstyle */ "./src/app/alpha/message/message.component.css.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image_image_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/image.component.ngfactory */ "./src/app/alpha/image/image.component.ngfactory.js");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/image.component */ "./src/app/alpha/image/image.component.ts");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.component */ "./src/app/alpha/message/message.component.ts");
/* harmony import */ var _biliws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../biliws.service */ "./src/app/biliws.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_MessageComponent = [_message_component_css_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MessageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_MessageComponent, data: {} });

function View_MessageComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "yt-live-chat-author-badge-renderer", [["class", "style-scope yt-live-chat-author-chip"], ["type", "moderator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "style-scope yt-live-chat-author-badge-renderer"], ["id", "image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "yt-icon", [["class", "style-scope yt-live-chat-author-badge-renderer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, ":svg:svg", [["class", "style-scope yt-icon"], ["focusable", "false"], ["preserveAspectRatio", "xMidYMid meet"], ["style", "pointer-events: none; display: block; width: 100%; height: 100%;"], ["viewBox", "0 0 16 16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, ":svg:g", [["class", "style-scope yt-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, ":svg:path", [["class", "style-scope yt-icon"], ["d", "M9.64589146,7.05569719 C9.83346524,6.562372 9.93617022,6.02722257 9.93617022,5.46808511 C9.93617022,3.00042984 7.93574038,1 5.46808511,1 C4.90894765,1 4.37379823,1.10270499 3.88047304,1.29027875 L6.95744681,4.36725249 L4.36725255,6.95744681 L1.29027875,3.88047305 C1.10270498,4.37379824 1,4.90894766 1,5.46808511 C1,7.93574038 3.00042984,9.93617022 5.46808511,9.93617022 C6.02722256,9.93617022 6.56237198,9.83346524 7.05569716,9.64589147 L12.4098057,15 L15,12.4098057 L9.64589146,7.05569719 Z"]], null, null, null, null, null))], null, null); }
function View_MessageComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "yt-live-chat-author-badge-renderer", [["class", "style-scope yt-live-chat-author-chip"], ["type", "member"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "style-scope yt-live-chat-author-badge-renderer"], ["id", "image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "style-scope yt-live-chat-author-badge-renderer"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getIcon(); _ck(_v, 2, 0, currVal_0); }); }
function View_MessageComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "style-scope yt-live-chat-text-message-renderer"], ["id", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.item.message; _ck(_v, 1, 0, currVal_0); }); }
function View_MessageComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["class", "style-scope yt-live-chat-text-message-renderer"], ["id", "emotion"], ["referrerpolicy", "no-referer"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.item.emotionUrl; _ck(_v, 0, 0, currVal_0); }); }
function View_MessageComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "style-scope yt-live-chat-text-message-renderer"], ["id", "repeat_count"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "background-color": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _co.getRepeatGradientColor()); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.item.repeat; _ck(_v, 3, 0, currVal_1); }); }
function View_MessageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "yt-img-shadow", [["class", "no-transition style-scope yt-live-chat-text-message-renderer"], ["height", "24"], ["id", "author-photo"], ["width", "24"]], null, null, null, _image_image_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ImageComponent_0"], _image_image_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ImageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _image_image_component__WEBPACK_IMPORTED_MODULE_4__["ImageComponent"], [], { avatarUrl: [0, "avatarUrl"], height: [1, "height"], width: [2, "width"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 16, "div", [["class", "style-scope yt-live-chat-text-message-renderer"], ["id", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "div", [["id", "timestamp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "yt-live-chat-author-chip", [["class", "style-scope yt-live-chat-text-message-renderer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "style-scope yt-live-chat-author-chip"], ["id", "author-name"]], [[1, "type", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "span", [["class", "style-scope yt-live-chat-author-chip"], ["id", "chat-badges"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MessageComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MessageComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MessageComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MessageComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MessageComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "a", [["id", "show-original"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.item.avatarUrl; var currVal_1 = "24"; var currVal_2 = "24"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_5 = _co.item.is_admin; _ck(_v, 9, 0, currVal_5); var currVal_6 = (_co.item.guard > 0); _ck(_v, 11, 0, currVal_6); var currVal_7 = !_co.item.emotionUrl; _ck(_v, 13, 0, currVal_7); var currVal_8 = _co.item.emotionUrl; _ck(_v, 15, 0, currVal_8); var currVal_9 = (_co.item.repeat > 1); _ck(_v, 17, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.getType(); _ck(_v, 5, 0, currVal_3); var currVal_4 = _co.item.username; _ck(_v, 6, 0, currVal_4); }); }
function View_MessageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "yt-live-chat-text-message-renderer", [], null, null, null, View_MessageComponent_0, RenderType_MessageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], [_biliws_service__WEBPACK_IMPORTED_MODULE_6__["BiliwsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MessageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("yt-live-chat-text-message-renderer", _message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], View_MessageComponent_Host_0, { item: "item" }, {}, []);



/***/ }),

/***/ "./src/app/alpha/message/message.component.ts":
/*!****************************************************!*\
  !*** ./src/app/alpha/message/message.component.ts ***!
  \****************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_danmaku_def__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/danmaku.def */ "./src/app/danmaku.def.ts");
/* harmony import */ var _app_biliws_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/biliws.service */ "./src/app/biliws.service.ts");



var MessageComponent = /** @class */ (function () {
    function MessageComponent(bili) {
        this.bili = bili;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent.prototype.getType = function () {
        if (this.item.uid === this.bili.ownerId) {
            return 'owner';
        }
        else if (this.item.is_admin) {
            return 'moderator';
        }
        else if (this.item.guard > 0) {
            return 'member';
        }
        return null;
    };
    MessageComponent.prototype.getIcon = function () {
        if (this.item.guard === 3) {
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAADAFBMVEVHcEwgCQkjDhAbAgIZAAEdBQQiDQ0fBQUnFhcZAAAaAAAaAAEbAAEaAAAZAAAYAQAbAAAZAQEbAQEkDw8UBAQgBwcYAQEdAAAcAwI3KC01Hx4qHyIAAAB/lbXn6+5o7/9q8v/M0dsCBwkBAwXP1N3q7vEAGSLT1+ABU23e4unb3+UATmcAFBsCLjzt8fQAQVYAJzS+wsoACw+FnLvY2+IAICsBPVEAOEtkeZieorACXnwARlwCZYXi5uy1u8fw9PhBSmtoeZcASWHHy9IsMkakqbcAM0QBbI/KztX///+DipnBxtFbx9lhcpEADxRUscB1e4ucr8MuMDOeprV8gpJr+P9l4PYMDQ6xtr4MFReLo8BCcn2nrrooKCqZnq0vNTtLX35mvdZk1uth0uWMjZCnaBMAfKRLboogICFQfZpj3O++ztsCWXRvdn2LkaNQm6w8WmITJEhxzugtRmWzxNa7vL8yYXgAdJmbnqHHxMNvam2rqKuVlpk6T1aTg2pUiKTT3uk8g5Q1Qk7U1tmssb0gMlb5+vsuN02KprAXSFuCuNElS1c8p70keJODnr2EoL+Dn75NWHdTXnwtHiVNW3oZBgaBnbuB+P9aZ4Zfa4AYFxlo6Pxsf6CYutefxeJ6nr97krLmslFyvdg6NjuOrcpVYoJdbYxch5B4+P9KVmxQUWLBjUGXsszNqV2GpMTgqk3/3m5v8//xxl83LDZs4PeGosFvhKSCmrp+mLhbYXF6kLCDl615jq5LjppidJR0iaqkudBoe5t+lLRKRUyCmLhxg5dKVHKRqcVfYGRRaX0/PkN7kKVnWVpxhqZVeYRlhqhRT1WmdjNtgqL/325tprRyialziKh3ja3/6HEZIyr+4nDFtYeJn7x5Uil7xtu9di0+RVpASGb/5XGMbzt2x8+rg0NkdpZqfZxXdJFhk6l2i6tQVl10hqNhs8pONy99k7Nrxd9n7P+AlrZfpb9rdYtNYG1fcJB+fX+SmadUaIh+2fF41OzgxWP/63ValrWQ6v8QZtHEAAAAHHRSTlMA1fmbHL7lVu8LASpwNHw/hhOR3gXLYUyt/vf5gV/+6QAAD7lJREFUeF60lVVz4zAURu2ktpOmiZM4m03T/yyZIcjMUGZmZuZFZgYnnX3cne2Oeh7kGXl07uhqPgm7DQ7aSZJ22ozdDQ47szCfTs8vMDbHXfjvM++vFCWTUZSrp7gVvZ8ybSnV1038VeWxiUbtt5ieZ5ryRsOvfzJbZBtav4tI6/5GbCAQGIg19AorHsQHICzH/I2wyokip4Yb/lhPF9pjMPZ/EFfDSY47O5vhkuFtPpWzI+0Qvgg3eF7MCgQhZEWeH2eniXaUETBNsfBNUqw72zF7XeQjsHuRQZc3s9ninWKBnBQFGsNogUvKAA6RDlR6J8PghiEIgCrGjWazsS6qAMBnqHbQRhx/K+aLn1gAA9yMgOPCDBeAoPSOQBQw/PKgFr3YOwwDIKc47vyc41IyAKU1GxK/lby+OIiWa7XiEQvY3hFeFPmRXhbAIZMFkX9vs7JZK5fzcyUAWDgxOjoB9VKlSSeS/jPXe5XKZqVWjh5LWoltloDNsdSPO5Dk9/L7wY0/T1JkPwtBCyjnGAuGAmI9Wms1KPqiA7MQ8SetHcg7dQLRXUp5T0/zZd2/Lrn1QJBaoGdnpyegkS7MYXPa3BRtbXOY/+/KcFF2o4cwHJ9e54uHhx+1TgqzGdTxBzrjqqHD5VnT5tYm451ehrlHeIw2+tbtX1hJiyODs2NjwWAwFApN4x2CFumL7O5G+rY1wdnVnAwFg4XZo8Hko+GVrn+rQLupG9ymk59ffoSbhkIikSglduNS7mU3bMEu56QzfS6RKBSCOqsxRUkT1O+l1r/0vHNJkiTf/r5P8p18ffX5YTeQbwAbfDalJ6AFXE5l1V5Z7rv5JSffVqvDPn1RE9+Sl/7zu/uLD3MNiuo843gNsaXEqPFWreccstez9+thd/aK7Mpeh+1yMbAbQKMMolzsJKCApCo4JpoUlXYyC2EyTCh0dBi/WF1ZiUOWtUtXTamT4jDDdPRDJaOYHY9rIV86fc45uwrL0j/Dp533+Z3n/T/P877ntDlLkDxtHt+m8H3w4Qd/K7jwRVIX7vcEiuIpwPVbQwBI6UbPi9zcz/kSqUKFcCTfOY9vXqXG3tlak++skEpVCMLJky8HwHEztARQtBQQBMC7p2ARPJdU2uWUtW/fktnXuzws3/kxQitjBpkBN5IAQGg9k04ZzzSRaRDmbPuR4GGYs4UBlH+9HHDv0cxBNAWYvjhzMYXuvgAe7NkDAJDU13UGw2TWTDa8nd0ik8kghQkawDn19b+GAXDh2rUrV+C/gM1+DfjnJWTm/DXQlfPdN0L3H5068r6PBiganXSQDDa8s6YjH+uoITBnG4cm2CpljurSUlfn0Usve4vm9iKqZQDOy4Leg/s69870lbMRqQRhFp01ncFaa7p4soW16TZktctkyqqqDkzmnKIBAiHPrCstLUHkCCPPMgAlhQJhpM1DGLmcMmtJVQ3GM02tS7+XtMl4jsG6Vh7mdLARRKI9JBMV6gobJXKLXEIB8gxpALZNLJZS2aq0FguNUp3lneF1xepqeLBJa9Ms3l6Tj/GUrUIMUphk2yz8hXyHTld4VM7n5Fm0KonBILl041WjHZSyFWItW6UVK9hSwHg0Bj5bKv/UyaOCiADQvil9SPwaagj8ATnrxVI2ostX6koX6UfkSAVi2ITXgOk/ahoMdF4SQ4PGg4D4BoGtXAQlhPHyIVBb9gqXsxbyMUZnim0QtIVXoSv0Iow0EB8ASzwQsxFaKjHCiC+HNakQsrvrM8wJK4/5sUWqhT6wYpW6wtHVAaqVAKSKxYTgVWzOcKJubIcNEplkjjq+BgAOEwAmkwC5Ih0gSAEEnCTAAJRBIc900oRhE9synfDZbbJ6fzMxiCQBha8Bmv8DAArjBoWZwppnzfnH12S89a2/i82S40+hrGE1W0ll0MhhoujlaQD+sWQPKOx8BmDT08jGcfQm8eMvMk/TNTUhcmSULzBoG2yc41hFte6mHuJwbEa5WJ+3BDB/0KgxCqCMJA16jdEAkfkNAo1eC8Z7o+RY4ueZr605ay+HydmRo2CoxCL4FFNW66p3CxqkeiqUQi/YR74q031shKOxG+R2LQdRGYxai1EKrW5oUBwdD5LxnlXuxRt2PkZJcqSM8ewIxoVGe4pImc2AgIfiy0eFymj0MNtvTxYt3/hVFCXRuauZtyjrcj9Jov7mGE0wcoWwR4t97IaUi4fCabNIrkUYQRsy+nO9Gp6xfzTT20/Om9lzcxESDY5XUo/DEZeZuLrq0kaPPlWHKwGaJECQdLzPOkKSZGRuPuMb4vqJBwAgySh3kl40oxS6q6tLe/WvMkh5AKcPu25w6ul375f0LQMsnPSjFGDsclaGF5k1iel+AKCz41YfABo4MZHIDTncqUtmYO+5QV2sL1ybvenSKVmESCgUdVUslLwCVInGgxSg/958hverX+2I9AMAfo+eXEBUcrtFNSkUOQqhlNpLyiG+vvaji9P+4mKzWekghCYsKZ6o47NjRtqE1pNREgRx1LGVrbx99PwcAGibic9gRmr12kZChJtL4VxbdHm///5OaWGFUqm04nR0HibCCZMQshCefKmwQyl/jDWrwzRgrrsXbE4fFPPBJEA9IhyRIFRd6484hARXWakrrawwK0FuBx2dZ7J+9aKzrq9uwlVhZhFE1wRHY9TXi0ZIFKUBwdAKm9fFghGqikBotN4US5ZJVSshInCWG2JbWbhIaILwQrdr0FcrQSixny4umnHCWofwn2H1/jANgDjdUxvTu7hXHekvAABts6mC7hwtFHqswyoCMbExE6Fs6t21G+EcSw27E01NFbioBpnBwWIAoGSkoD8SLEibd2/tHIsE799iAGSUhdGlaqM7qW5qodjcolS2mCubEhcfPXxEAzxIsotHm5rcuKOvEWNFUVqRW7AT4R0blu/QRHfk3tAwHR8N+5uFVh8DYGSxlZeXc3ZDcNAygMfoK3PpuHjjaVFzd5gGkMM9BeHzlzel7dCNWz2HhuMMQD3CNS0AQGNIAvR0z+7e9SgF8NQmp3ReLTvW1GTlus34CMkA4sP/HQo8KNi6ZdnHjoLAT8/e++EJxAeBzQRe5bEIBGIJFUSvh+G8BPCJptZeawGb2JZjRvtZl8vMtZrr/XEaQD754csDh3qKdr61JIENf+g5sT8390R/hAaEZ8dxYakYRrBUL+dbjAqELbfL8z56lNRROGUkxlqb9JjeAx1423UaAOOROGNB/wn49Pbipx1Le21j7NmXuc//8veiCAoKBc+P47hwgq5DDTXzQZ6GWhqwi8qAOcxqa+kGLi8rK6QAweD0EyqDW99++Px57v7fbl3axu/vefe9r7+YD1BJBocf9lYSONFSThNShy6/YYkHtAy0M5w+ALDc5sWeh7sHYH08ME+e2//unm/eWDqI9h74TcmoeiAwTfWivwqJEZBCO3MvSY1rwQqAnObsdVGA0zATb6vjYXI6MBBMVB050LluaRVtyt6adZWMFD0mKQdu+pAOEY7jU+AjZ3WAnAGMuspOO6zQOC+j8XCYfPwfMjixfW121pblJ/6WLWsS6uuBOBDi0QSnioVzcZHy+MLeVKlKxOkADWxRrKa1rKzMzKosRzqjKNTRQOB6cD77zZwMN691g8F4oJ9Ew+Hwn0YlNwkuFxAm4hRzHrIN9mQVpUzm242eSaGp0Ot1uVlTSJU/OBCPk/2BuBrOm0z65eZEdwHYDAA0enDGjXNBLKJeYOFTtwq54nWZij2IymK3aX9P4O4yr3fRYZbO3JwdAEA8UAAJrPKpZNtVNDR0nwTAQCT6sJ1gsbjwJ2zni+UWquM+ufhXRp0ao9hogXHXKuIuer3e06zGs1/MhgCA3h8aU09sWvX78SikAEbF40DoNeMsECDqOGIbAkqMRGmNJBCPndq4mAg/7fUmXG7l0zuzYxRgIPA4mFj1u3bO2zvn40PfkhQgRPqLITYlUQf1jsTx+W5HUea8uO3z6alBUXGy7XcJb6LSWqlWj1GA8LdDofjV9ONyWUejc0MPUAAMhML+YjdDIAZtecg3hw+fU4+FQGOz5w4f/hwAk8K2f/wbElAW+9EHAAjFn/TMRS5vz1kdsOGNF1cCwxAfAGMhtX+cBuDHIYP/1Wo+rW0cYRiX69ZRLdm4xooOathpKT30ago6lbgn064QVitRWIL1J6JYlEpOSqAHyYfiD+AlB1NtqAjRnnJ0t2EjaVlj0GkIGfDsRdfI8oKQd1UGtgbTdyXRtC4IOZEfRqu/PL+d9x1GsM9GkfXIHgEeWYj/+MNf19dfZbOlP79prqrmAFCR93/rv3NjzDW6uTx3oIprt8BfrdUMu7Xx06BIp58C4LzZq6lYUw27ec4B4O4v4J999WPrlqmZBhAqbVG7x+Xn3h0DgPM8J6JyOASYtaPWxtdun3/4PPrX01VDZbv3pZrRenrOf1n8+SX4l57/UaPHmglTqBDx5MxC0TEATzDEc9a9tkh7Q4CmqUerG1+sf/bVgyfNI9NQb29vO1CPVvPJg1I2+xLsVYyHABWL7DHULhT0jJE/lgGCXDUrA4CpUVo7hEp9923LcF3Y7q7ucmu/l7Klu4fPDKwAgAKghsX9xxaXifk9Y7W0OSRolQHgmIKDpvYidoVqBhAJMeFZo73n7JlKCVEUZQAwRv6bkFtMQEh3RKyOAFgBG8c2qCY/1DVNo0rSwdSwq0SS/gEYRHTOuEn8gRDjkZXYESV1BAAPKWlTerK7fV+h2ExCHzRqJ3UXQAYAU9/bSnOIj02Uu/hDsJasfjViGCMA0R1bwQMAxhoAklSxq+HXM2B7F2UORUP+STO5ugXT3donhjacQdvpEQXLt5n7hjzckxTScxpDAKaS+H3K4qy698bEF90DhTSyyt0Ow0AAAGMGIYBQiCuM4WAwRgafEbl6keAQ/MkvXCVWuZPnOC7R7zQUIGC5jaVLwm3HZRLmXKThp/k7y1eLXIIzBR65iK2GpGBHJ5cB0BeFnLCOa4/4wkzwysnWolfIAKLMX4TXYMWcXJaebHd2ugmwzwjeNwqAfbMhgecQZyX4vKT/T9JON2fB17wQmn3TNMG37C1EEwgYx2uXAWvHFkIoES14l31vE7L4AzEhmjvQ2+EwDHgMX8BBP8hFhVjA/7ZZxcrCUiAkpMKN9n/UCKeEUGBpYcUzBc0vFuJneqTxL0X0s3hhcWpxaTDGx9Mv2GsAe5GO87Hg9NLexVA0njiVIyPJp4k4bDwrU71loI7KfZkNJPfLyN14pqqFGaHMdZnMYHS5sjD1Gx8glS3mUKohy40UyhUhSJu6VmY3+XgmHM7E+U3Y2K5Dfmh1Lue213NNCs7VEarPBT3XJl+gWAz4rs9/fv79mzevWP6/ATsRAQhTWDk0AAAAAElFTkSuQmCC';
        }
        else if (this.item.guard === 2) {
            return 'data:image/png;base64,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';
        }
        else if (this.item.guard === 1) {
            return 'data:image/png;base64,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';
        }
        else {
            return '';
        }
    };
    MessageComponent.prototype.ngAfterViewInit = function () {
        // if (!isPlatformBrowser(this.plat)) {
        // return;
        // }
        // document.documentElement.scrollTop=document.documentElement.scrollHeight;
        window.scrollTo(0, document.documentElement.scrollHeight);
    };
    MessageComponent.prototype.getRepeatGradientColor = function () {
        return this.getColorGradient('#2196f3', '#ff5722', this.item.repeat > 10 ? 1 : this.item.repeat / 10.0);
    };
    MessageComponent.prototype.getColorGradient = function (start_color, end_color, percent) {
        // strip the leading # if it's there
        start_color = start_color.replace(/^\s*#|\s*$/g, '');
        end_color = end_color.replace(/^\s*#|\s*$/g, '');
        // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
        if (start_color.length === 3) {
            start_color = start_color.replace(/(.)/g, '$1$1');
        }
        if (end_color.length === 3) {
            end_color = end_color.replace(/(.)/g, '$1$1');
        }
        // get colors
        var start_red = parseInt(start_color.substr(0, 2), 16), start_green = parseInt(start_color.substr(2, 2), 16), start_blue = parseInt(start_color.substr(4, 2), 16);
        var end_red = parseInt(end_color.substr(0, 2), 16), end_green = parseInt(end_color.substr(2, 2), 16), end_blue = parseInt(end_color.substr(4, 2), 16);
        // calculate new color
        var diff_red_ = end_red - start_red;
        var diff_green_ = end_green - start_green;
        var diff_blue_ = end_blue - start_blue;
        var diff_red = ((diff_red_ * percent) + start_red).toString(16).split('.')[0];
        var diff_green = ((diff_green_ * percent) + start_green).toString(16).split('.')[0];
        var diff_blue = ((diff_blue_ * percent) + start_blue).toString(16).split('.')[0];
        // ensure 2 digits by color
        if (diff_red.length === 1) {
            diff_red = '0' + diff_red;
        }
        if (diff_green.length === 1) {
            diff_green = '0' + diff_green;
        }
        if (diff_blue.length === 1) {
            diff_blue = '0' + diff_blue;
        }
        return '#' + diff_red + diff_green + diff_blue;
    };
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/alpha/paid-message/paid-message.component.css.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/alpha/paid-message/paid-message.component.css.ngstyle.js ***!
  \**************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#header.yt-live-chat-paid-message-renderer {\n    position: relative;\n    background-color: var(--yt-live-chat-paid-message-header-background-color, #125aac);\n    color: var(--yt-live-chat-paid-message-header-color, #fff);\n    font-weight: 500;\n    padding: 8px 16px;\n    min-height: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-radius:4px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n#author-photo.yt-live-chat-paid-message-renderer {\n    width: 40px;\n    height: 40px;\n}\n#author-photo.yt-live-chat-paid-message-renderer {\n    display: block;\n    margin-right: 16px;\n    overflow: hidden;\n    border-radius: 50%;\n    flex: none;\n}\n#header-content.yt-live-chat-paid-message-renderer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex: 1;\n    flex-basis: 0.000000001px;\n    align-items: baseline;\n}\n#header-content-primary-column.yt-live-chat-paid-message-renderer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    flex: 1;\n    flex-basis: 0.000000001px;\n}\n#author-name.yt-live-chat-paid-message-renderer {\n    color: var(--yt-live-chat-paid-message-author-name-color, rgba(255, 255, 255, 0.7));\n    font-size: 14px;\n    margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxwaGEvcGFpZC1tZXNzYWdlL3BhaWQtbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1GQUFtRjtJQUNuRiwwREFBMEQ7SUFDMUQsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUdiLG1CQUFtQjtJQUduQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLCtHQUErRztBQUNuSDtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUdsQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGFBQWE7SUFHYixtQkFBbUI7SUFHbkIsOEJBQThCO0lBRzlCLE9BQU87SUFFUCx5QkFBeUI7SUFHekIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxhQUFhO0lBR2Isc0JBQXNCO0lBR3RCLDhCQUE4QjtJQUc5QixPQUFPO0lBRVAseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxtRkFBbUY7SUFDbkYsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FscGhhL3BhaWQtbWVzc2FnZS9wYWlkLW1lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXIueXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1yZW5kZXJlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtaGVhZGVyLWJhY2tncm91bmQtY29sb3IsICMxMjVhYWMpO1xuICAgIGNvbG9yOiB2YXIoLS15dC1saXZlLWNoYXQtcGFpZC1tZXNzYWdlLWhlYWRlci1jb2xvciwgI2ZmZik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOjRweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4jYXV0aG9yLXBob3RvLnl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtcmVuZGVyZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cbiNhdXRob3ItcGhvdG8ueXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1yZW5kZXJlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tcy1mbGV4OiBub25lO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICBmbGV4OiBub25lO1xufVxuXG4jaGVhZGVyLWNvbnRlbnQueXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1yZW5kZXJlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgIGZsZXg6IDE7XG4gICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgLW1zLWZsZXgtYWxpZ246IGJhc2VsaW5lO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuI2hlYWRlci1jb250ZW50LXByaW1hcnktY29sdW1uLnl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtcmVuZGVyZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgIC13ZWJraXQtZmxleDogMTtcbiAgICBmbGV4OiAxO1xuICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xufVxuXG4jYXV0aG9yLW5hbWUueXQtbGl2ZS1jaGF0LXBhaWQtbWVzc2FnZS1yZW5kZXJlciB7XG4gICAgY29sb3I6IHZhcigtLXl0LWxpdmUtY2hhdC1wYWlkLW1lc3NhZ2UtYXV0aG9yLW5hbWUtY29sb3IsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/alpha/paid-message/paid-message.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/alpha/paid-message/paid-message.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_LegacyPaidMessageComponent, View_LegacyPaidMessageComponent_0, View_LegacyPaidMessageComponent_Host_0, LegacyPaidMessageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LegacyPaidMessageComponent", function() { return RenderType_LegacyPaidMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LegacyPaidMessageComponent_0", function() { return View_LegacyPaidMessageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LegacyPaidMessageComponent_Host_0", function() { return View_LegacyPaidMessageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegacyPaidMessageComponentNgFactory", function() { return LegacyPaidMessageComponentNgFactory; });
/* harmony import */ var _paid_message_component_css_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paid-message.component.css.ngstyle */ "./src/app/alpha/paid-message/paid-message.component.css.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image_image_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/image.component.ngfactory */ "./src/app/alpha/image/image.component.ngfactory.js");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/image.component */ "./src/app/alpha/image/image.component.ts");
/* harmony import */ var _paid_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paid-message.component */ "./src/app/alpha/paid-message/paid-message.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_LegacyPaidMessageComponent = [_paid_message_component_css_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LegacyPaidMessageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_LegacyPaidMessageComponent, data: {} });

function View_LegacyPaidMessageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "style-scope yt-live-chat-paid-message-renderer"], ["id", "header"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "background-color": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "yt-img-shadow", [["class", "no-transition style-scope yt-live-chat-paid-message-renderer"], ["height", "40"], ["id", "author-photo"], ["width", "40"]], null, null, null, _image_image_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ImageComponent_0"], _image_image_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ImageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _image_image_component__WEBPACK_IMPORTED_MODULE_4__["ImageComponent"], [], { avatarUrl: [0, "avatarUrl"], height: [1, "height"], width: [2, "width"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "div", [["class", "style-scope yt-live-chat-paid-message-renderer"], ["id", "header-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "no-transition style-scope yt-live-chat-paid-message-renderer"], ["id", "header-content-primary-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "style-scope yt-live-chat-paid-message-renderer"], ["id", "author-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "style-scope yt-live-chat-paid-message-renderer"], ["id", "purchase-amount"], ["style", "transform:scale(0.9);transform-origin: left;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _co.item.color); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.item.avatarUrl; var currVal_2 = "40"; var currVal_3 = "40"; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.title; _ck(_v, 8, 0, currVal_4); var currVal_5 = _co.subtitle; _ck(_v, 10, 0, currVal_5); }); }
function View_LegacyPaidMessageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "yt-live-chat-paid-message-renderer", [], null, null, null, View_LegacyPaidMessageComponent_0, RenderType_LegacyPaidMessageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _paid_message_component__WEBPACK_IMPORTED_MODULE_5__["LegacyPaidMessageComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LegacyPaidMessageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("yt-live-chat-paid-message-renderer", _paid_message_component__WEBPACK_IMPORTED_MODULE_5__["LegacyPaidMessageComponent"], View_LegacyPaidMessageComponent_Host_0, { item: "item" }, {}, []);



/***/ }),

/***/ "./src/app/alpha/paid-message/paid-message.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/alpha/paid-message/paid-message.component.ts ***!
  \**************************************************************/
/*! exports provided: LegacyPaidMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegacyPaidMessageComponent", function() { return LegacyPaidMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_danmaku_def__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/danmaku.def */ "./src/app/danmaku.def.ts");


var LegacyPaidMessageComponent = /** @class */ (function () {
    function LegacyPaidMessageComponent() {
    }
    LegacyPaidMessageComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(LegacyPaidMessageComponent.prototype, "title", {
        get: function () {
            if (this.item.guard_type > 0) {
                return "\u65B0\u7684" + this.item.gift;
            }
            else {
                return this.item.username;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LegacyPaidMessageComponent.prototype, "subtitle", {
        get: function () {
            if (this.item.guard_type > 0) {
                return "\u6B22\u8FCE " + this.item.username + " \u4E0A\u8230";
            }
            else {
                return "\u8D60\u9001 " + this.item.gift + " \u00D7" + this.item.amount;
            }
        },
        enumerable: true,
        configurable: true
    });
    LegacyPaidMessageComponent.prototype.ngAfterViewInit = function () {
        // if (!isPlatformBrowser(this.plat)) {
        //  return;
        // }
        // document.documentElement.scrollTop=document.documentElement.scrollHeight;
        window.scrollTo(0, document.documentElement.scrollHeight);
    };
    return LegacyPaidMessageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alpha_alpha_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alpha/alpha.component */ "./src/app/alpha/alpha.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewer/viewer.component */ "./src/app/viewer/viewer.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _index_local_index_local_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-local/index-local.component */ "./src/app/index-local/index-local.component.ts");






var routes = [
    { path: 'alpha/:id', component: _alpha_alpha_component__WEBPACK_IMPORTED_MODULE_1__["AlphaComponent"] },
    { path: 'viewer/:id', component: _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_3__["ViewerComponent"] },
    { path: 'official', component: _index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: '', component: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].official ? _index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] : _index_local_index_local_component__WEBPACK_IMPORTED_MODULE_5__["IndexLocalComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ "@nguniversal/express-engine/tokens");
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_5__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [2, _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_5__["REQUEST"]]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);



var langs = ['en', 'zh', 'ja'];
var defaultLang = 'zh';
var AppComponent = /** @class */ (function () {
    function AppComponent(translate, platformId, request) {
        this.translate = translate;
        this.platformId = platformId;
        this.request = request;
        this.title = 'bilichat';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.translate.addLangs(langs);
        this.translate.setDefaultLang(defaultLang);
        var language = this.getLang();
        if (langs.indexOf(language) > -1) {
            this.translate.use(language);
        }
        else {
            this.translate.use(defaultLang);
        }
    };
    AppComponent.prototype.getLang = function () {
        var lang;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            lang = this.translate.getBrowserLang();
        }
        else {
            lang = (this.request.headers['accept-language'] || '').substring(0, 2); // 暂不考虑区域代码
        }
        return lang;
    };
    AppComponent.prototype.switchLanguage = function (lang) {
        this.translate.use(lang);
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ "@ngx-translate/http-loader");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);





function HttpLoaderFactory(http, state) {
    return {
        getTranslation: function (lang) {
            var key = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["makeStateKey"])('transfer-translate-' + lang);
            var data = state.get(key, null);
            // 检查transfer-state是否存在传入语言的语言包内容, 不存在则请求相应的语言包资源
            if (data) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
                    observer.next(data);
                    observer.complete();
                });
            }
            else {
                // 使用网络请求获取语言包资源
                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__["TranslateHttpLoader"](http).getTranslation(lang);
            }
        }
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! exports provided: AppServerModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return AppServerModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_server_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _alpha_alpha_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alpha/alpha.component.ngfactory */ "./src/app/alpha/alpha.component.ngfactory.js");
/* harmony import */ var _viewer_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewer/viewer.component.ngfactory */ "./src/app/viewer/viewer.component.ngfactory.js");
/* harmony import */ var _index_index_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component.ngfactory */ "./src/app/index/index.component.ngfactory.js");
/* harmony import */ var _index_local_index_local_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-local/index-local.component.ngfactory */ "./src/app/index-local/index-local.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_server__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/http */ "@angular/http");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_angular_http__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/animations */ "@angular/animations");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_angular_animations__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _alpha_alpha_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./alpha/alpha.component */ "./src/app/alpha/alpha.component.ts");
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./viewer/viewer.component */ "./src/app/viewer/viewer.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _index_local_index_local_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./index-local/index-local.component */ "./src/app/index-local/index-local.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























var AppServerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _alpha_alpha_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AlphaComponentNgFactory"], _viewer_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ViewerComponentNgFactory"], _index_index_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["IndexComponentNgFactory"], _index_local_index_local_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["IndexLocalComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3), new _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_d"](p3_0)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_LOADER"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_c"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵTRANSITION_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵSharedStylesHost"], null, [_angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_c"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵServerRendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵServerRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵNoopAnimationDriver"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_a"], [_angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵServerRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], null, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ViewportScroller"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNullViewportScroller"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["XhrFactory"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpHandler"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["TransferState"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["TransferState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"], _app_server_module__WEBPACK_IMPORTED_MODULE_1__["universalLoader"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["TransferState"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["USE_STORE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_17__["BrowserXhr"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_17__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_17__["BaseResponseOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_17__["XSRFStrategy"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_17__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_17__["XHRBackend"], [_angular_http__WEBPACK_IMPORTED_MODULE_17__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_17__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_17__["XSRFStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_17__["RequestOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_17__["BaseRequestOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_http__WEBPACK_IMPORTED_MODULE_17__["Http"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_g"], [_angular_http__WEBPACK_IMPORTED_MODULE_17__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_17__["RequestOptions"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_18__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["BEFORE_APP_SERIALIZED"], function (p0_0, p0_1, p0_2) { return [_angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_server_platform_server_b"](p0_0, p0_1, p0_2)]; }, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["TransferState"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "serverApp", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_i"](p1_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_h"](p2_0, p2_1, p2_2)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], function () { return [[{ path: "alpha/:id", component: _alpha_alpha_component__WEBPACK_IMPORTED_MODULE_19__["AlphaComponent"] }, { path: "viewer/:id", component: _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_20__["ViewerComponent"] }, { path: "official", component: _index_index_component__WEBPACK_IMPORTED_MODULE_21__["IndexComponent"] }, { path: "", component: _index_local_index_local_component__WEBPACK_IMPORTED_MODULE_22__["IndexLocalComponent"] }, { path: "**", redirectTo: "", pathMatch: "full" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserTransferStateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserTransferStateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_24__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_24__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_http__WEBPACK_IMPORTED_MODULE_17__["HttpModule"], _angular_http__WEBPACK_IMPORTED_MODULE_17__["HttpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ServerModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ServerTransferStateModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_11__["ServerTransferStateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"], "NoopAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! exports provided: universalLoader, AppServerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "universalLoader", function() { return universalLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return AppServerModule; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);





function universalLoader(state) {
    return {
        getTranslation: function (lang) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                var jsonData = JSON.parse(Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(Object(path__WEBPACK_IMPORTED_MODULE_4__["join"])(__dirname, "browser/assets/i18n/" + lang + ".json"), 'utf8'));
                var key = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["makeStateKey"])('transfer-translate-' + lang);
                state.set(key, jsonData);
                observer.next(jsonData);
                observer.complete();
            });
        }
    };
}
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());



/***/ }),

/***/ "./src/app/biliws.service.ts":
/*!***********************************!*\
  !*** ./src/app/biliws.service.ts ***!
  \***********************************/
/*! exports provided: BiliwsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiliwsService", function() { return BiliwsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _message_processor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-processor.service */ "./src/app/message-processor.service.ts");
/* harmony import */ var _danmaku_def__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./danmaku.def */ "./src/app/danmaku.def.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







var BiliwsService = /** @class */ (function () {
    function BiliwsService(http, proc) {
        this.http = http;
        this.proc = proc;
    }
    Object.defineProperty(BiliwsService.prototype, "ownerId", {
        get: function () {
            return this._ownerId;
        },
        set: function (v) {
            this._ownerId = v;
        },
        enumerable: true,
        configurable: true
    });
    BiliwsService.prototype.connect = function (roomid) {
        var _this = this;
        this.ws = new WebSocket('wss://broadcastlv.chat.bilibili.com/sub');
        this.ws.binaryType = 'arraybuffer';
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this.ws.onopen = function (e) {
                var obj = {
                    uid: 0,
                    roomid: Number(roomid),
                    protover: 1,
                    platform: 'web',
                    clientver: '1.5.15'
                };
                _this.sendPackageObj(7, obj);
                _this.heartbeatHandler = setInterval(function () { _this.sendHeartbeat(); }, 30000);
                observer.next(new _danmaku_def__WEBPACK_IMPORTED_MODULE_3__["ConnectedMessage"]());
            };
            _this.ws.onmessage = function (e) {
                if (Date.now() - _this.lastRenderInvoke > 1000) {
                    console.log('Window Inavtive');
                    return;
                }
                var arr = new Uint8Array(e.data);
                var view = new DataView(arr.buffer);
                var offset = 0;
                while (offset < arr.byteLength) {
                    var type = view.getInt32(8 + offset);
                    var section = arr.slice(offset + view.getInt16(4 + offset), view.getInt32(offset) + offset);
                    offset += view.getInt32(offset);
                    // 后面不要操作offset了
                    if (type === 5) {
                        _this.proc.formMessage(JSON.parse(new TextDecoder().decode(section)), observer);
                    }
                }
            };
            _this.ws.onerror = function (e) {
                observer.error(e);
            };
            _this.ws.onclose = function (e) {
                clearInterval(_this.heartbeatHandler);
                observer.complete();
            };
        });
    };
    BiliwsService.prototype.sendHeartbeat = function () {
        var body = new TextEncoder().encode('[object Object]');
        this.sendPackageBinary(2, body);
    };
    BiliwsService.prototype.sendPackageBinary = function (type, body) {
        var head = new ArrayBuffer(16);
        var headDataView = new DataView(head);
        headDataView.setInt32(0, head.byteLength + body.byteLength);
        headDataView.setInt16(4, 16);
        headDataView.setInt16(6, 1);
        headDataView.setInt32(8, type); // verify
        headDataView.setInt32(12, 1);
        var tmp = new Uint8Array(16 + body.byteLength);
        tmp.set(new Uint8Array(head), 0);
        tmp.set(body, 16);
        this.ws.send(tmp);
    };
    BiliwsService.prototype.sendPackageObj = function (type, bufferObj) {
        this.sendPackageBinary(type, new TextEncoder().encode(JSON.stringify(bufferObj)));
    };
    BiliwsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"]({ factory: function BiliwsService_Factory() { return new BiliwsService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_message_processor_service__WEBPACK_IMPORTED_MODULE_2__["MessageProcessorService"])); }, token: BiliwsService, providedIn: "root" });
    return BiliwsService;
}());



/***/ }),

/***/ "./src/app/danmaku.def.ts":
/*!********************************!*\
  !*** ./src/app/danmaku.def.ts ***!
  \********************************/
/*! exports provided: DanmakuMessage, GiftMessage, ConnectedMessage, DisplayMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanmakuMessage", function() { return DanmakuMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftMessage", function() { return GiftMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedMessage", function() { return ConnectedMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayMode", function() { return DisplayMode; });
var DanmakuMessage = /** @class */ (function () {
    function DanmakuMessage(uid, username, message, guard, is_admin, emotionUrl, avatarUrl, type, mode, repeat) {
        if (avatarUrl === void 0) { avatarUrl = 'https://static.hdslb.com/images/member/noface.gif'; }
        if (type === void 0) { type = 'danmaku'; }
        if (mode === void 0) { mode = 1; }
        if (repeat === void 0) { repeat = 1; }
        this.uid = uid;
        this.username = username;
        this.message = message;
        this.guard = guard;
        this.is_admin = is_admin;
        this.emotionUrl = emotionUrl;
        this.avatarUrl = avatarUrl;
        this.type = type;
        this.mode = mode;
        this.repeat = repeat;
    }
    return DanmakuMessage;
}());
var GiftMessage = /** @class */ (function () {
    function GiftMessage(uid, username, gift, amount, value, guard_type, color, avatarUrl, type, mode) {
        if (avatarUrl === void 0) { avatarUrl = 'https://static.hdslb.com/images/member/noface.gif'; }
        if (type === void 0) { type = 'gift'; }
        if (mode === void 0) { mode = 2; }
        this.uid = uid;
        this.username = username;
        this.gift = gift;
        this.amount = amount;
        this.value = value;
        this.guard_type = guard_type;
        this.color = color;
        this.avatarUrl = avatarUrl;
        this.type = type;
        this.mode = mode;
    }
    return GiftMessage;
}());
var ConnectedMessage = /** @class */ (function () {
    function ConnectedMessage(uid, username, avatarUrl, type, mode) {
        if (uid === void 0) { uid = 0; }
        if (username === void 0) { username = null; }
        if (avatarUrl === void 0) { avatarUrl = null; }
        if (type === void 0) { type = 'connected'; }
        if (mode === void 0) { mode = 1; }
        this.uid = uid;
        this.username = username;
        this.avatarUrl = avatarUrl;
        this.type = type;
        this.mode = mode;
    }
    return ConnectedMessage;
}());
var DisplayMode;
(function (DisplayMode) {
    DisplayMode[DisplayMode["Danmaku"] = 1] = "Danmaku";
    DisplayMode[DisplayMode["Gift"] = 2] = "Gift";
    DisplayMode[DisplayMode["Both"] = 3] = "Both";
})(DisplayMode || (DisplayMode = {}));



/***/ }),

/***/ "./src/app/index-local/index-local.component.css.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/index-local/index-local.component.css.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4LWxvY2FsL2luZGV4LWxvY2FsLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/index-local/index-local.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/index-local/index-local.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_IndexLocalComponent, View_IndexLocalComponent_0, View_IndexLocalComponent_Host_0, IndexLocalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_IndexLocalComponent", function() { return RenderType_IndexLocalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IndexLocalComponent_0", function() { return View_IndexLocalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IndexLocalComponent_Host_0", function() { return View_IndexLocalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexLocalComponentNgFactory", function() { return IndexLocalComponentNgFactory; });
/* harmony import */ var _index_local_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-local.component.css.shim.ngstyle */ "./src/app/index-local/index-local.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_local_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-local.component */ "./src/app/index-local/index-local.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_IndexLocalComponent = [_index_local_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_IndexLocalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_IndexLocalComponent, data: {} });

function View_IndexLocalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("INDEX")); _ck(_v, 2, 0, currVal_0); }); }
function View_IndexLocalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-index-local", [], null, null, null, View_IndexLocalComponent_0, RenderType_IndexLocalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _index_local_component__WEBPACK_IMPORTED_MODULE_3__["IndexLocalComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IndexLocalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-index-local", _index_local_component__WEBPACK_IMPORTED_MODULE_3__["IndexLocalComponent"], View_IndexLocalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/index-local/index-local.component.ts":
/*!******************************************************!*\
  !*** ./src/app/index-local/index-local.component.ts ***!
  \******************************************************/
/*! exports provided: IndexLocalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexLocalComponent", function() { return IndexLocalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var IndexLocalComponent = /** @class */ (function () {
    function IndexLocalComponent() {
    }
    IndexLocalComponent.prototype.ngOnInit = function () {
    };
    return IndexLocalComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css.shim.ngstyle.js":
/*!***********************************************************!*\
  !*** ./src/app/index/index.component.css.shim.ngstyle.js ***!
  \***********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".container[_ngcontent-%COMP%] {\n    max-width:900px;\n    margin:0em auto;\n    padding:1em;\n    padding-top:165px;\n    \n    \n    \n}\n\n[_nghost-%COMP%] {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color:#ff4081;\n    overflow-y: scroll;\n    \n}\n\n.entry[_ngcontent-%COMP%]:not(:last-child){\n    padding-bottom: 0.5em;\n    margin-bottom: 0.5em;\n    border-bottom:1px solid #bbbbbb ;\n}\n\n.list[_ngcontent-%COMP%]{\n    margin-top:1em;\n}\n\n.entry[_ngcontent-%COMP%]{\n    display: flex;\n\n}\n\n.entry[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    width:3em;\n    height: 3em;\n    border-radius: 50%;\n    flex:none;\n}\n\n.entry[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]{\n    padding-left: 0.5em;\n    flex:1 1 auto;\n}\n\n.entry[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > .intro[_ngcontent-%COMP%]{\n    color:#555555;\n}\n\n.entry[_ngcontent-%COMP%]    > .info[_ngcontent-%COMP%]    > .user[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\n    color:#777777;\n    margin-left: 0.5em;\n    text-decoration: none;\n}\n\n.def[_ngcontent-%COMP%]{\n    font-size: 0.8em;\n    color:#555555;\n    margin:0.4em;\n}\n\n.info_card[_ngcontent-%COMP%]{\n    padding:1pc;\n}\n\n.mybutton[_ngcontent-%COMP%]{\n    \n    display: inline-block;\n    margin:0.5em;\n}\n\n.display[_ngcontent-%COMP%]{\n    padding-top:1pc;\n}\n\n.display[_ngcontent-%COMP%]    > yt-live-chat-renderer[_ngcontent-%COMP%] {\n    height: calc(100% - 20px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOjkwMHB4O1xuICAgIG1hcmdpbjowZW0gYXV0bztcbiAgICBwYWRkaW5nOjFlbTtcbiAgICBwYWRkaW5nLXRvcDoxNjVweDtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6d2hpdGU7Ki9cbiAgICAvKmJvcmRlci1yYWRpdXM6IDFlbTsqL1xuICAgIC8qYm94LXNoYWRvdzowIDFweCAxcHggMXB4ICNiYmJiYmI7Ki9cbn1cblxuOmhvc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmY0MDgxO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYXBpLmktbWV0by5jb20vYmluZz9bb2JqZWN0IE9iamVjdF1cIik7Ki9cbn1cblxuLmVudHJ5Om5vdCg6bGFzdC1jaGlsZCl7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNiYmJiYmIgO1xufVxuXG4ubGlzdHtcbiAgICBtYXJnaW4tdG9wOjFlbTtcbn1cblxuLmVudHJ5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbn1cblxuLmVudHJ5ID4gaW1ne1xuICAgIHdpZHRoOjNlbTtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmxleDpub25lO1xufVxuXG4uZW50cnkgPiAuaW5mb3tcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICAgIGZsZXg6MSAxIGF1dG87XG59XG5cbi5lbnRyeSA+IC5pbmZvID4gLmludHJve1xuICAgIGNvbG9yOiM1NTU1NTU7XG59XG5cbi5lbnRyeSA+IC5pbmZvID4gLnVzZXIgPiBhe1xuICAgIGNvbG9yOiM3Nzc3Nzc7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmRlZntcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGNvbG9yOiM1NTU1NTU7XG4gICAgbWFyZ2luOjAuNGVtO1xufVxuXG4uaW5mb19jYXJke1xuICAgIHBhZGRpbmc6MXBjO1xufVxuXG4ubXlidXR0b257XG4gICAgLyp3aWR0aDoxMDBweDsqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46MC41ZW07XG59XG5cbi5kaXNwbGF5e1xuICAgIHBhZGRpbmctdG9wOjFwYztcbn1cblxuLmRpc3BsYXkgPiB5dC1saXZlLWNoYXQtcmVuZGVyZXIge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG59Il19 */"];



/***/ }),

/***/ "./src/app/index/index.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/index/index.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_IndexComponent, View_IndexComponent_0, View_IndexComponent_Host_0, IndexComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_IndexComponent", function() { return RenderType_IndexComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IndexComponent_0", function() { return View_IndexComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IndexComponent_Host_0", function() { return View_IndexComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponentNgFactory", function() { return IndexComponentNgFactory; });
/* harmony import */ var _index_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.component.css.shim.ngstyle */ "./src/app/index/index.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _alpha_chat_renderer_chat_renderer_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alpha/chat-renderer/chat-renderer.component.ngfactory */ "./src/app/alpha/chat-renderer/chat-renderer.component.ngfactory.js");
/* harmony import */ var _alpha_chat_renderer_chat_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alpha/chat-renderer/chat-renderer.component */ "./src/app/alpha/chat-renderer/chat-renderer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_IndexComponent = [_index_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_IndexComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_IndexComponent, data: {} });

function View_IndexComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["class", "entry"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 11, "div", [["class", "info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "div", [["class", "user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["[\u76F4\u64AD\u95F4]"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["[\u4E2A\u4EBA\u4E3B\u9875]"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "span", [["style", "float:right;color:#555555;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "div", [["class", "intro"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getImageUrl(_v.context.$implicit.user_id); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.user_name; _ck(_v, 5, 0, currVal_1); var currVal_2 = ("https://live.bilibili.com/" + _v.context.$implicit.room_id); _ck(_v, 6, 0, currVal_2); var currVal_3 = ("https://space.bilibili.com/" + _v.context.$implicit.user_id); _ck(_v, 8, 0, currVal_3); var currVal_4 = _co.getTimeString(_v.context.$implicit.time); _ck(_v, 11, 0, currVal_4); var currVal_5 = _v.context.$implicit.user_intro; _ck(_v, 13, 0, currVal_5); }); }
function View_IndexComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { renderer: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "demo-layout-transparent mdl-layout mdl-js-layout"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "header", [["class", "mdl-layout__header mdl-layout__header--transparent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "div", [["class", "mdl-layout__header-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "mdl-layout-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BILICHAT"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "div", [["class", "mdl-layout-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "nav", [["class", "mdl-navigation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "a", [["class", "mdl-navigation__link"], ["href", "https://github.com/3Shain/BiliChat/releases"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u4E0B\u8F7D"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "a", [["class", "mdl-navigation__link"], ["href", "https://github.com/3Shain/BiliChat"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u6E90\u7801"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "main", [["class", "mdl-layout__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 39, "div", [["class", "container mdl-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 28, "div", [["class", "mdl-card mdl-shadow--2dp mdl-cell mdl-cell--8-col info_card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BILICHAT "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["by "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "a", [["href", "https://3shain.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["3Shain"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["B\u7AD9\u4EFF\u6CB9\u7BA1\u6837\u5F0F\u8BC4\u8BBA\u673A->\u6548\u679C\u770B\u53F3\u8FB9"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "del", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u4F7FB\u7AD9\u9650\u5B9A\u8F6C\u64AD\u6210\u4E3A\u53EF\u80FD"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 12, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 3, "a", [["class", "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mybutton"], ["href", "/css4obs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["color_lens"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u6837\u5F0F\u751F\u6210\u5668 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "a", [["class", "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mybutton"], ["href", "https://github.com/3Shain/BiliChat"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" View this project on Github "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "a", [["class", "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mybutton"], ["href", "https://github.com/3Shain/BiliChat/releases"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["get_app"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u672C\u5730\u7248\u4E0B\u8F7D\u5730\u5740"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "a", [["class", "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mybutton"], ["href", "https://nodejs.org/zh-cn/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Node.js(\u8FD0\u884C\u5E93)\u4E0B\u8F7D\u5730\u5740"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u4F7F\u7528npm\u5B89\u88C5\uFF1A npm i -g bilichat"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u8BF7\u4F18\u5148\u4F7F\u7528\u672C\u5730\u90E8\u7F72\u7248\u672C,\u867D\u7136\u516C\u5171\u670D\u52A1\u5668\u80FD\u4FDD\u8BC199%\u7684\u7A33\u5B9A\u6027,\u4F46\u56E0\u516C\u5171\u670D\u52A1\u5668\u8C03\u8BD5/\u6545\u969C/\u5B95\u673A\u9020\u6210\u76F4\u64AD\u4E8B\u6545,BILICHAT\u4E0D\u4F1A\u4E3A\u6B64\u8D1F\u8D23\u3002"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 3, "div", [["class", "mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col display"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "yt-live-chat-renderer", [], null, null, null, _alpha_chat_renderer_chat_renderer_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ChatRendererComponent_0"], _alpha_chat_renderer_chat_renderer_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ChatRendererComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 114688, [[1, 4], ["renderer", 4]], 0, _alpha_chat_renderer_chat_renderer_component__WEBPACK_IMPORTED_MODULE_3__["ChatRendererComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 0, "div", [["class", "mdl-card__supporting-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 5, "div", [["class", "mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col info_card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "h5", [["style", "margin:0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u4F7F\u7528\u8BB0\u5F55"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "div", [["class", "list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_IndexComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 45, 0); var currVal_0 = _co.entrys; _ck(_v, 52, 0, currVal_0); }, null); }
function View_IndexComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-index", [], null, null, null, View_IndexComponent_0, RenderType_IndexComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IndexComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-index", _index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], View_IndexComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _alpha_chat_renderer_chat_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alpha/chat-renderer/chat-renderer.component */ "./src/app/alpha/chat-renderer/chat-renderer.component.ts");
/* harmony import */ var _danmaku_def__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../danmaku.def */ "./src/app/danmaku.def.ts");





var IndexComponent = /** @class */ (function () {
    function IndexComponent(plat, http) {
        this.plat = plat;
        this.http = http;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*if (!isPlatformBrowser(this.plat)) {
          return;
        }*/
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_server + "/history").subscribe(function (resp) {
            _this.entrys = resp;
        });
        this.renderer.sendSystemInfo('Hello World!');
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_4__["DanmakuMessage"](4331384, '3Shain', '我是单推人(指一天单推一个', 1, false, undefined, 'https://i2.hdslb.com/bfs/face/b4efacefd9fe31ae253c610168738483631d3d22.jpg'));
        this.renderer.sendSystemInfo('以下为白上吹雪第一次B限名场景复刻');
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_4__["DanmakuMessage"](0, 'DD0', 'awsl', 0, false, undefined));
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_4__["GiftMessage"](109402, '绊爱厨', '小电视', 2, 1245000, 0, '#e62117', 'https://i2.hdslb.com/bfs/face/bd02e3ed33bb93bddb146441a04f212f77f0cb4d.jpg'));
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_4__["DanmakuMessage"](0, 'DD1', '草', 0, false, undefined));
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_4__["DanmakuMessage"](0, 'DD2', '石油佬你来啦', 0, false, undefined));
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_4__["DanmakuMessage"](0, 'DD3', '草', 3, false, undefined));
        this.renderer.sendDanmaku(new _danmaku_def__WEBPACK_IMPORTED_MODULE_4__["DanmakuMessage"](0, 'DD4', '绊 爱 厨', 0, false, undefined));
    };
    IndexComponent.prototype.getImageUrl = function (uid) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_server + '/avatar/' + uid;
    };
    IndexComponent.prototype.getTimeString = function (time) {
        return (new Date(time)).toLocaleDateString() + ' ' + (new Date(time)).toLocaleTimeString();
    };
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/message-processor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/message-processor.service.ts ***!
  \**********************************************/
/*! exports provided: MessageProcessorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageProcessorService", function() { return MessageProcessorService; });
/* harmony import */ var _danmaku_def__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./danmaku.def */ "./src/app/danmaku.def.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);







var MessageProcessorService = /** @class */ (function () {
    function MessageProcessorService(http) {
        this.http = http;
        this.userLevelFilter = 0;
        this.minGiftValue = 20;
        this.showGift = true;
        this.hideGiftDanmaku = true;
        // showMember:boolean;
        // showModerator:boolean;
        this.loadAvatar = true;
        this.showJP = false;
        this.wordFilter = [
            'kimo', '风暴',
            '弹幕姬', '弹幕机',
            '别刷', '不要刷',
            '小鬼', 'biss',
            '嘴臭', '骂我',
            '梗',
            '傻逼', '弱智', '脑残', '屏蔽', 'cnm',
            '警察', '加群', '群号', 'QQ群', '出警',
            '人工智能', '老婆'
        ];
        this.Japanese = [
            'あ', 'い', 'う', 'え', 'お',
            'か', 'き', 'く', 'け', 'こ',
            'さ', 'し', 'す', 'せ', 'そ',
            'た', 'ち', 'つ', 'て', 'と',
            'な', 'に', 'ぬ', 'ね', 'の',
            'は', 'ひ', 'ふ', 'へ', 'ほ',
            'ま', 'み', 'む', 'め', 'も',
            'や', 'ゆ', 'よ',
            'ら', 'り', 'る', 'れ', 'ろ',
            'わ', 'を', 'ん',
            'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ',
            'ゃ', 'ぃ', 'ょ',
            'が', 'ぎ', 'ぐ', 'げ', 'ご',
            'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
            'だ', 'ぢ', 'づ', 'で', 'ど',
            'ば', 'び', 'ぶ', 'べ', 'ぼ',
            'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
            'ア', 'イ', 'ウ', 'エ', 'オ',
            'カ', 'キ', 'ク', 'ケ', 'コ',
            'サ', 'シ', 'ス', 'セ', 'ソ',
            'タ', 'チ', 'ツ', 'テ', 'ト',
            'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
            'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
            'マ', 'ミ', 'ム', 'メ', 'モ',
            'ヤ', 'ユ', 'ヨ',
            'ラ', 'リ', 'ル', 'レ', 'ロ',
            'ワ', 'ヲ', 'ン',
            'ァ', 'ィ', 'ゥ', 'ェ', 'ォ',
            'ャ', 'ュ', 'ョ',
            'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
            'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
            'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
            'バ', 'ビ', 'ブ', 'ベ', 'ボ',
            'パ', 'ピ', 'プ', 'ペ', 'ポ',
            'ー'
        ];
        this.blackList = [];
        this.customEmotions = [];
        this.customGiftLevel = [
            { value: 1245, color: '#e62117' },
            { value: 450, color: '#c2185b' },
            { value: 300, color: '#e65110' },
            { value: 100, color: '#ffca28' },
            { value: 50, color: '#00bfa5' },
            { value: 0, color: '#00b8d4' }
        ];
        this.silverGiftRatio = 0;
        this.pure = false;
    }
    MessageProcessorService.prototype.formMessage = function (rawData, observer) {
        var _this = this;
        if (rawData.cmd === 'DANMU_MSG') {
            if (this.blackList.indexOf(rawData.info[2][0]) !== -1) {
                return; // blackList
            }
            if (this.hideGiftDanmaku && rawData.info[0][9] > 0) {
                return; // 屏蔽礼物弹幕
            }
            if (this.userLevelFilter > rawData.info[4][0] && rawData.info[2][2] === 0 && rawData.info[7] === 0) {
                return; // 用户等级屏蔽
            }
            var content_1 = String(rawData.info[1]);
            if (this.wordFilter.some(function (item) {
                return content_1.indexOf(item) !== -1;
            })) {
                return; // 关键字屏蔽
            }
            if (this.showJP) {
                if (!this.Japanese.some(function (item) {
                    return content_1.indexOf(item) !== -1;
                })) {
                    return; //只显示日语
                }
            }
            this.avatarPreload(rawData.info[2][0]).subscribe(function (avatarUrl) {
                var l = new _danmaku_def__WEBPACK_IMPORTED_MODULE_0__["DanmakuMessage"](rawData.info[2][0], rawData.info[2][1], rawData.info[1], rawData.info[7], rawData.info[2][2] === 1, _this.getEmotionUrl(rawData.info[1]), avatarUrl);
                observer.next(l);
            });
        }
        else if (this.showGift && rawData.cmd === 'SEND_GIFT') {
            var value_1 = rawData.data.total_coin;
            if (rawData.data.coin_type !== 'gold') { // gold/silver
                value_1 *= this.silverGiftRatio;
            }
            if (value_1 < this.minGiftValue * 1000) { // 计算用的scale
                return;
            }
            this.avatarPreload(rawData.data.uid).subscribe(function (avatarUrl) {
                observer.next(new _danmaku_def__WEBPACK_IMPORTED_MODULE_0__["GiftMessage"](rawData.data.uid, rawData.data.uname, rawData.data.giftName, rawData.data.num, value_1 / 1000, 0, _this.getGiftColor(value_1 / 1000), avatarUrl));
            });
        }
        else if (rawData.cmd === 'GUARD_BUY') {
            this.avatarPreload(rawData.data.uid).subscribe(function (avatarUrl) {
                observer.next(new _danmaku_def__WEBPACK_IMPORTED_MODULE_0__["GiftMessage"](rawData.data.uid, rawData.data.username, rawData.data.gift_name, rawData.data.num, rawData.data.price / 1000, rawData.data.guard_level, _this.getGiftColor(rawData.data.price / 1000), avatarUrl));
            });
        }
    };
    MessageProcessorService.prototype.avatarPreload = function (userid) {
        if (!this.loadAvatar) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].default_avatar);
        }
        if (this.pure) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].default_avatar);
        }
        var obs = this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_server + "/avturl/" + userid)
            .pipe(
        // mapTo(x=>x.json()),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (data) {
            if (data.face === 'http://static.hdslb.com/images/member/noface.gif') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].default_avatar);
            }
            data.face = data.face.replace(/http:/g, 'https:');
            var img = new Image();
            img.referrerPolicy = 'no-referer';
            img.src = data.face + '@48w_48h';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["race"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(img, 'load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return data.face + '@48w_48h'; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(img, 'error').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].default_avatar; })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].default_avatar); }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["race"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].default_avatar; })), obs);
    };
    MessageProcessorService.prototype.getGuardName = function (level) {
        // i18n
        switch (level) {
            case 1:
                return '总督';
            case 2:
                return '提督';
            case 3:
                return '舰长';
            default:
                return null;
        }
    };
    MessageProcessorService.prototype.getEmotionUrl = function (text) {
        var ele = this.customEmotions.find(function (x) { return x.command === text; });
        if (!ele) {
            return undefined;
        }
        return ele.source;
    };
    MessageProcessorService.prototype.getGiftColor = function (value) {
        for (var _i = 0, _a = this.customGiftLevel; _i < _a.length; _i++) {
            var s = _a[_i];
            if (value >= s.value) {
                return s.color;
            }
        }
        return '#00b8d4'; // const min value color
    };
    MessageProcessorService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"]({ factory: function MessageProcessorService_Factory() { return new MessageProcessorService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); }, token: MessageProcessorService, providedIn: "root" });
    return MessageProcessorService;
}());



/***/ }),

/***/ "./src/app/viewer/viewer.component.css.shim.ngstyle.js":
/*!*************************************************************!*\
  !*** ./src/app/viewer/viewer.component.css.shim.ngstyle.js ***!
  \*************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdlci92aWV3ZXIuY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "./src/app/viewer/viewer.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/viewer/viewer.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_ViewerComponent, View_ViewerComponent_0, View_ViewerComponent_Host_0, ViewerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ViewerComponent", function() { return RenderType_ViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ViewerComponent_0", function() { return View_ViewerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ViewerComponent_Host_0", function() { return View_ViewerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerComponentNgFactory", function() { return ViewerComponentNgFactory; });
/* harmony import */ var _viewer_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer.component.css.shim.ngstyle */ "./src/app/viewer/viewer.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer.component */ "./src/app/viewer/viewer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _message_processor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message-processor.service */ "./src/app/message-processor.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_ViewerComponent = [_viewer_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ViewerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ViewerComponent, data: {} });

function View_ViewerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" viewer works!\n"]))], null, null); }
function View_ViewerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-viewer", [], null, null, null, View_ViewerComponent_0, RenderType_ViewerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _viewer_component__WEBPACK_IMPORTED_MODULE_2__["ViewerComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _message_processor_service__WEBPACK_IMPORTED_MODULE_5__["MessageProcessorService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ViewerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-viewer", _viewer_component__WEBPACK_IMPORTED_MODULE_2__["ViewerComponent"], View_ViewerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/viewer/viewer.component.ts":
/*!********************************************!*\
  !*** ./src/app/viewer/viewer.component.ts ***!
  \********************************************/
/*! exports provided: ViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerComponent", function() { return ViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _message_processor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message-processor.service */ "./src/app/message-processor.service.ts");




var ViewerComponent = /** @class */ (function () {
    function ViewerComponent(route, title, proc) {
        this.route = route;
        this.title = title;
        this.proc = proc;
    }
    ViewerComponent.prototype.ngOnInit = function () {
        this.currentRoomId = this.route.snapshot.params['id'];
        this.title.setTitle('查看模式|直播间' + this.currentRoomId);
    };
    return ViewerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    official: false,
    production: true,
    api_server: '/api',
    default_avatar: 'https://static.hdslb.com/images/member/noface.gif'
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! exports provided: AppServerModuleNgFactory, AppServerModule, LAZY_MODULE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MODULE_MAP", function() { return LAZY_MODULE_MAP; });
/* harmony import */ var _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__["AppServerModuleNgFactory"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__["AppServerModule"]; });




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}

var LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wang/Documents/BiliChat/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/express-engine/tokens":
/*!*****************************************************!*\
  !*** external "@nguniversal/express-engine/tokens" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/express-engine/tokens");

/***/ }),

/***/ "@ngx-translate/core":
/*!**************************************!*\
  !*** external "@ngx-translate/core" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngx-translate/core");

/***/ }),

/***/ "@ngx-translate/http-loader":
/*!*********************************************!*\
  !*** external "@ngx-translate/http-loader" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngx-translate/http-loader");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map