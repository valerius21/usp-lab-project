import { Paper } from "@mantine/core";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { mainDataState } from "../states/mainData";
import { rings } from "./Ring";

const Widget = () => {
    const mainData = useRecoilValue(mainDataState)
    let ringProps = rings[Math.floor(Math.random() * rings.length)];
    useEffect(() => {
        ringProps = rings[Math.floor(Math.random() * rings.length)];
    }, [mainData])
    return (
        <motion.div
            style={{ maxWidth: 120 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.8}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Paper
                withBorder
                shadow={"xl"}
                radius={"xl"}
                sx={{
                    display: "flex",
                    borderColor: "#000",
                    alignItems: "center",
                    height: 80,
                    width: 80,
                    backgroundSize: "contain",
                    backgroundImage: `url("/smoker.jpg")`
                }}
            >
                {/* <Ring data={ringProps} /> */}
                {/* <img src="/smoker.jpg" alt="widget meter" width={70} height={70} style={{ objectFit: 'cover', }} /> */}
            </Paper>
        </motion.div>
    )
}

export default Widget