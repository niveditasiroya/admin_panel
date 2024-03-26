import React, { useState } from "react";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full py-2 text-left focus:outline-none px-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}

export default AccordionItem;
