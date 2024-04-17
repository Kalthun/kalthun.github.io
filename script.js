document.addEventListener('DOMContentLoaded', function() {
    const terminalBody = document.getElementById('terminal-body');
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            // Check input and display result
            terminalBody.innerHTML += "\n> You pressed Enter!";
        }
    });
});

