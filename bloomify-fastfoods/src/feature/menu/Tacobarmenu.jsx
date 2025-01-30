import { getTacobarMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import TacobarItem from "./TacobarItem";

function Tacobarmenu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menu.map((taco) => (
          <TacobarItem taco={taco} key={taco.id} />
        ))}
      </ul>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  try {
    const menu = await getTacobarMenu();
    return menu;
  } catch (error) {
    console.error("Failed to load tacobar:", error);
    throw new Response("Failed to load tacobar", { status: 500 });
  }
}

export default Tacobarmenu;
