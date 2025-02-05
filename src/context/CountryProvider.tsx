import { ReactNode, useReducer } from 'react';
import { CountryContext } from './CountryContext';
import { countryReducer, initialState } from './countryReducer';

type CountryProviderProps = {
   children: ReactNode;
};

export const CountryProvider = ({ children }: CountryProviderProps) => {
   const [state, dispatch] = useReducer(countryReducer, initialState);

   return <CountryContext.Provider value={{ state, dispatch }}>{children}</CountryContext.Provider>;
};
