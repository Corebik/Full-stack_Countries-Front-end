import type { CountryInfo, CountryItem } from '@/types';

export type CountryActions =
   | { type: 'active-country'; payload: CountryInfo | undefined }
   | { type: 'set-countries'; payload: CountryItem[] | undefined }
   | { type: 'remove-country' }
   | { type: 'loading' };

export type CountryState = {
   countries: CountryItem[];
   activeCountry: CountryInfo | null;
   loading: boolean;
};

export const initialState: CountryState = {
   countries: [],
   activeCountry: {} as CountryInfo,
   loading: false,
};

type CountryReducer = (state: CountryState | undefined, action: CountryActions) => CountryState;

export const countryReducer: CountryReducer = (state: CountryState = initialState, action: CountryActions) => {
   switch (action.type) {
      case 'active-country':
         return { ...state, activeCountry: action.payload ?? null, loading: false };

      case 'set-countries':
         return { ...state, countries: action.payload ?? [], loading: false };

      case 'remove-country':
         return { ...state, activeCountry: {} as CountryInfo, loading: false };

      case 'loading':
         return { ...state, loading: true };

      default:
         return state;
   }
};
