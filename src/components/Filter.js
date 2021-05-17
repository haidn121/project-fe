import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";

import FilterListIcon from '@material-ui/icons/FilterList';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "date-fns";

import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { StepContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "800px",
    height: "300px",
    display: "flex",
    alignContent: "space-around",
  },
  formFilter: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: "50px",
  },

  formControl: {
    border: 0,

    display: "inline-flex",
    padding: 0,
    position: "relative",
    width: "186px",
  },
  formBtn:{
      display:"flex",
      justifyContent:"space-evenly",
      backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function Filter() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [name,setName] = React.useState('')
  const [content,setContent]= React.useState('')
  const [date,setDate]= React.useState('')
  const [status,setStatus]= React.useState('')
  const [author,setAuthor]= React.useState('')
  const [assign,setAssign]= React.useState('')
  const [category,setCategory]= React.useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleNameChange =(e) =>{
      setName(e.target.value);
      console.log(e.target.value);
  }
  const handleContentChange =(e) =>{
      setContent(e.target.value);
      console.log(e.target.value);
  }
  const handleDateChange =(e) =>{
    setDate(e.target.value);
    console.log(e.target.value);
}
const handleStatusChange =(e) =>{
    setStatus(e.target.value);
    console.log(e.target.value);
}
const handleAuthorChange =(e) =>{
    setAuthor(e.target.value);
    console.log(e.target.value);
}
const handleAssignChange =(e) =>{
    setAssign(e.target.value);
    console.log(e.target.value);
}
const handleCategoryChange =(e) =>{
    setCategory(e.target.value);
    console.log(e.target.value);
}
function handleClear(e){
  e.preventDefault();
  setName("");
  setContent("");
  setDate("");
  setStatus("");
  setAuthor("");
  setAssign("");
  setCategory("");

}

  return (
    <div>
      <Button
        type="button"
        onClick={handleOpen}
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<FilterListIcon />}
      >
        Filter Options
      </Button>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>Filter</h2>

            {/* Form filter */}
            <form className={classes.formFilter} noValidate autoComplete="off" >
              <TextField  label="Name request" value={name} onChange={handleNameChange}/>
              <TextField  label="Content" value={content} onChange={handleContentChange}/>
              <TextField
                value={date}
                onChange={handleDateChange}
                id="date"
                label="Date Create"
                type="date"
                defaultValue="2021-05-16"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <FormControl className={classes.formControl}>
                <InputLabel>Status</InputLabel>
                <Select

                  native
                  value={status}
                  onChange={handleStatusChange}
                  inputProps={{
                    name: "status",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="status1">Status 1</option>
                  <option value="status2">2</option>
                  <option value="status3">3</option>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel>Author</InputLabel>
                <Select
                  native
                  value={author}
                  onChange={handleAuthorChange}
                  inputProps={{
                    name: "author",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="status1">Author 1</option>
                  <option value="status2">A2</option>
                  <option value="status3">A3</option>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel>Assign</InputLabel>
                <Select
                  native
                  value={assign}
                  onChange={handleAssignChange}
                  inputProps={{
                    name: "assign",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="status1">Assign 1</option>
                  <option value="status2">A2</option>
                  <option value="status3">A3</option>
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel>Category</InputLabel>
                <Select
                  native
                  value={category}
                  onChange={handleCategoryChange}
                  inputProps={{
                    name: "category",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="status1">Category 1</option>
                  <option value="status2">A2</option>
                  <option value="status3">A3</option>
                </Select>
              </FormControl>





            </form>
            {/* Button */}


          </div>
          <div className={classes.formBtn}>
              <Button variant="contained" type="submit" onClick={handleClear} >Clear</Button>
              <Button variant="contained" color="primary">
                Filter
              </Button>
              </div>

        </Fade>
      </Modal>
    </div>
  );
}
