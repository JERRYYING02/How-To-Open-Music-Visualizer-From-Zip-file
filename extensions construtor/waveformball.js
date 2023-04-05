
//create particle array to store particle class
var particles =[];


//create constructor waveformball
function Waveformball()
{  

  //create the draw function
  this.draw=function()
  {


    {
      push();

      //alternating color of the waveform ring
      var r=map(cos(frameCount),-1,1,50,255)
      var g=map(cos(frameCount/2),-1,1,50,255)
      var b=map(cos(frameCount/4),-1,1,50,255)
      stroke(r,g,b)
      strokeWeight(sizer2)
      noFill();
      
      translate(width/2,height/2);
      //center image of lightning ball
      

      //analyze the frequency
      fourier.analyze();

      //set amplitude to frequency range of bass and treble
      var amp=fourier.getEnergy("bass","treble")
      
     

      //returns array of amplitude values between -1 and +1
      var wave =fourier.waveform();
      
      // draw circle
    
        beginShape();
       

        for(let i=0;i<=360;i += 0.7)
        {
          //there are 1024 in waveform value but screen couldnt handle
          //maps for loop to wave value
          //floor it to make it integer value
          let value = floor(map(i,0,width,0,wave.length-1))

          //map  waveform to radius of circle 
          let r=map(wave[value],-1,1,50,300)
          //draw circle with sin and cos
          let x = r*sin(i);
          let y = r* cos(i);
          vertex(x,y)
        }
        endShape();

        //draw the rapid changing line movement
        beginShape();
       
      //rapid vertex drawing
        for(let i=0;i<=360;i += 50)
        {
          //there are 1024 in waveform value but screen couldnt handle
          //maps for loop to wave value
          //floor it to make it integer value
          let value = floor(map(i,0,width,0,wave.length-1))

          //map the radius of circle to waveform
          let r=map(wave[value],-1,1,random(20,400),random(20,20))
          //draw line with sin and cos
          let x = r*sin(i);
          let y = r* cos(i);
          vertex(x,y)
        }
        endShape();
        

       //if the amplitude is greater at 130 frequency rotate randomly the background 
       if(amp>100)
       {
         rotate(random(-0.5,0.5))
       }
     


      
      //create particle calling particle class
        var p =new Particle()
      //push particle to empty array
        particles.push(p);
      

      //control particles show length
        for(let i=0;i<particles.length;i++)
        { 
          if(!particles[i].edges())
          {
            particles[i].show();
            particles[i].update(amp>130)
          }
          else 
          { //remove particle from array
            particles.splice(i,1);
          }

        }
          pop();
        } 

    } //draw function ends


  }


//create particle object with ES6 class
class Particle{
  
  constructor()
  {
    
    // Make a new 2D unit vector from a random angle
    //vector only length of 1 so multiply by scaler radius of waveform to place at perimeter of circle(average and minimum waveform )
    this.pos=p5.Vector.random2D().mult(200);
    
    //acceleration have same direction with position vector so it is copied but multiply slower acceleration value
    this.acc =this.pos.copy().mult(random(0.0005,0.0005));
    //create velocity of particle starting with value 0/stationary
    this.vel =createVector(0,0)

    //create random size of particle
    this.width =random(5,8)
    //color of particle
    this.color=[random(0,255*colorfader),random(0,255*colorfader),random(0,255*colorfader)];
    
    
  }
  
  //show particle on canvas
  show()
  {
    
    noStroke()
    fill(this.color)
    ellipse(this.pos.x,this.pos.y,this.width*sizer/50);
    //make neon lights streching the image of the electric ball
    image(lightball,this.pos.x,this.pos.y*-10,this.width*-1 )
    imageMode(CENTER);
    
  }


  //update position of the particles
  update(u)
  { //to make values react each other
    //velocity value added to acceleration and position
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    //if update condition is true then add more velocity to position
    if(u)
    {
      this.pos.add(this.vel)
    }
  }

  //if particle reach infinity of canvas return true else false
  edges()
  {
    if(this.pos.x>width/2||this.pos.x <-width/2 || 
    this.pos.y <-height/2 || this.pos.y>height/2)
    {
      return true
    }
    else
    {
      return false
    }
  }

}


