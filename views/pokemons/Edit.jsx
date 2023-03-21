// import React from 'react'
// import DefaultLayout from '../layouts/DefaultLayout'

// function Index(props) {
//     // can't use hooks or state 
//     // can't use event listeners in the same way
//     return (
//         <DefaultLayout>
//             <div>
//                 <h1>Index View</h1>
//                 <ul>
//                     {props.pokemons.map((pokemon, index) => 
//                         <li key={index}>
//                             <a href={`/pokemons/${pokemon._id}`}><strong>{pokemon.name}</strong></a>
//                         </li>
//                     )}
//                 </ul>
//                 <a href="/pokemons/new">Add...</a>

//                 <br/><br/><br/>

//                 <form action="/pokemons/seed" method="POST">
//                     <button>SEED</button>
//                 </form>

//                 <br/>

//                 <form action="/pokemons/clear?_method=DELETE" method="POST">
//                     <button>CLEAR</button>
//                 </form>
//             </div>
//         </DefaultLayout>
//     )
// }

// export default Index



// import React from 'react'
// import DefaultLayout from '../layouts/DefaultLayout'

// function Edit(props) {
//     console.log(props)
//     return (
//         <DefaultLayout>
//             <div>
//                 <h1>Edit View</h1>
//                 <ul>
//                     {props.pokemon.map((pokemon, index) => 
//                         <li key={index}>
//                             <a href={`/pokemons/${pokemon._id}`}><strong>{pokemon.name}</strong></a>
//                         </li>
//                     )}
//                 </ul>
//                 <a href="/pokemons/new">Add...</a>

//                 <br/><br/><br/>

//                 <form action="/pokemons/seed" method="POST">
//                     <button>SEED</button>
//                 </form>

//                 <br/>

//                 <form action="/pokemons/clear?_method=DELETE" method="POST">
//                     <button>CLEAR</button>
//                 </form>
//             </div>
//         </DefaultLayout>
//     )
// }

// export default Edit

import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Edit(props) {
  return (
    <DefaultLayout>
      <div>
        <h1>Edit pokemon</h1>
        <form action={`/pokemons/${props.pokemon._id}?_method=PUT`} method="POST">
          <label htmlFor="nme">Name:</label>
          <br />
          <input type="text" id="nme" name="name" value={props.pokemon.name} />
          <br /> <br />
          <input type="text" id="img" name="img" value={props.pokemon.img} />
          <br />
          <br />
          <button>Submit</button>
          <br /><br />
          <a href="/pokemons">Back</a>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default Edit;