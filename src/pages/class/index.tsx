import Header from "src/components/common/Header";
import * as S from "src/pages/class/style";
import Sidebar from "src/components/common/Sidebar/defaultSideBar";
import ModalPortal from "src/portal/portal";
import Modal from "src/modal";
import { useState } from "react";

const CheckClass = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [style, setStyle] = useState<boolean>(false);

  const ItemClick = () => {
    setModal(!modal);
    setStyle(!style);
  };
  return (
    <ModalPortal>
      <S.CheckClassWrapper>
        <Header />
        <S.MainWrapper>
          <Sidebar />
          <S.ContentWrapper>
            <S.ContentMainWrapper>
              <S.ClassItem onClick={ItemClick} clicked={style}>
                <S.ItemContentWrap></S.ItemContentWrap>
              </S.ClassItem>
            </S.ContentMainWrapper>
          </S.ContentWrapper>
        </S.MainWrapper>
        {modal === true ? <Modal onClick={ItemClick}></Modal> : <></>}
      </S.CheckClassWrapper>
    </ModalPortal>
  );
};

export default CheckClass;
