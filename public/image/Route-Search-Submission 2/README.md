
# Route Search Web App

## Group Members

- Student 1: Alzahraa Deek — ID: 12323611
- Student 2: Lara Miree — ID: 1240018
- Student 3: Sima Azem — ID: 12400864

## Project Overview

Route Search Web App is a web application built with React and Vite. It allows users to find and visualize routes between cities using different graph search algorithms.

Users can select a starting city, a destination city, and a search algorithm. The application displays the resulting path, its total distance, and the number of cities visited during the search.

## Search Algorithms

The application implements five search algorithms:

- **Breadth-First Search (BFS):** Explores cities level by level.
- **Depth-First Search (DFS):** Explores one branch as deeply as possible before backtracking.
- **Uniform Cost Search (UCS):** Expands the path with the lowest accumulated cost.
- **Greedy Best-First Search:** Uses a heuristic estimate to choose which city to explore next.
- **A* Search:** Combines accumulated path cost with a heuristic estimate.

## Features

- Select a start city and a goal city.
- Choose between five search algorithms.
- Display the resulting path and total distance in kilometers.
- Show the number of cities visited during the search.
- Visualize cities, roads, and the selected route on an SVG map.
- Compare the results of all five algorithms in a table.
- Highlight the lowest-cost result in the comparison table.
- Upload custom maps using JSON files.
- Validate uploaded map data.
- Handle cases where no route exists.

## Technologies Used

- React
- JavaScript
- Vite
- HTML and CSS
- SVG for map visualization

## How to Run the Project

1. Open the project folder in VS Code.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal.

**Note for Windows PowerShell:** If the `npm` command is blocked by the execution policy, use `npm.cmd` instead.

## Build and Code Checks

To create a production build:

```bash
npm run build
```

To check the code:

```bash
npm run lint
```

## Custom JSON Map Format

Users can upload a JSON file containing cities and roads.

Example:

```json
{
  "name": "Sample Map",
  "cities": [
    { "name": "City A", "x": 10, "y": 90 },
    { "name": "City B", "x": 30, "y": 60 },
    { "name": "City C", "x": 50, "y": 30 }
  ],
  "roads": [
    { "from": "City A", "to": "City B", "km": 20 },
    { "from": "City B", "to": "City C", "km": 25 },
    { "from": "City A", "to": "City C", "km": 60 }
  ]
}
```

Each city must have a unique name and numeric coordinates. Each road must connect existing cities and have a non-negative distance.

## Notes

- Search steps represent the number of cities visited during the search, not necessarily the number of cities in the final path.
- Different algorithms may produce different routes and total costs.
- The application displays a message when no path is found.
- Uploaded maps are stored temporarily in application state and reset when the page is refreshed.