import { Button, Checkbox, ColorSwatch, Group, Stack, Switch, Text, Title, useMantineTheme } from '@mantine/core'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import RiskBox from '../components/RiskBox'
import Widget from '../components/Widget'
import { mainDataState } from '../states/mainData'

const Share = () => {
    const setMainData = useSetRecoilState(mainDataState)
    const navigator = useNavigate()
    const [isChecked, setIsChecked] = useState(false)
    const theme = useMantineTheme()
    return (
        <Stack spacing={'xl'}>
            <Title>Share with...</Title>
            <RiskBox />
            <Stack mt="lg" px="xl">
                <Text weight={'bold'} size={'xl'}>Demographics</Text>
                <Group position='apart'>
                    <Switch
                        label="Friends"
                        size="xl"
                        color="dark"
                        onClick={() => setMainData(s => ({ ...s, shareNumber: 1 }))}
                    />
                    <ColorSwatch color={theme.colors.green[6]} size={35} />
                </Group>
                <Group position='apart'>
                    <Switch
                        label="Collegues"
                        size="xl"
                        color="dark"
                        onClick={() => setMainData(s => ({ ...s, shareNumber: 2 }))}
                    />
                    <ColorSwatch color={theme.colors.yellow[6]} size={35} />
                </Group>
                <Group position='apart'>
                    <Switch
                        label="Family"
                        size="xl"
                        color="dark"
                        onClick={() => setMainData(s => ({ ...s, shareNumber: 3 }))}
                    />
                    <ColorSwatch color={theme.colors.teal[6]} size={35} />
                </Group>
                <Group position='apart'>
                    <Switch
                        label="Aquaintances"
                        size="xl"
                        color="dark"
                        onClick={() => setMainData(s => ({ ...s, shareNumber: 4 }))}
                    />
                    <ColorSwatch color={theme.colors.red[6]} size={35} />
                </Group>
            </Stack>

            <Checkbox
                label="I agree to sell my privacy"
                color="dark"
                size="md"
                my={'xl'}
                mx="auto"
                checked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
            />

            <Group position='apart' grow>
                <Button
                    size='lg'
                    color="dark"
                    disabled={!isChecked}
                    onClick={() => navigator('/done')}
                >
                    Continue
                </Button>
                <Button
                    size="lg"
                    color="dark"
                    variant='outline'
                    onClick={() => navigator('/customize')}
                >
                    Customize
                </Button>
            </Group>

            <div style={{ position: 'absolute', top: 100, right: 100 }}>
                <Widget />
            </div>
        </Stack>
    )
}

export default Share