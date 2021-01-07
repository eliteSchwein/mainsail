import Vue from 'vue'

import GeneralPanel from './GeneralPanel'
import WebcamPanel from './WebcamPanel'
import ScalePanel from './ScalePanel'
import DashboardPanel from "./DashboardPanel";
import ConsolePanel from "./ConsolePanel";
import MacrosPanel from "./MacrosPanel";
import EndstopPanel from "./EndstopPanel";
import LimitsPanel from "./LimitsPanel";
import ConfigFilesPanel from "./ConfigFilesPanel";
import RunoutPanel from "./RunoutPanel";
import LogfilesPanel from "./LogfilesPanel";
import UpdatePanel from "./UpdatePanel";
import PreheatPanel from "./PreheatPanel";
import ModuleUrlPanel from "./ModuleUrlPanel";
import NeopixelPanel from "./NeopixelPanel";

Vue.component('settings-general-panel', GeneralPanel);
Vue.component('settings-webcam-panel', WebcamPanel);
Vue.component('settings-scale-panel', ScalePanel);
Vue.component('settings-dashboard-panel', DashboardPanel);
Vue.component('settings-console-panel', ConsolePanel);
Vue.component('settings-macros-panel', MacrosPanel);
Vue.component('settings-endstop-panel', EndstopPanel);
Vue.component('settings-limits-panel', LimitsPanel);
Vue.component('settings-runout-panel', RunoutPanel);
Vue.component('settings-logfiles-panel', LogfilesPanel);
Vue.component('settings-preheat-panel',PreheatPanel)
Vue.component('settings-config-files-panel', ConfigFilesPanel);
Vue.component('settings-update-panel', UpdatePanel);
Vue.component('settings-module-url', ModuleUrlPanel);
Vue.component('settings-neopixel', NeopixelPanel);

export default {

}