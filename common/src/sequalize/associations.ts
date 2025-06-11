import { AdminDefineModel } from './models/admin';
import { BuyerDefineModel } from './models/buyer';
import { BuyerAddressesDefineModel } from './models/buyer-addresses';
import { LookupDetailsDefineModel } from './models/lookup-details';
import { LookupsDefineModel } from './models/lookups';
import { ProductDefineModel } from './models/product';
import { ProductImageDefineModel } from './models/product-images';
import { ProductManufacturingDetailsDefineModel } from './models/product-manufacturing-details';
import { ProductQuestionDefineModel } from './models/product-question';
import { ProductReviewDefineModel } from './models/product-review';
import { ProductReviewImagesDefineModel } from './models/product-review-images';
import { ProductSizeDefineModel } from './models/product-size';
import { ProductVarientDefineModel } from './models/product-varient';
import { SellerDefineModel } from './models/seller';
import { SellerAddressesDefineModel } from './models/seller-addresses';
import { SellerDocumentDefineModel } from './models/seller-document';
import { SellerReviewDefineModel } from './models/seller-review';
import { UserDefineModel } from './models/user';

// Each LookupDetail belongs to a Lookup.
LookupDetailsDefineModel.belongsTo(LookupsDefineModel, {
  foreignKey: 'lookup_id'
});

// Each Lookup has many LookupDetails
LookupsDefineModel.hasMany(LookupDetailsDefineModel, {
  foreignKey: 'lookup_id'
});

// Each LookUpDetails has many Users.
LookupDetailsDefineModel.hasMany(UserDefineModel, {
  foreignKey: 'user_account_type_id_fkey'
});

// Each User belongs to a LookupDetails.
UserDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'user_account_type_id_fkey'
});

// Each LookUpDetails has many Users.
LookupDetailsDefineModel.hasMany(UserDefineModel, {
  foreignKey: 'user_user_status_id_fkey'
});

// Each User belongs to a LookupDetails.
UserDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'user_user_status_id_fkey'
});

// Each Admin belongs to a User.
AdminDefineModel.belongsTo(UserDefineModel, {
  foreignKey: 'admin_user_id_fkey'
});

// Each User has many Admin.
UserDefineModel.hasMany(AdminDefineModel, {
  foreignKey: 'admin_user_id_fkey'
});

// Each Admin belongs to a LookupDetails.
AdminDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'admin_user_status_id_fkey'
});

// Each Admin belongs to a LookupDetails.
LookupDetailsDefineModel.hasMany(AdminDefineModel, {
  foreignKey: 'admin_user_status_id_fkey'
});

// Each Seller belongs to User
SellerDefineModel.belongsTo(UserDefineModel, {
  foreignKey: 'seller_user_id_fkey'
});

// Each User has many seller
UserDefineModel.hasMany(SellerDefineModel, {
  foreignKey: 'seller_user_id_fkey'
});

// Each seller belongs to a LookupDetails.
SellerDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'seller_user_status_id_fkey'
});

// Each User has many seller.
LookupDetailsDefineModel.hasMany(SellerDefineModel, {
  foreignKey: 'seller_user_status_id_fkey'
});

// Each Seller belongs to User
SellerDefineModel.belongsTo(UserDefineModel, {
  foreignKey: 'seller_verified_by_fkey'
});

// Each User has many seller
UserDefineModel.hasMany(SellerDefineModel, {
  foreignKey: 'seller_verified_by_fkey'
});

// each seller-addresses belongs to LookupDetails
SellerAddressesDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'seller_addresses_address_type_id_fkey'
});

// each lookupdetails has many seller-addresses
LookupDetailsDefineModel.hasMany(SellerAddressesDefineModel, {
  foreignKey: 'seller_addresses_address_type_id_fkey'
});

// each seller-addresses belongs to seller
SellerAddressesDefineModel.belongsTo(SellerDefineModel, {
  foreignKey: 'seller_addresses_seller_id_fkey'
});

// each seller has many seller-addresses
SellerDefineModel.hasMany(SellerAddressesDefineModel, {
  foreignKey: 'seller_addresses_seller_id_fkey'
});

// each seller-documents belongs to lookupdetails
SellerDocumentDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'seller_document_document_status_id_fkey'
});

// each lookupdetails has many seller-documents
LookupDetailsDefineModel.hasMany(SellerDocumentDefineModel, {
  foreignKey: 'seller_document_document_status_id_fkey'
});

// each seller-documents belongs to lookupdetails
SellerDocumentDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'seller_document_document_type_id_fkey'
});

// each lookupdetails has many seller-documents
LookupDetailsDefineModel.hasMany(SellerDocumentDefineModel, {
  foreignKey: 'seller_document_document_type_id_fkey'
});

// each seller-documents belongs to seller
SellerDocumentDefineModel.belongsTo(SellerDefineModel, {
  foreignKey: 'seller_document_seller_id_fkey'
});

// each seller has many seller-documents
SellerDefineModel.hasMany(SellerDocumentDefineModel, {
  foreignKey: 'seller_document_seller_id_fkey'
});

// each buyer belong to user
BuyerDefineModel.belongsTo(UserDefineModel, {
  foreignKey: 'buyer_user_id_fkey'
});

// each user has many buyer
UserDefineModel.hasMany(BuyerDefineModel, {
  foreignKey: 'buyer_user_id_fkey'
});

// each buyer belong to lookdetails
BuyerDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'buyer_user_status_id_fkey'
});

// each lookdetails has many buyer
LookupDetailsDefineModel.hasMany(BuyerDefineModel, {
  foreignKey: 'buyer_user_status_id_fkey'
});

// each seller-review belong to Buyer
SellerReviewDefineModel.belongsTo(BuyerDefineModel, {
  foreignKey: 'seller_review_buyer_id_fkey'
});

// each buyer has many seller-review
BuyerDefineModel.hasMany(SellerReviewDefineModel, {
  foreignKey: 'seller_review_buyer_id_fkey'
});

// each seller-review belong to seller
SellerReviewDefineModel.belongsTo(SellerDefineModel, {
  foreignKey: 'seller_review_seller_id_fkey'
});

// each seller has many seller-review
SellerDefineModel.hasMany(SellerReviewDefineModel, {
  foreignKey: 'seller_review_seller_id_fkey'
});

// each buyer-address belong to buyer
BuyerAddressesDefineModel.belongsTo(BuyerDefineModel, {
  foreignKey: 'buyer_addresses_buyer_id_fkey'
});

// each buyer has many buyer-address
BuyerDefineModel.hasMany(BuyerAddressesDefineModel, {
  foreignKey: 'buyer_addresses_buyer_id_fkey'
});

// each buyer-address belong to lookdetails
BuyerAddressesDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'buyer_addresses_address_type_id_fkey'
});

// each lookupdetails has many buyer-address
LookupDetailsDefineModel.hasMany(BuyerAddressesDefineModel, {
  foreignKey: 'buyer_addresses_address_type_id_fkey'
});

// each product belongs to a seller
ProductDefineModel.belongsTo(SellerDefineModel, {
  foreignKey: 'products_seller_id_fkey'
});

// each seller has many products
SellerDefineModel.hasMany(ProductDefineModel, {
  foreignKey: 'products_seller_id_fkey'
});

// each product belongs to a category
ProductDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'products_category_id_fkey'
});

// each category has many products
LookupDetailsDefineModel.hasMany(ProductDefineModel, {
  foreignKey: 'products_category_id_fkey'
});

// each product_varient belongs to one product
ProductVarientDefineModel.belongsTo(ProductDefineModel, {
  foreignKey: 'product_varient_product_id_fkey'
});

ProductDefineModel.hasMany(ProductVarientDefineModel, {
  foreignKey: 'product_varient_product_id_fkey'
});

// each product_varient has one size (from lookup_details)
ProductVarientDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'product_size_id',
  as: 'size'
});

LookupDetailsDefineModel.hasMany(ProductVarientDefineModel, {
  foreignKey: 'product_size_id',
  as: 'sizeVarients'
});

// each product_varient has one color (from lookup_details)
ProductVarientDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'product_color_id',
  as: 'color'
});

LookupDetailsDefineModel.hasMany(ProductVarientDefineModel, {
  foreignKey: 'product_color_id',
  as: 'colorVarients'
});

// product_size belongs to product
ProductSizeDefineModel.belongsTo(ProductDefineModel, {
  foreignKey: 'product_id'
});

// product has many product_sizes
ProductDefineModel.hasMany(ProductSizeDefineModel, {
  foreignKey: 'product_id'
});

// product_size belongs to lookup_details (size category)
ProductSizeDefineModel.belongsTo(LookupDetailsDefineModel, {
  foreignKey: 'size_category_id'
});

// product_review belongs to buyer
ProductReviewDefineModel.belongsTo(BuyerDefineModel, {
  foreignKey: 'buyer_id'
});

// buyer has many product_reviews
BuyerDefineModel.hasMany(ProductReviewDefineModel, {
  foreignKey: 'buyer_id'
});

// product_review belongs to product_varient
ProductReviewDefineModel.belongsTo(ProductVarientDefineModel, {
  foreignKey: 'product_varient_id'
});

// product_varient has many product_reviews
ProductVarientDefineModel.hasMany(ProductReviewDefineModel, {
  foreignKey: 'product_varient_id'
});

// Each product_review_images belongs to a product_review
ProductReviewImagesDefineModel.belongsTo(ProductReviewDefineModel, {
  foreignKey: 'product_review_id'
});

// Each product_review has many product_review_images
ProductReviewDefineModel.hasMany(ProductReviewImagesDefineModel, {
  foreignKey: 'product_review_id'
});

// product_question belongs to product
ProductQuestionDefineModel.belongsTo(ProductDefineModel, {
  foreignKey: 'product_id'
});

// product_question belongs to buyer
ProductQuestionDefineModel.belongsTo(BuyerDefineModel, {
  foreignKey: 'buyer_id'
});

// product_question answered_by_id belongs to seller
ProductQuestionDefineModel.belongsTo(SellerDefineModel, {
  foreignKey: 'answered_by_id'
});

// product_question belongs to product
ProductManufacturingDetailsDefineModel.belongsTo(ProductDefineModel, {
  foreignKey: 'product_id'
});

// product has many product_questions
ProductDefineModel.hasMany(ProductManufacturingDetailsDefineModel, {
  foreignKey: 'product_id'
});

// product_images belongs to product_variant
ProductImageDefineModel.belongsTo(ProductVarientDefineModel, {
  foreignKey: 'product_varient_id'
});

// product_variant has many product_images
ProductVarientDefineModel.hasMany(ProductImageDefineModel, {
  foreignKey: 'product_varient_id'
});
