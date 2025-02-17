//complete this cobde
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	get width(){
		return this._width
	}
	get height (){
		return this._height 
	}
	getArea(){
		return (this._width*this._height )
	}
	
}

class Square extends Rectangle {
	constructor (side){
		super(side,side)
	}

	getPermiter(){
		return 4*(this._side)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
