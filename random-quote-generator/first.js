const quotes = [
  "Dream. Believe. Achieve.",
  "Stay humble, work hard.",
  "Progress over perfection.",
  "Keep going.",
  "Small steps matter.",
  "Be your own hero.",
  "Focus beats talent.",
  "Growth starts today.",
  "Silence builds strength.",
  "Trust the process.",
  "Make it happen.",
  "Never stop learning.",
  "Choose courage daily.",
  "Discipline wins.",
  "Less fear, more action.",
  "Create your own path.",
  "Stay curious.",
  "Success loves consistency.",
  "One day or day one.",
  "Be unstoppable."
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');
button.addEventListener('click',()=>{

    const index = Math.floor (Math.random()*20);
    
    quote.textContent = quotes[index];

})