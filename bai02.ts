// Class cha Person
class Person {
    constructor(
      public name: string,
      public age: number
    ) {}
  }
  
  // Student kế thừa Person
  class Student extends Person {
    constructor(
      name: string,
      age: number,
      public grade: string
    ) {
      super(name, age);
    }
  
    displayInfo(): void {
      console.log(
        `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
      );
    }
  }
  
  // Test
  const student = new Student("Gia An", 21, "A");
  student.displayInfo();