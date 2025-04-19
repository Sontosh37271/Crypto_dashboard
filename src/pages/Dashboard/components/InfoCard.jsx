import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag ,Text} from '@chakra-ui/react'

const InfoCard = ({imgUrl,tagText,text,isInverted}) => {
  return (
    <CustomCard bgImage={imgUrl} bgRepeat="no-repeat" bgSize="cover" bgColor={isInverted ? "p.purple":"white"}>
        <Tag bg={isInverted? "white":"p.purple"} color={isInverted? "p.purple":"white"} borderRadius="full" >{tagText}</Tag>
        <Text mt="4" textStyle="h5" fontWeight="medium" color={isInverted ? "white" :"p.purple"}>{text}</Text>     
    </CustomCard>
  )
}

export default InfoCard
