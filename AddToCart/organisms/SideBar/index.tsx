import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import { CustomTypography } from '../../atoms/Typography';
import { NavButton } from '../../molecules/NavButton';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled(Box)({
    width: '17vw',
    height: '95vh',
    border: '2px solid black',
    borderRadius: '8px',
    padding: '24px',
    margin: '24px'
});

interface NavButtonItem {
    label: string;
    icon: React.ReactNode;
    path: string;
}

export const SideBar = () => {
    const [selectedButton, setSelectedButton] = useState<string>('Home');
    const navigate = useNavigate();

    const navButtons: NavButtonItem[] = [
        { label: 'Home', icon: <GridViewOutlinedIcon />, path: '/' },
        { label: 'Profile', icon: <GridViewOutlinedIcon />, path: '/profile' },
        {
            label: 'Candidates',
            icon: <GridViewOutlinedIcon />,
            path: '/candidates'
        },
        {
            label: 'AnotherItem',
            icon: <GridViewOutlinedIcon />,
            path: '/another'
        }
    ];

    const handleButtonClick = (label: string, path: string) => {
        setSelectedButton(label);
        navigate(path);
    };

    return (
        <MainContainer>
            <CustomTypography marginBottom={'10px'} paddingLeft={'12px'}>
                {'RECRUIT'}
            </CustomTypography>
            {navButtons.map((button) => (
                <NavButton
                    key={button.label}
                    icon={button.icon}
                    selectedButton={selectedButton === button.label}
                    onClick={() => handleButtonClick(button.label, button.path)}
                >
                    {button.label}
                </NavButton>
            ))}
        </MainContainer>
    );
};
