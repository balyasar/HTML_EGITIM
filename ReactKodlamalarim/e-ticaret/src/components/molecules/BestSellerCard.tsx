import React from 'react'
import Rate from '../atoms/Rate'
interface BestSellerCardProps {
    type: number,
    image: string,
    title: string,
    price: string,
    rate: number
}

function BestSellerCard(props: BestSellerCardProps) {
    const typeOne = () => {
        return (
            <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <img src={props.image} className="img-fluid rounded-circle w-100" alt="" />
                        </div>
                        <div className="col-6">
                            <a href="#" className="h5">{props.title} </a>
                            <Rate rate={props.rate} />
                            <h4 className="mb-3">{props.price} </h4>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const typeTwo = () => {
        return (
            <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                    <img src={props.image} className="img-fluid rounded" alt="" />
                    <div className="py-4">
                        <a href="#" className="h5">{props.title}</a>
                        <Rate rate={props.rate} position='justify-content-center' />
                        <h4 className="mb-3">{props.price}</h4>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                    </div>
                </div>
            </div>
        )
    }
    return props.type === 1 ? typeOne() : typeTwo()
}

export default BestSellerCard