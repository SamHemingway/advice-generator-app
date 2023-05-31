import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";

export default function Divider({ ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <Line />
      <QuoteMarkContainer>
        <QuoteMark />
        <QuoteMark />
      </QuoteMarkContainer>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  inline-size: 100%;
  position: relative;
  margin-block: 12px;
`;

const Line = styled.hr`
  border: 0.5px solid var(--colour-mono-400);
`;

const QuoteMarkContainer = styled.div`
  position: absolute;
  top: -8px;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-inline: auto;
  left: 0;
  right: 0;
  background: var(--colour-mono-200);
  inline-size: 3.25rem;
`;

const QuoteMark = styled.div`
  inline-size: 0.375rem;
  block-size: 1rem;
  background: var(--colour-mono-700);
  border-radius: 3px;
`;
