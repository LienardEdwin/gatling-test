import React from 'react';
import type { NextPage } from 'next'
import App from './_app';
import reportWebVitals from './reportWebVitals';
import UsersTable from "../components/UsersTable";

const Home: NextPage = () => {
  return(
  <div>
    <UsersTable/>
  </div>
);

}
export default Home

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();