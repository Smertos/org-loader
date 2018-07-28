const { parse } = require('orga');

const flattenAST = node => {
    const result = [
        ...node.children,
        ...node.children
            .map(flattenAST)
            .reduce((acc, val) => acc.concat(val), [])
    ];
    
    delete node.parent;
    delete node.children;
    
    return result;
}

module.exports = function(content) {
    const ast = parse(content);
    const flatAST = Array.from(new Set(flattenAST(ast)));
    const sourceNodes = flatAST.filter(
        node => node.type === 'block' && node.name.toLowerCase() === 'src'
    );

    return sourceNodes.reduce((acc, node) => acc += node.value, '');
}
