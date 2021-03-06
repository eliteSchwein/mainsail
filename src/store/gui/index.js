import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export function getDefaultState() {
	return {
		general: {
			printername: "",
		},
		dashboard: {
			boolWebcam: false,
			boolTempchart: true,
			boolConsole: true,
			boolScale: false,
			boolScaleAvailable: false,
			boolNeopixelCenterAvailable: false,
			hiddenMacros: [],
			hiddenTempChart: [],
		},
		neopixel:{
			swatches:[
				['#FF0000FF', '#AA0000FF', '#550000FF'],
				['#FFFF00FF', '#AAAA00FF', '#555500FF'],
				['#00FF00FF', '#00AA00FF', '#005500FF'],
				['#00FFFFFF', '#00AAAAFF', '#005555FF'],
				['#0000FFFF', '#0000AAFF', '#000055FF'],
				['#8A00FFFF', '#5D01ABFF', '#2B014FFF'],
				['#F600FFFF', '#9F01A4FF', '#460048FF'],
				['#FFCB5FFF', '#FFFFFFFF', '#A5FFFFFF'],
			],
			stripname:"",
		},
		modules: {
			scaleUrl: "",
		},
		scale: {
			calibrateweight1: 0,
			offset1: 0,
			referenceunit1: 0,
			raw1: 0,
			tare1: 0,
			position1: '',
			calibrateweight2: 0,
			offset2: 0,
			referenceunit2: 0,
			raw2: 0,
			tare2: 0,
			position2: '',
		},
		webcam: {
			url: "",
			rotate: false,
			rotateDegrees: 90,
			flipX: false,
			flipY: false,
			bool: false,
		},
		console: {
			hideWaitTemperatures: true,
			boolCustomFilters: false,
			customFilters: "",
		},
		gcodefiles: {
			countPerPage: 10,
			showHiddenFiles: false,
			hideMetadataColums: []
		},
		settings: {
			configfiles: {
				countPerPage: 10,
				showHiddenFiles: false,
			}
		},
		remotePrinters: [],
		presets: [],
		cooldownGcode: "TURN_OFF_HEATERS"
	}
}


// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}