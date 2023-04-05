

//displays and handles clicks on the playback button.
function RidgeplotButton()
{
	//set position of button 
	this.x = 20;
	this.y = 500;
	this.width = 200;
	this.height = 50;

	//flag to determine whether to play or pause after button click and
	//to determine which icon to draw
   	this.playing=false
	this.draw = function()
    {   
		
		fill(90,80,100)
		rect(this.x, this.y, this.width, this.height);
		fill(0,0,255);
		text('"Ridge"',this.x+10,this.y+35)
		
	};

	//checks for clicks on the button, starts or pauses playabck.
	//@returns true if clicked false otherwise.

    this.hitCheck5 = function()
	{
		if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height){
			if (sound4.isPlaying()) {
    			sound4.pause();
				
  			} else {
    			sound4.loop();
				
  			}
			 
  			this.playing = !this.playing;
  			return true;
		}
			return false;
	};
}


