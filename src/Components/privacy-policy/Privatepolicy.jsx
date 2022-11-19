import React from 'react';
import './Privatepolicy.scss';

function Privatepolicy() {

  // link to directly compose message to the ticked app team
  const gmail_link = "https://mail.google.com/mail/?view=cm&fs=1&to=teamrulerhng@gmail.com&su=HNG%20Team%20Ruler%20-%20Any%20Questions%20About%20How%20We%20Handle%20Your%20User%20Data%20And%20Personal%20Information";
    
  // function to bring page back to the top
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="privatepolicy">
        <div className="pagecontainer">
            <div className="privacy_header">
                <h1>Privacy policy</h1>
                <p>
                Your privacy is important to us. It is TICKED APP's policy to respect 
                your privacy regarding any information we may collect from you across 
                our website and TICKED APP. We only ask for personal information when 
                we truly need it to provide a service to you. We collect it by fair and 
                lawful means, with your knowledge and consent. We also let you know why 
                we’re collecting it and how it will be used. We only retain collected 
                information for as long as necessary to provide you with your requested 
                service. What data we store, we’ll protect within commercially acceptable 
                means to prevent loss and theft, as well as unauthorised access, disclosure, 
                copying, use or modification. We don’t share any personally identifying 
                information publicly or with third-parties, except when required to by law. 
                Our website may link to external sites that are not operated by us. Please 
                be aware that we have no control over the content and practices of these sites, 
                and cannot accept responsibility or liability for their respective privacy 
                policies. You are free to refuse our request for your personal information, 
                with the understanding that we may be unable to provide you with some of your 
                desired services. Your continued use of our website will be regarded as 
                acceptance of our practices around privacy and personal information. If you 
                have any questions about how we handle user data and personal information, 
                feel free to contact us: <a href={gmail_link} target="_blank" rel="noopener noreferrer">teamrulerhng@gmail.com</a>
                </p>
            </div>

            <div className="blockparagraph">
                <h2>Cookie Policy for TICKED APP</h2>
                <p>
                    This is the Cookie Policy for TICKED APP. This site uses cookies, which are 
                    tiny files that are downloaded to your computer, to improve your experience. 
                    This page describes what information they gather, how we use it and why we 
                    sometimes need to store these cookies. We will also share how you can prevent 
                    these cookies from being stored. However, this may downgrade or 'break' 
                    certain elements of the sites functionality. <br />
                    How We Use Cookies? We use cookies for a variety of reasons detailed below. 
                    Unfortunately in most cases there are no industry standard options for disabling 
                    cookies without completely disabling the functionality and features they add to 
                    this site. It is recommended that you leave on all cookies if you are not sure 
                    whether you need them or not in case they are used to provide a service that you 
                    use. Disabling Cookies You can prevent the setting of cookies by adjusting the 
                    settings on your browser (see your browser Help for how to do this). Be aware 
                    that disabling cookies will affect the functionality of this and many other 
                    websites that you visit. Disabling cookies will usually result in also disabling 
                    certain functionality and features of the this site. Therefore it is recommended 
                    that you do not disable cookies. The Cookies We Set Account related cookies If you
                    create an account with us then we will use cookies for the management of the signup 
                    process and general administration. These cookies will usually be deleted when you 
                    log out however in some cases they may remain afterwards to remember your site 
                    preferences when logged out.
                </p>
            </div>
            <div className="blockparagraph">
                <h2>Login related cookies</h2>
                <p>
                    We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
                </p>
            </div>
            <div className="blockparagraph">
                <h2>Email newsletters related cookies</h2>
                <p>
                    This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users. Orders processing related cookies This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly. Surveys related cookies From time to time we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages. Forms related cookies When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.
                </p>
            </div>
            <div className="blockparagraph">
                <h2>Site preferences cookies</h2>
                <p>
                    In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
                </p>
            </div>
            <div className="blockparagraph">
                <h2>Third Party Cookies</h2>
                <p>
                    In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site. <br/>
                    This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more information on Google Analytics cookies, see the official Google Analytics page. <br/>
                    Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you. From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most. As we sell products it's important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price. <br />
                    We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. We set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies. <br />
                    More Information. <br />
                    Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. This policy is effective as of Nov 2022.
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
}

export default Privatepolicy