import styles from "./successModal.module.css";
import mailWhite from "./assets/success.png";
import copy from "./assets/copy.png";

interface Props {
  successCode: string;
  closeModal: () => void;
}

export const SuccessModal = ({ successCode, closeModal }: Props) => {
  const copySuccessCode = async () => {
    try {
      await navigator.clipboard.writeText(successCode);
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };

  //   Cerrar y copiar
  const handleClose = () => {
    copySuccessCode();
    closeModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.insideModal}>
        <div className={styles.header}>
          <h3>¡Gracias por subscribirte!</h3>
          <button onClick={handleClose} title="Cerrar y copiar código">
            <p>×</p>
          </button>
        </div>
        <div className={styles.middle}>
          <div className={styles.successImgContainer}>
            <img src={mailWhite} alt="Success" />
          </div>
          <p>Te damos la bienvenida a nuestra comunidad.</p>
          <p>
            Como agradecimiento, disfruta de un <b>15%</b> al contratar nuestros{" "}
            <b>Planes Hosting y Reseller.</b>
          </p>
          <p className={styles.padding}>
            <b>¡Usa el código a continuación y aprovéchalo ya!</b>
          </p>
          <div className={styles.padding + " " + styles.center}>
            <div className={styles.containerSuccessCode}>
              <p className={styles.code}>{successCode}</p>
              {/* Solo copiar, no cerrar */}
              <button onClick={copySuccessCode} title="Cerrar y copiar código">
                <img src={copy} alt="Copy" /> COPIAR
              </button>
            </div>
          </div>
          <div className={styles.padding + " " + styles.center}>
            <button
              onClick={handleClose}
              title="Cerrar y copiar código"
              className={styles.accButton}
            >
              Aceptar
            </button>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            * El código de descuento es válido al contratar Planes Hosting:
            cPanel, DirectAdmin y Planes Reseller por 1 año.
          </p>
          <p>* El código es válido por un periodo de 30 días.</p>
        </div>
      </div>
    </div>
  );
};
