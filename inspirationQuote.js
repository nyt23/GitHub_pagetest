document.getElementById('inspirationButton').addEventListener('click', function(){
    fetch('http//api.quotable.io/random?tags=inspirational')
        .then(response => response.json())
        .then(data => {
            const quote = data.content + " - " + data.author;
            document.getElementById('quoteDisplay').innerText = quote;
        })
        .catch(error => {
            console.error('Error fetching quote: ', error);
            document.getElementById('quoteDisplay').innerText = 'Failed to fetch quote. Please try again';
        });
});