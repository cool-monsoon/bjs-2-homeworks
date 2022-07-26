//Задача №1

function parseCount(arg) {
	if (isNaN(Number.parseInt(arg))) {
		throw new Error("Невалидное значение");
	}
	return Number.parseInt(arg);
}

function validateCount(arg) {
	try {
		return parseCount(arg);
	} catch (error) {
		return error;
	}
}

//Задача 2
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if ((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.b + this.c) < this.a){
			throw new Error("Треугольник с такими сторонами не существует");
	}
}

getPerimeter(){
return this.a + this.b +this.c ;
}

getArea(){
	let p = (this.a + this.b + this.c) / 2;
	return +(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3);
}
}

function getTriangle(a, b, c){
	try {
let triangle1 = new Triangle(a, b, c);
return triangle1;
}
catch(error){
	return {
	getArea: () => "Ошибка! Треугольник не существует",
  getPerimeter: () => "Ошибка! Треугольник не существует"
	}
}
}
