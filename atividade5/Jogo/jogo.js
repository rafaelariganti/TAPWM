let rodada = 1;
let placarUsuario = 0;
let placarMaquina = 0;

function jogar(escolhaUsuario) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const escolhaMaquina = opcoes[Math.floor(Math.random() * 3)];

  let resultado = '';

  if (escolhaUsuario === escolhaMaquina) {
    resultado = `Empate! Ambos escolheram ${escolhaUsuario}.`;
  } else if (
    (escolhaUsuario === 'pedra' && escolhaMaquina === 'tesoura') ||
    (escolhaUsuario === 'papel' && escolhaMaquina === 'pedra') ||
    (escolhaUsuario === 'tesoura' && escolhaMaquina === 'papel')
  ) {
    resultado = `Você ganhou! ${escolhaUsuario} vence ${escolhaMaquina}.`;
    placarUsuario++;
  } else {
    resultado = `Você perdeu! ${escolhaMaquina} vence ${escolhaUsuario}.`;
    placarMaquina++;
  }

  document.getElementById('resultado').textContent = resultado;
  document.getElementById('placarUsuario').textContent = placarUsuario;
  document.getElementById('placarMaquina').textContent = placarMaquina;

  if (rodada >= 3) {
    fimDaRodada();
  } else {
    rodada++;
    document.getElementById('rodada').textContent = rodada;
  }
}

function fimDaRodada() {
  let vencedor = '';
  if (placarUsuario > placarMaquina) {
    vencedor = 'Você venceu a rodada!';
    estourarConfetes(); // 🎉
  } else if (placarUsuario < placarMaquina) {
    vencedor = 'A máquina venceu a rodada!';
  } else {
    vencedor = 'Empate na rodada!';
  }

  document.getElementById('vencedor').textContent = vencedor;

  setTimeout(() => {
    placarUsuario = 0;
    placarMaquina = 0;
    rodada = 1;
    document.getElementById('placarUsuario').textContent = placarUsuario;
    document.getElementById('placarMaquina').textContent = placarMaquina;
    document.getElementById('rodada').textContent = rodada;
    document.getElementById('resultado').textContent = '';
    document.getElementById('vencedor').textContent = '';
  }, 3000);
}

function estourarConfetes() {
  const duration = 2000;
  const end = Date.now() + duration;

  const colors = ['#CDC1FF', '#BFECFF', '#FFF6E3', '#FFCCEA'];

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
