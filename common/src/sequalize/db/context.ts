import type { Sequelize } from 'sequelize';
import { AdminDefineModel } from '../models/admin';
import type { AdminModelStatic } from '../models/admin';
import type { BuyerModelStatic } from '../models/buyer';
import { BuyerDefineModel } from '../models/buyer';
import type { BuyerAddressesModelStatic } from '../models/buyer-addresses';
import { BuyerAddressesDefineModel } from '../models/buyer-addresses';
import type { CartModelStatic } from '../models/cart';
import { CartDefineModel } from '../models/cart';
import { LookupDetailsDefineModel } from '../models/lookup-details';
import type { LookupDetailsModelStatic } from '../models/lookup-details';
import { LookupsDefineModel } from '../models/lookups';
import type { LookupsModelStatic } from '../models/lookups';
import type { OrderItemModelStatic } from '../models/order-item';
import { OrderItemDefineModel } from '../models/order-item';
import type { OrderModelStatic } from '../models/orders';
import { OrderDefineModel } from '../models/orders';
import type { PaymentModelStatic } from '../models/payment';
import { PaymentDefineModel } from '../models/payment';
import type { ProductModelStatic } from '../models/product';
import type { ProductAttributeModelStatic } from '../models/product-attributes';
import { ProductAttributeDefineModel } from '../models/product-attributes';
import type { ProductColorModelStatic } from '../models/product-color';
import { ProductColorDefineModel } from '../models/product-color';
import type { ProductDescriptionModelStatic } from '../models/product-description';
import { ProductDescriptionDefineModel } from '../models/product-description';
import type { ProductImageModelStatic } from '../models/product-images';
import { ProductImageDefineModel } from '../models/product-images';
import type { ProductQuestionModelStatic } from '../models/product-question';
import { ProductQuestionDefineModel } from '../models/product-question';
import type { ProductReviewModelStatic } from '../models/product-review';
import { ProductReviewDefineModel } from '../models/product-review';
import type { ProductReviewImagesModelStatic } from '../models/product-review-images';
import { ProductReviewImagesDefineModel } from '../models/product-review-images';
import type { ProductSizeModelStatic } from '../models/product-size';
import { ProductSizeDefineModel } from '../models/product-size';
import type { ProductVarientModelStatic } from '../models/product-varient';
import { ProductVarientDefineModel } from '../models/product-varient';
import { SellerDefineModel } from '../models/seller';
import type { SellerModelStatic } from '../models/seller';
import type { SellerAddressesModelStatic } from '../models/seller-addresses';
import { SellerAddressesDefineModel } from '../models/seller-addresses';
import type { SellerDocumentModelStatic } from '../models/seller-document';
import { SellerDocumentDefineModel } from '../models/seller-document';
import type { SellerReviewModelStatic } from '../models/seller-review';
import { SellerReviewDefineModel } from '../models/seller-review';
import { UserDefineModel } from '../models/user';
import type { UserModelStatic } from '../models/user';
import type { WishlistModelStatic } from '../models/wishlist';
import { WishlistDefineModel } from '../models/wishlist';
import { ProductDefineModel } from './../models/product';
import { ProductManufacturingDetailsDefineModel } from './../models/product-manufacturing-details';
import type { ProductManufacturingDetailsModelStatic } from './../models/product-manufacturing-details';
import { sequelize } from './config';

export interface DbContext {
  sequelize: Sequelize;
  lookups: LookupsModelStatic;
  lookupDetails: LookupDetailsModelStatic;
  user: UserModelStatic;
  admin: AdminModelStatic;
  seller: SellerModelStatic;
  sellerAddresses: SellerAddressesModelStatic;
  sellerDocument: SellerDocumentModelStatic;
  buyer: BuyerModelStatic;
  sellerReview: SellerReviewModelStatic;
  buyerAddresses: BuyerAddressesModelStatic;
  product: ProductModelStatic;
  productVarient: ProductVarientModelStatic;
  cart: CartModelStatic;
  wishlist: WishlistModelStatic;
  order: OrderModelStatic;
  orderItem: OrderItemModelStatic;
  payment: PaymentModelStatic;
  productSize: ProductSizeModelStatic;
  productReview: ProductReviewModelStatic;
  productReviewImages: ProductReviewImagesModelStatic;
  productQuestion: ProductQuestionModelStatic;
  productManufacturingDetails: ProductManufacturingDetailsModelStatic;
  productImage: ProductImageModelStatic;
  productDescription: ProductDescriptionModelStatic;
  productColor: ProductColorModelStatic;
  productAttributes: ProductAttributeModelStatic;
}

export const db: DbContext = {
  sequelize: sequelize,
  lookups: LookupsDefineModel,
  lookupDetails: LookupDetailsDefineModel,
  user: UserDefineModel,
  admin: AdminDefineModel,
  seller: SellerDefineModel,
  sellerAddresses: SellerAddressesDefineModel,
  sellerDocument: SellerDocumentDefineModel,
  buyer: BuyerDefineModel,
  sellerReview: SellerReviewDefineModel,
  buyerAddresses: BuyerAddressesDefineModel,
  product: ProductDefineModel,
  productVarient: ProductVarientDefineModel,
  cart: CartDefineModel,
  wishlist: WishlistDefineModel,
  order: OrderDefineModel,
  orderItem: OrderItemDefineModel,
  payment: PaymentDefineModel,
  productSize: ProductSizeDefineModel,
  productReview: ProductReviewDefineModel,
  productReviewImages: ProductReviewImagesDefineModel,
  productQuestion: ProductQuestionDefineModel,
  productManufacturingDetails: ProductManufacturingDetailsDefineModel,
  productImage: ProductImageDefineModel,
  productDescription: ProductDescriptionDefineModel,
  productColor: ProductColorDefineModel,
  productAttributes: ProductAttributeDefineModel
};
