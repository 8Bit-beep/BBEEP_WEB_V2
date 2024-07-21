import React from "react";
import * as S from "../style";
import logout from "src/assets/logout.svg";

interface EmailProps {
  email: string;
}

const ProfileModal = ({ email }: EmailProps) => {
  return (
    <S.ProfileModal>
      <span>{email}</span>
      <span style={{ display: "flex", justifyContent: "space-evenly" }}>
        <img src={logout} />
        <span style={{ color: "#FF3E3E", fontSize: "16px" }}>로그아웃</span>
      </span>
    </S.ProfileModal>
  );
};

export default ProfileModal;
