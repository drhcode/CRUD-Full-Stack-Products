import ProductItem from "./../helpers/ProductItem";
import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import ProductTableHead from "../helpers/ProductTableHead";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='flex justify-between'>
            <div className='ml-4'>
              <h2 className='text-2xl font-semibold leading-tight '>Products</h2>
            </div>
            <Link to={"/products/create-product"} className='mr-4'>
              <h2 className='text-2xl font-semibold bg-green-500 text-white text-center rounded-md pb-1 px-2 hover:bg-green-800'>
                Create Product
              </h2>
            </Link>
          </div>

          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <ProductTableHead />
                </thead>
                <tbody>
                  {products.map((product, id) => {
                    return <ProductItem product={product} key={id} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Products.propTypes = {
  product: PropTypes.string,
};

export default Products;
