export default function MouseClicker() {
  function handleClickButton(event) {
    console.log(event.target.name);
  }

  function handleClickImage(event) {
    console.log(event.target.src);
    event.stopPropagation();
    //EXPLICACIÓN: así puedo evitar la propagación de este
    //evento para que el evento del padre (botón) no se active
  }

  return (
    <div>
      <button name="one" onClick={handleClickButton}>
        Click
        <img
          width={12}
          height={12}
          style={{ margin: "5px", backgroundColor: "red" }}
          src="no_tengo_imagen"
          onClick={handleClickImage}
        />
      </button>
    </div>
  );
}
