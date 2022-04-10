import styled from 'styled-components';

const MemberModal = () => {
  return (
    <FullScreen>
      <Container>
        <></>
      </Container>
    </FullScreen>
  );
};

export default MemberModal;

const FullScreen = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
`;
