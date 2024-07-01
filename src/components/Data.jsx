const Data = () => {
  let data = [
    { title: "apple", id: 1, info: "false" },
    { title: "orange", id: 2, info: "false" },
    { title: "mango", id: 3, info: "true" },
  ];
  let hi = data.map((dat) => (
    <li key={dat.id} style={{ color: dat.info === "true" ? "blue" : "yellow" }}>
      {dat.title}
    </li>
  ));

  return (
    <div>
      <ul>{hi}</ul>
    </div>
  );
};

export default Data;
