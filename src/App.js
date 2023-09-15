import { useEffect, useState } from "react";
import TelevisionFrame from "./components/TelevisionFrame/TelevisionFrame";
import { moveLogo } from "./utilities";
import VhsBox from "./components/VhsBox/VhsBox";
import styles from "./App.module.scss";

const App = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    movingRight: true,
    movingDown: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setPosition(moveLogo(position));
    }, 15);
  }, [position]);

  return (
    <div className={styles.app}>
      <TelevisionFrame>
        <VhsBox style={{ left: position.x, top: position.y }} />
      </TelevisionFrame>
    </div>
  );
};

export default App;
