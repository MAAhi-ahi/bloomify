import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartOverView from "../feature/cart/CartOverview";


function AppLayout() {
  const location = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  //const isLoading = location.state === "loading";
  const noFooterPages = ["/cart", "/order/new",]; 

  return (
    <div>
      {isLoading &&  <Loader />}
      <Navbar />
      <div>
        <main className="pt-24">
          <Outlet />
        </main>
        <CartOverView />
        {!noFooterPages.includes(location.pathname) && <Footer />}
      </div>
    </div>
  );
}

export default AppLayout;

