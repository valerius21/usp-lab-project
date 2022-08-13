import { Button, Group, Stack, Title } from '@mantine/core'
import { IconPlus } from '@tabler/icons'
import { useNavigate } from 'react-router-dom'
import { seq } from 'vseq'
import { FeedItem } from '../components/FeedItem'

const Home = () => {
    const navigation = useNavigate()
    return (
        <Stack>
            <Group position='apart'>
                <Title>Feed</Title>
                <Button
                    uppercase
                    leftIcon={<IconPlus />}
                    variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}
                    onClick={() => navigation('/upload')}
                >
                    New Post
                </Button>
            </Group>
            {seq(1, 10).map(i => (
                <div key={i}>
                    <FeedItem seed={'' + i} />
                </div>
            ))}
        </Stack>
    )
}

export default Home