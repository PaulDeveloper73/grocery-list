
import { FaTrashAlt } from "react-icons/fa";
import LineItem from "./LineItem";
function ItemList({ items, handleCheck, handleDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <LineItem 
            item={item}
            key={item.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default ItemList;
