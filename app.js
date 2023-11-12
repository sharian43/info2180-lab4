document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("searchBtn");
    const result = document.getElementById("result");
    const hero = document.getElementById('heroNames');

    button.addEventListener('click', async () => {
        const supername = hero.value.trim();
        const url = `http://localhost/info2180-lab4/superheroes.php?query=${encodeURIComponent(supername)}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            const data = await response.text(); 
            result.innerHTML = data;
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('There was a problem with the request');
        }
    });
});
