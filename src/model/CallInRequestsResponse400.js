/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.000.19.015
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
    define(['ApiClient', 'model/CallInRequestsStatus400'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CallInRequestsStatus400'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.CallInRequestsResponse400 = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.CallInRequestsStatus400);
  }
}(this, function(ApiClient, CallInRequestsStatus400) {
  'use strict';




  /**
   * The CallInRequestsResponse400 model module.
   * @module model/CallInRequestsResponse400
   * @version 3.0.000.19.015
   */

  /**
   * Constructs a new <code>CallInRequestsResponse400</code>.
   * @alias module:model/CallInRequestsResponse400
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CallInRequestsResponse400</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallInRequestsResponse400} obj Optional instance to populate.
   * @return {module:model/CallInRequestsResponse400} The populated <code>CallInRequestsResponse400</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = CallInRequestsStatus400.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CallInRequestsStatus400} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


