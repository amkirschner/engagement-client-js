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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.QueueStatus = factory(root.CallbackAndRelatedApIs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The QueueStatus model module.
   * @module model/QueueStatus
   * @version 3.0.000.19.011
   */

  /**
   * Constructs a new <code>QueueStatus</code>.
   * @alias module:model/QueueStatus
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>QueueStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QueueStatus} obj Optional instance to populate.
   * @return {module:model/QueueStatus} The populated <code>QueueStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ewt')) {
        obj['ewt'] = ApiClient.convertToType(data['ewt'], 'Number');
      }
      if (data.hasOwnProperty('offerImmediateCallback')) {
        obj['offerImmediateCallback'] = ApiClient.convertToType(data['offerImmediateCallback'], 'Boolean');
      }
      if (data.hasOwnProperty('offerScheduledCallback')) {
        obj['offerScheduledCallback'] = ApiClient.convertToType(data['offerScheduledCallback'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Current estimated wait time in seconds. If ewt is -1 and offerImmediateCallback is true, then that indicates that there has not been any interactions on the queue yet. If ewt is -1 and offerImmediateCallback is false, then that indicates that there are no agents logged to the queue.
   * @member {Number} ewt
   */
  exports.prototype['ewt'] = undefined;
  /**
   * True if the immediateCallbackEnabled setting is true for the queue and if booking an immediate callback at the current time is forecast to be made before the end of the office hours.
   * @member {Boolean} offerImmediateCallback
   */
  exports.prototype['offerImmediateCallback'] = undefined;
  /**
   * True if the scheduledCallbackEnabled setting for the queue is true.
   * @member {Boolean} offerScheduledCallback
   */
  exports.prototype['offerScheduledCallback'] = undefined;



  return exports;
}));


