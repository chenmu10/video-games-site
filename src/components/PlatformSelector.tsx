import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FC } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/UsePlatforms';

interface PlatformSelectorProps {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector: FC<PlatformSelectorProps> = ({
  onSelectedPlatform,
  selectedPlatformId,
}) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  const selectedPlatformName = data.results.find(
    (p) => p.id === selectedPlatformId
  )?.name;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformName || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
