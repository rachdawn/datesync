/**
 * Helper function that filters and limits a set of results based on provided criteria.
 * 
 * @param {Array} results - The array of result objects to be filtered.
 * @param {Object} filters - An object containing the filter criteria.
 * @param {number} [limit=5] - The maximum number of results to return (default is 5).
 * @returns {Array} A filtered and limited array of result objects.
 */
function filterAndLimitResults(results, filters, limit = 5) {
  let filteredResults = results;

  // Filter by type if the 'type' filter is provided:
  if (filters.type) {
    // Only include results that contain the specified 'type':
    filteredResults = filteredResults.filter(result => result.type.includes(filters.type));
  }

  // Filter by rating if the 'rating' filter is provided:
  if (filters.rating) {
    // Only include results with a rating equal to or higher than the specified rating:
    filteredResults = filteredResults.filter(result => result.rating >= parseFloat(filters.rating));
  }

  // Filter by price if the 'price' filter is provided:
  if (filters.price) {
    // Only include results with a price level equal to or lower than the specified price level:
    filteredResults = filteredResults.filter(result => {
      // Calculate the number of '$' in the result's price and in the filter price:
      const resultPriceLevel = result.price ? result.price.length : 0;
      const filterPriceLevel = filters.price.length;
      // Include results with a price level up to the specified level:
      return resultPriceLevel <= filterPriceLevel;
    });
  }

  // Limit the results:
  return filteredResults.slice(0, limit);
}

export default filterAndLimitResults;
