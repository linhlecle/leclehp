// pagination 생성기
// showPages: 보여질 페이지 수
// pages: 데이터들의 전체 페이지 수
// currentPage: 현재 페이지
export const generatePagination = (pages: number, currentPage: number, showPages: number) => {
  return Array.from({ length: pages >= showPages ? showPages : pages }, (_, i) => {
    if (currentPage <= 3 && pages <= showPages) {
      return i + 1;
    } else if (currentPage > 3 && pages > showPages) {
      if (currentPage <= pages - 2) {
        return currentPage - 2 + i;
      } else if (currentPage > pages - 2) {
        return pages - showPages + i + 1;
      }
    }
    return i + 1;
  });
};
