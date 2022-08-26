import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Home from '../pages/home/Home'
import PasswordRecovery from '../pages/passwordRecovery/PasswordRecovery';
import EmailSent from '../pages/emailSent/EmailSent';
import UpdatePassword from '../pages/updatePassword/UpdatePassword';
import Account from '../pages/account/Account';
import ShoppingProduct from '../components/shoppingProduct/ShoppingProduct';
import Checkout from '../pages/checkout/Checkout';

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
		<Route path="login" element={<Login />} />
						<Route path="password-recovery" element={<PasswordRecovery />} />
						<Route path="send-email" element={<EmailSent />} />
						<Route path="new-password" element={<UpdatePassword />} />
						<Route path="signup" element={<Account />} />
						<Route path="checkout" element={<Checkout />} />
						<Route path="*" component={<div>Hola</div>} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
