import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input";
import { SignInContainer, ButtonsContainer } from "./signIn-style";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../Store/user/user-action";

const defaultFormFilds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFilds, setFormFilds] = useState(defaultFormFilds);
  const { email, password } = formFilds;

  const resetField = () => {
    setFormFilds(defaultFormFilds);
  };
  const signWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetField();
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
    <SignInContainer>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signWithGoogle}>
            Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
