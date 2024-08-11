import Header from "src/components/common/Header";
import * as S from "src/pages/class/style";
import Sidebar from "src/components/common/Sidebar/defaultSideBar";
import Item from "./item";

const CheckClass = () => {


  return (
    <S.CheckClassWrapper>
      <Header />
      <S.MainWrapper>
        <Sidebar />
        <S.ContentWrapper>
          <S.ContentMainWrapper>
            <Item />
          </S.ContentMainWrapper>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.CheckClassWrapper>
  );
};

export default CheckClass;
