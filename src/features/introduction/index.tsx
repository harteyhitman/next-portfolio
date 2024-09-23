import styles from "./styles.module.scss";
import { MdOutlineArrowDropDown } from "react-icons/md";
import TextIntro from "./text-intro";

const SelfIntro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.dropdown}>
        <p className={styles.box}></p>
        <MdOutlineArrowDropDown className={styles.drop} />
      </div>
      <TextIntro />
    </div>
  );
};

export default SelfIntro;
