import React, { useEffect, useState } from 'react';
import { IPub } from '../types/api';
import BarathonForm from './BarathonForm';



const App = (): JSX.Element => {

   const [pubs, setPubs] = useState<IPub[]>([]);

   useEffect(() => {
      const fetchPubs = async (): Promise<void> => {
         const response = await fetch('http://localhost:5000/pubs');
         const pubs = await response.json();
         setPubs(pubs);
      };

      fetchPubs();
   }, []);

   return (
      <>
        {
            <select>{
            pubs.map((pub: IPub) => {
               return <option key={pub._id}>{pub.name}</option>
            })
            }</select>
        } 
        <BarathonForm/>
      </>
   );
};

export default App;
