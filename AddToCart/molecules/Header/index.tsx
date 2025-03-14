import { Badge, Box, IconButton, InputAdornment, styled } from '@mui/material';
import { InputField } from '../../atoms/Inputfield';
import React from 'react';
import { Search, ShoppingCart } from '@mui/icons-material';

interface HeaderProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    value: string;
    badgeContent: number;
}

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems:"center",
    gap:"24px"
})
export const Header = ({
    onChange,
    placeholder,
    value,
    badgeContent
}: HeaderProps) => {
    return (
        <StyledBox>
            <InputField
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                inputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <Badge badgeContent={badgeContent}>
                <ShoppingCart />
            </Badge>
        </StyledBox>
    );
};
