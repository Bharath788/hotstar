import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App'
import MovieData from "./MovieData";

//console.log(MovieData[1].sname);

 const newfun =(val) =>{
    //
    console.log(val);
   return(
     <App
         imgsrc={val.imgsrc}
         title = {val.title}
         sname = {val.sname}
         link = {val.link}
         />
   );
 }

ReactDOM.render(<>
 <h1 className="heading_style">List Of Hotstar Prime Videos</h1>
 
    {MovieData.map(newfun)}
  </> ,document.getElementById("root"));
