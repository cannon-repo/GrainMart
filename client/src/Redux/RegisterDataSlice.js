import {createSlice} from "@reduxjs/toolkit";

const RegisterDataSlice = createSlice({
    name: 'RegisterData',
    initialState: {
        sectionNum: 1,
        prevActive: false,
        nextActive: true,
        regActive: false,
    },
    reducers: {
        getPrevSection: (state) => {
            state.sectionNum = 1;
            state.prevActive = false;
            state.nextActive = true;
        },
        getNextSection: (state) => {
            state.sectionNum = 2;
            state.prevActive = true;
            state.nextActive = false;
        },
        setRegisterActive: (state) => {
            state.regActive = true;
        },
        setRegisterDisabled: (state) => {
            state.regActive = false;
        }
    }
});

export const {getNextSection, getPrevSection, setRegisterActive, setRegisterDisabled} = RegisterDataSlice.actions;
export default RegisterDataSlice.reducer;