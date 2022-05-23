import React from "react";
import TreeNodeWrap from "./TreeNodeWrap";

const TreeNode = ({ xmlObject, parentKey }) => {
  return (
    xmlObject &&
    Object.keys(xmlObject).map((key, value) => {
      return (
        <React.Fragment key={key}>
          {key === "#text" ? (
            xmlObject[key]
          ) : (
            <ul className={`text-white ${parentKey ? "" : "pl-8"}`}>
              {typeof xmlObject[key] === "object" ||
              Array.isArray(xmlObject[key]) ? (
                <>
                  {Array.isArray(xmlObject[key]) ? (
                    <TreeNode xmlObject={xmlObject[key]} parentKey={key} />
                  ) : (
                    <li>
                      <TreeNodeWrap
                        propertyName={parentKey ? parentKey : key}
                        attributes={xmlObject[key]}
                      >
                        <TreeNode xmlObject={xmlObject[key]} />
                      </TreeNodeWrap>
                    </li>
                  )}
                </>
              ) : (
                !key.startsWith("@_") &&
                key !== "#text" && (
                  <li>
                    <TreeNodeWrap propertyName={key}>
                      {xmlObject[key]}
                    </TreeNodeWrap>
                  </li>
                )
              )}
            </ul>
          )}
        </React.Fragment>
      );
    })
  );
};

export default TreeNode;
