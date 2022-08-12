import { Button, Image, Stack, TextInput, Title } from "@mantine/core"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import Widget from "../components/Widget"
import { mainDataState } from "../states/mainData"

const UploadRisk = () => {
    const [mainData, setMainData] = useRecoilState(mainDataState)
    const [isUploading, setIsUploading] = useState(false)
    const files = mainData.files || []
    const navigate = useNavigate()
    if (files.length == 0) {
        navigate('/upload');
        return null
    }
    const img = files[0]
    return (
        <Stack spacing={'xl'}>
            <Title>Upload Risk</Title>
            <Image
                src={URL.createObjectURL(img)}
                radius='lg'
            // imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
            />
            <div>
                <TextInput
                    value={mainData.photoDescription}
                    placeholder="Ex. Having a nice cup of #yorkshire #tea 🍵"
                    label="Description"
                    description="Let others know what this picture is about."
                    radius="md"
                    size="md"
                    required
                    onChange={(e) => setMainData({ ...mainData, photoDescription: e.target.value })}
                />
            </div>
            <Button
                size="lg"
                color="dark"
                mt={7}
                radius="lg"
                fullWidth
                type="submit"
                loading={isUploading}
                onClick={() => {
                    setIsUploading(true);
                    setTimeout(() => {
                        setIsUploading(false)
                        navigate('/upload-risk')
                    }, 1500);
                }}
            >
                {isUploading ? "Loading ... " : "Continue"}
            </Button>
            <div style={{ position: 'absolute', top: 100, right: 30 }}>
                <Widget />
            </div>
        </Stack>
    )
}

export default UploadRisk