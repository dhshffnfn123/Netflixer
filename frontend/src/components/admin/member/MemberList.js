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
  height: 20%;
  border: solid 1px black;
`;

const IdBox = styled.div``;
const CommentInquiryButton = styled.button``;
const DeleteButton = styled.button``;
