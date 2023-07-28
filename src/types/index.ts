
// 新闻数据列表项
export interface INewsItem {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
}

// 新闻数据列表
export interface INewsList {
    list: INewsItem[];
    count: number;
}

// 新闻详情
export interface INewsDetail {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    videoUrl: string;
    musicUrl: string;
}