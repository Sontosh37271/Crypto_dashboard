import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import Sidenav from './Sidenav'

const SideDrawer = ({isOpen,onClose}) => {
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody>
                <Sidenav /> {/* sidenav add korechi body ar modhe */}
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default SideDrawer
