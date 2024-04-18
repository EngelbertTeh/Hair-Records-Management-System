'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong on purpose</h2>
    </div>
  );
}
