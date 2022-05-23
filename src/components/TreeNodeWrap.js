import TreeAttributes from "./TreeNodeAttributes";

const TreeNodeWrap = ({ propertyName, attributes, children }) => {
    return (
        <>
            <span className="text-white">{"<"}</span><span className="text-pink-500">{propertyName}</span>
            {attributes && <TreeAttributes xmlNode={attributes} />}
            <span className="text-white">{">"}</span>{children}<span className="text-white">{"</"}</span><span className="text-pink-500">{propertyName}</span><span className="text-white">{">"}</span>
        </>
    )
}

export default TreeNodeWrap;