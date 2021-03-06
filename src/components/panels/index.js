import Vue from 'vue'

import StatusPanel from './StatusPanel.vue'
import KlippyStatePanel from './KlippyStatePanel.vue'
import MinSettingsPanel from './MinSettingsPanel.vue'
import MoonrakerFailedPluginsPanel from './MoonrakerFailedPluginsPanel.vue'
import ToolsPanel from './ToolsPanel.vue'
import ControlPanel from "./ControlPanel";
import ExtruderPanel from "./ExtruderPanel";
import ZOffsetPanel from "./ZOffsetPanel";
import Miscellaneous from "./MiscellaneousPanel";
import WebcamPanel from "./WebcamPanel";
import ScalePanel from "./ScalePanel";
import MiniconsolePanel from "./MiniconsolePanel";
import Settings from "./Settings/";
import PowerControlPanel from "./PowerControlPanel.vue";
import NeopixelPanel from "./NeopixelPanel.vue";

Vue.component('status-panel', StatusPanel);
Vue.component('klippy-state-panel', KlippyStatePanel);
Vue.component('min-settings-panel', MinSettingsPanel);
Vue.component('moonraker-failed-plugins-panel', MoonrakerFailedPluginsPanel);
Vue.component('tools-panel', ToolsPanel);
Vue.component('control-panel', ControlPanel);
Vue.component('extruder-panel', ExtruderPanel);
Vue.component('zoffset-panel', ZOffsetPanel);
Vue.component('miscellaneous-panel', Miscellaneous);
Vue.component('webcam-panel', WebcamPanel);
Vue.component('scale-panel', ScalePanel);
Vue.component('miniconsole-panel', MiniconsolePanel);
Vue.component('power-control-panel', PowerControlPanel);
Vue.component('neopixel-panel', NeopixelPanel);

export default {
    Settings,
}