import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(resp => resp.json())
      .then(data => {
        setQuestions(data)
        setIsLoaded(true)
      })
  }, [])

  if (!isLoaded) return <h3>Loading...</h3>

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  }

  const deleteQuestion = (questionId) => {
    const filterQuestions = questions.filter(
      (question) => question.Id !== questionId
    )
    setQuestions(filterQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion} /> : <QuestionList questions={questions} deleteQuestion={deleteQuestion} />}
    </main>
  );
}

export default App;
