import React, { useEffect } from 'react'
import BestSellerCard from '../molecules/BestSellerCard'
import { ETicaretDispatch, useGlobalSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { fetchGetAllBestSellerProduct } from '../../store/feature/productSlice';
import { IBestSellerProduct } from '../../models/IBestSellerProduct';

function BestSeller() {
    const dispatch: ETicaretDispatch = useDispatch();
    const bestSellerList = useGlobalSelector(state => state.product.popularProductList)
    useEffect(() => {
        dispatch(fetchGetAllBestSellerProduct());
    }, [])
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
                        <h1 className="display-4">Bestseller Products</h1>
                        <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                    </div>
                    <div className="row g-4">
                        {
                            bestSellerList.map((bestSeller: IBestSellerProduct, index) => {
                                return <BestSellerCard
                                    type={bestSeller.type}
                                    image={bestSeller.image}
                                    price={bestSeller.price}
                                    title={bestSeller.title}
                                    rate={bestSeller.rate}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSeller