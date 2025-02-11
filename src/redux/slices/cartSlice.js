import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние корзины
const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
    reviewsBox:[]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);

            state.totalQuantity++;

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    image: newItem.image,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }

            // Корректный расчет общей суммы
            state.totalAmount = state.cartItems.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity);
            }, 0); // Указываем начальное значение total как 0
        },
        deleteItem:(state, action)=>{
            const id = action.payload
            const existingItem = state.cartItems.find(item=>item.id===id)
            if(existingItem){
                state.cartItems = state.cartItems.filter(item=>item.id !== id)
                state.totalQuantity =state.totalQuantity -existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce((total, item) => {
                return total - Number(item.price) * Number(item.quantity);
            }, 0);
        },
      
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
