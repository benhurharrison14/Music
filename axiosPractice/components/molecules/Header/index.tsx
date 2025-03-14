import { Box, IconButton, InputAdornment, styled } from '@mui/material';
import { InputField } from '../../atoms/InputField';
import { CustomButton } from '../../atoms/Button';
import React from 'react';
import { Search } from '@mui/icons-material';

interface HeaderProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    createTodo:() => void;
}

const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

export const Header = ({ value, onChange,createTodo }: HeaderProps) => {
    return (
        <StyledBox>
            <InputField
                placeholder={'Enter here'}
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
            <CustomButton onClick={createTodo}>{'Create'}</CustomButton>
        </StyledBox>
    );
};
