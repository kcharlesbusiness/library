const mongoose = require('mongoose');
const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const ElementType = new GraphQLObjectType({
  name:  'ElementType',
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    title: { type: GraphQLString }
  })
});

module.exports = ElementType;
