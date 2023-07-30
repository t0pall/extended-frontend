import { Meta, StoryObj } from '@storybook/react';
import themeDecorator from 'shared/config/storybook/decorators/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/themeProvider';
import Modal from './Modal';

const meta = {
  title: 'Shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Разнообразный и богатый опыт сложившаяся структура организации требует анализа существующий финансовых и административных условий. Идейные соображения высшего порядка, а также сложившаяся структура организации влечёт за собой интересный процесс внедрения модернизации укрепления демократической системы. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности требует определения и уточнения системы обучения кадров, соответствующей насущным потребностям.',
  },
};

export const PrimaryDark: Story = {
  args: {
    isOpen: true,
    children:
      'Разнообразный и богатый опыт сложившаяся структура организации требует анализа существующий финансовых и административных условий. Идейные соображения высшего порядка, а также сложившаяся структура организации влечёт за собой интересный процесс внедрения модернизации укрепления демократической системы. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности требует определения и уточнения системы обучения кадров, соответствующей насущным потребностям.',
  },
  decorators: [themeDecorator(Theme.DARK)],
};
