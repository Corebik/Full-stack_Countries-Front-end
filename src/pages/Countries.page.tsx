/* eslint-disable react-hooks/exhaustive-deps */
import { CountriesItem } from '@/components/CountriesItem';
import { Loader } from '@/components/Loader';
import { useGetCountries } from '@/hooks/useGetContries';
import { useEffect } from 'react';

export const Countries = () => {
   const { gettingCountries, state, cleanActiveCountry } = useGetCountries();

   useEffect(() => {
      cleanActiveCountry();

      if (state.countries.length === 0) {
         gettingCountries();
      }
   }, []);

   if (state.loading) return <Loader />;
   if (state.countries.length === 0) return <div>No countries found</div>;

   return (
      <>
         <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Available Countries</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
               {state.countries.map((country) => (
                  <CountriesItem key={country.name} name={country.name} countryCode={country.countryCode} />
               ))}
            </div>
         </div>
      </>
   );
};
