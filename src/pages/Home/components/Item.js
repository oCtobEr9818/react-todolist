const Item = ({ id, note, deleteData, submitStatus }) => {

  submitStatus.current = true
  function deleteItem() {
    deleteData(function (prev) {
      return prev.filter(item => item.id !== id)
    })
  }

  return (
    <div className="item">
      <div>{note}</div>
      <button onClick={deleteItem} className="remove">刪除</button>
    </div>
  );
};

export default Item;
