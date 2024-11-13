import { classNames } from 'helpers/classNames/classNames';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import Button from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import DynamicModuleLoader, {
  ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from 'shared/ui/Stack';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  handleSendComment: (text: string) => void;
  className?: string;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = ({
  className,
  handleSendComment,
}) => {
  const { t } = useTranslation('comment', { keyPrefix: 'comment' });
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);

  const handleCommentTextChange = useCallback(
    (value: string): void => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const sendCommentWithClearing = () => {
    handleSendComment(text || '');
    handleCommentTextChange('');
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        justyfy="between"
        align="center"
        className={classNames(cls.AddCommentForm, {}, [className])}
      >
        <Input
          className={cls.Input}
          placeholder={t('Enter the comment text')}
          value={text}
          onChange={handleCommentTextChange}
        />
        <Button onClick={sendCommentWithClearing} type="button">
          {t('Create')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
