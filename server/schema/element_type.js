const mongoose = require('mongoose');
const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} = graphql;

const ElementType = new GraphQLObjectType({
  name:  'ElementType',
  fields: () => ({
    id: { type: GraphQLID },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    title: { type: GraphQLString }
  })
});

module.exports = ElementType;
