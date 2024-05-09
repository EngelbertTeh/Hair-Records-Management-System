'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useRef,
useState,
} from 'react';

export const ElementContext = createContext<
  [
    HTMLDivElement | null,
    Dispatch<SetStateAction<HTMLDivElement | null>> | null
  ]
>([null, null]);

export function ElementContextProvider({ children }: { children: any }) {
  const parent = useRef(null);
  const [parentRef, setParentRef] = useState<HTMLDivElement | null>(null);

  return (
    <ElementContext.Provider value={[parentRef, setParentRef]}>
      {children}
    </ElementContext.Provider>
  );
}
