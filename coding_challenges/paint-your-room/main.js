const orderSupplies = (item, callback) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random() * 3000 + 1000;

  setTimeout( () => {
    const foundItem = warehouse.find((obj) => obj.item === item);

    if (foundItem) {
      callback(foundItem);
    }

  }, deliveryTime )
}

orderSupplies('paint', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));
orderSupplies('brush', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));