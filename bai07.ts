export default class User {
    private _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this._name = value;
    }
  }
  
  // Test
  const user = new User("Nguyen Van A");
  
  console.log("Name:", user.name);
  
  user.name = "Tran Van B";
  
  console.log("New name:", user.name);
  