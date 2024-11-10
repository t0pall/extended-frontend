import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import ListIcon from 'shared/assets/icons/list.svg';
import Tiledicon from 'shared/assets/icons/tiled.svg';
import Icon from 'shared/ui/Icon/Icon';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleView } from '../../model/types/article';
import cls from './ArticlesViewSelector.module.scss';

interface ArticlesViewSelectorProps {
  className?: string;
  view: ArticleView;
  handleViewChange: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: Tiledicon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

const ArticlesViewSelector: FC<ArticlesViewSelectorProps> = ({
  className,
  handleViewChange,
  view,
}) => {
  useTranslation();

  return (
    <div className={classNames(cls.ArticlesViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          onClick={() => handleViewChange(viewType.view)}
          theme={ButtonTheme.CLEAR}
          type="button"
          className={classNames(
            cls.button,
            { [cls.active]: view === viewType.view },
            [],
          )}
          key={viewType.view}
        >
          <Icon
            className={classNames(
              cls.icon,
              { [cls.active]: view === viewType.view },
              [],
            )}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
};

export default memo(ArticlesViewSelector);
