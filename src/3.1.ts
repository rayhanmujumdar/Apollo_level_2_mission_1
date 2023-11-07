{
  // OOP class
  class Animal {
    // parameter properties
    constructor(public name: string, public species: string,public sound: string) {}
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German shepard  bhai", "dog", "Ghew Ghew");
  const cat = new Animal("Persian bhai", "cat", "meaw meaw");

  console.log(dog);
  console.log(cat);
}
