using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace random_numbers.Controllers.RandomNumbers
{
    public class RandomNumbersController : Controller
    {
        // GET: RandomNumbers
        public ActionResult RandomNumbersView()
        {
            // Create an instance of the Random class
            Random random = new Random();

            // Generate a random number between 1 and 10 (inclusive)
            int randomNumber = random.Next(1, 11); // Upper bound is exclusive, so use 11

            // Pass the random number to the view using ViewBag
            ViewBag.RandomNumber = randomNumber;

            return View();
        }

    }
}