import {NODE_PROPS} from '../constants';
import {addPropToNode} from '../utils';

const BFS = (start, end, grid, nodeStateUpdater)=>{

    function visitNode(r, c){
        let newState = addPropToNode({
            nodes: grid, 
            r, 
            c,
            prop: NODE_PROPS.IS_VISITED,
            value: true,
        });


        nodeStateUpdater(newState)
        
    }
}

export default BFS;