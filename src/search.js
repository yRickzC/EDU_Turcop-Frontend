const bar = document.getElementById("lista");
const input = document.getElementById("searchCentral");


function createItem(item) {
  // 1) Container do item
  const container = document.createElement("div");
  container.classList.add("item");

  // 2) Título
  const title = document.createElement("h3");
  title.textContent = item.name;
  container.appendChild(title);

  // 3) Div do mapa com ID único
  const mapDiv = document.createElement("div");
  const mapId = `map-${Math.random().toString(36).substr(2, 8)}`;
  mapDiv.id = mapId;
  mapDiv.classList.add("map");
  container.appendChild(mapDiv);

  // 4) Adiciona ao DOM
  bar.appendChild(container);

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

async function searchList() {
  const list = await request_find(input.value.toLowerCase());

  bar.innerHTML = ""

  const data = list.data;

  data.forEach(element => {
    createItem(element);
  });

}

