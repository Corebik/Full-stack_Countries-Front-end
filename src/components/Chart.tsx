import { populationInfo } from '@/types';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

type ChartProps = {
   data: populationInfo[];
};

export const ChartSection = (population: ChartProps) => {
   if (population.data === undefined) return <div>No data</div>;

   return (
      <>
         <Line
            data={{
               labels: population.data.map((item) => item.year),
               datasets: [
                  {
                     label: 'Population',
                     data: population.data.map((item) => item.value),
                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
                     borderColor: 'rgba(75, 192, 192, 1)',
                     borderWidth: 2,
                     fill: true,
                     tension: 0.5,
                  },
               ],
            }}
            options={{
               layout: {
                  padding: {
                     left: 10,
                     right: 10,
                  },
               },
            }}
         />
      </>
   );
};
