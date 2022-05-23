import TreeAttributes from "./TreeNodeAttributes";

const TreeNodeWrap = ({ propertyName, attributes, children }) => {
  return (
    <>
      {propertyName === "#text" ? (
        attributes
      ) : (
        <>
          <span className="text-white">
            {propertyName.startsWith("?") ? "<?" : "<"}
          </span>
          <span className="text-pink-400">
            {propertyName === "?xml" ? "xml" : propertyName}
          </span>
          {attributes && <TreeAttributes xmlNode={attributes} />}
          <span className="text-white">
            {propertyName.startsWith("?") ? "?>" : ">"}
          </span>
          {children}
          {propertyName.startsWith("?") ? (
            ""
          ) : (
            <>
              <span className="text-white">{"</"}</span>
              <span className="text-pink-400">{propertyName}</span>
              <span className="text-white">{">"}</span>
            </>
          )}
        </>
      )}
    </>
  );
};

export default TreeNodeWrap;
