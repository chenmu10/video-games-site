import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = ({}) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input placeholder="Search games..." borderRadius={20} variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
