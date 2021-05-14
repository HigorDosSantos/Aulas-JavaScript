
      function carregar() {
        var agora = new Date();
        var hora = agora.getHours();
        var minuto = agora.getMinutes();
        var body = document.getElementById("body1");
        var img = document.getElementById("imagem");
        atual.innerHTML = `Agora são ${hora}:${minuto} horas`;

        if (hora < 12) {
          //foto manhã
          img.src = "foto-dia.png";
          body.style.backgroundColor = "rgb(100, 149, 237)";
        } else if (hora >= 12 && hora <= 18) {
          //foto tarde
          img.src = "foto-tarde.png";
          body.style.backgroundColor = "rgb(241, 181, 91)";
        } else {
          //foto noite
          img.src = "foto-noite.png";
          body.style.backgroundColor = "rgb(28, 49, 49)";
        }
      }
