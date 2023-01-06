import React from 'react';
import { useState } from 'react';
import { GoChevronDown, GoChevronLeft} from 'react-icons/go';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id}>
        <div onClick={() => setExpandedIndex(index)}>
          {item.label}
          {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
        {isExpanded ? <div>{item.content}</div> : null}
      </div>
    );
  });

  return (
    <div>{renderedItems}</div>
  );
}

export default Accordion;