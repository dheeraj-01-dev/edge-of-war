// SignupPage1.tsx
import styles from './style/signupFlow.module.css'
import Link from "next/link";
import toast from "@/scripts/toast";

import TextField from "@mui/material/TextField";

// SignupPage1.tsx

const SignupPage1 = ({ formData, setFormData, onNext }: any) => {
  const handleNext = () => {
    if (formData.name && formData.ffUid && formData.ffUserName) {
      onNext();
    } else {
      toast("Please fill in all fields.");
    }
  };

  return (
    <div className={styles.signupPage}>
      <div>
        <div className={styles.title}>Sign Up</div>

        <div className={styles.formGroup}>
          <TextField
            label="Full Name"
            variant="outlined" // or "filled" for a different style
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={(e :any) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className={styles.formGroup}>
          <TextField
            label="Free Fire Uid"
            type="number"
            variant="outlined" // or "filled" for a different style
            fullWidth
            margin="normal"
            value={formData.ffUid}
            onChange={(e :any) =>
              setFormData({ ...formData, ffUid: e.target.value })
            }
            InputProps={{
              inputProps: {
                sx: {
                  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":
                    {
                      display: "none",
                    },
                  "&": {
                    "MozAppearance": "textfield", // Firefox
                  },
                },
              },
            }}
          />
        </div>
        <div className={styles.formGroup}>
          <TextField
            label="Free Fire Username"
            variant="outlined" // or "filled" for a different style
            fullWidth
            margin="normal"
            value={formData.ffUserName}
            onChange={(e :any) =>
              setFormData({ ...formData, ffUserName: e.target.value })
            }
          />
        </div>
        
        <button className={styles.button} onClick={handleNext}>
          Next
        </button>
        <button className={styles.loginButton}>
          <Link href="/login">Login?</Link>
        </button>
      </div>
    </div>
  );
};

export default SignupPage1;
