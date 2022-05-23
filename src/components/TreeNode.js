import TreeAttributes from "./TreeNodeAttributes";
import TreeNodeWrap from './TreeNodeWrap';

const TreeNode = ({xmlObject}) => {
    return (xmlObject && Object.keys(xmlObject).map((key, value) => {
        return (
          <ul className="text-white pl-8">
            {(typeof xmlObject[key] === 'object' || Array.isArray(xmlObject[key])) ?
            <li>
                <TreeNodeWrap propertyName={key} attributes={xmlObject[key]}>
                    <TreeNode xmlObject={xmlObject[key]} />
                </TreeNodeWrap>
            </li> : 
            (!key.startsWith('@_') && <li>
                <TreeNodeWrap propertyName={key}>
                    {xmlObject[key]}
                </TreeNodeWrap>
            </li>)
            }
          </ul>
        );
    }));
}

export default TreeNode;