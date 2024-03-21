function Color({ color }) {
  return <li>{color.name}</li>;
}

function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}

export default function ColorList() {
  const colors = [
    { id: 121, name: "Amarillo" },
    { id: 122, name: "Naranja" },
    { id: 123, name: "Verde" },
  ];

  return (
    <div>
      <h1>List of Colors</h1>
      <Colors colors={colors} />
    </div>
  );
}
