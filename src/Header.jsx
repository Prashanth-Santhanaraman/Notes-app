import AllNotes from "./AllNotes";
import { useState } from "react";
export default function Header({ showAddItem, setShowAddItem }) {
  return (
    <>
      <nav className="h-16 flex items-center border-b-2 border-slate-950 justify-between">
        <h1 className="text-black ml-4 text-2xl font-semibold cursor-pointer">
          Notes
        </h1>
        <button
          className="mr-4 bg-blue-500 hover:bg-blue-800 p-2 rounded-md text-slate-50"
          onClick={() => setShowAddItem(!showAddItem)}
        >
          Add Notes
        </button>
      </nav>
      {/* {showAddItem&&<AllNotes setShowAddItem={setShowAddItem} showAddItem={showAddItem}/>} */}
    </>
  );
}
