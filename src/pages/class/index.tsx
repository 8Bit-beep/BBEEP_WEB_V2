import Header from "src/components/common/Header";
import * as S from "src/pages/class/style"
import Sidebar from "src/components/common/Sidebar/defaultSideBar";
const CheckClass = () => {
  return (
    <S.CheckClassWrapper>
      <Header />
        <S.MainWrapper>
        <Sidebar/>
          <S.ClassItem>
     
          </S.ClassItem>
        </S.MainWrapper>
    </S.CheckClassWrapper>
  );
};

export default CheckClass;
