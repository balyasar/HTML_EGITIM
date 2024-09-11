interface ISubCategory {
    id: number,
    parentId: number,
    name: string,
    description: string,
    categoryImage: string
}

export interface ICategoryList {
    categoryId: number,
    categoryName: string,
    categoryList: ISubCategory[],

}