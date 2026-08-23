export default class Person {
    constructor(
      public name: string,
      public age: number
    ) {}
  
    displayInfo(): void {
      console.log(
        `Name: ${this.name}, Age: ${this.age}`
      );
    }
  }
  
  class Teacher extends Person {
    subject: string;
  
    constructor(
      name: string,
      age: number,
      subject: string
    ) {
      super(name, age);
      this.subject = subject;
    }
  
    introduce(): void {
      console.log(
        `I am ${this.name}, I teach ${this.subject}`
      );
    }
  }
  
  const teacher = new Teacher(
    "Mr. Smith",
    35,
    "Mathematics"
  );
  
  teacher.displayInfo();
  teacher.introduce();
  