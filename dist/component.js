/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/machine/driver-abiquo/component', ['exports', 'ember', 'ui/mixins/driver'], function (exports, _ember, _uiMixinsDriver) {

  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    driverName: 'abiquo',
/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = this.get('store').createRecord({
        type   : 'abiquoConfig',
        cpus   : 2,
        ram    : 2048,
        vapp   : "Rancher",
      });

      let type = 'host';

      if (!this.get('useHost')) {
        type = 'machine';
      }

      this.set('model', this.get('store').createRecord({
        type: type,
        'abiquoConfig': config,
      }));
    },

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = this.get('errors')||[];

      // Add more specific errors

      // Check something and add an error entry if it fails:
      // if ( parseInt(this.get('model.abiquoConfig.size'),10) < 1024 )
      // {
        // errors.push('Size must be at least 1024 MB');
      // }

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( errors.get('length') )
      {
        this.set('errors', errors);
        return false;
      }
      else
      {
        this.set('errors', null);
        return true;
      }
    },

    // Any computed properties or custom logic can go here
  });
});
;
define("ui/components/machine/driver-abiquo/template",["exports","ember","ui/mixins/driver"],function(exports,_ember,_uiMixinsDriver){

exports["default"] = Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@2.9.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 243,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","horizontal-form");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container-fluid");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("API");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Abiquo API URL");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-8 col-md-8");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-1 col-md-1 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Insecure");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-1 col-md-1");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("API Access. Use either OAuth or Basic Auth.");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("App Key");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Username");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("App Secret");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Password");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Access Token");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Access Token secret");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("Compute");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Virtual Datacenter");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Virtual Appliance");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Template name");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("CPUs");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Hardware Profile");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("RAM");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-group");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","input-group-addon");
      var el7 = dom.createTextNode("MB");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("Network");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Network name");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Allocate public IP?");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-1 col-md-1");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("Instance details");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("SSH username");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("SSH key filename");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-4 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-2 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Optional user data");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-10 col-md-10");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1]);
      var element2 = dom.childAt(element1, [6]);
      var element3 = dom.childAt(element1, [10]);
      var element4 = dom.childAt(element1, [12]);
      var element5 = dom.childAt(element1, [20]);
      var element6 = dom.childAt(element1, [24]);
      var element7 = dom.childAt(element1, [30]);
      var element8 = dom.childAt(element1, [34]);
      var morphs = new Array(23);
      morphs[0] = dom.createMorphAt(element1,2,2);
      morphs[1] = dom.createMorphAt(dom.childAt(element2, [3]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element2, [7]),1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element3, [3]),1,1);
      morphs[4] = dom.createMorphAt(dom.childAt(element3, [7]),1,1);
      morphs[5] = dom.createMorphAt(dom.childAt(element4, [3]),1,1);
      morphs[6] = dom.createMorphAt(dom.childAt(element4, [7]),1,1);
      morphs[7] = dom.createMorphAt(dom.childAt(element1, [14, 3]),1,1);
      morphs[8] = dom.createMorphAt(dom.childAt(element1, [16, 3]),1,1);
      morphs[9] = dom.createMorphAt(dom.childAt(element5, [3]),1,1);
      morphs[10] = dom.createMorphAt(dom.childAt(element5, [7]),1,1);
      morphs[11] = dom.createMorphAt(dom.childAt(element1, [22, 3]),1,1);
      morphs[12] = dom.createMorphAt(dom.childAt(element6, [3]),1,1);
      morphs[13] = dom.createMorphAt(dom.childAt(element6, [7]),1,1);
      morphs[14] = dom.createMorphAt(dom.childAt(element1, [26, 3, 1]),1,1);
      morphs[15] = dom.createMorphAt(dom.childAt(element7, [3]),1,1);
      morphs[16] = dom.createMorphAt(dom.childAt(element7, [7]),1,1);
      morphs[17] = dom.createMorphAt(dom.childAt(element8, [3]),1,1);
      morphs[18] = dom.createMorphAt(dom.childAt(element8, [7]),1,1);
      morphs[19] = dom.createMorphAt(dom.childAt(element1, [36, 3]),1,1);
      morphs[20] = dom.createMorphAt(element1,39,39);
      morphs[21] = dom.createMorphAt(element0,4,4);
      morphs[22] = dom.createMorphAt(element0,7,7);
      return morphs;
    },
    statements: [
      ["inline","partial",["host/add-common"],[],["loc",[null,[4,4],[4,33]]],0,0],
      ["inline","input",[],["type","text","class","form-control","placeholder","eg. https://some.domain.com/api","value",["subexpr","@mut",[["get","model.abiquoConfig.apiUrl",["loc",[null,[17,16],[17,41]]],0,0,0,0]],[],[],0,0]],["loc",[null,[14,8],[18,10]]],0,0],
      ["inline","input",[],["type","checkbox","name","apiInsecure","class","form-control","checked",["subexpr","@mut",[["get","model.abiquoConfig.apiInsecure",["loc",[null,[27,18],[27,48]]],0,0,0,0]],[],[],0,0]],["loc",[null,[24,8],[28,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.appKey",["loc",[null,[42,16],[42,41]]],0,0,0,0]],[],[],0,0]],["loc",[null,[40,8],[43,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.apiUsername",["loc",[null,[51,16],[51,46]]],0,0,0,0]],[],[],0,0]],["loc",[null,[49,8],[52,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.appSecret",["loc",[null,[62,16],[62,44]]],0,0,0,0]],[],[],0,0]],["loc",[null,[60,8],[63,10]]],0,0],
      ["inline","input",[],["type","password","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.apiPassword",["loc",[null,[71,16],[71,46]]],0,0,0,0]],[],[],0,0]],["loc",[null,[69,8],[72,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.accessToken",["loc",[null,[82,16],[82,46]]],0,0,0,0]],[],[],0,0]],["loc",[null,[80,8],[83,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.accessTokenSecret",["loc",[null,[93,16],[93,52]]],0,0,0,0]],[],[],0,0]],["loc",[null,[91,8],[94,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.vdc",["loc",[null,[108,16],[108,38]]],0,0,0,0]],[],[],0,0]],["loc",[null,[106,8],[109,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.vapp",["loc",[null,[117,16],[117,39]]],0,0,0,0]],[],[],0,0]],["loc",[null,[115,8],[118,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.templateName",["loc",[null,[128,16],[128,47]]],0,0,0,0]],[],[],0,0]],["loc",[null,[126,8],[129,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.cpus",["loc",[null,[140,16],[140,39]]],0,0,0,0]],[],[],0,0]],["loc",[null,[138,8],[141,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","placeholder","eg. t2.micro","value",["subexpr","@mut",[["get","model.abiquoConfig.hwprofile",["loc",[null,[150,16],[150,44]]],0,0,0,0]],[],[],0,0]],["loc",[null,[147,8],[151,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.ram",["loc",[null,[162,18],[162,40]]],0,0,0,0]],[],[],0,0]],["loc",[null,[160,10],[163,12]]],0,0],
      ["inline","input",[],["type","text","class","form-control","placeholder","Leave blank to use VDC default","value",["subexpr","@mut",[["get","model.abiquoConfig.network",["loc",[null,[180,16],[180,42]]],0,0,0,0]],[],[],0,0]],["loc",[null,[177,8],[181,10]]],0,0],
      ["inline","input",[],["type","checkbox","name","publicIp","class","form-control","checked",["subexpr","@mut",[["get","model.abiquoConfig.publicIp",["loc",[null,[190,18],[190,45]]],0,0,0,0]],[],[],0,0]],["loc",[null,[187,8],[191,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.sshUser",["loc",[null,[205,16],[205,42]]],0,0,0,0]],[],[],0,0]],["loc",[null,[203,8],[206,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","placeholder","Leave empty to auto generate an SSH key","value",["subexpr","@mut",[["get","model.abiquoConfig.sshKey",["loc",[null,[215,16],[215,41]]],0,0,0,0]],[],[],0,0]],["loc",[null,[212,8],[216,10]]],0,0],
      ["inline","textarea",[],["placeholder","Paste user data here","rows","10","class","form-control","value",["subexpr","@mut",[["get","model.abiquoConfig.userData",["loc",[null,[228,16],[228,43]]],0,0,0,0]],[],[],0,0]],["loc",[null,[224,8],[229,10]]],0,0],
      ["inline","partial",["host/add-options"],[],["loc",[null,[234,4],[234,34]]],0,0],
      ["inline","top-errors",[],["errors",["subexpr","@mut",[["get","errors",["loc",[null,[238,22],[238,28]]],0,0,0,0]],[],[],0,0]],["loc",[null,[238,2],[238,30]]],0,0],
      ["inline","save-cancel",[],["save","save","cancel","cancel"],["loc",[null,[241,2],[241,45]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));;

});
