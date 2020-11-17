export const addPropToNode =  ({nodes, r, c, prop, value})=>{
    // shallow copy nodes
    // check if given cell is within grid
    let inGrid = checkIfNodeInGrid({r,c,grid:nodes})
    console.log(prop);
    console.log(inGrid);
    if(inGrid) nodes[r][c][prop] = value;
    const node = nodes[r][c];
    console.log({node})
    return nodes;
}

export const checkIfNodeInGrid = ({r, c, grid})=>{
    if(r + 1 < grid.length
        && c + 1 < grid[0].length
        && r >=  0
        && c >= 0){
            return true;
        }
        return false;
}