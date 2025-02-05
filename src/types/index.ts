export type CountryItem = {
   name: string;
   countryCode: string;
};

export type bordersInfo = {
   commonName: string;
   officialName: string;
   countryCode: string;
   region: string;
   borders: string;
};

export type populationInfo = {
   year: number;
   value: number;
};

export type CountryInfo = {
   countryName: string;
   countryCode: string;
   borders: bordersInfo[];
   populationCounts: populationInfo[];
   flag: string;
};
