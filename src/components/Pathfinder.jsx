import React, { useEffect, useState, Component } from 'react';
import {Node} from '.';
import {v4} from 'uuid';

import {NAV_HEIGHT, NODE_PROPS} from '../constants';
import {BFS} from '../algos';



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
        this.handleHover = this.handleHover.bind(this);
        this.handleHoverLeave = this.handleHoverLeave.bind(this);
        this.updateNodesState = this.updateNodesState.bind(this);
    }

    componentDidMount(){
        let {rowLimit, columnLimit} = this.props;
        let nodes = this.state.nodes;
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        for(let i = 0; i < rowLimit; i++){
            let currentRow = [];
            for(let j = 0; j < columnLimit; j++){
                currentRow.push({r: i, c: j, id:v4()});
            }
            nodes = [...nodes, currentRow];
        }
        this.setState({nodes});

        BFS(0, 0, nodes, this.updateNodesState)
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
    handleHover({r, c}){
        // shallow copy nodes
        const nodes = this.state.nodes;
        if(r + 1 < nodes.length) nodes[r + 1][c].isHovered = true;
        if(c + 1 < nodes[0].length)nodes[r][c + 1].isHovered = true;
        if(r >  0)nodes[r - 1][c].isHovered = true;
        if(c > 0)nodes[r][c - 1].isHovered = true;
        this.setState({nodes})
    }
    handleHoverLeave({r, c}){
        const nodes = this.state.nodes;
        if(r + 1 < nodes.length) nodes[r + 1][c].isHovered = false;
        if(c + 1 < nodes[0].length)nodes[r][c + 1].isHovered = false;
        if(r >  0)nodes[r - 1][c].isHovered = false;
        if(c > 0)nodes[r][c - 1].isHovered = false;
        this.setState({nodes});
    }
    updateNodesState(newState){
        this.setState({nodes: newState})
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
        const gridStyle = Object.assign({}, styles.grid, computedStyles.grid);

        return(
            <div className="grid" style={gridStyle} ref={this.gridRef}>
                {nodes.map( (row, rowIdx) => 
                    row.map( (node, nodeIdx) => {
                        

                        return (<Node key={`${node.id}`}
                                                node={node} 
                                                style={computedStyles.node}
                                                idx={`${rowIdx}${nodeIdx}`}
                                                isStart={node.id === nodes[0][0].id}
                                                isFinish={node.id === nodes[rowLimit -1][ columnLimit -1].id}
                                                isVisited = {node.isVisited}
                                                onHover={this.handleHover}
                                                onHoverLeave={this.handleHoverLeave}
                                                >
                                                </Node>)}
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
