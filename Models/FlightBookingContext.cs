using Microsoft.EntityFrameworkCore;

namespace flight_booking.Models
{
    public class FlightBookingContext : DbContext
    {
        public FlightBookingContext(DbContextOptions<FlightBookingContext> options)
            : base(options)
        {

        }

        public DbSet<FlightBooking> FlightBookings { get; set; }
    }
}
