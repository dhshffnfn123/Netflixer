import styled from 'styled-components';
import {
  ResponsiveContainer,
  LineChart,
  ReferenceLine,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
} from 'recharts';
// recharts 꺾은선 그래프 사용 예정

const Chart = () => {
  return (
    <Container>
      <ResponsiveContainer>
        <LineChart>
          <Tooltip />ㄴ
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};
export default Chart;

const Container = styled.div``;
