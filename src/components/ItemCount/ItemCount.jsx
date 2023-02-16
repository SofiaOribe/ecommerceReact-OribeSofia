import React, { useState } from 'react';


const ItemCount = ({ValInicial, stock, onAdd}) => {
    const [contador, setContador] = useState(ValInicial) 

    const sumar = () => contador < stock && setContador(contador + 1)
    const restar = () => contador > ValInicial && setContador(contador - 1)

    return (
        <div className='itemCount'>
            <section className='btnCount'>
                <button className="btnC-resta" onClick={()=> restar()}>-</button> 
                {contador}
                <button className="btnC-suma" onClick={()=> sumar()}>+</button>
            </section>
            <section className='itemCountButton'>
                    <button className="carrito c1" onClick={() => onAdd(contador)}>Agregar al Carrito</button>
            </section>
        </div>
    );
}

export default ItemCount;
