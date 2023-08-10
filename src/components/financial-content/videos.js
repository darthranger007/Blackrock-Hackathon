import NavbarMain from '../homepage/NavbarMain'
import '../../assets/css/videos.css'

const Videos = () => {
  return (
    <>
      <NavbarMain />
      <div className='vid-title'> <h1>Popular Videos</h1></div>
      <div className='hr-line'><hr /></div>
      <div className='row videoRow'>
        <div className='col-sm-3 video-elements'>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/UjktXdV_KYE" title="Benefits And Usage Of PMJDY Accounts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <center>
            <p> PM Jan Dhan Yojna </p>
          </center>
        </div>
        <div className='col-sm-3 video-elements'>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/wMDq-7iUqL4" title="What is  Swavalamban Pension Yojana?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <center>
            <p>  Swavalamban Pension Yojana </p>
          </center>
        </div>
        <div className='col-sm-3 video-elements'>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/BErbwGQWREs" title="Security Features of 100 Rs/- Note" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <center>
            <p> Security features of 100 rupee note</p>
          </center>
        </div>
        <div className='col-sm-3 video-elements'>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/mCBkpK__ZeY" title="Pradhan Mantri Suraksha Bima Yojna - Investor Education video by Moneykraft" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          <center>
            <p> PM Suraksha Bima Yojna</p>
          </center>
        </div>
      </div>

      <div className='row videoRow'>
        <div className='col-sm-3 video-elements'>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/snwAEN8oOKM" title="Where to complain against insurance related issue? _Hindi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          <center>
            <p> IRDA Jago Grahak Jago </p>
          </center>
        </div>
        <div className='col-sm-3 video-elements'>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/kbhX6a1IGuc" title="Benefits of  National Pension System" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          <center>
            <center>
              <p> National Pension System </p>
            </center>
          </center>
        </div>
        <div className='col-sm-3 video-elements'>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/Rzpfx7QY7HY" title="What is Power Of Compounding?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          <center>
            <p> Power of Compounding </p>
          </center>
        </div>
        <div className='col-sm-3 video-elements'>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/4qs7ccA1kMQ" title="What is Systematic Investment Plan (SIP)?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          <center>
            <p> Systematic Investment Planning </p>
          </center>
        </div>
      </div>

      <div className='row videoRow'>
        <div className='col-sm-3 video-elements'>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/3MRwnFuLf9Y" title="Just Started Earning? What Is Your Investment Strategy?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          <center>
            <p> Investment Strategy for Noobies </p>
          </center>
        </div>
        <div className='col-sm-3 video-elements'>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/iXlA1bAVdP0" title="FRANKLIN TEMEPLETON -What are Debt Funds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          <center>
            <p> Info About Debt Funds </p>
          </center>
        </div>
        <div className='col-sm-3 video-elements'>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/DXYpWlFESGo" title="#Features of Basic Savings Bank Deposit Account (#BSBDA)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          <center>
            <p> Features of Savings Account</p>
          </center>
        </div>
        <div className='col-sm-3 video-elements'>
          <iframe width="250" height="250" src="https://www.youtube.com/embed/FgjoQJasl4Y" title="What is Goods and Services Tax (GST)?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          <center>
            <p> Info About GST </p>
          </center>
        </div>
      </div>


    </>
  );
};

export default Videos;
