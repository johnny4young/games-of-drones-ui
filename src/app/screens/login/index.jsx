import { withFormik } from "formik";
import { connect } from "react-redux";
import { savePlayerNames } from "../../store/actions";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";

import LoginComponent from "./component";

const validationSchema = Yup.object().shape({
  player1: Yup.string().required("Player 1 name is required"),
  player2: Yup.string().required("Player 2 name is required")
});

const Login = withFormik({
  validationSchema,
  validateOnChange: false,
  mapPropsToValues: () => ({ player1: "", player2: "" }), // initial values
  handleSubmit: (values, { setSubmitting, props: { dispatch, history } }) => {
    setSubmitting(false);
    const { player1, player2 } = values;
    dispatch(savePlayerNames({ player1, player2 }));
    history.push("/play");
  },
  displayName: "Login"
})(LoginComponent);

export default withRouter(connect()(Login));
