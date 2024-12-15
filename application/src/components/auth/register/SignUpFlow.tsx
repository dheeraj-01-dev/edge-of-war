// SignupFlow.tsx
"use client"
import { useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { setCookie } from 'cookies-next'
import toast from '@/scripts/toast';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/api/user';
import SignupPage1 from './Page1';
import SignupPage2 from './Page2';
import SignupPage3 from './Page3';

const SignupFlow = () => {

  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    ffUid: '',
    ffUserName: '',
    phone: '',
    email: '',
    otp: '',
    userName: '',
    password: '',
    confirmPassword: ''
  });

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const handleFinish = async () => { 
    // Final submission to backend
    const json = await registerUser(formData)
    console.log(json)
    alert("Signup completed! " + JSON.stringify(formData));


  };


  const handleRegister = async ()=>{

    const currentDate = +new Date();
    const response :responseType<any> = await registerUser(formData);
    if(response.success){
      setCookie("__eow_user_token", response.data.token, {
        expires: new Date(currentDate + 7776000000),
      });
      setCookie("__eow_user_name", response.data.userName, {
        expires: new Date(currentDate + 7776000000),
      });
      // setCookie("u_state", response.data.token, {expires : new Date(currentDate+7776000000)});
      // setCookie("u_p_state", response.data.profile, {expires : new Date(currentDate+7776000000)});
      // setCookie("i_state", response.data._id, {expires : new Date(currentDate+7776000000)});
      // setCookie("u_n_state", response.data.userName, {expires : new Date(currentDate+7776000000)});
      toast("Register successfull !");
      router.push("/");
      router.refresh();
    }else{
      toast(response.error);
    };
  }

  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-input': {
              color: '#fff', // Input text color
            },
            '& .MuiInputBase-input.Mui-error': {
              color: '#fff', // Input text color
            },
            '& .MuiInputLabel-root': {
              color: 'gray', // Label color
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white', // Label color
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'gray', // Default outline color
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white', // Outline color on hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'gray', // Outline color on focus
            },
            '&.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: 'red', // Outline color in error state
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        {step === 1 && <SignupPage1 formData={formData} setFormData={setFormData} onNext={handleNext} />}
        {step === 2 && <SignupPage2 formData={formData} setFormData={setFormData} onNext={handleNext} onPrevious={handlePrevious} />}
        {step === 3 && <SignupPage3 formData={formData} setFormData={setFormData} onFinish={handleRegister} onPrevious={handlePrevious} />}
      </div>
    </ThemeProvider>
  );
};

export default SignupFlow;
