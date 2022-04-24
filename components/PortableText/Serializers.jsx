/* eslint-disable react/display-name */
import React from 'react';
import Text from '../Text';
import Content from '../Content'
import Columns from '../Columns'
import Image from '../Image'


const serializers = {
  marks: {
    highlight: ({ children }) => (
      <Text className="highlight" as="span">
        {children}
      </Text>
    ),
    h1: ({ children }) => (
      <Text className="highlight" as="span">
        {children}
      </Text>
    ),
    small: ({ children }) => (
      <Text fontSize="1.5rem" as="span">
        {children}
      </Text>
    ),
    apos: ({ children }) => (
      <Text className="apos" as="span">
        {children}
      </Text>
    ),
  },

  types: {
    pageBuilderContent: ({ node }) => <Content node={node} />,
    pageBuilderColumns: ({ node }) => <Columns node={node} />,
    mainImage: ({ node }) => <div></div>,
  },
};

export default serializers;



