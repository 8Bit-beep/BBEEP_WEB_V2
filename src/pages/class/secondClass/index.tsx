import useCheckClass from "src/hooks/class/useCheckClass";
import ModalPortal from "src/portal/portal";
import * as S from "../style";
import Header from "src/components/common/Header";
import Sidebar from "src/components/common/Sidebar/defaultSideBar";
import Modal from "src/modal";
import UseCheckFloor from "src/hooks/class/useCheckFloor";
import { useEffect, useState } from "react";
import { SECOND_FLOOR_INFO } from "src/constants/room.constants";

const SecondClass = () => {
  const { modal, style, ItemClick, cls, ClassList } = useCheckClass();
  const { setFloor, classData } = UseCheckFloor();
  const [title, setTitle] = useState<string>("");
  const FloorData = "2";

  const ListTitle = SECOND_FLOOR_INFO.map((item) => {
    return item.name;
  });

  useEffect(() => {
    setFloor(FloorData);
  }, []);

  return (
    <ModalPortal>
      <S.CheckClassWrapper>
        <Header />
        <S.MainWrapper>
          <Sidebar />
          <S.ContentWrapper>
            <S.ContentMainWrapper>
              {SECOND_FLOOR_INFO.map((item, idx) => {
                return (
                  <S.ClassItem
                    key={idx}
                    onClick={() => {
                      item && ItemClick(item.code);
                      setTitle(item.name);
                    }}
                    clicked={style === item.code ? true : false}
                  >
                    <S.ItemContentWrap>{item.name}</S.ItemContentWrap>
                  </S.ClassItem>
                );
              })}
            </S.ContentMainWrapper>
          </S.ContentWrapper>
        </S.MainWrapper>
        {modal === true ? <Modal title={title} onClick={ItemClick} cls={cls}></Modal> : <></>}
      </S.CheckClassWrapper>
    </ModalPortal>
  );
};

export default SecondClass;
