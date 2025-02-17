//complete this cobde
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	get width(this.width){
		return this._width
	}
	get height (this.height){
		return this._height 
	}
	get Area(){
		return 2*(this._width*this._height )
	}
	
}

class Square extends Rectangle {
	constructor (width){
		super(width,width)
	}

	get Permiter(width,width){
		return 2*(this._width +this._width)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
