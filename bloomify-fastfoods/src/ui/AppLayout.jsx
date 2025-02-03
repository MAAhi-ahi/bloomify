import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import CartOverView from "../feature/cart/CartOverview";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {isLoading && <Loader />}
      <Navbar />
      <div>
        <main className="pt-24">
          <Outlet />
        </main>
        {/*<CartOverView />*/}
        <Footer/>
      </div>
    </div>
  );
}

export default AppLayout;
