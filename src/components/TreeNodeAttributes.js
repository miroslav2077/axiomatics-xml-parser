import React from "react";

const TreeAttributes = ({ xmlNode }) => {
  return Object.keys(xmlNode)
    .filter((attribute) => attribute.startsWith("@_"))
    .map((attribute) => {
      return (
        <React.Fragment key={attribute}>
          <span className="italic text-green-300">
            &nbsp;{attribute.replace("@_", "")}
          </span>
          <span>=</span>
          <span className="text-yellow-300">"{xmlNode[attribute]}"</span>
        </React.Fragment>
      );
    });
};

export default TreeAttributes;
