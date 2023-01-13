function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((row) => {
    return (
      <tr className="border-b" key={config[0].render(row)}>
        <td className="p-4">{config[0].render(row)}</td>
        <td className="p-4">{config[1].render(row)}</td>
        <td className="p-4">{config[2].render(row)}</td>
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
