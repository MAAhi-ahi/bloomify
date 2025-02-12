import { useState } from "react";

const faqsData = [
  {
    question: "What types of fast food do you offer?",
    answer: "We offer a wide variety of fast food including pizzas, burgers, and tacos. Each item is made with fresh ingredients and unique recipes.",
  },
  {
    question: "Are your ingredients fresh and healthy?",
    answer: "Yes, we use only fresh and high-quality ingredients to prepare our meals, ensuring great taste and nutrition.",
  },
  {
    question: "Do you have vegetarian or vegan options?",
    answer: "Absolutely! We offer several vegetarian and vegan options across our menu, including veggie pizzas, plant-based burgers, and more.",
  },
  {
    question: "How can I place an order?",
    answer: "You can place an order directly through our website or app. Simply browse the menu, add items to your cart, and proceed to checkout.",
  },
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we provide fast and reliable home delivery services. You can track your order in real-time through our app.",
  },
  {
    question: "What are your operating hours?",
    answer: "We are open from 10 AM to 11 PM every day. You can enjoy our delicious fast food anytime during these hours.",
  },
  {
    question: "Are there any combo deals available?",
    answer: "Yes, we have exciting combo deals on pizzas, burgers, and tacos. Check out our 'Deals' section for the latest offers.",
  },
  {
    question: "Can I customize my order?",
    answer: "Of course! You can customize your pizzas, burgers, and tacos according to your taste preferences while ordering.",
  },
];

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mr-4">
          Frequently Asked Questions
        </h1>
        <img
          src="/images/faqs-1.jpg"
          alt="FAQ"
          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full"
        />
      </div>
      <div className="space-y-4">
        {faqsData.map((faq, index) => (
        /* <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
            >
              <span className="text-lg font-medium text-gray-700">{faq.question}</span>
              <span className="text-2xl text-gray-500">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-600">
                {faq.answer}
              </div>
            )}
          </div> */
          <div
  key={index}
  className="border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-4"
>
  <button
    onClick={() => toggleFAQ(index)}
    className="w-full text-left px-6 py-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center text-white"
  >
    <span className="text-lg font-semibold">{faq.question}</span>
    <span className="text-2xl">
      {activeIndex === index ? "-" : "+"}
    </span>
  </button>
  {activeIndex === index && (
    <div className="px-6 py-4 bg-white text-gray-700 rounded-b-lg shadow-inner">
      {faq.answer}
    </div>
  )}
</div>

        ))} 
      </div>

      <section className="mt-12 flex flex-col md:flex-row items-center bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 p-6 rounded-2xl shadow-2xl">
  <img
    src="/images/eatburger.jpg"
    alt="Person eating burger"
    className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 transition-transform duration-500 hover:scale-105"
  />
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-xl text-center md:text-left">
    <h2 className="text-3xl font-extrabold text-gray-800 mb-3 leading-tight">
      Experience the Best Taste!
    </h2>
    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
      Our fast food is crafted with the finest ingredients to bring you unparalleled flavors. From juicy burgers to crispy tacos and cheesy pizzas, every bite is a taste of perfection. Come and indulge in a delightful fast food journey!
    </p>
  </div>
</section>


    </div>
  );
}

export default FAQPage;
