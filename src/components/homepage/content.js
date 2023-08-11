// import '../../assets/css/contact.css';
// import digitalIndialogo from '../../assets/logos/Digital_India_logo.png'
// const Content = () => {
//     return ( 
//         <>
//         <>
//         <div className='fincon' > Financial education is crucial for individuals, families, and societies as a whole. It empowers people with the knowledge, skills, and understanding they need to make informed and responsible financial decisions. Here are some key reasons why financial education is important:
// <div className='fincon-int'>
//     <ul>
//         <li >
// Sound Financial Decision-Making: Financial education equips individuals with the knowledge to make sound decisions about managing their money, investments, and debt. It helps them understand the consequences of their choices and make informed financial decisions that align with their goals.
// </li>
// <li>
// Budgeting and Money Management: Financial education teaches budgeting skills, helping individuals manage their income, expenses, and savings effectively. It enables them to prioritize spending, avoid debt traps, and work towards financial stability.
// </li>
// <li>
// Debt Management and Avoidance: People with financial literacy are better equipped to manage and avoid debt. They understand the implications of different types of debt, interest rates, and repayment strategies, helping them make more responsible borrowing decisions.
// </li>
// <li>
// Investment Knowledge: Financial education enables individuals to understand different investment options, risk profiles, and potential returns. This knowledge helps them make informed choices when investing in stocks, bonds, mutual funds, real estate, and other assets.
// </li>
// <li>
// Retirement Planning:
// Understanding concepts like compounding, inflation, and retirement accounts empowers individuals to plan for their future. They can make informed decisions about contributing to retirement accounts and estimating how much they'll need for a comfortable retirement.
// </li>
// <li>
// Financial Security:
// Financial education can help people build emergency funds, insurance coverage, and other safety nets that provide financial security during unexpected events, such as medical emergencies or job loss.
// </li><li>
// Avoiding Scams and Fraud:
// Financial literacy equips individuals with the ability to recognize common financial scams and fraud schemes. They can protect themselves from falling victim to scams and make safer online transactions.
// </li>
// <li>
// Entrepreneurship and Small Business Management:
// Financial education is essential for entrepreneurs and small business owners. It helps them understand cash flow, financial statements, funding options, and the financial aspects of running a business.
// </li> </ul>
// </div>
//  </div>
//         </>
//         </>
//         );
// }
// export default Content;


import React, { useState } from 'react';
import '../../assets/css/contact.css'; // Make sure to update this to your CSS file path
import digitalIndialogo from '../../assets/logos/Digital_India_logo.png';

const Content = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const data = [
    'Sound Financial Decision-Making: Financial education equips individuals with the knowledge to make sound decisions about managing their money, investments, and debt. It helps them understand the consequences of their choices and make informed financial decisions that align with their goals.',
    'Budgeting and Money Management: Financial education teaches budgeting skills, helping individuals manage their income, expenses, and savings effectively. It enables them to prioritize spending, avoid debt traps, and work towards financial stability.',
    ' Debt Management and Avoidance: People with financial literacy are better equipped to manage and avoid debt. They understand the implications of different types of debt, interest rates, and repayment strategies, helping them make more responsible borrowing decisions.',
    'Investment Knowledge: Financial education enables individuals to understand different investment options, risk profiles, and potential returns. This knowledge helps them make informed choices when investing in stocks, bonds, mutual funds, real estate, and other assets.',
    'Retirement Planning: Understanding concepts like compounding, inflation, and retirement accounts empowers individuals to plan for their future. They can make informed decisions about contributing to retirement accounts and estimating how much they\'ll need for a comfortable retirement.',
    'Financial Security: Financial education can help people build emergency funds, insurance coverage, and other safety nets that provide financial security during unexpected events, such as medical emergencies or job loss.',
    'Avoiding Scams and Fraud: Financial literacy equips individuals with the ability to recognize common financial scams and fraud schemes. They can protect themselves from falling victim to scams and make safer online transactions.',
    'Entrepreneurship and Small Business Management: Financial education is essential for entrepreneurs and small business owners. It helps them understand cash flow, financial statements, funding options, and the financial aspects of running a business.',
    // ... Include other list items here
  ];

  return (
    <div className='fincon'>
      <p>
        Financial education is crucial for individuals, families, and societies as a whole. It empowers people with the knowledge, skills, and understanding they need to make informed and responsible financial decisions. Here are some key reasons why financial education is important:
      </p>
      <div className='fincon-int'>
        <ul>
          {data.map((item, index) => {
            const parts = item.split(':');
            const title = parts[0].trim(); // Extract the title
            const content = parts.slice(1).join(':').trim(); // Extract the content
            return (
              <li
                key={index}
                className={expandedItems.includes(index) ? 'expanded' : ''}
                onClick={() => toggleItem(index)}
              >
                {title}
                {expandedItems.includes(index) && <p>{content}</p>}
              </li>
            );
          })}
        </ul>
      </div>
      
    </div>
  );
};

export default Content;


