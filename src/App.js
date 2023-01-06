import React from 'react';
import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 1,
      label: 'What is React all about?',
      content: 'React is a front-end JavaScript framework. It is used to build user interfaces. It is maintained by Facebook and a community of individual developers and companies.'
    },
    {
      id: 2,
      label: 'Why use React?',
      content: 'React is a favorite JavaScript library among engineers. It is used by Facebook and Instagram. It is one of the fastest-growing libraries and has a strong foundation and large community behind it.'
    },
    {
      id: 3,
      label: 'How do you use React?',
      content: 'You use React by creating components. Components are JavaScript functions that return HTML.'
    }
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;