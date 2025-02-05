import { getBurgerMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import BurgerItem from "./BurgerItem";

function Burgermenu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menu.map((burger) => (
          <BurgerItem burger={burger} key={burger.id} />
        ))}
      </ul>
      <div className="border-b-2 border-gray-300 mt-6 w-full"></div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  try {
    const menu = await getBurgerMenu();
    return menu;
  } catch (error) {
    console.error("Failed to load Burger:", error);
    throw new Response("Failed to load Burger", { status: 500 });
  }
}

export default Burgermenu;
