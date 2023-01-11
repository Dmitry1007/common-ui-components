function Table({ data }) {
  const renderedHeader = Object.keys(data[0]).map((key) => {
    return <th key={key}>{key}</th>;
  });

  const renderedRows = data.map((row) => {
    return (
      <tr className="border-b" key={row.name}>
        <td className="p-4">{row.name}</td>
        <td className="p-4">
          <div className={`h-6 w-6 rounded-full ${row.color}`} />
        </td>
        <td className="p-4">{row.score}</td>
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeader}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
