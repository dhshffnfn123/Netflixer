import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';

const VideoListBlock = styled(Responsive)`
  .videosBox {
    margin-top: 3rem;
    background: transparent;
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
`;

const VideoItemBlock = styled.div`
  background: #3e3e3e;
  margin-bottom: 100px;
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  box-shadow: black 0 0 10px;
  width: 320px;
  height: 530px;

  .box > * {
    padding-left: 10px;
  }
  @media (max-width: 1500px) {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
  @media (max-width: 1024px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 520px;
    height: 300px;
    display: grid;
    grid-template-columns: 210px 1fr;
  }
`;

const PosterBox = styled.div`
  width: 100%;
  height: 456.5px;
  background-repeat: no-repeat;
  background-size: contain;
  border-right: 1px solid black;

  @media (max-width: 768px) {
    width: 210px;
    height: 300px;
  }
`;

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: 500;
  color: #b9b9b9;
  padding-top: 5px;

  @media (max-width: 768px) {
  }
`;

const Summary = styled.div`
  color: #b9b9b9;
  padding-top: 25px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const VideoItem = ({ video }) => {
  const { title, tags, picture, summary, _id } = video;
  return (
    <VideoItemBlock>
      <PosterBox style={{ backgroundImage: `url("/img/${picture}.png")` }} />
      <div className="box">
        <Title>
          <Link to={`/@${_id}`}>{title}</Link>
        </Title>
        <Tags tags={tags} />
        <Summary>{summary}</Summary>
      </div>
    </VideoItemBlock>
  );
};

const VideoList = ({ videos, loading, error }) => {
  if (error) {
    return <VideoListBlock>에러가 발생했습니다.</VideoListBlock>;
  }
  return (
    <VideoListBlock>
      {!loading && videos && (
        <div className="videosBox">
          {videos.map((video) => (
            <VideoItem video={video} key={video._id} />
          ))}
        </div>
      )}
    </VideoListBlock>
  );
};

export default VideoList;
