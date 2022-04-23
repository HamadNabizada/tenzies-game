import React, {useState, useEffect} from 'react'
import Dice from './Dice'
import {nanoid} from "nanoid"

export default function Tenzies(){
    function getRandomDice(numOfDice){
        let diceArray=[]
        for (let i = 0; i < numOfDice; i++) {
            let tempDie = {
                value: (Math.floor(Math.random() * 6)+1),
                isHeld: false,
                id: nanoid()
            }
            diceArray.push(tempDie)
        }
        return diceArray
    }
    function toggleHold(id){
        setSixDiceArray( prevArray =>{
            let newDiceArray = prevArray.map( die =>{
                return die.id === id ? 
                    {...die, isHeld: !die.isHeld} :
                    {...die}
            })
            return newDiceArray
        })
    }

    let [sixDiceArray, setSixDiceArray] = useState(getRandomDice(10))
    let diceElements = sixDiceArray.map((item) =>{
        return <Dice handleClick={() => toggleHold(item.id)} key={item.id} value={item.value} isHeld={item.isHeld}/>
    })

    function generateNewDice(){
        setSixDiceArray( prevArray =>{
            let newArray = prevArray.map(die =>{
                if(die.isHeld === false){
                    let newDie = getRandomDice(1)[0]
                    return {...newDie}
                }
                else{
                    return {...die}
                }
            })
            return newArray
        })
    }

    return (
        <section className="tenzies-wrapper">
            <div className="game-wrapper">
                <div className="dice-wrapper">
                    {diceElements}
                </div>
                <button onClick={generateNewDice} className="rollBtn">Roll</button>
            </div>
        </section>
    )
}