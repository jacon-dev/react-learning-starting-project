import Header from './Header';
import CoreConcepts from "./CoreConcepts";
import {CORE_CONCEPTS} from "../data";

function App() {
  return (
    <div>
        <Header />
      <main>
          <section id="core-concepts">
              <h2>Core Concepts</h2>
              <ul>
                <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
              </ul>
          </section>
      </main>
    </div>
  );
}

export default App;
