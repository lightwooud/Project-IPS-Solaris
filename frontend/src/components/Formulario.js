
import React from 'react'
import { useState } from 'react'
import {StyledFormWrapper,StyledError,StyledForm,StyledTextArea,StyledInput,StyledFieldset,StyledButton} from './styles/Formulario.styled'
import { InitalState } from './styles/Formulario.styled';
import {createGlobalStyle} from 'styled-components';
import { DatePicker } from 'react-styled-calendar';


const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #ebfbff,#ebfbff);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

export default function Formulario() {
  const [state, setState] = useState(InitalState);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Enviado!');
    console.log(state);

    
    setError('');
    
    console.log("Succeeded!!!")
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };
  return (
    <> 
        <GlobalStyle />
          <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit} >
              <h2>ASIGNACION DE CITAS</h2>
              <StyledFieldset>
              <label>Nombre</label>
              <StyledInput
              type="text"
              name="nombre"
              value={state.nombre}
              onChange={handleInput}
              />
              <label>Apellido</label>
              <StyledInput
              type="text"
              name="apellido"
              value={state.apellido}
              onChange={handleInput}
              />
            </StyledFieldset>
            <StyledFieldset>
              <legend>Documento</legend>
              <select id="PAR_tipoDocumento_1" name="PAR_tipoDocumento_1" class="form-control"> <option value="AS"></option><option value="CC">Cédula de Ciudadanía</option><option value="CD">Carne Diplomático</option><option value="CE">Cédula de Extranjería</option><option value="CN">Certificado de Nacido Vivo</option><option value="MS">Menor sin Identificación</option><option value="NI">Número Identificación Tributaria</option><option value="NU">Número Único de Identificación</option><option value="PA">Pasaporte</option><option value="PE">Permiso Especial de Permanencia</option><option value="RC">Registro Civil</option><option value="SC">Salvoconducto de Permanencia</option><option value="TI">Tarjeta de Identidad</option><option value="PT"> Permiso por Protección Temporal</option></select>

            </StyledFieldset>
            <StyledFieldset>
              <legend>Fecha de nacimiento</legend>
              <select id="FECPAR_fechaNacimiento_3_ano" name="FECPAR_fechaNacimiento_3_ano" onchange="limpiarfecha('FECPAR_fechaNacimiento_3_mes','FECPAR_fechaNacimiento_3_dia')"><option value=""></option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option><option value="1904">1904</option><option value="1903">1903</option><option value="1902">1902</option><option value="1901">1901</option><option value="1900">1900</option><option value="1899">1899</option><option value="1898">1898</option><option value="1897">1897</option><option value="1896">1896</option><option value="1895">1895</option><option value="1894">1894</option><option value="1893">1893</option><option value="1892">1892</option></select>
              <select id="FECPAR_fechaNacimiento_3_mes" name="FECPAR_fechaNacimiento_3_mes" onchange="verificardias(this.value,'FECPAR_fechaNacimiento_3_dia','FECPAR_fechaNacimiento_3_ano')"><option value=""></option><option value="01">Enero</option><option value="02">Febrero</option><option value="03">Marzo</option><option value="04">Abril</option><option value="05">Mayo</option><option value="06">Junio</option><option value="07">Julio</option><option value="08">Agosto</option><option value="09">Septiembre</option><option value="10">Octubre</option><option value="11">Noviembre</option><option value="12">Diciembre</option></select>
             <select id="FECPAR_fechaNacimiento_3_dia" name="FECPAR_fechaNacimiento_3_dia"><option value=""></option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
         
            </StyledFieldset>
              <StyledFieldset>
              <legend>Genero</legend>
              <label>
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  checked={state.gender === 'female'}
                  onChange={handleInput}
                />
                Masculino
              </label>
              <label>
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  checked={state.gender === 'male'}
                  onChange={handleInput}
                />
                Femenino
              </label>
            </StyledFieldset>
            <StyledFieldset>
              <label>Telefono</label>
                <StyledInput
                type="text"
                name="telefono"
                value={state.telefono}
                onChange={handleInput}
                />
                <label>Direccion</label>
                <StyledInput
                type="text"
                name="direccion"
                value={state.direccion}
                onChange={handleInput}
                />
            </StyledFieldset>
            <StyledFieldset>
              <legend>EPS</legend>
              <select id="eps" name="eps_1" class="form-control"> <option value="AS"></option><option value="CC">Confamiliar</option><option value="CD">Sanitas</option><option value="CE">Nueva EPS</option><option value="ST">SaludTotal</option><option value="CS">Capital salud</option><option value="FS">Famisanar</option></select>
            </StyledFieldset>
            <StyledFieldset>
                <label>Fecha cita</label>
                <DatePicker/>
            </StyledFieldset>
            <StyledFieldset>
              <label htmlFor="message">Motivo de consulta</label>
              <StyledTextArea
                name="message"
                value={state.message}
                onChange={handleInput}
              />
              {error && (
                <StyledError>
                  <p>{error}</p>
                </StyledError>
              )}
              <StyledButton type='submit'>Soportes</StyledButton>
              <StyledButton type="submit">Agendar cita</StyledButton>
      
            </StyledFieldset>
            
               
            </StyledForm>
         </StyledFormWrapper> 
   </>

  )
}
       
