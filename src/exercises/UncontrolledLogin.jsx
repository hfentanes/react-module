export default function UncontrolledLogin() {
  function handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    };

    console.log(data);
  }

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-sm mx-auto mt-8 bg-white shadow-md rounded px-8 py-8"
    >
      <h1 className="text-2xl mb-6 font-bold text-center">Uncontrolled Form</h1>
      <div className="mb-6">
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6"></div>
      <div className="mb-6">
        <input name="remember" type="checkbox" className="mr-2 leading-tight" />
        <span className="text-sm">Remember Me</span>
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          Login
        </button>
        <button
          type="reset"
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded focus:outline-none focus:shadow-outline ml-2"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

//BÚSQUEDA: He buscado las ventajas y desventajas de la API formData, como nos pedía el
//ejercício. He descubierto que: nos simplifica al recoger/enviar datos de formularios,
//es útil para enviar datos con AJAX o Fetch API y es fácil de usar y flexible (porque
//nos deja manipular los datos antes de enviar). Pero posee algunas limitaciones:
//solamente va con formularios HTML estándar, depende del DOM para funcione bien y puede
//presentar problemas de compatibilidad con navegadores más antiguos.
