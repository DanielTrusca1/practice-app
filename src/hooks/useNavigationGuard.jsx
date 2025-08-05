import { useBlocker } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export function useNavigationGuard(shouldBlock, onAttempt) {
  const blocker = useBlocker(shouldBlock);
  const prev = useRef(blocker.state);

  useEffect(() => {
    if (blocker.state === 'blocked' && prev.current !== 'blocked') {
      onAttempt({ proceed: blocker.proceed, reset: blocker.reset });
    }
    prev.current = blocker.state;
  }, [blocker.state, onAttempt]);
}
