import modalCSS from "./modal.module.css";
export const Modal = ({ children, onModalClose }) => {
  const onClose = () => {
    if (typeof onModalClose === "function") {
      onModalClose();
    }
  };
  return (
    <div className={modalCSS.modalWrapper} onClick={onClose}>
      <div
        className={modalCSS.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
