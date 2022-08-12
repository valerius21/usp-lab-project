import { Button, Stack, TextInput, Title } from "@mantine/core"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { LabDropzone } from "../components/Dropzone"
import { mainDataState } from "../states/mainData"

const Upload = () => {
    const [mainData, setMainData] = useRecoilState(mainDataState)
    const [isUploading, setIsUploading] = useState(false)
    const navigate = useNavigate()

    return (
        <form>
            <Stack spacing={"xl"}>
                <Title>Upload</Title>
                <LabDropzone />
                <div>
                    <TextInput
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
                    {isUploading ? "Uploading ... " : "Upload 🚀"}
                </Button>
            </Stack>
        </form>
    )
}

export default Upload