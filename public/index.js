(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTools = exports.QinTabs = exports.QinTable = exports.QinString = exports.QinStack = exports.QinSplitter = exports.QinScroll = exports.QinRow = exports.QinPopup = exports.QinPanel = exports.QinMutantsArm = exports.QinMutants = exports.QinLine = exports.QinLabel = exports.QinInteger = exports.QinIcon = exports.QinIconPick = exports.QinIconOption = exports.QinFilePath = exports.QinFileExplorer = exports.QinFileChooser = exports.QinField = exports.QinEdit = exports.QinCombo = exports.QinColumn = exports.QinButton = exports.QinBoolean = exports.QinBase = exports.QinBaseStyle = exports.qinUrlAsset = exports.qinAssetUrl = exports.QinAsset = void 0;
var qin_assets_1 = require("./qin-assets");
Object.defineProperty(exports, "QinAsset", { enumerable: true, get: function () { return qin_assets_1.QinAsset; } });
var qin_assets_2 = require("./qin-assets");
Object.defineProperty(exports, "qinAssetUrl", { enumerable: true, get: function () { return qin_assets_2.qinAssetUrl; } });
var qin_assets_3 = require("./qin-assets");
Object.defineProperty(exports, "qinUrlAsset", { enumerable: true, get: function () { return qin_assets_3.qinUrlAsset; } });
var qin_base_style_1 = require("./qin-base-style");
Object.defineProperty(exports, "QinBaseStyle", { enumerable: true, get: function () { return qin_base_style_1.QinBaseStyle; } });
var qin_base_1 = require("./qin-base");
Object.defineProperty(exports, "QinBase", { enumerable: true, get: function () { return qin_base_1.QinBase; } });
var qin_boolean_1 = require("./qin-boolean");
Object.defineProperty(exports, "QinBoolean", { enumerable: true, get: function () { return qin_boolean_1.QinBoolean; } });
var qin_button_1 = require("./qin-button");
Object.defineProperty(exports, "QinButton", { enumerable: true, get: function () { return qin_button_1.QinButton; } });
var qin_column_1 = require("./qin-column");
Object.defineProperty(exports, "QinColumn", { enumerable: true, get: function () { return qin_column_1.QinColumn; } });
var qin_combo_1 = require("./qin-combo");
Object.defineProperty(exports, "QinCombo", { enumerable: true, get: function () { return qin_combo_1.QinCombo; } });
var qin_edit_1 = require("./qin-edit");
Object.defineProperty(exports, "QinEdit", { enumerable: true, get: function () { return qin_edit_1.QinEdit; } });
var qin_field_1 = require("./qin-field");
Object.defineProperty(exports, "QinField", { enumerable: true, get: function () { return qin_field_1.QinField; } });
var qin_file_chooser_1 = require("./qin-file-chooser");
Object.defineProperty(exports, "QinFileChooser", { enumerable: true, get: function () { return qin_file_chooser_1.QinFileChooser; } });
var qin_file_explorer_1 = require("./qin-file-explorer");
Object.defineProperty(exports, "QinFileExplorer", { enumerable: true, get: function () { return qin_file_explorer_1.QinFileExplorer; } });
var qin_file_path_1 = require("./qin-file-path");
Object.defineProperty(exports, "QinFilePath", { enumerable: true, get: function () { return qin_file_path_1.QinFilePath; } });
var qin_icon_option_1 = require("./qin-icon-option");
Object.defineProperty(exports, "QinIconOption", { enumerable: true, get: function () { return qin_icon_option_1.QinIconOption; } });
var qin_icon_pick_1 = require("./qin-icon-pick");
Object.defineProperty(exports, "QinIconPick", { enumerable: true, get: function () { return qin_icon_pick_1.QinIconPick; } });
var qin_icon_1 = require("./qin-icon");
Object.defineProperty(exports, "QinIcon", { enumerable: true, get: function () { return qin_icon_1.QinIcon; } });
var qin_integer_1 = require("./qin-integer");
Object.defineProperty(exports, "QinInteger", { enumerable: true, get: function () { return qin_integer_1.QinInteger; } });
var qin_label_1 = require("./qin-label");
Object.defineProperty(exports, "QinLabel", { enumerable: true, get: function () { return qin_label_1.QinLabel; } });
var qin_line_1 = require("./qin-line");
Object.defineProperty(exports, "QinLine", { enumerable: true, get: function () { return qin_line_1.QinLine; } });
var qin_mutants_1 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutants", { enumerable: true, get: function () { return qin_mutants_1.QinMutants; } });
var qin_mutants_2 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutantsArm", { enumerable: true, get: function () { return qin_mutants_2.QinMutantsArm; } });
var qin_panel_1 = require("./qin-panel");
Object.defineProperty(exports, "QinPanel", { enumerable: true, get: function () { return qin_panel_1.QinPanel; } });
var qin_popup_1 = require("./qin-popup");
Object.defineProperty(exports, "QinPopup", { enumerable: true, get: function () { return qin_popup_1.QinPopup; } });
var qin_row_1 = require("./qin-row");
Object.defineProperty(exports, "QinRow", { enumerable: true, get: function () { return qin_row_1.QinRow; } });
var qin_scroll_1 = require("./qin-scroll");
Object.defineProperty(exports, "QinScroll", { enumerable: true, get: function () { return qin_scroll_1.QinScroll; } });
var qin_splitter_1 = require("./qin-splitter");
Object.defineProperty(exports, "QinSplitter", { enumerable: true, get: function () { return qin_splitter_1.QinSplitter; } });
var qin_stack_1 = require("./qin-stack");
Object.defineProperty(exports, "QinStack", { enumerable: true, get: function () { return qin_stack_1.QinStack; } });
var qin_string_1 = require("./qin-string");
Object.defineProperty(exports, "QinString", { enumerable: true, get: function () { return qin_string_1.QinString; } });
var qin_table_1 = require("./qin-table");
Object.defineProperty(exports, "QinTable", { enumerable: true, get: function () { return qin_table_1.QinTable; } });
var qin_tabs_1 = require("./qin-tabs");
Object.defineProperty(exports, "QinTabs", { enumerable: true, get: function () { return qin_tabs_1.QinTabs; } });
var qin_tools_1 = require("./qin-tools");
Object.defineProperty(exports, "QinTools", { enumerable: true, get: function () { return qin_tools_1.QinTools; } });

},{"./qin-assets":2,"./qin-base":4,"./qin-base-style":3,"./qin-boolean":5,"./qin-button":6,"./qin-column":7,"./qin-combo":8,"./qin-edit":9,"./qin-field":10,"./qin-file-chooser":11,"./qin-file-explorer":12,"./qin-file-path":13,"./qin-icon":16,"./qin-icon-option":14,"./qin-icon-pick":15,"./qin-integer":17,"./qin-label":18,"./qin-line":19,"./qin-mutants":20,"./qin-panel":21,"./qin-popup":22,"./qin-row":23,"./qin-scroll":24,"./qin-splitter":25,"./qin-stack":26,"./qin-string":27,"./qin-table":28,"./qin-tabs":29,"./qin-tools":30}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qinUrlAsset = exports.qinAssetUrl = exports.QinAsset = void 0;
var QinAsset;
(function (QinAsset) {
    QinAsset["BackgroundDark0"] = "background-dark-0.png";
    QinAsset["BackgroundDark1"] = "background-dark-1.png";
    QinAsset["BackgroundDark10"] = "background-dark-10.png";
    QinAsset["BackgroundDark11"] = "background-dark-11.png";
    QinAsset["BackgroundDark12"] = "background-dark-12.png";
    QinAsset["BackgroundDark13"] = "background-dark-13.png";
    QinAsset["BackgroundDark14"] = "background-dark-14.png";
    QinAsset["BackgroundDark15"] = "background-dark-15.png";
    QinAsset["BackgroundDark16"] = "background-dark-16.png";
    QinAsset["BackgroundDark17"] = "background-dark-17.png";
    QinAsset["BackgroundDark18"] = "background-dark-18.png";
    QinAsset["BackgroundDark19"] = "background-dark-19.png";
    QinAsset["BackgroundDark2"] = "background-dark-2.png";
    QinAsset["BackgroundDark20"] = "background-dark-20.png";
    QinAsset["BackgroundDark21"] = "background-dark-21.png";
    QinAsset["BackgroundDark22"] = "background-dark-22.png";
    QinAsset["BackgroundDark23"] = "background-dark-23.png";
    QinAsset["BackgroundDark24"] = "background-dark-24.png";
    QinAsset["BackgroundDark25"] = "background-dark-25.png";
    QinAsset["BackgroundDark26"] = "background-dark-26.png";
    QinAsset["BackgroundDark27"] = "background-dark-27.png";
    QinAsset["BackgroundDark28"] = "background-dark-28.png";
    QinAsset["BackgroundDark29"] = "background-dark-29.png";
    QinAsset["BackgroundDark3"] = "background-dark-3.png";
    QinAsset["BackgroundDark4"] = "background-dark-4.png";
    QinAsset["BackgroundDark5"] = "background-dark-5.png";
    QinAsset["BackgroundDark6"] = "background-dark-6.png";
    QinAsset["BackgroundDark7"] = "background-dark-7.png";
    QinAsset["BackgroundDark8"] = "background-dark-8.png";
    QinAsset["BackgroundDark9"] = "background-dark-9.png";
    QinAsset["BackgroundDark"] = "background-dark.png";
    QinAsset["BackgroundLight0"] = "background-light-0.png";
    QinAsset["BackgroundLight1"] = "background-light-1.png";
    QinAsset["BackgroundLight10"] = "background-light-10.png";
    QinAsset["BackgroundLight11"] = "background-light-11.png";
    QinAsset["BackgroundLight12"] = "background-light-12.png";
    QinAsset["BackgroundLight13"] = "background-light-13.png";
    QinAsset["BackgroundLight14"] = "background-light-14.png";
    QinAsset["BackgroundLight15"] = "background-light-15.png";
    QinAsset["BackgroundLight16"] = "background-light-16.png";
    QinAsset["BackgroundLight17"] = "background-light-17.png";
    QinAsset["BackgroundLight18"] = "background-light-18.png";
    QinAsset["BackgroundLight19"] = "background-light-19.png";
    QinAsset["BackgroundLight2"] = "background-light-2.png";
    QinAsset["BackgroundLight20"] = "background-light-20.png";
    QinAsset["BackgroundLight21"] = "background-light-21.png";
    QinAsset["BackgroundLight22"] = "background-light-22.png";
    QinAsset["BackgroundLight23"] = "background-light-23.png";
    QinAsset["BackgroundLight24"] = "background-light-24.png";
    QinAsset["BackgroundLight25"] = "background-light-25.png";
    QinAsset["BackgroundLight26"] = "background-light-26.png";
    QinAsset["BackgroundLight27"] = "background-light-27.png";
    QinAsset["BackgroundLight28"] = "background-light-28.png";
    QinAsset["BackgroundLight29"] = "background-light-29.png";
    QinAsset["BackgroundLight3"] = "background-light-3.png";
    QinAsset["BackgroundLight4"] = "background-light-4.png";
    QinAsset["BackgroundLight5"] = "background-light-5.png";
    QinAsset["BackgroundLight6"] = "background-light-6.png";
    QinAsset["BackgroundLight7"] = "background-light-7.png";
    QinAsset["BackgroundLight8"] = "background-light-8.png";
    QinAsset["BackgroundLight9"] = "background-light-9.png";
    QinAsset["BackgroundLight"] = "background-light.png";
    QinAsset["BackgroundNormal0"] = "background-normal-0.png";
    QinAsset["BackgroundNormal1"] = "background-normal-1.png";
    QinAsset["BackgroundNormal10"] = "background-normal-10.png";
    QinAsset["BackgroundNormal11"] = "background-normal-11.png";
    QinAsset["BackgroundNormal12"] = "background-normal-12.png";
    QinAsset["BackgroundNormal13"] = "background-normal-13.png";
    QinAsset["BackgroundNormal14"] = "background-normal-14.png";
    QinAsset["BackgroundNormal15"] = "background-normal-15.png";
    QinAsset["BackgroundNormal16"] = "background-normal-16.png";
    QinAsset["BackgroundNormal17"] = "background-normal-17.png";
    QinAsset["BackgroundNormal18"] = "background-normal-18.png";
    QinAsset["BackgroundNormal19"] = "background-normal-19.png";
    QinAsset["BackgroundNormal2"] = "background-normal-2.png";
    QinAsset["BackgroundNormal20"] = "background-normal-20.png";
    QinAsset["BackgroundNormal21"] = "background-normal-21.png";
    QinAsset["BackgroundNormal22"] = "background-normal-22.png";
    QinAsset["BackgroundNormal23"] = "background-normal-23.png";
    QinAsset["BackgroundNormal24"] = "background-normal-24.png";
    QinAsset["BackgroundNormal25"] = "background-normal-25.png";
    QinAsset["BackgroundNormal26"] = "background-normal-26.png";
    QinAsset["BackgroundNormal27"] = "background-normal-27.png";
    QinAsset["BackgroundNormal28"] = "background-normal-28.png";
    QinAsset["BackgroundNormal29"] = "background-normal-29.png";
    QinAsset["BackgroundNormal3"] = "background-normal-3.png";
    QinAsset["BackgroundNormal4"] = "background-normal-4.png";
    QinAsset["BackgroundNormal5"] = "background-normal-5.png";
    QinAsset["BackgroundNormal6"] = "background-normal-6.png";
    QinAsset["BackgroundNormal7"] = "background-normal-7.png";
    QinAsset["BackgroundNormal8"] = "background-normal-8.png";
    QinAsset["BackgroundNormal9"] = "background-normal-9.png";
    QinAsset["BackgroundNormal"] = "background-normal.png";
    QinAsset["ExplorerApps"] = "explorer-apps.png";
    QinAsset["ExplorerCmds"] = "explorer-cmds.png";
    QinAsset["ExplorerDir"] = "explorer-dir.png";
    QinAsset["ExplorerExec"] = "explorer-exec.png";
    QinAsset["ExplorerFile"] = "explorer-file.png";
    QinAsset["ExplorerImage"] = "explorer-image.png";
    QinAsset["ExplorerMovie"] = "explorer-movie.png";
    QinAsset["ExplorerMusic"] = "explorer-music.png";
    QinAsset["ExplorerZipped"] = "explorer-zipped.png";
    QinAsset["FaceAdd"] = "face-add.png";
    QinAsset["FaceAltWork"] = "face-alt-work.png";
    QinAsset["FaceArrowDown"] = "face-arrow-down.png";
    QinAsset["FaceArrowLeft"] = "face-arrow-left.png";
    QinAsset["FaceArrowRight"] = "face-arrow-right.png";
    QinAsset["FaceArrowUp"] = "face-arrow-up.png";
    QinAsset["FaceAttach"] = "face-attach.png";
    QinAsset["FaceAzSort"] = "face-az-sort.png";
    QinAsset["FaceBagShopping"] = "face-bag-shopping.png";
    QinAsset["FaceBag"] = "face-bag.png";
    QinAsset["FaceBellDisable"] = "face-bell-disable.png";
    QinAsset["FaceBell"] = "face-bell.png";
    QinAsset["FaceBetweenSpace"] = "face-between-space.png";
    QinAsset["FaceBoilerHomeSmart"] = "face-boiler-home-smart.png";
    QinAsset["FaceBottomToolbar"] = "face-bottom-toolbar.png";
    QinAsset["FaceCUsb"] = "face-c-usb.png";
    QinAsset["FaceCalendar"] = "face-calendar.png";
    QinAsset["FaceCameraDisable"] = "face-camera-disable.png";
    QinAsset["FaceCamera"] = "face-camera.png";
    QinAsset["FaceCancel"] = "face-cancel.png";
    QinAsset["FaceCartShopping"] = "face-cart-shopping.png";
    QinAsset["FaceCart"] = "face-cart.png";
    QinAsset["FaceCheckRadio"] = "face-check-radio.png";
    QinAsset["FaceCheck"] = "face-check.png";
    QinAsset["FaceCheckedRadio"] = "face-checked-radio.png";
    QinAsset["FaceChipSmartphone"] = "face-chip-smartphone.png";
    QinAsset["FaceCircleHalfShape"] = "face-circle-half-shape.png";
    QinAsset["FaceCircleShape"] = "face-circle-shape.png";
    QinAsset["FaceCircle"] = "face-circle.png";
    QinAsset["FaceClearPull"] = "face-clear-pull.png";
    QinAsset["FaceClockSand"] = "face-clock-sand.png";
    QinAsset["FaceClock"] = "face-clock.png";
    QinAsset["FaceClose"] = "face-close.png";
    QinAsset["FaceCog"] = "face-cog.png";
    QinAsset["FaceColsView"] = "face-cols-view.png";
    QinAsset["FaceComfortableView"] = "face-comfortable-view.png";
    QinAsset["FaceCompass"] = "face-compass.png";
    QinAsset["FaceConfirm"] = "face-confirm.png";
    QinAsset["FaceContact"] = "face-contact.png";
    QinAsset["FaceControl"] = "face-control.png";
    QinAsset["FaceCookerHomeSmart"] = "face-cooker-home-smart.png";
    QinAsset["FaceCopy"] = "face-copy.png";
    QinAsset["FaceDayView"] = "face-day-view.png";
    QinAsset["FaceDel"] = "face-del.png";
    QinAsset["FaceDoubleTap"] = "face-double-tap.png";
    QinAsset["FaceDownChevronPush"] = "face-down-chevron-push.png";
    QinAsset["FaceDownPush"] = "face-down-push.png";
    QinAsset["FaceDownTrending"] = "face-down-trending.png";
    QinAsset["FaceDownloadSoftware"] = "face-download-software.png";
    QinAsset["FaceDownload"] = "face-download.png";
    QinAsset["FaceEmptyTrash"] = "face-empty-trash.png";
    QinAsset["FaceEnlarge"] = "face-enlarge.png";
    QinAsset["FaceEnter"] = "face-enter.png";
    QinAsset["FaceErase"] = "face-erase.png";
    QinAsset["FaceExit"] = "face-exit.png";
    QinAsset["FaceEyeDisable"] = "face-eye-disable.png";
    QinAsset["FaceEye"] = "face-eye.png";
    QinAsset["FaceFile"] = "face-file.png";
    QinAsset["FaceFilter"] = "face-filter.png";
    QinAsset["FaceFirstRow"] = "face-first-row.png";
    QinAsset["FaceFolder"] = "face-folder.png";
    QinAsset["FaceFoundSearch"] = "face-found-search.png";
    QinAsset["FaceGear"] = "face-gear.png";
    QinAsset["FaceGlobe"] = "face-globe.png";
    QinAsset["FaceGridView"] = "face-grid-view.png";
    QinAsset["FaceHScroll"] = "face-h-scroll.png";
    QinAsset["FaceHeart"] = "face-heart.png";
    QinAsset["FaceHeatHomeSmart"] = "face-heat-home-smart.png";
    QinAsset["FaceHexagonShape"] = "face-hexagon-shape.png";
    QinAsset["FaceHome"] = "face-home.png";
    QinAsset["FaceHuntProduct"] = "face-hunt-product.png";
    QinAsset["FaceImage"] = "face-image.png";
    QinAsset["FaceInZoom"] = "face-in-zoom.png";
    QinAsset["FaceKitUi"] = "face-kit-ui.png";
    QinAsset["FaceLabel"] = "face-label.png";
    QinAsset["FaceLastRow"] = "face-last-row.png";
    QinAsset["FaceLeftChevronPush"] = "face-left-chevron-push.png";
    QinAsset["FaceLeftPush"] = "face-left-push.png";
    QinAsset["FaceLeftToolbar"] = "face-left-toolbar.png";
    QinAsset["FaceLightHomeSmart"] = "face-light-home-smart.png";
    QinAsset["FaceLink"] = "face-link.png";
    QinAsset["FaceListUser"] = "face-list-user.png";
    QinAsset["FaceListView"] = "face-list-view.png";
    QinAsset["FaceLoadingSearch"] = "face-loading-search.png";
    QinAsset["FaceLock"] = "face-lock.png";
    QinAsset["FaceMachineWashHomeSmart"] = "face-machine-wash-home-smart.png";
    QinAsset["FaceMail"] = "face-mail.png";
    QinAsset["FaceMapDisable"] = "face-map-disable.png";
    QinAsset["FaceMap"] = "face-map.png";
    QinAsset["FaceMenuLines"] = "face-menu-lines.png";
    QinAsset["FaceMessage"] = "face-message.png";
    QinAsset["FaceMicDisable"] = "face-mic-disable.png";
    QinAsset["FaceMic"] = "face-mic.png";
    QinAsset["FaceMinus"] = "face-minus.png";
    QinAsset["FaceMirrorScreen"] = "face-mirror-screen.png";
    QinAsset["FaceMonthView"] = "face-month-view.png";
    QinAsset["FaceMouthNoSmile"] = "face-mouth-no-smile.png";
    QinAsset["FaceMovie"] = "face-movie.png";
    QinAsset["FaceNeutralSmile"] = "face-neutral-smile.png";
    QinAsset["FaceNews"] = "face-news.png";
    QinAsset["FaceNoneSmile"] = "face-none-smile.png";
    QinAsset["FaceODownChevronPush"] = "face-o-down-chevron-push.png";
    QinAsset["FaceOLeftChevronPush"] = "face-o-left-chevron-push.png";
    QinAsset["FaceONextTrackPlay"] = "face-o-next-track-play.png";
    QinAsset["FaceOPrevTrackPlay"] = "face-o-prev-track-play.png";
    QinAsset["FaceOQuote"] = "face-o-quote.png";
    QinAsset["FaceORightChevronPush"] = "face-o-right-chevron-push.png";
    QinAsset["FaceOSelect"] = "face-o-select.png";
    QinAsset["FaceOUpChevronPush"] = "face-o-up-chevron-push.png";
    QinAsset["FaceOVoicemail"] = "face-o-voicemail.png";
    QinAsset["FaceOffSquareToggle"] = "face-off-square-toggle.png";
    QinAsset["FaceOffToggle"] = "face-off-toggle.png";
    QinAsset["FaceOnToggle"] = "face-on-toggle.png";
    QinAsset["FaceOpenMouthSmile"] = "face-open-mouth-smile.png";
    QinAsset["FaceOpenSidebar"] = "face-open-sidebar.png";
    QinAsset["FaceOutZoom"] = "face-out-zoom.png";
    QinAsset["FacePaste"] = "face-paste.png";
    QinAsset["FacePencil"] = "face-pencil.png";
    QinAsset["FacePerson"] = "face-person.png";
    QinAsset["FacePhoneDisable"] = "face-phone-disable.png";
    QinAsset["FacePhone"] = "face-phone.png";
    QinAsset["FacePin"] = "face-pin.png";
    QinAsset["FacePlug"] = "face-plug.png";
    QinAsset["FacePlus"] = "face-plus.png";
    QinAsset["FacePocket"] = "face-pocket.png";
    QinAsset["FacePokemon"] = "face-pokemon.png";
    QinAsset["FacePolaroid"] = "face-polaroid.png";
    QinAsset["FacePoll"] = "face-poll.png";
    QinAsset["FacePresentation"] = "face-presentation.png";
    QinAsset["FacePrevTrackPlay"] = "face-prev-track-play.png";
    QinAsset["FacePrinter"] = "face-printer.png";
    QinAsset["FaceProfile"] = "face-profile.png";
    QinAsset["FaceQr"] = "face-qr.png";
    QinAsset["FaceQuote"] = "face-quote.png";
    QinAsset["FaceRDownChevronPush"] = "face-r-down-chevron-push.png";
    QinAsset["FaceRLeftChevronPush"] = "face-r-left-chevron-push.png";
    QinAsset["FaceRNextTrackPlay"] = "face-r-next-track-play.png";
    QinAsset["FaceRPrevTrackPlay"] = "face-r-prev-track-play.png";
    QinAsset["FaceRRemove"] = "face-r-remove.png";
    QinAsset["FaceRRightChevronPush"] = "face-r-right-chevron-push.png";
    QinAsset["FaceRSelect"] = "face-r-select.png";
    QinAsset["FaceRUpChevronPush"] = "face-r-up-chevron-push.png";
    QinAsset["FaceRVoicemail"] = "face-r-voicemail.png";
    QinAsset["FaceRamSmartphone"] = "face-ram-smartphone.png";
    QinAsset["FaceRatio"] = "face-ratio.png";
    QinAsset["FaceRead"] = "face-read.png";
    QinAsset["FaceReadme"] = "face-readme.png";
    QinAsset["FaceRecord"] = "face-record.png";
    QinAsset["FaceRedo2"] = "face-redo-2.png";
    QinAsset["FaceRedo"] = "face-redo.png";
    QinAsset["FaceRefrigeratorHomeSmart"] = "face-refrigerator-home-smart.png";
    QinAsset["FaceRegion"] = "face-region.png";
    QinAsset["FaceRemote"] = "face-remote.png";
    QinAsset["FaceRemoveUser"] = "face-remove-user.png";
    QinAsset["FaceRemove"] = "face-remove.png";
    QinAsset["FaceRename"] = "face-rename.png";
    QinAsset["FaceReorder"] = "face-reorder.png";
    QinAsset["FaceRepeat"] = "face-repeat.png";
    QinAsset["FaceRhombusShape"] = "face-rhombus-shape.png";
    QinAsset["FaceRightChevronPush"] = "face-right-chevron-push.png";
    QinAsset["FaceRightPush"] = "face-right-push.png";
    QinAsset["FaceRightSidebar"] = "face-right-sidebar.png";
    QinAsset["FaceRightToolbar"] = "face-right-toolbar.png";
    QinAsset["FaceRing"] = "face-ring.png";
    QinAsset["FaceRuler"] = "face-ruler.png";
    QinAsset["FaceSadSmile"] = "face-sad-smile.png";
    QinAsset["FaceSave"] = "face-save.png";
    QinAsset["FaceScan"] = "face-scan.png";
    QinAsset["FaceScreen"] = "face-screen.png";
    QinAsset["FaceSearch2"] = "face-search-2.png";
    QinAsset["FaceSearch"] = "face-search.png";
    QinAsset["FaceSelect"] = "face-select.png";
    QinAsset["FaceSend"] = "face-send.png";
    QinAsset["FaceServer"] = "face-server.png";
    QinAsset["FaceServerless"] = "face-serverless.png";
    QinAsset["FaceSettings"] = "face-settings.png";
    QinAsset["FaceShakeSmartphone"] = "face-shake-smartphone.png";
    QinAsset["FaceShare2"] = "face-share-2.png";
    QinAsset["FaceShare"] = "face-share.png";
    QinAsset["FaceShield2"] = "face-shield-2.png";
    QinAsset["FaceShield"] = "face-shield.png";
    QinAsset["FaceShortcut"] = "face-shortcut.png";
    QinAsset["FaceShotScreen"] = "face-shot-screen.png";
    QinAsset["FaceShrink"] = "face-shrink.png";
    QinAsset["FaceShutterstock"] = "face-shutterstock.png";
    QinAsset["FaceSidebar"] = "face-sidebar.png";
    QinAsset["FaceSignal"] = "face-signal.png";
    QinAsset["FaceSingleTap"] = "face-single-tap.png";
    QinAsset["FaceSize"] = "face-size.png";
    QinAsset["FaceSketch"] = "face-sketch.png";
    QinAsset["FaceSlack"] = "face-slack.png";
    QinAsset["FaceSleep"] = "face-sleep.png";
    QinAsset["FaceSmartphone"] = "face-smartphone.png";
    QinAsset["FaceSmile"] = "face-smile.png";
    QinAsset["FaceSpeakerDisable"] = "face-speaker-disable.png";
    QinAsset["FaceSpeaker"] = "face-speaker.png";
    QinAsset["FaceSpectrum"] = "face-spectrum.png";
    QinAsset["FaceSpinnerAltTwo"] = "face-spinner-alt-two.png";
    QinAsset["FaceSpinnerAlt"] = "face-spinner-alt.png";
    QinAsset["FaceSpinnerTwo"] = "face-spinner-two.png";
    QinAsset["FaceSpinner"] = "face-spinner.png";
    QinAsset["FaceSplitNotView"] = "face-split-not-view.png";
    QinAsset["FaceSplitViewHorizontal"] = "face-split-view-horizontal.png";
    QinAsset["FaceSplitViewVertical"] = "face-split-view-vertical.png";
    QinAsset["FaceSplitView"] = "face-split-view.png";
    QinAsset["FaceSquareShape"] = "face-square-shape.png";
    QinAsset["FaceSquareToggle"] = "face-square-toggle.png";
    QinAsset["FaceSquare"] = "face-square.png";
    QinAsset["FaceStack"] = "face-stack.png";
    QinAsset["FaceStar"] = "face-star.png";
    QinAsset["FaceStark"] = "face-stark.png";
    QinAsset["FaceStopwatch"] = "face-stopwatch.png";
    QinAsset["FaceStories"] = "face-stories.png";
    QinAsset["FaceStudio"] = "face-studio.png";
    QinAsset["FaceStyle"] = "face-style.png";
    QinAsset["FaceSun"] = "face-sun.png";
    QinAsset["FaceSupport"] = "face-support.png";
    QinAsset["FaceSwap"] = "face-swap.png";
    QinAsset["FaceSweden"] = "face-sweden.png";
    QinAsset["FaceSwiss"] = "face-swiss.png";
    QinAsset["FaceSync"] = "face-sync.png";
    QinAsset["FaceTab"] = "face-tab.png";
    QinAsset["FaceTag"] = "face-tag.png";
    QinAsset["FaceTally"] = "face-tally.png";
    QinAsset["FaceTemplate"] = "face-template.png";
    QinAsset["FaceTennis"] = "face-tennis.png";
    QinAsset["FaceTerminal"] = "face-terminal.png";
    QinAsset["FaceTerrain"] = "face-terrain.png";
    QinAsset["FaceThermometer"] = "face-thermometer.png";
    QinAsset["FaceThermostat"] = "face-thermostat.png";
    QinAsset["FaceTikcode"] = "face-tikcode.png";
    QinAsset["FaceTime"] = "face-time.png";
    QinAsset["FaceTimelapse"] = "face-timelapse.png";
    QinAsset["FaceTimer"] = "face-timer.png";
    QinAsset["FaceToday"] = "face-today.png";
    QinAsset["FaceToolbox"] = "face-toolbox.png";
    QinAsset["FaceTopToolbar"] = "face-top-toolbar.png";
    QinAsset["FaceTouchpad"] = "face-touchpad.png";
    QinAsset["FaceTrack"] = "face-track.png";
    QinAsset["FaceTranscript"] = "face-transcript.png";
    QinAsset["FaceTrash2"] = "face-trash-2.png";
    QinAsset["FaceTrash"] = "face-trash.png";
    QinAsset["FaceTree"] = "face-tree.png";
    QinAsset["FaceTrees"] = "face-trees.png";
    QinAsset["FaceTrello"] = "face-trello.png";
    QinAsset["FaceTrending"] = "face-trending.png";
    QinAsset["FaceTriangleShape"] = "face-triangle-shape.png";
    QinAsset["FaceTrophy"] = "face-trophy.png";
    QinAsset["FaceTv"] = "face-tv.png";
    QinAsset["FaceTwilio"] = "face-twilio.png";
    QinAsset["FaceTwitter"] = "face-twitter.png";
    QinAsset["FaceUmbrella"] = "face-umbrella.png";
    QinAsset["FaceUnavailable"] = "face-unavailable.png";
    QinAsset["FaceUnblock"] = "face-unblock.png";
    QinAsset["FaceUndo2"] = "face-undo-2.png";
    QinAsset["FaceUndo"] = "face-undo.png";
    QinAsset["FaceUnfold"] = "face-unfold.png";
    QinAsset["FaceUnlink"] = "face-unlink.png";
    QinAsset["FaceUnlock"] = "face-unlock.png";
    QinAsset["FaceUnsplash"] = "face-unsplash.png";
    QinAsset["FaceUpChevronPush"] = "face-up-chevron-push.png";
    QinAsset["FaceUpPush"] = "face-up-push.png";
    QinAsset["FaceUploadSoftware"] = "face-upload-software.png";
    QinAsset["FaceUpload"] = "face-upload.png";
    QinAsset["FaceUpsideSmile"] = "face-upside-smile.png";
    QinAsset["FaceUsb"] = "face-usb.png";
    QinAsset["FaceUserAdd"] = "face-user-add.png";
    QinAsset["FaceUser"] = "face-user.png";
    QinAsset["FaceUserlane"] = "face-userlane.png";
    QinAsset["FaceVBetweenSpace"] = "face-v-between-space.png";
    QinAsset["FaceVScroll"] = "face-v-scroll.png";
    QinAsset["FaceVerticalSwap"] = "face-vertical-swap.png";
    QinAsset["FaceVinyl"] = "face-vinyl.png";
    QinAsset["FaceVoicemail"] = "face-voicemail.png";
    QinAsset["FaceVolume"] = "face-volume.png";
    QinAsset["FaceWebcam"] = "face-webcam.png";
    QinAsset["FaceWebsite"] = "face-website.png";
    QinAsset["FaceWideScreen"] = "face-wide-screen.png";
    QinAsset["FaceWifiDisable"] = "face-wifi-disable.png";
    QinAsset["FaceWifi"] = "face-wifi.png";
    QinAsset["FaceWindows"] = "face-windows.png";
    QinAsset["FaceYinyang"] = "face-yinyang.png";
    QinAsset["FaceYoutube"] = "face-youtube.png";
    QinAsset["FaceZaSort"] = "face-za-sort.png";
    QinAsset["FaceZeit"] = "face-zeit.png";
    QinAsset["FaceZigzagShape"] = "face-zigzag-shape.png";
    QinAsset["Favicon"] = "favicon.ico";
    QinAsset["FrameClose"] = "frame-close.png";
    QinAsset["FrameMaximize"] = "frame-maximize.png";
    QinAsset["FrameMenu"] = "frame-menu.png";
    QinAsset["FrameMinimize"] = "frame-minimize.png";
    QinAsset["FrameResize"] = "frame-resize.png";
    QinAsset["FrameStatusError"] = "frame-status-error.png";
    QinAsset["FrameStatusInfo"] = "frame-status-info.png";
    QinAsset["LoginKey"] = "login-key.png";
    QinAsset["MenuDevtools"] = "menu-devtools.ico";
    QinAsset["Qinpel48"] = "qinpel-48.png";
    QinAsset["Qinpel"] = "qinpel.png";
    QinAsset["SourceSansPro"] = "source-sans-pro.ttf";
    QinAsset["SourceSerifPro"] = "source-serif-pro.ttf";
})(QinAsset = exports.QinAsset || (exports.QinAsset = {}));
function qinAssetUrl(asset) {
    return "/app/qinpel-app/assets/" + asset;
}
exports.qinAssetUrl = qinAssetUrl;
function qinUrlAsset(url) {
    const asset = url.substring(url.lastIndexOf("/") + 1);
    return asset;
}
exports.qinUrlAsset = qinUrlAsset;

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

},{"qinpel-res":31}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBase = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_style_1 = require("./qin-base-style");
const qin_tools_1 = require("./qin-tools");
class QinBase {
    constructor() {
        this._baseParent = null;
        this._pastParent = null;
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
    put(item) {
        item.install(this);
        return this;
    }
    install(onBase) {
        this.unInstall();
        this._baseParent = onBase;
        this._baseParent.appendChild(this);
    }
    unInstall() {
        if (this._baseParent != null) {
            this._baseParent.removeChild(this);
            this._pastParent = this._baseParent;
            this._baseParent = null;
        }
    }
    reInstall() {
        this.unInstall();
        if (this._pastParent != null) {
            this._pastParent.appendChild(this);
            this._baseParent = this._pastParent;
        }
    }
    unInstallChildren() {
        for (let i = this._baseChildren.length - 1; i >= 0; i--) {
            this._baseChildren[i].unInstall();
        }
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
    putTabIndex(index) {
        this.getMain().tabIndex = index;
    }
    addAction(action) {
        qinpel_res_1.QinArm.addAction(this.getMain(), action);
    }
    addActionMain(action) {
        qinpel_res_1.QinArm.addActionMain(this.getMain(), action);
    }
    addActionMainKey(action) {
        qinpel_res_1.QinArm.addActionMainKey(this.getMain(), action);
    }
    addActionMainMouse(action) {
        qinpel_res_1.QinArm.addActionMainMouse(this.getMain(), action);
    }
    addActionMainTouch(action) {
        qinpel_res_1.QinArm.addActionMainTouch(this.getMain(), action);
    }
    addActionMainPoint(action) {
        qinpel_res_1.QinArm.addActionMainPoint(this.getMain(), action);
    }
    addActionMidi(action) {
        qinpel_res_1.QinArm.addActionMidi(this.getMain(), action);
    }
    addActionMidiKey(action) {
        qinpel_res_1.QinArm.addActionMidiKey(this.getMain(), action);
    }
    addActionMidiMouse(action) {
        qinpel_res_1.QinArm.addActionMidiMouse(this.getMain(), action);
    }
    addActionMidiTouch(action) {
        qinpel_res_1.QinArm.addActionMidiTouch(this.getMain(), action);
    }
    addActionMidiPoint(action) {
        qinpel_res_1.QinArm.addActionMidiPoint(this.getMain(), action);
    }
    addActionMenu(action) {
        qinpel_res_1.QinArm.addActionMenu(this.getMain(), action);
    }
    addActionMenuKey(action) {
        qinpel_res_1.QinArm.addActionMenuKey(this.getMain(), action);
    }
    addActionMenuMouse(action) {
        qinpel_res_1.QinArm.addActionMenuMouse(this.getMain(), action);
    }
    addActionMenuTouch(action) {
        qinpel_res_1.QinArm.addActionMenuTouch(this.getMain(), action);
    }
    addActionMenuPoint(action) {
        qinpel_res_1.QinArm.addActionMenuPoint(this.getMain(), action);
    }
}
exports.QinBase = QinBase;

},{"./qin-base-style":3,"./qin-tools":30,"qinpel-res":31}],5:[function(require,module,exports){
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
            if (qinEvent.isMain) {
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
            this._qinIcon.asset = qin_assets_1.QinAsset.FaceConfirm;
        }
        else {
            this._qinIcon.asset = qin_assets_1.QinAsset.FaceCircle;
        }
    }
    toggle() {
        this._value = !this._value;
        this.updateIcon();
    }
}
exports.QinBoolean = QinBoolean;

},{"./qin-assets":2,"./qin-edit":9,"./qin-icon":16,"./qin-label":18,"./qin-line":19}],6:[function(require,module,exports){
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

},{"./qin-base":4,"qinpel-res":31}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinColumn = void 0;
const qin_panel_1 = require("./qin-panel");
class QinColumn extends qin_panel_1.QinPanel {
    constructor(options) {
        super(options);
        this.style.putAsFlexDirectionColumn();
        this.style.putAsFlexWrapNot();
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinColumn = QinColumn;

},{"./qin-panel":21}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinCombo = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinCombo extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("select");
        this._elGroups = new Array();
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
        let group = this.getGroup(item.group);
        if (group) {
            group.appendChild(option);
        }
        else {
            qinpel_res_1.QinSkin.styleAsBase(option);
            this._elMain.appendChild(option);
        }
        return this;
    }
    getGroup(label) {
        if (!label) {
            return null;
        }
        for (let group of this._elGroups) {
            if (group.label == label) {
                return group;
            }
        }
        let newGroup = document.createElement("optgroup");
        newGroup.label = label;
        qinpel_res_1.QinSkin.styleAsBase(newGroup);
        this._elGroups.push(newGroup);
        this._elMain.appendChild(newGroup);
        return newGroup;
    }
}
exports.QinCombo = QinCombo;

},{"./qin-edit":9,"qinpel-res":31}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinEdit = void 0;
const qin_base_1 = require("./qin-base");
class QinEdit extends qin_base_1.QinBase {
}
exports.QinEdit = QinEdit;

},{"./qin-base":4}],10:[function(require,module,exports){
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

},{"./qin-column":7,"./qin-edit":9,"./qin-label":18}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFileChooser = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_column_1 = require("./qin-column");
const qin_combo_1 = require("./qin-combo");
const qin_edit_1 = require("./qin-edit");
const qin_file_explorer_1 = require("./qin-file-explorer");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_panel_1 = require("./qin-panel");
const qin_string_1 = require("./qin-string");
class QinFileChooser extends qin_edit_1.QinEdit {
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
        this._qinExplorer = new qin_file_explorer_1.QinFileExplorer();
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
            if (qinEvent.isMain) {
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
            if (qinEvent.isMain) {
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
exports.QinFileChooser = QinFileChooser;

},{"./qin-assets":2,"./qin-button":6,"./qin-column":7,"./qin-combo":8,"./qin-edit":9,"./qin-file-explorer":12,"./qin-icon":16,"./qin-line":19,"./qin-panel":21,"./qin-string":27,"qinpel-res":31}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFileExplorer = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_panel_1 = require("./qin-panel");
class QinFileExplorer extends qin_edit_1.QinEdit {
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
            if (qinEvent.isMain) {
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
exports.QinFileExplorer = QinFileExplorer;
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
            if (qinEvent.isMain) {
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

},{"./qin-edit":9,"./qin-panel":21,"qinpel-res":31}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFilePath = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_file_chooser_1 = require("./qin-file-chooser");
const qin_edit_1 = require("./qin-edit");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_string_1 = require("./qin-string");
class QinFilePath extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinPath = new qin_string_1.QinString();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceFolder),
        });
        this._qinChooser = new qin_file_chooser_1.QinFileChooser({
            nature: options === null || options === void 0 ? void 0 : options.nature,
            operation: options === null || options === void 0 ? void 0 : options.operation,
            descriptors: options === null || options === void 0 ? void 0 : options.descriptors,
            singleSelection: true,
        });
        this._qinPopup = this.qinpel.frame.newPopup(this._qinChooser.getMain());
        this._qinPath.install(this._qinMain);
        this._qinSearch.install(this._qinMain);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isMain) {
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
exports.QinFilePath = QinFilePath;

},{"./qin-assets":2,"./qin-button":6,"./qin-edit":9,"./qin-file-chooser":11,"./qin-icon":16,"./qin-line":19,"./qin-string":27}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIconOption = void 0;
const qin_edit_1 = require("./qin-edit");
const qinpel_res_1 = require("qinpel-res");
class QinIconOption extends qin_edit_1.QinEdit {
    constructor(icon) {
        super();
        this._elMain = document.createElement("div");
        this._selected = false;
        let border = Math.round(icon.size.width / 10);
        let padding = border * 2;
        this._elMain.style.borderRadius = border + "px";
        this._elMain.style.padding = padding + "px";
        this._elMain.style.display = "flex";
        this._icon = icon;
        this._icon.install(this);
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        return this._selected;
    }
    setData(data) {
        this._selected = data;
        if (this._selected) {
            this._elMain.style.backgroundColor = qinpel_res_1.QinSkin.styles.ColorSelected;
        }
        else {
            this._elMain.style.backgroundColor = "initial";
        }
    }
    get icon() {
        return this._icon;
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this.setData(selected);
    }
}
exports.QinIconOption = QinIconOption;

},{"./qin-edit":9,"qinpel-res":31}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIconPick = void 0;
const qin_edit_1 = require("./qin-edit");
const qin_line_1 = require("./qin-line");
const qin_icon_option_1 = require("./qin-icon-option");
class QinIconPick extends qin_edit_1.QinEdit {
    constructor() {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinMain.style.putAsEdit();
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        for (let child of this.children()) {
            if (child instanceof qin_icon_option_1.QinIconOption) {
                if (child.selected) {
                    return child.icon.asset;
                }
            }
        }
        ;
        return null;
    }
    setData(asset) {
        for (let child of this._qinMain.children()) {
            if (child instanceof qin_icon_option_1.QinIconOption) {
                if (child.icon.asset == asset) {
                    child.selected = true;
                }
                else {
                    child.selected = false;
                }
            }
        }
        ;
    }
    addIcon(icon) {
        let option = new qin_icon_option_1.QinIconOption(icon);
        option.install(this._qinMain);
    }
    addOption(option) {
        option.install(this._qinMain);
    }
}
exports.QinIconPick = QinIconPick;

},{"./qin-edit":9,"./qin-icon-option":14,"./qin-line":19}],16:[function(require,module,exports){
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
        qinpel_res_1.QinSkin.styleSize(this._elMain, size);
    }
    getMain() {
        return this._elMain;
    }
    get asset() {
        return (0, qin_assets_1.qinUrlAsset)(this._elMain.src);
    }
    set asset(asset) {
        this._elMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
    }
    get size() {
        return qinpel_res_1.QinSkin.getDimension(this._elMain);
    }
}
exports.QinIcon = QinIcon;

},{"./qin-assets":2,"./qin-base":4,"qinpel-res":31}],17:[function(require,module,exports){
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

},{"./qin-edit":9,"qinpel-res":31}],18:[function(require,module,exports){
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

},{"./qin-base":4}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLine = void 0;
const qin_panel_1 = require("./qin-panel");
class QinLine extends qin_panel_1.QinPanel {
    constructor(options) {
        super(options);
        this.style.putAsFlexDirectionRow();
        this.style.putAsFlexWrap();
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinLine = QinLine;

},{"./qin-panel":21}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinMutantsArm = exports.QinMutants = void 0;
const qin_boolean_1 = require("./qin-boolean");
const qin_file_chooser_1 = require("./qin-file-chooser");
const qin_combo_1 = require("./qin-combo");
const qin_file_explorer_1 = require("./qin-file-explorer");
const qin_integer_1 = require("./qin-integer");
const qin_file_path_1 = require("./qin-file-path");
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
            return new qin_file_chooser_1.QinFileChooser(options);
        case QinMutants.COMBO:
            return new qin_combo_1.QinCombo(options);
        case QinMutants.EXPLORER:
            return new qin_file_explorer_1.QinFileExplorer(options);
        case QinMutants.INTEGER:
            return new qin_integer_1.QinInteger(options);
        case QinMutants.PATH:
            return new qin_file_path_1.QinFilePath(options);
        case QinMutants.STRING:
            return new qin_string_1.QinString(options);
        default:
            throw new Error("Unknown kind of mutant to create.");
    }
}
exports.QinMutantsArm = {
    newEdit,
};

},{"./qin-boolean":5,"./qin-combo":8,"./qin-file-chooser":11,"./qin-file-explorer":12,"./qin-file-path":13,"./qin-integer":17,"./qin-string":27}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPanel = void 0;
const qin_base_1 = require("./qin-base");
class QinPanel extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this.style.putAsDisplayFlex();
        if (options === null || options === void 0 ? void 0 : options.items) {
            for (const item of options.items) {
                item.install(this);
            }
        }
    }
    getMain() {
        return this._elMain;
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinPanel = QinPanel;

},{"./qin-base":4}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPopup = void 0;
const qin_tools_1 = require("./qin-tools");
class QinPopup {
    constructor(contents) {
        this._qinMain = qin_tools_1.QinTools.qinpel().frame.newPopup(contents.getMain());
    }
    show() {
        this._qinMain.show();
    }
    showOnParent(parent) {
        this._qinMain.showOnParent(parent.getMain());
    }
    showOnBounds(bounds) {
        this._qinMain.showOnBounds(bounds);
    }
    close() {
        this._qinMain.close();
    }
}
exports.QinPopup = QinPopup;

},{"./qin-tools":30}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinRow = void 0;
const qin_panel_1 = require("./qin-panel");
class QinRow extends qin_panel_1.QinPanel {
    constructor(options) {
        super(options);
        this.style.putAsFlexDirectionRow();
        this.style.putAsFlexWrapNot();
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinRow = QinRow;

},{"./qin-panel":21}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinScroll = void 0;
const qin_panel_1 = require("./qin-panel");
class QinScroll extends qin_panel_1.QinPanel {
    constructor(options) {
        super(options);
        this.style.putAsScroll();
    }
}
exports.QinScroll = QinScroll;

},{"./qin-panel":21}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSplitter = void 0;
const qin_base_1 = require("./qin-base");
class QinSplitter extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this._elSideA = document.createElement("div");
        this._elMover = document.createElement("div");
        this._elGrowA = document.createElement("div");
        this._elGrowB = document.createElement("div");
        this._elSideB = document.createElement("div");
        this._isHorizontal = true;
        this._qinSideA = null;
        this._qinSideB = null;
        this._elMain.appendChild(this._elSideA);
        this._elMain.appendChild(this._elMover);
        this._elMover.appendChild(this._elGrowA);
        this._elMover.appendChild(this._elGrowB);
        this._elMain.appendChild(this._elSideB);
        this._elMain.style.display = "flex";
        this._elMain.style.flexWrap = "nowrap";
        this._elSideA.style.display = "flex";
        this._elSideA.style.flexWrap = "nowrap";
        this._elSideA.style.overflow = "auto";
        this._elMover.style.display = "flex";
        this._elMover.style.flexWrap = "nowrap";
        this._elMover.style.borderRadius = "12px";
        this._elMover.style.border = "1px solid rgba(255,250,239,0.1)";
        this._elMover.style.overflow = "hidden";
        this._elMover.style.flex = "0";
        this._elGrowA.style.flex = "1";
        this._elGrowB.style.flex = "1";
        this._elSideB.style.display = "flex";
        this._elSideB.style.flexWrap = "nowrap";
        this._elSideB.style.overflow = "auto";
        let balance = (grow, fall) => {
            let related = this._isHorizontal ? "width" : "height";
            let growAt = parseInt(grow.style[related]);
            let fallAt = parseInt(fall.style[related]);
            if (fallAt <= 10)
                return;
            grow.style[related] = (growAt + 10) + "%";
            fall.style[related] = (fallAt - 10) + "%";
        };
        this._elGrowA.addEventListener("mousedown", (_) => balance(this._elSideA, this._elSideB));
        this._elGrowA.addEventListener("touchstart", (_) => balance(this._elSideA, this._elSideB));
        this._elGrowB.addEventListener("mousedown", (_) => balance(this._elSideB, this._elSideA));
        this._elGrowB.addEventListener("touchstart", (_) => balance(this._elSideB, this._elSideA));
        if (options) {
            if (options.sideA) {
                this.setSideA(options.sideA);
            }
            if (options.sideB) {
                this.setSideB(options.sideB);
            }
        }
        if (options === null || options === void 0 ? void 0 : options.horizontal) {
            this.setHorizontal();
        }
        else {
            this.setVertical();
        }
    }
    getMain() {
        return this._elMain;
    }
    appendChild(child) {
        if (this._qinSideA === null) {
            this._qinSideA = child;
            this._elSideA.appendChild(child.getMain());
        }
        else {
            if (this._qinSideB !== null) {
                this._qinSideB.unInstall();
                this._qinSideB = null;
            }
            this._qinSideB = child;
            this._elSideB.appendChild(child.getMain());
        }
        this._baseChildren.push(child);
    }
    removeChild(child) {
        let index = this._baseChildren.indexOf(child);
        if (index > -1) {
            this._baseChildren.splice(index, 1);
        }
        if (this._qinSideA === child) {
            this._elSideA.removeChild(child.getMain());
            this._qinSideA = null;
        }
        else if (this._qinSideB === child) {
            this._elSideB.removeChild(child.getMain());
            this._qinSideB = null;
        }
    }
    setHorizontal() {
        this._elMain.style.flexDirection = "row";
        this._elMover.style.flexDirection = "row";
        this._elSideA.style.width = "50%";
        this._elSideA.style.height = "100%";
        this._elSideB.style.width = "50%";
        this._elSideB.style.height = "100%";
        this._elMover.style.minWidth = "24px";
        this._elMover.style.maxWidth = "24px";
        this._elMover.style.minHeight = "initial";
        this._elMover.style.maxHeight = "initial";
        this._elMover.style.width = "24px";
        this._elMover.style.height = "100%";
        this._elGrowA.style.background = "linear-gradient(90deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
        this._elGrowB.style.background = "linear-gradient(270deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
        this._isHorizontal = true;
    }
    setVertical() {
        this._elMain.style.flexDirection = "column";
        this._elMover.style.flexDirection = "column";
        this._elSideA.style.width = "100%";
        this._elSideA.style.height = "50%";
        this._elSideB.style.width = "100%";
        this._elSideB.style.height = "50%";
        this._elMover.style.minWidth = "initial";
        this._elMover.style.maxWidth = "initial";
        this._elMover.style.minHeight = "24px";
        this._elMover.style.maxHeight = "24px";
        this._elMover.style.width = "100%";
        this._elMover.style.height = "24px";
        this._elGrowA.style.background = "linear-gradient(180deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
        this._elGrowB.style.background = "linear-gradient(0deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
        this._isHorizontal = false;
    }
    setSideA(side) {
        if (this._qinSideA !== null) {
            this._qinSideA.unInstall();
            this._qinSideA = null;
        }
        this._qinSideA = side;
        this._elSideA.appendChild(side.getMain());
    }
    setSideB(side) {
        if (this._qinSideB !== null) {
            this._qinSideB.unInstall();
            this._qinSideB = null;
        }
        this._qinSideB = side;
        this._elSideB.appendChild(side.getMain());
    }
}
exports.QinSplitter = QinSplitter;

},{"./qin-base":4}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinStack = void 0;
const qin_panel_1 = require("./qin-panel");
class QinStack extends qin_panel_1.QinPanel {
    stack(qinComp) {
        this.children().forEach((child) => {
            child.unDisplay();
        });
        qinComp.install(this);
    }
    show(qinComp) {
        this.children().forEach((child) => {
            if (child === qinComp) {
                child.reDisplay();
            }
            else {
                child.unDisplay();
            }
        });
    }
}
exports.QinStack = QinStack;

},{"./qin-panel":21}],27:[function(require,module,exports){
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
        qinpel_res_1.QinSkin.styleAsEdit(this._elMain);
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

},{"./qin-edit":9,"qinpel-res":31}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTable = void 0;
const qin_edit_1 = require("./qin-edit");
class QinTable extends qin_edit_1.QinEdit {
    constructor() {
        super();
        this._elMain = document.createElement("div");
        this._elTable = document.createElement("table");
        this._elTHead = document.createElement("thead");
        this._elTHeadRow = document.createElement("tr");
        this._elTBody = document.createElement("tbody");
        this._linesSize = 0;
        this._elMain.appendChild(this._elTable);
        this._elTable.appendChild(this._elTHead);
        this._elTHead.appendChild(this._elTHeadRow);
        this._elTable.appendChild(this._elTBody);
        styles.applyOnTable(this._elTable);
        styles.applyOnHead(this._elTHead);
        styles.applyOnHeadRow(this._elTHeadRow);
        styles.applyOnBody(this._elTBody);
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        let result = [];
        this._elTBody.querySelectorAll("tr").forEach((tr) => {
            let line = [];
            tr.querySelectorAll("td").forEach((td) => {
                line.push(td.innerText);
            });
            result.push(line);
        });
        return result;
    }
    setData(data) {
        this.delLines();
        for (const line of data) {
            this.addLine(line);
        }
    }
    setHead(head) {
        this._elTHeadRow.innerHTML = "";
        for (const cell of head) {
            let th = document.createElement("th");
            th.innerText = cell;
            styles.applyOnHeadCol(th);
            this._elTHeadRow.appendChild(th);
        }
    }
    getHead() {
        let result = [];
        this._elTHeadRow.querySelectorAll("th").forEach((th) => {
            result.push(th.innerText);
        });
        return result;
    }
    addHead(head) {
        let th = document.createElement("th");
        th.innerText = head;
        styles.applyOnHeadCol(th);
        this._elTHeadRow.appendChild(th);
    }
    addLine(line) {
        let tr = document.createElement("tr");
        if (this._linesSize % 2 === 0) {
            styles.applyOnBodyRow(tr);
        }
        else {
            styles.applyOnBodyRowOdd(tr);
        }
        for (const cell of line) {
            let td = document.createElement("td");
            td.innerText = cell.toString();
            styles.applyOnBodyCol(td);
            tr.appendChild(td);
        }
        this._elTBody.appendChild(tr);
        this._linesSize++;
    }
    delLines() {
        this._elTBody.innerHTML = "";
        this._linesSize = 0;
    }
}
exports.QinTable = QinTable;
const styles = {
    applyOnTable: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.border = "1px solid #9e9e9e";
    },
    applyOnHead: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
    },
    applyOnHeadRow: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.backgroundColor = "#56cd6436";
    },
    applyOnHeadCol: (el) => {
        el.style.margin = "0px";
        el.style.padding = "5px";
        el.style.borderRight = "1px solid #5e5e5e";
        el.style.borderBottom = "2px solid #5e5e5e";
    },
    applyOnBody: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
    },
    applyOnBodyRow: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.backgroundColor = "#5664cd36";
    },
    applyOnBodyRowOdd: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.backgroundColor = "#cda95636";
    },
    applyOnBodyCol: (el) => {
        el.style.margin = "0px";
        el.style.padding = "5px";
        el.style.borderRight = "1px solid #5e5e5e";
        el.style.borderBottom = "2px solid #5e5e5e";
    },
};

},{"./qin-edit":9}],29:[function(require,module,exports){
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
            if (qinEvent.isMain) {
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
        this._qinPanel.unInstallChildren();
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

},{"./qin-button":6,"./qin-column":7,"./qin-label":18,"./qin-line":19,"./qin-panel":21,"qinpel-res":31}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = exports.QinSkin = exports.QinStyles = exports.QinHead = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = exports.QinBody = exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = void 0;
var qin_arm_1 = require("./qin-arm");
Object.defineProperty(exports, "QinEvent", { enumerable: true, get: function () { return qin_arm_1.QinEvent; } });
var qin_arm_2 = require("./qin-arm");
Object.defineProperty(exports, "QinWaiters", { enumerable: true, get: function () { return qin_arm_2.QinWaiters; } });
var qin_arm_3 = require("./qin-arm");
Object.defineProperty(exports, "QinPointerCalls", { enumerable: true, get: function () { return qin_arm_3.QinPointerCalls; } });
var qin_arm_4 = require("./qin-arm");
Object.defineProperty(exports, "QinArm", { enumerable: true, get: function () { return qin_arm_4.QinArm; } });
var qin_body_1 = require("./qin-body");
Object.defineProperty(exports, "QinBody", { enumerable: true, get: function () { return qin_body_1.QinBody; } });
var qin_foot_1 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesNature", { enumerable: true, get: function () { return qin_foot_1.QinFilesNature; } });
var qin_foot_2 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesOperation", { enumerable: true, get: function () { return qin_foot_2.QinFilesOperation; } });
var qin_foot_3 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesDescriptor", { enumerable: true, get: function () { return qin_foot_3.QinFilesDescriptor; } });
var qin_foot_4 = require("./qin-foot");
Object.defineProperty(exports, "QinFoot", { enumerable: true, get: function () { return qin_foot_4.QinFoot; } });
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
var qin_skin_1 = require("./qin-skin");
Object.defineProperty(exports, "QinStyles", { enumerable: true, get: function () { return qin_skin_1.QinStyles; } });
var qin_skin_2 = require("./qin-skin");
Object.defineProperty(exports, "QinSkin", { enumerable: true, get: function () { return qin_skin_2.QinSkin; } });
var qin_soul_1 = require("./qin-soul");
Object.defineProperty(exports, "QinSoul", { enumerable: true, get: function () { return qin_soul_1.QinSoul; } });

},{"./qin-arm":32,"./qin-body":33,"./qin-foot":34,"./qin-head":35,"./qin-skin":36,"./qin-soul":37}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = void 0;
const qin_skin_1 = require("./qin-skin");
class QinEvent {
    constructor(origin, isStart, kind) {
        var _a, _b, _c;
        this._eventKey = null;
        this._eventMouse = null;
        this._eventTouch = null;
        this._point = null;
        this._stop = false;
        this._origin = origin;
        this._start = isStart;
        this._eventKey = (_a = kind === null || kind === void 0 ? void 0 : kind.eventKey) !== null && _a !== void 0 ? _a : null;
        this._eventMouse = (_b = kind === null || kind === void 0 ? void 0 : kind.eventMouse) !== null && _b !== void 0 ? _b : null;
        this._eventTouch = (_c = kind === null || kind === void 0 ? void 0 : kind.eventTouch) !== null && _c !== void 0 ? _c : null;
        if (this._eventMouse) {
            this._point = makeEventMousePoint(isStart, this._eventMouse);
        }
        else if (this._eventTouch) {
            this._point = makeEventTouch(isStart, this._eventTouch);
        }
    }
    get isStart() {
        return this._start;
    }
    get fromOrigin() {
        return this._origin;
    }
    get fromTarget() {
        if (this._eventKey) {
            return this._eventKey.target;
        }
        else if (this._eventMouse) {
            return this._eventMouse.target;
        }
        else if (this._eventTouch) {
            return this._eventTouch.target;
        }
        return null;
    }
    get fromTyping() {
        return !!this._eventKey;
    }
    get fromPointing() {
        return !!this._point;
    }
    get hasAlt() {
        if (this._eventKey) {
            return this._eventKey.altKey;
        }
        else if (this._eventMouse) {
            return this._eventMouse.altKey;
        }
        else if (this._eventTouch) {
            return this._eventTouch.altKey;
        }
        return false;
    }
    get hasCtrl() {
        if (this._eventKey) {
            return this._eventKey.ctrlKey;
        }
        else if (this._eventMouse) {
            return this._eventMouse.ctrlKey;
        }
        else if (this._eventTouch) {
            return this._eventTouch.ctrlKey;
        }
        return false;
    }
    get hasShift() {
        if (this._eventKey) {
            return this._eventKey.shiftKey;
        }
        else if (this._eventMouse) {
            return this._eventMouse.shiftKey;
        }
        else if (this._eventTouch) {
            return this._eventTouch.shiftKey;
        }
        return false;
    }
    get hasMeta() {
        if (this._eventKey) {
            return this._eventKey.metaKey;
        }
        else if (this._eventMouse) {
            return this._eventMouse.metaKey;
        }
        else if (this._eventTouch) {
            return this._eventTouch.metaKey;
        }
        return false;
    }
    get keyTyped() {
        if (this._eventKey) {
            return this._eventKey.key;
        }
        return null;
    }
    get isEnter() {
        return isKeyEnter(this._eventKey);
    }
    get isEscape() {
        return isKeyEscape(this._eventKey);
    }
    get isSpace() {
        return isKeySpace(this._eventKey);
    }
    get isDouble() {
        if (this._eventMouse) {
            return isEventMouseDouble(this._start, this._eventMouse);
        }
        else if (this._eventTouch) {
            return isEventTouchDouble(this._start, this._eventTouch);
        }
        return false;
    }
    get isLong() {
        if (this._eventMouse) {
            return isEventMouseLong(this._start, this._eventMouse);
        }
        else if (this._eventTouch) {
            return isEventTouchLong(this._start, this._eventTouch);
        }
        return false;
    }
    get point() {
        return this._point;
    }
    get pointX() {
        var _a;
        return (_a = this._point) === null || _a === void 0 ? void 0 : _a.posX;
    }
    get pointY() {
        var _a;
        return (_a = this._point) === null || _a === void 0 ? void 0 : _a.posY;
    }
    get isFirstButton() {
        return isFirstButton(this._eventMouse);
    }
    get isMiddleButton() {
        return isMiddleButton(this._eventMouse);
    }
    get isSecondButton() {
        return isSecondButton(this._eventMouse);
    }
    get isOneFinger() {
        return isOneFinger(this._eventTouch);
    }
    get isTwoFingers() {
        return isTwoFingers(this._eventTouch);
    }
    get isThreeFingers() {
        return isThreeFingers(this._eventTouch);
    }
    get isFourFingers() {
        return isFourFingers(this._eventTouch);
    }
    get isMain() {
        if (this._start) {
            return false;
        }
        if (this._eventKey) {
            return isMainKey(this._eventKey);
        }
        else if (this._eventMouse) {
            return isMainMouse(this._eventMouse);
        }
        else if (this._eventTouch) {
            return isMainTouch(this._eventTouch);
        }
        return false;
    }
    get isMainKey() {
        if (this._start) {
            return false;
        }
        return isMainKey(this._eventKey);
    }
    get isMainMouse() {
        if (this._start) {
            return false;
        }
        return isMainMouse(this._eventMouse);
    }
    get isMainTouch() {
        if (this._start) {
            return false;
        }
        return isMainTouch(this._eventTouch);
    }
    get isMainPoint() {
        if (this._start) {
            return false;
        }
        return isMainMouse(this._eventMouse) || isMainTouch(this._eventTouch);
    }
    get isMidi() {
        if (this._start) {
            return false;
        }
        if (this._eventKey) {
            return isMidiKey(this._eventKey);
        }
        else if (this._eventMouse) {
            return isMidiMouse(this._eventMouse);
        }
        else if (this._eventTouch) {
            return isMidiTouch(this._eventTouch);
        }
        return false;
    }
    get isMidiKey() {
        if (this._start) {
            return false;
        }
        return isMidiKey(this._eventKey);
    }
    get isMidiMouse() {
        if (this._start) {
            return false;
        }
        return isMidiMouse(this._eventMouse);
    }
    get isMidiTouch() {
        if (this._start) {
            return false;
        }
        return isMidiTouch(this._eventTouch);
    }
    get isMidiPoint() {
        if (this._start) {
            return false;
        }
        if (this._eventMouse) {
            return isMidiMouse(this._eventMouse);
        }
        else if (this._eventTouch) {
            return isMidiTouch(this._eventTouch);
        }
        return false;
    }
    get isMenu() {
        if (this._start) {
            return false;
        }
        if (this._eventKey) {
            return isMenuKey(this._eventKey);
        }
        else if (this._eventKey) {
            return isMenuMouse(this._eventMouse);
        }
        else if (this._eventKey) {
            return isMenuTouch(this._eventTouch);
        }
        return false;
    }
    get isMenuKey() {
        if (this._start) {
            return false;
        }
        return isMenuKey(this._eventKey);
    }
    get isMenuMouse() {
        if (this._start) {
            return false;
        }
        return isMenuMouse(this._eventMouse);
    }
    get isMenuTouch() {
        if (this._start) {
            return false;
        }
        return isMenuTouch(this._eventTouch);
    }
    get isMenuPoint() {
        if (this._start) {
            return false;
        }
        if (this._eventMouse) {
            return isMenuMouse(this._eventMouse);
        }
        else if (this._eventTouch) {
            return isMenuTouch(this._eventTouch);
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
var lastEventMouse = null;
var lastEventTouch = null;
function makeEventMousePoint(isStart, ev) {
    if (!ev) {
        return null;
    }
    const result = {
        posX: 0,
        posY: 0,
    };
    if (ev.clientX || ev.clientY) {
        result.posX = ev.clientX;
        result.posY = ev.clientY;
    }
    if (isStart) {
        lastEventMouse = ev;
    }
    return result;
}
function makeEventTouch(isStart, ev) {
    if (!ev) {
        return null;
    }
    const result = {
        posX: 0,
        posY: 0,
    };
    if (ev.touches && this._event.touches.length >= 1) {
        let index = Math.floor(this._event.touches.length / 2);
        result.posX = ev.touches[index].clientX;
        result.posY = ev.touches[index].clientY;
    }
    if (isStart) {
        lastEventTouch = ev;
    }
    return result;
}
function isEventMouseDouble(isStart, ev) {
    if (!isStart || lastEventMouse == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventMouse.timeStamp;
    return timeDif < 450;
}
function isEventTouchDouble(isStart, ev) {
    if (!isStart || lastEventTouch == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventTouch.timeStamp;
    return timeDif < 450;
}
function isEventMouseLong(isStart, ev) {
    if (!isStart || lastEventMouse == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventMouse.timeStamp;
    return timeDif > 840;
}
function isEventTouchLong(isStart, ev) {
    if (!isStart || lastEventTouch == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventTouch.timeStamp;
    return timeDif > 840;
}
function isKeyInList(ev, list) {
    if (!ev) {
        return false;
    }
    let keyLower = ev.key.toLowerCase();
    return list.indexOf(keyLower) > -1;
}
function isKeyEnter(ev) {
    if (!ev) {
        return false;
    }
    return isKeyInList(ev, ["enter", "return"]) || ev.keyCode === 13;
}
function isKeyEscape(ev) {
    if (!ev) {
        return false;
    }
    return isKeyInList(ev, ["esc", "escape"]) || ev.keyCode === 27;
}
function isKeySpace(ev) {
    if (!ev) {
        return false;
    }
    return isKeyInList(ev, [" ", "space", "spacebar"]) || ev.keyCode === 32;
}
function isFirstButton(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 0;
}
function isMiddleButton(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 1;
}
function isSecondButton(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 2;
}
function isOneFinger(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 1;
}
function isTwoFingers(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 2;
}
function isThreeFingers(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 3;
}
function isFourFingers(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 4;
}
function isMainKey(ev) {
    if (!ev) {
        return false;
    }
    return isKeyEnter(ev);
}
function isMidiKey(ev) {
    if (!ev) {
        return false;
    }
    return ev.ctrlKey && ev.altKey && isKeySpace(ev);
}
function isMenuKey(ev) {
    if (!ev) {
        return false;
    }
    return ev.ctrlKey && !ev.altKey && isKeySpace(ev);
}
function isMainMouse(ev) {
    if (!ev) {
        return false;
    }
    return isFirstButton(ev);
}
function isMainTouch(ev) {
    if (!ev) {
        return false;
    }
    return isOneFinger(ev);
}
function isMidiMouse(ev) {
    if (!ev) {
        return false;
    }
    return isMiddleButton(ev);
}
function isMidiTouch(ev) {
    if (!ev) {
        return false;
    }
    return isThreeFingers(ev);
}
function isMenuMouse(ev) {
    if (!ev) {
        return false;
    }
    return isSecondButton(ev);
}
function isMenuTouch(ev) {
    if (!ev) {
        return false;
    }
    return isTwoFingers(ev);
}
function addAction(origin, action) {
    origin.addEventListener("keydown", actKeyDown);
    origin.addEventListener("keyup", actKeyUp);
    origin.addEventListener("mousedown", actMouseDown);
    origin.addEventListener("mouseup", actMouseUp);
    origin.addEventListener("touchstart", actTouchStart);
    origin.addEventListener("touchend", actTouchEnd);
    function actKeyDown(ev) {
        let qinEvent = new QinEvent(origin, true, { eventKey: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actKeyUp(ev) {
        let qinEvent = new QinEvent(origin, false, { eventKey: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actMouseDown(ev) {
        let qinEvent = new QinEvent(origin, true, { eventMouse: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actMouseUp(ev) {
        let qinEvent = new QinEvent(origin, false, { eventMouse: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actTouchStart(ev) {
        let qinEvent = new QinEvent(origin, true, { eventTouch: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actTouchEnd(ev) {
        let qinEvent = new QinEvent(origin, false, { eventTouch: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
}
function addActionMain(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMain) {
            action(qinEvent);
        }
    });
}
function addActionMainKey(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainKey) {
            action(qinEvent);
        }
    });
}
function addActionMainMouse(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainMouse) {
            action(qinEvent);
        }
    });
}
function addActionMainTouch(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainMouse) {
            action(qinEvent);
        }
    });
}
function addActionMainPoint(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainPoint) {
            action(qinEvent);
        }
    });
}
function addActionMidi(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidi) {
            action(qinEvent);
        }
    });
}
function addActionMidiKey(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiKey) {
            action(qinEvent);
        }
    });
}
function addActionMidiMouse(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiMouse) {
            action(qinEvent);
        }
    });
}
function addActionMidiTouch(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiMouse) {
            action(qinEvent);
        }
    });
}
function addActionMidiPoint(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiPoint) {
            action(qinEvent);
        }
    });
}
function addActionMenu(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenu) {
            action(qinEvent);
        }
    });
}
function addActionMenuKey(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuKey) {
            action(qinEvent);
        }
    });
}
function addActionMenuMouse(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuMouse) {
            action(qinEvent);
        }
    });
}
function addActionMenuTouch(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuMouse) {
            action(qinEvent);
        }
    });
}
function addActionMenuPoint(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuPoint) {
            action(qinEvent);
        }
    });
}
function addActions(origins, action) {
    for (const element of origins) {
        addAction(element, action);
    }
}
function addActionsMain(origins, action) {
    for (const element of origins) {
        addActionMain(element, action);
    }
}
function addActionsMainKey(origins, action) {
    for (const element of origins) {
        addActionMain(element, action);
    }
}
function addActionsMainPoint(origins, action) {
    for (const element of origins) {
        addActionMain(element, action);
    }
}
function addMover(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitPosX = 0;
    var dragInitPosY = 0;
    for (let source of sources) {
        source.onmousedown = onMoverMouseInit;
        source.ontouchstart = onMoverTouchInit;
        source.ondragstart = stopEvent;
    }
    function onMoverMouseInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventMouseDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventMouseLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventMousePoint(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitPosX = parseInt(target.style.left, 10);
        dragInitPosY = parseInt(target.style.top, 10);
        document.onmousemove = onMoverMouseMove;
        document.ontouchmove = onMoverTouchMove;
        document.onmouseup = onMoverClose;
        document.ontouchend = onMoverClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onMoverTouchInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventTouchDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventTouchLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventTouch(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitPosX = parseInt(target.style.left, 10);
        dragInitPosY = parseInt(target.style.top, 10);
        document.onmousemove = onMoverMouseMove;
        document.ontouchmove = onMoverTouchMove;
        document.onmouseup = onMoverClose;
        document.ontouchend = onMoverClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onMoverMouseMove(ev) {
        const pointer = makeEventMousePoint(false, ev);
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
    function onMoverTouchMove(ev) {
        const pointer = makeEventTouch(false, ev);
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
        source.onmousedown = onResizerMouseInit;
        source.ontouchstart = onResizerTouchInit;
        source.ondragstart = stopEvent;
    }
    function onResizerMouseInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventMouseDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventMouseLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventMousePoint(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitWidth = parseInt(target.style.width, 10);
        dragInitHeight = parseInt(target.style.height, 10);
        document.onmousemove = onResizerMouseMove;
        document.ontouchmove = onResizerTouchMove;
        document.onmouseup = onResizerClose;
        document.ontouchend = onResizerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onResizerTouchInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventTouchDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventTouchLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventTouch(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitWidth = parseInt(target.style.width, 10);
        dragInitHeight = parseInt(target.style.height, 10);
        document.onmousemove = onResizerMouseMove;
        document.ontouchmove = onResizerTouchMove;
        document.onmouseup = onResizerClose;
        document.ontouchend = onResizerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onResizerMouseMove(ev) {
        const pointer = makeEventMousePoint(false, ev);
        var frameDragDifX = pointer.posX - dragInitEventX;
        var frameDragDifY = pointer.posY - dragInitEventY;
        var frameDragFinalWidth = dragInitWidth + frameDragDifX;
        var frameDragFinalHeight = dragInitHeight + frameDragDifY;
        target.style.width = (frameDragFinalWidth > 0 ? frameDragFinalWidth : 0) + "px";
        target.style.height = (frameDragFinalHeight > 0 ? frameDragFinalHeight : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onResizerTouchMove(ev) {
        const pointer = makeEventTouch(false, ev);
        var frameDragDifX = pointer.posX - dragInitEventX;
        var frameDragDifY = pointer.posY - dragInitEventY;
        var frameDragFinalWidth = dragInitWidth + frameDragDifX;
        var frameDragFinalHeight = dragInitHeight + frameDragDifY;
        target.style.width = (frameDragFinalWidth > 0 ? frameDragFinalWidth : 0) + "px";
        target.style.height = (frameDragFinalHeight > 0 ? frameDragFinalHeight : 0) + "px";
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
    target.onmousedown = onScrollerMouseInit;
    target.ontouchstart = onScrollerTouchInit;
    function onScrollerMouseInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventMouseDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventMouseLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventMousePoint(true, ev);
        dragInitX = pointer.posX;
        dragInitY = pointer.posY;
        dragScrollX = target.scrollLeft;
        dragScrollY = target.scrollTop;
        document.onmousemove = onScrollerMouseMove;
        document.ontouchmove = onScrollerTouchMove;
        document.ontouchend = onScrollerClose;
        document.onmouseup = onScrollerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onScrollerTouchInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventTouchDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventTouchLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventTouch(true, ev);
        dragInitX = pointer.posX;
        dragInitY = pointer.posY;
        dragScrollX = target.scrollLeft;
        dragScrollY = target.scrollTop;
        document.onmousemove = onScrollerMouseMove;
        document.ontouchmove = onScrollerTouchMove;
        document.onmouseup = onScrollerClose;
        document.ontouchend = onScrollerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onScrollerMouseMove(ev) {
        const pointer = makeEventMousePoint(false, ev);
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
    function onScrollerTouchMove(ev) {
        const pointer = makeEventTouch(false, ev);
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
    makeEventMousePoint,
    makeEventTouch,
    isEventMouseDouble,
    isEventTouchDouble,
    isEventMouseLong,
    isEventTouchLong,
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
    isMainMouse,
    isMainTouch,
    isMidiMouse,
    isMidiTouch,
    isMenuMouse,
    isMenuTouch,
    addAction,
    addActionMain,
    addActionMainKey,
    addActionMainMouse,
    addActionMainTouch,
    addActionMainPoint,
    addActionMidi,
    addActionMidiKey,
    addActionMidiMouse,
    addActionMidiTouch,
    addActionMidiPoint,
    addActionMenu,
    addActionMenuKey,
    addActionMenuMouse,
    addActionMenuTouch,
    addActionMenuPoint,
    addActions,
    addActionsMain,
    addActionsMainKey,
    addActionsMainPoint,
    addMover,
    addResizer,
    addScroller,
};

},{"./qin-skin":36}],33:[function(require,module,exports){
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
    options["SameSite"] = "Strict";
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    updatedCookie += "; Secure";
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

},{}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSkin = exports.QinStyles = void 0;
const qin_arm_1 = require("./qin-arm");
const qin_head_1 = require("./qin-head");
exports.QinStyles = {
    ColorForeground: "#180027ff",
    ColorBackground: "#fffcf9ff",
    ColorInactive: "#fcf9ffff",
    ColorActive: "#fdededff",
    ColorAccent: "#ae0000ff",
    ColorSelected: "#5d72de8f",
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
function styleAsBase(el) {
    el.style.margin = "1px";
    el.style.padding = "3px";
    el.style.outline = "none";
    el.style.color = exports.QinStyles.ColorForeground;
    el.style.fontFamily = "SourceSansPro";
    el.style.fontSize = "16px";
}
function styleAsEdit(el) {
    styleAsBase(el);
    el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    el.style.borderRadius = "3px";
    el.style.backgroundColor = exports.QinStyles.ColorInactive;
    el.addEventListener("focus", () => {
        el.style.outline = "none";
        el.style.backgroundColor = exports.QinStyles.ColorActive;
        el.style.border = "1px solid " + exports.QinStyles.ColorAccent;
    });
    el.addEventListener("focusout", () => {
        el.style.outline = "none";
        el.style.backgroundColor = exports.QinStyles.ColorInactive;
        el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
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
function getDimension(el) {
    return {
        width: parseInt(el.style.width),
        height: parseInt(el.style.height),
    };
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
    styleAsBase,
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
    getDimension,
    getDimensionSize,
    getDimensionSmall,
    getDimensionMedium,
    getDimensionLarge,
};

},{"./qin-arm":32,"./qin-head":35}],37:[function(require,module,exports){
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

},{"./qin-arm":32,"./qin-body":33,"./qin-foot":34,"./qin-head":35,"./qin-skin":36}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qinpel_cps_1 = require("qinpel-cps");
class QinScaffold extends qinpel_cps_1.QinColumn {
    constructor() {
        super();
        let table = new qinpel_cps_1.QinTable();
        table.install(this);
        table.setHead(["Name", "Age", "City"]);
        table.addLine(["John", "25", "New York"]);
        table.addLine(["Jane", "24", "Paris"]);
        table.addLine(["Jack", "26", "London"]);
    }
}
new QinScaffold().style.putAsBody();

},{"qinpel-cps":1}]},{},[38])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvYWxsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYXNzZXRzLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYmFzZS1zdHlsZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWJhc2UuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1ib29sZWFuLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYnV0dG9uLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY29sdW1uLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY29tYm8uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1lZGl0LmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZmllbGQuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1maWxlLWNob29zZXIuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1maWxlLWV4cGxvcmVyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZmlsZS1wYXRoLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4taWNvbi1vcHRpb24uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1pY29uLXBpY2suanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1pY29uLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4taW50ZWdlci5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWxhYmVsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbGluZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLW11dGFudHMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1wYW5lbC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXBvcHVwLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tcm93LmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tc2Nyb2xsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tc3BsaXR0ZXIuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1zdGFjay5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXN0cmluZy5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXRhYmxlLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tdGFicy5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXRvb2xzLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9hbGwuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1hcm0uanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1ib2R5LmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tZm9vdC5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWhlYWQuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1za2luLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tc291bC5qcyIsImJ1aWxkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDamFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcmlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblRvb2xzID0gZXhwb3J0cy5RaW5UYWJzID0gZXhwb3J0cy5RaW5UYWJsZSA9IGV4cG9ydHMuUWluU3RyaW5nID0gZXhwb3J0cy5RaW5TdGFjayA9IGV4cG9ydHMuUWluU3BsaXR0ZXIgPSBleHBvcnRzLlFpblNjcm9sbCA9IGV4cG9ydHMuUWluUm93ID0gZXhwb3J0cy5RaW5Qb3B1cCA9IGV4cG9ydHMuUWluUGFuZWwgPSBleHBvcnRzLlFpbk11dGFudHNBcm0gPSBleHBvcnRzLlFpbk11dGFudHMgPSBleHBvcnRzLlFpbkxpbmUgPSBleHBvcnRzLlFpbkxhYmVsID0gZXhwb3J0cy5RaW5JbnRlZ2VyID0gZXhwb3J0cy5RaW5JY29uID0gZXhwb3J0cy5RaW5JY29uUGljayA9IGV4cG9ydHMuUWluSWNvbk9wdGlvbiA9IGV4cG9ydHMuUWluRmlsZVBhdGggPSBleHBvcnRzLlFpbkZpbGVFeHBsb3JlciA9IGV4cG9ydHMuUWluRmlsZUNob29zZXIgPSBleHBvcnRzLlFpbkZpZWxkID0gZXhwb3J0cy5RaW5FZGl0ID0gZXhwb3J0cy5RaW5Db21ibyA9IGV4cG9ydHMuUWluQ29sdW1uID0gZXhwb3J0cy5RaW5CdXR0b24gPSBleHBvcnRzLlFpbkJvb2xlYW4gPSBleHBvcnRzLlFpbkJhc2UgPSBleHBvcnRzLlFpbkJhc2VTdHlsZSA9IGV4cG9ydHMucWluVXJsQXNzZXQgPSBleHBvcnRzLnFpbkFzc2V0VXJsID0gZXhwb3J0cy5RaW5Bc3NldCA9IHZvaWQgMDtcclxudmFyIHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkFzc2V0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXNzZXRzXzEuUWluQXNzZXQ7IH0gfSk7XHJcbnZhciBxaW5fYXNzZXRzXzIgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJxaW5Bc3NldFVybFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Fzc2V0c18yLnFpbkFzc2V0VXJsOyB9IH0pO1xyXG52YXIgcWluX2Fzc2V0c18zID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicWluVXJsQXNzZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hc3NldHNfMy5xaW5VcmxBc3NldDsgfSB9KTtcclxudmFyIHFpbl9iYXNlX3N0eWxlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZS1zdHlsZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQmFzZVN0eWxlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYmFzZV9zdHlsZV8xLlFpbkJhc2VTdHlsZTsgfSB9KTtcclxudmFyIHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQmFzZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Jhc2VfMS5RaW5CYXNlOyB9IH0pO1xyXG52YXIgcWluX2Jvb2xlYW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib29sZWFuXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Cb29sZWFuXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYm9vbGVhbl8xLlFpbkJvb2xlYW47IH0gfSk7XHJcbnZhciBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5CdXR0b25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9idXR0b25fMS5RaW5CdXR0b247IH0gfSk7XHJcbnZhciBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Db2x1bW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9jb2x1bW5fMS5RaW5Db2x1bW47IH0gfSk7XHJcbnZhciBxaW5fY29tYm9fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb21ib1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQ29tYm9cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9jb21ib18xLlFpbkNvbWJvOyB9IH0pO1xyXG52YXIgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5FZGl0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZWRpdF8xLlFpbkVkaXQ7IH0gfSk7XHJcbnZhciBxaW5fZmllbGRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWVsZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmllbGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9maWVsZF8xLlFpbkZpZWxkOyB9IH0pO1xyXG52YXIgcWluX2ZpbGVfY2hvb3Nlcl8xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtY2hvb3NlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZUNob29zZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9maWxlX2Nob29zZXJfMS5RaW5GaWxlQ2hvb3NlcjsgfSB9KTtcclxudmFyIHFpbl9maWxlX2V4cGxvcmVyXzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS1leHBsb3JlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZUV4cGxvcmVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmlsZV9leHBsb3Jlcl8xLlFpbkZpbGVFeHBsb3JlcjsgfSB9KTtcclxudmFyIHFpbl9maWxlX3BhdGhfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLXBhdGhcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVQYXRoXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmlsZV9wYXRoXzEuUWluRmlsZVBhdGg7IH0gfSk7XHJcbnZhciBxaW5faWNvbl9vcHRpb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uLW9wdGlvblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSWNvbk9wdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ljb25fb3B0aW9uXzEuUWluSWNvbk9wdGlvbjsgfSB9KTtcclxudmFyIHFpbl9pY29uX3BpY2tfMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uLXBpY2tcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkljb25QaWNrXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faWNvbl9waWNrXzEuUWluSWNvblBpY2s7IH0gfSk7XHJcbnZhciBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkljb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9pY29uXzEuUWluSWNvbjsgfSB9KTtcclxudmFyIHFpbl9pbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9xaW4taW50ZWdlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSW50ZWdlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ludGVnZXJfMS5RaW5JbnRlZ2VyOyB9IH0pO1xyXG52YXIgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkxhYmVsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbGFiZWxfMS5RaW5MYWJlbDsgfSB9KTtcclxudmFyIHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTGluZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2xpbmVfMS5RaW5MaW5lOyB9IH0pO1xyXG52YXIgcWluX211dGFudHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1tdXRhbnRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5NdXRhbnRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbXV0YW50c18xLlFpbk11dGFudHM7IH0gfSk7XHJcbnZhciBxaW5fbXV0YW50c18yID0gcmVxdWlyZShcIi4vcWluLW11dGFudHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbk11dGFudHNBcm1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9tdXRhbnRzXzIuUWluTXV0YW50c0FybTsgfSB9KTtcclxudmFyIHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5QYW5lbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3BhbmVsXzEuUWluUGFuZWw7IH0gfSk7XHJcbnZhciBxaW5fcG9wdXBfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wb3B1cFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUG9wdXBcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9wb3B1cF8xLlFpblBvcHVwOyB9IH0pO1xyXG52YXIgcWluX3Jvd18xID0gcmVxdWlyZShcIi4vcWluLXJvd1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUm93XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fcm93XzEuUWluUm93OyB9IH0pO1xyXG52YXIgcWluX3Njcm9sbF8xID0gcmVxdWlyZShcIi4vcWluLXNjcm9sbFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU2Nyb2xsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc2Nyb2xsXzEuUWluU2Nyb2xsOyB9IH0pO1xyXG52YXIgcWluX3NwbGl0dGVyXzEgPSByZXF1aXJlKFwiLi9xaW4tc3BsaXR0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNwbGl0dGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc3BsaXR0ZXJfMS5RaW5TcGxpdHRlcjsgfSB9KTtcclxudmFyIHFpbl9zdGFja18xID0gcmVxdWlyZShcIi4vcWluLXN0YWNrXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TdGFja1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3N0YWNrXzEuUWluU3RhY2s7IH0gfSk7XHJcbnZhciBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TdHJpbmdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zdHJpbmdfMS5RaW5TdHJpbmc7IH0gfSk7XHJcbnZhciBxaW5fdGFibGVfMSA9IHJlcXVpcmUoXCIuL3Fpbi10YWJsZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluVGFibGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl90YWJsZV8xLlFpblRhYmxlOyB9IH0pO1xyXG52YXIgcWluX3RhYnNfMSA9IHJlcXVpcmUoXCIuL3Fpbi10YWJzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5UYWJzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdGFic18xLlFpblRhYnM7IH0gfSk7XHJcbnZhciBxaW5fdG9vbHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi10b29sc1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluVG9vbHNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl90b29sc18xLlFpblRvb2xzOyB9IH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5xaW5VcmxBc3NldCA9IGV4cG9ydHMucWluQXNzZXRVcmwgPSBleHBvcnRzLlFpbkFzc2V0ID0gdm9pZCAwO1xyXG52YXIgUWluQXNzZXQ7XHJcbihmdW5jdGlvbiAoUWluQXNzZXQpIHtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmswXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazExXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTJcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxM1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTVcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxNlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMThcIl0gPSBcImJhY2tncm91bmQtZGFyay0xOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxOVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazJcIl0gPSBcImJhY2tncm91bmQtZGFyay0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIwXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjFcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyMlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIzXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjRcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyNVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI1LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI2XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjdcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyOFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI5XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrM1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrNFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrNVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrNlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrN1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrOFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrOVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmsucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTFcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDEyXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTEyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxM1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTRcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE1XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE1LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxNlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTdcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE4XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxOVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjFcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIyXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyM1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjRcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI1XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI1LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyNlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjdcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI4XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyOVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0M1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0zLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDVcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0NlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC02LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDhcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0OVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC05LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHRcIl0gPSBcImJhY2tncm91bmQtbGlnaHQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwwXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0wLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDEwXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDExXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDEyXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDEzXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE0XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE1XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE2XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE3XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE4XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDE5XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDJcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyMVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyNFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyN1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMjkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwzXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0zLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsNFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDVcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw2XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC02LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsN1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDhcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw5XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC05LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJBcHBzXCJdID0gXCJleHBsb3Jlci1hcHBzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckNtZHNcIl0gPSBcImV4cGxvcmVyLWNtZHMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyRGlyXCJdID0gXCJleHBsb3Jlci1kaXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyRXhlY1wiXSA9IFwiZXhwbG9yZXItZXhlYy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJGaWxlXCJdID0gXCJleHBsb3Jlci1maWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckltYWdlXCJdID0gXCJleHBsb3Jlci1pbWFnZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJNb3ZpZVwiXSA9IFwiZXhwbG9yZXItbW92aWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyTXVzaWNcIl0gPSBcImV4cGxvcmVyLW11c2ljLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlclppcHBlZFwiXSA9IFwiZXhwbG9yZXItemlwcGVkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQWRkXCJdID0gXCJmYWNlLWFkZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFsdFdvcmtcIl0gPSBcImZhY2UtYWx0LXdvcmsucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd0Rvd25cIl0gPSBcImZhY2UtYXJyb3ctZG93bi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93TGVmdFwiXSA9IFwiZmFjZS1hcnJvdy1sZWZ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dSaWdodFwiXSA9IFwiZmFjZS1hcnJvdy1yaWdodC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93VXBcIl0gPSBcImZhY2UtYXJyb3ctdXAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBdHRhY2hcIl0gPSBcImZhY2UtYXR0YWNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQXpTb3J0XCJdID0gXCJmYWNlLWF6LXNvcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VCYWdTaG9wcGluZ1wiXSA9IFwiZmFjZS1iYWctc2hvcHBpbmcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VCYWdcIl0gPSBcImZhY2UtYmFnLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQmVsbERpc2FibGVcIl0gPSBcImZhY2UtYmVsbC1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQmVsbFwiXSA9IFwiZmFjZS1iZWxsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQmV0d2VlblNwYWNlXCJdID0gXCJmYWNlLWJldHdlZW4tc3BhY2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VCb2lsZXJIb21lU21hcnRcIl0gPSBcImZhY2UtYm9pbGVyLWhvbWUtc21hcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VCb3R0b21Ub29sYmFyXCJdID0gXCJmYWNlLWJvdHRvbS10b29sYmFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ1VzYlwiXSA9IFwiZmFjZS1jLXVzYi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhbGVuZGFyXCJdID0gXCJmYWNlLWNhbGVuZGFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FtZXJhRGlzYWJsZVwiXSA9IFwiZmFjZS1jYW1lcmEtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhbWVyYVwiXSA9IFwiZmFjZS1jYW1lcmEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDYW5jZWxcIl0gPSBcImZhY2UtY2FuY2VsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FydFNob3BwaW5nXCJdID0gXCJmYWNlLWNhcnQtc2hvcHBpbmcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDYXJ0XCJdID0gXCJmYWNlLWNhcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDaGVja1JhZGlvXCJdID0gXCJmYWNlLWNoZWNrLXJhZGlvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2hlY2tcIl0gPSBcImZhY2UtY2hlY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDaGVja2VkUmFkaW9cIl0gPSBcImZhY2UtY2hlY2tlZC1yYWRpby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNoaXBTbWFydHBob25lXCJdID0gXCJmYWNlLWNoaXAtc21hcnRwaG9uZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNpcmNsZUhhbGZTaGFwZVwiXSA9IFwiZmFjZS1jaXJjbGUtaGFsZi1zaGFwZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNpcmNsZVNoYXBlXCJdID0gXCJmYWNlLWNpcmNsZS1zaGFwZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNpcmNsZVwiXSA9IFwiZmFjZS1jaXJjbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDbGVhclB1bGxcIl0gPSBcImZhY2UtY2xlYXItcHVsbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNsb2NrU2FuZFwiXSA9IFwiZmFjZS1jbG9jay1zYW5kLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2xvY2tcIl0gPSBcImZhY2UtY2xvY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDbG9zZVwiXSA9IFwiZmFjZS1jbG9zZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvZ1wiXSA9IFwiZmFjZS1jb2cucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb2xzVmlld1wiXSA9IFwiZmFjZS1jb2xzLXZpZXcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb21mb3J0YWJsZVZpZXdcIl0gPSBcImZhY2UtY29tZm9ydGFibGUtdmlldy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvbXBhc3NcIl0gPSBcImZhY2UtY29tcGFzcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvbmZpcm1cIl0gPSBcImZhY2UtY29uZmlybS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvbnRhY3RcIl0gPSBcImZhY2UtY29udGFjdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvbnRyb2xcIl0gPSBcImZhY2UtY29udHJvbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvb2tlckhvbWVTbWFydFwiXSA9IFwiZmFjZS1jb29rZXItaG9tZS1zbWFydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvcHlcIl0gPSBcImZhY2UtY29weS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZURheVZpZXdcIl0gPSBcImZhY2UtZGF5LXZpZXcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VEZWxcIl0gPSBcImZhY2UtZGVsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRG91YmxlVGFwXCJdID0gXCJmYWNlLWRvdWJsZS10YXAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VEb3duQ2hldnJvblB1c2hcIl0gPSBcImZhY2UtZG93bi1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VEb3duUHVzaFwiXSA9IFwiZmFjZS1kb3duLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VEb3duVHJlbmRpbmdcIl0gPSBcImZhY2UtZG93bi10cmVuZGluZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZURvd25sb2FkU29mdHdhcmVcIl0gPSBcImZhY2UtZG93bmxvYWQtc29mdHdhcmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VEb3dubG9hZFwiXSA9IFwiZmFjZS1kb3dubG9hZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUVtcHR5VHJhc2hcIl0gPSBcImZhY2UtZW1wdHktdHJhc2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFbmxhcmdlXCJdID0gXCJmYWNlLWVubGFyZ2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFbnRlclwiXSA9IFwiZmFjZS1lbnRlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUVyYXNlXCJdID0gXCJmYWNlLWVyYXNlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRXhpdFwiXSA9IFwiZmFjZS1leGl0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRXllRGlzYWJsZVwiXSA9IFwiZmFjZS1leWUtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUV5ZVwiXSA9IFwiZmFjZS1leWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VGaWxlXCJdID0gXCJmYWNlLWZpbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VGaWx0ZXJcIl0gPSBcImZhY2UtZmlsdGVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRmlyc3RSb3dcIl0gPSBcImZhY2UtZmlyc3Qtcm93LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRm9sZGVyXCJdID0gXCJmYWNlLWZvbGRlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUZvdW5kU2VhcmNoXCJdID0gXCJmYWNlLWZvdW5kLXNlYXJjaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUdlYXJcIl0gPSBcImZhY2UtZ2Vhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUdsb2JlXCJdID0gXCJmYWNlLWdsb2JlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlR3JpZFZpZXdcIl0gPSBcImZhY2UtZ3JpZC12aWV3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlSFNjcm9sbFwiXSA9IFwiZmFjZS1oLXNjcm9sbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUhlYXJ0XCJdID0gXCJmYWNlLWhlYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlSGVhdEhvbWVTbWFydFwiXSA9IFwiZmFjZS1oZWF0LWhvbWUtc21hcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VIZXhhZ29uU2hhcGVcIl0gPSBcImZhY2UtaGV4YWdvbi1zaGFwZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUhvbWVcIl0gPSBcImZhY2UtaG9tZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUh1bnRQcm9kdWN0XCJdID0gXCJmYWNlLWh1bnQtcHJvZHVjdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUltYWdlXCJdID0gXCJmYWNlLWltYWdlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlSW5ab29tXCJdID0gXCJmYWNlLWluLXpvb20ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VLaXRVaVwiXSA9IFwiZmFjZS1raXQtdWkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMYWJlbFwiXSA9IFwiZmFjZS1sYWJlbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxhc3RSb3dcIl0gPSBcImZhY2UtbGFzdC1yb3cucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMZWZ0Q2hldnJvblB1c2hcIl0gPSBcImZhY2UtbGVmdC1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMZWZ0UHVzaFwiXSA9IFwiZmFjZS1sZWZ0LXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMZWZ0VG9vbGJhclwiXSA9IFwiZmFjZS1sZWZ0LXRvb2xiYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMaWdodEhvbWVTbWFydFwiXSA9IFwiZmFjZS1saWdodC1ob21lLXNtYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGlua1wiXSA9IFwiZmFjZS1saW5rLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGlzdFVzZXJcIl0gPSBcImZhY2UtbGlzdC11c2VyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGlzdFZpZXdcIl0gPSBcImZhY2UtbGlzdC12aWV3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTG9hZGluZ1NlYXJjaFwiXSA9IFwiZmFjZS1sb2FkaW5nLXNlYXJjaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxvY2tcIl0gPSBcImZhY2UtbG9jay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1hY2hpbmVXYXNoSG9tZVNtYXJ0XCJdID0gXCJmYWNlLW1hY2hpbmUtd2FzaC1ob21lLXNtYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWFpbFwiXSA9IFwiZmFjZS1tYWlsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWFwRGlzYWJsZVwiXSA9IFwiZmFjZS1tYXAtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1hcFwiXSA9IFwiZmFjZS1tYXAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNZW51TGluZXNcIl0gPSBcImZhY2UtbWVudS1saW5lcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1lc3NhZ2VcIl0gPSBcImZhY2UtbWVzc2FnZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1pY0Rpc2FibGVcIl0gPSBcImZhY2UtbWljLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNaWNcIl0gPSBcImZhY2UtbWljLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWludXNcIl0gPSBcImZhY2UtbWludXMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNaXJyb3JTY3JlZW5cIl0gPSBcImZhY2UtbWlycm9yLXNjcmVlbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1vbnRoVmlld1wiXSA9IFwiZmFjZS1tb250aC12aWV3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTW91dGhOb1NtaWxlXCJdID0gXCJmYWNlLW1vdXRoLW5vLXNtaWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTW92aWVcIl0gPSBcImZhY2UtbW92aWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VOZXV0cmFsU21pbGVcIl0gPSBcImZhY2UtbmV1dHJhbC1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU5ld3NcIl0gPSBcImZhY2UtbmV3cy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU5vbmVTbWlsZVwiXSA9IFwiZmFjZS1ub25lLXNtaWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT0Rvd25DaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1vLWRvd24tY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT0xlZnRDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1vLWxlZnQtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT05leHRUcmFja1BsYXlcIl0gPSBcImZhY2Utby1uZXh0LXRyYWNrLXBsYXkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPUHJldlRyYWNrUGxheVwiXSA9IFwiZmFjZS1vLXByZXYtdHJhY2stcGxheS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9RdW90ZVwiXSA9IFwiZmFjZS1vLXF1b3RlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT1JpZ2h0Q2hldnJvblB1c2hcIl0gPSBcImZhY2Utby1yaWdodC1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPU2VsZWN0XCJdID0gXCJmYWNlLW8tc2VsZWN0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT1VwQ2hldnJvblB1c2hcIl0gPSBcImZhY2Utby11cC1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPVm9pY2VtYWlsXCJdID0gXCJmYWNlLW8tdm9pY2VtYWlsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT2ZmU3F1YXJlVG9nZ2xlXCJdID0gXCJmYWNlLW9mZi1zcXVhcmUtdG9nZ2xlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT2ZmVG9nZ2xlXCJdID0gXCJmYWNlLW9mZi10b2dnbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPblRvZ2dsZVwiXSA9IFwiZmFjZS1vbi10b2dnbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPcGVuTW91dGhTbWlsZVwiXSA9IFwiZmFjZS1vcGVuLW1vdXRoLXNtaWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT3BlblNpZGViYXJcIl0gPSBcImZhY2Utb3Blbi1zaWRlYmFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT3V0Wm9vbVwiXSA9IFwiZmFjZS1vdXQtem9vbS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBhc3RlXCJdID0gXCJmYWNlLXBhc3RlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGVuY2lsXCJdID0gXCJmYWNlLXBlbmNpbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBlcnNvblwiXSA9IFwiZmFjZS1wZXJzb24ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQaG9uZURpc2FibGVcIl0gPSBcImZhY2UtcGhvbmUtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBob25lXCJdID0gXCJmYWNlLXBob25lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGluXCJdID0gXCJmYWNlLXBpbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBsdWdcIl0gPSBcImZhY2UtcGx1Zy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBsdXNcIl0gPSBcImZhY2UtcGx1cy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBvY2tldFwiXSA9IFwiZmFjZS1wb2NrZXQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQb2tlbW9uXCJdID0gXCJmYWNlLXBva2Vtb24ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQb2xhcm9pZFwiXSA9IFwiZmFjZS1wb2xhcm9pZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBvbGxcIl0gPSBcImZhY2UtcG9sbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVByZXNlbnRhdGlvblwiXSA9IFwiZmFjZS1wcmVzZW50YXRpb24ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQcmV2VHJhY2tQbGF5XCJdID0gXCJmYWNlLXByZXYtdHJhY2stcGxheS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVByaW50ZXJcIl0gPSBcImZhY2UtcHJpbnRlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVByb2ZpbGVcIl0gPSBcImZhY2UtcHJvZmlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVFyXCJdID0gXCJmYWNlLXFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUXVvdGVcIl0gPSBcImZhY2UtcXVvdGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSRG93bkNoZXZyb25QdXNoXCJdID0gXCJmYWNlLXItZG93bi1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSTGVmdENoZXZyb25QdXNoXCJdID0gXCJmYWNlLXItbGVmdC1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSTmV4dFRyYWNrUGxheVwiXSA9IFwiZmFjZS1yLW5leHQtdHJhY2stcGxheS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJQcmV2VHJhY2tQbGF5XCJdID0gXCJmYWNlLXItcHJldi10cmFjay1wbGF5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUlJlbW92ZVwiXSA9IFwiZmFjZS1yLXJlbW92ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJSaWdodENoZXZyb25QdXNoXCJdID0gXCJmYWNlLXItcmlnaHQtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUlNlbGVjdFwiXSA9IFwiZmFjZS1yLXNlbGVjdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJVcENoZXZyb25QdXNoXCJdID0gXCJmYWNlLXItdXAtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUlZvaWNlbWFpbFwiXSA9IFwiZmFjZS1yLXZvaWNlbWFpbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJhbVNtYXJ0cGhvbmVcIl0gPSBcImZhY2UtcmFtLXNtYXJ0cGhvbmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSYXRpb1wiXSA9IFwiZmFjZS1yYXRpby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlYWRcIl0gPSBcImZhY2UtcmVhZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlYWRtZVwiXSA9IFwiZmFjZS1yZWFkbWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZWNvcmRcIl0gPSBcImZhY2UtcmVjb3JkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVkbzJcIl0gPSBcImZhY2UtcmVkby0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVkb1wiXSA9IFwiZmFjZS1yZWRvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVmcmlnZXJhdG9ySG9tZVNtYXJ0XCJdID0gXCJmYWNlLXJlZnJpZ2VyYXRvci1ob21lLXNtYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVnaW9uXCJdID0gXCJmYWNlLXJlZ2lvbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlbW90ZVwiXSA9IFwiZmFjZS1yZW1vdGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZW1vdmVVc2VyXCJdID0gXCJmYWNlLXJlbW92ZS11c2VyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVtb3ZlXCJdID0gXCJmYWNlLXJlbW92ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlbmFtZVwiXSA9IFwiZmFjZS1yZW5hbWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZW9yZGVyXCJdID0gXCJmYWNlLXJlb3JkZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZXBlYXRcIl0gPSBcImZhY2UtcmVwZWF0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmhvbWJ1c1NoYXBlXCJdID0gXCJmYWNlLXJob21idXMtc2hhcGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSaWdodENoZXZyb25QdXNoXCJdID0gXCJmYWNlLXJpZ2h0LWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJpZ2h0UHVzaFwiXSA9IFwiZmFjZS1yaWdodC1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmlnaHRTaWRlYmFyXCJdID0gXCJmYWNlLXJpZ2h0LXNpZGViYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSaWdodFRvb2xiYXJcIl0gPSBcImZhY2UtcmlnaHQtdG9vbGJhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJpbmdcIl0gPSBcImZhY2UtcmluZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJ1bGVyXCJdID0gXCJmYWNlLXJ1bGVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2FkU21pbGVcIl0gPSBcImZhY2Utc2FkLXNtaWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2F2ZVwiXSA9IFwiZmFjZS1zYXZlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2NhblwiXSA9IFwiZmFjZS1zY2FuLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2NyZWVuXCJdID0gXCJmYWNlLXNjcmVlbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNlYXJjaDJcIl0gPSBcImZhY2Utc2VhcmNoLTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZWFyY2hcIl0gPSBcImZhY2Utc2VhcmNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2VsZWN0XCJdID0gXCJmYWNlLXNlbGVjdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNlbmRcIl0gPSBcImZhY2Utc2VuZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNlcnZlclwiXSA9IFwiZmFjZS1zZXJ2ZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZXJ2ZXJsZXNzXCJdID0gXCJmYWNlLXNlcnZlcmxlc3MucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZXR0aW5nc1wiXSA9IFwiZmFjZS1zZXR0aW5ncy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNoYWtlU21hcnRwaG9uZVwiXSA9IFwiZmFjZS1zaGFrZS1zbWFydHBob25lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hhcmUyXCJdID0gXCJmYWNlLXNoYXJlLTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaGFyZVwiXSA9IFwiZmFjZS1zaGFyZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNoaWVsZDJcIl0gPSBcImZhY2Utc2hpZWxkLTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaGllbGRcIl0gPSBcImZhY2Utc2hpZWxkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hvcnRjdXRcIl0gPSBcImZhY2Utc2hvcnRjdXQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaG90U2NyZWVuXCJdID0gXCJmYWNlLXNob3Qtc2NyZWVuLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hyaW5rXCJdID0gXCJmYWNlLXNocmluay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNodXR0ZXJzdG9ja1wiXSA9IFwiZmFjZS1zaHV0dGVyc3RvY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaWRlYmFyXCJdID0gXCJmYWNlLXNpZGViYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaWduYWxcIl0gPSBcImZhY2Utc2lnbmFsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2luZ2xlVGFwXCJdID0gXCJmYWNlLXNpbmdsZS10YXAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaXplXCJdID0gXCJmYWNlLXNpemUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTa2V0Y2hcIl0gPSBcImZhY2Utc2tldGNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2xhY2tcIl0gPSBcImZhY2Utc2xhY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTbGVlcFwiXSA9IFwiZmFjZS1zbGVlcC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNtYXJ0cGhvbmVcIl0gPSBcImZhY2Utc21hcnRwaG9uZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNtaWxlXCJdID0gXCJmYWNlLXNtaWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3BlYWtlckRpc2FibGVcIl0gPSBcImZhY2Utc3BlYWtlci1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3BlYWtlclwiXSA9IFwiZmFjZS1zcGVha2VyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3BlY3RydW1cIl0gPSBcImZhY2Utc3BlY3RydW0ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGlubmVyQWx0VHdvXCJdID0gXCJmYWNlLXNwaW5uZXItYWx0LXR3by5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwaW5uZXJBbHRcIl0gPSBcImZhY2Utc3Bpbm5lci1hbHQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGlubmVyVHdvXCJdID0gXCJmYWNlLXNwaW5uZXItdHdvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3Bpbm5lclwiXSA9IFwiZmFjZS1zcGlubmVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3BsaXROb3RWaWV3XCJdID0gXCJmYWNlLXNwbGl0LW5vdC12aWV3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3BsaXRWaWV3SG9yaXpvbnRhbFwiXSA9IFwiZmFjZS1zcGxpdC12aWV3LWhvcml6b250YWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGxpdFZpZXdWZXJ0aWNhbFwiXSA9IFwiZmFjZS1zcGxpdC12aWV3LXZlcnRpY2FsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3BsaXRWaWV3XCJdID0gXCJmYWNlLXNwbGl0LXZpZXcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcXVhcmVTaGFwZVwiXSA9IFwiZmFjZS1zcXVhcmUtc2hhcGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcXVhcmVUb2dnbGVcIl0gPSBcImZhY2Utc3F1YXJlLXRvZ2dsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNxdWFyZVwiXSA9IFwiZmFjZS1zcXVhcmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdGFja1wiXSA9IFwiZmFjZS1zdGFjay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN0YXJcIl0gPSBcImZhY2Utc3Rhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN0YXJrXCJdID0gXCJmYWNlLXN0YXJrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3RvcHdhdGNoXCJdID0gXCJmYWNlLXN0b3B3YXRjaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN0b3JpZXNcIl0gPSBcImZhY2Utc3Rvcmllcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN0dWRpb1wiXSA9IFwiZmFjZS1zdHVkaW8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdHlsZVwiXSA9IFwiZmFjZS1zdHlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN1blwiXSA9IFwiZmFjZS1zdW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdXBwb3J0XCJdID0gXCJmYWNlLXN1cHBvcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTd2FwXCJdID0gXCJmYWNlLXN3YXAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTd2VkZW5cIl0gPSBcImZhY2Utc3dlZGVuLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3dpc3NcIl0gPSBcImZhY2Utc3dpc3MucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTeW5jXCJdID0gXCJmYWNlLXN5bmMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUYWJcIl0gPSBcImZhY2UtdGFiLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGFnXCJdID0gXCJmYWNlLXRhZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRhbGx5XCJdID0gXCJmYWNlLXRhbGx5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGVtcGxhdGVcIl0gPSBcImZhY2UtdGVtcGxhdGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUZW5uaXNcIl0gPSBcImZhY2UtdGVubmlzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGVybWluYWxcIl0gPSBcImZhY2UtdGVybWluYWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUZXJyYWluXCJdID0gXCJmYWNlLXRlcnJhaW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUaGVybW9tZXRlclwiXSA9IFwiZmFjZS10aGVybW9tZXRlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRoZXJtb3N0YXRcIl0gPSBcImZhY2UtdGhlcm1vc3RhdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRpa2NvZGVcIl0gPSBcImZhY2UtdGlrY29kZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRpbWVcIl0gPSBcImZhY2UtdGltZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRpbWVsYXBzZVwiXSA9IFwiZmFjZS10aW1lbGFwc2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUaW1lclwiXSA9IFwiZmFjZS10aW1lci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRvZGF5XCJdID0gXCJmYWNlLXRvZGF5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVG9vbGJveFwiXSA9IFwiZmFjZS10b29sYm94LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVG9wVG9vbGJhclwiXSA9IFwiZmFjZS10b3AtdG9vbGJhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRvdWNocGFkXCJdID0gXCJmYWNlLXRvdWNocGFkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJhY2tcIl0gPSBcImZhY2UtdHJhY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUcmFuc2NyaXB0XCJdID0gXCJmYWNlLXRyYW5zY3JpcHQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUcmFzaDJcIl0gPSBcImZhY2UtdHJhc2gtMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyYXNoXCJdID0gXCJmYWNlLXRyYXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJlZVwiXSA9IFwiZmFjZS10cmVlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJlZXNcIl0gPSBcImZhY2UtdHJlZXMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUcmVsbG9cIl0gPSBcImZhY2UtdHJlbGxvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJlbmRpbmdcIl0gPSBcImZhY2UtdHJlbmRpbmcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUcmlhbmdsZVNoYXBlXCJdID0gXCJmYWNlLXRyaWFuZ2xlLXNoYXBlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJvcGh5XCJdID0gXCJmYWNlLXRyb3BoeS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVR2XCJdID0gXCJmYWNlLXR2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHdpbGlvXCJdID0gXCJmYWNlLXR3aWxpby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVR3aXR0ZXJcIl0gPSBcImZhY2UtdHdpdHRlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVtYnJlbGxhXCJdID0gXCJmYWNlLXVtYnJlbGxhLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5hdmFpbGFibGVcIl0gPSBcImZhY2UtdW5hdmFpbGFibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmJsb2NrXCJdID0gXCJmYWNlLXVuYmxvY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmRvMlwiXSA9IFwiZmFjZS11bmRvLTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmRvXCJdID0gXCJmYWNlLXVuZG8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmZvbGRcIl0gPSBcImZhY2UtdW5mb2xkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5saW5rXCJdID0gXCJmYWNlLXVubGluay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVubG9ja1wiXSA9IFwiZmFjZS11bmxvY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbnNwbGFzaFwiXSA9IFwiZmFjZS11bnNwbGFzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVwQ2hldnJvblB1c2hcIl0gPSBcImZhY2UtdXAtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXBQdXNoXCJdID0gXCJmYWNlLXVwLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVcGxvYWRTb2Z0d2FyZVwiXSA9IFwiZmFjZS11cGxvYWQtc29mdHdhcmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVcGxvYWRcIl0gPSBcImZhY2UtdXBsb2FkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXBzaWRlU21pbGVcIl0gPSBcImZhY2UtdXBzaWRlLXNtaWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXNiXCJdID0gXCJmYWNlLXVzYi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVzZXJBZGRcIl0gPSBcImZhY2UtdXNlci1hZGQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVc2VyXCJdID0gXCJmYWNlLXVzZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVc2VybGFuZVwiXSA9IFwiZmFjZS11c2VybGFuZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVZCZXR3ZWVuU3BhY2VcIl0gPSBcImZhY2Utdi1iZXR3ZWVuLXNwYWNlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVlNjcm9sbFwiXSA9IFwiZmFjZS12LXNjcm9sbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVZlcnRpY2FsU3dhcFwiXSA9IFwiZmFjZS12ZXJ0aWNhbC1zd2FwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVmlueWxcIl0gPSBcImZhY2UtdmlueWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VWb2ljZW1haWxcIl0gPSBcImZhY2Utdm9pY2VtYWlsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVm9sdW1lXCJdID0gXCJmYWNlLXZvbHVtZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVdlYmNhbVwiXSA9IFwiZmFjZS13ZWJjYW0ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VXZWJzaXRlXCJdID0gXCJmYWNlLXdlYnNpdGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VXaWRlU2NyZWVuXCJdID0gXCJmYWNlLXdpZGUtc2NyZWVuLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlV2lmaURpc2FibGVcIl0gPSBcImZhY2Utd2lmaS1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlV2lmaVwiXSA9IFwiZmFjZS13aWZpLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlV2luZG93c1wiXSA9IFwiZmFjZS13aW5kb3dzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlWWlueWFuZ1wiXSA9IFwiZmFjZS15aW55YW5nLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlWW91dHViZVwiXSA9IFwiZmFjZS15b3V0dWJlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlWmFTb3J0XCJdID0gXCJmYWNlLXphLXNvcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VaZWl0XCJdID0gXCJmYWNlLXplaXQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VaaWd6YWdTaGFwZVwiXSA9IFwiZmFjZS16aWd6YWctc2hhcGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhdmljb25cIl0gPSBcImZhdmljb24uaWNvXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZyYW1lQ2xvc2VcIl0gPSBcImZyYW1lLWNsb3NlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZU1heGltaXplXCJdID0gXCJmcmFtZS1tYXhpbWl6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVNZW51XCJdID0gXCJmcmFtZS1tZW51LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZU1pbmltaXplXCJdID0gXCJmcmFtZS1taW5pbWl6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVSZXNpemVcIl0gPSBcImZyYW1lLXJlc2l6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVTdGF0dXNFcnJvclwiXSA9IFwiZnJhbWUtc3RhdHVzLWVycm9yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZVN0YXR1c0luZm9cIl0gPSBcImZyYW1lLXN0YXR1cy1pbmZvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJMb2dpbktleVwiXSA9IFwibG9naW4ta2V5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJNZW51RGV2dG9vbHNcIl0gPSBcIm1lbnUtZGV2dG9vbHMuaWNvXCI7XHJcbiAgICBRaW5Bc3NldFtcIlFpbnBlbDQ4XCJdID0gXCJxaW5wZWwtNDgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIlFpbnBlbFwiXSA9IFwicWlucGVsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJTb3VyY2VTYW5zUHJvXCJdID0gXCJzb3VyY2Utc2Fucy1wcm8udHRmXCI7XHJcbiAgICBRaW5Bc3NldFtcIlNvdXJjZVNlcmlmUHJvXCJdID0gXCJzb3VyY2Utc2VyaWYtcHJvLnR0ZlwiO1xyXG59KShRaW5Bc3NldCA9IGV4cG9ydHMuUWluQXNzZXQgfHwgKGV4cG9ydHMuUWluQXNzZXQgPSB7fSkpO1xyXG5mdW5jdGlvbiBxaW5Bc3NldFVybChhc3NldCkge1xyXG4gICAgcmV0dXJuIFwiL2FwcC9xaW5wZWwtYXBwL2Fzc2V0cy9cIiArIGFzc2V0O1xyXG59XHJcbmV4cG9ydHMucWluQXNzZXRVcmwgPSBxaW5Bc3NldFVybDtcclxuZnVuY3Rpb24gcWluVXJsQXNzZXQodXJsKSB7XHJcbiAgICBjb25zdCBhc3NldCA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xyXG4gICAgcmV0dXJuIGFzc2V0O1xyXG59XHJcbmV4cG9ydHMucWluVXJsQXNzZXQgPSBxaW5VcmxBc3NldDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWFzc2V0cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkJhc2VTdHlsZSA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNsYXNzIFFpbkJhc2VTdHlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHB1dEFzQm9keSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0JvZHkodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuICAgIGRlbEFzQm9keSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc1dob2xlKCkge1xyXG4gICAgICAgIHRoaXMucHV0QXNQb3NpdGlvbkFic29sdXRlKCk7XHJcbiAgICAgICAgdGhpcy5wdXRBc0JvdW5kcygwLCAwLCAwLCAwKTtcclxuICAgIH1cclxuICAgIHB1dEFzRWRpdCgpIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZUFzRWRpdCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50YWJJbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgICBwdXRBc1Njcm9sbCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgIH1cclxuICAgIHB1dEFzTWFyZ2luKG1hcmdpbikge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXJnaW4gPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChtYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXJnaW5Ub3AobWFyZ2luKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKG1hcmdpbik7XHJcbiAgICB9XHJcbiAgICBwdXRBc01hcmdpbkJvdHRvbShtYXJnaW4pIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobWFyZ2luKTtcclxuICAgIH1cclxuICAgIHB1dEFzTWFyZ2luTGVmdChtYXJnaW4pIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKG1hcmdpbik7XHJcbiAgICB9XHJcbiAgICBwdXRBc01hcmdpblJpZ2h0KG1hcmdpbikge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXJnaW5SaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKG1hcmdpbik7XHJcbiAgICB9XHJcbiAgICBwdXRBc1BhZGRpbmcocGFkZGluZykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwocGFkZGluZyk7XHJcbiAgICB9XHJcbiAgICBwdXRBc1BhZGRpbmdUb3AocGFkZGluZykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwocGFkZGluZyk7XHJcbiAgICB9XHJcbiAgICBwdXRBc1BhZGRpbmdCb3R0b20ocGFkZGluZykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwocGFkZGluZyk7XHJcbiAgICB9XHJcbiAgICBwdXRBc1BhZGRpbmdMZWZ0KHBhZGRpbmcpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcclxuICAgIH1cclxuICAgIHB1dEFzUGFkZGluZ1JpZ2h0KHBhZGRpbmcpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwocGFkZGluZyk7XHJcbiAgICB9XHJcbiAgICBwdXRBc0JvdW5kcyh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwodG9wKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucmlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChyaWdodCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvdHRvbSA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGJvdHRvbSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChsZWZ0KTtcclxuICAgIH1cclxuICAgIHB1dEFzQWxsQ2VudGVyZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5hbGlnbkNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRGlzcGxheUZsZXgoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRGlzcGxheUlubGluZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0Rpc3BsYXlJbmxpbmVCbG9jaygpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc1Bvc2l0aW9uU3RhdGljKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwic3RhdGljXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc1Bvc2l0aW9uQWJzb2x1dGUoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvbkZpeGVkKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25SZWxhdGl2ZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc1Bvc2l0aW9uU3RpY2t5KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwic3RpY2t5XCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc1Bvc2l0aW9uSW5pdGlhbCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImluaXRpYWxcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleERpcmVjdGlvblJvdygpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Sb3dSZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3ctcmV2ZXJzZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4RGlyZWN0aW9uQ29sdW1uKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleERpcmVjdGlvbkNvbHVtblJldmVyc2UoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtbi1yZXZlcnNlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhXcmFwKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4V3JhcE5vdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleFdyYXAgPSBcIm5vd3JhcFwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4V3JhcFJldmVyc2UoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwLXJldmVyc2VcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleE1pbigpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleCA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4TWF4KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4ID0gXCJhdXRvXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc1dpZHRoKHdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNIZWlnaHQoaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc1NpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHdpZHRoKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHB1dEFzTWluV2lkdGgod2lkdGgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWluV2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01pbkhlaWdodChoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHB1dEFzTWluU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1pbldpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5taW5IZWlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXhXaWR0aCh3aWR0aCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHdpZHRoKTtcclxuICAgIH1cclxuICAgIHB1dEFzTWF4SGVpZ2h0KGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXhTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZvcmVncm91bmQoZm9yZWdyb3VuZCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9IGZvcmVncm91bmQ7XHJcbiAgICB9XHJcbiAgICBwdXRBc0JhY2tncm91bmQoYmFja2dyb3VuZCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcclxuICAgIH1cclxuICAgIHB1dEFzQmFja0Fzc2V0KGFzc2V0KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcvYXBwL3FpbnBlbC1hcHAvYXNzZXRzL1wiICsgYXNzZXQgKyBcIicpXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0JhY2tJbml0aWFsKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcImluaXRpYWxcIjtcclxuICAgIH1cclxuICAgIHB1dEFzWkluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IG51bGwgfHwgaW5kZXggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS56SW5kZXggPSBpbmRleC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1dEFzRGlzYWJsZWRTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uZGlzYWJsZVNlbGVjdGlvbih0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZ2V0UGl4ZWxzT3JJbml0aWFsKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImluaXRpYWxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgXCJweFwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQmFzZVN0eWxlID0gUWluQmFzZVN0eWxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYmFzZS1zdHlsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkJhc2UgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYmFzZV9zdHlsZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2Utc3R5bGVcIik7XHJcbmNvbnN0IHFpbl90b29sc18xID0gcmVxdWlyZShcIi4vcWluLXRvb2xzXCIpO1xyXG5jbGFzcyBRaW5CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3Bhc3RQYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VEaXNwbGF5ID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgdGhpcy5fYmFzZVZpc2liaWxpdHkgPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLl9zdHlsZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXQgcWlucGVsKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5fdG9vbHNfMS5RaW5Ub29scy5xaW5wZWwoKTtcclxuICAgIH1cclxuICAgIGdldCBzdHlsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3R5bGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHlsZSA9IG5ldyBxaW5fYmFzZV9zdHlsZV8xLlFpbkJhc2VTdHlsZSh0aGlzLmdldE1haW4oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdHlsZTtcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaW5zdGFsbChvbkJhc2UpIHtcclxuICAgICAgICB0aGlzLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQgPSBvbkJhc2U7XHJcbiAgICAgICAgdGhpcy5fYmFzZVBhcmVudC5hcHBlbmRDaGlsZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHVuSW5zdGFsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fYmFzZVBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bhc3RQYXJlbnQgPSB0aGlzLl9iYXNlUGFyZW50O1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlUGFyZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZUluc3RhbGwoKSB7XHJcbiAgICAgICAgdGhpcy51bkluc3RhbGwoKTtcclxuICAgICAgICBpZiAodGhpcy5fcGFzdFBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bhc3RQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQgPSB0aGlzLl9wYXN0UGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVuSW5zdGFsbENoaWxkcmVuKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9iYXNlQ2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuW2ldLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVuRGlzcGxheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZURpc3BsYXkgPSB0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVEaXNwbGF5KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9iYXNlRGlzcGxheTtcclxuICAgIH1cclxuICAgIHVuVmlzaWJsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSAhPT0gXCJoaWRkZW5cIikge1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlVmlzaWJpbGl0eSA9IHRoaXMuZ2V0TWFpbigpLnN0eWxlLnZpc2liaWxpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlVmlzaWJsZSgpIHtcclxuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS52aXNpYmlsaXR5ID0gdGhpcy5fYmFzZVZpc2liaWxpdHk7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICB0aGlzLmdldE1haW4oKS5hcHBlbmRDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9iYXNlQ2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnJlbW92ZUNoaWxkKGNoaWxkLmdldE1haW4oKSk7XHJcbiAgICB9XHJcbiAgICBjaGlsZHJlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFzZUNoaWxkcmVuO1xyXG4gICAgfVxyXG4gICAgcHV0VGFiSW5kZXgoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmdldE1haW4oKS50YWJJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uKGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uKHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWFpbihhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1haW4odGhpcy5nZXRNYWluKCksIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NYWluS2V5KGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWFpbktleSh0aGlzLmdldE1haW4oKSwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1haW5Nb3VzZShhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1haW5Nb3VzZSh0aGlzLmdldE1haW4oKSwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1haW5Ub3VjaChhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1haW5Ub3VjaCh0aGlzLmdldE1haW4oKSwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1haW5Qb2ludChhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1haW5Qb2ludCh0aGlzLmdldE1haW4oKSwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1pZGkoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NaWRpKHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWlkaUtleShhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1pZGlLZXkodGhpcy5nZXRNYWluKCksIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NaWRpTW91c2UoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NaWRpTW91c2UodGhpcy5nZXRNYWluKCksIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NaWRpVG91Y2goYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NaWRpVG91Y2godGhpcy5nZXRNYWluKCksIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NaWRpUG9pbnQoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NaWRpUG9pbnQodGhpcy5nZXRNYWluKCksIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NZW51KGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWVudSh0aGlzLmdldE1haW4oKSwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1lbnVLZXkoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NZW51S2V5KHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWVudU1vdXNlKGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWVudU1vdXNlKHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWVudVRvdWNoKGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWVudVRvdWNoKHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWVudVBvaW50KGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWVudVBvaW50KHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQmFzZSA9IFFpbkJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1iYXNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQm9vbGVhbiA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XHJcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNsYXNzIFFpbkJvb2xlYW4gZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fbGluZV8xLlFpbkxpbmUoKTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuID0gbmV3IHFpbl9sYWJlbF8xLlFpbkxhYmVsKCk7XHJcbiAgICAgICAgdGhpcy5fcWluSWNvbiA9IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDaXJjbGUpO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgICAgIHRoaXMuX3Fpbkljb24uaW5zdGFsbCh0aGlzLl9xaW5TcGFuKTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuLnN0eWxlLnB1dEFzRWRpdCgpO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4uc3R5bGUucHV0QXNEaXNwbGF5RmxleCgpO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4uc3R5bGUucHV0QXNBbGxDZW50ZXJlZCgpO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluTWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbjtcclxuICAgIH1cclxuICAgIGdldCBxaW5TcGFuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5TcGFuO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkljb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbkljb247XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUljb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Fpbkljb24uYXNzZXQgPSBxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNvbmZpcm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uLmFzc2V0ID0gcWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDaXJjbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gIXRoaXMuX3ZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQm9vbGVhbiA9IFFpbkJvb2xlYW47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1ib29sZWFuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQnV0dG9uID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5CdXR0b24gZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLl9xaW5JY29uID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9xaW5MYWJlbCA9IG51bGw7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25CdXR0b24odGhpcy5fZWxNYWluKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmljb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluSWNvbiA9IG9wdGlvbnMuaWNvbjtcclxuICAgICAgICAgICAgdGhpcy5fcWluSWNvbi5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkxhYmVsID0gb3B0aW9ucy5sYWJlbDtcclxuICAgICAgICAgICAgdGhpcy5fcWluTGFiZWwuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgcWluSWNvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluSWNvbjtcclxuICAgIH1cclxuICAgIGdldCBxaW5MYWJlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTGFiZWw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5CdXR0b24gPSBRaW5CdXR0b247XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGFwcGx5T25CdXR0b246IChlbCkgPT4ge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNFZGl0KGVsKTtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICB9LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYnV0dG9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQ29sdW1uID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluQ29sdW1uIGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNGbGV4RGlyZWN0aW9uQ29sdW1uKCk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhXcmFwTm90KCk7XHJcbiAgICB9XHJcbiAgICBwdXQoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkNvbHVtbiA9IFFpbkNvbHVtbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWNvbHVtbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkNvbWJvID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jbGFzcyBRaW5Db21ibyBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsR3JvdXBzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0VkaXQoKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygb3B0aW9ucy5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuc2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbi52YWx1ZTtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi52YWx1ZSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBhZGRJdGVtKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0ID0gaXRlbS50aXRsZTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIGlmIChpdGVtLnNlbGVjdGVkICE9IHVuZGVmaW5lZCAmJiBpdGVtLnNlbGVjdGVkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gaXRlbS5zZWxlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5nZXRHcm91cChpdGVtLmdyb3VwKTtcclxuICAgICAgICBpZiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNCYXNlKG9wdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsTWFpbi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldEdyb3VwKGxhYmVsKSB7XHJcbiAgICAgICAgaWYgKCFsYWJlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgZ3JvdXAgb2YgdGhpcy5fZWxHcm91cHMpIHtcclxuICAgICAgICAgICAgaWYgKGdyb3VwLmxhYmVsID09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO1xyXG4gICAgICAgIG5ld0dyb3VwLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0Jhc2UobmV3R3JvdXApO1xyXG4gICAgICAgIHRoaXMuX2VsR3JvdXBzLnB1c2gobmV3R3JvdXApO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5hcHBlbmRDaGlsZChuZXdHcm91cCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0dyb3VwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQ29tYm8gPSBRaW5Db21ibztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWNvbWJvLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRWRpdCA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5FZGl0IGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcclxufVxyXG5leHBvcnRzLlFpbkVkaXQgPSBRaW5FZGl0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZWRpdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkZpZWxkID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG5jbGFzcyBRaW5GaWVsZCBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZWRpdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTGFiZWwgPSBuZXcgcWluX2xhYmVsXzEuUWluTGFiZWwoKTtcclxuICAgICAgICB0aGlzLl9xaW5FZGl0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9xaW5MYWJlbC5zZXRUaXRsZSh0aXRsZSk7XHJcbiAgICAgICAgdGhpcy5fcWluTGFiZWwuaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcclxuICAgICAgICB0aGlzLl9xaW5FZGl0ID0gZWRpdDtcclxuICAgICAgICB0aGlzLl9xaW5FZGl0Lmluc3RhbGwodGhpcy5fcWluTWFpbik7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5nZXRNYWluKCkuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjVweFwiO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNXB4XCI7XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkVkaXQuZ2V0RGF0YSgpO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fcWluRWRpdC5zZXREYXRhKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbk1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgcWluTGFiZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkxhYmVsO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkVkaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkVkaXQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWVsZCA9IFFpbkZpZWxkO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmllbGQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5GaWxlQ2hvb3NlciA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XHJcbmNvbnN0IHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XHJcbmNvbnN0IHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNvbnN0IHFpbl9maWxlX2V4cGxvcmVyXzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS1leHBsb3JlclwiKTtcclxuY29uc3QgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5jb25zdCBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xyXG5jbGFzcyBRaW5GaWxlQ2hvb3NlciBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4oKTtcclxuICAgICAgICB0aGlzLl9xaW5VcHBlciA9IG5ldyBxaW5fbGluZV8xLlFpbkxpbmUoKTtcclxuICAgICAgICB0aGlzLl9xaW5Db25maXJtID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oe1xyXG4gICAgICAgICAgICBpY29uOiBuZXcgcWluX2ljb25fMS5RaW5JY29uKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ29uZmlybSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyID0gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zID0gbmV3IHFpbl9jb21ib18xLlFpbkNvbWJvKCk7XHJcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oe1xyXG4gICAgICAgICAgICBpY29uOiBuZXcgcWluX2ljb25fMS5RaW5JY29uKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlU2VhcmNoKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5VbmRlciA9IG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyID0gbmV3IHFpbl9maWxlX2V4cGxvcmVyXzEuUWluRmlsZUV4cGxvcmVyKCk7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5fbmF0dXJlID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uYXR1cmUpID8gb3B0aW9ucy5uYXR1cmUgOiBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuQk9USDtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wZXJhdGlvbikgPyBvcHRpb25zLm9wZXJhdGlvbiA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc09wZXJhdGlvbi5PUEVOO1xyXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0b3JzID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZXNjcmlwdG9ycykgPyBvcHRpb25zLmRlc2NyaXB0b3JzIDogW107XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24pID8gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpbmdsZVNlbGVjdGlvbiA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcclxuICAgICAgICB0aGlzLmluaXRVcHBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdFVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBpbml0TWFpbigpIHtcclxuICAgICAgICB0aGlzLl9xaW5VcHBlci5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgICAgIHRoaXMuX3FpblVuZGVyLmluc3RhbGwodGhpcy5fcWluTWFpbik7XHJcbiAgICB9XHJcbiAgICBpbml0VXBwZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fcWluVXBwZXIuc3R5bGUucHV0QXNGbGV4TWluKCk7XHJcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybS5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcclxuICAgICAgICB0aGlzLl9xaW5Db25maXJtLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWFpbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hvc2VuIG9mIHRoaXMuX2xpc3RlbmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNob3NlbihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XHJcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLnN0eWxlLnB1dEFzTWluV2lkdGgoMTAwKTtcclxuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuc3R5bGUucHV0QXNGbGV4TWF4KCk7XHJcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzRW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEZvbGRlcigpO1xyXG4gICAgICAgICAgICAgICAgcWluRXZlbnQuY29uc3VtZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XHJcbiAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5zdHlsZS5wdXRBc01pbldpZHRoKDEwMCk7XHJcbiAgICAgICAgdGhpcy5pbml0RXh0ZW5zaW9ucygpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2guYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIoKTtcclxuICAgICAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXRVbmRlcigpIHtcclxuICAgICAgICB0aGlzLl9xaW5VbmRlci5zdHlsZS5wdXRBc1Njcm9sbCgpO1xyXG4gICAgICAgIHRoaXMuX3FpblVuZGVyLnN0eWxlLnB1dEFzRmxleE1heCgpO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmluc3RhbGwodGhpcy5fcWluVW5kZXIpO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLm5hdHVyZSA9IHRoaXMuX25hdHVyZTtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5zaW5nbGVTZWxlY3Rpb24gPSB0aGlzLl9zaW5nbGVTZWxlY3Rpb247XHJcbiAgICB9XHJcbiAgICBpbml0RXh0ZW5zaW9ucygpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVzY3JpcHRvcnMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5hZGRJdGVtKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFsbCBGaWxlcyAoKi4qKVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiKlwiLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5leHRlbnNpb25zID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fZGVzY3JpcHRvcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy5fZGVzY3JpcHRvcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5hZGRJdGVtKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGVzY3JpcHRvci5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGVzY3JpcHRvci5leHRlbnNpb25zLmpvaW4oXCI7XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpbmRleCA9PSAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuZXh0ZW5zaW9ucyA9IHRoaXMuX2Rlc2NyaXB0b3JzWzBdLmV4dGVuc2lvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FeHBsb3Jlci5nZXREYXRhKCk7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5zZXREYXRhKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbk1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgcWluVXBwZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblVwcGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkNvbmZpcm0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkNvbmZpcm07XHJcbiAgICB9XHJcbiAgICBnZXQgcWluRm9sZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5Gb2xkZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluRXh0ZW5zaW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluRXh0ZW5zaW9ucztcclxuICAgIH1cclxuICAgIGdldCBxaW5TZWFyY2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblNlYXJjaDtcclxuICAgIH1cclxuICAgIGdldCBxaW5VbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluVW5kZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluRXhwbG9yZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkV4cGxvcmVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmF0dXJlO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hdHVyZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX25hdHVyZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLm5hdHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IG9wZXJhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IG9wZXJhdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRlc2NyaXB0b3JzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdG9ycztcclxuICAgIH1cclxuICAgIHNldCBkZXNjcmlwdG9ycyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0b3JzID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgc2luZ2xlU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVTZWxlY3Rpb247XHJcbiAgICB9XHJcbiAgICBzZXQgc2luZ2xlU2VsZWN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBsb2FkRm9sZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmxvYWQodGhpcy5fcWluRm9sZGVyLmdldERhdGEoKSwgKGxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuc2V0RGF0YShsb2FkZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkQ2hvc2VuKGNob3Nlbikge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGNob3Nlbik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWxlQ2hvb3NlciA9IFFpbkZpbGVDaG9vc2VyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmlsZS1jaG9vc2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRmlsZUV4cGxvcmVyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluRmlsZUV4cGxvcmVyIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX3BhbmVsXzEuUWluUGFuZWwoKTtcclxuICAgICAgICB0aGlzLl9mb2xkZXJBY3R1YWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9uYXR1cmUgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSkgPyBvcHRpb25zLm5hdHVyZSA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIO1xyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmV4dGVuc2lvbnMpID8gb3B0aW9ucy5leHRlbnNpb25zIDogW107XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24pID8gb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24gOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRNYWluKCk7XHJcbiAgICB9XHJcbiAgICBpbml0TWFpbigpIHtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbk1haW4odGhpcy5fcWluTWFpbi5nZXRNYWluKCkpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLnN0eWxlLnB1dEFzRGlzYWJsZWRTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5pc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0UGF0aEpvaW4odGhpcy5fZm9sZGVyU2VydmVyLCBpdGVtLmdldE5hbWUoKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGZvbGRlclJvb3QgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFBhcmVudChkYXRhWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKGZvbGRlclJvb3QsIChfKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW1QYXRoIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJvb3QgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFBhcmVudChpdGVtUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gcWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRTdGVtKGl0ZW1QYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVJvb3QgIT09IGZvbGRlclJvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuZnJhbWUuc3RhdHVzRXJyb3IoYFRoZSBpdGVtICcke2l0ZW1QYXRofScgaXMgbm90IG9uIHRoZSByb290ICcke2ZvbGRlclJvb3R9Jy5gLCBcIntxaW5wZWwtY3BzfShFcnJDb2RlLTAwMDAwMSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0KGl0ZW1OYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuZnJhbWUuc3RhdHVzRXJyb3IoYERvZXMgbm90IGhhdmUgdGhlIGl0ZW0gJyR7aXRlbU5hbWV9JyBvbiB0aGUgZm9sZGVyICcke2ZvbGRlclJvb3R9J2AsIFwie3FpbnBlbC1jcHN9KEVyckNvZGUtMDAwMDAyKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHFpbk1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgbmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYXR1cmU7XHJcbiAgICB9XHJcbiAgICBzZXQgbmF0dXJlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fbmF0dXJlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgZXh0ZW5zaW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXh0ZW5zaW9ucztcclxuICAgIH1cclxuICAgIHNldCBleHRlbnNpb25zKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucyA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNpbmdsZVNlbGVjdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2luZ2xlU2VsZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IHNpbmdsZVNlbGVjdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NpbmdsZVNlbGVjdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2luZ2xlU2VsZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgZm9sZGVyQWN0dWFsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mb2xkZXJBY3R1YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgZm9sZGVyU2VydmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mb2xkZXJTZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTaW5nbGVTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NpbmdsZVNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgYWxyZWFkeUhhcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5faXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzU2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbHJlYWR5SGFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udW5zZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscmVhZHlIYXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvYWQoZm9sZGVyLCBvbkxvYWQpIHtcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgdGhpcy5xaW5wZWxcclxuICAgICAgICAgICAgLnBvc3QoXCIvZGlyL2xpc3RcIiwgeyBwYXRoOiBmb2xkZXIgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9mb2xkZXJBY3R1YWwgPSBmb2xkZXI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGxpbmUgb2YgcWlucGVsX3Jlc18xLlFpblNvdWwuYm9keS5nZXRUZXh0TGluZXMocmVzLmRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZVZhbHVlID0gbGluZS5zdWJzdHJpbmcoMyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aChcIlA6IFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IGxpbmVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob25Mb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZChsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aChcIkQ6IFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uYXR1cmUgPT0gcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkJPVEggfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5ESVJFQ1RPUklFUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0RpcihsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aChcIkY6IFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uYXR1cmUgPT0gcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkJPVEggfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5GSUxFUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXh0ZW5zaW9uID0gcWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRGaWxlRXh0ZW5zaW9uKGxpbmVWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXNzZWRFeHRlbnNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZXh0ZW5zaW9ucyAmJiB0aGlzLl9leHRlbnNpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NlZEV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZEV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdGaWxlKGxpbmVWYWx1ZSwgZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucWlucGVsLmZyYW1lLnN0YXR1c0Vycm9yKGVyciwgXCJ7cWlucGVsLWNwc30oRXJyQ29kZS0wMDAwMDMpXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVsb2FkKG9uTG9hZCkge1xyXG4gICAgICAgIHRoaXMubG9hZCh0aGlzLl9mb2xkZXJTZXJ2ZXIsIG9uTG9hZCk7XHJcbiAgICB9XHJcbiAgICBnb0ZvbGRlclVwKG9uTG9hZCkge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBxaW5wZWxfcmVzXzEuUWluRm9vdC5nZXRQYXJlbnQodGhpcy5fZm9sZGVyU2VydmVyKTtcclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChwYXJlbnQsIG9uTG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5nZXRNYWluKCkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9pdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2ZvbGRlckFjdHVhbCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fZm9sZGVyU2VydmVyID0gXCJcIjtcclxuICAgIH1cclxuICAgIGNsZWFuU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9pdGVtcykge1xyXG4gICAgICAgICAgICBpdGVtLnVuc2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0KGl0ZW1OYW1lKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtcy5maW5kKChpbnNpZGUpID0+IGluc2lkZS5nZXROYW1lKCkgPT0gaXRlbU5hbWUpO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVuc2VsZWN0KGl0ZW1OYW1lKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtcy5maW5kKChpbnNpZGUpID0+IGluc2lkZS5nZXROYW1lKCkgPT0gaXRlbU5hbWUpO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0udW5zZWxlY3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmV3RGlyKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5ld0l0ZW0obmFtZSwgXCJleHBsb3Jlci1kaXIucG5nXCIpO1xyXG4gICAgfVxyXG4gICAgbmV3RmlsZShuYW1lLCBleHRlbnNpb24pIHtcclxuICAgICAgICB0aGlzLm5ld0l0ZW0obmFtZSwgZ2V0SWNvbk5hbWUoZXh0ZW5zaW9uKSk7XHJcbiAgICB9XHJcbiAgICBuZXdJdGVtKG5hbWUsIGljb24pIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW0odGhpcywgbmFtZSwgaWNvbik7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpKTtcclxuICAgICAgICB0aGlzLl9pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluRmlsZUV4cGxvcmVyID0gUWluRmlsZUV4cGxvcmVyO1xyXG5jbGFzcyBJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGV4cGxvcmVyLCBmaWxlTmFtZSwgaWNvbk5hbWUpIHtcclxuICAgICAgICB0aGlzLmRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuc3Bhbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLmltZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHRoaXMuc3BhblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5leHBsb3JlciA9IGV4cGxvcmVyO1xyXG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB0aGlzLmljb25OYW1lID0gaWNvbk5hbWU7XHJcbiAgICAgICAgdGhpcy5pbml0SXRlbSgpO1xyXG4gICAgfVxyXG4gICAgaW5pdEl0ZW0oKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZJdGVtKHRoaXMuZGl2SXRlbSk7XHJcbiAgICAgICAgdGhpcy5kaXZJdGVtLnRhYkluZGV4ID0gMDtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdkl0ZW1Cb2R5KHRoaXMuZGl2SXRlbUJvZHkpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbS5hcHBlbmRDaGlsZCh0aGlzLmRpdkl0ZW1Cb2R5KTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPblNwYW5JY29uKHRoaXMuc3Bhbkljb24pO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zcGFuSWNvbik7XHJcbiAgICAgICAgdGhpcy5pbWdJY29uLnNyYyA9IFwiL2FwcC9xaW5wZWwtYXBwL2Fzc2V0cy9cIiArIHRoaXMuaWNvbk5hbWU7XHJcbiAgICAgICAgdGhpcy5zcGFuSWNvbi5hcHBlbmRDaGlsZCh0aGlzLmltZ0ljb24pO1xyXG4gICAgICAgIHRoaXMuc3BhblRleHQuaW5uZXJUZXh0ID0gdGhpcy5maWxlTmFtZTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPblNwYW5UZXh0KHRoaXMuc3BhblRleHQpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zcGFuVGV4dCk7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuYXJtLmFkZEFjdGlvbih0aGlzLmRpdkl0ZW0sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpdkl0ZW0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbnN0YWxsKG9uKSB7XHJcbiAgICAgICAgb24uYXBwZW5kQ2hpbGQodGhpcy5kaXZJdGVtKTtcclxuICAgIH1cclxuICAgIHNlbGVjdCgpIHtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdlNlbGVjdCh0aGlzLmRpdkl0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5zZWxlY3QoKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZVblNlbGVjdCh0aGlzLmRpdkl0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBsb3Jlci5zaW5nbGVTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9yZXIuY2xlYW5TZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZU5hbWU7XHJcbiAgICB9XHJcbiAgICBpc1NlbGVjdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldEljb25OYW1lKGZyb21FeHRlbnNpb24pIHtcclxuICAgIGxldCByZXN1bHQgPSBcImV4cGxvcmVyLWZpbGUucG5nXCI7XHJcbiAgICBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVBcHAoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWFwcHMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUNtZChmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItY21kcy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlRXhlYyhmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItZXhlYy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlSW1hZ2UoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVWZWN0b3IoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVNdXNpYyhmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItbXVzaWMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZU1vdmllKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1tb3ZpZS5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlWmlwcGVkKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci16aXBwZWQucG5nXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGFwcGx5T25NYWluOiAoZWwpID0+IHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KGVsKTtcclxuICAgICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1pbldpZHRoID0gXCIxNjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1pbkhlaWdodCA9IFwiMTYwcHhcIjtcclxuICAgICAgICBlbC50YWJJbmRleCA9IDA7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdkl0ZW06IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMnB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiOXB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMzNjAwNDVcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmNvbG9yID0gXCIjMjcwMDM2XCI7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjYWUwMDAwXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMzYwMDQ1XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdkl0ZW1Cb2R5OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICAgICAgZWwuc3R5bGUud2lkdGggPSBcIjk2cHhcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uU3Bhbkljb246IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPblNwYW5UZXh0OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGVsLnN0eWxlLndvcmRXcmFwID0gXCJicmVhay13b3JkXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdlNlbGVjdDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmFlZmZmXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdlVuU2VsZWN0OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcclxuICAgIH0sXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1maWxlLWV4cGxvcmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRmlsZVBhdGggPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XHJcbmNvbnN0IHFpbl9maWxlX2Nob29zZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLWNob29zZXJcIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY29uc3QgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNvbnN0IHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XHJcbmNsYXNzIFFpbkZpbGVQYXRoIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fcWluUGF0aCA9IG5ldyBxaW5fc3RyaW5nXzEuUWluU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oe1xyXG4gICAgICAgICAgICBpY29uOiBuZXcgcWluX2ljb25fMS5RaW5JY29uKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlRm9sZGVyKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5DaG9vc2VyID0gbmV3IHFpbl9maWxlX2Nob29zZXJfMS5RaW5GaWxlQ2hvb3Nlcih7XHJcbiAgICAgICAgICAgIG5hdHVyZTogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSxcclxuICAgICAgICAgICAgb3BlcmF0aW9uOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub3BlcmF0aW9uLFxyXG4gICAgICAgICAgICBkZXNjcmlwdG9yczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRlc2NyaXB0b3JzLFxyXG4gICAgICAgICAgICBzaW5nbGVTZWxlY3Rpb246IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluUG9wdXAgPSB0aGlzLnFpbnBlbC5mcmFtZS5uZXdQb3B1cCh0aGlzLl9xaW5DaG9vc2VyLmdldE1haW4oKSk7XHJcbiAgICAgICAgdGhpcy5fcWluUGF0aC5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc01haW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwcGVySGVpZ2h0ID0gdGhpcy5fcWluQ2hvb3Nlci5xaW5VcHBlci5nZXRNYWluKCkuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwbG9yZXJNYXhIZWlnaHQgPSB0aGlzLl9xaW5Qb3B1cC5tYXhIZWlnaHQgLSAodXBwZXJIZWlnaHQgKyAxMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5DaG9vc2VyLnFpbkV4cGxvcmVyLnN0eWxlLnB1dEFzTWF4SGVpZ2h0KGV4cGxvcmVyTWF4SGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkNob29zZXIuYWRkQ2hvc2VuKChjaG9zZW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNob3NlbiAmJiBjaG9zZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluUGF0aC5zZXREYXRhKGNob3NlblswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcWluUG9wdXAuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5QYXRoLmdldERhdGEoKTtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FpblBhdGguc2V0RGF0YShkYXRhKTtcclxuICAgIH1cclxuICAgIGdldCBxaW5NYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBhdGg7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluU2VhcmNoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5TZWFyY2g7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluQ2hvb3NlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluQ2hvb3NlcjtcclxuICAgIH1cclxuICAgIGdldCBxaW5Qb3B1cCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluUG9wdXA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWxlUGF0aCA9IFFpbkZpbGVQYXRoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmlsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluSWNvbk9wdGlvbiA9IHZvaWQgMDtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY2xhc3MgUWluSWNvbk9wdGlvbiBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihpY29uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGJvcmRlciA9IE1hdGgucm91bmQoaWNvbi5zaXplLndpZHRoIC8gMTApO1xyXG4gICAgICAgIGxldCBwYWRkaW5nID0gYm9yZGVyICogMjtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuYm9yZGVyUmFkaXVzID0gYm9yZGVyICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5wYWRkaW5nID0gcGFkZGluZyArIFwicHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoaXMuX2ljb24gPSBpY29uO1xyXG4gICAgICAgIHRoaXMuX2ljb24uaW5zdGFsbCh0aGlzKTtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBkYXRhO1xyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yU2VsZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGljb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb247XHJcbiAgICB9XHJcbiAgICBnZXQgc2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHNlbGVjdGVkKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkljb25PcHRpb24gPSBRaW5JY29uT3B0aW9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taWNvbi1vcHRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5JY29uUGljayA9IHZvaWQgMDtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNvbnN0IHFpbl9pY29uX29wdGlvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb24tb3B0aW9uXCIpO1xyXG5jbGFzcyBRaW5JY29uUGljayBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5zdHlsZS5wdXRBc0VkaXQoKTtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgcWluX2ljb25fb3B0aW9uXzEuUWluSWNvbk9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmljb24uYXNzZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShhc3NldCkge1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX3Fpbk1haW4uY2hpbGRyZW4oKSkge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBxaW5faWNvbl9vcHRpb25fMS5RaW5JY29uT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaWNvbi5hc3NldCA9PSBhc3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgYWRkSWNvbihpY29uKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBxaW5faWNvbl9vcHRpb25fMS5RaW5JY29uT3B0aW9uKGljb24pO1xyXG4gICAgICAgIG9wdGlvbi5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgfVxyXG4gICAgYWRkT3B0aW9uKG9wdGlvbikge1xyXG4gICAgICAgIG9wdGlvbi5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluSWNvblBpY2sgPSBRaW5JY29uUGljaztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWljb24tcGljay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkljb24gPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpbkljb24gZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoYXNzZXQsIHNpemUgPSBxaW5wZWxfcmVzXzEuUWluR3JhbmRldXIuU01BTEwpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnNyYyA9ICgwLCBxaW5fYXNzZXRzXzEucWluQXNzZXRVcmwpKGFzc2V0KTtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZVNpemUodGhpcy5fZWxNYWluLCBzaXplKTtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIGdldCBhc3NldCgpIHtcclxuICAgICAgICByZXR1cm4gKDAsIHFpbl9hc3NldHNfMS5xaW5VcmxBc3NldCkodGhpcy5fZWxNYWluLnNyYyk7XHJcbiAgICB9XHJcbiAgICBzZXQgYXNzZXQoYXNzZXQpIHtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3JjID0gKDAsIHFpbl9hc3NldHNfMS5xaW5Bc3NldFVybCkoYXNzZXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbnBlbF9yZXNfMS5RaW5Ta2luLmdldERpbWVuc2lvbih0aGlzLl9lbE1haW4pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluSWNvbiA9IFFpbkljb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1pY29uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluSW50ZWdlciA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY2xhc3MgUWluSW50ZWdlciBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0VkaXQodGhpcy5fZWxNYWluKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUud2lkdGggPSBcIjEyMHB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLmdldERhdGEoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9lbE1haW4udmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkIHx8IHZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX2VsTWFpbi52YWx1ZSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhID09IG51bGwgfHwgZGF0YSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsTWFpbi52YWx1ZSA9IChkYXRhIHwgMCkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5JbnRlZ2VyID0gUWluSW50ZWdlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWludGVnZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5MYWJlbCA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5MYWJlbCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsTWFpbi50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICB9XHJcbiAgICBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluLnRleHRDb250ZW50O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluTGFiZWwgPSBRaW5MYWJlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWxhYmVsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluTGluZSA9IHZvaWQgMDtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpbkxpbmUgZXh0ZW5kcyBxaW5fcGFuZWxfMS5RaW5QYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhEaXJlY3Rpb25Sb3coKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleFdyYXAoKTtcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluTGluZSA9IFFpbkxpbmU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1saW5lLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluTXV0YW50c0FybSA9IGV4cG9ydHMuUWluTXV0YW50cyA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jvb2xlYW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib29sZWFuXCIpO1xyXG5jb25zdCBxaW5fZmlsZV9jaG9vc2VyXzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS1jaG9vc2VyXCIpO1xyXG5jb25zdCBxaW5fY29tYm9fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb21ib1wiKTtcclxuY29uc3QgcWluX2ZpbGVfZXhwbG9yZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLWV4cGxvcmVyXCIpO1xyXG5jb25zdCBxaW5faW50ZWdlcl8xID0gcmVxdWlyZShcIi4vcWluLWludGVnZXJcIik7XHJcbmNvbnN0IHFpbl9maWxlX3BhdGhfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLXBhdGhcIik7XHJcbmNvbnN0IHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XHJcbnZhciBRaW5NdXRhbnRzO1xyXG4oZnVuY3Rpb24gKFFpbk11dGFudHMpIHtcclxuICAgIFFpbk11dGFudHNbXCJCT09MRUFOXCJdID0gXCJib29sZWFuXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiQ0hPT1NFUlwiXSA9IFwiY2hvb3NlclwiO1xyXG4gICAgUWluTXV0YW50c1tcIkNPTUJPXCJdID0gXCJjb21ib1wiO1xyXG4gICAgUWluTXV0YW50c1tcIkVYUExPUkVSXCJdID0gXCJleHBsb3JlclwiO1xyXG4gICAgUWluTXV0YW50c1tcIklOVEVHRVJcIl0gPSBcImludGVnZXJcIjtcclxuICAgIFFpbk11dGFudHNbXCJQQVRIXCJdID0gXCJwYXRoXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiU1RSSU5HXCJdID0gXCJzdHJpbmdcIjtcclxufSkoUWluTXV0YW50cyA9IGV4cG9ydHMuUWluTXV0YW50cyB8fCAoZXhwb3J0cy5RaW5NdXRhbnRzID0ge30pKTtcclxuZnVuY3Rpb24gbmV3RWRpdChraW5kLCBvcHRpb25zKSB7XHJcbiAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICBjYXNlIFFpbk11dGFudHMuQk9PTEVBTjpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fYm9vbGVhbl8xLlFpbkJvb2xlYW4ob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkNIT09TRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ZpbGVfY2hvb3Nlcl8xLlFpbkZpbGVDaG9vc2VyKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5DT01CTzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fY29tYm9fMS5RaW5Db21ibyhvcHRpb25zKTtcclxuICAgICAgICBjYXNlIFFpbk11dGFudHMuRVhQTE9SRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ZpbGVfZXhwbG9yZXJfMS5RaW5GaWxlRXhwbG9yZXIob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLklOVEVHRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ludGVnZXJfMS5RaW5JbnRlZ2VyKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5QQVRIOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9maWxlX3BhdGhfMS5RaW5GaWxlUGF0aChvcHRpb25zKTtcclxuICAgICAgICBjYXNlIFFpbk11dGFudHMuU1RSSU5HOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcob3B0aW9ucyk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBraW5kIG9mIG11dGFudCB0byBjcmVhdGUuXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluTXV0YW50c0FybSA9IHtcclxuICAgIG5ld0VkaXQsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1tdXRhbnRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluUGFuZWwgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluUGFuZWwgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRGlzcGxheUZsZXgoKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBvcHRpb25zLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbiAgICBwdXQoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblBhbmVsID0gUWluUGFuZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1wYW5lbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblBvcHVwID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fdG9vbHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi10b29sc1wiKTtcclxuY2xhc3MgUWluUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IoY29udGVudHMpIHtcclxuICAgICAgICB0aGlzLl9xaW5NYWluID0gcWluX3Rvb2xzXzEuUWluVG9vbHMucWlucGVsKCkuZnJhbWUubmV3UG9wdXAoY29udGVudHMuZ2V0TWFpbigpKTtcclxuICAgIH1cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBzaG93T25QYXJlbnQocGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5zaG93T25QYXJlbnQocGFyZW50LmdldE1haW4oKSk7XHJcbiAgICB9XHJcbiAgICBzaG93T25Cb3VuZHMoYm91bmRzKSB7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5zaG93T25Cb3VuZHMoYm91bmRzKTtcclxuICAgIH1cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4uY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblBvcHVwID0gUWluUG9wdXA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1wb3B1cC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblJvdyA9IHZvaWQgMDtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpblJvdyBleHRlbmRzIHFpbl9wYW5lbF8xLlFpblBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleERpcmVjdGlvblJvdygpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNGbGV4V3JhcE5vdCgpO1xyXG4gICAgfVxyXG4gICAgcHV0KGl0ZW0pIHtcclxuICAgICAgICBpdGVtLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5Sb3cgPSBRaW5Sb3c7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1yb3cuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5TY3JvbGwgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5jbGFzcyBRaW5TY3JvbGwgZXh0ZW5kcyBxaW5fcGFuZWxfMS5RaW5QYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc1Njcm9sbCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluU2Nyb2xsID0gUWluU2Nyb2xsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc2Nyb2xsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU3BsaXR0ZXIgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluU3BsaXR0ZXIgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbEdyb3dBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbEdyb3dCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9pc0hvcml6b250YWwgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3FpblNpZGVBID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9xaW5TaWRlQiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLmFwcGVuZENoaWxkKHRoaXMuX2VsU2lkZUEpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5hcHBlbmRDaGlsZCh0aGlzLl9lbE1vdmVyKTtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsR3Jvd0EpO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxHcm93Qik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLmFwcGVuZENoaWxkKHRoaXMuX2VsU2lkZUIpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5mbGV4V3JhcCA9IFwibm93cmFwXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEycHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYmEoMjU1LDI1MCwyMzksMC4xKVwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUuZmxleCA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Euc3R5bGUuZmxleCA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Iuc3R5bGUuZmxleCA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuZmxleFdyYXAgPSBcIm5vd3JhcFwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICBsZXQgYmFsYW5jZSA9IChncm93LCBmYWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZWxhdGVkID0gdGhpcy5faXNIb3Jpem9udGFsID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIjtcclxuICAgICAgICAgICAgbGV0IGdyb3dBdCA9IHBhcnNlSW50KGdyb3cuc3R5bGVbcmVsYXRlZF0pO1xyXG4gICAgICAgICAgICBsZXQgZmFsbEF0ID0gcGFyc2VJbnQoZmFsbC5zdHlsZVtyZWxhdGVkXSk7XHJcbiAgICAgICAgICAgIGlmIChmYWxsQXQgPD0gMTApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGdyb3cuc3R5bGVbcmVsYXRlZF0gPSAoZ3Jvd0F0ICsgMTApICsgXCIlXCI7XHJcbiAgICAgICAgICAgIGZhbGwuc3R5bGVbcmVsYXRlZF0gPSAoZmFsbEF0IC0gMTApICsgXCIlXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9lbEdyb3dBLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKF8pID0+IGJhbGFuY2UodGhpcy5fZWxTaWRlQSwgdGhpcy5fZWxTaWRlQikpO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0EuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKF8pID0+IGJhbGFuY2UodGhpcy5fZWxTaWRlQSwgdGhpcy5fZWxTaWRlQikpO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoXykgPT4gYmFsYW5jZSh0aGlzLl9lbFNpZGVCLCB0aGlzLl9lbFNpZGVBKSk7XHJcbiAgICAgICAgdGhpcy5fZWxHcm93Qi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoXykgPT4gYmFsYW5jZSh0aGlzLl9lbFNpZGVCLCB0aGlzLl9lbFNpZGVBKSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2lkZUEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2lkZUEob3B0aW9ucy5zaWRlQSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2lkZUIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2lkZUIob3B0aW9ucy5zaWRlQik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5ob3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3FpblNpZGVBID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblNpZGVBID0gY2hpbGQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsU2lkZUEuYXBwZW5kQ2hpbGQoY2hpbGQuZ2V0TWFpbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9xaW5TaWRlQiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluU2lkZUIudW5JbnN0YWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5TaWRlQiA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcWluU2lkZUIgPSBjaGlsZDtcclxuICAgICAgICAgICAgdGhpcy5fZWxTaWRlQi5hcHBlbmRDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9iYXNlQ2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2Jhc2VDaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlQ2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3FpblNpZGVBID09PSBjaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbFNpZGVBLnJlbW92ZUNoaWxkKGNoaWxkLmdldE1haW4oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblNpZGVBID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fcWluU2lkZUIgPT09IGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsU2lkZUIucmVtb3ZlQ2hpbGQoY2hpbGQuZ2V0TWFpbigpKTtcclxuICAgICAgICAgICAgdGhpcy5fcWluU2lkZUIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEhvcml6b250YWwoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQS5zdHlsZS53aWR0aCA9IFwiNTAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCLnN0eWxlLndpZHRoID0gXCI1MCVcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUubWluV2lkdGggPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLm1heFdpZHRoID0gXCIyNHB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5taW5IZWlnaHQgPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLm1heEhlaWdodCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUud2lkdGggPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Euc3R5bGUuYmFja2dyb3VuZCA9IFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMCUsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSA4NCUsIHJnYmEoMjQsMCwzOSwwLjgpIDk4JSwgcmdiYSgyNCwwLDM5LDAuOCkgMTAwJSlcIjtcclxuICAgICAgICB0aGlzLl9lbEdyb3dCLnN0eWxlLmJhY2tncm91bmQgPSBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAwJSwgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDg0JSwgcmdiYSgyNCwwLDM5LDAuOCkgOTglLCByZ2JhKDI0LDAsMzksMC44KSAxMDAlKVwiO1xyXG4gICAgICAgIHRoaXMuX2lzSG9yaXpvbnRhbCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzZXRWZXJ0aWNhbCgpIHtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQS5zdHlsZS5oZWlnaHQgPSBcIjUwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCLnN0eWxlLmhlaWdodCA9IFwiNTAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5taW5XaWR0aCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUubWF4V2lkdGggPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLm1pbkhlaWdodCA9IFwiMjRweFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUubWF4SGVpZ2h0ID0gXCIyNHB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUuaGVpZ2h0ID0gXCIyNHB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxHcm93QS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMCUsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSA4NCUsIHJnYmEoMjQsMCwzOSwwLjgpIDk4JSwgcmdiYSgyNCwwLDM5LDAuOCkgMTAwJSlcIjtcclxuICAgICAgICB0aGlzLl9lbEdyb3dCLnN0eWxlLmJhY2tncm91bmQgPSBcImxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMCUsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSA4NCUsIHJnYmEoMjQsMCwzOSwwLjgpIDk4JSwgcmdiYSgyNCwwLDM5LDAuOCkgMTAwJSlcIjtcclxuICAgICAgICB0aGlzLl9pc0hvcml6b250YWwgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldFNpZGVBKHNpZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5fcWluU2lkZUEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluU2lkZUEudW5JbnN0YWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblNpZGVBID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcWluU2lkZUEgPSBzaWRlO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUEuYXBwZW5kQ2hpbGQoc2lkZS5nZXRNYWluKCkpO1xyXG4gICAgfVxyXG4gICAgc2V0U2lkZUIoc2lkZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9xaW5TaWRlQiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQi51bkluc3RhbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5fcWluU2lkZUIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9xaW5TaWRlQiA9IHNpZGU7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQi5hcHBlbmRDaGlsZChzaWRlLmdldE1haW4oKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5TcGxpdHRlciA9IFFpblNwbGl0dGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3BsaXR0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5TdGFjayA9IHZvaWQgMDtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpblN0YWNrIGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgc3RhY2socWluQ29tcCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4oKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC51bkRpc3BsYXkoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBxaW5Db21wLmluc3RhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICBzaG93KHFpbkNvbXApIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkID09PSBxaW5Db21wKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5TdGFjayA9IFFpblN0YWNrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3RhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5TdHJpbmcgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNsYXNzIFFpblN0cmluZyBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm1heExlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4ubWF4TGVuZ3RoID0gb3B0aW9ucy5tYXhMZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IE1hdGgubWluKE1hdGgubWF4KG9wdGlvbnMubWF4TGVuZ3RoIC0gMTAsIDApLCA5MCk7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IE1hdGguZmxvb3IoOTAgKyAocG9zaXRpb24gKiA3KSAvIDMpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0VkaXQodGhpcy5fZWxNYWluKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gZGF0YTtcclxuICAgIH1cclxuICAgIGluc2VydEF0Q3Vyc29yKGRhdGEpIHtcclxuICAgICAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLl9lbE1haW4uc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IHRoaXMuX2VsTWFpbi5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgbGV0IG9sZFZhbCA9IHRoaXMuX2VsTWFpbi52YWx1ZTtcclxuICAgICAgICBsZXQgbmV3VmFsID0gKHN0YXJ0UG9zID4gMCA/IG9sZFZhbC5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpIDogXCJcIikgK1xyXG4gICAgICAgICAgICBkYXRhICtcclxuICAgICAgICAgICAgKGVuZFBvcyA8IG9sZFZhbC5sZW5ndGggPyBvbGRWYWwuc3Vic3RyaW5nKGVuZFBvcykgOiBcIlwiKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4udmFsdWUgPSBuZXdWYWw7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnNlbGVjdGlvblN0YXJ0ID0gc3RhcnRQb3M7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnNlbGVjdGlvbkVuZCA9IHN0YXJ0UG9zICsgZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5TdHJpbmcgPSBRaW5TdHJpbmc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1zdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5UYWJsZSA9IHZvaWQgMDtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jbGFzcyBRaW5UYWJsZSBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5fZWxUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICB0aGlzLl9lbFRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgICAgIHRoaXMuX2VsVEhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgdGhpcy5fZWxUQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICB0aGlzLl9saW5lc1NpemUgPSAwO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5hcHBlbmRDaGlsZCh0aGlzLl9lbFRhYmxlKTtcclxuICAgICAgICB0aGlzLl9lbFRhYmxlLmFwcGVuZENoaWxkKHRoaXMuX2VsVEhlYWQpO1xyXG4gICAgICAgIHRoaXMuX2VsVEhlYWQuYXBwZW5kQ2hpbGQodGhpcy5fZWxUSGVhZFJvdyk7XHJcbiAgICAgICAgdGhpcy5fZWxUYWJsZS5hcHBlbmRDaGlsZCh0aGlzLl9lbFRCb2R5KTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPblRhYmxlKHRoaXMuX2VsVGFibGUpO1xyXG4gICAgICAgIHN0eWxlcy5hcHBseU9uSGVhZCh0aGlzLl9lbFRIZWFkKTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkhlYWRSb3codGhpcy5fZWxUSGVhZFJvdyk7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25Cb2R5KHRoaXMuX2VsVEJvZHkpO1xyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdGhpcy5fZWxUQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikuZm9yRWFjaCgodHIpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSBbXTtcclxuICAgICAgICAgICAgdHIucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLmZvckVhY2goKHRkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLnB1c2godGQuaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxpbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmRlbExpbmVzKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRMaW5lKGxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEhlYWQoaGVhZCkge1xyXG4gICAgICAgIHRoaXMuX2VsVEhlYWRSb3cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgaGVhZCkge1xyXG4gICAgICAgICAgICBsZXQgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgICAgIHRoLmlubmVyVGV4dCA9IGNlbGw7XHJcbiAgICAgICAgICAgIHN0eWxlcy5hcHBseU9uSGVhZENvbCh0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsVEhlYWRSb3cuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEhlYWQoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2VsVEhlYWRSb3cucXVlcnlTZWxlY3RvckFsbChcInRoXCIpLmZvckVhY2goKHRoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoLmlubmVyVGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGFkZEhlYWQoaGVhZCkge1xyXG4gICAgICAgIGxldCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICB0aC5pbm5lclRleHQgPSBoZWFkO1xyXG4gICAgICAgIHN0eWxlcy5hcHBseU9uSGVhZENvbCh0aCk7XHJcbiAgICAgICAgdGhpcy5fZWxUSGVhZFJvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgICB9XHJcbiAgICBhZGRMaW5lKGxpbmUpIHtcclxuICAgICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpbmVzU2l6ZSAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgc3R5bGVzLmFwcGx5T25Cb2R5Um93KHRyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0eWxlcy5hcHBseU9uQm9keVJvd09kZCh0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBsaW5lKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgdGQuaW5uZXJUZXh0ID0gY2VsbC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBzdHlsZXMuYXBwbHlPbkJvZHlDb2wodGQpO1xyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2VsVEJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIHRoaXMuX2xpbmVzU2l6ZSsrO1xyXG4gICAgfVxyXG4gICAgZGVsTGluZXMoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxUQm9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2xpbmVzU2l6ZSA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5UYWJsZSA9IFFpblRhYmxlO1xyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBhcHBseU9uVGFibGU6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzllOWU5ZVwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25IZWFkOiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25IZWFkUm93OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzU2Y2Q2NDM2XCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkhlYWRDb2w6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyUmlnaHQgPSBcIjFweCBzb2xpZCAjNWU1ZTVlXCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIycHggc29saWQgIzVlNWU1ZVwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25Cb2R5OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25Cb2R5Um93OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzU2NjRjZDM2XCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkJvZHlSb3dPZGQ6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjY2RhOTU2MzZcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uQm9keUNvbDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJSaWdodCA9IFwiMXB4IHNvbGlkICM1ZTVlNWVcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCAjNWU1ZTVlXCI7XHJcbiAgICB9LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tdGFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5UYWJzID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2J1dHRvbl8xID0gcmVxdWlyZShcIi4vcWluLWJ1dHRvblwiKTtcclxuY29uc3QgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcclxuY29uc3QgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XHJcbmNvbnN0IHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpblRhYnMgZXh0ZW5kcyBxaW5fY29sdW1uXzEuUWluQ29sdW1uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3FpblRhYnMgPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fcWluUGFuZWwgPSBuZXcgcWluX3BhbmVsXzEuUWluUGFuZWwoKTtcclxuICAgICAgICB0aGlzLl90YWJzID0gW107XHJcbiAgICAgICAgdGhpcy5fcWluVGFicy5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3FpblBhbmVsLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFiIG9mIG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRhYih0YWIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHFpblRhYnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblRhYnM7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluUGFuZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBhbmVsO1xyXG4gICAgfVxyXG4gICAgYWRkVGFiKHRhYikge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHsgbGFiZWw6IG5ldyBxaW5fbGFiZWxfMS5RaW5MYWJlbCh0YWIudGl0bGUpIH0pO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5wdXRBc0JhY2tncm91bmQocWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9ySW5hY3RpdmUpO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc01haW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZXdlcih0YWIudmlld2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1dHRvbi5pbnN0YWxsKHRoaXMuX3FpblRhYnMpO1xyXG4gICAgICAgIGxldCBmaXJzdCA9IHRoaXMuX3RhYnMubGVuZ3RoID09IDA7XHJcbiAgICAgICAgbGV0IHRhYlJlZiA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IHRhYi50aXRsZSxcclxuICAgICAgICAgICAgdmlld2VyOiB0YWIudmlld2VyLFxyXG4gICAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl90YWJzLnB1c2godGFiUmVmKTtcclxuICAgICAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Vmlld2VyKHRhYi52aWV3ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3dUYWIodGl0bGUpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiB0aGlzLl90YWJzKSB7XHJcbiAgICAgICAgICAgIGlmICh0YWIudGl0bGUgPT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZXdlcih0YWIudmlld2VyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd1ZpZXdlcih2aWV3ZXIpIHtcclxuICAgICAgICB0aGlzLl9xaW5QYW5lbC51bkluc3RhbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHZpZXdlci5pbnN0YWxsKHRoaXMuX3FpblBhbmVsKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiB0aGlzLl90YWJzKSB7XHJcbiAgICAgICAgICAgIGlmICh0YWIudmlld2VyID09IHZpZXdlcikge1xyXG4gICAgICAgICAgICAgICAgdGFiLmJ1dHRvbi5zdHlsZS5wdXRBc0JhY2tncm91bmQocWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yQWN0aXZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhYi5idXR0b24uc3R5bGUucHV0QXNCYWNrZ3JvdW5kKHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckluYWN0aXZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblRhYnMgPSBRaW5UYWJzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tdGFicy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblRvb2xzID0gdm9pZCAwO1xyXG5jb25zdCByZWZRaW5wZWwgPSB3aW5kb3cuZnJhbWVFbGVtZW50LnFpbnBlbDtcclxuZnVuY3Rpb24gcWlucGVsKCkge1xyXG4gICAgcmV0dXJuIHJlZlFpbnBlbDtcclxufVxyXG5leHBvcnRzLlFpblRvb2xzID0ge1xyXG4gICAgcWlucGVsLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tdG9vbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Tb3VsID0gZXhwb3J0cy5RaW5Ta2luID0gZXhwb3J0cy5RaW5TdHlsZXMgPSBleHBvcnRzLlFpbkhlYWQgPSBleHBvcnRzLlFpbkdyYW5kZXVyID0gZXhwb3J0cy5RaW5Cb3VuZHMgPSBleHBvcnRzLlFpbkRpbWVuc2lvbiA9IGV4cG9ydHMuUWluUG9pbnQgPSBleHBvcnRzLlFpbkZvb3QgPSBleHBvcnRzLlFpbkZpbGVzRGVzY3JpcHRvciA9IGV4cG9ydHMuUWluRmlsZXNPcGVyYXRpb24gPSBleHBvcnRzLlFpbkZpbGVzTmF0dXJlID0gZXhwb3J0cy5RaW5Cb2R5ID0gZXhwb3J0cy5RaW5Bcm0gPSBleHBvcnRzLlFpblBvaW50ZXJDYWxscyA9IGV4cG9ydHMuUWluV2FpdGVycyA9IGV4cG9ydHMuUWluRXZlbnQgPSB2b2lkIDA7XHJcbnZhciBxaW5fYXJtXzEgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5FdmVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV8xLlFpbkV2ZW50OyB9IH0pO1xyXG52YXIgcWluX2FybV8yID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluV2FpdGVyc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV8yLlFpbldhaXRlcnM7IH0gfSk7XHJcbnZhciBxaW5fYXJtXzMgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Qb2ludGVyQ2FsbHNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1fMy5RaW5Qb2ludGVyQ2FsbHM7IH0gfSk7XHJcbnZhciBxaW5fYXJtXzQgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Bcm1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1fNC5RaW5Bcm07IH0gfSk7XHJcbnZhciBxaW5fYm9keV8xID0gcmVxdWlyZShcIi4vcWluLWJvZHlcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJvZHlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9ib2R5XzEuUWluQm9keTsgfSB9KTtcclxudmFyIHFpbl9mb290XzEgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZXNOYXR1cmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzEuUWluRmlsZXNOYXR1cmU7IH0gfSk7XHJcbnZhciBxaW5fZm9vdF8yID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzT3BlcmF0aW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF8yLlFpbkZpbGVzT3BlcmF0aW9uOyB9IH0pO1xyXG52YXIgcWluX2Zvb3RfMyA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlc0Rlc2NyaXB0b3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzMuUWluRmlsZXNEZXNjcmlwdG9yOyB9IH0pO1xyXG52YXIgcWluX2Zvb3RfNCA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Gb290XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF80LlFpbkZvb3Q7IH0gfSk7XHJcbnZhciBxaW5faGVhZF8xID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBvaW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF8xLlFpblBvaW50OyB9IH0pO1xyXG52YXIgcWluX2hlYWRfMiA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5EaW1lbnNpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzIuUWluRGltZW5zaW9uOyB9IH0pO1xyXG52YXIgcWluX2hlYWRfMyA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Cb3VuZHNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzMuUWluQm91bmRzOyB9IH0pO1xyXG52YXIgcWluX2hlYWRfNCA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5HcmFuZGV1clwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfNC5RaW5HcmFuZGV1cjsgfSB9KTtcclxudmFyIHFpbl9oZWFkXzUgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSGVhZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfNS5RaW5IZWFkOyB9IH0pO1xyXG52YXIgcWluX3NraW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TdHlsZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9za2luXzEuUWluU3R5bGVzOyB9IH0pO1xyXG52YXIgcWluX3NraW5fMiA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Ta2luXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc2tpbl8yLlFpblNraW47IH0gfSk7XHJcbnZhciBxaW5fc291bF8xID0gcmVxdWlyZShcIi4vcWluLXNvdWxcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNvdWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zb3VsXzEuUWluU291bDsgfSB9KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQXJtID0gZXhwb3J0cy5RaW5Qb2ludGVyQ2FsbHMgPSBleHBvcnRzLlFpbldhaXRlcnMgPSBleHBvcnRzLlFpbkV2ZW50ID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fc2tpbl8xID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbmNsYXNzIFFpbkV2ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKG9yaWdpbiwgaXNTdGFydCwga2luZCkge1xyXG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50S2V5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9ldmVudE1vdXNlID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9ldmVudFRvdWNoID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9wb2ludCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc3RvcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX29yaWdpbiA9IG9yaWdpbjtcclxuICAgICAgICB0aGlzLl9zdGFydCA9IGlzU3RhcnQ7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRLZXkgPSAoX2EgPSBraW5kID09PSBudWxsIHx8IGtpbmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGtpbmQuZXZlbnRLZXkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRNb3VzZSA9IChfYiA9IGtpbmQgPT09IG51bGwgfHwga2luZCA9PT0gdm9pZCAwID8gdm9pZCAwIDoga2luZC5ldmVudE1vdXNlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50VG91Y2ggPSAoX2MgPSBraW5kID09PSBudWxsIHx8IGtpbmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGtpbmQuZXZlbnRUb3VjaCkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludCA9IG1ha2VFdmVudE1vdXNlUG9pbnQoaXNTdGFydCwgdGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9pbnQgPSBtYWtlRXZlbnRUb3VjaChpc1N0YXJ0LCB0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgaXNTdGFydCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhcnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgZnJvbU9yaWdpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3JpZ2luO1xyXG4gICAgfVxyXG4gICAgZ2V0IGZyb21UYXJnZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudEtleS50YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50TW91c2UudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudFRvdWNoLnRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXQgZnJvbVR5cGluZygpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl9ldmVudEtleTtcclxuICAgIH1cclxuICAgIGdldCBmcm9tUG9pbnRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fcG9pbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgaGFzQWx0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRLZXkuYWx0S2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudE1vdXNlLmFsdEtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRUb3VjaC5hbHRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBoYXNDdHJsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRLZXkuY3RybEtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRNb3VzZS5jdHJsS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudFRvdWNoLmN0cmxLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBoYXNTaGlmdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50S2V5LnNoaWZ0S2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudE1vdXNlLnNoaWZ0S2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudFRvdWNoLnNoaWZ0S2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaGFzTWV0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50S2V5Lm1ldGFLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50TW91c2UubWV0YUtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRUb3VjaC5tZXRhS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQga2V5VHlwZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudEtleS5rZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzRW50ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzS2V5RW50ZXIodGhpcy5fZXZlbnRLZXkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzRXNjYXBlKCkge1xyXG4gICAgICAgIHJldHVybiBpc0tleUVzY2FwZSh0aGlzLl9ldmVudEtleSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNTcGFjZSgpIHtcclxuICAgICAgICByZXR1cm4gaXNLZXlTcGFjZSh0aGlzLl9ldmVudEtleSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNEb3VibGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRXZlbnRNb3VzZURvdWJsZSh0aGlzLl9zdGFydCwgdGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRXZlbnRUb3VjaERvdWJsZSh0aGlzLl9zdGFydCwgdGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc0xvbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRXZlbnRNb3VzZUxvbmcodGhpcy5fc3RhcnQsIHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0V2ZW50VG91Y2hMb25nKHRoaXMuX3N0YXJ0LCB0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb2ludDtcclxuICAgIH1cclxuICAgIGdldCBwb2ludFgoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLl9wb2ludCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBvc1g7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9pbnRZKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fcG9pbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wb3NZO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzRmlyc3RCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzRmlyc3RCdXR0b24odGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNaWRkbGVCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzTWlkZGxlQnV0dG9uKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzU2Vjb25kQnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiBpc1NlY29uZEJ1dHRvbih0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgIH1cclxuICAgIGdldCBpc09uZUZpbmdlcigpIHtcclxuICAgICAgICByZXR1cm4gaXNPbmVGaW5nZXIodGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNUd29GaW5nZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBpc1R3b0ZpbmdlcnModGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNUaHJlZUZpbmdlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzVGhyZWVGaW5nZXJzKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzRm91ckZpbmdlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzRm91ckZpbmdlcnModGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNYWluKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNYWluS2V5KHRoaXMuX2V2ZW50S2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNYWluTW91c2UodGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWFpblRvdWNoKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNYWluS2V5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01haW5LZXkodGhpcy5fZXZlbnRLZXkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWFpbk1vdXNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01haW5Nb3VzZSh0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgIH1cclxuICAgIGdldCBpc01haW5Ub3VjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNYWluVG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNYWluUG9pbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWFpbk1vdXNlKHRoaXMuX2V2ZW50TW91c2UpIHx8IGlzTWFpblRvdWNoKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWlkaSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWlkaUtleSh0aGlzLl9ldmVudEtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWlkaU1vdXNlKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01pZGlUb3VjaCh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWlkaUtleSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNaWRpS2V5KHRoaXMuX2V2ZW50S2V5KTtcclxuICAgIH1cclxuICAgIGdldCBpc01pZGlNb3VzZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNaWRpTW91c2UodGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNaWRpVG91Y2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWlkaVRvdWNoKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWlkaVBvaW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01pZGlNb3VzZSh0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNaWRpVG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc01lbnUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01lbnVLZXkodGhpcy5fZXZlbnRLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNZW51TW91c2UodGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01lbnVUb3VjaCh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWVudUtleSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNZW51S2V5KHRoaXMuX2V2ZW50S2V5KTtcclxuICAgIH1cclxuICAgIGdldCBpc01lbnVNb3VzZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNZW51TW91c2UodGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNZW51VG91Y2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWVudVRvdWNoKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWVudVBvaW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01lbnVNb3VzZSh0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNZW51VG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBzdG9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9wO1xyXG4gICAgfVxyXG4gICAgY29uc3VtZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fc3RvcCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5FdmVudCA9IFFpbkV2ZW50O1xyXG5jbGFzcyBRaW5XYWl0ZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXRpYWwpIHtcclxuICAgICAgICB0aGlzLndhaXRlcnMgPSBpbml0aWFsID8gaW5pdGlhbCA6IFtdO1xyXG4gICAgfVxyXG4gICAgYWRkV2FpdGVyKHdhaXRlcikge1xyXG4gICAgICAgIHRoaXMud2FpdGVycy5wdXNoKHdhaXRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBoYXNXYWl0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdGVycy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG4gICAgc2VuZFdhaXRlcnMocmVzdWx0KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB3YWl0ZXIgb2YgdGhpcy53YWl0ZXJzKSB7XHJcbiAgICAgICAgICAgIHdhaXRlcihyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbldhaXRlcnMgPSBRaW5XYWl0ZXJzO1xyXG5jbGFzcyBRaW5Qb2ludGVyQ2FsbHMge1xyXG59XHJcbmV4cG9ydHMuUWluUG9pbnRlckNhbGxzID0gUWluUG9pbnRlckNhbGxzO1xyXG5mdW5jdGlvbiBzdG9wRXZlbnQoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbnZhciBsYXN0RXZlbnRNb3VzZSA9IG51bGw7XHJcbnZhciBsYXN0RXZlbnRUb3VjaCA9IG51bGw7XHJcbmZ1bmN0aW9uIG1ha2VFdmVudE1vdXNlUG9pbnQoaXNTdGFydCwgZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgICBwb3NYOiAwLFxyXG4gICAgICAgIHBvc1k6IDAsXHJcbiAgICB9O1xyXG4gICAgaWYgKGV2LmNsaWVudFggfHwgZXYuY2xpZW50WSkge1xyXG4gICAgICAgIHJlc3VsdC5wb3NYID0gZXYuY2xpZW50WDtcclxuICAgICAgICByZXN1bHQucG9zWSA9IGV2LmNsaWVudFk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTdGFydCkge1xyXG4gICAgICAgIGxhc3RFdmVudE1vdXNlID0gZXY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VFdmVudFRvdWNoKGlzU3RhcnQsIGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgICAgcG9zWDogMCxcclxuICAgICAgICBwb3NZOiAwLFxyXG4gICAgfTtcclxuICAgIGlmIChldi50b3VjaGVzICYmIHRoaXMuX2V2ZW50LnRvdWNoZXMubGVuZ3RoID49IDEpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKHRoaXMuX2V2ZW50LnRvdWNoZXMubGVuZ3RoIC8gMik7XHJcbiAgICAgICAgcmVzdWx0LnBvc1ggPSBldi50b3VjaGVzW2luZGV4XS5jbGllbnRYO1xyXG4gICAgICAgIHJlc3VsdC5wb3NZID0gZXYudG91Y2hlc1tpbmRleF0uY2xpZW50WTtcclxuICAgIH1cclxuICAgIGlmIChpc1N0YXJ0KSB7XHJcbiAgICAgICAgbGFzdEV2ZW50VG91Y2ggPSBldjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gaXNFdmVudE1vdXNlRG91YmxlKGlzU3RhcnQsIGV2KSB7XHJcbiAgICBpZiAoIWlzU3RhcnQgfHwgbGFzdEV2ZW50TW91c2UgPT0gbnVsbCB8fCBldiA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGltZURpZiA9IGV2LnRpbWVTdGFtcCAtIGxhc3RFdmVudE1vdXNlLnRpbWVTdGFtcDtcclxuICAgIHJldHVybiB0aW1lRGlmIDwgNDUwO1xyXG59XHJcbmZ1bmN0aW9uIGlzRXZlbnRUb3VjaERvdWJsZShpc1N0YXJ0LCBldikge1xyXG4gICAgaWYgKCFpc1N0YXJ0IHx8IGxhc3RFdmVudFRvdWNoID09IG51bGwgfHwgZXYgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpbWVEaWYgPSBldi50aW1lU3RhbXAgLSBsYXN0RXZlbnRUb3VjaC50aW1lU3RhbXA7XHJcbiAgICByZXR1cm4gdGltZURpZiA8IDQ1MDtcclxufVxyXG5mdW5jdGlvbiBpc0V2ZW50TW91c2VMb25nKGlzU3RhcnQsIGV2KSB7XHJcbiAgICBpZiAoIWlzU3RhcnQgfHwgbGFzdEV2ZW50TW91c2UgPT0gbnVsbCB8fCBldiA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGltZURpZiA9IGV2LnRpbWVTdGFtcCAtIGxhc3RFdmVudE1vdXNlLnRpbWVTdGFtcDtcclxuICAgIHJldHVybiB0aW1lRGlmID4gODQwO1xyXG59XHJcbmZ1bmN0aW9uIGlzRXZlbnRUb3VjaExvbmcoaXNTdGFydCwgZXYpIHtcclxuICAgIGlmICghaXNTdGFydCB8fCBsYXN0RXZlbnRUb3VjaCA9PSBudWxsIHx8IGV2ID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aW1lRGlmID0gZXYudGltZVN0YW1wIC0gbGFzdEV2ZW50VG91Y2gudGltZVN0YW1wO1xyXG4gICAgcmV0dXJuIHRpbWVEaWYgPiA4NDA7XHJcbn1cclxuZnVuY3Rpb24gaXNLZXlJbkxpc3QoZXYsIGxpc3QpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQga2V5TG93ZXIgPSBldi5rZXkudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBsaXN0LmluZGV4T2Yoa2V5TG93ZXIpID4gLTE7XHJcbn1cclxuZnVuY3Rpb24gaXNLZXlFbnRlcihldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0tleUluTGlzdChldiwgW1wiZW50ZXJcIiwgXCJyZXR1cm5cIl0pIHx8IGV2LmtleUNvZGUgPT09IDEzO1xyXG59XHJcbmZ1bmN0aW9uIGlzS2V5RXNjYXBlKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzS2V5SW5MaXN0KGV2LCBbXCJlc2NcIiwgXCJlc2NhcGVcIl0pIHx8IGV2LmtleUNvZGUgPT09IDI3O1xyXG59XHJcbmZ1bmN0aW9uIGlzS2V5U3BhY2UoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNLZXlJbkxpc3QoZXYsIFtcIiBcIiwgXCJzcGFjZVwiLCBcInNwYWNlYmFyXCJdKSB8fCBldi5rZXlDb2RlID09PSAzMjtcclxufVxyXG5mdW5jdGlvbiBpc0ZpcnN0QnV0dG9uKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYuYnV0dG9uKSA9PSAwO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWlkZGxlQnV0dG9uKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYuYnV0dG9uKSA9PSAxO1xyXG59XHJcbmZ1bmN0aW9uIGlzU2Vjb25kQnV0dG9uKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYuYnV0dG9uKSA9PSAyO1xyXG59XHJcbmZ1bmN0aW9uIGlzT25lRmluZ2VyKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYudG91Y2hlcy5sZW5ndGgpID09IDE7XHJcbn1cclxuZnVuY3Rpb24gaXNUd29GaW5nZXJzKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYudG91Y2hlcy5sZW5ndGgpID09IDI7XHJcbn1cclxuZnVuY3Rpb24gaXNUaHJlZUZpbmdlcnMoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi50b3VjaGVzLmxlbmd0aCkgPT0gMztcclxufVxyXG5mdW5jdGlvbiBpc0ZvdXJGaW5nZXJzKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYudG91Y2hlcy5sZW5ndGgpID09IDQ7XHJcbn1cclxuZnVuY3Rpb24gaXNNYWluS2V5KGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzS2V5RW50ZXIoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWlkaUtleShldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBldi5jdHJsS2V5ICYmIGV2LmFsdEtleSAmJiBpc0tleVNwYWNlKGV2KTtcclxufVxyXG5mdW5jdGlvbiBpc01lbnVLZXkoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXYuY3RybEtleSAmJiAhZXYuYWx0S2V5ICYmIGlzS2V5U3BhY2UoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWFpbk1vdXNlKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzRmlyc3RCdXR0b24oZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWFpblRvdWNoKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzT25lRmluZ2VyKGV2KTtcclxufVxyXG5mdW5jdGlvbiBpc01pZGlNb3VzZShldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc01pZGRsZUJ1dHRvbihldik7XHJcbn1cclxuZnVuY3Rpb24gaXNNaWRpVG91Y2goZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNUaHJlZUZpbmdlcnMoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWVudU1vdXNlKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzU2Vjb25kQnV0dG9uKGV2KTtcclxufVxyXG5mdW5jdGlvbiBpc01lbnVUb3VjaChldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc1R3b0ZpbmdlcnMoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbihvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGFjdEtleURvd24pO1xyXG4gICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBhY3RLZXlVcCk7XHJcbiAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBhY3RNb3VzZURvd24pO1xyXG4gICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGFjdE1vdXNlVXApO1xyXG4gICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGFjdFRvdWNoU3RhcnQpO1xyXG4gICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBhY3RUb3VjaEVuZCk7XHJcbiAgICBmdW5jdGlvbiBhY3RLZXlEb3duKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KG9yaWdpbiwgdHJ1ZSwgeyBldmVudEtleTogZXYgfSk7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdEtleVVwKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KG9yaWdpbiwgZmFsc2UsIHsgZXZlbnRLZXk6IGV2IH0pO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RNb3VzZURvd24oZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQob3JpZ2luLCB0cnVlLCB7IGV2ZW50TW91c2U6IGV2IH0pO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RNb3VzZVVwKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KG9yaWdpbiwgZmFsc2UsIHsgZXZlbnRNb3VzZTogZXYgfSk7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdFRvdWNoU3RhcnQoZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQob3JpZ2luLCB0cnVlLCB7IGV2ZW50VG91Y2g6IGV2IH0pO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RUb3VjaEVuZChldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChvcmlnaW4sIGZhbHNlLCB7IGV2ZW50VG91Y2g6IGV2IH0pO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWFpbihvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWFpbikge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1haW5LZXkob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01haW5LZXkpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NYWluTW91c2Uob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01haW5Nb3VzZSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1haW5Ub3VjaChvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWFpbk1vdXNlKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWFpblBvaW50KG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluUG9pbnQpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NaWRpKG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNaWRpKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWlkaUtleShvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWlkaUtleSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1pZGlNb3VzZShvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWlkaU1vdXNlKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWlkaVRvdWNoKG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNaWRpTW91c2UpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NaWRpUG9pbnQob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01pZGlQb2ludCkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1lbnUob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01lbnUpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NZW51S2V5KG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNZW51S2V5KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWVudU1vdXNlKG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNZW51TW91c2UpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NZW51VG91Y2gob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01lbnVNb3VzZSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1lbnVQb2ludChvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWVudVBvaW50KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9ucyhvcmlnaW5zLCBhY3Rpb24pIHtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBvcmlnaW5zKSB7XHJcbiAgICAgICAgYWRkQWN0aW9uKGVsZW1lbnQsIGFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uc01haW4ob3JpZ2lucywgYWN0aW9uKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb3JpZ2lucykge1xyXG4gICAgICAgIGFkZEFjdGlvbk1haW4oZWxlbWVudCwgYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25zTWFpbktleShvcmlnaW5zLCBhY3Rpb24pIHtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBvcmlnaW5zKSB7XHJcbiAgICAgICAgYWRkQWN0aW9uTWFpbihlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbnNNYWluUG9pbnQob3JpZ2lucywgYWN0aW9uKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb3JpZ2lucykge1xyXG4gICAgICAgIGFkZEFjdGlvbk1haW4oZWxlbWVudCwgYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRNb3Zlcihzb3VyY2VzLCB0YXJnZXQsIGRyYWdDYWxscykge1xyXG4gICAgdmFyIGRyYWdJbml0RXZlbnRYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdEV2ZW50WSA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRQb3NYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdFBvc1kgPSAwO1xyXG4gICAgZm9yIChsZXQgc291cmNlIG9mIHNvdXJjZXMpIHtcclxuICAgICAgICBzb3VyY2Uub25tb3VzZWRvd24gPSBvbk1vdmVyTW91c2VJbml0O1xyXG4gICAgICAgIHNvdXJjZS5vbnRvdWNoc3RhcnQgPSBvbk1vdmVyVG91Y2hJbml0O1xyXG4gICAgICAgIHNvdXJjZS5vbmRyYWdzdGFydCA9IHN0b3BFdmVudDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJNb3VzZUluaXQoZXYpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQub25tb3VzZW1vdmUgfHwgZG9jdW1lbnQub250b3VjaG1vdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50TW91c2VEb3VibGUodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50TW91c2VMb25nKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudE1vdXNlUG9pbnQodHJ1ZSwgZXYpO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRYID0gcG9pbnRlci5wb3NYO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdJbml0UG9zWCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS5sZWZ0LCAxMCk7XHJcbiAgICAgICAgZHJhZ0luaXRQb3NZID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLnRvcCwgMTApO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25Nb3Zlck1vdXNlTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uTW92ZXJUb3VjaE1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25Nb3ZlckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvbk1vdmVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJUb3VjaEluaXQoZXYpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQub25tb3VzZW1vdmUgfHwgZG9jdW1lbnQub250b3VjaG1vdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50VG91Y2hEb3VibGUodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50VG91Y2hMb25nKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFRvdWNoKHRydWUsIGV2KTtcclxuICAgICAgICBkcmFnSW5pdEV2ZW50WCA9IHBvaW50ZXIucG9zWDtcclxuICAgICAgICBkcmFnSW5pdEV2ZW50WSA9IHBvaW50ZXIucG9zWTtcclxuICAgICAgICBkcmFnSW5pdFBvc1ggPSBwYXJzZUludCh0YXJnZXQuc3R5bGUubGVmdCwgMTApO1xyXG4gICAgICAgIGRyYWdJbml0UG9zWSA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS50b3AsIDEwKTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uTW92ZXJNb3VzZU1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBvbk1vdmVyVG91Y2hNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uTW92ZXJDbG9zZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25Nb3ZlckNsb3NlO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbk1vdmVyTW91c2VNb3ZlKGV2KSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudE1vdXNlUG9pbnQoZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdEV2ZW50WDtcclxuICAgICAgICB2YXIgZHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdEV2ZW50WTtcclxuICAgICAgICB2YXIgZHJhZ0ZpbmFsWCA9IGRyYWdJbml0UG9zWCArIGRyYWdEaWZYO1xyXG4gICAgICAgIHZhciBkcmFnRmluYWxZID0gZHJhZ0luaXRQb3NZICsgZHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSAoZHJhZ0ZpbmFsWCA+IDAgPyBkcmFnRmluYWxYIDogMCkgKyBcInB4XCI7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IChkcmFnRmluYWxZID4gMCA/IGRyYWdGaW5hbFkgOiAwKSArIFwicHhcIjtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJUb3VjaE1vdmUoZXYpIHtcclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50VG91Y2goZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdEV2ZW50WDtcclxuICAgICAgICB2YXIgZHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdEV2ZW50WTtcclxuICAgICAgICB2YXIgZHJhZ0ZpbmFsWCA9IGRyYWdJbml0UG9zWCArIGRyYWdEaWZYO1xyXG4gICAgICAgIHZhciBkcmFnRmluYWxZID0gZHJhZ0luaXRQb3NZICsgZHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSAoZHJhZ0ZpbmFsWCA+IDAgPyBkcmFnRmluYWxYIDogMCkgKyBcInB4XCI7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IChkcmFnRmluYWxZID4gMCA/IGRyYWdGaW5hbFkgOiAwKSArIFwicHhcIjtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJDbG9zZShldikge1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uc2hvd0FsbElGcmFtZXMoKTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkVuZCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25FbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkUmVzaXplcihzb3VyY2VzLCB0YXJnZXQsIGRyYWdDYWxscykge1xyXG4gICAgdmFyIGRyYWdJbml0RXZlbnRYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdEV2ZW50WSA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRXaWR0aCA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRIZWlnaHQgPSAwO1xyXG4gICAgZm9yIChsZXQgc291cmNlIG9mIHNvdXJjZXMpIHtcclxuICAgICAgICBzb3VyY2Uub25tb3VzZWRvd24gPSBvblJlc2l6ZXJNb3VzZUluaXQ7XHJcbiAgICAgICAgc291cmNlLm9udG91Y2hzdGFydCA9IG9uUmVzaXplclRvdWNoSW5pdDtcclxuICAgICAgICBzb3VyY2Uub25kcmFnc3RhcnQgPSBzdG9wRXZlbnQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblJlc2l6ZXJNb3VzZUluaXQoZXYpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQub25tb3VzZW1vdmUgfHwgZG9jdW1lbnQub250b3VjaG1vdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50TW91c2VEb3VibGUodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50TW91c2VMb25nKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudE1vdXNlUG9pbnQodHJ1ZSwgZXYpO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRYID0gcG9pbnRlci5wb3NYO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdJbml0V2lkdGggPSBwYXJzZUludCh0YXJnZXQuc3R5bGUud2lkdGgsIDEwKTtcclxuICAgICAgICBkcmFnSW5pdEhlaWdodCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS5oZWlnaHQsIDEwKTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uUmVzaXplck1vdXNlTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uUmVzaXplclRvdWNoTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvblJlc2l6ZXJDbG9zZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25SZXNpemVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplclRvdWNoSW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRUb3VjaERvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRUb3VjaExvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50VG91Y2godHJ1ZSwgZXYpO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRYID0gcG9pbnRlci5wb3NYO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdJbml0V2lkdGggPSBwYXJzZUludCh0YXJnZXQuc3R5bGUud2lkdGgsIDEwKTtcclxuICAgICAgICBkcmFnSW5pdEhlaWdodCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS5oZWlnaHQsIDEwKTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uUmVzaXplck1vdXNlTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uUmVzaXplclRvdWNoTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvblJlc2l6ZXJDbG9zZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25SZXNpemVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplck1vdXNlTW92ZShldikge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRNb3VzZVBvaW50KGZhbHNlLCBldik7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdEV2ZW50WDtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRGlmWSA9IHBvaW50ZXIucG9zWSAtIGRyYWdJbml0RXZlbnRZO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdGaW5hbFdpZHRoID0gZHJhZ0luaXRXaWR0aCArIGZyYW1lRHJhZ0RpZlg7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0ZpbmFsSGVpZ2h0ID0gZHJhZ0luaXRIZWlnaHQgKyBmcmFtZURyYWdEaWZZO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS53aWR0aCA9IChmcmFtZURyYWdGaW5hbFdpZHRoID4gMCA/IGZyYW1lRHJhZ0ZpbmFsV2lkdGggOiAwKSArIFwicHhcIjtcclxuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gKGZyYW1lRHJhZ0ZpbmFsSGVpZ2h0ID4gMCA/IGZyYW1lRHJhZ0ZpbmFsSGVpZ2h0IDogMCkgKyBcInB4XCI7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Nb3ZlKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbk1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblJlc2l6ZXJUb3VjaE1vdmUoZXYpIHtcclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50VG91Y2goZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRFdmVudFk7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0ZpbmFsV2lkdGggPSBkcmFnSW5pdFdpZHRoICsgZnJhbWVEcmFnRGlmWDtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRmluYWxIZWlnaHQgPSBkcmFnSW5pdEhlaWdodCArIGZyYW1lRHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gKGZyYW1lRHJhZ0ZpbmFsV2lkdGggPiAwID8gZnJhbWVEcmFnRmluYWxXaWR0aCA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAoZnJhbWVEcmFnRmluYWxIZWlnaHQgPiAwID8gZnJhbWVEcmFnRmluYWxIZWlnaHQgOiAwKSArIFwicHhcIjtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplckNsb3NlKGV2KSB7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5zaG93QWxsSUZyYW1lcygpO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRTY3JvbGxlcih0YXJnZXQsIGRyYWdDYWxscykge1xyXG4gICAgdmFyIGRyYWdJbml0WCA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRZID0gMDtcclxuICAgIHZhciBkcmFnU2Nyb2xsWCA9IDA7XHJcbiAgICB2YXIgZHJhZ1Njcm9sbFkgPSAwO1xyXG4gICAgdGFyZ2V0Lm9uZHJhZ3N0YXJ0ID0gc3RvcEV2ZW50O1xyXG4gICAgdGFyZ2V0Lm9ubW91c2Vkb3duID0gb25TY3JvbGxlck1vdXNlSW5pdDtcclxuICAgIHRhcmdldC5vbnRvdWNoc3RhcnQgPSBvblNjcm9sbGVyVG91Y2hJbml0O1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGxlck1vdXNlSW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRNb3VzZURvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRNb3VzZUxvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50TW91c2VQb2ludCh0cnVlLCBldik7XHJcbiAgICAgICAgZHJhZ0luaXRYID0gcG9pbnRlci5wb3NYO1xyXG4gICAgICAgIGRyYWdJbml0WSA9IHBvaW50ZXIucG9zWTtcclxuICAgICAgICBkcmFnU2Nyb2xsWCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIGRyYWdTY3JvbGxZID0gdGFyZ2V0LnNjcm9sbFRvcDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uU2Nyb2xsZXJNb3VzZU1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBvblNjcm9sbGVyVG91Y2hNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvblNjcm9sbGVyQ2xvc2U7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25TY3JvbGxlckNsb3NlO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbGVyVG91Y2hJbml0KGV2KSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudFRvdWNoRG91YmxlKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudFRvdWNoTG9uZyh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRUb3VjaCh0cnVlLCBldik7XHJcbiAgICAgICAgZHJhZ0luaXRYID0gcG9pbnRlci5wb3NYO1xyXG4gICAgICAgIGRyYWdJbml0WSA9IHBvaW50ZXIucG9zWTtcclxuICAgICAgICBkcmFnU2Nyb2xsWCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIGRyYWdTY3JvbGxZID0gdGFyZ2V0LnNjcm9sbFRvcDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uU2Nyb2xsZXJNb3VzZU1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBvblNjcm9sbGVyVG91Y2hNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uU2Nyb2xsZXJDbG9zZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25TY3JvbGxlckNsb3NlO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbGVyTW91c2VNb3ZlKGV2KSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudE1vdXNlUG9pbnQoZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdFg7XHJcbiAgICAgICAgdmFyIGRyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRZO1xyXG4gICAgICAgIHZhciBkcmFnTmV3WCA9IGRyYWdTY3JvbGxYIC0gZHJhZ0RpZlg7XHJcbiAgICAgICAgdmFyIGRyYWdOZXdZID0gZHJhZ1Njcm9sbFkgLSBkcmFnRGlmWTtcclxuICAgICAgICB0YXJnZXQuc2Nyb2xsVG8oZHJhZ05ld1gsIGRyYWdOZXdZKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJUb3VjaE1vdmUoZXYpIHtcclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50VG91Y2goZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdFg7XHJcbiAgICAgICAgdmFyIGRyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRZO1xyXG4gICAgICAgIHZhciBkcmFnTmV3WCA9IGRyYWdTY3JvbGxYIC0gZHJhZ0RpZlg7XHJcbiAgICAgICAgdmFyIGRyYWdOZXdZID0gZHJhZ1Njcm9sbFkgLSBkcmFnRGlmWTtcclxuICAgICAgICB0YXJnZXQuc2Nyb2xsVG8oZHJhZ05ld1gsIGRyYWdOZXdZKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJDbG9zZShldikge1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uc2hvd0FsbElGcmFtZXMoKTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkVuZCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25FbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5Bcm0gPSB7XHJcbiAgICBzdG9wRXZlbnQsXHJcbiAgICBtYWtlRXZlbnRNb3VzZVBvaW50LFxyXG4gICAgbWFrZUV2ZW50VG91Y2gsXHJcbiAgICBpc0V2ZW50TW91c2VEb3VibGUsXHJcbiAgICBpc0V2ZW50VG91Y2hEb3VibGUsXHJcbiAgICBpc0V2ZW50TW91c2VMb25nLFxyXG4gICAgaXNFdmVudFRvdWNoTG9uZyxcclxuICAgIGlzS2V5SW5MaXN0LFxyXG4gICAgaXNLZXlFbnRlcixcclxuICAgIGlzS2V5U3BhY2UsXHJcbiAgICBpc0ZpcnN0QnV0dG9uLFxyXG4gICAgaXNNaWRkbGVCdXR0b24sXHJcbiAgICBpc1NlY29uZEJ1dHRvbixcclxuICAgIGlzT25lRmluZ2VyLFxyXG4gICAgaXNUd29GaW5nZXJzLFxyXG4gICAgaXNUaHJlZUZpbmdlcnMsXHJcbiAgICBpc0ZvdXJGaW5nZXJzLFxyXG4gICAgaXNNYWluTW91c2UsXHJcbiAgICBpc01haW5Ub3VjaCxcclxuICAgIGlzTWlkaU1vdXNlLFxyXG4gICAgaXNNaWRpVG91Y2gsXHJcbiAgICBpc01lbnVNb3VzZSxcclxuICAgIGlzTWVudVRvdWNoLFxyXG4gICAgYWRkQWN0aW9uLFxyXG4gICAgYWRkQWN0aW9uTWFpbixcclxuICAgIGFkZEFjdGlvbk1haW5LZXksXHJcbiAgICBhZGRBY3Rpb25NYWluTW91c2UsXHJcbiAgICBhZGRBY3Rpb25NYWluVG91Y2gsXHJcbiAgICBhZGRBY3Rpb25NYWluUG9pbnQsXHJcbiAgICBhZGRBY3Rpb25NaWRpLFxyXG4gICAgYWRkQWN0aW9uTWlkaUtleSxcclxuICAgIGFkZEFjdGlvbk1pZGlNb3VzZSxcclxuICAgIGFkZEFjdGlvbk1pZGlUb3VjaCxcclxuICAgIGFkZEFjdGlvbk1pZGlQb2ludCxcclxuICAgIGFkZEFjdGlvbk1lbnUsXHJcbiAgICBhZGRBY3Rpb25NZW51S2V5LFxyXG4gICAgYWRkQWN0aW9uTWVudU1vdXNlLFxyXG4gICAgYWRkQWN0aW9uTWVudVRvdWNoLFxyXG4gICAgYWRkQWN0aW9uTWVudVBvaW50LFxyXG4gICAgYWRkQWN0aW9ucyxcclxuICAgIGFkZEFjdGlvbnNNYWluLFxyXG4gICAgYWRkQWN0aW9uc01haW5LZXksXHJcbiAgICBhZGRBY3Rpb25zTWFpblBvaW50LFxyXG4gICAgYWRkTW92ZXIsXHJcbiAgICBhZGRSZXNpemVyLFxyXG4gICAgYWRkU2Nyb2xsZXIsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1hcm0uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Cb2R5ID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBnZXRDb29raWUobmFtZSwgb3JEZWZhdWx0KSB7XHJcbiAgICBsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgY29va2llUGFpciA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgIGlmIChuYW1lID09IGRlY29kZVVSSUNvbXBvbmVudChjb29raWVQYWlyWzBdKS50cmltKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb29raWVQYWlyWzFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3JEZWZhdWx0O1xyXG59XHJcbmZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFwiL1wiIH0sIG9wdGlvbnMpO1xyXG4gICAgaWYgKCFvcHRpb25zLmV4cGlyZXMpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgMSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IGRhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgb3B0aW9uc1tcIlNhbWVTaXRlXCJdID0gXCJTdHJpY3RcIjtcclxuICAgIGxldCB1cGRhdGVkQ29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgZm9yIChsZXQgb3B0aW9uS2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiOyBcIiArIG9wdGlvbktleTtcclxuICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSBvcHRpb25zW29wdGlvbktleV07XHJcbiAgICAgICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI9XCIgKyBvcHRpb25WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVkQ29va2llICs9IFwiOyBTZWN1cmVcIjtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XHJcbn1cclxuZnVuY3Rpb24gZGVsQ29va2llKG5hbWUsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj07ICBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCI7XHJcbiAgICBpZiAob3B0aW9ucy5leHBpcmVzKSB7XHJcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZXhwaXJlcztcclxuICAgIH1cclxuICAgIGZvciAobGV0IG9wdGlvbktleSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBvcHRpb25LZXk7XHJcbiAgICAgICAgbGV0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tvcHRpb25LZXldO1xyXG4gICAgICAgIGlmIChvcHRpb25WYWx1ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiPVwiICsgb3B0aW9uVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcclxufVxyXG5mdW5jdGlvbiBnZXRUZXh0TGluZXMoZnJvbVRleHQpIHtcclxuICAgIHJldHVybiBmcm9tVGV4dC5tYXRjaCgvW15cXHJcXG5dKy9nKTtcclxufVxyXG5mdW5jdGlvbiBnZXRDU1ZSb3dzKGZyb21UZXh0LCBuYW1lcykge1xyXG4gICAgdmFyIGxpbmVzID0gZ2V0VGV4dExpbmVzKGZyb21UZXh0KTtcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIGZvciAobGV0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgICAgICBsZXQgcm93ID0gIW5hbWVzID8gW10gOiB7fTtcclxuICAgICAgICBsZXQgaW5zaWRlX3F1b3RlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjb2x1bW5fdmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGxldCBjb2x1bW5faW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGNoYXJfaW5kZXggPSAwOyBjaGFyX2luZGV4IDwgbGluZS5sZW5ndGg7IGNoYXJfaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgYWN0dWFsID0gbGluZS5jaGFyQXQoY2hhcl9pbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChpbnNpZGVfcXVvdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IGNoYXJfaW5kZXggPCBsaW5lLmxlbmd0aCAtIDEgPyBsaW5lLmNoYXJBdChjaGFyX2luZGV4ICsgMSkgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0ID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcl9pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zaWRlX3F1b3RlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSArPSBhY3R1YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnNpZGVfcXVvdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFjdHVhbCA9PSBcIixcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSA9IHVubWFza1NwZWNpYWxDaGFycyhjb2x1bW5fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmFtZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goY29sdW1uX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2x1bW5fbmFtZSA9IFwiY29sX1wiICsgY29sdW1uX2luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uX2luZGV4IDwgbmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5fbmFtZSA9IG5hbWVzW2NvbHVtbl9pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93W2NvbHVtbl9uYW1lXSA9IGNvbHVtbl92YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5faW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSArPSBhY3R1YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29sdW1uX3ZhbHVlID0gdW5tYXNrU3BlY2lhbENoYXJzKGNvbHVtbl92YWx1ZSk7XHJcbiAgICAgICAgaWYgKCFuYW1lcykge1xyXG4gICAgICAgICAgICByb3cucHVzaChjb2x1bW5fdmFsdWUpO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbl9uYW1lID0gXCJjb2xfXCIgKyBjb2x1bW5faW5kZXg7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW5faW5kZXggPCBuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbl9uYW1lID0gbmFtZXNbY29sdW1uX2luZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3dbY29sdW1uX25hbWVdID0gY29sdW1uX3ZhbHVlO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gbWFza1NwZWNpYWxDaGFycyhmcm9tVGV4dCkge1xyXG4gICAgcmV0dXJuIGZyb21UZXh0XHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcXCIsIFwiXFxcXFxcXFxcIilcclxuICAgICAgICAucmVwbGFjZShcIlxcclwiLCBcIlxcXFxyXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXG5cIiwgXCJcXFxcblwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsIFwiXFxcXHRcIik7XHJcbn1cclxuZnVuY3Rpb24gdW5tYXNrU3BlY2lhbENoYXJzKGZyb21UZXh0KSB7XHJcbiAgICByZXR1cm4gZnJvbVRleHRcclxuICAgICAgICAucmVwbGFjZShcIlxcXFxcXFxcXCIsIFwiXFxcXFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXHJcIiwgXCJcXHJcIilcclxuICAgICAgICAucmVwbGFjZShcIlxcXFxuXCIsIFwiXFxuXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcdFwiLCBcIlxcdFwiKTtcclxufVxyXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcnMoc291cmNlKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICBsZXQgb3BlbiA9IGZhbHNlO1xyXG4gICAgbGV0IGFjdHVhbCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IGxldHRlciBvZiBBcnJheS5mcm9tKHNvdXJjZSkpIHtcclxuICAgICAgICBpZiAob3Blbikge1xyXG4gICAgICAgICAgICBpZiAobGV0dGVyID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhY3R1YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWwgKz0gbGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobGV0dGVyID09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgIG9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFjdHVhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChsZXR0ZXIgPT0gXCIgXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhY3R1YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWwgKz0gbGV0dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnRzLlFpbkJvZHkgPSB7XHJcbiAgICBnZXRDb29raWUsXHJcbiAgICBzZXRDb29raWUsXHJcbiAgICBkZWxDb29raWUsXHJcbiAgICBnZXRUZXh0TGluZXMsXHJcbiAgICBnZXRDU1ZSb3dzLFxyXG4gICAgbWFza1NwZWNpYWxDaGFycyxcclxuICAgIHVubWFza1NwZWNpYWxDaGFycyxcclxuICAgIHBhcnNlUGFyYW1ldGVycyxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJvZHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Gb290ID0gZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc05hdHVyZSA9IHZvaWQgMDtcclxudmFyIFFpbkZpbGVzTmF0dXJlO1xyXG4oZnVuY3Rpb24gKFFpbkZpbGVzTmF0dXJlKSB7XHJcbiAgICBRaW5GaWxlc05hdHVyZVtcIkJPVEhcIl0gPSBcImJvdGhcIjtcclxuICAgIFFpbkZpbGVzTmF0dXJlW1wiRElSRUNUT1JJRVNcIl0gPSBcImRpcmVjdG9yaWVzXCI7XHJcbiAgICBRaW5GaWxlc05hdHVyZVtcIkZJTEVTXCJdID0gXCJmaWxlc1wiO1xyXG59KShRaW5GaWxlc05hdHVyZSA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgfHwgKGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSB7fSkpO1xyXG52YXIgUWluRmlsZXNPcGVyYXRpb247XHJcbihmdW5jdGlvbiAoUWluRmlsZXNPcGVyYXRpb24pIHtcclxuICAgIFFpbkZpbGVzT3BlcmF0aW9uW1wiT1BFTlwiXSA9IFwib3BlblwiO1xyXG4gICAgUWluRmlsZXNPcGVyYXRpb25bXCJTQVZFXCJdID0gXCJzYXZlXCI7XHJcbn0pKFFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiB8fCAoZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IHt9KSk7XHJcbmNsYXNzIFFpbkZpbGVzRGVzY3JpcHRvciB7XHJcbn1cclxuZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBRaW5GaWxlc0Rlc2NyaXB0b3I7XHJcbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG59XHJcbmZ1bmN0aW9uIGlzTG9jYWxIb3N0KCkge1xyXG4gICAgdmFyIGxvY2F0aW9uID0gZ2V0TG9jYXRpb24oKTtcclxuICAgIHZhciBzdGFydCA9IGxvY2F0aW9uLmluZGV4T2YoXCI6Ly9cIik7XHJcbiAgICBpZiAoc3RhcnQgPT0gLTEpIHtcclxuICAgICAgICBzdGFydCA9IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGFydCArPSAzO1xyXG4gICAgfVxyXG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbi5zdWJzdHJpbmcoc3RhcnQpO1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uLmluZGV4T2YoXCJsb2NhbGhvc3RcIikgPT09IDAgfHwgbG9jYXRpb24uaW5kZXhPZihcIjEyNy4wLjAuMVwiKSA9PT0gMDtcclxufVxyXG5mdW5jdGlvbiBnZXRTZXBhcmF0b3Iob2ZQYXRoKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCIvXCI7XHJcbiAgICBpZiAob2ZQYXRoICYmIG9mUGF0aC5pbmRleE9mKFwiXFxcXFwiKSA+IC0xKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJcXFxcXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGdldFBhdGhKb2luKHBhdGhBLCBwYXRoQikge1xyXG4gICAgaWYgKHBhdGhBID09IG51bGwgfHwgcGF0aEEgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGF0aEEgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhCID09IG51bGwgfHwgcGF0aEIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGF0aEIgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhBLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGhCO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGF0aEIubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gcGF0aEE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgdW5pb24gPSBcIi9cIjtcclxuICAgICAgICBpZiAocGF0aEEuaW5kZXhPZihcIlxcXFxcIikgPiAtMSB8fCBwYXRoQi5pbmRleE9mKFwiXFxcXFwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHVuaW9uID0gXCJcXFxcXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXRoQUVuZCA9IHBhdGhBLnN1YnN0cmluZyhwYXRoQS5sZW5ndGggLSAxLCBwYXRoQS5sZW5ndGgpO1xyXG4gICAgICAgIGxldCBwYXRoQlN0YXJ0ID0gcGF0aEIuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgICAgIGlmIChwYXRoQUVuZCA9PSB1bmlvbiB8fCBwYXRoQlN0YXJ0ID09IHVuaW9uKSB7XHJcbiAgICAgICAgICAgIHVuaW9uID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGhBICsgdW5pb24gKyBwYXRoQjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRQYXJlbnQocGF0aCkge1xyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgICBsZXQgc2VwYXJhdG9yID0gZ2V0U2VwYXJhdG9yKHBhdGgpO1xyXG4gICAgICAgIGxldCBsYXN0ID0gcGF0aC5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xyXG4gICAgICAgIGlmIChsYXN0ID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdGguc3Vic3RyaW5nKDAsIGxhc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG59XHJcbmZ1bmN0aW9uIGdldFN0ZW0ocGF0aCkge1xyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgICBsZXQgc2VwYXJhdG9yID0gZ2V0U2VwYXJhdG9yKHBhdGgpO1xyXG4gICAgICAgIGxldCBsYXN0ID0gcGF0aC5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xyXG4gICAgICAgIGlmIChsYXN0ID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdGguc3Vic3RyaW5nKGxhc3QgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxufVxyXG5mdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKG5hbWUpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IG5hbWUubGFzdEluZGV4T2YoXCIuXCIpO1xyXG4gICAgaWYgKHBvc2l0aW9uID4gLTEpIHtcclxuICAgICAgICByZXR1cm4gbmFtZS5zdWJzdHJpbmcocG9zaXRpb24gKyAxKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGFwcHNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJodG1cIiwgXCJodG1sXCIsIFwiY3NzXCIsIFwianNcIiwgXCJqc3hcIiwgXCJ0c1wiLCBcInRzeFwiLCBcInBodG1sXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlQXBwKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIGFwcHNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IGNtZHNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJoXCIsIFwiY1wiLCBcImhwcFwiLCBcImNwcFwiLCBcInJzXCIsIFwiamxcIixcclxuICAgIFwiY3NcIiwgXCJjc3Byb2pcIiwgXCJmc1wiLCBcIm1sXCIsIFwiZnNpXCIsIFwibWxpXCIsIFwiZnN4XCIsIFwiZnNzY3JpcHRcIixcclxuICAgIFwiamF2YVwiLCBcImd5XCIsIFwiZ3Z5XCIsIFwiZ3Jvb3Z5XCIsIFwic2NcIiwgXCJzY2FsYVwiLCBcImNsalwiLFxyXG4gICAgXCJweVwiLCBcInJ1YnlcIiwgXCJwaHBcIiwgXCJwaHRtbFwiLFxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVDbWQoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gY21kc0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgZXhlY0V4dGVuc2lvbnMgPSBbXHJcbiAgICBcImV4ZVwiLCBcImphclwiLCBcImNvbVwiLCBcImJhdFwiLCBcInNoXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlRXhlYyhleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBleGVjRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5jb25zdCBpbWFnZUV4dGVuc2lvbnMgPSBbXHJcbiAgICBcImpwZ1wiLCBcImpwZWdcIiwgXCJwbmdcIiwgXCJnaWZcIiwgXCJibXBcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVJbWFnZShleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBpbWFnZUV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgdmVjdG9yRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwic3ZnXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlVmVjdG9yKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIHZlY3RvckV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgbW92aWVFeHRlbnNpb25zID0gW1xyXG4gICAgXCJhdmlcIiwgXCJtcDRcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVNb3ZpZShleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBtb3ZpZUV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgbXVzaWNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJ3YXZcIiwgXCJtcDNcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVNdXNpYyhleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBtdXNpY0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgemlwcGVkRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiemlwXCIsIFwicmFyXCIsIFwiN3pcIiwgXCJ0YXJcIiwgXCJnelwiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZVppcHBlZChleHRlbnNpb24pIHtcclxuICAgIHJldHVybiB6aXBwZWRFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmV4cG9ydHMuUWluRm9vdCA9IHtcclxuICAgIGdldExvY2F0aW9uLFxyXG4gICAgaXNMb2NhbEhvc3QsXHJcbiAgICBnZXRTZXBhcmF0b3IsXHJcbiAgICBnZXRQYXRoSm9pbixcclxuICAgIGdldFBhcmVudCxcclxuICAgIGdldFN0ZW0sXHJcbiAgICBnZXRGaWxlRXh0ZW5zaW9uLFxyXG4gICAgaXNGaWxlQXBwLFxyXG4gICAgaXNGaWxlQ21kLFxyXG4gICAgaXNGaWxlRXhlYyxcclxuICAgIGlzRmlsZUltYWdlLFxyXG4gICAgaXNGaWxlVmVjdG9yLFxyXG4gICAgaXNGaWxlTW92aWUsXHJcbiAgICBpc0ZpbGVNdXNpYyxcclxuICAgIGlzRmlsZVppcHBlZCxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWZvb3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5IZWFkID0gZXhwb3J0cy5RaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluQm91bmRzID0gZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBleHBvcnRzLlFpblBvaW50ID0gdm9pZCAwO1xyXG5jbGFzcyBRaW5Qb2ludCB7XHJcbn1cclxuZXhwb3J0cy5RaW5Qb2ludCA9IFFpblBvaW50O1xyXG47XHJcbmNsYXNzIFFpbkRpbWVuc2lvbiB7XHJcbn1cclxuZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBRaW5EaW1lbnNpb247XHJcbjtcclxuY2xhc3MgUWluQm91bmRzIHtcclxufVxyXG5leHBvcnRzLlFpbkJvdW5kcyA9IFFpbkJvdW5kcztcclxuO1xyXG52YXIgUWluR3JhbmRldXI7XHJcbihmdW5jdGlvbiAoUWluR3JhbmRldXIpIHtcclxuICAgIFFpbkdyYW5kZXVyW1wiU01BTExcIl0gPSBcInNtYWxsXCI7XHJcbiAgICBRaW5HcmFuZGV1cltcIk1FRElVTVwiXSA9IFwibWVkaXVtXCI7XHJcbiAgICBRaW5HcmFuZGV1cltcIkxBUkdFXCJdID0gXCJsYXJnZVwiO1xyXG59KShRaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluR3JhbmRldXIgfHwgKGV4cG9ydHMuUWluR3JhbmRldXIgPSB7fSkpO1xyXG5mdW5jdGlvbiBnZXREZXNrQVBJKCkge1xyXG4gICAgdmFyIHdpbiA9IHdpbmRvdztcclxuICAgIGlmICh3aW4uZGVza0FQSSkge1xyXG4gICAgICAgIHJldHVybiB3aW4uZGVza0FQSTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHdpbiA9IHdpbmRvdy5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAod2luLmRlc2tBUEkpIHtcclxuICAgICAgICByZXR1cm4gd2luLmRlc2tBUEk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB3aW4gPSB3aW5kb3cudG9wO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbi5kZXNrQVBJKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbi5kZXNrQVBJO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5jb25zdCBsb2dnZWQgPSBbXTtcclxuZnVuY3Rpb24gZ2V0TG9nZ2VkKCkge1xyXG4gICAgcmV0dXJuIGxvZ2dlZDtcclxufVxyXG5mdW5jdGlvbiBsb2cobWVzc2FnZSkge1xyXG4gICAgbG9nZ2VkLnB1c2gobWVzc2FnZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKF8pIHsgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBnZXREZXNrQVBJKCkuc2VuZChcImxvZ09uTWFpblwiLCBtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChfKSB7IH1cclxufVxyXG5mdW5jdGlvbiBsb2dFcnJvcihlcnJvciwgb3JpZ2luKSB7XHJcbiAgICBsb2coZ2V0RXJyb3JNZXNzYWdlKGVycm9yLCBvcmlnaW4pKTtcclxufVxyXG5mdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZShcIlByb2JsZW0gd2l0aDpcIiwgZXJyb3IsIG9yaWdpbik7XHJcbn1cclxuZnVuY3Rpb24gbG9nV2FybmluZyhlcnJvciwgb3JpZ2luKSB7XHJcbiAgICBsb2coZ2V0V2FybmluZ01lc3NhZ2UoZXJyb3IsIG9yaWdpbikpO1xyXG59XHJcbmZ1bmN0aW9uIGdldFdhcm5pbmdNZXNzYWdlKGVycm9yLCBvcmlnaW4pIHtcclxuICAgIHJldHVybiBnZXRUcmVhdE1lc3NhZ2UoXCJDaGVja291dCB0aGlzOlwiLCBlcnJvciwgb3JpZ2luKTtcclxufVxyXG5mdW5jdGlvbiBsb2dTdXBwb3J0KGVycm9yLCBvcmlnaW4pIHtcclxuICAgIGxvZyhnZXRTdXBwb3J0TWVzc2FnZShlcnJvciwgb3JpZ2luKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U3VwcG9ydE1lc3NhZ2UoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZShcIk5lZWQgU3VwcG9ydCBvbjpcIiwgZXJyb3IsIG9yaWdpbik7XHJcbn1cclxuZnVuY3Rpb24gZ2V0VHJlYXRNZXNzYWdlKHByZWZpeCwgZXJyb3IsIG9yaWdpbikge1xyXG4gICAgdmFyIHJlc3VsdCA9IHByZWZpeCArIChlcnJvciA/IFwiIFwiICsgZXJyb3IudG9TdHJpbmcoKSA6IFwiXCIpO1xyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICB2YXIgZXJyb3JEYXRhID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBpZiAoISh0eXBlb2YgZXJyb3JEYXRhID09IFwic3RyaW5nXCIgfHwgZXJyb3JEYXRhIGluc3RhbmNlb2YgU3RyaW5nKSkge1xyXG4gICAgICAgICAgICBlcnJvckRhdGEgPSBKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgKz0gXCIgLSBEYXRhOiBcIiArIGVycm9yRGF0YTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICghKHR5cGVvZiBlcnJvciA9PSBcInN0cmluZ1wiIHx8IGVycm9yIGluc3RhbmNlb2YgU3RyaW5nKSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIgLSBEYXRhOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAob3JpZ2luKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IFwiIC0gT3JpZ2luOiBcIiArIG9yaWdpbjtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0YWNrID0gKG5ldyBFcnJvcihcIlwiKSkuc3RhY2s7XHJcbiAgICBpZiAoc3RhY2spIHtcclxuICAgICAgICByZXN1bHQgKz0gXCIgLSBTdGFjazogXCIgKyBzdGFjaztcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlRGV2VG9vbHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGdldERlc2tBUEkoKS5zZW5kKFwidG9nZ2xlRGV2VG9vbHNcIik7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGxvZ0Vycm9yKGUsIFwie3FpbnBlbC1yZXN9KEVyckNvZGUtMDAwMDAxKVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkhlYWQgPSB7XHJcbiAgICBnZXREZXNrQVBJLFxyXG4gICAgZ2V0TG9nZ2VkLFxyXG4gICAgbG9nLFxyXG4gICAgbG9nRXJyb3IsXHJcbiAgICBnZXRFcnJvck1lc3NhZ2UsXHJcbiAgICBsb2dXYXJuaW5nLFxyXG4gICAgZ2V0V2FybmluZ01lc3NhZ2UsXHJcbiAgICBsb2dTdXBwb3J0LFxyXG4gICAgZ2V0U3VwcG9ydE1lc3NhZ2UsXHJcbiAgICBnZXRUcmVhdE1lc3NhZ2UsXHJcbiAgICB0b2dnbGVEZXZUb29scyxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWhlYWQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Ta2luID0gZXhwb3J0cy5RaW5TdHlsZXMgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9hcm1fMSA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbmNvbnN0IHFpbl9oZWFkXzEgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcclxuZXhwb3J0cy5RaW5TdHlsZXMgPSB7XHJcbiAgICBDb2xvckZvcmVncm91bmQ6IFwiIzE4MDAyN2ZmXCIsXHJcbiAgICBDb2xvckJhY2tncm91bmQ6IFwiI2ZmZmNmOWZmXCIsXHJcbiAgICBDb2xvckluYWN0aXZlOiBcIiNmY2Y5ZmZmZlwiLFxyXG4gICAgQ29sb3JBY3RpdmU6IFwiI2ZkZWRlZGZmXCIsXHJcbiAgICBDb2xvckFjY2VudDogXCIjYWUwMDAwZmZcIixcclxuICAgIENvbG9yU2VsZWN0ZWQ6IFwiIzVkNzJkZThmXCIsXHJcbiAgICBGb250TmFtZTogXCJTb3VyY2VTYW5zUHJvXCIsXHJcbiAgICBGb250U2l6ZTogXCIxNnB4XCIsXHJcbn07XHJcbmZ1bmN0aW9uIHN0eWxlQXNCb2R5KGVsKSB7XHJcbiAgICBlbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIGVsLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xyXG4gICAgZWwuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCI5cHhcIjtcclxuICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbn1cclxuZnVuY3Rpb24gc3R5bGVBc0Jhc2UoZWwpIHtcclxuICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMXB4XCI7XHJcbiAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIzcHhcIjtcclxuICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgIGVsLnN0eWxlLmNvbG9yID0gZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JGb3JlZ3JvdW5kO1xyXG4gICAgZWwuc3R5bGUuZm9udEZhbWlseSA9IFwiU291cmNlU2Fuc1Byb1wiO1xyXG4gICAgZWwuc3R5bGUuZm9udFNpemUgPSBcIjE2cHhcIjtcclxufVxyXG5mdW5jdGlvbiBzdHlsZUFzRWRpdChlbCkge1xyXG4gICAgc3R5bGVBc0Jhc2UoZWwpO1xyXG4gICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyBleHBvcnRzLlFpblN0eWxlcy5Db2xvckZvcmVncm91bmQ7XHJcbiAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JJbmFjdGl2ZTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yQWN0aXZlO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JBY2NlbnQ7XHJcbiAgICB9KTtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuUWluU3R5bGVzLkNvbG9ySW5hY3RpdmU7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyBleHBvcnRzLlFpblN0eWxlcy5Db2xvckZvcmVncm91bmQ7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBzdHlsZU1heFNpemVGb3JOb3RPdmVyRmxvdyhlbCwgcGFyZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkQxXCIpO1xyXG4gICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRDI6IFwiICsgcGFyZW50KTtcclxuICAgIH1cclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBsZXQgbWF4V2lkdGggPSAwO1xyXG4gICAgICAgIGxldCBtYXhIZWlnaHQgPSAwO1xyXG4gICAgICAgIGxldCBpbWVkaWF0ZSA9IGVsO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aCArIGltZWRpYXRlLmNsaWVudExlZnQ7XHJcbiAgICAgICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCArIGltZWRpYXRlLmNsaWVudFRvcDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEMzogXCIgKyBtYXhXaWR0aCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRDQ6IFwiICsgbWF4SGVpZ2h0KTtcclxuICAgICAgICAgICAgaW1lZGlhdGUgPSBpbWVkaWF0ZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH0gd2hpbGUgKGltZWRpYXRlICE9IG51bGwgJiYgaW1lZGlhdGUgIT0gcGFyZW50KTtcclxuICAgICAgICBtYXhXaWR0aCA9IHBhcmVudC5jbGllbnRXaWR0aCAtIG1heFdpZHRoO1xyXG4gICAgICAgIG1heEhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQgLSBtYXhIZWlnaHQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJENTogXCIgKyBtYXhXaWR0aCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJENjogXCIgKyBtYXhIZWlnaHQpO1xyXG4gICAgICAgIGVsLnN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN0eWxlU2l6ZShlbCwgc2l6ZSkge1xyXG4gICAgaWYgKHNpemUpIHtcclxuICAgICAgICBpZiAoc2l6ZSBpbnN0YW5jZW9mIHFpbl9oZWFkXzEuUWluRGltZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZGltID0gZ2V0RGltZW5zaW9uU2l6ZShzaXplKTtcclxuICAgICAgICAgICAgZWwuc3R5bGUud2lkdGggPSBkaW0ud2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGRpbS5oZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN0eWxlRmxleE1heChlbCkge1xyXG4gICAgZWwuc3R5bGUuZmxleCA9IFwiMVwiO1xyXG59XHJcbmZ1bmN0aW9uIHN0eWxlRmxleE1pbihlbCkge1xyXG4gICAgZWwuc3R5bGUuZmxleCA9IFwiMFwiO1xyXG59XHJcbmZ1bmN0aW9uIGdldFdpbmRvd1NpemUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGdldFdpbmRvd1NpemVTdHlsZSgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gZ2V0V2luZG93U2l6ZSgpLndpZHRoO1xyXG4gICAgaWYgKHdpZHRoIDwgNjAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbl9oZWFkXzEuUWluR3JhbmRldXIuU01BTEw7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh3aWR0aCA8IDEwMDApIHtcclxuICAgICAgICByZXR1cm4gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5NRURJVU07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5MQVJHRTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBoaWRlQWxsSUZyYW1lcygpIHtcclxuICAgIHZhciBkb2NfaWZyYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaWZyYW1lXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2NfaWZyYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkb2NfaWZyYW1lID0gZG9jX2lmcmFtZXNbaV07XHJcbiAgICAgICAgZG9jX2lmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzaG93QWxsSUZyYW1lcygpIHtcclxuICAgIHZhciBkb2NfaWZyYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaWZyYW1lXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2NfaWZyYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkb2NfaWZyYW1lID0gZG9jX2lmcmFtZXNbaV07XHJcbiAgICAgICAgZG9jX2lmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGlzYWJsZVNlbGVjdGlvbihlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IFwibm9uZVwiO1xyXG4gICAgZWxlbWVudC5vbnNlbGVjdHN0YXJ0ID0gcWluX2FybV8xLlFpbkFybS5zdG9wRXZlbnQ7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24oKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMzYwKTtcclxufVxyXG5mdW5jdGlvbiBpc0VsZW1lbnRWaXNpYmxlSW5TY3JvbGwoZWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm9mZnNldFRvcCA8IGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5vZmZzZXRMZWZ0IDwgZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbExlZnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5jbGllbnRXaWR0aCA+XHJcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCAtXHJcbiAgICAgICAgICAgICAgICAoZWxlbWVudC5vZmZzZXRMZWZ0IC0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbExlZnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xpZW50SGVpZ2h0ID5cclxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodCAtXHJcbiAgICAgICAgICAgICAgICAoZWxlbWVudC5vZmZzZXRUb3AgLSBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiBwYXJzZUludChlbC5zdHlsZS53aWR0aCksXHJcbiAgICAgICAgaGVpZ2h0OiBwYXJzZUludChlbC5zdHlsZS5oZWlnaHQpLFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXREaW1lbnNpb25TaXplKHNpemUpIHtcclxuICAgIGlmIChzaXplID09IHFpbl9oZWFkXzEuUWluR3JhbmRldXIuTEFSR0UpIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uTGFyZ2UoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNpemUgPT0gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5NRURJVU0pIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uTWVkaXVtKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uU21hbGwoKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBkaW1lbnNpb25TbWFsbCA9IHtcclxuICAgIHdpZHRoOiAxNixcclxuICAgIGhlaWdodDogMTYsXHJcbn07XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvblNtYWxsKCkge1xyXG4gICAgcmV0dXJuIGRpbWVuc2lvblNtYWxsO1xyXG59XHJcbmNvbnN0IGRpbWVuc2lvbk1lZGl1bSA9IHtcclxuICAgIHdpZHRoOiAzMixcclxuICAgIGhlaWdodDogMzIsXHJcbn07XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvbk1lZGl1bSgpIHtcclxuICAgIHJldHVybiBkaW1lbnNpb25NZWRpdW07XHJcbn1cclxuY29uc3QgZGltZW5zaW9uTGFyZ2UgPSB7XHJcbiAgICB3aWR0aDogNjQsXHJcbiAgICBoZWlnaHQ6IDY0LFxyXG59O1xyXG5mdW5jdGlvbiBnZXREaW1lbnNpb25MYXJnZSgpIHtcclxuICAgIHJldHVybiBkaW1lbnNpb25MYXJnZTtcclxufVxyXG5leHBvcnRzLlFpblNraW4gPSB7XHJcbiAgICBzdHlsZXM6IGV4cG9ydHMuUWluU3R5bGVzLFxyXG4gICAgc3R5bGVBc0JvZHksXHJcbiAgICBzdHlsZUFzQmFzZSxcclxuICAgIHN0eWxlQXNFZGl0LFxyXG4gICAgc3R5bGVNYXhTaXplRm9yTm90T3ZlckZsb3csXHJcbiAgICBzdHlsZVNpemUsXHJcbiAgICBzdHlsZUZsZXhNYXgsXHJcbiAgICBzdHlsZUZsZXhNaW4sXHJcbiAgICBnZXRXaW5kb3dTaXplLFxyXG4gICAgZ2V0V2luZG93U2l6ZVN0eWxlLFxyXG4gICAgaGlkZUFsbElGcmFtZXMsXHJcbiAgICBzaG93QWxsSUZyYW1lcyxcclxuICAgIGRpc2FibGVTZWxlY3Rpb24sXHJcbiAgICBjbGVhclNlbGVjdGlvbixcclxuICAgIGlzRWxlbWVudFZpc2libGVJblNjcm9sbCxcclxuICAgIGdldERpbWVuc2lvbixcclxuICAgIGdldERpbWVuc2lvblNpemUsXHJcbiAgICBnZXREaW1lbnNpb25TbWFsbCxcclxuICAgIGdldERpbWVuc2lvbk1lZGl1bSxcclxuICAgIGdldERpbWVuc2lvbkxhcmdlLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc2tpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblNvdWwgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9hcm1fMSA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbmNvbnN0IHFpbl9ib2R5XzEgPSByZXF1aXJlKFwiLi9xaW4tYm9keVwiKTtcclxuY29uc3QgcWluX2Zvb3RfMSA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xyXG5jb25zdCBxaW5faGVhZF8xID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XHJcbmNvbnN0IHFpbl9za2luXzEgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuZXhwb3J0cy5RaW5Tb3VsID0ge1xyXG4gICAgYXJtOiBxaW5fYXJtXzEuUWluQXJtLFxyXG4gICAgYm9keTogcWluX2JvZHlfMS5RaW5Cb2R5LFxyXG4gICAgZm9vdDogcWluX2Zvb3RfMS5RaW5Gb290LFxyXG4gICAgaGVhZDogcWluX2hlYWRfMS5RaW5IZWFkLFxyXG4gICAgc2tpbjogcWluX3NraW5fMS5RaW5Ta2luLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc291bC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY2xhc3MgUWluU2NhZmZvbGQgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluQ29sdW1uIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5UYWJsZSgpO1xyXG4gICAgICAgIHRhYmxlLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGFibGUuc2V0SGVhZChbXCJOYW1lXCIsIFwiQWdlXCIsIFwiQ2l0eVwiXSk7XHJcbiAgICAgICAgdGFibGUuYWRkTGluZShbXCJKb2huXCIsIFwiMjVcIiwgXCJOZXcgWW9ya1wiXSk7XHJcbiAgICAgICAgdGFibGUuYWRkTGluZShbXCJKYW5lXCIsIFwiMjRcIiwgXCJQYXJpc1wiXSk7XHJcbiAgICAgICAgdGFibGUuYWRkTGluZShbXCJKYWNrXCIsIFwiMjZcIiwgXCJMb25kb25cIl0pO1xyXG4gICAgfVxyXG59XHJcbm5ldyBRaW5TY2FmZm9sZCgpLnN0eWxlLnB1dEFzQm9keSgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXX0=
