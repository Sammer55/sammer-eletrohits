import { useTheme } from "styled-components";
import * as C from "./styles";
import Input from "@/components/input";
import { Octicons } from "@expo/vector-icons";
import { memo, useState } from "react";

type Props = {
  handleSearch: (value: string) => void;
};

const Search = memo(({ handleSearch }: Props) => {
  const [search, setSearch] = useState<string | undefined>();
  const { colors } = useTheme();

  const handleSearchInput = () => {
    if (!!search) handleSearch(search);
  };

  return (
    <C.WrapperSearch>
      <Input
        onChangeText={setSearch}
        value={search}
        placeholder="Pesquisar..."
        onEndEditing={handleSearchInput}
      />
      <C.SearchButton disabled={!search} onPress={handleSearchInput}>
        <Octicons
          name="search"
          size={18}
          color={!search ? colors.border : colors.black}
        />
      </C.SearchButton>
    </C.WrapperSearch>
  );
});

export default Search;
