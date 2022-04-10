import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
  font-family: Roboto;
  background-color: #222222;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  color: #fff;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:active,
  a:focus,
  a:houver {
    text-decoration: underline;
  }

  span {
    color: green;
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  line-height: 1.15;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:active,
  a:focus,
  a:houver {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`;

export const Grid = styled.div.attrs({
  className: "row",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 15px 0 15px 0;

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`;

export const Card = styled.div.attrs({
  className: "card",
})`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  a:houver,
  a:focus,
  a:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;

export const IframeBox = styled.iframe``;

export const Wrapper = styled.div``;
