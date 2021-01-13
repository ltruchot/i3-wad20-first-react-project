import { not, replace } from "ramda";

const List = ({ items, nb, bool }) => {

    return (
        <ul>
            {[1, 2, 3].map(el => <li>{el}</li>)}
            {[<div></div>, <div></div>]}
        </ul>
    );

};

export default List;

// instruction (statement) <---- ne retourne rien
// expression (expression) <---- retourn qquch
