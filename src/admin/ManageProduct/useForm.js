import React, { useEffect, useState } from 'react';

const useForm = ({ initialValues, onSubmit, validate }) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.currentTarget;
        console.log(id, value)
        setValues({ ...values, id : value });
    }

    const handleSubmit = async (e) => {
        setSubmitting(true);
        e.prevenetDefault();
        //서버에 저장
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

    return (
        values,
        errors,
        submitting,
        handleChange,
        handleSubmit
    )
}

export default useForm
