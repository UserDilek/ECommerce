export class ListProduct{
      name: string;
      stock: number;
      price: number;
      id: string;
      createdDate: Date;
      updatedDate: Date;
}

export class VW_List_Product{
  products:ListProduct[];
  total:number;
}
