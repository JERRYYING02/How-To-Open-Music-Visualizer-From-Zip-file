
function preload()
{
    song=loadSound('assets/piano.mp3')
}

function setup(){
   
    // createCanvas(1550, 700, WEBGL)
    createCanvas(windowWidth,windowHeight, WEBGL)

    
    angleMode(DEGREES)
    fourier = new p5.FFT();
    song.play();


    
	 startX=(width/5)+200;
	 endY=height/6;
	 startY= (height-endY)-100;
	 spectrumWidth = (width/5)
	
}


let mult = 3
let boxSize = 30


function draw()
{


    let spectrum = fourier.analyze()
    
    background(10);
    noStroke()
    
    //noFill()
    rotateX(60)
   
    
    
    translate((-width/2)-600 , (-height/2)-1000,-1000 )
   



    for(var y = 0; y < boxSize; y++)
    {
        beginShape();
        for(var x = 0; x < boxSize; x++)
        {
            
            let height = spectrum[x]*mult
            
            // rise and fall color of vertex
            var b=map(height,200,800,0,255)
            // fill(255-height/5, 150-height/5, b)
            fill(b, 0, b)
            
            vertex(x *100, y*40 , height*0.8);
        }
        endShape();
        
    }

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);

}


