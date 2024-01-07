/**
 * This helper function processes the movies playing data from the SerpAPI Google Search API response.
 *
 * @param {Array} moviesData - The array of movies data from the SerpAPI response.
 * @returns {Array} An array of movie objects with necessary details.
 */
function processMoviesData(moviesData) {
  return moviesData.map(movie => {
    return {
      title: movie.name,
      details: movie.extensions.join(' • '), 
      showtimesLink: movie.link, 
      image: movie.image,
    };
  });
};

export default processMoviesData;
