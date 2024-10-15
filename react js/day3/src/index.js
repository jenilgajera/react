// import React, { useState } from "react";
// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById('root'));

// function Welcome() {

//     let[counter,setcounter]=useState(0);
//     function updateCounter() {
//         counter++;
//         setcounter(counter);
//         console.log(counter);
//     }

//     return (
//         <>
//             <button onClick={updateCounter}>
//                 Update Counter
//             </button>
//             <h1>{counter}</h1>
//         </>
//     );
// }

// root.render(<Welcome />);

import react, { useState } from "react";
import ReactDom, { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
var isedit=false;
let idtoedit=-1;
function ContactForm() {
  // let[name,setname]=useState('old faculty');

  // let faculties=['chetan','nenis'];
  let [faculties, setfaculty] = useState(["chetan", "nenis"]); //hooks
  let [facultyname,setfacultyname] = useState("");
 

  let formtedfaculty = faculties.map((fac,i) => {
    return (
     <li>
        {fac}{" "}
        <button onClick={()=>{
            isedit=true;
            idtoedit=i;
            setfacultyname(faculties[i]);   
        }}>
           {" "} edit
        </button>
        {'  '}
        <button onClick={()=>{
            let temp=faculties.filter((factemp)=>{
                return factemp!==fac;
            });
            setfaculty(temp);
        }}>
           {" "} delete
        </button>
     </li>
    );
  });
  return (
    <>
      <form>
        <label>Enter your name : </label>
        <input
          type="text"
          value={facultyname}
          onChange={(e) => {
            setfacultyname(e.target.value);
            //    setname('new name')
            // setname(e.target.value);
            // console.log(e.target.value);
            //... this operator to called sprad operator
          }}
        ></input>
        <br></br>
        <br></br>
        <input
          type="submit"
          onClick={(e) => {
            if(isedit){
                faculties[idtoedit]=facultyname;
            }
            else{
                setfaculty([...faculties, facultyname]);
            }
            setfacultyname(""); 
            e.preventDefault();
          }}
          value="submit"
        ></input>
      </form>
      <br></br>
      {/* <h1>{name}</h1> */}
      <ul>{formtedfaculty}</ul>
    </>
  );
}
root.render(<ContactForm />);
