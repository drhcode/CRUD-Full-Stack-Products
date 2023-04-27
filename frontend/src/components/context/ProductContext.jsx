import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const ProductContext = createContext();

const initialForm = {
  name: "",
  description: "",
  type: "",
  photo: "",
  quantity: "",
  price: "",
};

export const ProductProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(initialForm);

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, description, photo, type, quantity, price, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
      [description]: value,
      [type]: value,
      [quantity]: value,
      [price]: value,
      [photo]: value,
    });
  };

  // Store the product
  const storeProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("products/store", formValues);
      setFormValues(initialForm);
      navigate("/products");
    } catch (error) {
      console.log(error.message);
    }
  };

  // get all products
  const getProducts = async () => {
    try {
      const response = await axios.get("products");
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // get single product
  const getProduct = async (id) => {
    try {
      const response = await axios.get("products/" + id);
      const apiProduct = response.data;
      setProduct(apiProduct);
      setFormValues({
        name: apiProduct.name,
        description: apiProduct.description,
        type: apiProduct.type,
        photo: apiProduct.photo,
        quantity: apiProduct.quantity,
        price: apiProduct.price,
      });
    } catch (error) {
      setErrors(errors.data.data);
    }
  };

  // update the product
  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = await axios.put("products/" + product.id, formValues);
      if (updatedProduct) {
        getProducts();
      }
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  // delete product
  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete("products/" + id);
      console.log(response);
      if (response) {
        getProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        product,
        formValues,
        setFormValues,
        setProduct,
        updateProduct,
        deleteProduct,
        storeProduct,
        handleChange,
        errors,
        setErrors,
        getProducts,
        getProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductContext;
