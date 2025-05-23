import { useEffect, useReducer } from "react"
import validators from "../../validators/validators"

// Import For TextRich
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import "froala-editor/js/plugins/image.min.js"
import FroalaEditor from 'react-froala-wysiwyg';

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE": {
            return {
                ...state,
                value: action.value,
                isValid: validators(action.value, action.validations)
            }
        }
        default: {
            return state
        }
    }
}

export default function Input(props) {

    const [mainInput, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: props.initValid
    })

    const { value, isValid } = mainInput
    const { id, onInputHandler, element, validations, type, placeholder, className } = props

    useEffect(() => {
        onInputHandler(id, value, isValid)
    }, [value])


    const onChangeHandler = event => {
        dispatch({ type: "CHANGE", value: event.target.value, validations: validations })
    }

    if (element === 'input') {
        return (
            <input
                type={type}
                placeholder={placeholder}
                className={`${className} ${!isValid ? 'border border-danger' : 'border'}`}
                onChange={onChangeHandler}
                value={mainInput.value}
            />
        )
    } else if (element === 'textrich') {
        return (
            <div id="editor" className='my-4'>
                <FroalaEditor
                    onModelChange={onChangeHandler}
                    model={mainInput.value}
                    config={{
                        placeholderText: placeholder,
                        direction: "rtl"
                    }}
                    tag='textarea'
                />
            </div>
        )
    } else {
        return (
            <textarea
                placeholder={placeholder}
                className={`${className} ${!isValid ? 'border border-danger' : 'border'}`}
                onChange={onChangeHandler}
                value={mainInput.value}
            />
        )
    }

}