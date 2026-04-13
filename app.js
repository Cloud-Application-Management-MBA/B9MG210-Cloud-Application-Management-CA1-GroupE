const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const baseURL = "https://arnottsstorage123.blob.core.windows.net/images/";

const products = [

  // NEW ARRIVALS 
  { id:17, brand:"HOURGLASS", name:"Unreal Liquid Highlighter", price:43, category:"new", image: baseURL+"HOURGLASS%20Highlighter.jpg", details:"Liquid glow highlighter" },
  { id:19, brand:"SOL DE JANEIRO", name:"Cheeky Bikini Mist", price:25, category:"new", image: baseURL+"SOL%20DE%20JANEIRO%20Mist.jpg", details:"Refreshing mist fragrance" },

  // BEAUTY (UNCHANGED)
  { id:1, brand:"CHANEL", name:"Rouge Allure Lipstick", price:45, category:"beauty", image: baseURL+"Chanel%20lipstick.jpg", details:"Luxury lipstick" },
  { id:2, brand:"DIOR", name:"Miss Dior Perfume", price:120, category:"beauty", image: baseURL+"Dior%20perfume.jpg", details:"Floral perfume" },
  { id:3, brand:"MAC", name:"Studio Skin Tint", price:35, category:"beauty", image: baseURL+"MAC%20skin%20tint.jpg", details:"Light skin tint" },
  { id:4, brand:"SMITH & CO", name:"Scented Candle", price:25, category:"beauty", image: baseURL+"Scented%20Candle.jpg", details:"Scented candle" },

  // MEN (UNCHANGED)
  { id:5, brand:"NIKE", name:"Men Hoodie", price:60, category:"men", image: baseURL+"men%20hoodie.jpg", details:"Comfort hoodie" },
  { id:6, brand:"ZARA", name:"Overshirt Jacket", price:75, category:"men", image: baseURL+"mens%20overshirt.jpg", details:"Overshirt jacket" },
  { id:7, brand:"NEW BALANCE", name:"Running Shoes", price:95, category:"men", image: baseURL+"NB%20Shoes.jpg", details:"Running shoes" },
  { id:8, brand:"LEVIS", name:"Straight Leg Jeans", price:85, category:"men", image: baseURL+"straight%20leg%20jeans.jpg", details:"Denim jeans" },

  // WOMEN (UNCHANGED)
  { id:9, brand:"KARLA BREE", name:"Court Heels", price:110, category:"women", image: baseURL+"Court%20heels.jpg", details:"Court heels" },
  { id:10, brand:"MARC JACOBS", name:"Tote Bag", price:150, category:"women", image: baseURL+"MJ%20Bag.jpg", details:"Leather tote bag" },
  { id:11, brand:"PANDORA", name:"Stacking Ring", price:40, category:"women", image: baseURL+"stacking%20ring.jpg", details:"Stacking ring" },
  { id:12, brand:"ZARA", name:"Wide Leg Jumpsuit", price:130, category:"women", image: baseURL+"Wideleg%20Jumpsuite.jpg", details:"Jumpsuit" },

  // HOMEWARE (UNCHANGED WITH DISCOUNT)
  { id:13, brand:"KARLA BREE", name:"400 Thread Bedding", price:95, oldPrice:180, category:"homeware", image: baseURL+"KARLA%20BREE%20Double%20Tape%20Edge%20Bedding.jpg", details:"Luxury bedding" },
  { id:14, brand:"LE CREUSET", name:"Cast Iron Casserole", price:220, oldPrice:300, category:"homeware", image: baseURL+"LE%20CREUSET%20Cast%20Iron%20Round%20Casserole.jpg", details:"Cookware" },
  { id:15, brand:"SMITH & CO", name:"Amber Diffuser", price:45, oldPrice:70, category:"homeware", image: baseURL+"SMITH%20%26%20CO%20Amber%20%26%20Freesia%20Diffuser.jpg", details:"Diffuser" },
  { id:16, brand:"STANLEY", name:"Classic Tumbler", price:35, oldPrice:55, category:"homeware", image: baseURL+"STANLEY%20Tumbler.jpg", details:"Tumbler" }

];

// APIs
app.get('/api/products', (req, res) => {
  const category = req.query.category;
  if (category) return res.json(products.filter(p => p.category === category));
  res.json(products);
});

app.get('/api/product/:id', (req, res) => {
  res.json(products.find(p => p.id == req.params.id));
});

app.listen(PORT, () => console.log("Server running on port " + PORT));