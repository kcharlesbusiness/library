import gql from 'graphql-tag';

export default gql`
    query element($id: ID!){
        element(id: $id){
            id
            slug
            title
            description
        }
    }
`;