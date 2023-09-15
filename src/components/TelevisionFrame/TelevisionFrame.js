import styles from "./TelevisionFrame.module.scss";

const TelevisionFrame = ({ children }) => {
  const speakerGrille = [];
  for (let x = 0; x < 100; x++) {
    speakerGrille.push(<span className={styles.speakerGrilleBar}></span>);
  }

  return (
    <span>
      <TelevisionAntenna />
      <div className={styles.televisionWood}>
        <div className={styles.televisionWrapperPanelOuter}>
          <div className={styles.televisionWrapperPanelInner}>
            <div className={styles.televisionScreen}>{children}</div>
          </div>
        </div>
        <div className={styles.televisionWrapperPanelControlWrapper}>
          <div className={styles.televisionControl}>
            <DialBox withDial />
            <DialBox />
            <div className={styles.buttonWrapper}>
              <TvButton />
              <TvButton />
            </div>
            {speakerGrille}
          </div>
        </div>
      </div>
      <TelevisionLegs />
    </span>
  );
};

export default TelevisionFrame;

const TelevisionAntenna = () => {
  return (
    <div className={styles.tvAntennaWrapper}>
      <span /> <span />
      <span className={`${styles.tvAntenna} ${styles.left}`} />
      <span className={`${styles.tvAntenna} ${styles.right}`} />
      <span /> <span />
    </div>
  );
};

const TelevisionLegs = () => {
  return (
    <div className={styles.tvLegWrapper}>
      <span className={`${styles.tvLeg} ${styles.left}`} />
      <span className={`${styles.tvLeg} ${styles.right}`} />
    </div>
  );
};

const DialBox = ({ withDial }) => {
  return (
    <span className={styles.dialBox}>
      {withDial && (
        <span className={styles.dialOuter}>
          <span className={styles.dialBar} />
          <span className={styles.dialInner} />
        </span>
      )}
    </span>
  );
};

const TvButton = () => {
  return (
    <span className={styles.buttonOuter}>
      <span className={styles.buttonInner} />
    </span>
  );
};
