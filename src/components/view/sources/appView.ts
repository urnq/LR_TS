import News from '../news/news';
import Sources from './sources';
import { Article, Source, NewsResponse } from '../../../types';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsResponse): void {
        const values: Article[] = data?.articles ?? [];
        this.news.draw(values);
    }

    public drawSources(data: NewsResponse): void {
        const values: Source[] = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;