function getResponseFromAPI() {
  return Promise((resolve, reject) => {
    fetch('http://api.example.com/data').then((response) => {
      resolve(response.json());
    });
  });
}
