import styled from 'styled-components';

const MemberReviewList = () => {
  return (
    <Container>
      <VideoId></VideoId>
      <CommentBox></CommentBox>
      <TimeBox></TimeBox>
      <ButtonBox>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonBox>
    </Container>
  );
};
// 회원 선택시 나타날 선택한 회원의 리뷰
export default MemberReviewList;

const Container = styled.div``;

const VideoId = styled.div``;

const CommentBox = styled.div``;

const TimeBox = styled.div``;

const ButtonBox = styled.div``;
const Button = styled.button``;
