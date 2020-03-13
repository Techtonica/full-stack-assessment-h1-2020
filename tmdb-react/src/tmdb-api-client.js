export function fetchMovies() {
  return fetch("/movies", {
    headers: {
      Accept: "application/json"
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Unexpected non-OK HTTP status: GET /movies");
    }
  });
}

export function addMovie(movie) {
  return fetch("/movies", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movie)
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Unexpected non-OK HTTP status: POST /movies");
    }
  });
}
