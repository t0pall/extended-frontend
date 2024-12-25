export type UserRole = 'ADMIN' | 'USER' | 'GUEST' | 'MANAGER';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
