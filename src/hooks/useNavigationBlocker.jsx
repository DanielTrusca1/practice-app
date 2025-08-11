import { useCallback, useRef } from "react";
import { useBlocker } from "react-router";

export default function useNavigationBlocker(
  isDirty,
  displayModal,
  closeModal
) {
  const blockerRef = useRef(null);

  useBlocker((tx) => {
    console.log("Should I block the navigation???");

    if (isDirty) {
      blockerRef.current = tx;
      displayModal(); // display the modal
      return true; // block the navigation
    }
    return false; // allow the navigation
  });

  const confirmNavigation = useCallback(() => {
    closeModal();

    if (blockerRef.current) {
      blockerRef.current.retry(); // proceed with the navigation
      blockerRef.current = null;
    }
  }, []);

  const cancelNavigation = useCallback(() => {
    closeModal();

    blockerRef.current = null; // cancel the navigation
  }, []);

  return {
    confirmNavigation,
    cancelNavigation,
  };
}
