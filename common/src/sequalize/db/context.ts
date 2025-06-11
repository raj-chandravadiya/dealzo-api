import type { Sequelize } from 'sequelize';
import { AdminDefineModel } from '../models/admin';
import type { AdminModelStatic } from '../models/admin';
import type { BuyerModelStatic } from '../models/buyer';
import { BuyerDefineModel } from '../models/buyer';
import type { BuyerAddressesModelStatic } from '../models/buyer-addresses';
import { BuyerAddressesDefineModel } from '../models/buyer-addresses';
import { LookupDetailsDefineModel } from '../models/lookup-details';
import type { LookupDetailsModelStatic } from '../models/lookup-details';
import { LookupsDefineModel } from '../models/lookups';
import type { LookupsModelStatic } from '../models/lookups';
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
  buyerAddresses: BuyerAddressesDefineModel
};
