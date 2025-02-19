import { Image } from "@chakra-ui/react"

interface Props {
    src: string;
    boxSize: string;
}

const CircleImage = (props: Props) : JSX.Element => {
    return (
        <Image src={props.src} boxSize={props.boxSize} borderRadius="full" border="1px" />
    );
}

export default CircleImage;