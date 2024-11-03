const form = document.getElementById('form');

form.addEventListener('submit', function(event)    {
    event.preventDefault();

    const TransporteIndividual = document.getElementById('TransporteIndividual').value;
    const TransportePublico = document.getElementById('TransportePublico').value;

    // let calculo = TransporteIndividual * TransportePublico
    // console.log(calculo)
});

const value = document.getElementById("valor emissao");

// document.getElementById("resultado").classList.remove('hidden');