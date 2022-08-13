import { faker } from '@faker-js/faker';
import { Button, List, ScrollArea, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons";
import { useNavigate } from 'react-router-dom';
import Widget from '../components/Widget';

const UserList = () => {
    return (
        <List
            spacing="xs"
            size="sm"
            center
            icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                    <IconCircleCheck size={16} />
                </ThemeIcon>
            }
        >
            <List.Item>{faker.name.fullName()}</List.Item>
            <List.Item>{faker.name.fullName()}</List.Item>
            <List.Item>{faker.name.fullName()}</List.Item>
            <List.Item
                icon={
                    <ThemeIcon color="red" size={24} radius="xl">
                        <IconCircleDashed size={16} />
                    </ThemeIcon>
                }
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
            <div style={{ position: 'absolute', top: 100, right: 30 }}>
                <Widget />
            </div>
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