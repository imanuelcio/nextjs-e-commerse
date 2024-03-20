import { useEffect, useRef } from "react";
import style from "./Modal.module.scss";

type PropsTypes = {
  children: React.ReactNode;
  onClose: any;
};

const Modal = (props: PropsTypes) => {
  const { children, onClose } = props;

  const ref: any = useRef();
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className={style.modal}>
      <div className={style.modal_main} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
