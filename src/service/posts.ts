import { promises as fs } from 'fs';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
  image: boolean;
};

export type PostData = Post & { content: string };
//Node Api를 사용할 수 있는 이유 : 서버 컴포넌트 - 서버에서 동작 - 서버에 잇는 파일 읽고 쓰기 가능

export async function getAllPosts(): Promise<Post[]> {
  // 현재 작업 디렉터리와 'data/posts.json' 경로를 결합하여 파일 경로 생성
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return (
    fs
      // 파일을 읽고 내용을 문자열로 변환
      .readFile(filePath, 'utf-8')
      // JSON 문자열을 JavaScript 객체 배열로 변환
      .then<Post[]>(JSON.parse)
      // 날짜를 기준으로 포스트를 내림차순 정렬
      .then((posts: Post[]) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
  );
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const metaData = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === fileName)
  );
  if (!metaData)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);

  const content = await fs.readFile(filePath, 'utf-8');
  return { ...metaData, content };
}
