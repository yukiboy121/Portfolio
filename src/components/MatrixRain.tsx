import { useEffect, useRef } from 'react';

const CHARS = 'アイウエオカキクケコサシスセソ01<>/{}[]$#*+;:=ﾊﾐﾋｰ';

const MatrixRain = ({ opacity = 0.14, className = '' }: { opacity?: number; className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const fontSize = 15;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
    };
    window.addEventListener('resize', handleResize);

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 7, 5, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading char brighter
        if (Math.random() > 0.975) {
          ctx.fillStyle = 'rgba(210, 255, 225, 0.9)';
        } else {
          ctx.fillStyle = `rgba(0, 255, 65, ${0.35 + Math.random() * 0.4})`;
        }
        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.976) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};

export default MatrixRain;
