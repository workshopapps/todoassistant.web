import React from 'react'
import VaModal from './VaModal'
import Illustration2 from '../../assets/Illustrations (1).png';

const VaModal2 = () => {
  return (
    <div>
        <VaModal imgName={Illustration2} text='Hello, my name is John and I am your virtual assistant.' subtext='I am here to complete your tasks.' btn1='Assign Task' btn2='No, thanks'/>
    </div>
  )
}

export default VaModal2