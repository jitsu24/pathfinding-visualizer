import React from 'react';
import {NAV_HEIGHT} from '../constants';



const Menu = props =>{


    const {runAlgo} = props;


    return(
        <nav>
            <button
            onClick={()=>{runAlgo()}}
            >Start Algorithm</button>
        </nav>
    )
}

const styles = {
    nav:{
        height: `${NAV_HEIGHT}px`,
        background: '#feafea'
    }
}
export default Menu;