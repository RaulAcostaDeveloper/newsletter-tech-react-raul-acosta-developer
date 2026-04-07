import { useState } from "react";

import styles from "./styles.module.css";
import { isValidEmail } from "./utils/validEmail";
import { postNewsletter } from "./services/newsLetter";

interface Props {
  apiKey?: string;
  disabled?: boolean;
}

export const NewsletterTechReactRaulAcostaDeveloper = ({
  // apiKey,
  disabled,
}: Props) => {
  const [email, setEmail] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // const [success, setSuccess] = useState<string>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onPost = async (): Promise<void> => {
    try {
      setError("");
      setIsLoading(true);
      const result = await postNewsletter(email);
      // setSuccess(result.message);
      console.log("result ", result); // TO DO

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
                src="mail_orange.png"
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
                  src="mail_white.png"
                  alt="Mail white"
                  className={styles.inputIcon}
                />
                <p>{error}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
