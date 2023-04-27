import Navbar from "./components/helpers/Navbar";
import Footer from "./components/helpers/Footer";
import { ProductProvider } from "./components/context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <>
        <Navbar />
        <Footer />
      </>
    </ProductProvider>
  );
}

export default App;
