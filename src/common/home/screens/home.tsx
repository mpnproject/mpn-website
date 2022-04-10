import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Container,
  Main,
  Footer,
  Title,
  IframeBox,
  Wrapper,
  Card,
  Grid,
  Logo,
} from "~/common/home/screens/home.styles";

// eslint-disable-next-line max-lines-per-function
export const HomePage: React.FC = () => (
    <Container>
      <Main>
        <section>
          <Title>
            Welcome to <span>MPN</span>
          </Title>

          <Grid>
            <Wrapper className="col-sm-12 col-md-6">
              <Card>
                <h2>Niko Ni!!</h2>
                <p>Find some anime to watch.</p>
              </Card>
            </Wrapper>

            <Wrapper className="col-sm-12 col-md-6">
              <Card>
                <h2>Lets play</h2>
                <p>Find some game in steam.</p>
              </Card>
            </Wrapper>

            <Wrapper className="col-sm-12 col-md-6">
              <Card>
                <h2>Discord</h2>
                <p>Join our server here.</p>
              </Card>
            </Wrapper>
          </Grid>
        </section>

        <section>
        <IframeBox
            src="https://discord.com/widget?id=278966962284003328&theme=dark"
            width="350" height="500"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </section>
      </Main>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Logo>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </Logo>
        </a>
      </Footer>
    </Container>
  );
