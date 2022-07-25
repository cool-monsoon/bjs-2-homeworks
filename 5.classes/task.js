class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		if (this.state === 0) {
			this.state = 0;
		}

		let fixedState = this.state * 1.5
		if (fixedState > 100) {
			this.state = 100;
		} else {
			this.state = fixedState;
		}
		return this.state;
	}

	set state(newState) {
		if (newState < 0) {
			this.state = 0;
		} else if (newState > 100) {
			this.state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}

}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.state = 100;
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.state = 100;
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.state = 100;
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.state = 100;
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.state = 100;
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		let printItem = book;
		if (printItem.state > 30) {
			this.books.push(printItem);
		}
	}

	findBookBy(type, value) {
		let searchBook = this.books.find(book => book[type] === value);
		return searchBook ? searchBook : null;
	}

	giveBookByName(bookName) {
		let deleteBook;
		let bookIndex = this.books.findIndex(book => book.name === bookName);
		if (bookIndex === -1) {
			return null;
		} else {
			deleteBook = this.books.splice([bookIndex], 1);
			return deleteBook[0];
		}
	}
}

// Задача 3

class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
	}

	addMark(mark, subjectName) {
		if (mark < 1 || mark > 5) {
			return "Ошибка! Оценка должна иметь значение от 1 до 5";
		} else if (this.subjects === undefined) {
			this.subjects = [{
				subject: subjectName,
				marks: [mark],
			}];
		} else {
			let subjectIndex = this.subjects.findIndex(element => element.subject === subjectName);
			if (subjectIndex !== -1) {
				this.subjects[subjectIndex].marks.push(mark);
			} else {
				this.subjects.push({
					subject: subjectName,
					marks: [mark],
				})
			}
		}
	}

	getAverage() {
		let totalMarks = [];
		this.subjects.forEach(item => totalMarks.push(...item.marks));
		return totalMarks.reduce((acc, item) => acc + item, 0) / totalMarks.length;
	}

	exclude(reason) {
		delete Student.subject;
		delete Student.marks;
		this.ecluded = reason;
	}

	getAverageBySubject(subjectName) {
		let index = this.subjects.findIndex(element => element.subject === subjectName);
		if (index === -1) {
			return "Этот предмет не существует";
		} else {
			return this.subjects[index].marks.reduce((acc, element) => acc + element, 0) / this.subjects[index].marks.length;
		}
	}
}

let student1 = new Student("Ronny", "female", 34);
let student2 = new Student("Anny", "female", 32);
let student3 = new Student("Jonny", "male", 35);

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry");
student.getAverageBySubject("geometry");
student.getAverageBySubject("biology");
student.getAverage();
student.exclude("Исключен за попытку подделать оценки");
