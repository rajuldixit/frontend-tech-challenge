export interface IFeed {
  briefref: string;
  brand: {
    name: string;
    logo: string;
  };
  name: string;
  description: string;
  feed_title: string;
  banner_text: string;
  banner_image: string;
  ad_1_image: string;
  ad_2_image: string;
  starts_on: string;
}

export interface IComment {
  bcommentref: string;
  briefref: string;
  user: {
    userref: string;
    name: string;
    avatar: string;
  };
  comment: string;
  submitted_on: string;
}

export interface IFeedsComment {
  comment: IComment;
  feed: IFeed;
}
