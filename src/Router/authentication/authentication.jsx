import SignUpForm from "../../components/sign-up-form/signUp-form";
import SignInForm from "../../components/sign-in-form/signIn-Form";
import { AuthenticationContainer } from "./authentication-style";
const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
