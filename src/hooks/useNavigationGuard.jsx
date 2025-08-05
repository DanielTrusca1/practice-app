import { unstable_useBlocker as useBlocker } from "react-router-dom";
import { useEffect, useRef } from "react";

export function useNavigationGuard(shouldBlock, onNavigateAttempt) {
  const blocker = useBlocker(shouldBlock);
  const blockerRef = useRef(blocker);
  blockerRef.current = blocker;

  useEffect(() => {
    if (blockerRef.current.state === "blocked") {
      onNavigateAttempt({
        proceed: blockerRef.current.proceed,
        reset: blockerRef.current.reset,
      });
    }
  }, [blocker.state, onNavigateAttempt]);
}
