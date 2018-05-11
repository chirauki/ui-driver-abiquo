/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/node-driver/driver-abiquo/component', ['exports', 'ember', 'shared/components/node-driver/driver-abiquo/component'], function (exports, _ember, _component) {
  exports['default'] = _component['default'];
});

define('shared/components/node-driver/driver-abiquo/component', ['exports', 'ember', 'shared/mixins/node-driver', 'shared/components/node-driver/driver-abiquo/template'], function (exports, _ember, _uiMixinsDriver, _template) {
/* ^--- And here */

  // You can put embmer object here
  var computed = Ember.computed;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;

/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    layout: _template.default,
    driverName: 'abiquo',
    config: alias('model.abiquoConfig'),
/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = this.get('store').createRecord({
        type   : 'abiquoConfig',
        cpus   : 2,
        ram    : 2048,
        vapp   : "Rancher",
      });

      set(this, 'model.abiquoConfig', config);
    },

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = get(this, 'errors')||[];
      if ( !get(this, 'model.name') ) {
        errors.push('Name is required');
      }

      // Add more specific errors

      // Check something and add an error entry if it fails:
      // if ( parseInt(this.get('model.abiquoConfig.size'),10) < 1024 )
      // {
        // errors.push('Size must be at least 1024 MB');
      // }

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( get(errors, 'length') )
      {
        set(this, 'errors', errors);
        return false;
      }
      else
      {
        set(this, 'errors', null);
        return true;
      }
    },

    // Any computed properties or custom logic can go here
  });
});
;
define("shared/components/node-driver/driver-abiquo/template",["exports"],function(exports){

exports["default"] = Ember.HTMLBars.template({"id":"TGo5pvjv","block":"{\"symbols\":[],\"statements\":[[6,\"section\"],[10,\"class\",\"horizontal-form\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"container-fluid\"],[8],[0,\"\\n\"],[0,\"    \"],[14,\"host/add-common\",[]],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"over-hr r-mt20 r-mb20\"],[8],[0,\"\\n      \"],[6,\"span\"],[8],[0,\"API\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Abiquo API URL\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-8 col-md-8\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"eg. https://some.domain.com/api\",[22,[\"model\",\"abiquoConfig\",\"apiUrl\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-1 col-md-1 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Insecure\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-1 col-md-1\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"name\",\"class\",\"checked\"],[\"checkbox\",\"apiInsecure\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"apiInsecure\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"over-hr r-mt20 r-mb20\"],[8],[0,\"\\n      \"],[6,\"span\"],[8],[0,\"API Access. Use either OAuth or Basic Auth.\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"App Key\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"appKey\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Username\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"apiUsername\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"App Secret\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"appSecret\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Password\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"password\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"apiPassword\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Access Token\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"accessToken\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Access Token secret\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"accessTokenSecret\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"over-hr r-mt20 r-mb20\"],[8],[0,\"\\n      \"],[6,\"span\"],[8],[0,\"Compute\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Virtual Datacenter\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"vdc\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Virtual Appliance\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"vapp\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Template name\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"templateName\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"CPUs\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"cpus\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Hardware Profile\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"eg. t2.micro\",[22,[\"model\",\"abiquoConfig\",\"hwprofile\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"RAM\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"input-group\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"ram\"]]]]],false],[0,\"\\n          \"],[6,\"span\"],[10,\"class\",\"input-group-addon\"],[8],[0,\"MB\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"over-hr r-mt20 r-mb20\"],[8],[0,\"\\n      \"],[6,\"span\"],[8],[0,\"Network\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Network name\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Leave blank to use VDC default\",[22,[\"model\",\"abiquoConfig\",\"network\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Allocate public IP?\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-1 col-md-1\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"name\",\"class\",\"checked\"],[\"checkbox\",\"publicIp\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"publicIp\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"over-hr r-mt20 r-mb20\"],[8],[0,\"\\n      \"],[6,\"span\"],[8],[0,\"Instance details\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"SSH username\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"value\"],[\"text\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"sshUser\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"SSH key filename\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-4 col-md-4\"],[8],[0,\"\\n        \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"Leave empty to auto generate an SSH key\",[22,[\"model\",\"abiquoConfig\",\"sshKey\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-2 col-md-2 form-label\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"class\",\"form-control-static\"],[8],[0,\"Optional user data\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-sm-10 col-md-10\"],[8],[0,\"\\n        \"],[1,[26,\"textarea\",null,[[\"placeholder\",\"rows\",\"class\",\"value\"],[\"Paste user data here\",\"10\",\"form-control\",[22,[\"model\",\"abiquoConfig\",\"userData\"]]]]],false],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[0,\"    \"],[14,\"host/add-options\",[]],[0,\"\\n  \"],[9],[0,\"\\n\\n\"],[0,\"  \"],[1,[26,\"top-errors\",null,[[\"errors\"],[[22,[\"errors\"]]]]],false],[0,\"\\n\\n\"],[0,\"  \"],[1,[26,\"save-cancel\",null,[[\"save\",\"cancel\"],[\"save\",\"cancel\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":true}","meta":{}});;

});
