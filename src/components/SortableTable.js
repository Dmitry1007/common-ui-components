import Table from "./Table";

function SortableTable(props) {
  const handleClick = (label) => {
    console.log(label);
  };

  const updatedConfig = props.config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {column.label} IS Sortable
        </th>
      ),
    };
  });

  // config will override props.config
  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
