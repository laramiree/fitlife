import{
  bfs,
  dfs,
  ucs,
  greedyBestFirst,
  aStar
} from"./algorithms.js";

import{mapData, buildGraph} from "./mapData.js";



import { useState } from 'react'

import './App.css'

function App() {
  const [showComparison, setShowComparison] = useState(false);
 

 
const [startCity, setStartCity] = useState("Jenin");
const [goalCity, setGoalCity] = useState("Hebron");
 const [selectedAlgorithm, setSelectedAlgorithm] = useState("BFS");
 const [currentMap, setCurrentMap] = useState(mapData);
 const { graph, coordinates } = buildGraph(currentMap);
let result;

switch (selectedAlgorithm) {
  case "BFS":
    result = bfs(graph, startCity, goalCity);
    break;

  case "DFS":
    result = dfs(graph, startCity, goalCity);
    break;

  case "UCS":
    result = ucs(graph, startCity, goalCity);
    break;

  case "Greedy":
    result = greedyBestFirst(graph, startCity, goalCity, coordinates);
    break;

  case "A*":
    result = aStar(graph, startCity, goalCity, coordinates);
    break;

  default:
    result = bfs(graph, startCity, goalCity);
}
console.log(`${selectedAlgorithm} Result:`, result);
const comparisonResults = [
  { name: "BFS", data: bfs(graph, startCity, goalCity) },
  { name: "DFS", data: dfs(graph, startCity, goalCity) },
  { name: "UCS", data: ucs(graph, startCity, goalCity) },
  {
    name: "Greedy",
    data: greedyBestFirst(graph, startCity, goalCity, coordinates),
  },
  {
    name: "A*",
    data: aStar(graph, startCity, goalCity, coordinates),
  },
];
const validCosts = comparisonResults
  .map((item) => item.data.cost)
  .filter((cost) => typeof cost === "number" && Number.isFinite(cost));

const lowestCost =
  validCosts.length > 0 ? Math.min(...validCosts) : null;

  return (
    <>
      <section id="center">
      
        <div>
          <h1>Route Search App</h1>
          <div>
  <label htmlFor="mapUpload">Upload JSON Map: </label>
<input
  type="file"
  id="mapUpload"
  accept=".json,application/json"
  onChange={async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const text = await file.text();
      const newMap = JSON.parse(text);

      if (
        !Array.isArray(newMap.cities) ||
        !Array.isArray(newMap.roads) ||
        newMap.cities.length === 0
      ) {
        throw new Error("Invalid map format");
      }
const cityNames = new Set();

for (const city of newMap.cities) {
  if (
    typeof city.name !== "string" ||
    city.name.trim() === "" ||
    cityNames.has(city.name) ||
    typeof city.x !== "number" ||
    !Number.isFinite(city.x) ||
    typeof city.y !== "number" ||
    !Number.isFinite(city.y)
  ) {
    throw new Error("Invalid city data");
  }

  cityNames.add(city.name);
}

for (const road of newMap.roads) {
  if (
    !cityNames.has(road.from) ||
    !cityNames.has(road.to) ||
    road.from === road.to ||
    typeof road.km !== "number" ||
    !Number.isFinite(road.km) ||
    road.km < 0
  ) {
    throw new Error("Invalid road data");
  }
}
      setCurrentMap(newMap);
      setStartCity(newMap.cities[0].name);
      setGoalCity(newMap.cities[newMap.cities.length - 1].name);

      alert("Map uploaded successfully!");
    } catch (error) {
      alert("Invalid JSON map file!");
      console.error(error);
    }
  }}
/>
</div>
<label htmlFor="startCity">Start City: </label>

<select
  id="startCity"
  value={startCity}
  onChange={(e) => setStartCity(e.target.value)}
>
  {currentMap.cities.map((city) => (
    <option key={city.name} value={city.name}>
      {city.name}
    </option>
  ))}
</select>
<div>
  <label htmlFor="goalCity">Goal City: </label>

  <select
    id="goalCity"
    value={goalCity}
    onChange={(e) => setGoalCity(e.target.value)}
  >
    {currentMap.cities.map((city) => (
      <option key={city.name} value={city.name}>
        {city.name}
      </option>
    ))}
  </select>
</div>
<div>
  <label htmlFor="algorithm">Algorithm: </label>

  <select
    id="algorithm"
    value={selectedAlgorithm}
    onChange={(e) => setSelectedAlgorithm(e.target.value)}
  >
    <option value="BFS">BFS</option>
    <option value="DFS">DFS</option>
    <option value="UCS">UCS</option>
    <option value="Greedy">Greedy Best-First</option>
    <option value="A*">A*</option>
  </select>
</div>
<h2>{selectedAlgorithm} Result</h2>
<p>Path: {result.path?.length > 0 ? result.path.join(" → ") : "No path found"}</p>

<p>Cost: {result.cost !== null ? `${result.cost} km` : "N/A"}</p>
<p>Search Steps (Visited Cities): {result.steps}</p>
<h2>{currentMap.name || "Road Map"}</h2>
<div className="map-container">
  <svg
   viewBox={(() => {
  const xs = currentMap.cities.map((city) => city.x);
  const ys = currentMap.cities.map((city) => 110 - city.y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const padding = 15;

  return `${minX - padding} ${minY - padding} ${Math.max(maxX - minX + 2 * padding, 40)} ${Math.max(maxY - minY + 2 * padding, 40)}`;
})()}
    width="100%"
    style={{ background: "#f0f7ff", borderRadius: "12px" }}
  >
    {currentMap.roads.map((road, index) => {
  const from = coordinates[road.from];
  const to = coordinates[road.to];

  return (
    <line
      key={index}
      x1={from.x}
      y1={110 - from.y}
      x2={to.x}
      y2={110 - to.y}
      stroke="#94a3b8"
      strokeWidth="0.7"
    />
  );
})}
{result.path?.slice(0, -1).map((cityName, index) => {
  const nextCity = result.path[index + 1];

  const from = coordinates[cityName];
  const to = coordinates[nextCity];

  if (!from || !to) return null;

  return (
    <line
      key={index}
      x1={from.x}
      y1={110 - from.y}
      x2={to.x}
      y2={110 - to.y}
      stroke="#ef4444"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  );
})}
  {currentMap.cities.map((city) => (
  <g key={city.name}>
   <circle
  cx={city.x}
  cy={110 - city.y}
  r="2.5"
  fill={
    city.name === startCity
      ? "#16a34a"
      : city.name === goalCity
      ? "#dc2626"
      : "#2563eb"
  }
/>

    <text
      x={city.x + 3}
      y={110 - city.y - 3}
      fontSize="3"
      fill="#1e3a5f"
    >
      {city.name}
    </text>
  </g>
))}
  </svg>
</div>
<div className="map-legend">
  <span>🟢 Start City</span>
  <span>🔴 Goal City</span>
  <span>🔵 Other Cities</span>
  <span>🔴 Highlighted Route</span>
</div>

<button
  onClick={() => setShowComparison(!showComparison)}
>
  {showComparison ? "Hide Comparison" : "Compare All"}
</button>
{showComparison && (
  <>
<h2>Algorithms Comparison</h2>


<table>
  <thead>
    <tr>
      <th>Algorithm</th>
      <th>Path</th>
      <th>Cost (km)</th>
      <th>Visited Cities</th>
    </tr>
  </thead>

  <tbody>
  {comparisonResults.map((item) => (
    <tr
      key={item.name}
      style={{
        backgroundColor:
          lowestCost !== null && item.data.cost === lowestCost
            ? "#bbf7d0"
            : undefined,
      }}
    >
      <td>
        {item.name}
        {lowestCost !== null && item.data.cost === lowestCost
          ? " 🏆 Lowest Cost"
          : ""}
      </td>
      <td>
  {item.data.path?.length > 0
    ? item.data.path.join(" → ")
    : "No path found"}
</td>

      <td>{item.data.cost}</td>
      <td>{item.data.steps}</td>
    </tr>
  ))}
</tbody>
</table>

 </>
)}
        
        </div>
     
      </section>

    

    </>
  )
}

export default App
