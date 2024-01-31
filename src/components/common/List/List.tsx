import React from "react";

export interface Props {
  list: any[] | null;
  item: React.ComponentType<{ item: any; i: number }>;
  className?: string;
}

const List: React.FC<Props> = ({ item: ItemComponent, list, className }) => {
  if (!list) {
    return <p>No records</p>;
  }

  return (
    <div className={className}>
      {list.map((item, index) => (
        <ItemComponent key={index} item={item} i={index} />
      ))}
    </div>
  );
};

export default List;
