import React, { useEffect } from 'react'
import { ETicaretDispatch, useGlobalSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { fetchAddProduct, fetchGetAllProducts } from '../../store/feature/productSlice';
import { IProduct } from '../../models/IProduct';

function AdminPanel() {
  const dispatch: ETicaretDispatch = useDispatch();
  const productList: IProduct[] = useGlobalSelector(state => state.product.urunList);
  const addProduct = () => {
    dispatch(fetchAddProduct({
      name: '',
      imageUrl: '',
      price: 0,
      description: '',
      stock: 0,
      categoryId: 0

    }))
  }
  useEffect(() => {
    dispatch(fetchGetAllProducts());
  }, [])
  return (
    <>
      <div className="container">
        <div className="row mt-5 shadow rounded">
          <div className="col-8">
            <div className="mb-3">
              <label className='form-label'>Ürün Adı</label>
              <input className='form-control' type="text" name="" id="" />
            </div>
            <div className="mb-3">
              <label className='form-label'>Ürün Açıklaması</label>
              <input className='form-control' type="text" name="" id="" />
            </div>
            <div className="mb-3">
              <label className='form-label'>Ürün Fiyatı</label>
              <input className='form-control' type="text" name="" id="" />
            </div>
            <div className="mb-3">
              <label className='form-label'>Ürün Resmi</label>
              <input className='form-control' type="text" name="" id="" />
            </div>
            <div className="mb-3">
              <label className='form-label'>Ürün Kategorisi</label>
              <select className='form-control'>
                <option>Seçiniz</option>
              </select>
            </div>
            <div className="mb-3">
              <label className='form-label'>Ürün Stok</label>
              <input className='form-control' type="text" name="" id="" />
            </div>
          </div>
          <div className="col-4 align-content-end">
            <div className="mb-3 d-grid mt-5 ms-3">
              <button onClick={addProduct} className='btn btn-success'>Ekle</button>
            </div>
            <div className="mb-3 d-grid mt-3 ms-3">
              <button className='btn btn-warning'>Temizle</button>
            </div>
          </div>
        </div>
        <div className="row mt-4 shadow rounded p-2">
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Ürün Adı</th>
                <th>Ürün Açıklama</th>
                <th>Ürün Fiyatı</th>
                <th>Resim</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {
                productList.map((product, index) => {
                  return (
                    <tr>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.price} ₺</td>
                      <td><img className='rounded' width={50} height={50} src={product.imageUrl} alt="yy" /></td>
                      <td>
                        <button className='btn btn-danger ms-2' type='submit'>Sil</button>
                        <button className='btn btn-primary ms-2' type='submit'>Düzenle</button>
                      </td>
                    </tr>)
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AdminPanel