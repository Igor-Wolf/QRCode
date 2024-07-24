'use client'
import styles from "./page.module.css";
import {
  ExternalContainer,
  InternalContainer,
  Form,
  FormGroup,
  Input,
  Label
} from "./styles";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { QRCodeSVG } from 'qrcode.react';
import { Button } from "./Components/Button";
import { useRef, useState } from "react";

export default function Home() {
  const [data, setData] = useState('');
  const qrRef = useRef();

  const handleSubmit = (parametro) => {
    parametro.preventDefault();
    const texto = parametro.target.elements.textoBox.value;
    setData(texto);
    
  }

  const handleDownload = () => {
    const svg = qrRef.current.querySelector('svg');
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new window.Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngFile;
      downloadLink.download = 'qrcode.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgStr);
  };

  return (
    <ExternalContainer>
      <Header />
      <InternalContainer>
        <div ref={qrRef}>
          <QRCodeSVG value={data} />
        </div>

        <Form onSubmit={handleSubmit}>
          <Input type="text" id="title" name="textoBox" placeholder="Texto incluido no QRCode" />
          <Button title="Gerar" type="submit" />
        </Form>

        <Button title="Baixar QR Code" onClick={handleDownload} />
        
        <Footer />
      </InternalContainer>
    </ExternalContainer>
  );
}
