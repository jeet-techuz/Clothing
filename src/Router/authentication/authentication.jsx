import SignUpForm from "../../components/sign-up-form/signUp-form";
import SignInForm from "../../components/sign-in-form/signIn-Form";
import "./authentication.scss";
const Authentication = () => {
  return (
    <div className="authentication-conatiner">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
