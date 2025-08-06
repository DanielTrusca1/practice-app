import { useCallback, useRef, useState } from "react";
import { useBlocker } from "react-router-dom";

export default function useNavigationBlocker(isDirty, displayModal) {
  
  const blockerRef = useRef(null);
  
  useBlocker((tx) => {
    if (isDirty) {
      blockerRef.current = tx;
      displayModal();   // display the modal
      return true; // block the navigation
    }
    return false; // allow the navigation
  });

  const confirmNavigation = useCallback(() => {
    if (blockerRef.current) {
      blockerRef.current.retry(); // proceed with the navigation
      blockerRef.current = null;
    }
  }, []);

  const cancelNavigation = useCallback(() => {
    blockerRef.current = null; // cancel the navigation
  }, []);

  return {
    confirmNavigation,
    cancelNavigation,
  };
}
