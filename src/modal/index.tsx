import * as S from "./style";
import Back from "src/assets/Class/Modal/BackButton.svg";

interface Props {
  onClick: any;
}

const Modal = ({ onClick }: Props) => {
  return (
    <S.Wrapper>
      <S.ModalWrapper>
        <img style={{ width: 30, height: 30 }} src={Back} onClick={onClick} />
      </S.ModalWrapper>
    </S.Wrapper>
  );
};

export default Modal;
