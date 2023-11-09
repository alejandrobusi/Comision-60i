import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormV2 = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    checked: '',
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  const handleChange = (e) => {
    console.log(e.target.checked);
    setFormData((prev) => ({
      ...prev,
      [e.target.name] : e.target.value,
      checked : e.target.checked,
    }))
  }

  return (
    <div className='container'>
      <div className="row justify-content-center mt-5">
        <Form className='col-6' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={formData.email} name='email' onChange={handleChange} required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={formData.password} name='password' onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" value={formData.checked} name='checked' onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default FormV2;
