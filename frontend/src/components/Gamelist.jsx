import {
    Windows,
    Playstation,
    MacBook,
    Ubuntu,
    
   
  } from "react-icons/fa";
  import { MdPhoneIphone } from "react-icons/md";
  import { SiNintendo } from "react-icons/si";
  import { BsGlobe } from "react-icons/bs";
  
  import { HStack, Icon } from "react-bootstrap";
  
  const Gamelist = ({ platforms }) => {
    const iconMap = {
      pc: Windows,
      playstation:Playstation,
      mac: MacBook,
      linux:Ubuntu,
      android: FaAndroid,
      ios: MdPhoneIphone,
      web: BsGlobe,
    
    };
  
    return (
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
        ))}
      </HStack>
    );
  };
  
  export default Gamelist;