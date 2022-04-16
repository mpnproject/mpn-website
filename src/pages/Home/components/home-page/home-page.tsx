import React from "react";
import Image from "next/image";
import {
  Container,
  Main,
  Footer,
  Title,
  IframeBox,
  Wrapper,
  Card,
  Row,
  Logo,
  Space,
} from "~/pages/Home/components/home-page/home-page.styles";


// eslint-disable-next-line max-lines-per-function
export const HomePage: React.FC = () => (
    <Container>
      <Space />
      <Main>
        <section>
          <Title>
            Welcome to <span>MPN</span>
          </Title>

          <Row>
            <Wrapper className="col-sm-12 col-md-6">
              <Card>
                <h2>Boku no Pico</h2>
                <p>Find some anime to watch.</p>
              </Card>
            </Wrapper>

            <Wrapper className="col-sm-12 col-md-6">
              <Card>
                <h2>Lets Play</h2>
                <p>Find some game in steam.</p>
              </Card>
            </Wrapper>

            <Wrapper className="col-sm-12 col-md-6">
              <Card>
                <h2>Monster's Flavors</h2>
                <p>MONSTER ENERGY DRINK.</p>
              </Card>
            </Wrapper>

            <Wrapper className="col-sm-12 col-md-6">
              <Card>
                <h2>Discord</h2>
                <p>Join us in the discord server.</p>
              </Card>
            </Wrapper>
          </Row>
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
