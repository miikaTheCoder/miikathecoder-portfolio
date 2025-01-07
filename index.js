function typeEffect(element, text, startIndex, interval) {
    let i = startIndex;
    let typing = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, interval);
}

document.addEventListener("DOMContentLoaded", function() {
    let title = document.querySelector('.title');
    let hobbies = document.querySelectorAll('.section li');
    let academy = document.querySelector('.section p');

    typeEffect(title, "miikaTheCoder", 0, 100); // Adjust the interval for speed
    hobbies.forEach(hobby => typeEffect(hobby, hobby.textContent, 0, 100));
    typeEffect(academy, "Digitalents Academy Helsinki", 0, 100);
});