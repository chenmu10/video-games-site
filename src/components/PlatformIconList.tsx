import { HStack, Icon } from '@chakra-ui/react';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { Platform } from '../Entities/Platform';

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList: FC<PlatformIconListProps> = ({ platforms }) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    android: FaAndroid,
    apple: FaApple,
    linux: FaLinux,
    xbox: FaXbox,
    iphone: MdPhoneIphone,
    nintendo: SiNintendo,
    globe: BsGlobe,
  };
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
