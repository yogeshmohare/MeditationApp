const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instrucation");
const breathText = document.querySelector(".breaths-text");
let breathLeft = 3;

//watching for selected breath from user
numberOfBreaths.addEventListener("change", () => {
  breathLeft = numberOfBreaths.value;
  console.log(breathLeft);
  breathText.innerText = breathLeft;
});

//grow and shrink circle
const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

//breathing app function
const breathingApp = () => {
  const breathingAnimation = setInterval(() => {
    if (breathLeft === 0) {
      clearInterval(breathingAnimation);
      instructions.innerText = "breathing session completed, Click Begin to start again";
      start.classList.remove("button-inactive");
      breathLeft= numberOfBreaths.value;
      breathText.innerText =breathLeft;
      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

//breathing instrucation
const breathTextUpdate = () => {
  breathLeft--;
  breathText.innerText = breathLeft;
  instructions.innerText = "Breath in";
  setTimeout(() => {
    instructions.innerText = "Hold Breath";
    setTimeout(() => {
      instructions.innerText = "Release breath slowly";
    }, 4000);
  }, 4000);
};

//start breath
start.addEventListener("click", () => {
  start.classList.add("button-inactive");
  instructions.innerText = "Get relaxed, and ready to begin breathing";
  setTimeout(() => {
    instructions.innerText = "breathing is about to begin";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breathTextUpdate();
    }, 2000);
  },2000);
});
