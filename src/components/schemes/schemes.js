// import React from 'react'
// import NavbarMain from '../homepage/NavbarMain';
// import Banner from '../homepage/banner';
// import ContactUs from '../homepage/contact';
// import '../../assets/css/schemes.css'


// const Womenschemes = () => {
//   const govtschemes = [
//     {
//       name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
//       description: 'This scheme provides financial assistance to pregnant and lactating women to support their health and nutrition needs during pregnancy and childbirth. It aims to reduce maternal and infant mortality rates.',
//       link: 'https://wcd.nic.in/sites/default/files/FINAL%20PMMVY%20%28FAQ%29%20BOOKELT.pdf ',
//     },
//     {
//       name: 'Mudra Yojana for Women',
//       description: 'Under this scheme, women entrepreneurs can avail loans for starting or expanding their businesses. Loans are categorized into three segments - Shishu, Kishor, and Tarun - based on the stage of the business.',
//       link: 'https://www.mudra.org.in/mudra-kahaniyaan-v2/women.html',
//     },
//     {
//       name: 'Mahila E-Haat',
//       description: 'This is an online platform launched by the Ministry of Women and Child Development that enables women to showcase and sell their products and services, thereby enhancing their economic participation.',
//       link: 'https://vikaspedia.in/e-governance/women-and-e-governance/mahila-e-haat',
//     },
//     {
//       name: 'Udyogini Scheme',
//       description: 'Implemented by various state governments, this scheme provides financial support and skill development training to women for starting their own enterprises.',
//       link: 'https://www.myscheme.gov.in/schemes/us',
//     },
//     {
//       name: 'Stree Shakti Package for Women Entrepreneurs',
//       description: 'Offered by various banks, this package includes special benefits such as lower interest rates, collateral-free loans, and concessions on processing fees for women entrepreneurs.',
//       link: 'https://yojanasarkari.in/sbi-stree-shakti-scheme/',
//     },
//     {
//       name: 'Awaas Sahayta Yojana (Indira Awaas Yojana)',
//       description: 'This scheme provides financial assistance for building houses to women who are heads of households, including widows and unmarried women.',
//       link: 'https://www.india.gov.in/indira-awaas-yojna',

//     },
//   ];
//   const nongovtschemes = [
//     {
//       name: 'Sakhi Retail Finance',
//       description: 'Provided by Annapurna Microfinance, this initiative focuses on providing financial services to women from low-income households, supporting their entrepreneurial endeavors.',
//       link: 'https://annapurnafinance.in/apply-for-a-loan/',
//     },
//     {
//       name: 'Annapoorna Loan',
//       description: 'SThis initiative by Muthoot Microfin provides microloans to women entrepreneurs in rural areas to support their small businesses.',
//       link: 'https://muthootmicrofin.com/our-products/livelihood-solutions/',
//     },
//     {
//       name: 'Kudumbashree Mission',
//       description: 'A community-driven initiative in Kerala that empowers women through self-help groups, providing them with financial support and skill development.',
//       link: 'https://www.kudumbashree.org/',
//     },
//     {
//       name: 'Milaap Shakti Initiative',
//       description: 'A crowdfunding platform, has a dedicated initiative to support women entrepreneurs and artisans in India through funding and market access.',
//       link: 'https://milaap.org/',
//     },
//   ];
//   return (
//     <div>
//       <NavbarMain />
//       <div className='schemes-heading'>
//         <div className='main-heading'>
//           <h1>Women's Schemes</h1></div>
//         <div><hr /></div>

//         <div className='sub-heading'> <p>Government's Schemes</p></div>
//         {govtschemes.map((scheme, index) => (
//           <div key={index} className="scheme">
//             <h2 className='headings'>{scheme.name}</h2>
//             <div className='description'><p>{scheme.description}</p>

//               <a href={scheme.link} target="_blank" rel="noopener noreferrer">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         ))}
//         <div className='sub-heading'>
//           <p>Non-Government Schemes</p></div>
//         {govtschemes.map((scheme, index) => (
//           <div key={index} className="scheme">
//             <h2>{scheme.name}</h2>
//             <div className='description'>
//               <p>{scheme.description}</p>
//               <a href={scheme.link} target="_blank" rel="noopener noreferrer">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <ContactUs />
//     </div>
//   );
// }

// export default Womenschemes;


import React from 'react';
import NavbarMain from '../homepage/NavbarMain';
import ContactUs from '../homepage/contact';
import './womenschemes.css';

const SchemeCard = ({ name, description, link }) => (
  <div className="scheme">
    <h2>{name}</h2>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      Learn More
    </a>
  </div>
);

const Womenschemes = () => {
  const govtschemes = [
    {
      name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
      description: 'This scheme provides financial assistance to pregnant and lactating women to support their health and nutrition needs during pregnancy and childbirth. It aims to reduce maternal and infant mortality rates.',
      link: 'https://wcd.nic.in/sites/default/files/FINAL%20PMMVY%20%28FAQ%29%20BOOKELT.pdf ',
    },
    {
      name: 'Mudra Yojana for Women',
      description: 'Under this scheme, women entrepreneurs can avail loans for starting or expanding their businesses. Loans are categorized into three segments - Shishu, Kishor, and Tarun - based on the stage of the business.',
      link: 'https://www.mudra.org.in/mudra-kahaniyaan-v2/women.html',
    },
    {
      name: 'Mahila E-Haat',
       description: 'This is an online platform launched by the Ministry of Women and Child Development that enables women to showcase and sell their products and services, thereby enhancing their economic participation.',
       link: 'https://vikaspedia.in/e-governance/women-and-e-governance/mahila-e-haat',
    },
    {
      name: 'Udyogini Scheme',
       description: 'Implemented by various state governments, this scheme provides financial support and skill development training to women for starting their own enterprises.',
       link: 'https://www.myscheme.gov.in/schemes/us'
    },
    {
    name: 'Stree Shakti Package for Women Entrepreneurs',
       description: 'Offered by various banks, this package includes special benefits such as lower interest rates, collateral-free loans, and concessions on processing fees for women entrepreneurs.',
       link: 'https://yojanasarkari.in/sbi-stree-shakti-scheme/',
     },
    //  {
    //    name: 'Awaas Sahayta Yojana (Indira Awaas Yojana)',
    //    description: 'This scheme provides financial assistance for building houses to women who are heads of households, including widows and unmarried women.',
    //    link: 'https://www.india.gov.in/indira-awaas-yojna',
    //  }
    // ... (more schemes)
  ];

  const nongovtschemes = [
    {
      name: 'Sakhi Retail Finance',
      description: 'Provided by Annapurna Microfinance, this initiative focuses on providing financial services to women from low-income households, supporting their entrepreneurial endeavors.',
      link: 'https://annapurnafinance.in/apply-for-a-loan/',
    },
    {
      name: 'Annapoorna Loan',
      description: 'This initiative by Muthoot Microfin provides microloans to women entrepreneurs in rural areas to support their small businesses.',
      link: 'https://muthootmicrofin.com/our-products/livelihood-solutions/',
    },
    // {
    //          name: 'Kudumbashree Mission',
    //       description: 'A community-driven initiative in Kerala that empowers women through self-help groups, providing them with financial support and skill development.',
    //          link: 'https://www.kudumbashree.org/',
    //        },
          //  {
          //   name: 'Milaap Shakti Initiative',
          //   description: 'A crowdfunding platform, has a dedicated initiative to support women entrepreneurs and artisans in India through funding and market access.',
          //   link: 'https://milaap.org/',
          // },
    //... (more schemes)
  ];

  return (
    <div >
      <NavbarMain />
      <div className="container" >
        <div className="header">
          <h1>Explore Women's Schemes</h1>
        </div>
        <div className="sub-header">
          <p>Discover Government and Non-Government Schemes for Women</p>
        </div>
        <div className="scheme-container">
          <div className="sub-heading">
            <p >Government Schemes</p>
          </div>
          {govtschemes.map((scheme, index) => (
            <SchemeCard
              key={index}
              name={scheme.name}
              description={scheme.description}
              link={scheme.link}
            />
          ))}
        </div>
        <div className="scheme-container">
          <div className="sub-heading">
            <span>
            <p>Non-Government Schemes</p>
            </span>
          </div>
          {nongovtschemes.map((scheme, index) => (
            <SchemeCard
              key={index}
              name={scheme.name}
              description={scheme.description}
              link={scheme.link}
            />
          ))}
        </div>
      </div>
      <ContactUs />
      <div className="footer">
        
      </div>
    </div>
  );
};

export default Womenschemes;


