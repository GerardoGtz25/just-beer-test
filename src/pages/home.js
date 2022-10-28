import styled from 'styled-components';
import { Article } from '../components';
import { useArticles } from '../hooks/useArticles';

const GIF =
  'https://cdn.justwineapp.com/assets/layout/loading_animation_beer_dark.gif';

const Gif = styled.img`
  display: block;
  margin: auto;
  width: 50%;
`;

const Title = styled.h2`
  display: inline;
  font-family: Klavika, Helvetica, Arial, sans-serif;
  font-size: 2.2em;
  font-weight: 600;
  letter-spacing: -0.04em;
`;

export const Home = () => {
  const { articles, isLoading } = useArticles();

  console.log(articles);

  return (
    <>
      <div className='row mt-3'>
        <Title>Latest Posts</Title>
      </div>
      {isLoading || articles.length === 0 ? (
        <Gif src={GIF} alt='' />
      ) : (
        <div className='row'>
          {articles.map((article) => (
            <Article {...article} />
          ))}
        </div>
      )}
    </>
  );
};
