import { FC, useEffect, useState } from 'react';

// Компонент для тестирования
const BugButton: FC = () => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  const throwError = () => {
    setIsError(true);
  };

  // eslint-disable-next-line i18next/no-literal-string
  return <button type="button" onClick={throwError}>Error</button>;
};

export default BugButton;
