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
            <div className={clientStyles.listItem}>
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
        <header>
          <div>Victor E</div>
          <div>Online</div>
        </header>
        <div>Today</div>
        <div>You'll recieve a call by 10am reminding you of your task.</div>
        <div>I'd like to be reminded via SMS</div>
        <div>Thank you, Alexander. Also the files should be added for reference</div>
        <div>Okay, noted</div>
        <div>I want you to help send a meeting link to the Head of Sales</div>
        <input type="text" placeholder="Type your message" />
      </div>

    </div>
  )
};

export default Client;