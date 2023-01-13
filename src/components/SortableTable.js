import { ViewColumnsIcon } from "@heroicons/react/20/solid";
import Table from "./Table";

function SortableTable(props) {
  const updatedConfig = props.config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th>{column.label} IS Sortable</th>,
    };
  });

  console.log("updatedConfig", updatedConfig);

  // config will override props.config
  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
