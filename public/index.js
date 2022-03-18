(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = exports.QinExplorer = exports.QinEdit = exports.QinBase = exports.QinTools = exports.QinPath = exports.QinCombo = exports.QinColumn = exports.QinLine = exports.QinButton = exports.QinMutantsArm = exports.QinMutants = exports.QinChooser = exports.QinField = exports.qinAssetUrl = exports.QinAsset = exports.QinPanel = exports.QinTabs = exports.QinIcon = exports.QinString = exports.QinLabel = exports.QinBoolean = void 0;
var qin_boolean_1 = require("./qin-boolean");
Object.defineProperty(exports, "QinBoolean", { enumerable: true, get: function () { return qin_boolean_1.QinBoolean; } });
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

},{"./qin-assets":2,"./qin-base":3,"./qin-boolean":4,"./qin-button":5,"./qin-chooser":6,"./qin-column":7,"./qin-combo":8,"./qin-edit":9,"./qin-explorer":10,"./qin-field":11,"./qin-icon":12,"./qin-integer":13,"./qin-label":14,"./qin-line":15,"./qin-mutants":16,"./qin-panel":17,"./qin-path":18,"./qin-string":19,"./qin-tabs":20,"./qin-tools":21}],2:[function(require,module,exports){
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
exports.QinBase = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_tools_1 = require("./qin-tools");
class QinBase {
    constructor() {
        this.baseParent = null;
        this.baseChildren = [];
        this.baseDisplay = "initial";
        this.baseVisibility = "initial";
    }
    qinpel() {
        return qin_tools_1.QinTools.qinpel();
    }
    install(on) {
        this.baseParent = on;
        this.baseParent.appendChild(this);
    }
    unInstall() {
        this.baseParent.removeChild(this);
    }
    reInstall() {
        this.baseParent.appendChild(this);
    }
    unDisplay() {
        if (this.getMain().style.display !== "none") {
            this.baseDisplay = this.getMain().style.display;
            this.getMain().style.display = "none";
        }
    }
    reDisplay() {
        this.getMain().style.display = this.baseDisplay;
    }
    unVisible() {
        if (this.getMain().style.display !== "hidden") {
            this.baseVisibility = this.getMain().style.visibility;
            this.getMain().style.visibility = "hidden";
        }
    }
    reVisible() {
        this.getMain().style.visibility = this.baseVisibility;
    }
    appendChild(child) {
        this.baseChildren.push(child);
        this.getMain().appendChild(child.getMain());
    }
    removeChild(child) {
        let index = this.baseChildren.indexOf(child);
        if (index > -1) {
            this.baseChildren.splice(index, 1);
        }
        this.getMain().removeChild(child.getMain());
    }
    children() {
        return this.baseChildren;
    }
    clearChildren() {
        for (const child of this.baseChildren) {
            this.getMain().removeChild(child.getMain());
        }
        this.baseChildren = [];
    }
    addAction(action) {
        qinpel_res_1.QinSoul.arm.addAction(this.getMain(), action);
    }
    putAsBody() {
        document.body.appendChild(this.getMain());
        qinpel_res_1.QinSoul.skin.styleAsBody(this.getMain());
    }
    delAsBody() {
        document.body.removeChild(this.getMain());
    }
    putAsEdit() {
        qinpel_res_1.QinSoul.skin.styleAsEdit(this.getMain());
        this.getMain().tabIndex = 0;
    }
    putAsScroll() {
        this.getMain().style.overflow = "auto";
    }
    putAsDisabledSelection() {
        qinpel_res_1.QinSoul.skin.disableSelection(this.getMain());
    }
    putAsCentered() {
        this.getMain().style.textAlign = "center";
        this.getMain().style.alignItems = "center";
        this.getMain().style.alignContent = "center";
        this.getMain().style.verticalAlign = "middle";
    }
    putAsDisplayInlineBlock() {
        this.getMain().style.display = "inline-block";
    }
    putAsDisplayFlex() {
        this.getMain().style.display = "flex";
    }
    putAsFlexMin() {
        this.getMain().style.flex = "none";
    }
    putAsFlexMax() {
        this.getMain().style.flex = "auto";
    }
    putAsWidth(width) {
        if (width != null && width != undefined) {
            this.getMain().style.width = width + "px";
        }
    }
    putAsHeight(height) {
        if (height != null && height != undefined) {
            this.getMain().style.height = height + "px";
        }
    }
    putAsSize(width, height) {
        if (width != null && width != undefined) {
            this.getMain().style.width = width + "px";
        }
        if (height != null && height != undefined) {
            this.getMain().style.height = height + "px";
        }
    }
    putAsMinWidth(width) {
        if (width != null && width != undefined) {
            this.getMain().style.minWidth = width + "px";
        }
    }
    putAsMinHeight(height) {
        if (height != null && height != undefined) {
            this.getMain().style.minHeight = height + "px";
        }
    }
    putAsMinSize(width, height) {
        if (width != null && width != undefined) {
            this.getMain().style.minWidth = width + "px";
        }
        if (height != null && height != undefined) {
            this.getMain().style.minHeight = height + "px";
        }
    }
    putAsMaxWidth(width) {
        if (width != null && width != undefined) {
            this.getMain().style.maxWidth = width + "px";
        }
    }
    putAsMaxHeight(height) {
        if (height != null && height != undefined) {
            this.getMain().style.maxHeight = height + "px";
        }
    }
    putAsMaxSize(width, height) {
        if (width != null && width != undefined) {
            this.getMain().style.maxWidth = width + "px";
        }
        if (height != null && height != undefined) {
            this.getMain().style.maxHeight = height + "px";
        }
    }
    putAsForeground(foreground) {
        this.getMain().style.color = foreground;
    }
    putAsBackground(background) {
        this.getMain().style.background = background;
    }
}
exports.QinBase = QinBase;

},{"./qin-tools":21,"qinpel-res":22}],4:[function(require,module,exports){
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
        this.value = false;
        this._qinSpan.install(this._qinMain);
        this._qinIcon.install(this._qinSpan);
        this._qinSpan.putAsEdit();
        this._qinSpan.putAsDisplayFlex();
        this._qinSpan.putAsCentered();
        this._qinSpan.addAction(qinEvent => {
            if (qinEvent.isPrimary()) {
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
        return this.value;
    }
    setData(data) {
        this.value = data;
        this.updateIcon();
    }
    updateIcon() {
        if (this.value) {
            this._qinIcon.change(qin_assets_1.QinAsset.FaceConfirm);
        }
        else {
            this._qinIcon.change(qin_assets_1.QinAsset.FaceCircle);
        }
    }
    toggle() {
        this.value = !this.value;
        this.updateIcon();
    }
}
exports.QinBoolean = QinBoolean;

},{"./qin-assets":2,"./qin-edit":9,"./qin-icon":12,"./qin-label":14,"./qin-line":15}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinButton = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_1 = require("./qin-base");
class QinButton extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._buttonMain = document.createElement("button");
        this._qinIcon = null;
        this._qinLabel = null;
        styles.applyOnButton(this._buttonMain);
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
        return this._buttonMain;
    }
    get buttonMain() {
        return this._buttonMain;
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
        qinpel_res_1.QinSoul.skin.styleAsEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.alignItems = "center";
    }
};

},{"./qin-base":3,"qinpel-res":22}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinChooser = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_column_1 = require("./qin-column");
const qin_explorer_1 = require("./qin-explorer");
const qin_line_1 = require("./qin-line");
const qin_string_1 = require("./qin-string");
const qin_combo_1 = require("./qin-combo");
const qin_button_1 = require("./qin-button");
const qin_icon_1 = require("./qin-icon");
const qin_assets_1 = require("./qin-assets");
const qin_panel_1 = require("./qin-panel");
class QinChooser extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_column_1.QinColumn();
        this._qinUpper = new qin_line_1.QinLine();
        this._qinConfirm = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceConfirm)
        });
        this._qinFolder = new qin_string_1.QinString();
        this._qinExtensions = new qin_combo_1.QinCombo();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceSearch)
        });
        this._qinUnder = new qin_panel_1.QinPanel();
        this._qinExplorer = new qin_explorer_1.QinExplorer();
        this.listeners = [];
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
        this._qinUpper.putAsFlexMin();
        this._qinConfirm.install(this._qinUpper);
        this._qinConfirm.addAction(qinEvent => {
            if (qinEvent.isPrimary()) {
                let data = this.getData();
                for (const chosen of this.listeners) {
                    chosen(data);
                }
                qinEvent.stop();
            }
        });
        this._qinFolder.install(this._qinUpper);
        this._qinFolder.putAsMinWidth(100);
        this._qinFolder.putAsFlexMax();
        this._qinFolder.addAction(qinEvent => {
            if (qinEvent.isEnter) {
                this.loadFolder();
                qinEvent.stop();
            }
        });
        this._qinExtensions.install(this._qinUpper);
        this._qinExtensions.putAsMinWidth(100);
        this.initExtensions();
        this._qinSearch.install(this._qinUpper);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary()) {
                this.loadFolder();
                qinEvent.stop();
            }
        });
    }
    initUnder() {
        this._qinUnder.putAsScroll();
        this._qinUnder.putAsFlexMax();
        this._qinExplorer.install(this._qinUnder);
        this._qinExplorer.nature = this._nature;
        this._qinExplorer.singleSelection = this._singleSelection;
    }
    initExtensions() {
        if (this._descriptors.length == 0) {
            this._qinExtensions.addItem({
                title: "All Files (*.*)",
                value: "*",
                selected: true
            });
            this._qinExplorer.extensions = [];
        }
        else {
            for (let index = 0; index < this._descriptors.length; index++) {
                const descriptor = this._descriptors[index];
                this._qinExtensions.addItem({
                    title: descriptor.description,
                    value: descriptor.extensions.join(";"),
                    selected: index == 0
                });
            }
            this._qinExplorer.extensions = this._descriptors[0].extensions;
        }
    }
    loadFolder() {
        this._qinExplorer.load(this._qinFolder.getData(), (loaded) => {
            this._qinFolder.setData(loaded);
        });
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
    addChosen(chosen) {
        this.listeners.push(chosen);
        return this;
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
}
exports.QinChooser = QinChooser;

},{"./qin-assets":2,"./qin-button":5,"./qin-column":7,"./qin-combo":8,"./qin-edit":9,"./qin-explorer":10,"./qin-icon":12,"./qin-line":15,"./qin-panel":17,"./qin-string":19,"qinpel-res":22}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinColumn = void 0;
const qin_base_1 = require("./qin-base");
class QinColumn extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._divMain = document.createElement("div");
        this.initPanel();
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (const viewer of options.initial) {
                viewer.install(this);
            }
        }
    }
    initPanel() {
        styles.applyOnPanel(this._divMain);
    }
    getMain() {
        return this._divMain;
    }
    get divMain() {
        return this._divMain;
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

},{"./qin-base":3}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinCombo = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinCombo extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._selectMain = document.createElement("select");
        qinpel_res_1.QinSoul.skin.styleAsEdit(this._selectMain);
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
        return this._selectMain;
    }
    getData() {
        return this._selectMain.value;
    }
    setData(data) {
        this._selectMain.value = data;
    }
    addItem(item) {
        const option = document.createElement("option");
        option.text = item.title;
        option.value = item.value;
        if (item.selected != undefined && item.selected != null) {
            option.selected = item.selected;
        }
        this._selectMain.appendChild(option);
        return this;
    }
    get selectMain() {
        return this._selectMain;
    }
}
exports.QinCombo = QinCombo;

},{"./qin-edit":9,"qinpel-res":22}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinEdit = void 0;
const qin_base_1 = require("./qin-base");
class QinEdit extends qin_base_1.QinBase {
}
exports.QinEdit = QinEdit;

},{"./qin-base":3}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinExplorer = void 0;
const qin_edit_1 = require("./qin-edit");
const qinpel_res_1 = require("qinpel-res");
const qin_panel_1 = require("./qin-panel");
class QinExplorer extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_panel_1.QinPanel();
        this._folderActual = "";
        this._folderServer = "";
        this.items = [];
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._extensions = (options === null || options === void 0 ? void 0 : options.extensions) ? options.extensions : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection)
            ? options.singleSelection
            : false;
        this.initMain();
    }
    initMain() {
        styles.applyOnMain(this._qinMain.divMain);
        this._qinMain.addAction((qinEvent) => {
            if (qinEvent.isPrimary()) {
                this.cleanSelection();
            }
        });
        this._qinMain.putAsDisabledSelection();
    }
    updateSingleSelection() {
        if (this._singleSelection) {
            let alreadyHas = false;
            for (const item of this.items) {
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
    getMain() {
        return this._qinMain.divMain;
    }
    getData() {
        let result = [];
        this.items.forEach((item) => {
            if (item.isSelected()) {
                result.push(qinpel_res_1.QinSoul.foot.getPathJoin(this._folderServer, item.getName()));
            }
        });
        return result;
    }
    setData(data) {
        this.clean();
        if (data && data.length > 0) {
            let folderRoot = qinpel_res_1.QinSoul.foot.getRoot(data[0]);
            this.load(folderRoot, (_) => {
                for (const itemPath of data) {
                    let itemRoot = qinpel_res_1.QinSoul.foot.getRoot(itemPath);
                    let itemName = qinpel_res_1.QinSoul.foot.getStem(itemPath);
                    if (itemRoot !== folderRoot) {
                        this.qinpel().frame.statusError(`The item '${itemPath}' is not on the root '${folderRoot}'.`, "{qinpel-cps}(ErrCode-000001)");
                    }
                    else {
                        if (!this.select(itemName)) {
                            this.qinpel().frame.statusError(`Does not have the item '${itemName}' on the folder '${folderRoot}'`, "{qinpel-cps}(ErrCode-000002)");
                        }
                    }
                }
            });
        }
    }
    load(folder, onLoad) {
        this.clean();
        this.qinpel()
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
            this.qinpel().frame.statusError(err, "{qinpel-cps}(ErrCode-000003)");
        });
    }
    goFolderUp(onLoad) {
        let root = qinpel_res_1.QinFoot.getRoot(this._folderServer);
        if (root) {
            this.load(root, onLoad);
        }
    }
    clean() {
        this._qinMain.divMain.innerHTML = "";
        this.items = [];
        this._folderActual = "";
        this._folderServer = "";
    }
    cleanSelection() {
        for (const item of this.items) {
            item.unselect();
        }
    }
    select(itemName) {
        let item = this.items.find((inside) => inside.getName() == itemName);
        if (item) {
            item.select();
            return true;
        }
        else {
            return false;
        }
    }
    unselect(itemName) {
        let item = this.items.find((inside) => inside.getName() == itemName);
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
        item.install(this._qinMain.divMain);
        this.items.push(item);
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
            if (qinEvent.isPrimary()) {
                this.divItem.focus();
                this.toggle();
                qinEvent.stop();
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
        el.style.width = "120px";
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

},{"./qin-edit":9,"./qin-panel":17,"qinpel-res":22}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinField = void 0;
const qin_edit_1 = require("./qin-edit");
const qin_column_1 = require("./qin-column");
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

},{"./qin-column":7,"./qin-edit":9,"./qin-label":14}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIcon = void 0;
const qin_base_1 = require("./qin-base");
const qin_assets_1 = require("./qin-assets");
const qinpel_res_1 = require("qinpel-res");
class QinIcon extends qin_base_1.QinBase {
    constructor(asset, size = qinpel_res_1.QinGrandeur.SMALL) {
        super();
        this._imgMain = document.createElement("img");
        this._imgMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
        qinpel_res_1.QinSoul.skin.styleSize(this._imgMain, size);
    }
    getMain() {
        return this._imgMain;
    }
    change(asset) {
        this._imgMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
    }
    get imgMain() {
        return this._imgMain;
    }
}
exports.QinIcon = QinIcon;

},{"./qin-assets":2,"./qin-base":3,"qinpel-res":22}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinInteger extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._inputMain = document.createElement("input");
        this._inputMain.type = "number";
        qinpel_res_1.QinSoul.skin.styleAsEdit(this._inputMain);
        this._inputMain.style.width = "120px";
        this._inputMain.addEventListener("focusout", () => {
            this.setData(this.getData());
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._inputMain;
    }
    getData() {
        const value = this._inputMain.value;
        if (value == null || value == undefined || value.length == 0) {
            return null;
        }
        else {
            return parseInt(this._inputMain.value, 10);
        }
    }
    setData(data) {
        if (data == null || data == undefined) {
            this._inputMain.value = "";
        }
        else {
            this._inputMain.value = (data | 0).toString();
        }
    }
    get inputMain() {
        return this._inputMain;
    }
}
exports.QinInteger = QinInteger;

},{"./qin-edit":9,"qinpel-res":22}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLabel = void 0;
const qin_base_1 = require("./qin-base");
class QinLabel extends qin_base_1.QinBase {
    constructor(title) {
        super();
        this._spanMain = document.createElement("span");
        if (title) {
            this._spanMain.textContent = title;
        }
    }
    getMain() {
        return this._spanMain;
    }
    setTitle(title) {
        this._spanMain.textContent = title;
    }
    getTitle() {
        return this._spanMain.textContent;
    }
    get spanMain() {
        return this._spanMain;
    }
}
exports.QinLabel = QinLabel;

},{"./qin-base":3}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLine = void 0;
const qin_base_1 = require("./qin-base");
class QinLine extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._divMain = document.createElement("div");
        this.initPanel();
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (const viewer of options.initial) {
                viewer.install(this);
            }
        }
    }
    initPanel() {
        styles.applyOnPanel(this._divMain);
    }
    getMain() {
        return this._divMain;
    }
    get divMain() {
        return this._divMain;
    }
}
exports.QinLine = QinLine;
const styles = {
    applyOnPanel: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.flexWrap = "wrap";
    }
};

},{"./qin-base":3}],16:[function(require,module,exports){
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
    newEdit
};

},{"./qin-boolean":4,"./qin-chooser":6,"./qin-combo":8,"./qin-explorer":10,"./qin-integer":13,"./qin-path":18,"./qin-string":19}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPanel = void 0;
const qin_base_1 = require("./qin-base");
class QinPanel extends qin_base_1.QinBase {
    constructor() {
        super();
        this._divMain = document.createElement("div");
    }
    getMain() {
        return this._divMain;
    }
    get divMain() {
        return this._divMain;
    }
}
exports.QinPanel = QinPanel;

},{"./qin-base":3}],18:[function(require,module,exports){
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
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceFolder)
        });
        this._qinChooser = new qin_chooser_1.QinChooser({
            nature: options === null || options === void 0 ? void 0 : options.nature,
            operation: options === null || options === void 0 ? void 0 : options.operation,
            descriptors: options === null || options === void 0 ? void 0 : options.descriptors,
            singleSelection: true
        });
        this._qinPopup = this.qinpel().frame.newPopup(this._qinChooser.getMain());
        this._qinPath.install(this._qinMain);
        this._qinSearch.install(this._qinMain);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary()) {
                this._qinPopup.show();
                const upperHeight = this._qinChooser.qinUpper.getMain().clientHeight;
                const explorerMaxHeight = this._qinPopup.maxHeight - (upperHeight + 12);
                this._qinChooser.qinExplorer.putAsMaxHeight(explorerMaxHeight);
            }
        });
        this._qinChooser.addChosen(chosen => {
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

},{"./qin-assets":2,"./qin-button":5,"./qin-chooser":6,"./qin-edit":9,"./qin-icon":12,"./qin-line":15,"./qin-string":19}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinString = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinString extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._inputMain = document.createElement("input");
        this._inputMain.type = "text";
        if (options === null || options === void 0 ? void 0 : options.maxLength) {
            this._inputMain.maxLength = options.maxLength;
            let position = Math.min(Math.max(options.maxLength - 10, 0), 90);
            let width = Math.floor(90 + (position * 7 / 3));
            this._inputMain.style.width = width + "px";
        }
        qinpel_res_1.QinSoul.skin.styleAsEdit(this._inputMain);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._inputMain;
    }
    getData() {
        return this._inputMain.value;
    }
    setData(data) {
        this._inputMain.value = data;
    }
    insertAtCursor(data) {
        if (!data)
            return;
        let startPos = this._inputMain.selectionStart;
        let endPos = this._inputMain.selectionEnd;
        let oldVal = this._inputMain.value;
        let newVal = (startPos > 0 ? oldVal.substring(0, startPos) : "") + data
            + (endPos < oldVal.length ? oldVal.substring(endPos) : "");
        this._inputMain.value = newVal;
        this._inputMain.selectionStart = startPos;
        this._inputMain.selectionEnd = startPos + data.length;
    }
    get inputMain() {
        return this._inputMain;
    }
}
exports.QinString = QinString;

},{"./qin-edit":9,"qinpel-res":22}],20:[function(require,module,exports){
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
        this.tabs = [];
        this._qinTabs.install(this);
        this._qinPanel.install(this);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (const tab of options === null || options === void 0 ? void 0 : options.initial) {
                this.addTab(tab);
            }
        }
    }
    addTab(tab) {
        const button = new qin_button_1.QinButton({ label: new qin_label_1.QinLabel(tab.title) });
        button.putAsBackground(qinpel_res_1.QinSkin.styles.ColorInactive);
        button.addAction(qinEvent => {
            if (qinEvent.isPrimary()) {
                this.showViewer(tab.viewer);
            }
        });
        button.install(this._qinTabs);
        let first = this.tabs.length == 0;
        let tabRef = {
            title: tab.title,
            viewer: tab.viewer,
            button
        };
        this.tabs.push(tabRef);
        if (first) {
            this.showViewer(tab.viewer);
        }
    }
    showTab(title) {
        for (const tab of this.tabs) {
            if (tab.title == title) {
                this.showViewer(tab.viewer);
                break;
            }
        }
    }
    showViewer(viewer) {
        this._qinPanel.clearChildren();
        viewer.install(this._qinPanel);
        for (const tab of this.tabs) {
            if (tab.viewer == viewer) {
                tab.button.putAsBackground(qinpel_res_1.QinSkin.styles.ColorActive);
            }
            else {
                tab.button.putAsBackground(qinpel_res_1.QinSkin.styles.ColorInactive);
            }
        }
    }
    get qinTabs() {
        return this._qinTabs;
    }
    get qinPanel() {
        return this._qinPanel;
    }
}
exports.QinTabs = QinTabs;

},{"./qin-button":5,"./qin-column":7,"./qin-label":14,"./qin-line":15,"./qin-panel":17,"qinpel-res":22}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTools = void 0;
const refQinpel = window.frameElement.qinpel;
function qinpel() {
    return refQinpel;
}
exports.QinTools = {
    qinpel
};

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = exports.QinArm = exports.QinDragCalls = exports.QinWaiters = exports.QinEvent = exports.QinSoul = exports.QinBody = exports.QinHead = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = exports.QinSkin = exports.QinStyles = void 0;
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
Object.defineProperty(exports, "QinDragCalls", { enumerable: true, get: function () { return qin_arm_3.QinDragCalls; } });
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

},{"./qin-arm":23,"./qin-body":24,"./qin-foot":25,"./qin-head":26,"./qin-skin":27,"./qin-soul":28}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinArm = exports.QinDragCalls = exports.QinWaiters = exports.QinEvent = void 0;
const qin_skin_1 = require("./qin-skin");
class QinEvent {
    constructor() {
        this.fromOrigin = null;
        this.fromTyping = false;
        this.fromPointing = false;
        this.hasAlt = false;
        this.hasCtrl = false;
        this.hasShift = false;
        this.hasMeta = false;
        this.isEnter = false;
        this.isEscape = false;
        this.isSpace = false;
        this.isDouble = false;
        this.isLong = false;
        this.keyTyped = "";
        this.pointOnX = -1;
        this.pointOnY = -1;
        this.isFirstButton = false;
        this.isMiddleButton = false;
        this.isSecondButton = false;
        this.isOneFinger = false;
        this.isTwoFingers = false;
        this.isThreeFingers = false;
        this.stopEvent = false;
    }
    setFromKeyboard(ev) {
        this.fromOrigin = ev.target;
        this.fromTyping = true;
        this.hasAlt = ev.altKey;
        this.hasCtrl = ev.ctrlKey;
        this.hasShift = ev.shiftKey;
        this.hasMeta = ev.metaKey;
        this.isEnter = isKeyEnter(ev);
        this.isEscape = isKeyEscape(ev);
        this.isSpace = isKeySpace(ev);
        this.keyTyped = ev.key;
        return this;
    }
    setFromMouse(ev) {
        this.fromOrigin = ev.target;
        this.fromPointing = true;
        this.hasAlt = ev.altKey;
        this.hasCtrl = ev.ctrlKey;
        this.hasShift = ev.shiftKey;
        this.hasMeta = ev.metaKey;
        this.pointOnX = ev.clientX;
        this.pointOnY = ev.clientY;
        this.isFirstButton = ev.button == 0;
        this.isMiddleButton = ev.button == 1;
        this.isSecondButton = ev.button == 2;
        return this;
    }
    setFromTouch(ev) {
        this.fromOrigin = ev.target;
        this.fromPointing = true;
        this.hasAlt = ev.altKey;
        this.hasCtrl = ev.ctrlKey;
        this.hasShift = ev.shiftKey;
        this.hasMeta = ev.metaKey;
        if (ev.touches.length > 0) {
            let index = (ev.touches.length / 2) | 0;
            this.pointOnX = ev.touches[index].clientX;
            this.pointOnY = ev.touches[index].clientY;
        }
        this.isOneFinger = ev.touches.length == 1;
        this.isTwoFingers = ev.touches.length == 2;
        this.isThreeFingers = ev.touches.length == 3;
        return this;
    }
    stop() {
        this.stopEvent = true;
    }
    isPrimary() {
        if (this.fromTyping) {
            return this.isEnter || this.isSpace;
        }
        else if (this.fromPointing) {
            return this.isFirstButton || this.isOneFinger;
        }
        return false;
    }
    isAuxiliary() {
        if (this.fromTyping) {
            return this.hasCtrl && this.hasAlt && this.isSpace;
        }
        else if (this.fromPointing) {
            return this.isMiddleButton || this.isThreeFingers;
        }
        return false;
    }
    isSecondary() {
        if (this.fromTyping) {
            return this.hasCtrl && !this.hasAlt && this.isSpace;
        }
        else if (this.fromPointing) {
            return this.isSecondButton || this.isTwoFingers;
        }
        return false;
    }
}
exports.QinEvent = QinEvent;
;
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
class QinDragCalls {
}
exports.QinDragCalls = QinDragCalls;
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
function makeEventPointer(isDown, ev) {
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
        if (ev.touches &&
            ev.touches[0] &&
            (ev.touches[0].clientX || ev.touches[0].clientY)) {
            result.posX = ev.touches[0].clientX;
            result.posY = ev.touches[0].clientY;
        }
    }
    if (isDown) {
        lastEventPointer = ev;
    }
    return result;
}
function isEventPointerDouble(isDown, ev) {
    if (!isDown || lastEventPointer == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventPointer.timeStamp;
    return timeDif < 450;
}
function isEventPointerLong(isDown, ev) {
    if (!isDown || lastEventPointer == null || ev == null) {
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
function addAction(element, action) {
    element.addEventListener("keydown", stopEvent);
    element.addEventListener("keyup", actionKeyboard);
    element.addEventListener("mousedown", stopEvent);
    element.addEventListener("mouseup", actionMouse);
    element.addEventListener("touchstart", stopEvent);
    element.addEventListener("touchend", actionTouch);
    function actionKeyboard(ev) {
        let qinEvent = new QinEvent().setFromKeyboard(ev);
        action(qinEvent);
        if (qinEvent.stopEvent) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actionMouse(ev) {
        let qinEvent = new QinEvent().setFromMouse(ev);
        action(qinEvent);
        if (qinEvent.stopEvent) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actionTouch(ev) {
        let qinEvent = new QinEvent().setFromTouch(ev);
        action(qinEvent);
        if (qinEvent.stopEvent) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
}
function addActionEnter(element, action) {
    element.onkeydown = actionKeyboard;
    function actionKeyboard(ev) {
        if (isKeyEnter(ev)) {
            action(new QinEvent().setFromKeyboard(ev));
            return stopEvent(ev);
        }
    }
}
function putActionProxy(destiny, origins) {
    for (const origin of origins) {
        origin.addEventListener("keyup", e => {
            destiny.onkeydown(e);
        });
        origin.addEventListener("mouseup", e => {
            destiny.onmouseup(e);
        });
        origin.addEventListener("touchend", e => {
            destiny.ontouchend(e);
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
        target.style.width = (frameDragFinalWidth > 0 ? frameDragFinalWidth : 0) + "px";
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
    addAction,
    addActionEnter,
    putActionProxy,
    addMover,
    addResizer,
    addScroller,
};

},{"./qin-skin":27}],24:[function(require,module,exports){
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
    getTextLines,
    getCSVRows,
    maskSpecialChars,
    unmaskSpecialChars,
    parseParameters,
};

},{}],25:[function(require,module,exports){
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
function getRoot(path) {
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
    getRoot,
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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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
    el.style.border = "1px solid #270036";
    el.style.borderRadius = "3px";
    el.style.color = "#270036";
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
        el.style.border = "1px solid #270036";
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

},{"./qin-arm":23,"./qin-head":26}],28:[function(require,module,exports){
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

},{"./qin-arm":23,"./qin-body":24,"./qin-foot":25,"./qin-head":26,"./qin-skin":27}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qinpel_cps_1 = require("qinpel-cps");
class QinScaffold extends qinpel_cps_1.QinColumn {
    constructor() {
        super();
        this.qinHello = new qinpel_cps_1.QinLabel("Hello, world!");
        this.qinHello.install(this);
    }
}
new QinScaffold().putAsBody();

},{"qinpel-cps":1}]},{},[29])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvYWxsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYXNzZXRzLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYmFzZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWJvb2xlYW4uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1idXR0b24uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1jaG9vc2VyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY29sdW1uLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY29tYm8uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1lZGl0LmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZXhwbG9yZXIuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1maWVsZC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWljb24uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1pbnRlZ2VyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbGFiZWwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1saW5lLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbXV0YW50cy5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXBhbmVsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tcGF0aC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXN0cmluZy5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXRhYnMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10b29scy5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvYWxsLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tYXJtLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tYm9keS5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWZvb3QuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1oZWFkLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tc2tpbi5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLXNvdWwuanMiLCJidWlsZC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDek1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25jQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkludGVnZXIgPSBleHBvcnRzLlFpbkV4cGxvcmVyID0gZXhwb3J0cy5RaW5FZGl0ID0gZXhwb3J0cy5RaW5CYXNlID0gZXhwb3J0cy5RaW5Ub29scyA9IGV4cG9ydHMuUWluUGF0aCA9IGV4cG9ydHMuUWluQ29tYm8gPSBleHBvcnRzLlFpbkNvbHVtbiA9IGV4cG9ydHMuUWluTGluZSA9IGV4cG9ydHMuUWluQnV0dG9uID0gZXhwb3J0cy5RaW5NdXRhbnRzQXJtID0gZXhwb3J0cy5RaW5NdXRhbnRzID0gZXhwb3J0cy5RaW5DaG9vc2VyID0gZXhwb3J0cy5RaW5GaWVsZCA9IGV4cG9ydHMucWluQXNzZXRVcmwgPSBleHBvcnRzLlFpbkFzc2V0ID0gZXhwb3J0cy5RaW5QYW5lbCA9IGV4cG9ydHMuUWluVGFicyA9IGV4cG9ydHMuUWluSWNvbiA9IGV4cG9ydHMuUWluU3RyaW5nID0gZXhwb3J0cy5RaW5MYWJlbCA9IGV4cG9ydHMuUWluQm9vbGVhbiA9IHZvaWQgMDtcbnZhciBxaW5fYm9vbGVhbl8xID0gcmVxdWlyZShcIi4vcWluLWJvb2xlYW5cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Cb29sZWFuXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYm9vbGVhbl8xLlFpbkJvb2xlYW47IH0gfSk7XG52YXIgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5MYWJlbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2xhYmVsXzEuUWluTGFiZWw7IH0gfSk7XG52YXIgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblN0cmluZ1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3N0cmluZ18xLlFpblN0cmluZzsgfSB9KTtcbnZhciBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5JY29uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faWNvbl8xLlFpbkljb247IH0gfSk7XG52YXIgcWluX3RhYnNfMSA9IHJlcXVpcmUoXCIuL3Fpbi10YWJzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluVGFic1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3RhYnNfMS5RaW5UYWJzOyB9IH0pO1xudmFyIHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUGFuZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9wYW5lbF8xLlFpblBhbmVsOyB9IH0pO1xudmFyIHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Bc3NldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Fzc2V0c18xLlFpbkFzc2V0OyB9IH0pO1xudmFyIHFpbl9hc3NldHNfMiA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJxaW5Bc3NldFVybFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Fzc2V0c18yLnFpbkFzc2V0VXJsOyB9IH0pO1xudmFyIHFpbl9maWVsZF8xID0gcmVxdWlyZShcIi4vcWluLWZpZWxkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmllbGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9maWVsZF8xLlFpbkZpZWxkOyB9IH0pO1xudmFyIHFpbl9jaG9vc2VyXzEgPSByZXF1aXJlKFwiLi9xaW4tY2hvb3NlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkNob29zZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9jaG9vc2VyXzEuUWluQ2hvb3NlcjsgfSB9KTtcbnZhciBxaW5fbXV0YW50c18xID0gcmVxdWlyZShcIi4vcWluLW11dGFudHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5NdXRhbnRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbXV0YW50c18xLlFpbk11dGFudHM7IH0gfSk7XG52YXIgcWluX211dGFudHNfMiA9IHJlcXVpcmUoXCIuL3Fpbi1tdXRhbnRzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTXV0YW50c0FybVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX211dGFudHNfMi5RaW5NdXRhbnRzQXJtOyB9IH0pO1xudmFyIHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5CdXR0b25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9idXR0b25fMS5RaW5CdXR0b247IH0gfSk7XG52YXIgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTGluZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2xpbmVfMS5RaW5MaW5lOyB9IH0pO1xudmFyIHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Db2x1bW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9jb2x1bW5fMS5RaW5Db2x1bW47IH0gfSk7XG52YXIgcWluX2NvbWJvXzEgPSByZXF1aXJlKFwiLi9xaW4tY29tYm9cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Db21ib1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2NvbWJvXzEuUWluQ29tYm87IH0gfSk7XG52YXIgcWluX3BhdGhfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYXRoXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUGF0aFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3BhdGhfMS5RaW5QYXRoOyB9IH0pO1xudmFyIHFpbl90b29sc18xID0gcmVxdWlyZShcIi4vcWluLXRvb2xzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluVG9vbHNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl90b29sc18xLlFpblRvb2xzOyB9IH0pO1xudmFyIHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJhc2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9iYXNlXzEuUWluQmFzZTsgfSB9KTtcbnZhciBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5FZGl0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZWRpdF8xLlFpbkVkaXQ7IH0gfSk7XG52YXIgcWluX2V4cGxvcmVyXzEgPSByZXF1aXJlKFwiLi9xaW4tZXhwbG9yZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5FeHBsb3JlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2V4cGxvcmVyXzEuUWluRXhwbG9yZXI7IH0gfSk7XG52YXIgcWluX2ludGVnZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1pbnRlZ2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSW50ZWdlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ludGVnZXJfMS5RaW5JbnRlZ2VyOyB9IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5xaW5Bc3NldFVybCA9IGV4cG9ydHMuUWluQXNzZXQgPSB2b2lkIDA7XG52YXIgUWluQXNzZXQ7XG4oZnVuY3Rpb24gKFFpbkFzc2V0KSB7XG4gICAgUWluQXNzZXRbXCJFeHBsb3Jlck1vdmllXCJdID0gXCJleHBsb3Jlci1tb3ZpZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VVcGxvYWRcIl0gPSBcImZhY2UtdXBsb2FkLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZU5ld3NcIl0gPSBcImZhY2UtbmV3cy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyNFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VJbWFnZVwiXSA9IFwiZmFjZS1pbWFnZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyRmlsZVwiXSA9IFwiZXhwbG9yZXItZmlsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VGb2xkZXJcIl0gPSBcImZhY2UtZm9sZGVyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDEzXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNZXNzYWdlXCJdID0gXCJmYWNlLW1lc3NhZ2UucG5nXCI7XG4gICAgUWluQXNzZXRbXCJTb3VyY2VTZXJpZlByb1wiXSA9IFwic291cmNlLXNlcmlmLXByby50dGZcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmsucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIzXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw0XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC00LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI1XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDYXJ0XCJdID0gXCJmYWNlLWNhcnQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGcmFtZVJlc2l6ZVwiXSA9IFwiZnJhbWUtcmVzaXplLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxOFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE4LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiUWlucGVsXCJdID0gXCJxaW5wZWwucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyWmlwcGVkXCJdID0gXCJleHBsb3Jlci16aXBwZWQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI5LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyNlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI2LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiUWlucGVsNDhcIl0gPSBcInFpbnBlbC00OC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmxpbmtcIl0gPSBcImZhY2UtdW5saW5rLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazlcIl0gPSBcImJhY2tncm91bmQtZGFyay05LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVdpZmlcIl0gPSBcImZhY2Utd2lmaS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrNVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlVW5sb2NrXCJdID0gXCJmYWNlLXVubG9jay5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VHZWFyXCJdID0gXCJmYWNlLWdlYXIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ29uZmlybVwiXSA9IFwiZmFjZS1jb25maXJtLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxNFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0NFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC00LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0NVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC01LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVRyYXNoXCJdID0gXCJmYWNlLXRyYXNoLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJTb3VyY2VTYW5zUHJvXCJdID0gXCJzb3VyY2Utc2Fucy1wcm8udHRmXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTWljRGlzYWJsZVwiXSA9IFwiZmFjZS1taWMtZGlzYWJsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNaWNcIl0gPSBcImZhY2UtbWljLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUV5ZURpc2FibGVcIl0gPSBcImZhY2UtZXllLWRpc2FibGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRmlsdGVyXCJdID0gXCJmYWNlLWZpbHRlci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyRXhlY1wiXSA9IFwiZXhwbG9yZXItZXhlYy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VBZGRcIl0gPSBcImZhY2UtYWRkLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVNwZWFrZXJEaXNhYmxlXCJdID0gXCJmYWNlLXNwZWFrZXItZGlzYWJsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDb250cm9sXCJdID0gXCJmYWNlLWNvbnRyb2wucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ2FsZW5kYXJcIl0gPSBcImZhY2UtY2FsZW5kYXIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dVcFwiXSA9IFwiZmFjZS1hcnJvdy11cC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyQXBwc1wiXSA9IFwiZXhwbG9yZXItYXBwcy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTaGllbGRcIl0gPSBcImZhY2Utc2hpZWxkLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUxvY2tcIl0gPSBcImZhY2UtbG9jay5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VMaW5rXCJdID0gXCJmYWNlLWxpbmsucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlU2VuZFwiXSA9IFwiZmFjZS1zZW5kLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTWludXNcIl0gPSBcImZhY2UtbWludXMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTGFiZWxcIl0gPSBcImZhY2UtbGFiZWwucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlVW5kb1wiXSA9IFwiZmFjZS11bmRvLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJJbWFnZVwiXSA9IFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTJcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJNdXNpY1wiXSA9IFwiZXhwbG9yZXItbXVzaWMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTWFwRGlzYWJsZVwiXSA9IFwiZmFjZS1tYXAtZGlzYWJsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkxvZ2luS2V5XCJdID0gXCJsb2dpbi1rZXkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyNFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjdcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VGaWxlXCJdID0gXCJmYWNlLWZpbGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHRcIl0gPSBcImJhY2tncm91bmQtbGlnaHQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjBcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIwLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIxLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRnJhbWVTdGF0dXNJbmZvXCJdID0gXCJmcmFtZS1zdGF0dXMtaW5mby5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE5XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE5LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyMlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93TGVmdFwiXSA9IFwiZmFjZS1hcnJvdy1sZWZ0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyNFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTFcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlU2V0dGluZ3NcIl0gPSBcImZhY2Utc2V0dGluZ3MucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTW92aWVcIl0gPSBcImZhY2UtbW92aWUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazRcIl0gPSBcImJhY2tncm91bmQtZGFyay00LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI2XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyMVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTVcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE1LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDVcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ2hlY2tcIl0gPSBcImZhY2UtY2hlY2sucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI4XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI4LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms2XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VIb21lXCJdID0gXCJmYWNlLWhvbWUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlU3RhclwiXSA9IFwiZmFjZS1zdGFyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJEaXJcIl0gPSBcImV4cGxvcmVyLWRpci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDaXJjbGVcIl0gPSBcImZhY2UtY2lyY2xlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0wLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUF0dGFjaFwiXSA9IFwiZmFjZS1hdHRhY2gucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlUGFzdGVcIl0gPSBcImZhY2UtcGFzdGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE2LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDhcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE5LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVBsdXNcIl0gPSBcImZhY2UtcGx1cy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0OFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC04LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVBob25lXCJdID0gXCJmYWNlLXBob25lLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEwLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjJcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ29nXCJdID0gXCJmYWNlLWNvZy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrOFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI3LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNvbnRhY3RcIl0gPSBcImZhY2UtY29udGFjdC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VFeGl0XCJdID0gXCJmYWNlLWV4aXQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ29tcGFzc1wiXSA9IFwiZmFjZS1jb21wYXNzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDExXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE4XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE4LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTdcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ2xvc2VcIl0gPSBcImZhY2UtY2xvc2UucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRG93bmxvYWRcIl0gPSBcImZhY2UtZG93bmxvYWQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlUGVuY2lsXCJdID0gXCJmYWNlLXBlbmNpbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDEwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTEwLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxNVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE1LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE3XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xNy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VCZWxsRGlzYWJsZVwiXSA9IFwiZmFjZS1iZWxsLWRpc2FibGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxNlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI3LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxN1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE3LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRW50ZXJcIl0gPSBcImZhY2UtZW50ZXIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEzXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjhcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI4LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTBcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEwLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUJlbGxcIl0gPSBcImZhY2UtYmVsbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGcmFtZU1pbmltaXplXCJdID0gXCJmcmFtZS1taW5pbWl6ZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDYW1lcmFEaXNhYmxlXCJdID0gXCJmYWNlLWNhbWVyYS1kaXNhYmxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTVcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRXJhc2VcIl0gPSBcImZhY2UtZXJhc2UucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ5XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRXllXCJdID0gXCJmYWNlLWV5ZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwwXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0wLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRnJhbWVNZW51XCJdID0gXCJmcmFtZS1tZW51LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmswXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNYXBcIl0gPSBcImZhY2UtbWFwLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVNoYXJlXCJdID0gXCJmYWNlLXNoYXJlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVdpZmlEaXNhYmxlXCJdID0gXCJmYWNlLXdpZmktZGlzYWJsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZyYW1lU3RhdHVzRXJyb3JcIl0gPSBcImZyYW1lLXN0YXR1cy1lcnJvci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWxcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRnJhbWVNYXhpbWl6ZVwiXSA9IFwiZnJhbWUtbWF4aW1pemUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dSaWdodFwiXSA9IFwiZmFjZS1hcnJvdy1yaWdodC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjhcIl0gPSBcImJhY2tncm91bmQtZGFyay0yOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTYXZlXCJdID0gXCJmYWNlLXNhdmUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQmFnXCJdID0gXCJmYWNlLWJhZy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjVcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VSZWRvXCJdID0gXCJmYWNlLXJlZG8ucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ29weVwiXSA9IFwiZmFjZS1jb3B5LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUVubGFyZ2VcIl0gPSBcImZhY2UtZW5sYXJnZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrM1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlU2VhcmNoXCJdID0gXCJmYWNlLXNlYXJjaC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTFcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDbG9ja1wiXSA9IFwiZmFjZS1jbG9jay5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjlcIl0gPSBcImJhY2tncm91bmQtZGFyay0yOS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTaHJpbmtcIl0gPSBcImZhY2Utc2hyaW5rLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIwLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVBob25lRGlzYWJsZVwiXSA9IFwiZmFjZS1waG9uZS1kaXNhYmxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxOVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE5LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjJcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93RG93blwiXSA9IFwiZmFjZS1hcnJvdy1kb3duLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0NlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC02LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNhbWVyYVwiXSA9IFwiZmFjZS1jYW1lcmEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ2FuY2VsXCJdID0gXCJmYWNlLWNhbmNlbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNYWlsXCJdID0gXCJmYWNlLW1haWwucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRGVsXCJdID0gXCJmYWNlLWRlbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyOVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yOS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIxXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIxLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRnJhbWVDbG9zZVwiXSA9IFwiZnJhbWUtY2xvc2UucG5nXCI7XG4gICAgUWluQXNzZXRbXCJNZW51RGV2dG9vbHNcIl0gPSBcIm1lbnUtZGV2dG9vbHMuaWNvXCI7XG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckNtZHNcIl0gPSBcImV4cGxvcmVyLWNtZHMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlUGluXCJdID0gXCJmYWNlLXBpbi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VQZXJzb25cIl0gPSBcImZhY2UtcGVyc29uLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVNwZWFrZXJcIl0gPSBcImZhY2Utc3BlYWtlci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTZcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VIZWFydFwiXSA9IFwiZmFjZS1oZWFydC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw3XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC03LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI2XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI2LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxMlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEyLnBuZ1wiO1xufSkoUWluQXNzZXQgPSBleHBvcnRzLlFpbkFzc2V0IHx8IChleHBvcnRzLlFpbkFzc2V0ID0ge30pKTtcbmZ1bmN0aW9uIHFpbkFzc2V0VXJsKGFzc2V0KSB7XG4gICAgcmV0dXJuIFwiL2FwcC9xaW5wZWwtYXBwL2Fzc2V0cy9cIiArIGFzc2V0O1xufVxuZXhwb3J0cy5xaW5Bc3NldFVybCA9IHFpbkFzc2V0VXJsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWFzc2V0cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluQmFzZSA9IHZvaWQgMDtcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xuY29uc3QgcWluX3Rvb2xzXzEgPSByZXF1aXJlKFwiLi9xaW4tdG9vbHNcIik7XG5jbGFzcyBRaW5CYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5iYXNlUGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5iYXNlQ2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5iYXNlRGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuICAgICAgICB0aGlzLmJhc2VWaXNpYmlsaXR5ID0gXCJpbml0aWFsXCI7XG4gICAgfVxuICAgIHFpbnBlbCgpIHtcbiAgICAgICAgcmV0dXJuIHFpbl90b29sc18xLlFpblRvb2xzLnFpbnBlbCgpO1xuICAgIH1cbiAgICBpbnN0YWxsKG9uKSB7XG4gICAgICAgIHRoaXMuYmFzZVBhcmVudCA9IG9uO1xuICAgICAgICB0aGlzLmJhc2VQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgfVxuICAgIHVuSW5zdGFsbCgpIHtcbiAgICAgICAgdGhpcy5iYXNlUGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgIH1cbiAgICByZUluc3RhbGwoKSB7XG4gICAgICAgIHRoaXMuYmFzZVBhcmVudC5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICB9XG4gICAgdW5EaXNwbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZURpc3BsYXkgPSB0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5O1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSA9IHRoaXMuYmFzZURpc3BsYXk7XG4gICAgfVxuICAgIHVuVmlzaWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgIT09IFwiaGlkZGVuXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVZpc2liaWxpdHkgPSB0aGlzLmdldE1haW4oKS5zdHlsZS52aXNpYmlsaXR5O1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVWaXNpYmxlKCkge1xuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS52aXNpYmlsaXR5ID0gdGhpcy5iYXNlVmlzaWJpbGl0eTtcbiAgICB9XG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdGhpcy5iYXNlQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLmFwcGVuZENoaWxkKGNoaWxkLmdldE1haW4oKSk7XG4gICAgfVxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuYmFzZUNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlQ2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldE1haW4oKS5yZW1vdmVDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xuICAgIH1cbiAgICBjaGlsZHJlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUNoaWxkcmVuO1xuICAgIH1cbiAgICBjbGVhckNoaWxkcmVuKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuYmFzZUNoaWxkcmVuKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5yZW1vdmVDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFzZUNoaWxkcmVuID0gW107XG4gICAgfVxuICAgIGFkZEFjdGlvbihhY3Rpb24pIHtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuYXJtLmFkZEFjdGlvbih0aGlzLmdldE1haW4oKSwgYWN0aW9uKTtcbiAgICB9XG4gICAgcHV0QXNCb2R5KCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2V0TWFpbigpKTtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZUFzQm9keSh0aGlzLmdldE1haW4oKSk7XG4gICAgfVxuICAgIGRlbEFzQm9keSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmdldE1haW4oKSk7XG4gICAgfVxuICAgIHB1dEFzRWRpdCgpIHtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZUFzRWRpdCh0aGlzLmdldE1haW4oKSk7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnRhYkluZGV4ID0gMDtcbiAgICB9XG4gICAgcHV0QXNTY3JvbGwoKSB7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gICAgfVxuICAgIHB1dEFzRGlzYWJsZWRTZWxlY3Rpb24oKSB7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uZGlzYWJsZVNlbGVjdGlvbih0aGlzLmdldE1haW4oKSk7XG4gICAgfVxuICAgIHB1dEFzQ2VudGVyZWQoKSB7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5hbGlnbkNvbnRlbnQgPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjtcbiAgICB9XG4gICAgcHV0QXNEaXNwbGF5SW5saW5lQmxvY2soKSB7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIH1cbiAgICBwdXRBc0Rpc3BsYXlGbGV4KCkge1xuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuICAgIHB1dEFzRmxleE1pbigpIHtcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuZmxleCA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBwdXRBc0ZsZXhNYXgoKSB7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmZsZXggPSBcImF1dG9cIjtcbiAgICB9XG4gICAgcHV0QXNXaWR0aCh3aWR0aCkge1xuICAgICAgICBpZiAod2lkdGggIT0gbnVsbCAmJiB3aWR0aCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0QXNIZWlnaHQoaGVpZ2h0KSB7XG4gICAgICAgIGlmIChoZWlnaHQgIT0gbnVsbCAmJiBoZWlnaHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0QXNTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgaWYgKHdpZHRoICE9IG51bGwgJiYgd2lkdGggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgIT0gbnVsbCAmJiBoZWlnaHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0QXNNaW5XaWR0aCh3aWR0aCkge1xuICAgICAgICBpZiAod2lkdGggIT0gbnVsbCAmJiB3aWR0aCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLm1pbldpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0QXNNaW5IZWlnaHQoaGVpZ2h0KSB7XG4gICAgICAgIGlmIChoZWlnaHQgIT0gbnVsbCAmJiBoZWlnaHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5taW5IZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0QXNNaW5TaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgaWYgKHdpZHRoICE9IG51bGwgJiYgd2lkdGggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5taW5XaWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgIT0gbnVsbCAmJiBoZWlnaHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5taW5IZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0QXNNYXhXaWR0aCh3aWR0aCkge1xuICAgICAgICBpZiAod2lkdGggIT0gbnVsbCAmJiB3aWR0aCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLm1heFdpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0QXNNYXhIZWlnaHQoaGVpZ2h0KSB7XG4gICAgICAgIGlmIChoZWlnaHQgIT0gbnVsbCAmJiBoZWlnaHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5tYXhIZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0QXNNYXhTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgaWYgKHdpZHRoICE9IG51bGwgJiYgd2lkdGggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5tYXhXaWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgIT0gbnVsbCAmJiBoZWlnaHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5tYXhIZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHV0QXNGb3JlZ3JvdW5kKGZvcmVncm91bmQpIHtcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuY29sb3IgPSBmb3JlZ3JvdW5kO1xuICAgIH1cbiAgICBwdXRBc0JhY2tncm91bmQoYmFja2dyb3VuZCkge1xuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICB9XG59XG5leHBvcnRzLlFpbkJhc2UgPSBRaW5CYXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJhc2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkJvb2xlYW4gPSB2b2lkIDA7XG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xuY29uc3QgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xuY29uc3QgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XG5jbGFzcyBRaW5Cb29sZWFuIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XG4gICAgICAgIHRoaXMuX3FpblNwYW4gPSBuZXcgcWluX2xhYmVsXzEuUWluTGFiZWwoKTtcbiAgICAgICAgdGhpcy5fcWluSWNvbiA9IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDaXJjbGUpO1xuICAgICAgICB0aGlzLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3FpblNwYW4uaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcbiAgICAgICAgdGhpcy5fcWluSWNvbi5pbnN0YWxsKHRoaXMuX3FpblNwYW4pO1xuICAgICAgICB0aGlzLl9xaW5TcGFuLnB1dEFzRWRpdCgpO1xuICAgICAgICB0aGlzLl9xaW5TcGFuLnB1dEFzRGlzcGxheUZsZXgoKTtcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5wdXRBc0NlbnRlcmVkKCk7XG4gICAgICAgIHRoaXMuX3FpblNwYW4uYWRkQWN0aW9uKHFpbkV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gZGF0YTtcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgfVxuICAgIHVwZGF0ZUljb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uLmNoYW5nZShxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNvbmZpcm0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcWluSWNvbi5jaGFuZ2UocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDaXJjbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9ICF0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICB9XG59XG5leHBvcnRzLlFpbkJvb2xlYW4gPSBRaW5Cb29sZWFuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJvb2xlYW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkJ1dHRvbiA9IHZvaWQgMDtcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xuY2xhc3MgUWluQnV0dG9uIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2J1dHRvbk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9xaW5JY29uID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcWluTGFiZWwgPSBudWxsO1xuICAgICAgICBzdHlsZXMuYXBwbHlPbkJ1dHRvbih0aGlzLl9idXR0b25NYWluKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pY29uKSB7XG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uID0gb3B0aW9ucy5pY29uO1xuICAgICAgICAgICAgdGhpcy5fcWluSWNvbi5pbnN0YWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3FpbkxhYmVsID0gb3B0aW9ucy5sYWJlbDtcbiAgICAgICAgICAgIHRoaXMuX3FpbkxhYmVsLmluc3RhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1dHRvbk1haW47XG4gICAgfVxuICAgIGdldCBidXR0b25NYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnV0dG9uTWFpbjtcbiAgICB9XG4gICAgZ2V0IHFpbkljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5JY29uO1xuICAgIH1cbiAgICBnZXQgcWluTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5MYWJlbDtcbiAgICB9XG59XG5leHBvcnRzLlFpbkJ1dHRvbiA9IFFpbkJ1dHRvbjtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBhcHBseU9uQnV0dG9uOiAoZWwpID0+IHtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZUFzRWRpdChlbCk7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgIGVsLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYnV0dG9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5DaG9vc2VyID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xuY29uc3QgcWluX2V4cGxvcmVyXzEgPSByZXF1aXJlKFwiLi9xaW4tZXhwbG9yZXJcIik7XG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XG5jb25zdCBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xuY29uc3QgcWluX2NvbWJvXzEgPSByZXF1aXJlKFwiLi9xaW4tY29tYm9cIik7XG5jb25zdCBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xuY29uc3QgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xuY2xhc3MgUWluQ2hvb3NlciBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4oKTtcbiAgICAgICAgdGhpcy5fcWluVXBwZXIgPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0gPSBuZXcgcWluX2J1dHRvbl8xLlFpbkJ1dHRvbih7XG4gICAgICAgICAgICBpY29uOiBuZXcgcWluX2ljb25fMS5RaW5JY29uKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ29uZmlybSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3FpbkZvbGRlciA9IG5ldyBxaW5fc3RyaW5nXzEuUWluU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMgPSBuZXcgcWluX2NvbWJvXzEuUWluQ29tYm8oKTtcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oe1xuICAgICAgICAgICAgaWNvbjogbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZVNlYXJjaClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3FpblVuZGVyID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyID0gbmV3IHFpbl9leHBsb3Jlcl8xLlFpbkV4cGxvcmVyKCk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMuX25hdHVyZSA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubmF0dXJlKSA/IG9wdGlvbnMubmF0dXJlIDogcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkJPVEg7XG4gICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub3BlcmF0aW9uKSA/IG9wdGlvbnMub3BlcmF0aW9uIDogcWlucGVsX3Jlc18xLlFpbkZpbGVzT3BlcmF0aW9uLk9QRU47XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0b3JzID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZXNjcmlwdG9ycykgPyBvcHRpb25zLmRlc2NyaXB0b3JzIDogW107XG4gICAgICAgIHRoaXMuX3NpbmdsZVNlbGVjdGlvbiA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2luZ2xlU2VsZWN0aW9uKSA/IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24gOiBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0TWFpbigpO1xuICAgICAgICB0aGlzLmluaXRVcHBlcigpO1xuICAgICAgICB0aGlzLmluaXRVbmRlcigpO1xuICAgIH1cbiAgICBpbml0TWFpbigpIHtcbiAgICAgICAgdGhpcy5fcWluVXBwZXIuaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcbiAgICAgICAgdGhpcy5fcWluVW5kZXIuaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcbiAgICB9XG4gICAgaW5pdFVwcGVyKCkge1xuICAgICAgICB0aGlzLl9xaW5VcHBlci5wdXRBc0ZsZXhNaW4oKTtcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybS5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybS5hZGRBY3Rpb24ocWluRXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSgpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNob3NlbiBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgICAgICBjaG9zZW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHFpbkV2ZW50LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLnB1dEFzTWluV2lkdGgoMTAwKTtcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLnB1dEFzRmxleE1heCgpO1xuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuYWRkQWN0aW9uKHFpbkV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc0VudGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRm9sZGVyKCk7XG4gICAgICAgICAgICAgICAgcWluRXZlbnQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcbiAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5wdXRBc01pbldpZHRoKDEwMCk7XG4gICAgICAgIHRoaXMuaW5pdEV4dGVuc2lvbnMoKTtcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmluc3RhbGwodGhpcy5fcWluVXBwZXIpO1xuICAgICAgICB0aGlzLl9xaW5TZWFyY2guYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRm9sZGVyKCk7XG4gICAgICAgICAgICAgICAgcWluRXZlbnQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdFVuZGVyKCkge1xuICAgICAgICB0aGlzLl9xaW5VbmRlci5wdXRBc1Njcm9sbCgpO1xuICAgICAgICB0aGlzLl9xaW5VbmRlci5wdXRBc0ZsZXhNYXgoKTtcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuaW5zdGFsbCh0aGlzLl9xaW5VbmRlcik7XG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLm5hdHVyZSA9IHRoaXMuX25hdHVyZTtcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuc2luZ2xlU2VsZWN0aW9uID0gdGhpcy5fc2luZ2xlU2VsZWN0aW9uO1xuICAgIH1cbiAgICBpbml0RXh0ZW5zaW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Rlc2NyaXB0b3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zLmFkZEl0ZW0oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFsbCBGaWxlcyAoKi4qKVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIipcIixcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5leHRlbnNpb25zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fZGVzY3JpcHRvcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMuX2Rlc2NyaXB0b3JzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zLmFkZEl0ZW0oe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGVzY3JpcHRvci5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRlc2NyaXB0b3IuZXh0ZW5zaW9ucy5qb2luKFwiO1wiKSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGluZGV4ID09IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmV4dGVuc2lvbnMgPSB0aGlzLl9kZXNjcmlwdG9yc1swXS5leHRlbnNpb25zO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRGb2xkZXIoKSB7XG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmxvYWQodGhpcy5fcWluRm9sZGVyLmdldERhdGEoKSwgKGxvYWRlZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcWluRm9sZGVyLnNldERhdGEobG9hZGVkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkV4cGxvcmVyLmdldERhdGEoKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGFkZENob3NlbihjaG9zZW4pIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChjaG9zZW4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0IHFpbk1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xuICAgIH1cbiAgICBnZXQgcWluVXBwZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5VcHBlcjtcbiAgICB9XG4gICAgZ2V0IHFpbkNvbmZpcm0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5Db25maXJtO1xuICAgIH1cbiAgICBnZXQgcWluRm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluRm9sZGVyO1xuICAgIH1cbiAgICBnZXQgcWluRXh0ZW5zaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkV4dGVuc2lvbnM7XG4gICAgfVxuICAgIGdldCBxaW5TZWFyY2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5TZWFyY2g7XG4gICAgfVxuICAgIGdldCBxaW5VbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblVuZGVyO1xuICAgIH1cbiAgICBnZXQgcWluRXhwbG9yZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FeHBsb3JlcjtcbiAgICB9XG4gICAgZ2V0IG5hdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdHVyZTtcbiAgICB9XG4gICAgc2V0IG5hdHVyZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9uYXR1cmUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIubmF0dXJlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBvcGVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVyYXRpb247XG4gICAgfVxuICAgIHNldCBvcGVyYXRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdG9ycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0b3JzO1xuICAgIH1cbiAgICBzZXQgZGVzY3JpcHRvcnModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRvcnMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHNpbmdsZVNlbGVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbmdsZVNlbGVjdGlvbjtcbiAgICB9XG4gICAgc2V0IHNpbmdsZVNlbGVjdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5DaG9vc2VyID0gUWluQ2hvb3Nlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jaG9vc2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Db2x1bW4gPSB2b2lkIDA7XG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XG5jbGFzcyBRaW5Db2x1bW4gZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuaW5pdFBhbmVsKCk7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB2aWV3ZXIgb2Ygb3B0aW9ucy5pbml0aWFsKSB7XG4gICAgICAgICAgICAgICAgdmlld2VyLmluc3RhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdFBhbmVsKCkge1xuICAgICAgICBzdHlsZXMuYXBwbHlPblBhbmVsKHRoaXMuX2Rpdk1haW4pO1xuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGl2TWFpbjtcbiAgICB9XG4gICAgZ2V0IGRpdk1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXZNYWluO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluQ29sdW1uID0gUWluQ29sdW1uO1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIGFwcGx5T25QYW5lbDogKGVsKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICAgIGVsLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jb2x1bW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkNvbWJvID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jbGFzcyBRaW5Db21ibyBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zZWxlY3RNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZUFzRWRpdCh0aGlzLl9zZWxlY3RNYWluKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pdGVtcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBvcHRpb25zLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLnNlbGVjdGVkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0TWFpbjtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdE1haW4udmFsdWU7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RNYWluLnZhbHVlID0gZGF0YTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gaXRlbS50aXRsZTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQgIT0gdW5kZWZpbmVkICYmIGl0ZW0uc2VsZWN0ZWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gaXRlbS5zZWxlY3RlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZWxlY3RNYWluLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdE1haW47XG4gICAgfVxufVxuZXhwb3J0cy5RaW5Db21ibyA9IFFpbkNvbWJvO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWNvbWJvLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5FZGl0ID0gdm9pZCAwO1xuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xuY2xhc3MgUWluRWRpdCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XG59XG5leHBvcnRzLlFpbkVkaXQgPSBRaW5FZGl0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWVkaXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkV4cGxvcmVyID0gdm9pZCAwO1xuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcbmNsYXNzIFFpbkV4cGxvcmVyIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX3BhbmVsXzEuUWluUGFuZWwoKTtcbiAgICAgICAgdGhpcy5fZm9sZGVyQWN0dWFsID0gXCJcIjtcbiAgICAgICAgdGhpcy5fZm9sZGVyU2VydmVyID0gXCJcIjtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLl9uYXR1cmUgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSkgPyBvcHRpb25zLm5hdHVyZSA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIO1xuICAgICAgICB0aGlzLl9leHRlbnNpb25zID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5leHRlbnNpb25zKSA/IG9wdGlvbnMuZXh0ZW5zaW9ucyA6IFtdO1xuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpbmdsZVNlbGVjdGlvbilcbiAgICAgICAgICAgID8gb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb25cbiAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcbiAgICB9XG4gICAgaW5pdE1haW4oKSB7XG4gICAgICAgIHN0eWxlcy5hcHBseU9uTWFpbih0aGlzLl9xaW5NYWluLmRpdk1haW4pO1xuICAgICAgICB0aGlzLl9xaW5NYWluLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5TZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4ucHV0QXNEaXNhYmxlZFNlbGVjdGlvbigpO1xuICAgIH1cbiAgICB1cGRhdGVTaW5nbGVTZWxlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGxldCBhbHJlYWR5SGFzID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWxyZWFkeUhhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS51bnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUhhcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZGl2TWFpbjtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0UGF0aEpvaW4odGhpcy5fZm9sZGVyU2VydmVyLCBpdGVtLmdldE5hbWUoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY2xlYW4oKTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgZm9sZGVyUm9vdCA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0Um9vdChkYXRhWzBdKTtcbiAgICAgICAgICAgIHRoaXMubG9hZChmb2xkZXJSb290LCAoXykgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbVBhdGggb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJvb3QgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFJvb3QoaXRlbVBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFN0ZW0oaXRlbVBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVJvb3QgIT09IGZvbGRlclJvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucWlucGVsKCkuZnJhbWUuc3RhdHVzRXJyb3IoYFRoZSBpdGVtICcke2l0ZW1QYXRofScgaXMgbm90IG9uIHRoZSByb290ICcke2ZvbGRlclJvb3R9Jy5gLCBcIntxaW5wZWwtY3BzfShFcnJDb2RlLTAwMDAwMSlcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0KGl0ZW1OYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucWlucGVsKCkuZnJhbWUuc3RhdHVzRXJyb3IoYERvZXMgbm90IGhhdmUgdGhlIGl0ZW0gJyR7aXRlbU5hbWV9JyBvbiB0aGUgZm9sZGVyICcke2ZvbGRlclJvb3R9J2AsIFwie3FpbnBlbC1jcHN9KEVyckNvZGUtMDAwMDAyKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWQoZm9sZGVyLCBvbkxvYWQpIHtcbiAgICAgICAgdGhpcy5jbGVhbigpO1xuICAgICAgICB0aGlzLnFpbnBlbCgpXG4gICAgICAgICAgICAucG9zdChcIi9kaXIvbGlzdFwiLCB7IHBhdGg6IGZvbGRlciB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZm9sZGVyQWN0dWFsID0gZm9sZGVyO1xuICAgICAgICAgICAgZm9yIChsZXQgbGluZSBvZiBxaW5wZWxfcmVzXzEuUWluU291bC5ib2R5LmdldFRleHRMaW5lcyhyZXMuZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGluZVZhbHVlID0gbGluZS5zdWJzdHJpbmcoMyk7XG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJQOiBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9sZGVyU2VydmVyID0gbGluZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQobGluZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJEOiBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuQk9USCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5ESVJFQ1RPUklFUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdEaXIobGluZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJGOiBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuQk9USCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5GSUxFUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0RmlsZUV4dGVuc2lvbihsaW5lVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhc3NlZEV4dGVuc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZXh0ZW5zaW9ucyAmJiB0aGlzLl9leHRlbnNpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzZWRFeHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZEV4dGVuc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3RmlsZShsaW5lVmFsdWUsIGV4dGVuc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5xaW5wZWwoKS5mcmFtZS5zdGF0dXNFcnJvcihlcnIsIFwie3FpbnBlbC1jcHN9KEVyckNvZGUtMDAwMDAzKVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdvRm9sZGVyVXAob25Mb2FkKSB7XG4gICAgICAgIGxldCByb290ID0gcWlucGVsX3Jlc18xLlFpbkZvb3QuZ2V0Um9vdCh0aGlzLl9mb2xkZXJTZXJ2ZXIpO1xuICAgICAgICBpZiAocm9vdCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkKHJvb3QsIG9uTG9hZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYW4oKSB7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4uZGl2TWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuX2ZvbGRlckFjdHVhbCA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IFwiXCI7XG4gICAgfVxuICAgIGNsZWFuU2VsZWN0aW9uKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgaXRlbS51bnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdChpdGVtTmFtZSkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXMuZmluZCgoaW5zaWRlKSA9PiBpbnNpZGUuZ2V0TmFtZSgpID09IGl0ZW1OYW1lKTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uc2VsZWN0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bnNlbGVjdChpdGVtTmFtZSkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXMuZmluZCgoaW5zaWRlKSA9PiBpbnNpZGUuZ2V0TmFtZSgpID09IGl0ZW1OYW1lKTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0udW5zZWxlY3QoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5ld0RpcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmV3SXRlbShuYW1lLCBcImV4cGxvcmVyLWRpci5wbmdcIik7XG4gICAgfVxuICAgIG5ld0ZpbGUobmFtZSwgZXh0ZW5zaW9uKSB7XG4gICAgICAgIHRoaXMubmV3SXRlbShuYW1lLCBnZXRJY29uTmFtZShleHRlbnNpb24pKTtcbiAgICB9XG4gICAgbmV3SXRlbShuYW1lLCBpY29uKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbSh0aGlzLCBuYW1lLCBpY29uKTtcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMuX3Fpbk1haW4uZGl2TWFpbik7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgZ2V0IHFpbk1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xuICAgIH1cbiAgICBnZXQgbmF0dXJlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmF0dXJlO1xuICAgIH1cbiAgICBzZXQgbmF0dXJlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX25hdHVyZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZXh0ZW5zaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dGVuc2lvbnM7XG4gICAgfVxuICAgIHNldCBleHRlbnNpb25zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHNpbmdsZVNlbGVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbmdsZVNlbGVjdGlvbjtcbiAgICB9XG4gICAgc2V0IHNpbmdsZVNlbGVjdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTaW5nbGVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgZ2V0IGZvbGRlckFjdHVhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlckFjdHVhbDtcbiAgICB9XG4gICAgZ2V0IGZvbGRlclNlcnZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlclNlcnZlcjtcbiAgICB9XG59XG5leHBvcnRzLlFpbkV4cGxvcmVyID0gUWluRXhwbG9yZXI7XG5jbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihleHBsb3JlciwgZmlsZU5hbWUsIGljb25OYW1lKSB7XG4gICAgICAgIHRoaXMuZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnNwYW5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHRoaXMuaW1nSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHRoaXMuc3BhblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmV4cGxvcmVyID0gZXhwbG9yZXI7XG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcbiAgICAgICAgdGhpcy5pY29uTmFtZSA9IGljb25OYW1lO1xuICAgICAgICB0aGlzLmluaXRJdGVtKCk7XG4gICAgfVxuICAgIGluaXRJdGVtKCkge1xuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdkl0ZW0odGhpcy5kaXZJdGVtKTtcbiAgICAgICAgdGhpcy5kaXZJdGVtLnRhYkluZGV4ID0gMDtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZJdGVtQm9keSh0aGlzLmRpdkl0ZW1Cb2R5KTtcbiAgICAgICAgdGhpcy5kaXZJdGVtLmFwcGVuZENoaWxkKHRoaXMuZGl2SXRlbUJvZHkpO1xuICAgICAgICBzdHlsZXMuYXBwbHlPblNwYW5JY29uKHRoaXMuc3Bhbkljb24pO1xuICAgICAgICB0aGlzLmRpdkl0ZW1Cb2R5LmFwcGVuZENoaWxkKHRoaXMuc3Bhbkljb24pO1xuICAgICAgICB0aGlzLmltZ0ljb24uc3JjID0gXCIvYXBwL3FpbnBlbC1hcHAvYXNzZXRzL1wiICsgdGhpcy5pY29uTmFtZTtcbiAgICAgICAgdGhpcy5zcGFuSWNvbi5hcHBlbmRDaGlsZCh0aGlzLmltZ0ljb24pO1xuICAgICAgICB0aGlzLnNwYW5UZXh0LmlubmVyVGV4dCA9IHRoaXMuZmlsZU5hbWU7XG4gICAgICAgIHN0eWxlcy5hcHBseU9uU3BhblRleHQodGhpcy5zcGFuVGV4dCk7XG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zcGFuVGV4dCk7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmFybS5hZGRBY3Rpb24odGhpcy5kaXZJdGVtLCAocWluRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGl2SXRlbS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgcWluRXZlbnQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5zdGFsbChvbikge1xuICAgICAgICBvbi5hcHBlbmRDaGlsZCh0aGlzLmRpdkl0ZW0pO1xuICAgIH1cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIHN0eWxlcy5hcHBseU9uRGl2U2VsZWN0KHRoaXMuZGl2SXRlbSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICB1bnNlbGVjdCgpIHtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZVblNlbGVjdCh0aGlzLmRpdkl0ZW0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGxvcmVyLnNpbmdsZVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9yZXIuY2xlYW5TZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZU5hbWU7XG4gICAgfVxuICAgIGlzU2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldEljb25OYW1lKGZyb21FeHRlbnNpb24pIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJleHBsb3Jlci1maWxlLnBuZ1wiO1xuICAgIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUFwcChmcm9tRXh0ZW5zaW9uKSkge1xuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWFwcHMucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlQ21kKGZyb21FeHRlbnNpb24pKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItY21kcy5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVFeGVjKGZyb21FeHRlbnNpb24pKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItZXhlYy5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVJbWFnZShmcm9tRXh0ZW5zaW9uKSkge1xuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZVZlY3Rvcihmcm9tRXh0ZW5zaW9uKSkge1xuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZU11c2ljKGZyb21FeHRlbnNpb24pKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItbXVzaWMucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlTW92aWUoZnJvbUV4dGVuc2lvbikpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1tb3ZpZS5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVaaXBwZWQoZnJvbUV4dGVuc2lvbikpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci16aXBwZWQucG5nXCI7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgYXBwbHlPbk1haW46IChlbCkgPT4ge1xuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KGVsKTtcbiAgICAgICAgZWwuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbiAgICAgICAgZWwuc3R5bGUubWluV2lkdGggPSBcIjE2MHB4XCI7XG4gICAgICAgIGVsLnN0eWxlLm1pbkhlaWdodCA9IFwiMTYwcHhcIjtcbiAgICAgICAgZWwudGFiSW5kZXggPSAwO1xuICAgIH0sXG4gICAgYXBwbHlPbkRpdkl0ZW06IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjJweFwiO1xuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCI5cHhcIjtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMzNjAwNDVcIjtcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIzcHhcIjtcbiAgICAgICAgZWwuc3R5bGUuY29sb3IgPSBcIiMyNzAwMzZcIjtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNhZTAwMDBcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBlbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMzYwMDQ1XCI7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYXBwbHlPbkRpdkl0ZW1Cb2R5OiAoZWwpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBlbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgICAgZWwuc3R5bGUud2lkdGggPSBcIjEyMHB4XCI7XG4gICAgfSxcbiAgICBhcHBseU9uU3Bhbkljb246IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIH0sXG4gICAgYXBwbHlPblNwYW5UZXh0OiAoZWwpID0+IHtcbiAgICAgICAgZWwuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgZWwuc3R5bGUud29yZFdyYXAgPSBcImJyZWFrLXdvcmRcIjtcbiAgICB9LFxuICAgIGFwcGx5T25EaXZTZWxlY3Q6IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmYWVmZmZcIjtcbiAgICB9LFxuICAgIGFwcGx5T25EaXZVblNlbGVjdDogKGVsKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiO1xuICAgIH0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWV4cGxvcmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5GaWVsZCA9IHZvaWQgMDtcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcbmNvbnN0IHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XG5jb25zdCBxaW5fbGFiZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1sYWJlbFwiKTtcbmNsYXNzIFFpbkZpZWxkIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZWRpdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4oKTtcbiAgICAgICAgdGhpcy5fcWluTGFiZWwgPSBuZXcgcWluX2xhYmVsXzEuUWluTGFiZWwoKTtcbiAgICAgICAgdGhpcy5fcWluRWRpdCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3FpbkxhYmVsLnNldFRpdGxlKHRpdGxlKTtcbiAgICAgICAgdGhpcy5fcWluTGFiZWwuaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcbiAgICAgICAgdGhpcy5fcWluRWRpdCA9IGVkaXQ7XG4gICAgICAgIHRoaXMuX3FpbkVkaXQuaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcbiAgICAgICAgdGhpcy5fcWluTWFpbi5nZXRNYWluKCkuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjVweFwiO1xuICAgICAgICB0aGlzLl9xaW5NYWluLmdldE1haW4oKS5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjVweFwiO1xuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FZGl0LmdldERhdGEoKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX3FpbkVkaXQuc2V0RGF0YShkYXRhKTtcbiAgICB9XG4gICAgZ2V0IHFpbk1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xuICAgIH1cbiAgICBnZXQgcWluTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5MYWJlbDtcbiAgICB9XG4gICAgZ2V0IHFpbkVkaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FZGl0O1xuICAgIH1cbn1cbmV4cG9ydHMuUWluRmllbGQgPSBRaW5GaWVsZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1maWVsZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluSWNvbiA9IHZvaWQgMDtcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNsYXNzIFFpbkljb24gZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGFzc2V0LCBzaXplID0gcWlucGVsX3Jlc18xLlFpbkdyYW5kZXVyLlNNQUxMKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2ltZ01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICB0aGlzLl9pbWdNYWluLnNyYyA9ICgwLCBxaW5fYXNzZXRzXzEucWluQXNzZXRVcmwpKGFzc2V0KTtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZVNpemUodGhpcy5faW1nTWFpbiwgc2l6ZSk7XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbWdNYWluO1xuICAgIH1cbiAgICBjaGFuZ2UoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5faW1nTWFpbi5zcmMgPSAoMCwgcWluX2Fzc2V0c18xLnFpbkFzc2V0VXJsKShhc3NldCk7XG4gICAgfVxuICAgIGdldCBpbWdNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW1nTWFpbjtcbiAgICB9XG59XG5leHBvcnRzLlFpbkljb24gPSBRaW5JY29uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWljb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkludGVnZXIgPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcbmNsYXNzIFFpbkludGVnZXIgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faW5wdXRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLl9pbnB1dE1haW4udHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0VkaXQodGhpcy5faW5wdXRNYWluKTtcbiAgICAgICAgdGhpcy5faW5wdXRNYWluLnN0eWxlLndpZHRoID0gXCIxMjBweFwiO1xuICAgICAgICB0aGlzLl9pbnB1dE1haW4uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLmdldERhdGEoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dE1haW47XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5faW5wdXRNYWluLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSB1bmRlZmluZWQgfHwgdmFsdWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX2lucHV0TWFpbi52YWx1ZSwgMTApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSA9PSBudWxsIHx8IGRhdGEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dE1haW4udmFsdWUgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRNYWluLnZhbHVlID0gKGRhdGEgfCAwKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpbnB1dE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dE1haW47XG4gICAgfVxufVxuZXhwb3J0cy5RaW5JbnRlZ2VyID0gUWluSW50ZWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1pbnRlZ2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5MYWJlbCA9IHZvaWQgMDtcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcbmNsYXNzIFFpbkxhYmVsIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zcGFuTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwYW5NYWluLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwYW5NYWluO1xuICAgIH1cbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLl9zcGFuTWFpbi50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIH1cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwYW5NYWluLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBnZXQgc3Bhbk1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGFuTWFpbjtcbiAgICB9XG59XG5leHBvcnRzLlFpbkxhYmVsID0gUWluTGFiZWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tbGFiZWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkxpbmUgPSB2b2lkIDA7XG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XG5jbGFzcyBRaW5MaW5lIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Rpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmluaXRQYW5lbCgpO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgdmlld2VyIG9mIG9wdGlvbnMuaW5pdGlhbCkge1xuICAgICAgICAgICAgICAgIHZpZXdlci5pbnN0YWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGluaXRQYW5lbCgpIHtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25QYW5lbCh0aGlzLl9kaXZNYWluKTtcbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpdk1haW47XG4gICAgfVxuICAgIGdldCBkaXZNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGl2TWFpbjtcbiAgICB9XG59XG5leHBvcnRzLlFpbkxpbmUgPSBRaW5MaW5lO1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIGFwcGx5T25QYW5lbDogKGVsKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgIGVsLnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1saW5lLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5NdXRhbnRzQXJtID0gZXhwb3J0cy5RaW5NdXRhbnRzID0gdm9pZCAwO1xuY29uc3QgcWluX2Jvb2xlYW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib29sZWFuXCIpO1xuY29uc3QgcWluX2Nob29zZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1jaG9vc2VyXCIpO1xuY29uc3QgcWluX2NvbWJvXzEgPSByZXF1aXJlKFwiLi9xaW4tY29tYm9cIik7XG5jb25zdCBxaW5fZXhwbG9yZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1leHBsb3JlclwiKTtcbmNvbnN0IHFpbl9pbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9xaW4taW50ZWdlclwiKTtcbmNvbnN0IHFpbl9wYXRoXzEgPSByZXF1aXJlKFwiLi9xaW4tcGF0aFwiKTtcbmNvbnN0IHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XG52YXIgUWluTXV0YW50cztcbihmdW5jdGlvbiAoUWluTXV0YW50cykge1xuICAgIFFpbk11dGFudHNbXCJCT09MRUFOXCJdID0gXCJib29sZWFuXCI7XG4gICAgUWluTXV0YW50c1tcIkNIT09TRVJcIl0gPSBcImNob29zZXJcIjtcbiAgICBRaW5NdXRhbnRzW1wiQ09NQk9cIl0gPSBcImNvbWJvXCI7XG4gICAgUWluTXV0YW50c1tcIkVYUExPUkVSXCJdID0gXCJleHBsb3JlclwiO1xuICAgIFFpbk11dGFudHNbXCJJTlRFR0VSXCJdID0gXCJpbnRlZ2VyXCI7XG4gICAgUWluTXV0YW50c1tcIlBBVEhcIl0gPSBcInBhdGhcIjtcbiAgICBRaW5NdXRhbnRzW1wiU1RSSU5HXCJdID0gXCJzdHJpbmdcIjtcbn0pKFFpbk11dGFudHMgPSBleHBvcnRzLlFpbk11dGFudHMgfHwgKGV4cG9ydHMuUWluTXV0YW50cyA9IHt9KSk7XG5mdW5jdGlvbiBuZXdFZGl0KGtpbmQsIG9wdGlvbnMpIHtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkJPT0xFQU46XG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9ib29sZWFuXzEuUWluQm9vbGVhbihvcHRpb25zKTtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkNIT09TRVI6XG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9jaG9vc2VyXzEuUWluQ2hvb3NlcihvcHRpb25zKTtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkNPTUJPOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fY29tYm9fMS5RaW5Db21ibyhvcHRpb25zKTtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkVYUExPUkVSOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fZXhwbG9yZXJfMS5RaW5FeHBsb3JlcihvcHRpb25zKTtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLklOVEVHRVI6XG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9pbnRlZ2VyXzEuUWluSW50ZWdlcihvcHRpb25zKTtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLlBBVEg6XG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9wYXRoXzEuUWluUGF0aChvcHRpb25zKTtcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLlNUUklORzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX3N0cmluZ18xLlFpblN0cmluZyhvcHRpb25zKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24ga2luZCBvZiBtdXRhbnQgdG8gY3JlYXRlLlwiKTtcbiAgICB9XG59XG5leHBvcnRzLlFpbk11dGFudHNBcm0gPSB7XG4gICAgbmV3RWRpdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1tdXRhbnRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5QYW5lbCA9IHZvaWQgMDtcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcbmNsYXNzIFFpblBhbmVsIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXZNYWluO1xuICAgIH1cbiAgICBnZXQgZGl2TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpdk1haW47XG4gICAgfVxufVxuZXhwb3J0cy5RaW5QYW5lbCA9IFFpblBhbmVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXBhbmVsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5QYXRoID0gdm9pZCAwO1xuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XG5jb25zdCBxaW5fY2hvb3Nlcl8xID0gcmVxdWlyZShcIi4vcWluLWNob29zZXJcIik7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jb25zdCBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XG5jb25zdCBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xuY2xhc3MgUWluUGF0aCBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xuICAgICAgICB0aGlzLl9xaW5QYXRoID0gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oe1xuICAgICAgICAgICAgaWNvbjogbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUZvbGRlcilcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3FpbkNob29zZXIgPSBuZXcgcWluX2Nob29zZXJfMS5RaW5DaG9vc2VyKHtcbiAgICAgICAgICAgIG5hdHVyZTogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSxcbiAgICAgICAgICAgIG9wZXJhdGlvbjogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wZXJhdGlvbixcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZGVzY3JpcHRvcnMsXG4gICAgICAgICAgICBzaW5nbGVTZWxlY3Rpb246IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3FpblBvcHVwID0gdGhpcy5xaW5wZWwoKS5mcmFtZS5uZXdQb3B1cCh0aGlzLl9xaW5DaG9vc2VyLmdldE1haW4oKSk7XG4gICAgICAgIHRoaXMuX3FpblBhdGguaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5Qb3B1cC5zaG93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBwZXJIZWlnaHQgPSB0aGlzLl9xaW5DaG9vc2VyLnFpblVwcGVyLmdldE1haW4oKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwbG9yZXJNYXhIZWlnaHQgPSB0aGlzLl9xaW5Qb3B1cC5tYXhIZWlnaHQgLSAodXBwZXJIZWlnaHQgKyAxMik7XG4gICAgICAgICAgICAgICAgdGhpcy5fcWluQ2hvb3Nlci5xaW5FeHBsb3Jlci5wdXRBc01heEhlaWdodChleHBsb3Jlck1heEhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9xaW5DaG9vc2VyLmFkZENob3NlbihjaG9zZW4gPT4ge1xuICAgICAgICAgICAgaWYgKGNob3NlbiAmJiBjaG9zZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3FpblBhdGguc2V0RGF0YShjaG9zZW5bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcWluUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluUGF0aC5nZXREYXRhKCk7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9xaW5QYXRoLnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldCBxaW5NYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbjtcbiAgICB9XG4gICAgZ2V0IHFpblBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5QYXRoO1xuICAgIH1cbiAgICBnZXQgcWluU2VhcmNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluU2VhcmNoO1xuICAgIH1cbiAgICBnZXQgcWluQ2hvb3NlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkNob29zZXI7XG4gICAgfVxuICAgIGdldCBxaW5Qb3B1cCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBvcHVwO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluUGF0aCA9IFFpblBhdGg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluU3RyaW5nID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jbGFzcyBRaW5TdHJpbmcgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faW5wdXRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLl9pbnB1dE1haW4udHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm1heExlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRNYWluLm1heExlbmd0aCA9IG9wdGlvbnMubWF4TGVuZ3RoO1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gTWF0aC5taW4oTWF0aC5tYXgob3B0aW9ucy5tYXhMZW5ndGggLSAxMCwgMCksIDkwKTtcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IE1hdGguZmxvb3IoOTAgKyAocG9zaXRpb24gKiA3IC8gMykpO1xuICAgICAgICAgICAgdGhpcy5faW5wdXRNYWluLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZUFzRWRpdCh0aGlzLl9pbnB1dE1haW4pO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dE1haW47XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dE1haW4udmFsdWU7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9pbnB1dE1haW4udmFsdWUgPSBkYXRhO1xuICAgIH1cbiAgICBpbnNlcnRBdEN1cnNvcihkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy5faW5wdXRNYWluLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICBsZXQgZW5kUG9zID0gdGhpcy5faW5wdXRNYWluLnNlbGVjdGlvbkVuZDtcbiAgICAgICAgbGV0IG9sZFZhbCA9IHRoaXMuX2lucHV0TWFpbi52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1ZhbCA9IChzdGFydFBvcyA+IDAgPyBvbGRWYWwuc3Vic3RyaW5nKDAsIHN0YXJ0UG9zKSA6IFwiXCIpICsgZGF0YVxuICAgICAgICAgICAgKyAoZW5kUG9zIDwgb2xkVmFsLmxlbmd0aCA/IG9sZFZhbC5zdWJzdHJpbmcoZW5kUG9zKSA6IFwiXCIpO1xuICAgICAgICB0aGlzLl9pbnB1dE1haW4udmFsdWUgPSBuZXdWYWw7XG4gICAgICAgIHRoaXMuX2lucHV0TWFpbi5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0UG9zO1xuICAgICAgICB0aGlzLl9pbnB1dE1haW4uc2VsZWN0aW9uRW5kID0gc3RhcnRQb3MgKyBkYXRhLmxlbmd0aDtcbiAgICB9XG4gICAgZ2V0IGlucHV0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0TWFpbjtcbiAgICB9XG59XG5leHBvcnRzLlFpblN0cmluZyA9IFFpblN0cmluZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1zdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpblRhYnMgPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xuY29uc3QgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcbmNsYXNzIFFpblRhYnMgZXh0ZW5kcyBxaW5fY29sdW1uXzEuUWluQ29sdW1uIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3FpblRhYnMgPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XG4gICAgICAgIHRoaXMuX3FpblBhbmVsID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XG4gICAgICAgIHRoaXMudGFicyA9IFtdO1xuICAgICAgICB0aGlzLl9xaW5UYWJzLmluc3RhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuX3FpblBhbmVsLmluc3RhbGwodGhpcyk7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0YWIgb2Ygb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRhYih0YWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZFRhYih0YWIpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oeyBsYWJlbDogbmV3IHFpbl9sYWJlbF8xLlFpbkxhYmVsKHRhYi50aXRsZSkgfSk7XG4gICAgICAgIGJ1dHRvbi5wdXRBc0JhY2tncm91bmQocWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9ySW5hY3RpdmUpO1xuICAgICAgICBidXR0b24uYWRkQWN0aW9uKHFpbkV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZXdlcih0YWIudmlld2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJ1dHRvbi5pbnN0YWxsKHRoaXMuX3FpblRhYnMpO1xuICAgICAgICBsZXQgZmlyc3QgPSB0aGlzLnRhYnMubGVuZ3RoID09IDA7XG4gICAgICAgIGxldCB0YWJSZWYgPSB7XG4gICAgICAgICAgICB0aXRsZTogdGFiLnRpdGxlLFxuICAgICAgICAgICAgdmlld2VyOiB0YWIudmlld2VyLFxuICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudGFicy5wdXNoKHRhYlJlZik7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgdGhpcy5zaG93Vmlld2VyKHRhYi52aWV3ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dUYWIodGl0bGUpIHtcbiAgICAgICAgZm9yIChjb25zdCB0YWIgb2YgdGhpcy50YWJzKSB7XG4gICAgICAgICAgICBpZiAodGFiLnRpdGxlID09IHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Vmlld2VyKHRhYi52aWV3ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dWaWV3ZXIodmlld2VyKSB7XG4gICAgICAgIHRoaXMuX3FpblBhbmVsLmNsZWFyQ2hpbGRyZW4oKTtcbiAgICAgICAgdmlld2VyLmluc3RhbGwodGhpcy5fcWluUGFuZWwpO1xuICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiB0aGlzLnRhYnMpIHtcbiAgICAgICAgICAgIGlmICh0YWIudmlld2VyID09IHZpZXdlcikge1xuICAgICAgICAgICAgICAgIHRhYi5idXR0b24ucHV0QXNCYWNrZ3JvdW5kKHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YWIuYnV0dG9uLnB1dEFzQmFja2dyb3VuZChxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JJbmFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHFpblRhYnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5UYWJzO1xuICAgIH1cbiAgICBnZXQgcWluUGFuZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5QYW5lbDtcbiAgICB9XG59XG5leHBvcnRzLlFpblRhYnMgPSBRaW5UYWJzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXRhYnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpblRvb2xzID0gdm9pZCAwO1xuY29uc3QgcmVmUWlucGVsID0gd2luZG93LmZyYW1lRWxlbWVudC5xaW5wZWw7XG5mdW5jdGlvbiBxaW5wZWwoKSB7XG4gICAgcmV0dXJuIHJlZlFpbnBlbDtcbn1cbmV4cG9ydHMuUWluVG9vbHMgPSB7XG4gICAgcWlucGVsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXRvb2xzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Gb290ID0gZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc05hdHVyZSA9IGV4cG9ydHMuUWluQXJtID0gZXhwb3J0cy5RaW5EcmFnQ2FsbHMgPSBleHBvcnRzLlFpbldhaXRlcnMgPSBleHBvcnRzLlFpbkV2ZW50ID0gZXhwb3J0cy5RaW5Tb3VsID0gZXhwb3J0cy5RaW5Cb2R5ID0gZXhwb3J0cy5RaW5IZWFkID0gZXhwb3J0cy5RaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluQm91bmRzID0gZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBleHBvcnRzLlFpblBvaW50ID0gZXhwb3J0cy5RaW5Ta2luID0gZXhwb3J0cy5RaW5TdHlsZXMgPSB2b2lkIDA7XG52YXIgcWluX3NraW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU3R5bGVzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc2tpbl8xLlFpblN0eWxlczsgfSB9KTtcbnZhciBxaW5fc2tpbl8yID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Ta2luXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc2tpbl8yLlFpblNraW47IH0gfSk7XG52YXIgcWluX2hlYWRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUG9pbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzEuUWluUG9pbnQ7IH0gfSk7XG52YXIgcWluX2hlYWRfMiA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRGltZW5zaW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF8yLlFpbkRpbWVuc2lvbjsgfSB9KTtcbnZhciBxaW5faGVhZF8zID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Cb3VuZHNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzMuUWluQm91bmRzOyB9IH0pO1xudmFyIHFpbl9oZWFkXzQgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkdyYW5kZXVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF80LlFpbkdyYW5kZXVyOyB9IH0pO1xudmFyIHFpbl9oZWFkXzUgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkhlYWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzUuUWluSGVhZDsgfSB9KTtcbnZhciBxaW5fYm9keV8xID0gcmVxdWlyZShcIi4vcWluLWJvZHlcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Cb2R5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYm9keV8xLlFpbkJvZHk7IH0gfSk7XG52YXIgcWluX3NvdWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zb3VsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU291bFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NvdWxfMS5RaW5Tb3VsOyB9IH0pO1xudmFyIHFpbl9hcm1fMSA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5FdmVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV8xLlFpbkV2ZW50OyB9IH0pO1xudmFyIHFpbl9hcm1fMiA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5XYWl0ZXJzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzIuUWluV2FpdGVyczsgfSB9KTtcbnZhciBxaW5fYXJtXzMgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRHJhZ0NhbGxzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzMuUWluRHJhZ0NhbGxzOyB9IH0pO1xudmFyIHFpbl9hcm1fNCA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Bcm1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1fNC5RaW5Bcm07IH0gfSk7XG52YXIgcWluX2Zvb3RfMSA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZXNOYXR1cmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzEuUWluRmlsZXNOYXR1cmU7IH0gfSk7XG52YXIgcWluX2Zvb3RfMiA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZXNPcGVyYXRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzIuUWluRmlsZXNPcGVyYXRpb247IH0gfSk7XG52YXIgcWluX2Zvb3RfMyA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZXNEZXNjcmlwdG9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF8zLlFpbkZpbGVzRGVzY3JpcHRvcjsgfSB9KTtcbnZhciBxaW5fZm9vdF80ID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Gb290XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF80LlFpbkZvb3Q7IH0gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkFybSA9IGV4cG9ydHMuUWluRHJhZ0NhbGxzID0gZXhwb3J0cy5RaW5XYWl0ZXJzID0gZXhwb3J0cy5RaW5FdmVudCA9IHZvaWQgMDtcbmNvbnN0IHFpbl9za2luXzEgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcbmNsYXNzIFFpbkV2ZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5mcm9tT3JpZ2luID0gbnVsbDtcbiAgICAgICAgdGhpcy5mcm9tVHlwaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJvbVBvaW50aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzQWx0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzQ3RybCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc1NoaWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzTWV0YSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRW50ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0VzY2FwZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3BhY2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RvdWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTG9uZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmtleVR5cGVkID0gXCJcIjtcbiAgICAgICAgdGhpcy5wb2ludE9uWCA9IC0xO1xuICAgICAgICB0aGlzLnBvaW50T25ZID0gLTE7XG4gICAgICAgIHRoaXMuaXNGaXJzdEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTWlkZGxlQnV0dG9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTZWNvbmRCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc09uZUZpbmdlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVHdvRmluZ2VycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVGhyZWVGaW5nZXJzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RvcEV2ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHNldEZyb21LZXlib2FyZChldikge1xuICAgICAgICB0aGlzLmZyb21PcmlnaW4gPSBldi50YXJnZXQ7XG4gICAgICAgIHRoaXMuZnJvbVR5cGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFzQWx0ID0gZXYuYWx0S2V5O1xuICAgICAgICB0aGlzLmhhc0N0cmwgPSBldi5jdHJsS2V5O1xuICAgICAgICB0aGlzLmhhc1NoaWZ0ID0gZXYuc2hpZnRLZXk7XG4gICAgICAgIHRoaXMuaGFzTWV0YSA9IGV2Lm1ldGFLZXk7XG4gICAgICAgIHRoaXMuaXNFbnRlciA9IGlzS2V5RW50ZXIoZXYpO1xuICAgICAgICB0aGlzLmlzRXNjYXBlID0gaXNLZXlFc2NhcGUoZXYpO1xuICAgICAgICB0aGlzLmlzU3BhY2UgPSBpc0tleVNwYWNlKGV2KTtcbiAgICAgICAgdGhpcy5rZXlUeXBlZCA9IGV2LmtleTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldEZyb21Nb3VzZShldikge1xuICAgICAgICB0aGlzLmZyb21PcmlnaW4gPSBldi50YXJnZXQ7XG4gICAgICAgIHRoaXMuZnJvbVBvaW50aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYXNBbHQgPSBldi5hbHRLZXk7XG4gICAgICAgIHRoaXMuaGFzQ3RybCA9IGV2LmN0cmxLZXk7XG4gICAgICAgIHRoaXMuaGFzU2hpZnQgPSBldi5zaGlmdEtleTtcbiAgICAgICAgdGhpcy5oYXNNZXRhID0gZXYubWV0YUtleTtcbiAgICAgICAgdGhpcy5wb2ludE9uWCA9IGV2LmNsaWVudFg7XG4gICAgICAgIHRoaXMucG9pbnRPblkgPSBldi5jbGllbnRZO1xuICAgICAgICB0aGlzLmlzRmlyc3RCdXR0b24gPSBldi5idXR0b24gPT0gMDtcbiAgICAgICAgdGhpcy5pc01pZGRsZUJ1dHRvbiA9IGV2LmJ1dHRvbiA9PSAxO1xuICAgICAgICB0aGlzLmlzU2Vjb25kQnV0dG9uID0gZXYuYnV0dG9uID09IDI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXRGcm9tVG91Y2goZXYpIHtcbiAgICAgICAgdGhpcy5mcm9tT3JpZ2luID0gZXYudGFyZ2V0O1xuICAgICAgICB0aGlzLmZyb21Qb2ludGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFzQWx0ID0gZXYuYWx0S2V5O1xuICAgICAgICB0aGlzLmhhc0N0cmwgPSBldi5jdHJsS2V5O1xuICAgICAgICB0aGlzLmhhc1NoaWZ0ID0gZXYuc2hpZnRLZXk7XG4gICAgICAgIHRoaXMuaGFzTWV0YSA9IGV2Lm1ldGFLZXk7XG4gICAgICAgIGlmIChldi50b3VjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChldi50b3VjaGVzLmxlbmd0aCAvIDIpIHwgMDtcbiAgICAgICAgICAgIHRoaXMucG9pbnRPblggPSBldi50b3VjaGVzW2luZGV4XS5jbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5wb2ludE9uWSA9IGV2LnRvdWNoZXNbaW5kZXhdLmNsaWVudFk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09uZUZpbmdlciA9IGV2LnRvdWNoZXMubGVuZ3RoID09IDE7XG4gICAgICAgIHRoaXMuaXNUd29GaW5nZXJzID0gZXYudG91Y2hlcy5sZW5ndGggPT0gMjtcbiAgICAgICAgdGhpcy5pc1RocmVlRmluZ2VycyA9IGV2LnRvdWNoZXMubGVuZ3RoID09IDM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnN0b3BFdmVudCA9IHRydWU7XG4gICAgfVxuICAgIGlzUHJpbWFyeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJvbVR5cGluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNFbnRlciB8fCB0aGlzLmlzU3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5mcm9tUG9pbnRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRmlyc3RCdXR0b24gfHwgdGhpcy5pc09uZUZpbmdlcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlzQXV4aWxpYXJ5KCkge1xuICAgICAgICBpZiAodGhpcy5mcm9tVHlwaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYXNDdHJsICYmIHRoaXMuaGFzQWx0ICYmIHRoaXMuaXNTcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmZyb21Qb2ludGluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNNaWRkbGVCdXR0b24gfHwgdGhpcy5pc1RocmVlRmluZ2VycztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlzU2Vjb25kYXJ5KCkge1xuICAgICAgICBpZiAodGhpcy5mcm9tVHlwaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYXNDdHJsICYmICF0aGlzLmhhc0FsdCAmJiB0aGlzLmlzU3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5mcm9tUG9pbnRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzU2Vjb25kQnV0dG9uIHx8IHRoaXMuaXNUd29GaW5nZXJzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnRzLlFpbkV2ZW50ID0gUWluRXZlbnQ7XG47XG5jbGFzcyBRaW5XYWl0ZXJzIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsKSB7XG4gICAgICAgIHRoaXMud2FpdGVycyA9IGluaXRpYWwgPyBpbml0aWFsIDogW107XG4gICAgfVxuICAgIGFkZFdhaXRlcih3YWl0ZXIpIHtcbiAgICAgICAgdGhpcy53YWl0ZXJzLnB1c2god2FpdGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGhhc1dhaXRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdGVycy5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBzZW5kV2FpdGVycyhyZXN1bHQpIHtcbiAgICAgICAgZm9yIChjb25zdCB3YWl0ZXIgb2YgdGhpcy53YWl0ZXJzKSB7XG4gICAgICAgICAgICB3YWl0ZXIocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUWluV2FpdGVycyA9IFFpbldhaXRlcnM7XG5jbGFzcyBRaW5EcmFnQ2FsbHMge1xufVxuZXhwb3J0cy5RaW5EcmFnQ2FsbHMgPSBRaW5EcmFnQ2FsbHM7XG5mdW5jdGlvbiBzdG9wRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG52YXIgbGFzdEV2ZW50UG9pbnRlciA9IG51bGw7XG5mdW5jdGlvbiBtYWtlRXZlbnRQb2ludGVyKGlzRG93biwgZXYpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIHBvc1g6IDAsXG4gICAgICAgIHBvc1k6IDAsXG4gICAgfTtcbiAgICBpZiAoZXYgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmIChldi5jbGllbnRYIHx8IGV2LmNsaWVudFkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wb3NYID0gZXYuY2xpZW50WDtcbiAgICAgICAgICAgIHJlc3VsdC5wb3NZID0gZXYuY2xpZW50WTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldiBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMgJiZcbiAgICAgICAgICAgIGV2LnRvdWNoZXNbMF0gJiZcbiAgICAgICAgICAgIChldi50b3VjaGVzWzBdLmNsaWVudFggfHwgZXYudG91Y2hlc1swXS5jbGllbnRZKSkge1xuICAgICAgICAgICAgcmVzdWx0LnBvc1ggPSBldi50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICByZXN1bHQucG9zWSA9IGV2LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNEb3duKSB7XG4gICAgICAgIGxhc3RFdmVudFBvaW50ZXIgPSBldjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGlzRXZlbnRQb2ludGVyRG91YmxlKGlzRG93biwgZXYpIHtcbiAgICBpZiAoIWlzRG93biB8fCBsYXN0RXZlbnRQb2ludGVyID09IG51bGwgfHwgZXYgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHRpbWVEaWYgPSBldi50aW1lU3RhbXAgLSBsYXN0RXZlbnRQb2ludGVyLnRpbWVTdGFtcDtcbiAgICByZXR1cm4gdGltZURpZiA8IDQ1MDtcbn1cbmZ1bmN0aW9uIGlzRXZlbnRQb2ludGVyTG9uZyhpc0Rvd24sIGV2KSB7XG4gICAgaWYgKCFpc0Rvd24gfHwgbGFzdEV2ZW50UG9pbnRlciA9PSBudWxsIHx8IGV2ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB0aW1lRGlmID0gZXYudGltZVN0YW1wIC0gbGFzdEV2ZW50UG9pbnRlci50aW1lU3RhbXA7XG4gICAgcmV0dXJuIHRpbWVEaWYgPiA4NDA7XG59XG5mdW5jdGlvbiBpc0tleUluTGlzdChldiwgbGlzdCkge1xuICAgIGxldCBrZXlMb3dlciA9IGV2LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBsaXN0LmluZGV4T2Yoa2V5TG93ZXIpID4gLTE7XG59XG5mdW5jdGlvbiBpc0tleUVudGVyKGV2KSB7XG4gICAgcmV0dXJuIGlzS2V5SW5MaXN0KGV2LCBbXCJlbnRlclwiLCBcInJldHVyblwiXSkgfHwgZXYua2V5Q29kZSA9PT0gMTM7XG59XG5mdW5jdGlvbiBpc0tleUVzY2FwZShldikge1xuICAgIHJldHVybiBpc0tleUluTGlzdChldiwgW1wiZXNjXCIsIFwiZXNjYXBlXCJdKSB8fCBldi5rZXlDb2RlID09PSAyNztcbn1cbmZ1bmN0aW9uIGlzS2V5U3BhY2UoZXYpIHtcbiAgICByZXR1cm4gaXNLZXlJbkxpc3QoZXYsIFtcIiBcIiwgXCJzcGFjZVwiLCBcInNwYWNlYmFyXCJdKSB8fCBldi5rZXlDb2RlID09PSAzMjtcbn1cbmZ1bmN0aW9uIGFkZEFjdGlvbihlbGVtZW50LCBhY3Rpb24pIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHN0b3BFdmVudCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgYWN0aW9uS2V5Ym9hcmQpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdG9wRXZlbnQpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgYWN0aW9uTW91c2UpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgc3RvcEV2ZW50KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBhY3Rpb25Ub3VjaCk7XG4gICAgZnVuY3Rpb24gYWN0aW9uS2V5Ym9hcmQoZXYpIHtcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KCkuc2V0RnJvbUtleWJvYXJkKGV2KTtcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3BFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhY3Rpb25Nb3VzZShldikge1xuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQoKS5zZXRGcm9tTW91c2UoZXYpO1xuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xuICAgICAgICBpZiAocWluRXZlbnQuc3RvcEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdGlvblRvdWNoKGV2KSB7XG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudCgpLnNldEZyb21Ub3VjaChldik7XG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhZGRBY3Rpb25FbnRlcihlbGVtZW50LCBhY3Rpb24pIHtcbiAgICBlbGVtZW50Lm9ua2V5ZG93biA9IGFjdGlvbktleWJvYXJkO1xuICAgIGZ1bmN0aW9uIGFjdGlvbktleWJvYXJkKGV2KSB7XG4gICAgICAgIGlmIChpc0tleUVudGVyKGV2KSkge1xuICAgICAgICAgICAgYWN0aW9uKG5ldyBRaW5FdmVudCgpLnNldEZyb21LZXlib2FyZChldikpO1xuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwdXRBY3Rpb25Qcm94eShkZXN0aW55LCBvcmlnaW5zKSB7XG4gICAgZm9yIChjb25zdCBvcmlnaW4gb2Ygb3JpZ2lucykge1xuICAgICAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuICAgICAgICAgICAgZGVzdGlueS5vbmtleWRvd24oZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZSA9PiB7XG4gICAgICAgICAgICBkZXN0aW55Lm9ubW91c2V1cChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZSA9PiB7XG4gICAgICAgICAgICBkZXN0aW55Lm9udG91Y2hlbmQoZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZE1vdmVyKHNvdXJjZXMsIHRhcmdldCwgZHJhZ0NhbGxzKSB7XG4gICAgdmFyIGRyYWdJbml0RXZlbnRYID0gMDtcbiAgICB2YXIgZHJhZ0luaXRFdmVudFkgPSAwO1xuICAgIHZhciBkcmFnSW5pdFBvc1ggPSAwO1xuICAgIHZhciBkcmFnSW5pdFBvc1kgPSAwO1xuICAgIGZvciAobGV0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgIHNvdXJjZS5vbm1vdXNlZG93biA9IG9uTW92ZXJJbml0O1xuICAgICAgICBzb3VyY2Uub250b3VjaHN0YXJ0ID0gb25Nb3ZlckluaXQ7XG4gICAgICAgIHNvdXJjZS5vbmRyYWdzdGFydCA9IHN0b3BFdmVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3ZlckluaXQoZXYpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudFBvaW50ZXJEb3VibGUodHJ1ZSwgZXYpKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudFBvaW50ZXJMb25nKHRydWUsIGV2KSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKHRydWUsIGV2KTtcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XG4gICAgICAgIGRyYWdJbml0RXZlbnRZID0gcG9pbnRlci5wb3NZO1xuICAgICAgICBkcmFnSW5pdFBvc1ggPSBwYXJzZUludCh0YXJnZXQuc3R5bGUubGVmdCwgMTApO1xuICAgICAgICBkcmFnSW5pdFBvc1kgPSBwYXJzZUludCh0YXJnZXQuc3R5bGUudG9wLCAxMCk7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25Nb3Zlck1vdmU7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25Nb3Zlck1vdmU7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvbk1vdmVyQ2xvc2U7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uTW92ZXJDbG9zZTtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW92ZXJNb3ZlKGV2KSB7XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKGZhbHNlLCBldik7XG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xuICAgICAgICB2YXIgZHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdEV2ZW50WTtcbiAgICAgICAgdmFyIGRyYWdGaW5hbFggPSBkcmFnSW5pdFBvc1ggKyBkcmFnRGlmWDtcbiAgICAgICAgdmFyIGRyYWdGaW5hbFkgPSBkcmFnSW5pdFBvc1kgKyBkcmFnRGlmWTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSAoZHJhZ0ZpbmFsWCA+IDAgPyBkcmFnRmluYWxYIDogMCkgKyBcInB4XCI7XG4gICAgICAgIHRhcmdldC5zdHlsZS50b3AgPSAoZHJhZ0ZpbmFsWSA+IDAgPyBkcmFnRmluYWxZIDogMCkgKyBcInB4XCI7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdmVyQ2xvc2UoZXYpIHtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uc2hvd0FsbElGcmFtZXMoKTtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25FbmQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRSZXNpemVyKHNvdXJjZXMsIHRhcmdldCwgZHJhZ0NhbGxzKSB7XG4gICAgdmFyIGRyYWdJbml0RXZlbnRYID0gMDtcbiAgICB2YXIgZHJhZ0luaXRFdmVudFkgPSAwO1xuICAgIHZhciBkcmFnSW5pdFdpZHRoID0gMDtcbiAgICB2YXIgZHJhZ0luaXRIZWlnaHQgPSAwO1xuICAgIGZvciAobGV0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgIHNvdXJjZS5vbm1vdXNlZG93biA9IG9uUmVzaXplckluaXQ7XG4gICAgICAgIHNvdXJjZS5vbnRvdWNoc3RhcnQgPSBvblJlc2l6ZXJJbml0O1xuICAgICAgICBzb3VyY2Uub25kcmFnc3RhcnQgPSBzdG9wRXZlbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uUmVzaXplckluaXQoZXYpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudFBvaW50ZXJEb3VibGUodHJ1ZSwgZXYpKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudFBvaW50ZXJMb25nKHRydWUsIGV2KSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKHRydWUsIGV2KTtcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XG4gICAgICAgIGRyYWdJbml0RXZlbnRZID0gcG9pbnRlci5wb3NZO1xuICAgICAgICBkcmFnSW5pdFdpZHRoID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLndpZHRoLCAxMCk7XG4gICAgICAgIGRyYWdJbml0SGVpZ2h0ID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmhlaWdodCwgMTApO1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uUmVzaXplck1vdmU7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25SZXNpemVyTW92ZTtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG9uUmVzaXplckNsb3NlO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvblJlc2l6ZXJDbG9zZTtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uUmVzaXplck1vdmUoZXYpIHtcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFBvaW50ZXIoZmFsc2UsIGV2KTtcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdEV2ZW50WDtcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdEV2ZW50WTtcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0ZpbmFsV2lkdGggPSBkcmFnSW5pdFdpZHRoICsgZnJhbWVEcmFnRGlmWDtcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0ZpbmFsSGVpZ2h0ID0gZHJhZ0luaXRIZWlnaHQgKyBmcmFtZURyYWdEaWZZO1xuICAgICAgICB0YXJnZXQuc3R5bGUud2lkdGggPSAoZnJhbWVEcmFnRmluYWxXaWR0aCA+IDAgPyBmcmFtZURyYWdGaW5hbFdpZHRoIDogMCkgKyBcInB4XCI7XG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPVxuICAgICAgICAgICAgKGZyYW1lRHJhZ0ZpbmFsSGVpZ2h0ID4gMCA/IGZyYW1lRHJhZ0ZpbmFsSGVpZ2h0IDogMCkgKyBcInB4XCI7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblJlc2l6ZXJDbG9zZShldikge1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5zaG93QWxsSUZyYW1lcygpO1xuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25FbmQpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZFNjcm9sbGVyKHRhcmdldCwgZHJhZ0NhbGxzKSB7XG4gICAgdmFyIGRyYWdJbml0WCA9IDA7XG4gICAgdmFyIGRyYWdJbml0WSA9IDA7XG4gICAgdmFyIGRyYWdTY3JvbGxYID0gMDtcbiAgICB2YXIgZHJhZ1Njcm9sbFkgPSAwO1xuICAgIHRhcmdldC5vbmRyYWdzdGFydCA9IHN0b3BFdmVudDtcbiAgICB0YXJnZXQub250b3VjaHN0YXJ0ID0gb25TY3JvbGxlckluaXQ7XG4gICAgdGFyZ2V0Lm9ubW91c2Vkb3duID0gb25TY3JvbGxlckluaXQ7XG4gICAgZnVuY3Rpb24gb25TY3JvbGxlckluaXQoZXYpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudFBvaW50ZXJEb3VibGUodHJ1ZSwgZXYpKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudFBvaW50ZXJMb25nKHRydWUsIGV2KSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKHRydWUsIGV2KTtcbiAgICAgICAgZHJhZ0luaXRYID0gcG9pbnRlci5wb3NYO1xuICAgICAgICBkcmFnSW5pdFkgPSBwb2ludGVyLnBvc1k7XG4gICAgICAgIGRyYWdTY3JvbGxYID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICAgIGRyYWdTY3JvbGxZID0gdGFyZ2V0LnNjcm9sbFRvcDtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBvblNjcm9sbGVyTW92ZTtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBvblNjcm9sbGVyTW92ZTtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG9uU2Nyb2xsZXJDbG9zZTtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25TY3JvbGxlckNsb3NlO1xuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uaGlkZUFsbElGcmFtZXMoKTtcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uU3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25TY3JvbGxlck1vdmUoZXYpIHtcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFBvaW50ZXIoZmFsc2UsIGV2KTtcbiAgICAgICAgdmFyIGRyYWdEaWZYID0gcG9pbnRlci5wb3NYIC0gZHJhZ0luaXRYO1xuICAgICAgICB2YXIgZHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdFk7XG4gICAgICAgIHZhciBkcmFnTmV3WCA9IGRyYWdTY3JvbGxYIC0gZHJhZ0RpZlg7XG4gICAgICAgIHZhciBkcmFnTmV3WSA9IGRyYWdTY3JvbGxZIC0gZHJhZ0RpZlk7XG4gICAgICAgIHRhcmdldC5zY3JvbGxUbyhkcmFnTmV3WCwgZHJhZ05ld1kpO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbk1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25TY3JvbGxlckNsb3NlKGV2KSB7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLnNob3dBbGxJRnJhbWVzKCk7XG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkVuZCkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5Bcm0gPSB7XG4gICAgc3RvcEV2ZW50LFxuICAgIG1ha2VFdmVudFBvaW50ZXIsXG4gICAgaXNFdmVudFBvaW50ZXJEb3VibGUsXG4gICAgaXNFdmVudFBvaW50ZXJMb25nLFxuICAgIGlzS2V5SW5MaXN0LFxuICAgIGlzS2V5RW50ZXIsXG4gICAgaXNLZXlTcGFjZSxcbiAgICBhZGRBY3Rpb24sXG4gICAgYWRkQWN0aW9uRW50ZXIsXG4gICAgcHV0QWN0aW9uUHJveHksXG4gICAgYWRkTW92ZXIsXG4gICAgYWRkUmVzaXplcixcbiAgICBhZGRTY3JvbGxlcixcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYXJtLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Cb2R5ID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUsIG9yRGVmYXVsdCkge1xuICAgIGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNvb2tpZVBhaXIgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgaWYgKG5hbWUgPT0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZVBhaXJbMF0pLnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb29raWVQYWlyWzFdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3JEZWZhdWx0O1xufVxuZnVuY3Rpb24gc2V0Q29va2llKG5hbWUsIHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFwiL1wiIH0sIG9wdGlvbnMpO1xuICAgIGlmICghb3B0aW9ucy5leHBpcmVzKSB7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgMSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBkYXRlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgICB9XG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgZm9yIChsZXQgb3B0aW9uS2V5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBvcHRpb25LZXk7XG4gICAgICAgIGxldCBvcHRpb25WYWx1ZSA9IG9wdGlvbnNbb3B0aW9uS2V5XTtcbiAgICAgICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiPVwiICsgb3B0aW9uVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcbn1cbmZ1bmN0aW9uIGdldFRleHRMaW5lcyhmcm9tVGV4dCkge1xuICAgIHJldHVybiBmcm9tVGV4dC5tYXRjaCgvW15cXHJcXG5dKy9nKTtcbn1cbmZ1bmN0aW9uIGdldENTVlJvd3MoZnJvbVRleHQsIG5hbWVzKSB7XG4gICAgdmFyIGxpbmVzID0gZ2V0VGV4dExpbmVzKGZyb21UZXh0KTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xuICAgICAgICBsZXQgcm93ID0gIW5hbWVzID8gW10gOiB7fTtcbiAgICAgICAgbGV0IGluc2lkZV9xdW90ZXMgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvbHVtbl92YWx1ZSA9IFwiXCI7XG4gICAgICAgIGxldCBjb2x1bW5faW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCBjaGFyX2luZGV4ID0gMDsgY2hhcl9pbmRleCA8IGxpbmUubGVuZ3RoOyBjaGFyX2luZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBhY3R1YWwgPSBsaW5lLmNoYXJBdChjaGFyX2luZGV4KTtcbiAgICAgICAgICAgIGlmIChpbnNpZGVfcXVvdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCA9PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gY2hhcl9pbmRleCA8IGxpbmUubGVuZ3RoIC0gMSA/IGxpbmUuY2hhckF0KGNoYXJfaW5kZXggKyAxKSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSArPSBhY3R1YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyX2luZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGVfcXVvdGVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSArPSBhY3R1YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCA9PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2lkZV9xdW90ZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhY3R1YWwgPT0gXCIsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlID0gdW5tYXNrU3BlY2lhbENoYXJzKGNvbHVtbl92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKGNvbHVtbl92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sdW1uX25hbWUgPSBcImNvbF9cIiArIGNvbHVtbl9pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW5faW5kZXggPCBuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5fbmFtZSA9IG5hbWVzW2NvbHVtbl9pbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dbY29sdW1uX25hbWVdID0gY29sdW1uX3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl9pbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29sdW1uX3ZhbHVlID0gdW5tYXNrU3BlY2lhbENoYXJzKGNvbHVtbl92YWx1ZSk7XG4gICAgICAgIGlmICghbmFtZXMpIHtcbiAgICAgICAgICAgIHJvdy5wdXNoKGNvbHVtbl92YWx1ZSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNvbHVtbl9uYW1lID0gXCJjb2xfXCIgKyBjb2x1bW5faW5kZXg7XG4gICAgICAgICAgICBpZiAoY29sdW1uX2luZGV4IDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uX25hbWUgPSBuYW1lc1tjb2x1bW5faW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93W2NvbHVtbl9uYW1lXSA9IGNvbHVtbl92YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1hc2tTcGVjaWFsQ2hhcnMoZnJvbVRleHQpIHtcbiAgICByZXR1cm4gZnJvbVRleHRcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcXCIsIFwiXFxcXFxcXFxcIilcbiAgICAgICAgLnJlcGxhY2UoXCJcXHJcIiwgXCJcXFxcclwiKVxuICAgICAgICAucmVwbGFjZShcIlxcblwiLCBcIlxcXFxuXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsIFwiXFxcXHRcIik7XG59XG5mdW5jdGlvbiB1bm1hc2tTcGVjaWFsQ2hhcnMoZnJvbVRleHQpIHtcbiAgICByZXR1cm4gZnJvbVRleHRcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcXFxcXFwiLCBcIlxcXFxcIilcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcclwiLCBcIlxcclwiKVxuICAgICAgICAucmVwbGFjZShcIlxcXFxuXCIsIFwiXFxuXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXHRcIiwgXCJcXHRcIik7XG59XG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcnMoc291cmNlKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBvcGVuID0gZmFsc2U7XG4gICAgbGV0IGFjdHVhbCA9IFwiXCI7XG4gICAgZm9yIChjb25zdCBsZXR0ZXIgb2YgQXJyYXkuZnJvbShzb3VyY2UpKSB7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICBpZiAobGV0dGVyID09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBvcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhY3R1YWwpO1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdHVhbCArPSBsZXR0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobGV0dGVyID09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBvcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFjdHVhbCk7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGV0dGVyID09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhY3R1YWwpO1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdHVhbCArPSBsZXR0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuUWluQm9keSA9IHtcbiAgICBnZXRDb29raWUsXG4gICAgc2V0Q29va2llLFxuICAgIGdldFRleHRMaW5lcyxcbiAgICBnZXRDU1ZSb3dzLFxuICAgIG1hc2tTcGVjaWFsQ2hhcnMsXG4gICAgdW5tYXNrU3BlY2lhbENoYXJzLFxuICAgIHBhcnNlUGFyYW1ldGVycyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYm9keS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluRm9vdCA9IGV4cG9ydHMuUWluRmlsZXNEZXNjcmlwdG9yID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSB2b2lkIDA7XG52YXIgUWluRmlsZXNOYXR1cmU7XG4oZnVuY3Rpb24gKFFpbkZpbGVzTmF0dXJlKSB7XG4gICAgUWluRmlsZXNOYXR1cmVbXCJCT1RIXCJdID0gXCJib3RoXCI7XG4gICAgUWluRmlsZXNOYXR1cmVbXCJESVJFQ1RPUklFU1wiXSA9IFwiZGlyZWN0b3JpZXNcIjtcbiAgICBRaW5GaWxlc05hdHVyZVtcIkZJTEVTXCJdID0gXCJmaWxlc1wiO1xufSkoUWluRmlsZXNOYXR1cmUgPSBleHBvcnRzLlFpbkZpbGVzTmF0dXJlIHx8IChleHBvcnRzLlFpbkZpbGVzTmF0dXJlID0ge30pKTtcbnZhciBRaW5GaWxlc09wZXJhdGlvbjtcbihmdW5jdGlvbiAoUWluRmlsZXNPcGVyYXRpb24pIHtcbiAgICBRaW5GaWxlc09wZXJhdGlvbltcIk9QRU5cIl0gPSBcIm9wZW5cIjtcbiAgICBRaW5GaWxlc09wZXJhdGlvbltcIlNBVkVcIl0gPSBcInNhdmVcIjtcbn0pKFFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiB8fCAoZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IHt9KSk7XG5jbGFzcyBRaW5GaWxlc0Rlc2NyaXB0b3Ige1xufVxuZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBRaW5GaWxlc0Rlc2NyaXB0b3I7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG59XG5mdW5jdGlvbiBpc0xvY2FsSG9zdCgpIHtcbiAgICB2YXIgbG9jYXRpb24gPSBnZXRMb2NhdGlvbigpO1xuICAgIHZhciBzdGFydCA9IGxvY2F0aW9uLmluZGV4T2YoXCI6Ly9cIik7XG4gICAgaWYgKHN0YXJ0ID09IC0xKSB7XG4gICAgICAgIHN0YXJ0ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0YXJ0ICs9IDM7XG4gICAgfVxuICAgIGxvY2F0aW9uID0gbG9jYXRpb24uc3Vic3RyaW5nKHN0YXJ0KTtcbiAgICByZXR1cm4gbG9jYXRpb24uaW5kZXhPZihcImxvY2FsaG9zdFwiKSA9PT0gMCB8fCBsb2NhdGlvbi5pbmRleE9mKFwiMTI3LjAuMC4xXCIpID09PSAwO1xufVxuZnVuY3Rpb24gZ2V0U2VwYXJhdG9yKG9mUGF0aCkge1xuICAgIGxldCByZXN1bHQgPSBcIi9cIjtcbiAgICBpZiAob2ZQYXRoICYmIG9mUGF0aC5pbmRleE9mKFwiXFxcXFwiKSA+IC0xKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiXFxcXFwiO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0UGF0aEpvaW4ocGF0aEEsIHBhdGhCKSB7XG4gICAgaWYgKHBhdGhBID09IG51bGwgfHwgcGF0aEEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhdGhBID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKHBhdGhCID09IG51bGwgfHwgcGF0aEIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhdGhCID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKHBhdGhBLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiBwYXRoQjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aEIubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHBhdGhBO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IHVuaW9uID0gXCIvXCI7XG4gICAgICAgIGlmIChwYXRoQS5pbmRleE9mKFwiXFxcXFwiKSA+IC0xIHx8IHBhdGhCLmluZGV4T2YoXCJcXFxcXCIpID4gLTEpIHtcbiAgICAgICAgICAgIHVuaW9uID0gXCJcXFxcXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhdGhBRW5kID0gcGF0aEEuc3Vic3RyaW5nKHBhdGhBLmxlbmd0aCAtIDEsIHBhdGhBLmxlbmd0aCk7XG4gICAgICAgIGxldCBwYXRoQlN0YXJ0ID0gcGF0aEIuc3Vic3RyaW5nKDAsIDEpO1xuICAgICAgICBpZiAocGF0aEFFbmQgPT0gdW5pb24gfHwgcGF0aEJTdGFydCA9PSB1bmlvbikge1xuICAgICAgICAgICAgdW5pb24gPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoQSArIHVuaW9uICsgcGF0aEI7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0Um9vdChwYXRoKSB7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgICAgbGV0IHNlcGFyYXRvciA9IGdldFNlcGFyYXRvcihwYXRoKTtcbiAgICAgICAgbGV0IGxhc3QgPSBwYXRoLmxhc3RJbmRleE9mKHNlcGFyYXRvcik7XG4gICAgICAgIGlmIChsYXN0ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXRoLnN1YnN0cmluZygwLCBsYXN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn1cbmZ1bmN0aW9uIGdldFN0ZW0ocGF0aCkge1xuICAgIGlmIChwYXRoKSB7XG4gICAgICAgIGxldCBzZXBhcmF0b3IgPSBnZXRTZXBhcmF0b3IocGF0aCk7XG4gICAgICAgIGxldCBsYXN0ID0gcGF0aC5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xuICAgICAgICBpZiAobGFzdCA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0aC5zdWJzdHJpbmcobGFzdCArIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufVxuZnVuY3Rpb24gZ2V0RmlsZUV4dGVuc2lvbihuYW1lKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gbmFtZS5sYXN0SW5kZXhPZihcIi5cIik7XG4gICAgaWYgKHBvc2l0aW9uID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUuc3Vic3RyaW5nKHBvc2l0aW9uICsgMSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG59XG5jb25zdCBhcHBzRXh0ZW5zaW9ucyA9IFtcbiAgICBcImh0bVwiLCBcImh0bWxcIiwgXCJjc3NcIiwgXCJqc1wiLCBcImpzeFwiLCBcInRzXCIsIFwidHN4XCIsIFwicGh0bWxcIlxuXTtcbmZ1bmN0aW9uIGlzRmlsZUFwcChleHRlbnNpb24pIHtcbiAgICByZXR1cm4gYXBwc0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XG59XG5jb25zdCBjbWRzRXh0ZW5zaW9ucyA9IFtcbiAgICBcImhcIiwgXCJjXCIsIFwiaHBwXCIsIFwiY3BwXCIsIFwicnNcIiwgXCJqbFwiLFxuICAgIFwiY3NcIiwgXCJjc3Byb2pcIiwgXCJmc1wiLCBcIm1sXCIsIFwiZnNpXCIsIFwibWxpXCIsIFwiZnN4XCIsIFwiZnNzY3JpcHRcIixcbiAgICBcImphdmFcIiwgXCJneVwiLCBcImd2eVwiLCBcImdyb292eVwiLCBcInNjXCIsIFwic2NhbGFcIiwgXCJjbGpcIixcbiAgICBcInB5XCIsIFwicnVieVwiLCBcInBocFwiLCBcInBodG1sXCIsXG5dO1xuZnVuY3Rpb24gaXNGaWxlQ21kKGV4dGVuc2lvbikge1xuICAgIHJldHVybiBjbWRzRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcbn1cbmNvbnN0IGV4ZWNFeHRlbnNpb25zID0gW1xuICAgIFwiZXhlXCIsIFwiamFyXCIsIFwiY29tXCIsIFwiYmF0XCIsIFwic2hcIlxuXTtcbmZ1bmN0aW9uIGlzRmlsZUV4ZWMoZXh0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIGV4ZWNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuY29uc3QgaW1hZ2VFeHRlbnNpb25zID0gW1xuICAgIFwianBnXCIsIFwianBlZ1wiLCBcInBuZ1wiLCBcImdpZlwiLCBcImJtcFwiXG5dO1xuZnVuY3Rpb24gaXNGaWxlSW1hZ2UoZXh0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIGltYWdlRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcbn1cbmNvbnN0IHZlY3RvckV4dGVuc2lvbnMgPSBbXG4gICAgXCJzdmdcIlxuXTtcbmZ1bmN0aW9uIGlzRmlsZVZlY3RvcihleHRlbnNpb24pIHtcbiAgICByZXR1cm4gdmVjdG9yRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcbn1cbmNvbnN0IG1vdmllRXh0ZW5zaW9ucyA9IFtcbiAgICBcImF2aVwiLCBcIm1wNFwiXG5dO1xuZnVuY3Rpb24gaXNGaWxlTW92aWUoZXh0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIG1vdmllRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcbn1cbmNvbnN0IG11c2ljRXh0ZW5zaW9ucyA9IFtcbiAgICBcIndhdlwiLCBcIm1wM1wiXG5dO1xuZnVuY3Rpb24gaXNGaWxlTXVzaWMoZXh0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIG11c2ljRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcbn1cbmNvbnN0IHppcHBlZEV4dGVuc2lvbnMgPSBbXG4gICAgXCJ6aXBcIiwgXCJyYXJcIiwgXCI3elwiLCBcInRhclwiLCBcImd6XCJcbl07XG5mdW5jdGlvbiBpc0ZpbGVaaXBwZWQoZXh0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIHppcHBlZEV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XG59XG5leHBvcnRzLlFpbkZvb3QgPSB7XG4gICAgZ2V0TG9jYXRpb24sXG4gICAgaXNMb2NhbEhvc3QsXG4gICAgZ2V0U2VwYXJhdG9yLFxuICAgIGdldFBhdGhKb2luLFxuICAgIGdldFJvb3QsXG4gICAgZ2V0U3RlbSxcbiAgICBnZXRGaWxlRXh0ZW5zaW9uLFxuICAgIGlzRmlsZUFwcCxcbiAgICBpc0ZpbGVDbWQsXG4gICAgaXNGaWxlRXhlYyxcbiAgICBpc0ZpbGVJbWFnZSxcbiAgICBpc0ZpbGVWZWN0b3IsXG4gICAgaXNGaWxlTW92aWUsXG4gICAgaXNGaWxlTXVzaWMsXG4gICAgaXNGaWxlWmlwcGVkLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1mb290LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5IZWFkID0gZXhwb3J0cy5RaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluQm91bmRzID0gZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBleHBvcnRzLlFpblBvaW50ID0gdm9pZCAwO1xuY2xhc3MgUWluUG9pbnQge1xufVxuZXhwb3J0cy5RaW5Qb2ludCA9IFFpblBvaW50O1xuO1xuY2xhc3MgUWluRGltZW5zaW9uIHtcbn1cbmV4cG9ydHMuUWluRGltZW5zaW9uID0gUWluRGltZW5zaW9uO1xuO1xuY2xhc3MgUWluQm91bmRzIHtcbn1cbmV4cG9ydHMuUWluQm91bmRzID0gUWluQm91bmRzO1xuO1xudmFyIFFpbkdyYW5kZXVyO1xuKGZ1bmN0aW9uIChRaW5HcmFuZGV1cikge1xuICAgIFFpbkdyYW5kZXVyW1wiU01BTExcIl0gPSBcInNtYWxsXCI7XG4gICAgUWluR3JhbmRldXJbXCJNRURJVU1cIl0gPSBcIm1lZGl1bVwiO1xuICAgIFFpbkdyYW5kZXVyW1wiTEFSR0VcIl0gPSBcImxhcmdlXCI7XG59KShRaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluR3JhbmRldXIgfHwgKGV4cG9ydHMuUWluR3JhbmRldXIgPSB7fSkpO1xuZnVuY3Rpb24gZ2V0RGVza0FQSSgpIHtcbiAgICB2YXIgd2luID0gd2luZG93O1xuICAgIGlmICh3aW4uZGVza0FQSSkge1xuICAgICAgICByZXR1cm4gd2luLmRlc2tBUEk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3aW4gPSB3aW5kb3cucGFyZW50O1xuICAgIH1cbiAgICBpZiAod2luLmRlc2tBUEkpIHtcbiAgICAgICAgcmV0dXJuIHdpbi5kZXNrQVBJO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2luID0gd2luZG93LnRvcDtcbiAgICB9XG4gICAgaWYgKHdpbi5kZXNrQVBJKSB7XG4gICAgICAgIHJldHVybiB3aW4uZGVza0FQSTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmNvbnN0IGxvZ2dlZCA9IFtdO1xuZnVuY3Rpb24gZ2V0TG9nZ2VkKCkge1xuICAgIHJldHVybiBsb2dnZWQ7XG59XG5mdW5jdGlvbiBsb2cobWVzc2FnZSkge1xuICAgIGxvZ2dlZC5wdXNoKG1lc3NhZ2UpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBjYXRjaCAoXykgeyB9XG4gICAgdHJ5IHtcbiAgICAgICAgZ2V0RGVza0FQSSgpLnNlbmQoXCJsb2dPbk1haW5cIiwgbWVzc2FnZSk7XG4gICAgfVxuICAgIGNhdGNoIChfKSB7IH1cbn1cbmZ1bmN0aW9uIGxvZ0Vycm9yKGVycm9yLCBvcmlnaW4pIHtcbiAgICBsb2coZ2V0RXJyb3JNZXNzYWdlKGVycm9yLCBvcmlnaW4pKTtcbn1cbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvciwgb3JpZ2luKSB7XG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZShcIlByb2JsZW0gd2l0aDpcIiwgZXJyb3IsIG9yaWdpbik7XG59XG5mdW5jdGlvbiBsb2dXYXJuaW5nKGVycm9yLCBvcmlnaW4pIHtcbiAgICBsb2coZ2V0V2FybmluZ01lc3NhZ2UoZXJyb3IsIG9yaWdpbikpO1xufVxuZnVuY3Rpb24gZ2V0V2FybmluZ01lc3NhZ2UoZXJyb3IsIG9yaWdpbikge1xuICAgIHJldHVybiBnZXRUcmVhdE1lc3NhZ2UoXCJDaGVja291dCB0aGlzOlwiLCBlcnJvciwgb3JpZ2luKTtcbn1cbmZ1bmN0aW9uIGxvZ1N1cHBvcnQoZXJyb3IsIG9yaWdpbikge1xuICAgIGxvZyhnZXRTdXBwb3J0TWVzc2FnZShlcnJvciwgb3JpZ2luKSk7XG59XG5mdW5jdGlvbiBnZXRTdXBwb3J0TWVzc2FnZShlcnJvciwgb3JpZ2luKSB7XG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZShcIk5lZWQgU3VwcG9ydCBvbjpcIiwgZXJyb3IsIG9yaWdpbik7XG59XG5mdW5jdGlvbiBnZXRUcmVhdE1lc3NhZ2UocHJlZml4LCBlcnJvciwgb3JpZ2luKSB7XG4gICAgdmFyIHJlc3VsdCA9IHByZWZpeCArIChlcnJvciA/IFwiIFwiICsgZXJyb3IudG9TdHJpbmcoKSA6IFwiXCIpO1xuICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgIHZhciBlcnJvckRhdGEgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICBpZiAoISh0eXBlb2YgZXJyb3JEYXRhID09IFwic3RyaW5nXCIgfHwgZXJyb3JEYXRhIGluc3RhbmNlb2YgU3RyaW5nKSkge1xuICAgICAgICAgICAgZXJyb3JEYXRhID0gSlNPTi5zdHJpbmdpZnkoZXJyb3JEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gXCIgLSBEYXRhOiBcIiArIGVycm9yRGF0YTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghKHR5cGVvZiBlcnJvciA9PSBcInN0cmluZ1wiIHx8IGVycm9yIGluc3RhbmNlb2YgU3RyaW5nKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiIC0gRGF0YTogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWdpbikge1xuICAgICAgICByZXN1bHQgKz0gXCIgLSBPcmlnaW46IFwiICsgb3JpZ2luO1xuICAgIH1cbiAgICBjb25zdCBzdGFjayA9IChuZXcgRXJyb3IoXCJcIikpLnN0YWNrO1xuICAgIGlmIChzdGFjaykge1xuICAgICAgICByZXN1bHQgKz0gXCIgLSBTdGFjazogXCIgKyBzdGFjaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHRvZ2dsZURldlRvb2xzKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGdldERlc2tBUEkoKS5zZW5kKFwidG9nZ2xlRGV2VG9vbHNcIik7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUsIFwie3FpbnBlbC1yZXN9KEVyckNvZGUtMDAwMDAxKVwiKTtcbiAgICB9XG59XG5leHBvcnRzLlFpbkhlYWQgPSB7XG4gICAgZ2V0RGVza0FQSSxcbiAgICBnZXRMb2dnZWQsXG4gICAgbG9nLFxuICAgIGxvZ0Vycm9yLFxuICAgIGdldEVycm9yTWVzc2FnZSxcbiAgICBsb2dXYXJuaW5nLFxuICAgIGdldFdhcm5pbmdNZXNzYWdlLFxuICAgIGxvZ1N1cHBvcnQsXG4gICAgZ2V0U3VwcG9ydE1lc3NhZ2UsXG4gICAgZ2V0VHJlYXRNZXNzYWdlLFxuICAgIHRvZ2dsZURldlRvb2xzLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1oZWFkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Ta2luID0gZXhwb3J0cy5RaW5TdHlsZXMgPSB2b2lkIDA7XG5jb25zdCBxaW5fYXJtXzEgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xuY29uc3QgcWluX2hlYWRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xuZXhwb3J0cy5RaW5TdHlsZXMgPSB7XG4gICAgQ29sb3JGb3JlZ3JvdW5kOiBcIiMyNzAwMzZcIixcbiAgICBDb2xvckJhY2tncm91bmQ6IFwiI2ZmZmFlZlwiLFxuICAgIENvbG9ySW5hY3RpdmU6IFwiI2ZhZWZmZlwiLFxuICAgIENvbG9yQWN0aXZlOiBcIiNmYWNkY2RcIixcbiAgICBGb250TmFtZTogXCJTb3VyY2VTYW5zUHJvXCIsXG4gICAgRm9udFNpemU6IFwiMTZweFwiLFxufTtcbmZ1bmN0aW9uIHN0eWxlQXNCb2R5KGVsKSB7XG4gICAgZWwuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgZWwuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICBlbC5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XG4gICAgZWwuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICBlbC5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCI5cHhcIjtcbiAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xufVxuZnVuY3Rpb24gc3R5bGVBc0VkaXQoZWwpIHtcbiAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjFweFwiO1xuICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjNweFwiO1xuICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMjcwMDM2XCI7XG4gICAgZWwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIzcHhcIjtcbiAgICBlbC5zdHlsZS5jb2xvciA9IFwiIzI3MDAzNlwiO1xuICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiO1xuICAgIGVsLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlNvdXJjZVNhbnNQcm9cIjtcbiAgICBlbC5zdHlsZS5mb250U2l6ZSA9IFwiMTZweFwiO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmFlZmZmXCI7XG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNhZTAwMDBcIjtcbiAgICB9KTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMjcwMDM2XCI7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzdHlsZU1heFNpemVGb3JOb3RPdmVyRmxvdyhlbCwgcGFyZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJEMVwiKTtcbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICBwYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkQyOiBcIiArIHBhcmVudCk7XG4gICAgfVxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IDA7XG4gICAgICAgIGxldCBpbWVkaWF0ZSA9IGVsO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoICsgaW1lZGlhdGUuY2xpZW50TGVmdDtcbiAgICAgICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCArIGltZWRpYXRlLmNsaWVudFRvcDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRDM6IFwiICsgbWF4V2lkdGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJENDogXCIgKyBtYXhIZWlnaHQpO1xuICAgICAgICAgICAgaW1lZGlhdGUgPSBpbWVkaWF0ZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9IHdoaWxlIChpbWVkaWF0ZSAhPSBudWxsICYmIGltZWRpYXRlICE9IHBhcmVudCk7XG4gICAgICAgIG1heFdpZHRoID0gcGFyZW50LmNsaWVudFdpZHRoIC0gbWF4V2lkdGg7XG4gICAgICAgIG1heEhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQgLSBtYXhIZWlnaHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRDU6IFwiICsgbWF4V2lkdGgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkQ2OiBcIiArIG1heEhlaWdodCk7XG4gICAgICAgIGVsLnN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGggKyBcInB4XCI7XG4gICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IG1heEhlaWdodCArIFwicHhcIjtcbiAgICB9XG59XG5mdW5jdGlvbiBzdHlsZVNpemUoZWwsIHNpemUpIHtcbiAgICBpZiAoc2l6ZSkge1xuICAgICAgICBpZiAoc2l6ZSBpbnN0YW5jZW9mIHFpbl9oZWFkXzEuUWluRGltZW5zaW9uKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS53aWR0aCA9IHNpemUud2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaW0gPSBnZXREaW1lbnNpb25TaXplKHNpemUpO1xuICAgICAgICAgICAgZWwuc3R5bGUud2lkdGggPSBkaW0ud2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBkaW0uaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc3R5bGVGbGV4TWF4KGVsKSB7XG4gICAgZWwuc3R5bGUuZmxleCA9IFwiMVwiO1xufVxuZnVuY3Rpb24gc3R5bGVGbGV4TWluKGVsKSB7XG4gICAgZWwuc3R5bGUuZmxleCA9IFwiMFwiO1xufVxuZnVuY3Rpb24gZ2V0V2luZG93U2l6ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCxcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0V2luZG93U2l6ZVN0eWxlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gZ2V0V2luZG93U2l6ZSgpLndpZHRoO1xuICAgIGlmICh3aWR0aCA8IDYwMCkge1xuICAgICAgICByZXR1cm4gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5TTUFMTDtcbiAgICB9XG4gICAgZWxzZSBpZiAod2lkdGggPCAxMDAwKSB7XG4gICAgICAgIHJldHVybiBxaW5faGVhZF8xLlFpbkdyYW5kZXVyLk1FRElVTTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBxaW5faGVhZF8xLlFpbkdyYW5kZXVyLkxBUkdFO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGhpZGVBbGxJRnJhbWVzKCkge1xuICAgIHZhciBkb2NfaWZyYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaWZyYW1lXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9jX2lmcmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGRvY19pZnJhbWUgPSBkb2NfaWZyYW1lc1tpXTtcbiAgICAgICAgZG9jX2lmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9XG59XG5mdW5jdGlvbiBzaG93QWxsSUZyYW1lcygpIHtcbiAgICB2YXIgZG9jX2lmcmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlmcmFtZVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvY19pZnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBkb2NfaWZyYW1lID0gZG9jX2lmcmFtZXNbaV07XG4gICAgICAgIGRvY19pZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc2FibGVTZWxlY3Rpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICAgIGVsZW1lbnQub25zZWxlY3RzdGFydCA9IHFpbl9hcm1fMS5RaW5Bcm0uc3RvcEV2ZW50O1xufVxuZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9LCAzNjApO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50VmlzaWJsZUluU2Nyb2xsKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm9mZnNldFRvcCA8IGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5vZmZzZXRMZWZ0IDwgZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbExlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5jbGllbnRXaWR0aCA+XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGggLVxuICAgICAgICAgICAgICAgIChlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsTGVmdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5jbGllbnRIZWlnaHQgPlxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodCAtXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGdldERpbWVuc2lvblNpemUoc2l6ZSkge1xuICAgIGlmIChzaXplID09IHFpbl9oZWFkXzEuUWluR3JhbmRldXIuTEFSR0UpIHtcbiAgICAgICAgcmV0dXJuIGdldERpbWVuc2lvbkxhcmdlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNpemUgPT0gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5NRURJVU0pIHtcbiAgICAgICAgcmV0dXJuIGdldERpbWVuc2lvbk1lZGl1bSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdldERpbWVuc2lvblNtYWxsKCk7XG4gICAgfVxufVxuY29uc3QgZGltZW5zaW9uU21hbGwgPSB7XG4gICAgd2lkdGg6IDE2LFxuICAgIGhlaWdodDogMTYsXG59O1xuZnVuY3Rpb24gZ2V0RGltZW5zaW9uU21hbGwoKSB7XG4gICAgcmV0dXJuIGRpbWVuc2lvblNtYWxsO1xufVxuY29uc3QgZGltZW5zaW9uTWVkaXVtID0ge1xuICAgIHdpZHRoOiAzMixcbiAgICBoZWlnaHQ6IDMyLFxufTtcbmZ1bmN0aW9uIGdldERpbWVuc2lvbk1lZGl1bSgpIHtcbiAgICByZXR1cm4gZGltZW5zaW9uTWVkaXVtO1xufVxuY29uc3QgZGltZW5zaW9uTGFyZ2UgPSB7XG4gICAgd2lkdGg6IDY0LFxuICAgIGhlaWdodDogNjQsXG59O1xuZnVuY3Rpb24gZ2V0RGltZW5zaW9uTGFyZ2UoKSB7XG4gICAgcmV0dXJuIGRpbWVuc2lvbkxhcmdlO1xufVxuZXhwb3J0cy5RaW5Ta2luID0ge1xuICAgIHN0eWxlczogZXhwb3J0cy5RaW5TdHlsZXMsXG4gICAgc3R5bGVBc0JvZHksXG4gICAgc3R5bGVBc0VkaXQsXG4gICAgc3R5bGVNYXhTaXplRm9yTm90T3ZlckZsb3csXG4gICAgc3R5bGVTaXplLFxuICAgIHN0eWxlRmxleE1heCxcbiAgICBzdHlsZUZsZXhNaW4sXG4gICAgZ2V0V2luZG93U2l6ZSxcbiAgICBnZXRXaW5kb3dTaXplU3R5bGUsXG4gICAgaGlkZUFsbElGcmFtZXMsXG4gICAgc2hvd0FsbElGcmFtZXMsXG4gICAgZGlzYWJsZVNlbGVjdGlvbixcbiAgICBjbGVhclNlbGVjdGlvbixcbiAgICBpc0VsZW1lbnRWaXNpYmxlSW5TY3JvbGwsXG4gICAgZ2V0RGltZW5zaW9uU2l6ZSxcbiAgICBnZXREaW1lbnNpb25TbWFsbCxcbiAgICBnZXREaW1lbnNpb25NZWRpdW0sXG4gICAgZ2V0RGltZW5zaW9uTGFyZ2UsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNraW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpblNvdWwgPSB2b2lkIDA7XG5jb25zdCBxaW5fYXJtXzEgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xuY29uc3QgcWluX2JvZHlfMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib2R5XCIpO1xuY29uc3QgcWluX2Zvb3RfMSA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xuY29uc3QgcWluX2hlYWRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xuY29uc3QgcWluX3NraW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xuZXhwb3J0cy5RaW5Tb3VsID0ge1xuICAgIGFybTogcWluX2FybV8xLlFpbkFybSxcbiAgICBib2R5OiBxaW5fYm9keV8xLlFpbkJvZHksXG4gICAgZm9vdDogcWluX2Zvb3RfMS5RaW5Gb290LFxuICAgIGhlYWQ6IHFpbl9oZWFkXzEuUWluSGVhZCxcbiAgICBza2luOiBxaW5fc2tpbl8xLlFpblNraW4sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNvdWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcbmNsYXNzIFFpblNjYWZmb2xkIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpbkNvbHVtbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucWluSGVsbG8gPSBuZXcgcWlucGVsX2Nwc18xLlFpbkxhYmVsKFwiSGVsbG8sIHdvcmxkIVwiKTtcbiAgICAgICAgdGhpcy5xaW5IZWxsby5pbnN0YWxsKHRoaXMpO1xuICAgIH1cbn1cbm5ldyBRaW5TY2FmZm9sZCgpLnB1dEFzQm9keSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl19
