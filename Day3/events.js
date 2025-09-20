const button1 = document.getElementById('messageButton1');
const button2 = document.getElementById('messageButton2');
const messageParagraph = document.getElementById('messageParagraph');

button1.addEventListener('click', () => {
  messageParagraph.textContent = "You clicked the first button! 🎉";
});

button2.addEventListener('click', () => {
  messageParagraph.textContent = "A new message from the second button! 🎈";
});

messageParagraph.addEventListener('mouseover', () => {
  messageParagraph.style.backgroundColor = '#effae0ff'; 
});

messageParagraph.addEventListener('mouseout', () => {
  messageParagraph.style.backgroundColor = 'transparent'; 
});