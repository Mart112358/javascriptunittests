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
});