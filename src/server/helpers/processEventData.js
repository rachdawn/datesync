/**
 * This is a helper function that processes and formats event data fetched from SerpAPI.
 *
 * @param {Array} eventData - The array of event objects from the SerpAPI response.
 * @param {number} [limit=5] - The maximum number of events to return.
 * @returns {Array} An array of formatted event objects.
 */
function processEventData(eventData, limit = 5) {
  return eventData.map(event => {
    return {
      title: event.title || 'No Title Available',
      // Use event chaining '?' meaning that the function will try to access 'start_date' only if 'event_date' is not 'null' or 'undefined':
      startDate: event.date?.start_date || 'Date Not Available',
      time: event.date?.when || 'Time Not Available',
      address: event.address?.join(', ') || 'Address Not Available',
      description: event.description || 'No Description Available',
      thumbnail: event.thumbnail,
      link: event.link || 'No link',
      ticketLinks: event.ticket_info?.map(ticket => ({
        source: cleanSourceField(ticket.source) || 'Unknown Source',
        link: ticket.link || 'No link',
        type: ticket.link_type || 'Unknown Type'
      })) || [],
      venue: event.venue?.name || 'Venue Not Available',
      venueLink: event.venue?.link || 'No link'
    };
  }).slice(0, limit);
};

// Some of the tickets had css inline code in the ticket source; this function solves the issue by removing that css and html
function cleanSourceField(source) {
  const cleanedSource = source.replace(/.[\s\S]*}/, '').trim();
  return cleanedSource;
};

export default processEventData;
