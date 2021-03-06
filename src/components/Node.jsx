import React from 'react';
import PropTypes from 'prop-types';
import './node.css';


const Node = props => { 
  const {style, node, isStart, isFinish, onHover, onHoverLeave, isHovered, isVisited} = props;
  
  const generateClassNames = ()=>{
    let classes = 'node';
    if(isStart) classes += ' start-node';
    if(isFinish) classes+=' end-node';
    if(isVisited) classes += ' isVisited';
    return classes;     
  };
  const generatedClassNames = generateClassNames();
 

    return (
    <div className={`node ${generatedClassNames}`}  style={{...styles.container, ...style}}
    onMouseEnter={()=>onHover(node)}
    onMouseLeave={()=>onHoverLeave(node)}
    >
        <span style={styles.small}>
            {node.c}
            {node.isHovered ? ('H') : ''}
            
        </span>
    </div>
   )
}

const styles = {
    container: {

    },
    small:{
        fontSize: '.5em'
    }
}
Node.propTypes = {
    isStart: PropTypes.bool,
    isFinish: PropTypes.bool,
    isVisited: PropTypes.bool.isRequired,
    isPath: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool,
    onHover: PropTypes.func.isRequired,
    onHoverLeave: PropTypes.func.isRequired,
    node: PropTypes.object.isRequired,
    style: PropTypes.object,

 };
 
Node.defaultProps = {
    isVisited: false,
    isPath: false,
 };
export default Node;