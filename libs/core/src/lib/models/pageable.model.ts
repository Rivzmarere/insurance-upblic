export interface Pageable<T> {
  items: Array<T>;
  page: number;
  pageSize: number;
  totalItemCount: number;
  totalPageCount: number;
}
