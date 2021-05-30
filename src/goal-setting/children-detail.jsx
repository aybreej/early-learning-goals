import React from 'react';
import { useQuery, gql } from "@apollo/client";

const CHILDREN_NAMES = gql`
    query {
        children {
            name
        }
    }
`;

const ChildrenDetail = (props) => {
    const { loading, error, data } = useQuery(CHILDREN_NAMES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :-(</p>;

    return (
        <div>
            {data.children.map(child => <div>{child.name}</div>)}
        </div>
    );
}

export default ChildrenDetail;