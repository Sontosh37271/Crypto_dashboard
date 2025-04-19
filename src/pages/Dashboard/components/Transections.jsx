import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react"
import { TbCoinTaka } from "react-icons/tb";
import { FaBtc } from "react-icons/fa";
const Transections = () => {

    const transactions=[{
        id:"1",
        icon:TbCoinTaka,
        text:"INR Deposit",
        amount:"+ ₹81,123.10",
        timestamp:"2024-07-04 3.55:06 PM"
    },
    {
        id:"2",
        icon:FaBtc,
        text:"BTC Sell",
        amount:"+ ₹81,123.10",
        timestamp:"2024-07-04 3.55:06 PM"
    },
    {
        id:"3",
        icon:TbCoinTaka,
        text:"INR Deposit",
        amount:"+ ₹81,123.10",
        timestamp:"2024-07-04 3.55:06 PM"
    }];

  return (
    <CustomCard h="full">
        <Text mb="6" fontSize="sm" color="black.80">Recent Transactions</Text>
        <Stack spacing={4}>
            {transactions.map((transaction,i)=>(
              <Fragment key={transaction.id}>
             
                {i!==0 && <Divider mt="4"/>}
             
                  <Flex  gap="4" >
                    <Grid placeItems="center" 
                      bg="black.5"
                      boxSize="10"
                      borderRadius="full"
                      >
                        <Icon as={transaction.icon} />
                    </Grid>
                    <Flex justifyContent="space-between" w="full">
                      <Stack spacing={0}>
                        <Text textStyle="h6" >
                          {transaction.text}
                        </Text>
                        <Text fontSize="sm" color="black.40">
                          {transaction.timestamp}
                        </Text>
                      </Stack>                     
                      <Text textStyle="h6">{transaction.amount}</Text>
                    </Flex>
                </Flex>
               </Fragment>
              
            ) )}
        </Stack>
        <Button justifyContent="center" w="full" mt="4" colorScheme='gray' >
          View all
        </Button>
    </CustomCard>
  )
}

export default Transections
