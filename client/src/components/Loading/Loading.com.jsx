import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./Loading.style";

const LoadingCom = (WrapperComponent) => {
  const Loading = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };
  return Loading;
};

export default LoadingCom;
