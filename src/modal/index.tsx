import { ClassResponseType } from "src/types/class/class.type";
import * as S from "./style";
import Back from "src/assets/Class/Modal/BackButton.svg";

interface Props {
  onClick: any;

  cls: ClassResponseType[];
}

const Modal = ({ onClick, cls }: Props) => {
  return (
    <S.Wrapper>
      <S.ModalWrapper>
        <S.ModalMainWrapper>
          <S.HeaderLineWrapper>
            <img style={{ width: 40, height: 40 }} src={Back} onClick={onClick} />
            <S.ModalTitleWrapper></S.ModalTitleWrapper>
          </S.HeaderLineWrapper>
          <S.ModalListWrapper>
            {cls.map((item, idx) => (
              <S.ListItem key={idx}>{item.cls}</S.ListItem>
            ))}
          </S.ModalListWrapper>
        </S.ModalMainWrapper>
      </S.ModalWrapper>
    </S.Wrapper>
  );
};

export default Modal;
