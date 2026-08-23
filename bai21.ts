// Class User (thêm vào để tránh lỗi)
// import User from "./Bai07";
export class User {
    constructor(public name: string) {}
  }
  
  /* ===== 21 ===== */
  class Repository<T> {
    private items: T[] = [];
  
    add(item: T) {
      this.items.push(item);
    }
  
    getAll(): T[] {
      return this.items;
    }
  }
  
  // Test
  const userRepository = new Repository<User>();
  
  userRepository.add(new User("John"));
  userRepository.add(new User("Alice"));
  
  console.log(userRepository.getAll());