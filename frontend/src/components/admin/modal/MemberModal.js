import styled from 'styled-components';

const MemberModal = () => {
  return (
    <FullScreen>
      <Container>
        <Title>회원 관리</Title>
        <Content>
          <MemberListContainer></MemberListContainer>
          <ControlButtonContainer>
            <ControlButton />
            <ControlButton />
            <ControlButton />
            <ControlButton />
          </ControlButtonContainer>
        </Content>
      </Container>
    </FullScreen>
  );
};
// 검색기능 넣을건지?

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
  width: 50%;
  height: 50%;
  background-color: white;
`;

const Title = styled.p`
  font-weight: bold;
`;
const Content = styled.div``;

const MemberListContainer = styled.div`
  width: 70%;
  height: 90%;
`;
const ControlButtonContainer = styled.div`
  width: 25%;
  height: 90%;
`;
const ControlButton = styled.button`
  width: 10%;
  height: 10%;
`;
