"use client";
import React, { useState } from "react";
import styles from "./styles/world.module.css";
import Image from "next/image";
import UserTemplates from "../temp/UserTemplate";


const createFriendRequest = async ({
  token = undefined,
  userName = undefined,
}: {
  token?: string | undefined | null;
  userName?: string | null | undefined;
}) => {
  const response = await fetch(`/api/createFriendRequest/?userName=${userName}&token=${token}`, {
    method: "POST"
  });
  const res = await response.json();

  return res;
};

const AddFriends = ({ sampleUsers, userToken }: { sampleUsers: member[] | undefined, userToken: string | undefined }) => {
  const [inpValue, setInpValue] = useState("");
  const [users, setUsers] = useState([]);
  const [userNotFound, setUserNotFound] = useState(false);

  const findUser = async (inpValue :string) => {
    try {
      const response = await fetch(`/api/findUser?user=${inpValue}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserNotFound(false)
      setUsers(data.data);
      if(!data.success){
        return setUserNotFound(true);
      }
    } catch (error) {
      setUserNotFound(true)
      console.error(error);
    }
  };

  const updateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpValue(e.target.value);
    // if (e.target.value < 1) {
    //   setUsers([]);
    //   setUserNotFound(false);
    // }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await findUser(inpValue);
    const form = e.currentTarget as HTMLFormElement;
    const input = form.children[1] as HTMLInputElement
    input.blur();
  };

  return (
    <div className={styles.world}>
      <form onSubmit={onSubmit} className={styles.form}>
        <Image height={17} width={17} alt="" src="/icons/magnifier.png" />
        <input
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          className={styles.inputField}
          type="search"
          placeholder="userName or uid"
          onChange={updateUser}
        />
      </form>

      <div className={styles.samples}>
        {users&&users.length>0 ? (
          users.map((user: member) => {
            return (
              <div key={user.userName}>
                <UserTemplates
                  onClick={() => {}}
                  style={{ margin: "12px" }}
                  dimension={45}
                  user={{
                    userName: user.userName,
                    ffUid: user.ffUid,
                    profile: "/men.png",
                  }}
                  alt="x"
                  requestBtn
                  createFriendRequest={()=>{return createFriendRequest({userName: user.userName, token: userToken})}}
                />
              </div>
            );
          })
        ) : userNotFound ? (
          <div> &nbsp; &nbsp;&nbsp;&nbsp; user not found </div>
        ) : (
          <div>
            <div className={styles.sampleTemplates}>people you may know</div>
            <div>
              {sampleUsers?.map((user: member) => {
                return (
                  <div key={user.userName}>
                    <UserTemplates
                      onClick={() => {}}
                      style={{ margin: "12px" }}
                      dimension={45}
                      user={{
                        userName: user.userName,
                        ffUid: user.ffUid,
                        profile: "/men.png",
                      }}
                      alt="x"
                      requestBtn
                      createFriendRequest={()=>{return createFriendRequest({userName: user.userName, token: userToken})}}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddFriends;
