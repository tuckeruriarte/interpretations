function setup ()    {
	
	createCanvas(400, 300)
	
	rect(0, 0, width, height)

	angleMode(DEGREES)

	// noStroke()
	
	// fill(255, 255, 102)
	// arc(200, 150, 200, 200, 0, 143)

	// fill(255, 60, 60)
	// arc(200, 150, 200, 200, 143, 230)

	// fill(60, 138, 255)
	// arc(200, 150, 200, 200, 230, 279)

	// fill(60, 255, 86)
	// arc(200, 150, 200, 200, 279, 360)



	// beginShape()
	// vertex(45, 116)
	// vertex(99, 41)
	// vertex(144, 109)
	// endShape()


	strokeWeight(5)
	
	translate(0, 50)

	rotate(45)

	noFill()
	beginShape()
	curveVertex(136, 130)
	curveVertex(136, 170)
	curveVertex(156, 190)
	curveVertex(176, 170)
	curveVertex(196, 110)
	curveVertex(196, 110)
	endShape()

	beginShape()
	curveVertex(95, 159)
	curveVertex(136, 170)
	curveVertex(156, 170)
	curveVertex(197, 154)
	endShape()

	beginShape()
	curveVertex(112, 190)
	curveVertex(145, 108)
	curveVertex(196, 110)
	curveVertex(245, 109)
	curveVertex(310, 30)
	endShape()




	

	print("everything is ok")

	





}

function mouseClicked() {
	print(int(mouseX), int(mouseY))

}