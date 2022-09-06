import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Home from '../pages/home/Home'
import PasswordRecovery from '../pages/passwordRecovery/PasswordRecovery';
import EmailSent from '../pages/emailSent/EmailSent';
import UpdatePassword from '../pages/updatePassword/UpdatePassword';
import CreateAccount from '../pages/account/CreateAccount';
import Checkout from '../pages/checkout/Checkout';
import CreateCategory from '../containers/createcategory/CreateCategory';
import ProductDataTable from '../containers/ProdcutDataTable/ProductDataTable';
import CategoryDataTable from '../pages/categoryDataTable/CategoryDataTable';
import CreateProduct from '../containers/createproduct/CreateProduct';
import EditProduct from '../containers/EditProduct/EditProduct';
import Editcategory from "../containers/Editcategory/Editcategory";
import MyOrders from "../containers/myorders/MyOrders";

export const CartContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
	<CartContext.Provider value={{cart, setCart}}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="forgotpassword" element={<PasswordRecovery />} />
				<Route path="send-email" element={<EmailSent />} />
				<Route path="new-password" element={<UpdatePassword />} />
				<Route path="signup" element={<CreateAccount />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path='create-product' element={<CreateProduct />} />
				<Route path='create-category' element={<CreateCategory />} />
				<Route path='ProductDataTable' element={<ProductDataTable />} />
				<Route path='CategoryDataTable' element={<CategoryDataTable />} />
				<Route path='EditProduct/:id' element={<EditProduct />} />
				<Route path='Editcategory/:id' element={<Editcategory />} />
				<Route path='MyOrders' element={<MyOrders />} />
				<Route path="*" element={<div>Not found</div>} />
			</Routes>
		</BrowserRouter>
	</CartContext.Provider>
  );
}

export default App;
