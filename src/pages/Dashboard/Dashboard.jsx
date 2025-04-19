import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import { Grid, GridItem } from '@chakra-ui/react'
import Transections from './components/Transections'
import InfoCard from './components/InfoCard'


const Dashboard = () => {
 
  return ( 
      <DashboardLayout title="DashboardLayout">
         <Grid gridTemplateColumns={{
          base:"repeate(1,1fr)",
          xl:"repeate(2,1fr)",
         }}
         gap="6">
           <GridItem colSpan={{base:1,xl:2,}}> <PortfolioSection /> </GridItem> {/*Portfolio component e hocche child element tai portfolio children hisabe jabe */}                       
           <GridItem colSpan={1} > <PriceSection /></GridItem>          
           <GridItem colSpan={1} > <Transections /></GridItem>
           <GridItem colSpan={1} > <InfoCard
               imgUrl="/dot_bg_t.png" 
               tagText="Loan"
               text="Learn more about Loans-keep your Bitcoin ,access it's value without selling it "
               isInverted={false}
               />
           </GridItem>
           <GridItem colSpan={1} > <InfoCard 
                 isInverted={true}
                 imgUrl="/dot_bg.png"
                 tagText="Contact"
                 text= "Learn more about Loans-keep your Bitcoin ,access it's value without selling it "               
           /></GridItem>
        </Grid>
       
        </DashboardLayout>   
  )
}

export default Dashboard
