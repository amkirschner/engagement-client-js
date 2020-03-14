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
    root.CallbackAndRelatedApIs.VerifyCaptchaRequestsStatus500 = factory(root.CallbackAndRelatedApIs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VerifyCaptchaRequestsStatus500 model module.
   * @module model/VerifyCaptchaRequestsStatus500
   * @version 3.0.000.19.015
   */

  /**
   * Constructs a new <code>VerifyCaptchaRequestsStatus500</code>.
   * @alias module:model/VerifyCaptchaRequestsStatus500
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>VerifyCaptchaRequestsStatus500</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VerifyCaptchaRequestsStatus500} obj Optional instance to populate.
   * @return {module:model/VerifyCaptchaRequestsStatus500} The populated <code>VerifyCaptchaRequestsStatus500</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('corrId')) {
        obj['corrId'] = ApiClient.convertToType(data['corrId'], 'String');
      }
    }
    return obj;
  }

  /**
   * GES Status code.
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Cause of failure
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Server-side correlation ID associated with the request.
   * @member {String} corrId
   */
  exports.prototype['corrId'] = undefined;



  return exports;
}));


