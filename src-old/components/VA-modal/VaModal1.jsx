import React from 'react'
import VaModal from './VaModal';
import TalkingMan from '../../assets/talking.png';

const VaModal1 = () => {
  return (
    <div><VaModal imgName={TalkingMan} text='Hello, my name is Michael and I am your virtual assistant.' subtext='I would make sure you do not forget your tasks by giving you a call.'  btn1='Remind me' btn2='No, Thanks'/></div>
  )
}

export default VaModal1