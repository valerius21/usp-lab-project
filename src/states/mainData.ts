import { atom } from "recoil"

export interface MainData {
    files: File[],
    photoDescription: string
}

export const mainDataState = atom<MainData>({
    key: 'mainDataState',
    default: {
        files: [],
        photoDescription: ''
    }
})