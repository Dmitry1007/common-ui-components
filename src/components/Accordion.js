import React from 'react';
import { useState } from 'react';
import { GoChevronDown, GoChevronLeft} from 'react-icons/go';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={isExpanded ? () => setExpandedIndex(-1) : () => setExpandedIndex(index)}
        >
          {item.label}
          <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
        </div>
        {isExpanded ? <div className="border-b p-5">{item.content}</div> : null}
      </div>
    );
  });

  return (
    <div className="border-x border-t rounded">{renderedItems}</div>
  );
}

export default Accordion;