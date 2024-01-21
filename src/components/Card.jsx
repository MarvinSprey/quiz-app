import React from "react"
import image1 from "../images/1.png"
import image2 from "../images/2.png"
import image3 from "../images/3.png"
import image4 from "../images/4.png"
import image5 from "../images/5.png"
import image6 from "../images/6.png"
import image7 from "../images/7.png"
import image8 from "../images/8.png"
import image9 from "../images/9.png"
import image10 from "../images/10.png"

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
    case "images/1.png":
      imagePath = image1
      break
    case "images/2.png":
      imagePath = image2
      break
    case "images/3.png":
      imagePath = image3
      break
    case "images/4.png":
      imagePath = image4
      break
    case "images/5.png":
      imagePath = image5
      break
    case "images/6.png":
      imagePath = image6
      break
    case "images/7.png":
      imagePath = image7
      break
    case "images/8.png":
      imagePath = image8
      break
    case "images/9.png":
      imagePath = image9
      break
    case "images/10.png":
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
