import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import AboutThai from "./components/AboutThai"
import Affiliates from "./components/Affiliates"
import AffiliatesThai from "./components/AffilatesThai"
import MyCart from "./components/MyCart"
import SelfcollectKit from "./components/SelfcollectKit"
import Faq from "./components/Faq";
import SelfCollectKitsHPVProduct from "./components/self_collect_kits/SelfCollectKitsHPVProduct";
import SelfCollectKitsHPV from "./components/self_collect_kits/SelfCollectKitsHPV";
import SelfCollectKitsSTIKit from "./components/self_collect_kits/SelfCollectKitsSTIKit";
import SelfCollectKitsSTIOpen from "./components/self_collect_kits/SelfCollectKitsSTIOpen";
import Knowledge from "./components/Knowledge";
import KnowledgeBlog from "./components/KnowledgeBlog";

function App() {
  const language = localStorage.getItem("language");
  console.log(language + "=====language app")
  return (

    <BrowserRouter>

      {language == 'EN'?
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/knowledge/blog" element={<KnowledgeBlog />} />
          <Route path="/selfcollectkit" element={<SelfcollectKit />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/selfcollectkit/hpv/product" element={<SelfCollectKitsHPVProduct />} />
          <Route path="/selfcollectkit/hpv" element={<SelfCollectKitsHPV />} />
          <Route path="/selfcollectkit/sti/kit" element={<SelfCollectKitsSTIKit />} />
          <Route path="/selfcollectkit/sti_open" element={<SelfCollectKitsSTIOpen />} />
        </Routes>
        :
        <Routes>
          <Route path="/th" element={<Home />} />
          <Route path="/aboutus-th" element={<AboutThai />} />
          <Route path="/affiliates-th" element={<AffiliatesThai />} />
        </Routes>
      }

    </BrowserRouter>

  )
}

export default App