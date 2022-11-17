import React, { useEffect } from 'react';
import './PrivatePolicy.scss';

const PrivatePolicy = () => {

  // function to bring page back to the top
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className='privatepolicy'>
      <div className="pagecontainer">
        <h1>Privacy policy</h1>
        <p>We know that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and sensibly. This Privacy Notice describes how Ticked collects and processes your personal information.</p>
        <div className="personal_data">
          <h2>Personal data we collected</h2>
          <p>Ticked obtains information about you through our contacts 
            with you. Some of this data is provided directly by you, 
            and some is obtained through data collection about your 
            interactions, use, and experiences with our product. The 
            data we gather is determined by the context of your 
            interactions with Ticked as well as the choices you make, 
            such as your privacy settings and the products and features 
            you use. Third-party data about you is also obtained by us. 
            When it comes to the technology you use and the data you 
            disclose, you have options. When we ask for personal 
            information, you have the option to decline. To offer you 
            with a service, our product may require some personal 
            information. You will not be able to use a product or 
            service if you do not supply the necessary info. Similarly, 
            if we are required by law or to enter into or carry out a 
            contract with you and you fail to provide the data, we will 
            be unable to enter into the contract; or, if this relates 
            to an existing product you are using, we may be forced to 
            suspend or cancel it. If this is the case at the time, we 
            will notify you. When supplying the data is voluntary, 
            and you choose not to provide personal information, 
            functions like personalization that rely on such information 
            will not function for you. <a href='#'>Learn More</a></p>
        </div>
        <div className="how_we_use_data">
          <h2>How we use your data</h2>
          <p>Ticked uses the data we collect to provide you with rich, 
            interactive experiences. In particular, we use data to:
          </p>
          <p>
            <ul>
              <li>Improve and develop our products.</li>
              <li>Personalize our products and make recommendations.</li>
              <li>Bring to you Pro Versions.</li>
            </ul>
          </p>
          <p>
            We also use data to run our business, which includes analyzing 
            performance, meeting regulatory requirements, growing our personnel, 
            and doing research. <a href='#'>Learn More</a>
          </p>
        </div>
        <div className="acceptance">
          <h2>Acceptance and Concent</h2>
          <p>
            Ticked 1`offers you an avenue to read the terms and conditions before 
            acceptance happens. With ticked human rights are respected as we make sure 
            that the data used has been consented by you the user.
          </p>
        </div>
        <div className="back_to_top">
          <a onClick={scrollTop}>
            Back to top
          </a>
        </div>
      </div>
    </div>
    );
};

export default PrivatePolicy;
