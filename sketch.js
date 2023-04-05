

/* sketch file for 2d extensions*/


//p5.GUI slider value default
var colorfader =0.5;
var sizer = 25;

var gui;
var sizer2 = 5;
var volumechanger=1;
var bgColor = [0, 0, 0];


//controls hidden default
var controls = null;

//store visualisations in a container
var vis = null;

//variable for the p5 sound object
var sound = null;

//variable for p5 fast fourier transform
var fourier;
var sound2=null;
var sound3=null;
var sound4=null;



//ridge plot variables
var output=[];
var startX
var startY
var endY
var spectrumWidth
//speed of ridge plot line movement
var speed =0.7





function preload()
{
	
	electron_background=loadImage('assets/806443.webp')

	//load sounds
	sound=loadSound('assets/beat.mp3');
	sound2 = loadSound('assets/song2.mp3');
	sound3=loadSound('assets/song3.mp3');
	sound4=loadSound('assets/3dsong.wav')
	
	lightball=loadImage('assets/Power-PNG-Picture.png')
	//resize lightballl to  stretch the image
	lightball.resize(10, 20);


}

function setup(){

	
	 createCanvas(windowWidth,windowHeight);
	
	 //set the plot for ridge plot
	 startX=(width/5)+900;
	 endY=height/6;
	 startY= (height-endY)-100;
	 spectrumWidth = (-width/5)
	


	 //set color mode for spectrum
	 angleMode(DEGREES);
	 colorMode(HSB,100)
	 
	 
	 background(0);
	
	
	 controls = new ControlsAndInput();
	

	 

	//instantiate the fft object
	 fourier = new p5.FFT();
	

	 
	 //create a new visualisation container and add visualisations
	 vis = new Visualisations();
	 
	 
	 vis.add(new Waveformball());
	 vis.add(new Spectrum2());
	 
	 vis.add(new Electron());
	 vis.add(new Particlesmoke());
	 vis.add(new Ridgeplot());



	
	 
	
	// create p5.gui sliders which interact with extensions

	gui = createGui('MUSIC VISUALISATION')
	
	sliderRange(0.001, 1, 0.001);
	gui.addGlobals('colorfader');



	sliderRange(0, 50, 1);
	gui.addGlobals('sizer');
	

	
	sliderRange(0,10,1)
	gui.addGlobals('sizer2')
	

	sliderRange(0,1,0.1)
	gui.addGlobals('volumechanger');


	gui.addGlobals('bgColor')
	 

	
	
	
}



function draw(){
	background(bgColor);
	//draw the selected visualisation
	vis.selectedVisual.draw();
	//draw the controls on top.
	controls.draw();
	
	sound.setVolume(0+volumechanger)
	sound2.setVolume(0+volumechanger)
	sound3.setVolume(0+volumechanger)
	sound4.setVolume(0+volumechanger)
}

//call control when button is clicked
function mouseClicked(){
	
	controls.selectwaveformball();
	controls.selectspectrum();
	controls.selectelectron();
	controls.selectsmokebutton();
	controls.selectridgeplot();
	
	
}


//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}


}
