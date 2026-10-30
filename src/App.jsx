//un componente es una porcion de la pagina web 



//el hook UseState
//un hook es una funcion especial en react
//el use state nos permite tener el control de una variable dentro de un componente

// import { useState } from "react";


// export default function App() {
//     const [Count, setCount] = useState(0);

// function HandlerIncrement(){
//         setCount(Count + 1);
//         if(Count >= 10){
//             alert("Numero limite")
//             setCount(10)
//         } 
// }
// function HandlerDecrement(){
//     setCount(Count - 1);
//     if(Count <= 0){
//         alert("Este es el limite")
//     }
// }
//     return(
//         // un fragment es una porcion de código html, en react me permite no escrbir
//         //toda la estructura html


//         <div className="flex mt-6 text-center gap-2 margin-auto">
//         <button className="rounded-2x1 p-4 bg-indigo-500 font-2x1 text-white mx-auto my-auto flex justy-content"
//         onClick={()=> HandlerIncrement()}
//         >Incrementar</button>
//         <h5>{Count}</h5>
//         <button className="rounded-2x1 p-4 bg-indigo-500 font-2x1 text-white mx-auto my-auto flex justy-content"
//         onClick={()=> HandlerDecrement()}>Decrementar</button>
//         </div>
//     )
// }

import{browserRouter as Routes, Route} from "react-router-dom"
//browseRouter es como el abuelo de las rutas, el router es el hijo
//y el route es el nieto
// en react los componentes se manejan como si fueran etiquetas
//emplo <nombre_componente> </nomre_componente>
