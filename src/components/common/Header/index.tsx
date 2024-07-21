import React from "react";
import * as S from "./style";
import BbeepLogo from "src/assets/BbeepLogo.svg";
import SearchIcon from "src/assets/SearchIcon.svg";
import useHeader from "src/hooks/common/useHeader";
import Dropdown from "src/assets/Dropdown.svg";
import ProfileModal from "./modal";

const Header = () => {
  const { ...header } = useHeader();
  const profileInfo = header.useGetProfileInfo();
  return (
    <>
      <S.HeaderWrap>
        <div style={{ display: "flex", justifyContent: "space-around", width: "50%" }}>
          <img src={BbeepLogo} alt="로고" />
          <S.SearchInputWrap>
            <img src={SearchIcon} alt="돋보기" />
            <input type="text" value={header.keyword} onChange={header.handleKeyword} />
          </S.SearchInputWrap>
        </div>
        {profileInfo! !== undefined && profileInfo! !== null ? (
          <S.ProfileWrap>
            <div>
              <h4>{profileInfo?.name}</h4>
              <h5>{profileInfo?.department}</h5>
              <img src={Dropdown} onClick={header.handleClicked} />
            </div>
          </S.ProfileWrap>
        ) : (
          <S.ProfileWrap>
            <div>
              <h4>알수없음</h4>
              <h5>로그아웃</h5>
              <img src={Dropdown} onClick={header.handleClicked} />
            </div>
          </S.ProfileWrap>
        )}
      </S.HeaderWrap>
      {header.isClicked && <ProfileModal email={profileInfo?.email!} />}
    </>
  );
};

export default Header;
