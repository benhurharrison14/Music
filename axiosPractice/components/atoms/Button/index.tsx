import { Button, ButtonProps, SxProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
    children: string;
    sx?: SxProps;
}
export const CustomButton = ({ children, sx, ...rest }: CustomButtonProps) => {
    return (
        <Button {...rest} sx={{ textTransform: 'none', ...sx }}>
            {children}
        </Button>
    );
};
