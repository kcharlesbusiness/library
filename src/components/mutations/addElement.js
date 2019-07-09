import gql from "graphql-tag";

export default gql`
    mutation addElement($title: String){
        addElement(title: $title){
            title
        }
    }
`;