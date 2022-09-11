import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import EmailSent from '../pages/passwordRecovery/emailSent/EmailSent';
import UpdatePassword from '../pages/passwordRecovery/updatePassword/UpdatePassword';
import Checkout from '../pages/checkout/Checkout';
import CreateCategory from '../pages/category/createCategory/CreateCategory';

import Editcategory from "../pages/category/editCategory/Editcategory";
import CreateProduct from "../pages/product/createProduct/CreateProduct";
import EditProduct from "../pages/product/editProduct/EditProduct";
import ProductDataTable from "../pages/product/productDataTable/ProductDataTable";
import CategoryDataTable from "../pages/category/categoryDataTable/CategoryDataTable";
import MyOrders from "../pages/myOrders/MyOrders";
import ForgotPassword from "../pages/passwordRecovery/forgotpassword/ForgotPassword";
import UserDatatable from "../pages/users/userDatatable/UserDatatable";
import Createuser from "../pages/users/createUser/CreateUser";
import EditUser from "../pages/users/editUser/EditUser";
import EditCustomer from "../pages/customers/editCustomer/EditCustomer";
import CreateCustomer from "../pages/customers/createCustomer/CreateCustomer";
import CustomerDatatable from "../pages/customers/customerDatatable/CustomerDatatable";
import NotFound from "../pages/notFound/NotFound";

export const CartContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
	<CartContext.Provider value={{cart, setCart}}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="forgotpassword" element={<ForgotPassword />} />
				<Route path="email-sent" element={<EmailSent />} />
				<Route path="updatePassword" element={<UpdatePassword />} />
				<Route path="signup" element={<CreateCustomer />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path='create-product' element={<CreateProduct />} />
				<Route path='create-category' element={<CreateCategory />} />
				<Route path='ProductDataTable' element={<ProductDataTable />} />
				<Route path='CategoryDataTable' element={<CategoryDataTable />} />
				<Route path='CustomerDataTable' element={<CustomerDatatable />} />
				<Route path='EditProduct/:id' element={<EditProduct />} />
				<Route path='Editcategory/:id' element={<Editcategory />} />
				<Route path='UserDatatable/' element={<UserDatatable />} />
				<Route path='create-user/' element={<Createuser />} />
				<Route path='EditUser/:id' element={<EditUser />} />
				<Route path='EditCustomer/:id' element={<EditCustomer />} />
				<Route path='MyOrders' element={<MyOrders />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</CartContext.Provider>
  );
}

export default App;
