'use strict';

describe('Service: checkVehicle', function () {

  // load the service's module
  beforeEach(module('marktplaatsIacVerkoopApp'));

  // instantiate service
  var checkVehicle;
  beforeEach(inject(function (_checkVehicle_) {
    checkVehicle = _checkVehicle_;
  }));

  it('should do something', function () {
    expect(!!checkVehicle).toBe(true);
  });

});
