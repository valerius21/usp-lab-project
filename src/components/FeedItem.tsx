import { ActionIcon, Card, Group, Image, Skeleton, Text } from '@mantine/core';
import { IconBookmark, IconHeart, IconMessageCircle, IconSend } from '@tabler/icons';
import useFetch from 'react-fetch-hook';

export function FeedItem({ seed }: { seed: string }) {
    // const { isLoading: iL1, data: titleRaw } = useFetch<string[]>('https://hipsum.co/api/?type=hipster-centric&sentences=1')
    const { isLoading: iL2, data: descRaw } = useFetch<string[]>('https://hipsum.co/api/?type=hipster-centric&sentences=2')

    if (
        // iL1 ||
        iL2) {
        return <>
            <Skeleton height={160} />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </>
    }

    return (
        <Card
            // p="xl"
            withBorder
        >
            <Card.Section>
                <Image
                    src={`https://picsum.photos/seed/${seed}/200/300/?blur=2`}
                    height={160}
                    alt="No way!"
                />
                <Group mt="xs" position='apart'>
                    <Group>
                        <ActionIcon variant='subtle' color={'dark'}>
                            <IconHeart size={16} />
                        </ActionIcon>
                        <ActionIcon variant='subtle' color={'dark'}>
                            <IconMessageCircle size={16} />
                        </ActionIcon>
                        <ActionIcon variant='subtle' color={'dark'}>
                            <IconSend size={16} />
                        </ActionIcon>
                    </Group>

                    <ActionIcon variant='subtle' color={'dark'}>
                        <IconBookmark size={16} />
                    </ActionIcon>
                </Group>
            </Card.Section>
            <Text mt="xs" color="dimmed" size="sm" lineClamp={3}>
                {descRaw![0]}
            </Text>
        </Card>
    );
}