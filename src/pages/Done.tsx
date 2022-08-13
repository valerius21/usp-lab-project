import { Button, Stack, Title } from "@mantine/core"
import { useNavigate } from "react-router-dom"

const Done = () => {
    const navigation = useNavigate()
    return (
        <Stack>
            <Title order={1} align="center" mt={'xl'}>Done. 👌</Title>
            <Button mt="xl" variant="outline" color={'dark'} onClick={() => navigation('/')}>Go to Feed</Button>
        </Stack>
    )
}

export default Done