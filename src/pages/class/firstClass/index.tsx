import useCheckClass from "src/hooks/class/useCheckClass";
import ModalPortal from "src/portal/portal";
import * as S from "../style";
import Header from "src/components/common/Header";
import Sidebar from "src/components/common/Sidebar/defaultSideBar";
import Modal from "src/modal";

const FirstClass = () => {
  const { CodeValueArray, modal, style, ItemClick } = useCheckClass();
  console.log(CodeValueArray);

  return (
    <ModalPortal>
      <S.CheckClassWrapper>
        <Header />
        <S.MainWrapper>
          <Sidebar />
          <S.ContentWrapper>
            <S.ContentMainWrapper>
              {CodeValueArray.map((item) =>
                item.map((item, idx) => (
                  <S.ClassItem onClick={() => ItemClick(item)} clicked={style === item ? true : false} key={idx}>
                    <S.ItemContentWrap>{item}</S.ItemContentWrap>
                  </S.ClassItem>
                ))
              )}
            </S.ContentMainWrapper>
          </S.ContentWrapper>
        </S.MainWrapper>
        {modal === true ? <Modal onClick={ItemClick}></Modal> : <></>}
      </S.CheckClassWrapper>
    </ModalPortal>
  );
};

export default FirstClass;
