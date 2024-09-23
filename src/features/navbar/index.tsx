import { navList } from "@/data/data";
import styles from "./styles.module.scss";
import { MdSports } from "react-icons/md";
import SelfIntro from "../introduction";

const NavbarContainer: React.FC = () => {
  return (
    <div>
      <div className={styles.nav_container}>
        <h2>
          <MdSports className={styles.sports} />
          AzeezOyegoke
        </h2>
        <nav>
          {navList.map((items) => (
            <ul key={items.id}>
              <li>
                {" "}
                <span>#</span>
                {items.title}
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavbarContainer;
