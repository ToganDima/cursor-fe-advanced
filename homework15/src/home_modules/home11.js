export function getFilmData() {
  let requestURL = 'https://swapi.dev/api/films/1';
  fetch(requestURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
