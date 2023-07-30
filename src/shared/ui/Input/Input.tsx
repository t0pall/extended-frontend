import { classNames } from 'helpers/classNames/classNames';
import {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [carriagePosition, setCarriagePosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>();

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = (e: any) => {
    setCarriagePosition(e?.target?.selectionStart);
  };

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e.target.value);
    setCarriagePosition(e.target.value.length);
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
          &nbsp;
        </div>
      )}
      <div className={cls.carriageWrapper}>
        <input
          className={cls.input}
          type={type}
          ref={inputRef}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          onChange={onChangeHandler}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
        {isFocused && (
          <span
            className={cls.carriage}
            style={{ left: `${carriagePosition * 8.8}px` }}
          />
        )}
      </div>
    </div>
  );
});

export default Input;
