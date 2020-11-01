function loadMovies(callback) {
    fetch ('/movies/list')
        .then(response => response.json())
        .then(movies => {
            if (typeof(callback) === 'function') {
                callback(movies);
            }
        })
        .catch((error) => {
            console.error('Error: ', error);
        })
}