import { Typography, TypographyProps } from '@mui/material';

interface CustomTypographyProps extends TypographyProps {
    children: string;
}

export const CustomTypography = ({
    children,
    ...rest
}: CustomTypographyProps) => {
    return <Typography {...rest}>{children}</Typography>;
};
