let stopButton = document.querySelector('#stopButton');
let stopLight = document.querySelector('#stopLight');
let slowButton = document.querySelector('#slowButton');
let slowLight = document.querySelector('#slowLight');
let goButton = document.querySelector('#goButton');
let goLight = document.querySelector('#goLight');



stopButton.addEventListener("click", () => {
  stopLight.classList.toggle("stop")
});

slowButton.addEventListener("click", () => {
  slowLight.classList.toggle("slow")
});

goButton.addEventListener("click", () => {
  if(goLight.classList.toggle("go")){
  console.log(`${goButton.textContent} bulb on`)}
  else {
    console.log(`${goButton.textContent} bulb off`)
  }
});

// This is an efficient way to create a function that will apply each of the arrays values into the webpage.
function inOut(button){
  button.addEventListener('mouseenter',() => {
    console.log(`Entered ${button.textContent} button`)
  })
  
  button.addEventListener('mouseleave', () => {
    console.log(`Exited ${button.textContent} button`)
  })
}

// inOut(stopButton);
// inOut(slowButton);
// inOut(goButton);

let arr = [stopButton, slowButton, goButton]
arr.forEach(inOut)