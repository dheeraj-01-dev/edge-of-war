// // "use client";
// // import React, { MouseEventHandler, useState } from "react";
// // import styles from "./styles/profileEditor.module.css";
// // import Image from "next/image";

// // const ProfileEditor = ({
// //   editor = true,
// //   closeEditor,
// //   editorArray,
// //   profile,
// // }: {
// //   editor?: boolean;
// //   editorArray: {
// //     name: string;
// //     value: string | number;
// //     png: string;
// //   }[];
// //   profile: {
// //     name: string;
// //     email: string;
// //     phone: string | number;
// //     ffUid: string | number;
// //     userName: string;
// //   };
// //   closeEditor: MouseEventHandler<HTMLImageElement>;
// // }) => {
// //   const [name, setName] = useState(profile.name);
// //   const [email, setEmail] = useState(profile.email);
// //   const [FFUid, setFFUid] = useState(profile.ffUid);
// //   const [phone, setPhone] = useState(profile.phone);
// //   const [userName, setUserName] = useState(profile.userName);

// //   const [inpName, setInpName] = useState("");
// //   const [inpTemplate, setInpTemplate] = useState("");
// //   const [inpValue, setInpValue]: any = useState("");
// //   const [updatableInputBox, setUpdatableInputBox] = useState(false);

// //   const focusInput = (inpName: string) => {
// //     setInpTemplate("Enter Your " + inpName);
// //     if (inpName === "Name") {
// //       setInpValue(name);
// //       setInpName("Name");
// //     }
// //     if (inpName === "Phone") {
// //       setInpValue(phone);
// //       setInpName("Phone");
// //     }
// //     if (inpName === "FF Uid") {
// //       setInpValue(FFUid);
// //       setInpName("FF Uid");
// //     }
// //     if (inpName === "User Name") {
// //       setInpValue(userName);
// //       setInpName("User Name");
// //     }
// //     if (inpName === "Email") {
// //       setInpValue(email);
// //       setInpName("Email");
// //     }
// //     setUpdatableInputBox(true);
// //     const i = document.getElementById("focusUpdatableInput");
// //     i?.focus();
// //   };

// //   const closeInput = () => {
// //     setUpdatableInputBox(false);
// //     setInpValue("");
// //     setInpName("");
// //   };

// //   const saveInputValue = () => {
// //     if (inpName === "Name") {
// //       setName(inpValue);
// //     }
// //     if (inpName === "User Name") {
// //       setUserName(inpValue);
// //     }
// //     if (inpName === "FF Uid") {
// //       setFFUid(inpValue);
// //     }
// //     if (inpName === "Phone") {
// //       setPhone(inpValue);
// //     }
// //     if (inpName === "Email") {
// //       setEmail(inpValue);
// //     }
// //     closeInput();
// //   };

// //   const updateInpValue = (e: any) => {
// //     setInpValue(e.target.value);
// //   };

// //   const restrictTextareaEnterBtn = (e: any) => {
// //     if (e.which === 13 && !e.shiftKey) {
// //       e.preventDefault();
// //       saveInputValue();
// //       const i = document.getElementById("focusUpdatableInput2");
// //       if (!i) return;
// //       i.blur();
// //     }
// //   };

// //   return (
// //     <div className={`${styles.ProfileEditor} ${!editor && styles.hide}`}>
// //       <div style={{ opacity: 0.8, display: "flex", alignItems: "flex-end" }}>
// //         <Image
// //           onClick={closeEditor}
// //           height={15}
// //           width={15}
// //           alt="x"
// //           src="/icons/arrowLeftWhite.png"
// //         />
// //         <span style={{ marginLeft: "15px" }}>Personal Information</span>
// //       </div>
// //       <div className={styles.editors}>
// //         {editorArray.map(
// //           (editor: { name: string; value: string | number; png: string }) => {
// //             return (
// //               <div key={editor.name} className={styles.editor}>
// //                 <Image
// //                   className={styles.editorPng}
// //                   height={18}
// //                   width={18}
// //                   alt="U"
// //                   src={`/icons/${editor.png}.png`}
// //                 />
// //                 <div className={styles.editorValue}>
// //                   <div>
// //                     <label className={styles.inputLables} htmlFor="name">
// //                       {editor.name}
// //                     </label>
// //                     <div className={styles.inputs}>
// //                       {editor.name === "Name"
// //                         ? name
// //                         : editor.name === "FF Uid"
// //                         ? FFUid
// //                         : editor.name === "User Name"
// //                         ? userName
// //                         : editor.name === "Phone"
// //                         ? phone
// //                         : editor.name === "Email"
// //                         ? email
// //                         : "undefined"}
// //                     </div>
// //                   </div>
// //                   <Image
// //                     alt="E"
// //                     width={18}
// //                     height={18}
// //                     onClick={() => {
// //                       focusInput(editor.name);
// //                     }}
// //                     className={styles.editorBtn}
// //                     src="/icons/edit-pen.png"
// //                   />
// //                 </div>
// //               </div>
// //             );
// //           }
// //         )}
// //       </div>
// //       <div
// //         className={`${styles.updatableInputBox} ${
// //           !updatableInputBox && styles.hide2
// //         }`}
// //       >
// //         <div className={styles.updatableContainer}>
// //           <div className={styles.updatableInfo}>
// //             <Image
// //               style={{ opacity: 0.8 }}
// //               height={18}
// //               width={18}
// //               alt="U"
// //               src="/icons/user.png"
// //             />
// //             <div style={{ marginLeft: "20px", width: "100%" }}>
// //               <div style={{ opacity: 0.7 }}>{inpTemplate}</div>
// //                 <input
// //                   type={inpName==="Phone"?"number":inpName==="FF Uid"?"number":"text"}
// //                   spellCheck={false}
// //                   autoComplete="off"
// //                   id="focusUpdatableInput"
// //                   value={inpValue}
// //                   onChange={updateInpValue}
// //                   role="number"
// //                   className={styles.editableInput}
// //                   placeholder="Type...."
// //                   maxLength={24}
// //                 />
// //             </div>
// //           </div>
// //           <div className={styles.updateChangesBtn}>
// //             <button onClick={closeInput}>cancel</button>
// //             <button onClick={saveInputValue}>update</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfileEditor;



// // "use client";

// // import React, { MouseEventHandler, useState } from "react";
// // import styles from "./styles/profileEditor.module.css";
// // import Image from "next/image";

// // // Define the types for the props
// // type EditorItem = {
// //   name: string;
// //   value: string | number;
// //   png: string;
// // };

// // type Profile = {
// //   name: string;
// //   email: string;
// //   phone: number;
// //   ffUid: number;
// //   userName: string;
// // };

// // interface ProfileEditorProps {
// //   editor?: boolean;
// //   closeEditor: MouseEventHandler<HTMLImageElement>;
// //   editorArray: EditorItem[];
// //   profile: Profile;
// // }

// // const ProfileEditor: React.FC<ProfileEditorProps> = ({
// //   editor = true,
// //   closeEditor,
// //   editorArray,
// //   profile,
// // }) => {
// //   const [name, setName] = useState(profile.name);
// //   const [email, setEmail] = useState(profile.email);
// //   const [ffUid, setFFUid] = useState(profile.ffUid);
// //   const [phone, setPhone] = useState(profile.phone);
// //   const [userName, setUserName] = useState(profile.userName);

// //   const [inpName, setInpName] = useState<string>("");
// //   const [inpTemplate, setInpTemplate] = useState<string>("");
// //   const [inpValue, setInpValue] = useState<string>("");
// //   const [updatableInputBox, setUpdatableInputBox] = useState<boolean>(false);

// //   // Mapping input names to state setters
// //   const inputStateMap: {
// //     "Name": [React.Dispatch<React.SetStateAction<string>>, string],
// //     "Phone": [React.Dispatch<React.SetStateAction<number>>, number],
// //     "FF Uid": [React.Dispatch<React.SetStateAction<number>>, number],
// //     "User Name": [React.Dispatch<React.SetStateAction<string>>, string],
// //     "Email": [React.Dispatch<React.SetStateAction<string>>, string]
// //   } = {
// //     "Name": [setName, name],
// //     "Phone": [setPhone, phone],
// //     "FF Uid": [setFFUid, ffUid],
// //     "User Name": [setUserName, userName],
// //     "Email": [setEmail, email]
// //   };

// //   const focusInput = (inputName: "Name" | "Email" | "Phone" | "FF Uid" | "User Name") => {
// //     setInpTemplate(`Enter Your ${inputName}`);
// //     const [setter, value] = inputStateMap[inputName] || [() => {}, ""];
// //     setInpValue(value);
// //     setInpName(inputName);
// //     setUpdatableInputBox(true);
// //     document.getElementById("focusUpdatableInput")?.focus();
// //   };

// //   const closeInput = () => {
// //     setUpdatableInputBox(false);
// //     setInpValue("");
// //     setInpName("");
// //   };

// //   const saveInputValue = () => {
// //     const [setter] = inputStateMap[inpName] || [() => {}];
// //     setter(inpValue);
// //     closeInput();
// //   };

// //   const updateInpValue = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setInpValue(e.target.value);
// //   };

// //   const restrictTextareaEnterBtn = (e: React.KeyboardEvent<HTMLInputElement>) => {
// //     if (e.key === "Enter" && !e.shiftKey) {
// //       e.preventDefault();
// //       saveInputValue();
// //       document.getElementById("focusUpdatableInput")?.blur();
// //     }
// //   };

// //   return (
// //     <div className={`${styles.ProfileEditor} ${!editor && styles.hide}`}>
// //       <div style={{ opacity: 0.8, display: "flex", alignItems: "flex-end" }}>
// //         <Image
// //           onClick={closeEditor}
// //           height={15}
// //           width={15}
// //           alt="Close editor"
// //           src="/icons/arrowLeftWhite.png"
// //         />
// //         <span style={{ marginLeft: "15px" }}>Personal Information</span>
// //       </div>
// //       <div className={styles.editors}>
// //         {editorArray.map(({ name, value, png }) => (
// //           <div key={name} className={styles.editor}>
// //             <Image
// //               className={styles.editorPng}
// //               height={18}
// //               width={18}
// //               alt={name}
// //               src={`/icons/${png}.png`}
// //             />
// //             <div className={styles.editorValue}>
// //               <div>
// //                 <label className={styles.inputLables} htmlFor={name}>
// //                   {name}
// //                 </label>
// //                 <div className={styles.inputs}>
// //                   {inputStateMap[name]?.[1] ?? "undefined"}
// //                 </div>
// //               </div>
// //               <Image
// //                 alt="Edit"
// //                 width={18}
// //                 height={18}
// //                 onClick={() => focusInput(name)}
// //                 className={styles.editorBtn}
// //                 src="/icons/edit-pen.png"
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //         <div className={`${styles.updatableInputBox} ${
// //                     !updatableInputBox && styles.hide2
// //                   }`}>
// //           <div className={styles.updatableContainer}>
// //             <div className={styles.updatableInfo}>
// //               <Image
// //                 style={{ opacity: 0.8 }}
// //                 height={18}
// //                 width={18}
// //                 alt="Input"
// //                 src="/icons/user.png"
// //               />
// //               <div style={{ marginLeft: "20px", width: "100%" }}>
// //                 <div style={{ opacity: 0.7 }}>{inpTemplate}</div>
// //                 <input
// //                   type={inpName === "Phone" || inpName === "FF Uid" ? "number" : "text"}
// //                   spellCheck={false}
// //                   autoComplete="off"
// //                   id="focusUpdatableInput"
// //                   value={inpValue}
// //                   onChange={updateInpValue}
// //                   className={styles.editableInput}
// //                   placeholder="Type...."
// //                   maxLength={24}
// //                 />
// //               </div>
// //             </div>
// //             <div className={styles.updateChangesBtn}>
// //               <button onClick={closeInput}>Cancel</button>
// //               <button onClick={saveInputValue}>Update</button>
// //             </div>
// //           </div>
// //         </div>
// //     </div>
// //   );
// // };

// // export default ProfileEditor;



// "use client";

// import React, { MouseEventHandler, useState } from "react";
// import styles from "./styles/profileEditor.module.css";
// import Image from "next/image";

// // Define the types for the props
// type EditorItem = {
//   name: string;
//   value: string | number;
//   png: string;
// };

// type Profile = {
//   name: string;
//   email: string;
//   phone: number;
//   ffUid: number;
//   userName: string;
// };

// // Adjusted types for the inputStateMap
// type InputStateMap = {
//   [key: string]: 
//     | [React.Dispatch<React.SetStateAction<string>>, string]
//     | [React.Dispatch<React.SetStateAction<number>>, number];
// };


// interface ProfileEditorProps {
//   editor?: boolean;
//   closeEditor: MouseEventHandler<HTMLImageElement>;
//   editorArray: EditorItem[];
//   profile: Profile;
// }

// const ProfileEditor: React.FC<ProfileEditorProps> = ({
//   editor = true,
//   closeEditor,
//   editorArray,
//   profile,
// }) => {
//   const [name, setName] = useState(profile.name);
//   const [email, setEmail] = useState(profile.email);
//   const [ffUid, setFFUid] = useState(profile.ffUid);
//   const [phone, setPhone] = useState(profile.phone);
//   const [userName, setUserName] = useState(profile.userName);

//   const [inpName, setInpName] = useState<string>("");
//   const [inpTemplate, setInpTemplate] = useState<string>("");
//   const [inpValue, setInpValue] = useState<string>("");
//   const [updatableInputBox, setUpdatableInputBox] = useState<boolean>(false);

//   // Mapping input names to state setters and current values
//   // const inputStateMap: {
//   //   "Name": [React.Dispatch<React.SetStateAction<string>>, string],
//   //   "Phone": [React.Dispatch<React.SetStateAction<number>>, number],
//   //   "FF Uid": [React.Dispatch<React.SetStateAction<number>>, number],
//   //   "User Name": [React.Dispatch<React.SetStateAction<string>>, string],
//   //   "Email": [React.Dispatch<React.SetStateAction<string>>, string]
//   // } = {
//   //   "Name": [setName, name],
//   //   "Phone": [setPhone, phone],
//   //   "FF Uid": [setFFUid, ffUid],
//   //   "User Name": [setUserName, userName],
//   //   "Email": [setEmail, email]
//   // };

//   const inputStateMap: InputStateMap = {
//     "Name": [setName, name],
//     "Phone": [setPhone, phone],
//     "FF Uid": [setFFUid, ffUid],
//     "User Name": [setUserName, userName],
//     "Email": [setEmail, email]
//   };
  

//   const focusInput = (inputName: keyof typeof inputStateMap) => {
//     setInpTemplate(`Enter Your ${inputName}`);
//     const [setter, value] = inputStateMap[inputName] || [() => {}, ""];
//     setInpValue(value.toString());
//     setInpName(inputName);
//     setUpdatableInputBox(true);
//     document.getElementById("focusUpdatableInput")?.focus();
//   };

//   const closeInput = () => {
//     setUpdatableInputBox(false);
//     setInpValue("");
//     setInpName("");
//   };

//   // const saveInputValue = () => {
//   //   const [setter] = inputStateMap[inpName as keyof typeof inputStateMap] || [() => {}];
//   //   setter(inpName === "Phone" || inpName === "FF Uid" ? Number(inpValue) : inpValue);
//   //   closeInput();
//   // };
//   const saveInputValue = () => {
//     const [setter, currentValue] = inputStateMap[inpName as keyof typeof inputStateMap] || [() => {}, ""];
  
//     // Type guard to check if the current value is a number
//     const isNumberSetter = typeof currentValue === "number";
  
//     if (isNumberSetter) {
//       // Setter expects a number, convert inpValue to a number
//       setter(Number(inpValue));
//     } else {
//       // Setter expects a string, use inpValue directly
//       setter(inpValue);
//     }
  
//     closeInput();
//   };
  
  
  
  

//   const updateInpValue = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInpValue(e.target.value);
//   };

//   const restrictTextareaEnterBtn = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       saveInputValue();
//       document.getElementById("focusUpdatableInput")?.blur();
//     }
//   };

//   return (
//     <div className={`${styles.ProfileEditor} ${!editor && styles.hide}`}>
//       <div style={{ opacity: 0.8, display: "flex", alignItems: "flex-end" }}>
//         <Image
//           onClick={closeEditor}
//           height={15}
//           width={15}
//           alt="Close editor"
//           src="/icons/arrowLeftWhite.png"
//         />
//         <span style={{ marginLeft: "15px" }}>Personal Information</span>
//       </div>
//       <div className={styles.editors}>
//         {editorArray.map(({ name, value, png }) => (
//           <div key={name} className={styles.editor}>
//             <Image
//               className={styles.editorPng}
//               height={18}
//               width={18}
//               alt={name}
//               src={`/icons/${png}.png`}
//             />
//             <div className={styles.editorValue}>
//               <div>
//                 <label className={styles.inputLables} htmlFor={name}>
//                   {name}
//                 </label>
//                 <div className={styles.inputs}>
//                   {inputStateMap[name as keyof typeof inputStateMap]?.[1] ?? "undefined"}
//                 </div>
//               </div>
//               <Image
//                 alt="Edit"
//                 width={18}
//                 height={18}
//                 onClick={() => focusInput(name as keyof typeof inputStateMap)}
//                 className={styles.editorBtn}
//                 src="/icons/edit-pen.png"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div
//         className={`${styles.updatableInputBox} ${
//           !updatableInputBox && styles.hide2
//         }`}
//       >
//         <div className={styles.updatableContainer}>
//           <div className={styles.updatableInfo}>
//             <Image
//               style={{ opacity: 0.8 }}
//               height={18}
//               width={18}
//               alt="Input"
//               src="/icons/user.png"
//             />
//             <div style={{ marginLeft: "20px", width: "100%" }}>
//               <div style={{ opacity: 0.7 }}>{inpTemplate}</div>
//               <input
//                 type={inpName === "Phone" || inpName === "FF Uid" ? "number" : "text"}
//                 spellCheck={false}
//                 autoComplete="off"
//                 id="focusUpdatableInput"
//                 value={inpValue}
//                 onChange={updateInpValue}
//                 onKeyDown={restrictTextareaEnterBtn}
//                 className={styles.editableInput}
//                 placeholder="Type...."
//                 maxLength={24}
//               />
//             </div>
//           </div>
//           <div className={styles.updateChangesBtn}>
//             <button onClick={closeInput}>Cancel</button>
//             <button onClick={saveInputValue}>Update</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileEditor;
