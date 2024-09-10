import React from 'react'
interface ProductCardProps {
    image: string,
    categoryName: string,
    name: string,
    content: string,
    price: string,
}

function ProductCard(props: ProductCardProps) {
    return (
        <>
            <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                        <img src={props.image}
                            className="img-fluid w-100 rounded-top"
                            style={{ height: '300px' }}
                            alt="" />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style={{ top: '10px', left: '10px' }}>{props.categoryName}</div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>{props.name}</h4>
                        <p>{
                            props.content.length > 40 ?
                                props.content.substring(0, 40) + '...' :
                                props.content
                        }
                        </p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">{props.price}</p>
                            <a href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary">
                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard