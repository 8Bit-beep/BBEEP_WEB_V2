import useCheckClass from "src/hooks/class/useCheckClass";
import ModalPortal from "src/portal/portal";
import * as S from "../style";
import Header from "src/components/common/Header";
import Sidebar from "src/components/common/Sidebar/defaultSideBar";
import Modal from "src/modal";

const SecondClass = () => {
  const { CodeValueArray, modal, style, ItemClick, cls, ClassList, } = useCheckClass();
  console.log(CodeValueArray);

  return (
    <ModalPortal>
      <S.CheckClassWrapper>
        <Header />
        <S.MainWrapper>
          <Sidebar />
          <S.ContentWrapper>
            <S.ContentMainWrapper>
              {CodeValueArray.map((item, idx) => (
                <S.ClassItem onClick={() => ItemClick(item.value)} clicked={style === item.value ? true : false}>
                  <S.ItemContentWrap>{item.key}</S.ItemContentWrap>
                </S.ClassItem>
              ))}
            </S.ContentMainWrapper>
          </S.ContentWrapper>
        </S.MainWrapper>
        {modal === true ? <Modal onClick={ItemClick} cls={cls}></Modal> : <></>}
      </S.CheckClassWrapper>
    </ModalPortal>
  );
};

export default SecondClass;
