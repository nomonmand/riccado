import * as React from "react";
import "./style.scss";
import headerImg from "../../assets/images/box-header.png";
import ShadowInput from "../../components/ShadowInput";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import bigTagImg from "../../assets/images/icon-tag 1.png";
import Button from "@mui/material/Button";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Modal from "@mui/material/Modal";
import InputText from "../../components/InputText";
import CustomButton from "../../components/CustomButton";
import TextBtn from "../../components/TextBtn";
import { useDispatch, useSelector } from "react-redux";
import { GetTagName } from "../../redux/Tags/actions";
import iconGroup from "../../assets/images/icon-group.png";
import iconSearch1 from "../../assets/images/icon-search 1.png";
import iconTrash from "../../assets/images/icon-trash.png";
import IconButton from "@mui/material/IconButton";

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

const Squadre = () => {
  const [open, setOpen] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleEditModal = () => setEditModal(true);
  const handleClose = () => setOpen(false);
  const handleEditModalClose = () => setEditModal(false);
  const dispatch = useDispatch();
  const storeValue = useSelector((store) => store);
  const tagName = storeValue.TagReducer.tag_name;
  const [tmpVal, setTmpVal] = React.useState("");
  const [emailList, setEmailList] = React.useState([{ name: "tony@gmail.com", show: true }, { name: "alhi@gmail.com", show: false }]);
  let emailString = '';

  const onChangeInput = (_val) => {
    setTmpVal(_val);
  };

  const onClickBtn = () => {
    dispatch(GetTagName(tmpVal));
  };

  const onChangeEmailInput = (_val) => {
    emailString = _val
  }

  const emailRoleShow = (index) => {
    let dataList = JSON.parse(JSON.stringify(emailList));
    dataList.map((dataInfo, i) => {
      if (i == index) {
        dataInfo.show = !dataInfo.show;
      }
    })
    setEmailList(dataList);
  }

  const getEmailList = () => {
    let emailArray = emailString.split(",");
    for (var i = 0; i < emailArray.length; i++) {
      emailArray[i] = { name: emailArray[i], show: false };
    }
    setEmailList(emailArray);
  }

  return (
    <div className="tag-section">
      <p className="text-breadcrumb">Squadre</p>
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
          className="createteam-modal"
        >
          <Box sx={style}>
            <header className="modal-header">
              <img src={headerImg} />
              <h3>Nuova Squadra</h3>
              <span onClick={handleClose}>&times;</span>
            </header>

            <div className='modal-content'>
              <div className='form-group'>
                <label>Nome squadra</label>
                <InputText className="" placeholder="tagrandom1" onChangeInput={onChangeInput} />
              </div>
              <div className='form-group'>
                <label>Membri</label>
                <div className="form-group-select">
                  <div className="multi-input-select">
                    <InputText placeholder="tagrandom1" onChangeInput={onChangeEmailInput} />
                    <KeyboardArrowDownIcon sx={{ fontSize: "70px", color: "#83112F" }} />
                  </div>
                  <Button onClick={getEmailList}>
                    <AddCircleIcon sx={{ fontSize: "70px", color: "#83112F" }} />
                  </Button>
                </div>
              </div>
              <div className="input-email">
                {emailList.map((emailInfo, index) => (
                  <div className='email-list' key={index}>
                    <button className="email-button" onClick={() => emailRoleShow(index)}>
                      <CloseIcon sx={{ fontSize: "30px" }} />
                      <span>{emailInfo.name}</span>
                    </button>
                    {
                      emailInfo.show &&
                      <FormGroup className="email-role">
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Profilo auditor" />
                        <FormControlLabel control={<Checkbox />} label="Profilo Master" />
                      </FormGroup>
                    }
                  </div>
                ))}
              </div>
              <div className='slava-btn-section'>
                <div className='d-flex justify-content-center'>
                  <CustomButton name="Slava" bgColor="primary" onClickBtn={onClickBtn} />
                </div>
                <div className='d-flex justify-content-center pt-3'>
                  <TextBtn name="Annulla" textColor="default" />
                </div>
              </div>
            </div>
          </Box>
        </Modal>

        <Modal
          open={editModal}
          onClose={handleEditModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="modificasquadre"
        >
          <Box sx={style}>
            <div className="modal-title">
              <p>Modifica squadra</p>
            </div>

            <div className="modal-content">
              <div className="form-group">
                <label>Nome squadra</label>
                <InputText
                  className=""
                  placeholder="tagrandom1"
                  onChangeInput={onChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Membri</label>
                <div className="form-group-select">
                  <div className="multi-input-select">
                    <InputText
                      placeholder="tagrandom1"
                      onChangeInput={onChangeEmailInput}
                    />
                    <KeyboardArrowDownIcon
                      sx={{ fontSize: "70px", color: "#83112F" }}
                    />
                  </div>
                  <Button onClick={getEmailList}>
                    <AddCircleIcon
                      sx={{ fontSize: "70px", color: "#83112F" }}
                    />
                  </Button>
                </div>
              </div>
              <div className="input-email">
                {emailList.map((emailInfo, index) => (
                  <div className="email-list" key={index}>
                    <button
                      className="email-button"
                      onClick={() => emailRoleShow(index)}
                    >
                      <CloseIcon sx={{ fontSize: "30px" }} />
                      <span>{emailInfo.name}</span>
                    </button>
                    
                  </div>
                ))}
              </div>
              <div className="slava-btn-section">
                <div className="d-flex justify-content-center">
                  <CustomButton
                    name="Slava"
                    bgColor="primary"
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
      </div>
      {/* <div className="none-list-squac">
        <div className="d-flex align-items-center justify-content-center">
          <img src={iconGroup} />
          <p>Non hai aggiunto ancora alcuna squadra</p>
        </div>
      </div> */}
      <div className="list-squadre">
        <div className="squadre-section">
          <div className="squadre-section-header">
            <div>Team A</div>
            <div className="iconWrite" onClick={handleEditModal}>
              <IconButton aria-label="search1">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9393 2.23223L12.5858 2.58579L12.9393 2.23223L12.7678 2.06066L12.7445 2.03738C12.4311 1.72395 12.1611 1.45388 11.9157 1.2667C11.6528 1.0661 11.3604 0.914214 11 0.914214C10.6396 0.914214 10.3472 1.0661 10.0843 1.2667C9.83894 1.45388 9.5689 1.72395 9.2555 2.03739L9.23223 2.06066L2.03816 9.25473C2.02714 9.26576 2.01619 9.27668 2.00533 9.28752C1.84286 9.44965 1.69903 9.59317 1.59766 9.7722C1.4963 9.95123 1.44723 10.1484 1.39179 10.3711C1.38809 10.386 1.38435 10.401 1.38057 10.4162L0.717042 13.0703C0.714826 13.0791 0.712596 13.088 0.710358 13.097C0.671116 13.2537 0.629207 13.421 0.615459 13.5615C0.600323 13.7163 0.603851 13.9773 0.813262 14.1867C1.02267 14.3961 1.28373 14.3997 1.43846 14.3845C1.57899 14.3708 1.74633 14.3289 1.90301 14.2896C1.91195 14.2874 1.92085 14.2852 1.92971 14.283L1.92972 14.283L1.95149 14.2775L1.95151 14.2775L4.58384 13.6194C4.59896 13.6156 4.61396 13.6119 4.62885 13.6082C4.85159 13.5528 5.04877 13.5037 5.2278 13.4023C5.40683 13.301 5.55035 13.1571 5.71248 12.9947C5.72332 12.9838 5.73425 12.9729 5.74527 12.9618L12.9393 5.76777L12.9393 5.76776L12.9626 5.74448C13.2761 5.43108 13.5461 5.16105 13.7333 4.91573C13.9339 4.65281 14.0858 4.36038 14.0858 4C14.0858 3.63961 13.9339 3.34719 13.7333 3.08427C13.5461 2.83894 13.276 2.5689 12.9626 2.2555L12.9393 2.23223Z"
                    stroke="white"
                  />
                </svg>
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 2.5L3.5 0.5L6.5 3.5L4.5 6.5L0.5 2.5Z"
                    fill="white"
                  />
                </svg>
              </IconButton>
            </div>
          </div>
          <div className="squadre-section-body">
            <div className="squadre-item">
              <div className="squadre-item-avatar">MB</div>
              <div className="Squadre-item-mail">macro@gmail.com</div>
            </div>
            <div className="squadre-item">
              <div className="squadre-item-avatar">MB</div>
              <div className="Squadre-item-mail">macro@gmail.com</div>
            </div>
          </div>
          <div className="squadre-section-footer">
            <label className="squadre-section-footer-desc">CREATO DA GIORGIO PINNA</label>
            <label clssName="squadre-section-footer-num">
              2 MEMBRI
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Squadre;
