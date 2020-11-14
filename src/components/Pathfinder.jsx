import React, { useEffect, useState, Component } from 'react';
import {Node} from '.';

class Pathfinder extends Component {

    constructor(props){
        super(props);

        this.state = {
            nodes : [],
            windowWidth: null,
            windowHeight: null,
            gridWidth: null,
            boxSize: null,
            
        }
        this.gridRef = React.createRef(null);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }


    componentDidMount(){
        let {rowLimit, columnLimit} = this.props;
        let nodes = this.state.nodes;
        this.updateWindowDimensions();
        
        window.addEventListener('resize', this.updateWindowDimensions);
        for(let i = 0; i < rowLimit; i++){
            let currentRow = [];
            for(let j = 0; j < columnLimit; j++){
                currentRow.push({r: i, c: j});
            }
            nodes = [...nodes, currentRow];
        }
        this.setState({nodes});

        console.table(nodes)

    }

    

    updateWindowDimensions(){
        this.setState({
            windowWidth: this.gridRef.current.offsetWidth,
            windowHeight: this.gridRef.current.offsetHeight,
            gridWidth: this.gridRef.current.offsetWidth - 40,
            boxSize: (this.gridRef.current.offsetWidth - 40) / this.props.columnLimit,     
        })
    }

    updateBoxSize(){
        this.setState({
            boxSize: this.state.gridWidth / this.props.columnLimit
        })
    }


    render(){
        const {nodes, windowWidth, windowHeight, gridWidth, boxSize} = this.state;
        const {rowLimit, columnLimit} = this.props;
        const computedStyles ={
            grid: {
                gridTemplateColumns:`repeat(${columnLimit}, ${boxSize}px)`,
                width: gridWidth
              
            },
            node:{
                width: gridWidth / columnLimit,
                height: gridWidth/columnLimit
            }
        }
        const gridStyle = Object.assign({}, styles.grid, computedStyles.grid)
        return(
            <div className="grid" style={gridStyle} ref={this.gridRef}>
                {nodes.map( (row, rowIdx) => 
                    row.map( (node, nodeIdx) => (<Node key={`${nodeIdx}`}  node={node} style={computedStyles.node}></Node>)
                    )
                )}
                
            </div>
        )
    }
    


}
const styles = {
    grid:{
        display: 'grid',
        height: 'auto',
        overflow: 'hidden'
    },

}





export default Pathfinder;
