import React from "react"
import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpg"
import image5 from "../images/5.jpg"
import image6 from "../images/6.jpg"
import image7 from "../images/7.jpg"
import image8 from "../images/8.jpg"
import image9 from "../images/9.jpg"
import image10 from "../images/10.jpg"

export function Card({
  title,
  question,
  image,
  answer,
  points,
  setPoints,
  handleAnswerClick,
}) {
  let imagePath

  switch (image) {
    case "images/1.jpg":
      imagePath = image1
      break
    case "images/2.jpg":
      imagePath = image2
      break
    case "images/3.jpg":
      imagePath = image3
      break
    case "images/4.jpg":
      imagePath = image4
      break
    case "images/5.jpg":
      imagePath = image5
      break
    case "images/6.jpg":
      imagePath = image6
      break
    case "images/7.jpg":
      imagePath = image7
      break
    case "images/8.jpg":
      imagePath = image8
      break
    case "images/9.jpg":
      imagePath = image9
      break
    case "images/10.jpg":
      imagePath = image10
      break

    default:
      imagePath = "" // Default or error image path
      break
  }

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img src={imagePath} alt="Question" className="card-image" />
      <h3 className="card-question">{question}</h3>
      <ul className="card-options">
        {answer.map((option, index) => (
          <li
            className="card-option"
            key={index}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}
