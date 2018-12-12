(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./node_modules/@agm/core/core.module.js":
/*!***********************************************!*\
  !*** ./node_modules/@agm/core/core.module.js ***!
  \***********************************************/
/*! exports provided: coreDirectives, AgmCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDirectives", function() { return coreDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return AgmCoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/map */ "./node_modules/@agm/core/directives/map.js");
/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/circle */ "./node_modules/@agm/core/directives/circle.js");
/* harmony import */ var _directives_rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/rectangle */ "./node_modules/@agm/core/directives/rectangle.js");
/* harmony import */ var _directives_info_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/info-window */ "./node_modules/@agm/core/directives/info-window.js");
/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/marker */ "./node_modules/@agm/core/directives/marker.js");
/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/polygon */ "./node_modules/@agm/core/directives/polygon.js");
/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/polyline */ "./node_modules/@agm/core/directives/polyline.js");
/* harmony import */ var _directives_polyline_point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/kml-layer */ "./node_modules/@agm/core/directives/kml-layer.js");
/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/data-layer */ "./node_modules/@agm/core/directives/data-layer.js");
/* harmony import */ var _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/maps-api-loader/lazy-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony import */ var _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony import */ var _utils_browser_globals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");
/* harmony import */ var _agm_core_directives_fit_bounds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core/directives/fit-bounds */ "./node_modules/@agm/core/directives/fit-bounds.js");
















/**
 * @internal
 */
function coreDirectives() {
    return [
        _directives_map__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _directives_marker__WEBPACK_IMPORTED_MODULE_5__["AgmMarker"], _directives_info_window__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"], _directives_circle__WEBPACK_IMPORTED_MODULE_2__["AgmCircle"], _directives_rectangle__WEBPACK_IMPORTED_MODULE_3__["AgmRectangle"],
        _directives_polygon__WEBPACK_IMPORTED_MODULE_6__["AgmPolygon"], _directives_polyline__WEBPACK_IMPORTED_MODULE_7__["AgmPolyline"], _directives_polyline_point__WEBPACK_IMPORTED_MODULE_8__["AgmPolylinePoint"], _directives_kml_layer__WEBPACK_IMPORTED_MODULE_9__["AgmKmlLayer"],
        _directives_data_layer__WEBPACK_IMPORTED_MODULE_10__["AgmDataLayer"], _agm_core_directives_fit_bounds__WEBPACK_IMPORTED_MODULE_14__["AgmFitBounds"]
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = /** @class */ (function () {
    function AgmCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
    /**
       * Please use this method when you register the module at the root level.
       */
    AgmCoreModule.forRoot = /**
       * Please use this method when you register the module at the root level.
       */
    function (lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_13__["BROWSER_GLOBALS_PROVIDERS"].concat([
                { provide: _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_12__["MapsAPILoader"], useClass: _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["LazyMapsAPILoader"] },
                { provide: _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["LAZY_MAPS_API_CONFIG"], useValue: lazyMapsAPILoaderConfig }
            ]),
        };
    };
    AgmCoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
    ];
    return AgmCoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives.js":
/*!**********************************************!*\
  !*** ./node_modules/@agm/core/directives.js ***!
  \**********************************************/
/*! exports provided: AgmMap, AgmCircle, AgmRectangle, AgmInfoWindow, AgmKmlLayer, AgmDataLayer, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmFitBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/map */ "./node_modules/@agm/core/directives/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return _directives_map__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]; });

/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/circle */ "./node_modules/@agm/core/directives/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return _directives_circle__WEBPACK_IMPORTED_MODULE_1__["AgmCircle"]; });

/* harmony import */ var _directives_rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/rectangle */ "./node_modules/@agm/core/directives/rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return _directives_rectangle__WEBPACK_IMPORTED_MODULE_2__["AgmRectangle"]; });

/* harmony import */ var _directives_info_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/info-window */ "./node_modules/@agm/core/directives/info-window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return _directives_info_window__WEBPACK_IMPORTED_MODULE_3__["AgmInfoWindow"]; });

/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/kml-layer */ "./node_modules/@agm/core/directives/kml-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return _directives_kml_layer__WEBPACK_IMPORTED_MODULE_4__["AgmKmlLayer"]; });

/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/data-layer */ "./node_modules/@agm/core/directives/data-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return _directives_data_layer__WEBPACK_IMPORTED_MODULE_5__["AgmDataLayer"]; });

/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/marker */ "./node_modules/@agm/core/directives/marker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return _directives_marker__WEBPACK_IMPORTED_MODULE_6__["AgmMarker"]; });

/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/polygon */ "./node_modules/@agm/core/directives/polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return _directives_polygon__WEBPACK_IMPORTED_MODULE_7__["AgmPolygon"]; });

/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/polyline */ "./node_modules/@agm/core/directives/polyline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return _directives_polyline__WEBPACK_IMPORTED_MODULE_8__["AgmPolyline"]; });

/* harmony import */ var _directives_polyline_point__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return _directives_polyline_point__WEBPACK_IMPORTED_MODULE_9__["AgmPolylinePoint"]; });

/* harmony import */ var _directives_fit_bounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/fit-bounds */ "./node_modules/@agm/core/directives/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return _directives_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["AgmFitBounds"]; });












//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/circle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/directives/circle.js ***!
  \*****************************************************/
/*! exports provided: AgmCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return AgmCircle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");


var AgmCircle = /** @class */ (function () {
    function AgmCircle(_manager) {
        this._manager = _manager;
        /**
           * Indicates whether this Circle handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this circle over the map. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this circle by dragging the control points shown at
           * the center and around the circumference of the circle. Defaults to false.
           */
        this.editable = false;
        /**
           * The radius in meters on the Earth's surface.
           */
        this.radius = 0;
        /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */
        this.strokePosition = 'CENTER';
        /**
           * The stroke width in pixels.
           */
        this.strokeWeight = 0;
        /**
           * Whether this circle is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the circle's center is changed.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the circle.
           */
        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the circle.
           */
        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the circle.
           */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the circle.
           */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the circle.
           */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the circle.
           */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the circle.
           */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on circle mouseout.
           */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on circle mouseover.
           */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mouseup event is fired on the circle.
           */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the circle's radius is changed.
           */
        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the circle is right-clicked on.
           */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnInit = /** @internal */
    function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnDestroy = /** @internal */
    function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    /**
       * Gets the LatLngBounds of this Circle.
       */
    AgmCircle.prototype.getBounds = /**
       * Gets the LatLngBounds of this Circle.
       */
    function () { return this._manager.getBounds(this); };
    AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    AgmCircle._mapOptions = [
        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
        'visible', 'zIndex', 'clickable'
    ];
    AgmCircle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-circle'
                },] },
    ];
    /** @nocollapse */
    AgmCircle.ctorParameters = function () { return [
        { type: _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__["CircleManager"], },
    ]; };
    AgmCircle.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['circleDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "radius": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokePosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "circleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "circleDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "drag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "radiusChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmCircle;
}());

//# sourceMappingURL=circle.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/data-layer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/directives/data-layer.js ***!
  \*********************************************************/
/*! exports provided: AgmDataLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return AgmDataLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");


var layerId = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
var AgmDataLayer = /** @class */ (function () {
    function AgmDataLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
           * This event is fired when a feature in the layer is clicked.
           */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * The geoJson to be displayed
           */
        this.geoJson = null;
    }
    AgmDataLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmDataLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.toString = /** @internal */
    function () { return "AgmDataLayer-" + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.ngOnDestroy = /** @internal */
    function () {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.ngOnChanges = /** @internal */
    function (changes) {
        var _this = this;
        if (!this._addedToManager) {
            return;
        }
        var geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        var dataOptions = {};
        AgmDataLayer._dataOptionsAttributes.forEach(function (k) { return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this[k]; });
        this._manager.setDataOptions(this, dataOptions);
    };
    AgmDataLayer._dataOptionsAttributes = ['style'];
    AgmDataLayer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-data-layer'
                },] },
    ];
    /** @nocollapse */
    AgmDataLayer.ctorParameters = function () { return [
        { type: _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_1__["DataLayerManager"], },
    ]; };
    AgmDataLayer.propDecorators = {
        "layerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "geoJson": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return AgmDataLayer;
}());

//# sourceMappingURL=data-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/fit-bounds.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/directives/fit-bounds.js ***!
  \*********************************************************/
/*! exports provided: AgmFitBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return AgmFitBounds; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
var AgmFitBounds = /** @class */ (function () {
    function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
           * If the value is true, the element gets added to the bounds of the map.
           * Default: true.
           */
        this.agmFitBounds = true;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnChanges = /**
       * @internal
       */
    function (changes) {
        this._updateBounds();
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnInit = /**
       * @internal
       */
    function () {
        var _this = this;
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
            return x.latLng.lat === y.latLng.lng;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$))
            .subscribe(function (details) { return _this._updateBounds(details); });
    };
    AgmFitBounds.prototype._updateBounds = function (newFitBoundsDetails) {
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
        else {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnDestroy = /**
       * @internal
       */
    function () {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    };
    AgmFitBounds.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[agmFitBounds]'
                },] },
    ];
    /** @nocollapse */
    AgmFitBounds.ctorParameters = function () { return [
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__["FitBoundsAccessor"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] },] },
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__["FitBoundsService"], },
    ]; };
    AgmFitBounds.propDecorators = {
        "agmFitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return AgmFitBounds;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/info-window.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agm/core/directives/info-window.js ***!
  \**********************************************************/
/*! exports provided: AgmInfoWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return AgmInfoWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");


var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = /** @class */ (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
           * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
           */
        this.isOpen = false;
        /**
           * Emits an event when the info window is closed.
           */
        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    /**
       * Opens the info window.
       */
    AgmInfoWindow.prototype.open = /**
       * Opens the info window.
       */
    function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    /**
       * Closes the info window.
       */
    AgmInfoWindow.prototype.close = /**
       * Closes the info window.
       */
    function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.toString = /** @internal */
    function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = /** @internal */
    function () { this._infoWindowManager.deleteInfoWindow(this); };
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    AgmInfoWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-info-window',
                    template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmInfoWindow.ctorParameters = function () { return [
        { type: _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    AgmInfoWindow.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableAutoPan": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "infoWindowClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmInfoWindow;
}());

//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/kml-layer.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/core/directives/kml-layer.js ***!
  \********************************************************/
/*! exports provided: AgmKmlLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return AgmKmlLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");


var layerId = 0;
var AgmKmlLayer = /** @class */ (function () {
    function AgmKmlLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
           * If true, the layer receives mouse events. Default value is true.
           */
        this.clickable = true;
        /**
           * By default, the input map is centered and zoomed to the bounding box of the contents of the
           * layer.
           * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
           * were never set.
           */
        this.preserveViewport = false;
        /**
           * Whether to render the screen overlays. Default true.
           */
        this.screenOverlays = true;
        /**
           * Suppress the rendering of info windows when layer features are clicked.
           */
        this.suppressInfoWindows = false;
        /**
           * The URL of the KML document to display.
           */
        this.url = null;
        /**
           * The z-index of the layer.
           */
        this.zIndex = null;
        /**
           * This event is fired when a feature in the layer is clicked.
           */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the KML layers default viewport has changed.
           */
        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the KML layer has finished loading.
           * At this point it is safe to read the status property to determine if the layer loaded
           * successfully.
           */
        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmKmlLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmKmlLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmKmlLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.toString = /** @internal */
    function () { return "AgmKmlLayer-" + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.ngOnDestroy = /** @internal */
    function () {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
    AgmKmlLayer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-kml-layer'
                },] },
    ];
    /** @nocollapse */
    AgmKmlLayer.ctorParameters = function () { return [
        { type: _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_1__["KmlLayerManager"], },
    ]; };
    AgmKmlLayer.propDecorators = {
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "preserveViewport": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "screenOverlays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "suppressInfoWindows": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "url": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "layerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "defaultViewportChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "statusChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmKmlLayer;
}());

//# sourceMappingURL=kml-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/map.js":
/*!**************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.js ***!
  \**************************************************/
/*! exports provided: AgmMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");











/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = /** @class */ (function () {
    function AgmMap(_elem, _mapsWrapper, _fitBoundsService) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._fitBoundsService = _fitBoundsService;
        /**
           * The longitude that defines the center of the map.
           */
        this.longitude = 0;
        /**
           * The latitude that defines the center of the map.
           */
        this.latitude = 0;
        /**
           * The zoom level of the map. The default zoom level is 8.
           */
        this.zoom = 8;
        /**
           * Enables/disables if map is draggable.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
           * Enables/disables zoom and center on double click. Enabled by default.
           */
        this.disableDoubleClickZoom = false;
        /**
           * Enables/disables all default UI of the Google map. Please note: When the map is created, this
           * value cannot get updated.
           */
        this.disableDefaultUI = false;
        /**
           * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
           */
        this.scrollwheel = true;
        /**
           * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
           * enabled by default.
           */
        this.keyboardShortcuts = true;
        /**
           * The enabled/disabled state of the Zoom control.
           */
        this.zoomControl = true;
        /**
           * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
           * modes, these styles will only apply to labels and geometry.
           */
        this.styles = [];
        /**
           * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
           * used to
           * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
           */
        this.usePanning = false;
        /**
           * The initial enabled/disabled state of the Street View Pegman control.
           * This control is part of the default UI, and should be set to false when displaying a map type
           * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
           */
        this.streetViewControl = true;
        /**
           * Sets the viewport to contain the given bounds.
           * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
           */
        this.fitBounds = false;
        /**
           * The initial enabled/disabled state of the Scale control. This is disabled by default.
           */
        this.scaleControl = false;
        /**
           * The initial enabled/disabled state of the Map type control.
           */
        this.mapTypeControl = false;
        /**
           * The initial enabled/disabled state of the Pan control.
           */
        this.panControl = false;
        /**
           * The initial enabled/disabled state of the Rotate control.
           */
        this.rotateControl = false;
        /**
           * The initial enabled/disabled state of the Fullscreen control.
           */
        this.fullscreenControl = false;
        /**
           * The map mapTypeId. Defaults to 'roadmap'.
           */
        this.mapTypeId = 'roadmap';
        /**
           * When false, map icons are not clickable. A map icon represents a point of interest,
           * also known as a POI. By default map icons are clickable.
           */
        this.clickableIcons = true;
        /**
           * This setting controls how gestures on the map are handled.
           * Allowed values:
           * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
           * - 'greedy'      (All touch gestures pan or zoom the map.)
           * - 'none'        (The map cannot be panned or zoomed by user gestures.)
           * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
           */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
           * This event emitter gets emitted when the user clicks on the map (but not when they click on a
           * marker or infoWindow).
           */
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user right-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user double-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter is fired when the map center changes.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the viewport bounds have changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the mapTypeId property changes.
           */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the map becomes idle after panning or zooming.
           */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the zoom level has changed.
           */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the google map is fully initialized.
           * You get the google.maps.Map instance as a result of this EventEmitter.
           */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnInit = /** @internal */
    function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    };
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnDestroy = /** @internal */
    function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    };
    /* @internal */
    /* @internal */
    AgmMap.prototype.ngOnChanges = /* @internal */
    function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    AgmMap.prototype.triggerResize = /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                this._updateBounds(this.fitBounds);
        }
    };
    AgmMap.prototype._subscribeToFitBoundsUpdates = function () {
        var _this = this;
        this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(function (b) { return _this._updateBounds(b); });
    };
    AgmMap.prototype._updateBounds = function (bounds) {
        if (this._isLatLngBoundsLiteral(bounds) && google && google.maps) {
            var newBounds = google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds);
            return;
        }
        this._mapsWrapper.fitBounds(bounds);
    };
    AgmMap.prototype._isLatLngBoundsLiteral = function (bounds) {
        return bounds != null && bounds.extend === undefined;
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapTypeIdChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
       * Map option attributes that can change over time
       */
    AgmMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
        'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
        'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
        'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
        'mapTypeId', 'clickableIcons', 'gestureHandling'
    ];
    AgmMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-map',
                    providers: [
                        _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__["MarkerManager"], _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__["InfoWindowManager"], _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__["CircleManager"], _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__["RectangleManager"],
                        _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__["PolylineManager"], _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__["PolygonManager"], _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__["KmlLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"],
                        _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"]
                    ],
                    host: {
                        // todo: deprecated - we will remove it with the next version
                        '[class.sebm-google-map-container]': 'true'
                    },
                    styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                    template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmMap.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], },
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"], },
    ]; };
    AgmMap.propDecorators = {
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mapDraggable',] },],
        "disableDoubleClickZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableDefaultUI": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollwheel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "backgroundColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggableCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggingCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "keyboardShortcuts": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styles": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "usePanning": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickableIcons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "gestureHandling": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapTypeIdChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "idle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "zoomChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapReady": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmMap;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/marker.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/directives/marker.js ***!
  \*****************************************************/
/*! exports provided: AgmMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return AgmMarker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _info_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-window */ "./node_modules/@agm/core/directives/info-window.js");





var markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarker = /** @class */ (function () {
    function AgmMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
           * If true, the marker can be dragged. Default value is false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If true, the marker is visible
           */
        this.visible = true;
        /**
           * Whether to automatically open the child info window when the marker is clicked.
           */
        this.openInfoWindow = true;
        /**
           * The marker's opacity between 0.0 and 1.0.
           */
        this.opacity = 1;
        /**
           * All markers are displayed on the map in order of their zIndex, with higher values displaying in
           * front of markers with lower values. By default, markers are displayed according to their
           * vertical position on screen, with lower markers appearing in front of markers further up the
           * screen.
           */
        this.zIndex = 1;
        /**
           * If true, the marker can be clicked. Default value is true.
           */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
           * This event emitter gets emitted when the user clicks on the marker.
           */
        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user rightclicks on the marker.
           */
        this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the marker.
           */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user mouses over the marker.
           */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user mouses outside the marker.
           */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * @internal
           */
        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this._id = (markerId++).toString();
    }
    /* @internal */
    /* @internal */
    AgmMarker.prototype.ngAfterContentInit = /* @internal */
    function () {
        var _this = this;
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
    };
    AgmMarker.prototype.handleInfoWindowUpdate = function () {
        var _this = this;
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this;
        });
    };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
        }
        if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._updateFitBoundsDetails();
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
            this._updateFitBoundsDetails();
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
        if (changes['animation']) {
            this._markerManager.updateAnimation(this);
        }
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmMarker.prototype.getFitBoundsDetails$ = /**
       * @internal
       */
    function () {
        return this._fitBoundsDetails$.asObservable();
    };
    AgmMarker.prototype._updateFitBoundsDetails = function () {
        this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
    };
    AgmMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow) {
                _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
            }
            _this.markerClick.emit(_this);
        });
        this._observableSubscriptions.push(cs);
        var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
            _this.markerRightClick.emit(null);
        });
        this._observableSubscriptions.push(rc);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        var mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(function (e) {
            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        var mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(function (e) {
            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
    };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.toString = /** @internal */
    function () { return 'AgmMarker-' + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.ngOnDestroy = /** @internal */
    function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmMarker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-marker',
                    providers: [
                        { provide: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_2__["FitBoundsAccessor"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AgmMarker; }) }
                    ],
                    inputs: [
                        'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
                        'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'
                    ],
                    outputs: ['markerClick', 'dragEnd', 'mouseOver', 'mouseOut']
                },] },
    ];
    /** @nocollapse */
    AgmMarker.ctorParameters = function () { return [
        { type: _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    AgmMarker.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['markerDraggable',] },],
        "iconUrl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "openInfoWindow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "opacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['markerClickable',] },],
        "markerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "markerRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "infoWindow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_info_window__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"],] },],
    };
    return AgmMarker;
}());

//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polygon.js":
/*!******************************************************!*\
  !*** ./node_modules/@agm/core/directives/polygon.js ***!
  \******************************************************/
/*! exports provided: AgmPolygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return AgmPolygon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");


/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
var AgmPolygon = /** @class */ (function () {
    function AgmPolygon(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
           * Indicates whether this Polygon handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this shape over the map. The geodesic
           * property defines the mode of dragging. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this shape by dragging the control
           * points shown at the vertices and on each segment. Defaults to false.
           */
        this.editable = false;
        /**
           * When true, edges of the polygon are interpreted as geodesic and will
           * follow the curvature of the Earth. When false, edges of the polygon are
           * rendered as straight lines in screen space. Note that the shape of a
           * geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */
        this.geodesic = false;
        /**
           * The ordered sequence of coordinates that designates a closed loop.
           * Unlike polylines, a polygon may consist of one or more paths.
           *  As a result, the paths property may specify one or more arrays of
           * LatLng coordinates. Paths are closed automatically; do not repeat the
           * first vertex of the path as the last vertex. Simple polygons may be
           * defined using a single array of LatLngs. More complex polygons may
           * specify an array of arrays. Any simple arrays are converted into Arrays.
           * Inserting or removing LatLngs from the Array will automatically update
           * the polygon on the map.
           */
        this.paths = [];
        /**
           * This event is fired when the DOM click event is fired on the Polygon.
           */
        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM dblclick event is fired on the Polygon.
           */
        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the polygon.
           */
        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the polygon.
           */
        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the polygon.
           */
        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the Polygon.
           */
        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the Polygon.
           */
        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polygon mouseout.
           */
        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polygon mouseover.
           */
        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired whe the DOM mouseup event is fired on the Polygon
           */
        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This even is fired when the Polygon is right-clicked on.
           */
        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.ngAfterContentInit = /** @internal */
    function () {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    };
    AgmPolygon.prototype.ngOnChanges = function (changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    };
    AgmPolygon.prototype._init = function () {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolygon.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    AgmPolygon.prototype._updatePolygonOptions = function (changes) {
        return Object.keys(changes)
            .filter(function (k) { return AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    };
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.ngOnDestroy = /** @internal */
    function () {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmPolygon._polygonOptionsAttributes = [
        'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
        'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
        'editable', 'visible'
    ];
    AgmPolygon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-polygon'
                },] },
    ];
    /** @nocollapse */
    AgmPolygon.ctorParameters = function () { return [
        { type: _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_1__["PolygonManager"], },
    ]; };
    AgmPolygon.propDecorators = {
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['polyDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "geodesic": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "paths": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "polyClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDrag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmPolygon;
}());

//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline-point.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline-point.js ***!
  \*************************************************************/
/*! exports provided: AgmPolylinePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return AgmPolylinePoint; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var AgmPolylinePoint = /** @class */ (function () {
    function AgmPolylinePoint() {
        /**
           * This event emitter gets emitted when the position of the point changed.
           */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    AgmPolylinePoint.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'agm-polyline-point' },] },
    ];
    /** @nocollapse */
    AgmPolylinePoint.ctorParameters = function () { return []; };
    AgmPolylinePoint.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "positionChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmPolylinePoint;
}());

//# sourceMappingURL=polyline-point.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline.js ***!
  \*******************************************************/
/*! exports provided: AgmPolyline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return AgmPolyline; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _polyline_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");



var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmPolyline = /** @class */ (function () {
    function AgmPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
           * Indicates whether this Polyline handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this shape over the map. The geodesic property defines the
           * mode of dragging. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this shape by dragging the control points shown at the
           * vertices and on each segment. Defaults to false.
           */
        this.editable = false;
        /**
           * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
           * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
           * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */
        this.geodesic = false;
        /**
           * Whether this polyline is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the DOM click event is fired on the Polyline.
           */
        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM dblclick event is fired on the Polyline.
           */
        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the polyline.
           */
        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the polyline.
           */
        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the polyline.
           */
        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the Polyline.
           */
        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the Polyline.
           */
        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polyline mouseout.
           */
        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polyline mouseover.
           */
        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired whe the DOM mouseup event is fired on the Polyline
           */
        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This even is fired when the Polyline is right-clicked on.
           */
        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.ngAfterContentInit = /** @internal */
    function () {
        var _this = this;
        if (this.points.length) {
            this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this);
    };
    AgmPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    AgmPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype._getPoints = /** @internal */
    function () {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.ngOnDestroy = /** @internal */
    function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmPolyline._polylineOptionsAttributes = [
        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
        'zIndex'
    ];
    AgmPolyline.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-polyline'
                },] },
    ];
    /** @nocollapse */
    AgmPolyline.ctorParameters = function () { return [
        { type: _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_1__["PolylineManager"], },
    ]; };
    AgmPolyline.propDecorators = {
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['polylineDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "geodesic": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "lineClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDrag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "points": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_polyline_point__WEBPACK_IMPORTED_MODULE_2__["AgmPolylinePoint"],] },],
    };
    return AgmPolyline;
}());

//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/rectangle.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/core/directives/rectangle.js ***!
  \********************************************************/
/*! exports provided: AgmRectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return AgmRectangle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");


var AgmRectangle = /** @class */ (function () {
    function AgmRectangle(_manager) {
        this._manager = _manager;
        /**
           * Indicates whether this Rectangle handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this rectangle over the map. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this rectangle by dragging the control points shown at
           * the center and around the circumference of the rectangle. Defaults to false.
           */
        this.editable = false;
        /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */
        this.strokePosition = 'CENTER';
        /**
           * The stroke width in pixels.
           */
        this.strokeWeight = 0;
        /**
           * Whether this rectangle is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the rectangle's is changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */
        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */
        this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the rectangle.
           */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the rectangle.
           */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the rectangle.
           */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the rectangle.
           */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the rectangle.
           */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on rectangle mouseout.
           */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on rectangle mouseover.
           */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mouseup event is fired on the rectangle.
           */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the rectangle is right-clicked on.
           */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnInit = /** @internal */
    function () {
        this._manager.addRectangle(this);
        this._rectangleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._rectangleAddedToManager) {
            return;
        }
        if (changes['north'] ||
            changes['east'] ||
            changes['south'] ||
            changes['west']) {
            this._manager.setBounds(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        this._updateRectangleOptionsChanges(changes);
    };
    AgmRectangle.prototype._updateRectangleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmRectangle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmRectangle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('bounds_changed', this.boundsChange);
        events.set('click', this.rectangleClick);
        events.set('dblclick', this.rectangleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager
                .createEventObservable(eventName, _this)
                .subscribe(function (value) {
                switch (eventName) {
                    case 'bounds_changed':
                        _this._manager.getBounds(_this).then(function (bounds) {
                            return eventEmitter.emit({
                                north: bounds.getNorthEast().lat(),
                                east: bounds.getNorthEast().lng(),
                                south: bounds.getSouthWest().lat(),
                                west: bounds.getSouthWest().lng()
                            });
                        });
                        break;
                    default:
                        eventEmitter.emit({
                            coords: { lat: value.latLng.lat(), lng: value.latLng.lng() }
                        });
                }
            }));
        });
    };
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnDestroy = /** @internal */
    function () {
        this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
        });
        this._eventSubscriptions = null;
        this._manager.removeRectangle(this);
    };
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    /**
       * Gets the LatLngBounds of this Rectangle.
       */
    AgmRectangle.prototype.getBounds = /**
       * Gets the LatLngBounds of this Rectangle.
       */
    function () {
        return this._manager.getBounds(this);
    };
    AgmRectangle._mapOptions = [
        'fillColor',
        'fillOpacity',
        'strokeColor',
        'strokeOpacity',
        'strokePosition',
        'strokeWeight',
        'visible',
        'zIndex',
        'clickable'
    ];
    AgmRectangle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-rectangle'
                },] },
    ];
    /** @nocollapse */
    AgmRectangle.ctorParameters = function () { return [
        { type: _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_1__["RectangleManager"], },
    ]; };
    AgmRectangle.propDecorators = {
        "north": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "east": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "south": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "west": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['rectangleDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokePosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rectangleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rectangleDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "drag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmRectangle;
}());

//# sourceMappingURL=rectangle.js.map

/***/ }),

/***/ "./node_modules/@agm/core/index.js":
/*!*****************************************!*\
  !*** ./node_modules/@agm/core/index.js ***!
  \*****************************************/
/*! exports provided: AgmCoreModule, AgmMap, AgmCircle, AgmRectangle, AgmInfoWindow, AgmKmlLayer, AgmDataLayer, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmFitBounds, GoogleMapsAPIWrapper, CircleManager, RectangleManager, InfoWindowManager, MarkerManager, PolygonManager, PolylineManager, KmlLayerManager, DataLayerManager, GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader, MapsAPILoader, NoOpMapsAPILoader, FitBoundsAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ "./node_modules/@agm/core/directives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmCircle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmRectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmInfoWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmKmlLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmDataLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolygon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolyline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolylinePoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmFitBounds"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./node_modules/@agm/core/services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["RectangleManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["MarkerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["PolygonManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["PolylineManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["KmlLayerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["DataLayerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsScriptProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LAZY_MAPS_API_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LazyMapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["NoOpMapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["FitBoundsAccessor"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.module */ "./node_modules/@agm/core/core.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services.js":
/*!********************************************!*\
  !*** ./node_modules/@agm/core/services.js ***!
  \********************************************/
/*! exports provided: GoogleMapsAPIWrapper, CircleManager, RectangleManager, InfoWindowManager, MarkerManager, PolygonManager, PolylineManager, KmlLayerManager, DataLayerManager, GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader, MapsAPILoader, NoOpMapsAPILoader, FitBoundsAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_0__["GoogleMapsAPIWrapper"]; });

/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]; });

/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_2__["RectangleManager"]; });

/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__["InfoWindowManager"]; });

/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__["MarkerManager"]; });

/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__["PolygonManager"]; });

/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__["PolylineManager"]; });

/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__["KmlLayerManager"]; });

/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__["DataLayerManager"]; });

/* harmony import */ var _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/maps-api-loader/lazy-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsScriptProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["LAZY_MAPS_API_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["LazyMapsAPILoader"]; });

/* harmony import */ var _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__["MapsAPILoader"]; });

/* harmony import */ var _services_maps_api_loader_noop_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/maps-api-loader/noop-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return _services_maps_api_loader_noop_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["NoOpMapsAPILoader"]; });

/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return _services_fit_bounds__WEBPACK_IMPORTED_MODULE_12__["FitBoundsAccessor"]; });














//# sourceMappingURL=services.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/fit-bounds.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/services/fit-bounds.js ***!
  \*******************************************************/
/*! exports provided: FitBoundsAccessor, FitBoundsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsService", function() { return FitBoundsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");




/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
var /**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
FitBoundsAccessor = /** @class */ (function () {
    function FitBoundsAccessor() {
    }
    return FitBoundsAccessor;
}());
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */

/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
var FitBoundsService = /** @class */ (function () {
    function FitBoundsService(loader) {
        var _this = this;
        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function () { return _this._includeInBounds$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (time) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, time); }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (includeInBounds) { return _this._generateBounds(includeInBounds); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    FitBoundsService.prototype._generateBounds = function (includeInBounds) {
        var bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(function (b) { return bounds.extend(b); });
        return bounds;
    };
    FitBoundsService.prototype.addToBounds = function (latLng) {
        var id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        var map = this._includeInBounds$.value;
        map.set(id, latLng);
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.removeFromBounds = function (latLng) {
        var map = this._includeInBounds$.value;
        map.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.changeFitBoundsChangeSampleTime = function (timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    };
    FitBoundsService.prototype.getBounds$ = function () {
        return this.bounds$;
    };
    FitBoundsService.prototype._createIdentifier = function (latLng) {
        return latLng.lat + "+" + latLng.lng;
    };
    FitBoundsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FitBoundsService.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], },
    ]; };
    return FitBoundsService;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/google-maps-api-wrapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/google-maps-api-wrapper.js ***!
  \********************************************************************/
/*! exports provided: GoogleMapsAPIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = /** @class */ (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);
                _this._mapResolver(map);
                return;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    /**
       * Creates a google map marker with the map context
       */
    GoogleMapsAPIWrapper.prototype.createMarker = /**
       * Creates a google map marker with the map context
       */
    function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    /**
       * Creates a google.map.Circle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createCircle = /**
       * Creates a google.map.Circle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    /**
       * Creates a google.map.Rectangle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createRectangle = /**
       * Creates a google.map.Rectangle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Rectangle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    /**
       * Creates a new google.map.Data layer for the current map
       */
    GoogleMapsAPIWrapper.prototype.createDataLayer = /**
       * Creates a new google.map.Data layer for the current map
       */
    function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    /**
       * Determines if given coordinates are insite a Polygon path.
       */
    GoogleMapsAPIWrapper.prototype.containsLocation = /**
       * Determines if given coordinates are insite a Polygon path.
       */
    function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
        this._map.then(function (map) {
            google.maps.event.clearInstanceListeners(map);
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
        return this._map.then(function (map) { return map.getMapTypeId(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    GoogleMapsAPIWrapper.prototype.getNativeMap = /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    /**
       * Triggers the given event name on the map instance.
       */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = /**
       * Triggers the given event name on the map instance.
       */
    function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    GoogleMapsAPIWrapper.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return GoogleMapsAPIWrapper;
}());

//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/circle-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/circle-manager.js ***!
  \********************************************************************/
/*! exports provided: CircleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var CircleManager = /** @class */ (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    /**
       * Removes the given circle from the map.
       */
    CircleManager.prototype.removeCircle = /**
       * Removes the given circle from the map.
       */
    function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CircleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return CircleManager;
}());

//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/data-layer-manager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/data-layer-manager.js ***!
  \************************************************************************/
/*! exports provided: DataLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = /** @class */ (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    /**
       * Adds a new Data Layer to the map.
       */
    DataLayerManager.prototype.addDataLayer = /**
       * Adds a new Data Layer to the map.
       */
    function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    DataLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    DataLayerManager.prototype.getDataFeatures = /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    DataLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    DataLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return DataLayerManager;
}());

//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/info-window-manager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/info-window-manager.js ***!
  \*************************************************************************/
/*! exports provided: InfoWindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");




var InfoWindowManager = /** @class */ (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
            });
        });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    InfoWindowManager.prototype.createEventObservable = /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    function (eventName, infoWindow) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    InfoWindowManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    return InfoWindowManager;
}());

//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/kml-layer-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/kml-layer-manager.js ***!
  \***********************************************************************/
/*! exports provided: KmlLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = /** @class */ (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    /**
       * Adds a new KML Layer to the map.
       */
    KmlLayerManager.prototype.addKmlLayer = /**
       * Adds a new KML Layer to the map.
       */
    function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    KmlLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    KmlLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return KmlLayerManager;
}());

//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/marker-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/marker-manager.js ***!
  \********************************************************************/
/*! exports provided: MarkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var MarkerManager = /** @class */ (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.updateAnimation = function (marker) {
        return this._markers.get(marker).then(function (m) {
            if (typeof marker.animation === 'string') {
                m.setAnimation(google.maps.Animation[marker.animation]);
            }
            else {
                m.setAnimation(marker.animation);
            }
        });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
            animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MarkerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return MarkerManager;
}());

//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polygon-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polygon-manager.js ***!
  \*********************************************************************/
/*! exports provided: PolygonManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolygonManager = /** @class */ (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolygonManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolygonManager;
}());

//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polyline-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polyline-manager.js ***!
  \**********************************************************************/
/*! exports provided: PolylineManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolylineManager = /** @class */ (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolylineManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolylineManager;
}());

//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/rectangle-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/rectangle-manager.js ***!
  \***********************************************************************/
/*! exports provided: RectangleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var RectangleManager = /** @class */ (function () {
    function RectangleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    RectangleManager.prototype.addRectangle = function (rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
        }));
    };
    /**
     * Removes the given rectangle from the map.
     */
    /**
       * Removes the given rectangle from the map.
       */
    RectangleManager.prototype.removeRectangle = /**
       * Removes the given rectangle from the map.
       */
    function (rectangle) {
        var _this = this;
        return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);
            _this._rectangles.delete(rectangle);
        });
    };
    RectangleManager.prototype.setOptions = function (rectangle, options) {
        return this._rectangles.get(rectangle).then(function (r) { return r.setOptions(options); });
    };
    RectangleManager.prototype.getBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) { return r.getBounds(); });
    };
    RectangleManager.prototype.setBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            });
        });
    };
    RectangleManager.prototype.setEditable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
        });
    };
    RectangleManager.prototype.setDraggable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
        });
    };
    RectangleManager.prototype.setVisible = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
        });
    };
    RectangleManager.prototype.createEventObservable = function (eventName, rectangle) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var listener = null;
            _this._rectangles.get(rectangle).then(function (r) {
                listener = r.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    RectangleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    RectangleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return RectangleManager;
}());

//# sourceMappingURL=rectangle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js ***!
  \*********************************************************************************/
/*! exports provided: GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return GoogleMapsScriptProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return LazyMapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");
/* harmony import */ var _maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
var LazyMapsAPILoader = /** @class */ (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        if (config === void 0) { config = null; }
        var _this = _super.call(this) || this;
        _this._SCRIPT_ID = 'agmGoogleMapsApiScript';
        _this.callbackName = "agmLazyMapsAPILoader";
        _this._config = config || {};
        _this._windowRef = w;
        _this._documentRef = d;
        return _this;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var window = this._windowRef.getNativeWindow();
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
        }
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        // this can happen in HMR situations or Stackblitz.io editors.
        var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        script.src = this._getScriptSrc(this.callbackName);
        this._assignScriptLoadingPromise(script);
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._assignScriptLoadingPromise = function (scriptElem) {
        var _this = this;
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[_this.callbackName] = function () {
                resolve();
            };
            scriptElem.onerror = function (error) {
                reject(error);
            };
        });
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || '3',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) {
            return entry.key + "=" + entry.value;
        })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    LazyMapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    LazyMapsAPILoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAZY_MAPS_API_CONFIG,] },] },
        { type: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__["WindowRef"], },
        { type: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__["DocumentRef"], },
    ]; };
    return LazyMapsAPILoader;
}(_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]));

//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js ***!
  \****************************************************************************/
/*! exports provided: MapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MapsAPILoader = /** @class */ (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return MapsAPILoader;
}());

//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js ***!
  \*********************************************************************************/
/*! exports provided: NoOpMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return NoOpMapsAPILoader; });
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var /**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
NoOpMapsAPILoader = /** @class */ (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    return NoOpMapsAPILoader;
}());
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */

//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/utils/browser-globals.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/utils/browser-globals.js ***!
  \*********************************************************/
/*! exports provided: WindowRef, DocumentRef, BROWSER_GLOBALS_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRef", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_GLOBALS_PROVIDERS", function() { return BROWSER_GLOBALS_PROVIDERS; });
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () { return window; };
    return WindowRef;
}());

var DocumentRef = /** @class */ (function () {
    function DocumentRef() {
    }
    DocumentRef.prototype.getNativeDocument = function () { return document; };
    return DocumentRef;
}());

var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
//# sourceMappingURL=browser-globals.js.map

/***/ }),

/***/ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js")) :
	undefined;
}(this, (function (exports,core,common,platformBrowser) { 'use strict';

var NgxGalleryActionComponent = /** @class */ (function () {
    function NgxGalleryActionComponent() {
        this.disabled = false;
        this.titleText = '';
        this.onClick = new core.EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NgxGalleryActionComponent.prototype.handleClick = function (event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }
        event.stopPropagation();
        event.preventDefault();
    };
    NgxGalleryActionComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-gallery-action',
                    template: "\n        <div class=\"ngx-gallery-icon\" [class.ngx-gallery-icon-disabled]=\"disabled\"\n            aria-hidden=\"true\"\n            title=\"{{ titleText }}\"\n            (click)=\"handleClick($event)\">\n                <i class=\"ngx-gallery-icon-content {{ icon }}\"></i>\n        </div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryActionComponent.ctorParameters = function () { return []; };
    NgxGalleryActionComponent.propDecorators = {
        'icon': [{ type: core.Input },],
        'disabled': [{ type: core.Input },],
        'titleText': [{ type: core.Input },],
        'onClick': [{ type: core.Output },],
    };
    return NgxGalleryActionComponent;
}());

var NgxGalleryArrowsComponent = /** @class */ (function () {
    function NgxGalleryArrowsComponent() {
        this.onPrevClick = new core.EventEmitter();
        this.onNextClick = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxGalleryArrowsComponent.prototype.handlePrevClick = function () {
        this.onPrevClick.emit();
    };
    /**
     * @return {?}
     */
    NgxGalleryArrowsComponent.prototype.handleNextClick = function () {
        this.onNextClick.emit();
    };
    NgxGalleryArrowsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-gallery-arrows',
                    template: "\n        <div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-left\">\n            <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handlePrevClick()\" [class.ngx-gallery-disabled]=\"prevDisabled\">\n                <i class=\"ngx-gallery-icon-content {{arrowPrevIcon}}\"></i>\n            </div>\n        </div>\n        <div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-right\">\n            <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handleNextClick()\" [class.ngx-gallery-disabled]=\"nextDisabled\">\n                <i class=\"ngx-gallery-icon-content {{arrowNextIcon}}\"></i>\n            </div>\n        </div>\n    ",
                    styles: [".ngx-gallery-arrow-wrapper { position: absolute; height: 100%; width: 1px; display: table; z-index: 2000; table-layout: fixed; } .ngx-gallery-arrow-left { left: 0px; } .ngx-gallery-arrow-right { right: 0px; } .ngx-gallery-arrow { top: 50%; transform: translateY(-50%); cursor: pointer; } .ngx-gallery-arrow.ngx-gallery-disabled { opacity: 0.6; cursor: default; } .ngx-gallery-arrow-left .ngx-gallery-arrow { left: 10px; } .ngx-gallery-arrow-right .ngx-gallery-arrow { right: 10px; } "]
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryArrowsComponent.ctorParameters = function () { return []; };
    NgxGalleryArrowsComponent.propDecorators = {
        'prevDisabled': [{ type: core.Input },],
        'nextDisabled': [{ type: core.Input },],
        'arrowPrevIcon': [{ type: core.Input },],
        'arrowNextIcon': [{ type: core.Input },],
        'onPrevClick': [{ type: core.Output },],
        'onNextClick': [{ type: core.Output },],
    };
    return NgxGalleryArrowsComponent;
}());

var NgxGalleryHelperService = /** @class */ (function () {
    /**
     * @param {?} renderer
     */
    function NgxGalleryHelperService(renderer) {
        this.renderer = renderer;
        this.swipeHandlers = new Map();
    }
    /**
     * @param {?} status
     * @param {?} element
     * @param {?} id
     * @param {?} nextHandler
     * @param {?} prevHandler
     * @return {?}
     */
    NgxGalleryHelperService.prototype.manageSwipe = function (status, element, id, nextHandler, prevHandler) {
        var /** @type {?} */ handlers = this.getSwipeHandlers(id);
        // swipeleft and swiperight are available only if hammerjs is included
        try {
            if (status && !handlers) {
                this.swipeHandlers.set(id, [
                    this.renderer.listen(element.nativeElement, 'swipeleft', function () { return nextHandler(); }),
                    this.renderer.listen(element.nativeElement, 'swiperight', function () { return prevHandler(); })
                ]);
            }
            else if (!status && handlers) {
                handlers.map(function (handler) { return handler(); });
                this.removeSwipeHandlers(id);
            }
        }
        catch (e) { }
    };
    /**
     * @param {?} url
     * @return {?}
     */
    NgxGalleryHelperService.prototype.validateUrl = function (url) {
        if (url.replace) {
            return url.replace(new RegExp(' ', 'g'), '%20');
        }
        else {
            return url;
        }
    };
    /**
     * @param {?} image
     * @return {?}
     */
    NgxGalleryHelperService.prototype.getBackgroundUrl = function (image) {
        return 'url(\'' + this.validateUrl(image) + '\')';
    };
    /**
     * @param {?} id
     * @return {?}
     */
    NgxGalleryHelperService.prototype.getSwipeHandlers = function (id) {
        return this.swipeHandlers.get(id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    NgxGalleryHelperService.prototype.removeSwipeHandlers = function (id) {
        this.swipeHandlers.delete(id);
    };
    NgxGalleryHelperService.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryHelperService.ctorParameters = function () { return [
        { type: core.Renderer, },
    ]; };
    return NgxGalleryHelperService;
}());

var NgxGalleryAnimation = /** @class */ (function () {
    function NgxGalleryAnimation() {
    }
    NgxGalleryAnimation.Fade = 'fade';
    NgxGalleryAnimation.Slide = 'slide';
    NgxGalleryAnimation.Rotate = 'rotate';
    NgxGalleryAnimation.Zoom = 'zoom';
    return NgxGalleryAnimation;
}());

var NgxGalleryImageComponent = /** @class */ (function () {
    /**
     * @param {?} sanitization
     * @param {?} elementRef
     * @param {?} helperService
     */
    function NgxGalleryImageComponent(sanitization, elementRef, helperService) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.onClick = new core.EventEmitter();
        this.onActiveChange = new core.EventEmitter();
        this.canChangeImage = true;
    }
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.ngOnInit = function () {
        if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
        if (this.autoPlay) {
            this.startAutoPlay();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'image', function () { return _this.showNext(); }, function () { return _this.showPrev(); });
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.onMouseEnter = function () {
        if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.onMouseLeave = function () {
        if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.reset = function (index) {
        this.selectedIndex = index;
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.getImages = function () {
        if (this.lazyLoading) {
            var /** @type {?} */ indexes_1 = [this.selectedIndex];
            var /** @type {?} */ prevIndex = this.selectedIndex - 1;
            if (prevIndex === -1 && this.infinityMove) {
                indexes_1.push(this.images.length - 1);
            }
            else if (prevIndex >= 0) {
                indexes_1.push(prevIndex);
            }
            var /** @type {?} */ nextIndex = this.selectedIndex + 1;
            if (nextIndex == this.images.length && this.infinityMove) {
                indexes_1.push(0);
            }
            else if (nextIndex < this.images.length) {
                indexes_1.push(nextIndex);
            }
            return this.images.filter(function (img, i) { return indexes_1.indexOf(i) != -1; });
        }
        else {
            return this.images;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.startAutoPlay = function () {
        var _this = this;
        this.stopAutoPlay();
        this.timer = setInterval(function () {
            if (!_this.showNext()) {
                _this.selectedIndex = -1;
                _this.showNext();
            }
        }, this.autoPlayInterval);
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.stopAutoPlay = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.handleClick = function (event, index) {
        if (this.clickable) {
            this.onClick.emit(index);
            event.stopPropagation();
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.showNext = function () {
        if (this.canShowNext() && this.canChangeImage) {
            this.selectedIndex++;
            if (this.selectedIndex === this.images.length) {
                this.selectedIndex = 0;
            }
            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.showPrev = function () {
        if (this.canShowPrev() && this.canChangeImage) {
            this.selectedIndex--;
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.images.length - 1;
            }
            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.setChangeTimeout = function () {
        var _this = this;
        this.canChangeImage = false;
        var /** @type {?} */ timeout = 1000;
        if (this.animation === NgxGalleryAnimation.Slide
            || this.animation === NgxGalleryAnimation.Fade) {
            timeout = 500;
        }
        setTimeout(function () {
            _this.canChangeImage = true;
        }, timeout);
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.canShowNext = function () {
        if (this.images) {
            return this.infinityMove || this.selectedIndex < this.images.length - 1
                ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.canShowPrev = function () {
        if (this.images) {
            return this.infinityMove || this.selectedIndex > 0 ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} image
     * @return {?}
     */
    NgxGalleryImageComponent.prototype.getSafeUrl = function (image) {
        return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
    };
    NgxGalleryImageComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-gallery-image',
                    template: "\n        <div class=\"ngx-gallery-image-wrapper ngx-gallery-animation-{{animation}} ngx-gallery-image-size-{{size}}\">\n            <div class=\"ngx-gallery-image\" *ngFor=\"let image of getImages(); let i = index;\" [ngClass]=\"{ 'ngx-gallery-active': selectedIndex == image.index, 'ngx-gallery-inactive-left': selectedIndex > image.index, 'ngx-gallery-inactive-right': selectedIndex < image.index, 'ngx-gallery-clickable': clickable }\" [style.background-image]=\"getSafeUrl(image.src)\" (click)=\"handleClick($event, image.index)\">\n                <div class=\"ngx-gallery-icons-wrapper\">\n                    <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, image.index)\"></ngx-gallery-action>\n                </div>\n                <div class=\"ngx-gallery-image-text\" *ngIf=\"showDescription && descriptions[image.index]\" [innerHTML]=\"descriptions[image.index]\"></div>\n            </div>\n        </div>\n        <ngx-gallery-arrows class=\"ngx-gallery-image-size-{{size}}\" *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n    ",
                    styles: [":host { width: 100%; display: inline-block; position: relative; } .ngx-gallery-image-wrapper { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; overflow: hidden; } .ngx-gallery-image { background-position: center; background-repeat: no-repeat; height: 100%; width: 100%; position: absolute; top: 0px; } .ngx-gallery-image.ngx-gallery-active { z-index: 1000; } .ngx-gallery-image-size-cover .ngx-gallery-image { background-size: cover; } .ngx-gallery-image-size-contain .ngx-gallery-image { background-size: contain; } .ngx-gallery-animation-fade .ngx-gallery-image { left: 0px; opacity: 0; transition: 0.5s ease-in-out; } .ngx-gallery-animation-fade .ngx-gallery-image.ngx-gallery-active { opacity: 1; } .ngx-gallery-animation-slide .ngx-gallery-image { transition: 0.5s ease-in-out; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-active { left: 0px; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-left { left: -100%; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-right { left: 100%; } .ngx-gallery-animation-rotate .ngx-gallery-image { transition: 1s ease; transform: scale(3.5, 3.5) rotate(90deg); left: 0px; opacity: 0; } .ngx-gallery-animation-rotate .ngx-gallery-image.ngx-gallery-active { transform: scale(1, 1) rotate(0deg); opacity: 1; } .ngx-gallery-animation-zoom .ngx-gallery-image { transition: 1s ease; transform: scale(2.5, 2.5); left: 0px; opacity: 0; } .ngx-gallery-animation-zoom .ngx-gallery-image.ngx-gallery-active { transform: scale(1, 1); opacity: 1; } .ngx-gallery-image-text { width: 100%; background: rgba(0, 0, 0, 0.7); padding: 10px; text-align: center; color: white; font-size: 16px; position: absolute; bottom: 0px; z-index: 10; } "]
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryImageComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer, },
        { type: core.ElementRef, },
        { type: NgxGalleryHelperService, },
    ]; };
    NgxGalleryImageComponent.propDecorators = {
        'images': [{ type: core.Input },],
        'clickable': [{ type: core.Input },],
        'selectedIndex': [{ type: core.Input },],
        'arrows': [{ type: core.Input },],
        'arrowsAutoHide': [{ type: core.Input },],
        'swipe': [{ type: core.Input },],
        'animation': [{ type: core.Input },],
        'size': [{ type: core.Input },],
        'arrowPrevIcon': [{ type: core.Input },],
        'arrowNextIcon': [{ type: core.Input },],
        'autoPlay': [{ type: core.Input },],
        'autoPlayInterval': [{ type: core.Input },],
        'autoPlayPauseOnHover': [{ type: core.Input },],
        'infinityMove': [{ type: core.Input },],
        'lazyLoading': [{ type: core.Input },],
        'actions': [{ type: core.Input },],
        'descriptions': [{ type: core.Input },],
        'showDescription': [{ type: core.Input },],
        'onClick': [{ type: core.Output },],
        'onActiveChange': [{ type: core.Output },],
        'onMouseEnter': [{ type: core.HostListener, args: ['mouseenter',] },],
        'onMouseLeave': [{ type: core.HostListener, args: ['mouseleave',] },],
    };
    return NgxGalleryImageComponent;
}());

var NgxGalleryOrder = /** @class */ (function () {
    function NgxGalleryOrder() {
    }
    NgxGalleryOrder.Column = 1;
    NgxGalleryOrder.Row = 2;
    return NgxGalleryOrder;
}());

var NgxGalleryThumbnailsComponent = /** @class */ (function () {
    /**
     * @param {?} sanitization
     * @param {?} elementRef
     * @param {?} helperService
     */
    function NgxGalleryThumbnailsComponent(sanitization, elementRef, helperService) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.minStopIndex = 0;
        this.onActiveChange = new core.EventEmitter();
        this.index = 0;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['selectedIndex']) {
            this.validateIndex();
        }
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'thumbnails', function () { return _this.moveRight(); }, function () { return _this.moveLeft(); });
        }
        if (this.images) {
            this.remainingCountValue = this.images.length - (this.rows * this.columns);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.onMouseEnter = function () {
        this.mouseenter = true;
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.onMouseLeave = function () {
        this.mouseenter = false;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.reset = function (index) {
        this.selectedIndex = index;
        this.setDefaultPosition();
        this.index = 0;
        this.validateIndex();
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getImages = function () {
        if (this.remainingCount) {
            return this.images.slice(0, this.rows * this.columns);
        }
        else if (this.lazyLoading && this.order != NgxGalleryOrder.Row) {
            var /** @type {?} */ stopIndex = this.index + this.columns + this.moveSize;
            if (this.rows > 1 && this.order === NgxGalleryOrder.Column) {
                stopIndex = stopIndex * this.rows;
            }
            if (stopIndex <= this.minStopIndex) {
                stopIndex = this.minStopIndex;
            }
            else {
                this.minStopIndex = stopIndex;
            }
            return this.images.slice(0, stopIndex);
        }
        else {
            return this.images;
        }
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.handleClick = function (event, index) {
        if (!this.hasLinks()) {
            this.selectedIndex = index;
            this.onActiveChange.emit(index);
            event.stopPropagation();
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.hasLinks = function () {
        if (this.links && this.links.length)
            return true;
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.moveRight = function () {
        if (this.canMoveRight()) {
            this.index += this.moveSize;
            var /** @type {?} */ maxIndex = this.getMaxIndex() - this.columns;
            if (this.index > maxIndex) {
                this.index = maxIndex;
            }
            this.setThumbnailsPosition();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.moveLeft = function () {
        if (this.canMoveLeft()) {
            this.index -= this.moveSize;
            if (this.index < 0) {
                this.index = 0;
            }
            this.setThumbnailsPosition();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.canMoveRight = function () {
        return this.index + this.columns < this.getMaxIndex() ? true : false;
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.canMoveLeft = function () {
        return this.index !== 0 ? true : false;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailLeft = function (index) {
        var /** @type {?} */ calculatedIndex;
        if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = Math.floor(index / this.rows);
        }
        else {
            calculatedIndex = index % Math.ceil(this.images.length / this.rows);
        }
        return this.getThumbnailPosition(calculatedIndex, this.columns);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailTop = function (index) {
        var /** @type {?} */ calculatedIndex;
        if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = index % this.rows;
        }
        else {
            calculatedIndex = Math.floor(index / Math.ceil(this.images.length / this.rows));
        }
        return this.getThumbnailPosition(calculatedIndex, this.rows);
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailWidth = function () {
        return this.getThumbnailDimension(this.columns);
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailHeight = function () {
        return this.getThumbnailDimension(this.rows);
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.setThumbnailsPosition = function () {
        this.thumbnailsLeft = -((100 / this.columns) * this.index) + '%';
        this.thumbnailsMarginLeft = -((this.margin - (((this.columns - 1)
            * this.margin) / this.columns)) * this.index) + 'px';
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.setDefaultPosition = function () {
        this.thumbnailsLeft = '0px';
        this.thumbnailsMarginLeft = '0px';
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.canShowArrows = function () {
        if (this.remainingCount) {
            return false;
        }
        else if (this.arrows && this.images && this.images.length > this.getVisibleCount()
            && (!this.arrowsAutoHide || this.mouseenter)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.validateIndex = function () {
        var /** @type {?} */ newIndex;
        if (this.order === NgxGalleryOrder.Column) {
            newIndex = Math.floor(this.selectedIndex / this.rows);
        }
        else {
            newIndex = this.selectedIndex % Math.ceil(this.images.length / this.rows);
        }
        if (this.remainingCount) {
            newIndex = 0;
        }
        if (newIndex < this.index || newIndex >= this.index + this.columns) {
            var /** @type {?} */ maxIndex = this.getMaxIndex() - this.columns;
            this.index = newIndex > maxIndex ? maxIndex : newIndex;
            this.setThumbnailsPosition();
        }
    };
    /**
     * @param {?} image
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getSafeUrl = function (image) {
        return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
    };
    /**
     * @param {?} index
     * @param {?} count
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailPosition = function (index, count) {
        return this.getSafeStyle('calc(' + ((100 / count) * index) + '% + '
            + ((this.margin - (((count - 1) * this.margin) / count)) * index) + 'px)');
    };
    /**
     * @param {?} count
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getThumbnailDimension = function (count) {
        if (this.margin !== 0) {
            return this.getSafeStyle('calc(' + (100 / count) + '% - '
                + (((count - 1) * this.margin) / count) + 'px)');
        }
        else {
            return this.getSafeStyle('calc(' + (100 / count) + '% + 1px)');
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getMaxIndex = function () {
        return Math.ceil(this.images.length / this.rows);
    };
    /**
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getVisibleCount = function () {
        return this.columns * this.rows;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxGalleryThumbnailsComponent.prototype.getSafeStyle = function (value) {
        return this.sanitization.bypassSecurityTrustStyle(value);
    };
    NgxGalleryThumbnailsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-gallery-thumbnails',
                    template: "\n    <div class=\"ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}\">\n        <div class=\"ngx-gallery-thumbnails\" [style.transform]=\"'translateX(' + thumbnailsLeft + ')'\" [style.marginLeft]=\"thumbnailsMarginLeft\">\n            <a [href]=\"hasLinks() ? links[i] : '#'\" [target]=\"linkTarget\" class=\"ngx-gallery-thumbnail\" *ngFor=\"let image of getImages(); let i = index;\" [style.background-image]=\"getSafeUrl(image)\" (click)=\"handleClick($event, i)\" [style.width]=\"getThumbnailWidth()\" [style.height]=\"getThumbnailHeight()\" [style.left]=\"getThumbnailLeft(i)\" [style.top]=\"getThumbnailTop(i)\" [ngClass]=\"{ 'ngx-gallery-active': i == selectedIndex, 'ngx-gallery-clickable': clickable }\" [attr.aria-label]=\"labels[i]\">\n                <div class=\"ngx-gallery-icons-wrapper\">\n                    <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, i)\"></ngx-gallery-action>\n                </div>\n                <div class=\"ngx-gallery-remaining-count-overlay\" *ngIf=\"remainingCount && remainingCountValue && (i == (rows * columns) - 1)\">\n                    <span class=\"ngx-gallery-remaining-count\">+{{remainingCountValue}}</span>\n                </div>\n            </a>\n        </div>\n    </div>\n    <ngx-gallery-arrows *ngIf=\"canShowArrows()\" (onPrevClick)=\"moveLeft()\" (onNextClick)=\"moveRight()\" [prevDisabled]=\"!canMoveLeft()\" [nextDisabled]=\"!canMoveRight()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n    ",
                    styles: [":host { width: 100%; display: inline-block; position: relative; } .ngx-gallery-thumbnails-wrapper { width: 100%; height: 100%; position: absolute; overflow: hidden; } .ngx-gallery-thumbnails { height: 100%; width: 100%; position: absolute; left: 0px; transform: translateX(0); transition: transform 0.5s ease-in-out; will-change: transform; } .ngx-gallery-thumbnails .ngx-gallery-thumbnail { position: absolute; height: 100%; background-position: center; background-repeat: no-repeat; text-decoration: none; } .ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail { background-size: cover; } .ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail { background-size: contain; } .ngx-gallery-remaining-count-overlay { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; background-color: rgba(0, 0, 0, 0.4); } .ngx-gallery-remaining-count { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 30px; } "]
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryThumbnailsComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer, },
        { type: core.ElementRef, },
        { type: NgxGalleryHelperService, },
    ]; };
    NgxGalleryThumbnailsComponent.propDecorators = {
        'images': [{ type: core.Input },],
        'links': [{ type: core.Input },],
        'labels': [{ type: core.Input },],
        'linkTarget': [{ type: core.Input },],
        'columns': [{ type: core.Input },],
        'rows': [{ type: core.Input },],
        'arrows': [{ type: core.Input },],
        'arrowsAutoHide': [{ type: core.Input },],
        'margin': [{ type: core.Input },],
        'selectedIndex': [{ type: core.Input },],
        'clickable': [{ type: core.Input },],
        'swipe': [{ type: core.Input },],
        'size': [{ type: core.Input },],
        'arrowPrevIcon': [{ type: core.Input },],
        'arrowNextIcon': [{ type: core.Input },],
        'moveSize': [{ type: core.Input },],
        'order': [{ type: core.Input },],
        'remainingCount': [{ type: core.Input },],
        'lazyLoading': [{ type: core.Input },],
        'actions': [{ type: core.Input },],
        'onActiveChange': [{ type: core.Output },],
        'onMouseEnter': [{ type: core.HostListener, args: ['mouseenter',] },],
        'onMouseLeave': [{ type: core.HostListener, args: ['mouseleave',] },],
    };
    return NgxGalleryThumbnailsComponent;
}());

var NgxGalleryPreviewComponent = /** @class */ (function () {
    /**
     * @param {?} sanitization
     * @param {?} elementRef
     * @param {?} helperService
     * @param {?} renderer
     */
    function NgxGalleryPreviewComponent(sanitization, elementRef, helperService, renderer) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.renderer = renderer;
        this.showSpinner = false;
        this.positionLeft = 0;
        this.positionTop = 0;
        this.zoomValue = 1;
        this.loading = false;
        this.rotateValue = 0;
        this.index = 0;
        this.onOpen = new core.EventEmitter();
        this.onClose = new core.EventEmitter();
        this.onActiveChange = new core.EventEmitter();
        this.isOpen = false;
        this.initialX = 0;
        this.initialY = 0;
        this.initialLeft = 0;
        this.initialTop = 0;
        this.isMove = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'preview', function () { return _this.showNext(); }, function () { return _this.showPrev(); });
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.ngOnDestroy = function () {
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.onKeyDown = function (e) {
        if (this.isOpen) {
            if (this.keyboardNavigation) {
                if (this.isKeyboardPrev(e)) {
                    this.showPrev();
                }
                else if (this.isKeyboardNext(e)) {
                    this.showNext();
                }
            }
            if (this.closeOnEsc && this.isKeyboardEsc(e)) {
                this.close();
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.open = function (index) {
        var _this = this;
        this.onOpen.emit();
        this.index = index;
        this.isOpen = true;
        this.show(true);
        if (this.forceFullscreen) {
            this.manageFullscreen();
        }
        this.keyDownListener = this.renderer.listenGlobal("window", "keydown", function (e) { return _this.onKeyDown(e); });
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.close = function () {
        this.isOpen = false;
        this.closeFullscreen();
        this.onClose.emit();
        this.stopAutoPlay();
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.imageMouseEnter = function () {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.imageMouseLeave = function () {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.startAutoPlay = function () {
        var _this = this;
        if (this.autoPlay) {
            this.stopAutoPlay();
            this.timer = setTimeout(function () {
                if (!_this.showNext()) {
                    _this.index = -1;
                    _this.showNext();
                }
            }, this.autoPlayInterval);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.stopAutoPlay = function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.showNext = function () {
        if (this.canShowNext()) {
            this.index++;
            if (this.index === this.images.length) {
                this.index = 0;
            }
            this.show();
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.showPrev = function () {
        if (this.canShowPrev()) {
            this.index--;
            if (this.index < 0) {
                this.index = this.images.length - 1;
            }
            this.show();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canShowNext = function () {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index < this.images.length - 1 ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canShowPrev = function () {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index > 0 ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.manageFullscreen = function () {
        if (this.fullscreen || this.forceFullscreen) {
            var /** @type {?} */ doc = (document);
            if (!doc.fullscreenElement && !doc.mozFullScreenElement
                && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                this.openFullscreen();
            }
            else {
                this.closeFullscreen();
            }
        }
    };
    /**
     * @param {?} image
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.getSafeUrl = function (image) {
        return image.substr(0, 10) === 'data:image' ?
            image : this.sanitization.bypassSecurityTrustUrl(image);
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.zoomIn = function () {
        if (this.canZoomIn()) {
            this.zoomValue += this.zoomStep;
            if (this.zoomValue > this.zoomMax) {
                this.zoomValue = this.zoomMax;
            }
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.zoomOut = function () {
        if (this.canZoomOut()) {
            this.zoomValue -= this.zoomStep;
            if (this.zoomValue < this.zoomMin) {
                this.zoomValue = this.zoomMin;
            }
            if (this.zoomValue <= 1) {
                this.resetPosition();
            }
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.rotateLeft = function () {
        this.rotateValue -= 90;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.rotateRight = function () {
        this.rotateValue += 90;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.getTransform = function () {
        return this.sanitization.bypassSecurityTrustStyle('scale(' + this.zoomValue + ') rotate(' + this.rotateValue + 'deg)');
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canZoomIn = function () {
        return this.zoomValue < this.zoomMax ? true : false;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canZoomOut = function () {
        return this.zoomValue > this.zoomMin ? true : false;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.canDragOnZoom = function () {
        return this.zoom && this.zoomValue > 1;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.mouseDownHandler = function (e) {
        if (this.canDragOnZoom()) {
            this.initialX = this.getClientX(e);
            this.initialY = this.getClientY(e);
            this.initialLeft = this.positionLeft;
            this.initialTop = this.positionTop;
            this.isMove = true;
            e.preventDefault();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.mouseUpHandler = function (e) {
        this.isMove = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.mouseMoveHandler = function (e) {
        if (this.isMove) {
            this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
            this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.getClientX = function (e) {
        return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.getClientY = function (e) {
        return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.resetPosition = function () {
        if (this.zoom) {
            this.positionLeft = 0;
            this.positionTop = 0;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isKeyboardNext = function (e) {
        return e.keyCode === 39 ? true : false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isKeyboardPrev = function (e) {
        return e.keyCode === 37 ? true : false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isKeyboardEsc = function (e) {
        return e.keyCode === 27 ? true : false;
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.openFullscreen = function () {
        var /** @type {?} */ element = (document.documentElement);
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.closeFullscreen = function () {
        var /** @type {?} */ doc = (document);
        if (doc.exitFullscreen) {
            doc.exitFullscreen();
        }
        else if (doc.msExitFullscreen) {
            doc.msExitFullscreen();
        }
        else if (doc.mozCancelFullScreen) {
            doc.mozCancelFullScreen();
        }
        else if (doc.webkitExitFullscreen) {
            doc.webkitExitFullscreen();
        }
    };
    /**
     * @param {?=} first
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.show = function (first) {
        var _this = this;
        if (first === void 0) { first = false; }
        this.loading = true;
        this.stopAutoPlay();
        this.onActiveChange.emit(this.index);
        if (first || !this.animation) {
            this._show();
        }
        else {
            setTimeout(function () { return _this._show(); }, 600);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype._show = function () {
        var _this = this;
        this.zoomValue = 1;
        this.rotateValue = 0;
        this.resetPosition();
        this.src = this.getSafeUrl(/** @type {?} */ (this.images[this.index]));
        this.srcIndex = this.index;
        this.description = this.descriptions[this.index];
        setTimeout(function () {
            if (_this.isLoaded(_this.previewImage.nativeElement)) {
                _this.loading = false;
                _this.startAutoPlay();
            }
            else {
                setTimeout(function () {
                    if (_this.loading) {
                        _this.showSpinner = true;
                    }
                });
                _this.previewImage.nativeElement.onload = function () {
                    _this.loading = false;
                    _this.showSpinner = false;
                    _this.previewImage.nativeElement.onload = null;
                    _this.startAutoPlay();
                };
            }
        });
    };
    /**
     * @param {?} img
     * @return {?}
     */
    NgxGalleryPreviewComponent.prototype.isLoaded = function (img) {
        if (!img.complete) {
            return false;
        }
        if (typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0) {
            return false;
        }
        return true;
    };
    NgxGalleryPreviewComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-gallery-preview',
                    template: "\n        <ngx-gallery-arrows (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n        <div class=\"ngx-gallery-preview-top\">\n            <div class=\"ngx-gallery-preview-icons\">\n                <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, index)\"></ngx-gallery-action>\n                <a *ngIf=\"download && src\" [href]=\"src\" class=\"ngx-gallery-icon\" aria-hidden=\"true\" download>\n                    <i class=\"ngx-gallery-icon-content {{ downloadIcon }}\"></i>\n                </a>\n                <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomOutIcon\" [disabled]=\"!canZoomOut()\" (onClick)=\"zoomOut()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomInIcon\" [disabled]=\"!canZoomIn()\" (onClick)=\"zoomIn()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateLeftIcon\" (onClick)=\"rotateLeft()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateRightIcon\" (onClick)=\"rotateRight()\"></ngx-gallery-action>\n                <ngx-gallery-action *ngIf=\"fullscreen\" [icon]=\"'ngx-gallery-fullscreen ' + fullscreenIcon\" (onClick)=\"manageFullscreen()\"></ngx-gallery-action>\n                <ngx-gallery-action [icon]=\"'ngx-gallery-close ' + closeIcon\" (onClick)=\"close()\"></ngx-gallery-action>\n            </div>\n        </div>\n        <div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n            <i class=\"ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\" (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n            <div class=\"ngx-gallery-preview-img-wrapper\">\n                <img *ngIf=\"src\" #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src\" (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\" [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n            </div>\n            <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\" [innerHTML]=\"description\"></div>\n        </div>\n    ",
                    styles: [":host(.ngx-gallery-active) { width: 100%; height: 100%; position: fixed; left: 0; top: 0; background: rgba(0, 0, 0, 0.7); z-index: 10000; display: inline-block; } :host { display: none; } :host /deep/ .ngx-gallery-arrow { font-size: 50px; } .ngx-gallery-preview-img { opacity: 0; max-width: 90%; max-height: 90%; user-select: none; transition: transform .5s; } .ngx-gallery-preview-img.animation { transition: opacity 0.5s linear, transform .5s; } .ngx-gallery-preview-img.ngx-gallery-active { opacity: 1; } .ngx-gallery-preview-img.ngx-gallery-grab { cursor: grab; cursor: -webkit-grab; } .ngx-gallery-icon.ngx-gallery-spinner { font-size: 50px; left: 0; display: inline-block; } :host /deep/ .ngx-gallery-preview-top { position: absolute; width: 100%; user-select: none; } :host /deep/ .ngx-gallery-preview-icons { float: right; } :host /deep/ .ngx-gallery-preview-icons .ngx-gallery-icon { position: relative; margin-right: 10px; margin-top: 10px; font-size: 25px; cursor: pointer; text-decoration: none; } :host /deep/ .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled { cursor: default; opacity: 0.4; } .ngx-spinner-wrapper { width: 50px; height: 50px; display: none; } .ngx-spinner-wrapper.ngx-gallery-active { display: inline-block; } .ngx-gallery-center { position: absolute; left: 0; right: 0; bottom: 0; margin: auto; top: 0; } .ngx-gallery-preview-text { width: 100%; background: rgba(0, 0, 0, 0.7); padding: 10px; text-align: center; color: white; font-size: 16px; flex: 0 1 auto; z-index: 10; } .ngx-gallery-preview-wrapper { width: 100%; height: 100%; display: flex; flex-flow: column; } .ngx-gallery-preview-img-wrapper { flex: 1 1 auto; position: relative; } "]
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryPreviewComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer, },
        { type: core.ElementRef, },
        { type: NgxGalleryHelperService, },
        { type: core.Renderer, },
    ]; };
    NgxGalleryPreviewComponent.propDecorators = {
        'images': [{ type: core.Input },],
        'descriptions': [{ type: core.Input },],
        'showDescription': [{ type: core.Input },],
        'swipe': [{ type: core.Input },],
        'fullscreen': [{ type: core.Input },],
        'forceFullscreen': [{ type: core.Input },],
        'closeOnClick': [{ type: core.Input },],
        'closeOnEsc': [{ type: core.Input },],
        'keyboardNavigation': [{ type: core.Input },],
        'arrowPrevIcon': [{ type: core.Input },],
        'arrowNextIcon': [{ type: core.Input },],
        'closeIcon': [{ type: core.Input },],
        'fullscreenIcon': [{ type: core.Input },],
        'spinnerIcon': [{ type: core.Input },],
        'autoPlay': [{ type: core.Input },],
        'autoPlayInterval': [{ type: core.Input },],
        'autoPlayPauseOnHover': [{ type: core.Input },],
        'infinityMove': [{ type: core.Input },],
        'zoom': [{ type: core.Input },],
        'zoomStep': [{ type: core.Input },],
        'zoomMax': [{ type: core.Input },],
        'zoomMin': [{ type: core.Input },],
        'zoomInIcon': [{ type: core.Input },],
        'zoomOutIcon': [{ type: core.Input },],
        'animation': [{ type: core.Input },],
        'actions': [{ type: core.Input },],
        'rotate': [{ type: core.Input },],
        'rotateLeftIcon': [{ type: core.Input },],
        'rotateRightIcon': [{ type: core.Input },],
        'download': [{ type: core.Input },],
        'downloadIcon': [{ type: core.Input },],
        'onOpen': [{ type: core.Output },],
        'onClose': [{ type: core.Output },],
        'onActiveChange': [{ type: core.Output },],
        'previewImage': [{ type: core.ViewChild, args: ['previewImage',] },],
    };
    return NgxGalleryPreviewComponent;
}());

var NgxGalleryImageSize = /** @class */ (function () {
    function NgxGalleryImageSize() {
    }
    NgxGalleryImageSize.Cover = 'cover';
    NgxGalleryImageSize.Contain = 'contain';
    return NgxGalleryImageSize;
}());

var NgxGalleryLayout = /** @class */ (function () {
    function NgxGalleryLayout() {
    }
    NgxGalleryLayout.ThumbnailsTop = 'thumbnails-top';
    NgxGalleryLayout.ThumbnailsBottom = 'thumbnails-bottom';
    return NgxGalleryLayout;
}());

var NgxGalleryAction = /** @class */ (function () {
    /**
     * @param {?} action
     */
    function NgxGalleryAction(action) {
        this.icon = action.icon;
        this.disabled = action.disabled ? action.disabled : false;
        this.titleText = action.titleText ? action.titleText : '';
        this.onClick = action.onClick;
    }
    return NgxGalleryAction;
}());

var NgxGalleryOptions = /** @class */ (function () {
    /**
     * @param {?} obj
     */
    function NgxGalleryOptions(obj) {
        var preventDefaults = obj.breakpoint === undefined ? false : true;
        function use(source, defaultValue) {
            return obj && (source !== undefined || preventDefaults) ? source : defaultValue;
        }
        this.breakpoint = use(obj.breakpoint, undefined);
        this.width = use(obj.width, '500px');
        this.height = use(obj.height, '400px');
        this.fullWidth = use(obj.fullWidth, false);
        this.layout = use(obj.layout, NgxGalleryLayout.ThumbnailsBottom);
        this.startIndex = use(obj.startIndex, 0);
        this.linkTarget = use(obj.linkTarget, '_blank');
        this.lazyLoading = use(obj.lazyLoading, true);
        this.image = use(obj.image, true);
        this.imagePercent = use(obj.imagePercent, 75);
        this.imageArrows = use(obj.imageArrows, true);
        this.imageArrowsAutoHide = use(obj.imageArrowsAutoHide, false);
        this.imageSwipe = use(obj.imageSwipe, false);
        this.imageAnimation = use(obj.imageAnimation, NgxGalleryAnimation.Fade);
        this.imageSize = use(obj.imageSize, NgxGalleryImageSize.Cover);
        this.imageAutoPlay = use(obj.imageAutoPlay, false);
        this.imageAutoPlayInterval = use(obj.imageAutoPlayInterval, 2000);
        this.imageAutoPlayPauseOnHover = use(obj.imageAutoPlayPauseOnHover, false);
        this.imageInfinityMove = use(obj.imageInfinityMove, false);
        if (obj && obj.imageActions && obj.imageActions.length) {
            obj.imageActions = obj.imageActions.map(function (action) { return new NgxGalleryAction(action); });
        }
        this.imageActions = use(obj.imageActions, []);
        this.imageDescription = use(obj.imageDescription, false);
        this.thumbnails = use(obj.thumbnails, true);
        this.thumbnailsColumns = use(obj.thumbnailsColumns, 4);
        this.thumbnailsRows = use(obj.thumbnailsRows, 1);
        this.thumbnailsPercent = use(obj.thumbnailsPercent, 25);
        this.thumbnailsMargin = use(obj.thumbnailsMargin, 10);
        this.thumbnailsArrows = use(obj.thumbnailsArrows, true);
        this.thumbnailsArrowsAutoHide = use(obj.thumbnailsArrowsAutoHide, false);
        this.thumbnailsSwipe = use(obj.thumbnailsSwipe, false);
        this.thumbnailsMoveSize = use(obj.thumbnailsMoveSize, 1);
        this.thumbnailsOrder = use(obj.thumbnailsOrder, NgxGalleryOrder.Column);
        this.thumbnailsRemainingCount = use(obj.thumbnailsRemainingCount, false);
        this.thumbnailsAsLinks = use(obj.thumbnailsAsLinks, false);
        this.thumbnailMargin = use(obj.thumbnailMargin, 10);
        this.thumbnailSize = use(obj.thumbnailSize, NgxGalleryImageSize.Cover);
        if (obj && obj.thumbnailActions && obj.thumbnailActions.length) {
            obj.thumbnailActions = obj.thumbnailActions.map(function (action) { return new NgxGalleryAction(action); });
        }
        this.thumbnailActions = use(obj.thumbnailActions, []);
        this.preview = use(obj.preview, true);
        this.previewDescription = use(obj.previewDescription, true);
        this.previewSwipe = use(obj.previewSwipe, false);
        this.previewFullscreen = use(obj.previewFullscreen, false);
        this.previewForceFullscreen = use(obj.previewForceFullscreen, false);
        this.previewCloseOnClick = use(obj.previewCloseOnClick, false);
        this.previewCloseOnEsc = use(obj.previewCloseOnEsc, false);
        this.previewKeyboardNavigation = use(obj.previewKeyboardNavigation, false);
        this.previewAnimation = use(obj.previewAnimation, true);
        this.previewAutoPlay = use(obj.previewAutoPlay, false);
        this.previewAutoPlayInterval = use(obj.previewAutoPlayInterval, 2000);
        this.previewAutoPlayPauseOnHover = use(obj.previewAutoPlayPauseOnHover, false);
        this.previewInfinityMove = use(obj.previewInfinityMove, false);
        this.previewZoom = use(obj.previewZoom, false);
        this.previewZoomStep = use(obj.previewZoomStep, 0.1);
        this.previewZoomMax = use(obj.previewZoomMax, 2);
        this.previewZoomMin = use(obj.previewZoomMin, 0.5);
        this.previewRotate = use(obj.previewRotate, false);
        this.previewDownload = use(obj.previewDownload, false);
        this.previewCustom = use(obj.previewCustom, undefined);
        this.arrowPrevIcon = use(obj.arrowPrevIcon, 'fa fa-arrow-circle-left');
        this.arrowNextIcon = use(obj.arrowNextIcon, 'fa fa-arrow-circle-right');
        this.closeIcon = use(obj.closeIcon, 'fa fa-times-circle');
        this.fullscreenIcon = use(obj.fullscreenIcon, 'fa fa-arrows-alt');
        this.spinnerIcon = use(obj.spinnerIcon, 'fa fa-spinner fa-pulse fa-3x fa-fw');
        this.zoomInIcon = use(obj.zoomInIcon, 'fa fa-search-plus');
        this.zoomOutIcon = use(obj.zoomOutIcon, 'fa fa-search-minus');
        this.rotateLeftIcon = use(obj.rotateLeftIcon, 'fa fa-undo');
        this.rotateRightIcon = use(obj.rotateRightIcon, 'fa fa-repeat');
        this.downloadIcon = use(obj.downloadIcon, 'fa fa-arrow-circle-down');
        if (obj && obj.actions && obj.actions.length) {
            obj.actions = obj.actions.map(function (action) { return new NgxGalleryAction(action); });
        }
        this.actions = use(obj.actions, []);
    }
    return NgxGalleryOptions;
}());

var NgxGalleryOrderedImage = /** @class */ (function () {
    /**
     * @param {?} obj
     */
    function NgxGalleryOrderedImage(obj) {
        this.src = obj.src;
        this.index = obj.index;
    }
    return NgxGalleryOrderedImage;
}());

var NgxGalleryComponent = /** @class */ (function () {
    /**
     * @param {?} myElement
     */
    function NgxGalleryComponent(myElement) {
        this.myElement = myElement;
        this.imagesReady = new core.EventEmitter();
        this.change = new core.EventEmitter();
        this.previewOpen = new core.EventEmitter();
        this.previewClose = new core.EventEmitter();
        this.previewChange = new core.EventEmitter();
        this.oldImagesLength = 0;
        this.selectedIndex = 0;
        this.breakpoint = undefined;
        this.prevBreakpoint = undefined;
    }
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.ngOnInit = function () {
        this.options = this.options.map(function (opt) { return new NgxGalleryOptions(opt); });
        this.sortOptions();
        this.setBreakpoint();
        this.setOptions();
        this.checkFullWidth();
        if (this.currentOptions) {
            this.selectedIndex = /** @type {?} */ (this.currentOptions.startIndex);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.ngDoCheck = function () {
        if (this.images !== undefined && (this.images.length !== this.oldImagesLength)
            || (this.images !== this.oldImages)) {
            this.oldImagesLength = this.images.length;
            this.oldImages = this.images;
            this.setImages();
            if (this.images && this.images.length) {
                this.imagesReady.emit();
            }
            if (this.image) {
                this.image.reset(/** @type {?} */ (this.currentOptions.startIndex));
            }
            this.resetThumbnails();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.ngAfterViewInit = function () {
        this.checkFullWidth();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.onResize = function () {
        var _this = this;
        this.setBreakpoint();
        if (this.prevBreakpoint !== this.breakpoint) {
            this.setOptions();
            this.resetThumbnails();
        }
        if (this.currentOptions && this.currentOptions.fullWidth) {
            if (this.fullWidthTimeout) {
                clearTimeout(this.fullWidthTimeout);
            }
            this.fullWidthTimeout = setTimeout(function () {
                _this.checkFullWidth();
            }, 200);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.getImageHeight = function () {
        return (this.currentOptions && this.currentOptions.thumbnails) ?
            this.currentOptions.imagePercent + '%' : '100%';
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.getThumbnailsHeight = function () {
        if (this.currentOptions && this.currentOptions.image) {
            return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
                + this.currentOptions.thumbnailsMargin + 'px)';
        }
        else {
            return '100%';
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.getThumbnailsMarginTop = function () {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.getThumbnailsMarginBottom = function () {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.openPreview = function (index) {
        if (this.currentOptions.previewCustom) {
            this.currentOptions.previewCustom(index);
        }
        else {
            this.previewEnabled = true;
            this.preview.open(index);
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.onPreviewOpen = function () {
        this.previewOpen.emit();
        if (this.image && this.image.autoPlay) {
            this.image.stopAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.onPreviewClose = function () {
        this.previewEnabled = false;
        this.previewClose.emit();
        if (this.image && this.image.autoPlay) {
            this.image.startAutoPlay();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.selectFromImage = function (index) {
        this.select(index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.selectFromThumbnails = function (index) {
        this.select(index);
        if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview
            && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
            this.openPreview(this.selectedIndex);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.show = function (index) {
        this.select(index);
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.showNext = function () {
        this.image.showNext();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.showPrev = function () {
        this.image.showPrev();
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.canShowNext = function () {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1)
                ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.canShowPrev = function () {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex > 0) ? true : false;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.previewSelect = function (index) {
        this.previewChange.emit({ index: index, image: this.images[index] });
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.resetThumbnails = function () {
        if (this.thubmnails) {
            this.thubmnails.reset(/** @type {?} */ (this.currentOptions.startIndex));
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NgxGalleryComponent.prototype.select = function (index) {
        this.selectedIndex = index;
        this.change.emit({
            index: index,
            image: this.images[index]
        });
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.checkFullWidth = function () {
        if (this.currentOptions && this.currentOptions.fullWidth) {
            this.width = document.body.clientWidth + 'px';
            this.left = (-(document.body.clientWidth -
                this.myElement.nativeElement.parentNode.innerWidth) / 2) + 'px';
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.setImages = function () {
        this.smallImages = this.images.map(function (img) { /** @type {?} */ return (img.small); });
        this.mediumImages = this.images.map(function (img, i) { return new NgxGalleryOrderedImage({
            src: img.medium,
            index: i
        }); });
        this.bigImages = this.images.map(function (img) { /** @type {?} */ return (img.big); });
        this.descriptions = this.images.map(function (img) { /** @type {?} */ return (img.description); });
        this.links = this.images.map(function (img) { /** @type {?} */ return (img.url); });
        this.labels = this.images.map(function (img) { /** @type {?} */ return (img.label); });
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.setBreakpoint = function () {
        this.prevBreakpoint = this.breakpoint;
        var /** @type {?} */ breakpoints;
        if (typeof window !== 'undefined') {
            breakpoints = this.options.filter(function (opt) { return opt.breakpoint >= window.innerWidth; })
                .map(function (opt) { return opt.breakpoint; });
        }
        if (breakpoints && breakpoints.length) {
            this.breakpoint = breakpoints.pop();
        }
        else {
            this.breakpoint = undefined;
        }
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.sortOptions = function () {
        this.options = this.options.filter(function (a) { return a.breakpoint === undefined; }).concat(this.options
            .filter(function (a) { return a.breakpoint !== undefined; })
            .sort(function (a, b) { return b.breakpoint - a.breakpoint; }));
    };
    /**
     * @return {?}
     */
    NgxGalleryComponent.prototype.setOptions = function () {
        var _this = this;
        this.currentOptions = new NgxGalleryOptions({});
        this.options
            .filter(function (opt) { return opt.breakpoint === undefined || opt.breakpoint >= _this.breakpoint; })
            .map(function (opt) { return _this.combineOptions(_this.currentOptions, opt); });
        this.width = /** @type {?} */ (this.currentOptions.width);
        this.height = /** @type {?} */ (this.currentOptions.height);
    };
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    NgxGalleryComponent.prototype.combineOptions = function (first, second) {
        Object.keys(second).map(function (val) { return first[val] = second[val] !== undefined ? second[val] : first[val]; });
    };
    NgxGalleryComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-gallery',
                    template: "\n    <div class=\"ngx-gallery-layout {{currentOptions?.layout}}\">\n        <ngx-gallery-image *ngIf=\"currentOptions?.image\" [style.height]=\"getImageHeight()\" [images]=\"mediumImages\" [clickable]=\"currentOptions?.preview\" [selectedIndex]=\"selectedIndex\" [arrows]=\"currentOptions?.imageArrows\" [arrowsAutoHide]=\"currentOptions?.imageArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [swipe]=\"currentOptions?.imageSwipe\" [animation]=\"currentOptions?.imageAnimation\" [size]=\"currentOptions?.imageSize\" [autoPlay]=\"currentOptions?.imageAutoPlay\" [autoPlayInterval]=\"currentOptions?.imageAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.imageAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.imageInfinityMove\"  [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.imageActions\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.imageDescription\" (onClick)=\"openPreview($event)\" (onActiveChange)=\"selectFromImage($event)\"></ngx-gallery-image>\n\n        <ngx-gallery-thumbnails *ngIf=\"currentOptions?.thumbnails\" [style.marginTop]=\"getThumbnailsMarginTop()\" [style.marginBottom]=\"getThumbnailsMarginBottom()\" [style.height]=\"getThumbnailsHeight()\" [images]=\"smallImages\" [links]=\"currentOptions?.thumbnailsAsLinks ? links : []\" [labels]=\"labels\" [linkTarget]=\"currentOptions?.linkTarget\" [selectedIndex]=\"selectedIndex\" [columns]=\"currentOptions?.thumbnailsColumns\" [rows]=\"currentOptions?.thumbnailsRows\" [margin]=\"currentOptions?.thumbnailMargin\" [arrows]=\"currentOptions?.thumbnailsArrows\" [arrowsAutoHide]=\"currentOptions?.thumbnailsArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [clickable]=\"currentOptions?.image || currentOptions?.preview\" [swipe]=\"currentOptions?.thumbnailsSwipe\" [size]=\"currentOptions?.thumbnailSize\" [moveSize]=\"currentOptions?.thumbnailsMoveSize\" [order]=\"currentOptions?.thumbnailsOrder\" [remainingCount]=\"currentOptions?.thumbnailsRemainingCount\" [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.thumbnailActions\"  (onActiveChange)=\"selectFromThumbnails($event)\"></ngx-gallery-thumbnails>\n\n        <ngx-gallery-preview [images]=\"bigImages\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.previewDescription\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [closeIcon]=\"currentOptions?.closeIcon\" [fullscreenIcon]=\"currentOptions?.fullscreenIcon\" [spinnerIcon]=\"currentOptions?.spinnerIcon\" [swipe]=\"currentOptions?.previewSwipe\" [fullscreen]=\"currentOptions?.previewFullscreen\" [forceFullscreen]=\"currentOptions?.previewForceFullscreen\" [closeOnClick]=\"currentOptions?.previewCloseOnClick\" [closeOnEsc]=\"currentOptions?.previewCloseOnEsc\" [keyboardNavigation]=\"currentOptions?.previewKeyboardNavigation\" [animation]=\"currentOptions?.previewAnimation\" [autoPlay]=\"currentOptions?.previewAutoPlay\" [autoPlayInterval]=\"currentOptions?.previewAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.previewAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.previewInfinityMove\" [zoom]=\"currentOptions?.previewZoom\" [zoomStep]=\"currentOptions?.previewZoomStep\" [zoomMax]=\"currentOptions?.previewZoomMax\" [zoomMin]=\"currentOptions?.previewZoomMin\" [zoomInIcon]=\"currentOptions?.zoomInIcon\" [zoomOutIcon]=\"currentOptions?.zoomOutIcon\" [actions]=\"currentOptions?.actions\" [rotate]=\"currentOptions?.previewRotate\" [rotateLeftIcon]=\"currentOptions?.rotateLeftIcon\" [rotateRightIcon]=\"currentOptions?.rotateRightIcon\" [download]=\"currentOptions?.previewDownload\" [downloadIcon]=\"currentOptions?.downloadIcon\" (onClose)=\"onPreviewClose()\" (onOpen)=\"onPreviewOpen()\" (onActiveChange)=\"previewSelect($event)\" [class.ngx-gallery-active]=\"previewEnabled\"></ngx-gallery-preview>\n    </div>\n    ",
                    styles: [":host { display: inline-block; } :host > * { float: left; } :host /deep/ * { box-sizing: border-box; } :host /deep/ .ngx-gallery-icon { color: white; font-size: 25px; position: absolute; z-index: 2000; display: inline-block; } :host /deep/ .ngx-gallery-icon .ngx-gallery-icon-content { display: block; } :host /deep/ .ngx-gallery-clickable { cursor: pointer; } :host /deep/ .ngx-gallery-icons-wrapper .ngx-gallery-icon { position: relative; margin-right: 5px; margin-top: 5px; font-size: 20px; cursor: pointer; } :host /deep/ .ngx-gallery-icons-wrapper { float: right; } :host .ngx-gallery-layout { width: 100%; height: 100%; display: flex; flex-direction: column; } :host .ngx-gallery-layout.thumbnails-top ngx-gallery-image { order: 2; } :host .ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails { order: 1; } :host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-image { order: 1; } :host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails { order: 2; } "],
                    providers: [NgxGalleryHelperService]
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryComponent.ctorParameters = function () { return [
        { type: core.ElementRef, },
    ]; };
    NgxGalleryComponent.propDecorators = {
        'options': [{ type: core.Input },],
        'images': [{ type: core.Input },],
        'imagesReady': [{ type: core.Output },],
        'change': [{ type: core.Output },],
        'previewOpen': [{ type: core.Output },],
        'previewClose': [{ type: core.Output },],
        'previewChange': [{ type: core.Output },],
        'preview': [{ type: core.ViewChild, args: [NgxGalleryPreviewComponent,] },],
        'image': [{ type: core.ViewChild, args: [NgxGalleryImageComponent,] },],
        'thubmnails': [{ type: core.ViewChild, args: [NgxGalleryThumbnailsComponent,] },],
        'width': [{ type: core.HostBinding, args: ['style.width',] },],
        'height': [{ type: core.HostBinding, args: ['style.height',] },],
        'left': [{ type: core.HostBinding, args: ['style.left',] },],
        'onResize': [{ type: core.HostListener, args: ['window:resize',] },],
    };
    return NgxGalleryComponent;
}());

var NgxGalleryImage = /** @class */ (function () {
    /**
     * @param {?} obj
     */
    function NgxGalleryImage(obj) {
        this.small = obj.small;
        this.medium = obj.medium;
        this.big = obj.big;
        this.description = obj.description;
        this.url = obj.url;
        this.label = obj.label;
    }
    return NgxGalleryImage;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CustomHammerConfig = /** @class */ (function (_super) {
    __extends(CustomHammerConfig, _super);
    function CustomHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = ({
            'pinch': { enable: false },
            'rotate': { enable: false }
        });
        return _this;
    }
    return CustomHammerConfig;
}(platformBrowser.HammerGestureConfig));
var NgxGalleryModule = /** @class */ (function () {
    function NgxGalleryModule() {
    }
    NgxGalleryModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        NgxGalleryActionComponent,
                        NgxGalleryArrowsComponent,
                        NgxGalleryImageComponent,
                        NgxGalleryThumbnailsComponent,
                        NgxGalleryPreviewComponent,
                        NgxGalleryComponent
                    ],
                    exports: [
                        NgxGalleryComponent
                    ],
                    providers: [
                        { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
                    ]
                },] },
    ];
    /**
     * @nocollapse
     */
    NgxGalleryModule.ctorParameters = function () { return []; };
    return NgxGalleryModule;
}());

exports.CustomHammerConfig = CustomHammerConfig;
exports.NgxGalleryModule = NgxGalleryModule;
exports.NgxGalleryComponent = NgxGalleryComponent;
exports.NgxGalleryActionComponent = NgxGalleryActionComponent;
exports.NgxGalleryImageComponent = NgxGalleryImageComponent;
exports.NgxGalleryThumbnailsComponent = NgxGalleryThumbnailsComponent;
exports.NgxGalleryPreviewComponent = NgxGalleryPreviewComponent;
exports.NgxGalleryArrowsComponent = NgxGalleryArrowsComponent;
exports.NgxGalleryOptions = NgxGalleryOptions;
exports.NgxGalleryImage = NgxGalleryImage;
exports.NgxGalleryAnimation = NgxGalleryAnimation;
exports.NgxGalleryHelperService = NgxGalleryHelperService;
exports.NgxGalleryImageSize = NgxGalleryImageSize;
exports.NgxGalleryLayout = NgxGalleryLayout;
exports.NgxGalleryOrder = NgxGalleryOrder;
exports.NgxGalleryOrderedImage = NgxGalleryOrderedImage;
exports.NgxGalleryAction = NgxGalleryAction;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js ***!
  \*********************************************************************/
/*! exports provided: CarouselModule, CarouselComponent, CarouselSlideDirective, SlidesOutputData, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective, ɵx, ɵt, ɵu, ɵd, ɵb, ɵn, ɵl, ɵr, ɵm, ɵp, ɵo, ɵq, ɵv, ɵs, ɵc, ɵa, ɵw, ɵg, ɵe, ɵk, ɵf, ɵi, ɵh, ɵj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselSlideDirective", function() { return CarouselSlideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesOutputData", function() { return SlidesOutputData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlRouterLinkDirective", function() { return OwlRouterLinkDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlRouterLinkWithHrefDirective", function() { return OwlRouterLinkWithHrefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return StageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return AnimateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return AutoHeightService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return AutoplayService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CarouselService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return BrowserDocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return DOCUMENT_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return browserDocumentProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return documentFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return documentProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return HashService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return LazyLoadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return OwlLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NavigationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return ResizeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return WINDOW_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return browserWindowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return windowFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return windowProvider; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ResizeService = /** @class */ (function () {
    function ResizeService(eventManager) {
        this.eventManager = eventManager;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
        this.eventManager.addGlobalEventListener('window', 'onload', this.onLoaded.bind(this));
    }
    Object.defineProperty(ResizeService.prototype, "onResize$", {
        /**
         * Makes resizeSubject become Observable
         * @returns Observable of resizeSubject
         */
        get: /**
         * Makes resizeSubject become Observable
         * @return {?} Observable of resizeSubject
         */
        function () {
            return this.resizeSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handler of 'resize' event. Passes data throw resizeSubject
     * @param event Event Object of 'resize' event
     */
    /**
     * Handler of 'resize' event. Passes data throw resizeSubject
     * @param {?} event Event Object of 'resize' event
     * @return {?}
     */
    ResizeService.prototype.onResize = /**
     * Handler of 'resize' event. Passes data throw resizeSubject
     * @param {?} event Event Object of 'resize' event
     * @return {?}
     */
    function (event) {
        this.resizeSubject.next((/** @type {?} */ (event.target)));
    };
    /**
     * Handler of 'onload' event. Defines the width of window
     * @param event Event Object of 'onload' event
     */
    /**
     * Handler of 'onload' event. Defines the width of window
     * @param {?} event Event Object of 'onload' event
     * @return {?}
     */
    ResizeService.prototype.onLoaded = /**
     * Handler of 'onload' event. Defines the width of window
     * @param {?} event Event Object of 'onload' event
     * @return {?}
     */
    function (event) {
        this.windowWidth = (/** @type {?} */ (event.target));
    };
    ResizeService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    ResizeService.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["EventManager"] }
    ]; };
    return ResizeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Defaults value of options
 */
var /**
 * Defaults value of options
 */
OwlCarouselOConfig = /** @class */ (function () {
    function OwlCarouselOConfig() {
        this.items = 3;
        this.loop = false;
        this.center = false;
        this.rewind = false;
        this.mouseDrag = true;
        this.touchDrag = true;
        this.pullDrag = true;
        this.freeDrag = false;
        this.margin = 0;
        this.stagePadding = 0;
        this.merge = false;
        this.mergeFit = true;
        this.autoWidth = false;
        this.startPosition = 0;
        this.rtl = false;
        this.smartSpeed = 250;
        this.fluidSpeed = false;
        this.dragEndSpeed = false;
        this.responsive = {};
        this.responsiveRefreshRate = 200;
        // defaults to Navigation
        this.nav = false;
        this.navText = ['prev', 'next'];
        this.navSpeed = false;
        this.slideBy = 1; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
        // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
        this.dots = true;
        this.dotsEach = false;
        this.dotsData = false;
        this.dotsSpeed = false;
        // defaults to Autoplay
        this.autoplay = false;
        this.autoplayTimeout = 5000;
        this.autoplayHoverPause = false;
        this.autoplaySpeed = false;
        // defaults to LazyLoading
        this.lazyLoad = false;
        this.lazyLoadEager = 0;
        // defaults to Animate
        this.animateOut = false;
        this.animateIn = false;
        // defaults to AutoHeight
        this.autoHeight = false;
        // defaults to Hash
        this.URLhashListener = false;
    }
    return OwlCarouselOConfig;
}());
/**
 * we can't read types from OwlOptions in javascript because of props have undefined value and types of those props are used for validating inputs
 * class below is copy of OwlOptions but its all props have string value showing certain type;
 * this is class is being used just in method _validateOptions() of CarouselService;
 */
var /**
 * we can't read types from OwlOptions in javascript because of props have undefined value and types of those props are used for validating inputs
 * class below is copy of OwlOptions but its all props have string value showing certain type;
 * this is class is being used just in method _validateOptions() of CarouselService;
 */
OwlOptionsMockedTypes = /** @class */ (function () {
    function OwlOptionsMockedTypes() {
        this.items = 'number';
        this.loop = 'boolean';
        this.center = 'boolean';
        this.rewind = 'boolean';
        this.mouseDrag = 'boolean';
        this.touchDrag = 'boolean';
        this.pullDrag = 'boolean';
        this.freeDrag = 'boolean';
        this.margin = 'number';
        this.stagePadding = 'number';
        this.merge = 'boolean';
        this.mergeFit = 'boolean';
        this.autoWidth = 'boolean';
        this.startPosition = 'number|string';
        this.rtl = 'boolean';
        this.smartSpeed = 'number';
        this.fluidSpeed = 'boolean';
        this.dragEndSpeed = 'number|boolean';
        this.responsive = {};
        this.responsiveRefreshRate = 'number';
        // defaults to Navigation
        this.nav = 'boolean';
        this.navText = 'string[]';
        this.navSpeed = 'number|boolean';
        this.slideBy = 'number|string'; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
        // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
        this.dots = 'boolean';
        this.dotsEach = 'number|boolean';
        this.dotsData = 'boolean';
        this.dotsSpeed = 'number|boolean';
        // defaults to Autoplay
        this.autoplay = 'boolean';
        this.autoplayTimeout = 'number';
        this.autoplayHoverPause = 'boolean';
        this.autoplaySpeed = 'number|boolean';
        // defaults to LazyLoading
        this.lazyLoad = 'boolean';
        this.lazyLoadEager = 'number';
        // defaults to Animate
        this.animateOut = 'string|boolean';
        this.animateIn = 'string|boolean';
        // defaults to AutoHeight
        this.autoHeight = 'boolean';
        // defaults to Hash
        this.URLhashListener = "boolean";
    }
    return OwlOptionsMockedTypes;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var OwlLogger = /** @class */ (function () {
    function OwlLogger(errorHandler) {
        this.errorHandler = errorHandler;
    }
    /**
     * @param {?} value
     * @param {...?} rest
     * @return {?}
     */
    OwlLogger.prototype.log = /**
     * @param {?} value
     * @param {...?} rest
     * @return {?}
     */
    function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["isDevMode"])()) {
            console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([value], rest));
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    OwlLogger.prototype.error = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.errorHandler.handleError(error);
    };
    /**
     * @param {?} value
     * @param {...?} rest
     * @return {?}
     */
    OwlLogger.prototype.warn = /**
     * @param {?} value
     * @param {...?} rest
     * @return {?}
     */
    function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        console.warn.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([value], rest));
    };
    OwlLogger.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    OwlLogger.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"] }
    ]; };
    return OwlLogger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
var Type = {
    Event: 'event',
    State: 'state',
};
/** @enum {string} */
var Width = {
    Default: 'default',
    Inner: 'inner',
    Outer: 'outer',
};
var CarouselService = /** @class */ (function () {
    function CarouselService(logger) {
        var _this = this;
        this.logger = logger;
        /**
         * Subject for passing data needed for managing View
         */
        this._viewSettingsShipper$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject for notification when the carousel got initializes
         */
        this._initializedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject for notification when the carousel's settings start changinf
         */
        this._changeSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject for notification when the carousel's settings have changed
         */
        this._changedSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject for notification when the carousel starts translating or moving
         */
        this._translateCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject for notification when the carousel stopped translating or moving
         */
        this._translatedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
         */
        this._resizeCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
         */
        this._resizedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject for notification when the refresh of carousel starts
         */
        this._refreshCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject for notification when the refresh of carousel is ended
         */
        this._refreshedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject for notification when the dragging of carousel starts
         */
        this._dragCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject for notification when the dragging of carousel is ended
         */
        this._draggedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Current settings for the carousel.
         */
        this.settings = {
            items: 0
        };
        /**
         * Initial data for setting classes to element .owl-carousel
         */
        this.owlDOMData = {
            rtl: false,
            isResponsive: false,
            isRefreshed: false,
            isLoaded: false,
            isLoading: false,
            isMouseDragable: false,
            isGrab: false,
            isTouchDragable: false
        };
        /**
         * Initial data of .owl-stage
         */
        this.stageData = {
            transform: 'translate3d(0px,0px,0px)',
            transition: '0s',
            width: 0,
            paddingL: 0,
            paddingR: 0
        };
        /**
         * All real items.
         */
        this._items = []; // is equal to this.slides
        // is equal to this.slides
        /**
         * Array with width of every slide.
         */
        this._widths = [];
        /**
         * Currently suppressed events to prevent them from beeing retriggered.
         */
        this._supress = {};
        /**
         * References to the running plugins of this carousel.
         */
        this._plugins = {};
        /**
         * Absolute current position.
         */
        this._current = null;
        /**
         * All cloned items.
         */
        this._clones = [];
        /**
         * Merge values of all items.
         * \@todo Maybe this could be part of a plugin.
         */
        this._mergers = [];
        /**
         * Animation speed in milliseconds.
         */
        this._speed = null;
        /**
         * Coordinates of all items in pixel.
         * \@todo The name of this member is missleading.
         */
        this._coordinates = [];
        /**
         * Current breakpoint.
         * \@todo Real media queries would be nice.
         */
        this._breakpoint = null;
        /**
         * Prefix for id of cloned slides
         */
        this.clonedIdPrefix = 'cloned-';
        /**
         * Current options set by the caller including defaults.
         */
        this._options = {};
        /**
         * Invalidated parts within the update process.
         */
        this._invalidated = {};
        /**
         * Current state information and their tags.
         */
        this._states = {
            current: {},
            tags: {
                initializing: ['busy'],
                animating: ['busy'],
                dragging: ['interacting']
            }
        };
        /**
         * Ordered list of workers for the update process.
         */
        this._pipe = [
            // {
            //   filter: ['width', 'settings'],
            //   run: () => {
            //     this._width = this.carouselWindowWidth;
            //   }
            // },
            {
                filter: ['width', 'items', 'settings'],
                run: function (cache) {
                    cache.current = _this._items && _this._items[_this.relative(_this._current)].id;
                }
            },
            // {
            //   filter: ['items', 'settings'],
            //   run: function() {
            //     // this.$stage.children('.cloned').remove();
            //   }
            // },
            {
                filter: ['width', 'items', 'settings'],
                run: function (cache) {
                    /** @type {?} */
                    var margin = _this.settings.margin || '';
                    /** @type {?} */
                    var grid = !_this.settings.autoWidth;
                    /** @type {?} */
                    var rtl = _this.settings.rtl;
                    /** @type {?} */
                    var css = {
                        'margin-left': rtl ? margin : '',
                        'margin-right': rtl ? '' : margin
                    };
                    if (!grid) {
                        _this.slidesData.forEach(function (slide) {
                            slide.marginL = css['margin-left'];
                            slide.marginR = css['margin-right'];
                        });
                    }
                    cache.css = css;
                }
            }, {
                filter: ['width', 'items', 'settings'],
                run: function (cache) {
                    /** @type {?} */
                    var width = +(_this.width() / _this.settings.items).toFixed(3) - _this.settings.margin;
                    /** @type {?} */
                    var grid = !_this.settings.autoWidth;
                    /** @type {?} */
                    var widths = [];
                    /** @type {?} */
                    var merge$$1 = null;
                    /** @type {?} */
                    var iterator = _this._items.length;
                    cache.items = {
                        merge: false,
                        width: width
                    };
                    while (iterator--) {
                        merge$$1 = _this._mergers[iterator];
                        merge$$1 = _this.settings.mergeFit && Math.min(merge$$1, _this.settings.items) || merge$$1;
                        cache.items.merge = merge$$1 > 1 || cache.items.merge;
                        widths[iterator] = !grid ? _this._items[iterator].width ? _this._items[iterator].width : width : width * merge$$1;
                    }
                    _this._widths = widths;
                    _this.slidesData.forEach(function (slide, i) {
                        slide.width = _this._widths[i];
                        slide.marginR = cache.css['margin-right'];
                        slide.marginL = cache.css['margin-left'];
                    });
                }
            }, {
                filter: ['items', 'settings'],
                run: function () {
                    /** @type {?} */
                    var clones = [];
                    /** @type {?} */
                    var items = _this._items;
                    /** @type {?} */
                    var settings = _this.settings;
                    /** @type {?} */
                    var 
                    // TODO: Should be computed from number of min width items in stage
                    view = Math.max(settings.items * 2, 4);
                    /** @type {?} */
                    var size = Math.ceil(items.length / 2) * 2;
                    /** @type {?} */
                    var append = [];
                    /** @type {?} */
                    var prepend = [];
                    /** @type {?} */
                    var repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
                    repeat /= 2;
                    while (repeat--) {
                        // Switch to only using appended clones
                        clones.push(_this.normalize(clones.length / 2, true));
                        append.push(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, _this.slidesData[clones[clones.length - 1]]));
                        clones.push(_this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                        prepend.unshift(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, _this.slidesData[clones[clones.length - 1]]));
                    }
                    _this._clones = clones;
                    append = append.map(function (slide) {
                        slide.id = "" + _this.clonedIdPrefix + slide.id;
                        slide.isActive = false;
                        slide.isCloned = true;
                        return slide;
                    });
                    prepend = prepend.map(function (slide) {
                        slide.id = "" + _this.clonedIdPrefix + slide.id;
                        slide.isActive = false;
                        slide.isCloned = true;
                        return slide;
                    });
                    _this.slidesData = prepend.concat(_this.slidesData).concat(append);
                }
            }, {
                filter: ['width', 'items', 'settings'],
                run: function () {
                    /** @type {?} */
                    var rtl = _this.settings.rtl ? 1 : -1;
                    /** @type {?} */
                    var size = _this._clones.length + _this._items.length;
                    /** @type {?} */
                    var coordinates = [];
                    /** @type {?} */
                    var iterator = -1;
                    /** @type {?} */
                    var previous = 0;
                    /** @type {?} */
                    var current = 0;
                    while (++iterator < size) {
                        previous = coordinates[iterator - 1] || 0;
                        current = _this._widths[_this.relative(iterator)] + _this.settings.margin;
                        coordinates.push(previous + current * rtl);
                    }
                    _this._coordinates = coordinates;
                }
            }, {
                filter: ['width', 'items', 'settings'],
                run: function () {
                    /** @type {?} */
                    var padding = _this.settings.stagePadding;
                    /** @type {?} */
                    var coordinates = _this._coordinates;
                    /** @type {?} */
                    var css = {
                        'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                        'padding-left': padding || '',
                        'padding-right': padding || ''
                    };
                    _this.stageData.width = css.width; // use this property in *ngIf directive for .owl-stage element
                    _this.stageData.paddingL = css['padding-left'];
                    _this.stageData.paddingR = css['padding-right'];
                }
            }, {
                //   filter: [ 'width', 'items', 'settings' ],
                //   run: cache => {
                // 		// this method sets the width for every slide, but I set it in different way earlier
                // 		const grid = !this.settings.autoWidth,
                // 		items = this.$stage.children(); // use this.slidesData
                //     let iterator = this._coordinates.length;
                //     if (grid && cache.items.merge) {
                //       while (iterator--) {
                //         cache.css.width = this._widths[this.relative(iterator)];
                //         items.eq(iterator).css(cache.css);
                //       }
                //     } else if (grid) {
                //       cache.css.width = cache.items.width;
                //       items.css(cache.css);
                //     }
                //   }
                // }, {
                //   filter: [ 'items' ],
                //   run: function() {
                //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
                //   }
                // }, {
                filter: ['width', 'items', 'settings'],
                run: function (cache) {
                    /** @type {?} */
                    var current = cache.current ? _this.slidesData.findIndex(function (slide) { return slide.id === cache.current; }) : 0;
                    current = Math.max(_this.minimum(), Math.min(_this.maximum(), current));
                    _this.reset(current);
                }
            }, {
                filter: ['position'],
                run: function () {
                    _this.animate(_this.coordinates(_this._current));
                }
            }, {
                filter: ['width', 'position', 'items', 'settings'],
                run: function () {
                    /** @type {?} */
                    var rtl = _this.settings.rtl ? 1 : -1;
                    /** @type {?} */
                    var padding = _this.settings.stagePadding * 2;
                    /** @type {?} */
                    var matches = [];
                    /** @type {?} */
                    var begin;
                    /** @type {?} */
                    var end;
                    /** @type {?} */
                    var inner;
                    /** @type {?} */
                    var outer;
                    /** @type {?} */
                    var i;
                    /** @type {?} */
                    var n;
                    begin = _this.coordinates(_this.current());
                    if (typeof begin === 'number') {
                        begin += padding;
                    }
                    else {
                        begin = 0;
                    }
                    end = begin + _this.width() * rtl;
                    if (rtl === -1 && _this.settings.center) {
                        /** @type {?} */
                        var result = _this._coordinates.filter(function (element) {
                            return _this.settings.items % 2 === 1 ? element >= begin : element > begin;
                        });
                        begin = result.length ? result[result.length - 1] : begin;
                    }
                    for (i = 0, n = _this._coordinates.length; i < n; i++) {
                        inner = Math.ceil(_this._coordinates[i - 1] || 0);
                        outer = Math.ceil(Math.abs(_this._coordinates[i]) + padding * rtl);
                        if ((_this._op(inner, '<=', begin) && (_this._op(inner, '>', end)))
                            || (_this._op(outer, '<', begin) && _this._op(outer, '>', end))) {
                            matches.push(i);
                        }
                    }
                    _this.slidesData.forEach(function (slide) {
                        slide.isActive = false;
                        return slide;
                    });
                    matches.forEach(function (item) {
                        _this.slidesData[item].isActive = true;
                    });
                    if (_this.settings.center) {
                        _this.slidesData.forEach(function (slide) {
                            slide.isCentered = false;
                            return slide;
                        });
                        _this.slidesData[_this.current()].isCentered = true;
                    }
                }
            }
        ];
    }
    Object.defineProperty(CarouselService.prototype, "invalidated", {
        // Is needed for tests
        get: 
        // Is needed for tests
        /**
         * @return {?}
         */
        function () {
            return this._invalidated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselService.prototype, "states", {
        // is needed for tests
        get: 
        // is needed for tests
        /**
         * @return {?}
         */
        function () {
            return this._states;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Makes _viewSettingsShipper$ Subject become Observable
     * @returns Observable of _viewSettingsShipper$ Subject
     */
    /**
     * Makes _viewSettingsShipper$ Subject become Observable
     * @return {?} Observable of _viewSettingsShipper$ Subject
     */
    CarouselService.prototype.getViewCurSettings = /**
     * Makes _viewSettingsShipper$ Subject become Observable
     * @return {?} Observable of _viewSettingsShipper$ Subject
     */
    function () {
        return this._viewSettingsShipper$.asObservable();
    };
    /**
     * Makes _initializedCarousel$ Subject become Observable
     * @returns Observable of _initializedCarousel$ Subject
     */
    /**
     * Makes _initializedCarousel$ Subject become Observable
     * @return {?} Observable of _initializedCarousel$ Subject
     */
    CarouselService.prototype.getInitializedState = /**
     * Makes _initializedCarousel$ Subject become Observable
     * @return {?} Observable of _initializedCarousel$ Subject
     */
    function () {
        return this._initializedCarousel$.asObservable();
    };
    /**
     * Makes _changeSettingsCarousel$ Subject become Observable
     * @returns Observable of _changeSettingsCarousel$ Subject
     */
    /**
     * Makes _changeSettingsCarousel$ Subject become Observable
     * @return {?} Observable of _changeSettingsCarousel$ Subject
     */
    CarouselService.prototype.getChangeState = /**
     * Makes _changeSettingsCarousel$ Subject become Observable
     * @return {?} Observable of _changeSettingsCarousel$ Subject
     */
    function () {
        return this._changeSettingsCarousel$.asObservable();
    };
    /**
     * Makes _changedSettingsCarousel$ Subject become Observable
     * @returns Observable of _changedSettingsCarousel$ Subject
     */
    /**
     * Makes _changedSettingsCarousel$ Subject become Observable
     * @return {?} Observable of _changedSettingsCarousel$ Subject
     */
    CarouselService.prototype.getChangedState = /**
     * Makes _changedSettingsCarousel$ Subject become Observable
     * @return {?} Observable of _changedSettingsCarousel$ Subject
     */
    function () {
        return this._changedSettingsCarousel$.asObservable();
    };
    /**
     * Makes _translateCarousel$ Subject become Observable
     * @returns Observable of _translateCarousel$ Subject
     */
    /**
     * Makes _translateCarousel$ Subject become Observable
     * @return {?} Observable of _translateCarousel$ Subject
     */
    CarouselService.prototype.getTranslateState = /**
     * Makes _translateCarousel$ Subject become Observable
     * @return {?} Observable of _translateCarousel$ Subject
     */
    function () {
        return this._translateCarousel$.asObservable();
    };
    /**
     * Makes _translatedCarousel$ Subject become Observable
     * @returns Observable of _translatedCarousel$ Subject
     */
    /**
     * Makes _translatedCarousel$ Subject become Observable
     * @return {?} Observable of _translatedCarousel$ Subject
     */
    CarouselService.prototype.getTranslatedState = /**
     * Makes _translatedCarousel$ Subject become Observable
     * @return {?} Observable of _translatedCarousel$ Subject
     */
    function () {
        return this._translatedCarousel$.asObservable();
    };
    /**
     * Makes _resizeCarousel$ Subject become Observable
     * @returns Observable of _resizeCarousel$ Subject
     */
    /**
     * Makes _resizeCarousel$ Subject become Observable
     * @return {?} Observable of _resizeCarousel$ Subject
     */
    CarouselService.prototype.getResizeState = /**
     * Makes _resizeCarousel$ Subject become Observable
     * @return {?} Observable of _resizeCarousel$ Subject
     */
    function () {
        return this._resizeCarousel$.asObservable();
    };
    /**
     * Makes _resizedCarousel$ Subject become Observable
     * @returns Observable of _resizedCarousel$ Subject
     */
    /**
     * Makes _resizedCarousel$ Subject become Observable
     * @return {?} Observable of _resizedCarousel$ Subject
     */
    CarouselService.prototype.getResizedState = /**
     * Makes _resizedCarousel$ Subject become Observable
     * @return {?} Observable of _resizedCarousel$ Subject
     */
    function () {
        return this._resizedCarousel$.asObservable();
    };
    /**
     * Makes _refreshCarousel$ Subject become Observable
     * @returns Observable of _refreshCarousel$ Subject
     */
    /**
     * Makes _refreshCarousel$ Subject become Observable
     * @return {?} Observable of _refreshCarousel$ Subject
     */
    CarouselService.prototype.getRefreshState = /**
     * Makes _refreshCarousel$ Subject become Observable
     * @return {?} Observable of _refreshCarousel$ Subject
     */
    function () {
        return this._refreshCarousel$.asObservable();
    };
    /**
     * Makes _refreshedCarousel$ Subject become Observable
     * @returns Observable of _refreshedCarousel$ Subject
     */
    /**
     * Makes _refreshedCarousel$ Subject become Observable
     * @return {?} Observable of _refreshedCarousel$ Subject
     */
    CarouselService.prototype.getRefreshedState = /**
     * Makes _refreshedCarousel$ Subject become Observable
     * @return {?} Observable of _refreshedCarousel$ Subject
     */
    function () {
        return this._refreshedCarousel$.asObservable();
    };
    /**
     * Makes _dragCarousel$ Subject become Observable
     * @returns Observable of _dragCarousel$ Subject
     */
    /**
     * Makes _dragCarousel$ Subject become Observable
     * @return {?} Observable of _dragCarousel$ Subject
     */
    CarouselService.prototype.getDragState = /**
     * Makes _dragCarousel$ Subject become Observable
     * @return {?} Observable of _dragCarousel$ Subject
     */
    function () {
        return this._dragCarousel$.asObservable();
    };
    /**
     * Makes _draggedCarousel$ Subject become Observable
     * @returns Observable of _draggedCarousel$ Subject
     */
    /**
     * Makes _draggedCarousel$ Subject become Observable
     * @return {?} Observable of _draggedCarousel$ Subject
     */
    CarouselService.prototype.getDraggedState = /**
     * Makes _draggedCarousel$ Subject become Observable
     * @return {?} Observable of _draggedCarousel$ Subject
     */
    function () {
        return this._draggedCarousel$.asObservable();
    };
    /**
     * Setups custom options expanding default options
     * @param options custom options
     */
    /**
     * Setups custom options expanding default options
     * @param {?} options custom options
     * @return {?}
     */
    CarouselService.prototype.setOptions = /**
     * Setups custom options expanding default options
     * @param {?} options custom options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var configOptions = new OwlCarouselOConfig();
        /** @type {?} */
        var checkedOptions = this._validateOptions(options, configOptions);
        this._options = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, configOptions, checkedOptions);
    };
    /**
     * Checks whether user's option are set properly. Cheking is based on typings;
     * @param options options set by user
     * @param configOptions default options
     * @returns checked and modified (if it's needed) user's options
     *
     * Notes:
     * 	- if user set option with wrong type, it'll be written in console
     */
    /**
     * Checks whether user's option are set properly. Cheking is based on typings;
     * @param {?} options options set by user
     * @param {?} configOptions default options
     * @return {?} checked and modified (if it's needed) user's options
     *
     * Notes:
     * 	- if user set option with wrong type, it'll be written in console
     */
    CarouselService.prototype._validateOptions = /**
     * Checks whether user's option are set properly. Cheking is based on typings;
     * @param {?} options options set by user
     * @param {?} configOptions default options
     * @return {?} checked and modified (if it's needed) user's options
     *
     * Notes:
     * 	- if user set option with wrong type, it'll be written in console
     */
    function (options, configOptions) {
        var _this = this;
        /** @type {?} */
        var checkedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options);
        /** @type {?} */
        var mockedTypes = new OwlOptionsMockedTypes();
        /** @type {?} */
        var setRightOption = function (type, key) {
            _this.logger.log("options." + key + " must be type of " + type + "; " + key + "=" + options[key] + " skipped to defaults: " + key + "=" + configOptions[key]);
            return configOptions[key];
        };
        var _loop_1 = function (key) {
            if (checkedOptions.hasOwnProperty(key)) {
                // condition could be shortened but it gets harder for understanding
                if (mockedTypes[key] === 'number') {
                    if (this_1._isNumeric(checkedOptions[key])) {
                        checkedOptions[key] = +checkedOptions[key];
                        checkedOptions[key] = key === 'items' ? this_1._validateItems(checkedOptions[key]) : checkedOptions[key];
                    }
                    else {
                        checkedOptions[key] = setRightOption(mockedTypes[key], key);
                    }
                }
                else if (mockedTypes[key] === 'boolean' && typeof checkedOptions[key] !== 'boolean') {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
                else if (mockedTypes[key] === 'number|boolean' && !this_1._isNumberOrBoolean(checkedOptions[key])) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
                else if (mockedTypes[key] === 'number|string' && !this_1._isNumberOrString(checkedOptions[key])) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
                else if (mockedTypes[key] === 'string|boolean' && !this_1._isStringOrBoolean(checkedOptions[key])) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
                else if (mockedTypes[key] === 'string[]') {
                    if (Array.isArray(checkedOptions[key])) {
                        /** @type {?} */
                        var isString_1 = false;
                        checkedOptions[key].forEach(function (element) {
                            isString_1 = typeof element === 'string' ? true : false;
                        });
                        if (!isString_1) {
                            checkedOptions[key] = setRightOption(mockedTypes[key], key);
                        }
                    }
                    else {
                        checkedOptions[key] = setRightOption(mockedTypes[key], key);
                    }
                }
            }
        };
        var this_1 = this;
        for (var key in checkedOptions) {
            _loop_1(key);
        }
        return checkedOptions;
    };
    /**
     * Checks option items set by user and if it bigger than number of slides then returns number of slides
     * @param items option items set by user
     * @returns right number of items
     */
    /**
     * Checks option items set by user and if it bigger than number of slides then returns number of slides
     * @param {?} items option items set by user
     * @return {?} right number of items
     */
    CarouselService.prototype._validateItems = /**
     * Checks option items set by user and if it bigger than number of slides then returns number of slides
     * @param {?} items option items set by user
     * @return {?} right number of items
     */
    function (items) {
        /** @type {?} */
        var result;
        if (items > this._items.length) {
            result = this._items.length;
            this.logger.log('The option \'items\' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled');
        }
        else {
            if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
                this.logger.log('Option \'items\' in your options is equal to the number of slides. So the navigation got disabled');
            }
            result = items;
        }
        return result;
    };
    /**
     * Set current width of carousel
     * @param width width of carousel Window
     */
    /**
     * Set current width of carousel
     * @param {?} width width of carousel Window
     * @return {?}
     */
    CarouselService.prototype.setCarouselWidth = /**
     * Set current width of carousel
     * @param {?} width width of carousel Window
     * @return {?}
     */
    function (width) {
        this._width = width;
    };
    /**
       * Setups the current settings.
       * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
       * @todo Support for media queries by using `matchMedia` would be nice.
       * @param carouselWidth width of carousel
       * @param slides array of slides
       * @param options options set by user
       */
    /**
     * Setups the current settings.
     * \@todo Remove responsive classes. Why should adaptive designs be brought into IE8? / Support for media queries by using `matchMedia` would be nice.
     * @param {?} carouselWidth width of carousel
     * @param {?} slides array of slides
     * @param {?} options options set by user
     * @return {?}
     */
    CarouselService.prototype.setup = /**
     * Setups the current settings.
     * \@todo Remove responsive classes. Why should adaptive designs be brought into IE8? / Support for media queries by using `matchMedia` would be nice.
     * @param {?} carouselWidth width of carousel
     * @param {?} slides array of slides
     * @param {?} options options set by user
     * @return {?}
     */
    function (carouselWidth, slides, options) {
        this.setCarouselWidth(carouselWidth);
        this.setItems(slides);
        this._defineSlidesData();
        this.setOptions(options);
        this.settings = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this._options);
        this.setViewportItemsN();
        this._trigger('change', { property: { name: 'settings', value: this.settings } });
        this.invalidate('settings'); // must be call of this function;
        this._trigger('changed', { property: { name: 'settings', value: this.settings } });
    };
    /**
     * Set number of items for current viewport
     */
    /**
     * Set number of items for current viewport
     * @return {?}
     */
    CarouselService.prototype.setViewportItemsN = /**
     * Set number of items for current viewport
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewport = this._width;
        /** @type {?} */
        var overwrites = this._options.responsive;
        /** @type {?} */
        var match = -1;
        if (!Object.keys(overwrites).length) {
            return;
        }
        if (!viewport) {
            this.settings.items = 1;
            return;
        }
        for (var key in overwrites) {
            if (overwrites.hasOwnProperty(key)) {
                if (+key <= viewport && +key > match) {
                    match = Number(key);
                }
            }
        }
        this.settings = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.settings, { items: this._validateItems(overwrites[match].items) });
        // if (typeof this.settings.stagePadding === 'function') {
        // 	this.settings.stagePadding = this.settings.stagePadding();
        // }
        delete this.settings.responsive;
        this.owlDOMData.isResponsive = true;
        this._breakpoint = match;
        this.invalidate('settings');
    };
    /**
     * Initializes the carousel.
     * @param slides array of CarouselSlideDirective
     */
    /**
     * Initializes the carousel.
     * @param {?} slides array of CarouselSlideDirective
     * @return {?}
     */
    CarouselService.prototype.initialize = /**
     * Initializes the carousel.
     * @param {?} slides array of CarouselSlideDirective
     * @return {?}
     */
    function (slides) {
        var _this = this;
        this.enter('initializing');
        // this.trigger('initialize');
        this.owlDOMData.rtl = this.settings.rtl;
        if (this._mergers.length) {
            this._mergers = [];
        }
        slides.forEach(function (item) {
            /** @type {?} */
            var mergeN = _this.settings.merge ? item.dataMerge : 1;
            _this._mergers.push(mergeN);
        });
        this._clones = [];
        this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
        this.invalidate('items');
        this.refresh();
        this.owlDOMData.isLoaded = true;
        this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
        this.owlDOMData.isTouchDragable = this.settings.touchDrag;
        this.sendChanges();
        this.leave('initializing');
        this._trigger('initialized');
    };
    /**
     * Sends all data needed for View
     */
    /**
     * Sends all data needed for View
     * @return {?}
     */
    CarouselService.prototype.sendChanges = /**
     * Sends all data needed for View
     * @return {?}
     */
    function () {
        this._viewSettingsShipper$.next({
            owlDOMData: this.owlDOMData,
            stageData: this.stageData,
            slidesData: this.slidesData,
            navData: this.navData,
            dotsData: this.dotsData
        });
    };
    /**
       * Updates option logic if necessery
       */
    /**
     * Updates option logic if necessery
     * @return {?}
     */
    CarouselService.prototype._optionsLogic = /**
     * Updates option logic if necessery
     * @return {?}
     */
    function () {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = 0;
            this.settings.merge = false;
        }
    };
    /**
     * Updates the view
     */
    /**
     * Updates the view
     * @return {?}
     */
    CarouselService.prototype.update = /**
     * Updates the view
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var n = this._pipe.length;
        /** @type {?} */
        var filter$$1 = function (item) { return _this._invalidated[item]; };
        /** @type {?} */
        var cache = {};
        while (i < n) {
            /** @type {?} */
            var filteredPipe = this._pipe[i].filter.filter(filter$$1);
            if (this._invalidated.all || filteredPipe.length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }
        this.slidesData.forEach(function (slide) { return slide.classes = _this.setCurSlideClasses(slide); });
        this.sendChanges();
        this._invalidated = {};
        if (!this.is('valid')) {
            this.enter('valid');
        }
    };
    /**
       * Gets the width of the view.
       * @param [dimension=Width.Default] The dimension to return
       * @returns The width of the view in pixel.
       */
    /**
     * Gets the width of the view.
     * @param {?=} dimension
     * @return {?} The width of the view in pixel.
     */
    CarouselService.prototype.width = /**
     * Gets the width of the view.
     * @param {?=} dimension
     * @return {?} The width of the view in pixel.
     */
    function (dimension) {
        dimension = dimension || Width.Default;
        switch (dimension) {
            case Width.Inner:
            case Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };
    /**
       * Refreshes the carousel primarily for adaptive purposes.
       */
    /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @return {?}
     */
    CarouselService.prototype.refresh = /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @return {?}
     */
    function () {
        this.enter('refreshing');
        this._trigger('refresh');
        this._defineSlidesData();
        this.setViewportItemsN();
        this._optionsLogic();
        // this.$element.addClass(this.options.refreshClass);
        this.update();
        // this.$element.removeClass(this.options.refreshClass);
        this.leave('refreshing');
        this._trigger('refreshed');
    };
    /**
       * Checks window `resize` event.
       * @param curWidth width of .owl-carousel
       */
    /**
     * Checks window `resize` event.
     * @param {?} curWidth width of .owl-carousel
     * @return {?}
     */
    CarouselService.prototype.onResize = /**
     * Checks window `resize` event.
     * @param {?} curWidth width of .owl-carousel
     * @return {?}
     */
    function (curWidth) {
        if (!this._items.length) {
            return false;
        }
        this.setCarouselWidth(curWidth);
        this.enter('resizing');
        // if (this.trigger('resize').isDefaultPrevented()) {
        // 	this.leave('resizing');
        // 	return false;
        // }
        this._trigger('resize');
        this.invalidate('width');
        this.refresh();
        this.leave('resizing');
        this._trigger('resized');
    };
    /**
       * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
       * @todo Horizontal swipe threshold as option
       * @todo #261
       * @param event - The event arguments.
       * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
       */
    /**
     * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
     * \@todo Horizontal swipe threshold as option / #261
     * @param {?} event - The event arguments.
     * @return {?} stage - object with 'x' and 'y' coordinates of .owl-stage
     */
    CarouselService.prototype.prepareDragging = /**
     * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
     * \@todo Horizontal swipe threshold as option / #261
     * @param {?} event - The event arguments.
     * @return {?} stage - object with 'x' and 'y' coordinates of .owl-stage
     */
    function (event) {
        /** @type {?} */
        var stage = null;
        /** @type {?} */
        var transformArr;
        // could be 5 commented lines below; However there's stage transform in stageData and in updates after each move of stage
        // stage = getComputedStyle(this.el.nativeElement).transform.replace(/.*\(|\)| /g, '').split(',');
        // stage = {
        //   x: stage[stage.length === 16 ? 12 : 4],
        //   y: stage[stage.length === 16 ? 13 : 5]
        // };
        transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, '').split(',');
        stage = {
            x: +transformArr[0],
            y: +transformArr[1]
        };
        if (this.is('animating')) {
            this.invalidate('position');
        }
        if (event.type === 'mousedown') {
            this.owlDOMData.isGrab = true;
        }
        this.speed(0);
        return stage;
    };
    /**
     * Enters into a 'dragging' state
     */
    /**
     * Enters into a 'dragging' state
     * @return {?}
     */
    CarouselService.prototype.enterDragging = /**
     * Enters into a 'dragging' state
     * @return {?}
     */
    function () {
        this.enter('dragging');
        this._trigger('drag');
    };
    /**
       * Defines new coords for .owl-stage while dragging it
       * @todo #261
       * @param event the event arguments.
       * @param dragData initial data got after starting dragging
       * @returns coords or false
       */
    /**
     * Defines new coords for .owl-stage while dragging it
     * \@todo #261
     * @param {?} event the event arguments.
     * @param {?} dragData initial data got after starting dragging
     * @return {?} coords or false
     */
    CarouselService.prototype.defineNewCoordsDrag = /**
     * Defines new coords for .owl-stage while dragging it
     * \@todo #261
     * @param {?} event the event arguments.
     * @param {?} dragData initial data got after starting dragging
     * @return {?} coords or false
     */
    function (event, dragData) {
        /** @type {?} */
        var minimum = null;
        /** @type {?} */
        var maximum = null;
        /** @type {?} */
        var pull = null;
        /** @type {?} */
        var delta = this.difference(dragData.pointer, this.pointer(event));
        /** @type {?} */
        var stage = this.difference(dragData.stage.start, delta);
        if (!this.is('dragging')) {
            return false;
        }
        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = +this.coordinates(this.maximum() + 1) - minimum;
            stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
        }
        else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }
        return stage;
    };
    /**
       * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
       * @todo #261
       * @todo Threshold for click event
       * @param event the event arguments.
       * @param dragObj the object with dragging settings and states
       * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
       */
    /**
     * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
     * \@todo #261 / Threshold for click event
     * @param {?} event the event arguments.
     * @param {?} dragObj the object with dragging settings and states
     * @param {?} clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
     * @return {?}
     */
    CarouselService.prototype.finishDragging = /**
     * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
     * \@todo #261 / Threshold for click event
     * @param {?} event the event arguments.
     * @param {?} dragObj the object with dragging settings and states
     * @param {?} clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
     * @return {?}
     */
    function (event, dragObj, clickAttacher) {
        /** @type {?} */
        var delta = this.difference(dragObj.pointer, this.pointer(event));
        /** @type {?} */
        var stage = dragObj.stage.current;
        /** @type {?} */
        var direction = delta.x > +this.settings.rtl ? 'left' : 'right';
        /** @type {?} */
        var currentSlideI;
        /** @type {?} */
        var current;
        /** @type {?} */
        var newCurrent;
        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
            currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
            current = this.current();
            newCurrent = this.current(currentSlideI === -1 ? undefined : currentSlideI);
            if (current !== newCurrent) {
                this.invalidate('position');
                this.update();
            }
            dragObj.direction = direction;
            if (Math.abs(delta.x) > 3 || new Date().getTime() - dragObj.time > 300) {
                clickAttacher();
            }
        }
        if (!this.is('dragging')) {
            return;
        }
        this.leave('dragging');
        this._trigger('dragged');
    };
    /**
       * Gets absolute position of the closest item for a coordinate.
       * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
       * @param coordinate The coordinate in pixel.
       * @param direction The direction to check for the closest item. Ether `left` or `right`.
       * @returns The absolute position of the closest item.
       */
    /**
     * Gets absolute position of the closest item for a coordinate.
     * \@todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @param {?} coordinate The coordinate in pixel.
     * @param {?} direction The direction to check for the closest item. Ether `left` or `right`.
     * @return {?} The absolute position of the closest item.
     */
    CarouselService.prototype.closest = /**
     * Gets absolute position of the closest item for a coordinate.
     * \@todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @param {?} coordinate The coordinate in pixel.
     * @param {?} direction The direction to check for the closest item. Ether `left` or `right`.
     * @return {?} The absolute position of the closest item.
     */
    function (coordinate, direction) {
        /** @type {?} */
        var pull = 30;
        /** @type {?} */
        var width = this.width();
        /** @type {?} */
        var coordinates = (/** @type {?} */ (this.coordinates()));
        /** @type {?} */
        var position = -1;
        if (this.settings.center) {
            coordinates = coordinates.map(function (item) {
                if (item === 0) {
                    item += 0.000001;
                }
                return item;
            });
        }
        // option 'freeDrag' doesn't have realization and using it here creates problem:
        // variable 'position' stays unchanged (it equals -1 at the begging) and thus method returns -1
        // Returning value is consumed by method current(), which taking -1 as argument calculates the index of new current slide
        // In case of having 5 slides ans 'loop=false; calling 'current(-1)' sets props '_current' as 4. Just last slide remains visible instead of 3 last slides.
        // if (!this.settings.freeDrag) {
        // check closest item
        for (var i = 0; i < coordinates.length; i++) {
            if (direction === 'left' && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
                position = i;
                // on a right pull, check on previous index
                // to do so, subtract width from value and set position = index + 1
            }
            else if (direction === 'right' && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
                position = i + 1;
            }
            else if (this._op(coordinate, '<', coordinates[i])
                && this._op(coordinate, '>', coordinates[i + 1] || coordinates[i] - width)) {
                position = direction === 'left' ? i + 1 : i;
            }
            else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
                position = i;
            }
            if (position !== -1) {
                break;
            }
        }
        // }
        if (!this.settings.loop) {
            // non loop boundries
            if (this._op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            }
            else if (this._op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }
        return position;
    };
    /**
       * Animates the stage.
       * @todo #270
       * @param coordinate The coordinate in pixels.
       */
    /**
     * Animates the stage.
     * \@todo #270
     * @param {?} coordinate The coordinate in pixels.
     * @return {?}
     */
    CarouselService.prototype.animate = /**
     * Animates the stage.
     * \@todo #270
     * @param {?} coordinate The coordinate in pixels.
     * @return {?}
     */
    function (coordinate) {
        /** @type {?} */
        var animate$$1 = this.speed() > 0;
        if (this.is('animating')) {
            this.onTransitionEnd();
        }
        if (animate$$1) {
            this.enter('animating');
            this._trigger('translate');
        }
        this.stageData.transform = 'translate3d(' + coordinate + 'px,0px,0px)';
        this.stageData.transition = (this.speed() / 1000) + 's';
        // also there was transition by means of JQuery.animate or css-changing property left
    };
    /**
       * Checks whether the carousel is in a specific state or not.
       * @param state The state to check.
       * @returns The flag which indicates if the carousel is busy.
       */
    /**
     * Checks whether the carousel is in a specific state or not.
     * @param {?} state The state to check.
     * @return {?} The flag which indicates if the carousel is busy.
     */
    CarouselService.prototype.is = /**
     * Checks whether the carousel is in a specific state or not.
     * @param {?} state The state to check.
     * @return {?} The flag which indicates if the carousel is busy.
     */
    function (state$$1) {
        return this._states.current[state$$1] && this._states.current[state$$1] > 0;
    };
    /**
       * Sets the absolute position of the current item.
       * @param position The new absolute position or nothing to leave it unchanged.
       * @returns The absolute position of the current item.
       */
    /**
     * Sets the absolute position of the current item.
     * @param {?=} position The new absolute position or nothing to leave it unchanged.
     * @return {?} The absolute position of the current item.
     */
    CarouselService.prototype.current = /**
     * Sets the absolute position of the current item.
     * @param {?=} position The new absolute position or nothing to leave it unchanged.
     * @return {?} The absolute position of the current item.
     */
    function (position) {
        if (position === undefined) {
            return this._current;
        }
        if (this._items.length === 0) {
            return undefined;
        }
        position = this.normalize(position);
        if (this._current !== position) {
            /** @type {?} */
            var event_1 = this._trigger('change', { property: { name: 'position', value: position } });
            // if (event.data !== undefined) {
            // 	position = this.normalize(event.data);
            // }
            this._current = position;
            this.invalidate('position');
            this._trigger('changed', { property: { name: 'position', value: this._current } });
        }
        return this._current;
    };
    /**
       * Invalidates the given part of the update routine.
       * @param part The part to invalidate.
       * @returns The invalidated parts.
       */
    /**
     * Invalidates the given part of the update routine.
     * @param {?} part The part to invalidate.
     * @return {?} The invalidated parts.
     */
    CarouselService.prototype.invalidate = /**
     * Invalidates the given part of the update routine.
     * @param {?} part The part to invalidate.
     * @return {?} The invalidated parts.
     */
    function (part) {
        if (typeof part === 'string') {
            this._invalidated[part] = true;
            if (this.is('valid')) {
                this.leave('valid');
            }
        }
        return Object.keys(this._invalidated);
    };
    /**
     * Resets the absolute position of the current item.
     * @param position the absolute position of the new item.
     */
    /**
     * Resets the absolute position of the current item.
     * @param {?} position the absolute position of the new item.
     * @return {?}
     */
    CarouselService.prototype.reset = /**
     * Resets the absolute position of the current item.
     * @param {?} position the absolute position of the new item.
     * @return {?}
     */
    function (position) {
        position = this.normalize(position);
        if (position === undefined) {
            return;
        }
        this._speed = 0;
        this._current = position;
        this._suppress(['translate', 'translated']);
        this.animate(this.coordinates(position));
        this._release(['translate', 'translated']);
    };
    /**
       * Normalizes an absolute or a relative position of an item.
       * @param position The absolute or relative position to normalize.
       * @param relative Whether the given position is relative or not.
       * @returns The normalized position.
       */
    /**
     * Normalizes an absolute or a relative position of an item.
     * @param {?} position The absolute or relative position to normalize.
     * @param {?=} relative Whether the given position is relative or not.
     * @return {?} The normalized position.
     */
    CarouselService.prototype.normalize = /**
     * Normalizes an absolute or a relative position of an item.
     * @param {?} position The absolute or relative position to normalize.
     * @param {?=} relative Whether the given position is relative or not.
     * @return {?} The normalized position.
     */
    function (position, relative) {
        /** @type {?} */
        var n = this._items.length;
        /** @type {?} */
        var m = relative ? 0 : this._clones.length;
        if (!this._isNumeric(position) || n < 1) {
            position = undefined;
        }
        else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }
        return position;
    };
    /**
       * Converts an absolute position of an item into a relative one.
       * @param position The absolute position to convert.
       * @returns The converted position.
       */
    /**
     * Converts an absolute position of an item into a relative one.
     * @param {?} position The absolute position to convert.
     * @return {?} The converted position.
     */
    CarouselService.prototype.relative = /**
     * Converts an absolute position of an item into a relative one.
     * @param {?} position The absolute position to convert.
     * @return {?} The converted position.
     */
    function (position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };
    /**
       * Gets the maximum position for the current item.
       * @param relative Whether to return an absolute position or a relative position.
       * @returns number of maximum position
       */
    /**
     * Gets the maximum position for the current item.
     * @param {?=} relative Whether to return an absolute position or a relative position.
     * @return {?} number of maximum position
     */
    CarouselService.prototype.maximum = /**
     * Gets the maximum position for the current item.
     * @param {?=} relative Whether to return an absolute position or a relative position.
     * @return {?} number of maximum position
     */
    function (relative) {
        if (relative === void 0) { relative = false; }
        /** @type {?} */
        var settings = this.settings;
        /** @type {?} */
        var maximum = this._coordinates.length;
        /** @type {?} */
        var iterator;
        /** @type {?} */
        var reciprocalItemsWidth;
        /** @type {?} */
        var elementWidth;
        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        }
        else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this.slidesData[--iterator].width;
            elementWidth = this._width;
            while (iterator--) {
                // it could be use this._items instead of this.slidesData;
                reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;
                if (reciprocalItemsWidth > elementWidth) {
                    break;
                }
            }
            maximum = iterator + 1;
        }
        else if (settings.center) {
            maximum = this._items.length - 1;
        }
        else {
            maximum = this._items.length - settings.items;
        }
        if (relative) {
            maximum -= this._clones.length / 2;
        }
        return Math.max(maximum, 0);
    };
    /**
       * Gets the minimum position for the current item.
       * @param relative Whether to return an absolute position or a relative position.
       * @returns number of minimum position
       */
    /**
     * Gets the minimum position for the current item.
     * @param {?=} relative Whether to return an absolute position or a relative position.
     * @return {?} number of minimum position
     */
    CarouselService.prototype.minimum = /**
     * Gets the minimum position for the current item.
     * @param {?=} relative Whether to return an absolute position or a relative position.
     * @return {?} number of minimum position
     */
    function (relative) {
        if (relative === void 0) { relative = false; }
        return relative ? 0 : this._clones.length / 2;
    };
    /**
       * Gets an item at the specified relative position.
       * @param position The relative position of the item.
       * @returns The item at the given position or all items if no position was given.
       */
    /**
     * Gets an item at the specified relative position.
     * @param {?=} position The relative position of the item.
     * @return {?} The item at the given position or all items if no position was given.
     */
    CarouselService.prototype.items = /**
     * Gets an item at the specified relative position.
     * @param {?=} position The relative position of the item.
     * @return {?} The item at the given position or all items if no position was given.
     */
    function (position) {
        if (position === undefined) {
            return this._items.slice();
        }
        position = this.normalize(position, true);
        return [this._items[position]];
    };
    /**
       * Gets an item at the specified relative position.
       * @param position The relative position of the item.
       * @returns The item at the given position or all items if no position was given.
       */
    /**
     * Gets an item at the specified relative position.
     * @param {?} position The relative position of the item.
     * @return {?} The item at the given position or all items if no position was given.
     */
    CarouselService.prototype.mergers = /**
     * Gets an item at the specified relative position.
     * @param {?} position The relative position of the item.
     * @return {?} The item at the given position or all items if no position was given.
     */
    function (position) {
        if (position === undefined) {
            return this._mergers.slice();
        }
        position = this.normalize(position, true);
        return this._mergers[position];
    };
    /**
       * Gets the absolute positions of clones for an item.
       * @param position The relative position of the item.
       * @returns The absolute positions of clones for the item or all if no position was given.
       */
    /**
     * Gets the absolute positions of clones for an item.
     * @param {?=} position The relative position of the item.
     * @return {?} The absolute positions of clones for the item or all if no position was given.
     */
    CarouselService.prototype.clones = /**
     * Gets the absolute positions of clones for an item.
     * @param {?=} position The relative position of the item.
     * @return {?} The absolute positions of clones for the item or all if no position was given.
     */
    function (position) {
        /** @type {?} */
        var odd = this._clones.length / 2;
        /** @type {?} */
        var even = odd + this._items.length;
        /** @type {?} */
        var map = function (index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2; };
        if (position === undefined) {
            return this._clones.map(function (v, i) { return map(i); });
        }
        return this._clones.map(function (v, i) { return v === position ? map(i) : null; }).filter(function (item) { return item; });
    };
    /**
       * Sets the current animation speed.
       * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
       * @returns The current animation speed in milliseconds.
       */
    /**
     * Sets the current animation speed.
     * @param {?=} speed The animation speed in milliseconds or nothing to leave it unchanged.
     * @return {?} The current animation speed in milliseconds.
     */
    CarouselService.prototype.speed = /**
     * Sets the current animation speed.
     * @param {?=} speed The animation speed in milliseconds or nothing to leave it unchanged.
     * @return {?} The current animation speed in milliseconds.
     */
    function (speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }
        return this._speed;
    };
    /**
       * Gets the coordinate of an item.
       * @todo The name of this method is missleanding.
       * @param position The absolute position of the item within `minimum()` and `maximum()`.
       * @returns The coordinate of the item in pixel or all coordinates.
       */
    /**
     * Gets the coordinate of an item.
     * \@todo The name of this method is missleanding.
     * @param {?=} position The absolute position of the item within `minimum()` and `maximum()`.
     * @return {?} The coordinate of the item in pixel or all coordinates.
     */
    CarouselService.prototype.coordinates = /**
     * Gets the coordinate of an item.
     * \@todo The name of this method is missleanding.
     * @param {?=} position The absolute position of the item within `minimum()` and `maximum()`.
     * @return {?} The coordinate of the item in pixel or all coordinates.
     */
    function (position) {
        var _this = this;
        /** @type {?} */
        var multiplier = 1;
        /** @type {?} */
        var newPosition = position - 1;
        /** @type {?} */
        var coordinate;
        /** @type {?} */
        var result;
        if (position === undefined) {
            result = this._coordinates.map(function (item, index) {
                return (/** @type {?} */ (_this.coordinates(index)));
            });
            return result;
        }
        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        }
        else {
            coordinate = this._coordinates[newPosition] || 0;
        }
        coordinate = Math.ceil(coordinate);
        return coordinate;
    };
    /**
       * Calculates the speed for a translation.
       * @param from The absolute position of the start item.
       * @param to The absolute position of the target item.
       * @param factor [factor=undefined] - The time factor in milliseconds.
       * @returns The time in milliseconds for the translation.
       */
    /**
     * Calculates the speed for a translation.
     * @param {?} from The absolute position of the start item.
     * @param {?} to The absolute position of the target item.
     * @param {?=} factor [factor=undefined] - The time factor in milliseconds.
     * @return {?} The time in milliseconds for the translation.
     */
    CarouselService.prototype._duration = /**
     * Calculates the speed for a translation.
     * @param {?} from The absolute position of the start item.
     * @param {?} to The absolute position of the target item.
     * @param {?=} factor [factor=undefined] - The time factor in milliseconds.
     * @return {?} The time in milliseconds for the translation.
     */
    function (from, to, factor) {
        if (factor === 0) {
            return 0;
        }
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((+factor || this.settings.smartSpeed));
    };
    /**
       * Slides to the specified item.
       * @param position The position of the item.
       * @param speed The time in milliseconds for the transition.
       */
    /**
     * Slides to the specified item.
     * @param {?} position The position of the item.
     * @param {?} speed The time in milliseconds for the transition.
     * @return {?}
     */
    CarouselService.prototype.to = /**
     * Slides to the specified item.
     * @param {?} position The position of the item.
     * @param {?} speed The time in milliseconds for the transition.
     * @return {?}
     */
    function (position, speed) {
        var _this = this;
        /** @type {?} */
        var current = this.current();
        /** @type {?} */
        var revert = null;
        /** @type {?} */
        var distance = position - this.relative(current);
        /** @type {?} */
        var maximum = this.maximum();
        /** @type {?} */
        var direction = +(distance > 0) - +(distance < 0);
        /** @type {?} */
        var items = this._items.length;
        /** @type {?} */
        var minimum = this.minimum();
        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }
            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;
            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current);
                this.sendChanges();
            }
        }
        else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        }
        else {
            position = Math.max(minimum, Math.min(maximum, position));
        }
        setTimeout(function () {
            _this.speed(_this._duration(current, position, speed));
            _this.current(position);
            _this.update();
        }, 0);
    };
    /**
       * Slides to the next item.
       * @param speed The time in milliseconds for the transition.
       */
    /**
     * Slides to the next item.
     * @param {?} speed The time in milliseconds for the transition.
     * @return {?}
     */
    CarouselService.prototype.next = /**
     * Slides to the next item.
     * @param {?} speed The time in milliseconds for the transition.
     * @return {?}
     */
    function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };
    /**
       * Slides to the previous item.
       * @param speed The time in milliseconds for the transition.
       */
    /**
     * Slides to the previous item.
     * @param {?} speed The time in milliseconds for the transition.
     * @return {?}
     */
    CarouselService.prototype.prev = /**
     * Slides to the previous item.
     * @param {?} speed The time in milliseconds for the transition.
     * @return {?}
     */
    function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };
    /**
       * Handles the end of an animation.
       * @param event - The event arguments.
       */
    /**
     * Handles the end of an animation.
     * @param {?=} event - The event arguments.
     * @return {?}
     */
    CarouselService.prototype.onTransitionEnd = /**
     * Handles the end of an animation.
     * @param {?=} event - The event arguments.
     * @return {?}
     */
    function (event) {
        // if css2 animation then event object is undefined
        if (event !== undefined) {
            // event.stopPropagation();
            // // Catch only owl-stage transitionEnd event
            // if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)	) {
            // 	return false;
            // }
            return false;
        }
        this.leave('animating');
        this._trigger('translated');
    };
    /**
       * Gets viewport width.
       * @returns - The width in pixel.
       */
    /**
     * Gets viewport width.
     * @return {?} - The width in pixel.
     */
    CarouselService.prototype._viewport = /**
     * Gets viewport width.
     * @return {?} - The width in pixel.
     */
    function () {
        /** @type {?} */
        var width;
        if (this._width) {
            width = this._width;
        }
        else {
            this.logger.log('Can not detect viewport width.');
        }
        return width;
    };
    /**
       * Sets _items
       * @param content The list of slides put into CarouselSlideDirectives.
       */
    /**
     * Sets _items
     * @param {?} content The list of slides put into CarouselSlideDirectives.
     * @return {?}
     */
    CarouselService.prototype.setItems = /**
     * Sets _items
     * @param {?} content The list of slides put into CarouselSlideDirectives.
     * @return {?}
     */
    function (content) {
        this._items = content;
    };
    /**
     * Sets slidesData using this._items
     */
    /**
     * Sets slidesData using this._items
     * @return {?}
     */
    CarouselService.prototype._defineSlidesData = /**
     * Sets slidesData using this._items
     * @return {?}
     */
    function () {
        // Maybe creating and using loadMap would be better in LazyLoadService.
        // Hovewer in that case when 'resize' event fires, prop 'load' of all slides will get 'false' and such state of prop will be seen by View during its updating. Accordingly the code will remove slides's content from DOM even if it was loaded before.
        // Thus it would be needed to add that content into DOM again.
        // In order to avoid additional removing/adding loaded slides's content we use loadMap here and set restore state of prop 'load' before the View will get it.
        /** @type {?} */
        var loadMap;
        if (this.slidesData && this.slidesData.length) {
            loadMap = new Map();
            this.slidesData.forEach(function (item) {
                if (item.load) {
                    loadMap.set(item.id, item.load);
                }
            });
        }
        this.slidesData = this._items.map(function (slide) {
            return {
                id: "" + slide.id,
                isActive: false,
                tplRef: slide.tplRef,
                dataMerge: slide.dataMerge,
                width: 0,
                isCloned: false,
                load: loadMap ? loadMap.get(slide.id) : false,
                hashFragment: slide.dataHash
            };
        });
    };
    /**
     * Sets current classes for slide
     * @param slide Slide of carousel
     * @returns object with names of css-classes which are keys and true/false values
     */
    /**
     * Sets current classes for slide
     * @param {?} slide Slide of carousel
     * @return {?} object with names of css-classes which are keys and true/false values
     */
    CarouselService.prototype.setCurSlideClasses = /**
     * Sets current classes for slide
     * @param {?} slide Slide of carousel
     * @return {?} object with names of css-classes which are keys and true/false values
     */
    function (slide) {
        // CSS classes: added/removed per current state of component properties
        /** @type {?} */
        var currentClasses = {
            'active': slide.isActive,
            'center': slide.isCentered,
            'cloned': slide.isCloned,
            'animated': slide.isAnimated,
            'owl-animated-in': slide.isDefAnimatedIn,
            'owl-animated-out': slide.isDefAnimatedOut
        };
        if (this.settings.animateIn) {
            currentClasses[(/** @type {?} */ (this.settings.animateIn))] = slide.isCustomAnimatedIn;
        }
        if (this.settings.animateOut) {
            currentClasses[(/** @type {?} */ (this.settings.animateOut))] = slide.isCustomAnimatedOut;
        }
        return currentClasses;
    };
    /**
       * Operators to calculate right-to-left and left-to-right.
       * @param a - The left side operand.
       * @param o - The operator.
       * @param b - The right side operand.
       * @returns true/false meaning right-to-left or left-to-right
       */
    /**
     * Operators to calculate right-to-left and left-to-right.
     * @param {?} a - The left side operand.
     * @param {?} o - The operator.
     * @param {?} b - The right side operand.
     * @return {?} true/false meaning right-to-left or left-to-right
     */
    CarouselService.prototype._op = /**
     * Operators to calculate right-to-left and left-to-right.
     * @param {?} a - The left side operand.
     * @param {?} o - The operator.
     * @param {?} b - The right side operand.
     * @return {?} true/false meaning right-to-left or left-to-right
     */
    function (a, o, b) {
        /** @type {?} */
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };
    /**
       * Triggers a public event.
       * @todo Remove `status`, `relatedTarget` should be used instead.
       * @param name The event name.
       * @param data The event data.
       * @param namespace The event namespace.
       * @param state The state which is associated with the event.
       * @param enter Indicates if the call enters the specified state or not.
       */
    /**
     * Triggers a public event.
     * \@todo Remove `status`, `relatedTarget` should be used instead.
     * @param {?} name The event name.
     * @param {?=} data The event data.
     * @param {?=} namespace The event namespace.
     * @param {?=} state The state which is associated with the event.
     * @param {?=} enter Indicates if the call enters the specified state or not.
     * @return {?}
     */
    CarouselService.prototype._trigger = /**
     * Triggers a public event.
     * \@todo Remove `status`, `relatedTarget` should be used instead.
     * @param {?} name The event name.
     * @param {?=} data The event data.
     * @param {?=} namespace The event namespace.
     * @param {?=} state The state which is associated with the event.
     * @param {?=} enter Indicates if the call enters the specified state or not.
     * @return {?}
     */
    function (name, data, namespace, state$$1, enter) {
        switch (name) {
            case 'initialized':
                this._initializedCarousel$.next(name);
                break;
            case 'change':
                this._changeSettingsCarousel$.next(data);
                break;
            case 'changed':
                this._changedSettingsCarousel$.next(data);
                break;
            case 'drag':
                this._dragCarousel$.next(name);
                break;
            case 'dragged':
                this._draggedCarousel$.next(name);
                break;
            case 'resize':
                this._resizeCarousel$.next(name);
                break;
            case 'resized':
                this._resizedCarousel$.next(name);
                break;
            case 'refresh':
                this._refreshCarousel$.next(name);
                break;
            case 'refreshed':
                this._refreshedCarousel$.next(name);
                break;
            case 'translate':
                this._translateCarousel$.next(name);
                break;
            case 'translated':
                this._translatedCarousel$.next(name);
                break;
            default:
                break;
        }
    };
    /**
     * Enters a state.
     * @param name - The state name.
     */
    /**
     * Enters a state.
     * @param {?} name - The state name.
     * @return {?}
     */
    CarouselService.prototype.enter = /**
     * Enters a state.
     * @param {?} name - The state name.
     * @return {?}
     */
    function (name) {
        var _this = this;
        [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
            if (_this._states.current[stateName] === undefined) {
                _this._states.current[stateName] = 0;
            }
            _this._states.current[stateName]++;
        });
    };
    /**
       * Leaves a state.
       * @param name - The state name.
       */
    /**
     * Leaves a state.
     * @param {?} name - The state name.
     * @return {?}
     */
    CarouselService.prototype.leave = /**
     * Leaves a state.
     * @param {?} name - The state name.
     * @return {?}
     */
    function (name) {
        var _this = this;
        [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
            if (_this._states.current[stateName] === 0 || !!_this._states.current[stateName]) {
                _this._states.current[stateName]--;
            }
        });
    };
    /**
       * Registers an event or state.
       * @param object - The event or state to register.
       */
    /**
     * Registers an event or state.
     * @param {?} object - The event or state to register.
     * @return {?}
     */
    CarouselService.prototype.register = /**
     * Registers an event or state.
     * @param {?} object - The event or state to register.
     * @return {?}
     */
    function (object) {
        var _this = this;
        if (object.type === Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            }
            else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }
            this._states.tags[object.name] = this._states.tags[object.name].filter(function (tag, i) {
                return _this._states.tags[object.name].indexOf(tag) === i;
            });
        }
    };
    /**
       * Suppresses events.
       * @param events The events to suppress.
       */
    /**
     * Suppresses events.
     * @param {?} events The events to suppress.
     * @return {?}
     */
    CarouselService.prototype._suppress = /**
     * Suppresses events.
     * @param {?} events The events to suppress.
     * @return {?}
     */
    function (events) {
        var _this = this;
        events.forEach(function (event) {
            _this._supress[event] = true;
        });
    };
    /**
       * Releases suppressed events.
       * @param events The events to release.
       */
    /**
     * Releases suppressed events.
     * @param {?} events The events to release.
     * @return {?}
     */
    CarouselService.prototype._release = /**
     * Releases suppressed events.
     * @param {?} events The events to release.
     * @return {?}
     */
    function (events) {
        var _this = this;
        events.forEach(function (event) {
            delete _this._supress[event];
        });
    };
    /**
       * Gets unified pointer coordinates from event.
       * @todo #261
       * @param event The `mousedown` or `touchstart` event.
       * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
       */
    /**
     * Gets unified pointer coordinates from event.
     * \@todo #261
     * @param {?} event The `mousedown` or `touchstart` event.
     * @return {?} Object Coords which contains `x` and `y` coordinates of current pointer position.
     */
    CarouselService.prototype.pointer = /**
     * Gets unified pointer coordinates from event.
     * \@todo #261
     * @param {?} event The `mousedown` or `touchstart` event.
     * @return {?} Object Coords which contains `x` and `y` coordinates of current pointer position.
     */
    function (event) {
        /** @type {?} */
        var result = { x: null, y: null };
        event = event.originalEvent || event || window.event;
        event = event.touches && event.touches.length ?
            event.touches[0] : event.changedTouches && event.changedTouches.length ?
            event.changedTouches[0] : event;
        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        }
        else {
            result.x = event.clientX;
            result.y = event.clientY;
        }
        return result;
    };
    /**
       * Determines if the input is a Number or something that can be coerced to a Number
       * @param number The input to be tested
       * @returns An indication if the input is a Number or can be coerced to a Number
       */
    /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @param {?} number The input to be tested
     * @return {?} An indication if the input is a Number or can be coerced to a Number
     */
    CarouselService.prototype._isNumeric = /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @param {?} number The input to be tested
     * @return {?} An indication if the input is a Number or can be coerced to a Number
     */
    function (number) {
        return !isNaN(parseFloat(number));
    };
    /**
     * Determines whether value is number or boolean type
     * @param value The input to be tested
     * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
     */
    /**
     * Determines whether value is number or boolean type
     * @param {?} value The input to be tested
     * @return {?} An indication if the input is a Number or can be coerced to a Number, or Boolean
     */
    CarouselService.prototype._isNumberOrBoolean = /**
     * Determines whether value is number or boolean type
     * @param {?} value The input to be tested
     * @return {?} An indication if the input is a Number or can be coerced to a Number, or Boolean
     */
    function (value) {
        return this._isNumeric(value) || typeof value === 'boolean';
    };
    /**
     * Determines whether value is number or string type
     * @param value The input to be tested
     * @returns An indication if the input is a Number or can be coerced to a Number, or String
     */
    /**
     * Determines whether value is number or string type
     * @param {?} value The input to be tested
     * @return {?} An indication if the input is a Number or can be coerced to a Number, or String
     */
    CarouselService.prototype._isNumberOrString = /**
     * Determines whether value is number or string type
     * @param {?} value The input to be tested
     * @return {?} An indication if the input is a Number or can be coerced to a Number, or String
     */
    function (value) {
        return this._isNumeric(value) || typeof value === 'string';
    };
    /**
     * Determines whether value is number or string type
     * @param value The input to be tested
     * @returns An indication if the input is a Number or can be coerced to a Number, or String
     */
    /**
     * Determines whether value is number or string type
     * @param {?} value The input to be tested
     * @return {?} An indication if the input is a Number or can be coerced to a Number, or String
     */
    CarouselService.prototype._isStringOrBoolean = /**
     * Determines whether value is number or string type
     * @param {?} value The input to be tested
     * @return {?} An indication if the input is a Number or can be coerced to a Number, or String
     */
    function (value) {
        return typeof value === 'string' || typeof value === 'boolean';
    };
    /**
       * Gets the difference of two vectors.
       * @todo #261
       * @param first The first vector.
       * @param second- The second vector.
       * @returns The difference.
       */
    /**
     * Gets the difference of two vectors.
     * \@todo #261
     * @param {?} first The first vector.
     * @param {?} second
     * @return {?} The difference.
     */
    CarouselService.prototype.difference = /**
     * Gets the difference of two vectors.
     * \@todo #261
     * @param {?} first The first vector.
     * @param {?} second
     * @return {?} The difference.
     */
    function (first$$1, second) {
        return {
            x: first$$1.x - second.x,
            y: first$$1.y - second.y
        };
    };
    CarouselService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    CarouselService.ctorParameters = function () { return [
        { type: OwlLogger }
    ]; };
    return CarouselService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var NavigationService = /** @class */ (function () {
    function NavigationService(carouselService) {
        this.carouselService = carouselService;
        /**
         * Indicates whether the plugin is initialized or not.
         */
        this._initialized = false;
        /**
         * The current paging indexes.
         */
        this._pages = [];
        /**
         * Data for navigation elements of the user interface.
         */
        this._navData = {
            disabled: false,
            prev: {
                disabled: false,
                htmlText: ''
            },
            next: {
                disabled: false,
                htmlText: ''
            },
        };
        /**
         * Data for dot elements of the user interface.
         */
        this._dotsData = {
            disabled: false,
            dots: []
        };
        this.spyDataStreams();
    }
    /**
     * @return {?}
     */
    NavigationService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.navSubscription.unsubscribe();
    };
    /**
     * Defines Observables which service must observe
     */
    /**
     * Defines Observables which service must observe
     * @return {?}
     */
    NavigationService.prototype.spyDataStreams = /**
     * Defines Observables which service must observe
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (state$$1) {
            _this.initialize();
            _this._updateNavPages();
            _this.draw();
            _this.update();
            _this.carouselService.sendChanges();
        }));
        // mostly changes in carouselService and carousel at all causes carouselService.to(). It moves stage right-left by its code and calling needed functions
        // Thus this method by calling carouselService.current(position) notifies about changes
        /** @type {?} */
        var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (data) { return data.property.name === 'position'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this.update();
            // should be the call of the function written at the end of comment
            // but the method carouselServive.to() has setTimeout(f, 0) which contains carouselServive.update() which calls sendChanges() method.
            // carouselService.navData and carouselService.dotsData update earlier than carouselServive.update() gets called
            // updates of carouselService.navData and carouselService.dotsData are being happening withing carouselService.current(position) method which calls next() of _changedSettingsCarousel$
            // carouselService.current(position) is being calling earlier than carouselServive.update();
            // this.carouselService.sendChanges();
        }));
        /** @type {?} */
        var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._updateNavPages();
            _this.draw();
            _this.update();
            _this.carouselService.sendChanges();
        }));
        /** @type {?} */
        var navMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
        this.navSubscription = navMerge$.subscribe(function () { });
    };
    /**
       * Initializes the layout of the plugin and extends the carousel.
       */
    /**
     * Initializes the layout of the plugin and extends the carousel.
     * @return {?}
     */
    NavigationService.prototype.initialize = /**
     * Initializes the layout of the plugin and extends the carousel.
     * @return {?}
     */
    function () {
        this._navData.disabled = true;
        this._navData.prev.htmlText = this.carouselService.settings.navText[0];
        this._navData.next.htmlText = this.carouselService.settings.navText[1];
        this._dotsData.disabled = true;
        this.carouselService.navData = this._navData;
        this.carouselService.dotsData = this._dotsData;
    };
    /**
     * Calculates internal states and updates prop _pages
     */
    /**
     * Calculates internal states and updates prop _pages
     * @return {?}
     */
    NavigationService.prototype._updateNavPages = /**
     * Calculates internal states and updates prop _pages
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i;
        /** @type {?} */
        var j;
        /** @type {?} */
        var k;
        /** @type {?} */
        var lower = this.carouselService.clones().length / 2;
        /** @type {?} */
        var upper = lower + this.carouselService.items().length;
        /** @type {?} */
        var maximum = this.carouselService.maximum(true);
        /** @type {?} */
        var pages = [];
        /** @type {?} */
        var settings = this.carouselService.settings;
        /** @type {?} */
        var size = settings.center || settings.autoWidth || settings.dotsData
            ? 1 : settings.dotsEach || settings.items;
        size = +size;
        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(+settings.slideBy, settings.items);
        }
        if (settings.dots || settings.slideBy === 'page') {
            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += (/** @type {?} */ (this.carouselService.mergers(this.carouselService.relative(i))));
            }
        }
        this._pages = pages;
    };
    /**
       * Draws the user interface.
       * @todo The option `dotsData` wont work.
       */
    /**
     * Draws the user interface.
     * \@todo The option `dotsData` wont work.
     * @return {?}
     */
    NavigationService.prototype.draw = /**
     * Draws the user interface.
     * \@todo The option `dotsData` wont work.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var difference;
        /** @type {?} */
        var settings = this.carouselService.settings;
        /** @type {?} */
        var items = this.carouselService.items();
        /** @type {?} */
        var disabled = items.length <= settings.items;
        this._navData.disabled = !settings.nav || disabled;
        this._dotsData.disabled = !settings.dots || disabled;
        if (settings.dots) {
            difference = this._pages.length - this._dotsData.dots.length;
            if (settings.dotsData && difference !== 0) {
                this._dotsData.dots = [];
                items.forEach(function (item) {
                    _this._dotsData.dots.push({
                        active: false,
                        id: "dot-" + item.id,
                        innerContent: item.dotContent,
                        showInnerContent: true
                    });
                });
            }
            else if (difference > 0) {
                /** @type {?} */
                var startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;
                for (var i = 0; i < difference; i++) {
                    this._dotsData.dots.push({
                        active: false,
                        id: "dot-" + (i + startI),
                        showInnerContent: false
                    });
                }
            }
            else if (difference < 0) {
                this._dotsData.dots.splice(difference, Math.abs(difference));
            }
        }
        this.carouselService.navData = this._navData;
        this.carouselService.dotsData = this._dotsData;
    };
    /**
     * Updates navigation buttons's and dots's states
     */
    /**
     * Updates navigation buttons's and dots's states
     * @return {?}
     */
    NavigationService.prototype.update = /**
     * Updates navigation buttons's and dots's states
     * @return {?}
     */
    function () {
        this._updateNavButtons();
        this._updateDots();
    };
    /**
     * Changes state of nav buttons (disabled, enabled)
     */
    /**
     * Changes state of nav buttons (disabled, enabled)
     * @return {?}
     */
    NavigationService.prototype._updateNavButtons = /**
     * Changes state of nav buttons (disabled, enabled)
     * @return {?}
     */
    function () {
        /** @type {?} */
        var settings = this.carouselService.settings;
        /** @type {?} */
        var loop = settings.loop || settings.rewind;
        /** @type {?} */
        var index = this.carouselService.relative(this.carouselService.current());
        if (settings.nav) {
            this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
            this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
        }
        this.carouselService.navData = this._navData;
    };
    /**
     * Changes active dot if page becomes changed
     */
    /**
     * Changes active dot if page becomes changed
     * @return {?}
     */
    NavigationService.prototype._updateDots = /**
     * Changes active dot if page becomes changed
     * @return {?}
     */
    function () {
        /** @type {?} */
        var curActiveDotI;
        this._dotsData.dots.forEach(function (item) {
            if (item.active === true) {
                item.active = false;
            }
        });
        curActiveDotI = this._current();
        if (this._dotsData.dots.length) {
            this._dotsData.dots[curActiveDotI].active = true;
        }
        this.carouselService.dotsData = this._dotsData;
    };
    /**
       * Gets the current page position of the carousel.
       * @returns the current page position of the carousel
       */
    /**
     * Gets the current page position of the carousel.
     * @return {?} the current page position of the carousel
     */
    NavigationService.prototype._current = /**
     * Gets the current page position of the carousel.
     * @return {?} the current page position of the carousel
     */
    function () {
        /** @type {?} */
        var current = this.carouselService.relative(this.carouselService.current());
        /** @type {?} */
        var finalCurrent;
        /** @type {?} */
        var pages = this._pages.filter(function (page, index) {
            return page.start <= current && page.end >= current;
        }).pop();
        finalCurrent = this._pages.findIndex(function (page) {
            return page.start === pages.start && page.end === pages.end;
        });
        return finalCurrent;
    };
    /**
       * Gets the current succesor/predecessor position.
     * @param sussessor position of slide
       * @returns the current succesor/predecessor position
       */
    /**
     * Gets the current succesor/predecessor position.
     * @param {?} successor
     * @return {?} the current succesor/predecessor position
     */
    NavigationService.prototype._getPosition = /**
     * Gets the current succesor/predecessor position.
     * @param {?} successor
     * @return {?} the current succesor/predecessor position
     */
    function (successor) {
        /** @type {?} */
        var position;
        /** @type {?} */
        var length;
        /** @type {?} */
        var settings = this.carouselService.settings;
        if (settings.slideBy === 'page') {
            position = this._current();
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        }
        else {
            position = this.carouselService.relative(this.carouselService.current());
            length = this.carouselService.items().length;
            successor ? position += +settings.slideBy : position -= +settings.slideBy;
        }
        return position;
    };
    /**
       * Slides to the next item or page.
       * @param speed The time in milliseconds for the transition.
       */
    /**
     * Slides to the next item or page.
     * @param {?} speed The time in milliseconds for the transition.
     * @return {?}
     */
    NavigationService.prototype.next = /**
     * Slides to the next item or page.
     * @param {?} speed The time in milliseconds for the transition.
     * @return {?}
     */
    function (speed) {
        this.carouselService.to(this._getPosition(true), speed);
    };
    /**
     * Slides to the previous item or page.
     * @param speed The time in milliseconds for the transition.
     */
    /**
     * Slides to the previous item or page.
     * @param {?} speed The time in milliseconds for the transition.
     * @return {?}
     */
    NavigationService.prototype.prev = /**
     * Slides to the previous item or page.
     * @param {?} speed The time in milliseconds for the transition.
     * @return {?}
     */
    function (speed) {
        this.carouselService.to(this._getPosition(false), speed);
    };
    /**
     * Slides to the specified item or page.
     * @param position - The position of the item or page.
     * @param speed - The time in milliseconds for the transition.
     * @param standard - Whether to use the standard behaviour or not. Default meaning false
     */
    /**
     * Slides to the specified item or page.
     * @param {?} position - The position of the item or page.
     * @param {?} speed - The time in milliseconds for the transition.
     * @param {?=} standard - Whether to use the standard behaviour or not. Default meaning false
     * @return {?}
     */
    NavigationService.prototype.to = /**
     * Slides to the specified item or page.
     * @param {?} position - The position of the item or page.
     * @param {?} speed - The time in milliseconds for the transition.
     * @param {?=} standard - Whether to use the standard behaviour or not. Default meaning false
     * @return {?}
     */
    function (position, speed, standard) {
        /** @type {?} */
        var length;
        if (!standard && this._pages.length) {
            length = this._pages.length;
            this.carouselService.to(this._pages[((position % length) + length) % length].start, speed);
        }
        else {
            this.carouselService.to(position, speed);
        }
    };
    /**
     * Moves carousel after user's clicking on any dots
     */
    /**
     * Moves carousel after user's clicking on any dots
     * @param {?} dotId
     * @return {?}
     */
    NavigationService.prototype.moveByDot = /**
     * Moves carousel after user's clicking on any dots
     * @param {?} dotId
     * @return {?}
     */
    function (dotId) {
        /** @type {?} */
        var index = this._dotsData.dots.findIndex(function (dot) { return dotId === dot.id; });
        this.to(index, this.carouselService.settings.dotsSpeed);
    };
    /**
     * rewinds carousel to slide with needed id
     * @param id id of slide
     */
    /**
     * rewinds carousel to slide with needed id
     * @param {?} id id of slide
     * @return {?}
     */
    NavigationService.prototype.toSlideById = /**
     * rewinds carousel to slide with needed id
     * @param {?} id id of slide
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var position = this.carouselService.slidesData.findIndex(function (slide) { return slide.id === id && slide.isCloned === false; });
        if (position === -1 || position === this.carouselService.current()) {
            return;
        }
        this.carouselService.to(this.carouselService.relative(position), false);
    };
    NavigationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    NavigationService.ctorParameters = function () { return [
        { type: CarouselService }
    ]; };
    return NavigationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Create a new injection token for injecting the window into a component.
 * @type {?}
 */
var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('WindowToken');
/**
 * Define abstract class for obtaining reference to the global window object.
 * @abstract
 */
var  /**
 * Define abstract class for obtaining reference to the global window object.
 * @abstract
 */
WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            throw new Error('Not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
/**
 * Define class that implements the abstract class and returns the native window object.
 */
var  /**
 * Define class that implements the abstract class and returns the native window object.
 */
BrowserWindowRef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        /**
         * @returns window object
         */
        get: /**
         * @return {?} window object
         */
        function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowRef;
}(WindowRef));
/**
 * Create an factory function that returns the native window object.
 * @param {?} browserWindowRef Native window object
 * @param {?} platformId id of platform
 * @return {?} type of platform of empty object
 */
function windowFactory(browserWindowRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/**
 * Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class.
 * @type {?}
 */
var browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/**
 * Create an injectable provider that uses the windowFactory function for returning the native window object.
 * @type {?}
 */
var windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_6__["PLATFORM_ID"]]
};
/**
 * Create an array of providers.
 * @type {?}
 */
var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Create a new injection token for injecting the Document into a component.
 * @type {?}
 */
var DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('DocumentToken');
/**
 * Define abstract class for obtaining reference to the global Document object.
 * @abstract
 */
var  /**
 * Define abstract class for obtaining reference to the global Document object.
 * @abstract
 */
DocumentRef = /** @class */ (function () {
    function DocumentRef() {
    }
    Object.defineProperty(DocumentRef.prototype, "nativeDocument", {
        get: /**
         * @return {?}
         */
        function () {
            throw new Error('Not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    return DocumentRef;
}());
/**
 * Define class that implements the abstract class and returns the native Document object.
 */
var  /**
 * Define class that implements the abstract class and returns the native Document object.
 */
BrowserDocumentRef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BrowserDocumentRef, _super);
    function BrowserDocumentRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserDocumentRef.prototype, "nativeDocument", {
        /**
         * @returns Document object
         */
        get: /**
         * @return {?} Document object
         */
        function () {
            return document;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserDocumentRef;
}(DocumentRef));
/**
 * Create an factory function that returns the native Document object.
 * @param {?} browserDocumentRef Native Document object
 * @param {?} platformId id of platform
 * @return {?} type of platform of empty object
 */
function documentFactory(browserDocumentRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId)) {
        return browserDocumentRef.nativeDocument;
    }
    return new Object();
}
/**
 * Create a injectable provider for the DocumentRef token that uses the BrowserDocumentRef class.
 * @type {?}
 */
var browserDocumentProvider = {
    provide: DocumentRef,
    useClass: BrowserDocumentRef
};
/**
 * Create an injectable provider that uses the DocumentFactory function for returning the native Document object.
 * @type {?}
 */
var documentProvider = {
    provide: DOCUMENT,
    useFactory: documentFactory,
    deps: [DocumentRef, _angular_core__WEBPACK_IMPORTED_MODULE_6__["PLATFORM_ID"]]
};
/**
 * Create an array of providers.
 * @type {?}
 */
var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AutoplayService = /** @class */ (function () {
    function AutoplayService(carouselService, winRef, docRef) {
        this.carouselService = carouselService;
        /**
         * The autoplay timeout.
         */
        this._timeout = null;
        /**
         * Indicates whenever the autoplay is paused.
         */
        this._paused = false;
        this.winRef = (/** @type {?} */ (winRef));
        this.docRef = (/** @type {?} */ (docRef));
        this.spyDataStreams();
    }
    /**
     * @return {?}
     */
    AutoplayService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.autoplaySubscription.unsubscribe();
    };
    /**
     * Defines Observables which service must observe
     */
    /**
     * Defines Observables which service must observe
     * @return {?}
     */
    AutoplayService.prototype.spyDataStreams = /**
     * Defines Observables which service must observe
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            if (_this.carouselService.settings.autoplay) {
                _this.play();
            }
        }));
        /** @type {?} */
        var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this._handleChangeObservable(data);
        }));
        // original Autoplay Plugin has listeners on play.owl.core and stop.owl.core events.
        // They are triggered by Video Plugin
        /** @type {?} */
        var autoplayMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changedSettings$);
        this.autoplaySubscription = autoplayMerge$.subscribe(function () { });
    };
    /**
       * Starts the autoplay.
       * @param timeout The interval before the next animation starts.
       * @param speed The animation speed for the animations.
       */
    /**
     * Starts the autoplay.
     * @param {?=} timeout The interval before the next animation starts.
     * @param {?=} speed The animation speed for the animations.
     * @return {?}
     */
    AutoplayService.prototype.play = /**
     * Starts the autoplay.
     * @param {?=} timeout The interval before the next animation starts.
     * @param {?=} speed The animation speed for the animations.
     * @return {?}
     */
    function (timeout, speed) {
        if (this._paused) {
            this._paused = false;
            this._setAutoPlayInterval();
        }
        if (this.carouselService.is('rotating')) {
            return;
        }
        this.carouselService.enter('rotating');
        this._setAutoPlayInterval();
    };
    /**
       * Gets a new timeout
       * @param timeout - The interval before the next animation starts.
       * @param speed - The animation speed for the animations.
       * @return
       */
    /**
     * Gets a new timeout
     * @param {?=} timeout - The interval before the next animation starts.
     * @param {?=} speed - The animation speed for the animations.
     * @return {?}
     */
    AutoplayService.prototype._getNextTimeout = /**
     * Gets a new timeout
     * @param {?=} timeout - The interval before the next animation starts.
     * @param {?=} speed - The animation speed for the animations.
     * @return {?}
     */
    function (timeout, speed) {
        var _this = this;
        if (this._timeout) {
            this.winRef.clearTimeout(this._timeout);
        }
        return this.winRef.setTimeout(function () {
            if (_this._paused || _this.carouselService.is('busy') || _this.carouselService.is('interacting') || _this.docRef.hidden) {
                return;
            }
            _this.carouselService.next(speed || _this.carouselService.settings.autoplaySpeed);
        }, timeout || this.carouselService.settings.autoplayTimeout);
    };
    /**
       * Sets autoplay in motion.
       */
    /**
     * Sets autoplay in motion.
     * @return {?}
     */
    AutoplayService.prototype._setAutoPlayInterval = /**
     * Sets autoplay in motion.
     * @return {?}
     */
    function () {
        this._timeout = this._getNextTimeout();
    };
    /**
     * Stops the autoplay.
     */
    /**
     * Stops the autoplay.
     * @return {?}
     */
    AutoplayService.prototype.stop = /**
     * Stops the autoplay.
     * @return {?}
     */
    function () {
        if (!this.carouselService.is('rotating')) {
            return;
        }
        this.winRef.clearTimeout(this._timeout);
        this.carouselService.leave('rotating');
    };
    /**
       * Stops the autoplay.
       */
    /**
     * Stops the autoplay.
     * @return {?}
     */
    AutoplayService.prototype.pause = /**
     * Stops the autoplay.
     * @return {?}
     */
    function () {
        if (!this.carouselService.is('rotating')) {
            return;
        }
        this._paused = true;
    };
    /**
     * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
     * @param data object with current position of carousel and type of change
     */
    /**
     * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
     * @param {?} data object with current position of carousel and type of change
     * @return {?}
     */
    AutoplayService.prototype._handleChangeObservable = /**
     * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
     * @param {?} data object with current position of carousel and type of change
     * @return {?}
     */
    function (data) {
        if (data.property.name === 'settings') {
            if (this.carouselService.settings.autoplay) {
                this.play();
            }
            else {
                this.stop();
            }
        }
        else if (data.property.name === 'position') {
            //console.log('play?', e);
            if (this.carouselService.settings.autoplay) {
                this._setAutoPlayInterval();
            }
        }
    };
    /**
     * Starts pausing
     */
    /**
     * Starts pausing
     * @return {?}
     */
    AutoplayService.prototype.startPausing = /**
     * Starts pausing
     * @return {?}
     */
    function () {
        if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.pause();
        }
    };
    /**
     * Starts playing after mouse leaves carousel
     */
    /**
     * Starts playing after mouse leaves carousel
     * @return {?}
     */
    AutoplayService.prototype.startPlayingMouseLeave = /**
     * Starts playing after mouse leaves carousel
     * @return {?}
     */
    function () {
        if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.pause();
        }
    };
    /**
     * Starts playing after touch ends
     */
    /**
     * Starts playing after touch ends
     * @return {?}
     */
    AutoplayService.prototype.startPlayingTouchEnd = /**
     * Starts playing after touch ends
     * @return {?}
     */
    function () {
        if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.pause();
        }
    };
    AutoplayService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    AutoplayService.ctorParameters = function () { return [
        { type: CarouselService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [WINDOW,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [DOCUMENT,] }] }
    ]; };
    return AutoplayService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LazyLoadService = /** @class */ (function () {
    function LazyLoadService(carouselService) {
        this.carouselService = carouselService;
        this.spyDataStreams();
    }
    /**
     * @return {?}
     */
    LazyLoadService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.lazyLoadSubscription.unsubscribe();
    };
    /**
     * Defines Observables which service must observe
     */
    /**
     * Defines Observables which service must observe
     * @return {?}
     */
    LazyLoadService.prototype.spyDataStreams = /**
     * Defines Observables which service must observe
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            /** @type {?} */
            var isLazyLoad = _this.carouselService.settings && !_this.carouselService.settings.lazyLoad;
            _this.carouselService.slidesData.forEach(function (item) { return item.load = isLazyLoad ? true : false; });
        }));
        /** @type {?} */
        var changeSettings$ = this.carouselService.getChangeState();
        /** @type {?} */
        var resizedCarousel$ = this.carouselService.getResizedState();
        /** @type {?} */
        var lazyLoadMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return _this._defineLazyLoadSlides(data); }));
        this.lazyLoadSubscription = lazyLoadMerge$.subscribe(function () { });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    LazyLoadService.prototype._defineLazyLoadSlides = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
            return;
        }
        if ((data.property && data.property.name === 'position') || data === 'initialized' || data === "resized") {
            /** @type {?} */
            var settings = this.carouselService.settings;
            /** @type {?} */
            var clones = this.carouselService.clones().length;
            /** @type {?} */
            var n = (settings.center && Math.ceil(settings.items / 2) || settings.items);
            /** @type {?} */
            var i = ((settings.center && n * -1) || 0);
            /** @type {?} */
            var position = (data.property && data.property.value !== undefined ? data.property.value : this.carouselService.current()) + i;
            // load = $.proxy(function(i, v) { this.load(v) }, this);
            //TODO: Need documentation for this new option
            if (settings.lazyLoadEager > 0) {
                n += settings.lazyLoadEager;
                // If the carousel is looping also preload images that are to the "left"
                if (settings.loop) {
                    position -= settings.lazyLoadEager;
                    n++;
                }
            }
            while (i++ < n) {
                this._load(clones / 2 + this.carouselService.relative(position));
                if (clones) {
                    this.carouselService.clones(this.carouselService.relative(position)).forEach(function (value) { return _this._load(value); });
                }
                position++;
            }
        }
    };
    /**
       * Loads all resources of an item at the specified position.
       * @param position - The absolute position of the item.
       */
    /**
     * Loads all resources of an item at the specified position.
     * @param {?} position - The absolute position of the item.
     * @return {?}
     */
    LazyLoadService.prototype._load = /**
     * Loads all resources of an item at the specified position.
     * @param {?} position - The absolute position of the item.
     * @return {?}
     */
    function (position) {
        if (this.carouselService.slidesData[position].load) {
            return;
        }
        this.carouselService.slidesData[position].load = true;
    };
    LazyLoadService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    LazyLoadService.ctorParameters = function () { return [
        { type: CarouselService }
    ]; };
    return LazyLoadService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AnimateService = /** @class */ (function () {
    function AnimateService(carouselService) {
        this.carouselService = carouselService;
        /**
         * s
         */
        this.swapping = true;
        /**
         * active slide before translating
         */
        this.previous = undefined;
        /**
         * new active slide after translating
         */
        this.next = undefined;
        this.spyDataStreams();
    }
    /**
     * @return {?}
     */
    AnimateService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.animateSubscription.unsubscribe();
    };
    /**
     * Defines Observables which service must observe
     */
    /**
     * Defines Observables which service must observe
     * @return {?}
     */
    AnimateService.prototype.spyDataStreams = /**
     * Defines Observables which service must observe
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var changeSettings$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            if (data.property.name === 'position') {
                _this.previous = _this.carouselService.current();
                _this.next = data.property.value;
            }
        }));
        /** @type {?} */
        var dragCarousel$ = this.carouselService.getDragState();
        /** @type {?} */
        var draggedCarousel$ = this.carouselService.getDraggedState();
        /** @type {?} */
        var translatedCarousel$ = this.carouselService.getTranslatedState();
        /** @type {?} */
        var dragTranslatedMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return _this.swapping = data === 'translated'; }));
        /** @type {?} */
        var translateCarousel$ = this.carouselService.getTranslateState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            if (_this.swapping && (_this.carouselService._options.animateOut || _this.carouselService._options.animateIn)) {
                _this._swap();
            }
        }));
        /** @type {?} */
        var animateMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
        this.animateSubscription = animateMerge$.subscribe(function () { });
    };
    /**
       * Toggles the animation classes whenever an translations starts.
       * @returns
       */
    /**
     * Toggles the animation classes whenever an translations starts.
     * @return {?}
     */
    AnimateService.prototype._swap = /**
     * Toggles the animation classes whenever an translations starts.
     * @return {?}
     */
    function () {
        if (this.carouselService.settings.items !== 1) {
            return;
        }
        // if (!$.support.animation || !$.support.transition) {
        // 	return;
        // }
        this.carouselService.speed(0);
        /** @type {?} */
        var left;
        /** @type {?} */
        var previous = this.carouselService.slidesData[this.previous];
        /** @type {?} */
        var next = this.carouselService.slidesData[this.next];
        /** @type {?} */
        var incoming = this.carouselService.settings.animateIn;
        /** @type {?} */
        var outgoing = this.carouselService.settings.animateOut;
        if (this.carouselService.current() === this.previous) {
            return;
        }
        if (outgoing) {
            left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
            this.carouselService.slidesData.forEach(function (slide) {
                if (slide.id === previous.id) {
                    slide.left = left + "px";
                    slide.isAnimated = true;
                    slide.isDefAnimatedOut = true;
                    slide.isCustomAnimatedOut = true;
                }
            });
        }
        if (incoming) {
            this.carouselService.slidesData.forEach(function (slide) {
                if (slide.id === next.id) {
                    slide.isAnimated = true;
                    slide.isDefAnimatedIn = true;
                    slide.isCustomAnimatedIn = true;
                }
            });
        }
    };
    /**
     * Handles the end of 'animationend' event
     * @param id Id of slides
     */
    /**
     * Handles the end of 'animationend' event
     * @param {?} id Id of slides
     * @return {?}
     */
    AnimateService.prototype.clear = /**
     * Handles the end of 'animationend' event
     * @param {?} id Id of slides
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.carouselService.slidesData.forEach(function (slide) {
            if (slide.id === id) {
                slide.left = '';
                slide.isAnimated = false;
                slide.isDefAnimatedOut = false;
                slide.isCustomAnimatedOut = false;
                slide.isDefAnimatedIn = false;
                slide.isCustomAnimatedIn = false;
                slide.classes = _this.carouselService.setCurSlideClasses(slide);
            }
        });
        this.carouselService.onTransitionEnd();
    };
    AnimateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    AnimateService.ctorParameters = function () { return [
        { type: CarouselService }
    ]; };
    return AnimateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AutoHeightService = /** @class */ (function () {
    function AutoHeightService(carouselService) {
        this.carouselService = carouselService;
        this.spyDataStreams();
    }
    /**
     * @return {?}
     */
    AutoHeightService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.autoHeightSubscription.unsubscribe();
    };
    /**
     * Defines Observables which service must observe
     */
    /**
     * Defines Observables which service must observe
     * @return {?}
     */
    AutoHeightService.prototype.spyDataStreams = /**
     * Defines Observables which service must observe
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            if (_this.carouselService.settings.autoHeight) {
                _this.update();
            }
            else {
                _this.carouselService.slidesData.forEach(function (slide) { return slide.heightState = 'full'; });
            }
        }));
        /** @type {?} */
        var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            if (_this.carouselService.settings.autoHeight && data.property.name === 'position') {
                _this.update();
            }
        }));
        /** @type {?} */
        var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            if (_this.carouselService.settings.autoHeight) {
                _this.update();
            }
        }));
        /** @type {?} */
        var autoHeight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
        this.autoHeightSubscription = autoHeight$.subscribe(function () { });
    };
    /**
     * Updates the prop 'heightState' of slides
     */
    /**
     * Updates the prop 'heightState' of slides
     * @return {?}
     */
    AutoHeightService.prototype.update = /**
     * Updates the prop 'heightState' of slides
     * @return {?}
     */
    function () {
        /** @type {?} */
        var items = this.carouselService.settings.items;
        /** @type {?} */
        var start = this.carouselService.current();
        /** @type {?} */
        var end = start + items;
        if (this.carouselService.settings.center) {
            start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
            end = items % 2 === 1 ? start + items : start + items + 1;
        }
        this.carouselService.slidesData.forEach(function (slide, i) {
            slide.heightState = (i >= start && i < end) ? 'full' : 'nulled';
        });
    };
    AutoHeightService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    AutoHeightService.ctorParameters = function () { return [
        { type: CarouselService }
    ]; };
    return AutoHeightService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var HashService = /** @class */ (function () {
    function HashService(carouselService, route, router) {
        this.carouselService = carouselService;
        this.route = route;
        this.router = router;
        this.spyDataStreams();
    }
    /**
     * @return {?}
     */
    HashService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hashSubscription.unsubscribe();
    };
    /**
     * Defines Observables which service must observe
     */
    /**
     * Defines Observables which service must observe
     * @return {?}
     */
    HashService.prototype.spyDataStreams = /**
     * Defines Observables which service must observe
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.listenToRoute(); }));
        /** @type {?} */
        var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            if (_this.carouselService.settings.URLhashListener && data.property.name === 'position') {
                /** @type {?} */
                var newCurSlide = _this.carouselService.current();
                /** @type {?} */
                var newCurFragment = _this.carouselService.slidesData[newCurSlide].hashFragment;
                if (!newCurFragment || newCurFragment === _this.currentHashFragment) {
                    return;
                }
                _this.router.navigate(['./'], { fragment: newCurFragment, relativeTo: _this.route });
            }
        }));
        /** @type {?} */
        var hashFragment$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(initializedCarousel$, changedSettings$);
        this.hashSubscription = hashFragment$.subscribe(function () { });
    };
    /**
     * rewinds carousel to slide which has the same hashFragment as fragment of current url
     * @param fragment fragment of url
     */
    /**
     * rewinds carousel to slide which has the same hashFragment as fragment of current url
     * @param {?} fragment fragment of url
     * @return {?}
     */
    HashService.prototype.rewind = /**
     * rewinds carousel to slide which has the same hashFragment as fragment of current url
     * @param {?} fragment fragment of url
     * @return {?}
     */
    function (fragment) {
        /** @type {?} */
        var position = this.carouselService.slidesData.findIndex(function (slide) { return slide.hashFragment === fragment && slide.isCloned === false; });
        if (position === -1 || position === this.carouselService.current()) {
            return;
        }
        this.carouselService.to(this.carouselService.relative(position), false);
    };
    /**
     * Initiate listening to ActivatedRoute.fragment
     */
    /**
     * Initiate listening to ActivatedRoute.fragment
     * @return {?}
     */
    HashService.prototype.listenToRoute = /**
     * Initiate listening to ActivatedRoute.fragment
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var count = this.carouselService.settings.startPosition === 'URLHash' ? 0 : 2;
        this.route.fragment.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(count))
            .subscribe(function (fragment) {
            _this.currentHashFragment = fragment;
            _this.rewind(fragment);
        });
    };
    HashService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    HashService.ctorParameters = function () { return [
        { type: CarouselService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    return HashService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var nextId = 0;
var CarouselSlideDirective = /** @class */ (function () {
    function CarouselSlideDirective(tplRef) {
        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */
        this.id = "owl-slide-" + nextId++;
        /**
         * Defines how much widths of common slide will current slide have
         * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
         */
        this._dataMerge = 1;
        /**
         * Width of slide
         */
        this.width = 0;
        /**
         * Inner content of dot for certain slide; can be html-markup
         */
        this.dotContent = '';
        /**
         * Hash (fragment) of url which corresponds to certain slide
         */
        this.dataHash = '';
    }
    Object.defineProperty(CarouselSlideDirective.prototype, "dataMerge", {
        get: /**
         * @return {?}
         */
        function () { return this._dataMerge; },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._dataMerge = this.isNumeric(data) ? data : 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
       * Determines if the input is a Number or something that can be coerced to a Number
       * @param - The input to be tested
       * @returns - An indication if the input is a Number or can be coerced to a Number
       */
    /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @param {?} number
     * @return {?} - An indication if the input is a Number or can be coerced to a Number
     */
    CarouselSlideDirective.prototype.isNumeric = /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @param {?} number
     * @return {?} - An indication if the input is a Number or can be coerced to a Number
     */
    function (number) {
        return !isNaN(parseFloat(number));
    };
    CarouselSlideDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{ selector: 'ng-template[carouselSlide]' },] }
    ];
    /** @nocollapse */
    CarouselSlideDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"] }
    ]; };
    CarouselSlideDirective.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        dataMerge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        dotContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        dataHash: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return CarouselSlideDirective;
}());
/**
 * Data which will be passed out after ending of transition of carousel
 */
var  /**
 * Data which will be passed out after ending of transition of carousel
 */
SlidesOutputData = /** @class */ (function () {
    function SlidesOutputData() {
    }
    return SlidesOutputData;
}());
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger) {
        this.el = el;
        this.resizeService = resizeService;
        this.carouselService = carouselService;
        this.navigationService = navigationService;
        this.autoplayService = autoplayService;
        this.lazyLoadService = lazyLoadService;
        this.animateService = animateService;
        this.autoHeightService = autoHeightService;
        this.hashService = hashService;
        this.logger = logger;
        this.translated = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        /**
         *  Data of every slide
         */
        this.slidesData = [];
        /**
         * Shows whether carousel is loaded of not.
         */
        this.carouselLoaded = false;
    }
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.spyDataStreams();
        this.carouselWindowWidth = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
    };
    // ngAfterContentChecked() END
    // ngAfterContentChecked() END
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterContentInit = 
    // ngAfterContentChecked() END
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.slides.toArray().length) {
            this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
            this.carouselService.initialize(this.slides.toArray());
            this._winResizeWatcher();
        }
        else {
            this.logger.log("There are no slides to show. So the carousel won't be rendered");
        }
        this._slidesChangesSubscription = this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (slides) {
            if (slides.toArray().length) {
                // this.carouselService.setItems(slides.toArray());
                _this.carouselService.setup(_this.carouselWindowWidth, slides.toArray(), _this.options);
                _this.carouselService.initialize(slides.toArray());
            }
            else {
                _this.carouselLoaded = false;
                _this.logger.log("There are no slides to show. So the carousel won't be re-rendered");
            }
        })).subscribe(function () { });
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
        this._slidesChangesSubscription.unsubscribe();
        this._allObservSubscription.unsubscribe();
    };
    /**
     * Joins the observable login in one place: sets values to some observables, merges this observables and
     * subcribes to merge func
     */
    /**
     * Joins the observable login in one place: sets values to some observables, merges this observables and
     * subcribes to merge func
     * @return {?}
     */
    CarouselComponent.prototype.spyDataStreams = /**
     * Joins the observable login in one place: sets values to some observables, merges this observables and
     * subcribes to merge func
     * @return {?}
     */
    function () {
        var _this = this;
        this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this.owlDOMData = data.owlDOMData;
            _this.stageData = data.stageData;
            _this.slidesData = data.slidesData;
            if (!_this.carouselLoaded) {
                _this.carouselLoaded = true;
            }
            _this.navData = data.navData;
            _this.dotsData = data.dotsData;
        }));
        this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.gatherTranslatedData();
            _this.initialized.emit(_this.slidesOutputData);
            // this.slidesOutputData = {};
        }));
        this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.gatherTranslatedData();
            _this.translated.emit(_this.slidesOutputData);
            // this.slidesOutputData = {};
        }));
        this._changeCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.gatherTranslatedData();
            _this.change.emit(_this.slidesOutputData);
            // this.slidesOutputData = {};
        }));
        this._draggingCarousel$ = this.carouselService.getDragState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.gatherTranslatedData();
            _this.dragging.emit({ dragging: true, data: _this.slidesOutputData });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.dragging.emit({ dragging: false, data: _this.slidesOutputData });
        })); }));
        this._carouselMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._initializedCarousel$);
        this._allObservSubscription = this._carouselMerge$.subscribe(function () { });
    };
    /**
     * Init subscription to resize event and attaches handler for this event
     */
    /**
     * Init subscription to resize event and attaches handler for this event
     * @return {?}
     */
    CarouselComponent.prototype._winResizeWatcher = /**
     * Init subscription to resize event and attaches handler for this event
     * @return {?}
     */
    function () {
        var _this = this;
        if (Object.keys(this.carouselService._options.responsive).length) {
            this.resizeSubscription = this.resizeService.onResize$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return _this.carouselWindowWidth !== _this.el.nativeElement.querySelector('.owl-carousel').clientWidth; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.carouselService.settings.responsiveRefreshRate))
                .subscribe(function () {
                _this.carouselService.onResize(_this.el.nativeElement.querySelector('.owl-carousel').clientWidth);
                _this.carouselWindowWidth = _this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            });
        }
    };
    /**
     * Handler for transitioend event
     */
    /**
     * Handler for transitioend event
     * @return {?}
     */
    CarouselComponent.prototype.onTransitionEnd = /**
     * Handler for transitioend event
     * @return {?}
     */
    function () {
        this.carouselService.onTransitionEnd();
    };
    /**
     * Handler for click event, attached to next button
     */
    /**
     * Handler for click event, attached to next button
     * @return {?}
     */
    CarouselComponent.prototype.next = /**
     * Handler for click event, attached to next button
     * @return {?}
     */
    function () {
        if (!this.carouselLoaded || (this.navData && this.navData.disabled))
            return;
        this.navigationService.next(this.carouselService.settings.navSpeed);
    };
    /**
     * Handler for click event, attached to prev button
     */
    /**
     * Handler for click event, attached to prev button
     * @return {?}
     */
    CarouselComponent.prototype.prev = /**
     * Handler for click event, attached to prev button
     * @return {?}
     */
    function () {
        if (!this.carouselLoaded || (this.navData && this.navData.disabled))
            return;
        this.navigationService.prev(this.carouselService.settings.navSpeed);
    };
    /**
     * Handler for click event, attached to dots
     */
    /**
     * Handler for click event, attached to dots
     * @param {?} dotId
     * @return {?}
     */
    CarouselComponent.prototype.moveByDot = /**
     * Handler for click event, attached to dots
     * @param {?} dotId
     * @return {?}
     */
    function (dotId) {
        if (!this.carouselLoaded)
            return;
        this.navigationService.moveByDot(dotId);
    };
    /**
     * rewinds carousel to slide with needed id
     * @param id fragment of url
     */
    /**
     * rewinds carousel to slide with needed id
     * @param {?} id fragment of url
     * @return {?}
     */
    CarouselComponent.prototype.to = /**
     * rewinds carousel to slide with needed id
     * @param {?} id fragment of url
     * @return {?}
     */
    function (id) {
        if (!this.carouselLoaded || (this.navData && this.navData.disabled) || (this.dotsData && this.dotsData.disabled))
            return;
        this.navigationService.toSlideById(id);
    };
    /**
     * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
     */
    /**
     * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
     * @return {?}
     */
    CarouselComponent.prototype.gatherTranslatedData = /**
     * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
     * @return {?}
     */
    function () {
        /** @type {?} */
        var startPosition;
        /** @type {?} */
        var clonedIdPrefix = this.carouselService.clonedIdPrefix;
        /** @type {?} */
        var activeSlides = this.slidesData
            .filter(function (slide) { return slide.isActive === true; })
            .map(function (slide) {
            /** @type {?} */
            var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
            return {
                id: id,
                width: slide.width,
                marginL: slide.marginL,
                marginR: slide.marginR,
                center: slide.isCentered
            };
        });
        startPosition = this.carouselService.relative(this.carouselService.current());
        this.slidesOutputData = {
            startPosition: startPosition,
            slides: activeSlides
        };
    };
    /**
     * Starts pausing
     */
    /**
     * Starts pausing
     * @return {?}
     */
    CarouselComponent.prototype.startPausing = /**
     * Starts pausing
     * @return {?}
     */
    function () {
        this.autoplayService.startPausing();
    };
    /**
     * Starts playing after mouse leaves carousel
     */
    /**
     * Starts playing after mouse leaves carousel
     * @return {?}
     */
    CarouselComponent.prototype.startPlayML = /**
     * Starts playing after mouse leaves carousel
     * @return {?}
     */
    function () {
        this.autoplayService.startPlayingMouseLeave();
    };
    /**
     * Starts playing after touch ends
     */
    /**
     * Starts playing after touch ends
     * @return {?}
     */
    CarouselComponent.prototype.startPlayTE = /**
     * Starts playing after touch ends
     * @return {?}
     */
    function () {
        this.autoplayService.startPlayingTouchEnd();
    };
    CarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'owl-carousel-o',
                    template: "\n    <div class=\"owl-carousel owl-theme\" #owlCarousel\n      [ngClass]=\"{'owl-rtl': owlDOMData?.rtl,\n                  'owl-loaded': owlDOMData?.isLoaded,\n                  'owl-responsive': owlDOMData?.isResponsive,\n                  'owl-drag': owlDOMData?.isMouseDragable,\n                  'owl-grab': owlDOMData?.isGrab}\"\n      (mouseover)=\"startPausing()\"\n      (mouseleave)=\"startPlayML()\"\n      (touchstart)=\"startPausing()\"\n      (touchend)=\"startPlayTE()\">\n\n      <div *ngIf=\"carouselLoaded\" class=\"owl-stage-outer\">\n        <owl-stage [owlDraggable]=\"{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}\"\n                    [stageData]=\"stageData\"\n                    [slidesData]=\"slidesData\"></owl-stage>\n      </div> <!-- /.owl-stage-outer -->\n      <ng-container *ngIf=\"slides.toArray().length\">\n        <div class=\"owl-nav\" [ngClass]=\"{'disabled': navData?.disabled}\">\n          <div class=\"owl-prev\" [ngClass]=\"{'disabled': navData?.prev?.disabled}\" (click)=\"prev()\" [innerHTML]=\"navData?.prev?.htmlText\"></div>\n          <div class=\"owl-next\" [ngClass]=\"{'disabled': navData?.next?.disabled}\" (click)=\"next()\" [innerHTML]=\"navData?.next?.htmlText\"></div>\n        </div> <!-- /.owl-nav -->\n        <div class=\"owl-dots\" [ngClass]=\"{'disabled': dotsData?.disabled}\">\n          <div *ngFor=\"let dot of dotsData?.dots\" class=\"owl-dot\" [ngClass]=\"{'active': dot.active, 'owl-dot-text': dot.showInnerContent}\" (click)=\"moveByDot(dot.id)\">\n            <span [innerHTML]=\"dot.innerContent\"></span>\n          </div>\n        </div> <!-- /.owl-dots -->\n      </ng-container>\n    </div> <!-- /.owl-carousel owl-loaded -->\n  ",
                    providers: [
                        NavigationService,
                        AutoplayService,
                        CarouselService,
                        LazyLoadService,
                        AnimateService,
                        AutoHeightService,
                        HashService
                    ],
                    styles: [".owl-theme { display: block; }"]
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: ResizeService },
        { type: CarouselService },
        { type: NavigationService },
        { type: AutoplayService },
        { type: LazyLoadService },
        { type: AnimateService },
        { type: AutoHeightService },
        { type: HashService },
        { type: OwlLogger }
    ]; };
    CarouselComponent.propDecorators = {
        slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"], args: [CarouselSlideDirective,] }],
        translated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        dragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        initialized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return CarouselComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var StageComponent = /** @class */ (function () {
    function StageComponent(zone, el, renderer, carouselService, animateService) {
        var _this = this;
        this.zone = zone;
        this.el = el;
        this.renderer = renderer;
        this.carouselService = carouselService;
        this.animateService = animateService;
        /**
         * Object with data needed for dragging
         */
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null,
            active: false,
            moving: false
        };
        /**
         * Subject for notification when the carousel's rebuilding caused by resize event starts
         */
        this._oneDragMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Passes this to _oneMouseTouchMove();
         */
        this.bindOneMouseTouchMove = function (ev) {
            _this._oneMouseTouchMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */
        this.bindOnDragMove = function (ev) {
            _this._onDragMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */
        this.bindOnDragEnd = function (ev) {
            // this.zone.run(() => {
            _this._onDragEnd(ev);
            // });
        };
        /**
         * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
         */
        this._oneClickHandler = function () {
            _this.listenerOneClick = _this.renderer.listen(_this._drag.target, 'click', function () { return false; });
            _this.listenerOneClick();
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StageComponent.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.owlDraggable.isMouseDragable) {
            this._onDragStart(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StageComponent.prototype.onTouchStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.owlDraggable.isTouchDragable) {
            this._onDragStart(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StageComponent.prototype.onTouchCancel = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._onDragEnd(event);
    };
    /**
     * @return {?}
     */
    StageComponent.prototype.onDragStart = /**
     * @return {?}
     */
    function () {
        if (this.owlDraggable.isMouseDragable) {
            return false;
        }
    };
    /**
     * @return {?}
     */
    StageComponent.prototype.onSelectStart = /**
     * @return {?}
     */
    function () {
        if (this.owlDraggable.isMouseDragable) {
            return false;
        }
    };
    /**
     * @return {?}
     */
    StageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._oneMoveSubsription = this._oneDragMove$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function () {
            _this._sendChanges();
        });
    };
    /**
     * @return {?}
     */
    StageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._oneMoveSubsription.unsubscribe();
    };
    /**
       * Handles `touchstart` and `mousedown` events.
       * @todo Horizontal swipe threshold as option
       * @todo #261
       * @param event - The event arguments.
       */
    /**
     * Handles `touchstart` and `mousedown` events.
     * \@todo Horizontal swipe threshold as option / #261
     * @param {?} event - The event arguments.
     * @return {?}
     */
    StageComponent.prototype._onDragStart = /**
     * Handles `touchstart` and `mousedown` events.
     * \@todo Horizontal swipe threshold as option / #261
     * @param {?} event - The event arguments.
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var stage = null;
        if (event.which === 3) {
            return;
        }
        stage = this._prepareDragging(event);
        this._drag.time = new Date().getTime();
        this._drag.target = event.target;
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this._pointer(event);
        this._drag.active = true;
        this.listenerMouseUp = this.renderer.listen(document, 'mouseup', this.bindOnDragEnd);
        this.listenerTouchEnd = this.renderer.listen(document, 'touchend', this.bindOnDragEnd);
        this.zone.runOutsideAngular(function () {
            _this.listenerOneMouseMove = _this.renderer.listen(document, 'mousemove', _this.bindOneMouseTouchMove);
            _this.listenerOneTouchMove = _this.renderer.listen(document, 'touchmove', _this.bindOneMouseTouchMove);
        });
    };
    /**
     * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
     * @param event event objech of mouse or touch event
     */
    /**
     * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
     * @param {?} event event objech of mouse or touch event
     * @return {?}
     */
    StageComponent.prototype._oneMouseTouchMove = /**
     * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
     * @param {?} event event objech of mouse or touch event
     * @return {?}
     */
    function (event) {
        if (!this._drag.active)
            return false;
        /** @type {?} */
        var delta = this._difference(this._drag.pointer, this._pointer(event));
        if (this.listenerATag) {
            this.listenerATag();
        }
        this.listenerOneMouseMove();
        this.listenerOneTouchMove();
        if (Math.abs(delta.x) < Math.abs(delta.y) && this._is('valid')) {
            this._drag.active = false;
            return;
        }
        this._drag.moving = true;
        this.blockClickAnchorInDragging(event);
        this.listenerMouseMove = this.renderer.listen(document, 'mousemove', this.bindOnDragMove);
        this.listenerTouchMove = this.renderer.listen(document, 'touchmove', this.bindOnDragMove);
        event.preventDefault();
        this._enterDragging();
        this._oneDragMove$.next(event);
        // this._sendChanges();
    };
    /**
     * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
     * @param event event object
     */
    /**
     * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
     * @param {?} event event object
     * @return {?}
     */
    StageComponent.prototype.blockClickAnchorInDragging = /**
     * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
     * @param {?} event event object
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = event.target;
        while (target && !(target instanceof HTMLAnchorElement)) {
            target = target.parentElement;
        }
        if (target instanceof HTMLAnchorElement) {
            this.listenerATag = this.renderer.listen(target, 'click', function () { return false; });
        }
    };
    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @param event - The event arguments.
     */
    /**
     * Handles the `touchmove` and `mousemove` events.
     * \@todo #261
     * @param {?} event - The event arguments.
     * @return {?}
     */
    StageComponent.prototype._onDragMove = /**
     * Handles the `touchmove` and `mousemove` events.
     * \@todo #261
     * @param {?} event - The event arguments.
     * @return {?}
     */
    function (event) {
        if (!this._drag.active)
            return false;
        /** @type {?} */
        var stage;
        /** @type {?} */
        var stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);
        if (stageOrExit === false) {
            return;
        }
        stage = (/** @type {?} */ (stageOrExit));
        event.preventDefault();
        this._drag.stage.current = stage;
        this._animate(stage.x - this._drag.stage.start.x);
    };
    /**
     * Moves .owl-stage left-right
     * @param coordinate coordinate to be set to .owl-stage
     */
    /**
     * Moves .owl-stage left-right
     * @param {?} coordinate coordinate to be set to .owl-stage
     * @return {?}
     */
    StageComponent.prototype._animate = /**
     * Moves .owl-stage left-right
     * @param {?} coordinate coordinate to be set to .owl-stage
     * @return {?}
     */
    function (coordinate) {
        this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "translate3d(" + coordinate + "px,0px,0px");
        this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', '0s');
    };
    /**
       * Handles the `touchend` and `mouseup` events.
       * @todo #261
       * @todo Threshold for click event
       * @param event - The event arguments.
       */
    /**
     * Handles the `touchend` and `mouseup` events.
     * \@todo #261 / Threshold for click event
     * @param {?} event - The event arguments.
     * @return {?}
     */
    StageComponent.prototype._onDragEnd = /**
     * Handles the `touchend` and `mouseup` events.
     * \@todo #261 / Threshold for click event
     * @param {?} event - The event arguments.
     * @return {?}
     */
    function (event) {
        this.carouselService.owlDOMData.isGrab = false;
        if (this._drag.moving) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "");
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1000 + 's');
            this._finishDragging(event);
            this.listenerMouseMove();
            this.listenerTouchMove();
        }
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null,
            active: false,
            moving: false
        };
        // this.carouselService.trigger('dragged');
        this.listenerMouseUp();
        this.listenerTouchEnd();
    };
    /**
       * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
       * @param event - The event arguments.
       * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
       */
    /**
     * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
     * @param {?} event - The event arguments.
     * @return {?} stage - object with 'x' and 'y' coordinates of .owl-stage
     */
    StageComponent.prototype._prepareDragging = /**
     * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
     * @param {?} event - The event arguments.
     * @return {?} stage - object with 'x' and 'y' coordinates of .owl-stage
     */
    function (event) {
        return this.carouselService.prepareDragging(event);
    };
    /**
     * Finishes dragging
     * @param event object event of 'mouseUp' of 'touchend' events
     */
    /**
     * Finishes dragging
     * @param {?} event object event of 'mouseUp' of 'touchend' events
     * @return {?}
     */
    StageComponent.prototype._finishDragging = /**
     * Finishes dragging
     * @param {?} event object event of 'mouseUp' of 'touchend' events
     * @return {?}
     */
    function (event) {
        this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
    };
    /**
       * Gets unified pointer coordinates from event.
       * @param event The `mousedown` or `touchstart` event.
       * @returns Contains `x` and `y` coordinates of current pointer position.
       */
    /**
     * Gets unified pointer coordinates from event.
     * @param {?} event The `mousedown` or `touchstart` event.
     * @return {?} Contains `x` and `y` coordinates of current pointer position.
     */
    StageComponent.prototype._pointer = /**
     * Gets unified pointer coordinates from event.
     * @param {?} event The `mousedown` or `touchstart` event.
     * @return {?} Contains `x` and `y` coordinates of current pointer position.
     */
    function (event) {
        return this.carouselService.pointer(event);
    };
    /**
       * Gets the difference of two vectors.
       * @param first The first vector.
       * @param second- The second vector.
       * @returns The difference.
       */
    /**
     * Gets the difference of two vectors.
     * @param {?} firstC
     * @param {?} second
     * @return {?} The difference.
     */
    StageComponent.prototype._difference = /**
     * Gets the difference of two vectors.
     * @param {?} firstC
     * @param {?} second
     * @return {?} The difference.
     */
    function (firstC, second) {
        return this.carouselService.difference(firstC, second);
    };
    /**
       * Checks whether the carousel is in a specific state or not.
       * @param specificState The state to check.
       * @returns The flag which indicates if the carousel is busy.
       */
    /**
     * Checks whether the carousel is in a specific state or not.
     * @param {?} specificState The state to check.
     * @return {?} The flag which indicates if the carousel is busy.
     */
    StageComponent.prototype._is = /**
     * Checks whether the carousel is in a specific state or not.
     * @param {?} specificState The state to check.
     * @return {?} The flag which indicates if the carousel is busy.
     */
    function (specificState) {
        return this.carouselService.is(specificState);
    };
    /**
    * Enters a state.
    * @param name The state name.
    */
    /**
     * Enters a state.
     * @param {?} name The state name.
     * @return {?}
     */
    StageComponent.prototype._enter = /**
     * Enters a state.
     * @param {?} name The state name.
     * @return {?}
     */
    function (name) {
        this.carouselService.enter(name);
    };
    /**
       * Sends all data needed for View.
       */
    /**
     * Sends all data needed for View.
     * @return {?}
     */
    StageComponent.prototype._sendChanges = /**
     * Sends all data needed for View.
     * @return {?}
     */
    function () {
        this.carouselService.sendChanges();
    };
    /**
     * Handler for transitioend event
     */
    /**
     * Handler for transitioend event
     * @return {?}
     */
    StageComponent.prototype.onTransitionEnd = /**
     * Handler for transitioend event
     * @return {?}
     */
    function () {
        this.carouselService.onTransitionEnd();
    };
    /**
       * Enters into a 'dragging' state
       */
    /**
     * Enters into a 'dragging' state
     * @return {?}
     */
    StageComponent.prototype._enterDragging = /**
     * Enters into a 'dragging' state
     * @return {?}
     */
    function () {
        this.carouselService.enterDragging();
    };
    /**
     * Handles the end of 'animationend' event
     * @param id Id of slides
     */
    /**
     * Handles the end of 'animationend' event
     * @param {?} id Id of slides
     * @return {?}
     */
    StageComponent.prototype.clear = /**
     * Handles the end of 'animationend' event
     * @param {?} id Id of slides
     * @return {?}
     */
    function (id) {
        this.animateService.clear(id);
    };
    StageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'owl-stage',
                    template: "\n    <div>\n      <div class=\"owl-stage\" [ngStyle]=\"{'width': stageData.width + 'px',\n                                        'transform': stageData.transform,\n                                        'transition': stageData.transition,\n                                        'padding-left': stageData.paddingL + 'px',\n                                        'padding-right': stageData.paddingR + 'px' }\"\n          (transitionend)=\"onTransitionEnd()\">\n        <ng-container *ngFor=\"let slide of slidesData; let i = index\">\n          <div class=\"owl-item\" [ngClass]=\"slide.classes\"\n                                [ngStyle]=\"{'width': slide.width + 'px',\n                                            'margin-left': slide.marginL + 'px',\n                                            'margin-right': slide.marginR + 'px',\n                                            'left': slide.left}\"\n                                (animationend)=\"clear(slide.id)\"\n                                [@autoHeight]=\"slide.heightState\">\n            <ng-template *ngIf=\"slide.load\" [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n          </div><!-- /.owl-item -->\n        </ng-container>\n      </div><!-- /.owl-stage -->\n    </div>\n  ",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('autoHeight', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('nulled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: 0 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('full => nulled', [
                                // style({height: '*'}),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('700ms 350ms')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('nulled => full', [
                                // style({height: 0}),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(350)
                            ]),
                        ])
                    ]
                }] }
    ];
    /** @nocollapse */
    StageComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
        { type: CarouselService },
        { type: AnimateService }
    ]; };
    StageComponent.propDecorators = {
        owlDraggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        stageData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        slidesData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['mousedown', ['$event'],] }],
        onTouchStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['touchstart', ['$event'],] }],
        onTouchCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['touchcancel', ['$event'],] }],
        onDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['dragstart',] }],
        onSelectStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['selectstart',] }]
    };
    return StageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var OwlRouterLinkDirective = /** @class */ (function () {
    function OwlRouterLinkDirective(router, route, tabIndex, renderer, el) {
        this.router = router;
        this.route = route;
        this.stopLink = false;
        this.commands = [];
        if (tabIndex == null) {
            renderer.setAttribute(el.nativeElement, 'tabindex', '0');
        }
    }
    Object.defineProperty(OwlRouterLinkDirective.prototype, "owlRouterLink", {
        set: /**
         * @param {?} commands
         * @return {?}
         */
        function (commands) {
            if (commands != null) {
                this.commands = Array.isArray(commands) ? commands : [commands];
            }
            else {
                this.commands = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlRouterLinkDirective.prototype, "preserveQueryParams", {
        /**
         * @deprecated 4.0.0 use `queryParamsHandling` instead.
         */
        set: /**
         * @deprecated 4.0.0 use `queryParamsHandling` instead.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["isDevMode"])() && (/** @type {?} */ (console)) && (/** @type {?} */ (console.warn))) {
                console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
            }
            this.preserve = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OwlRouterLinkDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        if (this.stopLink) {
            return false;
        }
        this.router.navigateByUrl(this.urlTree, extras);
        return true;
    };
    Object.defineProperty(OwlRouterLinkDirective.prototype, "urlTree", {
        get: /**
         * @return {?}
         */
        function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    OwlRouterLinkDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{ selector: ':not(a)[owlRouterLink]' },] }
    ];
    /** @nocollapse */
    OwlRouterLinkDirective.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Attribute"], args: ['tabindex',] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] }
    ]; };
    OwlRouterLinkDirective.propDecorators = {
        queryParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        fragment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        queryParamsHandling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        preserveFragment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        skipLocationChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        replaceUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        stopLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        owlRouterLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        preserveQueryParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click',] }]
    };
    return OwlRouterLinkDirective;
}());
/**
 * \@description
 *
 * Lets you link to specific routes in your app.
 *
 * See `RouterLink` for more information.
 *
 * \@ngModule RouterModule
 *
 * \@publicApi
 */
var OwlRouterLinkWithHrefDirective = /** @class */ (function () {
    function OwlRouterLinkWithHrefDirective(router, route, locationStrategy) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.stopLink = false;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]) {
                _this.updateTargetUrlAndHref();
            }
        });
    }
    Object.defineProperty(OwlRouterLinkWithHrefDirective.prototype, "owlRouterLink", {
        set: /**
         * @param {?} commands
         * @return {?}
         */
        function (commands) {
            if (commands != null) {
                this.commands = Array.isArray(commands) ? commands : [commands];
            }
            else {
                this.commands = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlRouterLinkWithHrefDirective.prototype, "preserveQueryParams", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["isDevMode"])() && (/** @type {?} */ (console)) && (/** @type {?} */ (console.warn))) {
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
            }
            this.preserve = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    OwlRouterLinkWithHrefDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { this.updateTargetUrlAndHref(); };
    /**
     * @return {?}
     */
    OwlRouterLinkWithHrefDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this.subscription.unsubscribe(); };
    /**
     * @param {?} button
     * @param {?} ctrlKey
     * @param {?} metaKey
     * @param {?} shiftKey
     * @return {?}
     */
    OwlRouterLinkWithHrefDirective.prototype.onClick = /**
     * @param {?} button
     * @param {?} ctrlKey
     * @param {?} metaKey
     * @param {?} shiftKey
     * @return {?}
     */
    function (button, ctrlKey, metaKey, shiftKey) {
        if (button !== 0 || ctrlKey || metaKey || shiftKey) {
            return true;
        }
        if (typeof this.target === 'string' && this.target !== '_self') {
            return true;
        }
        if (this.stopLink) {
            return false;
        }
        /** @type {?} */
        var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return false;
    };
    /**
     * @return {?}
     */
    OwlRouterLinkWithHrefDirective.prototype.updateTargetUrlAndHref = /**
     * @return {?}
     */
    function () {
        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
    };
    Object.defineProperty(OwlRouterLinkWithHrefDirective.prototype, "urlTree", {
        get: /**
         * @return {?}
         */
        function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    OwlRouterLinkWithHrefDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{ selector: 'a[owlRouterLink]' },] }
    ];
    /** @nocollapse */
    OwlRouterLinkWithHrefDirective.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"] }
    ]; };
    OwlRouterLinkWithHrefDirective.propDecorators = {
        target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['attr.target',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        queryParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        fragment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        queryParamsHandling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        preserveFragment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        skipLocationChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        replaceUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        stopLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"] }],
        owlRouterLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        preserveQueryParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey'],] }]
    };
    return OwlRouterLinkWithHrefDirective;
}());
/**
 * @param {?} s
 * @return {?}
 */
function attrBoolValue(s) {
    return s === '' || !!s;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [];
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        // BrowserAnimationsModule, // there's an issue with this import while using lazy loading of module consuming this library. I don't remove it because it could be needed during future enhancement of this lib.
                        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
                    ],
                    declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
                    exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
                    providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
                },] }
    ];
    return CarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-owl-carousel-o.js.map

/***/ }),

/***/ "./node_modules/ngx-owl-carousel/index.js":
/*!************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var owl_carousel_component_1 = __webpack_require__(/*! ./src/owl-carousel.component */ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js");
var owl_child_component_1 = __webpack_require__(/*! ./src/owl-child.component */ "./node_modules/ngx-owl-carousel/src/owl-child.component.js");
__export(__webpack_require__(/*! ./src/owl-carousel.component */ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js"));
var OwlModule = (function () {
    function OwlModule() {
    }
    OwlModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                owl_carousel_component_1.OwlCarousel, owl_child_component_1.OwlChild
            ],
            exports: [
                owl_carousel_component_1.OwlCarousel
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], OwlModule);
    return OwlModule;
}());
exports.OwlModule = OwlModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/src/owl-carousel.component.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var owl_child_component_1 = __webpack_require__(/*! ./owl-child.component */ "./node_modules/ngx-owl-carousel/src/owl-child.component.js");
var OwlCarousel = (function () {
    function OwlCarousel(differs) {
        this.differs = differs;
        this.carouselClasses = '';
        this.options = {};
    }
    Object.defineProperty(OwlCarousel.prototype, "items", {
        set: function (coll) {
            this._items = coll;
            if (coll && !this.differ) {
                this.differ = this.differs.find(coll).create(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    OwlCarousel.prototype.ngDoCheck = function () {
        if (this.differ) {
            var changes = this.differ.diff(this._items);
            if (changes) {
                var changed_1 = false;
                var changedFn = function () {
                    changed_1 = true;
                };
                changes.forEachAddedItem(changedFn);
                changes.forEachMovedItem(changedFn);
                changes.forEachRemovedItem(changedFn);
                if (changed_1) {
                    this.reInit();
                }
            }
        }
    };
    OwlCarousel.prototype.reInit = function () {
        var _this = this;
        if (this.$owlChild.$owl) {
            this.$owlChild.$owl.css('display', 'none');
        }
        setTimeout(function () {
            _this.$owlChild.destroyOwl();
            if (_this.$owlChild.$owl) {
                var itemLength = _this._items && _this._items.length;
                if (itemLength && itemLength <= _this.$owlChild.currentSlideIndex) {
                    _this.$owlChild.currentSlideIndex = itemLength;
                }
                _this.$owlChild.$owl.css('display', 'block');
            }
            _this.$owlChild.initOwl();
        }, 0);
    };
    OwlCarousel.prototype.refresh = function () {
        this.trigger('refresh.owl.carousel');
    };
    OwlCarousel.prototype.next = function (options) {
        this.trigger('next.owl.carousel', options);
    };
    OwlCarousel.prototype.previous = function (options) {
        this.trigger('prev.owl.carousel', options);
    };
    OwlCarousel.prototype.to = function (options) {
        this.trigger('to.owl.carousel', options);
    };
    OwlCarousel.prototype.trigger = function (action, options) {
        this.$owlChild.trigger(action, options);
    };
    __decorate([
        core_1.ViewChild('owl'), 
        __metadata('design:type', owl_child_component_1.OwlChild)
    ], OwlCarousel.prototype, "$owlChild", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "carouselClasses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], OwlCarousel.prototype, "items", null);
    OwlCarousel = __decorate([
        core_1.Component({
            selector: 'owl-carousel',
            template: '<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" >' +
                '<ng-content></ng-content></owl-carousel-child>',
        }), 
        __metadata('design:paramtypes', [core_1.IterableDiffers])
    ], OwlCarousel);
    return OwlCarousel;
}());
exports.OwlCarousel = OwlCarousel;
//# sourceMappingURL=owl-carousel.component.js.map

/***/ }),

/***/ "./node_modules/ngx-owl-carousel/src/owl-child.component.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/src/owl-child.component.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var OwlChild = (function () {
    function OwlChild(el) {
        this.el = el;
        this.owlClass = true;
        this.options = {};
        if (typeof $ === 'undefined' && typeof jQuery !== 'undefined') {
            $ = jQuery;
        }
    }
    OwlChild.prototype.ngOnInit = function () {
        if ((typeof window !== 'undefined') && $ && typeof $.fn.owlCarousel === 'function') {
            this.$owl = $(this.el.nativeElement);
        }
    };
    OwlChild.prototype.ngAfterViewInit = function () {
        this.initOwl();
    };
    OwlChild.prototype.initOwl = function () {
        var _this = this;
        if (this.$owl) {
            var options = {};
            Object.assign(options, this.options);
            if (this.currentSlideIndex) {
                options.startPosition = this.currentSlideIndex;
            }
            this.$owl.owlCarousel(options);
            this.$owl.on('changed.owl.carousel', function (event) {
                _this.currentSlideIndex = event.item.index;
            });
        }
    };
    OwlChild.prototype.trigger = function (action, options) {
        if (this.$owl) {
            this.$owl.trigger(action, options);
        }
    };
    OwlChild.prototype.ngOnDestroy = function () {
        this.destroyOwl();
        delete this.$owl;
    };
    OwlChild.prototype.destroyOwl = function () {
        if (this.$owl) {
            this.$owl.trigger('destroy.owl.carousel')
                .removeClass('owl-loaded owl-hidden')
                .find('.owl-stage:empty, .owl-item:empty')
                .remove();
        }
    };
    __decorate([
        core_1.HostBinding('class.owl-carousel'), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "owlClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "options", void 0);
    OwlChild = __decorate([
        core_1.Component({
            selector: 'owl-carousel-child',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OwlChild);
    return OwlChild;
}());
exports.OwlChild = OwlChild;
//# sourceMappingURL=owl-child.component.js.map

/***/ }),

/***/ "./src/app/auth/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"\">\n  <div class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <ul class=\"list-unstyled footer-list\">\n            <h5 class=\"footer-heading\">Store Information</h5>\n            <li>\n              <a href=\"#\">Friendz Factory | Government </a>\n            </li>\n            <li>\n              <a href=\"#\">Laptop Spares</a>\n            </li>\n            <li>\n              <a href=\"#\">Tiruchirappalli</a>\n            </li>\n            <li>\n              <a href=\"#\">India</a>\n            </li>\n            <li>\n              <a href=\"#\">7305198198</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-sm-2\">\n          <ul class=\"list-unstyled footer-list\">\n            <h5 class=\"footer-heading\">Your Account</h5>\n            <li>\n              <a href=\"#\">Personal info</a>\n            </li>\n            <li>\n              <a href=\"#\">Orders</a>\n            </li>\n            <li>\n              <a href=\"#\">Credit slips</a>\n            </li>\n            <li>\n              <a href=\"#\">Addresses</a>\n            </li>\n            <li>\n              <a href=\"#\">My alerts</a>\n            </li>\n            <li>\n              <a href=\"#\">My wishlists</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-sm-2\">\n          <ul class=\"list-unstyled footer-list\">\n            <h5 class=\"footer-heading\">Products</h5>\n            <li>\n              <a href=\"#\">Prices drop</a>\n            </li>\n            <li>\n              <a href=\"#\">New products</a>\n            </li>\n            <li>\n              <a href=\"#\">Best sales</a>\n            </li>\n            <li>\n              <a href=\"#\">Mitnight Offer</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-sm-2\">\n          <h5 class=\"footer-heading\">Our Company</h5>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <ul class=\"list-unstyled footer-list\">\n                <li>\n                  <a href=\"#\"> Delivery</a>\n                </li>\n                <li>\n                  <a href=\"#\"> Legal Notice</a>\n                </li>\n                <li>\n                  <a href=\"#\"> About us</a>\n                </li>\n                <li>\n                  <a href=\"#\"> Secure payment</a>\n                </li>\n                <li>\n                  <a href=\"#\"> Contact us</a>\n                </li>\n                <li>\n                  <a href=\"#\"> Sitemap</a>\n                </li>\n                <li>\n                  <a href=\"#\"> Stores us</a>\n                </li>\n                <li>\n                  <a href=\"#\"> Sell On Friendz Factoy </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-3\">\n          <h5 class=\"footer-heading\">Sign Up For Newsletter</h5>\n          <ul class=\"list-unstyled footer-list\">\n            <li>\n              <div class=\"input-group input-group-sm mb-3\">\n                <input type=\"text\" class=\"form-control form-set\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\"\n                  placeholder=\"Your Email Address\">\n              </div>\n            </li>\n            <li>\n              <div class=\"input-group input-group-sm mb-3\">\n                <input type=\"tel\" class=\"form-control form-set\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\"\n                  placeholder=\"Your  Number\">\n              </div>\n            </li>\n            <li>\n              <button type=\"button\" class=\"btn btn-primary btn-block\">Subscribe</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"sub-footer\">\n    <div class=\"container\">\n     \n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/auth/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background: #333;\n  padding: 50px 0 0 0;\n  color: #fff;\n  border-top: 15px solid #5d5a5a;\n  background-size: cover; }\n  .footer .footer-heading {\n    color: #fff;\n    font-size: 16px;\n    margin-bottom: 12px;\n    font-weight: 600; }\n  .footer .footer-button {\n    background: transparent;\n    border: 1px solid #ffff;\n    border-radius: 0px;\n    color: #ffff;\n    padding: 2px !important; }\n  .footer .footer-button:hover, .footer .footer-button:active, .footer .footer-button:focus {\n      background: transparent;\n      color: #fff;\n      border: 1px solid transparent; }\n  .footer .common-control {\n    background: #2a3444;\n    border: 1px solid #2a3444;\n    border-radius: 0px;\n    width: 220px; }\n  .footer .common-content {\n    width: 400px;\n    background: #2a3444;\n    border: 1px solid #2a3444;\n    border-radius: 0px; }\n  .footer .common-list .list-inline-item .fb {\n    padding: 5px;\n    font-size: 25px;\n    color: #dddd;\n    transition: 0.9sec; }\n  .footer .common-list .list-inline-item .fb:hover, .footer .common-list .list-inline-item .fb:active, .footer .common-list .list-inline-item .fb:focus {\n      cursor: pointer;\n      color: #3a559f; }\n  .footer .common-list .list-inline-item .tw {\n    padding: 5px;\n    font-size: 25px;\n    color: #dddd;\n    transition: 0.9sec; }\n  .footer .common-list .list-inline-item .tw:hover, .footer .common-list .list-inline-item .tw:active, .footer .common-list .list-inline-item .tw:focus {\n      cursor: pointer;\n      color: #00aced; }\n  .footer .common-list .list-inline-item .inst {\n    padding: 5px;\n    font-size: 25px;\n    color: #dddd;\n    transition: 0.9sec; }\n  .footer .common-list .list-inline-item .inst:hover, .footer .common-list .list-inline-item .inst:active, .footer .common-list .list-inline-item .inst:focus {\n      cursor: pointer;\n      color: #f6d000; }\n  .footer .footer-list li {\n    margin-bottom: 10px; }\n  .footer .footer-list a {\n    font-size: 12px;\n    color: #fff;\n    text-decoration: none;\n    transition: all .500s ease-in-out; }\n  .footer .footer-list a:hover, .footer .footer-list a:active, .footer .footer-list a:focus {\n      color: #ced2da;\n      margin-left: 5px; }\n  .footer .btn-primary {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 0px; }\n  .footer .form-set {\n    border-radius: 0px;\n    background: #333333;\n    border: 1px solid #7b8390;\n    color: #888d96; }\n"

/***/ }),

/***/ "./src/app/auth/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/auth/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/auth/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/auth/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--START: FIRST-NAVBAR -->\n<nav class=\"navbar navbar-expand-lg navbar-light  first-header fixed-top\">\n  <div class=\"container\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-right\">\n        <li class=\"nav-item  mr-3\">\n          <!-- <a class=\"nav-link\"><i class=\"fa fa-question-circle fa-set\" aria-hidden=\"true\"></i> Help </a> -->\n        </li>\n        <li class=\"nav-item\">\n          <div ngbDropdown id=\"app-get\">\n            <!-- <a class=\"nav-link link-right\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"fa fa-mobile fa-set\"\n                aria-hidden=\"true\"></i>\n              Get The App</a> -->\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n              <img src=\"assets/img/Qr-4.png\" alt=\"Download The App\">\n              <ul class=\"list-inline\">\n                <li class=\"list-inline-item\"><img src=\"/assets/img/android-store.png\" class=\"img getapp-img\" alt=\"Responsive image\"></li>\n                <li class=\"list-inline-item\"><img src=\"/assets/img/apple-store.png\" class=\"img getapp-img\" alt=\"Responsive image\"></li>\n              </ul>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!--END: FIRST-NAVBAR -->\n\n<!--START: SECOND-NAVBAR -->\n<nav class=\"navbar navbar-expand-lg navbar-light  second-header fixed-top\" [ngClass]=\"{'page-scroll-header': isScrolled}\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/img/img/ff-logo.jpg\" alt=\"\" class=\"brand-image\"></a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav margin-center mr-auto\">\n        <li class=\"nav-item input-group form-inline\">\n          <input type=\"text\" class=\"form-control sm-6\" placeholder=\"Search For Business\" aria-label=\"\" aria-describedby=\"basic-addon2\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\"> <i class=\"fa fa-search\"></i></button>\n          </div>\n        </li>\n        <ul class=\"navbar-nav \" id=\"trend-set\">\n          <li class=\"nav-item\">\n            <div ngbDropdown>\n              <a class=\"nav-link link-right\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                Agriculture Technologies&nbsp;</a>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\"><img src=\"assets/img/agri.png\" class=\"mr-2 agri\">Agriculture</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Agriculture Technologies</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Agriculture Technologies</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Agriculture Technologies</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Agriculture Technologies</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"nav-item\">\n            <div ngbDropdown>\n              <a class=\"nav-link link-right\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                Auto MobileSpare &nbsp;</a>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\"><img src=\"assets/img/smallcar.png\" class=\"mr-2 agri\">Auto\n                        MobileSpare</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Auto MobileSpare</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Auto MobileSpare</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Auto MobileSpare</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Auto MobileSpare</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"nav-item\">\n            <div ngbDropdown>\n              <a class=\"nav-link link-right\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                Science Books &nbsp;</a>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\"><img src=\"assets/img/smallbook.png\" class=\"mr-2 agri\">Science Books</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Science Books </h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Science Books </h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Science Books </h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Science Books</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"nav-item\">\n            <div ngbDropdown>\n              <a class=\"nav-link link-right\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                Electronics &nbsp;</a>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\"><img src=\"assets/img/electronics.png\" class=\"mr-2 agri\">Electronics</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Electronics</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Electronics</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Electronics</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Agriculture Technologies</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"nav-item\">\n            <div ngbDropdown>\n              <a class=\"nav-link link-right\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                Auto Spares &nbsp;</a>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\"><img src=\"assets/img/autospare.png\" class=\"mr-2 agri\">Auto Spares</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Auto Spares</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Auto Spares</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Auto Spares</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <ul class=\"list-unstyled\">\n                      <h6 class=\"dropdown-header\">Auto Spares</h6>\n                      <li class=\"dropdown-item\">Action</li>\n                      <li class=\"dropdown-item\">Another action</li>\n                      <li class=\"dropdown-item\">Something else here</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </ul>\n      <ul class=\"navbar-nav mr-right set-sell\">\n        <li class=\"nav-item mr-3\">\n          <a class=\"nav-link link-right\">Login</a>\n\n        </li>\n        <li class=\"nav-item mr-3\">\n          <a class=\"nav-link link-right\">Sign-up</a>\n\n        </li>\n      </ul>\n    </div>\n  </div>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"falseset-nav\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</nav>\n<!--START: SECOND-NAVBAR -->"

/***/ }),

/***/ "./src/app/auth/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".first-header {\n  background-color: #efefef;\n  height: 30px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 5px 15px;\n  z-index: 9999;\n  transition: .2s ease-in-out !important; }\n  .first-header .navbar-nav .nav-link {\n    padding: 0px;\n    font-size: 14px;\n    color: #fff; }\n  .first-header .navbar-nav .nav-link .fa-seted {\n      padding: 0px;\n      font-size: 20px;\n      vertical-align: middle;\n      margin-right: 25px; }\n  .first-header .navbar-nav .nav-link .fa-set {\n      font-size: 20px !important;\n      vertical-align: middle !important;\n      margin: 0 5px !important; }\n  #app-get .dropdown-menu.show {\n  left: -15px !important;\n  top: 35px !important;\n  padding: 5px !important;\n  min-width: 115px !important;\n  background: #fffffffa !important; }\n  #app-get .dropdown-menu.show:hover {\n  display: block !important; }\n  #app-get .getapp-img {\n  width: 50px;\n  cursor: pointer; }\n  .dropdown-toggle::after {\n  border: none !important; }\n  .dropdown-toggle:hover {\n  cursor: pointer;\n  display: block; }\n  .second-header {\n  transition: .2s ease-in-out !important;\n  transition: .2s ease-in-out !important;\n  padding: 10px;\n  box-shadow: 0px 4px 10px #0000003b;\n  top: 30px;\n  background-color: #34a853; }\n  .second-header .navbar-brand .brand-image {\n    height: 40px !important; }\n  .second-header .navbar-nav .nav-link {\n    padding: 0px;\n    font-size: 14px;\n    color: #fff; }\n  .second-header .navbar-nav .nav-link:hover {\n    cursor: pointer !important; }\n  .second-header .margin-center .input-group {\n    width: 665px;\n    margin-bottom: 15px;\n    box-shadow: 1px 1px 10px #a78b8b; }\n  .second-header .margin-center .input-group .form-control {\n      border-radius: 0px; }\n  .second-header .margin-center .input-group .form-control:hover,\n      .second-header .margin-center .input-group .form-control :focus,\n      .second-header .margin-center .input-group .form-control :active {\n        box-shadow: none !important; }\n  .second-header .margin-center .input-group .btn-outline-secondary {\n      border-radius: 0px;\n      border: none !important;\n      padding: 5px 20px;\n      color: #777;\n      background: #fff;\n      box-shadow: none !important; }\n  .second-header .margin-center .input-group .btn-outline-secondary:hover,\n      .second-header .margin-center .input-group .btn-outline-secondary :focus {\n        outline: none !important;\n        border: none !important;\n        background: #fff !important;\n        box-shadow: none !important; }\n  .second-header .dropdown-toggle::after {\n    border: none !important; }\n  .second-header #trend-set {\n    position: absolute;\n    top: 52px; }\n  .second-header #trend-set .nav-link {\n      margin-right: 15px;\n      font-size: 12px !important; }\n  .second-header #trend-set .dropdown-menu {\n      width: 100%;\n      position: fixed;\n      top: 130px !important;\n      left: 0px !important;\n      border-bottom: 4px solid transparent; }\n  .second-header #trend-set .dropdown:hover > .dropdown-menu {\n      display: block !important;\n      width: 100%;\n      position: fixed;\n      left: 0px !important;\n      border-bottom: 4px solid transparent; }\n  .second-header #trend-set .dropdown-header {\n      color: #ad3b3b; }\n  .second-header #trend-set .dropdown-header img {\n        height: 25px; }\n  .second-header .set-sell .btn-default {\n    padding: 2px 25px;\n    background: transparent;\n    border-radius: 0px;\n    border: 1px solid #fff; }\n  .second-header .set-sell .btn-default:hover:focus {\n      box-shadow: none; }\n  .dropdown-menu {\n  left: -160px !important;\n  top: 45px !important;\n  min-width: 275px;\n  background: #fffffffa;\n  -webkit-animation-name: fadeInBottom;\n          animation-name: fadeInBottom;\n  -webkit-animation-duration: .6s;\n          animation-duration: .6s;\n  border-radius: 0px;\n  padding: 15px 10px 10px 10px !important;\n  transition: .4s linear;\n  box-shadow: 2px 2px 10px #888585; }\n  .dropdown-menu:before {\n  content: \"\";\n  border-bottom: 10px solid #fff;\n  border-right: 10px solid transparent;\n  border-left: 10px solid transparent;\n  position: absolute;\n  top: -8px;\n  right: 60px;\n  z-index: 10; }\n  .set-group .form-control {\n  font: 13px 'Open Sans', sans-serif;\n  font-weight: 300;\n  height: 35px;\n  padding: 5px 12px;\n  background-color: #ecf1f5;\n  border: 1px solid #f83c3c2e;\n  border-radius: 0px;\n  font-weight: 500; }\n  .bt-fb {\n  background-color: #3b5a9a;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  border-radius: 10px; }\n  .bt-tw {\n  background-color: #1aa9e1;\n  padding: 5px;\n  font-size: 14px;\n  font-weight: 600;\n  border-radius: 3px; }\n  @media screen and (min-width: 991px) and (max-width: 1024px) {\n  .second-header .margin-center {\n    margin-left: 0%;\n    margin-right: 15%;\n    margin-bottom: 20px;\n    margin-top: 5px; }\n  .second-header .input-group {\n    width: 580px !important; }\n  .second-header .trend-set {\n    left: 160px; }\n    .second-header .trend-set .nav-link {\n      font-size: 12px; } }\n  .log-in {\n  color: #495057 !important;\n  text-align: center !important;\n  background-color: #ffffff !important;\n  border: 1px solid #ced4da !important;\n  padding: 5px 20px; }\n  .page-scroll-header {\n  transition: .2s ease-in-out !important;\n  top: 0px;\n  z-index: 99999; }\n  .page-scroll-header #trend-set .dropdown-menu.show {\n    top: 80px !important; }\n"

/***/ }),

/***/ "./src/app/auth/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, formBuilder) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.submit = false;
        this.isScrolled = false;
        this.currPos = 0;
        this.startPos = 0;
        this.changePos = 100;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.SignupForm = this.formBuilder.group({
            Signup_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Signup_Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Signup_Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Signup_Confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    HeaderComponent.prototype.modalLogin = function (content) {
        this.modalService.open(content, { centered: true });
    };
    HeaderComponent.prototype.modalsigin = function (logincontent) {
        this.modalService.open(logincontent, { centered: true });
    };
    HeaderComponent.prototype.onSubmited = function () {
        this.submit = true;
        if (this.loginform.invalid) {
            return;
        }
    };
    HeaderComponent.prototype.onWindowScroll = function () {
        var currPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (currPos >= this.changePos) {
            this.isScrolled = true;
        }
        else {
            this.isScrolled = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/auth/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/auth/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/auth/loginpage/loginpage.component.html":
/*!*********************************************************!*\
  !*** ./src/app/auth/loginpage/loginpage.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sigin-banner\">\n  <div class=\"container-fluid\">\n    <div class=\"login-signup\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-5 \">\n          <ngb-tabset #t=\"ngbTabset\">\n            <ngb-tab id=\"tab-selectbyid1\" title=\"\">\n              <ng-template ngbTabTitle> <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Sign-In</ng-template>\n              <ng-template ngbTabContent>\n                <form [formGroup]=\"loginform\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"Username\" [ngClass]=\"{'form-error':loginform.controls.Username.invalid && (submitted || loginform.controls.Username.touched)}\"\n                      placeholder=\"Username\">\n                    <p class=\"err\" *ngIf=\"loginform.controls['Username'].errors?.required && (submitted || loginform.controls['Username'].touched)\">Username\n                      required</p>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"Password\" class=\"form-control\" id=\"\" formControlName=\"Password\" [ngClass]=\"{'form-error':loginform.controls.Password.invalid && (submitted || loginform.controls.Password.touched)}\"\n                      placeholder=\"Password\">\n                    <p class=\"err\" *ngIf=\"loginform.controls['Password'].errors?.required && (submitted || loginform.controls['Password'].touched)\">Password\n                      required</p>\n                  </div>\n                  <div class=\"form-check\">\n                    <input type=\"checkbox\" class=\"form-check-input\">\n                    <label class=\"form-check-label\" for=\"exampleCheck1\">Keep signed-in</label>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col\">\n                      <button type=\"submit\" class=\"btn btn-success btn-block bt-submit\">Submit</button>\n                    </div>\n                    <div class=\"form-group col\">\n                      <button type=\"submit\" class=\"btn btn-success btn-block bt-submit\">Forgot Password</button>\n                    </div>\n                  </div>\n                  <hr>\n                  <div class=\"form-row\">\n                    <div class=\"col-md-12 form-group set-value\">\n                      <button type=\"submit\" class=\"btn btn-primary \n                             btn-block bt-fb \"> <i\n                          class=\"fa fa-facebook mr-2\" aria-hidden=\"true\"></i> Facebook</button>\n                    </div>\n                    <div class=\"col-md-12 form-group set-value\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-block bt-tw\"> <i class=\"fa fa-twitter mr-2\"\n                          aria-hidden=\"true\"></i>\n                        Twitter</button>\n                    </div>\n                    <div class=\"col-md-12 form-group set-value\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-block bt-gog\"> <i class=\"fa fa-google mr-2\"\n                          aria-hidden=\"true\"></i>\n                        Gmail</button>\n                    </div>\n                  </div>\n                </form>\n                <div class=\"footer-section text-center\">\n                  <ul class=\"list-unstyled\">\n                    <li><a href=\"#\">Terms of Use</a></li>\n                    <li><a href=\"#\">Privacy Statement</a></li>\n                  </ul>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab id=\"tab-selectbyid2\">\n              <ng-template ngbTabTitle><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> Sign-up</ng-template>\n              <ng-template ngbTabContent>\n                <form [formGroup]=\"SignupForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmited()\">\n                  <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control\" id=\"\" formControlName=\" Signup_Email\" placeholder=\"Email\"\n                      [ngClass]=\"{'form-error':SignupForm.controls. Signup_Email.invalid && (submit || SignupForm.controls. Signup_Email.touched)}\">\n                    <p class=\"err\" *ngIf=\"SignupForm.controls['Signup_Email'].errors?.required && (submit || SignupForm.controls['Signup_Email'].touched)\">\n                      Email required</p>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"name\" class=\"form-control\" id=\"\" formControlName=\"Signup_Name\" [ngClass]=\"{'form-error':SignupForm.controls.Signup_Name.invalid && (submit|| SignupForm.controls.Signup_Name.touched)}\"\n                      placeholder=\"Username\">\n                    <p class=\"err\" *ngIf=\"SignupForm.controls['Signup_Name'].errors?.required && (submit || SignupForm.controls['Signup_Name'].touched)\">Name\n                      required</p>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"Password\" class=\"form-control\" id=\"\" formControlName=\"Signup_Password\" [ngClass]=\"{'form-error':SignupForm.controls.Signup_Password.invalid && (submit || SignupForm.controls.Signup_Password.touched)}\"\n                      placeholder=\"Password\">\n                    <p class=\"err\" *ngIf=\"SignupForm.controls['Signup_Password'].errors?.required && (submit || SignupForm.controls['Signup_Password'].touched)\">Password\n                      required</p>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"confirmPassword\" class=\"form-control\" id=\"\" formControlName=\"Signup_Confirmpassword\"\n                      [ngClass]=\"{'form-error':SignupForm.controls.Signup_Confirmpassword.invalid && (submit || SignupForm.controls.Signup_Confirmpassword.touched)}\"\n                      placeholder=\"Confirm Password\">\n                    <p class=\"err\" *ngIf=\"SignupForm.controls['Signup_Confirmpassword'].errors?.required && (submit || SignupForm.controls['Signup_Confirmpassword'].touched)\">confirm\n                      Password\n                      required</p>\n                  </div>\n                  <div class=\"form-check\">\n                    <input type=\"checkbox\" class=\"form-check-input\">\n                    <label class=\"form-check-label\" for=\"exampleCheck1\">Please accept the terms and conditions to\n                      proceed with your request.</label>\n                  </div>\n                  <div class=\"form-group col\">\n                    <button type=\"submit\" class=\"btn btn-success btn-block bt-submit\">Sign-up</button>\n                  </div>\n                </form>\n                <div class=\"footer-section text-center\">\n                  <ul class=\"list-unstyled\">\n                    <li><a href=\"#\">Terms of Use</a></li>\n                    <li><a href=\"#\">Privacy Statement</a></li>\n                  </ul>\n                </div>\n              </ng-template>\n            </ngb-tab>\n          </ngb-tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/auth/loginpage/loginpage.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/auth/loginpage/loginpage.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sigin-banner {\n  padding: 150px 0px;\n  background-image: linear-gradient(to right, #f14344 0%, #f14344 19%, #f14344 60%, #f14344 100%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  padding: 150px 0 50px; }\n  .sigin-banner .login-signup .set-control {\n    padding: 5px;\n    border-radius: 0px; }\n  .sigin-banner .login-signup .form-check {\n    position: relative;\n    display: block;\n    padding-left: 1.25rem;\n    bottom: 5px; }\n  .sigin-banner .login-signup .set-value {\n    margin: 5px; }\n  .sigin-banner .login-signup .bt-submit {\n    padding: 5px;\n    border-radius: 0px;\n    background: #f8191a;\n    border: none;\n    margin-top: 15px; }\n  .sigin-banner .login-signup .bt-submit:hover,\n    .sigin-banner .login-signup .bt-submit :active,\n    .sigin-banner .login-signup .bt-submit :focus {\n      background: #f8191a;\n      box-shadow: none;\n      border: none; }\n  .sigin-banner .login-signup .form-check-input {\n    position: absolute;\n    margin-top: 6.5px;\n    margin-left: -1.25rem; }\n  .sigin-banner .login-signup .form-check-label {\n    font-size: 12px;\n    font-weight: 400; }\n  .sigin-banner .login-signup .bt-gog {\n    background-color: #f6453d;\n    padding: 5px;\n    font-size: 14px;\n    font-weight: 600;\n    border-radius: 0px;\n    border: none !important; }\n  .sigin-banner .login-signup .bt-gog:hover,\n    .sigin-banner .login-signup .bt-gog :active,\n    .sigin-banner .login-signup .bt-gog :focus {\n      background-color: #f6453d;\n      box-shadow: none !important; }\n  .sigin-banner .login-signup .footer-section .list-unstyled {\n    list-style: none;\n    font-size: 14px; }\n  .sigin-banner .login-signup .footer-section a {\n    color: #f8191a;\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/auth/loginpage/loginpage.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/loginpage/loginpage.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginpageComponent = /** @class */ (function () {
    function LoginpageComponent(formBuilder, config) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.submit = false;
        config.justify = 'center';
    }
    LoginpageComponent.prototype.ngOnInit = function () {
        this.loginform = this.formBuilder.group({
            Username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.SignupForm = this.formBuilder.group({
            Signup_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Signup_Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Signup_Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Signup_Confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    LoginpageComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginform.invalid) {
            return;
        }
    };
    LoginpageComponent.prototype.onSubmited = function () {
        this.submit = true;
        if (this.loginform.invalid) {
            return;
        }
    };
    LoginpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginpage',
            template: __webpack_require__(/*! ./loginpage.component.html */ "./src/app/auth/loginpage/loginpage.component.html"),
            styles: [__webpack_require__(/*! ./loginpage.component.scss */ "./src/app/auth/loginpage/loginpage.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabsetConfig"]])
    ], LoginpageComponent);
    return LoginpageComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http, _scrollToService) {
        this.http = http;
        this._scrollToService = _scrollToService;
    }
    DataService.prototype.triggerScrollTo = function () {
        var config = {
            container: 'custom-container',
            target: 'destination',
            duration: 500,
            easing: 'easeInOutQuad',
            offset: 100
        };
        this._scrollToService.scrollTo(config);
    };
    DataService.prototype.getData = function () {
        return this.http.get('https://bbrevamp.herokuapp.com/landing');
    };
    DataService.prototype.getDetail = function () {
        return this.http.get('https://bbrevamp.herokuapp.com/product');
    };
    DataService.prototype.getParticular = function () {
        return this.http.get('https://bbrevamp.herokuapp.com/product/5bb7433c0209b4000410622d');
    };
    DataService.prototype.postData = function (data) {
        return this.http.post('https://bbrevamp.herokuapp.com/postProduct', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/layout/add-category/add-category.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/add-category/add-category.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pad-50 add-image\">\n  <div class=\"container\">\n    <div class=\"row  justify-content-center\">\n      <div class=\"col-sm-10 \">\n        <h6 class=\"card-heading main-head text-capitalize\"><i class=\"fa fa-chevron-left mr-2\" aria-hidden=\"true\" routerLink=\"/add-image\"></i>Choose a Category</h6>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <form>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search For Category\">\n              </div>\n              <div class=\"block-scroll\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\"><a href=\"#\">Agriculture Spares</a></li>\n                  <li class=\"list-group-item\"><a href=\"\" routerLink=\"/add-specific\">Bulletin Board</a></li>\n                  <li class=\"list-group-item\"><a href=\"#\">Cars</a></li>\n                  <li class=\"list-group-item\"><a href=\"#\">Mobile Spares</a></li>\n                  <li class=\"list-group-item\"><a href=\"#\">Electronics</a></li>\n                  <li class=\"list-group-item\"><a href=\"#\">Home Services</a></li>\n                  <li class=\"list-group-item\"><a href=\"#\">Car Services</a></li>\n                  <li class=\"list-group-item\"><a href=\"#\">Health & Beauty</a></li>\n                  <li class=\"list-group-item\"><a href=\"#\">Babies & Kids</a></li>\n                </ul>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/layout/add-category/add-category.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/add-category/add-category.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-image {\n  background: url(\"/assets/img/drop-down.png\");\n  min-height: 500px;\n  background-repeat: repeat;\n  padding-top: 12rem; }\n  .add-image .main-head {\n    padding: 10px;\n    margin-bottom: 0px;\n    background: #f83c3c;\n    color: #fff;\n    text-align: left;\n    -webkit-clip-path: polygon(0 0, 55% 0, 70% 100%, 0% 100%);\n            clip-path: polygon(0 0, 55% 0, 70% 100%, 0% 100%);\n    width: 33%; }\n  .add-image .card {\n    padding: 5px 40px;\n    border-radius: 0px; }\n  .add-image .card .card-body .list-group {\n      border: none; }\n  .add-image .card .card-body .block-scroll {\n      overflow-y: scroll;\n      height: 20rem; }\n  .add-image .card .card-body .list-group-item {\n      border: none; }\n"

/***/ }),

/***/ "./src/app/layout/add-category/add-category.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/add-category/add-category.component.ts ***!
  \***************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent() {
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
    };
    AddCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.component.html */ "./src/app/layout/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.scss */ "./src/app/layout/add-category/add-category.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/layout/add-details/add-details.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/add-details/add-details.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pad-50 add-data\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-sm-10 \">\n        <h5 Class=\"main-head text-capitalize\"><i class=\"fa fa-chevron-left mr-2\" aria-hidden=\"true\" routerLink=\"/add-specific\"></i>\n          Basic Details\n        </h5>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <form [formGroup]=\"addForm\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n              <ul class=\"list-group\">\n                <li class=\"list-group-item\">\n                  <div class=\"form-group\"> \n                    <input type=\"text\" class=\"form-control\" formControlName=\"productTitle\" placeholder=\"Listing Title\"\n                      [ngClass]=\"{'form-error':addForm.controls.productTitle.invalid && (submitted || addForm.controls.productTitle.touched)}\">\n                    <p class=\"err\" *ngIf=\"addForm.controls['productTitle'].errors?.required && (submitted || addForm.controls['productTitle'].touched)\">Enter\n                      Product Name</p>\n                  </div>\n                </li>\n                <li class=\"list-group-item\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"productCost\" placeholder=\"Price\" [ngClass]=\"{'form-error':addForm.controls.productCost.invalid && (submitted || addForm.controls.productCost.touched)}\">\n                    <p class=\"err\" *ngIf=\"addForm.controls['productCost'].errors?.required && (submitted || addForm.controls['productCost'].touched )\">Enter\n                      Cost of the produxt</p>\n                  </div>\n                </li>\n                <li class=\"list-group-item\">\n                  <h5>Item Condition</h5>\n                  <label class=\"form-check-label\" for=\"gridradio\">New</label>\n                  <input class=\"\" type=\"radio\" id=\"gridradio\">\n                </li>\n                <li class=\"list-group-item mt-3\">\n                  <label class=\"form-check-label\" for=\"gridradio1\">Used</label>\n                  <input class=\"\" type=\"radio\" id=\"gridradio1\">\n                </li>\n                <li class=\"list-group-item mt-3\">\n                  <h5>Meet Up Delivery</h5>\n                  <label class=\"form-check-label\" for=\"gridCheck\">Meet Up</label>\n                  <input class=\"\" type=\"checkbox\" id=\"gridCheck\">\n                </li>\n                <li class=\"list-group-item mt-3\">\n                  <label class=\"form-check-label\" for=\"gridCheck1\">Mailing and Delivery</label>\n                  <input class=\"\" type=\"checkbox\" id=\"gridCheck1\">\n                </li>\n                <li class=\"list-group-item mt-3\">\n                  <h5><small>Reduce buyer questions by sharing more meet-up and delivery information</small><br>Description</h5>\n                  <textarea class=\"form-control\" cols=\"5\" rows=\"5\" formControlName=\"productDescription\" [ngClass]=\"{'form-error':addForm.controls.productDescription.invalid && (submitted || addForm.controls.productDescription.touched)}\"></textarea>\n                  <p class=\"err\" *ngIf=\"addForm.controls['productDescription'].errors?.required && (submitted || addForm.controls['productDescription'].touched )\">Enter\n                    Product Description</p>\n                </li>\n              </ul>\n              <div class=\"form-group mt-3\">\n                <button class=\"btn btn-primary btn-block\">Add List</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/layout/add-details/add-details.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/add-details/add-details.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-data {\n  background: url(\"/assets/img/drop-down.png\");\n  min-height: 500px;\n  background-repeat: repeat;\n  padding-top: 12rem; }\n  .add-data .main-head {\n    padding: 10px;\n    margin-bottom: 0px;\n    background: #f83c3c;\n    color: #fff;\n    text-align: left;\n    -webkit-clip-path: polygon(0 0, 55% 0, 70% 100%, 0% 100%);\n            clip-path: polygon(0 0, 55% 0, 70% 100%, 0% 100%);\n    width: 33%; }\n  .add-data .card {\n    padding: 5px 40px;\n    border-radius: 0px;\n    box-shadow: 2px 2px 10px #b5abab; }\n  .add-data .card .card-body .list-group {\n      border: none; }\n  .add-data .card .card-body .block-scroll {\n      overflow-y: scroll;\n      height: 20rem; }\n  .add-data .card .card-body .list-group-item {\n      border: none;\n      padding: 0px; }\n  .add-data .card .card-body .form-group {\n      margin-bottom: 0px; }\n  .add-data .card .card-body .form-group label {\n        color: #8a8080;\n        font-weight: 600;\n        font-size: 14px; }\n  .add-data .card .card-body .form-group .form-control {\n        border-radius: 0px;\n        padding: 20px 5px;\n        border-bottom: 2px solid #f00; }\n  .add-data .card .card-body .form-group .form-control:focus {\n          box-shadow: none; }\n  h5 {\n  background: #ddd;\n  padding: 15px 5px;\n  color: #807979;\n  font-size: 16px;\n  font-weight: 400; }\n  input[type=\"checkbox\"] {\n  float: right !important; }\n  input[type=\"radio\"] {\n  float: right !important; }\n"

/***/ }),

/***/ "./src/app/layout/add-details/add-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/add-details/add-details.component.ts ***!
  \*************************************************************/
/*! exports provided: AddDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDetailsComponent", function() { return AddDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddDetailsComponent = /** @class */ (function () {
    function AddDetailsComponent(data, builder, router) {
        this.data = data;
        this.builder = builder;
        this.router = router;
        this.submitted = false;
        this.addForm = this.builder.group({
            productCost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            productTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            productDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            // productName: ['', Validators.required]
            // productPostedBy: ['', Validators.required],
            // catid: ['', Validators.required],
            // productAddress: ['', Validators.required],
            // productContactNo: ['', Validators.required],
            // productThunder: ['', Validators.required]
        });
    }
    AddDetailsComponent.prototype.ngOnInit = function () {
        this.getData();
        this.gestList();
    };
    AddDetailsComponent.prototype.getData = function () {
        var _this = this;
        this.data.getDetail().subscribe(function (res) { _this.productlist = res; });
    };
    AddDetailsComponent.prototype.gestList = function () {
        var _this = this;
        this.data.getData().subscribe(function (res) { _this.list = res; });
    };
    AddDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        this.data.postData(this.addForm.value).subscribe(function (res) {
            _this.router.navigateByUrl(_this.returnUrl);
        });
    };
    AddDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-details',
            template: __webpack_require__(/*! ./add-details.component.html */ "./src/app/layout/add-details/add-details.component.html"),
            styles: [__webpack_require__(/*! ./add-details.component.scss */ "./src/app/layout/add-details/add-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddDetailsComponent);
    return AddDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/add-image/add-image.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/add-image/add-image.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pad-50 add-image\">\n  <div class=\"container\">\n    <div class=\"row  justify-content-center\">\n      <div class=\"col-sm-10 \">\n        <h6 class=\"card-heading main-head text-capitalize\"> Choose a Photo</h6>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"row justify-content-center\">\n              <div class=\"col-sm-7\">\n                <div class=\"card set-card\">\n                  <div class=\"fomr-group mb-6\">\n                    <input type=\"file\" (change)=\"onSelected($event)\">\n                  </div>\n                </div>\n                <button type=\"button\" class=\"upload-btn btn btn-primary btn-block mt-3\" (click)=\"onUpload()\" routerLink=\"/add-category\">Upload</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/layout/add-image/add-image.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/add-image/add-image.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-image {\n  background: url(\"/assets/img/drop-down.png\");\n  min-height: 500px;\n  background-repeat: repeat;\n  padding-top: 12rem; }\n  .add-image .card {\n    border-radius: 0px;\n    box-shadow: 2px 2px 10px #b5abab; }\n  .set-card {\n  border: none;\n  border-radius: 0px;\n  box-shadow: none !important; }\n  .main-head {\n  padding: 10px;\n  margin-bottom: 0px;\n  background: #f83c3c;\n  color: #fff;\n  text-align: left;\n  -webkit-clip-path: polygon(0 0, 55% 0, 70% 100%, 0% 100%);\n          clip-path: polygon(0 0, 55% 0, 70% 100%, 0% 100%);\n  width: 33%; }\n  input[type=file] {\n  cursor: pointer;\n  height: 34px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  input[type=file]:before {\n  width: 90px;\n  height: 32px;\n  font-size: 16px;\n  line-height: 32px;\n  content: 'Browse';\n  display: inline-block;\n  background: white;\n  border: 1px solid #000;\n  padding: 0 10px;\n  text-align: center;\n  font-family: Helvetica, Arial, sans-serif; }\n  input[type=file]::-webkit-file-upload-button {\n  visibility: hidden; }\n"

/***/ }),

/***/ "./src/app/layout/add-image/add-image.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/add-image/add-image.component.ts ***!
  \*********************************************************/
/*! exports provided: AddImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImageComponent", function() { return AddImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddImageComponent = /** @class */ (function () {
    function AddImageComponent() {
        this.selectedFile = null;
    }
    AddImageComponent.prototype.onSelected = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(event);
    };
    AddImageComponent.prototype.ngOnInit = function () {
    };
    AddImageComponent.prototype.onUpload = function () {
    };
    AddImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-image',
            template: __webpack_require__(/*! ./add-image.component.html */ "./src/app/layout/add-image/add-image.component.html"),
            styles: [__webpack_require__(/*! ./add-image.component.scss */ "./src/app/layout/add-image/add-image.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddImageComponent);
    return AddImageComponent;
}());



/***/ }),

/***/ "./src/app/layout/add-specific/add-specific.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/add-specific/add-specific.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pad-50 add-image\">\n  <div class=\"container\">\n    <div class=\"row  justify-content-center\">\n      <div class=\"col-sm-10 \">\n        <h6 class=\"card-heading main-head text-capitalize\"><i class=\"fa fa-chevron-left mr-2\" aria-hidden=\"true\"\n            routerLink=\"/add-category\"></i>Bulletin Board</h6>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <form>\n              <div class=\"block-scroll\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\"><a href=\"#\">Announcements</a></li>\n                  <li class=\"list-group-item\"><a href=\"\" routerLink=\"/add-details\">Looking For</a></li>\n                  <li class=\"list-group-item\"><a href=\"#\">#Blessings</a></li>\n                  <li class=\"list-group-item\"><a href=\"#\">PreOrders</a></li>\n                </ul>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/layout/add-specific/add-specific.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/add-specific/add-specific.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-image {\n  background: url(\"/assets/img/drop-down.png\");\n  min-height: 500px;\n  background-repeat: repeat;\n  padding-top: 12rem; }\n  .add-image .main-head {\n    padding: 10px;\n    margin-bottom: 0px;\n    background: #f83c3c;\n    color: #fff;\n    text-align: left;\n    -webkit-clip-path: polygon(0 0, 55% 0, 70% 100%, 0% 100%);\n            clip-path: polygon(0 0, 55% 0, 70% 100%, 0% 100%);\n    width: 33%; }\n  .add-image .card {\n    padding: 5px 40px;\n    border-radius: 0px; }\n  .add-image .card .card-body .list-group {\n      border: none; }\n  .add-image .card .card-body .block-scroll {\n      overflow-y: scroll;\n      height: 20rem; }\n  .add-image .card .card-body .list-group-item {\n      border: none; }\n"

/***/ }),

/***/ "./src/app/layout/add-specific/add-specific.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/add-specific/add-specific.component.ts ***!
  \***************************************************************/
/*! exports provided: AddSpecificComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSpecificComponent", function() { return AddSpecificComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddSpecificComponent = /** @class */ (function () {
    function AddSpecificComponent() {
    }
    AddSpecificComponent.prototype.ngOnInit = function () {
    };
    AddSpecificComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-specific',
            template: __webpack_require__(/*! ./add-specific.component.html */ "./src/app/layout/add-specific/add-specific.component.html"),
            styles: [__webpack_require__(/*! ./add-specific.component.scss */ "./src/app/layout/add-specific/add-specific.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddSpecificComponent);
    return AddSpecificComponent;
}());



/***/ }),

/***/ "./src/app/layout/category-detail/category-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/category-detail/category-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  -->\n<div class=\"category-detail\">\n  <div class=\"container\">\n    <section class=\"pad-30\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\">\n                <a routerLink=\"/\">\n                  <i class=\"fa fa-home mr-2\" aria-hidden=\"true\"></i>Home</a>\n              </li>\n              <li class=\"breadcrumb-item\">\n                <a routerLink=\"/category-list\">Category Listing</a>\n              </li>\n              <li class=\"breadcrumb-item active\" aria-current=\"page\">Produt Detail</li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n        </div>\n        <!-- *ngFor=\"let data of productdetail\" -->\n        <div class=\"col-sm-6\">\n          <div class=\"card common-card\">\n            <h4 class=\"card-title ml-2\">{{productdetail.productName}}</h4>\n            <div class=\"card-body\">\n              <!--  -->\n              <div class=\"show-right3\">\n                <ngb-tabset type=\"pills\">\n                  <ngb-tab>\n                    <ng-template ngbTabTitle>\n                      <p calss=\"text-muted\"> <i class=\"fa fa-heart-o fa-1x mr-2\" aria-hidden=\"true\"></i>\n                        Like</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab>\n                    <ng-template ngbTabTitle>\n                      <p calss=\"text-muted\"><i class=\"fa fa-comments-o fa-1x mr-2\" aria-hidden=\"true\" ></i>Chat</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab>\n                    <ng-template ngbTabTitle>\n                      <p calss=\"text-muted\"><i class=\"fa fa-dollar fa-1x mr-2\" aria-hidden=\"true\"></i>Make Offer</p>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n              </div>\n              <!--  -->\n              <ul class=\"list-group detail-list ml-2\">\n                <li class=\"list-group-item\">\n                  <i class=\"fa fa-bolt fa-set\" aria-hidden=\"true\"></i>{{productdetail.productThunder}}\n                </li>\n                <li class=\"list-group-item\">\n                  <i class=\"fa fa-usd fa-set\" aria-hidden=\"true\"></i> ${{productdetail.productCost}}</li>\n                <li class=\"list-group-item\">\n                  <i class=\"fa fa-heart fa-set\" aria-hidden=\"true\"></i>{{productdetail.productLikes}}</li>\n                <li class=\"list-group-item\">\n                  <i class=\"fa fa-exclamation fa-set\" aria-hidden=\"true\"></i> In Condos & ECs\n                </li>\n                <li class=\"list-group-item\">\n                  <i class=\"fa fa-bars fa-set\" aria-hidden=\"true\"></i>\n                  {{productdetail.productDescription}}\n                  <a href=\"#\">Read More</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <!--  -->\n        <div class=\"col-sm-6\">\n          <div class=\"card set-card2 mt-2 mb-2\">\n            <div class=\"card-body\">\n              <h6>Share This Listing</h6>\n              <ul class=\"list-inline\">\n                <li class=\"list-inline-item\">\n                  <button type=\"submit\" class=\"btn btn-primary  bt-fb\"> <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                    </button>\n                </li>\n                <li class=\"list-inline-item\">\n                  <button type=\"submit\" class=\"btn btn-primary  bt-gog\"> <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n                    </button>\n                </li>\n                <li class=\"list-inline-item\">\n                  <button type=\"submit\" class=\"btn btn-primary  bt-tw\"> <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                    </button>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <!--  -->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"card set-card\">\n                <div class=\"card-body\">\n                  <h6>Public Comments</h6>\n                  <textarea class=\"form-control\" cols=\"6\" rows=\"5\"></textarea>\n                  <button type=\"button\" class=\"btn btn-primary mt-2  btn-block chng\">Post a New Comment</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"card set-card mt-3\">\n                <div class=\"card-body\">\n                  <div class=\"media\">\n                    <img class=\"mr-3\" src=\"./assets/img/user-img.png\" alt=\"Generic placeholder image\">\n                    <div class=\"media-body\">\n                      <h6 class=\"mt-0\">Jason Stalin</h6>\n                      <h6 class=\"m-0 text-primary\">Jason@Singapore.in </h6>\n                      <p class=\"m-0\">Joined 3years Ago\n                        <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                      </p>\n                      <p class=\"mt-0 text-primary\">Verified\n                        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                      </p>\n                    </div>\n                  </div>\n                  <!--  -->\n                  <form>\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control \" placeholder=\"Name\">\n                    </div>\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control \" placeholder=\"Phone\">\n                    </div>\n                    <div class=\"form-group\">\n                      <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary btn-block chng\">Submit</button>\n                  </form>\n                  <!--  -->\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--  -->\n        </div>\n        <!--start:Car Details  -->\n        <div class=\"col-sm-6\">\n          <div class=\"card set-card\">\n            <div class=\"card-body\">\n              <ul class=\"list-unstyled\">\n                <h5 class=\"text-muted \">Car Details</h5>\n                <li class=\"list-items\">\n                  <h6 class=\"text-muted \"> Immediate Registration </h6>\n                  <p>Yes</p>\n                  <h6 class=\"text-muted \">Engine Capacity (cc)</h6>\n                  <p> 1600cc</p>\n                  <h6 class=\"text-muted \">Transmission</h6>\n                  <p>Auto</p>\n                  <h6 class=\"text-muted \">Max Power Output</h6>\n                  <p>0bhp</p>\n                  <h6 class=\"text-muted \">Primary Color</h6>\n                  <p>Red</p>\n                  <h6 class=\"text-muted \">Manufactured Year </h6>\n                  <p>2018</p>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row pt-2\">\n            <div class=\"col-sm-12\">\n              <div class=\"card set-card\">\n\n                <div class=\"card-body\">\n                  <div calss=\"card-heading\">Location</div>\n                  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                  </agm-map>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--End:Car Details  -->\n        <!--start:Car Details  -->\n        <div class=\"col-sm-6\">\n\n        </div>\n        <!--End:Car Details  -->\n      </div>\n    </section>\n  </div>\n</div>\n<!--  -->"

/***/ }),

/***/ "./src/app/layout/category-detail/category-detail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/category-detail/category-detail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 200px; }\n\n.category-detail {\n  background: #f7f7f7;\n  padding-top: 115px; }\n\n.category-detail .detail-list .list-group-item {\n    padding: 10px 0px;\n    border: none; }\n\n.category-detail .detail-list .list-group-item .fa-set {\n      padding: 6px;\n      border-radius: 50%;\n      color: #b7aaaa;\n      height: 30px;\n      width: 30px;\n      text-align: center;\n      font-size: 16px;\n      margin-right: 10px; }\n\n.category-detail .common-card {\n    border-radius: 0px;\n    border: none;\n    min-height: 400px;\n    box-shadow: 2px 2px 15px #b9b6b6; }\n\n.category-detail .common-card .card-body {\n      padding: 0px; }\n\n.category-detail .common-card .card-title {\n      padding: 15px 10px;\n      margin-bottom: 0px;\n      background: #fff;\n      color: #353535;\n      font-size: 22px; }\n\n.category-detail .sec-card {\n    border: none;\n    box-shadow: 2px 2px 15px #b9b6b6;\n    min-height: 358px;\n    border-radius: 0px; }\n\n.category-detail .sec-card .card-body {\n      padding: 5px !important; }\n\n.category-detail .sec-card .card-body .fa-set {\n        border: 2px solid #f83c3c;\n        padding: 3px;\n        border: none;\n        color: #f83c3c;\n        text-align: center;\n        font-size: 15px;\n        margin-right: 10px; }\n\n.category-detail .breadcrumb {\n    background: transparent;\n    padding: 5px; }\n\n.category-detail .breadcrumb a {\n      color: #7d7d84;\n      font-weight: 700; }\n\n.category-detail .breadcrumb a:hover,\n      .category-detail .breadcrumb a :focus,\n      .category-detail .breadcrumb a :active {\n        color: #f43a3a;\n        font-weight: 700;\n        text-decoration: none; }\n\n.unit-table th,\n.table td {\n  padding: 15px;\n  vertical-align: top;\n  border-top: 1px solid transparent; }\n\n.unit-table th th,\n  .table td th {\n    width: 215px !important; }\n\n.red-btn {\n  padding: 5px; }\n\n.set-card {\n  min-height: 175px; }\n\n.set-card .card-body {\n    padding: 15px; }\n\n.set-card2 {\n  min-height: 70px; }\n\n.product-data .card {\n  border-radius: 5px;\n  height: 290px;\n  margin: 10px 5px;\n  box-shadow: 1px 1px 5px #cccbcb;\n  transition: .5s; }\n\n.product-data .card .card-img-top {\n    height: 215px; }\n\n.product-data .card .badge-secondary {\n    color: #fff;\n    background-color: #000000;\n    padding: 5px 10px;\n    margin: 10px 5px;\n    float: right;\n    border-radius: 15px;\n    font-size: 14px;\n    position: absolute;\n    text-align: right;\n    right: 0px;\n    z-index: 99; }\n\n.product-data .card .badge-secondary .fa {\n      color: #f83c3c; }\n\n.product-data .card .set-pos {\n    position: absolute;\n    top: 0px; }\n\n.product-data .card .set-pos .heading {\n      font-size: 12px;\n      margin: 5px;\n      color: white;\n      cursor: pointer; }\n\n.product-data .card .set-pos .content {\n      font-size: 12px;\n      margin: 10px 5px;\n      color: white;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      width: 170px;\n      white-space: nowrap; }\n\n.product-data .card .card-body {\n    padding: 5px; }\n\n.product-data .card .card-body .fa-set {\n      border: 2px solid #dc3545;\n      padding: 7px;\n      border-radius: 50%;\n      color: #dc3545;\n      height: 30px;\n      width: 30px;\n      text-align: center; }\n\n.product-data .card .image {\n    background-color: #000000f0;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px; }\n\n.product-data .card .item {\n    position: absolute;\n    right: 10px;\n    width: 60px;\n    bottom: 75px;\n    border: 3px solid #fff;\n    border-radius: 50%; }\n\n.product-data .card .make {\n    padding: 5px 0px !important;\n    color: #dc3545 !important;\n    font-weight: 600 !important;\n    margin: 10px 5px !important;\n    font-size: 18px !important; }\n\n.product-data .card .value {\n    color: orange;\n    font-weight: bolder; }\n\n.product-data .card:hover {\n    box-shadow: 1px 1px 10px #908c8c; }\n\n.product-data .card .description {\n    font-weight: 400 !important;\n    font-size: 12px !important;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 205px;\n    overflow: hidden;\n    margin: 5px;\n    color: #585757 !important; }\n\n.set-block {\n  background: #e61a1a;\n  color: #ffff;\n  border-radius: 0px;\n  padding: 3px;\n  border: 1px solid #e61a1a; }\n\n.set-block:hover,\n  .set-block :focus,\n  .set-block :active {\n    background: transparent;\n    color: #e61a1a;\n    outline: none !important;\n    box-shadow: none;\n    border: 1px solid #e61a1a; }\n\n.set-control {\n  border-radius: 0px; }\n\n.hovereffectd {\n  width: 100%;\n  height: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: pointer; }\n\n.hovereffectd .overlayd {\n  width: 100%;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: auto;\n  bottom: 0;\n  padding: 40px 5px;\n  height: 215px;\n  text-align: left;\n  background: #000000cf;\n  color: #fff;\n  transition: -webkit-transform 0.35s;\n  transition: transform 0.35s;\n  transition: transform 0.35s, -webkit-transform 0.35s;\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n\n.hovereffectd .get-img {\n  display: block;\n  position: relative;\n  transition: -webkit-transform 0.35s;\n  transition: transform 0.35s;\n  transition: transform 0.35s, -webkit-transform 0.35s; }\n\n.hovereffectd:hover .get-img {\n  -webkit-transform: translate3d(0, -10%, 0);\n  transform: translate3d(0, -10%, 0); }\n\n.hovereffectd a.info {\n  text-decoration: none;\n  padding: 7px 14px;\n  text-transform: uppercase;\n  color: #fff;\n  border: 1px solid #fff;\n  margin: 50px 0 0 0;\n  background-color: transparent; }\n\n.hovereffectd a.info:hover {\n  box-shadow: 0 0 5px #fff; }\n\n.hovereffectd p.icon-links a {\n  float: left;\n  color: #fff !important;\n  font-size: 1.4em; }\n\n.hovereffectd p.icon-links a {\n  transition: -webkit-transform 0.35s;\n  transition: transform 0.35s;\n  transition: transform 0.35s, -webkit-transform 0.35s;\n  -webkit-transform: translate3d(0, 200%, 0);\n  transform: translate3d(0, 200%, 0);\n  visibility: visible; }\n\n.hovereffectd p.icon-links a span:before {\n  display: inline-block;\n  padding: 8px 10px;\n  speak: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.hovereffectd:hover .overlayd,\n.hovereffectd:hover p.icon-links a {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.hovereffectd:hover p.icon-links a:nth-child(3) {\n  transition-delay: 0.1s; }\n\n.hovereffectd:hover p.icon-links a:nth-child(2) {\n  transition-delay: 0.15s; }\n\n.hovereffectd:hover p.icon-links a:first-child {\n  transition-delay: 0.2s; }\n\n.bt-fb {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  font-size: 23px;\n  text-align: center;\n  margin: 0px auto; }\n\n.bt-gog {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  font-size: 23px;\n  text-align: center;\n  margin: 0px auto; }\n\n.bt-tw {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  font-size: 23px;\n  text-align: center;\n  margin: 0px auto; }\n\n.chng {\n  background-color: #33a0e8 !important; }\n"

/***/ }),

/***/ "./src/app/layout/category-detail/category-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/category-detail/category-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function() { return CategoryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryDetailComponent = /** @class */ (function () {
    function CategoryDetailComponent(data) {
        this.data = data;
    }
    CategoryDetailComponent.prototype.ngOnInit = function () {
        this.getDetails();
        this.galleryOptions = [
            {
                width: "100%",
                height: "400px",
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: "100%",
                height: "600px",
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [
            {
                small: "assets/img/lr.jpg",
                medium: "assets/img/lr.jpg",
                big: "assets/img/lr.jpg"
            },
            {
                small: "assets/img/lr2.jpg",
                medium: "assets/img/lr2.jpg",
                big: "assets/img/lr2.jpg"
            },
            {
                small: "assets/img/lr3.jpg",
                medium: "assets/img/lr3.jpg",
                big: "assets/img/lr3.jpg"
            },
            {
                small: "assets/img/lr2.jpg",
                medium: "assets/img/lr2.jpg",
                big: "assets/img/lr2.jpg"
            },
            {
                small: "assets/img/lr.jpg",
                medium: "assets/img/lr.jpg",
                big: "assets/img/lr.jpg"
            }
        ];
    };
    CategoryDetailComponent.prototype.getDetails = function () {
        var _this = this;
        this.data.getParticular().subscribe(function (res) { _this.productdetail = res; });
    };
    CategoryDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-category-detail",
            template: __webpack_require__(/*! ./category-detail.component.html */ "./src/app/layout/category-detail/category-detail.component.html"),
            styles: [__webpack_require__(/*! ./category-detail.component.scss */ "./src/app/layout/category-detail/category-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CategoryDetailComponent);
    return CategoryDetailComponent;
}());



/***/ }),

/***/ "./src/app/layout/category-list/category-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/category-list/category-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  -->\n<div class=\"category-background\">\n  <section class=\"pad-25 category-list\">\n    <div class=\"category-head\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <nav aria-label=\"breadcrumb\">\n              <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">\n                  <a routerLink=\"/\">\n                    <i class=\"fa fa-home mr-2\" aria-hidden=\"true\"></i>Home</a>\n                </li>\n                <li class=\"breadcrumb-item\" aria-current=\"page\">\n                  <a routerLink=\"/category-list\">Category Listing</a>\n                </li>\n              </ol>\n            </nav>\n          </div>\n          <div class=\"col-sm-6\">\n            <div>\n              \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-2 pr-0\">\n          <div id=\"filter-set\">\n            <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0,ngb-panel-1,ngb-panel-2,ngb-panel-3,ngb-panel-4,ngb-panel-5,ngb-panel-6\">\n              <ngb-panel title=\"\">\n                <ng-template ngbPanelTitle>\n                  <h5 class=\"text-uppercase\">SORT</h5>\n                </ng-template>\n                <ng-template ngbPanelContent>\n                  <ul class=\"list-group\">\n                    <li class=\"list-group-item\">\n                      <label class=\"form-check-label mr-1\" for=\"set1\">Popular</label>\n                      <input type=\"radio\" aria-label=\"\" id=\"set1\">\n                    </li>\n                    <li class=\"list-group-item\">\n                      <label class=\"form-check-label mr-1\" for=\"set2\">Recent</label>\n                      <input type=\"radio\" aria-label=\"\">\n                    </li>\n                    <li class=\"list-group-item\">\n                      <label class=\"form-check-label mr-1\" for=\"set3\">Price - High To Low</label>\n                      <input type=\"radio\" aria-label=\"\">\n                    </li>\n                    <li class=\"list-group-item\">\n                      <label class=\"form-check-label mr-1\" for=\"set4\">Price - Low To High </label>\n                      <input type=\"radio\" aria-label=\"\">\n                    </li>\n                    <li class=\"list-group-item\">\n                      <label class=\"form-check-label mr-1\" for=\"set5\">Reg Year - Latest</label>\n                      <input type=\"radio\" aria-label=\"\">\n                    </li>\n                  </ul>\n                </ng-template>\n              </ngb-panel>\n              <ngb-panel>\n                <ng-template ngbPanelTitle>\n                  <h5 class=\"text-uppercase\">DEPRECIATION</h5>\n                </ng-template>\n                <ng-template ngbPanelContent>\n                  <ul class=\"list-group\">\n                    <li class=\"list-group-item\">\n                      <label class=\"form-check-label mr-1\" for=\"\">Car Type</label>\n                      <input type=\"radio\" aria-label=\"\">\n                    </li>\n                    <li class=\"list-group-item\">\n                      <label class=\"form-check-label mr-1\" for=\"\">Options</label>\n                      <input type=\"radio\" aria-label=\"\">\n                    </li>\n                  </ul>\n                </ng-template>\n              </ngb-panel>\n              <ngb-panel>\n                <ng-template ngbPanelTitle>\n                  <h5 class=\"text-uppercase\">PRICE</h5>\n                </ng-template>\n                <ng-template ngbPanelContent>\n                  <form class=\"for-pad\">\n                    <div class=\"row\">\n                      <div class=\"col input-group-sm\">\n                        <input type=\"text\" class=\"form-control set-control\" placeholder=\"Min\">\n                      </div>\n                      <div class=\"col input-group-sm\">\n                        <input type=\"text\" class=\"form-control set-control\" placeholder=\"Max\">\n                      </div>\n                    </div>\n                  </form>\n                </ng-template>\n              </ngb-panel>\n              <ngb-panel>\n                <ng-template ngbPanelTitle>\n                  <h5 class=\"text-uppercase\">GEARBOX</h5>\n                </ng-template>\n                <ng-template ngbPanelContent>\n                  <ul class=\"list-group\">\n                    <li class=\"list-group-item\">\n                      <label class=\"form-check-label mr-1\" for=\"man\">Manual</label>\n                      <input type=\"checkbox\" aria-label=\"\" id=\"man\">\n                    </li>\n                    <li class=\"list-group-item\">\n                      <label class=\"form-check-label mr-1\" for=\"auto\">Automatic</label>\n                      <input type=\"checkbox\" aria-label=\"\" id=\"auto\">\n                    </li>\n                  </ul>\n                </ng-template>\n              </ngb-panel>\n              <ngb-panel>\n                <ng-template ngbPanelTitle>\n                  <h5 class=\"text-uppercase\">INSTALLMENT</h5>\n                </ng-template>\n                <ng-template ngbPanelContent>\n                  <form class=\"for-pad\">\n                    <select class=\"custom-select set-control\" id=\"inputGroupSelect01\">\n                      <option selected>Min Instalment</option>\n                    </select>\n                  </form>\n                  <form class=\"for-pad\">\n                    <select class=\"custom-select set-control\" id=\"inputGroupSelect01\">\n                      <option selected>Max Instalment</option>\n                    </select>\n                  </form>\n                </ng-template>\n              </ngb-panel>\n              <ngb-panel>\n                <ng-template ngbPanelTitle>\n                  <h5 class=\"text-uppercase\">REG. YEAR</h5>\n                </ng-template>\n                <ng-template ngbPanelContent>\n                  <form class=\"for-pad\">\n                    <select class=\"custom-select set-control\" id=\"inputGroupSelect01\">\n                      <option selected>Choose...</option>\n                      <option value=\"1\">2018</option>\n                      <option value=\"1\">2016</option>\n                      <option value=\"1\">2015</option>\n                      <option value=\"2\">2014</option>\n                      <option value=\"3\">2013</option>\n                      <option value=\"3\">2012</option>\n                      <option value=\"3\">2011</option>\n                      <option value=\"3\">2010</option>\n                    </select>\n                  </form>\n                </ng-template>\n              </ngb-panel>\n              <ngb-panel>\n                <ng-template ngbPanelTitle>\n                  <h5 class=\"text-uppercase\">MILEAGE</h5>\n                </ng-template>\n                <ng-template ngbPanelContent>\n                  <form class=\"for-pad\">\n                    <select class=\"custom-select set-control\" id=\"inputGroupSelect01\">\n                      <option selected>Min Milage</option>\n                      <option value=\"1\">200 km</option>\n                      <option value=\"1\">300 km</option>\n                    </select>\n                  </form>\n                  <form class=\"for-pad\">\n                    <select class=\"custom-select set-control\" id=\"inputGroupSelect01\">\n                      <option selected>Max Milage</option>\n                      <option value=\"1\">3600 km</option>\n                      <option value=\"1\">4567 km</option>\n                    </select>\n                  </form>\n                </ng-template>\n              </ngb-panel>\n\n            </ngb-accordion>\n          </div>\n        </div>\n        <div class=\"col-md-10\">\n          <div class=\"card set-pad\">\n            <div class=\"card-body p-2\">\n              <!--  -->\n              <div class=\"for-space pt-3\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <p class=\"result mb-0 ml-2\">\n                      <a href=\"#\" class=\"search-result\">162 results found</a>\n                    </p>\n                  </div>\n                  <div class=\"col-md-3 text-right\">\n                    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                      <label class=\"btn btn-primary active btn-sm\" routerLink=\"/category-list\">\n                        <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked>\n                        <i class=\"fa fa-th mr-1\" aria-hidden=\"true\"></i> List\n                      </label>\n                      <label class=\"btn btn-primary btn-sm\" routerLink=\"/category-map\">\n                        <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\">\n                        <i class=\"fa fa-map mr-1\" aria-hidden=\"true\"></i> Map\n                      </label>\n                      <!-- <label class=\"btn btn-primary btn-sm\"> -->\n                      <!-- <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\" -->\n                      <!-- routerLink=\"/add-details\"><i class=\"fa fa-plus mr-1\" aria-hidden=\"true\"></i> -->\n                      <!-- Add Product -->\n                      <!-- </label> -->\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <select class=\"form-control set-control\">\n                      <option selected>Relevance</option>\n                      <option value=\"1\">New List</option>\n                      <option value=\"2\">Medium List</option>\n                      <option value=\"3\">Order List</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <ul class=\"list-inline product-data\">\n                <li class=\"list-inline-item mr-0\" *ngFor=\"let data of productlist\">\n                  <div class=\"card\" routerLink=\"/category-detail\">\n                    <div class=\"image hovereffect\">\n                      <span class=\"badge badge-pill badge-danger ml-2 thunder-badge\">\n                        <i class=\"fa fa-bolt mr-2\" aria-hidden=\"true\"></i>\n                        {{data.productThunder}}</span>\n                      <span class=\"badge badge-secondary\">\n                        <i class=\"fa fa-heart set-hov\" aria-hidden=\"true\"></i>\n                        {{data.productLikes}}\n                      </span>\n                      <img class=\"card-img-top\" src=\"./assets/img/car.png\" alt=\"Card image cap\">\n                      <div class=\"set-pos overlay\">\n                      \n                        <h6 class=\"content\">\n                          <i class=\"fa fa-map-marker mr-2\" aria-hidden=\"true\"></i>{{data.productAddress}}</h6>\n                        <h6 class=\"content mt-2\">\n                          <i class=\"fa fa-phone mr-2\" aria-hidden=\"true\"></i>{{data.productContactNo}}</h6>\n\n                      </div>\n                    </div>\n                    <div class=\"user-img\">\n                      <img src=\"./assets/img/user-img.png\" class=\"item\">\n                    </div>\n                    <div class=\"card-body\">\n                      <ul class=\"list-inline set-inline\">\n                            <h6 class=\"heading\">{{data.productTitle}}</h6>\n                        <h6 class=\"make m-0\"> {{data.productName}}</h6>\n                        <h6 class=\"make m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>25,600</h6>\n                        <p class=\"description\">Powerfull and fuel efficient at 2.0 Liter</p>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n\n              </ul>\n              <div class=\"custom-pagination\">\n                <div class=\"row justify-content-md-center\">\n                  <div class=\"col-md-auto\">\n                    <button type=\"button\" class=\"btn btn-outline-secondary btn-sm deft-btn mr-4\">Prev</button>\n                    <button type=\"button\" class=\"btn btn-outline-primary btn-sm deft-btn\">Next</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--  -->\n          </div>\n        </div>\n      </div>\n      <!-- <button ngx-scroll-to [ngx-scroll-to-offset]=\"600\">up -->\n      <!-- </button> -->\n    </div>\n  </section>\n\n</div>\n\n<!--  -->"

/***/ }),

/***/ "./src/app/layout/category-list/category-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/category-list/category-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-background {\n  background-color: #f2f2f2; }\n\n.category-head {\n  padding: 55px 0px 5px !important; }\n\n.category-list {\n  padding: 100px 0px; }\n\n#filter-set .accordion .card:first-of-type {\n  border-radius: 0px !important; }\n\n.category-list .cat-product {\n  border-radius: 0px; }\n\n.category-list .product-data .card {\n  border-radius: 5px;\n  height: 265px;\n  width: 215px;\n  margin: 10px 5px;\n  box-shadow: 1px 1px 5px #cccbcb;\n  transition: .5s; }\n\n.category-list .product-data .card .card-img-top {\n    height: 210px; }\n\n.category-list .product-data .card .badge-secondary {\n    color: #000;\n    background-color: transparent;\n    padding: 5px 10px;\n    margin: 10px 5px;\n    float: right;\n    border-radius: 15px;\n    font-size: 14px;\n    position: absolute;\n    text-align: right;\n    right: 0px;\n    z-index: 99; }\n\n.category-list .product-data .card .badge-secondary:hover {\n      color: #fff; }\n\n.category-list .product-data .card .badge-secondary .fa {\n      color: #d2232a; }\n\n.category-list .product-data .card .badge-secondary .fa:hover {\n        color: #fff; }\n\n.category-list .product-data .card .thunder-badge {\n    position: absolute;\n    left: 0px;\n    z-index: 9;\n    margin: 10px 5px;\n    padding: 2px 5px;\n    background: transparent;\n    color: #d2232a; }\n\n.category-list .product-data .card .set-pos {\n    position: absolute;\n    top: 0px; }\n\n.category-list .product-data .card .set-pos .content {\n      font-size: 12px;\n      margin: 10px 5px;\n      color: white;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      width: 170px;\n      white-space: nowrap; }\n\n.category-list .product-data .card .card-body {\n    padding: 10px 5px; }\n\n.category-list .product-data .card .card-body .fa-set {\n      border: 2px solid #dc3545;\n      padding: 7px;\n      border-radius: 50%;\n      color: #dc3545;\n      height: 30px;\n      width: 30px;\n      text-align: center; }\n\n.category-list .product-data .card .card-body .set-inline p {\n      font-size: 13px;\n      font-weight: 700;\n      color: #b3b1b1; }\n\n.category-list .product-data .card .image {\n    background-color: #000000f0;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px; }\n\n.category-list .product-data .card .item {\n    position: absolute;\n    right: 5px;\n    width: 50px;\n    top: 50%;\n    border: 3px solid #fff;\n    border-radius: 50%; }\n\n.category-list .product-data .card .make {\n    color: #253773 !important;\n    font-weight: 500 !important;\n    margin: 5px !important;\n    font-size: 12px !important;\n    width: 97%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.category-list .product-data .card .value {\n    color: orange;\n    font-weight: bolder; }\n\n.category-list .product-data .card:hover {\n    box-shadow: 1px 1px 10px #908c8c;\n    outline: none; }\n\n.category-list .product-data .description {\n  font-weight: 400 !important;\n  font-size: 12px !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 180px;\n  overflow: hidden;\n  margin: 5px;\n  color: #585757 !important; }\n\n.category-list .product-data .heading {\n  color: #dc3545;\n  font-weight: 600;\n  margin: 5px;\n  font-size: 12px;\n  outline: none !important;\n  width: 75%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.category-list .set-pad {\n  border-radius: 0px; }\n\n.category-list .set-control {\n  height: 30px;\n  padding: 2px 5px; }\n\n.category-list .search-result {\n  color: #000000;\n  font-size: 14px; }\n\n.category-list .search-result:hover {\n    text-decoration: none; }\n\n.category-list .btn-group .btn-primary {\n  background-color: #878787;\n  border: none; }\n\n.category-list .btn-group .btn-primary:hover {\n    background-color: #878787; }\n\n.breadcrumb {\n  background: transparent;\n  padding: 5px; }\n\n.breadcrumb a {\n    color: #7d7d84;\n    font-weight: 700; }\n\n.breadcrumb a:hover,\n    .breadcrumb a :focus,\n    .breadcrumb a :active {\n      color: #f43a3a;\n      font-weight: 700;\n      text-decoration: none; }\n\n.hovereffect {\n  width: 100%;\n  height: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: pointer; }\n\n.hovereffect .overlay {\n  width: 100%;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: auto;\n  bottom: 0;\n  padding: 40px 5px;\n  height: 240px;\n  background: #000000cf;\n  color: #fff;\n  transition: -webkit-transform 0.35s;\n  transition: transform 0.35s;\n  transition: transform 0.35s, -webkit-transform 0.35s;\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n\n.hovereffect img {\n  display: block;\n  position: relative;\n  transition: -webkit-transform 0.35s;\n  transition: transform 0.35s;\n  transition: transform 0.35s, -webkit-transform 0.35s; }\n\n.hovereffect:hover img {\n  -webkit-transform: translate3d(0, -10%, 0);\n  transform: translate3d(0, -10%, 0); }\n\n.hovereffect a.info {\n  text-decoration: none;\n  padding: 7px 14px;\n  text-transform: uppercase;\n  color: #fff;\n  border: 1px solid #fff;\n  margin: 50px 0 0 0;\n  background-color: transparent; }\n\n.hovereffect a.info:hover {\n  box-shadow: 0 0 5px #fff; }\n\n.hovereffect:hover > .thunder-badge {\n  color: #fff !important; }\n\n.hovereffect:hover > .badge-secondary {\n  color: #fff !important; }\n\n.hovereffect p.icon-links a {\n  float: left;\n  color: #fff !important;\n  font-size: 1.4em; }\n\n.hovereffect p.icon-links a {\n  transition: -webkit-transform 0.35s;\n  transition: transform 0.35s;\n  transition: transform 0.35s, -webkit-transform 0.35s;\n  -webkit-transform: translate3d(0, 200%, 0);\n  transform: translate3d(0, 200%, 0);\n  visibility: visible; }\n\n.hovereffect p.icon-links a span:before {\n  display: inline-block;\n  padding: 8px 10px;\n  speak: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.hovereffect:hover .overlay,\n.hovereffect:hover p.icon-links a {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.hovereffect:hover p.icon-links a:nth-child(3) {\n  transition-delay: 0.1s; }\n\n.hovereffect:hover p.icon-links a:nth-child(2) {\n  transition-delay: 0.15s; }\n\n.hovereffect:hover p.icon-links a:first-child {\n  transition-delay: 0.2s; }\n\n.set-add {\n  color: #e83435;\n  float: right;\n  font-size: 20px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/layout/category-list/category-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/category-list/category-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.getProd();
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    CategoryListComponent.prototype.getProd = function () {
        var _this = this;
        this.data.getDetail().subscribe(function (res) { _this.productlist = res; });
    };
    CategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/app/layout/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.scss */ "./src/app/layout/category-list/category-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/layout/category-map/category-map.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/category-map/category-map.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"\">\n  <div class=\"category-map\">\n    <div class=\"filter-set\">\n      <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item \">\n              <select class=\"form-control mr-sm-2\">\n                <option class=\"nav-link\">For sale</option>\n                <option value=\"saab\">Saab</option>\n                <option value=\"opel\">Opel</option>\n                <option value=\"audi\">Audi</option>\n              </select>\n            </li>\n            <li class=\"nav-item\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search By Location,address\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\" id=\"basic-addon2\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n              </div>\n            </li>\n            <li class=\"nav-item \">\n              <select class=\"form-control mr-sm-2\">\n                <option class=\"nav-link\">Price range</option>\n                <option value=\"saab\">Saab</option>\n                <option value=\"opel\">Opel</option>\n                <option value=\"audi\">Audi</option>\n              </select>\n            </li>\n            <li class=\"nav-item \">\n              <select class=\"form-control mr-sm-2\">\n                <option class=\"nav-link\">Property Type</option>\n                <option value=\"saab\">Saab</option>\n                <option value=\"opel\">Opel</option>\n                <option value=\"audi\">Audi</option>\n              </select>\n            </li>\n            <li class=\"nav-item \">\n              <select class=\"form-control mr-sm-2\">\n                <option class=\"nav-link\">Bedrooms</option>\n                <option value=\"saab\">Saab</option>\n                <option value=\"opel\">Opel</option>\n                <option value=\"audi\">Audi</option>\n              </select>\n            </li>\n            <li class=\"nav-item \">\n              <select class=\"form-control mr-sm-2\">\n                <option class=\"nav-link\">Floor Area</option>\n                <option value=\"saab\">Saab</option>\n                <option value=\"opel\">Opel</option>\n                <option value=\"audi\">Audi</option>\n              </select>\n            </li>\n            <li class=\"nav-item \">\n              <select class=\"form-control mr-sm-2\">\n                <option class=\"nav-link\">More Filters</option>\n                <option value=\"saab\">Saab</option>\n                <option value=\"opel\">Opel</option>\n                <option value=\"audi\">Audi</option>\n              </select>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n    <div class=\"search-location\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-sm-5 p-0\">\n            <div class=\"card\">\n              <div class=\"card-body p-1\">\n                <div class=\"for-space pt-3\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <p class=\"result mb-0 ml-2\">\n                        <a href=\"#\" class=\"search-result\">12 results found</a>\n                      </p>\n                    </div>\n                    <div class=\"col-md-3 text-right\">\n                      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                        <label class=\"btn btn-primary  btn-sm\" routerLink=\"/category-list\">\n                          <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked>\n                          <i class=\"fa fa-th mr-1\" aria-hidden=\"true\"></i> List\n                        </label>\n                        <label class=\"btn btn-primary btn-sm\" routerLink=\"/category-map\">\n                          <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\">\n                          <i class=\"fa fa-map mr-1\" aria-hidden=\"true\"></i> Map\n                        </label>\n                        <!-- <label class=\"btn btn-primary btn-sm\"> -->\n                        <!-- <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\" -->\n                        <!-- routerLink=\"/add-details\"><i class=\"fa fa-plus mr-1\" aria-hidden=\"true\"></i> -->\n                        <!-- Add Product -->\n                        <!-- </label> -->\n                      </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <select class=\"form-control set-control\">\n                        <option selected>Relevance</option>\n                        <option value=\"1\">New List</option>\n                        <option value=\"2\">Medium List</option>\n                        <option value=\"3\">Order List</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row product-data\">\n                  <div class=\"col-sm-6\" *ngFor=\"let data of productlist\">\n                      <div class=\"card\"  routerLink=\"/category-detail\">\n                        <div class=\"image hovereffectd\">\n                          <span class=\"badge badge-pill badge-danger ml-2 thunder-badge\">\n                            <i class=\"fa fa-bolt mr-2 \" aria-hidden=\"true\"></i>\n                            8-hours ago</span>\n                          <span class=\"badge badge-secondary\">\n                            <i class=\"fa fa-heart\" aria-hidden=\"true\">&nbsp;</i>\n                            45\n                          </span>\n                          <img class=\"card-img-top get-img\" src=\"./assets/img/car.png\" alt=\"Card image cap\">\n                          <div class=\"set-pos overlayd\">\n                            <h6 class=\"content\">\n                              <i class=\"fa fa-map-marker mr-2\" aria-hidden=\"true\"></i>1681 Lake Shore Boulevard\n                              East</h6>\n                            <h6 class=\"content mt-2\">\n                              <i class=\"fa fa-phone mr-2\" aria-hidden=\"true\"></i>+81 989514785\n                            </h6>\n            \n                          </div>\n                        </div>\n                        <div class=\"user-img\">\n                          <img src=\"./assets/img/user-img.png\" class=\"item\">\n                        </div>\n                        <div class=\"card-body\">\n                          <ul class=\"list-inline set-inline\">\n                            <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\n                            <h6 class=\"make m-0\"> Benz</h6>\n                            <h6 class=\"make m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>25,600</h6>\n                            <p class=\"description\">Powerfull and fuel efficient at 2.0 Liter</p>\n                          </ul>\n                        </div>\n                      </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-7 p-0\">\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n              <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n            </agm-map>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/layout/category-map/category-map.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/category-map/category-map.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  position: relative !important;\n  height: 100%;\n  width: 100% !important; }\n\n.category-map {\n  padding-top: 130px; }\n\n.category-map .product-data .card {\n    border-radius: 5px;\n    height: 290px;\n    margin: 10px 0px;\n    box-shadow: 1px 1px 5px #cccbcb;\n    transition: .5s; }\n\n.category-map .product-data .card .card-img-top {\n      height: 215px; }\n\n.category-map .product-data .card .badge-secondary {\n      color: #fff;\n      background-color: #000000;\n      padding: 5px 10px;\n      margin: 10px 5px;\n      float: right;\n      border-radius: 15px;\n      font-size: 14px;\n      position: absolute;\n      text-align: right;\n      right: 0px;\n      z-index: 99; }\n\n.category-map .product-data .card .badge-secondary .fa {\n        color: #f83c3c; }\n\n.category-map .product-data .card .set-pos {\n      position: absolute;\n      top: 0px; }\n\n.category-map .product-data .card .set-pos .content {\n        font-size: 12px;\n        margin: 10px 5px;\n        color: white;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        width: 185px;\n        white-space: nowrap; }\n\n.category-map .product-data .card .card-body {\n      padding: 5px; }\n\n.category-map .product-data .card .card-body .fa-set {\n        border: 2px solid #dc3545;\n        padding: 7px;\n        border-radius: 50%;\n        color: #dc3545;\n        height: 30px;\n        width: 30px;\n        text-align: center; }\n\n.category-map .product-data .card .image {\n      background-color: #000000f0;\n      border-top-right-radius: 5px;\n      border-top-left-radius: 5px; }\n\n.category-map .product-data .card .item {\n      position: absolute;\n      right: 10px;\n      width: 60px;\n      bottom: 33%;\n      border: 3px solid #fff;\n      border-radius: 50%; }\n\n.category-map .product-data .card .make {\n      color: #253773 !important;\n      font-weight: 500 !important;\n      margin: 5px !important;\n      font-size: 14px !important;\n      width: 97%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n\n.category-map .product-data .card .value {\n      color: orange;\n      font-weight: bolder; }\n\n.category-map .product-data .card:hover {\n      box-shadow: 0px 0px 10px #928e8e; }\n\n.category-map .product-data .card .description {\n      font-weight: 400 !important;\n      font-size: 12px !important;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      width: 205px;\n      overflow: hidden;\n      margin: 5px;\n      color: #585757 !important; }\n\n.category-map .product-data .card .heading {\n      color: #dc3545;\n      font-weight: 600;\n      margin: 15px 5px 5px;\n      font-size: 16px;\n      outline: none !important;\n      width: 75%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n\n.category-map .product-data .thunder-badge {\n    position: absolute;\n    left: 0px;\n    z-index: 9;\n    margin: 10px 5px;\n    padding: 5px 6px; }\n\n.category-map .hovereffectd {\n    width: 100%;\n    height: 100%;\n    float: left;\n    overflow: hidden;\n    position: relative;\n    text-align: center;\n    cursor: pointer; }\n\n.category-map .hovereffectd .overlayd {\n    width: 100%;\n    position: absolute;\n    overflow: hidden;\n    left: 0;\n    top: auto;\n    bottom: 0;\n    padding: 50px 5px;\n    height: 215px;\n    text-align: left;\n    background: #000000cf;\n    color: #fff;\n    transition: -webkit-transform 0.35s;\n    transition: transform 0.35s;\n    transition: transform 0.35s, -webkit-transform 0.35s;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n\n.category-map .hovereffectd .get-img {\n    display: block;\n    position: relative;\n    transition: -webkit-transform 0.35s;\n    transition: transform 0.35s;\n    transition: transform 0.35s, -webkit-transform 0.35s; }\n\n.category-map .hovereffectd:hover .get-img {\n    -webkit-transform: translate3d(0, -10%, 0);\n    transform: translate3d(0, -10%, 0); }\n\n.category-map .hovereffectd a.info {\n    text-decoration: none;\n    padding: 7px 14px;\n    text-transform: uppercase;\n    color: #fff;\n    border: 1px solid #fff;\n    margin: 50px 0 0 0;\n    background-color: transparent; }\n\n.category-map .hovereffectd a.info:hover {\n    box-shadow: 0 0 5px #fff; }\n\n.category-map .hovereffectd p.icon-links a {\n    float: left;\n    color: #fff !important;\n    font-size: 1.4em; }\n\n.category-map .hovereffectd p.icon-links a {\n    transition: -webkit-transform 0.35s;\n    transition: transform 0.35s;\n    transition: transform 0.35s, -webkit-transform 0.35s;\n    -webkit-transform: translate3d(0, 200%, 0);\n    transform: translate3d(0, 200%, 0);\n    visibility: visible; }\n\n.category-map .hovereffectd p.icon-links a span:before {\n    display: inline-block;\n    padding: 8px 10px;\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n.category-map .hovereffectd:hover .overlayd,\n  .category-map .hovereffectd:hover p.icon-links a {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n\n.category-map .hovereffectd:hover p.icon-links a:nth-child(3) {\n    transition-delay: 0.1s; }\n\n.category-map .hovereffectd:hover p.icon-links a:nth-child(2) {\n    transition-delay: 0.15s; }\n\n.category-map .hovereffectd:hover p.icon-links a:first-child {\n    transition-delay: 0.2s; }\n\n.btn-group .btn-primary {\n  background-color: #f8191a;\n  border: none; }\n\n.btn-group .btn-primary:hover {\n    background-color: #e83435; }\n\n.set-control {\n  height: 30px;\n  padding: 2px 5px;\n  color: #f8191a;\n  border: 1px solid #f91d1e;\n  border-radius: 0px; }\n\n.search-result {\n  color: #000000;\n  font-size: 14px; }\n\n.search-result:hover {\n    text-decoration: none; }\n\n.bg-light .nav-item {\n  margin-left: 10px; }\n\n.bg-light .form-control {\n  border-radius: 0px; }\n"

/***/ }),

/***/ "./src/app/layout/category-map/category-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/category-map/category-map.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoryMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryMapComponent", function() { return CategoryMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryMapComponent = /** @class */ (function () {
    function CategoryMapComponent(data) {
        this.data = data;
    }
    CategoryMapComponent.prototype.ngOnInit = function () {
        this.getProd();
    };
    CategoryMapComponent.prototype.getProd = function () {
        var _this = this;
        this.data.getDetail().subscribe(function (res) { _this.productlist = res; });
    };
    CategoryMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-map',
            template: __webpack_require__(/*! ./category-map.component.html */ "./src/app/layout/category-map/category-map.component.html"),
            styles: [__webpack_require__(/*! ./category-map.component.scss */ "./src/app/layout/category-map/category-map.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CategoryMapComponent);
    return CategoryMapComponent;
}());



/***/ }),

/***/ "./src/app/layout/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START: -->\r\n<div class=\"white-banner\">\r\n  <div class=\"main-banner\">\r\n    <section>\r\n      <owl-carousel-o [options]=\"mainBanner\">\r\n        <ng-template carouselSlide>\r\n          <img src=\"/assets/img/img/main-banner.png\" alt=\"Card image cap\" class=\"img card-img-top\">\r\n        </ng-template>\r\n      </owl-carousel-o>\r\n    </section>\r\n  </div>\r\n  <!-- END: -->\r\n\r\n  <!-- START: -->\r\n  <section class=\"best-selling\">\r\n    <div class=\"sub-heading\">\r\n      <h4 class=\"\">Best Selling Products</h4>\r\n    </div>\r\n    <div class=\"container product-data\">\r\n      <ul class=\"list-inline\">\r\n        <owl-carousel-o [options]=\"bestSeller\">\r\n          <ng-template carouselSlide>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/watch.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> Fossil CH29271 Briggs </h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/sofa.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> 3 + 2 Grey Brown Sofa Set (Con-\r\n                      figuration -L-Shaped) </h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/table.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> Engineered Wooolor -\r\n                      dark Brownd Coffee Table\r\n                      (Finish C) </h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/printer.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> Ultra HD (4k) Smart Led TV</h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/tv.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> Ink tank 5810 Multi-func\r\n                      tion Printer(Black)</h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ng-template>\r\n        </owl-carousel-o>\r\n      </ul>\r\n      <div class=\"text-center\">\r\n        <button type=\"button\" class=\"btn btn-primary glow-on-hover\"> view all </button>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- END: -->\r\n\r\n  <!-- START: -->\r\n  <section class=\"dealblock\">\r\n    <div class=\"twinkling\"></div>\r\n    <div class=\"container  product-data\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n        </div>\r\n        <div class=\"col-md-10\">\r\n          <ul class=\"list-inline\">\r\n            <owl-carousel-o [options]=\"customOptions\">\r\n              <ng-template carouselSlide>\r\n                <li class=\"list-inline-item\">\r\n                  <div class=\"card\">\r\n                    <div class=\"image\">\r\n                      <img class=\"card-img-top get-img\" src=\"./assets/img/img/watch.png\" alt=\"Card image cap\">\r\n                    </div>\r\n                    <div class=\"user-img\">\r\n                      <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <ul class=\"list-inline set-inline\">\r\n                        <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                        <h6 class=\"make m-0\"> Fossil CH29271 Briggs </h6>\r\n                        <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <div class=\"card\">\r\n                    <div class=\"image\">\r\n                      <img class=\"card-img-top get-img\" src=\"./assets/img/img/sofa.png\" alt=\"Card image cap\">\r\n                    </div>\r\n                    <div class=\"user-img\">\r\n                      <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <ul class=\"list-inline set-inline\">\r\n                        <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                        <h6 class=\"make m-0\"> 3 + 2 Grey Brown Sofa Set (Con-\r\n                          figuration -L-Shaped) </h6>\r\n                        <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <div class=\"card\">\r\n                    <div class=\"image\">\r\n                      <img class=\"card-img-top get-img\" src=\"./assets/img/img/table.png\" alt=\"Card image cap\">\r\n                    </div>\r\n                    <div class=\"user-img\">\r\n                      <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <ul class=\"list-inline set-inline\">\r\n                        <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                        <h6 class=\"make m-0\"> Engineered Wooolor -\r\n                          dark Brownd Coffee Table\r\n                          (Finish C) </h6>\r\n                        <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <div class=\"card\">\r\n                    <div class=\"image\">\r\n                      <img class=\"card-img-top get-img\" src=\"./assets/img/img/printer.png\" alt=\"Card image cap\">\r\n                    </div>\r\n                    <div class=\"user-img\">\r\n                      <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <ul class=\"list-inline set-inline\">\r\n                        <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                        <h6 class=\"make m-0\"> Ultra HD (4k) Smart Led TV</h6>\r\n                        <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ng-template>\r\n            </owl-carousel-o>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- END: -->\r\n\r\n  <!-- START: -->\r\n  <section class=\"new-this-week\">\r\n    <div class=\"sub-heading\">\r\n      <h4 class=\"\">New This Week</h4>\r\n    </div>\r\n    <div class=\"container product-data\">\r\n      <ul class=\"list-inline\">\r\n        <owl-carousel-o [options]=\"{items: 1,dots: false, nav:true, smartSpeed: 500, autoplay: true,loop:true}\">\r\n          <ng-template carouselSlide>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/watch.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> Fossil CH29271 Briggs </h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/sofa.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> 3 + 2 Grey Brown Sofa Set (Con-\r\n                      figuration -L-Shaped) </h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/table.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> Engineered Wooolor -\r\n                      dark Brownd Coffee Table\r\n                      (Finish C) </h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/printer.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> Ultra HD (4k) Smart Led TV</h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/tv.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> Ink tank 5810 Multi-func\r\n                      tion Printer(Black)</h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ng-template>\r\n        </owl-carousel-o>\r\n      </ul>\r\n    </div>\r\n  </section>\r\n  <!-- END: -->\r\n\r\n  <!-- START: -->\r\n  <section class=\"budjet-bazar\">\r\n    <div class=\"sub-heading\">\r\n      <h4 class=\"\">Budget Bazar</h4>\r\n    </div>\r\n  </section>\r\n  <!-- END: -->\r\n\r\n  <!-- START: -->\r\n  <section class=\"new-banner\">\r\n    <div class=\"animated-heading\">\r\n      <h2 class=\"\">New Year Offer</h2>\r\n    </div>\r\n    <div class=\"\">\r\n      <div class=\"container product-data\">\r\n        <ul class=\"list-inline\">\r\n          <owl-carousel-o [options]=\"{items: 1,dots: false, nav:true, smartSpeed: 500, autoplay: true,loop:true}\">\r\n            <ng-template carouselSlide>\r\n              <li class=\"list-inline-item\">\r\n                <div class=\"card\">\r\n                  <div class=\"image\">\r\n                    <img class=\"card-img-top get-img\" src=\"./assets/img/img/watch.png\" alt=\"Card image cap\">\r\n                  </div>\r\n                  <div class=\"user-img\">\r\n                    <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                    <ul class=\"list-inline set-inline\">\r\n                      <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                      <h6 class=\"make m-0\"> Fossil CH29271 Briggs </h6>\r\n                      <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-inline-item\">\r\n                <div class=\"card\">\r\n                  <div class=\"image\">\r\n                    <img class=\"card-img-top get-img\" src=\"./assets/img/img/sofa.png\" alt=\"Card image cap\">\r\n                  </div>\r\n                  <div class=\"user-img\">\r\n                    <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                    <ul class=\"list-inline set-inline\">\r\n                      <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                      <h6 class=\"make m-0\"> 3 + 2 Grey Brown Sofa Set (Con-\r\n                        figuration -L-Shaped) </h6>\r\n                      <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-inline-item\">\r\n                <div class=\"card\">\r\n                  <div class=\"image\">\r\n                    <img class=\"card-img-top get-img\" src=\"./assets/img/img/table.png\" alt=\"Card image cap\">\r\n                  </div>\r\n                  <div class=\"user-img\">\r\n                    <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                    <ul class=\"list-inline set-inline\">\r\n                      <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                      <h6 class=\"make m-0\"> Engineered Wooolor -\r\n                        dark Brownd Coffee Table\r\n                        (Finish C) </h6>\r\n                      <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-inline-item\">\r\n                <div class=\"card\">\r\n                  <div class=\"image\">\r\n                    <img class=\"card-img-top get-img\" src=\"./assets/img/img/printer.png\" alt=\"Card image cap\">\r\n                  </div>\r\n                  <div class=\"user-img\">\r\n                    <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                    <ul class=\"list-inline set-inline\">\r\n                      <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                      <h6 class=\"make m-0\"> Ultra HD (4k) Smart Led TV</h6>\r\n                      <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-inline-item\">\r\n                <div class=\"card\">\r\n                  <div class=\"image\">\r\n                    <img class=\"card-img-top get-img\" src=\"./assets/img/img/tv.png\" alt=\"Card image cap\">\r\n                  </div>\r\n                  <div class=\"user-img\">\r\n                    <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                    <ul class=\"list-inline set-inline\">\r\n                      <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                      <h6 class=\"make m-0\"> Ink tank 5810 Multi-func\r\n                        tion Printer(Black)</h6>\r\n                      <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ng-template>\r\n          </owl-carousel-o>\r\n        </ul>\r\n        <div class=\"text-center\">\r\n          <button type=\"button\" class=\"btn btn-primary glow-on-hover\"> view all </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- END: -->\r\n\r\n\r\n  <!--START:  -->\r\n  <section class=\"Top Brands\">\r\n    <div class=\"sub-heading\">\r\n      <h4 class=\"\">Top Brands</h4>\r\n    </div>\r\n    <div class=\"container\">\r\n      <owl-carousel-o [options]=\"{items: 1,dots: false, nav:true, smartSpeed: 500, autoplay: true,loop:true}\">\r\n        <ng-template carouselSlide>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <img src=\"/assets/img/img/add1.png\" alt=\"Card image cap\" class=\"img card-img-top\">\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img src=\"/assets/img/img/add2.png\" alt=\"Card image cap\" class=\"img card-img-top\">\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img src=\"/assets/img/img/add3.png\" alt=\"Card image cap\" class=\"img card-img-top\">\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img src=\"/assets/img/img/add4.png\" alt=\"Card image cap\" class=\"img card-img-top\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <img src=\"/assets/img/img/add5.png\" alt=\"Card image cap\" class=\"img card-img-top\">\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img src=\"/assets/img/img/add6.png\" alt=\"Card image cap\" class=\"img card-img-top\">\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img src=\"/assets/img/img/add7.png\" alt=\"Card image cap\" class=\"img card-img-top\">\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img src=\"/assets/img/img/add8.png\" alt=\"Card image cap\" class=\"img card-img-top\">\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </owl-carousel-o>\r\n    </div>\r\n  </section>\r\n  <!--END:  -->\r\n\r\n  <!-- START: -->\r\n  <section class=\"recommended\">\r\n    <div class=\"sub-heading\">\r\n      <h4 class=\"\">Recommended For You</h4>\r\n    </div>\r\n    <div class=\"container product-data\">\r\n      <ul class=\"list-inline\">\r\n        <owl-carousel-o [options]=\"{items: 1,dots: false, nav:true, smartSpeed: 500, autoplay: true,loop:true}\">\r\n          <ng-template carouselSlide>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/watch.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> Fossil CH29271 Briggs </h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/sofa.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> 3 + 2 Grey Brown Sofa Set (Con-\r\n                      figuration -L-Shaped) </h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/table.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> Engineered Wooolor -\r\n                      dark Brownd Coffee Table\r\n                      (Finish C) </h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/printer.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> Ultra HD (4k) Smart Led TV</h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <div class=\"card\">\r\n                <div class=\"image\">\r\n                  <img class=\"card-img-top get-img\" src=\"./assets/img/img/tv.png\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"user-img\">\r\n                  <img src=\"./assets/img/user-img.png\" class=\"item\">\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <ul class=\"list-inline set-inline\">\r\n                    <h6 class=\"heading\" routerLink=\"/category-detail\">Yuvan Transport</h6>\r\n                    <h6 class=\"make m-0\"> Ink tank 5810 Multi-func\r\n                      tion Printer(Black)</h6>\r\n                    <h6 class=\"cost m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>13,000</h6>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ng-template>\r\n        </owl-carousel-o>\r\n      </ul>\r\n      <div class=\"text-center\">\r\n        <button type=\"button\" class=\"btn btn-primary glow-on-hover\"> view all </button>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- END: -->\r\n\r\n  \r\n  <!-- START: -->\r\n  <section class=\"fashion\">\r\n    <div class=\"sub-heading\">\r\n      <h4 class=\"\">Fashion</h4>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"set\">\r\n            <img src=\"/assets/img/img/fashion1.png\" class=\"img-fluid\">\r\n            <div class=\"middle\">\r\n              <div class=\"text\">John Doe</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <img src=\"/assets/img/img/fashion2.png\" class=\"img-fluid\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n          <img src=\"/assets/img/img/fashion3.png\" class=\"img-fluid\">\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <img src=\"/assets/img/img/fashion4.png\" class=\"img-fluid\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <img src=\"/assets/img/img/fashion5.png\" class=\"img-fluid\">\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <img src=\"/assets/img/img/fashion6.png\" class=\"img-fluid\">\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <img src=\"/assets/img/img/fashion7.png\" class=\"img-fluid\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- END: -->\r\n\r\n</div>\r\n<!-- END: -->"

/***/ }),

/***/ "./src/app/layout/home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-banner {\n  padding: 103px 0 0 0;\n  background: #fff;\n  transition: 0.2s ease-in-out !important; }\n  .main-banner .second-add {\n    margin: 6px 0; }\n  .secondary-card {\n  border-radius: 0;\n  border: none; }\n  .secondary-card .card-body {\n    padding: 0px; }\n  .best-selling .product-data .card, .dealblock .product-data .card, .new-this-week .product-data .card, .recommended .product-data .card, .new-banner .product-data .card, .best-selling .dealblock .card, .dealblock .dealblock .card, .new-this-week .dealblock .card, .recommended .dealblock .card, .new-banner .dealblock .card, .best-selling .new-this-week .card, .dealblock .new-this-week .card, .new-this-week .new-this-week .card, .recommended .new-this-week .card, .new-banner .new-this-week .card, .best-selling .recommended .card, .dealblock .recommended .card, .new-this-week .recommended .card, .recommended .recommended .card, .new-banner .recommended .card, .best-selling .new-banner .card, .dealblock .new-banner .card, .new-this-week .new-banner .card, .recommended .new-banner .card, .new-banner .new-banner .card {\n  width: 215px;\n  height: 285px;\n  border-radius: 5px;\n  margin: 10px 0px;\n  box-shadow: 2px 2px 3px #ad9f9f;\n  transition: 0.5s; }\n  .best-selling .product-data .card .badge-secondary, .dealblock .product-data .card .badge-secondary, .new-this-week .product-data .card .badge-secondary, .recommended .product-data .card .badge-secondary, .new-banner .product-data .card .badge-secondary, .best-selling .dealblock .card .badge-secondary, .dealblock .dealblock .card .badge-secondary, .new-this-week .dealblock .card .badge-secondary, .recommended .dealblock .card .badge-secondary, .new-banner .dealblock .card .badge-secondary, .best-selling .new-this-week .card .badge-secondary, .dealblock .new-this-week .card .badge-secondary, .new-this-week .new-this-week .card .badge-secondary, .recommended .new-this-week .card .badge-secondary, .new-banner .new-this-week .card .badge-secondary, .best-selling .recommended .card .badge-secondary, .dealblock .recommended .card .badge-secondary, .new-this-week .recommended .card .badge-secondary, .recommended .recommended .card .badge-secondary, .new-banner .recommended .card .badge-secondary, .best-selling .new-banner .card .badge-secondary, .dealblock .new-banner .card .badge-secondary, .new-this-week .new-banner .card .badge-secondary, .recommended .new-banner .card .badge-secondary, .new-banner .new-banner .card .badge-secondary {\n    color: #000;\n    background-color: transparent;\n    padding: 5px 10px;\n    margin: 10px 5px;\n    float: right;\n    border-radius: 15px;\n    font-size: 14px;\n    position: absolute;\n    text-align: right;\n    right: 0px;\n    z-index: 99; }\n  .best-selling .product-data .card .badge-secondary .fa, .dealblock .product-data .card .badge-secondary .fa, .new-this-week .product-data .card .badge-secondary .fa, .recommended .product-data .card .badge-secondary .fa, .new-banner .product-data .card .badge-secondary .fa, .best-selling .dealblock .card .badge-secondary .fa, .dealblock .dealblock .card .badge-secondary .fa, .new-this-week .dealblock .card .badge-secondary .fa, .recommended .dealblock .card .badge-secondary .fa, .new-banner .dealblock .card .badge-secondary .fa, .best-selling .new-this-week .card .badge-secondary .fa, .dealblock .new-this-week .card .badge-secondary .fa, .new-this-week .new-this-week .card .badge-secondary .fa, .recommended .new-this-week .card .badge-secondary .fa, .new-banner .new-this-week .card .badge-secondary .fa, .best-selling .recommended .card .badge-secondary .fa, .dealblock .recommended .card .badge-secondary .fa, .new-this-week .recommended .card .badge-secondary .fa, .recommended .recommended .card .badge-secondary .fa, .new-banner .recommended .card .badge-secondary .fa, .best-selling .new-banner .card .badge-secondary .fa, .dealblock .new-banner .card .badge-secondary .fa, .new-this-week .new-banner .card .badge-secondary .fa, .recommended .new-banner .card .badge-secondary .fa, .new-banner .new-banner .card .badge-secondary .fa {\n      color: #d2232a; }\n  .best-selling .product-data .card .badge-secondary .fa:hover, .dealblock .product-data .card .badge-secondary .fa:hover, .new-this-week .product-data .card .badge-secondary .fa:hover, .recommended .product-data .card .badge-secondary .fa:hover, .new-banner .product-data .card .badge-secondary .fa:hover, .best-selling .dealblock .card .badge-secondary .fa:hover, .dealblock .dealblock .card .badge-secondary .fa:hover, .new-this-week .dealblock .card .badge-secondary .fa:hover, .recommended .dealblock .card .badge-secondary .fa:hover, .new-banner .dealblock .card .badge-secondary .fa:hover, .best-selling .new-this-week .card .badge-secondary .fa:hover, .dealblock .new-this-week .card .badge-secondary .fa:hover, .new-this-week .new-this-week .card .badge-secondary .fa:hover, .recommended .new-this-week .card .badge-secondary .fa:hover, .new-banner .new-this-week .card .badge-secondary .fa:hover, .best-selling .recommended .card .badge-secondary .fa:hover, .dealblock .recommended .card .badge-secondary .fa:hover, .new-this-week .recommended .card .badge-secondary .fa:hover, .recommended .recommended .card .badge-secondary .fa:hover, .new-banner .recommended .card .badge-secondary .fa:hover, .best-selling .new-banner .card .badge-secondary .fa:hover, .dealblock .new-banner .card .badge-secondary .fa:hover, .new-this-week .new-banner .card .badge-secondary .fa:hover, .recommended .new-banner .card .badge-secondary .fa:hover, .new-banner .new-banner .card .badge-secondary .fa:hover {\n        color: #d2232a; }\n  .best-selling .product-data .card .set-pos, .dealblock .product-data .card .set-pos, .new-this-week .product-data .card .set-pos, .recommended .product-data .card .set-pos, .new-banner .product-data .card .set-pos, .best-selling .dealblock .card .set-pos, .dealblock .dealblock .card .set-pos, .new-this-week .dealblock .card .set-pos, .recommended .dealblock .card .set-pos, .new-banner .dealblock .card .set-pos, .best-selling .new-this-week .card .set-pos, .dealblock .new-this-week .card .set-pos, .new-this-week .new-this-week .card .set-pos, .recommended .new-this-week .card .set-pos, .new-banner .new-this-week .card .set-pos, .best-selling .recommended .card .set-pos, .dealblock .recommended .card .set-pos, .new-this-week .recommended .card .set-pos, .recommended .recommended .card .set-pos, .new-banner .recommended .card .set-pos, .best-selling .new-banner .card .set-pos, .dealblock .new-banner .card .set-pos, .new-this-week .new-banner .card .set-pos, .recommended .new-banner .card .set-pos, .new-banner .new-banner .card .set-pos {\n    position: absolute;\n    top: 0px; }\n  .best-selling .product-data .card .set-pos .content, .dealblock .product-data .card .set-pos .content, .new-this-week .product-data .card .set-pos .content, .recommended .product-data .card .set-pos .content, .new-banner .product-data .card .set-pos .content, .best-selling .dealblock .card .set-pos .content, .dealblock .dealblock .card .set-pos .content, .new-this-week .dealblock .card .set-pos .content, .recommended .dealblock .card .set-pos .content, .new-banner .dealblock .card .set-pos .content, .best-selling .new-this-week .card .set-pos .content, .dealblock .new-this-week .card .set-pos .content, .new-this-week .new-this-week .card .set-pos .content, .recommended .new-this-week .card .set-pos .content, .new-banner .new-this-week .card .set-pos .content, .best-selling .recommended .card .set-pos .content, .dealblock .recommended .card .set-pos .content, .new-this-week .recommended .card .set-pos .content, .recommended .recommended .card .set-pos .content, .new-banner .recommended .card .set-pos .content, .best-selling .new-banner .card .set-pos .content, .dealblock .new-banner .card .set-pos .content, .new-this-week .new-banner .card .set-pos .content, .recommended .new-banner .card .set-pos .content, .new-banner .new-banner .card .set-pos .content {\n      font-size: 12px;\n      margin: 10px 5px;\n      color: white;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      width: 185px;\n      white-space: nowrap; }\n  .best-selling .product-data .card .card-body, .dealblock .product-data .card .card-body, .new-this-week .product-data .card .card-body, .recommended .product-data .card .card-body, .new-banner .product-data .card .card-body, .best-selling .dealblock .card .card-body, .dealblock .dealblock .card .card-body, .new-this-week .dealblock .card .card-body, .recommended .dealblock .card .card-body, .new-banner .dealblock .card .card-body, .best-selling .new-this-week .card .card-body, .dealblock .new-this-week .card .card-body, .new-this-week .new-this-week .card .card-body, .recommended .new-this-week .card .card-body, .new-banner .new-this-week .card .card-body, .best-selling .recommended .card .card-body, .dealblock .recommended .card .card-body, .new-this-week .recommended .card .card-body, .recommended .recommended .card .card-body, .new-banner .recommended .card .card-body, .best-selling .new-banner .card .card-body, .dealblock .new-banner .card .card-body, .new-this-week .new-banner .card .card-body, .recommended .new-banner .card .card-body, .new-banner .new-banner .card .card-body {\n    padding: 5px; }\n  .best-selling .product-data .card .card-body .fa-set, .dealblock .product-data .card .card-body .fa-set, .new-this-week .product-data .card .card-body .fa-set, .recommended .product-data .card .card-body .fa-set, .new-banner .product-data .card .card-body .fa-set, .best-selling .dealblock .card .card-body .fa-set, .dealblock .dealblock .card .card-body .fa-set, .new-this-week .dealblock .card .card-body .fa-set, .recommended .dealblock .card .card-body .fa-set, .new-banner .dealblock .card .card-body .fa-set, .best-selling .new-this-week .card .card-body .fa-set, .dealblock .new-this-week .card .card-body .fa-set, .new-this-week .new-this-week .card .card-body .fa-set, .recommended .new-this-week .card .card-body .fa-set, .new-banner .new-this-week .card .card-body .fa-set, .best-selling .recommended .card .card-body .fa-set, .dealblock .recommended .card .card-body .fa-set, .new-this-week .recommended .card .card-body .fa-set, .recommended .recommended .card .card-body .fa-set, .new-banner .recommended .card .card-body .fa-set, .best-selling .new-banner .card .card-body .fa-set, .dealblock .new-banner .card .card-body .fa-set, .new-this-week .new-banner .card .card-body .fa-set, .recommended .new-banner .card .card-body .fa-set, .new-banner .new-banner .card .card-body .fa-set {\n      border: 2px solid #dc3545;\n      padding: 7px;\n      border-radius: 50%;\n      color: #dc3545;\n      height: 30px;\n      width: 30px;\n      text-align: center; }\n  .best-selling .product-data .card .image, .dealblock .product-data .card .image, .new-this-week .product-data .card .image, .recommended .product-data .card .image, .new-banner .product-data .card .image, .best-selling .dealblock .card .image, .dealblock .dealblock .card .image, .new-this-week .dealblock .card .image, .recommended .dealblock .card .image, .new-banner .dealblock .card .image, .best-selling .new-this-week .card .image, .dealblock .new-this-week .card .image, .new-this-week .new-this-week .card .image, .recommended .new-this-week .card .image, .new-banner .new-this-week .card .image, .best-selling .recommended .card .image, .dealblock .recommended .card .image, .new-this-week .recommended .card .image, .recommended .recommended .card .image, .new-banner .recommended .card .image, .best-selling .new-banner .card .image, .dealblock .new-banner .card .image, .new-this-week .new-banner .card .image, .recommended .new-banner .card .image, .new-banner .new-banner .card .image {\n    background-color: #ffffff;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n    margin: 0 auto; }\n  .best-selling .product-data .card .item, .dealblock .product-data .card .item, .new-this-week .product-data .card .item, .recommended .product-data .card .item, .new-banner .product-data .card .item, .best-selling .dealblock .card .item, .dealblock .dealblock .card .item, .new-this-week .dealblock .card .item, .recommended .dealblock .card .item, .new-banner .dealblock .card .item, .best-selling .new-this-week .card .item, .dealblock .new-this-week .card .item, .new-this-week .new-this-week .card .item, .recommended .new-this-week .card .item, .new-banner .new-this-week .card .item, .best-selling .recommended .card .item, .dealblock .recommended .card .item, .new-this-week .recommended .card .item, .recommended .recommended .card .item, .new-banner .recommended .card .item, .best-selling .new-banner .card .item, .dealblock .new-banner .card .item, .new-this-week .new-banner .card .item, .recommended .new-banner .card .item, .new-banner .new-banner .card .item {\n    position: absolute;\n    right: 0px;\n    width: 55px;\n    bottom: 25%;\n    border: 3px solid #fff;\n    border-radius: 50%; }\n  .best-selling .product-data .card .make, .dealblock .product-data .card .make, .new-this-week .product-data .card .make, .recommended .product-data .card .make, .new-banner .product-data .card .make, .best-selling .dealblock .card .make, .dealblock .dealblock .card .make, .new-this-week .dealblock .card .make, .recommended .dealblock .card .make, .new-banner .dealblock .card .make, .best-selling .new-this-week .card .make, .dealblock .new-this-week .card .make, .new-this-week .new-this-week .card .make, .recommended .new-this-week .card .make, .new-banner .new-this-week .card .make, .best-selling .recommended .card .make, .dealblock .recommended .card .make, .new-this-week .recommended .card .make, .recommended .recommended .card .make, .new-banner .recommended .card .make, .best-selling .new-banner .card .make, .dealblock .new-banner .card .make, .new-this-week .new-banner .card .make, .recommended .new-banner .card .make, .new-banner .new-banner .card .make {\n    color: #4c4c4c !important;\n    margin: 10px 0px !important;\n    font-size: 13px !important;\n    width: 97%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-align: center; }\n  .best-selling .product-data .card .cost, .dealblock .product-data .card .cost, .new-this-week .product-data .card .cost, .recommended .product-data .card .cost, .new-banner .product-data .card .cost, .best-selling .dealblock .card .cost, .dealblock .dealblock .card .cost, .new-this-week .dealblock .card .cost, .recommended .dealblock .card .cost, .new-banner .dealblock .card .cost, .best-selling .new-this-week .card .cost, .dealblock .new-this-week .card .cost, .new-this-week .new-this-week .card .cost, .recommended .new-this-week .card .cost, .new-banner .new-this-week .card .cost, .best-selling .recommended .card .cost, .dealblock .recommended .card .cost, .new-this-week .recommended .card .cost, .recommended .recommended .card .cost, .new-banner .recommended .card .cost, .best-selling .new-banner .card .cost, .dealblock .new-banner .card .cost, .new-this-week .new-banner .card .cost, .recommended .new-banner .card .cost, .new-banner .new-banner .card .cost {\n    color: #4c4c4c !important;\n    font-size: 15px !important;\n    font-weight: 600 !important;\n    text-align: center; }\n  .best-selling .product-data .card .value, .dealblock .product-data .card .value, .new-this-week .product-data .card .value, .recommended .product-data .card .value, .new-banner .product-data .card .value, .best-selling .dealblock .card .value, .dealblock .dealblock .card .value, .new-this-week .dealblock .card .value, .recommended .dealblock .card .value, .new-banner .dealblock .card .value, .best-selling .new-this-week .card .value, .dealblock .new-this-week .card .value, .new-this-week .new-this-week .card .value, .recommended .new-this-week .card .value, .new-banner .new-this-week .card .value, .best-selling .recommended .card .value, .dealblock .recommended .card .value, .new-this-week .recommended .card .value, .recommended .recommended .card .value, .new-banner .recommended .card .value, .best-selling .new-banner .card .value, .dealblock .new-banner .card .value, .new-this-week .new-banner .card .value, .recommended .new-banner .card .value, .new-banner .new-banner .card .value {\n    color: orange;\n    font-weight: bolder; }\n  .best-selling .product-data .card:hover, .dealblock .product-data .card:hover, .new-this-week .product-data .card:hover, .recommended .product-data .card:hover, .new-banner .product-data .card:hover, .best-selling .dealblock .card:hover, .dealblock .dealblock .card:hover, .new-this-week .dealblock .card:hover, .recommended .dealblock .card:hover, .new-banner .dealblock .card:hover, .best-selling .new-this-week .card:hover, .dealblock .new-this-week .card:hover, .new-this-week .new-this-week .card:hover, .recommended .new-this-week .card:hover, .new-banner .new-this-week .card:hover, .best-selling .recommended .card:hover, .dealblock .recommended .card:hover, .new-this-week .recommended .card:hover, .recommended .recommended .card:hover, .new-banner .recommended .card:hover, .best-selling .new-banner .card:hover, .dealblock .new-banner .card:hover, .new-this-week .new-banner .card:hover, .recommended .new-banner .card:hover, .new-banner .new-banner .card:hover {\n    box-shadow: 0px 0px 10px #928e8e;\n    cursor: pointer; }\n  .best-selling .product-data .card .description, .dealblock .product-data .card .description, .new-this-week .product-data .card .description, .recommended .product-data .card .description, .new-banner .product-data .card .description, .best-selling .dealblock .card .description, .dealblock .dealblock .card .description, .new-this-week .dealblock .card .description, .recommended .dealblock .card .description, .new-banner .dealblock .card .description, .best-selling .new-this-week .card .description, .dealblock .new-this-week .card .description, .new-this-week .new-this-week .card .description, .recommended .new-this-week .card .description, .new-banner .new-this-week .card .description, .best-selling .recommended .card .description, .dealblock .recommended .card .description, .new-this-week .recommended .card .description, .recommended .recommended .card .description, .new-banner .recommended .card .description, .best-selling .new-banner .card .description, .dealblock .new-banner .card .description, .new-this-week .new-banner .card .description, .recommended .new-banner .card .description, .new-banner .new-banner .card .description {\n    font-weight: 400 !important;\n    font-size: 12px !important;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 205px;\n    overflow: hidden;\n    margin: 5px;\n    color: #585757 !important; }\n  .best-selling .product-data .card .heading, .dealblock .product-data .card .heading, .new-this-week .product-data .card .heading, .recommended .product-data .card .heading, .new-banner .product-data .card .heading, .best-selling .dealblock .card .heading, .dealblock .dealblock .card .heading, .new-this-week .dealblock .card .heading, .recommended .dealblock .card .heading, .new-banner .dealblock .card .heading, .best-selling .new-this-week .card .heading, .dealblock .new-this-week .card .heading, .new-this-week .new-this-week .card .heading, .recommended .new-this-week .card .heading, .new-banner .new-this-week .card .heading, .best-selling .recommended .card .heading, .dealblock .recommended .card .heading, .new-this-week .recommended .card .heading, .recommended .recommended .card .heading, .new-banner .recommended .card .heading, .best-selling .new-banner .card .heading, .dealblock .new-banner .card .heading, .new-this-week .new-banner .card .heading, .recommended .new-banner .card .heading, .new-banner .new-banner .card .heading {\n    color: #121149;\n    font-weight: 600;\n    margin: 5px;\n    font-size: 14px;\n    outline: none !important;\n    width: 75%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    text-align: center; }\n  .best-selling .product-data .thunder-badge, .dealblock .product-data .thunder-badge, .new-this-week .product-data .thunder-badge, .recommended .product-data .thunder-badge, .new-banner .product-data .thunder-badge, .best-selling .dealblock .thunder-badge, .dealblock .dealblock .thunder-badge, .new-this-week .dealblock .thunder-badge, .recommended .dealblock .thunder-badge, .new-banner .dealblock .thunder-badge, .best-selling .new-this-week .thunder-badge, .dealblock .new-this-week .thunder-badge, .new-this-week .new-this-week .thunder-badge, .recommended .new-this-week .thunder-badge, .new-banner .new-this-week .thunder-badge, .best-selling .recommended .thunder-badge, .dealblock .recommended .thunder-badge, .new-this-week .recommended .thunder-badge, .recommended .recommended .thunder-badge, .new-banner .recommended .thunder-badge, .best-selling .new-banner .thunder-badge, .dealblock .new-banner .thunder-badge, .new-this-week .new-banner .thunder-badge, .recommended .new-banner .thunder-badge, .new-banner .new-banner .thunder-badge {\n  position: absolute;\n  left: 0px;\n  z-index: 9;\n  margin: 10px 5px;\n  padding: 5px 6px;\n  background: transparent;\n  color: #d2232a; }\n  .dealblock {\n  min-height: 400px;\n  background: #000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 50px 0px; }\n  .dealblock .twinkling {\n    position: absolute;\n    top: 65rem;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 62%;\n    display: block; }\n  .dealblock .twinkling {\n    background: transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;\n    z-index: 1;\n    -webkit-animation: move-twink-back 200s linear infinite;\n    animation: move-twink-back 200s linear infinite; }\n  @keyframes move-twink-back {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: -10000px 5000px; } }\n  @-webkit-keyframes move-twink-back {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: -10000px 5000px; } }\n  .new-banner {\n  min-height: 400px;\n  background-image: url(\"/assets/img/img/newyear-banner.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 25px 0px; }\n  .new-banner .animated-heading h2 {\n    text-transform: capitalize;\n    text-align: center;\n    font-weight: 600;\n    color: #fff; }\n  .product-list {\n  margin: 0px; }\n  .product-list .list-inline-item {\n    margin-right: 0px !important; }\n  .product-list .list-inline-item .product-card {\n      margin: 0 !important; }\n  .product-list .list-inline-item .fa-set {\n      color: #f83c3c;\n      margin-right: 5px; }\n  .product-list .list-inline-item:nth-child(1) .product-card {\n    margin: 5px 0 0 0 !important; }\n  .product-list .list-inline-item:nth-child(2) .product-card {\n    margin: 5px 0 0 0 !important; }\n  .product-list .list-inline-item:nth-child(3) .product-card {\n    margin: 5px 0 0 0 !important; }\n  .product-list .list-inline-item:nth-child(4) .product-card {\n    margin: 5px 0 0 0 !important; }\n  .product-card {\n  margin: 5px 0;\n  border-radius: 0px; }\n  .product-card .product-img {\n    height: 155px;\n    width: 208px; }\n  .product-card .set-pos {\n    position: absolute;\n    bottom: 0px;\n    background: #000000a3;\n    display: block;\n    width: 100%;\n    padding: 10px;\n    color: #fff; }\n  .product-card .set-pos .sub-head {\n      text-transform: capitalize;\n      margin-bottom: 0px;\n      cursor: pointer;\n      font-size: 12px; }\n  .product-card .set-pos .likes {\n      font-size: 12px; }\n  .top-consultants .product-list {\n  padding: 5px !important; }\n  .top-consultants .product-list .card {\n    border-radius: 0px;\n    border: 1px solid #b7b7b7; }\n  .top-consultants .product-list .card .card-body {\n      padding: 5px;\n      display: flex;\n      /* align-content: center; */ }\n  .top-consultants .product-list .card .card-body img {\n        display: flex;\n        margin: 5px auto; }\n  .trend-business .trend-card {\n  height: 100%;\n  width: 140px;\n  margin: 5px;\n  border-radius: 0px;\n  box-shadow: 2px 2px 10px #a39a9add; }\n  .trend-business .trend-card .card-img-top {\n    background: #fffbfb4d; }\n  .trend-business .trend-card .card-body {\n    padding: 10px; }\n  .trend-business .trend-card .card-body .card-title {\n      margin-bottom: 5px;\n      font-size: 12px; }\n  .trend-business .trend-card .card-body .badge-primary {\n      color: #fff;\n      background-color: #f43a3a;\n      border-radius: 0px;\n      padding: 3px 15px;\n      text-align: center; }\n  .franchise .list-inline {\n  margin-bottom: 0px; }\n  .franchise .list-inline .list-inline-item {\n    margin: 1px; }\n  .franchise .common-auto {\n  padding: 5px;\n  height: 163px;\n  width: 168px;\n  cursor: pointer;\n  transition: 0.5s; }\n  .franchise .common-auto:hover {\n    box-shadow: 2px 2px 10px #9a9494; }\n  .franchise .no-pad1 {\n  padding-right: 0px; }\n  .franchise .no-pad2 {\n  padding-right: 0px;\n  padding-left: 0px; }\n  .popular-business .show-btn {\n  background: transparent;\n  color: #f83c3c;\n  border: 2px solid #f83c3c;\n  font-weight: 600;\n  padding: 5px 25px;\n  margin: 15px 0px; }\n  .popular-business .show-btn:hover,\n  .popular-business .show-btn :focus,\n  .popular-business .show-btn :active {\n    background: #f83c3c;\n    color: #fff;\n    border: 2px solid #f83c3c;\n    font-weight: 600;\n    box-shadow: none; }\n  .popular-business .product-data .card, .popular-business .dealblock .card, .popular-business .new-this-week .card, .popular-business .recommended .card, .popular-business .new-banner .card {\n  border-radius: 5px;\n  height: 290px;\n  margin: 10px 0px;\n  box-shadow: 1px 1px 5px #cccbcb;\n  transition: 0.5s; }\n  .popular-business .product-data .card .card-img-top, .popular-business .dealblock .card .card-img-top, .popular-business .new-this-week .card .card-img-top, .popular-business .recommended .card .card-img-top, .popular-business .new-banner .card .card-img-top {\n    height: 215px; }\n  .popular-business .product-data .card .badge-secondary, .popular-business .dealblock .card .badge-secondary, .popular-business .new-this-week .card .badge-secondary, .popular-business .recommended .card .badge-secondary, .popular-business .new-banner .card .badge-secondary {\n    color: #000;\n    background-color: transparent;\n    padding: 5px 10px;\n    margin: 10px 5px;\n    float: right;\n    border-radius: 15px;\n    font-size: 14px;\n    position: absolute;\n    text-align: right;\n    right: 0px;\n    z-index: 99; }\n  .popular-business .product-data .card .badge-secondary .fa, .popular-business .dealblock .card .badge-secondary .fa, .popular-business .new-this-week .card .badge-secondary .fa, .popular-business .recommended .card .badge-secondary .fa, .popular-business .new-banner .card .badge-secondary .fa {\n      color: #d2232a; }\n  .popular-business .product-data .card .badge-secondary .fa:hover, .popular-business .dealblock .card .badge-secondary .fa:hover, .popular-business .new-this-week .card .badge-secondary .fa:hover, .popular-business .recommended .card .badge-secondary .fa:hover, .popular-business .new-banner .card .badge-secondary .fa:hover {\n        color: #d2232a; }\n  .popular-business .product-data .card .set-pos, .popular-business .dealblock .card .set-pos, .popular-business .new-this-week .card .set-pos, .popular-business .recommended .card .set-pos, .popular-business .new-banner .card .set-pos {\n    position: absolute;\n    top: 0px; }\n  .popular-business .product-data .card .set-pos .content, .popular-business .dealblock .card .set-pos .content, .popular-business .new-this-week .card .set-pos .content, .popular-business .recommended .card .set-pos .content, .popular-business .new-banner .card .set-pos .content {\n      font-size: 12px;\n      margin: 10px 5px;\n      color: white;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      width: 185px;\n      white-space: nowrap; }\n  .popular-business .product-data .card .card-body, .popular-business .dealblock .card .card-body, .popular-business .new-this-week .card .card-body, .popular-business .recommended .card .card-body, .popular-business .new-banner .card .card-body {\n    padding: 5px; }\n  .popular-business .product-data .card .card-body .fa-set, .popular-business .dealblock .card .card-body .fa-set, .popular-business .new-this-week .card .card-body .fa-set, .popular-business .recommended .card .card-body .fa-set, .popular-business .new-banner .card .card-body .fa-set {\n      border: 2px solid #dc3545;\n      padding: 7px;\n      border-radius: 50%;\n      color: #dc3545;\n      height: 30px;\n      width: 30px;\n      text-align: center; }\n  .popular-business .product-data .card .image, .popular-business .dealblock .card .image, .popular-business .new-this-week .card .image, .popular-business .recommended .card .image, .popular-business .new-banner .card .image {\n    background-color: #000000f0;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px; }\n  .popular-business .product-data .card .item, .popular-business .dealblock .card .item, .popular-business .new-this-week .card .item, .popular-business .recommended .card .item, .popular-business .new-banner .card .item {\n    position: absolute;\n    right: 10px;\n    width: 60px;\n    bottom: 33%;\n    border: 3px solid #fff;\n    border-radius: 50%; }\n  .popular-business .product-data .card .make, .popular-business .dealblock .card .make, .popular-business .new-this-week .card .make, .popular-business .recommended .card .make, .popular-business .new-banner .card .make {\n    color: #253773 !important;\n    font-weight: 500 !important;\n    margin: 5px !important;\n    font-size: 14px !important;\n    width: 97%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .popular-business .product-data .card .value, .popular-business .dealblock .card .value, .popular-business .new-this-week .card .value, .popular-business .recommended .card .value, .popular-business .new-banner .card .value {\n    color: orange;\n    font-weight: bolder; }\n  .popular-business .product-data .card:hover, .popular-business .dealblock .card:hover, .popular-business .new-this-week .card:hover, .popular-business .recommended .card:hover, .popular-business .new-banner .card:hover {\n    box-shadow: 0px 0px 10px #928e8e; }\n  .popular-business .product-data .card .description, .popular-business .dealblock .card .description, .popular-business .new-this-week .card .description, .popular-business .recommended .card .description, .popular-business .new-banner .card .description {\n    font-weight: 400 !important;\n    font-size: 12px !important;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 205px;\n    overflow: hidden;\n    margin: 5px;\n    color: #585757 !important; }\n  .popular-business .product-data .card .heading, .popular-business .dealblock .card .heading, .popular-business .new-this-week .card .heading, .popular-business .recommended .card .heading, .popular-business .new-banner .card .heading {\n    color: #dc3545;\n    font-weight: 600;\n    margin: 15px 5px 5px;\n    font-size: 16px;\n    outline: none !important;\n    width: 75%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .popular-business .product-data .thunder-badge, .popular-business .dealblock .thunder-badge, .popular-business .new-this-week .thunder-badge, .popular-business .recommended .thunder-badge, .popular-business .new-banner .thunder-badge {\n  position: absolute;\n  left: 0px;\n  z-index: 9;\n  margin: 10px 5px;\n  padding: 5px 6px;\n  background: transparent;\n  color: #d2232a; }\n  /*animation css*/\n  .hovereffect {\n  width: 100%;\n  height: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: pointer; }\n  .hovereffect .overlay {\n  width: 100%;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: auto;\n  bottom: 0;\n  padding: 5px;\n  height: 45px;\n  background: #f7443c;\n  color: #fff;\n  transition: -webkit-transform 0.35s;\n  transition: transform 0.35s;\n  transition: transform 0.35s, -webkit-transform 0.35s;\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n  .hovereffect img {\n  display: block;\n  position: relative;\n  transition: -webkit-transform 0.35s;\n  transition: transform 0.35s;\n  transition: transform 0.35s, -webkit-transform 0.35s; }\n  .hovereffect:hover img {\n  -webkit-transform: translate3d(0, -10%, 0);\n  transform: translate3d(0, -10%, 0); }\n  .hovereffect a.info {\n  display: inline-block;\n  text-decoration: none;\n  padding: 7px 14px;\n  text-transform: uppercase;\n  color: #fff;\n  border: 1px solid #fff;\n  margin: 50px 0 0 0;\n  background-color: transparent; }\n  .hovereffect a.info:hover {\n  box-shadow: 0 0 5px #fff; }\n  .hovereffect p.icon-links a {\n  float: left;\n  color: #fff !important;\n  font-size: 1.4em; }\n  .hovereffect:hover p.icon-links a:hover,\n.hovereffect:hover p.icon-links a:focus {\n  color: #252d31; }\n  .hovereffect p.icon-links a {\n  transition: -webkit-transform 0.35s;\n  transition: transform 0.35s;\n  transition: transform 0.35s, -webkit-transform 0.35s;\n  -webkit-transform: translate3d(0, 200%, 0);\n  transform: translate3d(0, 200%, 0);\n  visibility: visible; }\n  .hovereffect p.icon-links a span:before {\n  display: inline-block;\n  padding: 8px 10px;\n  speak: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  .hovereffect:hover .overlay,\n.hovereffect:hover p.icon-links a {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n  .hovereffect:hover p.icon-links a:nth-child(3) {\n  transition-delay: 0.1s; }\n  .hovereffect:hover p.icon-links a:nth-child(2) {\n  transition-delay: 0.15s; }\n  .hovereffect:hover p.icon-links a:first-child {\n  transition-delay: 0.2s; }\n  /*animation css*/\n  .owl-carousel .owl-nav button.owl-prev,\n.owl-carousel .owl-nav button.owl-next,\n.owl-carousel button.owl-dot {\n  border: 5px solid #ddd !important;\n  border-radius: 50% !important; }\n  @media screen and (min-width: 991px) and (max-width: 1024px) {\n  .nav-pills .nav-link {\n    padding: 6px !important;\n    font-size: 12px !important; }\n  .product-data .card, .dealblock .card, .new-this-week .card, .recommended .card, .new-banner .card {\n    width: 245px; }\n    .product-data .card .badge-secondary, .dealblock .card .badge-secondary, .new-this-week .card .badge-secondary, .recommended .card .badge-secondary, .new-banner .card .badge-secondary {\n      font-size: 12px; }\n    .product-data .card .set-pos .heading, .dealblock .card .set-pos .heading, .new-this-week .card .set-pos .heading, .recommended .card .set-pos .heading, .new-banner .card .set-pos .heading {\n      font-size: 12px; }\n    .product-data .card .set-pos .content, .dealblock .card .set-pos .content, .new-this-week .card .set-pos .content, .recommended .card .set-pos .content, .new-banner .card .set-pos .content {\n      font-size: 12px; }\n    .product-data .card .set-pos .badge, .dealblock .card .set-pos .badge, .new-this-week .card .set-pos .badge, .recommended .card .set-pos .badge, .new-banner .card .set-pos .badge {\n      font-size: 66%; }\n    .product-data .card .set-pos .item, .dealblock .card .set-pos .item, .new-this-week .card .set-pos .item, .recommended .card .set-pos .item, .new-banner .card .set-pos .item {\n      width: 50px; } }\n  .dropdown-menu.show {\n  top: 0px !important;\n  left: 100% !important;\n  border-radius: 0px !important; }\n  .dropright .dropdown-toggle::after {\n  vertical-align: 0;\n  border: none; }\n"

/***/ }),

/***/ "./src/app/layout/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    // 
    function HomeComponent(data) {
        this.data = data;
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            navSpeed: 700,
            navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            dots: true,
            nav: true,
        };
        this.mainBanner = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 100,
            navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: true,
        };
        this.bestSeller = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 100,
            navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: true
        };
        // 
        this.isScrolled = false;
        this.currPos = 0;
        this.startPos = 0;
        this.changePos = 100;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.gestList();
    };
    HomeComponent.prototype.gestList = function () {
        var _this = this;
        this.data.getData().subscribe(function (res) { _this.list = res; });
    };
    HomeComponent.prototype.onWindowScroll = function () {
        var currPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (currPos >= this.changePos) {
            this.isScrolled = true;
        }
        else {
            this.isScrolled = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onWindowScroll", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/layout/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/layout/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/layout/category-list/category-list.component.ts");
/* harmony import */ var _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-detail/category-detail.component */ "./src/app/layout/category-detail/category-detail.component.ts");
/* harmony import */ var _add_details_add_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-details/add-details.component */ "./src/app/layout/add-details/add-details.component.ts");
/* harmony import */ var _auth_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/loginpage/loginpage.component */ "./src/app/auth/loginpage/loginpage.component.ts");
/* harmony import */ var _category_map_category_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category-map/category-map.component */ "./src/app/layout/category-map/category-map.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/layout/profile/profile.component.ts");
/* harmony import */ var _add_image_add_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-image/add-image.component */ "./src/app/layout/add-image/add-image.component.ts");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/layout/add-category/add-category.component.ts");
/* harmony import */ var _add_specific_add_specific_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-specific/add-specific.component */ "./src/app/layout/add-specific/add-specific.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [{
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            },
            {
                path: 'category-list',
                component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListComponent"]
            },
            {
                path: 'category-detail',
                component: _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_5__["CategoryDetailComponent"]
            },
            {
                path: 'add-details',
                component: _add_details_add_details_component__WEBPACK_IMPORTED_MODULE_6__["AddDetailsComponent"]
            },
            {
                path: 'loginpage',
                component: _auth_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_7__["LoginpageComponent"]
            },
            {
                path: 'category-map',
                component: _category_map_category_map_component__WEBPACK_IMPORTED_MODULE_8__["CategoryMapComponent"]
            },
            {
                path: 'my-profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]
            },
            {
                path: 'add-image',
                component: _add_image_add_image_component__WEBPACK_IMPORTED_MODULE_10__["AddImageComponent"]
            },
            {
                path: 'add-category',
                component: _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_11__["AddCategoryComponent"]
            },
            {
                path: 'add-specific',
                component: _add_specific_add_specific_component__WEBPACK_IMPORTED_MODULE_12__["AddSpecificComponent"]
            }
        ]
    }];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/layout/add-category/add-category.component.ts");
/* harmony import */ var _add_details_add_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-details/add-details.component */ "./src/app/layout/add-details/add-details.component.ts");
/* harmony import */ var _add_image_add_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-image/add-image.component */ "./src/app/layout/add-image/add-image.component.ts");
/* harmony import */ var _add_specific_add_specific_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-specific/add-specific.component */ "./src/app/layout/add-specific/add-specific.component.ts");
/* harmony import */ var _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category-detail/category-detail.component */ "./src/app/layout/category-detail/category-detail.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/layout/category-list/category-list.component.ts");
/* harmony import */ var _category_map_category_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category-map/category-map.component */ "./src/app/layout/category-map/category-map.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/layout/profile/profile.component.ts");
/* harmony import */ var _auth_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../auth/header/header.component */ "./src/app/auth/header/header.component.ts");
/* harmony import */ var _auth_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../auth/footer/footer.component */ "./src/app/auth/footer/footer.component.ts");
/* harmony import */ var _auth_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../auth/loginpage/loginpage.component */ "./src/app/auth/loginpage/loginpage.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_21__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__["CarouselModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_21__["OwlModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_18__["NgxGalleryModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ' //Google API key for maps
                })
            ],
            declarations: [
                _auth_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _auth_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _auth_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_16__["LoginpageComponent"],
                _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_5__["AddCategoryComponent"],
                _add_details_add_details_component__WEBPACK_IMPORTED_MODULE_6__["AddDetailsComponent"],
                _add_image_add_image_component__WEBPACK_IMPORTED_MODULE_7__["AddImageComponent"],
                _add_specific_add_specific_component__WEBPACK_IMPORTED_MODULE_8__["AddSpecificComponent"],
                _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_9__["CategoryDetailComponent"],
                _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_9__["CategoryDetailComponent"],
                _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__["CategoryListComponent"],
                _category_map_category_map_component__WEBPACK_IMPORTED_MODULE_11__["CategoryMapComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/profile/profile.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/profile/profile.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"profile-page\">\n  <div class=\"container\">\n    <div class=\"row set-margin\">\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"col-md-12\">\n              <div class=\"media\">\n                <img class=\"mr-3\" src=\"./assets/img/user-img.png\" alt=\"Generic placeholder image\">\n                <div class=\"media-body\">\n                  <h6 class=\"mt-0\">Jason Stalin</h6>\n                  <h6 class=\"m-0 text-primary\">Jason@Singapore.in </h6>\n                  <p class=\"m-0\">Joined 3years Ago\n                    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                  </p>\n                  <p class=\"mt-0 text-primary\">Verified\n                    <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                  </p>\n                </div>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary set-block btn-block\">Follow</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-sm-12\">\n            <div class=\"card \">\n              <div class=\"card-body\">\n                <h6 class=\"card-heading text-center\">Feedback</h6>\n                <div class=\"show-right2\">\n                  <ngb-tabset type=\"pills\">\n                    <ngb-tab>\n                      <ng-template ngbTabTitle>\n                        <p calss=\"text-muted\"><i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i></p>Positive\n                      </ng-template>\n                    </ngb-tab>\n                    <ngb-tab>\n                      <ng-template ngbTabTitle>\n                        <p calss=\"text-muted\"><i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i></p>Negative\n                      </ng-template>\n                    </ngb-tab>\n                    <ngb-tab>\n                      <ng-template ngbTabTitle>\n                        <p calss=\"text-muted\"><i class=\"fa fa-meh-o\" aria-hidden=\"true\"></i></p>Neutral\n                      </ng-template>\n                    </ngb-tab>\n                  </ngb-tabset>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <form>\n                  <div class=\"form-group\">\n                    <label for=\"exampleFormControlTextarea1\">Example textarea</label>\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <a href=\"#\">www.buybysiness.com</a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"show-right\">\n              <ngb-tabset type=\"pills \">\n                <ngb-tab>\n                  <ng-template ngbTabTitle>\n                    <p calss=\"text-muted\">2</p>Listings\n                  </ng-template>\n                </ngb-tab>\n                <ngb-tab>\n                  <ng-template ngbTabTitle>\n                    <p calss=\"text-muted\">3</p>Followers\n                  </ng-template>\n                </ngb-tab>\n                <ngb-tab>\n                  <ng-template ngbTabTitle>\n                    <p calss=\"text-muted\">2</p>Followings\n                  </ng-template>\n                </ngb-tab>\n                <ngb-tab>\n                  <ng-template ngbTabTitle>\n                    <p calss=\"text-muted\">46</p>Coins\n                  </ng-template>\n                </ngb-tab>\n              </ngb-tabset>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <ul class=\"list-inline-item product-data pl-0\">\n              <li class=\"list-inline-item\">\n                <div class=\"card\" routerLink=\"/category-detail\">\n                  <div class=\"image hovereffectd\">\n                    <span class=\"badge badge-secondary\">\n                      <i class=\"fa fa-heart\" aria-hidden=\"true\">&nbsp;</i>\n                      45\n                    </span>\n                    <img class=\"card-img-top get-img\" src=\"./assets/img/car.png\" alt=\"Card image cap\">\n                    <div class=\"set-pos overlayd\">\n                      <h6 class=\"content\">\n                        <i class=\"fa fa-map-marker mr-2\" aria-hidden=\"true\"></i>1681 Lake Shore Boulevard\n                        East</h6>\n                      <h6 class=\"content mt-2\">\n                        <i class=\"fa fa-phone mr-2\" aria-hidden=\"true\"></i>+81 989514785\n                      </h6>\n\n                    </div>\n                  </div>\n                  <div class=\"user-img\">\n                    <img src=\"./assets/img/user-img.png\" class=\"item\">\n                  </div>\n                  <div class=\"card-body\">\n                    <ul class=\"list-inline set-inline\">\n                      <h6 class=\"heading\">Yuvan Transport</h6>\n                      <h6 class=\"make m-0\"> Benz</h6>\n                      <h6 class=\"make m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>25,600</h6>\n                      <p class=\"description\">Powerfull and fuel efficient at 2.0 Liter</p>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n              <li class=\"list-inline-item\">\n                <div class=\"card\" routerLink=\"/category-detail\">\n                  <div class=\"image hovereffectd\">\n                    <span class=\"badge badge-secondary\">\n                      <i class=\"fa fa-heart\" aria-hidden=\"true\">&nbsp;</i>\n                      45\n                    </span>\n                    <img class=\"card-img-top get-img\" src=\"./assets/img/car.png\" alt=\"Card image cap\">\n                    <div class=\"set-pos overlayd\">\n                      <h6 class=\"content\">\n                        <i class=\"fa fa-map-marker mr-2\" aria-hidden=\"true\"></i>1681 Lake Shore Boulevard\n                        East</h6>\n                      <h6 class=\"content mt-2\">\n                        <i class=\"fa fa-phone mr-2\" aria-hidden=\"true\"></i>+81 989514785\n                      </h6>\n\n                    </div>\n                  </div>\n                  <div class=\"user-img\">\n                    <img src=\"./assets/img/user-img.png\" class=\"item\">\n                  </div>\n                  <div class=\"card-body\">\n                    <ul class=\"list-inline set-inline\">\n                      <h6 class=\"heading\">Yuvan Transport</h6>\n                      <h6 class=\"make m-0\"> Benz</h6>\n                      <h6 class=\"make m-0\"><i class=\"fa fa-usd mr-1\" aria-hidden=\"true\"></i>25,600</h6>\n                      <p class=\"description\">Powerfull and fuel efficient at 2.0 Liter</p>\n                    </ul>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/layout/profile/profile.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/profile/profile.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-page {\n  padding-top: 120px; }\n  .profile-page .set-margin {\n    margin: 25px 0px; }\n  .profile-page .set-margin .card {\n      border-radius: 0px; }\n  .profile-page .set-margin .card .card-body {\n        padding: 10px; }\n  .show-right {\n  padding: 20px 0px; }\n  .show-right .nav-pills .nav-link.active {\n    width: 175px !important;\n    border-radius: 0px !important;\n    text-align: center !important;\n    padding: 5px !important;\n    background-color: #ff0000 !important; }\n  .product-data .card {\n  border-radius: 5px;\n  height: 290px;\n  margin: 10px 0px;\n  box-shadow: 1px 1px 5px #cccbcb;\n  transition: .5s; }\n  .product-data .card .card-img-top {\n    height: 215px; }\n  .product-data .card .badge-secondary {\n    color: #fff;\n    background-color: #000000;\n    padding: 5px 10px;\n    margin: 10px 5px;\n    float: right;\n    border-radius: 15px;\n    font-size: 14px;\n    position: absolute;\n    text-align: right;\n    right: 0px;\n    z-index: 99; }\n  .product-data .card .badge-secondary .fa {\n      color: #f83c3c; }\n  .product-data .card .set-pos {\n    position: absolute;\n    top: 0px; }\n  .product-data .card .set-pos .content {\n      font-size: 12px;\n      margin: 10px 5px;\n      color: white;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      width: 185px;\n      white-space: nowrap; }\n  .product-data .card .card-body {\n    padding: 5px; }\n  .product-data .card .card-body .fa-set {\n      border: 2px solid #dc3545;\n      padding: 7px;\n      border-radius: 50%;\n      color: #dc3545;\n      height: 30px;\n      width: 30px;\n      text-align: center; }\n  .product-data .card .image {\n    background-color: #000000f0;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px; }\n  .product-data .card .item {\n    position: absolute;\n    right: 10px;\n    width: 60px;\n    bottom: 33%;\n    border: 3px solid #fff;\n    border-radius: 50%; }\n  .product-data .card .make {\n    color: #253773 !important;\n    font-weight: 500 !important;\n    margin: 5px !important;\n    font-size: 14px !important;\n    width: 97%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .product-data .card .value {\n    color: orange;\n    font-weight: bolder; }\n  .product-data .card:hover {\n    box-shadow: 0px 0px 10px #928e8e; }\n  .product-data .card .description {\n    font-weight: 400 !important;\n    font-size: 12px !important;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 205px;\n    overflow: hidden;\n    margin: 5px;\n    color: #585757 !important; }\n  .product-data .card .heading {\n    color: #dc3545;\n    font-weight: 600;\n    margin: 15px 5px 5px;\n    font-size: 16px;\n    outline: none !important;\n    width: 75%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .product-data .thunder-badge {\n  position: absolute;\n  left: 0px;\n  z-index: 9;\n  margin: 10px 5px;\n  padding: 5px 6px; }\n  .hovereffectd {\n  width: 100%;\n  height: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: pointer; }\n  .hovereffectd .overlayd {\n  width: 100%;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: auto;\n  bottom: 0;\n  padding: 50px 5px;\n  height: 215px;\n  text-align: left;\n  background: #000000cf;\n  color: #fff;\n  transition: -webkit-transform 0.35s;\n  transition: transform 0.35s;\n  transition: transform 0.35s, -webkit-transform 0.35s;\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n  .hovereffectd .get-img {\n  display: block;\n  position: relative;\n  transition: -webkit-transform 0.35s;\n  transition: transform 0.35s;\n  transition: transform 0.35s, -webkit-transform 0.35s; }\n  .hovereffectd:hover .get-img {\n  -webkit-transform: translate3d(0, -10%, 0);\n  transform: translate3d(0, -10%, 0); }\n  .hovereffectd a.info {\n  text-decoration: none;\n  padding: 7px 14px;\n  text-transform: uppercase;\n  color: #fff;\n  border: 1px solid #fff;\n  margin: 50px 0 0 0;\n  background-color: transparent; }\n  .hovereffectd a.info:hover {\n  box-shadow: 0 0 5px #fff; }\n  .hovereffectd p.icon-links a {\n  float: left;\n  color: #fff !important;\n  font-size: 1.4em; }\n  .hovereffectd p.icon-links a {\n  transition: -webkit-transform 0.35s;\n  transition: transform 0.35s;\n  transition: transform 0.35s, -webkit-transform 0.35s;\n  -webkit-transform: translate3d(0, 200%, 0);\n  transform: translate3d(0, 200%, 0);\n  visibility: visible; }\n  .hovereffectd p.icon-links a span:before {\n  display: inline-block;\n  padding: 8px 10px;\n  speak: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  .hovereffectd:hover .overlayd,\n.hovereffectd:hover p.icon-links a {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n  .hovereffectd:hover p.icon-links a:nth-child(3) {\n  transition-delay: 0.1s; }\n  .hovereffectd:hover p.icon-links a:nth-child(2) {\n  transition-delay: 0.15s; }\n  .hovereffectd:hover p.icon-links a:first-child {\n  transition-delay: 0.2s; }\n"

/***/ }),

/***/ "./src/app/layout/profile/profile.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/layout/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/layout/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map