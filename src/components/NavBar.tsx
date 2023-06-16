import { HStack, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
