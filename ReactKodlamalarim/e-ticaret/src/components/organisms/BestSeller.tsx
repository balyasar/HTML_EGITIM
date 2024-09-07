import React from 'react'
import BestSellerCard from '../molecules/BestSellerCard'

function BestSeller() {
    const sellerList = [
        {
            type: 1,
            image: 'img/best-product-1.jpg',
            title: 'Portakal',
            price: '45 ₺',
            rate: 4
        },
        {
            type: 1,
            image: 'img/best-product-2.jpg',
            title: 'Ahududu',
            price: '68 ₺',
            rate: 5
        },
        {
            type: 1,
            image: 'img/best-product-3.jpg',
            title: 'Muz',
            price: '49 ₺',
            rate: 3
        },
        {
            type: 1,
            image: 'img/best-product-4.jpg',
            title: 'Kayısı',
            price: '32 ₺',
            rate: 3
        },
        {
            type: 1,
            image: 'img/best-product-5.jpg',
            title: 'Üzüm',
            price: '55 ₺',
            rate: 1
        },
        {
            type: 1,
            image: 'img/best-product-6.jpg',
            title: 'Elma',
            price: '20 ₺',
            rate: 4
        },
        {
            type: 2,
            image: 'img/best-product-1.jpg',
            title: 'Portakal',
            price: '45 ₺',
            rate: 4
        },
        {
            type: 2,
            image: 'img/best-product-2.jpg',
            title: 'Ahududu',
            price: '68 ₺',
            rate: 5
        },
        {
            type: 2,
            image: 'img/best-product-3.jpg',
            title: 'Muz',
            price: '49 ₺',
            rate: 3
        },
        {
            type: 2,
            image: 'img/best-product-4.jpg',
            title: 'Kayısı',
            price: '32 ₺',
            rate: 3
        }
    ]

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
                            sellerList.map((urun, index) => {
                                return <BestSellerCard
                                    type={urun.type}
                                    image={urun.image}
                                    price={urun.price}
                                    title={urun.title}
                                    rate={urun.rate}
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