import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Calculator</h1>
      <div className={styles.calculator}>
        <Display />
        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;
