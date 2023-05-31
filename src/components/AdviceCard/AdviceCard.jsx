import React from "react";
import styled from "styled-components/macro";
import Divider from "../Divider/Divider";
import { mediaQueries } from "../../assets/constants";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function AdviceCard() {
  const [advice, setAdvice] = React.useState({});
  const [status, setStatus] = React.useState("idle");

  const ENDPOINT = "https://api.adviceslip.com/advice";

  async function fetcher(url) {
    setStatus("loading");
    const delay = new Promise((resolve) => setTimeout(resolve, 2000));
    const [response] = await Promise.all([fetch(url), delay]);
    const data = await response.json();

    setStatus("idle");
    return data;
  }

  const { data, error } = useSWR(ENDPOINT, fetcher, {
    revalidateOnFocus: false,
  });

  const isLoading = status === "loading";

  React.useEffect(() => {
    if (data) {
      setAdvice(data);
    }
  }, [data]);

  async function getNewQuote(event) {
    event.preventDefault();
    const newQuote = await fetcher(ENDPOINT);
    setAdvice(newQuote);
  }

  const fade = {
    start: {
      opacity: 0,
      transition: { delay: 0.5, duration: 0.5 },
    },
    end: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const pop = {
    start: { scale: 0, opacity: 0 },
    end: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { delay: 0.5, duration: 0.5, type: "spring" },
  };

  return (
    <Wrapper
      variants={fade}
      initial="start"
      animate="end"
      layout
    >
      {isLoading ? (
        <>
          <Lead
            variants={fade}
            initial="start"
            animate="end"
          >
            Ready for inspiration?
          </Lead>
          <LoadingSpinner
            variants={fade}
            initial="start"
            animate="end"
          />
        </>
      ) : (
        <>
          <Lead
            variants={fade}
            initial="start"
            animate="end"
          >
            Advice #{advice.slip?.id}
          </Lead>
          <Quote
            variants={fade}
            initial="start"
            animate="end"
          >
            {advice.slip?.advice}
          </Quote>
        </>
      )}
      {isLoading ? null : (
        <AnimatePresence>
          <Divider
            variants={pop}
            initial="start"
            animate="end"
          />
          <Reload
            onClick={getNewQuote}
            variants={pop}
            initial="start"
            animate="end"
          >
            <img src="../../src/assets/icon-dice.svg" />
          </Reload>
        </AnimatePresence>
      )}
    </Wrapper>
  );
}

const { tablet } = mediaQueries;

const Wrapper = styled(motion.div)`
  color: var(--colour-mono-700);
  background: var(--colour-mono-200);
  max-inline-size: 33.75rem;
  box-shadow: var(--shadow-main);
  border-radius: var(--border-m);
  padding: var(--size-m);
  padding-block-end: var(--size-xxl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-m);
  position: relative;

  ${tablet} {
    padding: var(--size-xl);
    padding-block-end: var(--size-xxl);
  }
`;

const Lead = styled(motion.p)`
  color: var(--colour-primary-700);
  font-size: var(--font-size-s);
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.21607125rem;
  text-align: center;

  ${tablet} {
    font-size: var(--font-size-desktop-s);
  }
`;

const Quote = styled(motion.blockquote)`
  font-size: var(--font-size-m);
  text-align: center;
  line-height: 38px;
  font-weight: var(--font-weight-bold);

  ${tablet} {
    font-size: var(--font-size-desktop-m);
  }
`;

const Reload = styled(motion.button)`
  position: absolute;
  bottom: -2rem;
  inline-size: 4rem;
  block-size: 4rem;
  background: var(--colour-primary-700);
  border: none;
  border-radius: 50%;
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: var(--shadow-glow);
  }
`;
