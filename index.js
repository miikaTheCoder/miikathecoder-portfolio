document.addEventListener('DOMContentLoaded', function() {
    const consoleInput = document.querySelector('.console-input');
    const consoleContent = document.querySelector('.console-content');
    
    consoleInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        console.log('Enter has been pressed'); // This should now log when Enter is pressed
        const command = consoleInput.value.toLowerCase().trim();
        if (command) {
          addConsoleLine(`hacker@portfolio:~ ${command}`);
          processCommand(command);
          consoleInput.value = '';
        }
      }
    });
  
    function addConsoleLine(text) {
      const line = document.createElement('div');
      line.className = 'console-line';
      line.innerHTML = `<span class="console-prompt">hacker@portfolio:</span><span class="console-path">~</span> ${text}`;
      consoleContent.insertBefore(line, consoleInput.parentElement);
      consoleContent.scrollTop = consoleContent.scrollHeight;
    }
  
    function processCommand(command) {
      switch(command) {
        case 'help':
          addConsoleLine('whoami, skills, projects and help (this command)');
          break;
          case 'video':
            addConsoleLine(innerHTML = `<a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Video`);
            break;
        case 'whoami':
          addConsoleLine('I am MiikaTheCoder, a 20-year-old developer interested in coding, privacy, security, cybersecurity, and AI.');
          break;
        case 'skills':
          addConsoleLine('Skills: Web Developer (HTML, CSS & JS), Local AI for fun, Daily Driving Linux (I use Arch, btw)');
          break;
        case 'projects':
          addConsoleLine('Project 1: Portfolio Website');
          addConsoleLine('Project 2: CLI tool for network scanning');
          break;
        default:
          addConsoleLine('Command not recognized. Try "whoami", "skills", or "projects".');
      }
    }
  });