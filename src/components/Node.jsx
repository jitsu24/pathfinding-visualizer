import React from 'react';
import './node.css'


const Node = props => { 
  const {style, node, isStart, isFinish} = props;
  
  const generateClassNames = ()=>{

    if(isStart) return 'start-node';
    if(isFinish) return 'end-node';
    return '';     
  }
  const generatedClassNames = generateClassNames();
  console.log(props);

    return (
    <div className={`node ${generatedClassNames}`}  style={{...styles.container, ...style}}>
        <span style={styles.small}>{node.c}</span>
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

export default Node;