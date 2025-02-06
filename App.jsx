import React from 'react'
import Navbar from './component/Navbar/Navbar.jsx'
import Hero from './component/Hero/Hero.jsx'
import Category from "./component/Category/Category.jsx"
import Category2 from "./component/Category/Category2.jsx"
import Services from './component/Services/Services.jsx'
import Banner from './component/Banner/Banner.jsx'
import headphone from "./assets/hero/headphone.png"
import Products from "./component/Products/Products.jsx"
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png"
import Blogs from "./component/Blogs/Blogs.jsx"

const BannerData = {
  discount: "30% oFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "lorem ipsumm, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37"
}

const BannerData2 = {
  discount: "30% OFF",
  Little: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet soluta ratione iure.",
  bgColor: "#2dcc6f"
}

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs/>
    </div>
  )
}

export default App
