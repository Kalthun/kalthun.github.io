document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var main = document.getElementById('main');
    sidebar.classList.toggle('open');
    main.classList.toggle('shifted');
});

function navigateTo(page) {
    window.location.href = page; // Navigate to the specified URL
}
