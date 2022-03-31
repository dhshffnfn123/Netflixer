import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [];
for (let i = 0; i < 30; i++) {
  data.push({
    reviews: Math.floor(Math.random() * 10),
    day: i,
  });
}

console.log(data);

const Chart = () => {
  return (
    <Container>
      <ResponsiveContainer>
        <LineChart margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <XAxis />
          <YAxis />
          <CartesianGrid />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};
export default Chart;

const Container = styled.div`
  background: ${palette.fontColor};
  margin-top: 1.8rem;
  width: 700px;
  height: 345px;
  @media (max-width: 1024px) {
    width: 350px;
  }
`;
