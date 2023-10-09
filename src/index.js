document.addEventListener('DOMContentLoaded', function () {
    const inputForm = document.querySelector('form');
    const movieDetailsTitle = document.querySelector('#movieDetails h4');
    const movieDetailsSummary = document.querySelector('#movieDetails p');
  
    inputForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const input = document.querySelector('#searchByID');
      const movieId = input.value;
  
      // Fetch movie details based on user input
      fetch(`http://localhost:3000/movies/${movieId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Movie not found'); // Handle invalid ID
          }
          return response.json();
        })
        .then(data => {
          // Display movie details
          movieDetailsTitle.textContent = data.title;
          movieDetailsSummary.textContent = data.summary;
        })
        .catch(error => {
          console.error(error.message);
          // Optionally, you can display an error message to the user.
          // Clear the movie details if an error occurs.
          movieDetailsTitle.textContent = '';
          movieDetailsSummary.textContent = '';
        });
    });
  });
  