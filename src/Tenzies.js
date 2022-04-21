import React from 'react'
import Dice from './Dice'

export default function Tenzies(){
    return (
        <section className="tenzies-wrapper">
            <div className="game-wrapper">
                <div className="dice-wrapper">
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                </div>
            </div>
        </section>
    )
}