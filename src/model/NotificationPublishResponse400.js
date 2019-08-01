/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.000.19.010
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NotificationPublishStatus400'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NotificationPublishStatus400'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.NotificationPublishResponse400 = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.NotificationPublishStatus400);
  }
}(this, function(ApiClient, NotificationPublishStatus400) {
  'use strict';




  /**
   * The NotificationPublishResponse400 model module.
   * @module model/NotificationPublishResponse400
   * @version 3.0.000.19.010
   */

  /**
   * Constructs a new <code>NotificationPublishResponse400</code>.
   * @alias module:model/NotificationPublishResponse400
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NotificationPublishResponse400</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationPublishResponse400} obj Optional instance to populate.
   * @return {module:model/NotificationPublishResponse400} The populated <code>NotificationPublishResponse400</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = NotificationPublishStatus400.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/NotificationPublishStatus400} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


