export default function getVideoInfo(

    prem_videoUrl: string,

    prem_cookie?: string,

    prem_useragent?: string

): Promise<VideoInfo>;



export interface VideoInfo {

    url: string;

    sd: string;

    hd: string;

    title: string;

    thumbnail: string;

}
