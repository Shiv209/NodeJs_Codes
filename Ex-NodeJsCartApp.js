const shoppingApp = require("./Ex-NodeJsCartIIFE");
//U will not create an object, U actually get the object directly.
shoppingApp.addItem({id:111, itemName:"iphone 12 mini", price:64000 });
shoppingApp.addItem({id:121, itemName:"ipad pro", price:68900 });
shoppingApp.addItem({id:131, itemName:"macbook pro", price:144000 });
shoppingApp.addItem({id:141, itemName:"airpods pro", price:24900 });

const items = shoppingApp.getAll();
items.forEach((element) => {
    console.log(element.itemName)    
});

const selectedItem = shoppingApp.findItem(131);
console.log(`The found item: ${selectedItem.itemName}`);