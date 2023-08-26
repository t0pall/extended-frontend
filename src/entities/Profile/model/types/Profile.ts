import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: string;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  formData?: Profile;
  isLoading: boolean;
  error?: string;
  readOnly: boolean;
}
