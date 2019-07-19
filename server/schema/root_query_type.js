const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString } = graphql;
const ElementType = require('./element_type');
const Element = mongoose.model('element');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    elements: {
      type: new GraphQLList(ElementType),
      resolve() {
        return Element.find({});
      }
    },
    element: {
      type: ElementType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Element.findById(id)
      }
    }
  })
});

module.exports = RootQuery;
