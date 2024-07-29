import { Form, Button } from "semantic-ui-react";
import ModalsWrapper from "../../app/common/modals/ModalsWrapper";
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/store/store";
import { closeModal } from "../../app/common/modals/modalSlice";
import { SignIn } from "./authSlice";



export default function LoginForm() {
    const {register, handleSubmit, formState: {isSubmitting, isValid, isDirty, errors}} = useForm({
        mode: 'onTouched'
    });
    function onSubmit(data: FieldValues) {
        dispatch(SignIn(data));
        dispatch(closeModal());
        
    }
    const dispatch = useAppDispatch();

  return (
    <ModalsWrapper header='Sign into'>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input
            defaultValue=''
            placeholder='Email'
            {...register('email', {required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/})}
            error={errors.email?.type  === 'required' && 'Email is required'
            || 
            errors.email?.type === 'pattern' && 'Email is not valid'
            } 
            />
            <Form.Input
            type="password"
            defaultValue=''
            placeholder='Password'
            {...register('password', {required: true})}
            error={errors.password && 'Password is required'}
            />
            <Button 
            loading={isSubmitting}
            disabled={!isValid || !isDirty || isSubmitting}
            type='submit'
            fluid
            size='large'
            color='teal'
            content='Login'
            />
        </Form>
    </ModalsWrapper>
  )
}