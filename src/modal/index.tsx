import { ClassResponseType } from "src/types/class/class.type";
import * as S from "./style";
import Back from "src/assets/Class/Modal/BackButton.svg";
import { Code } from "src/pages/class/data";

interface Props {
  onClick: (itme: string) => void;

  cls: ClassResponseType[];
  title: string[];
}

const Modal = ({ onClick, cls, title }: Props) => {
  return (
    <S.Wrapper>
      <S.ModalWrapper>
        <S.ModalMainWrapper>
          <S.HeaderLineWrapper>
            <img style={{ width: 40, height: 40 }} src={Back} onClick={() => onClick("back")} />
            <S.ModalTitleWrapper></S.ModalTitleWrapper>
          </S.HeaderLineWrapper>
          <S.ModalListWrapper>
            {cls.map((item) => (
              <S.ListItem>
                {item.cls} 학년 {item.grade} 반 {item.num} 번 {item.name}
              </S.ListItem>
            ))}
          </S.ModalListWrapper>
        </S.ModalMainWrapper>
      </S.ModalWrapper>
    </S.Wrapper>
  );
};

export default Modal;
