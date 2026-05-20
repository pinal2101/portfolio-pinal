import React, { useEffect, useState } from 'react';

const WORDS = ['MERN developer', 'React developer', 'full-stack developer', 'coder'];

const TypingRole = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [phase, setPhase] = useState('type');

  useEffect(() => {
    const word = WORDS[wordIndex];
    let t;

    if (phase === 'type') {
      if (sub < word.length) {
        t = setTimeout(() => setSub((s) => s + 1), 95);
      } else {
        t = setTimeout(() => setPhase('delete'), 1500);
      }
    } else if (phase === 'delete') {
      if (sub > 0) {
        t = setTimeout(() => setSub((s) => s - 1), 48);
      } else {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setPhase('type');
      }
    }

    return () => clearTimeout(t);
  }, [wordIndex, sub, phase]);

  const display = WORDS[wordIndex].slice(0, sub);

  return (
    <h3 className="typing_txt">
      and i&apos;m a <span className="typing-role-span">{display}</span>
      <span className="typing-cursor" aria-hidden="true">
        |
      </span>
    </h3>
  );
};

export default TypingRole;
