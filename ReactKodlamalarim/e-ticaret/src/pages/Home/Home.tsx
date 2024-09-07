import React from 'react'
import Top from '../../components/organisms/Top'
import SearchModel from '../../components/molecules/SearchModal'
import Slider from '../../components/organisms/Slider'
import Features from '../../components/organisms/Features'
import BestProductList from '../../components/organisms/BestProductList'
import ProductService from '../../components/organisms/ProductService'
import BannerProduct from '../../components/organisms/BannerProduct'
import BestSeller from '../../components/organisms/BestSeller'
import Statistics from '../../components/organisms/Statistics'
import Footer from '../../components/organisms/Footer'
import Copyright from '../../components/organisms/Copyright'


function Home() {
  return (
    <>
      <Top />

      <SearchModel />

      <Slider />

      <Features />

      <BestProductList />

      <ProductService />

      <BannerProduct />

      <BestSeller />

      <Statistics />

      <Footer />

      <Copyright />

      <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>
    </>
  )
}

export default Home