import { ComponentType, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<ComponentType<LoginFormProps>>(() => import('./LoginForm'));
