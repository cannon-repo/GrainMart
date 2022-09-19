import { createSlice } from "@reduxjs/toolkit";


const ss = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde. Deleniti quaerat, maiores alias debitis ad itaque at vitae, quidem pariatur ex recusandae quod fuga sint officia nemo repudiandae voluptate accusamus? Perspiciatis minima illum atque aspernatur nobis rerum facilis, dignissimos eos, tempora nam quis? Omnis libero quasi neque atque quia?";
const EachProductSlice = createSlice({
    name: 'EachProduct',
    initialState: {
        name: '',
        category: '',
        price: '',
        offer: '',
        seller: '',
        info: '',
        image: '',
        toggle: true,
        state: false,
    },
    reducers: {
        setProductDetails: (state, payload) => {
            state.name = payload.payload.Name;
            state.category = payload.payload.Category;
            state.price = payload.payload.Price;
            state.offer = payload.payload.Offer;
            state.seller = payload.payload.Seller;
            state.info = ss;
            state.image = payload.payload.Image;
        },
        resetProductDetails: (state) => {
            state.name = '';
            state.category = '';
            state.price = '';
            state.offer = '';
            state.seller = '';
            state.info = '';
            state.image = '';
            state.toggle = true;
            state.state = false;
        },
        toggle: (state) => {
            state.toggle = !state.toggle;
        }
    }
});

export const {setProductDetails, resetProductDetails, toggle} = EachProductSlice.actions;
export default EachProductSlice.reducer;