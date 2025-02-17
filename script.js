//complete this cobde
class Rectangle {
	constructor(width,height){
		if(width<=0 || height<=0){
			throw new error("width and height must be positive integer")
		}else{
			this.width=width;
		this.height=height;
		}
		
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
		if(side<=0){
			throw error("side must be positive integer")
		}
		super(side,side)
	}

	getPermiter(){
		return 4*(this._side)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
