# Movie Catalog
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet viverra sodales. Quisque efficitur lectus condimentum tortor ultricies rutrum. Quisque aliquet felis lectus, non sagittis risus ultrices vitae.

## API endpoints
### Movies
* `[GET] /api/movies/list`
    * `params:`
        * `page = Numer strony (liczone od zera)[default: 0]`
        * `itemsOnPage = ilość elementów na stronie [default: 10] `
        * `details = filmy wraz z ocenami (UWAGA: inny typ) [default: false] `
        * `order = Typ sortowania`
            * `fan-favorites`
            * `editors-picks`
            * `top-picks`
            * `recently-viewed`
* `[GET] /api/movies/{id}`
* `[POST] /api/movies/create`
    * `body (JSON):`
        * `title`
        * `plot`
        * `posterImageUrl`
        * `genre` 
        * `runtime` 
        * `language` 
        * `country` 
        * `imdbId` 
        * `year` 
* `[POST] /api/movies/{id}/rate`
    * `body (JSON):`
        * `rating (od 1 do 5)`
        * `comment (max 300)`

### Users
* `/api/users/list`
* `/api/users/get/{id}`
