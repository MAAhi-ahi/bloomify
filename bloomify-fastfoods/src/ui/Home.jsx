import { Link } from "react-router-dom";
import Buttons from "./Buttons";
function Home() {
  return (
    <div>
      <section
        className="bg-cover bg-center -mt-5"
        style={{ backgroundImage: "url('images/web-2.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 text-white text-center py-20 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl font-semibold text-center text-white  p-6 rounded-md ">
                 Satisfy Your Cravings with the Best Burgers, Pizzas & Tacos from Bloomify!
          </h1>
          <p className="mt-4 text-lg md:text-xl">
          Savor the taste of perfection with our wide range of mouthwatering options – from juicy chicken and beef burgers to tantalizing pizzas and fish tacos. Each bite is crafted with the finest ingredients, all nestled between a fresh, soft bun or perfect pizza crust.
          </p>
        <Link to="/menuhighlight">
      {/* <button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full text-lg">
            Add to Order
        </button> */}
        <Buttons/>
        </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-red-500 py-10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <img
              src="/images/burger.jpg"
              alt="Grill & Burgers"
              className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
            />
            <h3 className="font-semibold">BURGERS</h3>
            <button className="mt-2 text-sm underline"><Link to="/aboutburger">See More</Link></button>
          </div>
          <div>
            <img
              src="/images/veg.jpg"
              alt="Veggie Options"
              className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
            />
            <h3 className="font-semibold">PIZZA</h3>
            <button className="mt-2 text-sm underline"><Link to="/aboutpizza">See More</Link></button>
          </div>
          <div>
            <img
              src="/images/tacos.jpg"
              alt="Milkshakes"
              className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
            />
            <h3 className="font-semibold">TACO BAR</h3>
            <button className="mt-2 text-sm underline"><Link to="/abouttacobar">See More</Link></button>
          </div>
          <div>
            <img
              src="/images/fawss.jpg"
              alt="Desserts"
              className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
            />
            <h3 className="font-semibold">QUCK ANSWERS</h3>
            <button className="mt-2 text-sm underline"><Link to="/faqs">See More</Link></button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Choose & Enjoy</h2>
          <p className="mt-4 text-gray-600">
          Delicious, fresh, and made just for you! Select your favorite dish and enjoy every moment with Bloomify.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/beef.jpg"
                alt="Beef Burgers"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Burgers</h3>
                <p className="text-gray-600 mt-2">
                Taste the ultimate perfection—Bloomify’s burgers aren’t just good, they’re the best! 🍔🔥
                </p>
               <Link to="/burgermenu"> <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full text-sm">
                  Show More
                </button></Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/pizza-0.jpg"
                alt="Chicken Burgers"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Pizza&apos;s</h3>
                <p className="text-gray-600 mt-2">
                Every slice of Bloomify&apos;s pizza is a masterpiece—crafted with love, and bursting with flavors that will leave you craving more! 🍕✨
                </p>
               <Link to="/pizzamenu"> <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full text-sm">
                  Show More
                </button></Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/tacos-0.jpg"
                alt="Breakfast Mood"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Taco bar</h3>
                <p className="text-gray-600 mt-2">
                Dive into the bold flavors of Bloomify’s Taco Bar—where every bite is a fiesta of taste, freshness, and excitement! 🌮🎉
                </p>
               <Link to="/tacobarmenu"> <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full text-sm">
                  Show More
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Best Section */}
        <div className="mt-12 bg-yellow-50 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center">
        <img
          src="/images/ymmy.jpg"
          alt="Happy Customer Eating Fast Food"
          className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Joy in Every Bite!
          </h2>
          <p className="text-gray-700 mt-2">
            Experience the sheer delight of savoring our mouth-watering fast food! From crispy burgers to cheesy pizzas, every bite is crafted with love and passion. 
            Feel the happiness, taste the difference, and indulge in flavors that bring smiles.
          </p>
          <p className="text-gray-700 mt-4 italic">
            All these delicious moments are brought to you by <span className="font-bold text-red-500">Bloomify</span> — your trusted fast food destination!
          </p>
        </div>
        </div>
        <div className="border-b-2 border-gray-300 mt-6 w-full"></div>
    </div>
  );
}

export default Home;
