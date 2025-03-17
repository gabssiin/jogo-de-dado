import React, { useState } from 'react';
import Dado from './components/Dado';
import Placar from './components/Placar';
import Resultado from './components/Resultado';
import './App.css';
import { FaUser, FaUserTie } from 'react-icons/fa';

function App() {
  const [rodada, setRodada] = useState(1);
  const [pontuacaoJogador1, setPontuacaoJogador1] = useState(0);
  const [pontuacaoJogador2, setPontuacaoJogador2] = useState(0);
  const [valorDadoJogador1, setValorDadoJogador1] = useState(1);
  const [valorDadoJogador2, setValorDadoJogador2] = useState(1);
  const [mensagem, setMensagem] = useState('');
  const [jogoTerminou, setJogoTerminou] = useState(false);

  const rolarDados = () => {
    const novoValorJogador1 = Math.floor(Math.random() * 6) + 1;
    const novoValorJogador2 = Math.floor(Math.random() * 6) + 1;

    setValorDadoJogador1(novoValorJogador1);
    setValorDadoJogador2(novoValorJogador2);

    if (novoValorJogador1 > novoValorJogador2) {
      setPontuacaoJogador1(pontuacaoJogador1 + 1);
      setMensagem('Jogador 1 venceu a rodada!');
    } else if (novoValorJogador2 > novoValorJogador1) {
      setPontuacaoJogador2(pontuacaoJogador2 + 1);
      setMensagem('Jogador 2 venceu a rodada!');
    } else {
      setMensagem('Empate!');
    }

    if (rodada === 5) {
      if (pontuacaoJogador1 > pontuacaoJogador2) {
        setMensagem('Jogador 1 venceu o jogo!');
      } else if (pontuacaoJogador2 > pontuacaoJogador1) {
        setMensagem('Jogador 2 venceu o jogo!');
      } else {
        setMensagem('Jogo empatado!');
      }
      setJogoTerminou(true);
    } else {
      setRodada(rodada + 1);
    }
  };

  const jogarNovamente = () => {
    setRodada(1);
    setPontuacaoJogador1(0);
    setPontuacaoJogador2(0);
    setValorDadoJogador1(1);
    setValorDadoJogador2(1);
    setMensagem('');
    setJogoTerminou(false);
  };

  return (
    <div className="App">
      <h1>Jogo de Dados</h1>
      <h2>Rodada {rodada}</h2>

      <div className="jogadores">
  <div className="jogador">
    <FaUser size={50} color="#007bff" />
    <Dado valor={valorDadoJogador1} />
  </div>
  <div className="jogador">
    <FaUserTie size={50} color="#ff6600" />
    <Dado valor={valorDadoJogador2} />
  </div>
</div>

      <button onClick={rolarDados} disabled={jogoTerminou}>
        Rolar Dados
      </button>
      <Placar jogador1={pontuacaoJogador1} jogador2={pontuacaoJogador2} />
      <Resultado mensagem={mensagem} />
      {jogoTerminou && (
        <button onClick={jogarNovamente}>Jogar Novamente</button>
      )}
    </div>
  );
}

export default App;