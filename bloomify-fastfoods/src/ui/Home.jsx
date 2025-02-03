import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('images/web-2.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 text-white text-center py-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            BEST BURGERS IN THE WORLD
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Mouthwatering perfection starts with 100% pure beef patties and best
            sauce sandwiched between a sesame seed bun.
          </p>
          <button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full text-lg">
            Add to Order
          </button>
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
            Lorem ipsum dolor sit amet, vero nostrum comprehensam et. Ducat
            molestie pri, et mei natum fastidii.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/beef.jpg"
                alt="Beef Burgers"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Beef Burgers</h3>
                <p className="text-gray-600 mt-2">
                  Ex utro delicatum per facer operatione duo cu cum ullum.
                </p>
                <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full text-sm">
                  Show More
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/chicken.jpg"
                alt="Chicken Burgers"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Chicken Burgers</h3>
                <p className="text-gray-600 mt-2">
                  Ex utro delicatum per facer operatione duo cu cum ullum.
                </p>
                <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full text-sm">
                  Show More
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/breakfast.jpg"
                alt="Breakfast Mood"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Breakfast Mood</h3>
                <p className="text-gray-600 mt-2">
                  Ex utro delicatum per facer operatione duo cu cum ullum.
                </p>
                <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full text-sm">
                  Show More
                </button>
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

    </div>
  );
}

export default Home;
