import React from 'react';
import Input from './Input';

const BarathonForm = (): JSX.Element => {

    const handleSubmit = (): void => {

    };

   return (
      <form onSubmit={handleSubmit}>
        <Input name='name' type='text' />
      </form>
   );
};

export default BarathonForm;
