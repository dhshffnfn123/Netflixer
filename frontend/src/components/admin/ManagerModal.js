import styled from 'styled-components';

const ManageModal = () => {
  return (
    <FullScreen>
      <Container></Container>
    </FullScreen>
  );
};

export default ManageModal;

const FullScreen = styled.div`
  width: 100%;
  height: 100%;
  background: #333333;
`;
const Container = styled.div`
  width: 500px;
  height: 500px;
  background: white;
`;
