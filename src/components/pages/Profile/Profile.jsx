import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTokenSelector } from "../../../redux/slices/userSlice";
import { useQuery } from "@tanstack/react-query";
import { getQueryKeyUserData } from "../../../utils/helpers/getQueryKeys";
import { userApi } from "../../../api/userAPI";
import { ProfileInner } from "./ProfileInner";

export const Profile = function () {
  const navigate = useNavigate();
  const token = useSelector(getTokenSelector);

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
    navigate("/profile/contacts");
  }, [navigate, token]);

  const {
    data, isLoading, isError, error, refetch,
  } = useQuery({
    queryKey: getQueryKeyUserData(),
    queryFn: () => userApi.getMyData(token),
    enabled: !!token,
  });

  return (
    <ProfileInner 
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      refetch={refetch}
    />
  );
};
