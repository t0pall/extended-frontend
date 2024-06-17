import { classNames } from 'helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleView } from 'entities/Article/model/types/article';
import ListIcon from 'shared/assets/icons/list.svg';
import Tiledicon from 'shared/assets/icons/tiled.svg';
import Icon from 'shared/ui/Icon/Icon';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
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

const ArticleViewSelector: FC<ArticleViewSelectorProps> = ({
  className,
  handleViewChange,
  view,
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
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

export default memo(ArticleViewSelector);
