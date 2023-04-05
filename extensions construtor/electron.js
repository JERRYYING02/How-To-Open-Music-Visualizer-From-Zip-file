
function Electron()
{   
    //set name for visualisation to read
    this.name="electron";
   
    this.draw =function()
    {   
       
        //draw background
        background(electron_background)
        
        //set amplitude by analyzing FFT
        var amp=fourier.analyze();

     
        push()
            
            
           //set canvas to center of screen
            translate(width/2,height/2)
            
           //set r,g,b value using sin change
            var r=map(sin(frameCount),-1,1,50,255);
            var g=map(sin(frameCount/2),-1,1,50,255);
            var b=map(sin(frameCount/4),-1,1,50,255);
            
           //set color with colorfader slider(p5.GUI)
            stroke(r*colorfader,g*colorfader,b*colorfader);
            strokeWeight(random(3,5));
         
        //for loop for drawing 8 rings 
        for (var i = 0; i < 8; i++) 
        {   
            //rotate the rings
            rotate(sin(frameCount/10)*50)
            
            //assign a as analyzed amplitude
            var a=amp[i]*sizer2/15;
            //map the value of ring expansion
            var expand = map(a,0,256,0,170);
            

            //if ring expansion value is big then bold the stroke
            if(expand>100)
            {
                strokeWeight(10);
            }

            //draw the rings
            noFill();            
            ellipse(0,0,400-i*expand*-sizer/50,400-i*expand*-1*-sizer/50);
        }

        //draw one base ring
        fill(r,g,b);
        ellipse(0,0,10-i*expand/10,10-i*expand/10);
      
            
        pop();
    }



}

    
