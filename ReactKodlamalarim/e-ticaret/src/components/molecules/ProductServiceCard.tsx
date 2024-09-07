import React from 'react'
interface ProductServiceCardProps {
    serviceItemBackground: string,
    serviceItemBorder: string,
    image: string,
    contentBackground: string,
    titleFotColor: string,
    title: string,
    subTitle: string
}


function ProductServiceCard(props: ProductServiceCardProps) {
    return (
        <>
            <div className="col-md-6 col-lg-4">
                <a href="#">
                    <div className={`service-item ${props.serviceItemBackground} rounded border ${props.serviceItemBorder}"`}>
                        <img src={props.image} className="img-fluid rounded-top w-100" alt="" />
                        <div className="px-4 rounded-bottom">
                            <div className={`service-content ${props.contentBackground} text-center p-4 rounded`}>
                                <h5 className={props.titleFotColor} >{props.title} </h5>
                                <h3 className="mb-0">{props.subTitle} </h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default ProductServiceCard