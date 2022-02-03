import React from "react";
import Style from './Pagination.module.css'

export default function Pagination({pages,handlePage,nextPage,PreviousPage,currentPage }) {
   
  
  return (
    <div>
      <div className={Style.pag}>
        <button className={Style.previous} onClick={PreviousPage}>
          ⬅ Previous
        </button>
        
        <ul className={Style.pagenumbers} >
         {pages.map((number)=>(
           <li key={number} id={number} onClick={handlePage} className={currentPage===number?Style.active:null } >
             {number}
           </li>
         ))
        }
        </ul>
        <button className={Style.next} onClick={nextPage}>
          Next ➡
        </button>
      </div>
    </div>
  
  
  );
}
