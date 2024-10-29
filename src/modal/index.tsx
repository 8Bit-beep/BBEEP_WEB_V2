import { ClassResponseType } from "src/types/class/class.type";
import * as S from "./style";
import Back from "src/assets/Class/Modal/BackButton.svg";
import { ClassManagement } from "src/types/management/studentManagement.type";

import dayjs from "dayjs";

interface Props {
  onClick: (item: string) => void;
  manage?: ClassManagement[] | null;
  cls?: ClassResponseType[] | null;
  title: string[] | string;
}

const Modal = ({ onClick, cls = [], title, manage }: Props) => {
  console.log("manage", manage);
  return (
    <S.Wrapper>
      <S.ModalWrapper>
        <S.ModalMainWrapper>
          <S.HeaderLineWrapper>
            <img style={{ width: 40, height: 40 }} src={Back} onClick={() => onClick("back")} alt="img" />
            <S.ModalTitleWrapper>{title}</S.ModalTitleWrapper>
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
                  <div
                    style={{
                      width: "13.5%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <S.TitleSpan>8교시 출석</S.TitleSpan>
                  </div>
                  <div
                    style={{
                      width: "13.5%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <S.TitleSpan>9교시 출석</S.TitleSpan>
                  </div>
                  <div
                    style={{
                      width: "13.5%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <S.TitleSpan>10교시 출석</S.TitleSpan>
                  </div>
                  <div
                    style={{
                      width: "13.5%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <S.TitleSpan>11교시 출석</S.TitleSpan>
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
                    <S.TitleSpan>출결</S.TitleSpan>
                  </div>
                </S.ManageListTitleWrapper>
                <div
                  style={{
                    width: "100%",
                    height: 500,

                    display: "flex",
                    overflowY: "scroll",
                    flexDirection: "column",
                  }}
                >
                  {manage.map((item, idx) => (
                    <S.ManageListItem key={idx}>
                      <div
                        style={{
                          width: "12%",
                          height: "100%",
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
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <S.TitleSpan>{item.name}</S.TitleSpan>
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
                        <S.TitleSpan>
                          {dayjs(item?.todayLastLogs?.[0]?.lastUpdated?.toString() ?? "").format("hh:mm:ss")}
                        </S.TitleSpan>
                      </div>
                      <div
                        style={{
                          width: "13.5%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <S.TitleSpan>
                          {item?.todayLastLogs?.length > 0 &&
                            dayjs(item.todayLastLogs[0].lastUpdated?.toString() ?? "").format("hh:mm:ss")}
                        </S.TitleSpan>
                      </div>
                      <div
                        style={{
                          width: "13.5%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <S.TitleSpan>
                          {item?.todayLastLogs[0].lastUpdated === item.todayLastLogs[1].lastUpdated
                            ? "출석기록 없음"
                            : dayjs(item.todayLastLogs[1].lastUpdated?.toString() ?? "").format("hh:mm:ss")}
                        </S.TitleSpan>
                      </div>
                      <div
                        style={{
                          width: "13.5%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <S.TitleSpan>
                          {item?.todayLastLogs[1].lastUpdated === item.todayLastLogs[2].lastUpdated
                            ? "출석기록 없음"
                            : dayjs(item.todayLastLogs[1].lastUpdated?.toString() ?? "").format("hh:mm:ss")}
                        </S.TitleSpan>
                      </div>
                      <div
                        style={{
                          width: "13.5%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <S.TitleSpan>
                          {dayjs(item?.todayLastLogs?.[0]?.lastUpdated?.toString() ?? "").format("hh:mm:ss")}
                        </S.TitleSpan>
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
                        {item.isExist ? (
                          <S.TitleSpan style={{ color: "#24b105" }}>출석</S.TitleSpan>
                        ) : (
                          <S.TitleSpan style={{ color: "red" }}>결석</S.TitleSpan>
                        )}
                      </div>
                    </S.ManageListItem>
                  ))}
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
