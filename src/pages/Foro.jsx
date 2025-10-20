import React, { useState } from "react";
import materiasData from "../data/materiales.json";
import Layout from "../Components/Layout"

React

const Foro = () => {
  const [mensajes, setMensajes] = useState([]);
  const [materiaSeleccionada, setMateriaSeleccionada] = useState("");
  const [mensajeTexto, setMensajeTexto] = useState("");
  const [filtro, setFiltro] = useState("Todos");

  const publicarMensaje = () => {
    if (mensajeTexto.trim() === "" || materiaSeleccionada === "") {
      alert("Por favor escribe un mensaje y selecciona una materia.");
      return;
    }

    const nuevoMensaje = {
      id: Date.now(),
      materia: materiaSeleccionada,
      texto: mensajeTexto,
      respuestas: [],
    };

    setMensajes([...mensajes, nuevoMensaje]);
    setMensajeTexto("");
    setMateriaSeleccionada("");
  };

  const enviarRespuesta = (id, textoRespuesta) => {
    if (textoRespuesta.trim() === "") return;

    const nuevosMensajes = mensajes.map((m) =>
      m.id === id
        ? { ...m, respuestas: [...m.respuestas, textoRespuesta] }
        : m
    );

    setMensajes(nuevosMensajes);
  };

  const mensajesFiltrados =
    filtro === "Todos"
      ? mensajes
      : mensajes.filter((m) => m.materia === filtro);

  return (

  

    <main className="max-w-6xl mx-auto p-6 font-sans">

      { }
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">
          Bienvenido a nuestro Foro
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          ¿Tienes dudas o quieres ayudar a alguien? Este foro es tu espacio para compartir,
          aprender y crecer juntos. ¡Participa, pregunta y colabora para que nadie enfrente
          sus retos solo!
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <div className="bg-orange-100 p-6 rounded-xl shadow hover:bg-orange-200">
            📘 Aprende
          </div>
          <div className="bg-orange-100 p-6 rounded-xl shadow hover:bg-orange-200">
            💬 Participa
          </div>
          <div className="bg-orange-100 p-6 rounded-xl shadow hover:bg-orange-200">
            🤝 Ayuda
          </div>
        </div>
      </section>

      {/* Filtro de materias */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">
          ¡Elige una materia y empieza a interactuar!
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button
            className={`px-4 py-2 rounded-lg border ${
              filtro === "Todos"
                ? "bg-orange-500 text-white"
                : "bg-white text-orange-600 border-orange-400"
            }`}
            onClick={() => setFiltro("Todos")}
          >
            Todos
          </button>

          {materiasData.map((materia) => (
            <button
              key={materia}
              className={`px-4 py-2 rounded-lg border ${
                filtro === materia
                  ? "bg-orange-500 text-white"
                  : "bg-white text-orange-600 border-orange-400"
              }`}
              onClick={() => setFiltro(materia)}
            >
              {materia}
            </button>
          ))}
        </div>

        { }
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-left shadow">
          <p>
            <b>Pregunta:</b> Hola, ¿qué libros me recomendarían para estudiar
            química?
          </p>
          <p className="mt-3 text-sm text-gray-700 font-semibold">
            Respuestas:
          </p>
          <div className="ml-3">
            <p>👤 Usuario1: Hola, te recomendaría el libro de química Chang 7ma edición.</p>
            <p>👤 Usuario2: Te recomiendo el libro Brown 9na edición.</p>
          </div>
        </div>
      </section>

      { }
      <section className="mb-10">
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <input
            type="text"
            placeholder="Escribe tu mensaje aquí"
            className="border p-2 rounded-lg flex-1"
            value={mensajeTexto}
            onChange={(e) => setMensajeTexto(e.target.value)}
          />
          <select
            className="border p-2 rounded-lg"
            value={materiaSeleccionada}
            onChange={(e) => setMateriaSeleccionada(e.target.value)}
          >
            <option value="">Selecciona materia</option>
            {materiasData.map((materia) => (
              <option key={materia} value={materia}>
                {materia}
              </option>
            ))}
          </select>
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
            onClick={publicarMensaje}
          >
            Publicar
          </button>
        </div>

        { }
        <div id="foro" className="space-y-6">
          {mensajesFiltrados.map((m) => (
            <div
              key={m.id}
              className="bg-white border border-orange-200 rounded-xl p-4 shadow"
            >
              <p className="font-semibold text-orange-700">
                {m.materia}: <span className="text-gray-800">{m.texto}</span>
              </p>

              {/* Responder */}
              <Responder mensaje={m} enviarRespuesta={enviarRespuesta} />
            </div>
          ))}
        </div>
      </section>

      { }
      <section className="bg-orange-50 p-6 rounded-xl shadow mb-10">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">
          Temas destacados:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><a href="#" className="hover:text-orange-600">Libros para aprender álgebra</a></li>
          <li><a href="#" className="hover:text-orange-600">Libros de física</a></li>
          <li><a href="#" className="hover:text-orange-600">Recomendaciones de webs para aprender matemáticas</a></li>
          <li><a href="#" className="hover:text-orange-600">Plataformas digitales para aprender idiomas</a></li>
        </ul>
      </section>

      { }
      <footer className="text-center text-gray-700 py-6 border-t border-orange-200">
        <p>Instagram: <a href="#" className="text-orange-600">Sembrando_Conocimientos</a></p>
        <p>Facebook: <a href="#" className="text-orange-600">SembrandoConocimentos</a></p>
      </footer>
    </main>
   
  );
};

const Responder = ({ mensaje, enviarRespuesta }) => {
  const [mostrar, setMostrar] = useState(false);
  const [respuesta, setRespuesta] = useState("");

  return (

    <Layout>

    <div className="mt-3">
      <button
        onClick={() => setMostrar(!mostrar)}
        className="text-sm text-orange-600 font-semibold hover:underline"
      >
        {mostrar ? "Ocultar respuestas" : "Responder"}
      </button>

      {mostrar && (
        <div className="mt-3">
          <input
            type="text"
            placeholder="Escribe una respuesta"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            className="border p-2 rounded-lg w-full mb-2"
          />
          <button
            className="bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600"
            onClick={() => {
              enviarRespuesta(mensaje.id, respuesta);
              setRespuesta("");
            }}
          >
            Enviar
          </button>

          <div className="mt-2 space-y-1">
            {mensaje.respuestas.map((r, i) => (
              <p key={i} className="text-sm text-gray-700 ml-3">
                👤 {r}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default Foro;
