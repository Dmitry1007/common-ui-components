function Table({ data }) {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Color</th>
          <th className="px-4 py-2">Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.name}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">
                <div className={`h-6 w-6 rounded-full ${item.color}`} />
              </td>
              <td className="border px-4 py-2">{item.score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
