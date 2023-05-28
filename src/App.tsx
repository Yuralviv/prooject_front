import { useState, FC, SetStateAction, Dispatch } from 'react'

import { Container } from "./components/container";
import { Header } from './components/header/header';
import Main from './pages/Main/Main';

export type ExcelData = {
  api_key: string;
  map_id: number;
  email: string;
  first_name: string;
  second_name: string;
  phone: string;
  country: string;
  language: string;
  campaign: string;
  description: string;
  password: string;
}

export type HeaderProps = {
  setData: Dispatch<SetStateAction<ExcelData[]>>;
  data: ExcelData[];
}


const App: FC = () => {
  const [data, setData] = useState<ExcelData[]>([]);


  return (
    <Container>
      <Header setData={setData} data={data} />
      <Main data={data} />

    </Container>
  )
}

export default App
