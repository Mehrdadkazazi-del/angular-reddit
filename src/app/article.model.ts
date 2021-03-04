export class Article {
  votes: number = null;
  title: string = null;
  link: string = null;

  constructor(votes: number, title: string, link: string) {
    this.votes = votes || 0;
    this.title = title;
    this.link = link;
  }

  voteUp(): boolean {
    this.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }

  domain(): string {
    try {
// e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
// e.g. foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
