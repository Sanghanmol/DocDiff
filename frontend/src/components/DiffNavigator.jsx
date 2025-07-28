import React, { useState } from "react";

export default function DiffNavigator({ changes, onJump }) {
  const [index, setIndex] = useState(0);

  const goNext = () => {
    if (index < changes.length - 1) {
      setIndex(index + 1);
      onJump(changes[index + 1].row);
    }
  };

  const goPrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      onJump(changes[index - 1].row);
    }
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <button onClick={goPrev} disabled={index === 0}>⬅ Prev</button>
      <span style={{ margin: "0 10px" }}>
        {index + 1} / {changes.length}
      </span>
      <button onClick={goNext} disabled={index === changes.length - 1}>Next ➡</button>
    </div>
  );
}
