import { Outlet, useLocation } from "react-router-dom";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartOverView from "../feature/cart/CartOverview";

function AppLayout() {
  const location = useLocation();
  const isLoading = location.state === "loading";
  const noFooterPages = ["/cart", "/order/new",]; 

  return (
    <div>
      {isLoading && <Loader />}
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

