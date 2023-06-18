import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FC } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/UsePlatforms';

interface PlatformSelectorProps {}

const PlatformSelector: FC<PlatformSelectorProps> = ({}) => {
  const { data, error, isLoading } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((p) => (
          <MenuItem>{p.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
