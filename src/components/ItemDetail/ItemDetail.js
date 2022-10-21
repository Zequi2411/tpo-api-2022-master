import React from 'react'

const ItemDetail = ({ Item }) => {
    return (
        <div className="ItemDetailPadre">
            <div className="ItemDetailHijo">
                <img width={"200px"} src={Item.image} alt={Item.title} />
                <h2>{Item.title}</h2>
                <h3>{Item.price}</h3>
                <h3>{Item.description}</h3>
                <input type="text" placeholder="Telefono"></input>
                <input type="text" placeholder="Mail"></input>
                <input type="text" placeholder="Horario de referencia"></input>
                <input type="text" placeholder="Mensaje"></input>
                <button>Contratar clase</button>
            </div>
        </div>
    )
}

export default ItemDetail
