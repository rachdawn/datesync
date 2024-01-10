/**
 * This helper function processes the movies playing data from the SerpAPI Google Search API response.
 *
 * @param {Array} moviesData - The array of movies data from the SerpAPI response.
 * @returns {Array} An array of movie objects with necessary details.
 */
function processMoviesData(moviesData) {
  return moviesData.slice(0, 9).map(movie => {
    // This is to create a movie object with mandatory fields:
    let processedMovie = {
      title: movie.name,
      showtimesLink: movie.link, 
      image: movie.image,
    };

    // Add 'details' only if 'extensions' exists and is not empty:
    if (movie.extensions && movie.extensions.length > 0) {
      processedMovie.details = movie.extensions.join(' • ');
    }

    return processedMovie;
  });
}

export default processMoviesData;
