import { Box, Stack, styled } from '@mui/material';
import { CustomTypography } from '../../atoms/Typography';
import { CustomButton } from '../../atoms/Button';

interface ToDoProps {
    todo: string;
    deleteTodo: () => void;
}

const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

export const ToDo = ({ todo, deleteTodo }: ToDoProps) => {
    return (
        <StyledBox>
            <CustomTypography>{todo}</CustomTypography>
            <Stack direction={'row'} spacing={1}>
                <CustomButton onClick={deleteTodo}>
                    {'Delete Todo'}
                </CustomButton>
            </Stack>
        </StyledBox>
    );
};
