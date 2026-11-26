

export function greedyBestFirst(graph, start, goal, coordinates) {
    const frontier = [
        { city: start, from: null, distance: 0 }
    ];

    const visited = [];
    const parent = {};
    const distance = {};
    let steps = 0;

    while (frontier.length > 0) {
        
        let min = 0;

        for (let i = 1; i < frontier.length; i++) {
            const h1 = heuristic(
                frontier[i].city, goal, coordinates
            );

            const h2 = heuristic(
                frontier[min].city, goal, coordinates
            );

            if (
                h1 < h2 ||
                (h1 === h2 &&
                 frontier[i].city < frontier[min].city)
            ) {
                min = i;
            }
        }

        const item = frontier.splice(min, 1)[0];
        const current = item.city;

        if (visited.includes(current)) {
            continue;
        }

        visited.push(current);
        parent[current] = item.from;
        distance[current] = item.distance;
        steps++;

        if (current === goal) {
            const path = [];
            let city = goal;

            while (city !== null) {
                path.unshift(city);
                city = parent[city];
            }

            return {
                path: path,
                cost: distance[goal],
                steps: steps
            };
        }

        for (const neighbor of graph[current]) {
            const child = neighbor.city;

            if (!visited.includes(child)) {
                frontier.push({
                    city: child,
                    from: current,
                    distance: distance[current] + neighbor.km
                });
            }
        }
    }

    return { path: [], cost: null, steps: steps };
}


// A* Search
export function aStar(graph, start, goal, coordinates) {
    const frontier = [
        { city: start, from: null, distance: 0 }
    ];

    const visited = [];
    const parent = {};
    const distance = {};
    let steps = 0;
    const bestDistance = { [start]: 0 };

    while (frontier.length > 0) {

        let min = 0;

        for (let i = 1; i < frontier.length; i++) {
            const f1 = frontier[i].distance +
                heuristic(frontier[i].city, goal, coordinates);

            const f2 = frontier[min].distance +
                heuristic(frontier[min].city, goal, coordinates);

            if (
                f1 < f2 ||
                (f1 === f2 &&
                 frontier[i].city < frontier[min].city)
            ) {
                min = i;
            }
        }

        const item = frontier.splice(min, 1)[0];
const current = item.city;

if (item.distance > bestDistance[current]) {
    continue;
}

if (visited.includes(current)) {
    continue;
}

        visited.push(current);
        parent[current] = item.from;
        distance[current] = item.distance;
        steps++;

    
        if (current === goal) {
            const path = [];
            let city = goal;

            while (city !== null) {
                path.unshift(city);
                city = parent[city];
            }

            return {
                path: path,
                cost: distance[goal],
                steps: steps
            };
        }
for (const neighbor of graph[current]) {
    const child = neighbor.city;
    const newDistance = distance[current] + neighbor.km;
if (
    !visited.includes(child) &&
    (bestDistance[child] === undefined ||
     newDistance < bestDistance[child])
) {
    bestDistance[child] = newDistance;

    

        frontier.push({
            city: child,
            from: current,
            distance: newDistance
        });
    }
}
    }

    return { path: [], cost: null, steps: steps };
}


// Heuristic function
function heuristic(city, goal, coordinates) {
    const x1 = coordinates[city].x;
    const y1 = coordinates[city].y;
    const x2 = coordinates[goal].x;
    const y2 = coordinates[goal].y;

    return Math.floor(
        Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
    );
}



function sort(neighbors) {
    for (let i = 0; i < neighbors.length - 1; i++) {
        for (let j = i + 1; j < neighbors.length; j++) {
            if (neighbors[i].city > neighbors[j].city) {
                let temp = neighbors[i];
                neighbors[i] = neighbors[j];
                neighbors[j] = temp;
            }
        }
    }
    return neighbors;
}





// DFS
export function dfs(graph, start, goal) {
    const stack = [
        { city: start, from: null, distance: 0 }
    ];

    const visited = [];
    const parent = {};
    const distance = {};

    let steps = 0;

    while (stack.length > 0) {
        const item = stack.pop();
        const current = item.city;

        if (visited.includes(current)) {
            continue;
        }

        visited.push(current);
        parent[current] = item.from;
        distance[current] = item.distance;
        steps++;

        if (current === goal) {
            const path = [];
            let city = goal;

            while (city !== null) {
                path.unshift(city);
                city = parent[city];
            }

            return {
                path: path,
                cost: distance[goal],
                steps: steps
            };
        }

        const neighbors = graph[current].slice();
        sort(neighbors);

        for (let i = neighbors.length - 1; i >= 0; i--) {
            const neighbor = neighbors[i];
            const child = neighbor.city;

            if (!visited.includes(child)) {
                stack.push({
                    city: child,
                    from: current,
                    distance: distance[current] + neighbor.km
                });
            }
        }
    }

    return { path: [], cost: null, steps: steps };
}



export function ucs(graph, start, goal) {
    const frontier = [
        { city: start, from: null, distance: 0 }
    ];

    const visited = [];
    const parent = {};
    const distance = {};

    let steps = 0;

    while (frontier.length > 0) {
        let min = 0;

        for (let i = 1; i < frontier.length; i++) {
            if (
                frontier[i].distance < frontier[min].distance ||
                (
                    frontier[i].distance === frontier[min].distance &&
                    frontier[i].city < frontier[min].city
                )
            ) {
                min = i;
            }
        }

        const item = frontier.splice(min, 1)[0];
        const current = item.city;

        if (visited.includes(current)) {
            continue;
        }

        visited.push(current);
        parent[current] = item.from;
        distance[current] = item.distance;
        steps++;

        if (current === goal) {
            const path = [];
            let city = goal;

            while (city !== null) {
                path.unshift(city);
                city = parent[city];
            }

            return {
                path: path,
                cost: distance[goal],
                steps: steps
            };
        }

        const neighbors = graph[current];

        for (const neighbor of neighbors) {
            const child = neighbor.city;

            if (!visited.includes(child)) {
                frontier.push({
                    city: child,
                    from: current,
                    distance: distance[current] + neighbor.km
                });
            }
        }
    }

    return { path: [], cost: null, steps: steps };
}



// BFS
export function bfs(graph, start, goal) {
    const queue = [start];
    const visited = [];
    const parent = {};
    parent[start] = null;

    const distance = {};
    distance[start] = 0;

    let steps = 0;

    while (queue.length > 0) {
        const current = queue.shift();

        if (visited.includes(current)) {
            continue;
        }

        visited.push(current);
        steps++;

        if (current === goal) {
            const path = [];
            let city = goal;

            while (city !== null) {
                path.unshift(city);
                city = parent[city];
            }

            return {
                path: path,
                cost: distance[goal],
                steps: steps
            };
        }

        const neighbors = graph[current].slice();
        sort(neighbors);

        for (const neighbor of neighbors) {
            const child = neighbor.city;

            if (!visited.includes(child) && !queue.includes(child)) {
                queue.push(child);
                parent[child] = current;
                distance[child] = distance[current] + neighbor.km;
            }
        }
    }

    return { path: [], cost: null, steps: steps };
}
