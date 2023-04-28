import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";

const SingleProduct = () => {
  const { formValues, getProduct } = useContext(ProductContext);

  const { product } = getProduct();

  return (
    <>
      <>
        <div className='flex items-center justify-center pt-10 bg-gradient-to-br'>
          <div className='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
            <div className='max-w-lg mx-auto'>
              <div className='h-[236px]'>
                <img
                  className='w-full'
                  src='https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
                  alt=''
                />
              </div>
              <div className='p-4 sm:p-6'>
                <p className='font-bold text-gray-700 text-lg leading-7 mb-1'>{product.name}</p>
                <div className='flex flex-row'>
                  <p className='text-white text-sm mr-2 bg-red-400 p-1 rounded-md'>
                    {product.name}
                  </p>
                  <p className='text-[17px] font-bold text-[#0FB478]'>{product.price} €</p>
                </div>
                <p className='text-[#7C7C80] font-[15px] mt-6'>{product.description}</p>

                <Link
                  target='_blank'
                  href='foodiesapp://food/1001'
                  className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'
                >
                  Buy Now
                </Link>
                <Link
                  target='_blank'
                  href='https://apps.apple.com/us/app/id1493631471'
                  className='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

SingleProduct.propTypes = {
  productItems: PropTypes.string,
};

export default SingleProduct;
