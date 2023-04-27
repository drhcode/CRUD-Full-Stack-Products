import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import CreateProduct from "../pages/CreateProduct";
import Products from "../pages/Products";
import ProductEdit from "../pages/ProductEdit";

const Navbar = () => {
  return (
    <>
      <div className='bg-slate-300'>
        <div className='max-w-5xl pt-12 mx-auto min-h-screen'>
          <nav>
            <ul className='flex justify-center space-x-5'>
              <li className='m-2 p-2 bg-red-500 hover:bg-red-700 hover:text-white text-black rounded-md'>
                <Link to='/'>Home</Link>
              </li>
              <li className='m-2 p-2 bg-red-500 hover:bg-red-700 hover:text-white text-black rounded-md'>
                <Link to='/products'>Products</Link>
              </li>
              <li className='m-2 p-2 bg-red-500 hover:bg-red-700 hover:text-white text-black rounded-md'>
                <Link to='/create-product'>Create Product</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/create-product' element={<CreateProduct />} />
            <Route path='/products/:id/edit' element={<ProductEdit />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Navbar;
