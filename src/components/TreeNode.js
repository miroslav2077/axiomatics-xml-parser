import TreeAttributes from "./TreeNodeAttributes";
import TreeNodeWrap from './TreeNodeWrap';

const TreeNode = ({xmlObject}) => {
    return (xmlObject && Object.keys(xmlObject).map((key, value) => {
        return (
          <ul className="pl-8">
            {(typeof xmlObject[key] === 'object' || Array.isArray(xmlObject[key])) ?
            <li>
                <TreeNodeWrap propertyName={key}>
                    <TreeAttributes xmlNode={xmlObject[key]} />
                    <TreeNode xmlObject={xmlObject[key]} />
                </TreeNodeWrap>
            </li> : 
            <li>
                <TreeNodeWrap propertyName={key}>
                    {xmlObject[key]}
                </TreeNodeWrap>
            </li>}
          </ul>
        );
    }));
}

export default TreeNode;