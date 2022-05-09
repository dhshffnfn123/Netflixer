import styled from 'styled-components';

const MemberModal = () => {
  return (
    <FullScreen>
      <Container>
        <Title>회원 관리</Title>
        <Content>
          <MemberSearchContainer>
            <Input />
            <SearchButton>돋보기 아이콘</SearchButton>
          </MemberSearchContainer>
          <MemberListContainer></MemberListContainer>
          <ControlButtonContainer>
            <ControlButton children={'회원 삭제'} />
            <ControlButton children={'리뷰 조회'} />
          </ControlButtonContainer>
        </Content>
        <ReviewContainer>
          <></>
        </ReviewContainer>
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
  width: 80%;
  height: 80%;
  background-color: #616161;
`;

const Title = styled.p`
  font-weight: bold;
`;

const MemberSearchContainer = styled.div``;
const Input = styled.input``;
const SearchButton = styled.button``;

const Content = styled.div`
  width: 100%;
`;

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

const ReviewContainer = styled.div``;
