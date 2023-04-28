import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const ProductItem = ({ product }) => {
  const { deleteProduct, updateProduct } = useContext(ProductContext);

  return (
    <>
      <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <div className='flex'>
            <div className='flex-shrink-0 w-10 h-10'>
              <img
                className='w-full h-full rounded-full'
                src='https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
                alt=''
              />
            </div>
            <div className='ml-3'>
              <p className='text-gray-900 whitespace-no-wrap'>{product.name}</p>
              <p className='text-gray-600 whitespace-no-wrap'>000004</p>
            </div>
          </div>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{product.price}</p>
          <p className='text-gray-600 whitespace-no-wrap'>USD</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{product.quantity}</p>
          <p className='text-gray-600 whitespace-no-wrap'>In Stock</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{product.description}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
            <span
              aria-hidden
              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <span className='relative'>{product.type}</span>
          </span>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-3'>
          <Link
            to={`/products/${product.id}`}
            className='bg-red-500 text-white p-2 text-center rounded-md'
          >
            View
          </Link>
          <Link
            to={`/products/${product.id}/edit`}
            onClick={() => updateProduct()}
            className='bg-green-500 text-white p-2 text-center rounded-md'
          >
            Edit
          </Link>
          <Link
            onClick={() => deleteProduct(product.id)}
            className='bg-red-500 text-white p-2 text-center rounded-md'
          >
            Delete
          </Link>
        </td>
      </tr>
    </>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
