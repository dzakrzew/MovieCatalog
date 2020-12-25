# Movie Catalog
Aplikacja webowa do przeglądania bazy filmów. Funkcjonalności:
* przeglądanie listy filmów w postaci galerii ze zdjęciami, opisami i ocenami,
* zakładki sortujące filmy pod względem ocen użytkowników, ocen IMDB, a także ostatnio wyświetlanych,
* wystawianie recenzji filmu składającej się z oceny (0–10) i komentarza.

Aplikacja została napisana w języku Java przy użyciu frameworka Spring po stronie backendu, a także w języku JavaScript (framework React) po stronie frontendu. Komunikacja między dwoma warstwami następuje przy użyciu API REST w formacie JSON.

## Dokumentacja API
### Movies (filmy)
* `[GET] /api/movies/list`
    * opis: Pobiera listę filmów według zadanych parametrów
    * parametry:
        * `page = Numer strony (liczone od zera) [default: 0]`
        * `itemsOnPage = ilość elementów na stronie [default: 10] `
        * `details = filmy wraz z ocenami (UWAGA: inny typ) [default: false] `
        * `order = Typ sortowania [default: fan-favorites]`
            * `fan-favorites` – wg ocen użytkowników (od najwyższych), 
            * `editors-picks` – wg oceny IMDB (od najwyższych),
            * `top-picks` – wg uśrednionych wartości ocen użytkowników i IMDB (od najwyższych),
            * `recently-viewed` – wg daty ostatniego wyświetlenia filmu (od najnowszych)
* `[GET] /api/movies/{id}`
    * opis: Pobiera dane filmu o podanym `id`
* `[POST] /api/movies/create`
    * opis: Dodaje film do bazy
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
    * opis: Dodaje recenzję filmu
    * `body (JSON):`
        * `rating (od 1 do 5)`
        * `comment (max 300)`