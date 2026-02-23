const MAX_WATCH = 9;
const SAMPLE_CHANNELS = [
  "UCJTq8YQXj-2_BNgwis4SGsg",
  "UCBu6n7CY3k_HdX8THmyEOEw",
  "UCz4s1BgKNXTwOHO0PHQHQxQ",
  "UCsUhlZAanKWUsZxqbPbjAOw",
  "UCZHSRSIP9m2uxOAOlVJGytw",
  "UCamUqGw_jBciNhBNwBcJFRg",
  "UCKciWscgYbPCuAdtX91x06w",
  "UCvrhggVJsdR6uYvuIrX_Grg",
  "UCrvlbX01F8qtXlJDXX7czVg"
];

const modal = document.getElementById("playerModal");
const grid = document.getElementById("playerGrid");
const openBtn = document.getElementById("openPlayer");
const closeBtn = document.getElementById("closePlayer");

let activeChannels = [];

openBtn.onclick = () => {
  activeChannels = SAMPLE_CHANNELS.slice(0, MAX_WATCH);
  render();
  modal.classList.add("open");
};

closeBtn.onclick = () => {
  modal.classList.remove("open");
  grid.innerHTML = "";
};

function render() {
  grid.innerHTML = "";
  grid.dataset.layout = activeChannels.length;

  activeChannels.forEach((id, i) => {
    const card = document.createElement("div");
    card.className = "stream-card";
    card.innerHTML = `
      <iframe src="https://www.youtube.com/embed/live_stream?channel=${id}&autoplay=1&mute=1" allowfullscreen></iframe>
      <button class="remove-btn" onclick="remove(${i})">×</button>
    `;
    grid.appendChild(card);
  });
}

function remove(i) {
  activeChannels.splice(i,1);
  render();
}
