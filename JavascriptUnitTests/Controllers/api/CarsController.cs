using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using JavascriptUnitTests.Models;

namespace JavascriptUnitTests.Controllers.api
{
    public class CarsController : ApiController
    {
        private IEnumerable<Car> _cars = new[]
        {
            new Car { Number = 100, Weight = 190 },
            new Car { Number = 200, Weight = 160 },
            new Car { Number = 300, Weight = 170 },
            new Car { Number = 400, Weight = 150 },
            new Car { Number = 500, Weight = 200 }
        };

        public IEnumerable<Car> GetAll()
        {
            return _cars;
        }

    }
}
