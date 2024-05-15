'use client';
import React, { useEffect } from 'react';
export default function PageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  // get children  props
  useEffect(() => {
    React.Children.map(children, (child) => {
      console.log(child);
    });
  }, []);

  return <div className="page-content">{children}</div>;
}
