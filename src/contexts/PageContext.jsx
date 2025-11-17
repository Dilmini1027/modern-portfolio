import React, { createContext, useState } from 'react';

export const PageContext = createContext({ current: 'hero', setCurrent: () => {} });

export const PageProvider = ({ children }) => {
  const [current, setCurrent] = useState('hero');
  return (
    <PageContext.Provider value={{ current, setCurrent }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
