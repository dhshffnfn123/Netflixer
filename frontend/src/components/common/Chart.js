import styled from 'styled-components';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
// recharts 꺾은선 그래프 사용 예정
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

const Container = styled.div``;
