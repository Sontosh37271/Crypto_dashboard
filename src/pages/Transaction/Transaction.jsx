import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { MdOutlineFileDownload } from "react-icons/md";
import {Button, Card, CardBody, CardFooter, CardHeader, Flex, Icon, Tag } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,Stack,HStack,VStack, } from '@chakra-ui/react'
import {InputGroup,Input,InputLeftElement} from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable';
import { CiSearch } from "react-icons/ci";
const Transaction = () => {
  const tabs=[
    {
      id:"1",
      name:"All",
      count:349,
    },
    {
      id:"2",
      name:"Deposite",
      count:114,
    },
    {
      id:"3",
      name:"Widthdraw",
      count:55,
    },
    {
      id:"4",
      name:"Trade",
      count:50,
    }
  ]
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={MdOutlineFileDownload}></Icon>}>Export CSV</Button>
      </Flex>
      <Card borderRadius="16px">
        
        <Tabs>
            <TabList pt="4" display="flex" justifyContent="space-between">
              <HStack>
              {tabs.map((tab)=>(              
                <Tab key={tab.id} display="flex" gap="2" pb="4">{tab.name}{" "}<Tag colorScheme='gray' borderRadius="full">{tab.count}</Tag></Tab>              
              ))}
              </HStack>
              <InputGroup maxW="200px" pr="6" >
                <InputLeftElement pointerEvents='none'>
                    <Icon as={CiSearch} />
                </InputLeftElement>
                <Input type='tel' placeholder='Search...' />
              </InputGroup>

            </TabList>

        <TabPanels>
          <TabPanel>
            <TransactionTable />
          </TabPanel>
          <TabPanel>
             <TransactionTable />
          </TabPanel>
          <TabPanel>
             <TransactionTable />
          </TabPanel>
          <TabPanel>
             <TransactionTable />
          </TabPanel>
        </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default Transaction
