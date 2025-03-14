import { InputProps, SxProps, TextField } from '@mui/material';

interface TextFieldProps {
    placeholder?: string;
    value?: string;
    sx?: SxProps;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputProps?: InputProps;
}

export const InputField = ({
    placeholder,
    value,
    sx,
    onChange,
    inputProps
}: TextFieldProps) => {
    return (
        <TextField
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            sx={sx}
            size={"small"}
            InputProps={inputProps}
        />
    );
};
