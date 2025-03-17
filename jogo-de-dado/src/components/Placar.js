import React from "react";

function Placar({jogador1, jogador2}){
    return (
    <div className="placar">
        <p>Jogador 1: {jogador1}</p>
        <p>Jogador 2: {jogador2}</p>
    </div>
    );

}

export default Placar;