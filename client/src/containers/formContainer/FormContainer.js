import React from 'react'
import PrimaryButton from '../../components/buttons/primaryButton/PrimaryButton'
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton';
import FormInput from '../../components/forminput/FormInput';
import './formContainer.css'
import { useNavigate } from 'react-router-dom'

export default function FormContainer(props) {
  const navigate = useNavigate();
  return (
    <div className='form-container'>
      <img className='login-logo' src='/assets/logo.png' alt='logo' />
      <h2>{props.title}</h2>
      {props.successfully && <span className='success'>Successfully</span>}
      <form onSubmit={props.handleSubmit}>
        {props.inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={props.values[input.name]}
            onChange={props.onChange}
          />
        ))}
        <PrimaryButton text={props.title} />
      </form>
      <SecondaryButton onClick={() => navigate(-1)} text='Return' />
    </div>
  )
}
