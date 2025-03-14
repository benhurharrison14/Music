import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
    children: string;
}
export const CustomButton = ({ children, ...rest }: CustomButtonProps) => {
    return <Button {...rest}>{children}</Button>;
};
