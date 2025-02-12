import { Link } from "react-router-dom";
function MenuHighlight() {
  return (
    <div className="bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to Our Menu Showcase!
        </h1>
        <p className="text-lg text-gray-600">
          Explore and choose your favorite menu items for a delightful experience.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <img
            src="images/pizza-0.jpg"  
            alt="Pizza"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-900">Pizza Menu</h2>
            <p className="text-gray-700">Delicious pizzas with various toppings.</p>
            <Link className="text-orange-600 hover:text-orange-700 mt-4 inline-block" to="/pizzamenu">Explore Pizza Menu</Link>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <img
            src="images/beef.jpg"  
            alt="Burger"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-900">Burger Menu</h2>
            <p className="text-gray-700">Taste our freshly made burgers.</p>
            <Link  className="text-orange-600 hover:text-orange-700 mt-4 inline-block" to="/burgermenu">Explore Burger Menu</Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <img
            src="images/tacos.jpg"  
            alt="Burger"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-900">Tacos Menu</h2>
            <p className="text-gray-700">Taste our freshly made Tacos.</p>
              <Link className="text-orange-600 hover:text-orange-700 mt-4 inline-block" to="/tacobarmenu">Explore Burger Tacos</Link>
          </div>
        </div>


        
      </div>

      <footer className="bg-orange-600 text-center py-6 mt-12 text-white rounded-lg shadow-lg hover:bg-orange-700 transition duration-300">
  <p className="font-semibold text-lg md:text-xl">
    &copy; 2025 All Rights Reserved. Enjoy your meal!
  </p>
  <p className="text-sm opacity-80">Made with love for you!</p>
</footer>

    </div>
  );
}

export default MenuHighlight;
