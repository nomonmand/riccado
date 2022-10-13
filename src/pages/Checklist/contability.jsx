import React, { useState } from "react";
import "./style.scss";
import ShadowInput from "../../components/ShadowInput";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputText from "../../components/InputText";
import CustomButton from "../../components/CustomButton";
import TextBtn from "../../components/TextBtn";
import { useDispatch, useSelector } from "react-redux";
import { GetTagName } from "../../redux/Tags/actions";
import iconSearch1 from "../../assets/images/icon-search 1.png";
import bigTagImg from "../../assets/images/icon-tag 1.png";
import iconTrash from "../../assets/images/icon-trash.png";
import IconButton from "@mui/material/IconButton";
import { Person, PersonRemove } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 736,
  height: 463,
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

const Checklistcontablity = () => {
  const [open, setOpen] = React.useState(false);
  const [ContList, setConstList] = React.useState([
    { name: "Peter" },
    { name: "Materiali" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [tableCells, setTableCells] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const storeValue = useSelector((store) => store);
  const tagName = storeValue.TagReducer.tag_name;
  const [tmpVal, setTmpVal] = React.useState("");
  let contability = "";

  const onChangeInput = (_val) => {
    setTmpVal(_val);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const onClickBtn = () => {
    // dispatch(GetTagName(tmpVal));
    let temp = JSON.parse(JSON.stringify(ContList));
    temp.push({ name: tmpVal });
    console.log(temp);
    setConstList(temp);
    setOpen(false);
  };

  const inputBlur = (e) => {
    let value = e.target.value;
    let item = e.target;
    let parent = item.parentElement
    item.parentNode.removeChild(item);
    // 
    let removeButton = parent.querySelectorAll('.btn-remove-cell')[0];
    removeButton.style.display = 'inline-block'
    parent.querySelector('span').innerHTML = value;
  }

  const removeCell = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // let thElement = e.target.parentElement;
    let thElement = e.target.closest('th');
    let trElement = thElement.parentElement;
    let index = Array.prototype.indexOf.call(trElement.children, thElement);
    trElement.removeChild(thElement)
    let tbody = document.querySelector('.tblAccount tbody');
    let trs = tbody.querySelectorAll('tr');
    trs.forEach(tr => {
      let tdElement = tr.querySelectorAll('td')[index]
      tr.removeChild(tdElement)
    });

  }

  let cells = undefined;

  const addTableColumn = () => {

    setTableCells(cells => [...cells, new Date().getTime()]);

  }

  return (
    <div className="tag-section">
      <p className="text-breadcrumb">Contibilita</p>
      <div className="tag-section-items">
        <ShadowInput />
        <Button onClick={handleOpen}>
          <AddCircleIcon sx={{ fontSize: "70px", color: "#83112F" }} />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <header className="modal-header">
              <span onClick={handleClose}>&times;</span>
            </header>
            <div className="modal-title">
              <p>Aggiungi Tag</p>
            </div>
            <div className="modal-content">
              <div className="form-group">
                <label>Nome tag</label>
                <InputText
                  placeholder="tagrandom1"
                  onChangeInput={onChangeInput}
                />
              </div>
              <div className="slava-btn-section">
                <div className="d-flex justify-content-center">
                  <CustomButton
                    name="Slava"
                    bgColor="primary"
                    active="true"
                    onClickBtn={onClickBtn}
                  />
                </div>
                <div className="d-flex justify-content-center pt-3">
                  <TextBtn name="Annulla" textColor="default" />
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <Modal
          open={showModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <header className="modal-header">
              <span onClick={handleCloseModal}>&times;</span>
            </header>
            <div className='modal-title'>
              <p>Modifica sezione della contabilità</p>
            </div>
            <div className='modal-content'>
              <div className='form-group section-title-form'>
                <label>Nome sezione</label>
                <InputText placeholder="tagrandom1" />
              </div>
              <div className='d-flex'>
                <table className='tblAccount table table-bordered table-striped'>
                  <thead className='tblAccountHeader'>
                    <tr>
                      <th>Nome</th>
                      <th>Unità di misura</th>
                      <th>Costo unitario</th>
                      <th>Quantità</th>
                      {tableCells && tableCells.map((cell, index) => (
                        <th key={index} style={{ padding: '0.2rem 1rem', maxWidth: '8rem' }}>
                          <input type='text' style={{ maxWidth: '6rem' }} onBlur={(e) => inputBlur(e)} />
                          <span></span>
                          <IconButton className='btn-remove-cell' style={{ display: 'none' }} onClick={(e) => removeCell(e)}>
                            <img src={iconTrash} />
                          </IconButton>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      {tableCells && tableCells.map((cell, index) => (
                        <td key={index}></td>
                      ))}
                    </tr>
                  </tbody>
                </table>
                <Button onClick={addTableColumn} className='btnAddColumn'>
                  <AddCircleIcon sx={{ fontSize: "30px", color: "#000" }} />
                </Button>
              </div>
              <div className='slava-btn-section d-flex align-items-center justify-content-space-between'>
                <div className='d-flex justify-content-center'>
                  <CustomButton name="Slava" bgColor="primary" onClickBtn={handleShowModal} />
                </div>
                <div className='d-flex justify-content-center'>
                  <TextBtn name="Annulla" textColor="default" />
                </div>
              </div>
            </div>

          </Box>
        </Modal>
      </div>
      <div className="d-flex checlist-title">
        <div>Sezioni della contabilita</div>
        <label>i</label>
      </div>
      {tagName ? (
        <div>
          <p>{tagName}</p>
        </div>
      ) : (
        <div className="checklist-card-1">
          {ContList.map((contInfo, index) => (
            <div key={index} className="checklist-card-section d-flex align-items-center justify-content-space-between" onClick={handleShowModal}>
              <p>{contInfo.name}</p>
              <IconButton aria-label="search1">
                <img src={iconSearch1} />
              </IconButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Checklistcontablity;
