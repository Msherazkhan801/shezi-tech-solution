import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainRouter from "./routes/MainRouter";
import Contact from "./components/Contact";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <ScrollToTop />
      <MainRouter></MainRouter>
      {pathname !== "/contact-us" && !pathname.startsWith("/careers/") && (
        <Contact />
      )}
      <Footer />
    </>
  );
}

export default App;
