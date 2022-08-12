import { Anchor, Burger, Header as MantineHeader, Text } from '@mantine/core'
import { IconCamera } from '@tabler/icons'

const Header = () => {
    return (
        <MantineHeader height={70} p={'md'}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                <Anchor href='/' >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconCamera />
                        <Text ml={'xs'} weight={'bold'} color="dark">
                            imgram
                        </Text>
                    </div>
                </Anchor>
                <Burger opened={false} />
            </div>
        </MantineHeader>
    )
}

export default Header