describe("CarService", function () {
    var carService;

    beforeEach(function () {
        carService = new CarService();
    });

    it("Calculates the total weigth for cars", function () {
        var cars = [
            { Number: 100, Weight: 10 },
            { Number: 100, Weight: 20 }
        ];

        expect(carService.calculateTotalWeight(cars)).toEqual(30);
    });
});