import {
  Container,
  ImageContainer,
  OverviewContainer,
  Category,
  Title,
  Overview,
} from './ui';

export const Article = ({
  id,
  title,
  category,
  overview,
  permalink,
  images,
}) => {
  const {
    thumb: {
      mobile: { link, slug },
    },
  } = images;

  return (
    <Container href={permalink.link}>
      <ImageContainer>
        <img
          src={link}
          className='img-fluid'
          width='100'
          height='100'
          alt={slug}
        />
      </ImageContainer>
      <OverviewContainer>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Overview>{overview}</Overview>
      </OverviewContainer>
    </Container>
  );
};
