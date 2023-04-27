import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <>
      <>
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-br'>
          <div className='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
            <div className='max-w-lg mx-auto'>
              <div className='h-[236px]'></div>
              <div className='p-4 sm:p-6'>
                <p className='font-bold text-gray-700 text-lg leading-7 mb-1'>{product.name}</p>
                <div className='flex flex-row'>
                  <p className='text-[#3C3C4399] text-[17px] mr-2 line-through'>{product.price}</p>
                  <p className='text-[17px] font-bold text-[#0FB478]'>MVR 700</p>
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
  product: PropTypes.string,
};

export default SingleProduct;
