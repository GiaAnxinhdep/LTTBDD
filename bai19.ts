export default class Animal {
    makeSound(): void {
      console.log("Animal makes sound");
    }
  }
  
  class Dog extends Animal {
    override makeSound(): void {
      console.log("Dog says Woof!");
    }
  }
  
  class Cat extends Animal {
    override makeSound(): void {
      console.log("Cat says Meow!");
    }
  }
  
  const animals: Animal[] = [
    new Dog(),
    new Cat(),
  ];
  
  animals.forEach(animal => {
    animal.makeSound();
  });
  