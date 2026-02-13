import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/shizzel.webp"
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
        <Image src={logo} boxSize="60px"></Image>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar