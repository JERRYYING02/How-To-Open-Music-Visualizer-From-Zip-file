

function Ridgeplot()

{   
    this.name="ridgeplot";


    //draw line at regular interval
    this.draw=function ()
    {  
        background(bgColor);
        var r=map(sin(frameCount),-1,1,50,255);
        var g=map(sin(frameCount/2),-1,1,50,255);
        var b=map(sin(frameCount/4),-1,1,50,255);
        fill(r,g,b);
        // stroke(255);
        strokeWeight(2);
        

        //for every 50 modulus framecount add wave
        if(frameCount % 50 ==0)
        {   
            this.addWave();
        }
        /*
        create 2d array

        //outer array represent each line,inner array represent point
        //add one to array every x frames
        //each frame screen is cleared and decrased y corordinate of each line
        // if line is smaller than plot, remove from array 
        
        */
        for (var i=0;i<output.length;i++)
        {   var o=output[i];
            
            beginShape()
            for(let j =0;j<o.length; j++)
            {
                o[j].y -=speed*sizer/50;
                vertex(o[j].x,o[j].y)
            }
            endShape()
            //remove wave from array
            if(o[0].y<endY)
            {
                output.splice(i,1);
            }


            //middle ridge plot
            beginShape()
            for(let j =0;j<o.length; j++)
            {
                o[j].y -=speed*sizer/50;
                vertex(o[j].x-300,o[j].y)
            }
            endShape()
            if(o[0].y<endY)
            {
                output.splice(i,1);
            }


            //last ridge plot
            beginShape()
            for(let j =0;j<o.length; j++)
            {   //p5.gui change speed
                o[j].y -=speed*sizer/50;
                vertex(o[j].x-600,o[j].y)
            }
            endShape()
            if(o[0].y<endY)
            {
                output.splice(i,1);
            }
        }
    }   
    
    //add wave function
    this.addWave =function()
    {
        //get waveform input
        var w = fourier.waveform();
        var smallScale =3;
        //change scale to bigger to react p5.gui
        var bigScale= 40*sizer2/2;
        //create inner array seperately and push to output array
        var outputWave =[];

        // loop over waveform(1024 values)
        for (var i=0;i<w.length;i++)
        {   
            // take 20th element of the array
            if(i%20==0)
            {   

                // map value of waveform to spectrum width
                var x= map(i,0,1024,startX,startX+spectrumWidth)
                // scale waveform value of -1 and 1
                if(i<1024 *0.25 || i>1024*0.75)
                {   
                    // map y to small scale -3 and 3
                    let y=map(w[i],-1,1,-smallScale,smallScale)
                    outputWave.push
                    (
                     {
                        x:x,
                        y:startY +y
                     }
                    )
                }
                else
                {   
                    // map y to big scale of -40,40
                    let y=map(w[i],-1,1,-bigScale,bigScale)
                    outputWave.push
                    (
                     {
                        x:x,
                        y:startY +y
                     }
                    )
                }
            }
        }
        output.push(outputWave);
    }







    




   
 
}