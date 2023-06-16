import { HStack, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import logo from '../assets/logo.webp';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>NavBar</Text>
      </HStack>
    </>
  );
};

export default NavBar;
