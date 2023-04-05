//Constructor function to handle the button
//controls
function ControlsAndInput()
{
	
	//button displayed in the top left of the screen
	this.waveformballbutton = new WaveformballButton();
	this.spectrum2button = new Spectrum2button();
	this.electronButton = new ElectronButton();
	this.smokebutton = new Smokebutton();
	this.ridgeplotbutton =new RidgeplotButton();
	
	//call waveformball to selectVisual when button is hit
	this.selectwaveformball = function()
	{
		if(this.waveformballbutton.hitCheck())
		{	//set the iteration order of extensions
			visNumbervo = 0;
			vis.selectVisual(vis.visuals[visNumbervo].name);
			//avoid clashing of other sound
			sound2.stop();
			sound3.stop();
			sound4.stop();
		}
	}


	//call spectrum to selectVisual when button is hit
	this.selectspectrum = function()
	{
		if (this.spectrum2button.hitCheck2()) 
		{
			visNumberspectrum = 1;
			vis.selectVisual(vis.visuals[visNumberspectrum].name);
			//avoid clashing of other sound
			sound.stop();
			sound3.stop();
			sound4.stop();
		}
	};

	//call electron to selectVisual when button is hit
	this.selectelectron = function()
	{
		if (this.electronButton.hitCheck3()) 
		{
			visNumberelectron = 2;
			vis.selectVisual(vis.visuals[visNumberelectron].name);
			//avoid clashing of other sound
			sound.stop();
			sound2.stop();
			sound4.stop();
		}
	};


	//call smoke to selectVisual when button is hit
	this.selectsmokebutton = function()
	{
		if(this.smokebutton.hitCheck4())
		{
			visNumbersmoke = 3;
			vis.selectVisual(vis.visuals[visNumbersmoke].name);
			//avoid clashing of other sound
			sound.stop();
			sound2.stop();
			sound3.stop();
			sound4.stop();
		}
	}


	//call ridgeplot to selectVisual when button is hit
	this.selectridgeplot = function()
	{
		if (this.ridgeplotbutton.hitCheck5()) 
		{
			visNumberridgeplot = 4;
			vis.selectVisual(vis.visuals[visNumberridgeplot].name);
			//avoid clashing of other sound
			sound.stop();
			sound2.stop();
			sound3.stop();
		
			
		}
	};

	//draws the buttons 
	this.draw = function()
	{
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(30);

		this.waveformballbutton.draw();
		this.spectrum2button.draw();
		this.electronButton.draw();
		this.smokebutton.draw();
		this.ridgeplotbutton.draw();
		pop();

	};
}


