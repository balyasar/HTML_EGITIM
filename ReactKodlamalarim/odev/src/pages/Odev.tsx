import { tab } from '@testing-library/user-event/dist/tab';
import React, { useState } from 'react'

function Odev() {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [entries, setEntries] = useState([]);
    const add = () => {
        if (name && surName && phone && address) {
            
            const newEntry = { name, surName, phone, address };
            setEntries([...entries, newEntry]);
            remove;
        } else {
            alert('Lütfen tüm alanları doldurunuz.')
        }

    };
    const remove = () => {
        setName('');
        setSurName('');
        setPhone('');
        setAddress('');
    };

    return (
        <>
            <div className="container">
                <div className="row m-4 shadow rounded-3">
                    <div className="col-5 p-2">
                        <div className='mb-3'>
                            <label className='form-label'>Ad</label>
                            <input onChange={evt => { setName(evt.target.value) }} className='form-control' type="text" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Soyad</label>
                            <input onChange={evt => { setSurName(evt.target.value) }} className='form-control' type="text" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefon</label>
                            <input onChange={evt => { setPhone(evt.target.value) }} className='form-control' type="text" />
                        </div>
                    </div>
                    <div className="col-5 p-2">
                        <div className="mb-3">
                            <label className="form-label">Adres</label>
                            <textarea onChange={evt => { setAddress(evt.target.value) }} className='form-control'></textarea>
                        </div>
                    </div>
                    <div className="col-2 p-2 align-content-center">
                        <div className='mb-3 d-grid'>
                            <button onClick={add} className="btn btn-success">Ekle</button>
                        </div>
                        <div className='mb-3 d-grid'>
                            <button onClick={remove} className="btn btn-warning">Temizle</button>
                        </div>
                    </div>
                </div>
                <div className="row m-4 shadow rounded-3">
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Ad</th>
                                <th>Soyad</th>
                                <th>Telefon</th>
                                <th>Adres</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                entries.map((entry, index) => (
                                    <tr key={index}>
                                        <td>{entry.name}</td>
                                        <td>{entry.surName}</td>
                                        <td>{entry.phone}</td>
                                        <td>{entry.address}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Odev