function Table({ data }) {
  const renderedHeader = Object.keys(data[0]).map((key) => {
    return <th key={key}>{key}</th>;
  });

  const renderedRows = data.map((row) => {
    return (
      <tr key={row.name}>
        <td className="border px-4 py-2">{row.name}</td>
        <td className="border px-4 py-2">
          <div className={`h-6 w-6 rounded-full ${row.color}`} />
        </td>
        <td className="border px-4 py-2">{row.score}</td>
      </tr>
    );
  });

  return (
    <table className="table-auto">
      <thead>
        <tr>{renderedHeader}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
