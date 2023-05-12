import React from 'react';

type Props = {
  children: React.ReactNode;
  className: Record<string, string>;
};

const addClassesToHAST = ({ children, className }: Props) => {
  const addClasses = (node: any) => {
    if (node.tagName && className[node.tagName]) {
      node.properties.className = `${node.properties.className || ''} ${className[node.tagName]}`;
    }
    if (node.children && node.children.length > 0) {
      node.children = node.children.map(addClasses);
    }
    return node;
  };
  const modifiedHAST = addClasses(children);
  return (
    <div dangerouslySetInnerHTML={{ __html: modifiedHAST }} />
  );
};

export default addClassesToHAST;
