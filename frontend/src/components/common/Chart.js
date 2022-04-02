import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [];
for (let i = 0; i < 30; i++) {
  data.push({
    reviews: Math.floor(Math.random() * 10),
    day: i + 1,
  });
}

console.log(data);

const Chart = () => {
  const formatDay = (tick) => {
    return tick + '일';
  };
  const formatTooltip = (day) => {
    return day + '일';
  };

  return (
    <Container>
      <ResponsiveContainer>
        <BarChart
          width="100%"
          height="100%"
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          data={data}
        >
          <Bar dataKey="reviews" fill="#681e1e" />
          <XAxis
            dataKey="day"
            ticks={[1, 5, 10, 15, 20, 25, 30]}
            interval={0}
            tickFormatter={formatDay}
            style={{ fontSize: '12px' }}
          />
          <YAxis ticks={[0, 2, 4, 6, 8, 10, 12]} style={{ fontSize: '12px' }} />
          <CartesianGrid strokeDasharray="4 3" vertical={false} opacity={0.2} />
          <Tooltip
            cursor={{ stroke: '#960000', fill: 'red', fillOpacity: 0.2 }}
            labelFormatter={formatTooltip}
          />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};
export default Chart;

const Container = styled.div`
  background: ${palette.backgroundColor};
  margin-top: 1.8rem;
  width: 700px;
  height: 345px;
  @media (max-width: 1024px) {
    width: 350px;
  }
`;
