document.addEventListener('DOMContentLoaded', function() {
    // Listen for the click event on the "Search" button
    document.getElementById('searchBtn').addEventListener('click', function() {
        // Make an AJAX request to superheroes.php
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // If the request is successful, show the list of superheroes in an alert
                    alert(xhr.responseText);
                } else {
                    // If there is an error, show an error message
                    alert('Error fetching superheroes. Please try again.');
                }
            }
        };

        xhr.open('GET', 'superheroes.php', true);
        xhr.send();
    });
});
