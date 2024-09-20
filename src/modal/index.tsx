import { ClassResponseType } from "src/types/class/class.type";
import * as S from "./style";
import Back from "src/assets/Class/Modal/BackButton.svg";
import { ClassManagement } from "src/types/management/studentManagement.type";
import {useEffect, useState} from "react";
import dayjs from "dayjs";


interface Props {
  onClick: (item: string) => void;
  manage?: ClassManagement[] | null;
  cls?: ClassResponseType[] | null;
  title: string[];
}

const Modal = ({ onClick, cls = [], title, manage = [] }: Props) => {

  const [renderManage, setRenderManage] = useState<ClassManagement[]>([]);

  useEffect(() => {
    if (manage) {
      if(manage?.length % 2) {
        setRenderManage([...manage,{}]);
      } else {
        setRenderManage(manage);
      }
    }
  }, [manage]);

  return (
      <S.Wrapper>
        <S.ModalWrapper>
          <S.ModalMainWrapper>
            <S.HeaderLineWrapper>
              <img
                  style={{ width: 40, height: 40 }}
                  src={Back}
                  onClick={() => onClick("back")}
              />
              <S.ModalTitleWrapper>{title}</S.ModalTitleWrapper>
            </S.HeaderLineWrapper>
            <S.ModalListWrapper style={renderManage[0] ? {gap: "0", borderRadius: 50, width: "120%"} : {}}>
              {!(renderManage) || renderManage[0] ? (
                  <>
                    {["", ""].map((it, i) => {
                      return (
                          <S.ManageListItem style={{backgroundColor: "#F1F1F1FF", height: "11%", borderRadius: 10}}>
                          <span style={{width: "17%", height: "40%", textAlign: "center"}}>
                            학번
                          </span>
                            <span style={{width: "17%", height: "40%", textAlign: "center"}}>
                            이름
                          </span>
                            <span style={{width: "41%", height: "40%", textAlign: "center"}}>
                            시간
                          </span>
                            <span style={{width: "21%", height: "40%", textAlign: "end"}}>
                            출결정보
                          </span>
                          </S.ManageListItem>
                      )
                    })}
                    {renderManage?.map((item, idx) => (
                        <S.ManageListItem key={idx} style={{borderStyle: 'solid', borderWidth: 0, borderRightWidth: idx %2 ? 0 : 5, borderColor: "#f1f1f1"}}>
                          <span style={{width: "17%", height: "40%", textAlign: "center"}}>
                            {item.grade}{item.cls}{item.num?.toString().padStart(2, "0")}
                          </span>
                          <span style={{width: "17%", height: "40%", textAlign: "center"}}>
                            {item.name}
                          </span>
                          <span style={{width: "17%", height: "40%", textAlign: "center"}}>
                            {item.modifiedDate?.toString().split("T")[1]}
                            {/*{dayjs(item.modifiedDate)}*/}
                          </span>
                          {
                            item.name &&
                            <span style={{width: "42.5%", height: "40%", textAlign: "end"}}>
                            {item.isExist ?
                                <span style={{color: "#24b105", fontWeight: "600", fontSize: 15}}>출석</span> :
                                <span style={{color: "red", fontWeight: "600", fontSize: 15}}>결석</span>}
                            </span>
                          }
                        </S.ManageListItem>
                    ))}
                  </>
              ) : (
                  cls?.map((item, idx) => (
                      <S.ListItem key={idx}>
                        {item.cls} 학년 {item.grade} 반 {item.name}
                      </S.ListItem>
                  ))
              )}
            </S.ModalListWrapper>
          </S.ModalMainWrapper>
        </S.ModalWrapper>
      </S.Wrapper>
  );
};

export default Modal;
