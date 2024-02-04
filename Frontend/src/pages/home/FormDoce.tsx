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
  import { AddDoce } from "./AddDoce";
  
  function FormDoce() {
    const [dnombre, setDnombre] = useState();
    const [dapellidos, setDapellidos] = useState();
    const [dmatricula, setDmatricula] = useState();
    const [dpeducativo , setDpeducativo] = useState();
  
    const DnombreInputChange = async (event: any) => {
      setDnombre(event.target.value);
    };
  
    const DapellidosInputChange = async (event: any) => {
      setDapellidos(event.target.value);
    };
  
    const DmatriculaInputChange = async (event: any) => {
      setDmatricula(event.target.value);
    };
  
    const DpeducativoInputChange = async (event: any) => {
      setDpeducativo(event.target.value);
    };
  
    
  
    console.log(dnombre, dapellidos, dmatricula, dpeducativo,);
  
    return (
      <Center>
        <Card backgroundColor="blue.400" w="750px" h="700px">
          <CardHeader>
            <Heading textColor="white">Registro De Maestro </Heading>
          </CardHeader>
          <CardBody w="100%">
            <VStack direction="column">
              <Flex direction="column" gap="10">
                <FormControl w="600px" backgroundColor="blue.400" isRequired>
                  <FormLabel textColor="white">NOMBRE</FormLabel>
                  <Input
                    value={dnombre}
                    onChange={DnombreInputChange}
                    borderRadius="30px"
                    backgroundColor="white"
                    placeholder="Nombre"
                  />
                  <FormLabel textColor="white">APELLIDO PATERNO</FormLabel>
                  <Input
                    value={dapellidos}
                    onChange={DapellidosInputChange}
                    borderRadius="30px"
                    h="50px"
                    backgroundColor="white"
                  />
                  <FormLabel textColor="white">APELLIDO MATERNO</FormLabel>
                  <Input
                    value={dmatricula}
                    onChange={DmatriculaInputChange}
                    borderRadius="30px"
                    backgroundColor="white"
                    placeholder=""
                  />
                  <FormLabel textColor="white">PROGRAMA EDUCATIVO</FormLabel>
                  <Select
                    value={dpeducativo}
                    onChange={DpeducativoInputChange}
                    borderRadius="30px"
                    backgroundColor="white"
                    textColor="black"
                    
                  >
                    <option value="GameFi">GameFi</option>
                    <option value="DeFi">DeFi</option>
                    <option value="Infraestructure">Infraestructure</option>
                    <option value="SupplyChain">SupplyChain</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Tooling">Tooling</option>
                  </Select>
                  <FormLabel textColor="white">MATRICULA</FormLabel>
                  <Input
                  
                   
                  />
                </FormControl>
              </Flex>
            </VStack>
          </CardBody>
          <Center>
            <CardFooter>
              <Center>
                <NewRegistry
                  Dnombre={dnombre}
                  Dapellidos={dapellidos}
                  Dmatricula={dmatricula}
                  Dpeducativo={dpeducativo}
                />
              </Center>
            </CardFooter>
          </Center>
        </Card>
      </Center>
    );
  }
  
  
  
  export { FormDoce };
  