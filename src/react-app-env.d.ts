/// <reference types="react-scripts" />

declare module '*.mp4' {
    const src: string;
    export default src;
}

declare module 'tajimise' {
    export interface AdminInfo {
        avatar: string;
        bio: string;
        handle: string;
        name: string;
        position: string;
        position_description: string;
        pronouns: string;
        socials: {
            discord?: string;
            twitter?: string;
            instagram?: string;
            pixiv?: string;
            youtube?: string;
            github?: string;
        };
    }
}
