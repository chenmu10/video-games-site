import { HStack, Image } from '@chakra-ui/react';
import { FC } from 'react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';


const NavBar: FC = () => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
