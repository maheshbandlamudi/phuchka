import Input from "./Input";
import React, { useRef } from "react";
import Modal from "./Modal";

const NewProject = ({ onAdd }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      desc: enteredDesc,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal buttonCaption="Okay" ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 my-4">
            Invalid Input
        </h2>
        <p className="text-stone-400 mb-4 ">
            Oops. Looks like you missed some fields. Please fill in all the fields.
        </p>
        <p className="text-stone-400 mb-4 ">
            Please make sure you provide a valid input for all fields.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descRef} label="Description" textarea />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
