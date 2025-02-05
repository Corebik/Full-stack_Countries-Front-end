import { Link } from 'react-router-dom';

type CountriesItemProps = {
   name: string;
   countryCode: string;
};

export const CountriesItem = ({ name, countryCode }: CountriesItemProps) => {
   return (
      <>
         <Link
            className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-100 transition-colors duration-300 ease-in-out"
            to={`/${countryCode}/${name}`}
         >
            <h2 className="text-xl md:text-2xl font-bold mb-1">Country: {name}</h2>
            <p className="text-gray-700 mb-2">Country Code: {countryCode}</p>
         </Link>
      </>
   );
};
