import useCheckClass from "src/hooks/class/useCheckClass";
import ModalPortal from "src/portal/portal";
import * as S from "../style";
import Header from "src/components/common/Header";
import Sidebar from "src/components/common/Sidebar/defaultSideBar";
import Modal from "src/modal";
import UseCheckFloor from "src/hooks/class/useCheckFloor"
import { useEffect } from "react";

const FirstClass = () => {
  const { modal, style, ItemClick, cls } = useCheckClass();
  const { setFloor, classData } = UseCheckFloor();

  const FloorData = "1";

  useEffect(() => {
    setFloor(FloorData);
  }, []);

  const ListTitle = classData.map((item) => {
    return item.name;
  });

  return (
    <ModalPortal>
      <S.CheckClassWrapper>
        <Header />
        <S.MainWrapper>
          <Sidebar />
          <S.ContentWrapper>
            <S.ContentMainWrapper>
              {classData.map((item, idx) => (
                <S.ClassItem
                  key={idx}
                  onClick={() => item && ItemClick(item.code)}
                  clicked={style === item.code ? true : false}
                >
                  <S.ItemContentWrap>{item.name}</S.ItemContentWrap>
                </S.ClassItem>
              ))}
            </S.ContentMainWrapper>
          </S.ContentWrapper>
        </S.MainWrapper>
        {modal === true ? <Modal title={ListTitle} onClick={ItemClick} cls={cls}></Modal> : <></>}
      </S.CheckClassWrapper>
    </ModalPortal>
  );
};

export default FirstClass;
