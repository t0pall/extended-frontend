import { TMods, classNames } from 'helpers/classNames/classNames';
import { CSSProperties, FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Avatar.module.scss';

interface AvatarProps {
  src?: string;
  size?: number;
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ src, size, className }) => {
  const mods: TMods = {};
  const { t } = useTranslation();
  const style: CSSProperties = useMemo(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  return (
    <img
      src={
        src
        // eslint-disable-next-line max-len
        || 'https://w7.pngwing.com/pngs/845/519/png-transparent-computer-icons-avatar-avatar-heroes-logo-fictional-character.png'
      }
      style={style}
      className={classNames(cls.avatar, mods, [className])}
      alt={t('Avatar')}
    />
  );
};

export default Avatar;
