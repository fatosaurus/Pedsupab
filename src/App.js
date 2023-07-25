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
import Blog4 from "./components/Blog4"


import { useState } from "react"
import Blog5 from "./components/Blog5"
import Blog6 from "./components/Blog6"
import Blog4Thai from "./components/Blog4Thai"
import Blog5Thai from "./components/Blog5Thai"
import Blog6Thai from "./components/Blog6Thai"
import ThankYou from "./components/Thankyou"
import ThankYouThai from "./components/ThankyouThai"
import ThankYouPG from "./components/ThankyouPG"
import ThankYouThaiPG from "./components/ThankyouThaiPG"

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
        <Route path="/knowledge/blog/Debunking_Misconceptions_of_HPV" element={<Blog4/>} />
        <Route path="/knowledge/blog/E-Ciggarettes_and_Cervical_Cancer" element={<Blog5/>} />
        <Route path="/knowledge/blog/The_Rise_of_HPV_Infections" element={<Blog6/>} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/order/thank-you" element={<ThankYouPG />} />


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
        <Route path="/th/knowledge/blog/Just_Sex_or_Make_Love_What's_the_Difference" element={<Blog1 />} />
        <Route path="/th/knowledge/blog/Can_No_Protection_Sex_Be_Safe" element={<Blog2 />} />
        <Route path="/th/knowledge/blog/Can_Sex_Cause_Stress" element={<Blog3/>} />
        <Route path="/th/knowledge/blog/Debunking_Misconceptions_of_HPV" element={<Blog4Thai/>} />
        <Route path="/th/knowledge/blog/E-Ciggarettes_and_Cervical_Cancer" element={<Blog5Thai/>} />
        <Route path="/th/knowledge/blog/The_Rise_of_HPV_Infections" element={<Blog6Thai/>} />
        <Route path="/th/thank-you" element={<ThankYouThai />} />
        <Route path="/th/order/thank-you" element={<ThankYouThaiPG />} />


      </Routes>


    </BrowserRouter>

  )
}

export default App