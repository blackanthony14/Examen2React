import React from "react";

const List = ({ heroesName = [] }) => {
    const name = heroesName;


    console.log(name);
    return (
        <div className=''>
            <div className="boxed">
                <ul className="lista">
                    <li className="propiedad">
                        {name}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default List;
