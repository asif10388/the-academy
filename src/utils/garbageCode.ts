// const addItem = (cartItems, itemToAdd) => {
//   const existing = cartItems.find((item) => item.id === itemToAdd.id);
//   const cartIndex = cartItems.indexOf(existing);

//   if (existing) {
//     const updatedItems = [...cartItems, (cartItems[cartIndex].quantity += 1)];
//     return [...cartItems];
//   } else {
//     const newCartItems = [...cartItems, { ...itemToAdd, quantity: 1 }];
//     return newCartItems;
//   }
// };
