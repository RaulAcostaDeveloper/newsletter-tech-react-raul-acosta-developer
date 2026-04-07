import { useState } from "react";

import styles from "./styles.module.css";
import { isValidEmail } from "./utils/validEmail";
import { postNewsletter } from "./services/newsLetter";
import mailOrange from "./assets/mail_orange.png";
import mailWhite from "./assets/mail_white.png";
import { SuccessModal } from "./successModal";

interface Props {
  apiKey?: string;
  disabled?: boolean;
}

export const NewsletterTechReactRaulAcostaDeveloper = ({
  apiKey,
  disabled,
}: Props) => {
  const [email, setEmail] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [successMessage, setSuccessMessage] = useState<string>();
  const [successCode, setSuccessCode] = useState<string>("fsafas");

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onPost = async (): Promise<void> => {
    // Normalize
    setError("");
    setSuccessMessage("");
    setSuccessCode("");
    setIsLoading(true);
    try {
      const result = await postNewsletter(email, apiKey);
      setSuccessMessage(result.message);
      setSuccessCode(result.coupon_text);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocurrió un error inesperado.");
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      {!disabled && (
        <div className={styles.container}>
          <h2 className={styles.mainTitle}>Subscríbete a nuestro Newsletter</h2>
          <div className={styles.containerInput}>
            <div className={styles.falseInput}>
              <img
                src={mailOrange}
                alt="Mail orange"
                className={styles.inputIcon}
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Ingresa tu dirección de correo electrónico"
              />
            </div>
          </div>
          <div
            className={`${styles.containerButton} ${!isValidEmail(email) || !isChecked ? styles.buttonDissabled : ""}`}
          >
            <button
              onClick={onPost}
              disabled={!isValidEmail(email) || !isChecked}
            >
              Subscribirse
            </button>
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <p>
              Al suscribirte, aceptas recibir información sobre nuestros
              productos y ofertas especiales, podrás anular tu suscripción en
              cualquier momento.
            </p>
          </div>

          {isLoading && (
            <div className={styles.loadingContainer}>
              <p>Loading...</p>
            </div>
          )}

          {error && (
            <div className={styles.errorContainer}>
              <div className={styles.errorMessage}>
                <img
                  src={mailWhite}
                  alt="Mail white"
                  className={styles.inputIcon}
                />
                <p>{error}</p>
              </div>
            </div>
          )}

          {successMessage && (
            <div className={styles.successContainer}>
              <div className={styles.successMessage}>
                <img
                  src={mailWhite}
                  alt="Mail white"
                  className={styles.inputIcon}
                />
                <p>{successMessage}</p>
              </div>
            </div>
          )}

          {successCode && <SuccessModal successCode={successCode} />}
        </div>
      )}
    </>
  );
};
