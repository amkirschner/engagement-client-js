/**
 * Callback and Related APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 9.0.18
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CallbackAndRelatedApIs);
  }
}(this, function(expect, CallbackAndRelatedApIs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CallbackAndRelatedApIs.Slot();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Slot', function() {
    it('should create an instance of Slot', function() {
      // uncomment below and update the code to test Slot
      //var instance = new CallbackAndRelatedApIs.Slot();
      //expect(instance).to.be.a(CallbackAndRelatedApIs.Slot);
    });

    it('should have the property utcTime (base name: "utcTime")', function() {
      // uncomment below and update the code to test the property utcTime
      //var instance = new CallbackAndRelatedApIs.Slot();
      //expect(instance).to.be();
    });

    it('should have the property localTime (base name: "localTime")', function() {
      // uncomment below and update the code to test the property localTime
      //var instance = new CallbackAndRelatedApIs.Slot();
      //expect(instance).to.be();
    });

    it('should have the property capacity (base name: "capacity")', function() {
      // uncomment below and update the code to test the property capacity
      //var instance = new CallbackAndRelatedApIs.Slot();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new CallbackAndRelatedApIs.Slot();
      //expect(instance).to.be();
    });

  });

}));
