'use strict';

const Homey = require('homey');
const ZigBeeDevice = require('homey-meshdriver').ZigBeeDevice;

const maxBrightness = 255;

class ESH316GLEDREMOTE extends ZigBeeDevice {


  	// this method is called when the Device is inited
  	onMeshInit() {

      this.enableDebug();
  		this.printNode();

      this.node.on('command', (command) => {
        this.log(command);
      });

            // register a capability listener
            /*this.registerCapabilityListener('onoff', this.onCapabilityOnoff.bind(this));
            this.registerCapabilityListener('dim', this.onCapabilitydim.bind(this))*/


            //register att reportlisteners for onoff
            this.registerAttrReportListener('genOnOff', 'onOff', 2, 300, 1, value => {
              this.log('onoff', value);
              this.setCapabilityValue('onoff', value === 1);
            }, 0);


            //register att reportlisteners for dim
            this.registerAttrReportListener('genLevelCtrl', 'currentLevel', 2, 300, 1, value => {
              this.log('dim report', value);
              this.setCapabilityValue('dim', value / maxBrightness);
            }, 0);
          }


      }
 module.exports = ESH316GLEDREMOTE;

 /*2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ZigBeeDevice has been inited
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ------------------------------------------
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] Node: 21eb127a-14ff-4e07-8d8f-7167630c04b1
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] - Battery: true
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] - Endpoints: 0
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] -- Clusters:
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- zapp
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- genBasic
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- cid : genBasic
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- sid : attrs
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- zclVersion : 1
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- appVersion : 0
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- hwVersion : 1
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- manufacturerName : ELKO
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- modelId : ElkoDimmerRemoteZHA
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- powerSource : 3
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- swBuildId : 0.0.14
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- genIdentify
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- cid : genIdentify
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- sid : attrs
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- identifyTime : 0
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- genOnOff
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- cid : genOnOff
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- sid : attrs
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- onOff : null
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] --- genLevelCtrl
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- cid : genLevelCtrl
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ---- sid : attrs
2019-03-07 11:40:22 [log] [ManagerDrivers] [ESH316GLEDREMOTE] [0] ----------------------------------------
 */
