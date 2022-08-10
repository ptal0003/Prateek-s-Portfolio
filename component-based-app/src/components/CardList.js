import React, { useEffect } from "react";
import Card from "./CardContainer"
import "../css/CardList.css"
import db from "../firebase-config";
import { useState } from "react";
import {collection,doc,getDoc,getDocs} from "firebase/firestore";
const CardList = () =>
{
    const [questions,setQuestions] = useState([])
    const questionsCollectionRef = collection(db,"questions")
    useEffect(() => {
        const getQuestions = async () => {
            const data = await getDocs(questionsCollectionRef);
            setQuestions(data.docs.map((doc) => ({...doc.data()})))
        }
        getQuestions()
    },[])
    return(
        <div>
            <div className="card-list-container-div">
                {questions.map((question) => (<Card all_questions = {questions} question = {question}></Card>))}
            </div>
        </div>

        )
}
export default CardList