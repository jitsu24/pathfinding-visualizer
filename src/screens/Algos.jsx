import React from 'react';
import {Menu, Pathfinder} from '../components';
import {BFS} from '../algos';

const Algos = props => {
    return (
        <div>
            <Menu
                runAlgo={BFS}
            ></Menu>
            <Pathfinder
            rowLimit={30}
            columnLimit={20}
      >

      </Pathfinder>
        </div>
    )
}

export default Algos;