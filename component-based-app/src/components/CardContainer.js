import RectangularButton from "./RectangularButton";
import '../css/card.css'
import RadioButton from "./RadioButton";
import { useState } from "react";
import React from "react";
const Card = ({all_questions,question}) =>{
    let [selected_answer,setSelectedAnswer] = useState('')
    let [headerText, setHeaderText] = useState('')
    function checkAnswer(event){
        var id = event.target.id
        var word_split = id.split("_")
        var question_index = word_split[1]
        if (all_questions[question_index].answer == selected_answer){
            console.log("Correct Answer")
            window.alert("Correct answer, congratulations!")
        }
        else{
            window.alert("Wrong answer, please try again!")
        }
    }
const updateSite = (e) =>{ 
setSelectedAnswer(e.target.value)
}
    let question_num = all_questions.indexOf(question)
    return(<div className="card-container">
        <div className="card-header-text">
            <p>{question.question}</p>
        </div>
        <div className="options-div">
        {question.options.map((option) =>(<RadioButton value = {option} name = {"question_"+question_num} onChange = {updateSite}></RadioButton>))}    
        </div>
        <div className="card-button"> 
        
        
        
        <RectangularButton  text = "Submit" id = {"question_"+question_num+"_button"} onClick = {checkAnswer} ></RectangularButton>
        </div>
    </div>)
} 
export default Card;