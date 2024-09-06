import React, { useState } from 'react'
import { IUserList } from '../models/IUserList';

function SearchUser() {
    const [search, setSearch] = useState('');
    const [userList, setUserList] = useState<IUserList[]>([]);
    const [searchList, setSearchList] = useState<IUserList[]>([]);
    const getAllUser = () => {
        fetch('https://randomuser.me/api/?results=5')
            .then(data => data.json())
            .then(response => {
                console.log(response.results)
                setUserList(response.results)
            });

    }

    const getSearchedUser = () => {
        const searchedUser = userList.filter(x =>
            x.name.first.toLowerCase().includes(search.toLowerCase())
        );
        setSearchList(searchedUser)
    }



    return (
        <>
            <h1>Ödev - 3</h1>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 ">
                        <div className="row mb-5">
                            <button onClick={getAllUser} className="btn btn-warning">Kullanıcıları Getir</button>
                        </div>
                        <div className="row">
                            <div className="col-10">
                                <input onChange={evt => setSearch(evt.target.value)} placeholder='Arama Yap' className='form-control' type="text" />
                            </div>
                            <div className="col-2 text-center">
                                <button onClick={getSearchedUser} className='btn btn-info'>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row m-5">
                    <h4>Arama Sonuçları</h4>
                    <div className="col-10">
                        {
                            searchList.map((data: IUserList, index) => {
                                return (
                                    <div>
                                        <ul>
                                            <li>Ad ... : {data.name.first}</li>
                                            <li>Soyad ... : {data.name.last}</li>
                                            <li>E-Mail ... : {data.email}</li>
                                        </ul>
                                    </div>


                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchUser