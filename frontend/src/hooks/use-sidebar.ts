import { useEffect, useState } from "react";
import apiClient from "../api/apiContext";
import { getLocalStorageData } from "../lib/local-storage";
import { useSocket } from "./use-socket";

interface Test {
  _id: string;
  name: string;
  email: string;
  lastMessage: string;
}
export interface test2 {
  id: string;
  name: string;
  email: string;
  lastMessage: string;
}
const useSidebar = () => {
  const [userList, setUserList] = useState<test2[]>([]);
  const [activeUser, setActiveUser] = useState(false);
  const { globalOnSocket, socketRef } = useSocket();

  const getAllUsers = () => {
    const userData = getLocalStorageData("user_data");
    apiClient
      .get("/api/v1/auth/get-all-users/" + userData.id)
      .then((response) => {
        if (response.status === 200) {
          const { data } = response.data;
          const newadata = data?.map((item: Test) => {
            const obj: test2 = {
              id: item._id,
              name: item.name,
              email: item.email,
              lastMessage: "Hi how are you",
            };
            return obj;
          });
          // console.log(newadata);
          setUserList(newadata);
        }
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    globalOnSocket("user_active", (data) => {
      setActiveUser(data);
    });
    globalOnSocket("not-active", (active) => {
      setActiveUser(active);
    });
  }, [socketRef]);

  return {
    getAllUsers,
    userList,
    activeUser,
  };
};

export default useSidebar;
