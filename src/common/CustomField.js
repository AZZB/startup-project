import React from 'react';
import { Form, Message } from 'semantic-ui-react';


const CustomField = (props) => {
    console.log('CustomField: props: ', props);
    const {input, placeholder, type, meta: {touched, error}} = props;

    return (
      <div>
        <Form.Input {...input} placeholder={placeholder} type={type} error={touched && !!error}/>
        <span>{ (touched && error) || '' }</span>
      </div>

    );
};


export default CustomField;


//{touched && error && <span>{error}</span>}
//<span>{ (touched && error) || '' }</span>
