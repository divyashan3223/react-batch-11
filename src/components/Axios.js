import React, { useState, useEffect } from "react";
import axios from "axios";

const CrudOperations = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setItems(response.data.slice(0, 2)))
      .catch((error) => setError(error));
  }, []);

  // Create new item
  const createItem = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: item,
        body: item,
        userId: 1,
      })
      .then((response) => setItems([response.data, ...items]))
      .catch((error) => setError(error));
  };

  // Update an existing item
  const updateItem = (id) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: item,
        body: item,
        userId: 1,
      })
      .then((response) => {
        setItems(items.map((i) => (i.id === id ? response.data : i)));
        setEditingItem(null);
      })
      .catch((error) => setError(error));
  };

  // Delete an item
  const deleteItem = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => setItems(items.filter((i) => i.id !== id)))
      .catch((error) => setError(error));
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingItem) {
      updateItem(editingItem.id);
    } else {
      createItem();
    }
    setItem("");
  };

  // Handle edit click
  const handleEdit = (item) => {
    setItem(item.title);
    setEditingItem(item);
  };

  return (
    <div>
      <h1>CRUD Operations with Axios</h1>
      {error && <div>Error: {error.message}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter item"
          required
        />
        <button type="submit">{editingItem ? "Update" : "Create"}</button>
      </form>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.title}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => deleteItem(i.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudOperations;
