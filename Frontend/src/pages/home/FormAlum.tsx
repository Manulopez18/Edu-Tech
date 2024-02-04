import {
    Select,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Card,
    Center,
    CardBody,
    CardHeader,
    Heading,
    CardFooter,
    Button,
    HStack,
    VStack,
    Flex,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { AddAlum } from "./AddAlum";
  
  function FormAlum() {
    const [amatricula, setAmatricula] = useState();
    const [anombre, setAnombre] = useState();
    const [apaterno, setApaterno] = useState();
    const [amaterno, setAmaterno] = useState();
    const [aprograma, setAprograma] = useState();
    const [cuatrimestre, setCuatrimestre] = useState();
  
    const AmatriculaInputChange = async (event: any) => {
      setAmatricula(event.target.value);
    };
  
    const AnombreInputChange = async (event: any) => {
      setAnombre(event.target.value);
    };
  
    const ApaternoInputChange = async (event: any) => {
      setApaterno(event.target.value);
    };
  
    const AmaternoInputChange = async (event: any) => {
      setAmaterno(event.target.value);
    };
  
    const CuatrimestreInputChange = async (event: any) => {
      setAprograma(event.target.value);
    };

    const AprogramaInputChange = async (event: any) => {
      setAprograma(event.target.value);
    };
  
    console.log(amatricula, anombre, apaterno, amaterno, aprograma, cuatrimestre);
  
    return (
      <Center>
        <Card backgroundColor="blue.400" w="600px" h="600px">
          <CardHeader>
          
            <Heading textColor="white "><center>Registro de alumnos</center></Heading>
          </CardHeader>
          <CardBody w="100%">
            <VStack direction="column">
              <Flex direction="column" gap="10">
                <FormControl w="500px" backgroundColor="" isRequired>
                  <FormLabel textColor="white">Matricula</FormLabel>
                  <Input
                    value={amatricula}
                    onChange={AmatriculaInputChange}
                    borderRadius="30px"
                    backgroundColor="white"
                    placeholder="Escribe tu matricula"
                  />
                  <FormLabel textColor="white">Nombre</FormLabel>
                  <Input
                    value={anombre}
                    onChange={AnombreInputChange}
                    borderRadius="30px"
                    h="40px"
                    backgroundColor="white"
                  />
                  <FormLabel textColor="white"> Apellido Paterno</FormLabel>
                  <Input
                    value={apaterno}
                    onChange={ApaternoInputChange}
                    borderRadius="30px"
                    backgroundColor="white"
                    placeholder=""
                  />
                  <FormLabel textColor="white">Apellido Materno </FormLabel>
                  <Input
                    value={amaterno}
                    onChange={AmaternoInputChange}
                    borderRadius="30px"
                    backgroundColor="white"
                    placeholder=""
                  />

                  <FormLabel textColor="white">Cuatrimestre </FormLabel>
                  <Select
                    value={cuatrimestre}
                    onChange={CuatrimestreInputChange}
                    borderRadius="30px"
                    backgroundColor="white"
                    textColor="black"
                    placeholder=""

                    >
                    <option value="GameFi">Elige tu nivel</option>
                    <option value="DeFi">1ro</option>
                    <option value="Infraestructure">2do</option>
                    <option value="SupplyChain">3ero</option>
                    <option value="Gaming">4to</option>
                    <option value="Tooling">5to</option>
                    <option value="">6to</option>
                    <option value="">7mo</option>
                    <option value="">8vo</option>
                    <option value="">9no</option>
                    <option value="">10mo</option>
                    <option value="">11vo</option>
                  
                  </Select>
                  
                  <FormLabel textColor="white">Programa Educativo </FormLabel>
                  <Select
                    value={aprograma}
                    onChange={AprogramaInputChange}
                    borderRadius="30px"
                    backgroundColor="white"
                    textColor="black"
                    placeholder=""
                   >
                    <option value="GameFi">Elige tu Ing/Lic</option>
                    <option value="DeFi">Lic. Conta</option>
                    <option value="Infraestructure">Lic. Inovación</option>
                    <option value="SupplyChain">Lic. Capital Humano</option>
                    <option value="Gaming">Ing. Industrial</option>
                    <option value="Tooling">Ing. Sistemas</option>
                    </Select> 
                  
                </FormControl>
              </Flex>
            </VStack>
          </CardBody>
          <Center>
            <CardFooter>
              <Center>
                <NewRegistry
                  Amatricula={amatricula}
                  Anombre={anombre}
                  Apaterno={apaterno}
                  Amaterno={amaterno}
                  Cuatrimestre={cuatrimestre}
                  Aprograma={aprograma}
                />
              </Center>
            </CardFooter>
          </Center>
        </Card>
      </Center>
    );
  }
  
  export { FormAlum };