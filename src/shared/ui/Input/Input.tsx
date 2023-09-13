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
  'value' | 'onChange' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readonly?: boolean;
}

const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [carriagePosition, setCarriagePosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const isCarriage = isFocused && !readonly;

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
    <div
      className={classNames(cls.inputWrapper, { [cls.readonly]: readonly }, [
        className,
      ])}
    >
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
          readonly={readonly}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
        {isCarriage && (
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
