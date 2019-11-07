// JS2 CA

class fruit {
  name: string;
  constructor(fruitName: string) {
    this.name = fruitName;
  }
  eat(ate: number) {
    console.log(
      "Hi, my favourite fruit is" + this.name + "and i eat" + ate + "everyday"
    );
  }
}

let fruits = new fruit("orange");
fruits.eat(2);

// To check the types of variables in typescript.

let abc;

if (typeof abc === "number") {
  // do something
}
