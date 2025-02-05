/* eslint-disable react-hooks/exhaustive-deps */
import { Borders, ChartSection, Loader } from '@/components';
import { useGetCountries } from '@/hooks';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const Country = () => {
   const params = useParams();
   const countryCode = params.countryCode;
   const { state, gettingCountry } = useGetCountries();

   const activeCountry = useMemo(() => {
      return state.activeCountry;
   }, [countryCode]);

   useEffect(() => {
      gettingCountry({ countryCode: params.countryCode!, name: params.countryName! });
   }, [activeCountry]);

   if (state.loading) return <Loader />;

   if (Object.keys(state.activeCountry ?? {}).length === 0)
      return <div className="text-3xl font-bold text-center mt-4">Country not found</div>;

   if (state.activeCountry)
      return (
         <>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16 gap-8">
               <div className="w-[350px] md:w-1/2">
                  <img
                     src={state.activeCountry.flag}
                     alt={state.activeCountry.countryName}
                     className="rounded-lg shadow-md"
                  />
               </div>
               <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center">
                  <h1 className="text-4xl font-bold mb-2">{state.activeCountry.countryName}</h1>
                  <h2 className="text-2xl text-gray-400 mb-4 text-gray-600">
                     <span className="font-bold">Country Code:</span> {state.activeCountry.countryCode}
                  </h2>
                  <h2 className="text-2xl text-gray-400 mb-2 text-gray-600">
                     <span className="font-bold">Borders:</span>
                  </h2>
                  <div className="flex flex-row flex-wrap justify-center gap-4">
                     {state.activeCountry?.borders?.map((border) => (
                        <Borders key={border.commonName} name={border.commonName} countryCode={border.countryCode} />
                     ))}

                     {state.activeCountry?.borders?.length === 0 && (
                        <p className="text-2xl text-gray-400  text-gray-600">No borders</p>
                     )}
                  </div>
               </div>
            </div>
            <ChartSection data={state.activeCountry.populationCounts} />
         </>
      );
};
