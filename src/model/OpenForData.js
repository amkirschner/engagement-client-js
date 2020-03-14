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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.OpenForData = factory(root.CallbackAndRelatedApIs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OpenForData model module.
   * @module model/OpenForData
   * @version 3.0.000.19.015
   */

  /**
   * Constructs a new <code>OpenForData</code>.
   * @alias module:model/OpenForData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OpenForData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OpenForData} obj Optional instance to populate.
   * @return {module:model/OpenForData} The populated <code>OpenForData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('openFor')) {
        obj['openFor'] = ApiClient.convertToType(data['openFor'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Time in seconds before the office closes.
   * @member {Number} openFor
   */
  exports.prototype['openFor'] = undefined;



  return exports;
}));


