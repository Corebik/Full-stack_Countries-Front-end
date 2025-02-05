import { Link } from 'react-router-dom';

type BordersProps = {
   name: string;
   countryCode: string;
};

export const Borders = ({ name, countryCode }: BordersProps) => {
   return (
      <>
         <Link
            className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-100 transition-colors duration-300 ease-in-out mt-2"
            to={`/${countryCode}/${name}`}
         >
            <h2 className="text-xl md:text-lg font-bold">Country: {name}</h2>
            <p className="text-gray-700 mb-2">Country Code: {countryCode}</p>
         </Link>
      </>
   );
};
