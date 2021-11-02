import React, { useState } from 'react';
import Ingredients from './Ingredients';

const Receipts = () => {
    const [meal, setMeal] = useState('')
    const showMeal = (myMeal) => {
        setMeal(myMeal)
    }
    console.log(meal)
    return (
        <div>
            <p>Please select your preferred meal receipt:</p>
            <div>
                <input onChange={(e) => {
                    showMeal(e.target.value)
                }} type="radio" id="contactChoice1"
                    name="meal" value="plov" />
                <label >Plov</label>

                <input onChange={(e) => {
                    showMeal(e.target.value)
                }} type="radio" id="contactChoice2"
                    name="meal" value="manty" />
                <label >Manty</label>

                <input onChange={(e) => {
                    showMeal(e.target.value)
                }} type="radio" id="contactChoice3"
                    name="meal" value="borsh" />
                <label>Borsh</label>
            </div>
            <Ingredients meal={meal} />
        </div>
    );
};

export default Receipts;