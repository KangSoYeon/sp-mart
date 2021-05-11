import React, { useEffect, useState } from 'react';
import Resizer from "react-image-file-resizer";

function useForm({ initialValues, onSubmit, validate }) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                500,
                500,
                "JPEG",
                100,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64"
            );
        });

    const handleChange = async (event) => {
        const { name, value } = event.currentTarget;

        if (name === "img") {
            const file = event.currentTarget.files[0];
            const image = await resizeFile(file);
            setValues({ ...values, [name]: image });
        } else if (["show", "stock", "top"].indexOf(name) >= 0) {
            const { checked } = event.currentTarget;
            setValues({ ...values, [name]: checked });
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
