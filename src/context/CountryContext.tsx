import { CountryActions, CountryState } from '@/context/countryReducer';
import { createContext, Dispatch } from 'react';

type CountryContextProps = {
   state: CountryState;
   dispatch: Dispatch<CountryActions>;
};

export const CountryContext = createContext<CountryContextProps>(null!);
