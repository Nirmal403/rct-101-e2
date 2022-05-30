import React from "react";
import Products from "./components/Products";
// import data from "./src/db.json";
import "./App.css";

const App = () => {
  return <div>
    <div className="page">
      
    <button className="add">Add New Product</button>
     <div className="buttonlist">
     <button>First</button>
     <button>Previous</button>
     <button>
       <select  className="option">
         <option className="option">3</option>
         <option className="option">6</option>
         <option className="option">9</option>
       </select>
     </button>
     <button>Next</button>
     <button>Last</button>
     </div>
    </div>
    
  </div>
 
};

export default App;
