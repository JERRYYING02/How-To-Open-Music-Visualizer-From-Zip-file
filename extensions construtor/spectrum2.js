

function Spectrum2()
{

  //set the name for visualisation to read
  this.name="spectrum2";


  //draw spectrum 
  this.draw =function()
    { 
      
      push();
      
      //translate to lower to the canvas avoid colliding button
      translate((-width/20),-(height/8)+400)

      //set background to black
      background(bgColor);

      //strokeweight assign to sizer2 p5.gui
      stroke(sizer2*10);

      
      //set width to have space between bar
      var w=(width/64);

      //analyze value for spectrum
      var spectrum = fourier.analyze();
    
        //draw bars
        for (let i = 0; i < spectrum.length; i++) 
        {

          //set amplitude equals to analyzed value
          let amp = spectrum[i];
          //map the analyzed value and the height to the top of canvas=0
          let y = map(amp,0,256,height,0)
          
          //fill the bar and assign with colorfade p5.GUI
          fill(i,amp*colorfader,amp);
          //draw the bars(offsetting the height to create a reflection mirror effect)
          rect(i*w,y,w-10*sizer/50,height-450-y);

        }
      pop();

  }


}