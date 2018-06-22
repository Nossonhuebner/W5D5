class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this._incrementTime();
    this.printTime();
  }

  _incrementTime() {
    this.seconds = (this.seconds + 1) % 60;
    if (this.seconds === 0) {
      this.minutes = (this.minutes + 1) % 60;
      if (this.minutes === 0) {
        this.hours = (this.hours + 1) % 24;
      }
    }
  }
}

// const clock = new Clock();
