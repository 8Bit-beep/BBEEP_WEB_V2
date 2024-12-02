import { ClassResponseType } from "src/types/class/class.type";
import * as S from "./style";
import Back from "src/assets/Class/Modal/BackButton.svg";
import { ClassManagement } from "src/types/management/studentManagement.type";
import dayjs from "dayjs";
import {ClubRoomEnum, ClubRoomNameList} from "src/types/management/clubRoomEnum.type";
import {useEffect, useState} from "react";

interface Props {
  onClick: (item: string) => void;
  manage?: ClassManagement[] | null;
  cls?: ClassResponseType[] | null;
  title: string[] | string;
  isNone: boolean;
}

const Modal = ({ onClick, cls = [], title, manage, isNone }: Props) => {

  console.log(manage)

  console.log(manage?.filter((item) => !item.todayLastLogs[item.todayLastLogs.length - 1].isExist))

  return (
    <S.Wrapper>
      <S.ModalWrapper>
        <S.ModalMainWrapper>
          <S.HeaderLineWrapper>
            <img style={{ width: 40, height: 40 }} src={Back} onClick={() => onClick("back")} alt="img" />
            {
              ClubRoomNameList.includes(`${title}`) ?
                  // @ts-ignore
                  <S.ModalTitleWrapper>{title} ({ClubRoomEnum[`${title}`]})</S.ModalTitleWrapper>
                  : <S.ModalTitleWrapper>{title}</S.ModalTitleWrapper>
            }
          </S.HeaderLineWrapper>
          <S.ModalListWrapper>
            {Array.isArray(manage) && manage.length > 0 ? (
              <>
                <S.ManageListTitleWrapper>
                  <div
                      style={{
                        width: "12%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                  >
                    <S.TitleSpan>학번</S.TitleSpan>
                  </div>
                  <div
                      style={{
                        width: "10%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                  >
                    <S.TitleSpan>이름</S.TitleSpan>
                  </div>
                  <div
                      style={{
                        width: "12%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                  >
                    <S.TitleSpan>마지막 출석</S.TitleSpan>
                  </div>
                  {
                    ['8','9','10','11'].map((item) => (
                        <>
                          <div
                              style={{
                                width: "12.5%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                          >
                            <S.TitleSpan>{`${item}`}교시 출석</S.TitleSpan>
                          </div>
                          <div
                              style={{
                                width: "11.7%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                          >
                            <S.TitleSpan>출결</S.TitleSpan>
                          </div>
                        </>
                    ))
                  }
                </S.ManageListTitleWrapper>
                <div
                    style={{width: "100%", height: 500, display: "flex", overflowY: "scroll", flexDirection: "column"}}
                >
                  {isNone ? manage?.filter((item) => !item.todayLastLogs[item.todayLastLogs.length - 1].isExist).map((item, idx)=> (
                          <S.ManageListItem key={idx}>
                            <div
                                style={{
                                  width: "12%",
                                  height: 80,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                            >
                              <S.TitleSpan>
                                {item.grade}
                                {item.cls}
                                {item.num?.toString().padStart(2, "0")}
                              </S.TitleSpan>
                            </div>
                            <div
                                style={{
                                  width: "10%",
                                  height: 80,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                            >
                              <S.TitleSpan>{item.name}</S.TitleSpan>
                            </div>
                            <div
                                style={{
                                  width: "13.5%",
                                  height: 80,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                            >
                              <S.TitleSpan>
                                {!item.todayLastLogs[item.todayLastLogs.length - 1].lastUpdated ? "출석기록 없음" : dayjs(item.todayLastLogs[item.todayLastLogs.length - 1].lastUpdated).format("hh:mm:ss")}
                              </S.TitleSpan>
                            </div>
                            {
                              ["EIGTH", "NINE", "TEN", "ELEVEN"].map((key, index) => {
                                return item.todayLastLogs[index] || { lastUpdated: null, position: key };
                              }).map((item) => (
                                  <>
                                    <div
                                        style={{
                                          width: "13.5%",
                                          height: 80,
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                        }}
                                    >
                                      <S.TitleSpan>
                                        {item.lastUpdated
                                            ? dayjs(item.lastUpdated).format("hh:mm:ss")
                                            : "출석기록 없음"}
                                      </S.TitleSpan>
                                    </div>
                                    <div
                                        style={{
                                          width: "12%",
                                          height: 80,
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                        }}
                                    >
                                      {item.lastUpdated ? (
                                          <S.TitleSpan style={{color: "#24b105"}}>출석</S.TitleSpan>
                                      ) : (
                                          <S.TitleSpan style={{color: "red"}}>결석</S.TitleSpan>
                                      )}
                                    </div>
                                  </>
                              ))
                            }
                          </S.ManageListItem>
                      ))
                      : manage.map((item, idx) => (
                          <S.ManageListItem key={idx}>
                            <div
                                style={{
                                  width: "12%",
                                  height: 80,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                            >
                              <S.TitleSpan>
                                {item.grade}
                                {item.cls}
                                {item.num?.toString().padStart(2, "0")}
                              </S.TitleSpan>
                            </div>
                            <div
                                style={{
                                  width: "10%",
                                  height: 80,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                            >
                              <S.TitleSpan>{item.name}</S.TitleSpan>
                            </div>
                            <div
                                style={{
                                  width: "13.5%",
                                  height: 80,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                            >
                              <S.TitleSpan>
                                {!item.todayLastLogs[item.todayLastLogs.length - 1].lastUpdated ? "출석기록 없음" : dayjs(item.todayLastLogs[item.todayLastLogs.length - 1].lastUpdated).format("hh:mm:ss")}
                              </S.TitleSpan>
                            </div>
                            {
                              ["EIGTH", "NINE", "TEN", "ELEVEN"].map((key, index) => {
                                return item.todayLastLogs[index] || { lastUpdated: null, position: key };
                              }).map((item) => (
                                  <>
                                    <div
                                        style={{
                                          width: "13.5%",
                                          height: 80,
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                        }}
                                    >
                                      <S.TitleSpan>
                                        {item.lastUpdated
                                            ? dayjs(item.lastUpdated).format("hh:mm:ss")
                                            : "출석기록 없음"}
                                      </S.TitleSpan>
                                    </div>
                                    <div
                                        style={{
                                          width: "12%",
                                          height: 80,
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                        }}
                                    >
                                      {item.lastUpdated ? (
                                          <S.TitleSpan style={{color: "#24b105"}}>출석</S.TitleSpan>
                                      ) : (
                                          <S.TitleSpan style={{color: "red"}}>결석</S.TitleSpan>
                                      )}
                                    </div>
                                  </>
                              ))
                            }
                          </S.ManageListItem>
                      ))}
                  {isNone ? (manage?.filter((item) => !item.todayLastLogs[item.todayLastLogs.length - 1].isExist)?.length === 0) && (
                      <S.ManageListItem>
                        <div style={{
                          width: "100%",
                          height: 80,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <S.TitleSpan>
                            결석인원이 존재하지 않습니다
                          </S.TitleSpan>
                        </div>
                      </S.ManageListItem>
                  ) : manage?.length === 0 && (
                      <S.ManageListItem>
                        <div style={{
                          width: "100%",
                          height: 80,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <S.TitleSpan>
                            {isNone ? "결석인원이 존재하지 않습니다" : "출석인원이 존재하지 않습니다"}
                          </S.TitleSpan>
                        </div>
                      </S.ManageListItem>
                  ) }
                </div>
              </>
            ) : (
                cls?.map((item, idx) => (
                    <S.ListItem key={idx}>
                      {item.grade} 학년 {item.cls} 반 {item.name}
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
