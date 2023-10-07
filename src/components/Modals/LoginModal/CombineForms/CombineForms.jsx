import { SigninForm } from "../../../Forms/SigninForm/SigninForm";
import { SignupForm } from "../../../Forms/SignupForm/SignupForm";

export const CombineForms = ({ setIsOpenRememberer, isActiveSignin }) => {
  return (
    <>
      {isActiveSignin ? (
        <SigninForm setIsOpenRememberer={setIsOpenRememberer} />
      ) : (
        <SignupForm />
      )}
    </>
  );
};
