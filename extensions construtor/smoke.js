
//create particle empty array
var particles_2=[];

function Particlesmoke() 
{   
    //set name for visualisation to read
    this.name="smoke";
    this.draw=function()
    {   
        //push particle class into particle array
        var particle2= new Particle2();
        particles_2.push(particle2);
        
        background(bgColor);

        //iterate backwards of particle array,update and show particle,delete particle from array
        
        for(var i=particles_2.length-1;i>=0;i--)
        {   particles_2[i].update();
          
            particles_2[i].show();
            if(particles_2[i].ending())
            {
                particles_2.splice(i,1)
            }
        }  

    }

    

}

//create Particle Class
class Particle2
{
    constructor()

    {   
        //set volume to input of mic
        var vol = mic.getLevel(0.3);
        //map vol to height
        var l = map(vol, 0, 1,height-400, height-550);
        var l_2 = map(vol, 0, -1,height-400, height-550);
       
        //properties for smoke upwards
        this.x=600;
        this.y=l;
        this.vx= random(-1,1);
        this.vy=random(-1,-1);

        //properties for smoke downwards
        this.x2=600;
        this.y2=l_2
        this.vx2= random(-1,1);
        this.vy2=random(-1,-1);

        //set alpha to max and gradually decrease in update
        this.alpha=120
        
    }

    update()
    {   
        this.x+=this.vx;
        this.y+=this.vy;


        this.x2 += this.vx2;
        this.y2 -=this.vy2;

        // decrease opacity as updating
        this.alpha--;
       
    }


    //return particle when alpha =0
    ending()
    {   
        return this.alpha<0
    }


    //show the particles
    show()
    
    {   
        noStroke();
        var r=map(sin(frameCount),-1,1,50,255);
        var g=map(sin(frameCount/2),-1,1,50,255);
        var b=map(sin(frameCount/4),-1,1,50,255);
        fill(r*colorfader*1.1,g*colorfader*1.1,b*colorfader*1.1,this.alpha);
       
        //smoke upwards
        ellipse(this.x,this.y,10*sizer/30,sizer2*1.1)
        //smoke downwards
        ellipse(this.x2,this.y2,10*sizer/30,sizer2*1.1)
        
}
}

