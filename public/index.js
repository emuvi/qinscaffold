(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = exports.QinExplorer = exports.QinTools = exports.QinPath = exports.QinCombo = exports.QinColumn = exports.QinLine = exports.QinButton = exports.QinMutantsArm = exports.QinMutants = exports.QinChooser = exports.QinField = exports.qinAssetUrl = exports.QinAsset = exports.QinPanel = exports.QinTabs = exports.QinIcon = exports.QinString = exports.QinLabel = exports.QinBoolean = void 0;
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
var qin_explorer_1 = require("./qin-explorer");
Object.defineProperty(exports, "QinExplorer", { enumerable: true, get: function () { return qin_explorer_1.QinExplorer; } });
var qin_integer_1 = require("./qin-integer");
Object.defineProperty(exports, "QinInteger", { enumerable: true, get: function () { return qin_integer_1.QinInteger; } });

},{"./qin-assets":2,"./qin-boolean":4,"./qin-button":5,"./qin-chooser":6,"./qin-column":7,"./qin-combo":8,"./qin-explorer":10,"./qin-field":11,"./qin-icon":12,"./qin-integer":13,"./qin-label":14,"./qin-line":15,"./qin-mutants":16,"./qin-panel":17,"./qin-path":18,"./qin-string":19,"./qin-tabs":20,"./qin-tools":21}],2:[function(require,module,exports){
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
    QinAsset["Sourcesanspro"] = "SourceSansPro.ttf";
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
    QinAsset["Sourceserifpro"] = "SourceSerifPro.ttf";
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
    return "/run/app/qinpel-app/assets/" + asset;
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
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options.singleSelection : false;
        this.initMain();
    }
    initMain() {
        styles.applyOnMain(this._qinMain.divMain);
        this._qinMain.addAction(qinEvent => {
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
        this.items.forEach(item => {
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
            this.load(folderRoot, _ => {
                for (const itemPath of data) {
                    let itemRoot = qinpel_res_1.QinSoul.foot.getRoot(itemPath);
                    let itemName = qinpel_res_1.QinSoul.foot.getStem(itemPath);
                    if (itemRoot !== folderRoot) {
                        qinpel_res_1.QinHead.logSupport(`The item '${itemPath}' is not on the root '${folderRoot}'.`, "{qinpel-cps}(ErrCode-000001)");
                    }
                    else {
                        if (!this.select(itemName)) {
                            qinpel_res_1.QinHead.logWarning(`Does not have the item '${itemName}' on the folder '${folderRoot}'`, "{qinpel-cps}(ErrCode-000002)");
                        }
                    }
                }
            });
        }
    }
    load(folder, onLoad) {
        this.clean();
        this.qinpel().post("/dir/list", { path: folder })
            .then(res => {
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
            .catch(err => {
            this._qinMain.divMain.innerText = qinpel_res_1.QinHead.getErrorMessage(err, "{qinpel-cps}(ErrCode-000003)");
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
        let item = this.items.find(inside => inside.getName() == itemName);
        if (item) {
            item.select();
            return true;
        }
        else {
            return false;
        }
    }
    unselect(itemName) {
        let item = this.items.find(inside => inside.getName() == itemName);
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
        this.imgIcon.src = "/run/app/qinpel-app/assets/" + this.iconName;
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
    }
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
function getTextLines(fromText) {
    return fromText.match(/[^\r\n]+/g);
}
function getCSVRows(fromText, names) {
    var lines = getTextLines(fromText);
    var result = [];
    for (let line of lines) {
        let row = (!names) ? [] : {};
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
                else if (actual == ',') {
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
            else if (letter == ' ') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvYWxsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYXNzZXRzLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYmFzZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWJvb2xlYW4uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1idXR0b24uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1jaG9vc2VyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY29sdW1uLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY29tYm8uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1lZGl0LmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZXhwbG9yZXIuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1maWVsZC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWljb24uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1pbnRlZ2VyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbGFiZWwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1saW5lLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbXV0YW50cy5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXBhbmVsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tcGF0aC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXN0cmluZy5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXRhYnMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10b29scy5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvYWxsLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tYXJtLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tYm9keS5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWZvb3QuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1oZWFkLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tc2tpbi5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLXNvdWwuanMiLCJidWlsZC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbmNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5JbnRlZ2VyID0gZXhwb3J0cy5RaW5FeHBsb3JlciA9IGV4cG9ydHMuUWluVG9vbHMgPSBleHBvcnRzLlFpblBhdGggPSBleHBvcnRzLlFpbkNvbWJvID0gZXhwb3J0cy5RaW5Db2x1bW4gPSBleHBvcnRzLlFpbkxpbmUgPSBleHBvcnRzLlFpbkJ1dHRvbiA9IGV4cG9ydHMuUWluTXV0YW50c0FybSA9IGV4cG9ydHMuUWluTXV0YW50cyA9IGV4cG9ydHMuUWluQ2hvb3NlciA9IGV4cG9ydHMuUWluRmllbGQgPSBleHBvcnRzLnFpbkFzc2V0VXJsID0gZXhwb3J0cy5RaW5Bc3NldCA9IGV4cG9ydHMuUWluUGFuZWwgPSBleHBvcnRzLlFpblRhYnMgPSBleHBvcnRzLlFpbkljb24gPSBleHBvcnRzLlFpblN0cmluZyA9IGV4cG9ydHMuUWluTGFiZWwgPSBleHBvcnRzLlFpbkJvb2xlYW4gPSB2b2lkIDA7XG52YXIgcWluX2Jvb2xlYW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib29sZWFuXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm9vbGVhblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Jvb2xlYW5fMS5RaW5Cb29sZWFuOyB9IH0pO1xudmFyIHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTGFiZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9sYWJlbF8xLlFpbkxhYmVsOyB9IH0pO1xudmFyIHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TdHJpbmdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zdHJpbmdfMS5RaW5TdHJpbmc7IH0gfSk7XG52YXIgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSWNvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ljb25fMS5RaW5JY29uOyB9IH0pO1xudmFyIHFpbl90YWJzXzEgPSByZXF1aXJlKFwiLi9xaW4tdGFic1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblRhYnNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl90YWJzXzEuUWluVGFiczsgfSB9KTtcbnZhciBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBhbmVsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fcGFuZWxfMS5RaW5QYW5lbDsgfSB9KTtcbnZhciBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQXNzZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hc3NldHNfMS5RaW5Bc3NldDsgfSB9KTtcbnZhciBxaW5fYXNzZXRzXzIgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicWluQXNzZXRVcmxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hc3NldHNfMi5xaW5Bc3NldFVybDsgfSB9KTtcbnZhciBxaW5fZmllbGRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWVsZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpZWxkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmllbGRfMS5RaW5GaWVsZDsgfSB9KTtcbnZhciBxaW5fY2hvb3Nlcl8xID0gcmVxdWlyZShcIi4vcWluLWNob29zZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5DaG9vc2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fY2hvb3Nlcl8xLlFpbkNob29zZXI7IH0gfSk7XG52YXIgcWluX211dGFudHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1tdXRhbnRzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTXV0YW50c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX211dGFudHNfMS5RaW5NdXRhbnRzOyB9IH0pO1xudmFyIHFpbl9tdXRhbnRzXzIgPSByZXF1aXJlKFwiLi9xaW4tbXV0YW50c1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbk11dGFudHNBcm1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9tdXRhbnRzXzIuUWluTXV0YW50c0FybTsgfSB9KTtcbnZhciBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQnV0dG9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYnV0dG9uXzEuUWluQnV0dG9uOyB9IH0pO1xudmFyIHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkxpbmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9saW5lXzEuUWluTGluZTsgfSB9KTtcbnZhciBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQ29sdW1uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fY29sdW1uXzEuUWluQ29sdW1uOyB9IH0pO1xudmFyIHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQ29tYm9cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9jb21ib18xLlFpbkNvbWJvOyB9IH0pO1xudmFyIHFpbl9wYXRoXzEgPSByZXF1aXJlKFwiLi9xaW4tcGF0aFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBhdGhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9wYXRoXzEuUWluUGF0aDsgfSB9KTtcbnZhciBxaW5fdG9vbHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi10b29sc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblRvb2xzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdG9vbHNfMS5RaW5Ub29sczsgfSB9KTtcbnZhciBxaW5fZXhwbG9yZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1leHBsb3JlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkV4cGxvcmVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZXhwbG9yZXJfMS5RaW5FeHBsb3JlcjsgfSB9KTtcbnZhciBxaW5faW50ZWdlcl8xID0gcmVxdWlyZShcIi4vcWluLWludGVnZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5JbnRlZ2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faW50ZWdlcl8xLlFpbkludGVnZXI7IH0gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnFpbkFzc2V0VXJsID0gZXhwb3J0cy5RaW5Bc3NldCA9IHZvaWQgMDtcbnZhciBRaW5Bc3NldDtcbihmdW5jdGlvbiAoUWluQXNzZXQpIHtcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyTW92aWVcIl0gPSBcImV4cGxvcmVyLW1vdmllLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVVwbG9hZFwiXSA9IFwiZmFjZS11cGxvYWQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTmV3c1wiXSA9IFwiZmFjZS1uZXdzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI0XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI1XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI1LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUltYWdlXCJdID0gXCJmYWNlLWltYWdlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJGaWxlXCJdID0gXCJleHBsb3Jlci1maWxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUZvbGRlclwiXSA9IFwiZmFjZS1mb2xkZXIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZU1lc3NhZ2VcIl0gPSBcImZhY2UtbWVzc2FnZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmsucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIzXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw0XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC00LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI1XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDYXJ0XCJdID0gXCJmYWNlLWNhcnQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGcmFtZVJlc2l6ZVwiXSA9IFwiZnJhbWUtcmVzaXplLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxOFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE4LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiUWlucGVsXCJdID0gXCJxaW5wZWwucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyWmlwcGVkXCJdID0gXCJleHBsb3Jlci16aXBwZWQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI5LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyNlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI2LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVVubGlua1wiXSA9IFwiZmFjZS11bmxpbmsucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxM1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrOVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlV2lmaVwiXSA9IFwiZmFjZS13aWZpLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmxvY2tcIl0gPSBcImZhY2UtdW5sb2NrLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUdlYXJcIl0gPSBcImZhY2UtZ2Vhci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDb25maXJtXCJdID0gXCJmYWNlLWNvbmZpcm0ucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ1XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlVHJhc2hcIl0gPSBcImZhY2UtdHJhc2gucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazFcIl0gPSBcImJhY2tncm91bmQtZGFyay0xLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE4XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNaWNEaXNhYmxlXCJdID0gXCJmYWNlLW1pYy1kaXNhYmxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZU1pY1wiXSA9IFwiZmFjZS1taWMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRXllRGlzYWJsZVwiXSA9IFwiZmFjZS1leWUtZGlzYWJsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VGaWx0ZXJcIl0gPSBcImZhY2UtZmlsdGVyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJFeGVjXCJdID0gXCJleHBsb3Jlci1leGVjLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUFkZFwiXSA9IFwiZmFjZS1hZGQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlU3BlYWtlckRpc2FibGVcIl0gPSBcImZhY2Utc3BlYWtlci1kaXNhYmxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNvbnRyb2xcIl0gPSBcImZhY2UtY29udHJvbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDYWxlbmRhclwiXSA9IFwiZmFjZS1jYWxlbmRhci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd1VwXCJdID0gXCJmYWNlLWFycm93LXVwLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJBcHBzXCJdID0gXCJleHBsb3Jlci1hcHBzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVNoaWVsZFwiXSA9IFwiZmFjZS1zaGllbGQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlTG9ja1wiXSA9IFwiZmFjZS1sb2NrLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUxpbmtcIl0gPSBcImZhY2UtbGluay5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTZW5kXCJdID0gXCJmYWNlLXNlbmQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDFcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNaW51c1wiXSA9IFwiZmFjZS1taW51cy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VMYWJlbFwiXSA9IFwiZmFjZS1sYWJlbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmRvXCJdID0gXCJmYWNlLXVuZG8ucG5nXCI7XG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckltYWdlXCJdID0gXCJleHBsb3Jlci1pbWFnZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJFeHBsb3Jlck11c2ljXCJdID0gXCJleHBsb3Jlci1tdXNpYy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDdcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNYXBEaXNhYmxlXCJdID0gXCJmYWNlLW1hcC1kaXNhYmxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiTG9naW5LZXlcIl0gPSBcImxvZ2luLWtleS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyN1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI3LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUZpbGVcIl0gPSBcImZhY2UtZmlsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIxXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGcmFtZVN0YXR1c0luZm9cIl0gPSBcImZyYW1lLXN0YXR1cy1pbmZvLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dMZWZ0XCJdID0gXCJmYWNlLWFycm93LWxlZnQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTZXR0aW5nc1wiXSA9IFwiZmFjZS1zZXR0aW5ncy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNb3ZpZVwiXSA9IFwiZmFjZS1tb3ZpZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrNFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI2LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIxXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDaGVja1wiXSA9IFwiZmFjZS1jaGVjay5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw2XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC02LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjhcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazZcIl0gPSBcImJhY2tncm91bmQtZGFyay02LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUhvbWVcIl0gPSBcImZhY2UtaG9tZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTdGFyXCJdID0gXCJmYWNlLXN0YXIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckRpclwiXSA9IFwiZXhwbG9yZXItZGlyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNpcmNsZVwiXSA9IFwiZmFjZS1jaXJjbGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQXR0YWNoXCJdID0gXCJmYWNlLWF0dGFjaC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VQYXN0ZVwiXSA9IFwiZmFjZS1wYXN0ZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTYucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlUGx1c1wiXSA9IFwiZmFjZS1wbHVzLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTRcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTQucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ4XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlUGhvbmVcIl0gPSBcImZhY2UtcGhvbmUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEwXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDb2dcIl0gPSBcImZhY2UtY29nLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyN1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ29udGFjdFwiXSA9IFwiZmFjZS1jb250YWN0LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUV4aXRcIl0gPSBcImZhY2UtZXhpdC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDb21wYXNzXCJdID0gXCJmYWNlLWNvbXBhc3MucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTExLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MThcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxN1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDbG9zZVwiXSA9IFwiZmFjZS1jbG9zZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VEb3dubG9hZFwiXSA9IFwiZmFjZS1kb3dubG9hZC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VQZW5jaWxcIl0gPSBcImZhY2UtcGVuY2lsLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE3LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUJlbGxEaXNhYmxlXCJdID0gXCJmYWNlLWJlbGwtZGlzYWJsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE2XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE2LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjdcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTcucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyM1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VFbnRlclwiXSA9IFwiZmFjZS1lbnRlci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTNcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjgucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtOS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTAucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQmVsbFwiXSA9IFwiZmFjZS1iZWxsLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE0XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xNC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZyYW1lTWluaW1pemVcIl0gPSBcImZyYW1lLW1pbmltaXplLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNhbWVyYURpc2FibGVcIl0gPSBcImZhY2UtY2FtZXJhLWRpc2FibGUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIlNvdXJjZXNhbnNwcm9cIl0gPSBcIlNvdXJjZVNhbnNQcm8udHRmXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRXJhc2VcIl0gPSBcImZhY2UtZXJhc2UucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ5XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTkucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRXllXCJdID0gXCJmYWNlLWV5ZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwwXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0wLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRnJhbWVNZW51XCJdID0gXCJmcmFtZS1tZW51LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmswXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNYXBcIl0gPSBcImZhY2UtbWFwLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVNoYXJlXCJdID0gXCJmYWNlLXNoYXJlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVdpZmlEaXNhYmxlXCJdID0gXCJmYWNlLXdpZmktZGlzYWJsZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZyYW1lU3RhdHVzRXJyb3JcIl0gPSBcImZyYW1lLXN0YXR1cy1lcnJvci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWxcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRnJhbWVNYXhpbWl6ZVwiXSA9IFwiZnJhbWUtbWF4aW1pemUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dSaWdodFwiXSA9IFwiZmFjZS1hcnJvdy1yaWdodC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjhcIl0gPSBcImJhY2tncm91bmQtZGFyay0yOC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTYXZlXCJdID0gXCJmYWNlLXNhdmUucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQmFnXCJdID0gXCJmYWNlLWJhZy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjVcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VSZWRvXCJdID0gXCJmYWNlLXJlZG8ucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ29weVwiXSA9IFwiZmFjZS1jb3B5LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUVubGFyZ2VcIl0gPSBcImZhY2UtZW5sYXJnZS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrM1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlU2VhcmNoXCJdID0gXCJmYWNlLXNlYXJjaC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTFcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIlNvdXJjZXNlcmlmcHJvXCJdID0gXCJTb3VyY2VTZXJpZlByby50dGZcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VDbG9ja1wiXSA9IFwiZmFjZS1jbG9jay5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjlcIl0gPSBcImJhY2tncm91bmQtZGFyay0yOS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VTaHJpbmtcIl0gPSBcImZhY2Utc2hyaW5rLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIwLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVBob25lRGlzYWJsZVwiXSA9IFwiZmFjZS1waG9uZS1kaXNhYmxlLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxOVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE5LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjJcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIyLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93RG93blwiXSA9IFwiZmFjZS1hcnJvdy1kb3duLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0NlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC02LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZUNhbWVyYVwiXSA9IFwiZmFjZS1jYW1lcmEucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlQ2FuY2VsXCJdID0gXCJmYWNlLWNhbmNlbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VNYWlsXCJdID0gXCJmYWNlLW1haWwucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlRGVsXCJdID0gXCJmYWNlLWRlbC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIucG5nXCI7XG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyOVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yOS5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIxXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIxLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRnJhbWVDbG9zZVwiXSA9IFwiZnJhbWUtY2xvc2UucG5nXCI7XG4gICAgUWluQXNzZXRbXCJNZW51RGV2dG9vbHNcIl0gPSBcIm1lbnUtZGV2dG9vbHMuaWNvXCI7XG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckNtZHNcIl0gPSBcImV4cGxvcmVyLWNtZHMucG5nXCI7XG4gICAgUWluQXNzZXRbXCJGYWNlUGluXCJdID0gXCJmYWNlLXBpbi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VQZXJzb25cIl0gPSBcImZhY2UtcGVyc29uLnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiRmFjZVNwZWFrZXJcIl0gPSBcImZhY2Utc3BlYWtlci5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTZcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNi5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkZhY2VIZWFydFwiXSA9IFwiZmFjZS1oZWFydC5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw3XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC03LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNy5wbmdcIjtcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI2XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI2LnBuZ1wiO1xuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxMlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEyLnBuZ1wiO1xufSkoUWluQXNzZXQgPSBleHBvcnRzLlFpbkFzc2V0IHx8IChleHBvcnRzLlFpbkFzc2V0ID0ge30pKTtcbmZ1bmN0aW9uIHFpbkFzc2V0VXJsKGFzc2V0KSB7XG4gICAgcmV0dXJuIFwiL3J1bi9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyBhc3NldDtcbn1cbmV4cG9ydHMucWluQXNzZXRVcmwgPSBxaW5Bc3NldFVybDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1hc3NldHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkJhc2UgPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNvbnN0IHFpbl90b29sc18xID0gcmVxdWlyZShcIi4vcWluLXRvb2xzXCIpO1xuY2xhc3MgUWluQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYmFzZVBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuYmFzZUNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMuYmFzZURpc3BsYXkgPSBcImluaXRpYWxcIjtcbiAgICAgICAgdGhpcy5iYXNlVmlzaWJpbGl0eSA9IFwiaW5pdGlhbFwiO1xuICAgIH1cbiAgICBxaW5wZWwoKSB7XG4gICAgICAgIHJldHVybiBxaW5fdG9vbHNfMS5RaW5Ub29scy5xaW5wZWwoKTtcbiAgICB9XG4gICAgaW5zdGFsbChvbikge1xuICAgICAgICB0aGlzLmJhc2VQYXJlbnQgPSBvbjtcbiAgICAgICAgdGhpcy5iYXNlUGFyZW50LmFwcGVuZENoaWxkKHRoaXMpO1xuICAgIH1cbiAgICB1bkluc3RhbGwoKSB7XG4gICAgICAgIHRoaXMuYmFzZVBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9XG4gICAgcmVJbnN0YWxsKCkge1xuICAgICAgICB0aGlzLmJhc2VQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgfVxuICAgIHVuRGlzcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2VEaXNwbGF5ID0gdGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZURpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmJhc2VEaXNwbGF5O1xuICAgIH1cbiAgICB1blZpc2libGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ICE9PSBcImhpZGRlblwiKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2VWaXNpYmlsaXR5ID0gdGhpcy5nZXRNYWluKCkuc3R5bGUudmlzaWJpbGl0eTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlVmlzaWJsZSgpIHtcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUudmlzaWJpbGl0eSA9IHRoaXMuYmFzZVZpc2liaWxpdHk7XG4gICAgfVxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuYmFzZUNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB0aGlzLmdldE1haW4oKS5hcHBlbmRDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xuICAgIH1cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmJhc2VDaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZUNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRNYWluKCkucmVtb3ZlQ2hpbGQoY2hpbGQuZ2V0TWFpbigpKTtcbiAgICB9XG4gICAgY2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VDaGlsZHJlbjtcbiAgICB9XG4gICAgY2xlYXJDaGlsZHJlbigpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmJhc2VDaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkucmVtb3ZlQ2hpbGQoY2hpbGQuZ2V0TWFpbigpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhc2VDaGlsZHJlbiA9IFtdO1xuICAgIH1cbiAgICBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmFybS5hZGRBY3Rpb24odGhpcy5nZXRNYWluKCksIGFjdGlvbik7XG4gICAgfVxuICAgIHB1dEFzQm9keSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdldE1haW4oKSk7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0JvZHkodGhpcy5nZXRNYWluKCkpO1xuICAgIH1cbiAgICBkZWxBc0JvZHkoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5nZXRNYWluKCkpO1xuICAgIH1cbiAgICBwdXRBc0VkaXQoKSB7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0VkaXQodGhpcy5nZXRNYWluKCkpO1xuICAgICAgICB0aGlzLmdldE1haW4oKS50YWJJbmRleCA9IDA7XG4gICAgfVxuICAgIHB1dEFzU2Nyb2xsKCkge1xuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICAgIH1cbiAgICBwdXRBc0Rpc2FibGVkU2VsZWN0aW9uKCkge1xuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLmRpc2FibGVTZWxlY3Rpb24odGhpcy5nZXRNYWluKCkpO1xuICAgIH1cbiAgICBwdXRBc0NlbnRlcmVkKCkge1xuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuYWxpZ25Db250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XG4gICAgfVxuICAgIHB1dEFzRGlzcGxheUlubGluZUJsb2NrKCkge1xuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICB9XG4gICAgcHV0QXNEaXNwbGF5RmxleCgpIHtcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBwdXRBc0ZsZXhNaW4oKSB7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmZsZXggPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgcHV0QXNGbGV4TWF4KCkge1xuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5mbGV4ID0gXCJhdXRvXCI7XG4gICAgfVxuICAgIHB1dEFzV2lkdGgod2lkdGgpIHtcbiAgICAgICAgaWYgKHdpZHRoICE9IG51bGwgJiYgd2lkdGggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzSGVpZ2h0KGhlaWdodCkge1xuICAgICAgICBpZiAoaGVpZ2h0ICE9IG51bGwgJiYgaGVpZ2h0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmICh3aWR0aCAhPSBudWxsICYmIHdpZHRoICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVpZ2h0ICE9IG51bGwgJiYgaGVpZ2h0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzTWluV2lkdGgod2lkdGgpIHtcbiAgICAgICAgaWYgKHdpZHRoICE9IG51bGwgJiYgd2lkdGggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5taW5XaWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzTWluSGVpZ2h0KGhlaWdodCkge1xuICAgICAgICBpZiAoaGVpZ2h0ICE9IG51bGwgJiYgaGVpZ2h0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUubWluSGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzTWluU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmICh3aWR0aCAhPSBudWxsICYmIHdpZHRoICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUubWluV2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVpZ2h0ICE9IG51bGwgJiYgaGVpZ2h0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUubWluSGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzTWF4V2lkdGgod2lkdGgpIHtcbiAgICAgICAgaWYgKHdpZHRoICE9IG51bGwgJiYgd2lkdGggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5tYXhXaWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzTWF4SGVpZ2h0KGhlaWdodCkge1xuICAgICAgICBpZiAoaGVpZ2h0ICE9IG51bGwgJiYgaGVpZ2h0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUubWF4SGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzTWF4U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmICh3aWR0aCAhPSBudWxsICYmIHdpZHRoICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUubWF4V2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVpZ2h0ICE9IG51bGwgJiYgaGVpZ2h0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUubWF4SGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1dEFzRm9yZWdyb3VuZChmb3JlZ3JvdW5kKSB7XG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmNvbG9yID0gZm9yZWdyb3VuZDtcbiAgICB9XG4gICAgcHV0QXNCYWNrZ3JvdW5kKGJhY2tncm91bmQpIHtcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5CYXNlID0gUWluQmFzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1iYXNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Cb29sZWFuID0gdm9pZCAwO1xuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcbmNvbnN0IHFpbl9pY29uXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvblwiKTtcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xuY2xhc3MgUWluQm9vbGVhbiBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xuICAgICAgICB0aGlzLl9xaW5TcGFuID0gbmV3IHFpbl9sYWJlbF8xLlFpbkxhYmVsKCk7XG4gICAgICAgIHRoaXMuX3Fpbkljb24gPSBuZXcgcWluX2ljb25fMS5RaW5JY29uKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ2lyY2xlKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9xaW5TcGFuLmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgICAgIHRoaXMuX3Fpbkljb24uaW5zdGFsbCh0aGlzLl9xaW5TcGFuKTtcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5wdXRBc0VkaXQoKTtcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5wdXRBc0Rpc3BsYXlGbGV4KCk7XG4gICAgICAgIHRoaXMuX3FpblNwYW4ucHV0QXNDZW50ZXJlZCgpO1xuICAgICAgICB0aGlzLl9xaW5TcGFuLmFkZEFjdGlvbihxaW5FdmVudCA9PiB7XG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5pbml0aWFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGRhdGE7XG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIH1cbiAgICB1cGRhdGVJY29uKCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcWluSWNvbi5jaGFuZ2UocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDb25maXJtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Fpbkljb24uY2hhbmdlKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ2lyY2xlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSAhdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5Cb29sZWFuID0gUWluQm9vbGVhbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1ib29sZWFuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5CdXR0b24gPSB2b2lkIDA7XG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcbmNsYXNzIFFpbkJ1dHRvbiBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9idXR0b25NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5fcWluSWNvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuX3FpbkxhYmVsID0gbnVsbDtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25CdXR0b24odGhpcy5fYnV0dG9uTWFpbik7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaWNvbikge1xuICAgICAgICAgICAgdGhpcy5fcWluSWNvbiA9IG9wdGlvbnMuaWNvbjtcbiAgICAgICAgICAgIHRoaXMuX3Fpbkljb24uaW5zdGFsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLl9xaW5MYWJlbCA9IG9wdGlvbnMubGFiZWw7XG4gICAgICAgICAgICB0aGlzLl9xaW5MYWJlbC5pbnN0YWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idXR0b25NYWluO1xuICAgIH1cbiAgICBnZXQgYnV0dG9uTWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1dHRvbk1haW47XG4gICAgfVxuICAgIGdldCBxaW5JY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluSWNvbjtcbiAgICB9XG4gICAgZ2V0IHFpbkxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTGFiZWw7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5CdXR0b24gPSBRaW5CdXR0b247XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgYXBwbHlPbkJ1dHRvbjogKGVsKSA9PiB7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0VkaXQoZWwpO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICBlbC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJ1dHRvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluQ2hvb3NlciA9IHZvaWQgMDtcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xuY29uc3QgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcbmNvbnN0IHFpbl9leHBsb3Jlcl8xID0gcmVxdWlyZShcIi4vcWluLWV4cGxvcmVyXCIpO1xuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xuY29uc3QgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcbmNvbnN0IHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xuY29uc3QgcWluX2J1dHRvbl8xID0gcmVxdWlyZShcIi4vcWluLWJ1dHRvblwiKTtcbmNvbnN0IHFpbl9pY29uXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvblwiKTtcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcbmNsYXNzIFFpbkNob29zZXIgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCk7XG4gICAgICAgIHRoaXMuX3FpblVwcGVyID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xuICAgICAgICB0aGlzLl9xaW5Db25maXJtID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oe1xuICAgICAgICAgICAgaWNvbjogbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNvbmZpcm0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIgPSBuZXcgcWluX3N0cmluZ18xLlFpblN0cmluZygpO1xuICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zID0gbmV3IHFpbl9jb21ib18xLlFpbkNvbWJvKCk7XG4gICAgICAgIHRoaXMuX3FpblNlYXJjaCA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHtcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VTZWFyY2gpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9xaW5VbmRlciA9IG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpO1xuICAgICAgICB0aGlzLl9xaW5FeHBsb3JlciA9IG5ldyBxaW5fZXhwbG9yZXJfMS5RaW5FeHBsb3JlcigpO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLl9uYXR1cmUgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSkgPyBvcHRpb25zLm5hdHVyZSA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIO1xuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wZXJhdGlvbikgPyBvcHRpb25zLm9wZXJhdGlvbiA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc09wZXJhdGlvbi5PUEVOO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdG9ycyA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZGVzY3JpcHRvcnMpID8gb3B0aW9ucy5kZXNjcmlwdG9ycyA6IFtdO1xuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpbmdsZVNlbGVjdGlvbikgPyBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2luZ2xlU2VsZWN0aW9uIDogZmFsc2U7XG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcbiAgICAgICAgdGhpcy5pbml0VXBwZXIoKTtcbiAgICAgICAgdGhpcy5pbml0VW5kZXIoKTtcbiAgICB9XG4gICAgaW5pdE1haW4oKSB7XG4gICAgICAgIHRoaXMuX3FpblVwcGVyLmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgICAgIHRoaXMuX3FpblVuZGVyLmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgfVxuICAgIGluaXRVcHBlcigpIHtcbiAgICAgICAgdGhpcy5fcWluVXBwZXIucHV0QXNGbGV4TWluKCk7XG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0uaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0uYWRkQWN0aW9uKHFpbkV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkoKSkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaG9zZW4gb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBxaW5FdmVudC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5wdXRBc01pbldpZHRoKDEwMCk7XG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5wdXRBc0ZsZXhNYXgoKTtcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLmFkZEFjdGlvbihxaW5FdmVudCA9PiB7XG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNFbnRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEZvbGRlcigpO1xuICAgICAgICAgICAgICAgIHFpbkV2ZW50LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XG4gICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMucHV0QXNNaW5XaWR0aCgxMDApO1xuICAgICAgICB0aGlzLmluaXRFeHRlbnNpb25zKCk7XG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEZvbGRlcigpO1xuICAgICAgICAgICAgICAgIHFpbkV2ZW50LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRVbmRlcigpIHtcbiAgICAgICAgdGhpcy5fcWluVW5kZXIucHV0QXNTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5fcWluVW5kZXIucHV0QXNGbGV4TWF4KCk7XG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmluc3RhbGwodGhpcy5fcWluVW5kZXIpO1xuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5uYXR1cmUgPSB0aGlzLl9uYXR1cmU7XG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLnNpbmdsZVNlbGVjdGlvbiA9IHRoaXMuX3NpbmdsZVNlbGVjdGlvbjtcbiAgICB9XG4gICAgaW5pdEV4dGVuc2lvbnMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9kZXNjcmlwdG9ycy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5hZGRJdGVtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBbGwgRmlsZXMgKCouKilcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCIqXCIsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuZXh0ZW5zaW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2Rlc2NyaXB0b3JzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLl9kZXNjcmlwdG9yc1tpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5hZGRJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0b3IuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZXNjcmlwdG9yLmV4dGVuc2lvbnMuam9pbihcIjtcIiksXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpbmRleCA9PSAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5leHRlbnNpb25zID0gdGhpcy5fZGVzY3JpcHRvcnNbMF0uZXh0ZW5zaW9ucztcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2FkRm9sZGVyKCkge1xuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5sb2FkKHRoaXMuX3FpbkZvbGRlci5nZXREYXRhKCksIChsb2FkZWQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3FpbkZvbGRlci5zZXREYXRhKGxvYWRlZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FeHBsb3Jlci5nZXREYXRhKCk7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5zZXREYXRhKGRhdGEpO1xuICAgIH1cbiAgICBhZGRDaG9zZW4oY2hvc2VuKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2hvc2VuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldCBxaW5NYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbjtcbiAgICB9XG4gICAgZ2V0IHFpblVwcGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluVXBwZXI7XG4gICAgfVxuICAgIGdldCBxaW5Db25maXJtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluQ29uZmlybTtcbiAgICB9XG4gICAgZ2V0IHFpbkZvbGRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkZvbGRlcjtcbiAgICB9XG4gICAgZ2V0IHFpbkV4dGVuc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FeHRlbnNpb25zO1xuICAgIH1cbiAgICBnZXQgcWluU2VhcmNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluU2VhcmNoO1xuICAgIH1cbiAgICBnZXQgcWluVW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5VbmRlcjtcbiAgICB9XG4gICAgZ2V0IHFpbkV4cGxvcmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluRXhwbG9yZXI7XG4gICAgfVxuICAgIGdldCBuYXR1cmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYXR1cmU7XG4gICAgfVxuICAgIHNldCBuYXR1cmUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbmF0dXJlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLm5hdHVyZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgb3BlcmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uO1xuICAgIH1cbiAgICBzZXQgb3BlcmF0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRvcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdG9ycztcbiAgICB9XG4gICAgc2V0IGRlc2NyaXB0b3JzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0b3JzID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBzaW5nbGVTZWxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVTZWxlY3Rpb247XG4gICAgfVxuICAgIHNldCBzaW5nbGVTZWxlY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLnNpbmdsZVNlbGVjdGlvbiA9IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluQ2hvb3NlciA9IFFpbkNob29zZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY2hvb3Nlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluQ29sdW1uID0gdm9pZCAwO1xuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xuY2xhc3MgUWluQ29sdW1uIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Rpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmluaXRQYW5lbCgpO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgdmlld2VyIG9mIG9wdGlvbnMuaW5pdGlhbCkge1xuICAgICAgICAgICAgICAgIHZpZXdlci5pbnN0YWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGluaXRQYW5lbCgpIHtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25QYW5lbCh0aGlzLl9kaXZNYWluKTtcbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpdk1haW47XG4gICAgfVxuICAgIGdldCBkaXZNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGl2TWFpbjtcbiAgICB9XG59XG5leHBvcnRzLlFpbkNvbHVtbiA9IFFpbkNvbHVtbjtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBhcHBseU9uUGFuZWw6IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICBlbC5zdHlsZS5mbGV4V3JhcCA9IFwibm93cmFwXCI7XG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY29sdW1uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Db21ibyA9IHZvaWQgMDtcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xuY2xhc3MgUWluQ29tYm8gZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0VkaXQodGhpcy5fc2VsZWN0TWFpbik7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaXRlbXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygb3B0aW9ucy5pdGVtcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSXRlbShpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5zZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdE1haW47XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RNYWluLnZhbHVlO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0TWFpbi52YWx1ZSA9IGRhdGE7XG4gICAgfVxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udGV4dCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIGlmIChpdGVtLnNlbGVjdGVkICE9IHVuZGVmaW5lZCAmJiBpdGVtLnNlbGVjdGVkICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGl0ZW0uc2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2VsZWN0TWFpbi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0IHNlbGVjdE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RNYWluO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluQ29tYm8gPSBRaW5Db21ibztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jb21iby5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluRWRpdCA9IHZvaWQgMDtcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcbmNsYXNzIFFpbkVkaXQgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xufVxuZXhwb3J0cy5RaW5FZGl0ID0gUWluRWRpdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1lZGl0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5FeHBsb3JlciA9IHZvaWQgMDtcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XG5jbGFzcyBRaW5FeHBsb3JlciBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XG4gICAgICAgIHRoaXMuX2ZvbGRlckFjdHVhbCA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IFwiXCI7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5fbmF0dXJlID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uYXR1cmUpID8gb3B0aW9ucy5uYXR1cmUgOiBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuQk9USDtcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucyA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZXh0ZW5zaW9ucykgPyBvcHRpb25zLmV4dGVuc2lvbnMgOiBbXTtcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24pID8gb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24gOiBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0TWFpbigpO1xuICAgIH1cbiAgICBpbml0TWFpbigpIHtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25NYWluKHRoaXMuX3Fpbk1haW4uZGl2TWFpbik7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4uYWRkQWN0aW9uKHFpbkV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5TZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4ucHV0QXNEaXNhYmxlZFNlbGVjdGlvbigpO1xuICAgIH1cbiAgICB1cGRhdGVTaW5nbGVTZWxlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGxldCBhbHJlYWR5SGFzID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWxyZWFkeUhhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS51bnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUhhcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZGl2TWFpbjtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFBhdGhKb2luKHRoaXMuX2ZvbGRlclNlcnZlciwgaXRlbS5nZXROYW1lKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmNsZWFuKCk7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGZvbGRlclJvb3QgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFJvb3QoZGF0YVswXSk7XG4gICAgICAgICAgICB0aGlzLmxvYWQoZm9sZGVyUm9vdCwgXyA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtUGF0aCBvZiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtUm9vdCA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0Um9vdChpdGVtUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0U3RlbShpdGVtUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUm9vdCAhPT0gZm9sZGVyUm9vdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcWlucGVsX3Jlc18xLlFpbkhlYWQubG9nU3VwcG9ydChgVGhlIGl0ZW0gJyR7aXRlbVBhdGh9JyBpcyBub3Qgb24gdGhlIHJvb3QgJyR7Zm9sZGVyUm9vdH0nLmAsIFwie3FpbnBlbC1jcHN9KEVyckNvZGUtMDAwMDAxKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3QoaXRlbU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcWlucGVsX3Jlc18xLlFpbkhlYWQubG9nV2FybmluZyhgRG9lcyBub3QgaGF2ZSB0aGUgaXRlbSAnJHtpdGVtTmFtZX0nIG9uIHRoZSBmb2xkZXIgJyR7Zm9sZGVyUm9vdH0nYCwgXCJ7cWlucGVsLWNwc30oRXJyQ29kZS0wMDAwMDIpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZChmb2xkZXIsIG9uTG9hZCkge1xuICAgICAgICB0aGlzLmNsZWFuKCk7XG4gICAgICAgIHRoaXMucWlucGVsKCkucG9zdChcIi9kaXIvbGlzdFwiLCB7IHBhdGg6IGZvbGRlciB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2ZvbGRlckFjdHVhbCA9IGZvbGRlcjtcbiAgICAgICAgICAgIGZvciAobGV0IGxpbmUgb2YgcWlucGVsX3Jlc18xLlFpblNvdWwuYm9keS5nZXRUZXh0TGluZXMocmVzLmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpbmVWYWx1ZSA9IGxpbmUuc3Vic3RyaW5nKDMpO1xuICAgICAgICAgICAgICAgIGlmICghbGluZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGluZS5zdGFydHNXaXRoKFwiUDogXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IGxpbmVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkKGxpbmVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKFwiRDogXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uYXR1cmUgPT0gcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkJPVEggfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRElSRUNUT1JJRVMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3RGlyKGxpbmVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKFwiRjogXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uYXR1cmUgPT0gcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkJPVEggfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRklMRVMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHRlbnNpb24gPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldEZpbGVFeHRlbnNpb24obGluZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXNzZWRFeHRlbnNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2V4dGVuc2lvbnMgJiYgdGhpcy5fZXh0ZW5zaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2VkRXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzZWRFeHRlbnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0ZpbGUobGluZVZhbHVlLCBleHRlbnNpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICB0aGlzLl9xaW5NYWluLmRpdk1haW4uaW5uZXJUZXh0ID0gcWlucGVsX3Jlc18xLlFpbkhlYWQuZ2V0RXJyb3JNZXNzYWdlKGVyciwgXCJ7cWlucGVsLWNwc30oRXJyQ29kZS0wMDAwMDMpXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ29Gb2xkZXJVcChvbkxvYWQpIHtcbiAgICAgICAgbGV0IHJvb3QgPSBxaW5wZWxfcmVzXzEuUWluRm9vdC5nZXRSb290KHRoaXMuX2ZvbGRlclNlcnZlcik7XG4gICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQocm9vdCwgb25Mb2FkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhbigpIHtcbiAgICAgICAgdGhpcy5fcWluTWFpbi5kaXZNYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5fZm9sZGVyQWN0dWFsID0gXCJcIjtcbiAgICAgICAgdGhpcy5fZm9sZGVyU2VydmVyID0gXCJcIjtcbiAgICB9XG4gICAgY2xlYW5TZWxlY3Rpb24oKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICBpdGVtLnVuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0KGl0ZW1OYW1lKSB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtcy5maW5kKGluc2lkZSA9PiBpbnNpZGUuZ2V0TmFtZSgpID09IGl0ZW1OYW1lKTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uc2VsZWN0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bnNlbGVjdChpdGVtTmFtZSkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXMuZmluZChpbnNpZGUgPT4gaW5zaWRlLmdldE5hbWUoKSA9PSBpdGVtTmFtZSk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLnVuc2VsZWN0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBuZXdEaXIobmFtZSkge1xuICAgICAgICB0aGlzLm5ld0l0ZW0obmFtZSwgXCJleHBsb3Jlci1kaXIucG5nXCIpO1xuICAgIH1cbiAgICBuZXdGaWxlKG5hbWUsIGV4dGVuc2lvbikge1xuICAgICAgICB0aGlzLm5ld0l0ZW0obmFtZSwgZ2V0SWNvbk5hbWUoZXh0ZW5zaW9uKSk7XG4gICAgfVxuICAgIG5ld0l0ZW0obmFtZSwgaWNvbikge1xuICAgICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW0odGhpcywgbmFtZSwgaWNvbik7XG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzLl9xaW5NYWluLmRpdk1haW4pO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGdldCBxaW5NYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbjtcbiAgICB9XG4gICAgZ2V0IG5hdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdHVyZTtcbiAgICB9XG4gICAgc2V0IG5hdHVyZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9uYXR1cmUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGV4dGVuc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHRlbnNpb25zO1xuICAgIH1cbiAgICBzZXQgZXh0ZW5zaW9ucyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9leHRlbnNpb25zID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBzaW5nbGVTZWxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVTZWxlY3Rpb247XG4gICAgfVxuICAgIHNldCBzaW5nbGVTZWxlY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU2luZ2xlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGdldCBmb2xkZXJBY3R1YWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb2xkZXJBY3R1YWw7XG4gICAgfVxuICAgIGdldCBmb2xkZXJTZXJ2ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb2xkZXJTZXJ2ZXI7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5FeHBsb3JlciA9IFFpbkV4cGxvcmVyO1xuY2xhc3MgSXRlbSB7XG4gICAgY29uc3RydWN0b3IoZXhwbG9yZXIsIGZpbGVOYW1lLCBpY29uTmFtZSkge1xuICAgICAgICB0aGlzLmRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmRpdkl0ZW1Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zcGFuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICB0aGlzLmltZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICB0aGlzLnNwYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5leHBsb3JlciA9IGV4cGxvcmVyO1xuICAgICAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XG4gICAgICAgIHRoaXMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbiAgICAgICAgdGhpcy5pbml0SXRlbSgpO1xuICAgIH1cbiAgICBpbml0SXRlbSgpIHtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZJdGVtKHRoaXMuZGl2SXRlbSk7XG4gICAgICAgIHRoaXMuZGl2SXRlbS50YWJJbmRleCA9IDA7XG4gICAgICAgIHN0eWxlcy5hcHBseU9uRGl2SXRlbUJvZHkodGhpcy5kaXZJdGVtQm9keSk7XG4gICAgICAgIHRoaXMuZGl2SXRlbS5hcHBlbmRDaGlsZCh0aGlzLmRpdkl0ZW1Cb2R5KTtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25TcGFuSWNvbih0aGlzLnNwYW5JY29uKTtcbiAgICAgICAgdGhpcy5kaXZJdGVtQm9keS5hcHBlbmRDaGlsZCh0aGlzLnNwYW5JY29uKTtcbiAgICAgICAgdGhpcy5pbWdJY29uLnNyYyA9IFwiL3J1bi9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyB0aGlzLmljb25OYW1lO1xuICAgICAgICB0aGlzLnNwYW5JY29uLmFwcGVuZENoaWxkKHRoaXMuaW1nSWNvbik7XG4gICAgICAgIHRoaXMuc3BhblRleHQuaW5uZXJUZXh0ID0gdGhpcy5maWxlTmFtZTtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25TcGFuVGV4dCh0aGlzLnNwYW5UZXh0KTtcbiAgICAgICAgdGhpcy5kaXZJdGVtQm9keS5hcHBlbmRDaGlsZCh0aGlzLnNwYW5UZXh0KTtcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuYXJtLmFkZEFjdGlvbih0aGlzLmRpdkl0ZW0sIChxaW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXZJdGVtLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnN0YWxsKG9uKSB7XG4gICAgICAgIG9uLmFwcGVuZENoaWxkKHRoaXMuZGl2SXRlbSk7XG4gICAgfVxuICAgIHNlbGVjdCgpIHtcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZTZWxlY3QodGhpcy5kaXZJdGVtKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIHVuc2VsZWN0KCkge1xuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdlVuU2VsZWN0KHRoaXMuZGl2SXRlbSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy51bnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwbG9yZXIuc2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBsb3Jlci5jbGVhblNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlTmFtZTtcbiAgICB9XG4gICAgaXNTZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0SWNvbk5hbWUoZnJvbUV4dGVuc2lvbikge1xuICAgIGxldCByZXN1bHQgPSBcImV4cGxvcmVyLWZpbGUucG5nXCI7XG4gICAgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlQXBwKGZyb21FeHRlbnNpb24pKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItYXBwcy5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVDbWQoZnJvbUV4dGVuc2lvbikpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1jbWRzLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUV4ZWMoZnJvbUV4dGVuc2lvbikpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1leGVjLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUltYWdlKGZyb21FeHRlbnNpb24pKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlVmVjdG9yKGZyb21FeHRlbnNpb24pKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlTXVzaWMoZnJvbUV4dGVuc2lvbikpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1tdXNpYy5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVNb3ZpZShmcm9tRXh0ZW5zaW9uKSkge1xuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLW1vdmllLnBuZ1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZVppcHBlZChmcm9tRXh0ZW5zaW9uKSkge1xuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLXppcHBlZC5wbmdcIjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBhcHBseU9uTWFpbjogKGVsKSA9PiB7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0VkaXQoZWwpO1xuICAgICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICAgICAgICBlbC5zdHlsZS5taW5XaWR0aCA9IFwiMTYwcHhcIjtcbiAgICAgICAgZWwuc3R5bGUubWluSGVpZ2h0ID0gXCIxNjBweFwiO1xuICAgICAgICBlbC50YWJJbmRleCA9IDA7XG4gICAgfSxcbiAgICBhcHBseU9uRGl2SXRlbTogKGVsKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMnB4XCI7XG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjlweFwiO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzM2MDA0NVwiO1xuICAgICAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xuICAgICAgICBlbC5zdHlsZS5jb2xvciA9IFwiIzI3MDAzNlwiO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2FlMDAwMFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMzNjAwNDVcIjtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBhcHBseU9uRGl2SXRlbUJvZHk6IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICBlbC5zdHlsZS53aWR0aCA9IFwiMTIwcHhcIjtcbiAgICB9LFxuICAgIGFwcGx5T25TcGFuSWNvbjogKGVsKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgfSxcbiAgICBhcHBseU9uU3BhblRleHQ6IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBlbC5zdHlsZS53b3JkV3JhcCA9IFwiYnJlYWstd29yZFwiO1xuICAgIH0sXG4gICAgYXBwbHlPbkRpdlNlbGVjdDogKGVsKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZhZWZmZlwiO1xuICAgIH0sXG4gICAgYXBwbHlPbkRpdlVuU2VsZWN0OiAoZWwpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1leHBsb3Jlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluRmllbGQgPSB2b2lkIDA7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xuY29uc3QgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XG5jbGFzcyBRaW5GaWVsZCBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGVkaXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCk7XG4gICAgICAgIHRoaXMuX3FpbkxhYmVsID0gbmV3IHFpbl9sYWJlbF8xLlFpbkxhYmVsKCk7XG4gICAgICAgIHRoaXMuX3FpbkVkaXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9xaW5MYWJlbC5zZXRUaXRsZSh0aXRsZSk7XG4gICAgICAgIHRoaXMuX3FpbkxhYmVsLmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgICAgIHRoaXMuX3FpbkVkaXQgPSBlZGl0O1xuICAgICAgICB0aGlzLl9xaW5FZGl0Lmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgICAgIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI1cHhcIjtcbiAgICAgICAgdGhpcy5fcWluTWFpbi5nZXRNYWluKCkuc3R5bGUubWFyZ2luQm90dG9tID0gXCI1cHhcIjtcbiAgICB9XG4gICAgZ2V0TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluRWRpdC5nZXREYXRhKCk7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9xaW5FZGl0LnNldERhdGEoZGF0YSk7XG4gICAgfVxuICAgIGdldCBxaW5NYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbjtcbiAgICB9XG4gICAgZ2V0IHFpbkxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluTGFiZWw7XG4gICAgfVxuICAgIGdldCBxaW5FZGl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluRWRpdDtcbiAgICB9XG59XG5leHBvcnRzLlFpbkZpZWxkID0gUWluRmllbGQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmllbGQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkljb24gPSB2b2lkIDA7XG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jbGFzcyBRaW5JY29uIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihhc3NldCwgc2l6ZSA9IHFpbnBlbF9yZXNfMS5RaW5HcmFuZGV1ci5TTUFMTCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9pbWdNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgdGhpcy5faW1nTWFpbi5zcmMgPSAoMCwgcWluX2Fzc2V0c18xLnFpbkFzc2V0VXJsKShhc3NldCk7XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVTaXplKHRoaXMuX2ltZ01haW4sIHNpemUpO1xuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW1nTWFpbjtcbiAgICB9XG4gICAgY2hhbmdlKGFzc2V0KSB7XG4gICAgICAgIHRoaXMuX2ltZ01haW4uc3JjID0gKDAsIHFpbl9hc3NldHNfMS5xaW5Bc3NldFVybCkoYXNzZXQpO1xuICAgIH1cbiAgICBnZXQgaW1nTWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ltZ01haW47XG4gICAgfVxufVxuZXhwb3J0cy5RaW5JY29uID0gUWluSWNvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1pY29uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5JbnRlZ2VyID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XG5jbGFzcyBRaW5JbnRlZ2VyIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2lucHV0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5faW5wdXRNYWluLnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KHRoaXMuX2lucHV0TWFpbik7XG4gICAgICAgIHRoaXMuX2lucHV0TWFpbi5zdHlsZS53aWR0aCA9IFwiMTIwcHhcIjtcbiAgICAgICAgdGhpcy5faW5wdXRNYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEodGhpcy5nZXREYXRhKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5pbml0aWFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRNYWluO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2lucHV0TWFpbi52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkIHx8IHZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLl9pbnB1dE1haW4udmFsdWUsIDEwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCB8fCBkYXRhID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRNYWluLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lucHV0TWFpbi52YWx1ZSA9IChkYXRhIHwgMCkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgaW5wdXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRNYWluO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluSW50ZWdlciA9IFFpbkludGVnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taW50ZWdlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluTGFiZWwgPSB2b2lkIDA7XG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XG5jbGFzcyBRaW5MYWJlbCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc3Bhbk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGFuTWFpbi50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGFuTWFpbjtcbiAgICB9XG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy5fc3Bhbk1haW4udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB9XG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGFuTWFpbi50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgZ2V0IHNwYW5NYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3Bhbk1haW47XG4gICAgfVxufVxuZXhwb3J0cy5RaW5MYWJlbCA9IFFpbkxhYmVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWxhYmVsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5MaW5lID0gdm9pZCAwO1xuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xuY2xhc3MgUWluTGluZSBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9kaXZNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5pbml0UGFuZWwoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZpZXdlciBvZiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgICAgICB2aWV3ZXIuaW5zdGFsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0UGFuZWwoKSB7XG4gICAgICAgIHN0eWxlcy5hcHBseU9uUGFuZWwodGhpcy5fZGl2TWFpbik7XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXZNYWluO1xuICAgIH1cbiAgICBnZXQgZGl2TWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpdk1haW47XG4gICAgfVxufVxuZXhwb3J0cy5RaW5MaW5lID0gUWluTGluZTtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBhcHBseU9uUGFuZWw6IChlbCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICBlbC5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tbGluZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluTXV0YW50c0FybSA9IGV4cG9ydHMuUWluTXV0YW50cyA9IHZvaWQgMDtcbmNvbnN0IHFpbl9ib29sZWFuXzEgPSByZXF1aXJlKFwiLi9xaW4tYm9vbGVhblwiKTtcbmNvbnN0IHFpbl9jaG9vc2VyXzEgPSByZXF1aXJlKFwiLi9xaW4tY2hvb3NlclwiKTtcbmNvbnN0IHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xuY29uc3QgcWluX2V4cGxvcmVyXzEgPSByZXF1aXJlKFwiLi9xaW4tZXhwbG9yZXJcIik7XG5jb25zdCBxaW5faW50ZWdlcl8xID0gcmVxdWlyZShcIi4vcWluLWludGVnZXJcIik7XG5jb25zdCBxaW5fcGF0aF8xID0gcmVxdWlyZShcIi4vcWluLXBhdGhcIik7XG5jb25zdCBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xudmFyIFFpbk11dGFudHM7XG4oZnVuY3Rpb24gKFFpbk11dGFudHMpIHtcbiAgICBRaW5NdXRhbnRzW1wiQk9PTEVBTlwiXSA9IFwiYm9vbGVhblwiO1xuICAgIFFpbk11dGFudHNbXCJDSE9PU0VSXCJdID0gXCJjaG9vc2VyXCI7XG4gICAgUWluTXV0YW50c1tcIkNPTUJPXCJdID0gXCJjb21ib1wiO1xuICAgIFFpbk11dGFudHNbXCJFWFBMT1JFUlwiXSA9IFwiZXhwbG9yZXJcIjtcbiAgICBRaW5NdXRhbnRzW1wiSU5URUdFUlwiXSA9IFwiaW50ZWdlclwiO1xuICAgIFFpbk11dGFudHNbXCJQQVRIXCJdID0gXCJwYXRoXCI7XG4gICAgUWluTXV0YW50c1tcIlNUUklOR1wiXSA9IFwic3RyaW5nXCI7XG59KShRaW5NdXRhbnRzID0gZXhwb3J0cy5RaW5NdXRhbnRzIHx8IChleHBvcnRzLlFpbk11dGFudHMgPSB7fSkpO1xuZnVuY3Rpb24gbmV3RWRpdChraW5kLCBvcHRpb25zKSB7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5CT09MRUFOOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fYm9vbGVhbl8xLlFpbkJvb2xlYW4ob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5DSE9PU0VSOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fY2hvb3Nlcl8xLlFpbkNob29zZXIob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5DT01CTzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2NvbWJvXzEuUWluQ29tYm8ob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5FWFBMT1JFUjpcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2V4cGxvcmVyXzEuUWluRXhwbG9yZXIob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5JTlRFR0VSOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5faW50ZWdlcl8xLlFpbkludGVnZXIob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5QQVRIOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fcGF0aF8xLlFpblBhdGgob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5TVFJJTkc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcob3B0aW9ucyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGtpbmQgb2YgbXV0YW50IHRvIGNyZWF0ZS5cIik7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5NdXRhbnRzQXJtID0ge1xuICAgIG5ld0VkaXRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tbXV0YW50cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluUGFuZWwgPSB2b2lkIDA7XG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XG5jbGFzcyBRaW5QYW5lbCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Rpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGl2TWFpbjtcbiAgICB9XG4gICAgZ2V0IGRpdk1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXZNYWluO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluUGFuZWwgPSBRaW5QYW5lbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1wYW5lbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluUGF0aCA9IHZvaWQgMDtcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XG5jb25zdCBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xuY29uc3QgcWluX2Nob29zZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1jaG9vc2VyXCIpO1xuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xuY29uc3QgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xuY29uc3QgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcbmNsYXNzIFFpblBhdGggZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fbGluZV8xLlFpbkxpbmUoKTtcbiAgICAgICAgdGhpcy5fcWluUGF0aCA9IG5ldyBxaW5fc3RyaW5nXzEuUWluU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuX3FpblNlYXJjaCA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHtcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VGb2xkZXIpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9xaW5DaG9vc2VyID0gbmV3IHFpbl9jaG9vc2VyXzEuUWluQ2hvb3Nlcih7XG4gICAgICAgICAgICBuYXR1cmU6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uYXR1cmUsXG4gICAgICAgICAgICBvcGVyYXRpb246IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5vcGVyYXRpb24sXG4gICAgICAgICAgICBkZXNjcmlwdG9yczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRlc2NyaXB0b3JzLFxuICAgICAgICAgICAgc2luZ2xlU2VsZWN0aW9uOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9xaW5Qb3B1cCA9IHRoaXMucWlucGVsKCkuZnJhbWUubmV3UG9wdXAodGhpcy5fcWluQ2hvb3Nlci5nZXRNYWluKCkpO1xuICAgICAgICB0aGlzLl9xaW5QYXRoLmluc3RhbGwodGhpcy5fcWluTWFpbik7XG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xuICAgICAgICB0aGlzLl9xaW5TZWFyY2guYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcWluUG9wdXAuc2hvdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwcGVySGVpZ2h0ID0gdGhpcy5fcWluQ2hvb3Nlci5xaW5VcHBlci5nZXRNYWluKCkuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGxvcmVyTWF4SGVpZ2h0ID0gdGhpcy5fcWluUG9wdXAubWF4SGVpZ2h0IC0gKHVwcGVySGVpZ2h0ICsgMTIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3FpbkNob29zZXIucWluRXhwbG9yZXIucHV0QXNNYXhIZWlnaHQoZXhwbG9yZXJNYXhIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcWluQ2hvb3Nlci5hZGRDaG9zZW4oY2hvc2VuID0+IHtcbiAgICAgICAgICAgIGlmIChjaG9zZW4gJiYgY2hvc2VuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5QYXRoLnNldERhdGEoY2hvc2VuWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBhdGguZ2V0RGF0YSgpO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fcWluUGF0aC5zZXREYXRhKGRhdGEpO1xuICAgIH1cbiAgICBnZXQgcWluTWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XG4gICAgfVxuICAgIGdldCBxaW5QYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluUGF0aDtcbiAgICB9XG4gICAgZ2V0IHFpblNlYXJjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblNlYXJjaDtcbiAgICB9XG4gICAgZ2V0IHFpbkNob29zZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5DaG9vc2VyO1xuICAgIH1cbiAgICBnZXQgcWluUG9wdXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5Qb3B1cDtcbiAgICB9XG59XG5leHBvcnRzLlFpblBhdGggPSBRaW5QYXRoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpblN0cmluZyA9IHZvaWQgMDtcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xuY2xhc3MgUWluU3RyaW5nIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2lucHV0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5faW5wdXRNYWluLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2lucHV0TWFpbi5tYXhMZW5ndGggPSBvcHRpb25zLm1heExlbmd0aDtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IE1hdGgubWluKE1hdGgubWF4KG9wdGlvbnMubWF4TGVuZ3RoIC0gMTAsIDApLCA5MCk7XG4gICAgICAgICAgICBsZXQgd2lkdGggPSBNYXRoLmZsb29yKDkwICsgKHBvc2l0aW9uICogNyAvIDMpKTtcbiAgICAgICAgICAgIHRoaXMuX2lucHV0TWFpbi5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0VkaXQodGhpcy5faW5wdXRNYWluKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5pbml0aWFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRNYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRNYWluO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRNYWluLnZhbHVlO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5faW5wdXRNYWluLnZhbHVlID0gZGF0YTtcbiAgICB9XG4gICAgaW5zZXJ0QXRDdXJzb3IoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBzdGFydFBvcyA9IHRoaXMuX2lucHV0TWFpbi5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgbGV0IGVuZFBvcyA9IHRoaXMuX2lucHV0TWFpbi5zZWxlY3Rpb25FbmQ7XG4gICAgICAgIGxldCBvbGRWYWwgPSB0aGlzLl9pbnB1dE1haW4udmFsdWU7XG4gICAgICAgIGxldCBuZXdWYWwgPSAoc3RhcnRQb3MgPiAwID8gb2xkVmFsLnN1YnN0cmluZygwLCBzdGFydFBvcykgOiBcIlwiKSArIGRhdGFcbiAgICAgICAgICAgICsgKGVuZFBvcyA8IG9sZFZhbC5sZW5ndGggPyBvbGRWYWwuc3Vic3RyaW5nKGVuZFBvcykgOiBcIlwiKTtcbiAgICAgICAgdGhpcy5faW5wdXRNYWluLnZhbHVlID0gbmV3VmFsO1xuICAgICAgICB0aGlzLl9pbnB1dE1haW4uc2VsZWN0aW9uU3RhcnQgPSBzdGFydFBvcztcbiAgICAgICAgdGhpcy5faW5wdXRNYWluLnNlbGVjdGlvbkVuZCA9IHN0YXJ0UG9zICsgZGF0YS5sZW5ndGg7XG4gICAgfVxuICAgIGdldCBpbnB1dE1haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dE1haW47XG4gICAgfVxufVxuZXhwb3J0cy5RaW5TdHJpbmcgPSBRaW5TdHJpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5UYWJzID0gdm9pZCAwO1xuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XG5jb25zdCBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xuY29uc3QgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XG5jbGFzcyBRaW5UYWJzIGV4dGVuZHMgcWluX2NvbHVtbl8xLlFpbkNvbHVtbiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9xaW5UYWJzID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xuICAgICAgICB0aGlzLl9xaW5QYW5lbCA9IG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpO1xuICAgICAgICB0aGlzLnRhYnMgPSBbXTtcbiAgICAgICAgdGhpcy5fcWluVGFicy5pbnN0YWxsKHRoaXMpO1xuICAgICAgICB0aGlzLl9xaW5QYW5lbC5pbnN0YWxsKHRoaXMpO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFiIG9mIG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUYWIodGFiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRUYWIodGFiKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHsgbGFiZWw6IG5ldyBxaW5fbGFiZWxfMS5RaW5MYWJlbCh0YWIudGl0bGUpIH0pO1xuICAgICAgICBidXR0b24ucHV0QXNCYWNrZ3JvdW5kKHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckluYWN0aXZlKTtcbiAgICAgICAgYnV0dG9uLmFkZEFjdGlvbihxaW5FdmVudCA9PiB7XG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWV3ZXIodGFiLnZpZXdlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b24uaW5zdGFsbCh0aGlzLl9xaW5UYWJzKTtcbiAgICAgICAgbGV0IGZpcnN0ID0gdGhpcy50YWJzLmxlbmd0aCA9PSAwO1xuICAgICAgICBsZXQgdGFiUmVmID0ge1xuICAgICAgICAgICAgdGl0bGU6IHRhYi50aXRsZSxcbiAgICAgICAgICAgIHZpZXdlcjogdGFiLnZpZXdlcixcbiAgICAgICAgICAgIGJ1dHRvblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRhYnMucHVzaCh0YWJSZWYpO1xuICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1ZpZXdlcih0YWIudmlld2VyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93VGFiKHRpdGxlKSB7XG4gICAgICAgIGZvciAoY29uc3QgdGFiIG9mIHRoaXMudGFicykge1xuICAgICAgICAgICAgaWYgKHRhYi50aXRsZSA9PSB0aXRsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZXdlcih0YWIudmlld2VyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93Vmlld2VyKHZpZXdlcikge1xuICAgICAgICB0aGlzLl9xaW5QYW5lbC5jbGVhckNoaWxkcmVuKCk7XG4gICAgICAgIHZpZXdlci5pbnN0YWxsKHRoaXMuX3FpblBhbmVsKTtcbiAgICAgICAgZm9yIChjb25zdCB0YWIgb2YgdGhpcy50YWJzKSB7XG4gICAgICAgICAgICBpZiAodGFiLnZpZXdlciA9PSB2aWV3ZXIpIHtcbiAgICAgICAgICAgICAgICB0YWIuYnV0dG9uLnB1dEFzQmFja2dyb3VuZChxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JBY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFiLmJ1dHRvbi5wdXRBc0JhY2tncm91bmQocWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9ySW5hY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBxaW5UYWJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluVGFicztcbiAgICB9XG4gICAgZ2V0IHFpblBhbmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcWluUGFuZWw7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5UYWJzID0gUWluVGFicztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi10YWJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Ub29scyA9IHZvaWQgMDtcbmNvbnN0IHJlZlFpbnBlbCA9IHdpbmRvdy5mcmFtZUVsZW1lbnQucWlucGVsO1xuZnVuY3Rpb24gcWlucGVsKCkge1xuICAgIHJldHVybiByZWZRaW5wZWw7XG59XG5leHBvcnRzLlFpblRvb2xzID0ge1xuICAgIHFpbnBlbFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi10b29scy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluRm9vdCA9IGV4cG9ydHMuUWluRmlsZXNEZXNjcmlwdG9yID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSBleHBvcnRzLlFpbkFybSA9IGV4cG9ydHMuUWluRHJhZ0NhbGxzID0gZXhwb3J0cy5RaW5XYWl0ZXJzID0gZXhwb3J0cy5RaW5FdmVudCA9IGV4cG9ydHMuUWluU291bCA9IGV4cG9ydHMuUWluQm9keSA9IGV4cG9ydHMuUWluSGVhZCA9IGV4cG9ydHMuUWluR3JhbmRldXIgPSBleHBvcnRzLlFpbkJvdW5kcyA9IGV4cG9ydHMuUWluRGltZW5zaW9uID0gZXhwb3J0cy5RaW5Qb2ludCA9IGV4cG9ydHMuUWluU2tpbiA9IGV4cG9ydHMuUWluU3R5bGVzID0gdm9pZCAwO1xudmFyIHFpbl9za2luXzEgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblN0eWxlc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fMS5RaW5TdHlsZXM7IH0gfSk7XG52YXIgcWluX3NraW5fMiA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU2tpblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fMi5RaW5Ta2luOyB9IH0pO1xudmFyIHFpbl9oZWFkXzEgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBvaW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF8xLlFpblBvaW50OyB9IH0pO1xudmFyIHFpbl9oZWFkXzIgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkRpbWVuc2lvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfMi5RaW5EaW1lbnNpb247IH0gfSk7XG52YXIgcWluX2hlYWRfMyA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm91bmRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF8zLlFpbkJvdW5kczsgfSB9KTtcbnZhciBxaW5faGVhZF80ID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5HcmFuZGV1clwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfNC5RaW5HcmFuZGV1cjsgfSB9KTtcbnZhciBxaW5faGVhZF81ID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5IZWFkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF81LlFpbkhlYWQ7IH0gfSk7XG52YXIgcWluX2JvZHlfMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib2R5XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm9keVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2JvZHlfMS5RaW5Cb2R5OyB9IH0pO1xudmFyIHFpbl9zb3VsXzEgPSByZXF1aXJlKFwiLi9xaW4tc291bFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNvdWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zb3VsXzEuUWluU291bDsgfSB9KTtcbnZhciBxaW5fYXJtXzEgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRXZlbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1fMS5RaW5FdmVudDsgfSB9KTtcbnZhciBxaW5fYXJtXzIgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluV2FpdGVyc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV8yLlFpbldhaXRlcnM7IH0gfSk7XG52YXIgcWluX2FybV8zID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkRyYWdDYWxsc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV8zLlFpbkRyYWdDYWxsczsgfSB9KTtcbnZhciBxaW5fYXJtXzQgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQXJtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzQuUWluQXJtOyB9IH0pO1xudmFyIHFpbl9mb290XzEgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzTmF0dXJlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF8xLlFpbkZpbGVzTmF0dXJlOyB9IH0pO1xudmFyIHFpbl9mb290XzIgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzT3BlcmF0aW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF8yLlFpbkZpbGVzT3BlcmF0aW9uOyB9IH0pO1xudmFyIHFpbl9mb290XzMgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzRGVzY3JpcHRvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfMy5RaW5GaWxlc0Rlc2NyaXB0b3I7IH0gfSk7XG52YXIgcWluX2Zvb3RfNCA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRm9vdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfNC5RaW5Gb290OyB9IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Bcm0gPSBleHBvcnRzLlFpbkRyYWdDYWxscyA9IGV4cG9ydHMuUWluV2FpdGVycyA9IGV4cG9ydHMuUWluRXZlbnQgPSB2b2lkIDA7XG5jb25zdCBxaW5fc2tpbl8xID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XG5jbGFzcyBRaW5FdmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZnJvbU9yaWdpbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZnJvbVR5cGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyb21Qb2ludGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0FsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0N0cmwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNTaGlmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc01ldGEgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0VudGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNFc2NhcGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NwYWNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEb3VibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0xvbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5rZXlUeXBlZCA9IFwiXCI7XG4gICAgICAgIHRoaXMucG9pbnRPblggPSAtMTtcbiAgICAgICAgdGhpcy5wb2ludE9uWSA9IC0xO1xuICAgICAgICB0aGlzLmlzRmlyc3RCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc01pZGRsZUJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2Vjb25kQnV0dG9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNPbmVGaW5nZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1R3b0ZpbmdlcnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1RocmVlRmluZ2VycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0b3BFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBzZXRGcm9tS2V5Ym9hcmQoZXYpIHtcbiAgICAgICAgdGhpcy5mcm9tT3JpZ2luID0gZXYudGFyZ2V0O1xuICAgICAgICB0aGlzLmZyb21UeXBpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0FsdCA9IGV2LmFsdEtleTtcbiAgICAgICAgdGhpcy5oYXNDdHJsID0gZXYuY3RybEtleTtcbiAgICAgICAgdGhpcy5oYXNTaGlmdCA9IGV2LnNoaWZ0S2V5O1xuICAgICAgICB0aGlzLmhhc01ldGEgPSBldi5tZXRhS2V5O1xuICAgICAgICB0aGlzLmlzRW50ZXIgPSBpc0tleUVudGVyKGV2KTtcbiAgICAgICAgdGhpcy5pc0VzY2FwZSA9IGlzS2V5RXNjYXBlKGV2KTtcbiAgICAgICAgdGhpcy5pc1NwYWNlID0gaXNLZXlTcGFjZShldik7XG4gICAgICAgIHRoaXMua2V5VHlwZWQgPSBldi5rZXk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXRGcm9tTW91c2UoZXYpIHtcbiAgICAgICAgdGhpcy5mcm9tT3JpZ2luID0gZXYudGFyZ2V0O1xuICAgICAgICB0aGlzLmZyb21Qb2ludGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFzQWx0ID0gZXYuYWx0S2V5O1xuICAgICAgICB0aGlzLmhhc0N0cmwgPSBldi5jdHJsS2V5O1xuICAgICAgICB0aGlzLmhhc1NoaWZ0ID0gZXYuc2hpZnRLZXk7XG4gICAgICAgIHRoaXMuaGFzTWV0YSA9IGV2Lm1ldGFLZXk7XG4gICAgICAgIHRoaXMucG9pbnRPblggPSBldi5jbGllbnRYO1xuICAgICAgICB0aGlzLnBvaW50T25ZID0gZXYuY2xpZW50WTtcbiAgICAgICAgdGhpcy5pc0ZpcnN0QnV0dG9uID0gZXYuYnV0dG9uID09IDA7XG4gICAgICAgIHRoaXMuaXNNaWRkbGVCdXR0b24gPSBldi5idXR0b24gPT0gMTtcbiAgICAgICAgdGhpcy5pc1NlY29uZEJ1dHRvbiA9IGV2LmJ1dHRvbiA9PSAyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0RnJvbVRvdWNoKGV2KSB7XG4gICAgICAgIHRoaXMuZnJvbU9yaWdpbiA9IGV2LnRhcmdldDtcbiAgICAgICAgdGhpcy5mcm9tUG9pbnRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0FsdCA9IGV2LmFsdEtleTtcbiAgICAgICAgdGhpcy5oYXNDdHJsID0gZXYuY3RybEtleTtcbiAgICAgICAgdGhpcy5oYXNTaGlmdCA9IGV2LnNoaWZ0S2V5O1xuICAgICAgICB0aGlzLmhhc01ldGEgPSBldi5tZXRhS2V5O1xuICAgICAgICBpZiAoZXYudG91Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoZXYudG91Y2hlcy5sZW5ndGggLyAyKSB8IDA7XG4gICAgICAgICAgICB0aGlzLnBvaW50T25YID0gZXYudG91Y2hlc1tpbmRleF0uY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMucG9pbnRPblkgPSBldi50b3VjaGVzW2luZGV4XS5jbGllbnRZO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPbmVGaW5nZXIgPSBldi50b3VjaGVzLmxlbmd0aCA9PSAxO1xuICAgICAgICB0aGlzLmlzVHdvRmluZ2VycyA9IGV2LnRvdWNoZXMubGVuZ3RoID09IDI7XG4gICAgICAgIHRoaXMuaXNUaHJlZUZpbmdlcnMgPSBldi50b3VjaGVzLmxlbmd0aCA9PSAzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zdG9wRXZlbnQgPSB0cnVlO1xuICAgIH1cbiAgICBpc1ByaW1hcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLmZyb21UeXBpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRW50ZXIgfHwgdGhpcy5pc1NwYWNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZnJvbVBvaW50aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0ZpcnN0QnV0dG9uIHx8IHRoaXMuaXNPbmVGaW5nZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc0F1eGlsaWFyeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJvbVR5cGluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQ3RybCAmJiB0aGlzLmhhc0FsdCAmJiB0aGlzLmlzU3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5mcm9tUG9pbnRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzTWlkZGxlQnV0dG9uIHx8IHRoaXMuaXNUaHJlZUZpbmdlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc1NlY29uZGFyeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJvbVR5cGluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQ3RybCAmJiAhdGhpcy5oYXNBbHQgJiYgdGhpcy5pc1NwYWNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZnJvbVBvaW50aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1NlY29uZEJ1dHRvbiB8fCB0aGlzLmlzVHdvRmluZ2VycztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0cy5RaW5FdmVudCA9IFFpbkV2ZW50O1xuO1xuY2xhc3MgUWluV2FpdGVycyB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbCkge1xuICAgICAgICB0aGlzLndhaXRlcnMgPSBpbml0aWFsID8gaW5pdGlhbCA6IFtdO1xuICAgIH1cbiAgICBhZGRXYWl0ZXIod2FpdGVyKSB7XG4gICAgICAgIHRoaXMud2FpdGVycy5wdXNoKHdhaXRlcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBoYXNXYWl0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRlcnMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgc2VuZFdhaXRlcnMocmVzdWx0KSB7XG4gICAgICAgIGZvciAoY29uc3Qgd2FpdGVyIG9mIHRoaXMud2FpdGVycykge1xuICAgICAgICAgICAgd2FpdGVyKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlFpbldhaXRlcnMgPSBRaW5XYWl0ZXJzO1xuY2xhc3MgUWluRHJhZ0NhbGxzIHtcbn1cbmV4cG9ydHMuUWluRHJhZ0NhbGxzID0gUWluRHJhZ0NhbGxzO1xuZnVuY3Rpb24gc3RvcEV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxudmFyIGxhc3RFdmVudFBvaW50ZXIgPSBudWxsO1xuZnVuY3Rpb24gbWFrZUV2ZW50UG9pbnRlcihpc0Rvd24sIGV2KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBwb3NYOiAwLFxuICAgICAgICBwb3NZOiAwLFxuICAgIH07XG4gICAgaWYgKGV2IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgICBpZiAoZXYuY2xpZW50WCB8fCBldi5jbGllbnRZKSB7XG4gICAgICAgICAgICByZXN1bHQucG9zWCA9IGV2LmNsaWVudFg7XG4gICAgICAgICAgICByZXN1bHQucG9zWSA9IGV2LmNsaWVudFk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXYgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgIGlmIChldi50b3VjaGVzICYmXG4gICAgICAgICAgICBldi50b3VjaGVzWzBdICYmXG4gICAgICAgICAgICAoZXYudG91Y2hlc1swXS5jbGllbnRYIHx8IGV2LnRvdWNoZXNbMF0uY2xpZW50WSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wb3NYID0gZXYudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgcmVzdWx0LnBvc1kgPSBldi50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzRG93bikge1xuICAgICAgICBsYXN0RXZlbnRQb2ludGVyID0gZXY7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBpc0V2ZW50UG9pbnRlckRvdWJsZShpc0Rvd24sIGV2KSB7XG4gICAgaWYgKCFpc0Rvd24gfHwgbGFzdEV2ZW50UG9pbnRlciA9PSBudWxsIHx8IGV2ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB0aW1lRGlmID0gZXYudGltZVN0YW1wIC0gbGFzdEV2ZW50UG9pbnRlci50aW1lU3RhbXA7XG4gICAgcmV0dXJuIHRpbWVEaWYgPCA0NTA7XG59XG5mdW5jdGlvbiBpc0V2ZW50UG9pbnRlckxvbmcoaXNEb3duLCBldikge1xuICAgIGlmICghaXNEb3duIHx8IGxhc3RFdmVudFBvaW50ZXIgPT0gbnVsbCB8fCBldiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgdGltZURpZiA9IGV2LnRpbWVTdGFtcCAtIGxhc3RFdmVudFBvaW50ZXIudGltZVN0YW1wO1xuICAgIHJldHVybiB0aW1lRGlmID4gODQwO1xufVxuZnVuY3Rpb24gaXNLZXlJbkxpc3QoZXYsIGxpc3QpIHtcbiAgICBsZXQga2V5TG93ZXIgPSBldi5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gbGlzdC5pbmRleE9mKGtleUxvd2VyKSA+IC0xO1xufVxuZnVuY3Rpb24gaXNLZXlFbnRlcihldikge1xuICAgIHJldHVybiBpc0tleUluTGlzdChldiwgW1wiZW50ZXJcIiwgXCJyZXR1cm5cIl0pIHx8IGV2LmtleUNvZGUgPT09IDEzO1xufVxuZnVuY3Rpb24gaXNLZXlFc2NhcGUoZXYpIHtcbiAgICByZXR1cm4gaXNLZXlJbkxpc3QoZXYsIFtcImVzY1wiLCBcImVzY2FwZVwiXSkgfHwgZXYua2V5Q29kZSA9PT0gMjc7XG59XG5mdW5jdGlvbiBpc0tleVNwYWNlKGV2KSB7XG4gICAgcmV0dXJuIGlzS2V5SW5MaXN0KGV2LCBbXCIgXCIsIFwic3BhY2VcIiwgXCJzcGFjZWJhclwiXSkgfHwgZXYua2V5Q29kZSA9PT0gMzI7XG59XG5mdW5jdGlvbiBhZGRBY3Rpb24oZWxlbWVudCwgYWN0aW9uKSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBzdG9wRXZlbnQpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGFjdGlvbktleWJvYXJkKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RvcEV2ZW50KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGFjdGlvbk1vdXNlKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHN0b3BFdmVudCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgYWN0aW9uVG91Y2gpO1xuICAgIGZ1bmN0aW9uIGFjdGlvbktleWJvYXJkKGV2KSB7XG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudCgpLnNldEZyb21LZXlib2FyZChldik7XG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0aW9uTW91c2UoZXYpIHtcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KCkuc2V0RnJvbU1vdXNlKGV2KTtcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3BFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhY3Rpb25Ub3VjaChldikge1xuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQoKS5zZXRGcm9tVG91Y2goZXYpO1xuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xuICAgICAgICBpZiAocWluRXZlbnQuc3RvcEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkQWN0aW9uRW50ZXIoZWxlbWVudCwgYWN0aW9uKSB7XG4gICAgZWxlbWVudC5vbmtleWRvd24gPSBhY3Rpb25LZXlib2FyZDtcbiAgICBmdW5jdGlvbiBhY3Rpb25LZXlib2FyZChldikge1xuICAgICAgICBpZiAoaXNLZXlFbnRlcihldikpIHtcbiAgICAgICAgICAgIGFjdGlvbihuZXcgUWluRXZlbnQoKS5zZXRGcm9tS2V5Ym9hcmQoZXYpKTtcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcHV0QWN0aW9uUHJveHkoZGVzdGlueSwgb3JpZ2lucykge1xuICAgIGZvciAoY29uc3Qgb3JpZ2luIG9mIG9yaWdpbnMpIHtcbiAgICAgICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICAgICAgICAgIGRlc3Rpbnkub25rZXlkb3duKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGUgPT4ge1xuICAgICAgICAgICAgZGVzdGlueS5vbm1vdXNldXAoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGUgPT4ge1xuICAgICAgICAgICAgZGVzdGlueS5vbnRvdWNoZW5kKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRNb3Zlcihzb3VyY2VzLCB0YXJnZXQsIGRyYWdDYWxscykge1xuICAgIHZhciBkcmFnSW5pdEV2ZW50WCA9IDA7XG4gICAgdmFyIGRyYWdJbml0RXZlbnRZID0gMDtcbiAgICB2YXIgZHJhZ0luaXRQb3NYID0gMDtcbiAgICB2YXIgZHJhZ0luaXRQb3NZID0gMDtcbiAgICBmb3IgKGxldCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICBzb3VyY2Uub25tb3VzZWRvd24gPSBvbk1vdmVySW5pdDtcbiAgICAgICAgc291cmNlLm9udG91Y2hzdGFydCA9IG9uTW92ZXJJbml0O1xuICAgICAgICBzb3VyY2Uub25kcmFnc3RhcnQgPSBzdG9wRXZlbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW92ZXJJbml0KGV2KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRQb2ludGVyRG91YmxlKHRydWUsIGV2KSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRQb2ludGVyTG9uZyh0cnVlLCBldikpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcih0cnVlLCBldik7XG4gICAgICAgIGRyYWdJbml0RXZlbnRYID0gcG9pbnRlci5wb3NYO1xuICAgICAgICBkcmFnSW5pdEV2ZW50WSA9IHBvaW50ZXIucG9zWTtcbiAgICAgICAgZHJhZ0luaXRQb3NYID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmxlZnQsIDEwKTtcbiAgICAgICAgZHJhZ0luaXRQb3NZID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLnRvcCwgMTApO1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uTW92ZXJNb3ZlO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uTW92ZXJNb3ZlO1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25Nb3ZlckNsb3NlO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvbk1vdmVyQ2xvc2U7XG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdmVyTW92ZShldikge1xuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcihmYWxzZSwgZXYpO1xuICAgICAgICB2YXIgZHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdEV2ZW50WDtcbiAgICAgICAgdmFyIGRyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRFdmVudFk7XG4gICAgICAgIHZhciBkcmFnRmluYWxYID0gZHJhZ0luaXRQb3NYICsgZHJhZ0RpZlg7XG4gICAgICAgIHZhciBkcmFnRmluYWxZID0gZHJhZ0luaXRQb3NZICsgZHJhZ0RpZlk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gKGRyYWdGaW5hbFggPiAwID8gZHJhZ0ZpbmFsWCA6IDApICsgXCJweFwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gKGRyYWdGaW5hbFkgPiAwID8gZHJhZ0ZpbmFsWSA6IDApICsgXCJweFwiO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbk1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3ZlckNsb3NlKGV2KSB7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLnNob3dBbGxJRnJhbWVzKCk7XG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkVuZCkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkUmVzaXplcihzb3VyY2VzLCB0YXJnZXQsIGRyYWdDYWxscykge1xuICAgIHZhciBkcmFnSW5pdEV2ZW50WCA9IDA7XG4gICAgdmFyIGRyYWdJbml0RXZlbnRZID0gMDtcbiAgICB2YXIgZHJhZ0luaXRXaWR0aCA9IDA7XG4gICAgdmFyIGRyYWdJbml0SGVpZ2h0ID0gMDtcbiAgICBmb3IgKGxldCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICBzb3VyY2Uub25tb3VzZWRvd24gPSBvblJlc2l6ZXJJbml0O1xuICAgICAgICBzb3VyY2Uub250b3VjaHN0YXJ0ID0gb25SZXNpemVySW5pdDtcbiAgICAgICAgc291cmNlLm9uZHJhZ3N0YXJ0ID0gc3RvcEV2ZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblJlc2l6ZXJJbml0KGV2KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRQb2ludGVyRG91YmxlKHRydWUsIGV2KSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRQb2ludGVyTG9uZyh0cnVlLCBldikpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcih0cnVlLCBldik7XG4gICAgICAgIGRyYWdJbml0RXZlbnRYID0gcG9pbnRlci5wb3NYO1xuICAgICAgICBkcmFnSW5pdEV2ZW50WSA9IHBvaW50ZXIucG9zWTtcbiAgICAgICAgZHJhZ0luaXRXaWR0aCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS53aWR0aCwgMTApO1xuICAgICAgICBkcmFnSW5pdEhlaWdodCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS5oZWlnaHQsIDEwKTtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBvblJlc2l6ZXJNb3ZlO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uUmVzaXplck1vdmU7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvblJlc2l6ZXJDbG9zZTtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25SZXNpemVyQ2xvc2U7XG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblJlc2l6ZXJNb3ZlKGV2KSB7XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKGZhbHNlLCBldik7XG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZYID0gcG9pbnRlci5wb3NYIC0gZHJhZ0luaXRFdmVudFg7XG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRFdmVudFk7XG4gICAgICAgIHZhciBmcmFtZURyYWdGaW5hbFdpZHRoID0gZHJhZ0luaXRXaWR0aCArIGZyYW1lRHJhZ0RpZlg7XG4gICAgICAgIHZhciBmcmFtZURyYWdGaW5hbEhlaWdodCA9IGRyYWdJbml0SGVpZ2h0ICsgZnJhbWVEcmFnRGlmWTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gKGZyYW1lRHJhZ0ZpbmFsV2lkdGggPiAwID8gZnJhbWVEcmFnRmluYWxXaWR0aCA6IDApICsgXCJweFwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID1cbiAgICAgICAgICAgIChmcmFtZURyYWdGaW5hbEhlaWdodCA+IDAgPyBmcmFtZURyYWdGaW5hbEhlaWdodCA6IDApICsgXCJweFwiO1xuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbk1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25SZXNpemVyQ2xvc2UoZXYpIHtcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uc2hvd0FsbElGcmFtZXMoKTtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25FbmQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRTY3JvbGxlcih0YXJnZXQsIGRyYWdDYWxscykge1xuICAgIHZhciBkcmFnSW5pdFggPSAwO1xuICAgIHZhciBkcmFnSW5pdFkgPSAwO1xuICAgIHZhciBkcmFnU2Nyb2xsWCA9IDA7XG4gICAgdmFyIGRyYWdTY3JvbGxZID0gMDtcbiAgICB0YXJnZXQub25kcmFnc3RhcnQgPSBzdG9wRXZlbnQ7XG4gICAgdGFyZ2V0Lm9udG91Y2hzdGFydCA9IG9uU2Nyb2xsZXJJbml0O1xuICAgIHRhcmdldC5vbm1vdXNlZG93biA9IG9uU2Nyb2xsZXJJbml0O1xuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJJbml0KGV2KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRQb2ludGVyRG91YmxlKHRydWUsIGV2KSkge1xuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRQb2ludGVyTG9uZyh0cnVlLCBldikpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcih0cnVlLCBldik7XG4gICAgICAgIGRyYWdJbml0WCA9IHBvaW50ZXIucG9zWDtcbiAgICAgICAgZHJhZ0luaXRZID0gcG9pbnRlci5wb3NZO1xuICAgICAgICBkcmFnU2Nyb2xsWCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgICAgICBkcmFnU2Nyb2xsWSA9IHRhcmdldC5zY3JvbGxUb3A7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25TY3JvbGxlck1vdmU7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25TY3JvbGxlck1vdmU7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvblNjcm9sbGVyQ2xvc2U7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uU2Nyb2xsZXJDbG9zZTtcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJNb3ZlKGV2KSB7XG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKGZhbHNlLCBldik7XG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0WDtcbiAgICAgICAgdmFyIGRyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRZO1xuICAgICAgICB2YXIgZHJhZ05ld1ggPSBkcmFnU2Nyb2xsWCAtIGRyYWdEaWZYO1xuICAgICAgICB2YXIgZHJhZ05ld1kgPSBkcmFnU2Nyb2xsWSAtIGRyYWdEaWZZO1xuICAgICAgICB0YXJnZXQuc2Nyb2xsVG8oZHJhZ05ld1gsIGRyYWdOZXdZKTtcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Nb3ZlKSB7XG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJDbG9zZShldikge1xuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5zaG93QWxsSUZyYW1lcygpO1xuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25FbmQpIHtcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluQXJtID0ge1xuICAgIHN0b3BFdmVudCxcbiAgICBtYWtlRXZlbnRQb2ludGVyLFxuICAgIGlzRXZlbnRQb2ludGVyRG91YmxlLFxuICAgIGlzRXZlbnRQb2ludGVyTG9uZyxcbiAgICBpc0tleUluTGlzdCxcbiAgICBpc0tleUVudGVyLFxuICAgIGlzS2V5U3BhY2UsXG4gICAgYWRkQWN0aW9uLFxuICAgIGFkZEFjdGlvbkVudGVyLFxuICAgIHB1dEFjdGlvblByb3h5LFxuICAgIGFkZE1vdmVyLFxuICAgIGFkZFJlc2l6ZXIsXG4gICAgYWRkU2Nyb2xsZXIsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWFybS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluQm9keSA9IHZvaWQgMDtcbmZ1bmN0aW9uIGdldFRleHRMaW5lcyhmcm9tVGV4dCkge1xuICAgIHJldHVybiBmcm9tVGV4dC5tYXRjaCgvW15cXHJcXG5dKy9nKTtcbn1cbmZ1bmN0aW9uIGdldENTVlJvd3MoZnJvbVRleHQsIG5hbWVzKSB7XG4gICAgdmFyIGxpbmVzID0gZ2V0VGV4dExpbmVzKGZyb21UZXh0KTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xuICAgICAgICBsZXQgcm93ID0gKCFuYW1lcykgPyBbXSA6IHt9O1xuICAgICAgICBsZXQgaW5zaWRlX3F1b3RlcyA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sdW1uX3ZhbHVlID0gXCJcIjtcbiAgICAgICAgbGV0IGNvbHVtbl9pbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IGNoYXJfaW5kZXggPSAwOyBjaGFyX2luZGV4IDwgbGluZS5sZW5ndGg7IGNoYXJfaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGFjdHVhbCA9IGxpbmUuY2hhckF0KGNoYXJfaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGluc2lkZV9xdW90ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsID09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBjaGFyX2luZGV4IDwgbGluZS5sZW5ndGggLSAxID8gbGluZS5jaGFyQXQoY2hhcl9pbmRleCArIDEpIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgPT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJfaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2lkZV9xdW90ZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsID09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zaWRlX3F1b3RlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFjdHVhbCA9PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlID0gdW5tYXNrU3BlY2lhbENoYXJzKGNvbHVtbl92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKGNvbHVtbl92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sdW1uX25hbWUgPSBcImNvbF9cIiArIGNvbHVtbl9pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW5faW5kZXggPCBuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5fbmFtZSA9IG5hbWVzW2NvbHVtbl9pbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dbY29sdW1uX25hbWVdID0gY29sdW1uX3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl9pbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29sdW1uX3ZhbHVlID0gdW5tYXNrU3BlY2lhbENoYXJzKGNvbHVtbl92YWx1ZSk7XG4gICAgICAgIGlmICghbmFtZXMpIHtcbiAgICAgICAgICAgIHJvdy5wdXNoKGNvbHVtbl92YWx1ZSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNvbHVtbl9uYW1lID0gXCJjb2xfXCIgKyBjb2x1bW5faW5kZXg7XG4gICAgICAgICAgICBpZiAoY29sdW1uX2luZGV4IDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uX25hbWUgPSBuYW1lc1tjb2x1bW5faW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93W2NvbHVtbl9uYW1lXSA9IGNvbHVtbl92YWx1ZTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1hc2tTcGVjaWFsQ2hhcnMoZnJvbVRleHQpIHtcbiAgICByZXR1cm4gZnJvbVRleHRcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcXCIsIFwiXFxcXFxcXFxcIilcbiAgICAgICAgLnJlcGxhY2UoXCJcXHJcIiwgXCJcXFxcclwiKVxuICAgICAgICAucmVwbGFjZShcIlxcblwiLCBcIlxcXFxuXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsIFwiXFxcXHRcIik7XG59XG5mdW5jdGlvbiB1bm1hc2tTcGVjaWFsQ2hhcnMoZnJvbVRleHQpIHtcbiAgICByZXR1cm4gZnJvbVRleHRcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcXFxcXFwiLCBcIlxcXFxcIilcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcclwiLCBcIlxcclwiKVxuICAgICAgICAucmVwbGFjZShcIlxcXFxuXCIsIFwiXFxuXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXHRcIiwgXCJcXHRcIik7XG59XG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcnMoc291cmNlKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBvcGVuID0gZmFsc2U7XG4gICAgbGV0IGFjdHVhbCA9IFwiXCI7XG4gICAgZm9yIChjb25zdCBsZXR0ZXIgb2YgQXJyYXkuZnJvbShzb3VyY2UpKSB7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICBpZiAobGV0dGVyID09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBvcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhY3R1YWwpO1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdHVhbCArPSBsZXR0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobGV0dGVyID09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBvcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFjdHVhbCk7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGV0dGVyID09ICcgJykge1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYWN0dWFsKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3R1YWwgKz0gbGV0dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLlFpbkJvZHkgPSB7XG4gICAgZ2V0VGV4dExpbmVzLFxuICAgIGdldENTVlJvd3MsXG4gICAgbWFza1NwZWNpYWxDaGFycyxcbiAgICB1bm1hc2tTcGVjaWFsQ2hhcnMsXG4gICAgcGFyc2VQYXJhbWV0ZXJzLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1ib2R5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5RaW5Gb290ID0gZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc05hdHVyZSA9IHZvaWQgMDtcbnZhciBRaW5GaWxlc05hdHVyZTtcbihmdW5jdGlvbiAoUWluRmlsZXNOYXR1cmUpIHtcbiAgICBRaW5GaWxlc05hdHVyZVtcIkJPVEhcIl0gPSBcImJvdGhcIjtcbiAgICBRaW5GaWxlc05hdHVyZVtcIkRJUkVDVE9SSUVTXCJdID0gXCJkaXJlY3Rvcmllc1wiO1xuICAgIFFpbkZpbGVzTmF0dXJlW1wiRklMRVNcIl0gPSBcImZpbGVzXCI7XG59KShRaW5GaWxlc05hdHVyZSA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgfHwgKGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSB7fSkpO1xudmFyIFFpbkZpbGVzT3BlcmF0aW9uO1xuKGZ1bmN0aW9uIChRaW5GaWxlc09wZXJhdGlvbikge1xuICAgIFFpbkZpbGVzT3BlcmF0aW9uW1wiT1BFTlwiXSA9IFwib3BlblwiO1xuICAgIFFpbkZpbGVzT3BlcmF0aW9uW1wiU0FWRVwiXSA9IFwic2F2ZVwiO1xufSkoUWluRmlsZXNPcGVyYXRpb24gPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uIHx8IChleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0ge30pKTtcbmNsYXNzIFFpbkZpbGVzRGVzY3JpcHRvciB7XG59XG5leHBvcnRzLlFpbkZpbGVzRGVzY3JpcHRvciA9IFFpbkZpbGVzRGVzY3JpcHRvcjtcbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxIb3N0KCkge1xuICAgIHZhciBsb2NhdGlvbiA9IGdldExvY2F0aW9uKCk7XG4gICAgdmFyIHN0YXJ0ID0gbG9jYXRpb24uaW5kZXhPZihcIjovL1wiKTtcbiAgICBpZiAoc3RhcnQgPT0gLTEpIHtcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RhcnQgKz0gMztcbiAgICB9XG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbi5zdWJzdHJpbmcoc3RhcnQpO1xuICAgIHJldHVybiBsb2NhdGlvbi5pbmRleE9mKFwibG9jYWxob3N0XCIpID09PSAwIHx8IGxvY2F0aW9uLmluZGV4T2YoXCIxMjcuMC4wLjFcIikgPT09IDA7XG59XG5mdW5jdGlvbiBnZXRTZXBhcmF0b3Iob2ZQYXRoKSB7XG4gICAgbGV0IHJlc3VsdCA9IFwiL1wiO1xuICAgIGlmIChvZlBhdGggJiYgb2ZQYXRoLmluZGV4T2YoXCJcXFxcXCIpID4gLTEpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJcXFxcXCI7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRQYXRoSm9pbihwYXRoQSwgcGF0aEIpIHtcbiAgICBpZiAocGF0aEEgPT0gbnVsbCB8fCBwYXRoQSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGF0aEEgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAocGF0aEIgPT0gbnVsbCB8fCBwYXRoQiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGF0aEIgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAocGF0aEEubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHBhdGhCO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoQi5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4gcGF0aEE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgdW5pb24gPSBcIi9cIjtcbiAgICAgICAgaWYgKHBhdGhBLmluZGV4T2YoXCJcXFxcXCIpID4gLTEgfHwgcGF0aEIuaW5kZXhPZihcIlxcXFxcIikgPiAtMSkge1xuICAgICAgICAgICAgdW5pb24gPSBcIlxcXFxcIjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGF0aEFFbmQgPSBwYXRoQS5zdWJzdHJpbmcocGF0aEEubGVuZ3RoIC0gMSwgcGF0aEEubGVuZ3RoKTtcbiAgICAgICAgbGV0IHBhdGhCU3RhcnQgPSBwYXRoQi5zdWJzdHJpbmcoMCwgMSk7XG4gICAgICAgIGlmIChwYXRoQUVuZCA9PSB1bmlvbiB8fCBwYXRoQlN0YXJ0ID09IHVuaW9uKSB7XG4gICAgICAgICAgICB1bmlvbiA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGhBICsgdW5pb24gKyBwYXRoQjtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRSb290KHBhdGgpIHtcbiAgICBpZiAocGF0aCkge1xuICAgICAgICBsZXQgc2VwYXJhdG9yID0gZ2V0U2VwYXJhdG9yKHBhdGgpO1xuICAgICAgICBsZXQgbGFzdCA9IHBhdGgubGFzdEluZGV4T2Yoc2VwYXJhdG9yKTtcbiAgICAgICAgaWYgKGxhc3QgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGguc3Vic3RyaW5nKDAsIGxhc3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xufVxuZnVuY3Rpb24gZ2V0U3RlbShwYXRoKSB7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgICAgbGV0IHNlcGFyYXRvciA9IGdldFNlcGFyYXRvcihwYXRoKTtcbiAgICAgICAgbGV0IGxhc3QgPSBwYXRoLmxhc3RJbmRleE9mKHNlcGFyYXRvcik7XG4gICAgICAgIGlmIChsYXN0ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXRoLnN1YnN0cmluZyhsYXN0ICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59XG5mdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKG5hbWUpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBuYW1lLmxhc3RJbmRleE9mKFwiLlwiKTtcbiAgICBpZiAocG9zaXRpb24gPiAtMSkge1xuICAgICAgICByZXR1cm4gbmFtZS5zdWJzdHJpbmcocG9zaXRpb24gKyAxKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbn1cbmNvbnN0IGFwcHNFeHRlbnNpb25zID0gW1xuICAgIFwiaHRtXCIsIFwiaHRtbFwiLCBcImNzc1wiLCBcImpzXCIsIFwianN4XCIsIFwidHNcIiwgXCJ0c3hcIiwgXCJwaHRtbFwiXG5dO1xuZnVuY3Rpb24gaXNGaWxlQXBwKGV4dGVuc2lvbikge1xuICAgIHJldHVybiBhcHBzRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcbn1cbmNvbnN0IGNtZHNFeHRlbnNpb25zID0gW1xuICAgIFwiaFwiLCBcImNcIiwgXCJocHBcIiwgXCJjcHBcIiwgXCJyc1wiLCBcImpsXCIsXG4gICAgXCJjc1wiLCBcImNzcHJvalwiLCBcImZzXCIsIFwibWxcIiwgXCJmc2lcIiwgXCJtbGlcIiwgXCJmc3hcIiwgXCJmc3NjcmlwdFwiLFxuICAgIFwiamF2YVwiLCBcImd5XCIsIFwiZ3Z5XCIsIFwiZ3Jvb3Z5XCIsIFwic2NcIiwgXCJzY2FsYVwiLCBcImNsalwiLFxuICAgIFwicHlcIiwgXCJydWJ5XCIsIFwicGhwXCIsIFwicGh0bWxcIixcbl07XG5mdW5jdGlvbiBpc0ZpbGVDbWQoZXh0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIGNtZHNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuY29uc3QgZXhlY0V4dGVuc2lvbnMgPSBbXG4gICAgXCJleGVcIiwgXCJqYXJcIiwgXCJjb21cIiwgXCJiYXRcIiwgXCJzaFwiXG5dO1xuZnVuY3Rpb24gaXNGaWxlRXhlYyhleHRlbnNpb24pIHtcbiAgICByZXR1cm4gZXhlY0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XG59XG5jb25zdCBpbWFnZUV4dGVuc2lvbnMgPSBbXG4gICAgXCJqcGdcIiwgXCJqcGVnXCIsIFwicG5nXCIsIFwiZ2lmXCIsIFwiYm1wXCJcbl07XG5mdW5jdGlvbiBpc0ZpbGVJbWFnZShleHRlbnNpb24pIHtcbiAgICByZXR1cm4gaW1hZ2VFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuY29uc3QgdmVjdG9yRXh0ZW5zaW9ucyA9IFtcbiAgICBcInN2Z1wiXG5dO1xuZnVuY3Rpb24gaXNGaWxlVmVjdG9yKGV4dGVuc2lvbikge1xuICAgIHJldHVybiB2ZWN0b3JFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuY29uc3QgbW92aWVFeHRlbnNpb25zID0gW1xuICAgIFwiYXZpXCIsIFwibXA0XCJcbl07XG5mdW5jdGlvbiBpc0ZpbGVNb3ZpZShleHRlbnNpb24pIHtcbiAgICByZXR1cm4gbW92aWVFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuY29uc3QgbXVzaWNFeHRlbnNpb25zID0gW1xuICAgIFwid2F2XCIsIFwibXAzXCJcbl07XG5mdW5jdGlvbiBpc0ZpbGVNdXNpYyhleHRlbnNpb24pIHtcbiAgICByZXR1cm4gbXVzaWNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xufVxuY29uc3QgemlwcGVkRXh0ZW5zaW9ucyA9IFtcbiAgICBcInppcFwiLCBcInJhclwiLCBcIjd6XCIsIFwidGFyXCIsIFwiZ3pcIlxuXTtcbmZ1bmN0aW9uIGlzRmlsZVppcHBlZChleHRlbnNpb24pIHtcbiAgICByZXR1cm4gemlwcGVkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcbn1cbmV4cG9ydHMuUWluRm9vdCA9IHtcbiAgICBnZXRMb2NhdGlvbixcbiAgICBpc0xvY2FsSG9zdCxcbiAgICBnZXRTZXBhcmF0b3IsXG4gICAgZ2V0UGF0aEpvaW4sXG4gICAgZ2V0Um9vdCxcbiAgICBnZXRTdGVtLFxuICAgIGdldEZpbGVFeHRlbnNpb24sXG4gICAgaXNGaWxlQXBwLFxuICAgIGlzRmlsZUNtZCxcbiAgICBpc0ZpbGVFeGVjLFxuICAgIGlzRmlsZUltYWdlLFxuICAgIGlzRmlsZVZlY3RvcixcbiAgICBpc0ZpbGVNb3ZpZSxcbiAgICBpc0ZpbGVNdXNpYyxcbiAgICBpc0ZpbGVaaXBwZWQsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWZvb3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpbkhlYWQgPSBleHBvcnRzLlFpbkdyYW5kZXVyID0gZXhwb3J0cy5RaW5Cb3VuZHMgPSBleHBvcnRzLlFpbkRpbWVuc2lvbiA9IGV4cG9ydHMuUWluUG9pbnQgPSB2b2lkIDA7XG5jbGFzcyBRaW5Qb2ludCB7XG59XG5leHBvcnRzLlFpblBvaW50ID0gUWluUG9pbnQ7XG47XG5jbGFzcyBRaW5EaW1lbnNpb24ge1xufVxuZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBRaW5EaW1lbnNpb247XG47XG5jbGFzcyBRaW5Cb3VuZHMge1xufVxuZXhwb3J0cy5RaW5Cb3VuZHMgPSBRaW5Cb3VuZHM7XG47XG52YXIgUWluR3JhbmRldXI7XG4oZnVuY3Rpb24gKFFpbkdyYW5kZXVyKSB7XG4gICAgUWluR3JhbmRldXJbXCJTTUFMTFwiXSA9IFwic21hbGxcIjtcbiAgICBRaW5HcmFuZGV1cltcIk1FRElVTVwiXSA9IFwibWVkaXVtXCI7XG4gICAgUWluR3JhbmRldXJbXCJMQVJHRVwiXSA9IFwibGFyZ2VcIjtcbn0pKFFpbkdyYW5kZXVyID0gZXhwb3J0cy5RaW5HcmFuZGV1ciB8fCAoZXhwb3J0cy5RaW5HcmFuZGV1ciA9IHt9KSk7XG5mdW5jdGlvbiBnZXREZXNrQVBJKCkge1xuICAgIHZhciB3aW4gPSB3aW5kb3c7XG4gICAgaWYgKHdpbi5kZXNrQVBJKSB7XG4gICAgICAgIHJldHVybiB3aW4uZGVza0FQSTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHdpbiA9IHdpbmRvdy5wYXJlbnQ7XG4gICAgfVxuICAgIGlmICh3aW4uZGVza0FQSSkge1xuICAgICAgICByZXR1cm4gd2luLmRlc2tBUEk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3aW4gPSB3aW5kb3cudG9wO1xuICAgIH1cbiAgICBpZiAod2luLmRlc2tBUEkpIHtcbiAgICAgICAgcmV0dXJuIHdpbi5kZXNrQVBJO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuY29uc3QgbG9nZ2VkID0gW107XG5mdW5jdGlvbiBnZXRMb2dnZWQoKSB7XG4gICAgcmV0dXJuIGxvZ2dlZDtcbn1cbmZ1bmN0aW9uIGxvZyhtZXNzYWdlKSB7XG4gICAgbG9nZ2VkLnB1c2gobWVzc2FnZSk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuICAgIGNhdGNoIChfKSB7IH1cbiAgICB0cnkge1xuICAgICAgICBnZXREZXNrQVBJKCkuc2VuZChcImxvZ09uTWFpblwiLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgY2F0Y2ggKF8pIHsgfVxufVxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyb3IsIG9yaWdpbikge1xuICAgIGxvZyhnZXRFcnJvck1lc3NhZ2UoZXJyb3IsIG9yaWdpbikpO1xufVxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yLCBvcmlnaW4pIHtcbiAgICByZXR1cm4gZ2V0VHJlYXRNZXNzYWdlKFwiUHJvYmxlbSB3aXRoOlwiLCBlcnJvciwgb3JpZ2luKTtcbn1cbmZ1bmN0aW9uIGxvZ1dhcm5pbmcoZXJyb3IsIG9yaWdpbikge1xuICAgIGxvZyhnZXRXYXJuaW5nTWVzc2FnZShlcnJvciwgb3JpZ2luKSk7XG59XG5mdW5jdGlvbiBnZXRXYXJuaW5nTWVzc2FnZShlcnJvciwgb3JpZ2luKSB7XG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZShcIkNoZWNrb3V0IHRoaXM6XCIsIGVycm9yLCBvcmlnaW4pO1xufVxuZnVuY3Rpb24gbG9nU3VwcG9ydChlcnJvciwgb3JpZ2luKSB7XG4gICAgbG9nKGdldFN1cHBvcnRNZXNzYWdlKGVycm9yLCBvcmlnaW4pKTtcbn1cbmZ1bmN0aW9uIGdldFN1cHBvcnRNZXNzYWdlKGVycm9yLCBvcmlnaW4pIHtcbiAgICByZXR1cm4gZ2V0VHJlYXRNZXNzYWdlKFwiTmVlZCBTdXBwb3J0IG9uOlwiLCBlcnJvciwgb3JpZ2luKTtcbn1cbmZ1bmN0aW9uIGdldFRyZWF0TWVzc2FnZShwcmVmaXgsIGVycm9yLCBvcmlnaW4pIHtcbiAgICB2YXIgcmVzdWx0ID0gcHJlZml4ICsgKGVycm9yID8gXCIgXCIgKyBlcnJvci50b1N0cmluZygpIDogXCJcIik7XG4gICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgdmFyIGVycm9yRGF0YSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGlmICghKHR5cGVvZiBlcnJvckRhdGEgPT0gXCJzdHJpbmdcIiB8fCBlcnJvckRhdGEgaW5zdGFuY2VvZiBTdHJpbmcpKSB7XG4gICAgICAgICAgICBlcnJvckRhdGEgPSBKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSBcIiAtIERhdGE6IFwiICsgZXJyb3JEYXRhO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCEodHlwZW9mIGVycm9yID09IFwic3RyaW5nXCIgfHwgZXJyb3IgaW5zdGFuY2VvZiBTdHJpbmcpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCIgLSBEYXRhOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZ2luKSB7XG4gICAgICAgIHJlc3VsdCArPSBcIiAtIE9yaWdpbjogXCIgKyBvcmlnaW47XG4gICAgfVxuICAgIGNvbnN0IHN0YWNrID0gKG5ldyBFcnJvcihcIlwiKSkuc3RhY2s7XG4gICAgaWYgKHN0YWNrKSB7XG4gICAgICAgIHJlc3VsdCArPSBcIiAtIFN0YWNrOiBcIiArIHN0YWNrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gdG9nZ2xlRGV2VG9vbHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgZ2V0RGVza0FQSSgpLnNlbmQoXCJ0b2dnbGVEZXZUb29sc1wiKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nRXJyb3IoZSwgXCJ7cWlucGVsLXJlc30oRXJyQ29kZS0wMDAwMDEpXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuUWluSGVhZCA9IHtcbiAgICBnZXREZXNrQVBJLFxuICAgIGdldExvZ2dlZCxcbiAgICBsb2csXG4gICAgbG9nRXJyb3IsXG4gICAgZ2V0RXJyb3JNZXNzYWdlLFxuICAgIGxvZ1dhcm5pbmcsXG4gICAgZ2V0V2FybmluZ01lc3NhZ2UsXG4gICAgbG9nU3VwcG9ydCxcbiAgICBnZXRTdXBwb3J0TWVzc2FnZSxcbiAgICBnZXRUcmVhdE1lc3NhZ2UsXG4gICAgdG9nZ2xlRGV2VG9vbHMsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWhlYWQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlFpblNraW4gPSBleHBvcnRzLlFpblN0eWxlcyA9IHZvaWQgMDtcbmNvbnN0IHFpbl9hcm1fMSA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XG5jb25zdCBxaW5faGVhZF8xID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XG5leHBvcnRzLlFpblN0eWxlcyA9IHtcbiAgICBDb2xvckZvcmVncm91bmQ6IFwiIzI3MDAzNlwiLFxuICAgIENvbG9yQmFja2dyb3VuZDogXCIjZmZmYWVmXCIsXG4gICAgQ29sb3JJbmFjdGl2ZTogXCIjZmFlZmZmXCIsXG4gICAgQ29sb3JBY3RpdmU6IFwiI2ZhY2RjZFwiLFxuICAgIEZvbnROYW1lOiBcIlNvdXJjZVNhbnNQcm9cIixcbiAgICBGb250U2l6ZTogXCIxNnB4XCIsXG59O1xuZnVuY3Rpb24gc3R5bGVBc0JvZHkoZWwpIHtcbiAgICBlbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBlbC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIGVsLnN0eWxlLnJpZ2h0ID0gXCIwcHhcIjtcbiAgICBlbC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgIGVsLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjlweFwiO1xuICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG59XG5mdW5jdGlvbiBzdHlsZUFzRWRpdChlbCkge1xuICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMXB4XCI7XG4gICAgZWwuc3R5bGUucGFkZGluZyA9IFwiM3B4XCI7XG4gICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMyNzAwMzZcIjtcbiAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xuICAgIGVsLnN0eWxlLmNvbG9yID0gXCIjMjcwMDM2XCI7XG4gICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgZWwuc3R5bGUuZm9udEZhbWlseSA9IFwiU291cmNlU2Fuc1Byb1wiO1xuICAgIGVsLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmYWVmZmZcIjtcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2FlMDAwMFwiO1xuICAgIH0pO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMyNzAwMzZcIjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHN0eWxlTWF4U2l6ZUZvck5vdE92ZXJGbG93KGVsLCBwYXJlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkQxXCIpO1xuICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHBhcmVudCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRDI6IFwiICsgcGFyZW50KTtcbiAgICB9XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICBsZXQgbWF4V2lkdGggPSAwO1xuICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgbGV0IGltZWRpYXRlID0gZWw7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGggKyBpbWVkaWF0ZS5jbGllbnRMZWZ0O1xuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICsgaW1lZGlhdGUuY2xpZW50VG9wO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEMzogXCIgKyBtYXhXaWR0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkQ0OiBcIiArIG1heEhlaWdodCk7XG4gICAgICAgICAgICBpbWVkaWF0ZSA9IGltZWRpYXRlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH0gd2hpbGUgKGltZWRpYXRlICE9IG51bGwgJiYgaW1lZGlhdGUgIT0gcGFyZW50KTtcbiAgICAgICAgbWF4V2lkdGggPSBwYXJlbnQuY2xpZW50V2lkdGggLSBtYXhXaWR0aDtcbiAgICAgICAgbWF4SGVpZ2h0ID0gcGFyZW50LmNsaWVudEhlaWdodCAtIG1heEhlaWdodDtcbiAgICAgICAgY29uc29sZS5sb2coXCJENTogXCIgKyBtYXhXaWR0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRDY6IFwiICsgbWF4SGVpZ2h0KTtcbiAgICAgICAgZWwuc3R5bGUubWF4V2lkdGggPSBtYXhXaWR0aCArIFwicHhcIjtcbiAgICAgICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICsgXCJweFwiO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0eWxlU2l6ZShlbCwgc2l6ZSkge1xuICAgIGlmIChzaXplKSB7XG4gICAgICAgIGlmIChzaXplIGluc3RhbmNlb2YgcWluX2hlYWRfMS5RaW5EaW1lbnNpb24pIHtcbiAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRpbSA9IGdldERpbWVuc2lvblNpemUoc2l6ZSk7XG4gICAgICAgICAgICBlbC5zdHlsZS53aWR0aCA9IGRpbS53aWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGRpbS5oZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzdHlsZUZsZXhNYXgoZWwpIHtcbiAgICBlbC5zdHlsZS5mbGV4ID0gXCIxXCI7XG59XG5mdW5jdGlvbiBzdHlsZUZsZXhNaW4oZWwpIHtcbiAgICBlbC5zdHlsZS5mbGV4ID0gXCIwXCI7XG59XG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplU3R5bGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSBnZXRXaW5kb3dTaXplKCkud2lkdGg7XG4gICAgaWYgKHdpZHRoIDwgNjAwKSB7XG4gICAgICAgIHJldHVybiBxaW5faGVhZF8xLlFpbkdyYW5kZXVyLlNNQUxMO1xuICAgIH1cbiAgICBlbHNlIGlmICh3aWR0aCA8IDEwMDApIHtcbiAgICAgICAgcmV0dXJuIHFpbl9oZWFkXzEuUWluR3JhbmRldXIuTUVESVVNO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHFpbl9oZWFkXzEuUWluR3JhbmRldXIuTEFSR0U7XG4gICAgfVxufVxuZnVuY3Rpb24gaGlkZUFsbElGcmFtZXMoKSB7XG4gICAgdmFyIGRvY19pZnJhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpZnJhbWVcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2NfaWZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZG9jX2lmcmFtZSA9IGRvY19pZnJhbWVzW2ldO1xuICAgICAgICBkb2NfaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNob3dBbGxJRnJhbWVzKCkge1xuICAgIHZhciBkb2NfaWZyYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaWZyYW1lXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9jX2lmcmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGRvY19pZnJhbWUgPSBkb2NfaWZyYW1lc1tpXTtcbiAgICAgICAgZG9jX2lmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgfVxufVxuZnVuY3Rpb24gZGlzYWJsZVNlbGVjdGlvbihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gXCJub25lXCI7XG4gICAgZWxlbWVudC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gXCJub25lXCI7XG4gICAgZWxlbWVudC5vbnNlbGVjdHN0YXJ0ID0gcWluX2FybV8xLlFpbkFybS5zdG9wRXZlbnQ7XG59XG5mdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH0sIDM2MCk7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnRWaXNpYmxlSW5TY3JvbGwoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQub2Zmc2V0VG9wIDwgZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50Lm9mZnNldExlZnQgPCBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsTGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LmNsaWVudFdpZHRoID5cbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCAtXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQub2Zmc2V0TGVmdCAtIGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxMZWZ0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA+XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC1cbiAgICAgICAgICAgICAgICAoZWxlbWVudC5vZmZzZXRUb3AgLSBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gZ2V0RGltZW5zaW9uU2l6ZShzaXplKSB7XG4gICAgaWYgKHNpemUgPT0gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5MQVJHRSkge1xuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uTGFyZ2UoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2l6ZSA9PSBxaW5faGVhZF8xLlFpbkdyYW5kZXVyLk1FRElVTSkge1xuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uTWVkaXVtKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uU21hbGwoKTtcbiAgICB9XG59XG5jb25zdCBkaW1lbnNpb25TbWFsbCA9IHtcbiAgICB3aWR0aDogMTYsXG4gICAgaGVpZ2h0OiAxNixcbn07XG5mdW5jdGlvbiBnZXREaW1lbnNpb25TbWFsbCgpIHtcbiAgICByZXR1cm4gZGltZW5zaW9uU21hbGw7XG59XG5jb25zdCBkaW1lbnNpb25NZWRpdW0gPSB7XG4gICAgd2lkdGg6IDMyLFxuICAgIGhlaWdodDogMzIsXG59O1xuZnVuY3Rpb24gZ2V0RGltZW5zaW9uTWVkaXVtKCkge1xuICAgIHJldHVybiBkaW1lbnNpb25NZWRpdW07XG59XG5jb25zdCBkaW1lbnNpb25MYXJnZSA9IHtcbiAgICB3aWR0aDogNjQsXG4gICAgaGVpZ2h0OiA2NCxcbn07XG5mdW5jdGlvbiBnZXREaW1lbnNpb25MYXJnZSgpIHtcbiAgICByZXR1cm4gZGltZW5zaW9uTGFyZ2U7XG59XG5leHBvcnRzLlFpblNraW4gPSB7XG4gICAgc3R5bGVzOiBleHBvcnRzLlFpblN0eWxlcyxcbiAgICBzdHlsZUFzQm9keSxcbiAgICBzdHlsZUFzRWRpdCxcbiAgICBzdHlsZU1heFNpemVGb3JOb3RPdmVyRmxvdyxcbiAgICBzdHlsZVNpemUsXG4gICAgc3R5bGVGbGV4TWF4LFxuICAgIHN0eWxlRmxleE1pbixcbiAgICBnZXRXaW5kb3dTaXplLFxuICAgIGdldFdpbmRvd1NpemVTdHlsZSxcbiAgICBoaWRlQWxsSUZyYW1lcyxcbiAgICBzaG93QWxsSUZyYW1lcyxcbiAgICBkaXNhYmxlU2VsZWN0aW9uLFxuICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgIGlzRWxlbWVudFZpc2libGVJblNjcm9sbCxcbiAgICBnZXREaW1lbnNpb25TaXplLFxuICAgIGdldERpbWVuc2lvblNtYWxsLFxuICAgIGdldERpbWVuc2lvbk1lZGl1bSxcbiAgICBnZXREaW1lbnNpb25MYXJnZSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc2tpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUWluU291bCA9IHZvaWQgMDtcbmNvbnN0IHFpbl9hcm1fMSA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XG5jb25zdCBxaW5fYm9keV8xID0gcmVxdWlyZShcIi4vcWluLWJvZHlcIik7XG5jb25zdCBxaW5fZm9vdF8xID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XG5jb25zdCBxaW5faGVhZF8xID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XG5jb25zdCBxaW5fc2tpbl8xID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XG5leHBvcnRzLlFpblNvdWwgPSB7XG4gICAgYXJtOiBxaW5fYXJtXzEuUWluQXJtLFxuICAgIGJvZHk6IHFpbl9ib2R5XzEuUWluQm9keSxcbiAgICBmb290OiBxaW5fZm9vdF8xLlFpbkZvb3QsXG4gICAgaGVhZDogcWluX2hlYWRfMS5RaW5IZWFkLFxuICAgIHNraW46IHFpbl9za2luXzEuUWluU2tpbixcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc291bC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xuY2xhc3MgUWluU2NhZmZvbGQgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluQ29sdW1uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5xaW5IZWxsbyA9IG5ldyBxaW5wZWxfY3BzXzEuUWluTGFiZWwoXCJIZWxsbywgd29ybGQhXCIpO1xuICAgICAgICB0aGlzLnFpbkhlbGxvLmluc3RhbGwodGhpcyk7XG4gICAgfVxufVxubmV3IFFpblNjYWZmb2xkKCkucHV0QXNCb2R5KCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXX0=
