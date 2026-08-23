class Account {
    public owner: string;
    private balance: number;
    readonly accountNumber: string;
  
    constructor(
      owner: string,
      balance: number,
      accountNumber: string
    ) {
      this.owner = owner;
      this.balance = balance;
      this.accountNumber = accountNumber;
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  const account = new Account(
    "John",
    1000,
    "ACC001"
  );
  
  console.log(account.owner);
  console.log(account.getBalance());
  console.log(account.accountNumber);
  
  // Không được phép:
  // account.accountNumber = "ACC002";
  