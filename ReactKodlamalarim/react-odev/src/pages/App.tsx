import React from 'react'
import { IProduct } from '../models/IProduct'

function App() {
    const productList: IProduct[] = [{
        "id": 1,
        "name": "Spice M-5115",
        "brand": "Spice",
        "price": 665.48,
        "stock": 88
    }, {
        "id": 2,
        "name": "Sony Ericsson Yendo",
        "brand": "Sony",
        "price": 274.49,
        "stock": 98
    }, {
        "id": 3,
        "name": "Samsung A877 Impression",
        "brand": "Samsung",
        "price": 970.49,
        "stock": 9
    }, {
        "id": 4,
        "name": "Lava V2 3GB",
        "brand": "Lava",
        "price": 692.92,
        "stock": 99
    }, {
        "id": 5,
        "name": "Huawei P smart Pro 2019",
        "brand": "Huawei",
        "price": 743.95,
        "stock": 45
    }]

    return (
        <>
            <h1>Ödev - 1</h1>
            <hr />
            {
                productList.map((data, index) => {
                    return (
                        <div>
                            <div>Id ... : {data.id}</div>
                            <div>Name ... : {data.name}</div>
                            <div>Brand ... : {data.brand}</div>
                            <div>Price ... : {data.price} $</div>
                            <div>Stock ... : {data.stock}</div>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default App