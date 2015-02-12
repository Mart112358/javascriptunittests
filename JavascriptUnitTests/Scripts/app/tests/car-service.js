/// <reference path="~/Scripts/jquery-1.9.0.js"/>
/// <reference path="~/Content/jasmine/lib/jasmine-2.2.0/jasmine.js"/>
/// <reference path="~/Scripts/app/car-service.js"/>

describe("CarService", function () {
    var carService;

    beforeEach(function () {
        carService = new CarService();
    });

    it("Calculates the total weigth for cars", function () {
        // Arrange
        var cars = [
            { Number: 100, Weight: 10 },
            { Number: 100, Weight: 20 }
        ];

        // Act
        var actual = carService.calculateTotalWeight(cars);

        // Assert
        expect(actual).toEqual(30);
    });

    it("Calculates the number of cars", function (done) {
        // Arrange
        spyOn(carService, "getCars").and.callFake(function () {
            var deferred = new $.Deferred();

            deferred.resolve([
                { Number: 100, Weight: 10 },
                { Number: 100, Weight: 20 }
            ]);

            return deferred.promise();
        });

        // Act
        var task = carService.getCarCount();

        // Assert
        task.then(function (actual) {
            expect(actual).toEqual(2);
            done();
        });
    });
});