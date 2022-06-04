var cart_products = [
  {
    product_id: "IN2350",
    product_name: "Teclado Mecânico Rozar K600",
    product_price: "650.00",
    product_quantity: "1",
    product_url: "http://www.foo.com/p/IN2350",
    product_category: "peripherals",
    product_brand: "Rozar",
  },
  {
    product_id: "IN4566",
    product_name: 'Monitor Gamer LED GL UltraWide 25"',
    product_price: "1399.99",
    product_quantity: "1",
    product_url: "http://www.foo.com/p/IN4566",
    product_category: "monitor",
    product_brand: "GL",
  },
  {
    product_id: "ES7112",
    product_name: "Pacote de Post-it Fenix 50 unidades",
    product_price: "14.95",
    product_quantity: "5",
    product_url: "http://www.foo.com/p/ES7112",
    product_category: "office",
    product_brand: "Fenix",
  },
  {
    product_id: "BR8810",
    product_name: "Miniatura Yoshi Haras",
    product_price: "6.50",
    product_quantity: "2",
    product_url: "http://www.foo.com/p/BR8810",
    product_category: "others",
    product_brand: "Haras",
  },
];

let freeShipping = false;
let totalPrice = 0;

const getInfoProduct = cart_products => {
  totalPrice = cart_products.reduce((acc, { product_price }) => {
    return acc + Number(product_price);
  }, 0);
  freeShipping = totalPrice > 300;
  return { totalPrice: Number(totalPrice.toFixed(2)), freeShipping: freeShipping };
};

console.log(getInfoProduct(cart_products));
console.log("totalPrice:", totalPrice.toFixed(2));
console.log("freeShipping:", freeShipping);
