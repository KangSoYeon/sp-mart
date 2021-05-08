import React, { useEffect, useState } from 'react';

function useForm({ initialValues, onSubmit, validate }) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value, checked } = event.currentTarget;
        //checked 변수 처리하기 
        if (value) {
            setValues({ ...values, [name]: !!checked });

        } else {
            setValues({ ...values, [name]: value });

        }
        console.log(values)
    }

    const handleSubmit = async (e) => {
        setSubmitting(true);
        e.preventDefault();
        setErrors(validate(values));
    }

    useEffect(() => {
        if (submitting) {
            if (Object.keys(errors).length === 0) {
                onSubmit(values);
            }
            setSubmitting(false);
        }
    }, [errors])

    return {
        values,
        errors,
        submitting,
        handleChange,
        handleSubmit
    }
}

export default useForm
