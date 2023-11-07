{
  // Type guard using instance of
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }
  // Dog inherit Animal
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am Barking");
    }
  }
// Cat inherit Animal
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am mewaing");
    }
  }
  // create a dog or cat object
  const dog = new Dog("Dog Bhai", "dog");
  const cat = new Cat("Dog Bhai", "dog");

  // using instance of
  // handle smartly
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };


  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  getAnimal(dog);
  getAnimal(cat);
}
