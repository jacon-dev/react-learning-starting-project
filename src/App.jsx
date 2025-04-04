import Header from './components/Header/Header.jsx';
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples";

export default function App() {


  return (
    <>
        <Header />
      <main>
          <CoreConcepts />
          <Examples />
      </main>
    </>
  );
}