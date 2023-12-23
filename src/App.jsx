import "./App.css"
import { useState, useEffect } from "react"
import { Card } from "./components/Card"
import questionsData from "./questions.json"

function App() {
  const [points, setPoints] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [amount, setAmount] = useState(0)
  const currentQuestion = questionsData[currentQuestionIndex]

  useEffect(() => {
    document.title = "Quiz-App"
  }, [])

  function handleAnswerClick(submittedAnswer) {
    if (submittedAnswer === currentQuestion.correctAnswer) {
      setPoints(points + 1)
    }
    nextQuestion()
    let a = amount
    setAmount(a + 1)
  }
  function nextQuestion() {
    if (currentQuestionIndex + 1 < questionsData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setCurrentQuestionIndex(-1) // All questions answered
    }
  }

  if (currentQuestionIndex === -1) {
    const restartQuiz = () => {
      setCurrentQuestionIndex(0)
      setPoints(0)
      setAmount(0)
    }

    return (
      <div className="end-screen">
        <h2>
          Herzlichen Glückwunsch, du hast {points} von {amount} möglichen
          Punkten erreicht!
        </h2>
        <button className="restart-button" onClick={restartQuiz}>
          Neustart
        </button>
      </div>
    )
  }

  return (
    <div className="App">
      <Card
        title={currentQuestion.title}
        question={currentQuestion.question}
        image={currentQuestion.image}
        answer={currentQuestion.options}
        points={points}
        setPoints={setPoints}
        handleAnswerClick={handleAnswerClick}
      />
    </div>
  )
}

export default App
