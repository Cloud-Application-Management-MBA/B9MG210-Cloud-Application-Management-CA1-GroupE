const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const baseURL = "https://arnottsstorage123.blob.core.windows.net/images/";

const products = [

  // BEAUTY
  { brand:"CHANEL", name:"Rouge Allure Lipstick", price:45, category:"beauty", image: baseURL+"Chanel%20lipstick.jpg" },
  { brand:"DIOR", name:"Miss Dior Perfume", price:120, category:"beauty", image: baseURL+"Dior%20perfume.jpg" },
  { brand:"MAC", name:"Studio Skin Tint", price:35, category:"beauty", image: baseURL+"MAC%20skin%20tint.jpg" },
  { brand:"SMITH & CO", name:"Scented Candle", price:25, category:"beauty", image: baseURL+"Scented%20Candle.jpg" },

  // MEN
  { brand:"NIKE", name:"Men Hoodie", price:60, category:"men", image: baseURL+"men%20hoodie.jpg" },
  { brand:"ZARA", name:"Overshirt Jacket", price:75, category:"men", image: baseURL+"mens%20overshirt.jpg" },
  { brand:"NEW BALANCE", name:"Running Shoes", price:95, category:"men", image: baseURL+"NB%20Shoes.jpg" },
  { brand:"LEVIS", name:"Straight Leg Jeans", price:85, category:"men", image: baseURL+"straight%20leg%20jeans.jpg" },

  // WOMEN
  { brand:"KARLA BREE", name:"Court Heels", price:110, category:"women", image: baseURL+"Court%20heels.jpg" },
  { brand:"MARC JACOBS", name:"Tote Bag", price:150, category:"women", image: baseURL+"MJ%20Bag.jpg" },
  { brand:"PANDORA", name:"Stacking Ring", price:40, category:"women", image: baseURL+"stacking%20ring.jpg" },
  { brand:"ZARA", name:"Wide Leg Jumpsuit", price:130, category:"women", image: baseURL+"Wideleg%20Jumpsuite.jpg" },

  // HOMEWARE (DISCOUNT ONLY)
  { brand:"KARLA BREE", name:"400 Thread Bedding", price:95, oldPrice:180, category:"homeware", image: baseURL+"KARLA%20BREE%20Double%20Tape%20Edge%20Bedding.jpg" },
  { brand:"LE CREUSET", name:"Cast Iron Casserole", price:220, oldPrice:300, category:"homeware", image: baseURL+"LE%20CREUSET%20Cast%20Iron%20Round%20Casserole.jpg" },
  { brand:"SMITH & CO", name:"Amber Diffuser", price:45, oldPrice:70, category:"homeware", image: baseURL+"SMITH%20%26%20CO%20Amber%20%26%20Freesia%20Diffuser.jpg" },
  { brand:"STANLEY", name:"Classic Tumbler", price:35, oldPrice:55, category:"homeware", image: baseURL+"STANLEY%20Tumbler.jpg" }

];

app.get('/api/products', (req, res) => {
  const category = req.query.category;

  if (category) {
    return res.json(products.filter(p => p.category === category));
  }

  // HOME = ALL PRODUCTS
  res.json(products);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));