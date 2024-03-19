import { useEffect } from "react";

function Saludo({ nombre }) {
  const mensaje = `Hola, ${nombre}!`; //mensaje

  //useEffect
  useEffect(() => {
    document.title = `Saludo: ${nombre}`; //cambia el titulo de la pagina
  }, [nombre]); //Se renderiza cuando hay un cambio en el prop nombre
  return <div>{mensaje}</div>; //Estructura del componente
}
export default Saludo;
