'use strict';

describe('Service: carInformation', function () {

  // load the service's module
  beforeEach(module('marktplaatsIacVerkoopApp'));

  // instantiate service
  var carInformation;
  beforeEach(inject(function (_carInformation_) {
    carInformation = _carInformation_;
  }));

  it('should do something', function () {
    expect(!!carInformation).toBe(true);
  });

});
