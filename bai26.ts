class Product {
    constructor(
      public name: string,
      public price: number
    ) {}
  }
  
  class Order {
    products: Product[];
  
    constructor(products: Product[] = []) {
      this.products = products;
    }
  
    calculateTotal(): number {
      return this.products.reduce(
        (total, product) => total + product.price,
        0
      );
    }
  }
  
  const order = new Order([
    new Product("Phone", 500),
    new Product("Mouse", 50),
    new Product("Keyboard", 100),
  ]);
  
  console.log("Total:", order.calculateTotal());
  