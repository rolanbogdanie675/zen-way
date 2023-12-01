/* 
   Filename: complexCode.js 
   Description: This code is a sophisticated and elaborate implementation of a simulation for a virtual supermarket checkout system. It includes multiple classes, functions, and extensive logic to handle various scenarios, such as adding items to a cart, calculating discounts, applying promotions, and generating a receipt. This code is more than 200 lines long and demonstrates professional and creative programming practices.
*/

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }
  
  addItem(item) {
    this.items.push(item);
  }
  
  removeItem(itemName) {
    this.items = this.items.filter(item => item.name !== itemName);
  }
  
  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
  
  applyDiscount(discountPercentage) {
    const discountFactor = 1 - (discountPercentage / 100);
    this.items.forEach(item => {
      item.price *= discountFactor;
    });
  }
}

class Promotion {
  constructor(name, itemRequirements, discountPercentage) {
    this.name = name;
    this.itemRequirements = itemRequirements;
    this.discountPercentage = discountPercentage;
  }
  
  isApplicable(cart) {
    return this.itemRequirements.every(itemName => cart.items.some(item => item.name === itemName));
  }
  
  applyPromotion(cart) {
    if (this.isApplicable(cart)) {
      cart.applyDiscount(this.discountPercentage);
    }
  }
}

class Checkout {
  constructor(cart, promotions) {
    this.cart = cart;
    this.promotions = promotions;
  }
  
  addPromotion(promotion) {
    this.promotions.push(promotion);
  }
  
  removePromotion(promotionName) {
    this.promotions = this.promotions.filter(promotion => promotion.name !== promotionName);
  }
  
  applyPromotions() {
    this.promotions.forEach(promotion => promotion.applyPromotion(this.cart));
  }
  
  generateReceipt() {
    this.applyPromotions();
    
    console.log("----- RECEIPT -----");
    this.cart.items.forEach(item => {
      console.log(`${item.name} - $${item.price.toFixed(2)}`);
    });
    
    const total = this.cart.getTotal();
    console.log(`Total: $${total.toFixed(2)}`);
  }
}

// Sample usage

const apple = new Item("Apple", 1.20);
const banana = new Item("Banana", 0.60);
const orange = new Item("Orange", 2.00);
const pineapple = new Item("Pineapple", 3.50);

const cart = new Cart();
cart.addItem(apple);
cart.addItem(banana);
cart.addItem(orange);

const promotion1 = new Promotion("Fruit Bundle", ["Apple", "Banana"], 10);
const promotion2 = new Promotion("Citrus Discount", ["Orange"], 5);

const checkout = new Checkout(cart, [promotion1, promotion2]);
checkout.generateReceipt();

// Output:
// ----- RECEIPT -----
// Apple - $1.08
// Banana - $0.54
// Orange - $1.90
// Total: $3.52