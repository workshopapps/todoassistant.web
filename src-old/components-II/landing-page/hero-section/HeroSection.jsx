// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import animation from "../../../hooks/animation/animate.module.scss";
// import ContactPopup from "../../contact/contact-popup/ContactPopup";
// import style from "./hero.module.scss";

// const Hero = ({ content }) => {
//   let location = useLocation();
//   const [windowSize, setWindowSize] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);


//   const showDownloadBtn =
//     location.pathname === "/about" ||
//     location.pathname === "/contact" ? null : (
//       <button className={`${style.button_login} hover`}>DOWNLOAD APP</button>
//     );

//   const removeGetStartedBtn =
//     location.pathname === "/contact" ? null : (
//       <Link to="/signup">
//         <button className={`${style.button_getstarted} hover`}>
//           GET STARTED
//         </button>
//       </Link>
//     );

//   const removeConVoBtn =
//     location.pathname === "/contact" ? (
//       <button
//         className={[style.convoBtn, `hover`].join(" ")}
//         onClick={() => setShowPopup(true)}
//       >
//         Start A Conversion
//       </button>
//     ) : null;

//   useEffect(() => {
//     let windowSize = window.innerWidth;
//     setWindowSize(windowSize);
//   },[windowSize]);

//   if(windowSize <= 375){

//   }

//   return (
//     <header className={style.hero}>
//       <div className={style.hero__bg_img}></div>
//       <section
//         style={{ flexDirection: content.reverse }}
//         className={`${style.container}`}
//       >
//         <img
//           className={`${style.hero__icon1} ${animation.sprite_1}`}
//           src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644172/hng/todoAppVirtualAssistant/Vector-3_vettso.svg"
//           alt="icon"
//         />
//         <img
//           className={`${style.hero__icon2} ${animation.sprite_2}`}
//           src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644172/hng/todoAppVirtualAssistant/Vector-2_zwxiad.svg"
//           alt="icon"
//         />

//         <img
//           className={`${style.hero__icon3} ${animation.sprite_3}`}
//           src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644172/hng/todoAppVirtualAssistant/Vector-1_b7dn1l.svg"
//           alt="icon"
//         />

//         <img
//           className={`${style.hero__icon4} ${animation.sprite_4}`}
//           src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644172/hng/todoAppVirtualAssistant/Vector_rd7eki.svg"
//           alt="icon"
//         />
//         <article style={content.style} className={style.hero__text_section}>
//           <div>
//             <h1 className={style.hero__title}>
//               {content.title}
//               {/* <span className={style.hero__plan}>Assistant</span>. */}
//             </h1>
//             <p className={style.hero__subtitle}>{content.subTitle}</p>
//             <p className={style.hero__subtitleBold}>{content.subTitleBold}</p>
//             <small style={{ fontSize: `16px` }}>{content.text}</small>
//           </div>
//           <div className={style.hero__btn_container}>
//             {removeGetStartedBtn}
//             {removeConVoBtn}
//             {showPopup && <ContactPopup />}
//             <div>{showDownloadBtn}</div>
//           </div>
//         </article>
//         <article className={style.hero__img}>
//           <img
//             className={style.hero__destop_img}
//             src={content.image}
//             alt={style.hero_img}
//           />
//         </article>
//       </section>
//     </header>
//   );
// };

// export default Hero;
