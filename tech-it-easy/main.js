// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];
// console.log(inventory);

// opdracht 1
function getAllTVTypes(allTVs){
  for (let i = 0; i < allTVs.length; i++) {
    let tvType = allTVs[i].type;
    console.log((i+1) + ") " + tvType);
  }
}
// getAllTVTypes(inventory);
function getAllSoldOutTVs(allTVs){
  for (let i = 0; i < allTVs.length; i++) {
    let stock = allTVs[i].originalStock;
    let sold = allTVs[i].sold;
    // console.log("sold: " + sold + " stock: " + stock + " sum: " + (stock - sold));
    if (stock - sold === 0) {
      console.log(allTVs[i]);
    }
  }
}
// getAllSoldOutTVs(inventory);
function getAllTVsThatHaveAmbiLight(allTVs) {
  for (let i = 0; i < allTVs.length; i++) {
    let hasAmbiLight = allTVs[i].options.ambiLight;
    console.log((i+1) + ") " + hasAmbiLight);
    if (hasAmbiLight) {
      console.log(allTVs[i])
    }
  }
}
// getAllTVsThatHaveAmbiLight(inventory);
function sortPriceFromLowToHigh(allTVs) {
  let sorted = [];
  console.log("Before:");
  for (let i = 0; i < allTVs.length; i++) {
    let current = allTVs[i].price;
    sorted[i] = current;
    console.log((i+1) + ") " + sorted[i]);
  }
  sorted.sort();
  console.log("After:");
  for (let i = 0; i < sorted.length; i++) {
    console.log((i+1) + ") " + sorted[i])
  }
}
// sortPriceFromLowToHigh(inventory);

// opdracht 2
function getNumberOfSoldTVs(allTVs){
  let sold = 0;

  for (let i = 0; i < allTVs.length; i++) {
    sold += allTVs[i].sold;
  }

  // console.log(sold + " tv's verkocht");
  return sold;
}
// getNumberOfSoldTVs(inventory);
function getNumberOfBoughtTVs(allTVs) {
  let bought = 0;

  for (let i = 0; i < allTVs.length; i++) {
    bought += allTVs[i].originalStock;
  }

  // console.log(er zijn [" + bought + "] tv's gekocht");
  return bought;
}
// getNumberOfBoughtTVs(inventory);

// opdracht 3
function getAllBrands(allTVs) {
  let out = "";
  for (let i = 0; i < allTVs.length; i++) {
    let brand = allTVs[i].brand;
    // console.log(brand);
    out += brand + " ";
  }
  return out;
}
// getAllBrands(inventory);

// opdracht 4
function showOneTV(allTVs, index) {
  const tv = allTVs[index];
  let brand = tv.brand;
  let type = tv.type;
  let name = tv.name;

  const out = brand + " " + type + " - " + name;
  console.log(out);
}
// showOneTV(inventory, 3);
function formatPrice(price) {
  let formatted = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price);
  console.log(formatted);
}
function formatPrice2(price) {
  let formatted = "€ " + Math.ceil(price) + ",--";
  console.log(formatted);
}
// formatPrice(123456.789);
formatPrice2(123456.789);
// formatPrice(222.9999);
formatPrice2(222.9999);

