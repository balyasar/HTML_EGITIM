import React from 'react'
import ProductServiceCard from '../molecules/ProductServiceCard'

function ProductService() {
    const serviceProduct = [
        {
            serviceItemBackground: 'bg-secondary',
            serviceItemBorder: 'border-secondary',
            image: 'img/featur-1.jpg',
            contentBackground: 'bg-primary',
            title: 'Fresh Apples',
            titleFotColor: 'text-white',
            subTitle: '20% OFF'
        },
        {
            serviceItemBackground: 'bg-dark',
            serviceItemBorder: 'border-dark',
            image: 'img/featur-2.jpg',
            contentBackground: 'bg-light',
            title: 'Tasty Fruits',
            titleFotColor: 'text-primary',
            subTitle: 'Free Delivery'
        },
        {
            serviceItemBackground: 'bg-primary',
            serviceItemBorder: 'border-primary',
            image: 'img/featur-3.jpg',
            contentBackground: 'bg-secondary',
            title: 'Exotic Vegitable',
            titleFotColor: 'text-white',
            subTitle: 'Discount 30$'
        }

    ]

    return (
        <>
            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="row g-4 justify-content-center">
                        {
                            serviceProduct.map((service, index) => {
                                return <ProductServiceCard
                                    serviceItemBackground={service.serviceItemBackground}
                                    serviceItemBorder={service.serviceItemBackground}
                                    image={service.image}
                                    contentBackground={service.contentBackground}
                                    title={service.title}
                                    titleFotColor={service.titleFotColor}
                                    subTitle={service.subTitle}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductService