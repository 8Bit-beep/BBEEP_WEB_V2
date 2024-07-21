import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100vw;
  height: 100px;

  background: #323a45;

  display: flex;

  justify-content: space-between;
  align-items: center;

  img {
    width: 120px;

    cursor: pointer;
  }
`;

export const SearchInputWrap = styled.div`
  width: 500px;
  height: 40px;

  background: white;

  display: flex;
  align-items: center;

  img {
    width: 25px;
    height: 25px;

    margin-left: 2%;
  }

  input {
    width: 88%;
    height: 90%;

    border: none;
    padding-left: 2%;

    &:focus {
      outline: none;
    }
  }
`;

export const ProfileWrap = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
  position: relative;

  img {
    width: 20px;
    height: 20px;

    border: none;
    border-radius: 5px;

    position: absolute;
    left: 60%;
    top: 55%;
  }

  div {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 10px;
  }
  h4 {
    font-size: 20px;
    color: #fff;
    font-weight: 600;

    margin: 0;
  }

  h5 {
    font-size: 20px;
    color: #fff;
    font-weight: 400;

    margin: 0;
  }
`;

export const ProfileModal = styled.div`
  width: 13%;
  height: 100px;

  background: #303a46;
  position: absolute;

  left: 87%;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }
`;
