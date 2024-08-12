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
        <img style={{ width: 30, height: 30 }} src={Back} onClick={onClick} />
        {
          cls.map((item, idx) => (
            <div key={idx}>{item.cls}</div>
          ))
        }
      </S.ModalWrapper>
    </S.Wrapper>
  );
};

export default Modal;
