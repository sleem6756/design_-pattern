class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  displayDetails() {
    console.log(`"${this.title}" by ${this.author}, published in ${this.year}`);
  }
}

const book1 = new Book("JavaScript Mastery", "Sleem", 2025);
book1.displayDetails();
