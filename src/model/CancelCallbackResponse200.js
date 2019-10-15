/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.000.19.011
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
    define(['ApiClient', 'model/CancelCallbackData', 'model/SuccessStatus200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CancelCallbackData'), require('./SuccessStatus200'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.CancelCallbackResponse200 = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.CancelCallbackData, root.CallbackAndRelatedApIs.SuccessStatus200);
  }
}(this, function(ApiClient, CancelCallbackData, SuccessStatus200) {
  'use strict';




  /**
   * The CancelCallbackResponse200 model module.
   * @module model/CancelCallbackResponse200
   * @version 3.0.000.19.011
   */

  /**
   * Constructs a new <code>CancelCallbackResponse200</code>.
   * @alias module:model/CancelCallbackResponse200
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CancelCallbackResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CancelCallbackResponse200} obj Optional instance to populate.
   * @return {module:model/CancelCallbackResponse200} The populated <code>CancelCallbackResponse200</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = SuccessStatus200.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = CancelCallbackData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SuccessStatus200} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/CancelCallbackData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


