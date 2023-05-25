import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPasss,
} from "../../utils/firebase/firebase-utils";
import FormInput from "../form-input/form-input";
import "./signIn.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

const defaultFormFilds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFilds, setFormFilds] = useState(defaultFormFilds);
  const { email, password } = formFilds;

  const resetField = () => {
    setFormFilds(defaultFormFilds);
  };
  const signWithGoogle = async () => {
    await signInWithGooglePopup();
    resetField();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPasss(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        case "auth/user-not-found":
          alert("User Not Found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handlechange = (event) => {
    const { name, value } = event.target;
    setFormFilds({ ...formFilds, [name]: value });
  };

  return (
    <div className="signup-container">
      <h2>Already Have an account?</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          lable="Email"
          type="email"
          required
          onChange={handlechange}
          name="email"
          value={email}
        />
        <FormInput
          lable="Password"
          type="password"
          required
          onChange={handlechange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signWithGoogle}>
            Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
