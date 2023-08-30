// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react';

export interface AppProps {
  title: string;
}

export const App: React.FC<AppProps> = (props) => {
  const { title } = props;

  return <div>{title}</div>;
};
