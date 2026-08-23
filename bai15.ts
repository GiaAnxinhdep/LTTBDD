class Book {
    constructor(
      public title: string,
      public author: string
    ) {}
  }
  
  class User {
    constructor(public name: string) {}
  }
  
  class Library {
    books: Book[] = [];
    users: User[] = [];
  
    addBook(book: Book): void {
      this.books.push(book);
    }
  
    addUser(user: User): void {
      this.users.push(user);
    }
  }
  
  const library = new Library();
  
  library.addBook(
    new Book("Clean Code", "Robert C. Martin")
  );
  
  library.addUser(
    new User("John")
  );
  
  console.log(library.books);
  console.log(library.users);
  