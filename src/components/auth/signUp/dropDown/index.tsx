import { useState } from "react";
import * as S from "src/pages/auth/signup/style";
import Arrow from "src/assets/auth/signup/arrow1.svg";
import ReverseArrow from "src/assets/auth/signup/arrow2.svg";



const DropDown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [img, setImg] = useState<boolean>(false);

  const DropDown = () => {
    setOpen(!open);
    setImg(!img);
  };
  return (
    <div>
      <S.DropDownWrap onClick={DropDown}>
        <img src={img ? Arrow : ReverseArrow} style={{ width: 20, height: 20, marginRight: "5%" }} />
        <span style={{ marginLeft: "5%" }}>부서 선택하기</span>
      </S.DropDownWrap>

      {open === true && (
        <S.DropDownListWrap>
          <S.DropDownList>서영우</S.DropDownList>
          <S.DropDownList>서영우</S.DropDownList>
          <S.DropDownList>서영우</S.DropDownList>
          <S.DropDownList>서영우</S.DropDownList>
        </S.DropDownListWrap>
      )}
    </div>
  );
};

export default DropDown;
