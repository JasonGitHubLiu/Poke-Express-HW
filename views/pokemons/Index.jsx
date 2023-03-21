import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

function Index(props) {
  return (
    <DefaultLayout title="Index View">
      <div className="index-view">
        <h1>Index View</h1>
        <head>
          <title>See All The Pokemon!</title>
        </head>
        <h1 style={myStyle}>See All The Pokemon!</h1>
        <ul>
          {props.pokemons.map((pokemons, index) => (
            <li key={index}>
              <a href={`/pokemons/${pokemons._id}`}>
                <strong>{pokemons.name}</strong>
              </a>
            </li>
          ))}
        </ul>
        <a href="/pokemons/new">Add...</a>

        <br />
        <br />

        <form action="/pokemons/seed" method="POST">
          <button>SEED</button>
        </form>

        <br />

        <form action="/pokemons/clear?_method=DELETE" method="POST">
          <button>CLEAR</button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default Index;
