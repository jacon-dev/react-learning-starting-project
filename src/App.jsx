import Header from './components/Header/Header';
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton/TabButton";
import {useState} from 'react'

import {CORE_CONCEPTS} from "./data";

function App() {
    const [selectedTopic, setSelectedTopic] = useState('Please click a button');

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

  return (
    <div>
        <Header />
      <main>
          <section id="core-concepts">
              <h2>Core Concepts</h2>
              <ul>
                  <CoreConcepts {...CORE_CONCEPTS[0]} />
                  <CoreConcepts {...CORE_CONCEPTS[1]} />
                  <CoreConcepts {...CORE_CONCEPTS[2]} />
                  <CoreConcepts {...CORE_CONCEPTS[3]} />
              </ul>
          </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                  <TabButton onSelect={() => handleSelect('components')}>Component</TabButton>
                  <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                  <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                  <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
              </menu>
              {selectedTopic}
          </section>
      </main>
    </div>
  );
}

export default App;
