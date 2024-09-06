import React, { useState } from 'react'

function Hesap() {
    const [s1, setS1] = useState(0);
    const [s2, setS2] = useState(0);
    const [result, setResult] = useState(0);
    const toplama = () => {
        setResult(s1 + s2);
    }
    return (
        <>
            <h1>Ödev - 2</h1>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"><div >
                        <input onChange={evt => setS1(parseInt(evt.target.value))} type="text" className="form-control mb-3" />
                    </div>
                        <div >
                            <input onChange={evt => setS2(parseInt(evt.target.value))} type="text" className="form-control mb-5" />
                        </div>
                        <div className='text-center'>
                            <button onClick={toplama} className="btn btn-info mb-5">Toplama</button>
                        </div></div>
                    <div className="col-4"></div>
                </div>
                <div className="row text-center">
                    <label className='fs-1'><b>Sonuç ... : {result}</b> </label>
                </div>
            </div>



        </>
    )
}

export default Hesap