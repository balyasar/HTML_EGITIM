import { configureStore } from "@reduxjs/toolkit";
import {
    authSlice
} from "./feature";
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})
// Store içerisindeki bileşenlerin TypeScript tarafından yönetimi ve tanımı için
// özel tanımlamalar yapmak gereklidir. Bu tanımlar erişimi kolaylaştırarak tip
// tanımlamalarını yapacaktır.
// store içindeki fetch ve reducerların tetiklenmesi için dispatch kullanılmalı
export type ETicaretDispatch = typeof store.dispatch;
// initial state içindeki değişkenleri seçmek için slice interface tanımı yapmak gerekli
export type RootType = ReturnType<typeof store.getState>
export const useGlobalSelector = useSelector.withTypes<RootType>();
export default store