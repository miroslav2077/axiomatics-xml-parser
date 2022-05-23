const TreeNode = ({xmlObject}) => {
    return (xmlObject && Object.keys(xmlObject).map((key, value) => {
        return (
          <ul className="pl-8">
            {(typeof xmlObject[key] === 'object' || Array.isArray(xmlObject[key])) ? <li>{"<"}{key}
            {Object.keys(xmlObject[key]).filter((attribute) => attribute.startsWith('@_')).map((attribute, file) => ` ${attribute.replace('@_', '')}="${xmlObject[key][attribute]}"`)}
            {">"}<TreeNode xmlObject={xmlObject[key]} />{"</"}{key}{">"}</li> : <li>{"<"}{key}{">"}{xmlObject[key]}{"</"}{key}{">"}</li>}
          </ul>
        );
    }));
}


export default TreeNode;