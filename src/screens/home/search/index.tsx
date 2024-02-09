import { useTheme } from "styled-components";
import * as C from "./styles";
import Input from "@/components/input";
import { Octicons } from "@expo/vector-icons";
import { memo } from "react";

type Props = {
  search: string | undefined;
  setSearch: (value: string | undefined) => void;
};

const Search = memo(({ search, setSearch }: Props) => {
  const { colors } = useTheme();

  return (
    <C.WrapperSearch>
      <Input
        onChangeText={setSearch}
        value={search}
        placeholder="Pesquisar..."
      />
      <C.SearchButton disabled={!search} onPress={() => {}}>
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
