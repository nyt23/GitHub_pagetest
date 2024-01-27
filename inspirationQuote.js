document.getElementById('inspirationButton').addEventListener('click', async function() {
    try {
        const response = await fetch('https://api.quotable.io/random?tags=inspirational');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('quoteDisplay').innerText = `"${data.content}" - ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote: ', error);
        document.getElementById('quoteDisplay').innerText = 'Failed to fetch quote. Please try again';
    }
});

