(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = exports.QinExplorer = exports.QinEdit = exports.QinBase = exports.QinTools = exports.QinPath = exports.QinCombo = exports.QinColumn = exports.QinLine = exports.QinButton = exports.QinMenuItem = exports.QinMenu = exports.QinMutantsArm = exports.QinMutants = exports.QinChooser = exports.QinField = exports.qinAssetUrl = exports.QinAsset = exports.QinStack = exports.QinPanel = exports.QinTabs = exports.QinIcon = exports.QinString = exports.QinLabel = exports.QinBaseStyle = exports.QinBoolean = void 0;
var qin_boolean_1 = require("./qin-boolean");
Object.defineProperty(exports, "QinBoolean", { enumerable: true, get: function () { return qin_boolean_1.QinBoolean; } });
var qin_base_style_1 = require("./qin-base-style");
Object.defineProperty(exports, "QinBaseStyle", { enumerable: true, get: function () { return qin_base_style_1.QinBaseStyle; } });
var qin_label_1 = require("./qin-label");
Object.defineProperty(exports, "QinLabel", { enumerable: true, get: function () { return qin_label_1.QinLabel; } });
var qin_string_1 = require("./qin-string");
Object.defineProperty(exports, "QinString", { enumerable: true, get: function () { return qin_string_1.QinString; } });
var qin_icon_1 = require("./qin-icon");
Object.defineProperty(exports, "QinIcon", { enumerable: true, get: function () { return qin_icon_1.QinIcon; } });
var qin_tabs_1 = require("./qin-tabs");
Object.defineProperty(exports, "QinTabs", { enumerable: true, get: function () { return qin_tabs_1.QinTabs; } });
var qin_panel_1 = require("./qin-panel");
Object.defineProperty(exports, "QinPanel", { enumerable: true, get: function () { return qin_panel_1.QinPanel; } });
var qin_stack_1 = require("./qin-stack");
Object.defineProperty(exports, "QinStack", { enumerable: true, get: function () { return qin_stack_1.QinStack; } });
var qin_assets_1 = require("./qin-assets");
Object.defineProperty(exports, "QinAsset", { enumerable: true, get: function () { return qin_assets_1.QinAsset; } });
var qin_assets_2 = require("./qin-assets");
Object.defineProperty(exports, "qinAssetUrl", { enumerable: true, get: function () { return qin_assets_2.qinAssetUrl; } });
var qin_field_1 = require("./qin-field");
Object.defineProperty(exports, "QinField", { enumerable: true, get: function () { return qin_field_1.QinField; } });
var qin_chooser_1 = require("./qin-chooser");
Object.defineProperty(exports, "QinChooser", { enumerable: true, get: function () { return qin_chooser_1.QinChooser; } });
var qin_mutants_1 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutants", { enumerable: true, get: function () { return qin_mutants_1.QinMutants; } });
var qin_mutants_2 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutantsArm", { enumerable: true, get: function () { return qin_mutants_2.QinMutantsArm; } });
var qin_menu_1 = require("./qin-menu");
Object.defineProperty(exports, "QinMenu", { enumerable: true, get: function () { return qin_menu_1.QinMenu; } });
var qin_menu_2 = require("./qin-menu");
Object.defineProperty(exports, "QinMenuItem", { enumerable: true, get: function () { return qin_menu_2.QinMenuItem; } });
var qin_button_1 = require("./qin-button");
Object.defineProperty(exports, "QinButton", { enumerable: true, get: function () { return qin_button_1.QinButton; } });
var qin_line_1 = require("./qin-line");
Object.defineProperty(exports, "QinLine", { enumerable: true, get: function () { return qin_line_1.QinLine; } });
var qin_column_1 = require("./qin-column");
Object.defineProperty(exports, "QinColumn", { enumerable: true, get: function () { return qin_column_1.QinColumn; } });
var qin_combo_1 = require("./qin-combo");
Object.defineProperty(exports, "QinCombo", { enumerable: true, get: function () { return qin_combo_1.QinCombo; } });
var qin_path_1 = require("./qin-path");
Object.defineProperty(exports, "QinPath", { enumerable: true, get: function () { return qin_path_1.QinPath; } });
var qin_tools_1 = require("./qin-tools");
Object.defineProperty(exports, "QinTools", { enumerable: true, get: function () { return qin_tools_1.QinTools; } });
var qin_base_1 = require("./qin-base");
Object.defineProperty(exports, "QinBase", { enumerable: true, get: function () { return qin_base_1.QinBase; } });
var qin_edit_1 = require("./qin-edit");
Object.defineProperty(exports, "QinEdit", { enumerable: true, get: function () { return qin_edit_1.QinEdit; } });
var qin_explorer_1 = require("./qin-explorer");
Object.defineProperty(exports, "QinExplorer", { enumerable: true, get: function () { return qin_explorer_1.QinExplorer; } });
var qin_integer_1 = require("./qin-integer");
Object.defineProperty(exports, "QinInteger", { enumerable: true, get: function () { return qin_integer_1.QinInteger; } });

},{"./qin-assets":2,"./qin-base":4,"./qin-base-style":3,"./qin-boolean":5,"./qin-button":6,"./qin-chooser":7,"./qin-column":8,"./qin-combo":9,"./qin-edit":10,"./qin-explorer":11,"./qin-field":12,"./qin-icon":13,"./qin-integer":14,"./qin-label":15,"./qin-line":16,"./qin-menu":17,"./qin-mutants":18,"./qin-panel":19,"./qin-path":20,"./qin-stack":21,"./qin-string":22,"./qin-tabs":23,"./qin-tools":24}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qinAssetUrl = exports.QinAsset = void 0;
var QinAsset;
(function (QinAsset) {
    QinAsset["ExplorerMovie"] = "explorer-movie.png";
    QinAsset["FaceUpload"] = "face-upload.png";
    QinAsset["FaceNews"] = "face-news.png";
    QinAsset["BackgroundNormal24"] = "background-normal-24.png";
    QinAsset["BackgroundLight25"] = "background-light-25.png";
    QinAsset["FaceImage"] = "face-image.png";
    QinAsset["ExplorerFile"] = "explorer-file.png";
    QinAsset["FaceFolder"] = "face-folder.png";
    QinAsset["BackgroundNormal13"] = "background-normal-13.png";
    QinAsset["FaceMessage"] = "face-message.png";
    QinAsset["SourceSerifPro"] = "source-serif-pro.ttf";
    QinAsset["BackgroundDark"] = "background-dark.png";
    QinAsset["BackgroundDark23"] = "background-dark-23.png";
    QinAsset["BackgroundNormal2"] = "background-normal-2.png";
    QinAsset["BackgroundNormal4"] = "background-normal-4.png";
    QinAsset["BackgroundNormal25"] = "background-normal-25.png";
    QinAsset["FaceCart"] = "face-cart.png";
    QinAsset["FrameResize"] = "frame-resize.png";
    QinAsset["BackgroundDark18"] = "background-dark-18.png";
    QinAsset["Qinpel"] = "qinpel.png";
    QinAsset["BackgroundLight12"] = "background-light-12.png";
    QinAsset["ExplorerZipped"] = "explorer-zipped.png";
    QinAsset["BackgroundNormal29"] = "background-normal-29.png";
    QinAsset["BackgroundDark26"] = "background-dark-26.png";
    QinAsset["Qinpel48"] = "qinpel-48.png";
    QinAsset["FaceUnlink"] = "face-unlink.png";
    QinAsset["BackgroundLight13"] = "background-light-13.png";
    QinAsset["BackgroundDark9"] = "background-dark-9.png";
    QinAsset["FaceWifi"] = "face-wifi.png";
    QinAsset["BackgroundDark5"] = "background-dark-5.png";
    QinAsset["FaceUnlock"] = "face-unlock.png";
    QinAsset["FaceGear"] = "face-gear.png";
    QinAsset["FaceConfirm"] = "face-confirm.png";
    QinAsset["BackgroundDark14"] = "background-dark-14.png";
    QinAsset["BackgroundLight4"] = "background-light-4.png";
    QinAsset["BackgroundLight5"] = "background-light-5.png";
    QinAsset["FaceTrash"] = "face-trash.png";
    QinAsset["BackgroundDark1"] = "background-dark-1.png";
    QinAsset["BackgroundNormal18"] = "background-normal-18.png";
    QinAsset["SourceSansPro"] = "source-sans-pro.ttf";
    QinAsset["FaceMicDisable"] = "face-mic-disable.png";
    QinAsset["FaceMic"] = "face-mic.png";
    QinAsset["FaceEyeDisable"] = "face-eye-disable.png";
    QinAsset["BackgroundNormal23"] = "background-normal-23.png";
    QinAsset["BackgroundLight20"] = "background-light-20.png";
    QinAsset["FaceFilter"] = "face-filter.png";
    QinAsset["ExplorerExec"] = "explorer-exec.png";
    QinAsset["FaceAdd"] = "face-add.png";
    QinAsset["FaceSpeakerDisable"] = "face-speaker-disable.png";
    QinAsset["FaceControl"] = "face-control.png";
    QinAsset["FaceCalendar"] = "face-calendar.png";
    QinAsset["FaceArrowUp"] = "face-arrow-up.png";
    QinAsset["ExplorerApps"] = "explorer-apps.png";
    QinAsset["FaceShield"] = "face-shield.png";
    QinAsset["FaceLock"] = "face-lock.png";
    QinAsset["FaceLink"] = "face-link.png";
    QinAsset["FaceSend"] = "face-send.png";
    QinAsset["BackgroundNormal1"] = "background-normal-1.png";
    QinAsset["BackgroundLight1"] = "background-light-1.png";
    QinAsset["FaceMinus"] = "face-minus.png";
    QinAsset["FaceLabel"] = "face-label.png";
    QinAsset["FaceUndo"] = "face-undo.png";
    QinAsset["ExplorerImage"] = "explorer-image.png";
    QinAsset["BackgroundNormal12"] = "background-normal-12.png";
    QinAsset["ExplorerMusic"] = "explorer-music.png";
    QinAsset["BackgroundLight7"] = "background-light-7.png";
    QinAsset["FaceMapDisable"] = "face-map-disable.png";
    QinAsset["LoginKey"] = "login-key.png";
    QinAsset["BackgroundLight24"] = "background-light-24.png";
    QinAsset["BackgroundDark27"] = "background-dark-27.png";
    QinAsset["FaceFile"] = "face-file.png";
    QinAsset["BackgroundLight"] = "background-light.png";
    QinAsset["BackgroundNormal20"] = "background-normal-20.png";
    QinAsset["BackgroundDark21"] = "background-dark-21.png";
    QinAsset["FrameStatusInfo"] = "frame-status-info.png";
    QinAsset["BackgroundLight19"] = "background-light-19.png";
    QinAsset["BackgroundDark22"] = "background-dark-22.png";
    QinAsset["FaceArrowLeft"] = "face-arrow-left.png";
    QinAsset["BackgroundDark24"] = "background-dark-24.png";
    QinAsset["BackgroundLight11"] = "background-light-11.png";
    QinAsset["FaceSettings"] = "face-settings.png";
    QinAsset["FaceMovie"] = "face-movie.png";
    QinAsset["BackgroundDark4"] = "background-dark-4.png";
    QinAsset["BackgroundNormal26"] = "background-normal-26.png";
    QinAsset["BackTiny01"] = "back-tiny-01.png";
    QinAsset["BackgroundNormal21"] = "background-normal-21.png";
    QinAsset["BackgroundNormal15"] = "background-normal-15.png";
    QinAsset["BackgroundNormal5"] = "background-normal-5.png";
    QinAsset["FaceCheck"] = "face-check.png";
    QinAsset["BackgroundNormal6"] = "background-normal-6.png";
    QinAsset["BackgroundLight28"] = "background-light-28.png";
    QinAsset["BackgroundDark6"] = "background-dark-6.png";
    QinAsset["FaceHome"] = "face-home.png";
    QinAsset["FaceStar"] = "face-star.png";
    QinAsset["ExplorerDir"] = "explorer-dir.png";
    QinAsset["FaceCircle"] = "face-circle.png";
    QinAsset["BackgroundLight0"] = "background-light-0.png";
    QinAsset["FaceAttach"] = "face-attach.png";
    QinAsset["FacePaste"] = "face-paste.png";
    QinAsset["BackgroundNormal16"] = "background-normal-16.png";
    QinAsset["BackgroundNormal8"] = "background-normal-8.png";
    QinAsset["BackgroundNormal19"] = "background-normal-19.png";
    QinAsset["FacePlus"] = "face-plus.png";
    QinAsset["BackgroundLight14"] = "background-light-14.png";
    QinAsset["BackgroundLight8"] = "background-light-8.png";
    QinAsset["FacePhone"] = "face-phone.png";
    QinAsset["BackgroundDark10"] = "background-dark-10.png";
    QinAsset["BackgroundLight22"] = "background-light-22.png";
    QinAsset["FaceCog"] = "face-cog.png";
    QinAsset["BackgroundDark8"] = "background-dark-8.png";
    QinAsset["BackgroundNormal27"] = "background-normal-27.png";
    QinAsset["FaceContact"] = "face-contact.png";
    QinAsset["FaceExit"] = "face-exit.png";
    QinAsset["FaceCompass"] = "face-compass.png";
    QinAsset["BackgroundNormal11"] = "background-normal-11.png";
    QinAsset["BackgroundLight18"] = "background-light-18.png";
    QinAsset["BackgroundLight17"] = "background-light-17.png";
    QinAsset["FaceClose"] = "face-close.png";
    QinAsset["FaceDownload"] = "face-download.png";
    QinAsset["FacePencil"] = "face-pencil.png";
    QinAsset["BackgroundLight10"] = "background-light-10.png";
    QinAsset["BackgroundDark15"] = "background-dark-15.png";
    QinAsset["BackgroundNormal17"] = "background-normal-17.png";
    QinAsset["FaceBellDisable"] = "face-bell-disable.png";
    QinAsset["BackgroundLight16"] = "background-light-16.png";
    QinAsset["BackgroundLight27"] = "background-light-27.png";
    QinAsset["BackgroundDark17"] = "background-dark-17.png";
    QinAsset["BackgroundLight23"] = "background-light-23.png";
    QinAsset["FaceEnter"] = "face-enter.png";
    QinAsset["BackgroundDark13"] = "background-dark-13.png";
    QinAsset["BackgroundNormal28"] = "background-normal-28.png";
    QinAsset["BackgroundNormal9"] = "background-normal-9.png";
    QinAsset["BackgroundNormal10"] = "background-normal-10.png";
    QinAsset["FaceBell"] = "face-bell.png";
    QinAsset["BackgroundNormal14"] = "background-normal-14.png";
    QinAsset["FrameMinimize"] = "frame-minimize.png";
    QinAsset["FaceCameraDisable"] = "face-camera-disable.png";
    QinAsset["BackgroundLight15"] = "background-light-15.png";
    QinAsset["FaceErase"] = "face-erase.png";
    QinAsset["BackgroundLight9"] = "background-light-9.png";
    QinAsset["FaceEye"] = "face-eye.png";
    QinAsset["BackgroundNormal0"] = "background-normal-0.png";
    QinAsset["FrameMenu"] = "frame-menu.png";
    QinAsset["BackgroundDark0"] = "background-dark-0.png";
    QinAsset["FaceMap"] = "face-map.png";
    QinAsset["BackgroundLight2"] = "background-light-2.png";
    QinAsset["FaceShare"] = "face-share.png";
    QinAsset["FaceWifiDisable"] = "face-wifi-disable.png";
    QinAsset["FrameStatusError"] = "frame-status-error.png";
    QinAsset["BackgroundNormal"] = "background-normal.png";
    QinAsset["FrameMaximize"] = "frame-maximize.png";
    QinAsset["FaceArrowRight"] = "face-arrow-right.png";
    QinAsset["BackgroundDark28"] = "background-dark-28.png";
    QinAsset["FaceSave"] = "face-save.png";
    QinAsset["FaceBag"] = "face-bag.png";
    QinAsset["BackgroundDark25"] = "background-dark-25.png";
    QinAsset["FaceRedo"] = "face-redo.png";
    QinAsset["FaceCopy"] = "face-copy.png";
    QinAsset["FaceEnlarge"] = "face-enlarge.png";
    QinAsset["BackgroundDark3"] = "background-dark-3.png";
    QinAsset["FaceSearch"] = "face-search.png";
    QinAsset["BackgroundDark11"] = "background-dark-11.png";
    QinAsset["BackgroundLight3"] = "background-light-3.png";
    QinAsset["FaceClock"] = "face-clock.png";
    QinAsset["BackgroundDark29"] = "background-dark-29.png";
    QinAsset["FaceShrink"] = "face-shrink.png";
    QinAsset["BackgroundDark20"] = "background-dark-20.png";
    QinAsset["FacePhoneDisable"] = "face-phone-disable.png";
    QinAsset["BackgroundDark19"] = "background-dark-19.png";
    QinAsset["BackgroundNormal3"] = "background-normal-3.png";
    QinAsset["BackgroundNormal22"] = "background-normal-22.png";
    QinAsset["FaceArrowDown"] = "face-arrow-down.png";
    QinAsset["BackgroundLight6"] = "background-light-6.png";
    QinAsset["FaceCamera"] = "face-camera.png";
    QinAsset["FaceCancel"] = "face-cancel.png";
    QinAsset["FaceMail"] = "face-mail.png";
    QinAsset["FaceDel"] = "face-del.png";
    QinAsset["BackgroundDark2"] = "background-dark-2.png";
    QinAsset["BackgroundLight29"] = "background-light-29.png";
    QinAsset["BackgroundLight21"] = "background-light-21.png";
    QinAsset["FrameClose"] = "frame-close.png";
    QinAsset["MenuDevtools"] = "menu-devtools.ico";
    QinAsset["ExplorerCmds"] = "explorer-cmds.png";
    QinAsset["FacePin"] = "face-pin.png";
    QinAsset["FacePerson"] = "face-person.png";
    QinAsset["FaceSpeaker"] = "face-speaker.png";
    QinAsset["BackgroundDark16"] = "background-dark-16.png";
    QinAsset["FaceHeart"] = "face-heart.png";
    QinAsset["BackgroundNormal7"] = "background-normal-7.png";
    QinAsset["BackgroundDark7"] = "background-dark-7.png";
    QinAsset["BackgroundLight26"] = "background-light-26.png";
    QinAsset["BackgroundDark12"] = "background-dark-12.png";
})(QinAsset = exports.QinAsset || (exports.QinAsset = {}));
function qinAssetUrl(asset) {
    return "/app/qinpel-app/assets/" + asset;
}
exports.qinAssetUrl = qinAssetUrl;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBaseStyle = void 0;
const qinpel_res_1 = require("qinpel-res");
class QinBaseStyle {
    constructor(element) {
        this.element = element;
    }
    putAsBody() {
        document.body.appendChild(this.element);
        qinpel_res_1.QinSkin.styleAsBody(this.element);
    }
    delAsBody() {
        document.body.removeChild(this.element);
    }
    putAsWhole() {
        this.putAsPositionAbsolute();
        this.putAsBounds(0, 0, 0, 0);
    }
    putAsEdit() {
        qinpel_res_1.QinSkin.styleAsEdit(this.element);
        this.element.tabIndex = 0;
    }
    putAsScroll() {
        this.element.style.overflow = "auto";
    }
    putAsMargin(margin) {
        this.element.style.margin = this.getPixelsOrInitial(margin);
    }
    putAsMarginTop(margin) {
        this.element.style.marginTop = this.getPixelsOrInitial(margin);
    }
    putAsMarginBottom(margin) {
        this.element.style.marginBottom = this.getPixelsOrInitial(margin);
    }
    putAsMarginLeft(margin) {
        this.element.style.marginLeft = this.getPixelsOrInitial(margin);
    }
    putAsMarginRight(margin) {
        this.element.style.marginRight = this.getPixelsOrInitial(margin);
    }
    putAsPadding(padding) {
        this.element.style.padding = this.getPixelsOrInitial(padding);
    }
    putAsPaddingTop(padding) {
        this.element.style.paddingTop = this.getPixelsOrInitial(padding);
    }
    putAsPaddingBottom(padding) {
        this.element.style.paddingBottom = this.getPixelsOrInitial(padding);
    }
    putAsPaddingLeft(padding) {
        this.element.style.paddingLeft = this.getPixelsOrInitial(padding);
    }
    putAsPaddingRight(padding) {
        this.element.style.paddingRight = this.getPixelsOrInitial(padding);
    }
    putAsBounds(top, right, bottom, left) {
        this.element.style.top = this.getPixelsOrInitial(top);
        this.element.style.right = this.getPixelsOrInitial(right);
        this.element.style.bottom = this.getPixelsOrInitial(bottom);
        this.element.style.left = this.getPixelsOrInitial(left);
    }
    putAsAllCentered() {
        this.element.style.textAlign = "center";
        this.element.style.alignItems = "center";
        this.element.style.alignContent = "center";
        this.element.style.verticalAlign = "middle";
    }
    putAsDisplayFlex() {
        this.element.style.display = "flex";
    }
    putAsDisplayInline() {
        this.element.style.display = "inline";
    }
    putAsDisplayInlineBlock() {
        this.element.style.display = "inline-block";
    }
    putAsPositionStatic() {
        this.element.style.position = "static";
    }
    putAsPositionAbsolute() {
        this.element.style.position = "absolute";
    }
    putAsPositionFixed() {
        this.element.style.position = "fixed";
    }
    putAsPositionRelative() {
        this.element.style.position = "relative";
    }
    putAsPositionSticky() {
        this.element.style.position = "sticky";
    }
    putAsPositionInitial() {
        this.element.style.position = "initial";
    }
    putAsFlexDirectionRow() {
        this.element.style.flexDirection = "row";
    }
    putAsFlexDirectionRowReverse() {
        this.element.style.flexDirection = "row-reverse";
    }
    putAsFlexDirectionColumn() {
        this.element.style.flexDirection = "column";
    }
    putAsFlexDirectionColumnReverse() {
        this.element.style.flexDirection = "column-reverse";
    }
    putAsFlexWrap() {
        this.element.style.flexWrap = "wrap";
    }
    putAsFlexWrapNot() {
        this.element.style.flexWrap = "nowrap";
    }
    putAsFlexWrapReverse() {
        this.element.style.flexWrap = "wrap-reverse";
    }
    putAsFlexMin() {
        this.element.style.flex = "none";
    }
    putAsFlexMax() {
        this.element.style.flex = "auto";
    }
    putAsWidth(width) {
        this.element.style.width = this.getPixelsOrInitial(width);
    }
    putAsHeight(height) {
        this.element.style.height = this.getPixelsOrInitial(height);
    }
    putAsSize(width, height) {
        this.element.style.width = this.getPixelsOrInitial(width);
        this.element.style.height = this.getPixelsOrInitial(height);
    }
    putAsMinWidth(width) {
        this.element.style.minWidth = this.getPixelsOrInitial(width);
    }
    putAsMinHeight(height) {
        this.element.style.minHeight = this.getPixelsOrInitial(height);
    }
    putAsMinSize(width, height) {
        this.element.style.minWidth = this.getPixelsOrInitial(width);
        this.element.style.minHeight = this.getPixelsOrInitial(height);
    }
    putAsMaxWidth(width) {
        this.element.style.maxWidth = this.getPixelsOrInitial(width);
    }
    putAsMaxHeight(height) {
        this.element.style.maxHeight = this.getPixelsOrInitial(height);
    }
    putAsMaxSize(width, height) {
        this.element.style.maxWidth = this.getPixelsOrInitial(width);
        this.element.style.maxHeight = this.getPixelsOrInitial(height);
    }
    putAsForeground(foreground) {
        this.element.style.color = foreground;
    }
    putAsBackground(background) {
        this.element.style.background = background;
    }
    putAsBackAsset(asset) {
        this.element.style.backgroundImage = "url('/app/qinpel-app/assets/" + asset + "')";
    }
    putAsBackInitial() {
        this.element.style.backgroundImage = "initial";
    }
    putAsZIndex(index) {
        if (index == null || index == undefined) {
            this.element.style.zIndex = "initial";
        }
        else {
            this.element.style.zIndex = index.toString();
        }
    }
    putAsDisabledSelection() {
        qinpel_res_1.QinSkin.disableSelection(this.element);
    }
    getPixelsOrInitial(value) {
        if (value == null || value == undefined) {
            return "initial";
        }
        return value + "px";
    }
}
exports.QinBaseStyle = QinBaseStyle;

},{"qinpel-res":25}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBase = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_style_1 = require("./qin-base-style");
const qin_tools_1 = require("./qin-tools");
class QinBase {
    constructor() {
        this._baseParent = null;
        this._baseChildren = [];
        this._baseDisplay = "initial";
        this._baseVisibility = "initial";
        this._style = null;
    }
    get qinpel() {
        return qin_tools_1.QinTools.qinpel();
    }
    get style() {
        if (this._style == null) {
            this._style = new qin_base_style_1.QinBaseStyle(this.getMain());
        }
        return this._style;
    }
    install(onBase) {
        this._baseParent = onBase;
        this._baseParent.appendChild(this);
    }
    unInstall() {
        this._baseParent.removeChild(this);
    }
    reInstall() {
        this._baseParent.appendChild(this);
    }
    unDisplay() {
        if (this.getMain().style.display !== "none") {
            this._baseDisplay = this.getMain().style.display;
            this.getMain().style.display = "none";
        }
    }
    reDisplay() {
        this.getMain().style.display = this._baseDisplay;
    }
    unVisible() {
        if (this.getMain().style.display !== "hidden") {
            this._baseVisibility = this.getMain().style.visibility;
            this.getMain().style.visibility = "hidden";
        }
    }
    reVisible() {
        this.getMain().style.visibility = this._baseVisibility;
    }
    appendChild(child) {
        this._baseChildren.push(child);
        this.getMain().appendChild(child.getMain());
    }
    removeChild(child) {
        let index = this._baseChildren.indexOf(child);
        if (index > -1) {
            this._baseChildren.splice(index, 1);
        }
        this.getMain().removeChild(child.getMain());
    }
    children() {
        return this._baseChildren;
    }
    clearChildren() {
        for (const child of this._baseChildren) {
            this.getMain().removeChild(child.getMain());
        }
        this._baseChildren = [];
    }
    addAction(action) {
        qinpel_res_1.QinArm.addAction(this.getMain(), action);
    }
    putTabIndex(index) {
        this.getMain().tabIndex = index;
    }
}
exports.QinBase = QinBase;

},{"./qin-base-style":3,"./qin-tools":24,"qinpel-res":25}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBoolean = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_edit_1 = require("./qin-edit");
const qin_icon_1 = require("./qin-icon");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
class QinBoolean extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinSpan = new qin_label_1.QinLabel();
        this._qinIcon = new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCircle);
        this._value = false;
        this._qinSpan.install(this._qinMain);
        this._qinIcon.install(this._qinSpan);
        this._qinSpan.style.putAsEdit();
        this._qinSpan.style.putAsDisplayFlex();
        this._qinSpan.style.putAsAllCentered();
        this._qinSpan.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.toggle();
            }
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._value;
    }
    setData(data) {
        this._value = data;
        this.updateIcon();
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinSpan() {
        return this._qinSpan;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.updateIcon();
    }
    updateIcon() {
        if (this._value) {
            this._qinIcon.change(qin_assets_1.QinAsset.FaceConfirm);
        }
        else {
            this._qinIcon.change(qin_assets_1.QinAsset.FaceCircle);
        }
    }
    toggle() {
        this._value = !this._value;
        this.updateIcon();
    }
}
exports.QinBoolean = QinBoolean;

},{"./qin-assets":2,"./qin-edit":10,"./qin-icon":13,"./qin-label":15,"./qin-line":16}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinButton = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_1 = require("./qin-base");
class QinButton extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("button");
        this._qinIcon = null;
        this._qinLabel = null;
        styles.applyOnButton(this._elMain);
        if (options === null || options === void 0 ? void 0 : options.icon) {
            this._qinIcon = options.icon;
            this._qinIcon.install(this);
        }
        if (options === null || options === void 0 ? void 0 : options.label) {
            this._qinLabel = options.label;
            this._qinLabel.install(this);
        }
    }
    getMain() {
        return this._elMain;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get qinLabel() {
        return this._qinLabel;
    }
}
exports.QinButton = QinButton;
const styles = {
    applyOnButton: (el) => {
        qinpel_res_1.QinSkin.styleAsEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.alignItems = "center";
    },
};

},{"./qin-base":4,"qinpel-res":25}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinChooser = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_column_1 = require("./qin-column");
const qin_combo_1 = require("./qin-combo");
const qin_edit_1 = require("./qin-edit");
const qin_explorer_1 = require("./qin-explorer");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_panel_1 = require("./qin-panel");
const qin_string_1 = require("./qin-string");
class QinChooser extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_column_1.QinColumn();
        this._qinUpper = new qin_line_1.QinLine();
        this._qinConfirm = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceConfirm),
        });
        this._qinFolder = new qin_string_1.QinString();
        this._qinExtensions = new qin_combo_1.QinCombo();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceSearch),
        });
        this._qinUnder = new qin_panel_1.QinPanel();
        this._qinExplorer = new qin_explorer_1.QinExplorer();
        this._listeners = [];
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._operation = (options === null || options === void 0 ? void 0 : options.operation) ? options.operation : qinpel_res_1.QinFilesOperation.OPEN;
        this._descriptors = (options === null || options === void 0 ? void 0 : options.descriptors) ? options.descriptors : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options === null || options === void 0 ? void 0 : options.singleSelection : false;
        this.initMain();
        this.initUpper();
        this.initUnder();
    }
    initMain() {
        this._qinUpper.install(this._qinMain);
        this._qinUnder.install(this._qinMain);
    }
    initUpper() {
        this._qinUpper.style.putAsFlexMin();
        this._qinConfirm.install(this._qinUpper);
        this._qinConfirm.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                let data = this.getData();
                for (const chosen of this._listeners) {
                    chosen(data);
                }
                qinEvent.consumed();
            }
        });
        this._qinFolder.install(this._qinUpper);
        this._qinFolder.style.putAsMinWidth(100);
        this._qinFolder.style.putAsFlexMax();
        this._qinFolder.addAction((qinEvent) => {
            if (qinEvent.isEnter) {
                this.loadFolder();
                qinEvent.consumed();
            }
        });
        this._qinExtensions.install(this._qinUpper);
        this._qinExtensions.style.putAsMinWidth(100);
        this.initExtensions();
        this._qinSearch.install(this._qinUpper);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.loadFolder();
                qinEvent.consumed();
            }
        });
    }
    initUnder() {
        this._qinUnder.style.putAsScroll();
        this._qinUnder.style.putAsFlexMax();
        this._qinExplorer.install(this._qinUnder);
        this._qinExplorer.nature = this._nature;
        this._qinExplorer.singleSelection = this._singleSelection;
    }
    initExtensions() {
        if (this._descriptors.length == 0) {
            this._qinExtensions.addItem({
                title: "All Files (*.*)",
                value: "*",
                selected: true,
            });
            this._qinExplorer.extensions = [];
        }
        else {
            for (let index = 0; index < this._descriptors.length; index++) {
                const descriptor = this._descriptors[index];
                this._qinExtensions.addItem({
                    title: descriptor.description,
                    value: descriptor.extensions.join(";"),
                    selected: index == 0,
                });
            }
            this._qinExplorer.extensions = this._descriptors[0].extensions;
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinExplorer.getData();
    }
    setData(data) {
        this._qinExplorer.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinUpper() {
        return this._qinUpper;
    }
    get qinConfirm() {
        return this._qinConfirm;
    }
    get qinFolder() {
        return this._qinFolder;
    }
    get qinExtensions() {
        return this._qinExtensions;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinUnder() {
        return this._qinUnder;
    }
    get qinExplorer() {
        return this._qinExplorer;
    }
    get nature() {
        return this._nature;
    }
    set nature(value) {
        this._nature = value;
        this._qinExplorer.nature = value;
    }
    get operation() {
        return this._operation;
    }
    set operation(value) {
        this._operation = value;
    }
    get descriptors() {
        return this._descriptors;
    }
    set descriptors(value) {
        this._descriptors = value;
    }
    get singleSelection() {
        return this._singleSelection;
    }
    set singleSelection(value) {
        this._singleSelection = value;
        this._qinExplorer.singleSelection = value;
    }
    loadFolder() {
        this._qinExplorer.load(this._qinFolder.getData(), (loaded) => {
            this._qinFolder.setData(loaded);
        });
    }
    addChosen(chosen) {
        this._listeners.push(chosen);
        return this;
    }
}
exports.QinChooser = QinChooser;

},{"./qin-assets":2,"./qin-button":6,"./qin-column":8,"./qin-combo":9,"./qin-edit":10,"./qin-explorer":11,"./qin-icon":13,"./qin-line":16,"./qin-panel":19,"./qin-string":22,"qinpel-res":25}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinColumn = void 0;
const qin_base_1 = require("./qin-base");
class QinColumn extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this.initPanel();
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (const viewer of options.initial) {
                viewer.install(this);
            }
        }
    }
    initPanel() {
        styles.applyOnPanel(this._elMain);
    }
    getMain() {
        return this._elMain;
    }
}
exports.QinColumn = QinColumn;
const styles = {
    applyOnPanel: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.flexWrap = "nowrap";
    },
};

},{"./qin-base":4}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinCombo = void 0;
const qin_edit_1 = require("./qin-edit");
class QinCombo extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("select");
        this.style.putAsEdit();
        if (options === null || options === void 0 ? void 0 : options.items) {
            for (let item of options.items) {
                this.addItem(item);
            }
        }
        if (options === null || options === void 0 ? void 0 : options.selected) {
            this.setData(options.selected);
        }
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        return this._elMain.value;
    }
    setData(data) {
        this._elMain.value = data;
    }
    addItem(item) {
        const option = document.createElement("option");
        option.text = item.title;
        option.value = item.value;
        if (item.selected != undefined && item.selected != null) {
            option.selected = item.selected;
        }
        this._elMain.appendChild(option);
        return this;
    }
}
exports.QinCombo = QinCombo;

},{"./qin-edit":10}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinEdit = void 0;
const qin_base_1 = require("./qin-base");
class QinEdit extends qin_base_1.QinBase {
}
exports.QinEdit = QinEdit;

},{"./qin-base":4}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinExplorer = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_panel_1 = require("./qin-panel");
class QinExplorer extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_panel_1.QinPanel();
        this._folderActual = "";
        this._folderServer = "";
        this._items = [];
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._extensions = (options === null || options === void 0 ? void 0 : options.extensions) ? options.extensions : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options.singleSelection : false;
        this.initMain();
    }
    initMain() {
        styles.applyOnMain(this._qinMain.getMain());
        this._qinMain.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.cleanSelection();
            }
        });
        this._qinMain.style.putAsDisabledSelection();
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        let result = [];
        this._items.forEach((item) => {
            if (item.isSelected()) {
                result.push(qinpel_res_1.QinSoul.foot.getPathJoin(this._folderServer, item.getName()));
            }
        });
        return result;
    }
    setData(data) {
        this.clean();
        if (data && data.length > 0) {
            let folderRoot = qinpel_res_1.QinSoul.foot.getParent(data[0]);
            this.load(folderRoot, (_) => {
                for (const itemPath of data) {
                    let itemRoot = qinpel_res_1.QinSoul.foot.getParent(itemPath);
                    let itemName = qinpel_res_1.QinSoul.foot.getStem(itemPath);
                    if (itemRoot !== folderRoot) {
                        this.qinpel.frame.statusError(`The item '${itemPath}' is not on the root '${folderRoot}'.`, "{qinpel-cps}(ErrCode-000001)");
                    }
                    else {
                        if (!this.select(itemName)) {
                            this.qinpel.frame.statusError(`Does not have the item '${itemName}' on the folder '${folderRoot}'`, "{qinpel-cps}(ErrCode-000002)");
                        }
                    }
                }
            });
        }
    }
    get qinMain() {
        return this._qinMain;
    }
    get nature() {
        return this._nature;
    }
    set nature(value) {
        this._nature = value;
    }
    get extensions() {
        return this._extensions;
    }
    set extensions(value) {
        this._extensions = value;
    }
    get singleSelection() {
        return this._singleSelection;
    }
    set singleSelection(value) {
        this._singleSelection = value;
        this.updateSingleSelection();
    }
    get folderActual() {
        return this._folderActual;
    }
    get folderServer() {
        return this._folderServer;
    }
    updateSingleSelection() {
        if (this._singleSelection) {
            let alreadyHas = false;
            for (const item of this._items) {
                if (item.isSelected()) {
                    if (alreadyHas) {
                        item.unselect();
                    }
                    else {
                        alreadyHas = true;
                    }
                }
            }
        }
    }
    load(folder, onLoad) {
        this.clean();
        this.qinpel
            .post("/dir/list", { path: folder })
            .then((res) => {
            this._folderActual = folder;
            for (let line of qinpel_res_1.QinSoul.body.getTextLines(res.data)) {
                let lineValue = line.substring(3);
                if (!lineValue) {
                    continue;
                }
                if (line.startsWith("P: ")) {
                    this._folderServer = lineValue;
                    if (onLoad) {
                        onLoad(lineValue);
                    }
                }
                else if (line.startsWith("D: ")) {
                    if (this._nature == qinpel_res_1.QinFilesNature.BOTH ||
                        this._nature == qinpel_res_1.QinFilesNature.DIRECTORIES) {
                        this.newDir(lineValue);
                    }
                }
                else if (line.startsWith("F: ")) {
                    if (this._nature == qinpel_res_1.QinFilesNature.BOTH ||
                        this._nature == qinpel_res_1.QinFilesNature.FILES) {
                        let extension = qinpel_res_1.QinSoul.foot.getFileExtension(lineValue);
                        let passedExtension = true;
                        if (this._extensions && this._extensions.length > 0) {
                            passedExtension = this._extensions.indexOf(extension) > -1;
                        }
                        if (passedExtension) {
                            this.newFile(lineValue, extension);
                        }
                    }
                }
            }
        })
            .catch((err) => {
            this.qinpel.frame.statusError(err, "{qinpel-cps}(ErrCode-000003)");
        });
    }
    reload(onLoad) {
        this.load(this._folderServer, onLoad);
    }
    goFolderUp(onLoad) {
        let parent = qinpel_res_1.QinFoot.getParent(this._folderServer);
        if (parent) {
            this.load(parent, onLoad);
        }
    }
    clean() {
        this._qinMain.getMain().innerHTML = "";
        this._items = [];
        this._folderActual = "";
        this._folderServer = "";
    }
    cleanSelection() {
        for (const item of this._items) {
            item.unselect();
        }
    }
    select(itemName) {
        let item = this._items.find((inside) => inside.getName() == itemName);
        if (item) {
            item.select();
            return true;
        }
        else {
            return false;
        }
    }
    unselect(itemName) {
        let item = this._items.find((inside) => inside.getName() == itemName);
        if (item) {
            item.unselect();
            return true;
        }
        else {
            return false;
        }
    }
    newDir(name) {
        this.newItem(name, "explorer-dir.png");
    }
    newFile(name, extension) {
        this.newItem(name, getIconName(extension));
    }
    newItem(name, icon) {
        const item = new Item(this, name, icon);
        item.install(this._qinMain.getMain());
        this._items.push(item);
    }
}
exports.QinExplorer = QinExplorer;
class Item {
    constructor(explorer, fileName, iconName) {
        this.divItem = document.createElement("div");
        this.divItemBody = document.createElement("div");
        this.spanIcon = document.createElement("span");
        this.imgIcon = document.createElement("img");
        this.spanText = document.createElement("span");
        this.selected = false;
        this.explorer = explorer;
        this.fileName = fileName;
        this.iconName = iconName;
        this.initItem();
    }
    initItem() {
        styles.applyOnDivItem(this.divItem);
        this.divItem.tabIndex = 0;
        styles.applyOnDivItemBody(this.divItemBody);
        this.divItem.appendChild(this.divItemBody);
        styles.applyOnSpanIcon(this.spanIcon);
        this.divItemBody.appendChild(this.spanIcon);
        this.imgIcon.src = "/app/qinpel-app/assets/" + this.iconName;
        this.spanIcon.appendChild(this.imgIcon);
        this.spanText.innerText = this.fileName;
        styles.applyOnSpanText(this.spanText);
        this.divItemBody.appendChild(this.spanText);
        qinpel_res_1.QinSoul.arm.addAction(this.divItem, (qinEvent) => {
            if (qinEvent.isPrimary) {
                this.divItem.focus();
                this.toggle();
                qinEvent.consumed();
            }
        });
    }
    install(on) {
        on.appendChild(this.divItem);
    }
    select() {
        styles.applyOnDivSelect(this.divItem);
        this.selected = true;
    }
    unselect() {
        styles.applyOnDivUnSelect(this.divItem);
        this.selected = false;
    }
    toggle() {
        if (this.selected) {
            this.unselect();
        }
        else {
            if (this.explorer.singleSelection) {
                this.explorer.cleanSelection();
            }
            this.select();
        }
    }
    getName() {
        return this.fileName;
    }
    isSelected() {
        return this.selected;
    }
}
function getIconName(fromExtension) {
    let result = "explorer-file.png";
    if (qinpel_res_1.QinSoul.foot.isFileApp(fromExtension)) {
        result = "explorer-apps.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileCmd(fromExtension)) {
        result = "explorer-cmds.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileExec(fromExtension)) {
        result = "explorer-exec.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileImage(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileVector(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMusic(fromExtension)) {
        result = "explorer-music.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMovie(fromExtension)) {
        result = "explorer-movie.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileZipped(fromExtension)) {
        result = "explorer-zipped.png";
    }
    return result;
}
const styles = {
    applyOnMain: (el) => {
        qinpel_res_1.QinSoul.skin.styleAsEdit(el);
        el.style.overflow = "auto";
        el.style.minWidth = "160px";
        el.style.minHeight = "160px";
        el.tabIndex = 0;
    },
    applyOnDivItem: (el) => {
        el.style.margin = "2px";
        el.style.padding = "9px";
        el.style.display = "inline-block";
        el.style.outline = "none";
        el.style.backgroundColor = "#ffffff";
        el.style.border = "1px solid #360045";
        el.style.borderRadius = "3px";
        el.style.color = "#270036";
        el.addEventListener("focus", () => {
            el.style.outline = "none";
            el.style.border = "1px solid #ae0000";
        });
        el.addEventListener("focusout", () => {
            el.style.outline = "none";
            el.style.border = "1px solid #360045";
        });
    },
    applyOnDivItemBody: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.width = "96px";
    },
    applyOnSpanIcon: (el) => {
        el.style.textAlign = "center";
    },
    applyOnSpanText: (el) => {
        el.style.textAlign = "center";
        el.style.wordWrap = "break-word";
    },
    applyOnDivSelect: (el) => {
        el.style.backgroundColor = "#faefff";
    },
    applyOnDivUnSelect: (el) => {
        el.style.backgroundColor = "#ffffff";
    },
};

},{"./qin-edit":10,"./qin-panel":19,"qinpel-res":25}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinField = void 0;
const qin_column_1 = require("./qin-column");
const qin_edit_1 = require("./qin-edit");
const qin_label_1 = require("./qin-label");
class QinField extends qin_edit_1.QinEdit {
    constructor(title, edit) {
        super();
        this._qinMain = new qin_column_1.QinColumn();
        this._qinLabel = new qin_label_1.QinLabel();
        this._qinEdit = null;
        this._qinLabel.setTitle(title);
        this._qinLabel.install(this._qinMain);
        this._qinEdit = edit;
        this._qinEdit.install(this._qinMain);
        this._qinMain.getMain().style.marginRight = "5px";
        this._qinMain.getMain().style.marginBottom = "5px";
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinEdit.getData();
    }
    setData(data) {
        this._qinEdit.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinLabel() {
        return this._qinLabel;
    }
    get qinEdit() {
        return this._qinEdit;
    }
}
exports.QinField = QinField;

},{"./qin-column":8,"./qin-edit":10,"./qin-label":15}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIcon = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_base_1 = require("./qin-base");
class QinIcon extends qin_base_1.QinBase {
    constructor(asset, size = qinpel_res_1.QinGrandeur.SMALL) {
        super();
        this._elMain = document.createElement("img");
        this._elMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
        qinpel_res_1.QinSoul.skin.styleSize(this._elMain, size);
    }
    getMain() {
        return this._elMain;
    }
    change(asset) {
        this._elMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
    }
}
exports.QinIcon = QinIcon;

},{"./qin-assets":2,"./qin-base":4,"qinpel-res":25}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinInteger extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("input");
        this._elMain.type = "number";
        qinpel_res_1.QinSoul.skin.styleAsEdit(this._elMain);
        this._elMain.style.width = "120px";
        this._elMain.addEventListener("focusout", () => {
            this.setData(this.getData());
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        const value = this._elMain.value;
        if (value == null || value == undefined || value.length == 0) {
            return null;
        }
        else {
            return parseInt(this._elMain.value, 10);
        }
    }
    setData(data) {
        if (data == null || data == undefined) {
            this._elMain.value = "";
        }
        else {
            this._elMain.value = (data | 0).toString();
        }
    }
}
exports.QinInteger = QinInteger;

},{"./qin-edit":10,"qinpel-res":25}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLabel = void 0;
const qin_base_1 = require("./qin-base");
class QinLabel extends qin_base_1.QinBase {
    constructor(title) {
        super();
        this._elMain = document.createElement("span");
        if (title) {
            this._elMain.textContent = title;
        }
    }
    getMain() {
        return this._elMain;
    }
    setTitle(title) {
        this._elMain.textContent = title;
    }
    getTitle() {
        return this._elMain.textContent;
    }
}
exports.QinLabel = QinLabel;

},{"./qin-base":4}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLine = void 0;
const qin_base_1 = require("./qin-base");
class QinLine extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this.initPanel();
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (let viewer of options.initial) {
                viewer.install(this);
            }
        }
    }
    initPanel() {
        styles.applyOnPanel(this._elMain);
    }
    getMain() {
        return this._elMain;
    }
}
exports.QinLine = QinLine;
const styles = {
    applyOnPanel: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.flexWrap = "wrap";
    },
};

},{"./qin-base":4}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinMenuItem = exports.QinMenu = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_column_1 = require("./qin-column");
const qin_edit_1 = require("./qin-edit");
const qin_panel_1 = require("./qin-panel");
class QinMenu extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_panel_1.QinPanel();
        this._qinMain.style.putAsEdit();
        this._qinMain.style.putAsScroll();
        if (options === null || options === void 0 ? void 0 : options.items) {
            this.setData(options.items);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        let result = [];
        for (let child of this.children()) {
            if (child instanceof QinMenuItem) {
                result.push(child);
            }
        }
        return result;
    }
    setData(data) {
        this.clearChildren();
        for (let item of data) {
            item.install(this);
        }
    }
    putItem(item) {
        item.install(this);
    }
}
exports.QinMenu = QinMenu;
class QinMenuItem extends qin_panel_1.QinPanel {
    constructor(icon, label) {
        super();
        this._face = new qin_panel_1.QinPanel();
        this._body = new qin_column_1.QinColumn();
        this._selected = false;
        this._face.install(this);
        this._body.install(this._face);
        this._icon = icon;
        if (this._icon) {
            this._icon.install(this._body);
        }
        this._label = label;
        if (this._label) {
            this._label.install(this._body);
        }
        this.putTabIndex(0);
        this.style.putAsEdit();
        this.style.putAsMargin(3);
        this.style.putAsPadding(6);
        this.style.putAsDisplayInlineBlock();
        this.style.putAsMaxWidth(96);
        this._body.style.putAsAllCentered();
    }
    select() {
        this._face.style.putAsBackAsset(qin_assets_1.QinAsset.BackTiny01);
        this._selected = true;
    }
    unSelect() {
        this._face.style.putAsBackInitial();
        this._selected = false;
    }
    swapSelect() {
        if (this._selected) {
            this.unSelect();
        }
        else {
            this.select();
        }
    }
}
exports.QinMenuItem = QinMenuItem;

},{"./qin-assets":2,"./qin-column":8,"./qin-edit":10,"./qin-panel":19}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinMutantsArm = exports.QinMutants = void 0;
const qin_boolean_1 = require("./qin-boolean");
const qin_chooser_1 = require("./qin-chooser");
const qin_combo_1 = require("./qin-combo");
const qin_explorer_1 = require("./qin-explorer");
const qin_integer_1 = require("./qin-integer");
const qin_path_1 = require("./qin-path");
const qin_string_1 = require("./qin-string");
var QinMutants;
(function (QinMutants) {
    QinMutants["BOOLEAN"] = "boolean";
    QinMutants["CHOOSER"] = "chooser";
    QinMutants["COMBO"] = "combo";
    QinMutants["EXPLORER"] = "explorer";
    QinMutants["INTEGER"] = "integer";
    QinMutants["PATH"] = "path";
    QinMutants["STRING"] = "string";
})(QinMutants = exports.QinMutants || (exports.QinMutants = {}));
function newEdit(kind, options) {
    switch (kind) {
        case QinMutants.BOOLEAN:
            return new qin_boolean_1.QinBoolean(options);
        case QinMutants.CHOOSER:
            return new qin_chooser_1.QinChooser(options);
        case QinMutants.COMBO:
            return new qin_combo_1.QinCombo(options);
        case QinMutants.EXPLORER:
            return new qin_explorer_1.QinExplorer(options);
        case QinMutants.INTEGER:
            return new qin_integer_1.QinInteger(options);
        case QinMutants.PATH:
            return new qin_path_1.QinPath(options);
        case QinMutants.STRING:
            return new qin_string_1.QinString(options);
        default:
            throw new Error("Unknown kind of mutant to create.");
    }
}
exports.QinMutantsArm = {
    newEdit,
};

},{"./qin-boolean":5,"./qin-chooser":7,"./qin-combo":9,"./qin-explorer":11,"./qin-integer":14,"./qin-path":20,"./qin-string":22}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPanel = void 0;
const qin_base_1 = require("./qin-base");
class QinPanel extends qin_base_1.QinBase {
    constructor() {
        super();
        this._elMain = document.createElement("div");
    }
    getMain() {
        return this._elMain;
    }
}
exports.QinPanel = QinPanel;

},{"./qin-base":4}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPath = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_chooser_1 = require("./qin-chooser");
const qin_edit_1 = require("./qin-edit");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_string_1 = require("./qin-string");
class QinPath extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinPath = new qin_string_1.QinString();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceFolder),
        });
        this._qinChooser = new qin_chooser_1.QinChooser({
            nature: options === null || options === void 0 ? void 0 : options.nature,
            operation: options === null || options === void 0 ? void 0 : options.operation,
            descriptors: options === null || options === void 0 ? void 0 : options.descriptors,
            singleSelection: true,
        });
        this._qinPopup = this.qinpel.frame.newPopup(this._qinChooser.getMain());
        this._qinPath.install(this._qinMain);
        this._qinSearch.install(this._qinMain);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this._qinPopup.show();
                const upperHeight = this._qinChooser.qinUpper.getMain().clientHeight;
                const explorerMaxHeight = this._qinPopup.maxHeight - (upperHeight + 12);
                this._qinChooser.qinExplorer.style.putAsMaxHeight(explorerMaxHeight);
            }
        });
        this._qinChooser.addChosen((chosen) => {
            if (chosen && chosen.length > 0) {
                this._qinPath.setData(chosen[0]);
            }
            this._qinPopup.close();
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinPath.getData();
    }
    setData(data) {
        this._qinPath.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinPath() {
        return this._qinPath;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinChooser() {
        return this._qinChooser;
    }
    get qinPopup() {
        return this._qinPopup;
    }
}
exports.QinPath = QinPath;

},{"./qin-assets":2,"./qin-button":6,"./qin-chooser":7,"./qin-edit":10,"./qin-icon":13,"./qin-line":16,"./qin-string":22}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinStack = void 0;
const qin_base_1 = require("./qin-base");
class QinStack extends qin_base_1.QinBase {
    constructor() {
        super();
        this._elMain = document.createElement("div");
    }
    getMain() {
        return this._elMain;
    }
    add(panel) {
        panel.install(this);
        panel.style.putAsWhole();
        panel.style.putAsZIndex(this.children().length + 1);
    }
}
exports.QinStack = QinStack;

},{"./qin-base":4}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinString = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinString extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("input");
        this._elMain.type = "text";
        if (options === null || options === void 0 ? void 0 : options.maxLength) {
            this._elMain.maxLength = options.maxLength;
            let position = Math.min(Math.max(options.maxLength - 10, 0), 90);
            let width = Math.floor(90 + (position * 7) / 3);
            this._elMain.style.width = width + "px";
        }
        qinpel_res_1.QinSoul.skin.styleAsEdit(this._elMain);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        return this._elMain.value;
    }
    setData(data) {
        this._elMain.value = data;
    }
    insertAtCursor(data) {
        if (!data)
            return;
        let startPos = this._elMain.selectionStart;
        let endPos = this._elMain.selectionEnd;
        let oldVal = this._elMain.value;
        let newVal = (startPos > 0 ? oldVal.substring(0, startPos) : "") +
            data +
            (endPos < oldVal.length ? oldVal.substring(endPos) : "");
        this._elMain.value = newVal;
        this._elMain.selectionStart = startPos;
        this._elMain.selectionEnd = startPos + data.length;
    }
}
exports.QinString = QinString;

},{"./qin-edit":10,"qinpel-res":25}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTabs = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_button_1 = require("./qin-button");
const qin_column_1 = require("./qin-column");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
const qin_panel_1 = require("./qin-panel");
class QinTabs extends qin_column_1.QinColumn {
    constructor(options) {
        super();
        this._qinTabs = new qin_line_1.QinLine();
        this._qinPanel = new qin_panel_1.QinPanel();
        this._tabs = [];
        this._qinTabs.install(this);
        this._qinPanel.install(this);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (const tab of options === null || options === void 0 ? void 0 : options.initial) {
                this.addTab(tab);
            }
        }
    }
    get qinTabs() {
        return this._qinTabs;
    }
    get qinPanel() {
        return this._qinPanel;
    }
    addTab(tab) {
        const button = new qin_button_1.QinButton({ label: new qin_label_1.QinLabel(tab.title) });
        button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorInactive);
        button.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.showViewer(tab.viewer);
            }
        });
        button.install(this._qinTabs);
        let first = this._tabs.length == 0;
        let tabRef = {
            title: tab.title,
            viewer: tab.viewer,
            button,
        };
        this._tabs.push(tabRef);
        if (first) {
            this.showViewer(tab.viewer);
        }
    }
    showTab(title) {
        for (const tab of this._tabs) {
            if (tab.title == title) {
                this.showViewer(tab.viewer);
                break;
            }
        }
    }
    showViewer(viewer) {
        this._qinPanel.clearChildren();
        viewer.install(this._qinPanel);
        for (const tab of this._tabs) {
            if (tab.viewer == viewer) {
                tab.button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorActive);
            }
            else {
                tab.button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorInactive);
            }
        }
    }
}
exports.QinTabs = QinTabs;

},{"./qin-button":6,"./qin-column":8,"./qin-label":15,"./qin-line":16,"./qin-panel":19,"qinpel-res":25}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTools = void 0;
const refQinpel = window.frameElement.qinpel;
function qinpel() {
    return refQinpel;
}
exports.QinTools = {
    qinpel,
};

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = exports.QinSoul = exports.QinBody = exports.QinHead = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = exports.QinSkin = exports.QinStyles = void 0;
var qin_skin_1 = require("./qin-skin");
Object.defineProperty(exports, "QinStyles", { enumerable: true, get: function () { return qin_skin_1.QinStyles; } });
var qin_skin_2 = require("./qin-skin");
Object.defineProperty(exports, "QinSkin", { enumerable: true, get: function () { return qin_skin_2.QinSkin; } });
var qin_head_1 = require("./qin-head");
Object.defineProperty(exports, "QinPoint", { enumerable: true, get: function () { return qin_head_1.QinPoint; } });
var qin_head_2 = require("./qin-head");
Object.defineProperty(exports, "QinDimension", { enumerable: true, get: function () { return qin_head_2.QinDimension; } });
var qin_head_3 = require("./qin-head");
Object.defineProperty(exports, "QinBounds", { enumerable: true, get: function () { return qin_head_3.QinBounds; } });
var qin_head_4 = require("./qin-head");
Object.defineProperty(exports, "QinGrandeur", { enumerable: true, get: function () { return qin_head_4.QinGrandeur; } });
var qin_head_5 = require("./qin-head");
Object.defineProperty(exports, "QinHead", { enumerable: true, get: function () { return qin_head_5.QinHead; } });
var qin_body_1 = require("./qin-body");
Object.defineProperty(exports, "QinBody", { enumerable: true, get: function () { return qin_body_1.QinBody; } });
var qin_soul_1 = require("./qin-soul");
Object.defineProperty(exports, "QinSoul", { enumerable: true, get: function () { return qin_soul_1.QinSoul; } });
var qin_arm_1 = require("./qin-arm");
Object.defineProperty(exports, "QinEvent", { enumerable: true, get: function () { return qin_arm_1.QinEvent; } });
var qin_arm_2 = require("./qin-arm");
Object.defineProperty(exports, "QinWaiters", { enumerable: true, get: function () { return qin_arm_2.QinWaiters; } });
var qin_arm_3 = require("./qin-arm");
Object.defineProperty(exports, "QinPointerCalls", { enumerable: true, get: function () { return qin_arm_3.QinPointerCalls; } });
var qin_arm_4 = require("./qin-arm");
Object.defineProperty(exports, "QinArm", { enumerable: true, get: function () { return qin_arm_4.QinArm; } });
var qin_foot_1 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesNature", { enumerable: true, get: function () { return qin_foot_1.QinFilesNature; } });
var qin_foot_2 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesOperation", { enumerable: true, get: function () { return qin_foot_2.QinFilesOperation; } });
var qin_foot_3 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesDescriptor", { enumerable: true, get: function () { return qin_foot_3.QinFilesDescriptor; } });
var qin_foot_4 = require("./qin-foot");
Object.defineProperty(exports, "QinFoot", { enumerable: true, get: function () { return qin_foot_4.QinFoot; } });

},{"./qin-arm":26,"./qin-body":27,"./qin-foot":28,"./qin-head":29,"./qin-skin":30,"./qin-soul":31}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = void 0;
const qin_skin_1 = require("./qin-skin");
class QinEvent {
    constructor(isStart, event) {
        this._event = null;
        this._point = null;
        this._stop = false;
        this._start = isStart;
        this._event = event;
        if (event instanceof MouseEvent || event instanceof TouchEvent) {
            this._point = makeEventPointer(isStart, event);
        }
    }
    get isStart() {
        return this._start;
    }
    get fromOrigin() {
        if (this._event) {
            return this._event.target;
        }
        return null;
    }
    get fromTyping() {
        return this._event instanceof KeyboardEvent;
    }
    get fromPointing() {
        return (this._event instanceof MouseEvent || this._event instanceof TouchEvent);
    }
    get hasAlt() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.altKey;
    }
    get hasCtrl() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.ctrlKey;
    }
    get hasShift() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.shiftKey;
    }
    get hasMeta() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.metaKey;
    }
    get keyTyped() {
        if (this._event instanceof KeyboardEvent) {
            return this._event.key;
        }
        return null;
    }
    get isEnter() {
        if (this._event instanceof KeyboardEvent) {
            return isKeyEnter(this._event);
        }
        return false;
    }
    get isEscape() {
        if (this._event instanceof KeyboardEvent) {
            return isKeyEscape(this._event);
        }
        return false;
    }
    get isSpace() {
        if (this._event instanceof KeyboardEvent) {
            return isKeySpace(this._event);
        }
        return false;
    }
    get isDouble() {
        if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isEventPointerDouble(this._start, this._event);
        }
        return false;
    }
    get isLong() {
        if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isEventPointerLong(this._start, this._event);
        }
        return false;
    }
    get point() {
        return this._point;
    }
    get pointX() {
        if (this._event instanceof MouseEvent) {
            return this._event.clientX;
        }
        else if (this._event instanceof TouchEvent) {
            if (this._event.touches.length > 0) {
                let index = (this._event.touches.length / 2) | 0;
                return this._event.touches[index].clientX;
            }
        }
        return null;
    }
    get pointY() {
        if (this._event instanceof MouseEvent) {
            return this._event.clientY;
        }
        else if (this._event instanceof TouchEvent) {
            if (this._event.touches.length > 0) {
                let index = (this._event.touches.length / 2) | 0;
                return this._event.touches[index].clientY;
            }
        }
        return null;
    }
    get isFirstButton() {
        if (this._event instanceof MouseEvent) {
            return isFirstButton(this._event);
        }
        return false;
    }
    get isMiddleButton() {
        if (this._event instanceof MouseEvent) {
            return isMiddleButton(this._event);
        }
        return false;
    }
    get isSecondButton() {
        if (this._event instanceof MouseEvent) {
            return isSecondButton(this._event);
        }
        return false;
    }
    get isOneFinger() {
        if (this._event instanceof TouchEvent) {
            return isOneFinger(this._event);
        }
        return false;
    }
    get isTwoFingers() {
        if (this._event instanceof TouchEvent) {
            return isTwoFingers(this._event);
        }
        return false;
    }
    get isThreeFingers() {
        if (this._event instanceof TouchEvent) {
            return isThreeFingers(this._event);
        }
        return false;
    }
    get isFourFingers() {
        if (this._event instanceof TouchEvent) {
            return isFourFingers(this._event);
        }
        return false;
    }
    get isPrimary() {
        if (this._start) {
            return false;
        }
        if (this._event instanceof KeyboardEvent) {
            return isPrimaryKey(this._event);
        }
        else if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isPrimaryPoint(this._event);
        }
        return false;
    }
    get isAuxiliary() {
        if (this._start) {
            return false;
        }
        if (this._event instanceof KeyboardEvent) {
            return isAuxiliaryKey(this._event);
        }
        else if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isAuxiliaryPoint(this._event);
        }
        return false;
    }
    get isSecondary() {
        if (this._start) {
            return false;
        }
        if (this._event instanceof KeyboardEvent) {
            return isSecondaryKey(this._event);
        }
        else if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isSecondaryPoint(this._event);
        }
        return false;
    }
    get stop() {
        return this._stop;
    }
    consumed() {
        this._stop = true;
    }
}
exports.QinEvent = QinEvent;
class QinWaiters {
    constructor(initial) {
        this.waiters = initial ? initial : [];
    }
    addWaiter(waiter) {
        this.waiters.push(waiter);
        return this;
    }
    hasWaiter() {
        return this.waiters.length > 0;
    }
    sendWaiters(result) {
        for (const waiter of this.waiters) {
            waiter(result);
        }
    }
}
exports.QinWaiters = QinWaiters;
class QinPointerCalls {
}
exports.QinPointerCalls = QinPointerCalls;
function stopEvent(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    event.cancelBubble = true;
    return false;
}
var lastEventPointer = null;
function makeEventPointer(isStart, ev) {
    const result = {
        posX: 0,
        posY: 0,
    };
    if (ev instanceof MouseEvent) {
        if (ev.clientX || ev.clientY) {
            result.posX = ev.clientX;
            result.posY = ev.clientY;
        }
    }
    else if (ev instanceof TouchEvent) {
        if (ev.touches && this._event.touches.length > 1) {
            let index = Math.floor(this._event.touches.length / 2);
            result.posX = ev.touches[index].clientX;
            result.posY = ev.touches[index].clientY;
        }
    }
    if (isStart) {
        lastEventPointer = ev;
    }
    return result;
}
function isEventPointerDouble(isStart, ev) {
    if (!isStart || lastEventPointer == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventPointer.timeStamp;
    return timeDif < 450;
}
function isEventPointerLong(isStart, ev) {
    if (!isStart || lastEventPointer == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventPointer.timeStamp;
    return timeDif > 840;
}
function isKeyInList(ev, list) {
    let keyLower = ev.key.toLowerCase();
    return list.indexOf(keyLower) > -1;
}
function isKeyEnter(ev) {
    return isKeyInList(ev, ["enter", "return"]) || ev.keyCode === 13;
}
function isKeyEscape(ev) {
    return isKeyInList(ev, ["esc", "escape"]) || ev.keyCode === 27;
}
function isKeySpace(ev) {
    return isKeyInList(ev, [" ", "space", "spacebar"]) || ev.keyCode === 32;
}
function isFirstButton(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 0;
}
function isMiddleButton(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 1;
}
function isSecondButton(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 2;
}
function isOneFinger(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 1;
}
function isTwoFingers(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 2;
}
function isThreeFingers(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 3;
}
function isFourFingers(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 4;
}
function isPrimaryKey(ev) {
    return isKeyEnter(ev);
}
function isAuxiliaryKey(ev) {
    return ev.ctrlKey && ev.altKey && isKeySpace(ev);
}
function isSecondaryKey(ev) {
    return ev.ctrlKey && !ev.altKey && isKeySpace(ev);
}
function isPrimaryPoint(ev) {
    if (ev instanceof MouseEvent) {
        return isFirstButton(ev);
    }
    else if (ev instanceof TouchEvent) {
        return isOneFinger(ev);
    }
    return false;
}
function isAuxiliaryPoint(ev) {
    if (ev instanceof MouseEvent) {
        return isMiddleButton(ev);
    }
    else if (ev instanceof TouchEvent) {
        return isThreeFingers(ev);
    }
    return false;
}
function isSecondaryPoint(ev) {
    if (ev instanceof MouseEvent) {
        return isSecondButton(ev);
    }
    else if (ev instanceof TouchEvent) {
        return isTwoFingers(ev);
    }
    return false;
}
function addAction(element, action) {
    element.addEventListener("keydown", actKeyDown);
    element.addEventListener("keyup", actKeyUp);
    element.addEventListener("mousedown", actMouseDown);
    element.addEventListener("mouseup", actMouseUp);
    element.addEventListener("touchstart", actTouchStart);
    element.addEventListener("touchend", actTouchEnd);
    function actKeyDown(ev) {
        let qinEvent = new QinEvent(true, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actKeyUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actMouseDown(ev) {
        let qinEvent = new QinEvent(true, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actMouseUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actTouchStart(ev) {
        let qinEvent = new QinEvent(true, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actTouchEnd(ev) {
        let qinEvent = new QinEvent(false, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
}
function addActionMain(element, action) {
    element.onkeyup = actKeyUp;
    element.onmouseup = actMouseUp;
    element.ontouchend = actTouchEnd;
    function actKeyUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        if (qinEvent.isPrimary) {
            action(qinEvent);
            return stopEvent(ev);
        }
    }
    function actMouseUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        if (qinEvent.isPrimary) {
            action(qinEvent);
            return stopEvent(ev);
        }
    }
    function actTouchEnd(ev) {
        let qinEvent = new QinEvent(false, ev);
        if (qinEvent.isPrimary) {
            action(qinEvent);
            return stopEvent(ev);
        }
    }
}
function putActionProxy(destiny, origins) {
    for (const origin of origins) {
        origin.addEventListener("keydown", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("keyup", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("mousedown", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("mouseup", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("touchstart", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("touchend", (e) => {
            destiny.dispatchEvent(e);
        });
    }
}
function addMover(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitPosX = 0;
    var dragInitPosY = 0;
    for (let source of sources) {
        source.onmousedown = onMoverInit;
        source.ontouchstart = onMoverInit;
        source.ondragstart = stopEvent;
    }
    function onMoverInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventPointer(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitPosX = parseInt(target.style.left, 10);
        dragInitPosY = parseInt(target.style.top, 10);
        document.ontouchmove = onMoverMove;
        document.onmousemove = onMoverMove;
        document.ontouchend = onMoverClose;
        document.onmouseup = onMoverClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onMoverMove(ev) {
        const pointer = makeEventPointer(false, ev);
        var dragDifX = pointer.posX - dragInitEventX;
        var dragDifY = pointer.posY - dragInitEventY;
        var dragFinalX = dragInitPosX + dragDifX;
        var dragFinalY = dragInitPosY + dragDifY;
        target.style.left = (dragFinalX > 0 ? dragFinalX : 0) + "px";
        target.style.top = (dragFinalY > 0 ? dragFinalY : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onMoverClose(ev) {
        document.ontouchmove = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
function addResizer(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitWidth = 0;
    var dragInitHeight = 0;
    for (let source of sources) {
        source.onmousedown = onResizerInit;
        source.ontouchstart = onResizerInit;
        source.ondragstart = stopEvent;
    }
    function onResizerInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventPointer(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitWidth = parseInt(target.style.width, 10);
        dragInitHeight = parseInt(target.style.height, 10);
        document.ontouchmove = onResizerMove;
        document.onmousemove = onResizerMove;
        document.ontouchend = onResizerClose;
        document.onmouseup = onResizerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onResizerMove(ev) {
        const pointer = makeEventPointer(false, ev);
        var frameDragDifX = pointer.posX - dragInitEventX;
        var frameDragDifY = pointer.posY - dragInitEventY;
        var frameDragFinalWidth = dragInitWidth + frameDragDifX;
        var frameDragFinalHeight = dragInitHeight + frameDragDifY;
        target.style.width =
            (frameDragFinalWidth > 0 ? frameDragFinalWidth : 0) + "px";
        target.style.height =
            (frameDragFinalHeight > 0 ? frameDragFinalHeight : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onResizerClose(ev) {
        document.ontouchmove = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
function addScroller(target, dragCalls) {
    var dragInitX = 0;
    var dragInitY = 0;
    var dragScrollX = 0;
    var dragScrollY = 0;
    target.ondragstart = stopEvent;
    target.ontouchstart = onScrollerInit;
    target.onmousedown = onScrollerInit;
    function onScrollerInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventPointer(true, ev);
        dragInitX = pointer.posX;
        dragInitY = pointer.posY;
        dragScrollX = target.scrollLeft;
        dragScrollY = target.scrollTop;
        document.ontouchmove = onScrollerMove;
        document.onmousemove = onScrollerMove;
        document.ontouchend = onScrollerClose;
        document.onmouseup = onScrollerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onScrollerMove(ev) {
        const pointer = makeEventPointer(false, ev);
        var dragDifX = pointer.posX - dragInitX;
        var dragDifY = pointer.posY - dragInitY;
        var dragNewX = dragScrollX - dragDifX;
        var dragNewY = dragScrollY - dragDifY;
        target.scrollTo(dragNewX, dragNewY);
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onScrollerClose(ev) {
        document.ontouchmove = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
exports.QinArm = {
    stopEvent,
    makeEventPointer,
    isEventPointerDouble,
    isEventPointerLong,
    isKeyInList,
    isKeyEnter,
    isKeySpace,
    isFirstButton,
    isMiddleButton,
    isSecondButton,
    isOneFinger,
    isTwoFingers,
    isThreeFingers,
    isFourFingers,
    isPrimaryPoint,
    isAuxiliaryPoint,
    isSecondaryPoint,
    addAction,
    addActionMain,
    putActionProxy,
    addMover,
    addResizer,
    addScroller,
};

},{"./qin-skin":30}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBody = void 0;
function getCookie(name, orDefault) {
    let cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        let cookiePair = cookies[i].split("=");
        if (name == decodeURIComponent(cookiePair[0]).trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return orDefault;
}
function setCookie(name, value, options = {}) {
    options = Object.assign({ path: "/" }, options);
    if (!options.expires) {
        let date = new Date();
        date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
        options.expires = date;
    }
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function delCookie(name, options = {}) {
    let updatedCookie = encodeURIComponent(name) + "=;  expires=Thu, 01 Jan 1970 00:00:00 GMT";
    if (options.expires) {
        delete options.expires;
    }
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function getTextLines(fromText) {
    return fromText.match(/[^\r\n]+/g);
}
function getCSVRows(fromText, names) {
    var lines = getTextLines(fromText);
    var result = [];
    for (let line of lines) {
        let row = !names ? [] : {};
        let inside_quotes = false;
        let column_value = "";
        let column_index = 0;
        for (let char_index = 0; char_index < line.length; char_index++) {
            let actual = line.charAt(char_index);
            if (inside_quotes) {
                if (actual == '"') {
                    let next = char_index < line.length - 1 ? line.charAt(char_index + 1) : "";
                    if (next == '"') {
                        column_value += actual;
                        char_index++;
                    }
                    else {
                        inside_quotes = false;
                    }
                }
                else {
                    column_value += actual;
                }
            }
            else {
                if (actual == '"') {
                    inside_quotes = true;
                }
                else if (actual == ",") {
                    column_value = unmaskSpecialChars(column_value);
                    if (!names) {
                        row.push(column_value);
                    }
                    else {
                        let column_name = "col_" + column_index;
                        if (column_index < names.length) {
                            column_name = names[column_index];
                        }
                        row[column_name] = column_value;
                    }
                    column_value = "";
                    column_index++;
                }
                else {
                    column_value += actual;
                }
            }
        }
        column_value = unmaskSpecialChars(column_value);
        if (!names) {
            row.push(column_value);
            result.push(row);
        }
        else {
            let column_name = "col_" + column_index;
            if (column_index < names.length) {
                column_name = names[column_index];
            }
            row[column_name] = column_value;
            result.push(row);
        }
    }
    return result;
}
function maskSpecialChars(fromText) {
    return fromText
        .replace("\\", "\\\\")
        .replace("\r", "\\r")
        .replace("\n", "\\n")
        .replace("\t", "\\t");
}
function unmaskSpecialChars(fromText) {
    return fromText
        .replace("\\\\", "\\")
        .replace("\\r", "\r")
        .replace("\\n", "\n")
        .replace("\\t", "\t");
}
function parseParameters(source) {
    let result = [];
    let open = false;
    let actual = "";
    for (const letter of Array.from(source)) {
        if (open) {
            if (letter == '"') {
                open = false;
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else {
                actual += letter;
            }
        }
        else {
            if (letter == '"') {
                open = true;
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else if (letter == " ") {
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else {
                actual += letter;
            }
        }
    }
    return result;
}
exports.QinBody = {
    getCookie,
    setCookie,
    delCookie,
    getTextLines,
    getCSVRows,
    maskSpecialChars,
    unmaskSpecialChars,
    parseParameters,
};

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = void 0;
var QinFilesNature;
(function (QinFilesNature) {
    QinFilesNature["BOTH"] = "both";
    QinFilesNature["DIRECTORIES"] = "directories";
    QinFilesNature["FILES"] = "files";
})(QinFilesNature = exports.QinFilesNature || (exports.QinFilesNature = {}));
var QinFilesOperation;
(function (QinFilesOperation) {
    QinFilesOperation["OPEN"] = "open";
    QinFilesOperation["SAVE"] = "save";
})(QinFilesOperation = exports.QinFilesOperation || (exports.QinFilesOperation = {}));
class QinFilesDescriptor {
}
exports.QinFilesDescriptor = QinFilesDescriptor;
function getLocation() {
    return window.location.href;
}
function isLocalHost() {
    var location = getLocation();
    var start = location.indexOf("://");
    if (start == -1) {
        start = 0;
    }
    else {
        start += 3;
    }
    location = location.substring(start);
    return location.indexOf("localhost") === 0 || location.indexOf("127.0.0.1") === 0;
}
function getSeparator(ofPath) {
    let result = "/";
    if (ofPath && ofPath.indexOf("\\") > -1) {
        result = "\\";
    }
    return result;
}
function getPathJoin(pathA, pathB) {
    if (pathA == null || pathA == undefined) {
        pathA = "";
    }
    if (pathB == null || pathB == undefined) {
        pathB = "";
    }
    if (pathA.length == 0) {
        return pathB;
    }
    else if (pathB.length == 0) {
        return pathA;
    }
    else {
        let union = "/";
        if (pathA.indexOf("\\") > -1 || pathB.indexOf("\\") > -1) {
            union = "\\";
        }
        let pathAEnd = pathA.substring(pathA.length - 1, pathA.length);
        let pathBStart = pathB.substring(0, 1);
        if (pathAEnd == union || pathBStart == union) {
            union = "";
        }
        return pathA + union + pathB;
    }
}
function getParent(path) {
    if (path) {
        let separator = getSeparator(path);
        let last = path.lastIndexOf(separator);
        if (last > -1) {
            return path.substring(0, last);
        }
    }
    return "";
}
function getStem(path) {
    if (path) {
        let separator = getSeparator(path);
        let last = path.lastIndexOf(separator);
        if (last > -1) {
            return path.substring(last + 1);
        }
    }
    return "";
}
function getFileExtension(name) {
    let position = name.lastIndexOf(".");
    if (position > -1) {
        return name.substring(position + 1);
    }
    else {
        return "";
    }
}
const appsExtensions = [
    "htm", "html", "css", "js", "jsx", "ts", "tsx", "phtml"
];
function isFileApp(extension) {
    return appsExtensions.indexOf(extension) > -1;
}
const cmdsExtensions = [
    "h", "c", "hpp", "cpp", "rs", "jl",
    "cs", "csproj", "fs", "ml", "fsi", "mli", "fsx", "fsscript",
    "java", "gy", "gvy", "groovy", "sc", "scala", "clj",
    "py", "ruby", "php", "phtml",
];
function isFileCmd(extension) {
    return cmdsExtensions.indexOf(extension) > -1;
}
const execExtensions = [
    "exe", "jar", "com", "bat", "sh"
];
function isFileExec(extension) {
    return execExtensions.indexOf(extension) > -1;
}
const imageExtensions = [
    "jpg", "jpeg", "png", "gif", "bmp"
];
function isFileImage(extension) {
    return imageExtensions.indexOf(extension) > -1;
}
const vectorExtensions = [
    "svg"
];
function isFileVector(extension) {
    return vectorExtensions.indexOf(extension) > -1;
}
const movieExtensions = [
    "avi", "mp4"
];
function isFileMovie(extension) {
    return movieExtensions.indexOf(extension) > -1;
}
const musicExtensions = [
    "wav", "mp3"
];
function isFileMusic(extension) {
    return musicExtensions.indexOf(extension) > -1;
}
const zippedExtensions = [
    "zip", "rar", "7z", "tar", "gz"
];
function isFileZipped(extension) {
    return zippedExtensions.indexOf(extension) > -1;
}
exports.QinFoot = {
    getLocation,
    isLocalHost,
    getSeparator,
    getPathJoin,
    getParent,
    getStem,
    getFileExtension,
    isFileApp,
    isFileCmd,
    isFileExec,
    isFileImage,
    isFileVector,
    isFileMovie,
    isFileMusic,
    isFileZipped,
};

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinHead = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = void 0;
class QinPoint {
}
exports.QinPoint = QinPoint;
;
class QinDimension {
}
exports.QinDimension = QinDimension;
;
class QinBounds {
}
exports.QinBounds = QinBounds;
;
var QinGrandeur;
(function (QinGrandeur) {
    QinGrandeur["SMALL"] = "small";
    QinGrandeur["MEDIUM"] = "medium";
    QinGrandeur["LARGE"] = "large";
})(QinGrandeur = exports.QinGrandeur || (exports.QinGrandeur = {}));
function getDeskAPI() {
    var win = window;
    if (win.deskAPI) {
        return win.deskAPI;
    }
    else {
        win = window.parent;
    }
    if (win.deskAPI) {
        return win.deskAPI;
    }
    else {
        win = window.top;
    }
    if (win.deskAPI) {
        return win.deskAPI;
    }
    return undefined;
}
const logged = [];
function getLogged() {
    return logged;
}
function log(message) {
    logged.push(message);
    try {
        console.log(message);
    }
    catch (_) { }
    try {
        getDeskAPI().send("logOnMain", message);
    }
    catch (_) { }
}
function logError(error, origin) {
    log(getErrorMessage(error, origin));
}
function getErrorMessage(error, origin) {
    return getTreatMessage("Problem with:", error, origin);
}
function logWarning(error, origin) {
    log(getWarningMessage(error, origin));
}
function getWarningMessage(error, origin) {
    return getTreatMessage("Checkout this:", error, origin);
}
function logSupport(error, origin) {
    log(getSupportMessage(error, origin));
}
function getSupportMessage(error, origin) {
    return getTreatMessage("Need Support on:", error, origin);
}
function getTreatMessage(prefix, error, origin) {
    var result = prefix + (error ? " " + error.toString() : "");
    if (error.response && error.response.data) {
        var errorData = error.response.data;
        if (!(typeof errorData == "string" || errorData instanceof String)) {
            errorData = JSON.stringify(errorData);
        }
        result += " - Data: " + errorData;
    }
    else {
        if (!(typeof error == "string" || error instanceof String)) {
            result += " - Data: " + JSON.stringify(error);
        }
    }
    if (origin) {
        result += " - Origin: " + origin;
    }
    const stack = (new Error("")).stack;
    if (stack) {
        result += " - Stack: " + stack;
    }
    return result;
}
function toggleDevTools() {
    try {
        getDeskAPI().send("toggleDevTools");
    }
    catch (e) {
        logError(e, "{qinpel-res}(ErrCode-000001)");
    }
}
exports.QinHead = {
    getDeskAPI,
    getLogged,
    log,
    logError,
    getErrorMessage,
    logWarning,
    getWarningMessage,
    logSupport,
    getSupportMessage,
    getTreatMessage,
    toggleDevTools,
};

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSkin = exports.QinStyles = void 0;
const qin_arm_1 = require("./qin-arm");
const qin_head_1 = require("./qin-head");
exports.QinStyles = {
    ColorForeground: "#270036",
    ColorBackground: "#fffaef",
    ColorInactive: "#faefff",
    ColorActive: "#facdcd",
    FontName: "SourceSansPro",
    FontSize: "16px",
};
function styleAsBody(el) {
    el.style.position = "absolute";
    el.style.top = "0px";
    el.style.right = "0px";
    el.style.bottom = "0px";
    el.style.left = "0px";
    el.style.padding = "9px";
    el.style.overflow = "auto";
}
function styleAsEdit(el) {
    el.style.margin = "1px";
    el.style.padding = "3px";
    el.style.outline = "none";
    el.style.border = "1px solid #180027";
    el.style.borderRadius = "3px";
    el.style.color = "#180027";
    el.style.backgroundColor = "#ffffff";
    el.style.fontFamily = "SourceSansPro";
    el.style.fontSize = "16px";
    el.addEventListener("focus", () => {
        el.style.outline = "none";
        el.style.backgroundColor = "#faefff";
        el.style.border = "1px solid #ae0000";
    });
    el.addEventListener("focusout", () => {
        el.style.outline = "none";
        el.style.backgroundColor = "#ffffff";
        el.style.border = "1px solid #180027";
    });
}
function styleMaxSizeForNotOverFlow(el, parent) {
    console.log("D1");
    if (!parent) {
        parent = el.parentElement;
        console.log("D2: " + parent);
    }
    if (parent) {
        let maxWidth = 0;
        let maxHeight = 0;
        let imediate = el;
        do {
            maxWidth = maxWidth + imediate.clientLeft;
            maxHeight = maxHeight + imediate.clientTop;
            console.log("D3: " + maxWidth);
            console.log("D4: " + maxHeight);
            imediate = imediate.parentElement;
        } while (imediate != null && imediate != parent);
        maxWidth = parent.clientWidth - maxWidth;
        maxHeight = parent.clientHeight - maxHeight;
        console.log("D5: " + maxWidth);
        console.log("D6: " + maxHeight);
        el.style.maxWidth = maxWidth + "px";
        el.style.maxHeight = maxHeight + "px";
    }
}
function styleSize(el, size) {
    if (size) {
        if (size instanceof qin_head_1.QinDimension) {
            el.style.width = size.width + "px";
            el.style.height = size.height + "px";
        }
        else {
            let dim = getDimensionSize(size);
            el.style.width = dim.width + "px";
            el.style.height = dim.height + "px";
        }
    }
}
function styleFlexMax(el) {
    el.style.flex = "1";
}
function styleFlexMin(el) {
    el.style.flex = "0";
}
function getWindowSize() {
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
    };
}
function getWindowSizeStyle() {
    const width = getWindowSize().width;
    if (width < 600) {
        return qin_head_1.QinGrandeur.SMALL;
    }
    else if (width < 1000) {
        return qin_head_1.QinGrandeur.MEDIUM;
    }
    else {
        return qin_head_1.QinGrandeur.LARGE;
    }
}
function hideAllIFrames() {
    var doc_iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < doc_iframes.length; i++) {
        let doc_iframe = doc_iframes[i];
        doc_iframe.style.visibility = "hidden";
    }
}
function showAllIFrames() {
    var doc_iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < doc_iframes.length; i++) {
        let doc_iframe = doc_iframes[i];
        doc_iframe.style.visibility = "visible";
    }
}
function disableSelection(element) {
    element.style.userSelect = "none";
    element.style.webkitUserSelect = "none";
    element.onselectstart = qin_arm_1.QinArm.stopEvent;
}
function clearSelection() {
    setTimeout(() => {
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    }, 360);
}
function isElementVisibleInScroll(element) {
    if (element.parentElement) {
        if (element.offsetTop < element.parentElement.scrollTop) {
            return false;
        }
        if (element.offsetLeft < element.parentElement.scrollLeft) {
            return false;
        }
        if (element.clientWidth >
            element.parentElement.clientWidth -
                (element.offsetLeft - element.parentElement.scrollLeft)) {
            return false;
        }
        if (element.clientHeight >
            element.parentElement.clientHeight -
                (element.offsetTop - element.parentElement.scrollTop)) {
            return false;
        }
    }
    return true;
}
function getDimensionSize(size) {
    if (size == qin_head_1.QinGrandeur.LARGE) {
        return getDimensionLarge();
    }
    else if (size == qin_head_1.QinGrandeur.MEDIUM) {
        return getDimensionMedium();
    }
    else {
        return getDimensionSmall();
    }
}
const dimensionSmall = {
    width: 16,
    height: 16,
};
function getDimensionSmall() {
    return dimensionSmall;
}
const dimensionMedium = {
    width: 32,
    height: 32,
};
function getDimensionMedium() {
    return dimensionMedium;
}
const dimensionLarge = {
    width: 64,
    height: 64,
};
function getDimensionLarge() {
    return dimensionLarge;
}
exports.QinSkin = {
    styles: exports.QinStyles,
    styleAsBody,
    styleAsEdit,
    styleMaxSizeForNotOverFlow,
    styleSize,
    styleFlexMax,
    styleFlexMin,
    getWindowSize,
    getWindowSizeStyle,
    hideAllIFrames,
    showAllIFrames,
    disableSelection,
    clearSelection,
    isElementVisibleInScroll,
    getDimensionSize,
    getDimensionSmall,
    getDimensionMedium,
    getDimensionLarge,
};

},{"./qin-arm":26,"./qin-head":29}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = void 0;
const qin_arm_1 = require("./qin-arm");
const qin_body_1 = require("./qin-body");
const qin_foot_1 = require("./qin-foot");
const qin_head_1 = require("./qin-head");
const qin_skin_1 = require("./qin-skin");
exports.QinSoul = {
    arm: qin_arm_1.QinArm,
    body: qin_body_1.QinBody,
    foot: qin_foot_1.QinFoot,
    head: qin_head_1.QinHead,
    skin: qin_skin_1.QinSkin,
};

},{"./qin-arm":26,"./qin-body":27,"./qin-foot":28,"./qin-head":29,"./qin-skin":30}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qinpel_cps_1 = require("qinpel-cps");
class QinScaffold extends qinpel_cps_1.QinStack {
    constructor() {
        super();
        let panel1 = new qinpel_cps_1.QinPanel();
        panel1.style.putAsBackground("green");
        this.add(panel1);
        let panel2 = new qinpel_cps_1.QinPanel();
        panel2.style.putAsBackground("yellow");
        this.add(panel2);
        let panel3 = new qinpel_cps_1.QinPanel();
        panel3.style.putAsBackground("red");
        this.add(panel3);
        setTimeout(() => {
            panel1.style.putAsZIndex(10);
        }, 3000);
        setTimeout(() => {
            panel2.style.putAsZIndex(10);
        }, 6000);
        setTimeout(() => {
            panel3.style.putAsZIndex(10);
        }, 9000);
    }
}
new QinScaffold().style.putAsBody();

},{"qinpel-cps":1}]},{},[32])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvYWxsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYXNzZXRzLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYmFzZS1zdHlsZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWJhc2UuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1ib29sZWFuLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYnV0dG9uLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY2hvb3Nlci5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWNvbHVtbi5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWNvbWJvLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZWRpdC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWV4cGxvcmVyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZmllbGQuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1pY29uLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4taW50ZWdlci5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWxhYmVsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbGluZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLW1lbnUuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1tdXRhbnRzLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tcGFuZWwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1wYXRoLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tc3RhY2suanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1zdHJpbmcuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10YWJzLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tdG9vbHMuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL2FsbC5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWFybS5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWJvZHkuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1mb290LmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4taGVhZC5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLXNraW4uanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1zb3VsLmpzIiwiYnVpbGQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1cEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5JbnRlZ2VyID0gZXhwb3J0cy5RaW5FeHBsb3JlciA9IGV4cG9ydHMuUWluRWRpdCA9IGV4cG9ydHMuUWluQmFzZSA9IGV4cG9ydHMuUWluVG9vbHMgPSBleHBvcnRzLlFpblBhdGggPSBleHBvcnRzLlFpbkNvbWJvID0gZXhwb3J0cy5RaW5Db2x1bW4gPSBleHBvcnRzLlFpbkxpbmUgPSBleHBvcnRzLlFpbkJ1dHRvbiA9IGV4cG9ydHMuUWluTWVudUl0ZW0gPSBleHBvcnRzLlFpbk1lbnUgPSBleHBvcnRzLlFpbk11dGFudHNBcm0gPSBleHBvcnRzLlFpbk11dGFudHMgPSBleHBvcnRzLlFpbkNob29zZXIgPSBleHBvcnRzLlFpbkZpZWxkID0gZXhwb3J0cy5xaW5Bc3NldFVybCA9IGV4cG9ydHMuUWluQXNzZXQgPSBleHBvcnRzLlFpblN0YWNrID0gZXhwb3J0cy5RaW5QYW5lbCA9IGV4cG9ydHMuUWluVGFicyA9IGV4cG9ydHMuUWluSWNvbiA9IGV4cG9ydHMuUWluU3RyaW5nID0gZXhwb3J0cy5RaW5MYWJlbCA9IGV4cG9ydHMuUWluQmFzZVN0eWxlID0gZXhwb3J0cy5RaW5Cb29sZWFuID0gdm9pZCAwO1xudmFyIHFpbl9ib29sZWFuXzEgPSByZXF1aXJlKFwiLi9xaW4tYm9vbGVhblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJvb2xlYW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9ib29sZWFuXzEuUWluQm9vbGVhbjsgfSB9KTtcbnZhciBxaW5fYmFzZV9zdHlsZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2Utc3R5bGVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5CYXNlU3R5bGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9iYXNlX3N0eWxlXzEuUWluQmFzZVN0eWxlOyB9IH0pO1xudmFyIHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTGFiZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9sYWJlbF8xLlFpbkxhYmVsOyB9IH0pO1xudmFyIHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TdHJpbmdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zdHJpbmdfMS5RaW5TdHJpbmc7IH0gfSk7XG52YXIgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSWNvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ljb25fMS5RaW5JY29uOyB9IH0pO1xudmFyIHFpbl90YWJzXzEgPSByZXF1aXJlKFwiLi9xaW4tdGFic1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblRhYnNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl90YWJzXzEuUWluVGFiczsgfSB9KTtcbnZhciBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBhbmVsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fcGFuZWxfMS5RaW5QYW5lbDsgfSB9KTtcbnZhciBxaW5fc3RhY2tfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdGFja1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblN0YWNrXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc3RhY2tfMS5RaW5TdGFjazsgfSB9KTtcbnZhciBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQXNzZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hc3NldHNfMS5RaW5Bc3NldDsgfSB9KTtcbnZhciBxaW5fYXNzZXRzXzIgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicWluQXNzZXRVcmxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hc3NldHNfMi5xaW5Bc3NldFVybDsgfSB9KTtcbnZhciBxaW5fZmllbGRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWVsZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpZWxkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmllbGRfMS5RaW5GaWVsZDsgfSB9KTtcbnZhciBxaW5fY2hvb3Nlcl8xID0gcmVxdWlyZShcIi4vcWluLWNob29zZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5DaG9vc2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fY2hvb3Nlcl8xLlFpbkNob29zZXI7IH0gfSk7XG52YXIgcWluX211dGFudHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1tdXRhbnRzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTXV0YW50c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX211dGFudHNfMS5RaW5NdXRhbnRzOyB9IH0pO1xudmFyIHFpbl9tdXRhbnRzXzIgPSByZXF1aXJlKFwiLi9xaW4tbXV0YW50c1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbk11dGFudHNBcm1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9tdXRhbnRzXzIuUWluTXV0YW50c0FybTsgfSB9KTtcbnZhciBxaW5fbWVudV8xID0gcmVxdWlyZShcIi4vcWluLW1lbnVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5NZW51XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbWVudV8xLlFpbk1lbnU7IH0gfSk7XG52YXIgcWluX21lbnVfMiA9IHJlcXVpcmUoXCIuL3Fpbi1tZW51XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTWVudUl0ZW1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9tZW51XzIuUWluTWVudUl0ZW07IH0gfSk7XG52YXIgcWluX2J1dHRvbl8xID0gcmVxdWlyZShcIi4vcWluLWJ1dHRvblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJ1dHRvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2J1dHRvbl8xLlFpbkJ1dHRvbjsgfSB9KTtcbnZhciBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5MaW5lXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbGluZV8xLlFpbkxpbmU7IH0gfSk7XG52YXIgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkNvbHVtblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2NvbHVtbl8xLlFpbkNvbHVtbjsgfSB9KTtcbnZhciBxaW5fY29tYm9fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb21ib1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkNvbWJvXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fY29tYm9fMS5RaW5Db21ibzsgfSB9KTtcbnZhciBxaW5fcGF0aF8xID0gcmVxdWlyZShcIi4vcWluLXBhdGhcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5QYXRoXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fcGF0aF8xLlFpblBhdGg7IH0gfSk7XG52YXIgcWluX3Rvb2xzXzEgPSByZXF1aXJlKFwiLi9xaW4tdG9vbHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Ub29sc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3Rvb2xzXzEuUWluVG9vbHM7IH0gfSk7XG52YXIgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQmFzZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Jhc2VfMS5RaW5CYXNlOyB9IH0pO1xudmFyIHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkVkaXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9lZGl0XzEuUWluRWRpdDsgfSB9KTtcbnZhciBxaW5fZXhwbG9yZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1leHBsb3JlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkV4cGxvcmVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZXhwbG9yZXJfMS5RaW5FeHBsb3JlcjsgfSB9KTtcbnZhciBxaW5faW50ZWdlcl8xID0gcmVxdWlyZShcIi4vcWluLWludGVnZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5JbnRlZ2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faW50ZWdlcl8xLlFpbkludGVnZXI7IH0gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnFpbkFzc2V0VXJsID0gZXhwb3J0cy5RaW5Bc3NldCA9IHZvaWQgMDtcbnZhciBRaW5Bc3NldDtcbihmdW5jdGlvbiAoUWluQXNzZXQpIHtcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyTW92aWVcIl0gPSBcImV4cGxvcmVyLW1vdmllLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVVwbG9hZFwiXSA9IFwiZmFjZS11cGxvYWQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTmV3c1wiXSA9IFwiZmFjZS1uZXdzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI0XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI1XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI1LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUltYWdlXCJdID0gXCJmYWNlLWltYWdlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJGaWxlXCJdID0gXCJleHBsb3Jlci1maWxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUZvbGRlclwiXSA9IFwiZmFjZS1mb2xkZXIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZU1lc3NhZ2VcIl0gPSBcImZhY2UtbWVzc2FnZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIlNvdXJjZVNlcmlmUHJvXCJdID0gXCJzb3VyY2Utc2VyaWYtcHJvLnR0ZlwiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmtcIl0gPSBcImJhY2tncm91bmQtZGFyay5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjNcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjVcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI1LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNhcnRcIl0gPSBcImZhY2UtY2FydC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZyYW1lUmVzaXplXCJdID0gXCJmcmFtZS1yZXNpemUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJRaW5wZWxcIl0gPSBcInFpbnBlbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDEyXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTEyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJaaXBwZWRcIl0gPSBcImV4cGxvcmVyLXppcHBlZC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI2XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjYucG5nXCI7XG4gICAgUWluQXNzZXRbXCJRaW5wZWw0OFwiXSA9IFwicWlucGVsLTQ4LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVVubGlua1wiXSA9IFwiZmFjZS11bmxpbmsucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxM1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrOVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlV2lmaVwiXSA9IFwiZmFjZS13aWZpLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmxvY2tcIl0gPSBcImZhY2UtdW5sb2NrLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUdlYXJcIl0gPSBcImZhY2UtZ2Vhci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDb25maXJtXCJdID0gXCJmYWNlLWNvbmZpcm0ucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ1XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlVHJhc2hcIl0gPSBcImZhY2UtdHJhc2gucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazFcIl0gPSBcImJhY2tncm91bmQtZGFyay0xLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE4XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIlNvdXJjZVNhbnNQcm9cIl0gPSBcInNvdXJjZS1zYW5zLXByby50dGZcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNaWNEaXNhYmxlXCJdID0gXCJmYWNlLW1pYy1kaXNhYmxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZU1pY1wiXSA9IFwiZmFjZS1taWMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRXllRGlzYWJsZVwiXSA9IFwiZmFjZS1leWUtZGlzYWJsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VGaWx0ZXJcIl0gPSBcImZhY2UtZmlsdGVyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJFeGVjXCJdID0gXCJleHBsb3Jlci1leGVjLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUFkZFwiXSA9IFwiZmFjZS1hZGQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlU3BlYWtlckRpc2FibGVcIl0gPSBcImZhY2Utc3BlYWtlci1kaXNhYmxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNvbnRyb2xcIl0gPSBcImZhY2UtY29udHJvbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDYWxlbmRhclwiXSA9IFwiZmFjZS1jYWxlbmRhci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd1VwXCJdID0gXCJmYWNlLWFycm93LXVwLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJBcHBzXCJdID0gXCJleHBsb3Jlci1hcHBzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVNoaWVsZFwiXSA9IFwiZmFjZS1zaGllbGQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTG9ja1wiXSA9IFwiZmFjZS1sb2NrLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUxpbmtcIl0gPSBcImZhY2UtbGluay5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTZW5kXCJdID0gXCJmYWNlLXNlbmQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDFcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNaW51c1wiXSA9IFwiZmFjZS1taW51cy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VMYWJlbFwiXSA9IFwiZmFjZS1sYWJlbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmRvXCJdID0gXCJmYWNlLXVuZG8ucG5nXCI7XG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckltYWdlXCJdID0gXCJleHBsb3Jlci1pbWFnZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJFeHBsb3Jlck11c2ljXCJdID0gXCJleHBsb3Jlci1tdXNpYy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDdcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNYXBEaXNhYmxlXCJdID0gXCJmYWNlLW1hcC1kaXNhYmxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiTG9naW5LZXlcIl0gPSBcImxvZ2luLWtleS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyN1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI3LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUZpbGVcIl0gPSBcImZhY2UtZmlsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIxXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGcmFtZVN0YXR1c0luZm9cIl0gPSBcImZyYW1lLXN0YXR1cy1pbmZvLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dMZWZ0XCJdID0gXCJmYWNlLWFycm93LWxlZnQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTZXR0aW5nc1wiXSA9IFwiZmFjZS1zZXR0aW5ncy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNb3ZpZVwiXSA9IFwiZmFjZS1tb3ZpZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrNFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI2LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja1RpbnkwMVwiXSA9IFwiYmFjay10aW55LTAxLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIxXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDaGVja1wiXSA9IFwiZmFjZS1jaGVjay5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw2XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC02LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjhcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazZcIl0gPSBcImJhY2tncm91bmQtZGFyay02LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUhvbWVcIl0gPSBcImZhY2UtaG9tZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTdGFyXCJdID0gXCJmYWNlLXN0YXIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckRpclwiXSA9IFwiZXhwbG9yZXItZGlyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNpcmNsZVwiXSA9IFwiZmFjZS1jaXJjbGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQXR0YWNoXCJdID0gXCJmYWNlLWF0dGFjaC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VQYXN0ZVwiXSA9IFwiZmFjZS1wYXN0ZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTYucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlUGx1c1wiXSA9IFwiZmFjZS1wbHVzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTRcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ4XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlUGhvbmVcIl0gPSBcImZhY2UtcGhvbmUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEwXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDb2dcIl0gPSBcImZhY2UtY29nLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyN1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ29udGFjdFwiXSA9IFwiZmFjZS1jb250YWN0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUV4aXRcIl0gPSBcImZhY2UtZXhpdC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDb21wYXNzXCJdID0gXCJmYWNlLWNvbXBhc3MucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTExLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MThcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxN1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDbG9zZVwiXSA9IFwiZmFjZS1jbG9zZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VEb3dubG9hZFwiXSA9IFwiZmFjZS1kb3dubG9hZC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VQZW5jaWxcIl0gPSBcImZhY2UtcGVuY2lsLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE3LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUJlbGxEaXNhYmxlXCJdID0gXCJmYWNlLWJlbGwtZGlzYWJsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE2XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE2LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjdcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyM1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VFbnRlclwiXSA9IFwiZmFjZS1lbnRlci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTNcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtOS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQmVsbFwiXSA9IFwiZmFjZS1iZWxsLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE0XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xNC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZyYW1lTWluaW1pemVcIl0gPSBcImZyYW1lLW1pbmltaXplLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNhbWVyYURpc2FibGVcIl0gPSBcImZhY2UtY2FtZXJhLWRpc2FibGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VFcmFzZVwiXSA9IFwiZmFjZS1lcmFzZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtOS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VFeWVcIl0gPSBcImZhY2UtZXllLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDBcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGcmFtZU1lbnVcIl0gPSBcImZyYW1lLW1lbnUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazBcIl0gPSBcImJhY2tncm91bmQtZGFyay0wLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZU1hcFwiXSA9IFwiZmFjZS1tYXAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlU2hhcmVcIl0gPSBcImZhY2Utc2hhcmUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlV2lmaURpc2FibGVcIl0gPSBcImZhY2Utd2lmaS1kaXNhYmxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRnJhbWVTdGF0dXNFcnJvclwiXSA9IFwiZnJhbWUtc3RhdHVzLWVycm9yLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGcmFtZU1heGltaXplXCJdID0gXCJmcmFtZS1tYXhpbWl6ZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd1JpZ2h0XCJdID0gXCJmYWNlLWFycm93LXJpZ2h0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyOFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI4LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVNhdmVcIl0gPSBcImZhY2Utc2F2ZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VCYWdcIl0gPSBcImZhY2UtYmFnLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyNVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI1LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVJlZG9cIl0gPSBcImZhY2UtcmVkby5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDb3B5XCJdID0gXCJmYWNlLWNvcHkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRW5sYXJnZVwiXSA9IFwiZmFjZS1lbmxhcmdlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmszXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTZWFyY2hcIl0gPSBcImZhY2Utc2VhcmNoLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTExLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0M1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0zLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNsb2NrXCJdID0gXCJmYWNlLWNsb2NrLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyOVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI5LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVNocmlua1wiXSA9IFwiZmFjZS1zaHJpbmsucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIwXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlUGhvbmVEaXNhYmxlXCJdID0gXCJmYWNlLXBob25lLWRpc2FibGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE5XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dEb3duXCJdID0gXCJmYWNlLWFycm93LWRvd24ucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ2XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTYucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ2FtZXJhXCJdID0gXCJmYWNlLWNhbWVyYS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDYW5jZWxcIl0gPSBcImZhY2UtY2FuY2VsLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZU1haWxcIl0gPSBcImZhY2UtbWFpbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VEZWxcIl0gPSBcImZhY2UtZGVsLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI5XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI5LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjFcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGcmFtZUNsb3NlXCJdID0gXCJmcmFtZS1jbG9zZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIk1lbnVEZXZ0b29sc1wiXSA9IFwibWVudS1kZXZ0b29scy5pY29cIjtcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyQ21kc1wiXSA9IFwiZXhwbG9yZXItY21kcy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VQaW5cIl0gPSBcImZhY2UtcGluLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVBlcnNvblwiXSA9IFwiZmFjZS1wZXJzb24ucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlU3BlYWtlclwiXSA9IFwiZmFjZS1zcGVha2VyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxNlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE2LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUhlYXJ0XCJdID0gXCJmYWNlLWhlYXJ0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazdcIl0gPSBcImJhY2tncm91bmQtZGFyay03LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjYucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTIucG5nXCI7XG59KShRaW5Bc3NldCA9IGV4cG9ydHMuUWluQXNzZXQgfHwgKGV4cG9ydHMuUWluQXNzZXQgPSB7fSkpO1xuZnVuY3Rpb24gcWluQXNzZXRVcmwoYXNzZXQpIHtcbiAgICByZXR1cm4gXCIvYXBwL3FpbnBlbC1hcHAvYXNzZXRzL1wiICsgYXNzZXQ7XG59XG5leHBvcnRzLnFpbkFzc2V0VXJsID0gcWluQXNzZXRVcmw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYXNzZXRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5CYXNlU3R5bGUgPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNsYXNzIFFpbkJhc2VTdHlsZSB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBwdXRBc0JvZHkoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0JvZHkodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgZGVsQXNCb2R5KCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIHB1dEFzV2hvbGUoKSB7XG4gICAgICAgIHRoaXMucHV0QXNQb3NpdGlvbkFic29sdXRlKCk7XG4gICAgICAgIHRoaXMucHV0QXNCb3VuZHMoMCwgMCwgMCwgMCk7XG4gICAgfVxuICAgIHB1dEFzRWRpdCgpIHtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0VkaXQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRhYkluZGV4ID0gMDtcbiAgICB9XG4gICAgcHV0QXNTY3JvbGwoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICAgIH1cbiAgICBwdXRBc01hcmdpbihtYXJnaW4pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpbiA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKG1hcmdpbik7XG4gICAgfVxuICAgIHB1dEFzTWFyZ2luVG9wKG1hcmdpbikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobWFyZ2luKTtcbiAgICB9XG4gICAgcHV0QXNNYXJnaW5Cb3R0b20obWFyZ2luKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChtYXJnaW4pO1xuICAgIH1cbiAgICBwdXRBc01hcmdpbkxlZnQobWFyZ2luKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobWFyZ2luKTtcbiAgICB9XG4gICAgcHV0QXNNYXJnaW5SaWdodChtYXJnaW4pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpblJpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobWFyZ2luKTtcbiAgICB9XG4gICAgcHV0QXNQYWRkaW5nKHBhZGRpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmcgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcbiAgICB9XG4gICAgcHV0QXNQYWRkaW5nVG9wKHBhZGRpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcbiAgICB9XG4gICAgcHV0QXNQYWRkaW5nQm90dG9tKHBhZGRpbmcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcbiAgICB9XG4gICAgcHV0QXNQYWRkaW5nTGVmdChwYWRkaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xuICAgIH1cbiAgICBwdXRBc1BhZGRpbmdSaWdodChwYWRkaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcbiAgICB9XG4gICAgcHV0QXNCb3VuZHModG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh0b3ApO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucmlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChyaWdodCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5ib3R0b20gPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChib3R0b20pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGxlZnQpO1xuICAgIH1cbiAgICBwdXRBc0FsbENlbnRlcmVkKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYWxpZ25Db250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xuICAgIH1cbiAgICBwdXRBc0Rpc3BsYXlGbGV4KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBwdXRBc0Rpc3BsYXlJbmxpbmUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICB9XG4gICAgcHV0QXNEaXNwbGF5SW5saW5lQmxvY2soKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICB9XG4gICAgcHV0QXNQb3NpdGlvblN0YXRpYygpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJzdGF0aWNcIjtcbiAgICB9XG4gICAgcHV0QXNQb3NpdGlvbkFic29sdXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgfVxuICAgIHB1dEFzUG9zaXRpb25GaXhlZCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIH1cbiAgICBwdXRBc1Bvc2l0aW9uUmVsYXRpdmUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB9XG4gICAgcHV0QXNQb3NpdGlvblN0aWNreSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJzdGlja3lcIjtcbiAgICB9XG4gICAgcHV0QXNQb3NpdGlvbkluaXRpYWwoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiaW5pdGlhbFwiO1xuICAgIH1cbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Sb3coKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICB9XG4gICAgcHV0QXNGbGV4RGlyZWN0aW9uUm93UmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvdy1yZXZlcnNlXCI7XG4gICAgfVxuICAgIHB1dEFzRmxleERpcmVjdGlvbkNvbHVtbigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgIH1cbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Db2x1bW5SZXZlcnNlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uLXJldmVyc2VcIjtcbiAgICB9XG4gICAgcHV0QXNGbGV4V3JhcCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XG4gICAgfVxuICAgIHB1dEFzRmxleFdyYXBOb3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4V3JhcCA9IFwibm93cmFwXCI7XG4gICAgfVxuICAgIHB1dEFzRmxleFdyYXBSZXZlcnNlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleFdyYXAgPSBcIndyYXAtcmV2ZXJzZVwiO1xuICAgIH1cbiAgICBwdXRBc0ZsZXhNaW4oKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4ID0gXCJub25lXCI7XG4gICAgfVxuICAgIHB1dEFzRmxleE1heCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXggPSBcImF1dG9cIjtcbiAgICB9XG4gICAgcHV0QXNXaWR0aCh3aWR0aCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XG4gICAgfVxuICAgIHB1dEFzSGVpZ2h0KGhlaWdodCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcbiAgICB9XG4gICAgcHV0QXNTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcbiAgICB9XG4gICAgcHV0QXNNaW5XaWR0aCh3aWR0aCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWluV2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XG4gICAgfVxuICAgIHB1dEFzTWluSGVpZ2h0KGhlaWdodCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcbiAgICB9XG4gICAgcHV0QXNNaW5TaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1pbldpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcbiAgICB9XG4gICAgcHV0QXNNYXhXaWR0aCh3aWR0aCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XG4gICAgfVxuICAgIHB1dEFzTWF4SGVpZ2h0KGhlaWdodCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcbiAgICB9XG4gICAgcHV0QXNNYXhTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heFdpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcbiAgICB9XG4gICAgcHV0QXNGb3JlZ3JvdW5kKGZvcmVncm91bmQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gZm9yZWdyb3VuZDtcbiAgICB9XG4gICAgcHV0QXNCYWNrZ3JvdW5kKGJhY2tncm91bmQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuICAgIH1cbiAgICBwdXRBc0JhY2tBc3NldChhc3NldCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyBhc3NldCArIFwiJylcIjtcbiAgICB9XG4gICAgcHV0QXNCYWNrSW5pdGlhbCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiaW5pdGlhbFwiO1xuICAgIH1cbiAgICBwdXRBc1pJbmRleChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPT0gbnVsbCB8fCBpbmRleCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSBpbmRleC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzRGlzYWJsZWRTZWxlY3Rpb24oKSB7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLmRpc2FibGVTZWxlY3Rpb24odGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgZ2V0UGl4ZWxzT3JJbml0aWFsKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiaW5pdGlhbFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZSArIFwicHhcIjtcbiAgICB9XG59XG5leHBvcnRzLlFpbkJhc2VTdHlsZSA9IFFpbkJhc2VTdHlsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1iYXNlLXN0eWxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5CYXNlID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fYmFzZV9zdHlsZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2Utc3R5bGVcIik7XG5jb25zdCBxaW5fdG9vbHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi10b29sc1wiKTtcbmNsYXNzIFFpbkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9iYXNlUGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMuX2Jhc2VEaXNwbGF5ID0gXCJpbml0aWFsXCI7XG4gICAgICAgIHRoaXMuX2Jhc2VWaXNpYmlsaXR5ID0gXCJpbml0aWFsXCI7XG4gICAgICAgIHRoaXMuX3N0eWxlID0gbnVsbDtcbiAgICB9XG4gICAgZ2V0IHFpbnBlbCgpIHtcbiAgICAgICAgcmV0dXJuIHFpbl90b29sc18xLlFpblRvb2xzLnFpbnBlbCgpO1xuICAgIH1cbiAgICBnZXQgc3R5bGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdHlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zdHlsZSA9IG5ldyBxaW5fYmFzZV9zdHlsZV8xLlFpbkJhc2VTdHlsZSh0aGlzLmdldE1haW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0eWxlO1xuICAgIH1cbiAgICBpbnN0YWxsKG9uQmFzZSkge1xuICAgICAgICB0aGlzLl9iYXNlUGFyZW50ID0gb25CYXNlO1xuICAgICAgICB0aGlzLl9iYXNlUGFyZW50LmFwcGVuZENoaWxkKHRoaXMpO1xuICAgIH1cbiAgICB1bkluc3RhbGwoKSB7XG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgfVxuICAgIHJlSW5zdGFsbCgpIHtcbiAgICAgICAgdGhpcy5fYmFzZVBhcmVudC5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICB9XG4gICAgdW5EaXNwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VEaXNwbGF5ID0gdGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZURpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9iYXNlRGlzcGxheTtcbiAgICB9XG4gICAgdW5WaXNpYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSAhPT0gXCJoaWRkZW5cIikge1xuICAgICAgICAgICAgdGhpcy5fYmFzZVZpc2liaWxpdHkgPSB0aGlzLmdldE1haW4oKS5zdHlsZS52aXNpYmlsaXR5O1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVWaXNpYmxlKCkge1xuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS52aXNpYmlsaXR5ID0gdGhpcy5fYmFzZVZpc2liaWxpdHk7XG4gICAgfVxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuYXBwZW5kQ2hpbGQoY2hpbGQuZ2V0TWFpbigpKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fYmFzZUNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRNYWluKCkucmVtb3ZlQ2hpbGQoY2hpbGQuZ2V0TWFpbigpKTtcbiAgICB9XG4gICAgY2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iYXNlQ2hpbGRyZW47XG4gICAgfVxuICAgIGNsZWFyQ2hpbGRyZW4oKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5fYmFzZUNoaWxkcmVuKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5yZW1vdmVDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbiA9IFtdO1xuICAgIH1cbiAgICBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uKHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xuICAgIH1cbiAgICBwdXRUYWJJbmRleChpbmRleCkge1xuICAgICAgICB0aGlzLmdldE1haW4oKS50YWJJbmRleCA9IGluZGV4O1xuICAgIH1cbn1cbmV4cG9ydHMuUWluQmFzZSA9IFFpbkJhc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYmFzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluQm9vbGVhbiA9IHZvaWQgMDtcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jb25zdCBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XG5jb25zdCBxaW5fbGFiZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1sYWJlbFwiKTtcbmNvbnN0IHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcbmNsYXNzIFFpbkJvb2xlYW4gZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fbGluZV8xLlFpbkxpbmUoKTtcbiAgICAgICAgdGhpcy5fcWluU3BhbiA9IG5ldyBxaW5fbGFiZWxfMS5RaW5MYWJlbCgpO1xuICAgICAgICB0aGlzLl9xaW5JY29uID0gbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNpcmNsZSk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3FpblNwYW4uaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcbiAgICAgICAgdGhpcy5fcWluSWNvbi5pbnN0YWxsKHRoaXMuX3FpblNwYW4pO1xuICAgICAgICB0aGlzLl9xaW5TcGFuLnN0eWxlLnB1dEFzRWRpdCgpO1xuICAgICAgICB0aGlzLl9xaW5TcGFuLnN0eWxlLnB1dEFzRGlzcGxheUZsZXgoKTtcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5zdHlsZS5wdXRBc0FsbENlbnRlcmVkKCk7XG4gICAgICAgIHRoaXMuX3FpblNwYW4uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBkYXRhO1xuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICB9XG4gICAgZ2V0IHFpbk1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xuICAgIH1cbiAgICBnZXQgcWluU3BhbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblNwYW47XG4gICAgfVxuICAgIGdldCBxaW5JY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluSWNvbjtcbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICB9XG4gICAgdXBkYXRlSWNvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uLmNoYW5nZShxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNvbmZpcm0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcWluSWNvbi5jaGFuZ2UocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDaXJjbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAhdGhpcy5fdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluQm9vbGVhbiA9IFFpbkJvb2xlYW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYm9vbGVhbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluQnV0dG9uID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XG5jbGFzcyBRaW5CdXR0b24gZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5fcWluSWNvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuX3FpbkxhYmVsID0gbnVsbDtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25CdXR0b24odGhpcy5fZWxNYWluKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pY29uKSB7XG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uID0gb3B0aW9ucy5pY29uO1xuICAgICAgICAgICAgdGhpcy5fcWluSWNvbi5pbnN0YWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3FpbkxhYmVsID0gb3B0aW9ucy5sYWJlbDtcbiAgICAgICAgICAgIHRoaXMuX3FpbkxhYmVsLmluc3RhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcbiAgICB9XG4gICAgZ2V0IHFpbkljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5JY29uO1xuICAgIH1cbiAgICBnZXQgcWluTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5MYWJlbDtcbiAgICB9XG59XG5leHBvcnRzLlFpbkJ1dHRvbiA9IFFpbkJ1dHRvbjtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBhcHBseU9uQnV0dG9uOiAoZWwpID0+IHtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0VkaXQoZWwpO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICBlbC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1idXR0b24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkNob29zZXIgPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XG5jb25zdCBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xuY29uc3QgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcbmNvbnN0IHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xuY29uc3QgcWluX2V4cGxvcmVyXzEgPSByZXF1aXJlKFwiLi9xaW4tZXhwbG9yZXJcIik7XG5jb25zdCBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcbmNvbnN0IHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XG5jbGFzcyBRaW5DaG9vc2VyIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX2NvbHVtbl8xLlFpbkNvbHVtbigpO1xuICAgICAgICB0aGlzLl9xaW5VcHBlciA9IG5ldyBxaW5fbGluZV8xLlFpbkxpbmUoKTtcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybSA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHtcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDb25maXJtKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3FpbkZvbGRlciA9IG5ldyBxaW5fc3RyaW5nXzEuUWluU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMgPSBuZXcgcWluX2NvbWJvXzEuUWluQ29tYm8oKTtcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oe1xuICAgICAgICAgICAgaWNvbjogbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZVNlYXJjaCksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9xaW5VbmRlciA9IG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpO1xuICAgICAgICB0aGlzLl9xaW5FeHBsb3JlciA9IG5ldyBxaW5fZXhwbG9yZXJfMS5RaW5FeHBsb3JlcigpO1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5fbmF0dXJlID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uYXR1cmUpID8gb3B0aW9ucy5uYXR1cmUgOiBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuQk9USDtcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5vcGVyYXRpb24pID8gb3B0aW9ucy5vcGVyYXRpb24gOiBxaW5wZWxfcmVzXzEuUWluRmlsZXNPcGVyYXRpb24uT1BFTjtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRvcnMgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRlc2NyaXB0b3JzKSA/IG9wdGlvbnMuZGVzY3JpcHRvcnMgOiBbXTtcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24pID8gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpbmdsZVNlbGVjdGlvbiA6IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRNYWluKCk7XG4gICAgICAgIHRoaXMuaW5pdFVwcGVyKCk7XG4gICAgICAgIHRoaXMuaW5pdFVuZGVyKCk7XG4gICAgfVxuICAgIGluaXRNYWluKCkge1xuICAgICAgICB0aGlzLl9xaW5VcHBlci5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xuICAgICAgICB0aGlzLl9xaW5VbmRlci5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xuICAgIH1cbiAgICBpbml0VXBwZXIoKSB7XG4gICAgICAgIHRoaXMuX3FpblVwcGVyLnN0eWxlLnB1dEFzRmxleE1pbigpO1xuICAgICAgICB0aGlzLl9xaW5Db25maXJtLmluc3RhbGwodGhpcy5fcWluVXBwZXIpO1xuICAgICAgICB0aGlzLl9xaW5Db25maXJtLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hvc2VuIG9mIHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgICAgICAgICBjaG9zZW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5zdHlsZS5wdXRBc01pbldpZHRoKDEwMCk7XG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5zdHlsZS5wdXRBc0ZsZXhNYXgoKTtcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc0VudGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRm9sZGVyKCk7XG4gICAgICAgICAgICAgICAgcWluRXZlbnQuY29uc3VtZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XG4gICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuc3R5bGUucHV0QXNNaW5XaWR0aCgxMDApO1xuICAgICAgICB0aGlzLmluaXRFeHRlbnNpb25zKCk7XG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIoKTtcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdFVuZGVyKCkge1xuICAgICAgICB0aGlzLl9xaW5VbmRlci5zdHlsZS5wdXRBc1Njcm9sbCgpO1xuICAgICAgICB0aGlzLl9xaW5VbmRlci5zdHlsZS5wdXRBc0ZsZXhNYXgoKTtcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuaW5zdGFsbCh0aGlzLl9xaW5VbmRlcik7XG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLm5hdHVyZSA9IHRoaXMuX25hdHVyZTtcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuc2luZ2xlU2VsZWN0aW9uID0gdGhpcy5fc2luZ2xlU2VsZWN0aW9uO1xuICAgIH1cbiAgICBpbml0RXh0ZW5zaW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Rlc2NyaXB0b3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zLmFkZEl0ZW0oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFsbCBGaWxlcyAoKi4qKVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIipcIixcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuZXh0ZW5zaW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2Rlc2NyaXB0b3JzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLl9kZXNjcmlwdG9yc1tpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5hZGRJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0b3IuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZXNjcmlwdG9yLmV4dGVuc2lvbnMuam9pbihcIjtcIiksXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpbmRleCA9PSAwLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuZXh0ZW5zaW9ucyA9IHRoaXMuX2Rlc2NyaXB0b3JzWzBdLmV4dGVuc2lvbnM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluRXhwbG9yZXIuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuc2V0RGF0YShkYXRhKTtcbiAgICB9XG4gICAgZ2V0IHFpbk1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xuICAgIH1cbiAgICBnZXQgcWluVXBwZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5VcHBlcjtcbiAgICB9XG4gICAgZ2V0IHFpbkNvbmZpcm0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5Db25maXJtO1xuICAgIH1cbiAgICBnZXQgcWluRm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluRm9sZGVyO1xuICAgIH1cbiAgICBnZXQgcWluRXh0ZW5zaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkV4dGVuc2lvbnM7XG4gICAgfVxuICAgIGdldCBxaW5TZWFyY2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5TZWFyY2g7XG4gICAgfVxuICAgIGdldCBxaW5VbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblVuZGVyO1xuICAgIH1cbiAgICBnZXQgcWluRXhwbG9yZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FeHBsb3JlcjtcbiAgICB9XG4gICAgZ2V0IG5hdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdHVyZTtcbiAgICB9XG4gICAgc2V0IG5hdHVyZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9uYXR1cmUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIubmF0dXJlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBvcGVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVyYXRpb247XG4gICAgfVxuICAgIHNldCBvcGVyYXRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdG9ycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0b3JzO1xuICAgIH1cbiAgICBzZXQgZGVzY3JpcHRvcnModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRvcnMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHNpbmdsZVNlbGVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbmdsZVNlbGVjdGlvbjtcbiAgICB9XG4gICAgc2V0IHNpbmdsZVNlbGVjdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XG4gICAgfVxuICAgIGxvYWRGb2xkZXIoKSB7XG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmxvYWQodGhpcy5fcWluRm9sZGVyLmdldERhdGEoKSwgKGxvYWRlZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcWluRm9sZGVyLnNldERhdGEobG9hZGVkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZENob3NlbihjaG9zZW4pIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goY2hvc2VuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5DaG9vc2VyID0gUWluQ2hvb3Nlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jaG9vc2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Db2x1bW4gPSB2b2lkIDA7XG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XG5jbGFzcyBRaW5Db2x1bW4gZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5pbml0UGFuZWwoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZpZXdlciBvZiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgICAgICB2aWV3ZXIuaW5zdGFsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0UGFuZWwoKSB7XG4gICAgICAgIHN0eWxlcy5hcHBseU9uUGFuZWwodGhpcy5fZWxNYWluKTtcbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcbiAgICB9XG59XG5leHBvcnRzLlFpbkNvbHVtbiA9IFFpbkNvbHVtbjtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBhcHBseU9uUGFuZWw6IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICBlbC5zdHlsZS5mbGV4V3JhcCA9IFwibm93cmFwXCI7XG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY29sdW1uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Db21ibyA9IHZvaWQgMDtcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcbmNsYXNzIFFpbkNvbWJvIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNFZGl0KCk7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaXRlbXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygb3B0aW9ucy5pdGVtcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSXRlbShpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5zZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbi52YWx1ZTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX2VsTWFpbi52YWx1ZSA9IGRhdGE7XG4gICAgfVxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udGV4dCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIGlmIChpdGVtLnNlbGVjdGVkICE9IHVuZGVmaW5lZCAmJiBpdGVtLnNlbGVjdGVkICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGl0ZW0uc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWxNYWluLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluQ29tYm8gPSBRaW5Db21ibztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jb21iby5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluRWRpdCA9IHZvaWQgMDtcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcbmNsYXNzIFFpbkVkaXQgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xufVxuZXhwb3J0cy5RaW5FZGl0ID0gUWluRWRpdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1lZGl0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5FeHBsb3JlciA9IHZvaWQgMDtcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XG5jbGFzcyBRaW5FeHBsb3JlciBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XG4gICAgICAgIHRoaXMuX2ZvbGRlckFjdHVhbCA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gW107XG4gICAgICAgIHRoaXMuX25hdHVyZSA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubmF0dXJlKSA/IG9wdGlvbnMubmF0dXJlIDogcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkJPVEg7XG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmV4dGVuc2lvbnMpID8gb3B0aW9ucy5leHRlbnNpb25zIDogW107XG4gICAgICAgIHRoaXMuX3NpbmdsZVNlbGVjdGlvbiA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2luZ2xlU2VsZWN0aW9uKSA/IG9wdGlvbnMuc2luZ2xlU2VsZWN0aW9uIDogZmFsc2U7XG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcbiAgICB9XG4gICAgaW5pdE1haW4oKSB7XG4gICAgICAgIHN0eWxlcy5hcHBseU9uTWFpbih0aGlzLl9xaW5NYWluLmdldE1haW4oKSk7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5TZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4uc3R5bGUucHV0QXNEaXNhYmxlZFNlbGVjdGlvbigpO1xuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaXNTZWxlY3RlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRQYXRoSm9pbih0aGlzLl9mb2xkZXJTZXJ2ZXIsIGl0ZW0uZ2V0TmFtZSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jbGVhbigpO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBmb2xkZXJSb290ID0gcWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRQYXJlbnQoZGF0YVswXSk7XG4gICAgICAgICAgICB0aGlzLmxvYWQoZm9sZGVyUm9vdCwgKF8pID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW1QYXRoIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1Sb290ID0gcWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRQYXJlbnQoaXRlbVBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFN0ZW0oaXRlbVBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVJvb3QgIT09IGZvbGRlclJvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucWlucGVsLmZyYW1lLnN0YXR1c0Vycm9yKGBUaGUgaXRlbSAnJHtpdGVtUGF0aH0nIGlzIG5vdCBvbiB0aGUgcm9vdCAnJHtmb2xkZXJSb290fScuYCwgXCJ7cWlucGVsLWNwc30oRXJyQ29kZS0wMDAwMDEpXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdChpdGVtTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnFpbnBlbC5mcmFtZS5zdGF0dXNFcnJvcihgRG9lcyBub3QgaGF2ZSB0aGUgaXRlbSAnJHtpdGVtTmFtZX0nIG9uIHRoZSBmb2xkZXIgJyR7Zm9sZGVyUm9vdH0nYCwgXCJ7cWlucGVsLWNwc30oRXJyQ29kZS0wMDAwMDIpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHFpbk1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xuICAgIH1cbiAgICBnZXQgbmF0dXJlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmF0dXJlO1xuICAgIH1cbiAgICBzZXQgbmF0dXJlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX25hdHVyZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZXh0ZW5zaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dGVuc2lvbnM7XG4gICAgfVxuICAgIHNldCBleHRlbnNpb25zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHNpbmdsZVNlbGVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbmdsZVNlbGVjdGlvbjtcbiAgICB9XG4gICAgc2V0IHNpbmdsZVNlbGVjdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTaW5nbGVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgZ2V0IGZvbGRlckFjdHVhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlckFjdHVhbDtcbiAgICB9XG4gICAgZ2V0IGZvbGRlclNlcnZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlclNlcnZlcjtcbiAgICB9XG4gICAgdXBkYXRlU2luZ2xlU2VsZWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fc2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgYWxyZWFkeUhhcyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX2l0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNTZWxlY3RlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbHJlYWR5SGFzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnVuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5SGFzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2FkKGZvbGRlciwgb25Mb2FkKSB7XG4gICAgICAgIHRoaXMuY2xlYW4oKTtcbiAgICAgICAgdGhpcy5xaW5wZWxcbiAgICAgICAgICAgIC5wb3N0KFwiL2Rpci9saXN0XCIsIHsgcGF0aDogZm9sZGVyIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9mb2xkZXJBY3R1YWwgPSBmb2xkZXI7XG4gICAgICAgICAgICBmb3IgKGxldCBsaW5lIG9mIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmJvZHkuZ2V0VGV4dExpbmVzKHJlcy5kYXRhKSkge1xuICAgICAgICAgICAgICAgIGxldCBsaW5lVmFsdWUgPSBsaW5lLnN1YnN0cmluZygzKTtcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aChcIlA6IFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb2xkZXJTZXJ2ZXIgPSBsaW5lVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZChsaW5lVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aChcIkQ6IFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9uYXR1cmUgPT0gcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkRJUkVDVE9SSUVTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0RpcihsaW5lVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aChcIkY6IFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9uYXR1cmUgPT0gcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkZJTEVTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXh0ZW5zaW9uID0gcWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRGaWxlRXh0ZW5zaW9uKGxpbmVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFzc2VkRXh0ZW5zaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9leHRlbnNpb25zICYmIHRoaXMuX2V4dGVuc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NlZEV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFzc2VkRXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdGaWxlKGxpbmVWYWx1ZSwgZXh0ZW5zaW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnFpbnBlbC5mcmFtZS5zdGF0dXNFcnJvcihlcnIsIFwie3FpbnBlbC1jcHN9KEVyckNvZGUtMDAwMDAzKVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbG9hZChvbkxvYWQpIHtcbiAgICAgICAgdGhpcy5sb2FkKHRoaXMuX2ZvbGRlclNlcnZlciwgb25Mb2FkKTtcbiAgICB9XG4gICAgZ29Gb2xkZXJVcChvbkxvYWQpIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHFpbnBlbF9yZXNfMS5RaW5Gb290LmdldFBhcmVudCh0aGlzLl9mb2xkZXJTZXJ2ZXIpO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQocGFyZW50LCBvbkxvYWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFuKCkge1xuICAgICAgICB0aGlzLl9xaW5NYWluLmdldE1haW4oKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLl9pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLl9mb2xkZXJBY3R1YWwgPSBcIlwiO1xuICAgICAgICB0aGlzLl9mb2xkZXJTZXJ2ZXIgPSBcIlwiO1xuICAgIH1cbiAgICBjbGVhblNlbGVjdGlvbigpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX2l0ZW1zKSB7XG4gICAgICAgICAgICBpdGVtLnVuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0KGl0ZW1OYW1lKSB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbXMuZmluZCgoaW5zaWRlKSA9PiBpbnNpZGUuZ2V0TmFtZSgpID09IGl0ZW1OYW1lKTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uc2VsZWN0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bnNlbGVjdChpdGVtTmFtZSkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1zLmZpbmQoKGluc2lkZSkgPT4gaW5zaWRlLmdldE5hbWUoKSA9PSBpdGVtTmFtZSk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLnVuc2VsZWN0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBuZXdEaXIobmFtZSkge1xuICAgICAgICB0aGlzLm5ld0l0ZW0obmFtZSwgXCJleHBsb3Jlci1kaXIucG5nXCIpO1xuICAgIH1cbiAgICBuZXdGaWxlKG5hbWUsIGV4dGVuc2lvbikge1xuICAgICAgICB0aGlzLm5ld0l0ZW0obmFtZSwgZ2V0SWNvbk5hbWUoZXh0ZW5zaW9uKSk7XG4gICAgfVxuICAgIG5ld0l0ZW0obmFtZSwgaWNvbikge1xuICAgICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW0odGhpcywgbmFtZSwgaWNvbik7XG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzLl9xaW5NYWluLmdldE1haW4oKSk7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5FeHBsb3JlciA9IFFpbkV4cGxvcmVyO1xuY2xhc3MgSXRlbSB7XG4gICAgY29uc3RydWN0b3IoZXhwbG9yZXIsIGZpbGVOYW1lLCBpY29uTmFtZSkge1xuICAgICAgICB0aGlzLmRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmRpdkl0ZW1Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zcGFuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0aGlzLmltZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICB0aGlzLnNwYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5leHBsb3JlciA9IGV4cGxvcmVyO1xuICAgICAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XG4gICAgICAgIHRoaXMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbiAgICAgICAgdGhpcy5pbml0SXRlbSgpO1xuICAgIH1cbiAgICBpbml0SXRlbSgpIHtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZJdGVtKHRoaXMuZGl2SXRlbSk7XG4gICAgICAgIHRoaXMuZGl2SXRlbS50YWJJbmRleCA9IDA7XG4gICAgICAgIHN0eWxlcy5hcHBseU9uRGl2SXRlbUJvZHkodGhpcy5kaXZJdGVtQm9keSk7XG4gICAgICAgIHRoaXMuZGl2SXRlbS5hcHBlbmRDaGlsZCh0aGlzLmRpdkl0ZW1Cb2R5KTtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25TcGFuSWNvbih0aGlzLnNwYW5JY29uKTtcbiAgICAgICAgdGhpcy5kaXZJdGVtQm9keS5hcHBlbmRDaGlsZCh0aGlzLnNwYW5JY29uKTtcbiAgICAgICAgdGhpcy5pbWdJY29uLnNyYyA9IFwiL2FwcC9xaW5wZWwtYXBwL2Fzc2V0cy9cIiArIHRoaXMuaWNvbk5hbWU7XG4gICAgICAgIHRoaXMuc3Bhbkljb24uYXBwZW5kQ2hpbGQodGhpcy5pbWdJY29uKTtcbiAgICAgICAgdGhpcy5zcGFuVGV4dC5pbm5lclRleHQgPSB0aGlzLmZpbGVOYW1lO1xuICAgICAgICBzdHlsZXMuYXBwbHlPblNwYW5UZXh0KHRoaXMuc3BhblRleHQpO1xuICAgICAgICB0aGlzLmRpdkl0ZW1Cb2R5LmFwcGVuZENoaWxkKHRoaXMuc3BhblRleHQpO1xuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5hcm0uYWRkQWN0aW9uKHRoaXMuZGl2SXRlbSwgKHFpbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXZJdGVtLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5zdGFsbChvbikge1xuICAgICAgICBvbi5hcHBlbmRDaGlsZCh0aGlzLmRpdkl0ZW0pO1xuICAgIH1cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIHN0eWxlcy5hcHBseU9uRGl2U2VsZWN0KHRoaXMuZGl2SXRlbSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICB1bnNlbGVjdCgpIHtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZVblNlbGVjdCh0aGlzLmRpdkl0ZW0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGxvcmVyLnNpbmdsZVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9yZXIuY2xlYW5TZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZU5hbWU7XG4gICAgfVxuICAgIGlzU2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldEljb25OYW1lKGZyb21FeHRlbnNpb24pIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJleHBsb3Jlci1maWxlLnBuZ1wiO1xuICAgIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUFwcChmcm9tRXh0ZW5zaW9uKSkge1xuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWFwcHMucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlQ21kKGZyb21FeHRlbnNpb24pKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItY21kcy5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVFeGVjKGZyb21FeHRlbnNpb24pKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItZXhlYy5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVJbWFnZShmcm9tRXh0ZW5zaW9uKSkge1xuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZVZlY3Rvcihmcm9tRXh0ZW5zaW9uKSkge1xuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZU11c2ljKGZyb21FeHRlbnNpb24pKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItbXVzaWMucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlTW92aWUoZnJvbUV4dGVuc2lvbikpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1tb3ZpZS5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVaaXBwZWQoZnJvbUV4dGVuc2lvbikpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci16aXBwZWQucG5nXCI7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgYXBwbHlPbk1haW46IChlbCkgPT4ge1xuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KGVsKTtcbiAgICAgICAgZWwuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbiAgICAgICAgZWwuc3R5bGUubWluV2lkdGggPSBcIjE2MHB4XCI7XG4gICAgICAgIGVsLnN0eWxlLm1pbkhlaWdodCA9IFwiMTYwcHhcIjtcbiAgICAgICAgZWwudGFiSW5kZXggPSAwO1xuICAgIH0sXG4gICAgYXBwbHlPbkRpdkl0ZW06IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjJweFwiO1xuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCI5cHhcIjtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMzNjAwNDVcIjtcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIzcHhcIjtcbiAgICAgICAgZWwuc3R5bGUuY29sb3IgPSBcIiMyNzAwMzZcIjtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNhZTAwMDBcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBlbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMzYwMDQ1XCI7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYXBwbHlPbkRpdkl0ZW1Cb2R5OiAoZWwpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBlbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgICAgZWwuc3R5bGUud2lkdGggPSBcIjk2cHhcIjtcbiAgICB9LFxuICAgIGFwcGx5T25TcGFuSWNvbjogKGVsKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgfSxcbiAgICBhcHBseU9uU3BhblRleHQ6IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBlbC5zdHlsZS53b3JkV3JhcCA9IFwiYnJlYWstd29yZFwiO1xuICAgIH0sXG4gICAgYXBwbHlPbkRpdlNlbGVjdDogKGVsKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZhZWZmZlwiO1xuICAgIH0sXG4gICAgYXBwbHlPbkRpdlVuU2VsZWN0OiAoZWwpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZXhwbG9yZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkZpZWxkID0gdm9pZCAwO1xuY29uc3QgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xuY2xhc3MgUWluRmllbGQgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBlZGl0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX2NvbHVtbl8xLlFpbkNvbHVtbigpO1xuICAgICAgICB0aGlzLl9xaW5MYWJlbCA9IG5ldyBxaW5fbGFiZWxfMS5RaW5MYWJlbCgpO1xuICAgICAgICB0aGlzLl9xaW5FZGl0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcWluTGFiZWwuc2V0VGl0bGUodGl0bGUpO1xuICAgICAgICB0aGlzLl9xaW5MYWJlbC5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xuICAgICAgICB0aGlzLl9xaW5FZGl0ID0gZWRpdDtcbiAgICAgICAgdGhpcy5fcWluRWRpdC5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xuICAgICAgICB0aGlzLl9xaW5NYWluLmdldE1haW4oKS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiNXB4XCI7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNXB4XCI7XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkVkaXQuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fcWluRWRpdC5zZXREYXRhKGRhdGEpO1xuICAgIH1cbiAgICBnZXQgcWluTWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XG4gICAgfVxuICAgIGdldCBxaW5MYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkxhYmVsO1xuICAgIH1cbiAgICBnZXQgcWluRWRpdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkVkaXQ7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5GaWVsZCA9IFFpbkZpZWxkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWZpZWxkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5JY29uID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xuY2xhc3MgUWluSWNvbiBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XG4gICAgY29uc3RydWN0b3IoYXNzZXQsIHNpemUgPSBxaW5wZWxfcmVzXzEuUWluR3JhbmRldXIuU01BTEwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgdGhpcy5fZWxNYWluLnNyYyA9ICgwLCBxaW5fYXNzZXRzXzEucWluQXNzZXRVcmwpKGFzc2V0KTtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZVNpemUodGhpcy5fZWxNYWluLCBzaXplKTtcbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcbiAgICB9XG4gICAgY2hhbmdlKGFzc2V0KSB7XG4gICAgICAgIHRoaXMuX2VsTWFpbi5zcmMgPSAoMCwgcWluX2Fzc2V0c18xLnFpbkFzc2V0VXJsKShhc3NldCk7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5JY29uID0gUWluSWNvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1pY29uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5JbnRlZ2VyID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jbGFzcyBRaW5JbnRlZ2VyIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5fZWxNYWluLnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KHRoaXMuX2VsTWFpbik7XG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS53aWR0aCA9IFwiMTIwcHhcIjtcbiAgICAgICAgdGhpcy5fZWxNYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEodGhpcy5nZXREYXRhKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5pbml0aWFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2VsTWFpbi52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkIHx8IHZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLl9lbE1haW4udmFsdWUsIDEwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCB8fCBkYXRhID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2VsTWFpbi52YWx1ZSA9IChkYXRhIHwgMCkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUWluSW50ZWdlciA9IFFpbkludGVnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taW50ZWdlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluTGFiZWwgPSB2b2lkIDA7XG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XG5jbGFzcyBRaW5MYWJlbCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxNYWluLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcbiAgICB9XG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy5fZWxNYWluLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgfVxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluLnRleHRDb250ZW50O1xuICAgIH1cbn1cbmV4cG9ydHMuUWluTGFiZWwgPSBRaW5MYWJlbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1sYWJlbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluTGluZSA9IHZvaWQgMDtcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcbmNsYXNzIFFpbkxpbmUgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5pbml0UGFuZWwoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB2aWV3ZXIgb2Ygb3B0aW9ucy5pbml0aWFsKSB7XG4gICAgICAgICAgICAgICAgdmlld2VyLmluc3RhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdFBhbmVsKCkge1xuICAgICAgICBzdHlsZXMuYXBwbHlPblBhbmVsKHRoaXMuX2VsTWFpbik7XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XG4gICAgfVxufVxuZXhwb3J0cy5RaW5MaW5lID0gUWluTGluZTtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBhcHBseU9uUGFuZWw6IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICBlbC5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xuICAgIH0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWxpbmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbk1lbnVJdGVtID0gZXhwb3J0cy5RaW5NZW51ID0gdm9pZCAwO1xuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcbmNvbnN0IHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcbmNsYXNzIFFpbk1lbnUgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpO1xuICAgICAgICB0aGlzLl9xaW5NYWluLnN0eWxlLnB1dEFzRWRpdCgpO1xuICAgICAgICB0aGlzLl9xaW5NYWluLnN0eWxlLnB1dEFzU2Nyb2xsKCk7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLml0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbigpKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBRaW5NZW51SXRlbSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jbGVhckNoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEl0ZW0oaXRlbSkge1xuICAgICAgICBpdGVtLmluc3RhbGwodGhpcyk7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5NZW51ID0gUWluTWVudTtcbmNsYXNzIFFpbk1lbnVJdGVtIGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xuICAgIGNvbnN0cnVjdG9yKGljb24sIGxhYmVsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2ZhY2UgPSBuZXcgcWluX3BhbmVsXzEuUWluUGFuZWwoKTtcbiAgICAgICAgdGhpcy5fYm9keSA9IG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZhY2UuaW5zdGFsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5fYm9keS5pbnN0YWxsKHRoaXMuX2ZhY2UpO1xuICAgICAgICB0aGlzLl9pY29uID0gaWNvbjtcbiAgICAgICAgaWYgKHRoaXMuX2ljb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2ljb24uaW5zdGFsbCh0aGlzLl9ib2R5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xuICAgICAgICBpZiAodGhpcy5fbGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsLmluc3RhbGwodGhpcy5fYm9keSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdXRUYWJJbmRleCgwKTtcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0VkaXQoKTtcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc01hcmdpbigzKTtcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc1BhZGRpbmcoNik7XG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNEaXNwbGF5SW5saW5lQmxvY2soKTtcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc01heFdpZHRoKDk2KTtcbiAgICAgICAgdGhpcy5fYm9keS5zdHlsZS5wdXRBc0FsbENlbnRlcmVkKCk7XG4gICAgfVxuICAgIHNlbGVjdCgpIHtcbiAgICAgICAgdGhpcy5fZmFjZS5zdHlsZS5wdXRBc0JhY2tBc3NldChxaW5fYXNzZXRzXzEuUWluQXNzZXQuQmFja1RpbnkwMSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdW5TZWxlY3QoKSB7XG4gICAgICAgIHRoaXMuX2ZhY2Uuc3R5bGUucHV0QXNCYWNrSW5pdGlhbCgpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBzd2FwU2VsZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5TZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlFpbk1lbnVJdGVtID0gUWluTWVudUl0ZW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tbWVudS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluTXV0YW50c0FybSA9IGV4cG9ydHMuUWluTXV0YW50cyA9IHZvaWQgMDtcbmNvbnN0IHFpbl9ib29sZWFuXzEgPSByZXF1aXJlKFwiLi9xaW4tYm9vbGVhblwiKTtcbmNvbnN0IHFpbl9jaG9vc2VyXzEgPSByZXF1aXJlKFwiLi9xaW4tY2hvb3NlclwiKTtcbmNvbnN0IHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xuY29uc3QgcWluX2V4cGxvcmVyXzEgPSByZXF1aXJlKFwiLi9xaW4tZXhwbG9yZXJcIik7XG5jb25zdCBxaW5faW50ZWdlcl8xID0gcmVxdWlyZShcIi4vcWluLWludGVnZXJcIik7XG5jb25zdCBxaW5fcGF0aF8xID0gcmVxdWlyZShcIi4vcWluLXBhdGhcIik7XG5jb25zdCBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xudmFyIFFpbk11dGFudHM7XG4oZnVuY3Rpb24gKFFpbk11dGFudHMpIHtcbiAgICBRaW5NdXRhbnRzW1wiQk9PTEVBTlwiXSA9IFwiYm9vbGVhblwiO1xuICAgIFFpbk11dGFudHNbXCJDSE9PU0VSXCJdID0gXCJjaG9vc2VyXCI7XG4gICAgUWluTXV0YW50c1tcIkNPTUJPXCJdID0gXCJjb21ib1wiO1xuICAgIFFpbk11dGFudHNbXCJFWFBMT1JFUlwiXSA9IFwiZXhwbG9yZXJcIjtcbiAgICBRaW5NdXRhbnRzW1wiSU5URUdFUlwiXSA9IFwiaW50ZWdlclwiO1xuICAgIFFpbk11dGFudHNbXCJQQVRIXCJdID0gXCJwYXRoXCI7XG4gICAgUWluTXV0YW50c1tcIlNUUklOR1wiXSA9IFwic3RyaW5nXCI7XG59KShRaW5NdXRhbnRzID0gZXhwb3J0cy5RaW5NdXRhbnRzIHx8IChleHBvcnRzLlFpbk11dGFudHMgPSB7fSkpO1xuZnVuY3Rpb24gbmV3RWRpdChraW5kLCBvcHRpb25zKSB7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5CT09MRUFOOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fYm9vbGVhbl8xLlFpbkJvb2xlYW4ob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5DSE9PU0VSOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fY2hvb3Nlcl8xLlFpbkNob29zZXIob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5DT01CTzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2NvbWJvXzEuUWluQ29tYm8ob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5FWFBMT1JFUjpcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2V4cGxvcmVyXzEuUWluRXhwbG9yZXIob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5JTlRFR0VSOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5faW50ZWdlcl8xLlFpbkludGVnZXIob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5QQVRIOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fcGF0aF8xLlFpblBhdGgob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5TVFJJTkc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcob3B0aW9ucyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGtpbmQgb2YgbXV0YW50IHRvIGNyZWF0ZS5cIik7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5NdXRhbnRzQXJtID0ge1xuICAgIG5ld0VkaXQsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLW11dGFudHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpblBhbmVsID0gdm9pZCAwO1xuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xuY2xhc3MgUWluUGFuZWwgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluUGFuZWwgPSBRaW5QYW5lbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1wYW5lbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluUGF0aCA9IHZvaWQgMDtcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XG5jb25zdCBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xuY29uc3QgcWluX2Nob29zZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1jaG9vc2VyXCIpO1xuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xuY29uc3QgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xuY29uc3QgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcbmNsYXNzIFFpblBhdGggZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fbGluZV8xLlFpbkxpbmUoKTtcbiAgICAgICAgdGhpcy5fcWluUGF0aCA9IG5ldyBxaW5fc3RyaW5nXzEuUWluU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuX3FpblNlYXJjaCA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHtcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VGb2xkZXIpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcWluQ2hvb3NlciA9IG5ldyBxaW5fY2hvb3Nlcl8xLlFpbkNob29zZXIoe1xuICAgICAgICAgICAgbmF0dXJlOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubmF0dXJlLFxuICAgICAgICAgICAgb3BlcmF0aW9uOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub3BlcmF0aW9uLFxuICAgICAgICAgICAgZGVzY3JpcHRvcnM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZXNjcmlwdG9ycyxcbiAgICAgICAgICAgIHNpbmdsZVNlbGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3FpblBvcHVwID0gdGhpcy5xaW5wZWwuZnJhbWUubmV3UG9wdXAodGhpcy5fcWluQ2hvb3Nlci5nZXRNYWluKCkpO1xuICAgICAgICB0aGlzLl9xaW5QYXRoLmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xuICAgICAgICB0aGlzLl9xaW5TZWFyY2guYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLnNob3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cHBlckhlaWdodCA9IHRoaXMuX3FpbkNob29zZXIucWluVXBwZXIuZ2V0TWFpbigpLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBleHBsb3Jlck1heEhlaWdodCA9IHRoaXMuX3FpblBvcHVwLm1heEhlaWdodCAtICh1cHBlckhlaWdodCArIDEyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5DaG9vc2VyLnFpbkV4cGxvcmVyLnN0eWxlLnB1dEFzTWF4SGVpZ2h0KGV4cGxvcmVyTWF4SGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3FpbkNob29zZXIuYWRkQ2hvc2VuKChjaG9zZW4pID0+IHtcbiAgICAgICAgICAgIGlmIChjaG9zZW4gJiYgY2hvc2VuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5QYXRoLnNldERhdGEoY2hvc2VuWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBhdGguZ2V0RGF0YSgpO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fcWluUGF0aC5zZXREYXRhKGRhdGEpO1xuICAgIH1cbiAgICBnZXQgcWluTWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XG4gICAgfVxuICAgIGdldCBxaW5QYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluUGF0aDtcbiAgICB9XG4gICAgZ2V0IHFpblNlYXJjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblNlYXJjaDtcbiAgICB9XG4gICAgZ2V0IHFpbkNob29zZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5DaG9vc2VyO1xuICAgIH1cbiAgICBnZXQgcWluUG9wdXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5Qb3B1cDtcbiAgICB9XG59XG5leHBvcnRzLlFpblBhdGggPSBRaW5QYXRoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpblN0YWNrID0gdm9pZCAwO1xuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xuY2xhc3MgUWluU3RhY2sgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xuICAgIH1cbiAgICBhZGQocGFuZWwpIHtcbiAgICAgICAgcGFuZWwuaW5zdGFsbCh0aGlzKTtcbiAgICAgICAgcGFuZWwuc3R5bGUucHV0QXNXaG9sZSgpO1xuICAgICAgICBwYW5lbC5zdHlsZS5wdXRBc1pJbmRleCh0aGlzLmNoaWxkcmVuKCkubGVuZ3RoICsgMSk7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5TdGFjayA9IFFpblN0YWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXN0YWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5TdHJpbmcgPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcbmNsYXNzIFFpblN0cmluZyBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuX2VsTWFpbi50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9lbE1haW4ubWF4TGVuZ3RoID0gb3B0aW9ucy5tYXhMZW5ndGg7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBNYXRoLm1pbihNYXRoLm1heChvcHRpb25zLm1heExlbmd0aCAtIDEwLCAwKSwgOTApO1xuICAgICAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5mbG9vcig5MCArIChwb3NpdGlvbiAqIDcpIC8gMyk7XG4gICAgICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KHRoaXMuX2VsTWFpbik7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbi52YWx1ZTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX2VsTWFpbi52YWx1ZSA9IGRhdGE7XG4gICAgfVxuICAgIGluc2VydEF0Q3Vyc29yKGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLl9lbE1haW4uc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIGxldCBlbmRQb3MgPSB0aGlzLl9lbE1haW4uc2VsZWN0aW9uRW5kO1xuICAgICAgICBsZXQgb2xkVmFsID0gdGhpcy5fZWxNYWluLnZhbHVlO1xuICAgICAgICBsZXQgbmV3VmFsID0gKHN0YXJ0UG9zID4gMCA/IG9sZFZhbC5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpIDogXCJcIikgK1xuICAgICAgICAgICAgZGF0YSArXG4gICAgICAgICAgICAoZW5kUG9zIDwgb2xkVmFsLmxlbmd0aCA/IG9sZFZhbC5zdWJzdHJpbmcoZW5kUG9zKSA6IFwiXCIpO1xuICAgICAgICB0aGlzLl9lbE1haW4udmFsdWUgPSBuZXdWYWw7XG4gICAgICAgIHRoaXMuX2VsTWFpbi5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0UG9zO1xuICAgICAgICB0aGlzLl9lbE1haW4uc2VsZWN0aW9uRW5kID0gc3RhcnRQb3MgKyBkYXRhLmxlbmd0aDtcbiAgICB9XG59XG5leHBvcnRzLlFpblN0cmluZyA9IFFpblN0cmluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1zdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpblRhYnMgPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xuY29uc3QgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcbmNsYXNzIFFpblRhYnMgZXh0ZW5kcyBxaW5fY29sdW1uXzEuUWluQ29sdW1uIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3FpblRhYnMgPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XG4gICAgICAgIHRoaXMuX3FpblBhbmVsID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XG4gICAgICAgIHRoaXMuX3RhYnMgPSBbXTtcbiAgICAgICAgdGhpcy5fcWluVGFicy5pbnN0YWxsKHRoaXMpO1xuICAgICAgICB0aGlzLl9xaW5QYW5lbC5pbnN0YWxsKHRoaXMpO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFiIG9mIG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUYWIodGFiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgcWluVGFicygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblRhYnM7XG4gICAgfVxuICAgIGdldCBxaW5QYW5lbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBhbmVsO1xuICAgIH1cbiAgICBhZGRUYWIodGFiKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHsgbGFiZWw6IG5ldyBxaW5fbGFiZWxfMS5RaW5MYWJlbCh0YWIudGl0bGUpIH0pO1xuICAgICAgICBidXR0b24uc3R5bGUucHV0QXNCYWNrZ3JvdW5kKHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckluYWN0aXZlKTtcbiAgICAgICAgYnV0dG9uLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWV3ZXIodGFiLnZpZXdlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b24uaW5zdGFsbCh0aGlzLl9xaW5UYWJzKTtcbiAgICAgICAgbGV0IGZpcnN0ID0gdGhpcy5fdGFicy5sZW5ndGggPT0gMDtcbiAgICAgICAgbGV0IHRhYlJlZiA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB0YWIudGl0bGUsXG4gICAgICAgICAgICB2aWV3ZXI6IHRhYi52aWV3ZXIsXG4gICAgICAgICAgICBidXR0b24sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3RhYnMucHVzaCh0YWJSZWYpO1xuICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1ZpZXdlcih0YWIudmlld2VyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93VGFiKHRpdGxlKSB7XG4gICAgICAgIGZvciAoY29uc3QgdGFiIG9mIHRoaXMuX3RhYnMpIHtcbiAgICAgICAgICAgIGlmICh0YWIudGl0bGUgPT0gdGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWV3ZXIodGFiLnZpZXdlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd1ZpZXdlcih2aWV3ZXIpIHtcbiAgICAgICAgdGhpcy5fcWluUGFuZWwuY2xlYXJDaGlsZHJlbigpO1xuICAgICAgICB2aWV3ZXIuaW5zdGFsbCh0aGlzLl9xaW5QYW5lbCk7XG4gICAgICAgIGZvciAoY29uc3QgdGFiIG9mIHRoaXMuX3RhYnMpIHtcbiAgICAgICAgICAgIGlmICh0YWIudmlld2VyID09IHZpZXdlcikge1xuICAgICAgICAgICAgICAgIHRhYi5idXR0b24uc3R5bGUucHV0QXNCYWNrZ3JvdW5kKHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YWIuYnV0dG9uLnN0eWxlLnB1dEFzQmFja2dyb3VuZChxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JJbmFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlFpblRhYnMgPSBRaW5UYWJzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXRhYnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpblRvb2xzID0gdm9pZCAwO1xuY29uc3QgcmVmUWlucGVsID0gd2luZG93LmZyYW1lRWxlbWVudC5xaW5wZWw7XG5mdW5jdGlvbiBxaW5wZWwoKSB7XG4gICAgcmV0dXJuIHJlZlFpbnBlbDtcbn1cbmV4cG9ydHMuUWluVG9vbHMgPSB7XG4gICAgcWlucGVsLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi10b29scy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluRm9vdCA9IGV4cG9ydHMuUWluRmlsZXNEZXNjcmlwdG9yID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSBleHBvcnRzLlFpbkFybSA9IGV4cG9ydHMuUWluUG9pbnRlckNhbGxzID0gZXhwb3J0cy5RaW5XYWl0ZXJzID0gZXhwb3J0cy5RaW5FdmVudCA9IGV4cG9ydHMuUWluU291bCA9IGV4cG9ydHMuUWluQm9keSA9IGV4cG9ydHMuUWluSGVhZCA9IGV4cG9ydHMuUWluR3JhbmRldXIgPSBleHBvcnRzLlFpbkJvdW5kcyA9IGV4cG9ydHMuUWluRGltZW5zaW9uID0gZXhwb3J0cy5RaW5Qb2ludCA9IGV4cG9ydHMuUWluU2tpbiA9IGV4cG9ydHMuUWluU3R5bGVzID0gdm9pZCAwO1xudmFyIHFpbl9za2luXzEgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblN0eWxlc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fMS5RaW5TdHlsZXM7IH0gfSk7XG52YXIgcWluX3NraW5fMiA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU2tpblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fMi5RaW5Ta2luOyB9IH0pO1xudmFyIHFpbl9oZWFkXzEgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBvaW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF8xLlFpblBvaW50OyB9IH0pO1xudmFyIHFpbl9oZWFkXzIgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkRpbWVuc2lvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfMi5RaW5EaW1lbnNpb247IH0gfSk7XG52YXIgcWluX2hlYWRfMyA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm91bmRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF8zLlFpbkJvdW5kczsgfSB9KTtcbnZhciBxaW5faGVhZF80ID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5HcmFuZGV1clwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfNC5RaW5HcmFuZGV1cjsgfSB9KTtcbnZhciBxaW5faGVhZF81ID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5IZWFkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF81LlFpbkhlYWQ7IH0gfSk7XG52YXIgcWluX2JvZHlfMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib2R5XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm9keVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2JvZHlfMS5RaW5Cb2R5OyB9IH0pO1xudmFyIHFpbl9zb3VsXzEgPSByZXF1aXJlKFwiLi9xaW4tc291bFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNvdWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zb3VsXzEuUWluU291bDsgfSB9KTtcbnZhciBxaW5fYXJtXzEgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRXZlbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1fMS5RaW5FdmVudDsgfSB9KTtcbnZhciBxaW5fYXJtXzIgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluV2FpdGVyc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV8yLlFpbldhaXRlcnM7IH0gfSk7XG52YXIgcWluX2FybV8zID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBvaW50ZXJDYWxsc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV8zLlFpblBvaW50ZXJDYWxsczsgfSB9KTtcbnZhciBxaW5fYXJtXzQgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQXJtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzQuUWluQXJtOyB9IH0pO1xudmFyIHFpbl9mb290XzEgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzTmF0dXJlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF8xLlFpbkZpbGVzTmF0dXJlOyB9IH0pO1xudmFyIHFpbl9mb290XzIgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzT3BlcmF0aW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF8yLlFpbkZpbGVzT3BlcmF0aW9uOyB9IH0pO1xudmFyIHFpbl9mb290XzMgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzRGVzY3JpcHRvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfMy5RaW5GaWxlc0Rlc2NyaXB0b3I7IH0gfSk7XG52YXIgcWluX2Zvb3RfNCA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRm9vdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfNC5RaW5Gb290OyB9IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Bcm0gPSBleHBvcnRzLlFpblBvaW50ZXJDYWxscyA9IGV4cG9ydHMuUWluV2FpdGVycyA9IGV4cG9ydHMuUWluRXZlbnQgPSB2b2lkIDA7XG5jb25zdCBxaW5fc2tpbl8xID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XG5jbGFzcyBRaW5FdmVudCB7XG4gICAgY29uc3RydWN0b3IoaXNTdGFydCwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fZXZlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wb2ludCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N0b3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3RhcnQgPSBpc1N0YXJ0O1xuICAgICAgICB0aGlzLl9ldmVudCA9IGV2ZW50O1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8IGV2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5fcG9pbnQgPSBtYWtlRXZlbnRQb2ludGVyKGlzU3RhcnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgaXNTdGFydCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xuICAgIH1cbiAgICBnZXQgZnJvbU9yaWdpbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnQudGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBnZXQgZnJvbVR5cGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudDtcbiAgICB9XG4gICAgZ2V0IGZyb21Qb2ludGluZygpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgfHwgdGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KTtcbiAgICB9XG4gICAgZ2V0IGhhc0FsdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fZXZlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hbHRLZXk7XG4gICAgfVxuICAgIGdldCBoYXNDdHJsKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLl9ldmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmN0cmxLZXk7XG4gICAgfVxuICAgIGdldCBoYXNTaGlmdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fZXZlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zaGlmdEtleTtcbiAgICB9XG4gICAgZ2V0IGhhc01ldGEoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuX2V2ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWV0YUtleTtcbiAgICB9XG4gICAgZ2V0IGtleVR5cGVkKCkge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnQua2V5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBnZXQgaXNFbnRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzS2V5RW50ZXIodGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGlzRXNjYXBlKCkge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gaXNLZXlFc2NhcGUodGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGlzU3BhY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0tleVNwYWNlKHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBpc0RvdWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCB8fFxuICAgICAgICAgICAgdGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gaXNFdmVudFBvaW50ZXJEb3VibGUodGhpcy5fc3RhcnQsIHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBpc0xvbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgfHxcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzRXZlbnRQb2ludGVyTG9uZyh0aGlzLl9zdGFydCwgdGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IHBvaW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9pbnQ7XG4gICAgfVxuICAgIGdldCBwb2ludFgoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudC5jbGllbnRYO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50LnRvdWNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9ICh0aGlzLl9ldmVudC50b3VjaGVzLmxlbmd0aCAvIDIpIHwgMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnQudG91Y2hlc1tpbmRleF0uY2xpZW50WDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZ2V0IHBvaW50WSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50LmNsaWVudFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZXZlbnQudG91Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gKHRoaXMuX2V2ZW50LnRvdWNoZXMubGVuZ3RoIC8gMikgfCAwO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudC50b3VjaGVzW2luZGV4XS5jbGllbnRZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBnZXQgaXNGaXJzdEJ1dHRvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzRmlyc3RCdXR0b24odGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGlzTWlkZGxlQnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gaXNNaWRkbGVCdXR0b24odGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGlzU2Vjb25kQnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gaXNTZWNvbmRCdXR0b24odGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGlzT25lRmluZ2VyKCkge1xuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gaXNPbmVGaW5nZXIodGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGlzVHdvRmluZ2VycygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzVHdvRmluZ2Vycyh0aGlzLl9ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXQgaXNUaHJlZUZpbmdlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1RocmVlRmluZ2Vycyh0aGlzLl9ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXQgaXNGb3VyRmluZ2VycygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzRm91ckZpbmdlcnModGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGlzUHJpbWFyeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzUHJpbWFyeUtleSh0aGlzLl9ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8XG4gICAgICAgICAgICB0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1ByaW1hcnlQb2ludCh0aGlzLl9ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBnZXQgaXNBdXhpbGlhcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0F1eGlsaWFyeUtleSh0aGlzLl9ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8XG4gICAgICAgICAgICB0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0F1eGlsaWFyeVBvaW50KHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGdldCBpc1NlY29uZGFyeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzU2Vjb25kYXJ5S2V5KHRoaXMuX2V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgfHxcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzU2Vjb25kYXJ5UG9pbnQodGhpcy5fZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IHN0b3AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9wO1xuICAgIH1cbiAgICBjb25zdW1lZCgpIHtcbiAgICAgICAgdGhpcy5fc3RvcCA9IHRydWU7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5FdmVudCA9IFFpbkV2ZW50O1xuY2xhc3MgUWluV2FpdGVycyB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbCkge1xuICAgICAgICB0aGlzLndhaXRlcnMgPSBpbml0aWFsID8gaW5pdGlhbCA6IFtdO1xuICAgIH1cbiAgICBhZGRXYWl0ZXIod2FpdGVyKSB7XG4gICAgICAgIHRoaXMud2FpdGVycy5wdXNoKHdhaXRlcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBoYXNXYWl0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRlcnMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgc2VuZFdhaXRlcnMocmVzdWx0KSB7XG4gICAgICAgIGZvciAoY29uc3Qgd2FpdGVyIG9mIHRoaXMud2FpdGVycykge1xuICAgICAgICAgICAgd2FpdGVyKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlFpbldhaXRlcnMgPSBRaW5XYWl0ZXJzO1xuY2xhc3MgUWluUG9pbnRlckNhbGxzIHtcbn1cbmV4cG9ydHMuUWluUG9pbnRlckNhbGxzID0gUWluUG9pbnRlckNhbGxzO1xuZnVuY3Rpb24gc3RvcEV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxudmFyIGxhc3RFdmVudFBvaW50ZXIgPSBudWxsO1xuZnVuY3Rpb24gbWFrZUV2ZW50UG9pbnRlcihpc1N0YXJ0LCBldikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgcG9zWDogMCxcbiAgICAgICAgcG9zWTogMCxcbiAgICB9O1xuICAgIGlmIChldiBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2LmNsaWVudFggfHwgZXYuY2xpZW50WSkge1xuICAgICAgICAgICAgcmVzdWx0LnBvc1ggPSBldi5jbGllbnRYO1xuICAgICAgICAgICAgcmVzdWx0LnBvc1kgPSBldi5jbGllbnRZO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICBpZiAoZXYudG91Y2hlcyAmJiB0aGlzLl9ldmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IodGhpcy5fZXZlbnQudG91Y2hlcy5sZW5ndGggLyAyKTtcbiAgICAgICAgICAgIHJlc3VsdC5wb3NYID0gZXYudG91Y2hlc1tpbmRleF0uY2xpZW50WDtcbiAgICAgICAgICAgIHJlc3VsdC5wb3NZID0gZXYudG91Y2hlc1tpbmRleF0uY2xpZW50WTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNTdGFydCkge1xuICAgICAgICBsYXN0RXZlbnRQb2ludGVyID0gZXY7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBpc0V2ZW50UG9pbnRlckRvdWJsZShpc1N0YXJ0LCBldikge1xuICAgIGlmICghaXNTdGFydCB8fCBsYXN0RXZlbnRQb2ludGVyID09IG51bGwgfHwgZXYgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHRpbWVEaWYgPSBldi50aW1lU3RhbXAgLSBsYXN0RXZlbnRQb2ludGVyLnRpbWVTdGFtcDtcbiAgICByZXR1cm4gdGltZURpZiA8IDQ1MDtcbn1cbmZ1bmN0aW9uIGlzRXZlbnRQb2ludGVyTG9uZyhpc1N0YXJ0LCBldikge1xuICAgIGlmICghaXNTdGFydCB8fCBsYXN0RXZlbnRQb2ludGVyID09IG51bGwgfHwgZXYgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHRpbWVEaWYgPSBldi50aW1lU3RhbXAgLSBsYXN0RXZlbnRQb2ludGVyLnRpbWVTdGFtcDtcbiAgICByZXR1cm4gdGltZURpZiA+IDg0MDtcbn1cbmZ1bmN0aW9uIGlzS2V5SW5MaXN0KGV2LCBsaXN0KSB7XG4gICAgbGV0IGtleUxvd2VyID0gZXYua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGxpc3QuaW5kZXhPZihrZXlMb3dlcikgPiAtMTtcbn1cbmZ1bmN0aW9uIGlzS2V5RW50ZXIoZXYpIHtcbiAgICByZXR1cm4gaXNLZXlJbkxpc3QoZXYsIFtcImVudGVyXCIsIFwicmV0dXJuXCJdKSB8fCBldi5rZXlDb2RlID09PSAxMztcbn1cbmZ1bmN0aW9uIGlzS2V5RXNjYXBlKGV2KSB7XG4gICAgcmV0dXJuIGlzS2V5SW5MaXN0KGV2LCBbXCJlc2NcIiwgXCJlc2NhcGVcIl0pIHx8IGV2LmtleUNvZGUgPT09IDI3O1xufVxuZnVuY3Rpb24gaXNLZXlTcGFjZShldikge1xuICAgIHJldHVybiBpc0tleUluTGlzdChldiwgW1wiIFwiLCBcInNwYWNlXCIsIFwic3BhY2ViYXJcIl0pIHx8IGV2LmtleUNvZGUgPT09IDMyO1xufVxuZnVuY3Rpb24gaXNGaXJzdEJ1dHRvbihldikge1xuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LmJ1dHRvbikgPT0gMDtcbn1cbmZ1bmN0aW9uIGlzTWlkZGxlQnV0dG9uKGV2KSB7XG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYuYnV0dG9uKSA9PSAxO1xufVxuZnVuY3Rpb24gaXNTZWNvbmRCdXR0b24oZXYpIHtcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi5idXR0b24pID09IDI7XG59XG5mdW5jdGlvbiBpc09uZUZpbmdlcihldikge1xuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRvdWNoZXMubGVuZ3RoKSA9PSAxO1xufVxuZnVuY3Rpb24gaXNUd29GaW5nZXJzKGV2KSB7XG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYudG91Y2hlcy5sZW5ndGgpID09IDI7XG59XG5mdW5jdGlvbiBpc1RocmVlRmluZ2Vycyhldikge1xuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRvdWNoZXMubGVuZ3RoKSA9PSAzO1xufVxuZnVuY3Rpb24gaXNGb3VyRmluZ2Vycyhldikge1xuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRvdWNoZXMubGVuZ3RoKSA9PSA0O1xufVxuZnVuY3Rpb24gaXNQcmltYXJ5S2V5KGV2KSB7XG4gICAgcmV0dXJuIGlzS2V5RW50ZXIoZXYpO1xufVxuZnVuY3Rpb24gaXNBdXhpbGlhcnlLZXkoZXYpIHtcbiAgICByZXR1cm4gZXYuY3RybEtleSAmJiBldi5hbHRLZXkgJiYgaXNLZXlTcGFjZShldik7XG59XG5mdW5jdGlvbiBpc1NlY29uZGFyeUtleShldikge1xuICAgIHJldHVybiBldi5jdHJsS2V5ICYmICFldi5hbHRLZXkgJiYgaXNLZXlTcGFjZShldik7XG59XG5mdW5jdGlvbiBpc1ByaW1hcnlQb2ludChldikge1xuICAgIGlmIChldiBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGlzRmlyc3RCdXR0b24oZXYpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldiBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGlzT25lRmluZ2VyKGV2KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNBdXhpbGlhcnlQb2ludChldikge1xuICAgIGlmIChldiBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGlzTWlkZGxlQnV0dG9uKGV2KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXYgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgIHJldHVybiBpc1RocmVlRmluZ2Vycyhldik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzU2Vjb25kYXJ5UG9pbnQoZXYpIHtcbiAgICBpZiAoZXYgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHJldHVybiBpc1NlY29uZEJ1dHRvbihldik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICByZXR1cm4gaXNUd29GaW5nZXJzKGV2KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gYWRkQWN0aW9uKGVsZW1lbnQsIGFjdGlvbikge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYWN0S2V5RG93bik7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgYWN0S2V5VXApO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBhY3RNb3VzZURvd24pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgYWN0TW91c2VVcCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBhY3RUb3VjaFN0YXJ0KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBhY3RUb3VjaEVuZCk7XG4gICAgZnVuY3Rpb24gYWN0S2V5RG93bihldikge1xuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQodHJ1ZSwgZXYpO1xuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RLZXlVcChldikge1xuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQoZmFsc2UsIGV2KTtcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0TW91c2VEb3duKGV2KSB7XG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudCh0cnVlLCBldik7XG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdE1vdXNlVXAoZXYpIHtcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KGZhbHNlLCBldik7XG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdFRvdWNoU3RhcnQoZXYpIHtcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KHRydWUsIGV2KTtcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0VG91Y2hFbmQoZXYpIHtcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KGZhbHNlLCBldik7XG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkQWN0aW9uTWFpbihlbGVtZW50LCBhY3Rpb24pIHtcbiAgICBlbGVtZW50Lm9ua2V5dXAgPSBhY3RLZXlVcDtcbiAgICBlbGVtZW50Lm9ubW91c2V1cCA9IGFjdE1vdXNlVXA7XG4gICAgZWxlbWVudC5vbnRvdWNoZW5kID0gYWN0VG91Y2hFbmQ7XG4gICAgZnVuY3Rpb24gYWN0S2V5VXAoZXYpIHtcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KGZhbHNlLCBldik7XG4gICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RNb3VzZVVwKGV2KSB7XG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChmYWxzZSwgZXYpO1xuICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0VG91Y2hFbmQoZXYpIHtcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KGZhbHNlLCBldik7XG4gICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHB1dEFjdGlvblByb3h5KGRlc3RpbnksIG9yaWdpbnMpIHtcbiAgICBmb3IgKGNvbnN0IG9yaWdpbiBvZiBvcmlnaW5zKSB7XG4gICAgICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGVzdGlueS5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGVzdGlueS5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGRlc3RpbnkuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGVzdGlueS5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBkZXN0aW55LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBkZXN0aW55LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZE1vdmVyKHNvdXJjZXMsIHRhcmdldCwgZHJhZ0NhbGxzKSB7XG4gICAgdmFyIGRyYWdJbml0RXZlbnRYID0gMDtcbiAgICB2YXIgZHJhZ0luaXRFdmVudFkgPSAwO1xuICAgIHZhciBkcmFnSW5pdFBvc1ggPSAwO1xuICAgIHZhciBkcmFnSW5pdFBvc1kgPSAwO1xuICAgIGZvciAobGV0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgIHNvdXJjZS5vbm1vdXNlZG93biA9IG9uTW92ZXJJbml0O1xuICAgICAgICBzb3VyY2Uub250b3VjaHN0YXJ0ID0gb25Nb3ZlckluaXQ7XG4gICAgICAgIHNvdXJjZS5vbmRyYWdzdGFydCA9IHN0b3BFdmVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3ZlckluaXQoZXYpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudFBvaW50ZXJEb3VibGUodHJ1ZSwgZXYpKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudFBvaW50ZXJMb25nKHRydWUsIGV2KSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKHRydWUsIGV2KTtcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XG4gICAgICAgIGRyYWdJbml0RXZlbnRZID0gcG9pbnRlci5wb3NZO1xuICAgICAgICBkcmFnSW5pdFBvc1ggPSBwYXJzZUludCh0YXJnZXQuc3R5bGUubGVmdCwgMTApO1xuICAgICAgICBkcmFnSW5pdFBvc1kgPSBwYXJzZUludCh0YXJnZXQuc3R5bGUudG9wLCAxMCk7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25Nb3Zlck1vdmU7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25Nb3Zlck1vdmU7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvbk1vdmVyQ2xvc2U7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uTW92ZXJDbG9zZTtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW92ZXJNb3ZlKGV2KSB7XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKGZhbHNlLCBldik7XG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xuICAgICAgICB2YXIgZHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdEV2ZW50WTtcbiAgICAgICAgdmFyIGRyYWdGaW5hbFggPSBkcmFnSW5pdFBvc1ggKyBkcmFnRGlmWDtcbiAgICAgICAgdmFyIGRyYWdGaW5hbFkgPSBkcmFnSW5pdFBvc1kgKyBkcmFnRGlmWTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSAoZHJhZ0ZpbmFsWCA+IDAgPyBkcmFnRmluYWxYIDogMCkgKyBcInB4XCI7XG4gICAgICAgIHRhcmdldC5zdHlsZS50b3AgPSAoZHJhZ0ZpbmFsWSA+IDAgPyBkcmFnRmluYWxZIDogMCkgKyBcInB4XCI7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdmVyQ2xvc2UoZXYpIHtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uc2hvd0FsbElGcmFtZXMoKTtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25FbmQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRSZXNpemVyKHNvdXJjZXMsIHRhcmdldCwgZHJhZ0NhbGxzKSB7XG4gICAgdmFyIGRyYWdJbml0RXZlbnRYID0gMDtcbiAgICB2YXIgZHJhZ0luaXRFdmVudFkgPSAwO1xuICAgIHZhciBkcmFnSW5pdFdpZHRoID0gMDtcbiAgICB2YXIgZHJhZ0luaXRIZWlnaHQgPSAwO1xuICAgIGZvciAobGV0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgIHNvdXJjZS5vbm1vdXNlZG93biA9IG9uUmVzaXplckluaXQ7XG4gICAgICAgIHNvdXJjZS5vbnRvdWNoc3RhcnQgPSBvblJlc2l6ZXJJbml0O1xuICAgICAgICBzb3VyY2Uub25kcmFnc3RhcnQgPSBzdG9wRXZlbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uUmVzaXplckluaXQoZXYpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudFBvaW50ZXJEb3VibGUodHJ1ZSwgZXYpKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudFBvaW50ZXJMb25nKHRydWUsIGV2KSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKHRydWUsIGV2KTtcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XG4gICAgICAgIGRyYWdJbml0RXZlbnRZID0gcG9pbnRlci5wb3NZO1xuICAgICAgICBkcmFnSW5pdFdpZHRoID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLndpZHRoLCAxMCk7XG4gICAgICAgIGRyYWdJbml0SGVpZ2h0ID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmhlaWdodCwgMTApO1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uUmVzaXplck1vdmU7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25SZXNpemVyTW92ZTtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG9uUmVzaXplckNsb3NlO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvblJlc2l6ZXJDbG9zZTtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uUmVzaXplck1vdmUoZXYpIHtcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFBvaW50ZXIoZmFsc2UsIGV2KTtcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdEV2ZW50WDtcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdEV2ZW50WTtcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0ZpbmFsV2lkdGggPSBkcmFnSW5pdFdpZHRoICsgZnJhbWVEcmFnRGlmWDtcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0ZpbmFsSGVpZ2h0ID0gZHJhZ0luaXRIZWlnaHQgKyBmcmFtZURyYWdEaWZZO1xuICAgICAgICB0YXJnZXQuc3R5bGUud2lkdGggPVxuICAgICAgICAgICAgKGZyYW1lRHJhZ0ZpbmFsV2lkdGggPiAwID8gZnJhbWVEcmFnRmluYWxXaWR0aCA6IDApICsgXCJweFwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID1cbiAgICAgICAgICAgIChmcmFtZURyYWdGaW5hbEhlaWdodCA+IDAgPyBmcmFtZURyYWdGaW5hbEhlaWdodCA6IDApICsgXCJweFwiO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbk1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25SZXNpemVyQ2xvc2UoZXYpIHtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uc2hvd0FsbElGcmFtZXMoKTtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25FbmQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRTY3JvbGxlcih0YXJnZXQsIGRyYWdDYWxscykge1xuICAgIHZhciBkcmFnSW5pdFggPSAwO1xuICAgIHZhciBkcmFnSW5pdFkgPSAwO1xuICAgIHZhciBkcmFnU2Nyb2xsWCA9IDA7XG4gICAgdmFyIGRyYWdTY3JvbGxZID0gMDtcbiAgICB0YXJnZXQub25kcmFnc3RhcnQgPSBzdG9wRXZlbnQ7XG4gICAgdGFyZ2V0Lm9udG91Y2hzdGFydCA9IG9uU2Nyb2xsZXJJbml0O1xuICAgIHRhcmdldC5vbm1vdXNlZG93biA9IG9uU2Nyb2xsZXJJbml0O1xuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJJbml0KGV2KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRQb2ludGVyRG91YmxlKHRydWUsIGV2KSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRQb2ludGVyTG9uZyh0cnVlLCBldikpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcih0cnVlLCBldik7XG4gICAgICAgIGRyYWdJbml0WCA9IHBvaW50ZXIucG9zWDtcbiAgICAgICAgZHJhZ0luaXRZID0gcG9pbnRlci5wb3NZO1xuICAgICAgICBkcmFnU2Nyb2xsWCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgICAgICBkcmFnU2Nyb2xsWSA9IHRhcmdldC5zY3JvbGxUb3A7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25TY3JvbGxlck1vdmU7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25TY3JvbGxlck1vdmU7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvblNjcm9sbGVyQ2xvc2U7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uU2Nyb2xsZXJDbG9zZTtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJNb3ZlKGV2KSB7XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKGZhbHNlLCBldik7XG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0WDtcbiAgICAgICAgdmFyIGRyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRZO1xuICAgICAgICB2YXIgZHJhZ05ld1ggPSBkcmFnU2Nyb2xsWCAtIGRyYWdEaWZYO1xuICAgICAgICB2YXIgZHJhZ05ld1kgPSBkcmFnU2Nyb2xsWSAtIGRyYWdEaWZZO1xuICAgICAgICB0YXJnZXQuc2Nyb2xsVG8oZHJhZ05ld1gsIGRyYWdOZXdZKTtcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Nb3ZlKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJDbG9zZShldikge1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5zaG93QWxsSUZyYW1lcygpO1xuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25FbmQpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluQXJtID0ge1xuICAgIHN0b3BFdmVudCxcbiAgICBtYWtlRXZlbnRQb2ludGVyLFxuICAgIGlzRXZlbnRQb2ludGVyRG91YmxlLFxuICAgIGlzRXZlbnRQb2ludGVyTG9uZyxcbiAgICBpc0tleUluTGlzdCxcbiAgICBpc0tleUVudGVyLFxuICAgIGlzS2V5U3BhY2UsXG4gICAgaXNGaXJzdEJ1dHRvbixcbiAgICBpc01pZGRsZUJ1dHRvbixcbiAgICBpc1NlY29uZEJ1dHRvbixcbiAgICBpc09uZUZpbmdlcixcbiAgICBpc1R3b0ZpbmdlcnMsXG4gICAgaXNUaHJlZUZpbmdlcnMsXG4gICAgaXNGb3VyRmluZ2VycyxcbiAgICBpc1ByaW1hcnlQb2ludCxcbiAgICBpc0F1eGlsaWFyeVBvaW50LFxuICAgIGlzU2Vjb25kYXJ5UG9pbnQsXG4gICAgYWRkQWN0aW9uLFxuICAgIGFkZEFjdGlvbk1haW4sXG4gICAgcHV0QWN0aW9uUHJveHksXG4gICAgYWRkTW92ZXIsXG4gICAgYWRkUmVzaXplcixcbiAgICBhZGRTY3JvbGxlcixcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYXJtLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Cb2R5ID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUsIG9yRGVmYXVsdCkge1xuICAgIGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNvb2tpZVBhaXIgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgaWYgKG5hbWUgPT0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZVBhaXJbMF0pLnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb29raWVQYWlyWzFdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3JEZWZhdWx0O1xufVxuZnVuY3Rpb24gc2V0Q29va2llKG5hbWUsIHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFwiL1wiIH0sIG9wdGlvbnMpO1xuICAgIGlmICghb3B0aW9ucy5leHBpcmVzKSB7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgMSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBkYXRlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgICB9XG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgZm9yIChsZXQgb3B0aW9uS2V5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBvcHRpb25LZXk7XG4gICAgICAgIGxldCBvcHRpb25WYWx1ZSA9IG9wdGlvbnNbb3B0aW9uS2V5XTtcbiAgICAgICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiPVwiICsgb3B0aW9uVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcbn1cbmZ1bmN0aW9uIGRlbENvb2tpZShuYW1lLCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgdXBkYXRlZENvb2tpZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArIFwiPTsgIGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIjtcbiAgICBpZiAob3B0aW9ucy5leHBpcmVzKSB7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmV4cGlyZXM7XG4gICAgfVxuICAgIGZvciAobGV0IG9wdGlvbktleSBpbiBvcHRpb25zKSB7XG4gICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI7IFwiICsgb3B0aW9uS2V5O1xuICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSBvcHRpb25zW29wdGlvbktleV07XG4gICAgICAgIGlmIChvcHRpb25WYWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIj1cIiArIG9wdGlvblZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XG59XG5mdW5jdGlvbiBnZXRUZXh0TGluZXMoZnJvbVRleHQpIHtcbiAgICByZXR1cm4gZnJvbVRleHQubWF0Y2goL1teXFxyXFxuXSsvZyk7XG59XG5mdW5jdGlvbiBnZXRDU1ZSb3dzKGZyb21UZXh0LCBuYW1lcykge1xuICAgIHZhciBsaW5lcyA9IGdldFRleHRMaW5lcyhmcm9tVGV4dCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgbGV0IHJvdyA9ICFuYW1lcyA/IFtdIDoge307XG4gICAgICAgIGxldCBpbnNpZGVfcXVvdGVzID0gZmFsc2U7XG4gICAgICAgIGxldCBjb2x1bW5fdmFsdWUgPSBcIlwiO1xuICAgICAgICBsZXQgY29sdW1uX2luZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgY2hhcl9pbmRleCA9IDA7IGNoYXJfaW5kZXggPCBsaW5lLmxlbmd0aDsgY2hhcl9pbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgYWN0dWFsID0gbGluZS5jaGFyQXQoY2hhcl9pbmRleCk7XG4gICAgICAgICAgICBpZiAoaW5zaWRlX3F1b3Rlcykge1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwgPT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IGNoYXJfaW5kZXggPCBsaW5lLmxlbmd0aCAtIDEgPyBsaW5lLmNoYXJBdChjaGFyX2luZGV4ICsgMSkgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCA9PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgKz0gYWN0dWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcl9pbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zaWRlX3F1b3RlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgKz0gYWN0dWFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwgPT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpbnNpZGVfcXVvdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWN0dWFsID09IFwiLFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSA9IHVubWFza1NwZWNpYWxDaGFycyhjb2x1bW5fdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cucHVzaChjb2x1bW5fdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtbl9uYW1lID0gXCJjb2xfXCIgKyBjb2x1bW5faW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uX2luZGV4IDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uX25hbWUgPSBuYW1lc1tjb2x1bW5faW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcm93W2NvbHVtbl9uYW1lXSA9IGNvbHVtbl92YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW5faW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSArPSBhY3R1YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbHVtbl92YWx1ZSA9IHVubWFza1NwZWNpYWxDaGFycyhjb2x1bW5fdmFsdWUpO1xuICAgICAgICBpZiAoIW5hbWVzKSB7XG4gICAgICAgICAgICByb3cucHVzaChjb2x1bW5fdmFsdWUpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjb2x1bW5fbmFtZSA9IFwiY29sX1wiICsgY29sdW1uX2luZGV4O1xuICAgICAgICAgICAgaWYgKGNvbHVtbl9pbmRleCA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbHVtbl9uYW1lID0gbmFtZXNbY29sdW1uX2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvd1tjb2x1bW5fbmFtZV0gPSBjb2x1bW5fdmFsdWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtYXNrU3BlY2lhbENoYXJzKGZyb21UZXh0KSB7XG4gICAgcmV0dXJuIGZyb21UZXh0XG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXFwiLCBcIlxcXFxcXFxcXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiXFxyXCIsIFwiXFxcXHJcIilcbiAgICAgICAgLnJlcGxhY2UoXCJcXG5cIiwgXCJcXFxcblwiKVxuICAgICAgICAucmVwbGFjZShcIlxcdFwiLCBcIlxcXFx0XCIpO1xufVxuZnVuY3Rpb24gdW5tYXNrU3BlY2lhbENoYXJzKGZyb21UZXh0KSB7XG4gICAgcmV0dXJuIGZyb21UZXh0XG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXFxcXFxcIiwgXCJcXFxcXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXHJcIiwgXCJcXHJcIilcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcblwiLCBcIlxcblwiKVxuICAgICAgICAucmVwbGFjZShcIlxcXFx0XCIsIFwiXFx0XCIpO1xufVxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXJzKHNvdXJjZSkge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBsZXQgb3BlbiA9IGZhbHNlO1xuICAgIGxldCBhY3R1YWwgPSBcIlwiO1xuICAgIGZvciAoY29uc3QgbGV0dGVyIG9mIEFycmF5LmZyb20oc291cmNlKSkge1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgaWYgKGxldHRlciA9PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgb3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYWN0dWFsKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3R1YWwgKz0gbGV0dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxldHRlciA9PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgb3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhY3R1YWwpO1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxldHRlciA9PSBcIiBcIikge1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYWN0dWFsKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3R1YWwgKz0gbGV0dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLlFpbkJvZHkgPSB7XG4gICAgZ2V0Q29va2llLFxuICAgIHNldENvb2tpZSxcbiAgICBkZWxDb29raWUsXG4gICAgZ2V0VGV4dExpbmVzLFxuICAgIGdldENTVlJvd3MsXG4gICAgbWFza1NwZWNpYWxDaGFycyxcbiAgICB1bm1hc2tTcGVjaWFsQ2hhcnMsXG4gICAgcGFyc2VQYXJhbWV0ZXJzLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1ib2R5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Gb290ID0gZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc05hdHVyZSA9IHZvaWQgMDtcbnZhciBRaW5GaWxlc05hdHVyZTtcbihmdW5jdGlvbiAoUWluRmlsZXNOYXR1cmUpIHtcbiAgICBRaW5GaWxlc05hdHVyZVtcIkJPVEhcIl0gPSBcImJvdGhcIjtcbiAgICBRaW5GaWxlc05hdHVyZVtcIkRJUkVDVE9SSUVTXCJdID0gXCJkaXJlY3Rvcmllc1wiO1xuICAgIFFpbkZpbGVzTmF0dXJlW1wiRklMRVNcIl0gPSBcImZpbGVzXCI7XG59KShRaW5GaWxlc05hdHVyZSA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgfHwgKGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSB7fSkpO1xudmFyIFFpbkZpbGVzT3BlcmF0aW9uO1xuKGZ1bmN0aW9uIChRaW5GaWxlc09wZXJhdGlvbikge1xuICAgIFFpbkZpbGVzT3BlcmF0aW9uW1wiT1BFTlwiXSA9IFwib3BlblwiO1xuICAgIFFpbkZpbGVzT3BlcmF0aW9uW1wiU0FWRVwiXSA9IFwic2F2ZVwiO1xufSkoUWluRmlsZXNPcGVyYXRpb24gPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uIHx8IChleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0ge30pKTtcbmNsYXNzIFFpbkZpbGVzRGVzY3JpcHRvciB7XG59XG5leHBvcnRzLlFpbkZpbGVzRGVzY3JpcHRvciA9IFFpbkZpbGVzRGVzY3JpcHRvcjtcbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxIb3N0KCkge1xuICAgIHZhciBsb2NhdGlvbiA9IGdldExvY2F0aW9uKCk7XG4gICAgdmFyIHN0YXJ0ID0gbG9jYXRpb24uaW5kZXhPZihcIjovL1wiKTtcbiAgICBpZiAoc3RhcnQgPT0gLTEpIHtcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RhcnQgKz0gMztcbiAgICB9XG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbi5zdWJzdHJpbmcoc3RhcnQpO1xuICAgIHJldHVybiBsb2NhdGlvbi5pbmRleE9mKFwibG9jYWxob3N0XCIpID09PSAwIHx8IGxvY2F0aW9uLmluZGV4T2YoXCIxMjcuMC4wLjFcIikgPT09IDA7XG59XG5mdW5jdGlvbiBnZXRTZXBhcmF0b3Iob2ZQYXRoKSB7XG4gICAgbGV0IHJlc3VsdCA9IFwiL1wiO1xuICAgIGlmIChvZlBhdGggJiYgb2ZQYXRoLmluZGV4T2YoXCJcXFxcXCIpID4gLTEpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJcXFxcXCI7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRQYXRoSm9pbihwYXRoQSwgcGF0aEIpIHtcbiAgICBpZiAocGF0aEEgPT0gbnVsbCB8fCBwYXRoQSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGF0aEEgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAocGF0aEIgPT0gbnVsbCB8fCBwYXRoQiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGF0aEIgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAocGF0aEEubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHBhdGhCO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoQi5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4gcGF0aEE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgdW5pb24gPSBcIi9cIjtcbiAgICAgICAgaWYgKHBhdGhBLmluZGV4T2YoXCJcXFxcXCIpID4gLTEgfHwgcGF0aEIuaW5kZXhPZihcIlxcXFxcIikgPiAtMSkge1xuICAgICAgICAgICAgdW5pb24gPSBcIlxcXFxcIjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGF0aEFFbmQgPSBwYXRoQS5zdWJzdHJpbmcocGF0aEEubGVuZ3RoIC0gMSwgcGF0aEEubGVuZ3RoKTtcbiAgICAgICAgbGV0IHBhdGhCU3RhcnQgPSBwYXRoQi5zdWJzdHJpbmcoMCwgMSk7XG4gICAgICAgIGlmIChwYXRoQUVuZCA9PSB1bmlvbiB8fCBwYXRoQlN0YXJ0ID09IHVuaW9uKSB7XG4gICAgICAgICAgICB1bmlvbiA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGhBICsgdW5pb24gKyBwYXRoQjtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRQYXJlbnQocGF0aCkge1xuICAgIGlmIChwYXRoKSB7XG4gICAgICAgIGxldCBzZXBhcmF0b3IgPSBnZXRTZXBhcmF0b3IocGF0aCk7XG4gICAgICAgIGxldCBsYXN0ID0gcGF0aC5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xuICAgICAgICBpZiAobGFzdCA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0aC5zdWJzdHJpbmcoMCwgbGFzdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59XG5mdW5jdGlvbiBnZXRTdGVtKHBhdGgpIHtcbiAgICBpZiAocGF0aCkge1xuICAgICAgICBsZXQgc2VwYXJhdG9yID0gZ2V0U2VwYXJhdG9yKHBhdGgpO1xuICAgICAgICBsZXQgbGFzdCA9IHBhdGgubGFzdEluZGV4T2Yoc2VwYXJhdG9yKTtcbiAgICAgICAgaWYgKGxhc3QgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGguc3Vic3RyaW5nKGxhc3QgKyAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn1cbmZ1bmN0aW9uIGdldEZpbGVFeHRlbnNpb24obmFtZSkge1xuICAgIGxldCBwb3NpdGlvbiA9IG5hbWUubGFzdEluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChwb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIHJldHVybiBuYW1lLnN1YnN0cmluZyhwb3NpdGlvbiArIDEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxufVxuY29uc3QgYXBwc0V4dGVuc2lvbnMgPSBbXG4gICAgXCJodG1cIiwgXCJodG1sXCIsIFwiY3NzXCIsIFwianNcIiwgXCJqc3hcIiwgXCJ0c1wiLCBcInRzeFwiLCBcInBodG1sXCJcbl07XG5mdW5jdGlvbiBpc0ZpbGVBcHAoZXh0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIGFwcHNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuY29uc3QgY21kc0V4dGVuc2lvbnMgPSBbXG4gICAgXCJoXCIsIFwiY1wiLCBcImhwcFwiLCBcImNwcFwiLCBcInJzXCIsIFwiamxcIixcbiAgICBcImNzXCIsIFwiY3Nwcm9qXCIsIFwiZnNcIiwgXCJtbFwiLCBcImZzaVwiLCBcIm1saVwiLCBcImZzeFwiLCBcImZzc2NyaXB0XCIsXG4gICAgXCJqYXZhXCIsIFwiZ3lcIiwgXCJndnlcIiwgXCJncm9vdnlcIiwgXCJzY1wiLCBcInNjYWxhXCIsIFwiY2xqXCIsXG4gICAgXCJweVwiLCBcInJ1YnlcIiwgXCJwaHBcIiwgXCJwaHRtbFwiLFxuXTtcbmZ1bmN0aW9uIGlzRmlsZUNtZChleHRlbnNpb24pIHtcbiAgICByZXR1cm4gY21kc0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XG59XG5jb25zdCBleGVjRXh0ZW5zaW9ucyA9IFtcbiAgICBcImV4ZVwiLCBcImphclwiLCBcImNvbVwiLCBcImJhdFwiLCBcInNoXCJcbl07XG5mdW5jdGlvbiBpc0ZpbGVFeGVjKGV4dGVuc2lvbikge1xuICAgIHJldHVybiBleGVjRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcbn1cbmNvbnN0IGltYWdlRXh0ZW5zaW9ucyA9IFtcbiAgICBcImpwZ1wiLCBcImpwZWdcIiwgXCJwbmdcIiwgXCJnaWZcIiwgXCJibXBcIlxuXTtcbmZ1bmN0aW9uIGlzRmlsZUltYWdlKGV4dGVuc2lvbikge1xuICAgIHJldHVybiBpbWFnZUV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XG59XG5jb25zdCB2ZWN0b3JFeHRlbnNpb25zID0gW1xuICAgIFwic3ZnXCJcbl07XG5mdW5jdGlvbiBpc0ZpbGVWZWN0b3IoZXh0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIHZlY3RvckV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XG59XG5jb25zdCBtb3ZpZUV4dGVuc2lvbnMgPSBbXG4gICAgXCJhdmlcIiwgXCJtcDRcIlxuXTtcbmZ1bmN0aW9uIGlzRmlsZU1vdmllKGV4dGVuc2lvbikge1xuICAgIHJldHVybiBtb3ZpZUV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XG59XG5jb25zdCBtdXNpY0V4dGVuc2lvbnMgPSBbXG4gICAgXCJ3YXZcIiwgXCJtcDNcIlxuXTtcbmZ1bmN0aW9uIGlzRmlsZU11c2ljKGV4dGVuc2lvbikge1xuICAgIHJldHVybiBtdXNpY0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XG59XG5jb25zdCB6aXBwZWRFeHRlbnNpb25zID0gW1xuICAgIFwiemlwXCIsIFwicmFyXCIsIFwiN3pcIiwgXCJ0YXJcIiwgXCJnelwiXG5dO1xuZnVuY3Rpb24gaXNGaWxlWmlwcGVkKGV4dGVuc2lvbikge1xuICAgIHJldHVybiB6aXBwZWRFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuZXhwb3J0cy5RaW5Gb290ID0ge1xuICAgIGdldExvY2F0aW9uLFxuICAgIGlzTG9jYWxIb3N0LFxuICAgIGdldFNlcGFyYXRvcixcbiAgICBnZXRQYXRoSm9pbixcbiAgICBnZXRQYXJlbnQsXG4gICAgZ2V0U3RlbSxcbiAgICBnZXRGaWxlRXh0ZW5zaW9uLFxuICAgIGlzRmlsZUFwcCxcbiAgICBpc0ZpbGVDbWQsXG4gICAgaXNGaWxlRXhlYyxcbiAgICBpc0ZpbGVJbWFnZSxcbiAgICBpc0ZpbGVWZWN0b3IsXG4gICAgaXNGaWxlTW92aWUsXG4gICAgaXNGaWxlTXVzaWMsXG4gICAgaXNGaWxlWmlwcGVkLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1mb290LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5IZWFkID0gZXhwb3J0cy5RaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluQm91bmRzID0gZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBleHBvcnRzLlFpblBvaW50ID0gdm9pZCAwO1xuY2xhc3MgUWluUG9pbnQge1xufVxuZXhwb3J0cy5RaW5Qb2ludCA9IFFpblBvaW50O1xuO1xuY2xhc3MgUWluRGltZW5zaW9uIHtcbn1cbmV4cG9ydHMuUWluRGltZW5zaW9uID0gUWluRGltZW5zaW9uO1xuO1xuY2xhc3MgUWluQm91bmRzIHtcbn1cbmV4cG9ydHMuUWluQm91bmRzID0gUWluQm91bmRzO1xuO1xudmFyIFFpbkdyYW5kZXVyO1xuKGZ1bmN0aW9uIChRaW5HcmFuZGV1cikge1xuICAgIFFpbkdyYW5kZXVyW1wiU01BTExcIl0gPSBcInNtYWxsXCI7XG4gICAgUWluR3JhbmRldXJbXCJNRURJVU1cIl0gPSBcIm1lZGl1bVwiO1xuICAgIFFpbkdyYW5kZXVyW1wiTEFSR0VcIl0gPSBcImxhcmdlXCI7XG59KShRaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluR3JhbmRldXIgfHwgKGV4cG9ydHMuUWluR3JhbmRldXIgPSB7fSkpO1xuZnVuY3Rpb24gZ2V0RGVza0FQSSgpIHtcbiAgICB2YXIgd2luID0gd2luZG93O1xuICAgIGlmICh3aW4uZGVza0FQSSkge1xuICAgICAgICByZXR1cm4gd2luLmRlc2tBUEk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3aW4gPSB3aW5kb3cucGFyZW50O1xuICAgIH1cbiAgICBpZiAod2luLmRlc2tBUEkpIHtcbiAgICAgICAgcmV0dXJuIHdpbi5kZXNrQVBJO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2luID0gd2luZG93LnRvcDtcbiAgICB9XG4gICAgaWYgKHdpbi5kZXNrQVBJKSB7XG4gICAgICAgIHJldHVybiB3aW4uZGVza0FQSTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmNvbnN0IGxvZ2dlZCA9IFtdO1xuZnVuY3Rpb24gZ2V0TG9nZ2VkKCkge1xuICAgIHJldHVybiBsb2dnZWQ7XG59XG5mdW5jdGlvbiBsb2cobWVzc2FnZSkge1xuICAgIGxvZ2dlZC5wdXNoKG1lc3NhZ2UpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBjYXRjaCAoXykgeyB9XG4gICAgdHJ5IHtcbiAgICAgICAgZ2V0RGVza0FQSSgpLnNlbmQoXCJsb2dPbk1haW5cIiwgbWVzc2FnZSk7XG4gICAgfVxuICAgIGNhdGNoIChfKSB7IH1cbn1cbmZ1bmN0aW9uIGxvZ0Vycm9yKGVycm9yLCBvcmlnaW4pIHtcbiAgICBsb2coZ2V0RXJyb3JNZXNzYWdlKGVycm9yLCBvcmlnaW4pKTtcbn1cbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvciwgb3JpZ2luKSB7XG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZShcIlByb2JsZW0gd2l0aDpcIiwgZXJyb3IsIG9yaWdpbik7XG59XG5mdW5jdGlvbiBsb2dXYXJuaW5nKGVycm9yLCBvcmlnaW4pIHtcbiAgICBsb2coZ2V0V2FybmluZ01lc3NhZ2UoZXJyb3IsIG9yaWdpbikpO1xufVxuZnVuY3Rpb24gZ2V0V2FybmluZ01lc3NhZ2UoZXJyb3IsIG9yaWdpbikge1xuICAgIHJldHVybiBnZXRUcmVhdE1lc3NhZ2UoXCJDaGVja291dCB0aGlzOlwiLCBlcnJvciwgb3JpZ2luKTtcbn1cbmZ1bmN0aW9uIGxvZ1N1cHBvcnQoZXJyb3IsIG9yaWdpbikge1xuICAgIGxvZyhnZXRTdXBwb3J0TWVzc2FnZShlcnJvciwgb3JpZ2luKSk7XG59XG5mdW5jdGlvbiBnZXRTdXBwb3J0TWVzc2FnZShlcnJvciwgb3JpZ2luKSB7XG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZShcIk5lZWQgU3VwcG9ydCBvbjpcIiwgZXJyb3IsIG9yaWdpbik7XG59XG5mdW5jdGlvbiBnZXRUcmVhdE1lc3NhZ2UocHJlZml4LCBlcnJvciwgb3JpZ2luKSB7XG4gICAgdmFyIHJlc3VsdCA9IHByZWZpeCArIChlcnJvciA/IFwiIFwiICsgZXJyb3IudG9TdHJpbmcoKSA6IFwiXCIpO1xuICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgIHZhciBlcnJvckRhdGEgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICBpZiAoISh0eXBlb2YgZXJyb3JEYXRhID09IFwic3RyaW5nXCIgfHwgZXJyb3JEYXRhIGluc3RhbmNlb2YgU3RyaW5nKSkge1xuICAgICAgICAgICAgZXJyb3JEYXRhID0gSlNPTi5zdHJpbmdpZnkoZXJyb3JEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gXCIgLSBEYXRhOiBcIiArIGVycm9yRGF0YTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghKHR5cGVvZiBlcnJvciA9PSBcInN0cmluZ1wiIHx8IGVycm9yIGluc3RhbmNlb2YgU3RyaW5nKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiIC0gRGF0YTogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWdpbikge1xuICAgICAgICByZXN1bHQgKz0gXCIgLSBPcmlnaW46IFwiICsgb3JpZ2luO1xuICAgIH1cbiAgICBjb25zdCBzdGFjayA9IChuZXcgRXJyb3IoXCJcIikpLnN0YWNrO1xuICAgIGlmIChzdGFjaykge1xuICAgICAgICByZXN1bHQgKz0gXCIgLSBTdGFjazogXCIgKyBzdGFjaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHRvZ2dsZURldlRvb2xzKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGdldERlc2tBUEkoKS5zZW5kKFwidG9nZ2xlRGV2VG9vbHNcIik7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUsIFwie3FpbnBlbC1yZXN9KEVyckNvZGUtMDAwMDAxKVwiKTtcbiAgICB9XG59XG5leHBvcnRzLlFpbkhlYWQgPSB7XG4gICAgZ2V0RGVza0FQSSxcbiAgICBnZXRMb2dnZWQsXG4gICAgbG9nLFxuICAgIGxvZ0Vycm9yLFxuICAgIGdldEVycm9yTWVzc2FnZSxcbiAgICBsb2dXYXJuaW5nLFxuICAgIGdldFdhcm5pbmdNZXNzYWdlLFxuICAgIGxvZ1N1cHBvcnQsXG4gICAgZ2V0U3VwcG9ydE1lc3NhZ2UsXG4gICAgZ2V0VHJlYXRNZXNzYWdlLFxuICAgIHRvZ2dsZURldlRvb2xzLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1oZWFkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Ta2luID0gZXhwb3J0cy5RaW5TdHlsZXMgPSB2b2lkIDA7XG5jb25zdCBxaW5fYXJtXzEgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xuY29uc3QgcWluX2hlYWRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xuZXhwb3J0cy5RaW5TdHlsZXMgPSB7XG4gICAgQ29sb3JGb3JlZ3JvdW5kOiBcIiMyNzAwMzZcIixcbiAgICBDb2xvckJhY2tncm91bmQ6IFwiI2ZmZmFlZlwiLFxuICAgIENvbG9ySW5hY3RpdmU6IFwiI2ZhZWZmZlwiLFxuICAgIENvbG9yQWN0aXZlOiBcIiNmYWNkY2RcIixcbiAgICBGb250TmFtZTogXCJTb3VyY2VTYW5zUHJvXCIsXG4gICAgRm9udFNpemU6IFwiMTZweFwiLFxufTtcbmZ1bmN0aW9uIHN0eWxlQXNCb2R5KGVsKSB7XG4gICAgZWwuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgZWwuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICBlbC5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgZWwuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICBlbC5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCI5cHhcIjtcbiAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xufVxuZnVuY3Rpb24gc3R5bGVBc0VkaXQoZWwpIHtcbiAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjFweFwiO1xuICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjNweFwiO1xuICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMTgwMDI3XCI7XG4gICAgZWwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIzcHhcIjtcbiAgICBlbC5zdHlsZS5jb2xvciA9IFwiIzE4MDAyN1wiO1xuICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiO1xuICAgIGVsLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlNvdXJjZVNhbnNQcm9cIjtcbiAgICBlbC5zdHlsZS5mb250U2l6ZSA9IFwiMTZweFwiO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmFlZmZmXCI7XG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNhZTAwMDBcIjtcbiAgICB9KTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMTgwMDI3XCI7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzdHlsZU1heFNpemVGb3JOb3RPdmVyRmxvdyhlbCwgcGFyZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJEMVwiKTtcbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICBwYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkQyOiBcIiArIHBhcmVudCk7XG4gICAgfVxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IDA7XG4gICAgICAgIGxldCBpbWVkaWF0ZSA9IGVsO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoICsgaW1lZGlhdGUuY2xpZW50TGVmdDtcbiAgICAgICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCArIGltZWRpYXRlLmNsaWVudFRvcDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRDM6IFwiICsgbWF4V2lkdGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJENDogXCIgKyBtYXhIZWlnaHQpO1xuICAgICAgICAgICAgaW1lZGlhdGUgPSBpbWVkaWF0ZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9IHdoaWxlIChpbWVkaWF0ZSAhPSBudWxsICYmIGltZWRpYXRlICE9IHBhcmVudCk7XG4gICAgICAgIG1heFdpZHRoID0gcGFyZW50LmNsaWVudFdpZHRoIC0gbWF4V2lkdGg7XG4gICAgICAgIG1heEhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQgLSBtYXhIZWlnaHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRDU6IFwiICsgbWF4V2lkdGgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkQ2OiBcIiArIG1heEhlaWdodCk7XG4gICAgICAgIGVsLnN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGggKyBcInB4XCI7XG4gICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IG1heEhlaWdodCArIFwicHhcIjtcbiAgICB9XG59XG5mdW5jdGlvbiBzdHlsZVNpemUoZWwsIHNpemUpIHtcbiAgICBpZiAoc2l6ZSkge1xuICAgICAgICBpZiAoc2l6ZSBpbnN0YW5jZW9mIHFpbl9oZWFkXzEuUWluRGltZW5zaW9uKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS53aWR0aCA9IHNpemUud2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaW0gPSBnZXREaW1lbnNpb25TaXplKHNpemUpO1xuICAgICAgICAgICAgZWwuc3R5bGUud2lkdGggPSBkaW0ud2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBkaW0uaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc3R5bGVGbGV4TWF4KGVsKSB7XG4gICAgZWwuc3R5bGUuZmxleCA9IFwiMVwiO1xufVxuZnVuY3Rpb24gc3R5bGVGbGV4TWluKGVsKSB7XG4gICAgZWwuc3R5bGUuZmxleCA9IFwiMFwiO1xufVxuZnVuY3Rpb24gZ2V0V2luZG93U2l6ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCxcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0V2luZG93U2l6ZVN0eWxlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gZ2V0V2luZG93U2l6ZSgpLndpZHRoO1xuICAgIGlmICh3aWR0aCA8IDYwMCkge1xuICAgICAgICByZXR1cm4gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5TTUFMTDtcbiAgICB9XG4gICAgZWxzZSBpZiAod2lkdGggPCAxMDAwKSB7XG4gICAgICAgIHJldHVybiBxaW5faGVhZF8xLlFpbkdyYW5kZXVyLk1FRElVTTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBxaW5faGVhZF8xLlFpbkdyYW5kZXVyLkxBUkdFO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGhpZGVBbGxJRnJhbWVzKCkge1xuICAgIHZhciBkb2NfaWZyYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaWZyYW1lXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9jX2lmcmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGRvY19pZnJhbWUgPSBkb2NfaWZyYW1lc1tpXTtcbiAgICAgICAgZG9jX2lmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9XG59XG5mdW5jdGlvbiBzaG93QWxsSUZyYW1lcygpIHtcbiAgICB2YXIgZG9jX2lmcmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlmcmFtZVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvY19pZnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBkb2NfaWZyYW1lID0gZG9jX2lmcmFtZXNbaV07XG4gICAgICAgIGRvY19pZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc2FibGVTZWxlY3Rpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICAgIGVsZW1lbnQub25zZWxlY3RzdGFydCA9IHFpbl9hcm1fMS5RaW5Bcm0uc3RvcEV2ZW50O1xufVxuZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9LCAzNjApO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50VmlzaWJsZUluU2Nyb2xsKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm9mZnNldFRvcCA8IGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5vZmZzZXRMZWZ0IDwgZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbExlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5jbGllbnRXaWR0aCA+XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGggLVxuICAgICAgICAgICAgICAgIChlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsTGVmdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5jbGllbnRIZWlnaHQgPlxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodCAtXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGdldERpbWVuc2lvblNpemUoc2l6ZSkge1xuICAgIGlmIChzaXplID09IHFpbl9oZWFkXzEuUWluR3JhbmRldXIuTEFSR0UpIHtcbiAgICAgICAgcmV0dXJuIGdldERpbWVuc2lvbkxhcmdlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNpemUgPT0gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5NRURJVU0pIHtcbiAgICAgICAgcmV0dXJuIGdldERpbWVuc2lvbk1lZGl1bSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdldERpbWVuc2lvblNtYWxsKCk7XG4gICAgfVxufVxuY29uc3QgZGltZW5zaW9uU21hbGwgPSB7XG4gICAgd2lkdGg6IDE2LFxuICAgIGhlaWdodDogMTYsXG59O1xuZnVuY3Rpb24gZ2V0RGltZW5zaW9uU21hbGwoKSB7XG4gICAgcmV0dXJuIGRpbWVuc2lvblNtYWxsO1xufVxuY29uc3QgZGltZW5zaW9uTWVkaXVtID0ge1xuICAgIHdpZHRoOiAzMixcbiAgICBoZWlnaHQ6IDMyLFxufTtcbmZ1bmN0aW9uIGdldERpbWVuc2lvbk1lZGl1bSgpIHtcbiAgICByZXR1cm4gZGltZW5zaW9uTWVkaXVtO1xufVxuY29uc3QgZGltZW5zaW9uTGFyZ2UgPSB7XG4gICAgd2lkdGg6IDY0LFxuICAgIGhlaWdodDogNjQsXG59O1xuZnVuY3Rpb24gZ2V0RGltZW5zaW9uTGFyZ2UoKSB7XG4gICAgcmV0dXJuIGRpbWVuc2lvbkxhcmdlO1xufVxuZXhwb3J0cy5RaW5Ta2luID0ge1xuICAgIHN0eWxlczogZXhwb3J0cy5RaW5TdHlsZXMsXG4gICAgc3R5bGVBc0JvZHksXG4gICAgc3R5bGVBc0VkaXQsXG4gICAgc3R5bGVNYXhTaXplRm9yTm90T3ZlckZsb3csXG4gICAgc3R5bGVTaXplLFxuICAgIHN0eWxlRmxleE1heCxcbiAgICBzdHlsZUZsZXhNaW4sXG4gICAgZ2V0V2luZG93U2l6ZSxcbiAgICBnZXRXaW5kb3dTaXplU3R5bGUsXG4gICAgaGlkZUFsbElGcmFtZXMsXG4gICAgc2hvd0FsbElGcmFtZXMsXG4gICAgZGlzYWJsZVNlbGVjdGlvbixcbiAgICBjbGVhclNlbGVjdGlvbixcbiAgICBpc0VsZW1lbnRWaXNpYmxlSW5TY3JvbGwsXG4gICAgZ2V0RGltZW5zaW9uU2l6ZSxcbiAgICBnZXREaW1lbnNpb25TbWFsbCxcbiAgICBnZXREaW1lbnNpb25NZWRpdW0sXG4gICAgZ2V0RGltZW5zaW9uTGFyZ2UsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNraW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpblNvdWwgPSB2b2lkIDA7XG5jb25zdCBxaW5fYXJtXzEgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xuY29uc3QgcWluX2JvZHlfMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib2R5XCIpO1xuY29uc3QgcWluX2Zvb3RfMSA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xuY29uc3QgcWluX2hlYWRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xuY29uc3QgcWluX3NraW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xuZXhwb3J0cy5RaW5Tb3VsID0ge1xuICAgIGFybTogcWluX2FybV8xLlFpbkFybSxcbiAgICBib2R5OiBxaW5fYm9keV8xLlFpbkJvZHksXG4gICAgZm9vdDogcWluX2Zvb3RfMS5RaW5Gb290LFxuICAgIGhlYWQ6IHFpbl9oZWFkXzEuUWluSGVhZCxcbiAgICBza2luOiBxaW5fc2tpbl8xLlFpblNraW4sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNvdWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcbmNsYXNzIFFpblNjYWZmb2xkIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpblN0YWNrIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGV0IHBhbmVsMSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluUGFuZWwoKTtcbiAgICAgICAgcGFuZWwxLnN0eWxlLnB1dEFzQmFja2dyb3VuZChcImdyZWVuXCIpO1xuICAgICAgICB0aGlzLmFkZChwYW5lbDEpO1xuICAgICAgICBsZXQgcGFuZWwyID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5QYW5lbCgpO1xuICAgICAgICBwYW5lbDIuc3R5bGUucHV0QXNCYWNrZ3JvdW5kKFwieWVsbG93XCIpO1xuICAgICAgICB0aGlzLmFkZChwYW5lbDIpO1xuICAgICAgICBsZXQgcGFuZWwzID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5QYW5lbCgpO1xuICAgICAgICBwYW5lbDMuc3R5bGUucHV0QXNCYWNrZ3JvdW5kKFwicmVkXCIpO1xuICAgICAgICB0aGlzLmFkZChwYW5lbDMpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBhbmVsMS5zdHlsZS5wdXRBc1pJbmRleCgxMCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBhbmVsMi5zdHlsZS5wdXRBc1pJbmRleCgxMCk7XG4gICAgICAgIH0sIDYwMDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBhbmVsMy5zdHlsZS5wdXRBc1pJbmRleCgxMCk7XG4gICAgICAgIH0sIDkwMDApO1xuICAgIH1cbn1cbm5ldyBRaW5TY2FmZm9sZCgpLnN0eWxlLnB1dEFzQm9keSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl19
