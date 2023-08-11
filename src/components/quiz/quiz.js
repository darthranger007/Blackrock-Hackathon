import React, { useState } from 'react';
import '../../assets/css/Quiz.css'; // Create this CSS file for styling
import NavbarMain from '../homepage/NavbarMain';
import ContactUs from '../homepage/contact';

const questions = [
  {
    question: 'What is the purpose of a budget?',
    options: ['Save money', 'Spend money', 'Invest money', 'Borrow money'],
    answer: 'Save money',
  },
  {
    question: 'What does APR stand for?',
    options: ['Average Percentage Rate', 'Annual Payment Ratio', 'Annual Percentage Rate', 'Average Payment Rate'],
    answer: 'Annual Percentage Rate',
  },
  {
    question: 'What is the importance of an emergency fund?',
    options: ['Saving for a vacation', 'Covering unexpected expenses', 'Investing in stocks', 'Paying off debts'],
    answer: 'Covering unexpected expenses',
  },
  {
    question: 'What is compound interest?',
    options: ['Interest paid by banks', 'Interest earned on the initial deposit only', 'Interest earned on both the initial deposit and accumulated interest', 'Interest paid to the government'],
    answer: 'Interest earned on both the initial deposit and accumulated interest',
  },
  {
    question: 'What is the primary purpose of insurance?',
    options: ['Investment tool', 'Savings account', 'Asset protection', 'Debt repayment'],
    answer: 'Asset protection',
  },
  {
    question: 'What is diversification in investing?',
    options: ['Investing in a single asset', 'Investing only in stocks', 'Investing in a mix of different assets', 'Investing in risky assets'],
    answer: 'Investing in a mix of different assets',
  },
  {
    question: 'What is a stock market index?',
    options: ['A list of all company stocks', 'A measure of the overall performance of a group of stocks', 'The price of a single stock', 'A type of bond'],
    answer: 'A measure of the overall performance of a group of stocks',
  },
  {
    question: 'What is the difference between a credit card and a debit card?',
    options: ['Credit cards require a PIN, debit cards don\'t', 'Credit cards are linked to a bank account, debit cards are not', 'Credit cards allow you to spend borrowed money, debit cards use your own money', 'Credit cards have higher interest rates than debit cards'],
    answer: 'Credit cards allow you to spend borrowed money, debit cards use your own money',
  },
  {
    question: 'What is the purpose of a will?',
    options: ['A will is used to track expenses', 'A will is used to manage investments', 'A will is a legal document that outlines how you want your assets to be distributed after you pass away', 'A will is used to apply for loans'],
    answer: 'A will is a legal document that outlines how you want your assets to be distributed after you pass away',
  },
  {
    question: 'What is the meaning of ROI in finance?',
    options: ['Return on Investment', 'Real Organic Income', 'Risk of Inflation', 'Rate of Interest'],
    answer: 'Return on Investment',
  },
  // Add more questions and answers here
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    
    <div className="quiz-container">
        <NavbarMain/>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestion + 1}/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
         
        </>
      )}
    </div>
  );
};

export default Quiz;