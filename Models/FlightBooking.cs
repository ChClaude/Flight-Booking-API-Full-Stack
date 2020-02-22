using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace flight_booking.Models
{
    public class FlightBooking
    {
        public long Id { get; set; }
        public string Departure { get; set; }
        public string Destination { get; set; }
        public DateTime DepartureDate { get; set; }
        public string TripType { get; set; } // This can have one of the following values "one way", "round trip" or "multi-city"
        public DateTime? ReturnDate { get; set; } /*This attribute is only set when IsRoundTrip is True*/
        public int NumberOfPassengers { get; set; }
        public string Cabin { get; set; } /*Cabin refers to the values economic or business classes in the airplane*/
        public double Price { get; set; }
    }
}
