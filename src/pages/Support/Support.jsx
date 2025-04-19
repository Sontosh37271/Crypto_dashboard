import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import DashboardLayout from '../../components/DashboardLayout'
import { Card } from '@chakra-ui/react'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { IoMdMail } from 'react-icons/io'
import { MdMessage } from "react-icons/md";
import InfoCard from '../Dashboard/components/InfoCard'
import { Stack } from '@chakra-ui/react'
const Support = () => {
  return (
    <DashboardLayout>
     <Stack gap={4}>
     <SupportCard 
     leftComponent={<ContactCard />} 
     icon={IoMdMail} 
     title="Contact Us" 
     text="Have a question or just want to khow more? Feel free to reach out to us"
     />

     <SupportCard 
      leftComponent={<InfoCard
      isInverted={true}
      imgUrl="/dot_bg.png"
      tagText="Contact"
      text= "Learn more about Loans-keep your Bitcoin ,access it's value without selling it "               
      />} 
      icon={MdMessage} 
      title="Live Chat" 
      text="Don't have time to wait for the answer? Chat with us now." 
      />
     </Stack>
    </DashboardLayout>
  )
}

export default Support
