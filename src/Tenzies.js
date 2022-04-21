import React, {useState, useEffect} from 'react'
import Dice from './Dice'

export default function Tenzies(){

    function getRandomDice(numOfDice){
        let tempDiceArray = []
        let diceCounter=0
        for (let i = 0; i < numOfDice; i++) {
            tempDiceArray.push(Math.floor(Math.random() * 6)+1)
            diceCounter++
        }
        diceCounter=0
        return  tempDiceArray
    }

    let [sixDiceArray, setSixDiceArray] = useState(getRandomDice(10))

    let diceElements = sixDiceArray.map((item,index) =>{
        return <Dice key={index} value={item}/>
    })

    return (
        <section className="tenzies-wrapper">
            <div className="game-wrapper">
                <div className="dice-wrapper">
                    {diceElements}
                </div>
            </div>
        </section>
    )
}