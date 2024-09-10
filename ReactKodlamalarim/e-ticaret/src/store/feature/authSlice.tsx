import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import IRegister from "../../models/IRegister";
import { json } from "stream/consumers";
import ILogin from "../../models/ILogin";
import swal from "sweetalert";

// Global State üzerinde kullanacağımız tüm değişkenleri barındıran bir objemiz olacak
const initialStateAuth = {
    user: [],
    token: '',
    isAuth: false,
    isAuthLogin: false,
    isAuthRegister: false
}

// Sunucuya istek atacağınız fetch işlemlerinin tanımlamalarını yapıyorsunuz.
export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    async (payload: IRegister) => {
        const response = await fetch('http://localhost:8080/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'userName': payload.userName,
                'password': payload.password,
                'email': payload.email

            })
        }).then(data => data.json())
        return response;
    }
);

export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async (payload: ILogin) => {
        const response = await fetch('http://localhost:8080/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'userName': payload.userName,
                'password': payload.password
            })
        }).then(data => data.json())
        return response;
    }
);

// Initial State ve Fetch işlemlerini yönetmek üzere slice tanımı yapıyoruz.
const authSlice = createSlice({
    name: 'auth',
    initialState: initialStateAuth,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchRegister.pending, (state) => {
            state.isAuthRegister = true
        })
        build.addCase(fetchRegister.fulfilled, (state) => {
            state.isAuthRegister = false
            swal('Dikkat', 'Kullanıcı kayıt edildi.', 'success')
        })
        build.addCase(fetchLogin.pending, (state) => {
            state.isAuthLogin = true
        })
        build.addCase(fetchLogin.fulfilled, (state, action) => {
            state.isAuthLogin = false;
            //DİKKAT !!! action.payload, fetch işleminde return ettiğiniz response demektir.
            if (action.payload) {
                state.isAuth = true
                swal('Başarılı', 'Giriş yapılmıştır.', 'success')
            } else {
                swal('Hata', 'Kullanıcı adı ya da şifre hatalıdır.', 'error')
            }
        })
    }
});

export default authSlice.reducer;