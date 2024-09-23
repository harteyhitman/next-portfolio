import SelfIntro from '../introduction'
import NavbarContainer from '../navbar'
import styles from './styles.module.scss'
const Main = () => {
  return (
    <div className={styles.main_cont}>
     <NavbarContainer />
     <SelfIntro />
    </div>
  )
}

export default Main