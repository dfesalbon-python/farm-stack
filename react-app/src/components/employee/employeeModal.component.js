const EmployeeModal = () => {
  const closeModal = () => {
    const modal = document.getElementById("entry-modal");
    modal.style.display = "none";
  };

  return (
    <>
      <p>Entry Modal</p>
      <div id="entry-modal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </>
  );
};

export default EmployeeModal;
