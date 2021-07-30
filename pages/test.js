// import React, { useState } from "react";


// const Test = () => {

//     const adminUser = {
//         email: "admin@admin.com",
//         password: "admin123"
//     }

//     const [user, setUser] = useState({name: "", email: ""});
//     const [error, setError] = useState("");

//     const Login = details =>{
//         console.log(details);
//     }
//     const Logout = details =>{
//         console.log("Logout");
//     }


//     return (  
//         <div className="app">
//             {(user.email != "") ? (
//                 <div>
//                     <h2>Welcome,<span>{user.name}</span></h2>
//                     <button>Logout</button>
//                 </div>
                
//             ) : (
//                 <Login login={Login} error={error}/>
//             )}
//         </div>
//     );
// }
 
// export default Test;