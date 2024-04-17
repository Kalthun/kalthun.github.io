document.addEventListener('DOMContentLoaded', function() {
    const terminalBody = document.getElementById('terminal-body');
    const inputArea = document.createElement('input');
    inputArea.type = 'text';
    inputArea.style.width = '100%';
    inputArea.style.color = 'green';
    inputArea.style.backgroundColor = 'black';
    inputArea.style.border = 'none';
    inputArea.style.outline = 'none';
    inputArea.style.fontSize = '16px';
    terminalBody.appendChild(inputArea);
    inputArea.focus(); // Automatically focus on the input field

    inputArea.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = inputArea.value.trim();
            inputArea.value = '';
            handleCommand(command);
        }
    });

    function handleCommand(command) {
        let output;
        switch (command.toLowerCase()) {
            case 'projects':
                output = `\n> Projects:\n - Project1: Description here\n - Project2: Description here`;
                break;
            case 'about':
                output = `\n> About Me: [Brief bio or description about yourself]`;
                break;
            case 'contact':
                output = `\n> Contact Info:\n - Email: your.email@example.com\n - LinkedIn: your-linkedin-profile`;
                break;
            default:
                output = `\n> Unknown command: ${command}`;
        }
        typeText(terminalBody, output, 50);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function typeText(element, text, delay = 100) {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, delay);
    }

    // Welcome message with typing effect
    typeText(terminalBody, "> Welcome to my Portfolio Terminal. Type 'help' for commands.\n", 50);
});
