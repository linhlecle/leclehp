import { Flex } from '@chakra-ui/react';
import React, { useEffect, useMemo, useRef, useState } from 'react';

type ScrollingProps = {
  flow?: 'left' | 'right'; // <-, ->
  duration?: number; // in milliseconds
  children: JSX.Element;
};

function InfiniteSlider({ flow = 'left', duration = 20000, children }: ScrollingProps) {
  const [contentWidth, setContentWidth] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null); // item box

  const startAnime = useMemo(() => ({ transform: `translateX(0px)` }), []);
  const endAnime = useMemo(() => ({ transform: `translateX(-${contentWidth}px)` }), [contentWidth]);
  const keyframes = useMemo(() => (flow === 'left' ? [startAnime, endAnime] : [endAnime, startAnime]), [flow, startAnime, endAnime]);
  const options = useMemo(() => ({ duration, iterations: Infinity }), [duration]);

  useEffect(() => {
    const { current } = contentRef;
    if (current) {
      const width = current.getBoundingClientRect().width / 2;
      setContentWidth(width);
      current.style.animationPlayState = 'paused';
      setTimeout(() => {
        current.style.animationPlayState === 'running';
      }, 1000);
    }
  }, [children]);

  useEffect(() => {
    if (!contentWidth) return;
    const { current } = contentRef;
    if (current) {
      current.animate(keyframes, options);
    }
  }, [flow, duration, keyframes, options, contentWidth, contentRef]);

  return (
    <Flex w={'100vw'} h={'100%'} overflow={'hidden'} zIndex={0}>
      <Flex h={'100%'} ref={contentRef}>
        {/* main items */}
        {children}
        {/* shadow items */}
        {children}
      </Flex>
    </Flex>
  );
}

export default React.memo(InfiniteSlider);
