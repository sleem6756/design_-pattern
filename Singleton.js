class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {Strategy
      return DatabaseConnection.instance;
    }

    this.connection = "Connected to main database";
    DatabaseConnection.instance = this;
  }

  query(sql) {
    console.log(`Running query: "${sql}"`);
  }

  showStatus() {
    console.log(this.connection);
  }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

db1.query("SELECT * FROM users WHERE name = 'Sleem';");
db2.showStatus();

console.log(db1 === db2);
