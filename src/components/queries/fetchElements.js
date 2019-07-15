import gql from 'graphql-tag';

export default gql`
    {
        elements {
            id
            slug
            title
        }
    }
`;