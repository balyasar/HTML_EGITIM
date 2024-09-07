import React from 'react'
interface RateProps {
    rate: number
    position?: string

}
function Rate(props: RateProps) {
    return (
        <div className={"d-flex my-3 " + props.position}>
            <i className={`fas fa-star ${props.rate >= 1 ? 'text-primary' : ''}`}></i>
            <i className={`fas fa-star ${props.rate >= 2 ? 'text-primary' : ''}`}></i>
            <i className={`fas fa-star ${props.rate >= 3 ? 'text-primary' : ''}`}></i>
            <i className={`fas fa-star ${props.rate >= 4 ? 'text-primary' : ''}`}></i>
            <i className={`fas fa-star ${props.rate === 5 ? 'text-primary' : ''}`}></i>

        </div>
    )
}

export default Rate