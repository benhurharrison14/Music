import { Typography, TypographyProps } from '@mui/material';

export interface CustomTypographyProps extends TypographyProps {
    children: string | number;
}

export const CustomTypography = ({
    children,
    ...rest
}: CustomTypographyProps) => {
    return <Typography {...rest}>{children}</Typography>;
};
