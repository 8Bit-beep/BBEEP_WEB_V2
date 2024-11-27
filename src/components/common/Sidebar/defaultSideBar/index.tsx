import * as S from './style';
import SidebarStudent from 'src/assets/common/SidebarStudent.svg';
import SidebarLab from 'src/assets/common/SidebarLab.svg';
import One from 'src/assets/common/1.svg';
import Two from 'src/assets/common/2.svg';
import Three from 'src/assets/common/3.svg';
import Check from 'src/assets/common/check.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import UseSideBarNavigation from 'src/utils/common/sidebarNavigation';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isClickCategory, handleCategoryClick } = UseSideBarNavigation({ location, navigate });
  return (
    <S.SidebarWrap>
      <S.MenuWrap>
        <S.MenuTitle>
          <img src={SidebarStudent} alt="student" />
          <span>학생 조회하기</span>
        </S.MenuTitle>
        <S.MenuItem>
          <S.Item
            onClick={() => handleCategoryClick('1학년')}
            $isclicked={isClickCategory === '1학년' ? 'true' : 'false'}
          >
            <img src={One} alt="1grade" />
            <span>1학년</span>
          </S.Item>
          <S.Item
            onClick={() => handleCategoryClick('2학년')}
            $isclicked={isClickCategory === '2학년' ? 'true' : 'false'}
          >
            <img src={Two} alt="2grade" />
            <span>2학년</span>
          </S.Item>
          <S.Item
            onClick={() => handleCategoryClick('3학년')}
            $isclicked={isClickCategory === '3학년' ? 'true' : 'false'}
          >
            <img src={Three} alt="3grade" />
            <span>3학년</span>
          </S.Item>
        </S.MenuItem>
        <S.MenuTitle>
          <img src={SidebarLab} alt="room" />
          <span>실 조회햐기</span>
        </S.MenuTitle>
        <S.MenuItem style={{ minHeight: '75%' }}>
          <S.Item onClick={() => handleCategoryClick('1층')} $isclicked={isClickCategory === '1층' ? 'true' : 'false'}>
            <img src={One} alt="1floor" />
            <span>1층</span>
          </S.Item>
          <S.Item onClick={() => handleCategoryClick('2층')} $isclicked={isClickCategory === '2층' ? 'true' : 'false'}>
            <img src={Two} alt="2floor" />
            <span>2층</span>
          </S.Item>
          <S.Item onClick={() => handleCategoryClick('3층')} $isclicked={isClickCategory === '3층' ? 'true' : 'false'}>
            <img src={Three} alt="3floor" />
            <span>3층</span>
          </S.Item>
        </S.MenuItem>
        <S.MenuTitle>
          <img src={Check} alt="check" />
          <span>출석 체크하기</span>
        </S.MenuTitle>
        <S.MenuItem style={{ minHeight: '100%' }}>
          <S.Item
            onClick={() => handleCategoryClick('2출석')}
            $isclicked={isClickCategory === '2출석' ? 'true' : 'false'}
          >
            <img src={Two} alt="2floor" />
            <span>2층</span>
          </S.Item>
          <S.Item
            onClick={() => handleCategoryClick('3출석')}
            $isclicked={isClickCategory === '3출석' ? 'true' : 'false'}
          >
            <img src={Three} alt="3floor" />
            <span>3층</span>
          </S.Item>
          <S.Item
            onClick={() => handleCategoryClick('전출석')}
            $isclicked={isClickCategory === '전출석' ? 'true' : 'false'}
          >
            <img src={Check} alt="whole" />
            <span>전체</span>
          </S.Item>
          <S.Item
            onClick={() => handleCategoryClick('결석')}
            $isclicked={isClickCategory === '결석' ? 'true' : 'false'}
          >
            <img src={Check} alt="none" />
            <span>결석인원</span>
          </S.Item>
          <S.Item
            onClick={() => handleCategoryClick('엑셀업로드')}
            $isclicked={isClickCategory === '엑셀업로드' ? 'true' : 'false'}
          >
            <img src={Check} alt="none" />
            <span>엑셀업로드</span>
          </S.Item>
        </S.MenuItem>
      </S.MenuWrap>
    </S.SidebarWrap>
  );
};

export default Sidebar;
