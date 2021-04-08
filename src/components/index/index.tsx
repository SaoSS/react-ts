import React from "react";
interface Iprops {
    props: React.FC,
    history
}
const Dom:React.FC<Iprops> = ({
    props,
    history
}) => {
    const link = () => {
        history.push("/ClassDom")
    }
    return (
        <div>
            <span>前往dom2</span>
        </div>
    )
}

export default Dom;

