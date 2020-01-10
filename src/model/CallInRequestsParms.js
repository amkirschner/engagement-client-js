/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.000.19.014
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
    root.CallbackAndRelatedApIs.CallInRequestsParms = factory(root.CallbackAndRelatedApIs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CallInRequestsParms model module.
   * @module model/CallInRequestsParms
   * @version 3.0.000.19.014
   */

  /**
   * Constructs a new <code>CallInRequestsParms</code>.
   * @alias module:model/CallInRequestsParms
   * @class
   * @param groupName {String} Name of the Click-To-Call-In resource group.
   */
  var exports = function(groupName) {
    var _this = this;

    _this['groupName'] = groupName;



  };

  /**
   * Constructs a <code>CallInRequestsParms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallInRequestsParms} obj Optional instance to populate.
   * @return {module:model/CallInRequestsParms} The populated <code>CallInRequestsParms</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('fromPhoneNumber')) {
        obj['fromPhoneNumber'] = ApiClient.convertToType(data['fromPhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('userData')) {
        obj['userData'] = ApiClient.convertToType(data['userData'], 'String');
      }
      if (data.hasOwnProperty('callbackServiceId')) {
        obj['callbackServiceId'] = ApiClient.convertToType(data['callbackServiceId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the Click-To-Call-In resource group.
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;
  /**
   * Phone number associated with the request.
   * @member {String} fromPhoneNumber
   */
  exports.prototype['fromPhoneNumber'] = undefined;
  /**
   * A hash map of user-specific data associated with the request. System accepts only hash key names that match valid JavaScript variable names and ignores other names. For privacy reasons, the system does not write all the user data in the application's log files.
   * @member {String} userData
   */
  exports.prototype['userData'] = undefined;
  /**
   * A valid callback ID that will be associated with this Click-To-Call-In request.
   * @member {String} callbackServiceId
   */
  exports.prototype['callbackServiceId'] = undefined;



  return exports;
}));


