class Student {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}`);
  }
}

class ProtoStudent {
  universitu = 'Oxford';
}

const student = Reflect.construct(Student, ['Igor'], ProtoStudent);

console.log(student);