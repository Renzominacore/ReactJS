import React from "react";


const ItemList = (items) => {
    return <div>
        <h1>ItemList</h1>
        <ul>
            {items.map((item)=>(
                <li key={item.id}>{item.name}
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>{item.category}</p>
                </li>

            ))}
        </ul>
    </div>
};
ItemList.propTypes={
    items: propTypes.array.isRequired,
};
export default ItemList;