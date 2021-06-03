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
        } else if (["size", "color"].includes(name)) {
            const optionArr = value.split(",");
            setValues({ ...values, [name]: optionArr });
        } else if (name === "category") {
            const categoryArr = [value];
            setValues({ ...values, [name]: categoryArr });
        } else if (["show", "stock", "top"].includes(name)) {
            const { checked } = event.currentTarget;
            setValues({ ...values, [name]: checked });
        } else if (["salePrice", "originalPrice"].includes(name)) {
            setValues({ ...values, [name]: Number(value)});
        } else {
            setValues({ ...values, [name]: value });
        }
    }

    const handleOptions = async ( title, input ) => {
        console.log("option:", input);
        setValues({...values, ...input});
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
        handleSubmit,
        handleOptions
    }
}

export default useForm
