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
    define(['ApiClient', 'model/EstimatedWaitTimeResponse200', 'model/EstimatedWaitTimeResponse400', 'model/EstimatedWaitTimeResponse500'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EstimatedWaitTimeResponse200'), require('../model/EstimatedWaitTimeResponse400'), require('../model/EstimatedWaitTimeResponse500'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.EstimatedWaitTimeApi = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.EstimatedWaitTimeResponse200, root.CallbackAndRelatedApIs.EstimatedWaitTimeResponse400, root.CallbackAndRelatedApIs.EstimatedWaitTimeResponse500);
  }
}(this, function(ApiClient, EstimatedWaitTimeResponse200, EstimatedWaitTimeResponse400, EstimatedWaitTimeResponse500) {
  'use strict';

  /**
   * EstimatedWaitTime service.
   * @module api/EstimatedWaitTimeApi
   * @version 3.0.000.19.011
   */

  /**
   * Constructs a new EstimatedWaitTimeApi. 
   * @alias module:api/EstimatedWaitTimeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Retrieves the estimated wait time for one or more virtual queues.
     * Retrieves the estimated wait time for one or more virtual queues.
     * @param {String} xApiKey API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep
     * @param {String} virtualQueues One or more virtual queue names specified as a comma-delimited string.
     * @param {Object} opts Optional parameters
     * @param {String} opts.mode EstimatedWaitTime calculation mode. You can set this value to mode1, mode2, or mode3. If not specified, the default value is mode2. If mode&#x3D;mode1, the system checks how fast interactions go through the virtual queue and how many interactions are still pending. Note that mode1 only considers that last 32 interactions in the queue. The system ignores the current agent availability and does not immediately adjust the EstimatedWaitTime if, for example, all of the agents handling the queue suddenly logout. If mode&#x3D;mode2, the system checks how fast interactions go through the virtual queue and how many interactions are pending. Additionally, the system takes into account the agents who have historically been handling interactions of the Virtual Queue. If there are no agents logged in, a value of -1 is returned. If mode&#x3D;mode3, the statistics calculation from the Statistics Server, and not from the Routing Server, are used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EstimatedWaitTimeResponse200} and HTTP response
     */
    this.estimatedWaitTimeAPI1WithHttpInfo = function(xApiKey, virtualQueues, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling estimatedWaitTimeAPI1");
      }

      // verify the required parameter 'virtualQueues' is set
      if (virtualQueues === undefined || virtualQueues === null) {
        throw new Error("Missing the required parameter 'virtualQueues' when calling estimatedWaitTimeAPI1");
      }


      var pathParams = {
      };
      var queryParams = {
        'virtual-queues': virtualQueues,
        'mode': opts['mode'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-api-key': xApiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EstimatedWaitTimeResponse200;

      return this.apiClient.callApi(
        '/estimated-wait-time', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves the estimated wait time for one or more virtual queues.
     * Retrieves the estimated wait time for one or more virtual queues.
     * @param {String} xApiKey API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep
     * @param {String} virtualQueues One or more virtual queue names specified as a comma-delimited string.
     * @param {Object} opts Optional parameters
     * @param {String} opts.mode EstimatedWaitTime calculation mode. You can set this value to mode1, mode2, or mode3. If not specified, the default value is mode2. If mode&#x3D;mode1, the system checks how fast interactions go through the virtual queue and how many interactions are still pending. Note that mode1 only considers that last 32 interactions in the queue. The system ignores the current agent availability and does not immediately adjust the EstimatedWaitTime if, for example, all of the agents handling the queue suddenly logout. If mode&#x3D;mode2, the system checks how fast interactions go through the virtual queue and how many interactions are pending. Additionally, the system takes into account the agents who have historically been handling interactions of the Virtual Queue. If there are no agents logged in, a value of -1 is returned. If mode&#x3D;mode3, the statistics calculation from the Statistics Server, and not from the Routing Server, are used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EstimatedWaitTimeResponse200}
     */
    this.estimatedWaitTimeAPI1 = function(xApiKey, virtualQueues, opts) {
      return this.estimatedWaitTimeAPI1WithHttpInfo(xApiKey, virtualQueues, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
