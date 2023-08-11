import NavbarMain from "../homepage/NavbarMain";
import '../../assets/css/content.css'
import Content1IMG from '../../assets/logos/content-1.png'
import Content2IMG from '../../assets/logos/content-2.png'
import Content3IMG from '../../assets/logos/content-3.png'
import Content4IMG from '../../assets/logos/content-4.png'
import Content5IMG from '../../assets/logos/content-5.png'
import Content6IMG from '../../assets/logos/content-6.png'
import ContactUs from '../homepage/contact';


const Content = () => {
    return (
        <>
            <NavbarMain />

            <div className="main-heading"><h1>Educational Content</h1></div>
            <div className="content-outer">
                <div className="row content-inner">
                    <div className="col-sm-4 content-cards">
                        <a href="https://www.amfiindia.com/investor-corner/knowledge-center/what-are-mutual-funds-new.html" target="_blank">
                            <img src={Content1IMG} alt="" className="content-logos" />
                            <p className="content-tile">Mutual Fund</p>
                        </a>
                    </div>

                    <div className="col-sm-4 content-cards">
                        <a href="https://www.investopedia.com/articles/basics/08/gold-strategies.asp" target="_blank">
                            <img src={Content2IMG} alt="" className="content-logos" />
                            <p className="content-tile">Gold</p>
                        </a>
                    </div>

                    <div className="col-sm-4 content-cards">
                        <a href="https://www.ag.ndsu.edu/agcomm/lets-communicate/write-the-word-loan-and-borrow" target="_blank">
                            <img src={Content3IMG} alt="" className="content-logos" />
                            <p className="content-tile">Loan & Borrowing</p>
                        </a>
                    </div>

                    <div className="col-sm-4 content-cards">
                        <a href="https://www.investopedia.com/terms/f/financial_plan.asp" target="_blank">
                            <img src={Content4IMG} alt="" className="content-logos" />
                            <p className="content-tile">Financial Planning</p>
                        </a>
                    </div>

                    <div className="col-sm-4 content-cards">
                        <a href="https://www.investopedia.com/terms/b/bank.asp" target="_blank">
                            <img src={Content5IMG} alt="" className="content-logos" />
                            <p className="content-tile">Banking</p>
                        </a>
                    </div>

                    <div className="col-sm-4 content-cards">
                        <a href="https://cleartax.in/g/terms/financial-literacy" target="_blank">
                            <img src={Content6IMG} alt="" className="content-logos" />
                            <p className="content-tile">Financial Literacy</p>
                        </a>
                    </div>
                    <hr />
                    <br />
                    <ContactUs />
                </div>
            </div>

        </>
    );
};

export default Content;
