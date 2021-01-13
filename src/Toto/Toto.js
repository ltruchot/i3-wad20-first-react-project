// import "./Toto.scss";
const Toto =  (props) => {
    const str = "yoyoyoyo";
    console.log(props.bool, true, props.nb + 1);
    return (
        <>
            <div>
                <p>
                    <button title={str}>toto {str}</button>
                </p>
            </div>
            <div>

            </div>
        </>
    );
}

export default Toto;

