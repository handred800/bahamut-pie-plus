export interface FetchArticle {
    csn:            string;
    visit:          number;
    ctime:          string;
    title:          string;
    content:        string;
    flag:           string;
    flagMore:       string;
    gp:             number;
    userid:         string;
    categoryName:   String;
    coverpic:       string;
    coverpicsrcset: string;
    kind1:          string;
    kind1icon:      string;
    nick:           string;
    flagicon:       Flagicon[];
    showAdult:      boolean;
    bahacoin:       string;
    donatable:      number;
    donateCount:    number;
    donateMoney:    number;
    donateOpen:     number;
}

export interface FormattedArticle {
    csn: string;
    visit: number;
    gp: number;
    title: string;
    coverPic: string;
    bahacoin: number;
}

export interface Flagicon {
    link:  string;
    class: string;
    title: string;
}