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
    define(['ApiClient', 'model/CallInRequestsParms', 'model/CallInRequestsResponse200', 'model/CallInRequestsResponse400', 'model/CallInRequestsResponse500'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CallInRequestsParms'), require('../model/CallInRequestsResponse200'), require('../model/CallInRequestsResponse400'), require('../model/CallInRequestsResponse500'));
  } else {
    // Browser globals (root is window)
    if (!root.CallbackAndRelatedApIs) {
      root.CallbackAndRelatedApIs = {};
    }
    root.CallbackAndRelatedApIs.CallInApi = factory(root.CallbackAndRelatedApIs.ApiClient, root.CallbackAndRelatedApIs.CallInRequestsParms, root.CallbackAndRelatedApIs.CallInRequestsResponse200, root.CallbackAndRelatedApIs.CallInRequestsResponse400, root.CallbackAndRelatedApIs.CallInRequestsResponse500);
  }
}(this, function(ApiClient, CallInRequestsParms, CallInRequestsResponse200, CallInRequestsResponse400, CallInRequestsResponse500) {
  'use strict';

  /**
   * CallIn service.
   * @module api/CallInApi
   * @version 3.0.000.19.015
   */

  /**
   * Constructs a new CallInApi. 
   * @alias module:api/CallInApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Creates a Click-to-call-in request.
     * Creates a Click-To-Call-in request to retrieve the inbound call instructions such as the number to dial and an optional pin.
     * @param {String} xApiKey API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep
     * @param {module:model/CallInRequestsParms} body Request properties.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CallInRequestsResponse200} and HTTP response
     */
    this.callInRequestsWithHttpInfo = function(xApiKey, body) {
      var postBody = body;

      // verify the required parameter 'xApiKey' is set
      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling callInRequests");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling callInRequests");
      }


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = CallInRequestsResponse200;

      return this.apiClient.callApi(
        '/call-in/requests/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a Click-to-call-in request.
     * Creates a Click-To-Call-in request to retrieve the inbound call instructions such as the number to dial and an optional pin.
     * @param {String} xApiKey API Key. For example,  Z2y9eiTiQZ4ceKNpxy1YAarhpvxJXPCj4rFrbVep
     * @param {module:model/CallInRequestsParms} body Request properties.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CallInRequestsResponse200}
     */
    this.callInRequests = function(xApiKey, body) {
      return this.callInRequestsWithHttpInfo(xApiKey, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
