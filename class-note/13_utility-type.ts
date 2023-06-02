interface IProduct {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<IProduct[]> {
  // ...
}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// function displayProductDetail(shoppingItem: ProductDetail) {
//
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<IProduct, 'id' | 'name' | 'price'>

// Pick<Type, 'key1' | 'key2' | ...>
// 어떤 인터페이스에서 특정 키들만 뽑아 사용하고자 할 때 사용
function displayProductDetail(shoppingItem: Pick<IProduct, 'id' | 'name' | 'price'>) {
  // API 안에 id, name, price가 올 예정
}

// Omit<Type, 'key1' | 'key2' | ...>
// 어떤 인터페이스에서 특정 키들을 제외하고 사용하고자 할 때 사용
function displayProductItem(productItem: Omit<IProduct, 'stock'>) {
  // API 안에 id, name, price, brand가 올 예정
}

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
/*interface IUpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}*/

// function updateProductItem(productItem: IUpdateProduct) {
//
// }

function updateProductItem1(productItem: Partial<IProduct>) {

}

type IUpdateProduct = Partial<IProduct>

function updateProductItem2(productItem: IUpdateProduct) {

}

// 4. 유틸리티 타입 구현하기 - Partial
interface IUserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
/*interface IUserProfileUpdate {
  username?: string;
  email?: string;
  profilePhotoUrl?: string;
}*/

// #1
type IUserProfileUpdate = {
  username?: IUserProfile['username'];
  email?: IUserProfile['email'];
  profilePhotoUrl?: IUserProfile['profilePhotoUrl'];
}

// #2 Mapped type
type IUserProfileUpdateV2 = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: IUserProfile[p]
}

// #3
type IUserProfileKeys = keyof IUserProfile
type IUserProfileUpdateV3 = {
  [p in keyof IUserProfile]?: IUserProfile[p]
}

// #4
type ISubset<T> = {
  [p in keyof T]?: T[p]
}