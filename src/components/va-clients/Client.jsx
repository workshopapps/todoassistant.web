import clientStyles from './Client.module.css';
import victor from './assets/1.jpeg';
import daniel from './assets/2.jpeg';
import sandra from './assets/3.png';
import seyi from './assets/4.jpeg';
import john from './assets/5.jpeg';
import victoria from './assets/6.jpeg';

const ReadCheckIcon = (props) => 
  <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M22.7399 0.589844L12.1599 11.1698L7.97991 6.99984L6.56991 8.40984L12.1599 13.9998L24.1599 1.99984L22.7399 0.589844ZM18.4999 1.99984L17.0899 0.589844L10.7499 6.92984L12.1599 8.33984L18.4999 1.99984ZM6.49991 13.9998L0.909912 8.40984L2.32991 6.99984L7.90991 12.5898L6.49991 13.9998Z" fill="#714DD9"/>
  </svg>

const DeliveredCheckIcon = (props) => 
  <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M22.7399 0.589844L12.1599 11.1698L7.97991 6.99984L6.56991 8.40984L12.1599 13.9998L24.1599 1.99984L22.7399 0.589844ZM18.4999 1.99984L17.0899 0.589844L10.7499 6.92984L12.1599 8.33984L18.4999 1.99984ZM6.49991 13.9998L0.909912 8.40984L2.32991 6.99984L7.90991 12.5898L6.49991 13.9998Z" fill="#8A9EA8"/>
  </svg>

const SearchIcon = (props) => 
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.71 11H12.5L17.49 16L16 17.49L11 12.5V11.71L10.73 11.43C9.59 12.41 8.11 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 8.11 12.41 9.59 11.43 10.73L11.71 11ZM2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2C4.01 2 2 4.01 2 6.5Z" fill="#8A9EA8"/>
  </svg>

const PhoneIcon = (props) => 
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="#714DD9"/>
  </svg>

// const CancelIcon = (props) => 
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//     <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#714DD9"/>
//     <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="white" fillOpacity="0.8"/>
//     <path d="M9.16992 14.8299L14.8299 9.16992" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     <path d="M14.8299 14.8299L9.16992 9.16992" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>


// const MicIcon = (props) => 
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//     <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     <path d="M4.3501 9.6499V11.3499C4.3501 15.5699 7.7801 18.9999 12.0001 18.9999C16.2201 18.9999 19.6501 15.5699 19.6501 11.3499V9.6499" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     <path d="M10.6099 6.43012C11.5099 6.10012 12.4899 6.10012 13.3899 6.43012" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     <path d="M11.2002 8.54982C11.7302 8.40982 12.2802 8.40982 12.8102 8.54982" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     <path d="M12 19V22" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>

// const SendIcon = (props) => 
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//     <path d="M5.86674 4.42687L17.1867 0.653539C22.2667 -1.03979 25.0267 1.73354 23.3467 6.81354L19.5734 18.1335C17.0401 25.7469 12.8801 25.7469 10.3467 18.1335L9.22674 14.7735L5.86674 13.6535C-1.74659 11.1202 -1.74659 6.97354 5.86674 4.42687Z" fill="#714DD9"/>
//   </svg>


const Client = () => {
  return (
    <div className={clientStyles.page}>
      <div className={clientStyles.side}>
        <div className={clientStyles.sideTop}>
          <h1 className={clientStyles.heading}>All Clients</h1>
          <div className={clientStyles.searchContainer}>
            <input type="search" placeholder="Search for something" className={clientStyles.search} />
            <SearchIcon className={clientStyles.searchIcon} />
          </div>
        </div>
        <div className={clientStyles.chatList}>
          { [{ name: 'Victor E.', message: 'This is a message. This...', timestamp: "6:00am", img: victor }, 
          { name: "Daniel Esther", message: "I booked an appointment...", timestamp: "6:00am", unreadCount: 2, img: daniel }, 
          { name: "Sandra Davids", message: "How are you doing Alisa?...", timestamp: "7:03am", recipientHasRead: true, img: sandra }, 
          { name: "Seyi Daniels", message: "You need to improve on...", timestamp: '6:44am', recipientHasRead: false, img: seyi }, 
          { name: "John Andrew", message: "Kudo Andrew! You're doing...", timestamp: '6:20am', recipientHasRead: false, img: john }, 
          { name: "Victoria Phillips", message: "You missed your task today...", timestamp: '6:00am', recipientHasRead: false, img: victoria }].map(({name, message, timestamp, recipientHasRead, img}) => (
            <div className={clientStyles.listItem} key={img}>
              <img className={clientStyles.chatListImage} src={img} alt={name} />
              <div>
                <p className={clientStyles.chatListName}>{name}</p>
                <p className={clientStyles.chatListMessage}>{recipientHasRead === true ? <ReadCheckIcon className={clientStyles.checkIcon} /> : recipientHasRead == undefined ? null : <DeliveredCheckIcon className={clientStyles.checkIcon} />}{message}</p>
              </div>
              <div className={clientStyles.chatListEnd}>
                <p className={clientStyles.chatListTimestamp}>{timestamp}</p>
              </div>
            </div>
          )) }
        </div>
      </div>
      <div className={clientStyles.main}>
        <header className={clientStyles.mainHeader}>
          <img src={victor} alt="Victor" className={clientStyles.dp} />
          <div className={clientStyles.nameContainer}>
            <span className={clientStyles.name}>Victor E</span>
            <span className={clientStyles.status}>Online</span>
          </div>
          <div className={clientStyles.phoneIcon}>
            <PhoneIcon />
          </div>
        </header>
        <div className={clientStyles.messagesContainer}>
          <div className={clientStyles.date}>Today</div>
          { [{ message: "You'll recieve a call by 10am reminding you of your task.", recieved: false, timestamp: "10:00am" }, 
          { message: "I'd like to be reminded via SMS", recieved: true, timestamp: "10:10am" }, 
          { message: "Thank you Alexander, also the files should be added for reference", recieved: true, timestamp: "10:11am" }, 
          { message: "Okay noticed", recieved: false, timestamp: "10:14am" }, 
          { message: "I want you to help send a message link to the Head of Sales.", recieved: true, timestamp: "07:11pm" }].map(({ message, recieved, timestamp }, i) => (
            <div className={recieved ? clientStyles.recievedMessage : clientStyles.sentMessage} key={i}>
              <p>{message}</p>
              <p className={clientStyles.timestamp}>{timestamp}</p>
            </div>
          )) }
        </div>
        <div className={clientStyles.messageBoxContainer}>
          <input type="text" placeholder="Type your message" className={clientStyles.messageBox} />
          {/* <CancelIcon className={clientStyles.cancelIcon} />
          <MicIcon className={clientStyles.micIcon} /> */}
        </div>
        {/* <SendIcon /> */}
      </div>
    </div>
  )
};

export default Client;