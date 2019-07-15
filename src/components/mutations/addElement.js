import gql from "graphql-tag";

export default gql`
    mutation addElement($title: String, $slug: String){
        addElement(title: $title, slug: $slug){
            title
            slug
        }
    }
`;