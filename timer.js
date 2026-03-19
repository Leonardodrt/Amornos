const dataInicio = new Date('2023-04-04T01:00:00');

    function atualizar() {
      const agora = new Date();
      const diff = agora - dataInicio; // diferença em milissegundos

      const segundos = Math.floor((diff / 1000) % 60);
      const minutos  = Math.floor((diff / 1000 / 60) % 60);
      const horas    = Math.floor((diff / 1000 / 60 / 60) % 24);
      const dias     = Math.floor(diff / 1000 / 60 / 60 / 24);
      const meses    = Math.floor((dias / 31))
      const anos     = Math.floor(dias / 365);
      console.log(`${dias}d`);
     // document.getElementById('relogio').textContent =
     // `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    atualizar(); // corre imediatamente
    setInterval(atualizar, 1000); // atualiza a cada segundo
   