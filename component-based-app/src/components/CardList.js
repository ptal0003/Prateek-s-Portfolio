import React from "react";
import Card from "./CardContainer"
import "../css/CardList.css"

function CardList({questions})
{
    return(
        <div>
            <div className="card-list-container-div">
                {questions.map((question) => (<Card all_questions = {questions} question = {question}></Card>))}
            </div>
        </div>

        )
}
export default CardList