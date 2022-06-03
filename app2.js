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

/* let freeShipping = false;
let totalPrice = 0;

const cartPricesInfo = cart_products
  .map(product => ({
    product_id: product.product_id,
    product_name: product.product_name,
    product_price: parseFloat(product.product_price),
    product_quantity: parseFloat(product.product_quantity),
    product_url: product.product_url,
    product_category: product.product_category,
    product_brand: product.product_brand,
  }))
  .reduce((acc, product) => {
    let total = (acc += product.product_price);

    if (total > 300) {
      freeShipping = true;
    }

    return { acc };
  }, {});

console.log(cartPricesInfo, freeShipping);
 */

let freeShipping = false;
let totalPrice = 0;

const cartProductsCopy = cart_products.map(product => {
  product = {
    product_id: product.product_id,
    product_name: product.product_name,
    product_price: Number(product.product_price),
    product_quantity: product.product_quantity,
    product_url: product.product_url,
    product_category: product.product_category,
    product_brand: product.product_brand,
  };

  return product;
});

const totalProductPrice = cartProductsCopy.reduce((acc, item) => (totalPrice = Math.round(acc + item.product_price)), 0);

const isFreeShipping = () => {
  if (totalPrice > 300) {
    freeShipping = true;
  }

  return (totalCartProducts = {
    totalPrice: totalProductPrice,
    freeShipping,
  });
};

isFreeShipping(totalProductPrice);

console.log(isFreeShipping());
