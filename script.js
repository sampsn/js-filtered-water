let water = ["salt", "dirt", "calcite", "uranium", "rubber"];
let filterOut = ["uranium", "dirt"];

const filterWater = (water, filterOut) => {
  for (let i in water) {
    if (filterOut.includes(water[i])) {
      water.splice(i, 1);
    }
  }
  return water;
};

document.getElementById("filter").addEventListener("click", (e) => {
  console.log(filterWater(water, filterOut));
  const filteredWater = filterWater(water, filterOut);

  for (let i = 4; i > 0; i--) {
    for (let i in filteredWater) {
      let e = document.createElement("p");
      e.classList.add("animate-ping");
      e.classList.add("text-blue-400");
      e.classList.add("text-3xl");
      e.classList.add("font-semibold");
      e.innerText = filteredWater[i];
      document.getElementById("wf-box").appendChild(e);
    }
  }
});
