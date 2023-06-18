import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
