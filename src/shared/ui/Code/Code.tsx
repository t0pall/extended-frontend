import { classNames } from 'helpers/classNames/classNames';
import { FC, memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-icon.svg';
import cls from './Code.module.scss';
import Button, { ButtonTheme } from '../Button/Button';

interface CodeProps {
  text: string;
  className?: string;
}

const Code: FC<CodeProps> = ({ text, className }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        onClick={onCopy}
        type="button"
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
};

export default memo(Code);
