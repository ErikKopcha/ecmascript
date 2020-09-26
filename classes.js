class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name + ' говорит привет!');
  }
}

const max = new Person('max');
max.greet();

console.log(max);

class Programmer extends Person {
  constructor(name, job) {
    super(name);

    this._job = job;
  }

  get job() {
    return this._job.toUpperCase();
  }

  set job(job) {
    if (job.length < 2) {
      console.log('Validation failed');
    } else {
      this._job = job;
    }
  }

  greet() {
    super.greet();
    console.log('Rewriten');
  }
}

const frontend = new Programmer('Max', 'Frontend');
frontend.greet();
console.log(frontend);
frontend.job = 'Backend';
console.log(frontend.job);

// for static def
class Util {
  average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length;
  }
}

const util = new Util();
console.log(util.average(1, 1, 2, 3, 5, 8, 13));

// Static
class UtilStatic {
  static average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length;
  }
}

const utilStatic = UtilStatic.average(1, 1, 2, 3, 5, 8, 13)
console.log(utilStatic);