import React from "react";
import { Guide, Step } from "../src";
import "tether-shepherd/dist/css/shepherd-theme-dark.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  background: papayawhip;
`;

export default () => (
  <Guide theme="shepherd-theme-dark">
    <Container>
      <Step
        order={1}
        title="Welcome"
        text="Check this div, it has important content"
        position="bottom"
        show
      />
    </Container>
    <Container>
      <Step
        order={2}
        title="Next Step"
        text="Check this div, it has important  content too"
        position="top"
      />
    </Container>
  </Guide>
);
