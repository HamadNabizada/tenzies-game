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

    let [sixDiceArray, setSixDiceArray] = useState(getRandomDice(10))
    let diceElements = sixDiceArray.map((item) =>{
        return <Dice key={item.id} value={item.value}/>
    })

    function generateNewDice(){
        setSixDiceArray(getRandomDice(10))
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