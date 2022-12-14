import { Box, RingProgress, Text } from "@mantine/core"

export interface Ring {
    value: number,
    color: string,
    text: string,
    emoji: string,
}

export const rings: Ring[] = [
    {
        value: 100,
        color: 'red',
        text: 'risky',
        emoji: "๐คจ"
    }, {
        value: 80,
        color: 'orange',
        emoji: '๐คซ',
        text: 'concerning'
    }, {
        value: 60,
        color: 'yellow',
        emoji: '๐',
        text: 'neutral'
    }, {
        value: 40,
        color: 'lime',
        emoji: "๐",
        text: 'fair'
    }, {
        value: 20,
        color: 'green',
        emoji: '๐',
        text: 'good'
    }
]

export function Ring({ data }: { data: Ring }) {
    const { color, emoji, text, value } = data
    return (
        <Box style={{ marginLeft: 'auto', marginRight: 'auto' }} >
            <RingProgress
                roundCaps
                label={
                    text.length > 0 ? <Text weight={700} align='center' size='xs'>
                        {emoji}
                        <br />
                        {text}
                    </Text> : null
                }
                sections={[
                    { value, color },
                ]}
            />
        </Box>
    )
}