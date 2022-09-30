import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, deleteQuestion }) {

  function handleDelete(questionId) {
    fetch("http://localhost:4000/questions/" + questionId, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(() => deleteQuestion(questionId))
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => <QuestionItem key={question.id} question={question} handleDelete={handleDelete} />)}</ul>
    </section>
  );
}

export default QuestionList;
