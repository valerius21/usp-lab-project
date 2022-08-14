import { faker } from '@faker-js/faker';
import { Button, List, ScrollArea, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconCircleCheck, IconCircleDashed, IconCircleX } from "@tabler/icons";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Widget from '../components/Widget';

const DeactivatedIcon = () => {
    return (
        <ThemeIcon color="grey" size={24} radius="xl">
            <IconCircleDashed />
        </ThemeIcon>
    )
}

const DangerIcon = () => (
    <ThemeIcon color="red" size={24} radius="xl">
        <IconCircleX size={16} />
    </ThemeIcon>
)

const GreenIcon = () => (
    <ThemeIcon color="teal" size={24} radius="xl">
        <IconCircleCheck size={16} />
    </ThemeIcon>
)

const UserList = () => {
    const [itemOne, setItemOne] = useState(true)
    const [itemTwo, setItemTwo] = useState(true)
    const [itemThree, setItemThree] = useState(true)
    const [itemFour, setItemFour] = useState(true)

    return (
        <List
            spacing="xs"
            size="sm"
            center

        >
            <List.Item
                icon={itemOne ? <GreenIcon /> : <DeactivatedIcon />}
                onClick={() => setItemOne(!itemOne)}
            >
                {faker.name.fullName()}
            </List.Item>
            <List.Item
                icon={itemTwo ? <GreenIcon /> : <DeactivatedIcon />}
                onClick={() => setItemOne(!itemOne)}
            >
                {faker.name.fullName()}
            </List.Item>
            <List.Item
                icon={itemThree ? <GreenIcon /> : <DeactivatedIcon />}
                onClick={() => setItemOne(!itemOne)}
            >
                {faker.name.fullName()}
            </List.Item>
            <List.Item
                icon={itemFour ? <DangerIcon /> : <DeactivatedIcon />}
                onClick={() => setItemOne(!itemOne)}
            >
                {faker.name.fullName()}
            </List.Item>
        </List>
    );
}

const Customize = () => {
    const navigation = useNavigate()
    return (
        <Stack>
            <Title>Select people</Title>
            <Text color="dimmed">
                Select people you want to share with.
            </Text>
            <ScrollArea.Autosize maxHeight={500} type="auto">
                <Stack>

                    <Text weight={'bold'}>
                        Friends
                    </Text>
                    <UserList />

                    <Text weight={'bold'}>
                        Collegues
                    </Text>
                    <UserList />

                    <Text weight={'bold'}>
                        Family
                    </Text>
                    <UserList />

                    <Text weight={'bold'}>
                        Aquaintances
                    </Text>
                    <UserList />
                </Stack>
            </ScrollArea.Autosize>
            {/* <div style={{ position: 'absolute', top: 100, right: 100 }}> */}
            <Widget />
            {/* </div> */}
            <Button
                size='lg'
                color="dark"
                mt="xl"
                radius="lg"
                onClick={() => navigation('/done')}
            >
                Continue
            </Button>
        </Stack>
    )
}

export default Customize