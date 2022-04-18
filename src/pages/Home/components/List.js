import Item from "./Item";

const List = ({ listData, deleteData, submitStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, id } = item;
        return <Item 
                  key={id} 
                  id={id} 
                  note={note}
                  deleteData={deleteData} 
                  submitStatus={submitStatus}
                />;
      })}
    </div>
  );
};

export default List;
