const TreeAttributes = ({xmlNode}) => {
    return (
        Object.keys(xmlNode).filter((attribute) => attribute.startsWith('@_')).map((attribute) => ` ${attribute.replace('@_', '')}="${xmlNode[attribute]}"`)
    );
}

export default TreeAttributes;