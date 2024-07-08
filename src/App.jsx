import { useState } from "react";
import "./App.css";
import AllNotes from "./AllNotes";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  const notes = [
    {
      id: 1,
      title: "Meeting Notes",
      description: "Discuss project timeline and deliverables.",
    },
    {
      id: 2,
      title: "Grocery List",
      description: "Milk, Bread, Eggs, Butter, Cheese.",
    },
    {
      id: 3,
      title: "Workout Plan",
      description:
        "Monday: Cardio, Tuesday: Strength training, Wednesday: Yoga.",
    },
    {
      id: 4,
      title: "Reading List",
      description: "To Kill a Mockingbird, 1984, The Great Gatsby.",
    },
    {
      id: 5,
      title: "Holiday Plans",
      description: "Book flights, reserve hotel, plan itinerary.",
    },
  ];
  const [items, setItems] = useState(notes);
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [editingNote, setEditingNote] = useState(null); // Track currently editing note

  return (
    <>
      <Header
        showAddItem={showAddItem}
        setShowAddItem={setShowAddItem}
        setEditingNote={setEditingNote}
      />
      <AllNotes
        items={items}
        setItems={setItems}
        showAddItem={showAddItem}
        setShowAddItem={setShowAddItem}
        newItem={newItem}
        setNewItem={setNewItem}
        editingNote={editingNote}
        setEditingNote={setEditingNote}
      />
    </>
  );
}

export default App;
