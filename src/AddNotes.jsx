import { useState, useEffect } from "react";

export default function AddNotes({
  items,
  setItems,
  editingNote,
  setEditingNote,
  setShowAddItem,
  showAddItem,
}) {
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDescription(editingNote.description);
    }
  }, [editingNote]);

  function updateElement(e) {
    e.preventDefault();
    if (editingNote) {
      const updatedItems = items.map((item) =>
        item.id === editingNote.id ? { ...item, title, description } : item
      );
      setItems(updatedItems);
      setEditingNote(null);
    } else {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const newItemCame = { id, title, description };
      const listItems = [...items, newItemCame];
      console.log(listItems);
      setItems(listItems);
      console.log("Submitted");
    }
    setDescription("");
    setTitle("");
    setShowAddItem(!showAddItem);
  }
  function closeButton(e) {
    e.preventDefault();
    setShowAddItem(false);
  }

  // function addnewitem() {
  //   const id = items.length ? items[items.length - 1].id + 1 : 1;
  //   const newItemCame = { id, title, description };
  //   const listItems = [...items, newItemCame];
  //   console.log(listItems);
  //   setItems(listItems);
  //   console.log("Submitted");
  // }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <h1 className="text-center text-white">AddNotes</h1>
      <br />
      <form
        className="flex flex-col w-21 bg-orange-300 mr-20 ml-20 p-10 rounded-lg"
        onSubmit={updateElement}
      >
        <button
          className="bg-red-500 text-white rounded-md p-3"
          onClick={closeButton}
        >
          Close
        </button>
        <label htmlFor="titletext" className="font-bold">
          Title:{" "}
        </label>
        <input
          className="w-23 p-2 rounded-md mb-2"
          type="text"
          id="titletext"
          placeholder="Enter the notes title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="description" className="font-bold" required>
          Description:{" "}
        </label>
        <textarea
          className="p-2 rounded-md"
          id="description"
          placeholder="Enter the notes description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button className="bg-blue-500 hover:bg-blue-800 p-2 rounded-md my-4 text-white w-15 text-center">
          {editingNote ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}
