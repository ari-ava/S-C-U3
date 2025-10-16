function Filters({ onColorChange, onCategoryChange }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
      <select onChange={(e) => onColorChange(e.target.value)}>
        <option value="">Color</option>
        <option value="naranja">Naranja</option>
        <option value="celeste">Celeste</option>
      </select>

      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">Categoría</option>
        <option value="Matemáticas">Matemáticas</option>
        <option value="Inglés">Inglés</option>
        <option value="Comunicación">Comunicación</option>
      </select>
    </div>
  );
}

export default Filters;

