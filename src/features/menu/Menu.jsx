import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return <div>
    <h1 className="text-xl font-bold uppercase text-center">Menu</h1>
    <ul className="divide-y divide-stone-300">
      {menu.map(pizza => (<MenuItem pizza={pizza} key={pizza.id}/>))}
    </ul>
    </div>
}


export async function menuLoader(){
 const menu = await getMenu()
 return menu
}
export default Menu;
