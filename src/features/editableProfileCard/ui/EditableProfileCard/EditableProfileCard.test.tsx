import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { userEvent } from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    age: 45,
    city: 'Astana',
    country: Country.Kazakhstan,
    currency: Currency.EUR,
    firstname: 'TestFirst',
    lastname: 'TestLast',
    id: '7',
    username: 'testUser',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
            isLoading: false,
        },
        user: {
            authData: {
                id: '7',
                username: 'testUser',
            },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
    test('включится режим редактирования', async () => {
        componentRender(<EditableProfileCard id="7" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('отмена несохранённых данных', async () => {
        componentRender(<EditableProfileCard id="7" />, options);
        const firstname = screen.getByTestId('ProfileCard.Firstname');
        const lastname = screen.getByTestId('ProfileCard.Lastname');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(firstname);
        await userEvent.clear(lastname);
        await userEvent.type(firstname, 'TestFirstNew');
        await userEvent.type(lastname, 'TestLastNew');
        expect(firstname).toHaveValue('TestFirstNew');
        expect(lastname).toHaveValue('TestLastNew');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));
        expect(firstname).toHaveValue('TestFirst');
        expect(lastname).toHaveValue('TestLast');
    });

    test('сохранение данных', async () => {
        componentRender(<EditableProfileCard id="7" />, options);
        const firstname = screen.getByTestId('ProfileCard.Firstname');
        const lastname = screen.getByTestId('ProfileCard.Lastname');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(firstname);
        await userEvent.clear(lastname);
        await userEvent.type(firstname, 'TestFirstNew');
        await userEvent.type(lastname, 'TestLastNew');
        expect(firstname).toHaveValue('TestFirstNew');
        expect(lastname).toHaveValue('TestLastNew');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(firstname).toHaveValue('TestFirstNew');
        expect(lastname).toHaveValue('TestLastNew');
    });

    test('проверка ошибок валидации', async () => {
        componentRender(<EditableProfileCard id="7" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        const firstname = screen.getByTestId('ProfileCard.Firstname');
        await userEvent.clear(firstname);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error')).toBeInTheDocument();
    });

    test('запрос отправляется на сервер', async () => {
        const mockPutRequest = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="7" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        const firstname = screen.getByTestId('ProfileCard.Firstname');
        await userEvent.clear(firstname);
        await userEvent.type(firstname, 'TestFirstNew');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutRequest).toHaveBeenCalled();
    });
});
