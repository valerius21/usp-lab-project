import { atom } from "recoil"

export interface MainData {
    files: File[],
    photoDescription: string
    shareNumber: number
}

export const mainDataState = atom<MainData>({
    key: 'mainDataState',
    default: {
        files: [],
        photoDescription: '',
        shareNumber: 0
    }
})