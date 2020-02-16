using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using flight_booking.Models;

namespace flight_booking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightBookingsController : ControllerBase
    {
        private readonly FlightBookingContext _context;

        public FlightBookingsController(FlightBookingContext context)
        {
            _context = context;
        }

        // GET: api/FlightBookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FlightBooking>>> GetFlightBookings()
        {
            return await _context.FlightBookings.ToListAsync();
        }

        // GET: api/FlightBookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FlightBooking>> GetFlightBooking(long id)
        {
            var flightBooking = await _context.FlightBookings.FindAsync(id);

            if (flightBooking == null)
            {
                return NotFound();
            }

            return flightBooking;
        }

        // PUT: api/FlightBookings/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFlightBooking(long id, FlightBooking flightBooking)
        {
            if (id != flightBooking.Id)
            {
                return BadRequest();
            }

            _context.Entry(flightBooking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlightBookingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FlightBookings
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<FlightBooking>> PostFlightBooking(FlightBooking flightBooking)
        {
            _context.FlightBookings.Add(flightBooking);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetFlightBooking), new { id = flightBooking.Id }, flightBooking);
        }

        // DELETE: api/FlightBookings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FlightBooking>> DeleteFlightBooking(long id)
        {
            var flightBooking = await _context.FlightBookings.FindAsync(id);
            if (flightBooking == null)
            {
                return NotFound();
            }

            _context.FlightBookings.Remove(flightBooking);
            await _context.SaveChangesAsync();

            return flightBooking;
        }

        private bool FlightBookingExists(long id)
        {
            return _context.FlightBookings.Any(e => e.Id == id);
        }
    }
}
