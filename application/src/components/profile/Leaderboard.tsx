
"use client";

import React from "react";
import styles from './styles/personalInfo.module.css'
import Image from "next/image";
// import ProfileEditor from "./ProfileEditor";

// Define TypeScript interface for props
interface PersonalInfoProps {
  ffUid: number;
  ffusername: string;
  style ?: React.CSSProperties;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ ffusername, ffUid, style }) => {
  // const [editorOpen, setEditorOpen] = useState(false);

  // const profile = { name, ffUid, phone, email, userName };

  // const toggleEditor = () => {
  //   setEditorOpen((prevState) => !prevState);
  // };

  // Create the editor array using map for cleaner code
  const editorArray = [
    // { name: "FF Uid", value: ffUid, png: "evaluation" },
    { name: "FF username", value: ffusername, png: "job" },
    { name: "FF uid", value: ffUid, png: "user" },
    // { name: "Phone", value: phone, png: "support" },
    // { name: "Email", value: email, png: "email" },
  ];

  return (
    <div style={style}>
      <div className={styles.infoLabel}>
        Free Fire Information
        <Image
          // onClick={toggleEditor}
          height={20}
          width={20}
          alt="Edit"
          src="/icons/edit.png"
          unoptimized
          role="button"
          aria-label="Edit personal information"
          tabIndex={0}
          // onKeyPress={(e) => e.key === 'Enter' && toggleEditor()}
        />
      </div>
      <div className={styles.infoContainer}>
        {editorArray.map(({ name, value }, index) => (
          <div className={styles.info} key={index}>
            <span>{name}</span>
            {value}
          </div>
        ))}
      </div>
      {/* <ProfileEditor
        profile={profile}
        editorArray={editorArray}
        editor={editorOpen}
        closeEditor={toggleEditor}
      /> */}
    </div>
  );
};

export default PersonalInfo;
