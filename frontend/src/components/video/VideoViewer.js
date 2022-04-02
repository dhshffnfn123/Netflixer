import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const VideoViewer = ({ video, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <VideoViewerBlock style={{ color: 'white' }}>
          존재하지 않는 페이지입니다.
        </VideoViewerBlock>
      );
    }
    return (
      <VideoViewerBlock style={{ color: 'red' }}>오류 발생!</VideoViewerBlock>
    );
  }

  if (loading || !video) {
    return null;
  }

  const {
    title,
    release,
    age,
    runtime,
    characters,
    director,
    summary,
    picture,
  } = video;
  return (
    <VideoViewerBlock>
      <VideoPoster style={{ backgroundImage: `url("/img/${picture}.png")` }} />
      <VideoInfo>
        <Title>{title}</Title>
        <Info>
          <span>{release}</span> <span>{age}</span> <span>{runtime}</span>
        </Info>
        <Summary>{summary}</Summary>
        <Director>감독 : {director}</Director>
        <Director>
          주연 :{' '}
          {characters.map((character) => (
            <span key={character} className="character">
              {character}&nbsp;&nbsp;
            </span>
          ))}
        </Director>
        <StillCutText>Still Cut_</StillCutText>
        <StillCut>
          <div
            style={{ backgroundImage: `url("/img/still/${picture}1.jpg")` }}
          />
          <div
            style={{ backgroundImage: `url("/img/still/${picture}2.jpg")` }}
          />
          <div
            style={{ backgroundImage: `url("/img/still/${picture}3.jpg")` }}
          />
        </StillCut>
      </VideoInfo>
    </VideoViewerBlock>
  );
};

export default VideoViewer;

const VideoViewerBlock = styled(Responsive)`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 661px 1fr;
  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 707px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 368px;
    grid-template-rows: 525px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 5rem;
  }
`;
const VideoPoster = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: 1px 1px 10px black;
  width: 550px;
  @media (max-width: 1500px) {
    margin: 0;
    width: 500px;
  }
  @media (max-width: 768px) {
    background-size: contain;
    width: 400px;
    height: 570px;
    margin: auto;
  }
`;
const VideoInfo = styled.div`
  @media (max-width: 1500px) {
    padding-left: 40px;
  }
  @media (max-width: 1024px) {
    padding-left: 40px;
  }
  @media (max-width: 768px) {
    width: 400px;
    padding-left: 0;
    margin: auto;
    margin-top: 20px;
  }
`;
const Title = styled.p`
  color: #f8f9fa;
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  text-shadow: 0px 0px 4px #ced4da;
  padding-bottom: 10px;
  border-bottom: 3px solid #ced4da;

  @media (max-width: 1500px) {
    font-size: 2.2rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
const Info = styled.div`
  height: 30px;
  width: 220px;
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  font-size: 1rem;
  color: #ced4da;
  span {
    text-align: center;
    border-right: 1px solid #3a3a3a;
  }
  span:first-child {
    border-left: 1px solid #3a3a3a;
  }
`;
const Summary = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  height: 100px;
  color: #ced4da;
  font-size: 1.2rem;

  @media (max-width: 1500px) {
    font-size: 1rem;
  }
  @media (max-width: 1024px) {
    margin-bottom: 150px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
const Director = styled.p`
  font-size: 1rem;
  color: #ced4da;
  margin: 0;
  margin-bottom: 5px;
  height: 21px;
`;
const StillCutText = styled.p`
  margin: 0;
  font-size: 2rem;
  margin-top: 190px;
  margin-bottom: 10px;
  color: #ced4da;
  text-shadow: 0 0 5px gray;

  @media (max-width: 1500px) {
    margin-top: 120px;
    margin-bottom: 10px;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    position: relative;
    right: 410px;
    margin-top: 100px;
  }
  @media (max-width: 768px) {
    position: unset;
    margin-top: 30px;
  }
`;
const StillCut = styled.div`
  height: 200px;
  background: transparent;
  display: flex;
  justify-content: space-between;

  div {
    width: 100%;
    background: gray;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 10px black;
  }

  @media (max-width: 1500px) {
    div:nth-child(3) {
      display: none;
    }
  }
  @media (max-width: 1024px) {
    position: relative;
    right: 410px;
    width: 735px;
    div:nth-child(3) {
      display: block;
    }
    div {
      width: 400px;
    }
  }
  @media (max-width: 768px) {
    position: unset;
    width: 400px;
    margin-bottom: 100px;
    background-size: contain;
    div {
      height: 250px;
    }
    div:nth-child(3) {
      display: none;
    }
    div:nth-child(1) {
      display: none;
    }
  }
`;
