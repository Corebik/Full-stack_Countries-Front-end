import api from '@/config/axios.config';
import { isAxiosError } from 'axios';
//Types
import { CountryInfo, CountryItem } from '@/types';

export const getContries = async () => {
   try {
      const { data } = await api.get<CountryItem[]>('/countries');
      return data;
   } catch (error) {
      if (isAxiosError(error) && error.response) {
         throw new Error(error.response.data.msg);
      }
   }
};

export const getContry = async ({ countryCode, name }: CountryItem) => {
   try {
      const { data } = await api.get<CountryInfo>(`/countries/${countryCode}/${name}`);
      return data;
   } catch (error) {
      if (isAxiosError(error) && error.response) {
         throw new Error(error.response.data.msg);
      }
   }
};
