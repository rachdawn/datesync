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
      title: event.title,
      // Use event chaining '?' meaning that the function will try to access 'satrt_date' only if 'event_date' is not 'null' or 'undefined':
      startDate: event.date?.start_date,
      time: event.date?.when,
      address: event.address?.join(', '),
      description: event.description,
      thumbnail: event.thumbnail,
      link: event.link,
      ticketLinks: event.ticket_info?.map(ticket => ({
        source: cleanSourceField(ticket.source),
        link: ticket.link,
        type: ticket.link_type
      })),
      venue: event.venue?.name,
      venueLink: event.venue?.link
    };
  }).slice(0, limit);
};

// Some of the tickets had css inline code in the ticket source; this function solves the issue by removing that css and html
function cleanSourceField(source) {
  const cleanedSource = source.replace(/.[\s\S]*}/, '').trim();
  return cleanedSource;
};

export default processEventData;
