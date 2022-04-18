import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submitStatus }) => {
    const [note, setNote] = useState("");

    function noteChange(e) {
        setNote(e.target.value);
    }

    submitStatus.current = true
    function addItem() {
        add(function (prevData) {
            return [
                {
                    id: v4(),
                    note,
                },
                ...prevData,
            ];
        });
    }

    return (
        <div>
            <h1>備忘錄</h1>
            <p>記事：</p>
            <input type="text" value={note} onChange={noteChange} />
            <button className="add" onClick={addItem}>
                新增
            </button>
        </div>
    );
};

export default Edit;
