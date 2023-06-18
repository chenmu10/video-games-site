import { HStack, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar: FC<NavBarProps> = ({ onSearch }) => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
