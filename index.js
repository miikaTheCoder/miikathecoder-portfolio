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
          case 'frontendwisdom':
            case 'codequote':
              const frontendQuotes = [
                'Good design is as little design as possible. - Dieter Rams',
                'Code is like humor. When you have to explain it, it’s bad. - Cory House',
                'The best error message is the one that never shows up. - Thomas Fuchs',
                'Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler',
                'First, solve the problem. Then, write the code. - John Johnson',
                'Clean code always looks like it was written by someone who cares. - Robert C. Martin',
                'Front-end development is like playing with Legos, but you have to make your own pieces. - Anonymous',
                'CSS is like the secret sauce of front-end development. It makes everything look good. - Anonymous',
                'JavaScript is the duct tape of the Internet. - Anonymous',
                'The art of debugging is twice as hard as writing the code in the first place. - Brian Kernighan'
              ];
              const randomQuote = frontendQuotes[Math.floor(Math.random() * frontendQuotes.length)];
              addConsoleLine(randomQuote);
              break;
          case 'video':
          case 'rickroll':
            addConsoleLine('You\'ve found the easter egg!');
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
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