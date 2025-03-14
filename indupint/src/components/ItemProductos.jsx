import Item from "./Item"

const ItemProductos = ({ items, additionalClass = " " }) => {


    return (
        <>
            {items.map(producto => (
                <Item key={producto.id} item={producto} additionalClass={additionalClass} />
            ))}
        </>
    )
}

export default ItemProductos