import React from 'react'

export default function Dice(props){
    let styles = {
        backgroundColor: props.isHeld ? '#59E391':'white'
    }

    return(
        <div onClick={props.handleClick} style={styles} className="dice">{props.value}</div>
    )
}