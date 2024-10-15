import useCheckClass from "src/hooks/class/useCheckClass";
import ModalPortal from "src/portal/portal";
import * as S from "./style";
import Header from "src/components/common/Header";
import Sidebar from "src/components/common/Sidebar/defaultSideBar";
import Modal from "src/modal";
import { useCallback, useEffect, useState } from "react";
import useManagement from "src/hooks/management/useManagement";
import { useLocation } from "react-router-dom";
import { ClassManagement } from "src/types/management/studentManagement.type";
import UseFloorData from "src/hooks/management/useFloorData";
import CsvData from "src/components/common/CsvData";

const Management = () => {
  const { handleManagement, memberList } = useManagement();

  const { setFloor, CsvFloorData, floor, floorData, csvData } = UseFloorData();

  const { pathname } = useLocation();

  const clubList = [
    ["BIND", "CNS", "ALT", "3D", "MODI"],
    ["DUCAMI", "DION", "AND", "COMMAND", "DGSW42"],
  ];

  const [renderList, setRenderList] = useState<any[]>([]);
  const [renderTitle, setRenderTitle] = useState("");
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const [renderMemberList, setRenderMemberList] = useState<ClassManagement[]>([]);

  useEffect(() => {
    setRenderMemberList(memberList);
    CsvFloorData();
  }, [memberList]);

  useEffect(() => {
    if (pathname.includes("management")) {
      //@ts-ignore
      // setRenderList(clubList[Number(pathname.includes("second"))])
      switch (true) {
        case pathname.includes("second"):
          setRenderList(clubList[1]);
          setFloor("2");
          break;
        case pathname.includes("third"):
          setRenderList(clubList[0]);
          setFloor("3");
          break;
        case pathname.includes("all"):
          setRenderList(clubList.reduce((a, b) => a.concat(b), []));
          break;
      }
    }
  }, [pathname]);

  console.log("floorData", floorData);

  return (
    <ModalPortal>
      <S.CheckClassWrapper>
        <Header />
        <S.MainWrapper>
          <Sidebar />
          <S.ContentWrapper>
            {pathname.includes("all") ? <></> : <CsvData csvData={csvData} fileName="출석기록" />}
            <S.ContentMainWrapper>
              {renderList.map((item, idx) => (
                <S.ClassItem
                  onClick={() => {
                    item !== "3D" ? handleManagement(item) : handleManagement("D3");
                    setRenderModal(true);
                    setRenderTitle(item);
                  }}
                  clicked={false}
                >
                  <S.ItemContentWrap>{item}</S.ItemContentWrap>
                </S.ClassItem>
              ))}
            </S.ContentMainWrapper>
          </S.ContentWrapper>
        </S.MainWrapper>
        {renderModal && (
          <Modal
            title={[renderTitle]}
            onClick={() => {
              setRenderMemberList([]);
              setRenderModal(false);
            }}
            manage={renderMemberList}
          ></Modal>
        )}
      </S.CheckClassWrapper>
    </ModalPortal>
  );
};

export default Management;
