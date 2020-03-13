export function fetchMovies() {
  return fetch("/movies", {
    headers: {
      Accept: "application/json"
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Unexpected non-OK HTTP status fetching /movies");
    }
  });
}
