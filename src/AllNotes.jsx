import AddNotes from "./AddNotes";
import { useState } from "react";
export default function AllNotes({
  items,
  setItems,
  setShowAddItem,
  showAddItem,
  newItem,
  setNewItem,
  editingNote,
  setEditingNote,
}) {
  function handledelete(id) {
    const listitems = items.filter((item) => item.id !== id);
    setItems(listitems);
  }

  function handleupdate(id) {
    const listid = items.find((item) => item.id === id);
    setEditingNote(listid);
    setShowAddItem(true);
  }

  return (
    <div>
      {!showAddItem ? (
        items.length ? (
          <ul className="grid grid-cols-4 gap-4 p-10">
            {items.map((item) => (
              <li
                key={item.id}
                className="p-5 m-2 bg-orange-300 rounded-md w-15"
              >
                <h1 className="text-2xl">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-800 p-2 rounded-md my-4 text-cyan-50"
                  onClick={() => handleupdate(item.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 hover:bg-red-800 p-2 rounded-md ml-2 my-4 text-cyan-50"
                  onClick={() => handledelete(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="text-center flex justify-center items-center font-bold text-3xl mt-3 text-red-600">
            No Notes Present 😒
          </h2>
        )
      ) : null}
      {showAddItem ? (
        <AddNotes
          items={items}
          setItems={setItems}
          newItem={newItem}
          setNewItem={setNewItem}
          editingNote={editingNote}
          setEditingNote={setEditingNote}
          setShowAddItem={setShowAddItem}
          showAddItem={showAddItem}
        />
      ) : null}
    </div>
  );
}
//bg-indigo-100
