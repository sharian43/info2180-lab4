document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("searchBtn");
    const result = document.getElementById("result");
    const hero = document.getElementById('heroNames');
    const httpReq = new XMLHttpRequest();

    button.addEventListener('click', function() {
        let name = hero.value;
        name = name.trim();
        let url = "http://localhost/info2180-lab4/superheroes.php?query="+name;
        httpReq.onreadystatechange = printHeroList;
        httpReq.open('GET', url);
        httpReq.send();
    });

    function printHeroList() {
        if (httpReq.readyState === XMLHttpRequest.DONE) {
            if (httpReq.status === 200) {
                let response = httpReq.responseText;
                result.innerHTML =  response;
            } else {
                alert('There was a problem with the request');
            }
        }
    }
});