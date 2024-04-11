"use client"
import { Container } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Dashboard(){
    return (
        <Container>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
            {
              data: [1, 5.5, 2, 8.5, 1.5, 10],
            },
          ]}
          width={500}
          height={300}
        />
        </Container>
      );
    }
    