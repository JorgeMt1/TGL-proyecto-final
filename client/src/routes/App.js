import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Home from '../pages/home/Home'
import PasswordRecovery from '../pages/passwordRecovery/PasswordRecovery';
import EmailSent from '../pages/emailSent/EmailSent';
import UpdatePassword from '../pages/updatePassword/UpdatePassword';
import CreateAccount from '../pages/account/CreateAccount';
import Checkout from '../pages/checkout/Checkout';
import CategoriesContainer from '../containers/categoriesContainer/CategoriesContainer';
import CreateCategory from '../containers/createcategory/CreateCategory';
import ProductDataTable from '../containers/ProdcutDataTable/ProductDataTable';
import CreateProduct from '../containers/createproduct/CreateProduct';
import EditProduct from '../containers/EditProduct/EditProduct';

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
	<Route path="login" element={<Login />} />
	<Route path="password-recovery" element={<PasswordRecovery />} />
	<Route path="send-email" element={<EmailSent />} />
	<Route path="new-password" element={<UpdatePassword />} />
	<Route path="signup" element={<CreateAccount />} />
	<Route path="checkout" element={<Checkout />} />
	<Route path='create-product' element={<CreateProduct />} />
	<Route path='create-category' element={<CreateCategory />} />
	<Route path='categories' element={<CategoriesContainer />} />
	<Route path='ProductDataTable' element={<ProductDataTable />} />
	<Route path='EditProduct' element={<EditProduct />} />
	<Route path="*" component={<div>Not found</div>} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
