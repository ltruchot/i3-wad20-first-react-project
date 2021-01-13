import "./DivChemicalElement.scss";

function DivChemicalElement ({ el, color, nc, children }) {
    const classes = "hoverable w-1/2 md:w-1/4 lg:w-1/6 font-bold " + color;
    console.log("children", children); // < récuprer ce qu'il y a entre les balises de l'instance
    return (
        <div className={classes}>
            {el} 
            <span> {nc}</span>
        </div>
    );
}

export default DivChemicalElement;
