import { Notification } from '@mantine/core';
import { IconAlertTriangle } from "@tabler/icons";


const RiskBox = () => {
    return (
        <Notification icon={<IconAlertTriangle size={20} />} color="yellow" radius="lg" title="Potentially risky sharing!" disallowClose>
            We consider this photo to be sensitive with one of your target demographics!
        </Notification>
    )
}

export default RiskBox