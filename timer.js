const dataInicio = new Date('2024-04-04T01:00:00');

    function atualizar() {
      const agora = new Date();
      const diff = agora - dataInicio; // diferença em milissegundos

      const segundos = Math.floor((diff / 1000) % 60);
      const minutos  = Math.floor((diff / 1000 / 60) % 60);
      const horas    = Math.floor((diff / 1000 / 60 / 60) % 24);
      let dias     = agora.getDate() - dataInicio.getDate();
      let meses    = agora.getMonth() - dataInicio.getMonth();
      let anos     = agora.getFullYear() - dataInicio.getFullYear();
     
      if (dias < 0) {
        meses --
        const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += mesAnterior.getDate();
      }

      if (meses < 0) {
        anos--;
        meses += 12
      }
         

      console.log(`${anos}a ${meses}m ${dias}d ${horas}h ${minutos}m ${segundos}s`);
      document.getElementById('relogio').textContent =
      `${anos} Anos, ${meses} Meses, ${dias} Dias, ${horas} Horas, ${minutos} Minutos, ${segundos} Segundos`;

      
    }

    document.addEventListener('DOMContentLoaded', function() {
      atualizar(); // corre imediatamente
      setInterval(atualizar, 1000); // atualiza a cada segundo
    });
   