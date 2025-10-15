class Shape {
  constructor(type) {
    this.type = type;
  }

  draw() {
    console.log(`Drawing a ${this.type}.`);
  }
}

class Circle extends Shape {
  constructor() {
    super("Circle");
  }

  draw() {
    console.log(" Drawing a Circle.");
  }
}

class Square extends Shape {
  constructor() {
    super("Square");
  }

  draw() {
    console.log("Drawing a Square.");
  }
}

class ShapeFactory {
  static createShape(shapeType) {
    if (shapeType === "circle") {
      return new Circle();
    } else if (shapeType === "square") {
      return new Square();
    } else {
      throw new Error("Unknown shape type");
    }
  }
}

console.log("Factory used by Sleem:");
const shape1 = ShapeFactory.createShape("circle");
shape1.draw();

const shape2 = ShapeFactory.createShape("square");
shape2.draw();
