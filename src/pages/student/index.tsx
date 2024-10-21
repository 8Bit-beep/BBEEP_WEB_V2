import * as S from "./style";
import Header from "src/components/common/Header/index";
import useStudent from "src/hooks/student/useStudent";
import { memberListStroe } from "src/stores/common/student.store";
import StudentSidebar from "src/components/common/Sidebar/studentSidebar";
import DefaultSideBar from "src/components/common/Sidebar/defaultSideBar/index";
const CheckStudent = () => {
  // const { ...student } = useStudent();
  // const { memberList } = useStudent();
  const memberList = memberListStroe((state) => state.memberList);
  console.log("memberList", memberList);
  return (
    <S.CheckStudentWrap>
      <Header />
      <S.Main>
        <DefaultSideBar />
        <S.MainView>
          <StudentSidebar />
          <S.ViewStudentWrap>
            <S.StudentLayer>
              <span>이름</span>
              <span>학번</span>
              <span>층</span>
              <span>실</span>
            </S.StudentLayer>
            {memberList?.map((item, idx) => (
              <S.StudentLayer key={idx}>
                <span>{item.name}</span>
                <span>{item.num}</span>
                <span>{item.floor}</span>
                <span>{item.currentRoom}</span>
              </S.StudentLayer>
            ))}
          </S.ViewStudentWrap>
        </S.MainView>
      </S.Main>
    </S.CheckStudentWrap>
  );
};

export default CheckStudent;
