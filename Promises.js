function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate fetching data from an API
    setTimeout(() => resolve("Data fetched!"), 2000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
