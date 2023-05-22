const fs = require("fs/promises");
const path = require("path");
console.log(__dirname);

const usersPath = path.join(__dirname, "..", "db", "users.json");

console.log(usersPath);

class FileOperations {
  constructor(path) {
    this.path = path;
  }
  async create(data) {
    return await fs.writeFile(this.path, JSON.stringify(data, null, 2));
  }

  async read() {
    return await fs.readFile(this.path, { encoding: "utf-8" });
  }

  async update(data) {
    const users = JSON.parse(await this.read());
    users.push(data);
    return await this.create(users);
  }

  async remove() {
    return await fs.unlink(this.path);
  }

  async display() {
    const data = await this.read();
    console.log(data);
  }

  async replace() {
    //db/json видаляється і смтворюється нова папка на вищому рівні і в ній створюється новий файл json
  }
}

const file = new FileOperations(usersPath);
const data = [
  { name: "Sveta" },
  {
    name: "Alex",
  },
  {
    name: "Zakhar",
  },
];

// file.display();
// file.create(data);
// file.update({ name: "Andryi" });
// file.remove();

async function tryCatchHandler(callback) {
  try {
    await callback();
  } catch (error) {
    console.log(error.massage);
  }
}

// tryCatchHandler(file.display.bind(file));
tryCatchHandler(file.create.bind(file, data));
// tryCatchHandler(file.update.bind(file, { name: "Masha" }));
// tryCatchHandler(file.remove.bind(file));
