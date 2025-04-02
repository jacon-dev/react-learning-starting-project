import Header from './Header';
import MainGoal from './MainGoal';
import CoreConcepts from "./CoreConcepts";
import componentsImage from '../assets/components.png';

function App() {
  return (
    <div>
        <Header />
      <main>
          <section id="core-concepts">
              <h2>Core Concepts</h2>
              <ul>
                <CoreConcepts title="Components" description="The core UI building block." image={componentsImage} />
              </ul>
          </section>
      </main>
    </div>
  );
}

export default App;
