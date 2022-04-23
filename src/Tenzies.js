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
    let [gameOver, setGameOver] = useState(false)

    let [sixDiceArray, setSixDiceArray] = useState(getRandomDice(10))
    let diceElements = sixDiceArray.map((item) =>{
        return <Dice handleClick={() => toggleHold(item.id)} key={item.id} value={item.value} isHeld={item.isHeld}/>
    })
    
    useEffect(() =>{
        let checkIsHeld = true
        let checkValue = true
        sixDiceArray.forEach( die =>{
            !die.isHeld && (checkIsHeld = false )
        })
        if(checkIsHeld){
            checkValue = checkAllValue(sixDiceArray)
            checkValue && setGameOver(true)
        }
    }, [sixDiceArray])

    function checkAllValue(diceArray){
        let doNumMatch = true
        let tempValue = diceArray[0].value
        diceArray.forEach(die =>{
            !(die.value === tempValue) && (doNumMatch = false)
        })
        return doNumMatch
    }

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
    let btnStyle= {
        fontSize: gameOver ? '3rem' : '4rem'
    }
    function generateNewGame(){
        setGameOver(false)
        setSixDiceArray(getRandomDice(10))
    }

    return (
        <section className="tenzies-wrapper">
            <div className="game-wrapper">
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-wrapper">
                    {diceElements}
                </div>
                <button style={btnStyle} onClick={gameOver ? generateNewGame:generateNewDice} className="rollBtn">{gameOver ? 'New Game' : 'Roll'}</button>
            </div>
        </section>
    )
}