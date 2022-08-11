class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id) {
		if (id === undefined) {
			throw new Error("Идентификатор будильника не передан");
		} else if (this.alarmCollection.some(element => element.id === id)) {
			console.error("Будильник с таким id уже существует");
		} else {
			this.alarmCollection.push({ time, callback, id });
		}
	}

	removeClock(id) {
		let deleteClock = this.alarmCollection.filter(element => element.id === id);
		if (deleteClock === -1) {
			return false;
		} else {
			this.alarmCollection.splice(deleteClock, 1);
			return true;
		}
	}

	getCurrentFormattedTime() {
		return new Date().toTimeString().slice(0, 5);
	}

	start() {
		let checkClock = clock => {
			if (clock.time === this.getCurrentFormattedTime()) {
				clock.callback();
			}
		}

		if (this.timerId === null) {
			this.timerId = setInterval(() => {
				this.alarmCollection.forEach(clock => checkClock(clock));
			}, 1000);
		}
	}

	stop() {
		if (this.timerId !== undefined && this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		console.log(`Все звонки будильников: ${this.alarmCollection.length}`);
		this.alarmCollection.forEach(element => console.log(`Будильник ${element.id} зазвонит в ${element.time}`));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}


