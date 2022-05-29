import styled from 'styled-components';

const MemberList = () => {
  return (
    <Container>
      <IdBox></IdBox>
      <CommentInquiryButton></CommentInquiryButton>
      <DeleteButton />
    </Container>
  );
};

export default MemberList;

const Container = styled.div`
  width: 100%;
  height: 40%;
  border: solid 1px black;
  display: grid;
  grid-template-columns: 60% 1fr 1fr;
`;

const IdBox = styled.div`
  border: solid 1px red;
`;
const CommentInquiryButton = styled.button`
  border: black solid 1px;
`;
const DeleteButton = styled.button``;
