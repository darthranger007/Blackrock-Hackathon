import NavbarMain from "../homepage/NavbarMain";
import '../../assets/css/content.css'
import ContentIMG from '../../assets/logos/content-1.png'


const Content = () => {
  return (
    <>
        <NavbarMain />
        <div className="content-outer">
        <div className="row content-inner">
            <div className="col-sm-2 content-cards">
                <img src={ContentIMG} alt="" className="content-logos" />
                <p className="content-tile">Content Title</p>
            </div>

            <div className="col-sm-2 content-cards">
                <img src={ContentIMG} alt="" className="content-logos" />
                <p className="content-tile">Content Title</p>
            </div>

            <div className="col-sm-2 content-cards">
                <img src={ContentIMG} alt="" className="content-logos" />
                <p className="content-tile">Content Title</p>
            </div>

            <div className="col-sm-2 content-cards">
                <img src={ContentIMG} alt="" className="content-logos" />
                <p className="content-tile">Content Title</p>
            </div>

            <div className="col-sm-2 content-cards">
                <img src={ContentIMG} alt="" className="content-logos" />
                <p className="content-tile">Content Title</p>
            </div>

            <div className="col-sm-2 content-cards">
                <img src={ContentIMG} alt="" className="content-logos" />
                <p className="content-tile">Content Title</p>
            </div>
        </div>
        </div>

    </>
  );
};

export default Content;
