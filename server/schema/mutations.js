const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const ElementType = require('./element_type');
const Element = mongoose.model('element');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addElement: {
      type: ElementType,
      args: {
        title: { type: GraphQLString },
        slug: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parentValue, { title, description, slug }) {
        return (new Element({ title, description, slug })).save()
      }
    },
    deleteElement: {
      type: ElementType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Element.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
