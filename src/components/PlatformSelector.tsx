import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FC } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/UsePlatforms';
import usePlatform from '../hooks/usePlatform';

interface PlatformSelectorProps {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId: number;
}

const PlatformSelector: FC<PlatformSelectorProps> = ({
  onSelectedPlatform,
  selectedPlatformId,
}) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
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
