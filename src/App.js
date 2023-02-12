import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";

function App() {
  // let currentOtpIndex = 0;
  // const [otp, setOtp] = useState(new Array(6).fill(""));
  // const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const [otp, setOtp] = useState("");
  let newOtp = parseInt(otp);
  console.log(newOtp);

  const submitOtp = () => {
    if (otp === "") {
      alert(`OTP is required.`);
    } else if (newOtp === 1234) {
      alert(`verified OTP : ${newOtp}`);
    } else {
      alert(`you entered wrong otp!`);
    }
  };

  // const inputRef = useRef(null);

  // const handleOnChange = (e) => {
  //   const { value } = event.target;
  //   const newOtp = [...otp];
  //   console.log(newOtp);
  //   newOtp[index] = value.substring(value.length - 1);
  //   if (!value) setActiveOtpIndex(index - 1);
  //   else setActiveOtpIndex(index + 1);
  //   setOtp(newOtp);
  //   console.log(e.target);
  // };
  // console.log(otp);

  // const handleOnKeyDown = (e, index) => {
  //   currentOtpIndex = index;
  //   if (e.key === "Backspace") setActiveOtpIndex(index - 1);
  // };

  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, [activeOtpIndex]);

  return (
    <div className="h-screen flex justify-center flex-col bg-gray-300 items-center  space-x-2">
      {/* {otp.map((data, index) => (
        <React.Fragment key={index}>
          <input
            type="text"
            ref={index === activeOtpIndex ? inputRef : null}
            onChange={(e) => handleOnChange(e, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
            value={otp[index]}
            className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400"
          />
          {index === otp.length - 1 ? null : (
            <span className="w-2 py-1 bg-red-400" />
          )}
        </React.Fragment>
      ))} */}
      <HStack>
        <PinInput type="alphanumeric" onChange={(e) => setOtp(e)}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <button className="button" onClick={submitOtp}>
        Click
      </button>
    </div>
  );
}

export default App;
