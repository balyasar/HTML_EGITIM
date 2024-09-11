import React, { useEffect, useState } from 'react'
import { ETicaretDispatch, useGlobalSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { fetchAddProduct, fetchGetAllProducts } from '../../store/feature/productSlice';
import { IProduct } from '../../models/IProduct';
import { fetchGetAllCategory } from '../../store/feature/categorySlice';
import { ICategoryList } from '../../models/ICategoryList';
import swal from 'sweetalert';

function AdminPanel() {
  const dispatch: ETicaretDispatch = useDispatch();
  const productList: IProduct[] = useGlobalSelector(state => state.product.urunList);
  const categoryList: ICategoryList[] = useGlobalSelector(state => state.category.categoryList);
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const addProduct = () => {
    dispatch(fetchAddProduct({
      name: name,
      imageUrl: imageUrl,
      price: price,
      description: description,
      stock: stock,
      categoryId: categoryId
    })).then(() =>
      swal('Ekleme İşlemi', 'Ürün Ekleme İşlemi Başarılı', 'success')
        .then(() => dispatch(fetchGetAllProducts()))
    )
  }
  useEffect(() => {
    dispatch(fetchGetAllProducts())
    dispatch(fetchGetAllCategory())
  }, [])

  return (
    <>
      <div className="container">
        <div className="row mt-5 shadow rounded">
          <div className="col-8">
            <div className="mb-3">
              <label className='form-label'>Ürün Adı</label>
              <input onChange={(evt) => setName(evt.target.value)} className='form-control' type="text" name="" id="" />
            </div>
            <div className="mb-3">
              <label className='form-label'>Ürün Açıklaması</label>
              <input onChange={(evt) => setDescription(evt.target.value)} className='form-control' type="text" name="" id="" />
            </div>
            <div className="mb-3">
              <label className='form-label'>Ürün Fiyatı</label>
              <input onChange={(evt) => setPrice(parseInt(evt.target.value))} className='form-control' type="text" name="" id="" />
            </div>
            <div className="mb-3">
              <label className='form-label'>Ürün Resmi</label>
              <input onChange={(evt) => setImageUrl(evt.target.value)} className='form-control' type="text" name="" id="" />
            </div>
            <div className="mb-3">
              <label className='form-label'>Ürün Kategorisi</label>
              <select onChange={(evt) => setCategoryId(parseInt(evt.target.value))} className='form-control'>
                <option>Seçiniz</option>
                {categoryList.map((category, index) => {
                  return (
                    <option value={category.categoryId}>{category.categoryName}</option>
                  )
                })}
              </select>
            </div>
            <div className="mb-3">
              <label className='form-label'>Ürün Stok</label>
              <input onChange={(evt) => setStock(parseInt(evt.target.value))} className='form-control' type="text" name="" id="" />
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