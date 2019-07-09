import gql from "graphql-tag";

export default gql`
    mutation deleteElement($id: ID){
        deleteElement(id: $id){
            id
        }
    }
`;