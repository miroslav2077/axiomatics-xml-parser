const TreeNodeWrap = ({ propertyName, children }) => {
    return (
        <>
            {"<"}{propertyName}{">"}{children}{"</"}{propertyName}{">"}
        </>
    )
}

export default TreeNodeWrap;