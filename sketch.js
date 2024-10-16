let ratio = 1.3333; //4:3 aspect ratio
let globeScale; // Scale factor

let mic; //Mic
let vol = 1; //Volume
let normVol; //Normalize vol
let volSense = 100; //Volume sensivity
let sliderStep = 10; //Slider step size
let volSenseSlider; //Volume sensitivty slider
let startAudio = false; //Starts audio fig

function setup() {
  createCanvas(window.innerWidth, window.innerWidth / ratio);
  globeScale = min(width, height);
  colorMode(HSB);
  getAudioContext().suspend();

  volSenseSlider = createSlider(0, 200, volSense, sliderStep);
}

function draw() {
  if (startAudio) {
    vol = mic.getLevel(); //Get vol level
    volSense = volSenseSlider.value(); //Get volume sensitivty
    normVol = vol * volSense; //Normalize Vol
    console.log(vol);
  }
    background(200, 100, 100);
    smileyFace();
  
}

function mousePressed() {
    
    getAudioContext().resume();

  if (!startAudio) {
    mic = new p5.AudioIn();
    mic.start();
    startAudio = true;
  }
}
