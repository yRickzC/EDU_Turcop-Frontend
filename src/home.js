const search = document.getElementById("home-search");
const response = document.getElementById("home-response");
const load = document.getElementById("home-load");

function createResponse(item) {
    // 1) Container do item
    const container = document.createElement("div");
    container.classList.add("home-response");
  
    const dataContainer = document.createElement("div");
    dataContainer.classList.add("home-response-data");

    // 2) Título
    const title = document.createElement("h3");
    title.textContent = item.name;
    dataContainer.appendChild(title);

    // 3) Descrição
    const description = document.createElement("p");
    description.textContent = item.description;
    dataContainer.appendChild(description);
  
    container.appendChild(dataContainer);

    // 3) Div do mapa com ID único
    const mapDiv = document.createElement("div");
    const mapId = `map-${Math.random().toString(36).substr(2, 8)}`;
    mapDiv.id = mapId;
    mapDiv.classList.add("mini-map");
    container.appendChild(mapDiv);
  
    // 4) Adiciona ao DOM
    response.appendChild(container);
  
    // 5) Cria o mapa para este item
    createMap(mapId, item.name, item.latitude, item.longitude);
  }

function createMap(id, name, lat, lng) {
    const map = L.map(id).setView([lat, lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
  
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(name);
}

async function requestAI() {
    load.innerText = "Pesquisando com a IA";
    const list = await request_ai(search.value.toLowerCase());
    const data = list.data;

    

    console.log(list);

    load.innerText = "";
    if (data.length === 0) {
        return;
    }

    response.innerHTML = "";

    data.forEach(element => {
        createResponse(element);
    });

    
}