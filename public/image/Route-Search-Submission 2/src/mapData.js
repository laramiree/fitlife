import defaultMap from "./westbank_map.json";
export const mapData = defaultMap;
export function buildGraph(map) {
    const graph = {};
    const coordinates = {};

    for (const city of map.cities) {
        graph[city.name] = [];
        coordinates[city.name] = {
            x: city.x,
            y: city.y
        };
    }


    for (const road of map.roads) {
        graph[road.from].push({
            city: road.to,
            km: road.km
        });

        graph[road.to].push({
            city: road.from,
            km: road.km
        });
    }

    return { graph, coordinates };
}

export function heuristic(city, goal, coordinates) {
    const x1 = coordinates[city].x;
    const y1 = coordinates[city].y;
    const x2 = coordinates[goal].x;
    const y2 = coordinates[goal].y;

    return Math.floor(
        Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
    );
}
