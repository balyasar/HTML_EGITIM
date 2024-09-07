import React from 'react'

interface BestProductButtonProps {
    isActive: boolean,
    tabName: string,
    name: string
}

function BestProductButton(props: BestProductButtonProps) {
    return (
        <>
            <li className="nav-item">
                <a className={"d-flex m-2 py-2 bg-light rounded-pill" + (props.isActive ? ' active' : '')}
                    data-bs-toggle="pill"
                    href={'#' + props.tabName} >
                    <span className="text-dark" style={{ width: '130px' }}>{props.name}</span>
                </a>
            </li>
        </>
    )
}

export default BestProductButton