import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const CreateProduct = () => {
  const { formValues, handleChange, storeProduct } = useContext(ProductContext);

  return (
    <>
      <div className=' min-h-screen flex items-center'>
        <div className='w-full'>
          <div className='bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2'>
            <form onSubmit={storeProduct}>
              <div className='mb-5'>
                <label className='block mb-2 font-bold text-gray-600'>Name</label>
                <input
                  name='name'
                  value={formValues["name"]}
                  onChange={handleChange}
                  placeholder='Put in your fullname.'
                  className='border border-gray-300 shadow p-3 w-full rounded mb-'
                />
              </div>

              <div className='mb-5'>
                <label className='block mb-2 font-bold text-gray-600'>Description</label>
                <textarea
                  name='description'
                  value={formValues["description"]}
                  onChange={handleChange}
                  placeholder='Enter the description'
                  className='border border-gray-300 shadow p-3 w-full rounded mb-'
                />
              </div>

              <div className='mb-5'>
                <label className='block mb-2 font-bold text-gray-600'>Photo</label>
                <input
                  name='photo'
                  value={formValues["photo"]}
                  onChange={handleChange}
                  placeholder='Enter the description'
                  className='border border-gray-300 shadow p-3 w-full rounded mb-'
                />
              </div>

              <div className='mb-5'>
                <label className='block mb-2 font-bold text-gray-600'>Type</label>
                <input
                  name='type'
                  value={formValues["type"]}
                  onChange={handleChange}
                  placeholder='Enter the type'
                  className='border border-gray-300 shadow p-3 w-full rounded mb-'
                />
              </div>

              <div className='mb-5'>
                <label className='block mb-2 font-bold text-gray-600'>Quantity</label>
                <input
                  name='quantity'
                  value={formValues["quantity"]}
                  onChange={handleChange}
                  placeholder='Enter the quantity'
                  className='border border-red-300 shadow p-3 w-full rounded mb-'
                />
              </div>

              <div className='mb-5'>
                <label className='block mb-2 font-bold text-gray-600'>Price</label>
                <input
                  name='price'
                  value={formValues["price"]}
                  onChange={handleChange}
                  placeholder='Enter the price'
                  className='border border-red-300 shadow p-3 w-full rounded mb-'
                />

                {/* <p className='text-sm text-red-400 mt-2'>Twitter username is required</p> */}
              </div>

              <button className='block w-full bg-blue-500 text-white font-bold p-4 rounded-lg'>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
