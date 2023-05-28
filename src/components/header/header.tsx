// import { FC, useState } from "react";

// import SendIcon from '@mui/icons-material/Send';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';

// import { Box } from "../box"
// import { Grid } from "../grid"
// import { UploadData } from "../form";
// import { Button } from "../button";
// import axios from "axios";
// import { HeaderProps } from "../../App";



// export const Header: FC<HeaderProps> = ({ setData, data }) => {
//     const [isSending, setIsSending] = useState<boolean>(false);
//     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//     const [response, setResponse] = useState<any>({})


//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     const handleSendData = async () => {
//         if (data.length === 0 || isSending) {
//           return; // Блокуємо відправку, якщо дані відсутні або вже відправлені
//         }

//         setIsSending(true);

//         try {
//           const response = await axios.post("http://localhost:3000/third", { data: "test" });
//           setResponse(response.data);
//           setIsSending(false);
//           setIsModalOpen(true);
//         } catch (error) {
//           console.error('Error sending data:', error);
//           setIsSending(false);
//         }
//       };


//     return (
//         <Box borderBottom="1px solid #aeaeae" marginTop={5}>
//             <Dialog open={isModalOpen} onClose={handleCloseModal}>
//                 <DialogTitle>{response}</DialogTitle>
//                 <Button onClick={handleCloseModal} color="primary" size="small">
//                     Закрити
//                 </Button>
//             </Dialog>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} lg={5} sm={12} marginBottom={3}>
//                     <UploadData setData={setData} />
//                 </Grid>
//                 <Grid item xs={4} lg={3} sm={12} >
//                     <Button
//                         endIcon={<SendIcon />}
//                         variant="contained"
//                         onClick={handleSendData}
//                         disabled={data.length === 0 || isSending} // Блокуємо кнопку, якщо дані відсутні або вже відправлені
//                         size="small"
//                     >
//                         {isSending ? 'Відправляється...' : 'Натисніть для відправки'}
//                     </Button>
//                 </Grid>
//                 <Grid item xs={4} lg={4} sm={12}>

//                 </Grid>
//             </Grid>
//         </Box >
//     )
// }

import { FC, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "../box";
import { Grid } from "../grid";
import { UploadData } from "../form";
import { Button } from "../button";
import axios from "axios";
import { HeaderProps } from "../../App";

export const Header: FC<HeaderProps> = ({ setData }) => {
    const [isSending, setIsSending] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [responseData, setResponse] = useState('');


    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSendData = async () => {
        setIsSending(true);

        try {
            const response: any = await axios.post('https://project-backendx.azurewebsites.net/third', { data: 'test' });
            setResponse(response);
        } catch (error) {
            console.error('Error sending data:', error);
        }

        setIsSending(false);
        setIsModalOpen(true);
    };

    return (
        <Box borderBottom="1px solid #aeaeae" marginTop={5}>
            <Dialog open={isModalOpen} onClose={handleCloseModal}>
                <DialogTitle>{responseData ? responseData : 'Успішно'}</DialogTitle>
                <Button onClick={handleCloseModal} color="primary" size="small">
                    Закрити
                </Button>
            </Dialog>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={5} sm={12} marginBottom={3}>
                    <UploadData setData={setData} />
                </Grid>
                <Grid item xs={4} lg={3} sm={12}>
                    <Button
                        endIcon={<SendIcon />}
                        variant="contained"
                        onClick={handleSendData}
                        disabled={isSending}
                        size="small"
                    >
                        {isSending ? 'Відправляється...' : 'Надіслати'}
                    </Button>
                </Grid>
                <Grid item xs={4} lg={4} sm={12}></Grid>
            </Grid>
        </Box>
    );
};







