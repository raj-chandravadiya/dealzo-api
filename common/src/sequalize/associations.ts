import { AdminDefineModel } from './models/admin';
import { LookupDetailsDefineModel } from './models/lookup-details';
import { LookupsDefineModel } from './models/lookups';
import { ProductDefineModel } from './models/product';
import { ProductVarientDefineModel } from './models/product-varient';
import { SellerDefineModel } from './models/seller';
import { SellerAddressesDefineModel } from './models/seller-addresses';
import { SellerDocumentDefineModel } from './models/seller-document';
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
