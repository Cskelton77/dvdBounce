// Image by <a href="https://www.freepik.com/free-vector/flat-design-vhs-cover-template_33597779.htm#query=retro%20vhs&position=9&from_view=keyword&track=ais">Freepik</a>
import vhs from "./vhs.jpg";
import styles from "./VhsBox.module.scss";

const VhsBox = ({ style }) => {
  return <img src={vhs} className={styles.vhsBox} style={style} alt="" />;
};

export default VhsBox;
