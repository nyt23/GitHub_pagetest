

document.getElementById('inspirationButton').addEventListener('click', function() {
    fetch('https://api.quotable.io/random?tags=inspirational')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quoteDisplay').innerText = `"${data.content}" - ${data.author}`
        })
        .catch (error => {
        console.error('Error fetching quote: ', error);
        document.getElementById('quoteDisplay').innerText = 'Failed to fetch quote. Please try again';
    })

});


