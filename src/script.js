function searchItems() {
    const filter = document.getElementById('search').value.toLowerCase();
    const items = document.querySelectorAll('.item');

    let hasResults = false;
    items.forEach(item => {
        const title = item.querySelector('.item-title').textContent.toLowerCase();
        if (title.includes(filter)) {
            item.style.display = '';
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    });

    document.getElementById('no_results').style.display = hasResults ? 'none' : '';
}

document.getElementById('search').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchItems();
    }
});

document.getElementById('search-icon').addEventListener('click', searchItems);
