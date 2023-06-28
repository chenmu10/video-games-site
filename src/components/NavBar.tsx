import { HStack, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar: FC = () => {
  return (
    <>
      <HStack padding="10px">
        <Link to="/">
          <Image objectFit="cover" src={logo} boxSize="60px" />
        </Link>

        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
