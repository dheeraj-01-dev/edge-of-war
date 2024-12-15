// SignupPage3.tsx
import { useState } from "react";
// import styles from './SignupPage.module.css';
import styles from './style/signupFlow.module.css'
import toast from "@/scripts/toast";
import { TextField } from "@mui/material";



import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// SignupPage3.tsx
const SignupPage3 = ({ formData, setFormData, onFinish, onPrevious }: any) => {

  const register = () => {
    onFinish();
  };


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };


  return (
    <div className={styles.signupPage}>
      <div>
        <div className={styles.title}>Personal Information</div>
        <div className={styles.formGroup}>
          <TextField
            label="Create Username"
            variant="outlined" // or "filled" for a different style
            fullWidth
            margin="normal"
            value={formData.userName}
            onChange={(e :any) =>
              setFormData({ ...formData, userName: e.target.value })
            }
          />
        </div>
        <div className={styles.formGroup}>
          <TextField
            label="Create Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={(e :any)=>setFormData({ ...formData, password: e.target.value })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff sx={{color: "gray"}} /> : <Visibility sx={{color: "gray"}} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={styles.formGroup}>
          <TextField
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.confirmPassword}
            onChange={(e :any)=>setFormData({ ...formData, confirmPassword: e.target.value })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleConfirmPassword} edge="end">
                    {showConfirmPassword ? <VisibilityOff sx={{color: "gray"}} /> : <Visibility sx={{color: "gray"}} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
          <button className={styles.button} onClick={register}>
            Register
          </button>
        <button className={styles.backButton} onClick={onPrevious}>
          Back
        </button>
      </div>
    </div>
  );
};

export default SignupPage3;
