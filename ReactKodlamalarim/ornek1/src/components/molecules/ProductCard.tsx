import { Rating } from '@mui/material'
import React from 'react'
import './ProductCard.css'

interface IProductProps {
    urunAdi: string
    urunFiyati: number
    urunResim: string
    rate: number
}

function ProductCard(props: IProductProps) {
    return (
        <>
            <div className="col-3 p-4">
                <div className="row border rounded-4 p-2 product">
                    <div className="col">
                        <div className="row mb-1">
                            <img src={props.urunResim} alt="" />
                        </div>
                        <div className="row mb-1">
                            <label className="form-label mb-1">{props.urunAdi}</label>
                        </div>
                        <div className="row mb-1">
                            <label className="form-label mb-1">{props.urunFiyati} $</label>
                        </div>
                        <div className="row mb-5">
                            <Rating name="read-only" value={props.rate} readOnly />
                        </div>
                        <div className="row mb-1 ps-4 pe-4">
                            <button className="btn btn-info" style={{ visibility: 'hidden' }}>Sepete Ekle</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductCard