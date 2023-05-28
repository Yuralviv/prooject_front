import React, { useState } from 'react';

import axios from 'axios';

import { Input } from "../input";
import { Button } from "../button"

export const UploadData = ({ setData }: any) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('https://project-backendx.azurewebsites.net/upload', formData);
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="file"
        id="file-upload"
        onChange={handleFileChange}
      />
      <Button type="submit" variant="contained" >
        Upload
      </Button>
    </form>
  );
};

// export default UploadFile;


