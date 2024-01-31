/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useCharacters } from "../../../context/characters";

export interface Props {}

const ErrorNotification: React.FC<Props> = () => {
  const { error } = useCharacters();
  const [showMessage, setShowMessage] = useState(false);
  let timeoutId: NodeJS.Timeout | null = null;

  const handleClose = () => {
    setShowMessage(false);
  };

  useEffect(() => {
    if (error) {
      setShowMessage(true);
      timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, 1000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [error]);

  if (!showMessage) {
    return null;
  }

  return (
    <div
      role="alert"
      className="absolute bg-red-300 bottom-20 right-10 p-4 z-10 rounded-lg pr-10"
    >
      {error?.message}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 p-2 text-sm font-bold"
        aria-label="Close"
      >
        &#x2715;
      </button>
    </div>
  );
};

export default ErrorNotification;
