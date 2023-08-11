import React from 'react'
import NavbarMain from '../homepage/NavbarMain';
import ContactUs from '../homepage/contact';
import '../../assets/css/tools.css'


const Tools = () => {
  return (
    <div>
      <NavbarMain />
      <br />
      <p id='mainhead'>Useful Links</p>
      <a id='link' href="https://npstrust.org.in/nps-calculator" target='_blank'>NPS Calculator</a>
      <br />
      <a id='link' href="https://groww.in/calculators/apy-calculator" target='_blank'>Atal pension Yojana Calculator</a>
      <br />
      <a id='link' href="https://www.mutualfundssahihai.com/en/calculators" target='_blank'>Mutual Fund Calculator</a>
      <br />
      <br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <ContactUs />
    </div>
  )
}

export default Tools

// import React, { useState } from 'react';
// import './Quiz.css'; // Create this CSS file for styling

// const questions = [
//   {
//     question: 'What is the purpose of a budget?',
//     options: ['Save money', 'Spend money', 'Invest money', 'Borrow money'],
//     answer: 'Save money',
//   },
//   {
//     question: 'What does APR stand for?',
//     options: ['Average Percentage Rate', 'Annual Payment Ratio', 'Annual Percentage Rate', 'Average Payment Rate'],
//     answer: 'Annual Percentage Rate',
//   },
//   // Add more questions and answers here
// ];

// const FinancialQuiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);

//   const handleAnswerClick = (selectedAnswer) => {
//     if (selectedAnswer === questions[currentQuestion].answer) {
//       setScore(score + 1);
//     }

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowScore(true);
//     }
//   };

//   return (
//     <div className="quiz-container">
//       {showScore ? (
//         <div className="score-section">
//           You scored {score} out of {questions.length}
//         </div>
//       ) : (
//         <>
//           <div className="question-section">
//             <div className="question-count">
//               Question {currentQuestion + 1}/{questions.length}
//             </div>
//             <div className="question-text">{questions[currentQuestion].question}</div>
//           </div>
//           <div className="answer-section">
//             {questions[currentQuestion].options.map((option, index) => (
//               <button key={index} onClick={() => handleAnswerClick(option)}>
//                 {option}
//               </button>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default FinancialQuiz;
