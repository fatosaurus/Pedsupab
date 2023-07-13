import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import HomeThai from "./components/HomeThai"
import About from "./components/About"
import AboutThai from "./components/AboutThai"
import Affiliates from "./components/Affiliates"
import AffiliatesThai from "./components/AffilatesThai"
import MyCart from "./components/MyCart"
import MyCartThai from "./components/MyCartThai"
import SelfcollectKit from "./components/SelfcollectKit"
import SelfcollectKitThai from "./components/SelfcollectKitThai"
import Faq from "./components/Faq";
import FaqThai from "./components/FaqThai"
import SelfCollectKitsHPVProduct from "./components/self_collect_kits/SelfCollectKitsHPVProduct";
import SelfCollectKitsHPVProductThai from "./components/self_collect_kits/SelfCollectKitsHPVProductThai"
import SelfCollectKitsHPV from "./components/self_collect_kits/SelfCollectKitsHPV";
import SelfCollectKitsHPVThai from "./components/self_collect_kits/SelfCollectKitsHPVThai"
import SelfCollectKitsSTIKit from "./components/self_collect_kits/SelfCollectKitsSTIKit";
import SelfCollectKitsSTIKitThai from "./components/self_collect_kits/SelfCollectKitsSTIKitThai"
import SelfCollectKitsSTIOpen from "./components/self_collect_kits/SelfCollectKitsSTIOpen";
import SelfCollectKitsSTIOpenThai from "./components/self_collect_kits/SelfCollectKitsSTIOpenThai"
import Knowledge from "./components/Knowledge";
import KnowledgeThai from "./components/KnowledgeThai"
import KnowledgeBlog from "./components/KnowledgeBlog";
import KnowledgeBlogThai from "./components/KnowledgeBlogThai"
import Blog1 from "./components/blog1"
import Blog2 from "./components/Blog2"
import Blog3 from "./components/Blog3"

import { useState } from "react"

function App() {

  // const [quantity, setQuantity] = useState(0);
  const language = localStorage.setItem("language", 'EN');
  console.log(language + "=====language app")
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge/blog/Just_Sex_or_Make_Love_What's_the_Difference" element={<Blog1 />} />
        <Route path="/knowledge/blog/Can_No_Protection_Sex_Be_Safe" element={<Blog2 />} />
        <Route path="/knowledge/blog/Can_Sex_Cause_Stress" element={<Blog3/>} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/mycart" element={<MyCart />} />
        {/* <Route path="/mycart" element={<MyCart qVal={quantity} setqVal={setQuantity}/>} /> */}
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/knowledge/blog" element={<KnowledgeBlog />} />
        <Route path="/selfcollectkit" element={<SelfcollectKit />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/selfcollectkit/hpv/product" element={<SelfCollectKitsHPVProduct />} />
        <Route path="/selfcollectkit/hpv" element={<SelfCollectKitsHPV />} />
        <Route path="/selfcollectkit/sti/kit" element={<SelfCollectKitsSTIKit />} />
        <Route path="/selfcollectkit/sti_open" element={<SelfCollectKitsSTIOpen />} />

        <Route path="/th" element={<HomeThai />} />
        <Route path="/th/aboutus" element={<AboutThai />} />
        <Route path="/th/affiliates" element={<AffiliatesThai />} />
        <Route path="/th/faqs" element={<FaqThai />} />
        <Route path="/th/knowledge" element={<KnowledgeThai />} />
        <Route path="/th/knowledge/blog" element={<KnowledgeBlogThai />} />
        <Route path="/th/mycart" element={<MyCartThai />} />
        <Route path="/th/selfcollectkit" element={<SelfcollectKitThai />} />
        <Route path="/th/selfcollectkit/hpv" element={<SelfCollectKitsHPVThai />} />
        <Route path="/th/selfcollectkit/sti/kit" element={<SelfCollectKitsSTIKitThai />} />
        <Route path="/th/selfcollectkit/sti_open" element={<SelfCollectKitsSTIOpenThai />} />
        <Route path="/th/selfcollectkit/hpv/product" element={<SelfCollectKitsHPVProductThai />} />

      </Routes>


    </BrowserRouter>

  )
}

export default App