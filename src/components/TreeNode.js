import TreeNodeWrap from "./TreeNodeWrap";

const TreeNode = ({ xmlObject, parentKey }) => {
  return (
    xmlObject &&
    Object.keys(xmlObject).map((key, value) => {
      return (
        <>
          {key === "#text" ? (
            xmlObject[key]
          ) : (
            <>
              {typeof xmlObject[key] === "object" ||
              Array.isArray(xmlObject[key]) ? (
                <ul className={`text-white ${parentKey ? "" : "pl-8"} `}>
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
                </ul>
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
            </>
          )}
        </>
      );
    })
  );
};

export default TreeNode;
