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
              src="images/burger.jpg"
              alt="Grill & Burgers"
              className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
            />
            <h3 className="font-semibold">Grill &apos;n Burgers</h3>
            <button className="mt-2 text-sm underline">See More</button>
          </div>
          <div>
            <img
              src="images/veg.jpg"
              alt="Veggie Options"
              className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
            />
            <h3 className="font-semibold">Veggie Options</h3>
            <button className="mt-2 text-sm underline">See More</button>
          </div>
          <div>
            <img
              src="images/pizza.jpg"
              alt="Milkshakes"
              className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
            />
            <h3 className="font-semibold">Pizza</h3>
            <button className="mt-2 text-sm underline">See More</button>
          </div>
          <div>
            <img
              src="images/desserts.jpg"
              alt="Desserts"
              className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
            />
            <h3 className="font-semibold">Desserts</h3>
            <button className="mt-2 text-sm underline">See More</button>
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
                src="images/beef.jpg"
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
                src="images/chicken.jpg"
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
                src="images/breakfast.jpg"
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
    </div>
  );
}

export default Home;
