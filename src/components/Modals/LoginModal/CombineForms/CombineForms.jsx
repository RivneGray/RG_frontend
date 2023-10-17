import { SigninForm } from "../../../Forms/SigninForm/SigninForm";
import { SignupForm } from "../../../Forms/SignupForm/SignupForm";

export const CombineForms = ({
  setIsOpenRememberer,
  isActiveSignin,
  closeLoginModalHandler,
}) => {
  return (
    <>
      {isActiveSignin ? (
        <SigninForm
          setIsOpenRememberer={setIsOpenRememberer}
          closeLoginModalHandler={closeLoginModalHandler}
        />
      ) : (
        <SignupForm closeLoginModalHandler={closeLoginModalHandler} />
      )}
    </>
  );
};
