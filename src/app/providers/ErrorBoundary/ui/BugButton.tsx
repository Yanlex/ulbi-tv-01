import { Button } from "shared/ui/Button/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Компонент для тестирования
const BugButton = () => {
  const [error, setError] = useState(false);
  const onThrow = () => {
    setError(true);
  };
  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrow}>{t("throm error")}</Button>;
};

export default BugButton;
