import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const SCRAMBLE = '!<>-_\\/[]{}=+*^?#01$%&';

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
  glitchOnHover?: boolean;
}

/** Scramble-decode text effect. Resolves random glyphs into the target string. */
const GlitchText = ({ text, className = '', delay = 0, glitchOnHover = true }: GlitchTextProps) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [output, setOutput] = useState('');
  const ran = useRef(false);

  useEffect(() => {
    if (!inView || ran.current) return;
    ran.current = true;

    let frame = 0;
    let raf = 0;
    const queue = text.split('').map((ch, i) => ({
      ch,
      start: i * 2 + delay * 2,
      end: i * 2 + 12 + delay * 2,
    }));

    const update = () => {
      let s = '';
      let done = true;
      for (const q of queue) {
        if (frame >= q.end) {
          s += q.ch;
        } else if (frame >= q.start) {
          s += q.ch === ' ' ? ' ' : SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)];
          done = false;
        } else {
          s += '\u00A0';
          done = false;
        }
      }
      setOutput(s);
      if (!done) {
        frame++;
        raf = requestAnimationFrame(update);
      } else {
        setOutput(text);
      }
    };
    update();
    return () => cancelAnimationFrame(raf);
  }, [inView, text, delay]);

  return (
    <span
      ref={ref}
      className={`${className} ${glitchOnHover ? 'glitch' : ''}`}
      data-text={glitchOnHover ? text : undefined}
    >
      {output || '\u00A0'}
    </span>
  );
};

export default GlitchText;
