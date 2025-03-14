import { IconButton, Stack, styled } from '@mui/material';
import {
    CustomTypography,
    CustomTypographyProps
} from '../../atoms/Typography';

interface IconTypoProps {
    children: string;
    icon: React.ReactNode;
    typoProps?: CustomTypographyProps;
    selectedButton: boolean;
    onClick?: () => void;
}

const StyledBox = styled(Stack)({
    width: '97%',
    height: '44px',
    borderRadius: '8px',
    cursor: 'pointer'
});

export const NavButton = ({
    icon,
    children,
    typoProps,
    onClick,
    selectedButton
}: IconTypoProps) => {
    return (
        <StyledBox
            direction={'row'}
            spacing={0}
            alignItems={'center'}
            onClick={onClick}
            sx={{ backgroundColor: selectedButton ? '#EFF2FF' : '' }}
        >
            <IconButton>{icon}</IconButton>
            <CustomTypography {...typoProps}>{children}</CustomTypography>
        </StyledBox>
    );
};
