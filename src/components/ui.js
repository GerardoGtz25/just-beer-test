import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #272a2c;
  height: auto;
  padding: 3px;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 150px;
  @media (min-width: 768px) {
    max-width: 180px;
  }
`;

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ActionButtons = styled.div`
  width: 80px;
  color: #6fbdff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SecondaryNavBar = styled.div`
  width: 100%;
  background: #fdd603;
  border-bottom: 3px solid #ac8c1c;
  height: 40px;
`;

export const Container = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-height: 112px;
  position: relative;
  overflow: hidden;
  padding-bottom: 12px;
  border-bottom: 1px solid #e7eaec;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  width: 20%;
`;

export const OverviewContainer = styled.div`
  width: 80%;
  align-items: start;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0, #fff 100%);
  z-index: 1;
`;

export const Category = styled.span`
  color: #6fbdff;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-size: 1.375em;
  line-height: 1;
  margin-bottom: 0.15em;
`;

export const Overview = styled.p`
  color: #1c1c1c;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.2;
  word-break: break-word;
  word-wrap: break-word;
`;
