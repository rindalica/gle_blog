import { promises as fs } from 'fs';
import path from 'path';

export type Menu = {
  menu: string;
  storeNm: string;
  isMeal: string;
};

export type MenuData = Menu & { content: string };

export async function getAllMenu(): Promise<Menu[]> {
  // 현재 작업 디렉터리와 'data/posts.json' 경로를 결합하여 파일 경로 생성
  const filePath = path.join(process.cwd(), 'data', 'menu.json');
  return (
    fs
      // 파일을 읽고 내용을 문자열로 변환
      .readFile(filePath, 'utf-8')
      // JSON 문자열을 JavaScript 객체 배열로 변환
      .then<Menu[]>(JSON.parse)
  );
}

export async function deleteMenu(menuNm: string): Promise<void> {
  const filePath = path.join(process.cwd(), 'data', 'menu.json');

  try {
    // 기존 메뉴 데이터 읽기
    const data = await fs.readFile(filePath, 'utf-8');
    const menus: Menu[] = JSON.parse(data);

    // 특정 메뉴 삭제
    const updatedMenus = menus.filter((menu) => menu.menu !== menuNm);

    if (updatedMenus.length === menus.length) {
      console.warn(`Menu with name "${menuNm}" not found.`);
      return;
    }

    // 수정된 메뉴 데이터 다시 저장
    await fs.writeFile(
      filePath,
      JSON.stringify(updatedMenus, null, 2),
      'utf-8'
    );
    console.log(`Menu "${menuNm}" has been deleted successfully.`);
  } catch (error) {
    console.error('Error deleting the menu:', error);
  }
}

// export async function getPostData(fileName: string): Promise<PostData> {
//     const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
//     const metaData = await getAllPosts().then((posts) =>
//       posts.find((post) => post.path === fileName)
//     );
//     if (!metaData)
//       throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);

//     const content = await fs.readFile(filePath, 'utf-8');
//     return { ...metaData, content };
//   }
