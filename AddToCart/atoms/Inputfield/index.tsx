import { InputProps, TextField } from '@mui/material';

interface InputFieldProps {
    placeholder: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputProps?: InputProps;
}
export const InputField = ({
    placeholder,
    value,
    onChange,
    inputProps
}: InputFieldProps) => {
    return (
        <TextField
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            InputProps={inputProps}
        />
    );
};
