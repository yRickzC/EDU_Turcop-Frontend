function toggleSearch() {
    const searchBox = document.getElementById('searchBox');
    searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
  }
  
  function filtrar() {
    const inputTop = document.getElementById('searchTop');
    const inputCentral = document.getElementById('searchCentral');
    const filtroTop = inputTop?.value.toLowerCase() || "";
    const filtroCentral = inputCentral?.value.toLowerCase() || "";
    const filtro = filtroTop || filtroCentral;
  
    const lista = document.getElementById('lista');
    const itens = lista.getElementsByTagName('li');
    let encontrados = 0;
  
    for (let i = 0; i < itens.length; i++) {
      const texto = itens[i].textContent || itens[i].innerText;
      if (texto.toLowerCase().includes(filtro)) {
        itens[i].style.display = '';
        encontrados++;
      } else {
        itens[i].style.display = 'none';
      }
    }
  
    const resultado = document.getElementById('resultado');
    resultado.innerText = filtro
      ? (encontrados > 0
          ? `Encontramos ${encontrados} resultado(s) para "${filtro}"`
          : `Nenhum resultado encontrado para "${filtro}"`)
      : '';
  }
  
