import React from "react";

function Item({ item, onUpdateItem, onDeleteItem}) {

  function handleDeleteClick () {
      fetch(`http://localhost:4000/items/${id}`, {
        method : 'DELETE',       
      })
      .then (res => res.json())
      .then (() => onDeleteItem(item))
  }

  function handleAddToCartClick (){
    console.log ("clicked item" , item)
    fetch (`http://localhost:4000/items/${id}`, {
      method : 'PATCH',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify ({
        isInCart : !item.isInCart,
      }),
    })
.then (res => res.json())
.then ((updatedItem) => onUpdateItem(updatedItem))

  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove">Delete</button>
    </li>
  );
}

export default Item;
