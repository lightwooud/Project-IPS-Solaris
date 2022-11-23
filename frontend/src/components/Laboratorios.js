import React from 'react'
import{GlobalStyle,StyledFormWrapper,StyledTable,HeadTabla} from './styles/Laboratorios.styled'
import {BsFillPersonFill} from "react-icons/bs";
import {AiOutlineDownload,AiFillFolderOpen} from "react-icons/ai";
import { Button } from 'semantic-ui-react';




export default function Laboratorios() {
  return (
    <>
    <GlobalStyle/>
    <StyledFormWrapper>
        <HeadTabla>
        <h2>EXAMENES</h2>
        <p><BsFillPersonFill/>CC.364528695 SANDRA PATRICIA MARTINEZ</p>
            <StyledTable>
                <colgroup>
                <col />
                <col />
                </colgroup>
                <thead>
                <tr>
                    <th>Examenes</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                    <tr >
                    <td>Mamografia</td>
                    <td><Button><AiOutlineDownload/></Button><Button><AiFillFolderOpen/></Button></td>
                    </tr>
                    <tr>
                        <td>Ecografia</td>
                        <td><Button><AiOutlineDownload/></Button><Button><AiFillFolderOpen/></Button></td>
                    </tr>
                    <tr>
                        <td>Radiografia</td>
                        <td><Button><AiOutlineDownload/></Button><Button><AiFillFolderOpen/></Button></td>
                    </tr>
                </tbody>
                <p>Para mejorar su experiencia en el aplicativo se recomienda usar los navegadores Google Chrome o Mozilla Firefox</p>
            </StyledTable>
        </HeadTabla>
    </StyledFormWrapper>
    </>
  )
}
