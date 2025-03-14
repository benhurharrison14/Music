import { Box, Modal, Stack, styled } from '@mui/material';
import { Header } from '../../molecules/Header';
import { Electronics, ElectronicsProps } from '../../../utils/constants';
import { CustomTypography } from '../../atoms/Typography';
import { useState } from 'react';
import { CustomButton } from '../../atoms/Button';

const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});

const EachRow = styled(Box)({
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
});

const StyledModal = styled(Box)({
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    width: '15%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
});

export const ShoppingCart = () => {
    const [searchElement, setSearchElement] = useState<string>('');
    const [filteredSearch, setFilteredSearch] = useState<ElectronicsProps[]>(
        []
    );
    const [cart, setCart] = useState<ElectronicsProps[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const addToCart = (id: number) => {
        const electronic = Electronics.find((item) => item.id === id);
        if (electronic) setCart([...cart, electronic]);
    };

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const renderElectronicsList = (electronicsList: ElectronicsProps[]) => {
        return electronicsList.map(({ id, name, manufacturer, price }) => (
            <EachRow key={id}>
                <Stack direction={'column'} spacing={1}>
                    <CustomTypography sx={{ fontWeight: 'bold' }}>
                        {name}
                    </CustomTypography>
                    <CustomTypography>{manufacturer}</CustomTypography>
                    <CustomTypography>{price}</CustomTypography>
                </Stack>
                <CustomButton
                    variant="contained"
                    sx={{ height: 'fit-content' }}
                    onClick={() => addToCart(id)}
                >
                    {'Add to Cart'}
                </CustomButton>
            </EachRow>
        ));
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchedQuery = event.target.value.toLowerCase();
        setSearchElement(searchedQuery);
        const filtered = Electronics.filter((item) =>
            item.name.toLowerCase().includes(searchedQuery)
        );
        setFilteredSearch(filtered);
    };

    return (
        <StyledBox>
            <Header
                placeholder={'Search here'}
                value={searchElement}
                badgeContent={cart.length}
                onChange={handleSearch}
            />
            {filteredSearch.length > 0
                ? renderElectronicsList(filteredSearch)
                : renderElectronicsList(Electronics)}
            <CustomButton onClick={handleModalOpen}>{'Buy now'}</CustomButton>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <StyledModal>
                <CustomTypography variant="h5">Your Cart</CustomTypography>
                    {cart.map((item) => (
                        <>
                        <Stack direction={"row"} justifyContent={"space-around"}>
                        <CustomTypography key={item.id}>{item.name}</CustomTypography>
                        <CustomTypography>{item.price}</CustomTypography></Stack></>
                    ))}
                </StyledModal>
            </Modal>
        </StyledBox>
    );
};
