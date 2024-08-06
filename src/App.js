import "./layout.scss";
import FAQs from "./routes/faqs/faqs";
import About from "./routes/About/About";
import Agent from "./routes/Agent/Agent";
import SignUp from "./routes/SignUp/SignUp";
import SignIn from "./routes/SignIn/SignIn";
import HomePage from "./routes/HomePage/Home";
import Contact from "./routes/Contact/Contact";
import Support from "./routes/Support/Support";
import Diescrimilar from "./routes/Discrimilar/Discrimilar";
import PageNotFound from "./routes/PageNotFound/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./routes/PrivacyPolicy/PrivacyPolicy";
import TermAndConditon from "./routes/Terms&Condition/Terms&Condition";

function App() {
  return (
    <>
      <div className="layout">
        <div className="content">
          <BrowserRouter>
            <Routes>
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/agent" element={<Agent />} />
              <Route path="/Signup" element={<SignUp />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/Signin" element={<SignIn />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/support" element={<Support />} />
              <Route path="/discrimilar" element={<Diescrimilar />} />
              <Route path="/privacy_policy" element={<PrivacyPolicy />} />
              <Route path="/term_&_condition" element={<TermAndConditon />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
