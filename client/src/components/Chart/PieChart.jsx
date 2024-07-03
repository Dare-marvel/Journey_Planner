import { Box, Flex } from "@chakra-ui/react";
import { useMemo } from "react";

const colors = ['red', 'green', 'blue', 'violet', 'purple', 'orange', 'yellow']
const categories = ['Travel', 'Recreational', 'Medical', 'Bills', 'Rent', 'Food', 'Other']

export default function PieChart({ amountPerCategory, totalAmount }) {
  const bg = useMemo(() => {
    let str = ''
    let sum = 0
    for (let i = 0; i < 7; ++i) {
      sum += amountPerCategory[i]
      const angle = parseFloat(sum) / totalAmount * 360
      str += `${colors[i]} 0 ${angle}deg,`
    }
    // console.log(str);
    return str
  }, [amountPerCategory, totalAmount]);


  return <Flex align='center' gap={4}>
    <Flex direction='column'>{
      colors.map((e, i) => <Flex key={i} align='center' gap={2}>
        <Box display='inline-block' backgroundColor={e} w='10px' h='10px'></Box> {categories[i]}
      </Flex>)
    }</Flex>
    <Box w='150px' h='150px' backgroundColor='white' borderRadius='100%' backgroundImage={`conic-gradient(${bg})`}></Box>
  </Flex>
}