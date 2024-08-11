import * as S from "./style";
import { useState } from "react";

const Item = () => {
  const [style, setStyle] = useState<boolean>(false);
  return (
    <S.ClassItem onClick={() => setStyle(!style)} clicked={style}>
      <S.ItemContentWrap></S.ItemContentWrap>
    </S.ClassItem>
  );
};

export default Item;
