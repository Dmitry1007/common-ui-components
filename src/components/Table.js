function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((row, index) => {
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
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
