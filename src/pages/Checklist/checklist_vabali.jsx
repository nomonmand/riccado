import * as React from "react";
import "./style.scss";
import ShadowInput from "../../components/ShadowInput";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import bigTagImg from "../../assets/images/icon-tag 1.png";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputText from "../../components/InputText";
import CustomButton from "../../components/CustomButton";
import TextBtn from "../../components/TextBtn";
import { useDispatch, useSelector } from "react-redux";
import { GetTagName } from "../../redux/Tags/actions";
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

const Checklist_vabali = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const storeValue = useSelector((store) => store);
  const tagName = storeValue.TagReducer.tag_name;
  const [tmpVal, setTmpVal] = React.useState("");

  const onChangeInput = (_val) => {
    setTmpVal(_val);
  };

  const onClickBtn = () => {
    dispatch(GetTagName(tmpVal));
  };

  return (
    <div className="tag-section">
      <p className="text-breadcrumb">Checklist e verbali</p>
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
      {tagName ? (
        <div>
          <p>{tagName}</p>
        </div>
      ) : (
        <div className="checklist-card">
          <div className="checklist-card-section d-flex align-items-center justify-content-space-between">
            <p>Verbale Intervento</p>
            <IconButton aria-label="search1">
              <img src={iconSearch1} />
            </IconButton>
          </div>
          <div className="checklist-card-section d-flex align-items-center justify-content-space-between">
            <p>Mio Verbale</p>
            <div className="checklist-card-section-active">
              <IconButton aria-label="search1">
                <img src={iconSearch1} />
              </IconButton>
              <IconButton aria-label="search1">
                <div className="iconWrite">
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
                        stroke="#606F88"
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
                        fill="#606F88"
                      />
                    </svg>
                  </IconButton>
                </div>
              </IconButton>
              <IconButton>
                <div className="iconBin">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.39941 10.8L6.39941 8.10005"
                      stroke="#606F88"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.2583 10.8L11.2583 8.10005"
                      stroke="#606F88"
                      stroke-linecap="round"
                    />
                    <path
                      d="M0.0825195 3.59998H17.5753V3.59998C16.2646 3.59998 15.6093 3.59998 15.128 3.89526C14.8596 4.05994 14.6339 4.28566 14.4692 4.55406C14.1739 5.03533 14.1739 5.69067 14.1739 7.00135V11.3C14.1739 13.1856 14.1739 14.1284 13.5882 14.7142C13.0024 15.3 12.0596 15.3 10.1739 15.3H7.4839C5.59828 15.3 4.65547 15.3 4.06968 14.7142C3.4839 14.1284 3.4839 13.1856 3.4839 11.3V7.00135C3.4839 5.69067 3.4839 5.03533 3.18861 4.55406C3.02394 4.28566 2.79821 4.05994 2.52982 3.89526C2.04854 3.59998 1.3932 3.59998 0.0825195 3.59998V3.59998Z"
                      stroke="#606F88"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.39919 0.900217C6.39919 0.900217 6.8851 0 8.82875 0C10.7724 0 11.2583 0.9 11.2583 0.9"
                      stroke="#606F88"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checklist_vabali;
