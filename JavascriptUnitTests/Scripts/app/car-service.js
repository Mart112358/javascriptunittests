var CarService = function () {
    var pubs = {};

    pubs.calculateTotalWeight = function(cars) {
        var totalWeight = 0;

        cars.forEach(function(car) {
            totalWeight += car.Weight;
        });

        return totalWeight;
    };

    pubs.getCars = function() {
        return $.ajax("/api/cars");
    };

    pubs.getCarCount = function () {
        return pubs.getCars().then(function (cars) {
            return cars.length;
        });
    };

    pubs.displayCars = function(container) {
        return pubs.getCars().then(function(cars) {
            var table = $("<table class='table table-bordered table-condensed table-hover table-striped'>");
            var thead = $("<thead>");
            var tbody = $("<tbody>");

            table.append(thead);
            table.append(tbody);

            thead.append("<tr><th>Number</th><th>Weight (tons)</th></tr>");

            cars.forEach(function(car) {
                var row = $("<tr>");
                row.append("<td>" + car.Number + "</td>");
                row.append("<td>" + car.Weight + "</td>");
                tbody.append(row);
            });

            var tfoot = $("<tfoot>");

            var rowFoot = $("<tr>");
            rowFoot.append("<td><strong>Total</strong></td>");
            rowFoot.append("<td><u>" + pubs.calculateTotalWeight(cars) + "</u></td>");

            tfoot.append(rowFoot);
            table.append(tfoot);

            container.append(table);
        });
    };

    return pubs;
};

