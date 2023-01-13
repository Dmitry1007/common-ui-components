import Table from "./Table";

function SortableTable({ data, config, keyFn }) {
  return <Table data={data} config={config} keyFn={keyFn} />;
}

export default SortableTable;
