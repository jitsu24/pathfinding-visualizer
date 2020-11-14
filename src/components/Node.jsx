import React from 'react';


const Node = props => { 
  const {style, node} = props;

    return (
    <div style={{...styles.container, ...style}}>
        <span style={styles.small}>{node.c}</span>
    </div>
   )
}

const styles = {
    container: {
        border: '1px solid #0b0fbf',
        background: '#fefeff',
        minWidth: '5px',
        minHeight: '5px',
        boxSizing: 'border-box'
    },
    small:{
        fontSize: '.5em'
    }
}

export default Node;