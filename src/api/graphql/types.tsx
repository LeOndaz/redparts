import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   * 
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
  UUID: any;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /** Anything */
  _Any: any;
  /**
   * Positive Decimal scalar implementation.
   * 
   * Should be used in places where value must be positive.
   */
  PositiveDecimal: any;
  WeightScalar: any;
  /** Variables of this type must be set to null in mutations. They will be replaced with a filename from a following multipart part containing a binary file. See: https://github.com/jaydenseric/graphql-multipart-request-spec. */
  Upload: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type Query = {
  __typename?: 'Query';
  _entities?: Maybe<Array<Maybe<_Entity>>>;
  _service?: Maybe<_Service>;
  /** Look up an address by ID. */
  address?: Maybe<Address>;
  /** Returns address validation rules. */
  addressValidationRules?: Maybe<AddressValidationData>;
  /** Look up a app by ID. */
  app?: Maybe<App>;
  /** List of the apps. */
  apps?: Maybe<AppCountableConnection>;
  /** List of all apps installations */
  appsInstallations: Array<AppInstallation>;
  /** Look up an attribute by ID. */
  attribute?: Maybe<Attribute>;
  /** List of the shop's attributes. */
  attributes?: Maybe<AttributeCountableConnection>;
  /** List of the shop's categories. */
  categories?: Maybe<CategoryCountableConnection>;
  /** Look up a category by ID or slug. */
  category?: Maybe<Category>;
  /** Look up a channel by ID. */
  channel?: Maybe<Channel>;
  /** List of all channels. */
  channels?: Maybe<Array<Channel>>;
  /** Look up a checkout by token and slug of channel. */
  checkout?: Maybe<Checkout>;
  /** Look up a checkout line by ID. */
  checkoutLine?: Maybe<CheckoutLine>;
  /** List of checkout lines. */
  checkoutLines?: Maybe<CheckoutLineCountableConnection>;
  /** List of checkouts. */
  checkouts?: Maybe<CheckoutCountableConnection>;
  /** Look up a collection by ID. */
  collection?: Maybe<Collection>;
  /** List of the shop's collections. */
  collections?: Maybe<CollectionCountableConnection>;
  /** List of the shop's customers. */
  customers?: Maybe<UserCountableConnection>;
  /** Look up digital content by ID. */
  digitalContent?: Maybe<DigitalContent>;
  /** List of digital content. */
  digitalContents?: Maybe<DigitalContentCountableConnection>;
  /** List of draft orders. */
  draftOrders?: Maybe<OrderCountableConnection>;
  /** Look up a export file by ID. */
  exportFile?: Maybe<ExportFile>;
  /** List of export files. */
  exportFiles?: Maybe<ExportFileCountableConnection>;
  /** Look up a gift card by ID. */
  giftCard?: Maybe<GiftCard>;
  /** List of gift cards. */
  giftCards?: Maybe<GiftCardCountableConnection>;
  /** List of activity events to display on homepage (at the moment it only contains order-events). */
  homepageEvents?: Maybe<OrderEventCountableConnection>;
  /** Return the currently authenticated user. */
  me?: Maybe<User>;
  /** Look up a navigation menu by ID or name. */
  menu?: Maybe<Menu>;
  /** Look up a menu item by ID. */
  menuItem?: Maybe<MenuItem>;
  /** List of the storefronts's menu items. */
  menuItems?: Maybe<MenuItemCountableConnection>;
  /** List of the storefront's menus. */
  menus?: Maybe<MenuCountableConnection>;
  /** Look up an order by ID. */
  order?: Maybe<Order>;
  /** Look up an order by token. */
  orderByToken?: Maybe<Order>;
  /** Order related settings from site settings. */
  orderSettings?: Maybe<OrderSettings>;
  /** List of orders. */
  orders?: Maybe<OrderCountableConnection>;
  /** Return the total sales amount from a specific period. */
  ordersTotal?: Maybe<TaxedMoney>;
  /** Look up a page by ID or slug. */
  page?: Maybe<Page>;
  /** Look up a page type by ID. */
  pageType?: Maybe<PageType>;
  /** List of the page types. */
  pageTypes?: Maybe<PageTypeCountableConnection>;
  /** List of the shop's pages. */
  pages?: Maybe<PageCountableConnection>;
  /** Look up a payment by ID. */
  payment?: Maybe<Payment>;
  /** List of payments. */
  payments?: Maybe<PaymentCountableConnection>;
  /** Look up permission group by ID. */
  permissionGroup?: Maybe<Group>;
  /** List of permission groups. */
  permissionGroups?: Maybe<GroupCountableConnection>;
  /** Look up a plugin by ID. */
  plugin?: Maybe<Plugin>;
  /** List of plugins. */
  plugins?: Maybe<PluginCountableConnection>;
  /** Look up a product by ID. */
  product?: Maybe<Product>;
  /** Look up a product type by ID. */
  productType?: Maybe<ProductType>;
  /** List of the shop's product types. */
  productTypes?: Maybe<ProductTypeCountableConnection>;
  /** Look up a product variant by ID or SKU. */
  productVariant?: Maybe<ProductVariant>;
  /** List of product variants. */
  productVariants?: Maybe<ProductVariantCountableConnection>;
  /** List of the shop's products. */
  products?: Maybe<ProductCountableConnection>;
  /** List of top selling products. */
  reportProductSales?: Maybe<ProductVariantCountableConnection>;
  /** The ID of the object */
  review?: Maybe<Review>;
  /** List of reviews. */
  reviews?: Maybe<ReviewCountableConnection>;
  /** Look up a sale by ID. */
  sale?: Maybe<Sale>;
  /** List of the shop's sales. */
  sales?: Maybe<SaleCountableConnection>;
  /** Look up a shipping zone by ID. */
  shippingZone?: Maybe<ShippingZone>;
  /** List of the shop's shipping zones. */
  shippingZones?: Maybe<ShippingZoneCountableConnection>;
  /** Return information about the shop. */
  shop: Shop;
  /** List of the shop's staff users. */
  staffUsers?: Maybe<UserCountableConnection>;
  /** Look up a stock by ID */
  stock?: Maybe<Stock>;
  /** List of stocks. */
  stocks?: Maybe<StockCountableConnection>;
  /** List of all tax rates available from tax gateway. */
  taxTypes?: Maybe<Array<Maybe<TaxType>>>;
  translation?: Maybe<TranslatableItem>;
  /** Returns a list of all translatable items of a given kind. */
  translations?: Maybe<TranslatableItemConnection>;
  /** Look up a user by ID or email address. */
  user?: Maybe<User>;
  /** Look up a voucher by ID. */
  voucher?: Maybe<Voucher>;
  /** List of the shop's vouchers. */
  vouchers?: Maybe<VoucherCountableConnection>;
  /** Look up a warehouse by ID. */
  warehouse?: Maybe<Warehouse>;
  /** List of warehouses. */
  warehouses?: Maybe<WarehouseCountableConnection>;
  /** Look up a webhook by ID. */
  webhook?: Maybe<Webhook>;
  /** List of all available webhook events. */
  webhookEvents?: Maybe<Array<Maybe<WebhookEvent>>>;
  /** Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required. */
  webhookSamplePayload?: Maybe<Scalars['JSONString']>;
};


export type Query_EntitiesArgs = {
  representations?: Maybe<Array<Maybe<Scalars['_Any']>>>;
};


export type QueryAddressArgs = {
  id: Scalars['ID'];
};


export type QueryAddressValidationRulesArgs = {
  countryCode: CountryCode;
  countryArea?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  cityArea?: Maybe<Scalars['String']>;
};


export type QueryAppArgs = {
  id: Scalars['ID'];
};


export type QueryAppsArgs = {
  filter?: Maybe<AppFilterInput>;
  sortBy?: Maybe<AppSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAttributeArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
  sortBy?: Maybe<AttributeSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCategoriesArgs = {
  filter?: Maybe<CategoryFilterInput>;
  sortBy?: Maybe<CategorySortingInput>;
  level?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryChannelArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryCheckoutArgs = {
  token?: Maybe<Scalars['UUID']>;
};


export type QueryCheckoutLineArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryCheckoutLinesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCheckoutsArgs = {
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCollectionArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  filter?: Maybe<CollectionFilterInput>;
  sortBy?: Maybe<CollectionSortingInput>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCustomersArgs = {
  filter?: Maybe<CustomerFilterInput>;
  sortBy?: Maybe<UserSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryDigitalContentArgs = {
  id: Scalars['ID'];
};


export type QueryDigitalContentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryDraftOrdersArgs = {
  sortBy?: Maybe<OrderSortingInput>;
  filter?: Maybe<OrderDraftFilterInput>;
  created?: Maybe<ReportingPeriod>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryExportFileArgs = {
  id: Scalars['ID'];
};


export type QueryExportFilesArgs = {
  filter?: Maybe<ExportFileFilterInput>;
  sortBy?: Maybe<ExportFileSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGiftCardArgs = {
  id: Scalars['ID'];
};


export type QueryGiftCardsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryHomepageEventsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMenuArgs = {
  channel?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryMenuItemArgs = {
  id: Scalars['ID'];
  channel?: Maybe<Scalars['String']>;
};


export type QueryMenuItemsArgs = {
  channel?: Maybe<Scalars['String']>;
  sortBy?: Maybe<MenuItemSortingInput>;
  filter?: Maybe<MenuItemFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMenusArgs = {
  channel?: Maybe<Scalars['String']>;
  sortBy?: Maybe<MenuSortingInput>;
  filter?: Maybe<MenuFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderByTokenArgs = {
  token: Scalars['UUID'];
};


export type QueryOrdersArgs = {
  sortBy?: Maybe<OrderSortingInput>;
  filter?: Maybe<OrderFilterInput>;
  created?: Maybe<ReportingPeriod>;
  status?: Maybe<OrderStatusFilter>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryOrdersTotalArgs = {
  period?: Maybe<ReportingPeriod>;
  channel?: Maybe<Scalars['String']>;
};


export type QueryPageArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryPageTypeArgs = {
  id: Scalars['ID'];
};


export type QueryPageTypesArgs = {
  sortBy?: Maybe<PageTypeSortingInput>;
  filter?: Maybe<PageTypeFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPagesArgs = {
  sortBy?: Maybe<PageSortingInput>;
  filter?: Maybe<PageFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPermissionGroupArgs = {
  id: Scalars['ID'];
};


export type QueryPermissionGroupsArgs = {
  filter?: Maybe<PermissionGroupFilterInput>;
  sortBy?: Maybe<PermissionGroupSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPluginArgs = {
  id: Scalars['ID'];
};


export type QueryPluginsArgs = {
  filter?: Maybe<PluginFilterInput>;
  sortBy?: Maybe<PluginSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
};


export type QueryProductTypeArgs = {
  id: Scalars['ID'];
};


export type QueryProductTypesArgs = {
  filter?: Maybe<ProductTypeFilterInput>;
  sortBy?: Maybe<ProductTypeSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductVariantArgs = {
  id?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
};


export type QueryProductVariantsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  channel?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductVariantFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductsArgs = {
  filter?: Maybe<ProductFilterInput>;
  sortBy?: Maybe<ProductOrder>;
  stockAvailability?: Maybe<StockAvailability>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryReportProductSalesArgs = {
  period: ReportingPeriod;
  channel: Scalars['String'];
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryReviewsArgs = {
  filter?: Maybe<ReviewFilterInput>;
  sortBy?: Maybe<ReviewSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySaleArgs = {
  id: Scalars['ID'];
  channel?: Maybe<Scalars['String']>;
};


export type QuerySalesArgs = {
  filter?: Maybe<SaleFilterInput>;
  sortBy?: Maybe<SaleSortingInput>;
  query?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryShippingZoneArgs = {
  id: Scalars['ID'];
  channel?: Maybe<Scalars['String']>;
};


export type QueryShippingZonesArgs = {
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryStaffUsersArgs = {
  filter?: Maybe<StaffUserInput>;
  sortBy?: Maybe<UserSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryStockArgs = {
  id: Scalars['ID'];
};


export type QueryStocksArgs = {
  filter?: Maybe<StockFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTranslationArgs = {
  id: Scalars['ID'];
  kind: TranslatableKinds;
};


export type QueryTranslationsArgs = {
  kind: TranslatableKinds;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};


export type QueryVoucherArgs = {
  id: Scalars['ID'];
  channel?: Maybe<Scalars['String']>;
};


export type QueryVouchersArgs = {
  filter?: Maybe<VoucherFilterInput>;
  sortBy?: Maybe<VoucherSortingInput>;
  query?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryWarehouseArgs = {
  id: Scalars['ID'];
};


export type QueryWarehousesArgs = {
  filter?: Maybe<WarehouseFilterInput>;
  sortBy?: Maybe<WarehouseSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryWebhookArgs = {
  id: Scalars['ID'];
};


export type QueryWebhookSamplePayloadArgs = {
  eventType: WebhookSampleEventTypeEnum;
};

/** Webhook. */
export type Webhook = Node & {
  __typename?: 'Webhook';
  name: Scalars['String'];
  targetUrl: Scalars['String'];
  isActive: Scalars['Boolean'];
  secretKey?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of webhook events. */
  events: Array<WebhookEvent>;
  app: App;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** Webhook event. */
export type WebhookEvent = {
  __typename?: 'WebhookEvent';
  /** Internal name of the event type. */
  eventType: WebhookEventTypeEnum;
  /** Display name of the event. */
  name: Scalars['String'];
};

/** An enumeration. */
export enum WebhookEventTypeEnum {
  AnyEvents = 'ANY_EVENTS',
  OrderCreated = 'ORDER_CREATED',
  OrderConfirmed = 'ORDER_CONFIRMED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderFulfilled = 'ORDER_FULFILLED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceDeleted = 'INVOICE_DELETED',
  InvoiceSent = 'INVOICE_SENT',
  CustomerCreated = 'CUSTOMER_CREATED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductUpdated = 'PRODUCT_UPDATED',
  CheckoutQuantityChanged = 'CHECKOUT_QUANTITY_CHANGED',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  FulfillmentCreated = 'FULFILLMENT_CREATED'
}

/** Represents app data. */
export type App = Node & ObjectWithMetadata & {
  __typename?: 'App';
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Name of the app. */
  name?: Maybe<Scalars['String']>;
  /** The date and time when the app was created. */
  created?: Maybe<Scalars['DateTime']>;
  /** Determine if app will be set active or not. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** List of the app's permissions. */
  permissions?: Maybe<Array<Maybe<Permission>>>;
  /** Last 4 characters of the tokens. */
  tokens?: Maybe<Array<Maybe<AppToken>>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /** Type of the app. */
  type?: Maybe<AppTypeEnum>;
  /** List of webhooks assigned to this app. */
  webhooks?: Maybe<Array<Maybe<Webhook>>>;
  /** Description of this app. */
  aboutApp?: Maybe<Scalars['String']>;
  /** Description of the data privacy defined for this app. */
  dataPrivacy?: Maybe<Scalars['String']>;
  /** Url to details about the privacy policy on the app owner page. */
  dataPrivacyUrl?: Maybe<Scalars['String']>;
  /** Homepage of the app. */
  homepageUrl?: Maybe<Scalars['String']>;
  /** Support page for the app. */
  supportUrl?: Maybe<Scalars['String']>;
  /** Url to iframe with the configuration for the app. */
  configurationUrl?: Maybe<Scalars['String']>;
  /** Url to iframe with the app. */
  appUrl?: Maybe<Scalars['String']>;
  /** Version number of the app. */
  version?: Maybe<Scalars['String']>;
  /** JWT token used to authenticate by thridparty app. */
  accessToken?: Maybe<Scalars['String']>;
};

export type ObjectWithMetadata = {
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
};

export type MetadataItem = {
  __typename?: 'MetadataItem';
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value: Scalars['String'];
};


/** Represents a permission object in a friendly form. */
export type Permission = {
  __typename?: 'Permission';
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String'];
};

/** An enumeration. */
export enum PermissionEnum {
  ManageApps = 'MANAGE_APPS',
  ManageChannels = 'MANAGE_CHANNELS',
  ManageCheckouts = 'MANAGE_CHECKOUTS',
  ManageDiscounts = 'MANAGE_DISCOUNTS',
  ManageGiftCard = 'MANAGE_GIFT_CARD',
  ManageMenus = 'MANAGE_MENUS',
  ManageOrders = 'MANAGE_ORDERS',
  ManagePages = 'MANAGE_PAGES',
  ManagePageTypesAndAttributes = 'MANAGE_PAGE_TYPES_AND_ATTRIBUTES',
  ManagePlugins = 'MANAGE_PLUGINS',
  ManageProducts = 'MANAGE_PRODUCTS',
  ManageProductTypesAndAttributes = 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES',
  ManageSettings = 'MANAGE_SETTINGS',
  ManageShipping = 'MANAGE_SHIPPING',
  ManageStaff = 'MANAGE_STAFF',
  ManageTranslations = 'MANAGE_TRANSLATIONS',
  ManageUsers = 'MANAGE_USERS'
}

/** Represents token data. */
export type AppToken = Node & {
  __typename?: 'AppToken';
  /** Name of the authenticated token. */
  name?: Maybe<Scalars['String']>;
  /** Last 4 characters of the token. */
  authToken?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** An enumeration. */
export enum AppTypeEnum {
  Local = 'LOCAL',
  Thirdparty = 'THIRDPARTY'
}


/** An enumeration. */
export enum WebhookSampleEventTypeEnum {
  OrderCreated = 'ORDER_CREATED',
  OrderConfirmed = 'ORDER_CONFIRMED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderFulfilled = 'ORDER_FULFILLED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceDeleted = 'INVOICE_DELETED',
  InvoiceSent = 'INVOICE_SENT',
  CustomerCreated = 'CUSTOMER_CREATED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductUpdated = 'PRODUCT_UPDATED',
  CheckoutQuantityChanged = 'CHECKOUT_QUANTITY_CHANGED',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  FulfillmentCreated = 'FULFILLMENT_CREATED'
}

/** Represents warehouse. */
export type Warehouse = Node & ObjectWithMetadata & {
  __typename?: 'Warehouse';
  address: Address;
  companyName: Scalars['String'];
  email: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  shippingZones: ShippingZoneCountableConnection;
  slug: Scalars['String'];
};


/** Represents warehouse. */
export type WarehouseShippingZonesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ShippingZoneCountableConnection = {
  __typename?: 'ShippingZoneCountableConnection';
  edges: Array<ShippingZoneCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type ShippingZoneCountableEdge = {
  __typename?: 'ShippingZoneCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShippingZone;
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZone = Node & ObjectWithMetadata & {
  __typename?: 'ShippingZone';
  /** List of countries available for the method. */
  countries?: Maybe<Array<Maybe<CountryDisplay>>>;
  default: Scalars['Boolean'];
  /** Description of a shipping zone. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String'];
  /** Lowest and highest prices for the shipping. */
  priceRange?: Maybe<MoneyRange>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of shipping methods available for orders shipped to countries within this shipping zone. */
  shippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
  /** List of warehouses for shipping zone. */
  warehouses?: Maybe<Array<Maybe<Warehouse>>>;
};

/** Represents a range of amounts of money. */
export type MoneyRange = {
  __typename?: 'MoneyRange';
  /** Lower bound of a price range. */
  start?: Maybe<Money>;
  /** Upper bound of a price range. */
  stop?: Maybe<Money>;
};

/** Represents amount of money in specific currency. */
export type Money = {
  __typename?: 'Money';
  /** Amount of money. */
  amount: Scalars['Float'];
  /** Currency code. */
  currency: Scalars['String'];
  /**
   * Money formatted according to the current locale.
   * @deprecated Price formatting according to the current locale should be handled by the frontend client. This field will be removed after 2020-07-31.
   */
  localized: Scalars['String'];
};

export type CountryDisplay = {
  __typename?: 'CountryDisplay';
  /** Country code. */
  code: Scalars['String'];
  /** Country name. */
  country: Scalars['String'];
  /** Country tax. */
  vat?: Maybe<Vat>;
};

/** Represents a VAT rate for a country. */
export type Vat = {
  __typename?: 'VAT';
  /** Country code. */
  countryCode: Scalars['String'];
  /** Country's VAT rate exceptions for specific types of goods. */
  reducedRates: Array<Maybe<ReducedRate>>;
  /** Standard VAT rate in percent. */
  standardRate?: Maybe<Scalars['Float']>;
};

/** Represents a reduced VAT rate for a particular type of goods. */
export type ReducedRate = {
  __typename?: 'ReducedRate';
  /** Reduced VAT rate in percent. */
  rate: Scalars['Float'];
  /** A type of goods. */
  rateType: TaxRateType;
};

/** An enumeration. */
export enum TaxRateType {
  Accommodation = 'ACCOMMODATION',
  AdmissionToCulturalEvents = 'ADMISSION_TO_CULTURAL_EVENTS',
  AdmissionToEntertainmentEvents = 'ADMISSION_TO_ENTERTAINMENT_EVENTS',
  AdmissionToSportingEvents = 'ADMISSION_TO_SPORTING_EVENTS',
  Advertising = 'ADVERTISING',
  AgriculturalSupplies = 'AGRICULTURAL_SUPPLIES',
  BabyFoodstuffs = 'BABY_FOODSTUFFS',
  Bikes = 'BIKES',
  Books = 'BOOKS',
  ChildrensClothing = 'CHILDRENS_CLOTHING',
  DomesticFuel = 'DOMESTIC_FUEL',
  DomesticServices = 'DOMESTIC_SERVICES',
  EBooks = 'E_BOOKS',
  Foodstuffs = 'FOODSTUFFS',
  Hotels = 'HOTELS',
  Medical = 'MEDICAL',
  Newspapers = 'NEWSPAPERS',
  PassengerTransport = 'PASSENGER_TRANSPORT',
  Pharmaceuticals = 'PHARMACEUTICALS',
  PropertyRenovations = 'PROPERTY_RENOVATIONS',
  Restaurants = 'RESTAURANTS',
  SocialHousing = 'SOCIAL_HOUSING',
  Standard = 'STANDARD',
  Water = 'WATER',
  Wine = 'WINE'
}

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethod = Node & ObjectWithMetadata & {
  __typename?: 'ShippingMethod';
  /** List of channels available for the method. */
  channelListings?: Maybe<Array<ShippingMethodChannelListing>>;
  /** List of excluded products for the shipping method. */
  excludedProducts?: Maybe<ProductCountableConnection>;
  /** The ID of the object. */
  id: Scalars['ID'];
  maximumDeliveryDays?: Maybe<Scalars['Int']>;
  /** The price of the cheapest variant (including discounts). */
  maximumOrderPrice?: Maybe<Money>;
  maximumOrderWeight?: Maybe<Weight>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  minimumDeliveryDays?: Maybe<Scalars['Int']>;
  /** The price of the cheapest variant (including discounts). */
  minimumOrderPrice?: Maybe<Money>;
  minimumOrderWeight?: Maybe<Weight>;
  name: Scalars['String'];
  /** The price of the cheapest variant (including discounts). */
  price?: Maybe<Money>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<ShippingMethodTranslation>;
  /** Type of the shipping method. */
  type?: Maybe<ShippingMethodTypeEnum>;
  /** Zip code exclude range of the shipping method. */
  zipCodeRules?: Maybe<Array<Maybe<ShippingMethodZipCodeRule>>>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodExcludedProductsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Represents weight value in a specific weight unit. */
export type Weight = {
  __typename?: 'Weight';
  /** Weight unit. */
  unit: WeightUnitsEnum;
  /** Weight value. */
  value: Scalars['Float'];
};

/** An enumeration. */
export enum WeightUnitsEnum {
  G = 'G',
  Kg = 'KG',
  Lb = 'LB',
  Oz = 'OZ'
}

/** An enumeration. */
export enum ShippingMethodTypeEnum {
  Price = 'PRICE',
  Weight = 'WEIGHT'
}

export type ShippingMethodTranslation = Node & {
  __typename?: 'ShippingMethodTranslation';
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
};

export type LanguageDisplay = {
  __typename?: 'LanguageDisplay';
  /** ISO 639 representation of the language name. */
  code: LanguageCodeEnum;
  /** Full name of the language. */
  language: Scalars['String'];
};

/** An enumeration. */
export enum LanguageCodeEnum {
  Ar = 'AR',
  Az = 'AZ',
  Bg = 'BG',
  Bn = 'BN',
  Ca = 'CA',
  Cs = 'CS',
  Da = 'DA',
  De = 'DE',
  El = 'EL',
  En = 'EN',
  Es = 'ES',
  EsCo = 'ES_CO',
  Et = 'ET',
  Fa = 'FA',
  Fi = 'FI',
  Fr = 'FR',
  Hi = 'HI',
  Hu = 'HU',
  Hy = 'HY',
  Id = 'ID',
  Is = 'IS',
  It = 'IT',
  Ja = 'JA',
  Ka = 'KA',
  Km = 'KM',
  Ko = 'KO',
  Lt = 'LT',
  Mn = 'MN',
  My = 'MY',
  Nb = 'NB',
  Nl = 'NL',
  Pl = 'PL',
  Pt = 'PT',
  PtBr = 'PT_BR',
  Ro = 'RO',
  Ru = 'RU',
  Sk = 'SK',
  Sl = 'SL',
  Sq = 'SQ',
  Sr = 'SR',
  Sv = 'SV',
  Sw = 'SW',
  Ta = 'TA',
  Th = 'TH',
  Tr = 'TR',
  Uk = 'UK',
  Vi = 'VI',
  ZhHans = 'ZH_HANS',
  ZhHant = 'ZH_HANT'
}

/** Represents shipping method channel listing. */
export type ShippingMethodChannelListing = Node & {
  __typename?: 'ShippingMethodChannelListing';
  channel: Channel;
  /** The ID of the object. */
  id: Scalars['ID'];
  maximumOrderPrice?: Maybe<Money>;
  minimumOrderPrice?: Maybe<Money>;
  price?: Maybe<Money>;
};

/** Represents channel. */
export type Channel = Node & {
  __typename?: 'Channel';
  currencyCode: Scalars['String'];
  /** Whether a channel has associated orders. */
  hasOrders: Scalars['Boolean'];
  /** The ID of the object. */
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

/** Represents shipping method zip code. */
export type ShippingMethodZipCodeRule = Node & {
  __typename?: 'ShippingMethodZipCodeRule';
  /** End address range. */
  end?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Start address range. */
  start?: Maybe<Scalars['String']>;
};

export type ProductCountableConnection = {
  __typename?: 'ProductCountableConnection';
  edges: Array<ProductCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductCountableEdge = {
  __typename?: 'ProductCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

/** Represents an individual item for sale in the storefront. */
export type Product = Node & ObjectWithMetadata & {
  __typename?: 'Product';
  /** List of attributes assigned to this product. */
  attributes: Array<SelectedAttribute>;
  /** Date when product is available for purchase.  */
  availableForPurchase?: Maybe<Scalars['Date']>;
  category?: Maybe<Category>;
  /** List of availability in channels for the product. */
  channelListings?: Maybe<Array<ProductChannelListing>>;
  chargeTaxes: Scalars['Boolean'];
  /** List of collections for the product. */
  collections?: Maybe<Array<Maybe<Collection>>>;
  defaultVariant?: Maybe<ProductVariant>;
  description: Scalars['JSONString'];
  /**
   * Description of the product (JSON).
   * @deprecated Will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Get a single product image by ID. */
  imageById?: Maybe<ProductImage>;
  /** List of images for the product. */
  images?: Maybe<Array<Maybe<ProductImage>>>;
  /** Whether the product is in stock and visible or not. */
  isAvailable?: Maybe<Scalars['Boolean']>;
  /** Whether the product is available for purchase. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String'];
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<ProductPricingInfo>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  productType: ProductType;
  rating?: Maybe<Scalars['Float']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  /** A type of tax. Assigned by enabled tax gateway */
  taxType?: Maybe<TaxType>;
  /** The main thumbnail for a product. */
  thumbnail?: Maybe<Image>;
  /** Returns translated product fields for the given language code. */
  translation?: Maybe<ProductTranslation>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /**
   * The storefront URL for the product.
   * @deprecated This field will be removed after 2020-07-31.
   */
  url: Scalars['String'];
  /** List of variants for the product. */
  variants?: Maybe<Array<Maybe<ProductVariant>>>;
  weight?: Maybe<Weight>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductImageByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductThumbnailArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductType = Node & ObjectWithMetadata & {
  __typename?: 'ProductType';
  availableAttributes?: Maybe<AttributeCountableConnection>;
  hasVariants: Scalars['Boolean'];
  /** The ID of the object. */
  id: Scalars['ID'];
  isDigital: Scalars['Boolean'];
  isShippingRequired: Scalars['Boolean'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** Product attributes of that product type. */
  productAttributes?: Maybe<Array<Maybe<Attribute>>>;
  /**
   * List of products of this type.
   * @deprecated Use the top-level `products` query with the `productTypes` filter.
   */
  products?: Maybe<ProductCountableConnection>;
  slug: Scalars['String'];
  /** A type of tax rate. */
  taxRate?: Maybe<TaxRateType>;
  /** A type of tax. Assigned by enabled tax gateway */
  taxType?: Maybe<TaxType>;
  /** Variant attributes of that product type. */
  variantAttributes?: Maybe<Array<Maybe<Attribute>>>;
  weight?: Maybe<Weight>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAvailableAttributesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<AttributeFilterInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeProductsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeVariantAttributesArgs = {
  variantSelection?: Maybe<VariantAttributeScope>;
};

/** Representation of tax types fetched from tax gateway. */
export type TaxType = {
  __typename?: 'TaxType';
  /** Description of the tax type. */
  description?: Maybe<Scalars['String']>;
  /** External tax code used to identify given tax group. */
  taxCode?: Maybe<Scalars['String']>;
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type Attribute = Node & ObjectWithMetadata & {
  __typename?: 'Attribute';
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid: Scalars['Boolean'];
  /** The entity type which can be used as a reference. */
  entityType?: Maybe<AttributeEntityTypeEnum>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard: Scalars['Boolean'];
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront: Scalars['Boolean'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /** Name of an attribute displayed in the interface. */
  name?: Maybe<Scalars['String']>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  productTypes: ProductTypeCountableConnection;
  productVariantTypes: ProductTypeCountableConnection;
  /** Internal representation of an attribute name. */
  slug?: Maybe<Scalars['String']>;
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition: Scalars['Int'];
  /** Returns translated attribute fields for the given language code. */
  translation?: Maybe<AttributeTranslation>;
  /** The attribute type. */
  type?: Maybe<AttributeTypeEnum>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired: Scalars['Boolean'];
  /** List of attribute's values. */
  values?: Maybe<Array<Maybe<AttributeValue>>>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront: Scalars['Boolean'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductTypesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductVariantTypesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ProductTypeCountableConnection = {
  __typename?: 'ProductTypeCountableConnection';
  edges: Array<ProductTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductTypeCountableEdge = {
  __typename?: 'ProductTypeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductType;
};

/** An enumeration. */
export enum AttributeInputTypeEnum {
  Dropdown = 'DROPDOWN',
  File = 'FILE',
  Multiselect = 'MULTISELECT',
  Reference = 'REFERENCE'
}

/** An enumeration. */
export enum AttributeEntityTypeEnum {
  Page = 'PAGE',
  Product = 'PRODUCT'
}

/** An enumeration. */
export enum AttributeTypeEnum {
  PageType = 'PAGE_TYPE',
  ProductType = 'PRODUCT_TYPE'
}

/** Represents a value of an attribute. */
export type AttributeValue = Node & {
  __typename?: 'AttributeValue';
  /** Represents file URL and content type (if attribute value is a file). */
  file?: Maybe<File>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>;
  /** Name of a value displayed in the interface. */
  name?: Maybe<Scalars['String']>;
  /** The ID of the attribute reference. */
  reference?: Maybe<Scalars['ID']>;
  /** Internal representation of a value (unique per attribute). */
  slug?: Maybe<Scalars['String']>;
  /** Returns translated attribute value fields for the given language code. */
  translation?: Maybe<AttributeValueTranslation>;
};


/** Represents a value of an attribute. */
export type AttributeValueTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type AttributeValueTranslation = Node & {
  __typename?: 'AttributeValueTranslation';
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  /** Content type of the file. */
  contentType?: Maybe<Scalars['String']>;
  /** The URL of the file. */
  url: Scalars['String'];
};

export type AttributeTranslation = Node & {
  __typename?: 'AttributeTranslation';
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
};

export enum VariantAttributeScope {
  All = 'ALL',
  NotVariantSelection = 'NOT_VARIANT_SELECTION',
  VariantSelection = 'VARIANT_SELECTION'
}

export type AttributeCountableConnection = {
  __typename?: 'AttributeCountableConnection';
  edges: Array<AttributeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type AttributeCountableEdge = {
  __typename?: 'AttributeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Attribute;
};

export type AttributeFilterInput = {
  availableInGrid?: Maybe<Scalars['Boolean']>;
  /** Specifies the channel by which the data should be sorted. */
  channel?: Maybe<Scalars['String']>;
  filterableInDashboard?: Maybe<Scalars['Boolean']>;
  filterableInStorefront?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  inCategory?: Maybe<Scalars['ID']>;
  inCollection?: Maybe<Scalars['ID']>;
  isVariantOnly?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  type?: Maybe<AttributeTypeEnum>;
  valueRequired?: Maybe<Scalars['Boolean']>;
  visibleInStorefront?: Maybe<Scalars['Boolean']>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type Category = Node & ObjectWithMetadata & {
  __typename?: 'Category';
  /** List of ancestors of the category. */
  ancestors?: Maybe<CategoryCountableConnection>;
  backgroundImage?: Maybe<Image>;
  /** List of children of the category. */
  children?: Maybe<CategoryCountableConnection>;
  description: Scalars['JSONString'];
  /**
   * Description of the category (JSON).
   * @deprecated Will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  level: Scalars['Int'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String'];
  parent?: Maybe<Category>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of products in the category. */
  products?: Maybe<ProductCountableConnection>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  /** Returns translated category fields for the given language code. */
  translation?: Maybe<CategoryTranslation>;
  /**
   * The storefront's URL for the category.
   * @deprecated This field will be removed after 2020-07-31.
   */
  url?: Maybe<Scalars['String']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryAncestorsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryBackgroundImageArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryProductsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type CategoryCountableConnection = {
  __typename?: 'CategoryCountableConnection';
  edges: Array<CategoryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryCountableEdge = {
  __typename?: 'CategoryCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Category;
};

/** Represents an image. */
export type Image = {
  __typename?: 'Image';
  /** Alt text for an image. */
  alt?: Maybe<Scalars['String']>;
  /** The URL of the image. */
  url: Scalars['String'];
};

export type CategoryTranslation = Node & {
  __typename?: 'CategoryTranslation';
  description: Scalars['JSONString'];
  /**
   * Translated description of the product (JSON).
   * @deprecated Will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariant = Node & ObjectWithMetadata & {
  __typename?: 'ProductVariant';
  /** List of attributes assigned to this variant. */
  attributes: Array<SelectedAttribute>;
  /** List of price information in channels for the product. */
  channelListings?: Maybe<Array<ProductVariantChannelListing>>;
  /** Cost price of the variant. */
  costPrice?: Maybe<Money>;
  /** Digital content for the product variant. */
  digitalContent?: Maybe<DigitalContent>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of images for the product variant. */
  images?: Maybe<Array<Maybe<ProductImage>>>;
  /** Gross margin percentage value. */
  margin?: Maybe<Scalars['Int']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String'];
  /** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<VariantPricingInfo>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  product: Product;
  /** Quantity of a product available for sale in one checkout. */
  quantityAvailable: Scalars['Int'];
  /** Total quantity ordered. */
  quantityOrdered?: Maybe<Scalars['Int']>;
  /** Total revenue generated by a variant in given period of time. Note: this field should be queried using `reportProductSales` query as it uses optimizations suitable for such calculations. */
  revenue?: Maybe<TaxedMoney>;
  sku: Scalars['String'];
  /** Stocks for the product variant. */
  stocks?: Maybe<Array<Maybe<Stock>>>;
  trackInventory: Scalars['Boolean'];
  /** Returns translated product variant fields for the given language code. */
  translation?: Maybe<ProductVariantTranslation>;
  weight?: Maybe<Weight>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantAttributesArgs = {
  variantSelection?: Maybe<VariantAttributeScope>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantQuantityAvailableArgs = {
  countryCode?: Maybe<CountryCode>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantRevenueArgs = {
  period?: Maybe<ReportingPeriod>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantStocksArgs = {
  countryCode?: Maybe<CountryCode>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Represents product varaint channel listing. */
export type ProductVariantChannelListing = Node & {
  __typename?: 'ProductVariantChannelListing';
  channel: Channel;
  /** Cost price of the variant. */
  costPrice?: Maybe<Money>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Gross margin percentage value. */
  margin?: Maybe<Scalars['Int']>;
  price?: Maybe<Money>;
};

/** Represents availability of a variant in the storefront. */
export type VariantPricingInfo = {
  __typename?: 'VariantPricingInfo';
  /** The discount amount if in sale (null otherwise). */
  discount?: Maybe<TaxedMoney>;
  /** The discount amount in the local currency. */
  discountLocalCurrency?: Maybe<TaxedMoney>;
  /** Whether it is in sale or not. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** The price, with any discount subtracted. */
  price?: Maybe<TaxedMoney>;
  /** The discounted price in the local currency. */
  priceLocalCurrency?: Maybe<TaxedMoney>;
  /** The price without any discount. */
  priceUndiscounted?: Maybe<TaxedMoney>;
};

/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
export type TaxedMoney = {
  __typename?: 'TaxedMoney';
  /** Currency code. */
  currency: Scalars['String'];
  /** Amount of money including taxes. */
  gross: Money;
  /** Amount of money without taxes. */
  net: Money;
  /** Amount of taxes. */
  tax: Money;
};

/** Represents a custom attribute. */
export type SelectedAttribute = {
  __typename?: 'SelectedAttribute';
  /** Name of an attribute displayed in the interface. */
  attribute: Attribute;
  /** Values of an attribute. */
  values: Array<Maybe<AttributeValue>>;
};

export enum ReportingPeriod {
  ThisMonth = 'THIS_MONTH',
  Today = 'TODAY'
}

/** Represents a product image. */
export type ProductImage = Node & {
  __typename?: 'ProductImage';
  alt: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  sortOrder?: Maybe<Scalars['Int']>;
  /** The URL of the image. */
  url: Scalars['String'];
};


/** Represents a product image. */
export type ProductImageUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type ProductVariantTranslation = Node & {
  __typename?: 'ProductVariantTranslation';
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
};

export type DigitalContent = Node & ObjectWithMetadata & {
  __typename?: 'DigitalContent';
  automaticFulfillment: Scalars['Boolean'];
  contentFile: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  maxDownloads?: Maybe<Scalars['Int']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  productVariant: ProductVariant;
  urlValidDays?: Maybe<Scalars['Int']>;
  /** List of URLs for the digital variant. */
  urls?: Maybe<Array<Maybe<DigitalContentUrl>>>;
  useDefaultSettings: Scalars['Boolean'];
};

export type DigitalContentUrl = Node & {
  __typename?: 'DigitalContentUrl';
  content: DigitalContent;
  created: Scalars['DateTime'];
  downloadNum: Scalars['Int'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** UUID of digital content. */
  token: Scalars['UUID'];
  /** URL for digital content. */
  url?: Maybe<Scalars['String']>;
};


/** Represents stock. */
export type Stock = Node & {
  __typename?: 'Stock';
  /** The ID of the object. */
  id: Scalars['ID'];
  productVariant: ProductVariant;
  /** Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment. */
  quantity: Scalars['Int'];
  /** Quantity allocated for orders */
  quantityAllocated: Scalars['Int'];
  warehouse: Warehouse;
};

/** An enumeration. */
export enum CountryCode {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Eu = 'EU',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

/** Represents availability of a product in the storefront. */
export type ProductPricingInfo = {
  __typename?: 'ProductPricingInfo';
  /** The discount amount if in sale (null otherwise). */
  discount?: Maybe<TaxedMoney>;
  /** The discount amount in the local currency. */
  discountLocalCurrency?: Maybe<TaxedMoney>;
  /** Whether it is in sale or not. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** The discounted price range of the product variants. */
  priceRange?: Maybe<TaxedMoneyRange>;
  /** The discounted price range of the product variants in the local currency. */
  priceRangeLocalCurrency?: Maybe<TaxedMoneyRange>;
  /** The undiscounted price range of the product variants. */
  priceRangeUndiscounted?: Maybe<TaxedMoneyRange>;
};

/** Represents a range of monetary values. */
export type TaxedMoneyRange = {
  __typename?: 'TaxedMoneyRange';
  /** Lower bound of a price range. */
  start?: Maybe<TaxedMoney>;
  /** Upper bound of a price range. */
  stop?: Maybe<TaxedMoney>;
};

/** Represents product channel listing. */
export type ProductChannelListing = Node & {
  __typename?: 'ProductChannelListing';
  availableForPurchase?: Maybe<Scalars['Date']>;
  channel: Channel;
  /** The price of the cheapest variant (including discounts). */
  discountedPrice?: Maybe<Money>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Whether the product is available for purchase. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
  isPublished: Scalars['Boolean'];
  /** Range of margin percentage value. */
  margin?: Maybe<Margin>;
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<ProductPricingInfo>;
  publicationDate?: Maybe<Scalars['Date']>;
  /** Purchase cost of product. */
  purchaseCost?: Maybe<MoneyRange>;
  visibleInListings: Scalars['Boolean'];
};


export type Margin = {
  __typename?: 'Margin';
  start?: Maybe<Scalars['Int']>;
  stop?: Maybe<Scalars['Int']>;
};

/** Represents a collection of products. */
export type Collection = Node & ObjectWithMetadata & {
  __typename?: 'Collection';
  backgroundImage?: Maybe<Image>;
  /** List of channels in which the collection is available. */
  channelListings?: Maybe<Array<CollectionChannelListing>>;
  description: Scalars['JSONString'];
  /**
   * Description of the collection (JSON).
   * @deprecated Will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of products in this collection. */
  products?: Maybe<ProductCountableConnection>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  /** Returns translated collection fields for the given language code. */
  translation?: Maybe<CollectionTranslation>;
};


/** Represents a collection of products. */
export type CollectionBackgroundImageArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** Represents a collection of products. */
export type CollectionProductsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductFilterInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<ProductOrder>;
};


/** Represents a collection of products. */
export type CollectionTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ProductFilterInput = {
  attributes?: Maybe<Array<Maybe<AttributeInput>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specifies the channel by which the data should be sorted. */
  channel?: Maybe<Scalars['String']>;
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hasCategory?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isPublished?: Maybe<Scalars['Boolean']>;
  minimalPrice?: Maybe<PriceRangeInput>;
  price?: Maybe<PriceRangeInput>;
  productType?: Maybe<Scalars['ID']>;
  productTypes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  search?: Maybe<Scalars['String']>;
  stockAvailability?: Maybe<StockAvailability>;
  stocks?: Maybe<ProductStockFilterInput>;
};

export type AttributeInput = {
  /** Internal representation of an attribute name. */
  slug: Scalars['String'];
  /** [Deprecated] Internal representation of a value (unique per attribute). This field will be removed after 2020-07-31. */
  value?: Maybe<Scalars['String']>;
  /** Internal representation of a value (unique per attribute). */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum StockAvailability {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

export type ProductStockFilterInput = {
  quantity?: Maybe<IntRangeInput>;
  warehouseIds?: Maybe<Array<Scalars['ID']>>;
};

export type IntRangeInput = {
  /** Value greater than or equal to. */
  gte?: Maybe<Scalars['Int']>;
  /** Value less than or equal to. */
  lte?: Maybe<Scalars['Int']>;
};

export type PriceRangeInput = {
  /** Price greater than or equal to. */
  gte?: Maybe<Scalars['Float']>;
  /** Price less than or equal to. */
  lte?: Maybe<Scalars['Float']>;
};

export type ProductOrder = {
  /**
   * Sort product by the selected attribute's values.
   * Note: this doesn't take translations into account yet.
   */
  attributeId?: Maybe<Scalars['ID']>;
  /** Specifies the channel in which to sort the data. */
  channel?: Maybe<Scalars['String']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort products by the selected field. */
  field?: Maybe<ProductOrderField>;
};

export enum OrderDirection {
  /** Specifies an ascending sort order. */
  Asc = 'ASC',
  /** Specifies a descending sort order. */
  Desc = 'DESC'
}

export enum ProductOrderField {
  /** Sort products by collection. Note: This option is available only for the `Collection.products` query. */
  Collection = 'COLLECTION',
  /** Sort products by update date. */
  Date = 'DATE',
  /** Sort products by a minimal price of a product's variant. */
  MinimalPrice = 'MINIMAL_PRICE',
  /** Sort products by name. */
  Name = 'NAME',
  /** Sort products by price. */
  Price = 'PRICE',
  /** Sort products by publication date. */
  PublicationDate = 'PUBLICATION_DATE',
  /** Sort products by publication status. */
  Published = 'PUBLISHED',
  /** Sort products by rating. */
  Rating = 'RATING',
  /** Sort products by type. */
  Type = 'TYPE'
}

export type CollectionTranslation = Node & {
  __typename?: 'CollectionTranslation';
  description: Scalars['JSONString'];
  /**
   * Translated description of the product (JSON).
   * @deprecated Will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
};

/** Represents collection channel listing. */
export type CollectionChannelListing = Node & {
  __typename?: 'CollectionChannelListing';
  channel: Channel;
  /** The ID of the object. */
  id: Scalars['ID'];
  isPublished: Scalars['Boolean'];
  publicationDate?: Maybe<Scalars['Date']>;
};

export type ProductTranslation = Node & {
  __typename?: 'ProductTranslation';
  description: Scalars['JSONString'];
  /**
   * Translated description of the product (JSON).
   * @deprecated Will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name: Scalars['String'];
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
};

/** Represents user address data. */
export type Address = Node & {
  __typename?: 'Address';
  city: Scalars['String'];
  cityArea: Scalars['String'];
  companyName: Scalars['String'];
  /** Shop's default country. */
  country: CountryDisplay;
  countryArea: Scalars['String'];
  firstName: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Address is user's default billing address. */
  isDefaultBillingAddress?: Maybe<Scalars['Boolean']>;
  /** Address is user's default shipping address. */
  isDefaultShippingAddress?: Maybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  streetAddress1: Scalars['String'];
  streetAddress2: Scalars['String'];
};

export type WarehouseCountableConnection = {
  __typename?: 'WarehouseCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<WarehouseCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type WarehouseCountableEdge = {
  __typename?: 'WarehouseCountableEdge';
  /** The item at the end of the edge. */
  node: Warehouse;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type WarehouseFilterInput = {
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type WarehouseSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort warehouses by the selected field. */
  field: WarehouseSortField;
};

export enum WarehouseSortField {
  /** Sort warehouses by name. */
  Name = 'NAME'
}

export type TranslatableItemConnection = {
  __typename?: 'TranslatableItemConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<TranslatableItemEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type TranslatableItemEdge = {
  __typename?: 'TranslatableItemEdge';
  /** The item at the end of the edge. */
  node: TranslatableItem;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type TranslatableItem = ProductTranslatableContent | CollectionTranslatableContent | CategoryTranslatableContent | AttributeTranslatableContent | AttributeValueTranslatableContent | ProductVariantTranslatableContent | PageTranslatableContent | ShippingMethodTranslatableContent | SaleTranslatableContent | VoucherTranslatableContent | MenuItemTranslatableContent;

export type ProductTranslatableContent = Node & {
  __typename?: 'ProductTranslatableContent';
  /** The ID of the object. */
  id: Scalars['ID'];
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description: Scalars['JSONString'];
  /**
   * Description of the product (JSON).
   * @deprecated Will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** Returns translated product fields for the given language code. */
  translation?: Maybe<ProductTranslation>;
  /** Represents an individual item for sale in the storefront. */
  product?: Maybe<Product>;
};


export type ProductTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type CollectionTranslatableContent = Node & {
  __typename?: 'CollectionTranslatableContent';
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['JSONString'];
  /**
   * Description of the collection (JSON).
   * @deprecated Will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** Returns translated collection fields for the given language code. */
  translation?: Maybe<CollectionTranslation>;
  /** Represents a collection of products. */
  collection?: Maybe<Collection>;
};


export type CollectionTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type CategoryTranslatableContent = Node & {
  __typename?: 'CategoryTranslatableContent';
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['JSONString'];
  /**
   * Description of the category (JSON).
   * @deprecated Will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** Returns translated category fields for the given language code. */
  translation?: Maybe<CategoryTranslation>;
  /** Represents a single category of products. */
  category?: Maybe<Category>;
};


export type CategoryTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type AttributeTranslatableContent = Node & {
  __typename?: 'AttributeTranslatableContent';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated attribute fields for the given language code. */
  translation?: Maybe<AttributeTranslation>;
  /** Custom attribute of a product. */
  attribute?: Maybe<Attribute>;
};


export type AttributeTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type AttributeValueTranslatableContent = Node & {
  __typename?: 'AttributeValueTranslatableContent';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated attribute value fields for the given language code. */
  translation?: Maybe<AttributeValueTranslation>;
  /** Represents a value of an attribute. */
  attributeValue?: Maybe<AttributeValue>;
};


export type AttributeValueTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ProductVariantTranslatableContent = Node & {
  __typename?: 'ProductVariantTranslatableContent';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated product variant fields for the given language code. */
  translation?: Maybe<ProductVariantTranslation>;
  /** Represents a version of a product such as different size or color. */
  productVariant?: Maybe<ProductVariant>;
};


export type ProductVariantTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type PageTranslatableContent = Node & {
  __typename?: 'PageTranslatableContent';
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['JSONString'];
  /**
   * Content of the page (JSON).
   * @deprecated Will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson?: Maybe<Scalars['String']>;
  /** Returns translated page fields for the given language code. */
  translation?: Maybe<PageTranslation>;
  /** ('A static page that can be manually added by a shop operator ', 'through the dashboard.') */
  page?: Maybe<Page>;
};


export type PageTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type PageTranslation = Node & {
  __typename?: 'PageTranslation';
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['JSONString'];
  /** Translation language. */
  language: LanguageDisplay;
  /**
   * Translated description of the page (JSON).
   * @deprecated Will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson?: Maybe<Scalars['String']>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type Page = Node & ObjectWithMetadata & {
  __typename?: 'Page';
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['JSONString'];
  publicationDate?: Maybe<Scalars['Date']>;
  isPublished: Scalars['Boolean'];
  slug: Scalars['String'];
  pageType: PageType;
  created: Scalars['DateTime'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * Content of the page (JSON).
   * @deprecated Will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson: Scalars['String'];
  /** Returns translated page fields for the given language code. */
  translation?: Maybe<PageTranslation>;
  /** List of attributes assigned to this product. */
  attributes: Array<SelectedAttribute>;
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageType = Node & ObjectWithMetadata & {
  __typename?: 'PageType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /** Page attributes of that page type. */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /** Attributes that can be assigned to the page type. */
  availableAttributes?: Maybe<AttributeCountableConnection>;
  /** Whether page type has pages assigned. */
  hasPages?: Maybe<Scalars['Boolean']>;
};


/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeAvailableAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ShippingMethodTranslatableContent = Node & {
  __typename?: 'ShippingMethodTranslatableContent';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<ShippingMethodTranslation>;
  /** Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers. */
  shippingMethod?: Maybe<ShippingMethod>;
};


export type ShippingMethodTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type SaleTranslatableContent = Node & {
  __typename?: 'SaleTranslatableContent';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated sale fields for the given language code. */
  translation?: Maybe<SaleTranslation>;
  /** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
  sale?: Maybe<Sale>;
};


export type SaleTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type SaleTranslation = Node & {
  __typename?: 'SaleTranslation';
  /** The ID of the object. */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** Translation language. */
  language: LanguageDisplay;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type Sale = Node & {
  __typename?: 'Sale';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  type: SaleType;
  startDate: Scalars['DateTime'];
  endDate?: Maybe<Scalars['DateTime']>;
  /** List of categories this sale applies to. */
  categories?: Maybe<CategoryCountableConnection>;
  /** List of collections this sale applies to. */
  collections?: Maybe<CollectionCountableConnection>;
  /** List of products this sale applies to. */
  products?: Maybe<ProductCountableConnection>;
  /** Returns translated sale fields for the given language code. */
  translation?: Maybe<SaleTranslation>;
  /** List of channels available for the sale. */
  channelListings?: Maybe<Array<SaleChannelListing>>;
  /** Sale value. */
  discountValue?: Maybe<Scalars['Float']>;
  /** Currency code for sale. */
  currency?: Maybe<Scalars['String']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCategoriesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCollectionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleProductsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** An enumeration. */
export enum SaleType {
  /** fixed */
  Fixed = 'FIXED',
  /** % */
  Percentage = 'PERCENTAGE'
}

export type CollectionCountableConnection = {
  __typename?: 'CollectionCountableConnection';
  edges: Array<CollectionCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type CollectionCountableEdge = {
  __typename?: 'CollectionCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Collection;
};

/** Represents sale channel listing. */
export type SaleChannelListing = Node & {
  __typename?: 'SaleChannelListing';
  /** The ID of the object. */
  id: Scalars['ID'];
  channel: Channel;
  discountValue: Scalars['Float'];
  currency: Scalars['String'];
};

export type VoucherTranslatableContent = Node & {
  __typename?: 'VoucherTranslatableContent';
  /** The ID of the object. */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** Returns translated voucher fields for the given language code. */
  translation?: Maybe<VoucherTranslation>;
  /** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
  voucher?: Maybe<Voucher>;
};


export type VoucherTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type VoucherTranslation = Node & {
  __typename?: 'VoucherTranslation';
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Translation language. */
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']>;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type Voucher = Node & {
  __typename?: 'Voucher';
  applyOncePerCustomer: Scalars['Boolean'];
  applyOncePerOrder: Scalars['Boolean'];
  /** List of categories this voucher applies to. */
  categories?: Maybe<CategoryCountableConnection>;
  /** List of availability in channels for the voucher. */
  channelListings?: Maybe<Array<VoucherChannelListing>>;
  code: Scalars['String'];
  /** List of collections this voucher applies to. */
  collections?: Maybe<CollectionCountableConnection>;
  /** List of countries available for the shipping voucher. */
  countries?: Maybe<Array<Maybe<CountryDisplay>>>;
  /** Currency code for voucher. */
  currency?: Maybe<Scalars['String']>;
  /** Voucher value. */
  discountValue?: Maybe<Scalars['Float']>;
  /** Determines a type of discount for voucher - value or percentage */
  discountValueType: DiscountValueTypeEnum;
  endDate?: Maybe<Scalars['DateTime']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  minCheckoutItemsQuantity?: Maybe<Scalars['Int']>;
  /** Minimum order value to apply voucher. */
  minSpent?: Maybe<Money>;
  name?: Maybe<Scalars['String']>;
  /** List of products this voucher applies to. */
  products?: Maybe<ProductCountableConnection>;
  startDate: Scalars['DateTime'];
  /** Returns translated voucher fields for the given language code. */
  translation?: Maybe<VoucherTranslation>;
  /** Determines a type of voucher. */
  type: VoucherTypeEnum;
  usageLimit?: Maybe<Scalars['Int']>;
  used: Scalars['Int'];
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCategoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherProductsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export enum VoucherTypeEnum {
  EntireOrder = 'ENTIRE_ORDER',
  Shipping = 'SHIPPING',
  SpecificProduct = 'SPECIFIC_PRODUCT'
}

export enum DiscountValueTypeEnum {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

/** Represents voucher channel listing. */
export type VoucherChannelListing = Node & {
  __typename?: 'VoucherChannelListing';
  channel: Channel;
  currency: Scalars['String'];
  discountValue: Scalars['Float'];
  /** The ID of the object. */
  id: Scalars['ID'];
  minSpent?: Maybe<Money>;
};

export type MenuItemTranslatableContent = Node & {
  __typename?: 'MenuItemTranslatableContent';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated menu item fields for the given language code. */
  translation?: Maybe<MenuItemTranslation>;
  /** Represents a single item of the related menu. Can store categories, collection or pages. */
  menuItem?: Maybe<MenuItem>;
};


export type MenuItemTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type MenuItemTranslation = Node & {
  __typename?: 'MenuItemTranslation';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Translation language. */
  language: LanguageDisplay;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItem = Node & ObjectWithMetadata & {
  __typename?: 'MenuItem';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  menu: Menu;
  parent?: Maybe<MenuItem>;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  page?: Maybe<Page>;
  level: Scalars['Int'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  children?: Maybe<Array<Maybe<MenuItem>>>;
  /** URL to the menu item. */
  url?: Maybe<Scalars['String']>;
  /** Returns translated menu item fields for the given language code. */
  translation?: Maybe<MenuItemTranslation>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type Menu = Node & ObjectWithMetadata & {
  __typename?: 'Menu';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  items?: Maybe<Array<Maybe<MenuItem>>>;
};

export enum TranslatableKinds {
  Attribute = 'ATTRIBUTE',
  AttributeValue = 'ATTRIBUTE_VALUE',
  Category = 'CATEGORY',
  Collection = 'COLLECTION',
  MenuItem = 'MENU_ITEM',
  Page = 'PAGE',
  Product = 'PRODUCT',
  Sale = 'SALE',
  ShippingMethod = 'SHIPPING_METHOD',
  Variant = 'VARIANT',
  Voucher = 'VOUCHER'
}

export type StockCountableConnection = {
  __typename?: 'StockCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<StockCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type StockCountableEdge = {
  __typename?: 'StockCountableEdge';
  /** The item at the end of the edge. */
  node: Stock;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type StockFilterInput = {
  quantity?: Maybe<Scalars['Float']>;
  search?: Maybe<Scalars['String']>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type Shop = {
  __typename?: 'Shop';
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /** Shipping methods that are available for the shop. */
  availableShippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
  /** Customer's geolocalization data. */
  geolocalization?: Maybe<Geolocalization>;
  /** List of countries available in the shop. */
  countries: Array<CountryDisplay>;
  /** Shop's default country. */
  defaultCountry?: Maybe<CountryDisplay>;
  /** Default shop's email sender's name. */
  defaultMailSenderName?: Maybe<Scalars['String']>;
  /** Default shop's email sender's address. */
  defaultMailSenderAddress?: Maybe<Scalars['String']>;
  /** Shop's description. */
  description?: Maybe<Scalars['String']>;
  /** Shop's domain data. */
  domain: Domain;
  /** List of the shops's supported languages. */
  languages: Array<Maybe<LanguageDisplay>>;
  /** Shop's name. */
  name: Scalars['String'];
  /**
   * Shop's navigation.
   * @deprecated Fetch menus using the `menu` query with `slug` parameter.
   */
  navigation?: Maybe<Navigation>;
  /** List of available permissions. */
  permissions: Array<Maybe<Permission>>;
  /** List of possible phone prefixes. */
  phonePrefixes: Array<Maybe<Scalars['String']>>;
  /** Header text. */
  headerText?: Maybe<Scalars['String']>;
  /** Include taxes in prices. */
  includeTaxesInPrices: Scalars['Boolean'];
  /** Display prices with tax in store. */
  displayGrossPrices: Scalars['Boolean'];
  /** Charge taxes on shipping. */
  chargeTaxesOnShipping: Scalars['Boolean'];
  /** Enable inventory tracking. */
  trackInventoryByDefault?: Maybe<Scalars['Boolean']>;
  /** Default weight unit. */
  defaultWeightUnit?: Maybe<WeightUnitsEnum>;
  /** Returns translated shop fields for the given language code. */
  translation?: Maybe<ShopTranslation>;
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']>;
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']>;
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']>;
  /** Company address. */
  companyAddress?: Maybe<Address>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: Maybe<Scalars['String']>;
  /** List of staff notification recipients. */
  staffNotificationRecipients?: Maybe<Array<Maybe<StaffNotificationRecipient>>>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailablePaymentGatewaysArgs = {
  currency?: Maybe<Scalars['String']>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailableShippingMethodsArgs = {
  channel: Scalars['String'];
  address?: Maybe<AddressInput>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopCountriesArgs = {
  languageCode?: Maybe<LanguageCodeEnum>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Available payment gateway backend with configuration necessary to setup client. */
export type PaymentGateway = {
  __typename?: 'PaymentGateway';
  /** Payment gateway client configuration. */
  config: Array<GatewayConfigLine>;
  /** Payment gateway supported currencies. */
  currencies: Array<Maybe<Scalars['String']>>;
  /** Payment gateway ID. */
  id: Scalars['ID'];
  /** Payment gateway name. */
  name: Scalars['String'];
};

/** Payment gateway client configuration key and value pair. */
export type GatewayConfigLine = {
  __typename?: 'GatewayConfigLine';
  /** Gateway config key. */
  field: Scalars['String'];
  /** Gateway config value for key. */
  value?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** Company or organization. */
  companyName?: Maybe<Scalars['String']>;
  /** Address. */
  streetAddress1?: Maybe<Scalars['String']>;
  /** Address. */
  streetAddress2?: Maybe<Scalars['String']>;
  /** City. */
  city?: Maybe<Scalars['String']>;
  /** District. */
  cityArea?: Maybe<Scalars['String']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']>;
  /** Country. */
  country?: Maybe<CountryCode>;
  /** State or province. */
  countryArea?: Maybe<Scalars['String']>;
  /** Phone number. */
  phone?: Maybe<Scalars['String']>;
};

/** Represents customers's geolocalization data. */
export type Geolocalization = {
  __typename?: 'Geolocalization';
  /** Country of the user acquired by his IP address. */
  country?: Maybe<CountryDisplay>;
};

/** Represents shop's domain. */
export type Domain = {
  __typename?: 'Domain';
  /** The host name of the domain. */
  host: Scalars['String'];
  /** Inform if SSL is enabled. */
  sslEnabled: Scalars['Boolean'];
  /** Shop's absolute URL. */
  url: Scalars['String'];
};

/** Represents shop's navigation menus. */
export type Navigation = {
  __typename?: 'Navigation';
  /** Main navigation bar. */
  main?: Maybe<Menu>;
  /** Secondary navigation bar. */
  secondary?: Maybe<Menu>;
};

export type ShopTranslation = Node & {
  __typename?: 'ShopTranslation';
  /** The ID of the object. */
  id: Scalars['ID'];
  headerText: Scalars['String'];
  description: Scalars['String'];
  /** Translation language. */
  language: LanguageDisplay;
};

/** Represents a recipient of email notifications send by Saleor, such as notifications about new orders. Notifications can be assigned to staff users or arbitrary email addresses. */
export type StaffNotificationRecipient = Node & {
  __typename?: 'StaffNotificationRecipient';
  /** Returns a user subscribed to email notifications. */
  user?: Maybe<User>;
  /** Determines if a notification active. */
  active?: Maybe<Scalars['Boolean']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Returns email address of a user subscribed to email notifications. */
  email?: Maybe<Scalars['String']>;
};

/** Represents user data. */
export type User = Node & ObjectWithMetadata & {
  __typename?: 'User';
  /** List of all user's addresses. */
  addresses?: Maybe<Array<Maybe<Address>>>;
  avatar?: Maybe<Image>;
  /**
   * Returns the last open checkout of this user.
   * @deprecated Use the `checkout_tokens` field to fetch the user checkouts.
   */
  checkout?: Maybe<Checkout>;
  /** Returns the checkout UUID's assigned to this user. */
  checkoutTokens?: Maybe<Array<Scalars['UUID']>>;
  dateJoined: Scalars['DateTime'];
  defaultBillingAddress?: Maybe<Address>;
  defaultShippingAddress?: Maybe<Address>;
  /** List of user's permission groups which user can manage. */
  editableGroups?: Maybe<Array<Maybe<Group>>>;
  email: Scalars['String'];
  /** List of events associated with the user. */
  events?: Maybe<Array<Maybe<CustomerEvent>>>;
  firstName: Scalars['String'];
  /** List of the user gift cards. */
  giftCards?: Maybe<GiftCardCountableConnection>;
  /** The ID of the object. */
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /** A note about the customer. */
  note?: Maybe<Scalars['String']>;
  /** List of user's orders. */
  orders?: Maybe<OrderCountableConnection>;
  /** List of user's permission groups. */
  permissionGroups?: Maybe<Array<Maybe<Group>>>;
  /**
   * List of user's permissions.
   * @deprecated Will be removed in Saleor 2.11.Use the `userPermissions` instead.
   */
  permissions?: Maybe<Array<Maybe<Permission>>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of stored payment sources. */
  storedPaymentSources?: Maybe<Array<Maybe<PaymentSource>>>;
  /** List of user's permissions. */
  userPermissions?: Maybe<Array<Maybe<UserPermission>>>;
};


/** Represents user data. */
export type UserAvatarArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** Represents user data. */
export type UserCheckoutTokensArgs = {
  channel?: Maybe<Scalars['String']>;
};


/** Represents user data. */
export type UserGiftCardsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents user data. */
export type UserOrdersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Checkout object. */
export type Checkout = Node & ObjectWithMetadata & {
  __typename?: 'Checkout';
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /** Shipping methods that can be used with this order. */
  availableShippingMethods: Array<Maybe<ShippingMethod>>;
  billingAddress?: Maybe<Address>;
  channel: Channel;
  created: Scalars['DateTime'];
  discount?: Maybe<Money>;
  discountName?: Maybe<Scalars['String']>;
  /** Email of a customer. */
  email: Scalars['String'];
  /** List of gift cards associated with this checkout. */
  giftCards?: Maybe<Array<Maybe<GiftCard>>>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Returns True, if checkout requires shipping. */
  isShippingRequired: Scalars['Boolean'];
  lastChange: Scalars['DateTime'];
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines?: Maybe<Array<Maybe<CheckoutLine>>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  note: Scalars['String'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  quantity: Scalars['Int'];
  shippingAddress?: Maybe<Address>;
  /** The shipping method related with checkout. */
  shippingMethod?: Maybe<ShippingMethod>;
  /** The price of the shipping, with all the taxes included. */
  shippingPrice?: Maybe<TaxedMoney>;
  /** The price of the checkout before shipping, with taxes included. */
  subtotalPrice?: Maybe<TaxedMoney>;
  /** The checkout's token. */
  token: Scalars['UUID'];
  /** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
  totalPrice?: Maybe<TaxedMoney>;
  translatedDiscountName?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  voucherCode?: Maybe<Scalars['String']>;
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCard = Node & {
  __typename?: 'GiftCard';
  /** Gift card code. */
  code?: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
  currentBalance?: Maybe<Money>;
  /** Code in format which allows displaying in a user interface. */
  displayCode?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  initialBalance?: Maybe<Money>;
  isActive: Scalars['Boolean'];
  lastUsedOn?: Maybe<Scalars['DateTime']>;
  startDate: Scalars['Date'];
  /** The customer who bought a gift card. */
  user?: Maybe<User>;
};

/** Represents an item in the checkout. */
export type CheckoutLine = Node & {
  __typename?: 'CheckoutLine';
  /** The ID of the object. */
  id: Scalars['ID'];
  quantity: Scalars['Int'];
  /** Indicates whether the item need to be delivered. */
  requiresShipping?: Maybe<Scalars['Boolean']>;
  /** The sum of the checkout line price, taxes and discounts. */
  totalPrice?: Maybe<TaxedMoney>;
  variant: ProductVariant;
};

export type GiftCardCountableConnection = {
  __typename?: 'GiftCardCountableConnection';
  edges: Array<GiftCardCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type GiftCardCountableEdge = {
  __typename?: 'GiftCardCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GiftCard;
};

export type OrderCountableConnection = {
  __typename?: 'OrderCountableConnection';
  edges: Array<OrderCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderCountableEdge = {
  __typename?: 'OrderCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Order;
};

/** Represents an order in the shop. */
export type Order = Node & ObjectWithMetadata & {
  __typename?: 'Order';
  /** List of actions that can be performed in the current state of an order. */
  actions: Array<Maybe<OrderAction>>;
  /** Shipping methods that can be used with this order. */
  availableShippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
  billingAddress?: Maybe<Address>;
  /** Informs whether a draft order can be finalized(turned into a regular order). */
  canFinalize: Scalars['Boolean'];
  channel: Channel;
  created: Scalars['DateTime'];
  customerNote: Scalars['String'];
  discount?: Maybe<Money>;
  discountName?: Maybe<Scalars['String']>;
  displayGrossPrices: Scalars['Boolean'];
  /** List of events associated with the order. */
  events?: Maybe<Array<Maybe<OrderEvent>>>;
  /** List of shipments for the order. */
  fulfillments: Array<Maybe<Fulfillment>>;
  /** List of user gift cards. */
  giftCards?: Maybe<Array<Maybe<GiftCard>>>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of order invoices. */
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  /** Informs if an order is fully paid. */
  isPaid: Scalars['Boolean'];
  /** Returns True, if order requires shipping. */
  isShippingRequired: Scalars['Boolean'];
  languageCode: Scalars['String'];
  /** List of order lines. */
  lines: Array<Maybe<OrderLine>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /** User-friendly number of an order. */
  number?: Maybe<Scalars['String']>;
  /** Internal payment status. */
  paymentStatus: PaymentChargeStatusEnum;
  /** User-friendly payment status. */
  paymentStatusDisplay: Scalars['String'];
  /** List of payments for the order. */
  payments?: Maybe<Array<Maybe<Payment>>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  redirectUrl?: Maybe<Scalars['String']>;
  shippingAddress?: Maybe<Address>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethodName?: Maybe<Scalars['String']>;
  /** Total price of shipping. */
  shippingPrice: TaxedMoney;
  shippingTaxRate: Scalars['Float'];
  status: OrderStatus;
  /** User-friendly order status. */
  statusDisplay?: Maybe<Scalars['String']>;
  /** The sum of line prices not including shipping. */
  subtotal: TaxedMoney;
  token: Scalars['String'];
  /** Total amount of the order. */
  total: TaxedMoney;
  /** Amount authorized for the order. */
  totalAuthorized: Money;
  /** The difference between the paid and the order total amount. */
  totalBalance: Money;
  /** Amount captured by payment. */
  totalCaptured: Money;
  trackingClientId: Scalars['String'];
  translatedDiscountName?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>;
  voucher?: Maybe<Voucher>;
  weight?: Maybe<Weight>;
};

/** An enumeration. */
export enum OrderStatus {
  /** Canceled */
  Canceled = 'CANCELED',
  /** Draft */
  Draft = 'DRAFT',
  /** Fulfilled */
  Fulfilled = 'FULFILLED',
  /** Partially fulfilled */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  /** Partially returned */
  PartiallyReturned = 'PARTIALLY_RETURNED',
  /** Returned */
  Returned = 'RETURNED',
  /** Unconfirmed */
  Unconfirmed = 'UNCONFIRMED',
  /** Unfulfilled */
  Unfulfilled = 'UNFULFILLED'
}

/** Represents order fulfillment. */
export type Fulfillment = Node & ObjectWithMetadata & {
  __typename?: 'Fulfillment';
  created: Scalars['DateTime'];
  fulfillmentOrder: Scalars['Int'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of lines for the fulfillment. */
  lines?: Maybe<Array<Maybe<FulfillmentLine>>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  status: FulfillmentStatus;
  /** User-friendly fulfillment status. */
  statusDisplay?: Maybe<Scalars['String']>;
  trackingNumber: Scalars['String'];
  /** Warehouse from fulfillment was fulfilled. */
  warehouse?: Maybe<Warehouse>;
};

/** An enumeration. */
export enum FulfillmentStatus {
  /** Canceled */
  Canceled = 'CANCELED',
  /** Fulfilled */
  Fulfilled = 'FULFILLED',
  /** Refunded */
  Refunded = 'REFUNDED',
  /** Refunded and returned */
  RefundedAndReturned = 'REFUNDED_AND_RETURNED',
  /** Replaced */
  Replaced = 'REPLACED',
  /** Returned */
  Returned = 'RETURNED'
}

/** Represents line of the fulfillment. */
export type FulfillmentLine = Node & {
  __typename?: 'FulfillmentLine';
  /** The ID of the object. */
  id: Scalars['ID'];
  orderLine?: Maybe<OrderLine>;
  quantity: Scalars['Int'];
};

/** Represents order line of particular order. */
export type OrderLine = Node & {
  __typename?: 'OrderLine';
  /** List of allocations across warehouses. */
  allocations?: Maybe<Array<Allocation>>;
  digitalContentUrl?: Maybe<DigitalContentUrl>;
  /** The ID of the object. */
  id: Scalars['ID'];
  isShippingRequired: Scalars['Boolean'];
  productName: Scalars['String'];
  productSku: Scalars['String'];
  quantity: Scalars['Int'];
  quantityFulfilled: Scalars['Int'];
  taxRate: Scalars['Float'];
  /** The main thumbnail for the ordered product. */
  thumbnail?: Maybe<Image>;
  /** Price of the order line. */
  totalPrice: TaxedMoney;
  /** Product name in the customer's language */
  translatedProductName: Scalars['String'];
  /** Variant name in the customer's language */
  translatedVariantName: Scalars['String'];
  /** Price of the single item in the order line. */
  unitPrice: TaxedMoney;
  /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. */
  variant?: Maybe<ProductVariant>;
  variantName: Scalars['String'];
};


/** Represents order line of particular order. */
export type OrderLineThumbnailArgs = {
  size?: Maybe<Scalars['Int']>;
};

/** Represents allocation. */
export type Allocation = Node & {
  __typename?: 'Allocation';
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Quantity allocated for orders. */
  quantity: Scalars['Int'];
  /** The warehouse were items were allocated. */
  warehouse: Warehouse;
};

export enum OrderAction {
  /** Represents the capture action. */
  Capture = 'CAPTURE',
  /** Represents a mark-as-paid action. */
  MarkAsPaid = 'MARK_AS_PAID',
  /** Represents a refund action. */
  Refund = 'REFUND',
  /** Represents a void action. */
  Void = 'VOID'
}

/** Represents an Invoice. */
export type Invoice = Job & Node & ObjectWithMetadata & {
  __typename?: 'Invoice';
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  externalUrl?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Job message. */
  message?: Maybe<Scalars['String']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  number?: Maybe<Scalars['String']>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
  /** URL to download an invoice. */
  url?: Maybe<Scalars['String']>;
};

export type Job = {
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  /** Job message. */
  message?: Maybe<Scalars['String']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
};

/** An enumeration. */
export enum JobStatusEnum {
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

/** An enumeration. */
export enum PaymentChargeStatusEnum {
  Cancelled = 'CANCELLED',
  FullyCharged = 'FULLY_CHARGED',
  FullyRefunded = 'FULLY_REFUNDED',
  NotCharged = 'NOT_CHARGED',
  PartiallyCharged = 'PARTIALLY_CHARGED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Pending = 'PENDING',
  Refused = 'REFUSED'
}

/** Represents a payment of a given type. */
export type Payment = Node & {
  __typename?: 'Payment';
  /** List of actions that can be performed in the current state of a payment. */
  actions: Array<Maybe<OrderAction>>;
  /** Maximum amount of money that can be captured. */
  availableCaptureAmount?: Maybe<Money>;
  /** Maximum amount of money that can be refunded. */
  availableRefundAmount?: Maybe<Money>;
  /** Total amount captured for this payment. */
  capturedAmount?: Maybe<Money>;
  /** Internal payment status. */
  chargeStatus: PaymentChargeStatusEnum;
  checkout?: Maybe<Checkout>;
  created: Scalars['DateTime'];
  /** The details of the card used for this payment. */
  creditCard?: Maybe<CreditCard>;
  customerIpAddress?: Maybe<Scalars['String']>;
  gateway: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  modified: Scalars['DateTime'];
  order?: Maybe<Order>;
  token: Scalars['String'];
  /** Total amount of the payment. */
  total?: Maybe<Money>;
  /** List of all transactions within this payment. */
  transactions?: Maybe<Array<Maybe<Transaction>>>;
};

/** An object representing a single payment. */
export type Transaction = Node & {
  __typename?: 'Transaction';
  /** Total amount of the transaction. */
  amount?: Maybe<Money>;
  created: Scalars['DateTime'];
  error?: Maybe<TransactionError>;
  /** The ID of the object. */
  id: Scalars['ID'];
  isSuccess: Scalars['Boolean'];
  kind: TransactionKind;
  payment: Payment;
  token: Scalars['String'];
};

/** An enumeration. */
export enum TransactionKind {
  /** Action to confirm */
  ActionToConfirm = 'ACTION_TO_CONFIRM',
  /** Authorization */
  Auth = 'AUTH',
  /** Cancel */
  Cancel = 'CANCEL',
  /** Capture */
  Capture = 'CAPTURE',
  /** Confirm */
  Confirm = 'CONFIRM',
  /** External reference */
  External = 'EXTERNAL',
  /** Pending */
  Pending = 'PENDING',
  /** Refund */
  Refund = 'REFUND',
  /** Refund in progress */
  RefundOngoing = 'REFUND_ONGOING',
  /** Void */
  Void = 'VOID'
}

/** An enumeration. */
export enum TransactionError {
  /** declined */
  TransactionerrorDeclined = 'TRANSACTIONERROR_DECLINED',
  /** expired */
  TransactionerrorExpired = 'TRANSACTIONERROR_EXPIRED',
  /** incorrect_address */
  TransactionerrorIncorrectAddress = 'TRANSACTIONERROR_INCORRECT_ADDRESS',
  /** incorrect_cvv */
  TransactionerrorIncorrectCvv = 'TRANSACTIONERROR_INCORRECT_CVV',
  /** incorrect_number */
  TransactionerrorIncorrectNumber = 'TRANSACTIONERROR_INCORRECT_NUMBER',
  /** incorrect_zip */
  TransactionerrorIncorrectZip = 'TRANSACTIONERROR_INCORRECT_ZIP',
  /** invalid_cvv */
  TransactionerrorInvalidCvv = 'TRANSACTIONERROR_INVALID_CVV',
  /** invalid_expiry_date */
  TransactionerrorInvalidExpiryDate = 'TRANSACTIONERROR_INVALID_EXPIRY_DATE',
  /** invalid_number */
  TransactionerrorInvalidNumber = 'TRANSACTIONERROR_INVALID_NUMBER',
  /** processing_error */
  TransactionerrorProcessingError = 'TRANSACTIONERROR_PROCESSING_ERROR'
}

export type CreditCard = {
  __typename?: 'CreditCard';
  /** Card brand. */
  brand: Scalars['String'];
  /** Two-digit number representing the card’s expiration month. */
  expMonth?: Maybe<Scalars['Int']>;
  /** Four-digit number representing the card’s expiration year. */
  expYear?: Maybe<Scalars['Int']>;
  /** First 4 digits of the card number. */
  firstDigits?: Maybe<Scalars['String']>;
  /** Last 4 digits of the card number. */
  lastDigits: Scalars['String'];
};

/** History log of the order. */
export type OrderEvent = Node & {
  __typename?: 'OrderEvent';
  /** Amount of money. */
  amount?: Maybe<Scalars['Float']>;
  /** Composed ID of the Fulfillment. */
  composedId?: Maybe<Scalars['String']>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']>;
  /** Email of the customer. */
  email?: Maybe<Scalars['String']>;
  /** Type of an email sent to the customer. */
  emailType?: Maybe<OrderEventsEmailsEnum>;
  /** The lines fulfilled. */
  fulfilledItems?: Maybe<Array<Maybe<FulfillmentLine>>>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Number of an invoice related to the order. */
  invoiceNumber?: Maybe<Scalars['String']>;
  /** The concerned lines. */
  lines?: Maybe<Array<Maybe<OrderEventOrderLineObject>>>;
  /** Content of the event. */
  message?: Maybe<Scalars['String']>;
  /** User-friendly number of an order. */
  orderNumber?: Maybe<Scalars['String']>;
  /** List of oversold lines names. */
  oversoldItems?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The payment gateway of the payment. */
  paymentGateway?: Maybe<Scalars['String']>;
  /** The payment ID from the payment gateway. */
  paymentId?: Maybe<Scalars['String']>;
  /** Number of items. */
  quantity?: Maybe<Scalars['Int']>;
  /** The order which is related to this order. */
  relatedOrder?: Maybe<Order>;
  /** Define if shipping costs were included to the refund. */
  shippingCostsIncluded?: Maybe<Scalars['Boolean']>;
  /** The transaction reference of captured payment. */
  transactionReference?: Maybe<Scalars['String']>;
  /** Order event type. */
  type?: Maybe<OrderEventsEnum>;
  /** User who performed the action. */
  user?: Maybe<User>;
  /** The warehouse were items were restocked. */
  warehouse?: Maybe<Warehouse>;
};

/** An enumeration. */
export enum OrderEventsEnum {
  Canceled = 'CANCELED',
  Confirmed = 'CONFIRMED',
  DraftAddedProducts = 'DRAFT_ADDED_PRODUCTS',
  DraftCreated = 'DRAFT_CREATED',
  DraftCreatedFromReplace = 'DRAFT_CREATED_FROM_REPLACE',
  DraftRemovedProducts = 'DRAFT_REMOVED_PRODUCTS',
  EmailSent = 'EMAIL_SENT',
  ExternalServiceNotification = 'EXTERNAL_SERVICE_NOTIFICATION',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  FulfillmentFulfilledItems = 'FULFILLMENT_FULFILLED_ITEMS',
  FulfillmentRefunded = 'FULFILLMENT_REFUNDED',
  FulfillmentReplaced = 'FULFILLMENT_REPLACED',
  FulfillmentRestockedItems = 'FULFILLMENT_RESTOCKED_ITEMS',
  FulfillmentReturned = 'FULFILLMENT_RETURNED',
  InvoiceGenerated = 'INVOICE_GENERATED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  InvoiceUpdated = 'INVOICE_UPDATED',
  NoteAdded = 'NOTE_ADDED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderMarkedAsPaid = 'ORDER_MARKED_AS_PAID',
  OrderReplacementCreated = 'ORDER_REPLACEMENT_CREATED',
  Other = 'OTHER',
  OversoldItems = 'OVERSOLD_ITEMS',
  PaymentAuthorized = 'PAYMENT_AUTHORIZED',
  PaymentCaptured = 'PAYMENT_CAPTURED',
  PaymentFailed = 'PAYMENT_FAILED',
  PaymentRefunded = 'PAYMENT_REFUNDED',
  PaymentVoided = 'PAYMENT_VOIDED',
  Placed = 'PLACED',
  PlacedFromDraft = 'PLACED_FROM_DRAFT',
  TrackingUpdated = 'TRACKING_UPDATED',
  UpdatedAddress = 'UPDATED_ADDRESS'
}

/** An enumeration. */
export enum OrderEventsEmailsEnum {
  Confirmed = 'CONFIRMED',
  DigitalLinks = 'DIGITAL_LINKS',
  FulfillmentConfirmation = 'FULFILLMENT_CONFIRMATION',
  OrderCancel = 'ORDER_CANCEL',
  OrderConfirmation = 'ORDER_CONFIRMATION',
  OrderRefund = 'ORDER_REFUND',
  PaymentConfirmation = 'PAYMENT_CONFIRMATION',
  ShippingConfirmation = 'SHIPPING_CONFIRMATION',
  TrackingUpdated = 'TRACKING_UPDATED'
}

export type OrderEventOrderLineObject = {
  __typename?: 'OrderEventOrderLineObject';
  /** The variant name. */
  itemName?: Maybe<Scalars['String']>;
  /** The order line. */
  orderLine?: Maybe<OrderLine>;
  /** The variant quantity. */
  quantity?: Maybe<Scalars['Int']>;
};

export type UserPermission = {
  __typename?: 'UserPermission';
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String'];
  /** List of user permission groups which contains this permission. */
  sourcePermissionGroups?: Maybe<Array<Group>>;
};


export type UserPermissionSourcePermissionGroupsArgs = {
  userId: Scalars['ID'];
};

/** Represents permission group data. */
export type Group = Node & {
  __typename?: 'Group';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** List of group permissions */
  permissions?: Maybe<Array<Maybe<Permission>>>;
  /** True, if the currently authenticated user has rights to manage a group. */
  userCanManage: Scalars['Boolean'];
  /** List of group users */
  users?: Maybe<Array<Maybe<User>>>;
};

/** History log of the customer. */
export type CustomerEvent = Node & {
  __typename?: 'CustomerEvent';
  /** Number of objects concerned by the event. */
  count?: Maybe<Scalars['Int']>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Content of the event. */
  message?: Maybe<Scalars['String']>;
  /** The concerned order. */
  order?: Maybe<Order>;
  /** The concerned order line. */
  orderLine?: Maybe<OrderLine>;
  /** Customer event type. */
  type?: Maybe<CustomerEventsEnum>;
  /** User who performed the action. */
  user?: Maybe<User>;
};

/** An enumeration. */
export enum CustomerEventsEnum {
  AccountCreated = 'ACCOUNT_CREATED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  DigitalLinkDownloaded = 'DIGITAL_LINK_DOWNLOADED',
  EmailAssigned = 'EMAIL_ASSIGNED',
  EmailChanged = 'EMAIL_CHANGED',
  EmailChangedRequest = 'EMAIL_CHANGED_REQUEST',
  NameAssigned = 'NAME_ASSIGNED',
  NoteAdded = 'NOTE_ADDED',
  NoteAddedToOrder = 'NOTE_ADDED_TO_ORDER',
  PasswordChanged = 'PASSWORD_CHANGED',
  PasswordReset = 'PASSWORD_RESET',
  PasswordResetLinkSent = 'PASSWORD_RESET_LINK_SENT',
  PlacedOrder = 'PLACED_ORDER'
}

/** Represents a payment source stored for user in payment gateway, such as credit card. */
export type PaymentSource = {
  __typename?: 'PaymentSource';
  /** Stored credit card details if available. */
  creditCardInfo?: Maybe<CreditCard>;
  /** Payment gateway name. */
  gateway: Scalars['String'];
};

/** Order related settings from site settings. */
export type OrderSettings = {
  __typename?: 'OrderSettings';
  automaticallyConfirmAllNewOrders: Scalars['Boolean'];
};

export type DigitalContentCountableConnection = {
  __typename?: 'DigitalContentCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<DigitalContentCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type DigitalContentCountableEdge = {
  __typename?: 'DigitalContentCountableEdge';
  /** The item at the end of the edge. */
  node: DigitalContent;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type CategoryFilterInput = {
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type CategorySortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Specifies the channel in which to sort the data. */
  channel?: Maybe<Scalars['String']>;
  /** Sort categories by the selected field. */
  field: CategorySortField;
};

export enum CategorySortField {
  /** Sort categories by name. */
  Name = 'NAME',
  /** Sort categories by product count. */
  ProductCount = 'PRODUCT_COUNT',
  /** Sort categories by subcategory count. */
  SubcategoryCount = 'SUBCATEGORY_COUNT'
}

export type CollectionFilterInput = {
  published?: Maybe<CollectionPublished>;
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specifies the channel by which the data should be sorted. */
  channel?: Maybe<Scalars['String']>;
};

export enum CollectionPublished {
  Published = 'PUBLISHED',
  Hidden = 'HIDDEN'
}

export type CollectionSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Specifies the channel in which to sort the data. */
  channel?: Maybe<Scalars['String']>;
  /** Sort collections by the selected field. */
  field: CollectionSortField;
};

export enum CollectionSortField {
  /** Sort collections by name. */
  Name = 'NAME',
  /** Sort collections by availability. */
  Availability = 'AVAILABILITY',
  /** Sort collections by product count. */
  ProductCount = 'PRODUCT_COUNT',
  /** Sort collections by publication date. */
  PublicationDate = 'PUBLICATION_DATE'
}

export type ProductTypeFilterInput = {
  search?: Maybe<Scalars['String']>;
  configurable?: Maybe<ProductTypeConfigurable>;
  productType?: Maybe<ProductTypeEnum>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export enum ProductTypeConfigurable {
  Configurable = 'CONFIGURABLE',
  Simple = 'SIMPLE'
}

export enum ProductTypeEnum {
  Digital = 'DIGITAL',
  Shippable = 'SHIPPABLE'
}

export type ProductTypeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort product types by the selected field. */
  field: ProductTypeSortField;
};

export enum ProductTypeSortField {
  /** Sort products by name. */
  Name = 'NAME',
  /** Sort products by type. */
  Digital = 'DIGITAL',
  /** Sort products by shipping. */
  ShippingRequired = 'SHIPPING_REQUIRED'
}

export type ProductVariantCountableConnection = {
  __typename?: 'ProductVariantCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ProductVariantCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductVariantCountableEdge = {
  __typename?: 'ProductVariantCountableEdge';
  /** The item at the end of the edge. */
  node: ProductVariant;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type ProductVariantFilterInput = {
  search?: Maybe<Scalars['String']>;
  sku?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PaymentCountableConnection = {
  __typename?: 'PaymentCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<PaymentCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type PaymentCountableEdge = {
  __typename?: 'PaymentCountableEdge';
  /** The item at the end of the edge. */
  node: Payment;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type PageCountableConnection = {
  __typename?: 'PageCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<PageCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageCountableEdge = {
  __typename?: 'PageCountableEdge';
  /** The item at the end of the edge. */
  node: Page;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type PageSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort pages by the selected field. */
  field: PageSortField;
};

export enum PageSortField {
  /** Sort pages by title. */
  Title = 'TITLE',
  /** Sort pages by slug. */
  Slug = 'SLUG',
  /** Sort pages by visibility. */
  Visibility = 'VISIBILITY',
  /** Sort pages by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort pages by publication date. */
  PublicationDate = 'PUBLICATION_DATE'
}

export type PageFilterInput = {
  search?: Maybe<Scalars['String']>;
};

export type PageTypeCountableConnection = {
  __typename?: 'PageTypeCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<PageTypeCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageTypeCountableEdge = {
  __typename?: 'PageTypeCountableEdge';
  /** The item at the end of the edge. */
  node: PageType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type PageTypeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort page types by the selected field. */
  field: PageTypeSortField;
};

export enum PageTypeSortField {
  /** Sort page types by name. */
  Name = 'NAME',
  /** Sort page types by slug. */
  Slug = 'SLUG'
}

export type PageTypeFilterInput = {
  search?: Maybe<Scalars['String']>;
};

export type OrderEventCountableConnection = {
  __typename?: 'OrderEventCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<OrderEventCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderEventCountableEdge = {
  __typename?: 'OrderEventCountableEdge';
  /** The item at the end of the edge. */
  node: OrderEvent;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type OrderSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort orders by the selected field. */
  field: OrderSortField;
};

export enum OrderSortField {
  /** Sort orders by number. */
  Number = 'NUMBER',
  /** Sort orders by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort orders by customer. */
  Customer = 'CUSTOMER',
  /** Sort orders by payment. */
  Payment = 'PAYMENT',
  /** Sort orders by fulfillment status. */
  FulfillmentStatus = 'FULFILLMENT_STATUS'
}

export type OrderFilterInput = {
  paymentStatus?: Maybe<Array<Maybe<PaymentChargeStatusEnum>>>;
  status?: Maybe<Array<Maybe<OrderStatusFilter>>>;
  customer?: Maybe<Scalars['String']>;
  created?: Maybe<DateRangeInput>;
  search?: Maybe<Scalars['String']>;
  channels?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export enum OrderStatusFilter {
  ReadyToFulfill = 'READY_TO_FULFILL',
  ReadyToCapture = 'READY_TO_CAPTURE',
  Unfulfilled = 'UNFULFILLED',
  Unconfirmed = 'UNCONFIRMED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  Fulfilled = 'FULFILLED',
  Canceled = 'CANCELED'
}

export type DateRangeInput = {
  /** Start date. */
  gte?: Maybe<Scalars['Date']>;
  /** End date. */
  lte?: Maybe<Scalars['Date']>;
};

export type OrderDraftFilterInput = {
  customer?: Maybe<Scalars['String']>;
  created?: Maybe<DateRangeInput>;
  search?: Maybe<Scalars['String']>;
  channels?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type MenuCountableConnection = {
  __typename?: 'MenuCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<MenuCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type MenuCountableEdge = {
  __typename?: 'MenuCountableEdge';
  /** The item at the end of the edge. */
  node: Menu;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type MenuSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort menus by the selected field. */
  field: MenuSortField;
};

export enum MenuSortField {
  /** Sort menus by name. */
  Name = 'NAME',
  /** Sort menus by items count. */
  ItemsCount = 'ITEMS_COUNT'
}

export type MenuFilterInput = {
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MenuItemCountableConnection = {
  __typename?: 'MenuItemCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<MenuItemCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type MenuItemCountableEdge = {
  __typename?: 'MenuItemCountableEdge';
  /** The item at the end of the edge. */
  node: MenuItem;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type MenuItemSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort menu items by the selected field. */
  field: MenuItemsSortField;
};

export enum MenuItemsSortField {
  /** Sort menu items by name. */
  Name = 'NAME'
}

export type MenuItemFilterInput = {
  search?: Maybe<Scalars['String']>;
};

/** Plugin. */
export type Plugin = Node & {
  __typename?: 'Plugin';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  active: Scalars['Boolean'];
  configuration?: Maybe<Array<Maybe<ConfigurationItem>>>;
};

/** Stores information about a single configuration field. */
export type ConfigurationItem = {
  __typename?: 'ConfigurationItem';
  /** Name of the field. */
  name: Scalars['String'];
  /** Current value of the field. */
  value?: Maybe<Scalars['String']>;
  /** Type of the field. */
  type?: Maybe<ConfigurationTypeFieldEnum>;
  /** Help text for the field. */
  helpText?: Maybe<Scalars['String']>;
  /** Label for the field. */
  label?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum ConfigurationTypeFieldEnum {
  String = 'STRING',
  Boolean = 'BOOLEAN',
  Secret = 'SECRET',
  Password = 'PASSWORD',
  Secretmultiline = 'SECRETMULTILINE'
}

export type PluginCountableConnection = {
  __typename?: 'PluginCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<PluginCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type PluginCountableEdge = {
  __typename?: 'PluginCountableEdge';
  /** The item at the end of the edge. */
  node: Plugin;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type PluginFilterInput = {
  active?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
};

export type PluginSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort plugins by the selected field. */
  field: PluginSortField;
};

export enum PluginSortField {
  Name = 'NAME',
  IsActive = 'IS_ACTIVE'
}

export type SaleCountableConnection = {
  __typename?: 'SaleCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<SaleCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type SaleCountableEdge = {
  __typename?: 'SaleCountableEdge';
  /** The item at the end of the edge. */
  node: Sale;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type SaleFilterInput = {
  status?: Maybe<Array<Maybe<DiscountStatusEnum>>>;
  saleType?: Maybe<DiscountValueTypeEnum>;
  started?: Maybe<DateTimeRangeInput>;
  search?: Maybe<Scalars['String']>;
};

export enum DiscountStatusEnum {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Scheduled = 'SCHEDULED'
}

export type DateTimeRangeInput = {
  /** Start date. */
  gte?: Maybe<Scalars['DateTime']>;
  /** End date. */
  lte?: Maybe<Scalars['DateTime']>;
};

export type SaleSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Specifies the channel in which to sort the data. */
  channel?: Maybe<Scalars['String']>;
  /** Sort sales by the selected field. */
  field: SaleSortField;
};

export enum SaleSortField {
  /** Sort sales by name. */
  Name = 'NAME',
  /** Sort sales by start date. */
  StartDate = 'START_DATE',
  /** Sort sales by end date. */
  EndDate = 'END_DATE',
  /** Sort sales by value. */
  Value = 'VALUE',
  /** Sort sales by type. */
  Type = 'TYPE'
}

export type VoucherCountableConnection = {
  __typename?: 'VoucherCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<VoucherCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type VoucherCountableEdge = {
  __typename?: 'VoucherCountableEdge';
  /** The item at the end of the edge. */
  node: Voucher;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type VoucherFilterInput = {
  status?: Maybe<Array<Maybe<DiscountStatusEnum>>>;
  timesUsed?: Maybe<IntRangeInput>;
  discountType?: Maybe<Array<Maybe<VoucherDiscountType>>>;
  started?: Maybe<DateTimeRangeInput>;
  search?: Maybe<Scalars['String']>;
};

export enum VoucherDiscountType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE',
  Shipping = 'SHIPPING'
}

export type VoucherSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Specifies the channel in which to sort the data. */
  channel?: Maybe<Scalars['String']>;
  /** Sort vouchers by the selected field. */
  field: VoucherSortField;
};

export enum VoucherSortField {
  /** Sort vouchers by code. */
  Code = 'CODE',
  /** Sort vouchers by start date. */
  StartDate = 'START_DATE',
  /** Sort vouchers by end date. */
  EndDate = 'END_DATE',
  /** Sort vouchers by value. */
  Value = 'VALUE',
  /** Sort vouchers by type. */
  Type = 'TYPE',
  /** Sort vouchers by usage limit. */
  UsageLimit = 'USAGE_LIMIT',
  /** Sort vouchers by minimum spent amount. */
  MinimumSpentAmount = 'MINIMUM_SPENT_AMOUNT'
}

/** Represents a job data of exported file. */
export type ExportFile = Node & Job & {
  __typename?: 'ExportFile';
  /** The ID of the object. */
  id: Scalars['ID'];
  user?: Maybe<User>;
  app?: Maybe<App>;
  /** Job status. */
  status: JobStatusEnum;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
  /** Job message. */
  message?: Maybe<Scalars['String']>;
  /** The URL of field to download. */
  url?: Maybe<Scalars['String']>;
  /** List of events associated with the export. */
  events?: Maybe<Array<ExportEvent>>;
};

/** History log of export file. */
export type ExportEvent = Node & {
  __typename?: 'ExportEvent';
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars['DateTime'];
  /** Export event type. */
  type: ExportEventsEnum;
  /** User who performed the action. */
  user?: Maybe<User>;
  /** App which performed the action. */
  app?: Maybe<App>;
  /** Content of the event. */
  message: Scalars['String'];
};

/** An enumeration. */
export enum ExportEventsEnum {
  ExportPending = 'EXPORT_PENDING',
  ExportSuccess = 'EXPORT_SUCCESS',
  ExportFailed = 'EXPORT_FAILED',
  ExportDeleted = 'EXPORT_DELETED',
  ExportedFileSent = 'EXPORTED_FILE_SENT',
  ExportFailedInfoSent = 'EXPORT_FAILED_INFO_SENT'
}

export type ExportFileCountableConnection = {
  __typename?: 'ExportFileCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ExportFileCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ExportFileCountableEdge = {
  __typename?: 'ExportFileCountableEdge';
  /** The item at the end of the edge. */
  node: ExportFile;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type ExportFileFilterInput = {
  createdAt?: Maybe<DateTimeRangeInput>;
  updatedAt?: Maybe<DateTimeRangeInput>;
  status?: Maybe<JobStatusEnum>;
  user?: Maybe<Scalars['String']>;
  app?: Maybe<Scalars['String']>;
};

export type ExportFileSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort export file by the selected field. */
  field: ExportFileSortField;
};

export enum ExportFileSortField {
  /** Sort export file by status. */
  Status = 'STATUS',
  /** Sort export file by created at. */
  CreatedAt = 'CREATED_AT',
  /** Sort export file by updated at. */
  UpdatedAt = 'UPDATED_AT'
}

export type CheckoutCountableConnection = {
  __typename?: 'CheckoutCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<CheckoutCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type CheckoutCountableEdge = {
  __typename?: 'CheckoutCountableEdge';
  /** The item at the end of the edge. */
  node: Checkout;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type CheckoutLineCountableConnection = {
  __typename?: 'CheckoutLineCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<CheckoutLineCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type CheckoutLineCountableEdge = {
  __typename?: 'CheckoutLineCountableEdge';
  /** The item at the end of the edge. */
  node: CheckoutLine;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type AttributeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort attributes by the selected field. */
  field: AttributeSortField;
};

export enum AttributeSortField {
  /** Sort attributes by name */
  Name = 'NAME',
  /** Sort attributes by slug */
  Slug = 'SLUG',
  /** Sort attributes by the value required flag */
  ValueRequired = 'VALUE_REQUIRED',
  /** Sort attributes by the variant only flag */
  IsVariantOnly = 'IS_VARIANT_ONLY',
  /** Sort attributes by visibility in the storefront */
  VisibleInStorefront = 'VISIBLE_IN_STOREFRONT',
  /** Sort attributes by the filterable in storefront flag */
  FilterableInStorefront = 'FILTERABLE_IN_STOREFRONT',
  /** Sort attributes by the filterable in dashboard flag */
  FilterableInDashboard = 'FILTERABLE_IN_DASHBOARD',
  /** Sort attributes by their position in storefront */
  StorefrontSearchPosition = 'STOREFRONT_SEARCH_POSITION',
  /** Sort attributes based on whether they can be displayed or not in a product grid. */
  AvailableInGrid = 'AVAILABLE_IN_GRID'
}

/** Represents ongoing installation of app. */
export type AppInstallation = Node & Job & {
  __typename?: 'AppInstallation';
  appName: Scalars['String'];
  manifestUrl: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Job status. */
  status: JobStatusEnum;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
  /** Job message. */
  message?: Maybe<Scalars['String']>;
};

export type AppCountableConnection = {
  __typename?: 'AppCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<AppCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type AppCountableEdge = {
  __typename?: 'AppCountableEdge';
  /** The item at the end of the edge. */
  node: App;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type AppFilterInput = {
  search?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  type?: Maybe<AppTypeEnum>;
};

export type AppSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort apps by the selected field. */
  field: AppSortField;
};

export enum AppSortField {
  /** Sort apps by name. */
  Name = 'NAME',
  /** Sort apps by creation date. */
  CreationDate = 'CREATION_DATE'
}

export type AddressValidationData = {
  __typename?: 'AddressValidationData';
  countryCode?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  addressFormat?: Maybe<Scalars['String']>;
  addressLatinFormat?: Maybe<Scalars['String']>;
  allowedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  requiredFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  upperFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  countryAreaType?: Maybe<Scalars['String']>;
  countryAreaChoices?: Maybe<Array<Maybe<ChoiceValue>>>;
  cityType?: Maybe<Scalars['String']>;
  cityChoices?: Maybe<Array<Maybe<ChoiceValue>>>;
  cityAreaType?: Maybe<Scalars['String']>;
  cityAreaChoices?: Maybe<Array<Maybe<ChoiceValue>>>;
  postalCodeType?: Maybe<Scalars['String']>;
  postalCodeMatchers?: Maybe<Array<Maybe<Scalars['String']>>>;
  postalCodeExamples?: Maybe<Array<Maybe<Scalars['String']>>>;
  postalCodePrefix?: Maybe<Scalars['String']>;
};

export type ChoiceValue = {
  __typename?: 'ChoiceValue';
  raw?: Maybe<Scalars['String']>;
  verbose?: Maybe<Scalars['String']>;
};

export type UserCountableConnection = {
  __typename?: 'UserCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<UserCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type UserCountableEdge = {
  __typename?: 'UserCountableEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type CustomerFilterInput = {
  dateJoined?: Maybe<DateRangeInput>;
  numberOfOrders?: Maybe<IntRangeInput>;
  placedOrders?: Maybe<DateRangeInput>;
  search?: Maybe<Scalars['String']>;
};

export type UserSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort users by the selected field. */
  field: UserSortField;
};

export enum UserSortField {
  /** Sort users by first name. */
  FirstName = 'FIRST_NAME',
  /** Sort users by last name. */
  LastName = 'LAST_NAME',
  /** Sort users by email. */
  Email = 'EMAIL',
  /** Sort users by order count. */
  OrderCount = 'ORDER_COUNT'
}

export type GroupCountableConnection = {
  __typename?: 'GroupCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<GroupCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type GroupCountableEdge = {
  __typename?: 'GroupCountableEdge';
  /** The item at the end of the edge. */
  node: Group;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type PermissionGroupFilterInput = {
  search?: Maybe<Scalars['String']>;
};

export type PermissionGroupSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort permission group by the selected field. */
  field: PermissionGroupSortField;
};

export enum PermissionGroupSortField {
  /** Sort permission group accounts by name. */
  Name = 'NAME'
}

export type StaffUserInput = {
  status?: Maybe<StaffMemberStatus>;
  search?: Maybe<Scalars['String']>;
};

export enum StaffMemberStatus {
  Active = 'ACTIVE',
  Deactivated = 'DEACTIVATED'
}

export type _Entity = Address | User | Group | App | ProductVariant | Product | ProductType | Collection | Category | ProductImage | PageType;


export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new address for the customer. */
  accountAddressCreate?: Maybe<AccountAddressCreate>;
  /** Delete an address of the logged-in user. */
  accountAddressDelete?: Maybe<AccountAddressDelete>;
  /** Updates an address of the logged-in user. */
  accountAddressUpdate?: Maybe<AccountAddressUpdate>;
  /** Remove user account. */
  accountDelete?: Maybe<AccountDelete>;
  /** Register a new user. */
  accountRegister?: Maybe<AccountRegister>;
  /** Sends an email with the account removal link for the logged-in user. */
  accountRequestDeletion?: Maybe<AccountRequestDeletion>;
  /** Sets a default address for the authenticated user. */
  accountSetDefaultAddress?: Maybe<AccountSetDefaultAddress>;
  /** Updates the account of the logged-in user. */
  accountUpdate?: Maybe<AccountUpdate>;
  /** Creates user address. */
  addressCreate?: Maybe<AddressCreate>;
  /** Deletes an address. */
  addressDelete?: Maybe<AddressDelete>;
  /** Sets a default address for the given user. */
  addressSetDefault?: Maybe<AddressSetDefault>;
  /** Updates an address. */
  addressUpdate?: Maybe<AddressUpdate>;
  /** Activate the app. */
  appActivate?: Maybe<AppActivate>;
  /** Creates a new app. */
  appCreate?: Maybe<AppCreate>;
  /** Deactivate the app. */
  appDeactivate?: Maybe<AppDeactivate>;
  /** Deletes an app. */
  appDelete?: Maybe<AppDelete>;
  /** Delete failed installation. */
  appDeleteFailedInstallation?: Maybe<AppDeleteFailedInstallation>;
  /** Fetch and validate manifest. */
  appFetchManifest?: Maybe<AppFetchManifest>;
  /** Install new app by using app manifest. */
  appInstall?: Maybe<AppInstall>;
  /** Retry failed installation of new app. */
  appRetryInstall?: Maybe<AppRetryInstall>;
  /** Creates a new token. */
  appTokenCreate?: Maybe<AppTokenCreate>;
  /** Deletes an authentication token assigned to app. */
  appTokenDelete?: Maybe<AppTokenDelete>;
  /** Verify provided app token. */
  appTokenVerify?: Maybe<AppTokenVerify>;
  /** Updates an existing app. */
  appUpdate?: Maybe<AppUpdate>;
  /** Assigns storefront's navigation menus. */
  assignNavigation?: Maybe<AssignNavigation>;
  /** Add shipping zone to given warehouse. */
  assignWarehouseShippingZone?: Maybe<WarehouseShippingZoneAssign>;
  /** Deletes attributes. */
  attributeBulkDelete?: Maybe<AttributeBulkDelete>;
  /** Creates an attribute. */
  attributeCreate?: Maybe<AttributeCreate>;
  /** Deletes an attribute. */
  attributeDelete?: Maybe<AttributeDelete>;
  /** Reorder the values of an attribute. */
  attributeReorderValues?: Maybe<AttributeReorderValues>;
  /** Creates/Updates translations for attribute. */
  attributeTranslate?: Maybe<AttributeTranslate>;
  /** Updates attribute. */
  attributeUpdate?: Maybe<AttributeUpdate>;
  /** Deletes values of attributes. */
  attributeValueBulkDelete?: Maybe<AttributeValueBulkDelete>;
  /** Creates a value for an attribute. */
  attributeValueCreate?: Maybe<AttributeValueCreate>;
  /** Deletes a value of an attribute. */
  attributeValueDelete?: Maybe<AttributeValueDelete>;
  /** Creates/Updates translations for attribute value. */
  attributeValueTranslate?: Maybe<AttributeValueTranslate>;
  /** Updates value of an attribute. */
  attributeValueUpdate?: Maybe<AttributeValueUpdate>;
  /** Deletes categories. */
  categoryBulkDelete?: Maybe<CategoryBulkDelete>;
  /** Creates a new category. */
  categoryCreate?: Maybe<CategoryCreate>;
  /** Deletes a category. */
  categoryDelete?: Maybe<CategoryDelete>;
  /** Creates/Updates translations for Category. */
  categoryTranslate?: Maybe<CategoryTranslate>;
  /** Updates a category. */
  categoryUpdate?: Maybe<CategoryUpdate>;
  /** Activate a channel. */
  channelActivate?: Maybe<ChannelActivate>;
  /** Creates new channel. */
  channelCreate?: Maybe<ChannelCreate>;
  /** Deactivate a channel. */
  channelDeactivate?: Maybe<ChannelDeactivate>;
  /** Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed. */
  channelDelete?: Maybe<ChannelDelete>;
  /** Update a channel. */
  channelUpdate?: Maybe<ChannelUpdate>;
  /** Adds a gift card or a voucher to a checkout. */
  checkoutAddPromoCode?: Maybe<CheckoutAddPromoCode>;
  /** Update billing address in the existing checkout. */
  checkoutBillingAddressUpdate?: Maybe<CheckoutBillingAddressUpdate>;
  /** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
  checkoutComplete?: Maybe<CheckoutComplete>;
  /** Create a new checkout. */
  checkoutCreate?: Maybe<CheckoutCreate>;
  /** Sets the customer as the owner of the checkout. */
  checkoutCustomerAttach?: Maybe<CheckoutCustomerAttach>;
  /** Removes the user assigned as the owner of the checkout. */
  checkoutCustomerDetach?: Maybe<CheckoutCustomerDetach>;
  /** Updates email address in the existing checkout object. */
  checkoutEmailUpdate?: Maybe<CheckoutEmailUpdate>;
  /** Deletes a CheckoutLine. */
  checkoutLineDelete?: Maybe<CheckoutLineDelete>;
  /** Adds a checkout line to the existing checkout. */
  checkoutLinesAdd?: Maybe<CheckoutLinesAdd>;
  /** Updates checkout line in the existing checkout. */
  checkoutLinesUpdate?: Maybe<CheckoutLinesUpdate>;
  /** Create a new payment for given checkout. */
  checkoutPaymentCreate?: Maybe<CheckoutPaymentCreate>;
  /** Remove a gift card or a voucher from a checkout. */
  checkoutRemovePromoCode?: Maybe<CheckoutRemovePromoCode>;
  /** Update shipping address in the existing checkout. */
  checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdate>;
  /** Updates the shipping address of the checkout. */
  checkoutShippingMethodUpdate?: Maybe<CheckoutShippingMethodUpdate>;
  /** Adds products to a collection. */
  collectionAddProducts?: Maybe<CollectionAddProducts>;
  /** Deletes collections. */
  collectionBulkDelete?: Maybe<CollectionBulkDelete>;
  /** Manage collection's availability in channels. */
  collectionChannelListingUpdate?: Maybe<CollectionChannelListingUpdate>;
  /** Creates a new collection. */
  collectionCreate?: Maybe<CollectionCreate>;
  /** Deletes a collection. */
  collectionDelete?: Maybe<CollectionDelete>;
  /** Remove products from a collection. */
  collectionRemoveProducts?: Maybe<CollectionRemoveProducts>;
  /** Reorder the products of a collection. */
  collectionReorderProducts?: Maybe<CollectionReorderProducts>;
  /** Creates/Updates translations for collection. */
  collectionTranslate?: Maybe<CollectionTranslate>;
  /** Updates a collection. */
  collectionUpdate?: Maybe<CollectionUpdate>;
  /** Confirm user account with token sent by email during registration. */
  confirmAccount?: Maybe<ConfirmAccount>;
  /** Confirm the email change of the logged-in user. */
  confirmEmailChange?: Maybe<ConfirmEmailChange>;
  /** Creates new warehouse. */
  createWarehouse?: Maybe<WarehouseCreate>;
  /** Deletes customers. */
  customerBulkDelete?: Maybe<CustomerBulkDelete>;
  /** Creates a new customer. */
  customerCreate?: Maybe<CustomerCreate>;
  /** Deletes a customer. */
  customerDelete?: Maybe<CustomerDelete>;
  /** Updates an existing customer. */
  customerUpdate?: Maybe<CustomerUpdate>;
  /** Delete metadata of an object. */
  deleteMetadata?: Maybe<DeleteMetadata>;
  /** Delete object's private metadata. */
  deletePrivateMetadata?: Maybe<DeletePrivateMetadata>;
  /** Deletes selected warehouse. */
  deleteWarehouse?: Maybe<WarehouseDelete>;
  /** Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  digitalContentCreate?: Maybe<DigitalContentCreate>;
  /** Remove digital content assigned to given variant. */
  digitalContentDelete?: Maybe<DigitalContentDelete>;
  /** Update digital content. */
  digitalContentUpdate?: Maybe<DigitalContentUpdate>;
  /** Generate new URL to digital content. */
  digitalContentUrlCreate?: Maybe<DigitalContentUrlCreate>;
  /** Deletes draft orders. */
  draftOrderBulkDelete?: Maybe<DraftOrderBulkDelete>;
  /** Completes creating an order. */
  draftOrderComplete?: Maybe<DraftOrderComplete>;
  /** Creates a new draft order. */
  draftOrderCreate?: Maybe<DraftOrderCreate>;
  /** Deletes a draft order. */
  draftOrderDelete?: Maybe<DraftOrderDelete>;
  /** Deletes an order line from a draft order. */
  draftOrderLineDelete?: Maybe<DraftOrderLineDelete>;
  /** Updates an order line of a draft order. */
  draftOrderLineUpdate?: Maybe<DraftOrderLineUpdate>;
  /** Deletes order lines. */
  draftOrderLinesBulkDelete?: Maybe<DraftOrderLinesBulkDelete>;
  /** Create order lines for a draft order. */
  draftOrderLinesCreate?: Maybe<DraftOrderLinesCreate>;
  /** Updates a draft order. */
  draftOrderUpdate?: Maybe<DraftOrderUpdate>;
  /** Export products to csv file. */
  exportProducts?: Maybe<ExportProducts>;
  /** Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  fileUpload?: Maybe<FileUpload>;
  /** Activate a gift card. */
  giftCardActivate?: Maybe<GiftCardActivate>;
  /** Creates a new gift card. */
  giftCardCreate?: Maybe<GiftCardCreate>;
  /** Deactivate a gift card. */
  giftCardDeactivate?: Maybe<GiftCardDeactivate>;
  /** Update a gift card. */
  giftCardUpdate?: Maybe<GiftCardUpdate>;
  /** Creates a ready to send invoice. */
  invoiceCreate?: Maybe<InvoiceCreate>;
  /** Deletes an invoice. */
  invoiceDelete?: Maybe<InvoiceDelete>;
  /** Request an invoice for the order using plugin. */
  invoiceRequest?: Maybe<InvoiceRequest>;
  /** Requests deletion of an invoice. */
  invoiceRequestDelete?: Maybe<InvoiceRequestDelete>;
  /** Send an invoice by email. */
  invoiceSendEmail?: Maybe<InvoiceSendEmail>;
  /** Updates an invoice. */
  invoiceUpdate?: Maybe<InvoiceUpdate>;
  /** Deletes menus. */
  menuBulkDelete?: Maybe<MenuBulkDelete>;
  /** Creates a new Menu. */
  menuCreate?: Maybe<MenuCreate>;
  /** Deletes a menu. */
  menuDelete?: Maybe<MenuDelete>;
  /** Deletes menu items. */
  menuItemBulkDelete?: Maybe<MenuItemBulkDelete>;
  /** Creates a new menu item. */
  menuItemCreate?: Maybe<MenuItemCreate>;
  /** Deletes a menu item. */
  menuItemDelete?: Maybe<MenuItemDelete>;
  /** Moves items of menus. */
  menuItemMove?: Maybe<MenuItemMove>;
  /** Creates/Updates translations for Menu Item. */
  menuItemTranslate?: Maybe<MenuItemTranslate>;
  /** Updates a menu item. */
  menuItemUpdate?: Maybe<MenuItemUpdate>;
  /** Updates a menu. */
  menuUpdate?: Maybe<MenuUpdate>;
  /** Adds note to the order. */
  orderAddNote?: Maybe<OrderAddNote>;
  /** Cancels orders. */
  orderBulkCancel?: Maybe<OrderBulkCancel>;
  /** Cancel an order. */
  orderCancel?: Maybe<OrderCancel>;
  /** Capture an order. */
  orderCapture?: Maybe<OrderCapture>;
  /** Confirms an unconfirmed order by changing status to unfulfilled. */
  orderConfirm?: Maybe<OrderConfirm>;
  /** Creates new fulfillments for an order. */
  orderFulfill?: Maybe<OrderFulfill>;
  /** Cancels existing fulfillment and optionally restocks items. */
  orderFulfillmentCancel?: Maybe<FulfillmentCancel>;
  /** Refund products. */
  orderFulfillmentRefundProducts?: Maybe<FulfillmentRefundProducts>;
  /** Return products. */
  orderFulfillmentReturnProducts?: Maybe<FulfillmentReturnProducts>;
  /** Updates a fulfillment for an order. */
  orderFulfillmentUpdateTracking?: Maybe<FulfillmentUpdateTracking>;
  /** Mark order as manually paid. */
  orderMarkAsPaid?: Maybe<OrderMarkAsPaid>;
  /** Refund an order. */
  orderRefund?: Maybe<OrderRefund>;
  /** Update shop order settings. */
  orderSettingsUpdate?: Maybe<OrderSettingsUpdate>;
  /** Updates an order. */
  orderUpdate?: Maybe<OrderUpdate>;
  /** Updates a shipping method of the order. */
  orderUpdateShipping?: Maybe<OrderUpdateShipping>;
  /** Void an order. */
  orderVoid?: Maybe<OrderVoid>;
  /** Assign attributes to a given page type. */
  pageAttributeAssign?: Maybe<PageAttributeAssign>;
  /** Unassign attributes from a given page type. */
  pageAttributeUnassign?: Maybe<PageAttributeUnassign>;
  /** Deletes pages. */
  pageBulkDelete?: Maybe<PageBulkDelete>;
  /** Publish pages. */
  pageBulkPublish?: Maybe<PageBulkPublish>;
  /** Creates a new page. */
  pageCreate?: Maybe<PageCreate>;
  /** Deletes a page. */
  pageDelete?: Maybe<PageDelete>;
  /** Reorder page attribute values. */
  pageReorderAttributeValues?: Maybe<PageReorderAttributeValues>;
  /** Creates/Updates translations for Page. */
  pageTranslate?: Maybe<PageTranslate>;
  /** Delete page types. */
  pageTypeBulkDelete?: Maybe<PageTypeBulkDelete>;
  /** Create a new page type. */
  pageTypeCreate?: Maybe<PageTypeCreate>;
  /** Delete a page type. */
  pageTypeDelete?: Maybe<PageTypeDelete>;
  /** Reorder the attributes of a page type. */
  pageTypeReorderAttributes?: Maybe<PageTypeReorderAttributes>;
  /** Update page type. */
  pageTypeUpdate?: Maybe<PageTypeUpdate>;
  /** Updates an existing page. */
  pageUpdate?: Maybe<PageUpdate>;
  /** Change the password of the logged in user. */
  passwordChange?: Maybe<PasswordChange>;
  /** Captures the authorized payment amount. */
  paymentCapture?: Maybe<PaymentCapture>;
  /** Initializes payment process when it is required by gateway. */
  paymentInitialize?: Maybe<PaymentInitialize>;
  /** Refunds the captured payment amount. */
  paymentRefund?: Maybe<PaymentRefund>;
  /** Voids the authorized payment. */
  paymentVoid?: Maybe<PaymentVoid>;
  /** Create new permission group. */
  permissionGroupCreate?: Maybe<PermissionGroupCreate>;
  /** Delete permission group. */
  permissionGroupDelete?: Maybe<PermissionGroupDelete>;
  /** Update permission group. */
  permissionGroupUpdate?: Maybe<PermissionGroupUpdate>;
  /** Update plugin configuration. */
  pluginUpdate?: Maybe<PluginUpdate>;
  /** Assign attributes to a given product type. */
  productAttributeAssign?: Maybe<ProductAttributeAssign>;
  /** Un-assign attributes from a given product type. */
  productAttributeUnassign?: Maybe<ProductAttributeUnassign>;
  /** Deletes products. */
  productBulkDelete?: Maybe<ProductBulkDelete>;
  /** Manage product's availability in channels. */
  productChannelListingUpdate?: Maybe<ProductChannelListingUpdate>;
  /** Creates a new product. */
  productCreate?: Maybe<ProductCreate>;
  /** Deletes a product. */
  productDelete?: Maybe<ProductDelete>;
  /** Deletes product images. */
  productImageBulkDelete?: Maybe<ProductImageBulkDelete>;
  /** Create a product image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  productImageCreate?: Maybe<ProductImageCreate>;
  /** Deletes a product image. */
  productImageDelete?: Maybe<ProductImageDelete>;
  /** Changes ordering of the product image. */
  productImageReorder?: Maybe<ProductImageReorder>;
  /** Updates a product image. */
  productImageUpdate?: Maybe<ProductImageUpdate>;
  /** Reorder product attribute values. */
  productReorderAttributeValues?: Maybe<ProductReorderAttributeValues>;
  /** Creates/Updates translations for Product. */
  productTranslate?: Maybe<ProductTranslate>;
  /** Deletes product types. */
  productTypeBulkDelete?: Maybe<ProductTypeBulkDelete>;
  /** Creates a new product type. */
  productTypeCreate?: Maybe<ProductTypeCreate>;
  /** Deletes a product type. */
  productTypeDelete?: Maybe<ProductTypeDelete>;
  /** Reorder the attributes of a product type. */
  productTypeReorderAttributes?: Maybe<ProductTypeReorderAttributes>;
  /** Updates an existing product type. */
  productTypeUpdate?: Maybe<ProductTypeUpdate>;
  /** Updates an existing product. */
  productUpdate?: Maybe<ProductUpdate>;
  /** Creates product variants for a given product. */
  productVariantBulkCreate?: Maybe<ProductVariantBulkCreate>;
  /** Deletes product variants. */
  productVariantBulkDelete?: Maybe<ProductVariantBulkDelete>;
  /** Manage product variant prices in channels. */
  productVariantChannelListingUpdate?: Maybe<ProductVariantChannelListingUpdate>;
  /** Creates a new variant for a product. */
  productVariantCreate?: Maybe<ProductVariantCreate>;
  /** Deletes a product variant. */
  productVariantDelete?: Maybe<ProductVariantDelete>;
  /** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
  productVariantReorder?: Maybe<ProductVariantReorder>;
  /** Reorder product variant attribute values. */
  productVariantReorderAttributeValues?: Maybe<ProductVariantReorderAttributeValues>;
  /** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
  productVariantSetDefault?: Maybe<ProductVariantSetDefault>;
  /** Creates stocks for product variant. */
  productVariantStocksCreate?: Maybe<ProductVariantStocksCreate>;
  /** Delete stocks from product variant. */
  productVariantStocksDelete?: Maybe<ProductVariantStocksDelete>;
  /** Update stocks for product variant. */
  productVariantStocksUpdate?: Maybe<ProductVariantStocksUpdate>;
  /** Creates/Updates translations for Product Variant. */
  productVariantTranslate?: Maybe<ProductVariantTranslate>;
  /** Updates an existing variant for product. */
  productVariantUpdate?: Maybe<ProductVariantUpdate>;
  /** Request email change of the logged in user. */
  requestEmailChange?: Maybe<RequestEmailChange>;
  /** Sends an email with the account password modification link. */
  requestPasswordReset?: Maybe<RequestPasswordReset>;
  /** Create a review */
  reviewCreate?: Maybe<ReviewCreateMutation>;
  /** Update a review by ID */
  reviewUpdate?: Maybe<ReviewUpdateMutation>;
  /** Deletes sales. */
  saleBulkDelete?: Maybe<SaleBulkDelete>;
  /** Adds products, categories, collections to a voucher. */
  saleCataloguesAdd?: Maybe<SaleAddCatalogues>;
  /** Removes products, categories, collections from a sale. */
  saleCataloguesRemove?: Maybe<SaleRemoveCatalogues>;
  /** Manage sale's availability in channels. */
  saleChannelListingUpdate?: Maybe<SaleChannelListingUpdate>;
  /** Creates a new sale. */
  saleCreate?: Maybe<SaleCreate>;
  /** Deletes a sale. */
  saleDelete?: Maybe<SaleDelete>;
  /** Creates/updates translations for a sale. */
  saleTranslate?: Maybe<SaleTranslate>;
  /** Updates a sale. */
  saleUpdate?: Maybe<SaleUpdate>;
  /** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
  setPassword?: Maybe<SetPassword>;
  /** Manage shipping method's availability in channels. */
  shippingMethodChannelListingUpdate?: Maybe<ShippingMethodChannelListingUpdate>;
  /** Create a new zip code exclusion range for shipping method. */
  shippingMethodZipCodeRulesCreate?: Maybe<ShippingZipCodeRulesCreate>;
  /** Deletes a shipping method zip code. */
  shippingMethodZipCodeRulesDelete?: Maybe<ShippingZipCodeRulesDelete>;
  /** Deletes shipping prices. */
  shippingPriceBulkDelete?: Maybe<ShippingPriceBulkDelete>;
  /** Creates a new shipping price. */
  shippingPriceCreate?: Maybe<ShippingPriceCreate>;
  /** Deletes a shipping price. */
  shippingPriceDelete?: Maybe<ShippingPriceDelete>;
  /** Exclude products from shipping price. */
  shippingPriceExcludeProducts?: Maybe<ShippingPriceExcludeProducts>;
  /** Remove product from excluded list for shipping price. */
  shippingPriceRemoveProductFromExclude?: Maybe<ShippingPriceRemoveProductFromExclude>;
  /** Creates/Updates translations for shipping method. */
  shippingPriceTranslate?: Maybe<ShippingPriceTranslate>;
  /** Updates a new shipping price. */
  shippingPriceUpdate?: Maybe<ShippingPriceUpdate>;
  /** Deletes shipping zones. */
  shippingZoneBulkDelete?: Maybe<ShippingZoneBulkDelete>;
  /** Creates a new shipping zone. */
  shippingZoneCreate?: Maybe<ShippingZoneCreate>;
  /** Deletes a shipping zone. */
  shippingZoneDelete?: Maybe<ShippingZoneDelete>;
  /** Updates a new shipping zone. */
  shippingZoneUpdate?: Maybe<ShippingZoneUpdate>;
  /** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
  shopAddressUpdate?: Maybe<ShopAddressUpdate>;
  /** Updates site domain of the shop. */
  shopDomainUpdate?: Maybe<ShopDomainUpdate>;
  /** Fetch tax rates. */
  shopFetchTaxRates?: Maybe<ShopFetchTaxRates>;
  /** Creates/Updates translations for Shop Settings. */
  shopSettingsTranslate?: Maybe<ShopSettingsTranslate>;
  /** Updates shop settings. */
  shopSettingsUpdate?: Maybe<ShopSettingsUpdate>;
  /** Deletes staff users. */
  staffBulkDelete?: Maybe<StaffBulkDelete>;
  /** Creates a new staff user. */
  staffCreate?: Maybe<StaffCreate>;
  /** Deletes a staff user. */
  staffDelete?: Maybe<StaffDelete>;
  /** Creates a new staff notification recipient. */
  staffNotificationRecipientCreate?: Maybe<StaffNotificationRecipientCreate>;
  /** Delete staff notification recipient. */
  staffNotificationRecipientDelete?: Maybe<StaffNotificationRecipientDelete>;
  /** Updates a staff notification recipient. */
  staffNotificationRecipientUpdate?: Maybe<StaffNotificationRecipientUpdate>;
  /** Updates an existing staff user. */
  staffUpdate?: Maybe<StaffUpdate>;
  /** Create JWT token. */
  tokenCreate?: Maybe<CreateToken>;
  /** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
  tokenRefresh?: Maybe<RefreshToken>;
  /** Verify JWT token. */
  tokenVerify?: Maybe<VerifyToken>;
  /** Deactivate all JWT tokens of the currently authenticated user. */
  tokensDeactivateAll?: Maybe<DeactivateAllUserTokens>;
  /** Remove shipping zone from given warehouse. */
  unassignWarehouseShippingZone?: Maybe<WarehouseShippingZoneUnassign>;
  /** Updates metadata of an object. */
  updateMetadata?: Maybe<UpdateMetadata>;
  /** Updates private metadata of an object. */
  updatePrivateMetadata?: Maybe<UpdatePrivateMetadata>;
  /** Updates given warehouse. */
  updateWarehouse?: Maybe<WarehouseUpdate>;
  /** Deletes a user avatar. Only for staff members. */
  userAvatarDelete?: Maybe<UserAvatarDelete>;
  /** Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  userAvatarUpdate?: Maybe<UserAvatarUpdate>;
  /** Activate or deactivate users. */
  userBulkSetActive?: Maybe<UserBulkSetActive>;
  /** Assign an image to a product variant. */
  variantImageAssign?: Maybe<VariantImageAssign>;
  /** Unassign an image from a product variant. */
  variantImageUnassign?: Maybe<VariantImageUnassign>;
  /** Deletes vouchers. */
  voucherBulkDelete?: Maybe<VoucherBulkDelete>;
  /** Adds products, categories, collections to a voucher. */
  voucherCataloguesAdd?: Maybe<VoucherAddCatalogues>;
  /** Removes products, categories, collections from a voucher. */
  voucherCataloguesRemove?: Maybe<VoucherRemoveCatalogues>;
  /** Manage voucher's availability in channels. */
  voucherChannelListingUpdate?: Maybe<VoucherChannelListingUpdate>;
  /** Creates a new voucher. */
  voucherCreate?: Maybe<VoucherCreate>;
  /** Deletes a voucher. */
  voucherDelete?: Maybe<VoucherDelete>;
  /** Creates/Updates translations for Voucher. */
  voucherTranslate?: Maybe<VoucherTranslate>;
  /** Updates a voucher. */
  voucherUpdate?: Maybe<VoucherUpdate>;
  /** Creates a new webhook subscription. */
  webhookCreate?: Maybe<WebhookCreate>;
  /** Deletes a webhook subscription. */
  webhookDelete?: Maybe<WebhookDelete>;
  /** Updates a webhook subscription. */
  webhookUpdate?: Maybe<WebhookUpdate>;
};


export type MutationAccountAddressCreateArgs = {
  input: AddressInput;
  type?: Maybe<AddressTypeEnum>;
};


export type MutationAccountAddressDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAccountAddressUpdateArgs = {
  id: Scalars['ID'];
  input: AddressInput;
};


export type MutationAccountDeleteArgs = {
  token: Scalars['String'];
};


export type MutationAccountRegisterArgs = {
  input: AccountRegisterInput;
};


export type MutationAccountRequestDeletionArgs = {
  redirectUrl: Scalars['String'];
};


export type MutationAccountSetDefaultAddressArgs = {
  id: Scalars['ID'];
  type: AddressTypeEnum;
};


export type MutationAccountUpdateArgs = {
  input: AccountInput;
};


export type MutationAddressCreateArgs = {
  input: AddressInput;
  userId: Scalars['ID'];
};


export type MutationAddressDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAddressSetDefaultArgs = {
  addressId: Scalars['ID'];
  type: AddressTypeEnum;
  userId: Scalars['ID'];
};


export type MutationAddressUpdateArgs = {
  id: Scalars['ID'];
  input: AddressInput;
};


export type MutationAppActivateArgs = {
  id: Scalars['ID'];
};


export type MutationAppCreateArgs = {
  input: AppInput;
};


export type MutationAppDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationAppDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAppDeleteFailedInstallationArgs = {
  id: Scalars['ID'];
};


export type MutationAppFetchManifestArgs = {
  manifestUrl: Scalars['String'];
};


export type MutationAppInstallArgs = {
  input: AppInstallInput;
};


export type MutationAppRetryInstallArgs = {
  activateAfterInstallation?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationAppTokenCreateArgs = {
  input: AppTokenInput;
};


export type MutationAppTokenDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAppTokenVerifyArgs = {
  token: Scalars['String'];
};


export type MutationAppUpdateArgs = {
  id: Scalars['ID'];
  input: AppInput;
};


export type MutationAssignNavigationArgs = {
  menu?: Maybe<Scalars['ID']>;
  navigationType: NavigationType;
};


export type MutationAssignWarehouseShippingZoneArgs = {
  id: Scalars['ID'];
  shippingZoneIds: Array<Scalars['ID']>;
};


export type MutationAttributeBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationAttributeCreateArgs = {
  input: AttributeCreateInput;
};


export type MutationAttributeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAttributeReorderValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<Maybe<ReorderInput>>;
};


export type MutationAttributeTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeUpdateArgs = {
  id: Scalars['ID'];
  input: AttributeUpdateInput;
};


export type MutationAttributeValueBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationAttributeValueCreateArgs = {
  attribute: Scalars['ID'];
  input: AttributeValueCreateInput;
};


export type MutationAttributeValueDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAttributeValueTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeValueUpdateArgs = {
  id: Scalars['ID'];
  input: AttributeValueCreateInput;
};


export type MutationCategoryBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationCategoryCreateArgs = {
  input: CategoryInput;
  parent?: Maybe<Scalars['ID']>;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCategoryTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCategoryUpdateArgs = {
  id: Scalars['ID'];
  input: CategoryInput;
};


export type MutationChannelActivateArgs = {
  id: Scalars['ID'];
};


export type MutationChannelCreateArgs = {
  input: ChannelCreateInput;
};


export type MutationChannelDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationChannelDeleteArgs = {
  id: Scalars['ID'];
  input?: Maybe<ChannelDeleteInput>;
};


export type MutationChannelUpdateArgs = {
  id: Scalars['ID'];
  input: ChannelUpdateInput;
};


export type MutationCheckoutAddPromoCodeArgs = {
  checkoutId: Scalars['ID'];
  promoCode: Scalars['String'];
};


export type MutationCheckoutBillingAddressUpdateArgs = {
  billingAddress: AddressInput;
  checkoutId: Scalars['ID'];
};


export type MutationCheckoutCompleteArgs = {
  checkoutId: Scalars['ID'];
  paymentData?: Maybe<Scalars['JSONString']>;
  redirectUrl?: Maybe<Scalars['String']>;
  storeSource?: Maybe<Scalars['Boolean']>;
};


export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput;
};


export type MutationCheckoutCustomerAttachArgs = {
  checkoutId: Scalars['ID'];
  customerId?: Maybe<Scalars['ID']>;
};


export type MutationCheckoutCustomerDetachArgs = {
  checkoutId: Scalars['ID'];
};


export type MutationCheckoutEmailUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
};


export type MutationCheckoutLineDeleteArgs = {
  checkoutId: Scalars['ID'];
  lineId?: Maybe<Scalars['ID']>;
};


export type MutationCheckoutLinesAddArgs = {
  checkoutId: Scalars['ID'];
  lines: Array<Maybe<CheckoutLineInput>>;
};


export type MutationCheckoutLinesUpdateArgs = {
  checkoutId: Scalars['ID'];
  lines: Array<Maybe<CheckoutLineInput>>;
};


export type MutationCheckoutPaymentCreateArgs = {
  checkoutId: Scalars['ID'];
  input: PaymentInput;
};


export type MutationCheckoutRemovePromoCodeArgs = {
  checkoutId: Scalars['ID'];
  promoCode: Scalars['String'];
};


export type MutationCheckoutShippingAddressUpdateArgs = {
  checkoutId: Scalars['ID'];
  shippingAddress: AddressInput;
};


export type MutationCheckoutShippingMethodUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  shippingMethodId: Scalars['ID'];
};


export type MutationCollectionAddProductsArgs = {
  collectionId: Scalars['ID'];
  products: Array<Maybe<Scalars['ID']>>;
};


export type MutationCollectionBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationCollectionChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: CollectionChannelListingUpdateInput;
};


export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};


export type MutationCollectionDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCollectionRemoveProductsArgs = {
  collectionId: Scalars['ID'];
  products: Array<Maybe<Scalars['ID']>>;
};


export type MutationCollectionReorderProductsArgs = {
  collectionId: Scalars['ID'];
  moves: Array<Maybe<MoveProductInput>>;
};


export type MutationCollectionTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCollectionUpdateArgs = {
  id: Scalars['ID'];
  input: CollectionInput;
};


export type MutationConfirmAccountArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationConfirmEmailChangeArgs = {
  token: Scalars['String'];
};


export type MutationCreateWarehouseArgs = {
  input: WarehouseCreateInput;
};


export type MutationCustomerBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationCustomerCreateArgs = {
  input: UserCreateInput;
};


export type MutationCustomerDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCustomerUpdateArgs = {
  id: Scalars['ID'];
  input: CustomerInput;
};


export type MutationDeleteMetadataArgs = {
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};


export type MutationDeletePrivateMetadataArgs = {
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['ID'];
};


export type MutationDigitalContentCreateArgs = {
  input: DigitalContentUploadInput;
  variantId: Scalars['ID'];
};


export type MutationDigitalContentDeleteArgs = {
  variantId: Scalars['ID'];
};


export type MutationDigitalContentUpdateArgs = {
  input: DigitalContentInput;
  variantId: Scalars['ID'];
};


export type MutationDigitalContentUrlCreateArgs = {
  input: DigitalContentUrlCreateInput;
};


export type MutationDraftOrderBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationDraftOrderCompleteArgs = {
  id: Scalars['ID'];
};


export type MutationDraftOrderCreateArgs = {
  input: DraftOrderCreateInput;
};


export type MutationDraftOrderDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationDraftOrderLineDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationDraftOrderLineUpdateArgs = {
  id: Scalars['ID'];
  input: OrderLineInput;
};


export type MutationDraftOrderLinesBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationDraftOrderLinesCreateArgs = {
  id: Scalars['ID'];
  input: Array<Maybe<OrderLineCreateInput>>;
};


export type MutationDraftOrderUpdateArgs = {
  id: Scalars['ID'];
  input: DraftOrderInput;
};


export type MutationExportProductsArgs = {
  input: ExportProductsInput;
};


export type MutationFileUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationGiftCardActivateArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardCreateArgs = {
  input: GiftCardCreateInput;
};


export type MutationGiftCardDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardUpdateArgs = {
  id: Scalars['ID'];
  input: GiftCardUpdateInput;
};


export type MutationInvoiceCreateArgs = {
  input: InvoiceCreateInput;
  orderId: Scalars['ID'];
};


export type MutationInvoiceDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceRequestArgs = {
  number?: Maybe<Scalars['String']>;
  orderId: Scalars['ID'];
};


export type MutationInvoiceRequestDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceSendEmailArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateInvoiceInput;
};


export type MutationMenuBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationMenuCreateArgs = {
  input: MenuCreateInput;
};


export type MutationMenuDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationMenuItemBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationMenuItemCreateArgs = {
  input: MenuItemCreateInput;
};


export type MutationMenuItemDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationMenuItemMoveArgs = {
  menu: Scalars['ID'];
  moves: Array<Maybe<MenuItemMoveInput>>;
};


export type MutationMenuItemTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationMenuItemUpdateArgs = {
  id: Scalars['ID'];
  input: MenuItemInput;
};


export type MutationMenuUpdateArgs = {
  id: Scalars['ID'];
  input: MenuInput;
};


export type MutationOrderAddNoteArgs = {
  order: Scalars['ID'];
  input: OrderAddNoteInput;
};


export type MutationOrderBulkCancelArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationOrderCancelArgs = {
  id: Scalars['ID'];
};


export type MutationOrderCaptureArgs = {
  amount: Scalars['PositiveDecimal'];
  id: Scalars['ID'];
};


export type MutationOrderConfirmArgs = {
  id: Scalars['ID'];
};


export type MutationOrderFulfillArgs = {
  input: OrderFulfillInput;
  order?: Maybe<Scalars['ID']>;
};


export type MutationOrderFulfillmentCancelArgs = {
  id: Scalars['ID'];
  input: FulfillmentCancelInput;
};


export type MutationOrderFulfillmentRefundProductsArgs = {
  input: OrderRefundProductsInput;
  order: Scalars['ID'];
};


export type MutationOrderFulfillmentReturnProductsArgs = {
  input: OrderReturnProductsInput;
  order: Scalars['ID'];
};


export type MutationOrderFulfillmentUpdateTrackingArgs = {
  id: Scalars['ID'];
  input: FulfillmentUpdateTrackingInput;
};


export type MutationOrderMarkAsPaidArgs = {
  id: Scalars['ID'];
  transactionReference?: Maybe<Scalars['String']>;
};


export type MutationOrderRefundArgs = {
  amount: Scalars['PositiveDecimal'];
  id: Scalars['ID'];
};


export type MutationOrderSettingsUpdateArgs = {
  input: OrderSettingsUpdateInput;
};


export type MutationOrderUpdateArgs = {
  id: Scalars['ID'];
  input: OrderUpdateInput;
};


export type MutationOrderUpdateShippingArgs = {
  order: Scalars['ID'];
  input?: Maybe<OrderUpdateShippingInput>;
};


export type MutationOrderVoidArgs = {
  id: Scalars['ID'];
};


export type MutationPageAttributeAssignArgs = {
  attributeIds: Array<Scalars['ID']>;
  pageTypeId: Scalars['ID'];
};


export type MutationPageAttributeUnassignArgs = {
  attributeIds: Array<Scalars['ID']>;
  pageTypeId: Scalars['ID'];
};


export type MutationPageBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationPageBulkPublishArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
  isPublished: Scalars['Boolean'];
};


export type MutationPageCreateArgs = {
  input: PageCreateInput;
};


export type MutationPageDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPageReorderAttributeValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<Maybe<ReorderInput>>;
  pageId: Scalars['ID'];
};


export type MutationPageTranslateArgs = {
  id: Scalars['ID'];
  input: PageTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationPageTypeBulkDeleteArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationPageTypeCreateArgs = {
  input: PageTypeCreateInput;
};


export type MutationPageTypeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPageTypeReorderAttributesArgs = {
  moves: Array<ReorderInput>;
  pageTypeId: Scalars['ID'];
};


export type MutationPageTypeUpdateArgs = {
  id?: Maybe<Scalars['ID']>;
  input: PageTypeUpdateInput;
};


export type MutationPageUpdateArgs = {
  id: Scalars['ID'];
  input: PageInput;
};


export type MutationPasswordChangeArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationPaymentCaptureArgs = {
  amount?: Maybe<Scalars['PositiveDecimal']>;
  paymentId: Scalars['ID'];
};


export type MutationPaymentInitializeArgs = {
  gateway: Scalars['String'];
  paymentData?: Maybe<Scalars['JSONString']>;
};


export type MutationPaymentRefundArgs = {
  amount?: Maybe<Scalars['PositiveDecimal']>;
  paymentId: Scalars['ID'];
};


export type MutationPaymentVoidArgs = {
  paymentId: Scalars['ID'];
};


export type MutationPermissionGroupCreateArgs = {
  input: PermissionGroupCreateInput;
};


export type MutationPermissionGroupDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPermissionGroupUpdateArgs = {
  id: Scalars['ID'];
  input: PermissionGroupUpdateInput;
};


export type MutationPluginUpdateArgs = {
  id: Scalars['ID'];
  input: PluginUpdateInput;
};


export type MutationProductAttributeAssignArgs = {
  operations: Array<Maybe<ProductAttributeAssignInput>>;
  productTypeId: Scalars['ID'];
};


export type MutationProductAttributeUnassignArgs = {
  attributeIds: Array<Maybe<Scalars['ID']>>;
  productTypeId: Scalars['ID'];
};


export type MutationProductBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationProductChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: ProductChannelListingUpdateInput;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};


export type MutationProductDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductImageBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationProductImageCreateArgs = {
  input: ProductImageCreateInput;
};


export type MutationProductImageDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductImageReorderArgs = {
  imagesIds: Array<Maybe<Scalars['ID']>>;
  productId: Scalars['ID'];
};


export type MutationProductImageUpdateArgs = {
  id: Scalars['ID'];
  input: ProductImageUpdateInput;
};


export type MutationProductReorderAttributeValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<Maybe<ReorderInput>>;
  productId: Scalars['ID'];
};


export type MutationProductTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductTypeBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationProductTypeCreateArgs = {
  input: ProductTypeInput;
};


export type MutationProductTypeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductTypeReorderAttributesArgs = {
  moves: Array<Maybe<ReorderInput>>;
  productTypeId: Scalars['ID'];
  type: ProductAttributeType;
};


export type MutationProductTypeUpdateArgs = {
  id: Scalars['ID'];
  input: ProductTypeInput;
};


export type MutationProductUpdateArgs = {
  id: Scalars['ID'];
  input: ProductInput;
};


export type MutationProductVariantBulkCreateArgs = {
  product: Scalars['ID'];
  variants: Array<Maybe<ProductVariantBulkCreateInput>>;
};


export type MutationProductVariantBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationProductVariantChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: Array<ProductVariantChannelListingAddInput>;
};


export type MutationProductVariantCreateArgs = {
  input: ProductVariantCreateInput;
};


export type MutationProductVariantDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductVariantReorderArgs = {
  moves: Array<Maybe<ReorderInput>>;
  productId: Scalars['ID'];
};


export type MutationProductVariantReorderAttributeValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<Maybe<ReorderInput>>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantSetDefaultArgs = {
  productId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationProductVariantStocksCreateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantStocksDeleteArgs = {
  variantId: Scalars['ID'];
  warehouseIds?: Maybe<Array<Scalars['ID']>>;
};


export type MutationProductVariantStocksUpdateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductVariantUpdateArgs = {
  id: Scalars['ID'];
  input: ProductVariantInput;
};


export type MutationRequestEmailChangeArgs = {
  newEmail: Scalars['String'];
  password: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type MutationRequestPasswordResetArgs = {
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type MutationReviewCreateArgs = {
  input: ReviewCreateInput;
};


export type MutationReviewUpdateArgs = {
  input: ReviewUpdateInput;
};


export type MutationSaleBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationSaleCataloguesAddArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationSaleCataloguesRemoveArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationSaleChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: SaleChannelListingInput;
};


export type MutationSaleCreateArgs = {
  input: SaleInput;
};


export type MutationSaleDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationSaleTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationSaleUpdateArgs = {
  id: Scalars['ID'];
  input: SaleInput;
};


export type MutationSetPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationShippingMethodChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingMethodChannelListingInput;
};


export type MutationShippingMethodZipCodeRulesCreateArgs = {
  input: ShippingZipCodeRulesCreateInput;
  shippingMethodId: Scalars['ID'];
};


export type MutationShippingMethodZipCodeRulesDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationShippingPriceBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationShippingPriceCreateArgs = {
  input: ShippingPriceInput;
};


export type MutationShippingPriceDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationShippingPriceExcludeProductsArgs = {
  id: Scalars['ID'];
  input: ShippingPriceExcludeProductsInput;
};


export type MutationShippingPriceRemoveProductFromExcludeArgs = {
  id: Scalars['ID'];
  products: Array<Maybe<Scalars['ID']>>;
};


export type MutationShippingPriceTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShippingPriceUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingPriceInput;
};


export type MutationShippingZoneBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationShippingZoneCreateArgs = {
  input: ShippingZoneCreateInput;
};


export type MutationShippingZoneDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationShippingZoneUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingZoneUpdateInput;
};


export type MutationShopAddressUpdateArgs = {
  input?: Maybe<AddressInput>;
};


export type MutationShopDomainUpdateArgs = {
  input?: Maybe<SiteDomainInput>;
};


export type MutationShopSettingsTranslateArgs = {
  input: ShopSettingsTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShopSettingsUpdateArgs = {
  input: ShopSettingsInput;
};


export type MutationStaffBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationStaffCreateArgs = {
  input: StaffCreateInput;
};


export type MutationStaffDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationStaffNotificationRecipientCreateArgs = {
  input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationStaffNotificationRecipientUpdateArgs = {
  id: Scalars['ID'];
  input: StaffNotificationRecipientInput;
};


export type MutationStaffUpdateArgs = {
  id: Scalars['ID'];
  input: StaffUpdateInput;
};


export type MutationTokenCreateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationTokenRefreshArgs = {
  csrfToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};


export type MutationTokenVerifyArgs = {
  token: Scalars['String'];
};


export type MutationUnassignWarehouseShippingZoneArgs = {
  id: Scalars['ID'];
  shippingZoneIds: Array<Scalars['ID']>;
};


export type MutationUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: Array<MetadataInput>;
};


export type MutationUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: Array<MetadataInput>;
};


export type MutationUpdateWarehouseArgs = {
  id: Scalars['ID'];
  input: WarehouseUpdateInput;
};


export type MutationUserAvatarUpdateArgs = {
  image: Scalars['Upload'];
};


export type MutationUserBulkSetActiveArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
  isActive: Scalars['Boolean'];
};


export type MutationVariantImageAssignArgs = {
  imageId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationVariantImageUnassignArgs = {
  imageId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationVoucherBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationVoucherCataloguesAddArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationVoucherCataloguesRemoveArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationVoucherChannelListingUpdateArgs = {
  id: Scalars['ID'];
  input: VoucherChannelListingInput;
};


export type MutationVoucherCreateArgs = {
  input: VoucherInput;
};


export type MutationVoucherDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationVoucherTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationVoucherUpdateArgs = {
  id: Scalars['ID'];
  input: VoucherInput;
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['ID'];
  input: WebhookUpdateInput;
};

/** Creates a new webhook subscription. */
export type WebhookCreate = {
  __typename?: 'WebhookCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  webhookErrors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
};

/** Represents an error in the input of a mutation. */
export type Error = {
  __typename?: 'Error';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

export type WebhookError = {
  __typename?: 'WebhookError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: WebhookErrorCode;
};

/** An enumeration. */
export enum WebhookErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type WebhookCreateInput = {
  /** The name of the webhook. */
  name?: Maybe<Scalars['String']>;
  /** The url to receive the payload. */
  targetUrl?: Maybe<Scalars['String']>;
  /** The events that webhook wants to subscribe. The CHECKOUT_QUANTITY_CHANGED is deprecated. It will be removed in Saleor 3.0 */
  events?: Maybe<Array<Maybe<WebhookEventTypeEnum>>>;
  /** ID of the app to which webhook belongs. */
  app?: Maybe<Scalars['ID']>;
  /** Determine if webhook will be set active or not. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** The secret key used to create a hash signature with each payload. */
  secretKey?: Maybe<Scalars['String']>;
};

/** Deletes a webhook subscription. */
export type WebhookDelete = {
  __typename?: 'WebhookDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  webhookErrors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
};

/** Updates a webhook subscription. */
export type WebhookUpdate = {
  __typename?: 'WebhookUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  webhookErrors: Array<WebhookError>;
  webhook?: Maybe<Webhook>;
};

export type WebhookUpdateInput = {
  /** The new name of the webhook. */
  name?: Maybe<Scalars['String']>;
  /** The url to receive the payload. */
  targetUrl?: Maybe<Scalars['String']>;
  /** The events that webhook wants to subscribe. The CHECKOUT_QUANTITY_CHANGED is deprecated. It will be removed in Saleor 3.0 */
  events?: Maybe<Array<Maybe<WebhookEventTypeEnum>>>;
  /** ID of the app to which webhook belongs. */
  app?: Maybe<Scalars['ID']>;
  /** Determine if webhook will be set active or not. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Use to create a hash signature with each payload. */
  secretKey?: Maybe<Scalars['String']>;
};

/** Creates new warehouse. */
export type WarehouseCreate = {
  __typename?: 'WarehouseCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  warehouseErrors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
};

export type WarehouseError = {
  __typename?: 'WarehouseError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: WarehouseErrorCode;
};

/** An enumeration. */
export enum WarehouseErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type WarehouseCreateInput = {
  /** Warehouse slug. */
  slug?: Maybe<Scalars['String']>;
  /** Company name. */
  companyName?: Maybe<Scalars['String']>;
  /** The email address of the warehouse. */
  email?: Maybe<Scalars['String']>;
  /** Warehouse name. */
  name: Scalars['String'];
  /** Address of the warehouse. */
  address: WarehouseAddressInput;
  /** Shipping zones supported by the warehouse. */
  shippingZones?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type WarehouseAddressInput = {
  /** Address. */
  streetAddress1: Scalars['String'];
  /** Address. */
  streetAddress2?: Maybe<Scalars['String']>;
  /** City. */
  city: Scalars['String'];
  /** District. */
  cityArea?: Maybe<Scalars['String']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']>;
  /** Country. */
  country: CountryCode;
  /** State or province. */
  countryArea?: Maybe<Scalars['String']>;
  /** Phone number. */
  phone?: Maybe<Scalars['String']>;
};

/** Updates given warehouse. */
export type WarehouseUpdate = {
  __typename?: 'WarehouseUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  warehouseErrors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
};

export type WarehouseUpdateInput = {
  /** Warehouse slug. */
  slug?: Maybe<Scalars['String']>;
  /** Company name. */
  companyName?: Maybe<Scalars['String']>;
  /** The email address of the warehouse. */
  email?: Maybe<Scalars['String']>;
  /** Warehouse name. */
  name?: Maybe<Scalars['String']>;
  /** Address of the warehouse. */
  address?: Maybe<WarehouseAddressInput>;
};

/** Deletes selected warehouse. */
export type WarehouseDelete = {
  __typename?: 'WarehouseDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  warehouseErrors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
};

/** Add shipping zone to given warehouse. */
export type WarehouseShippingZoneAssign = {
  __typename?: 'WarehouseShippingZoneAssign';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  warehouseErrors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
};

/** Remove shipping zone from given warehouse. */
export type WarehouseShippingZoneUnassign = {
  __typename?: 'WarehouseShippingZoneUnassign';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  warehouseErrors: Array<WarehouseError>;
  warehouse?: Maybe<Warehouse>;
};

/** Creates a new staff notification recipient. */
export type StaffNotificationRecipientCreate = {
  __typename?: 'StaffNotificationRecipientCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type ShopError = {
  __typename?: 'ShopError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: ShopErrorCode;
};

/** An enumeration. */
export enum ShopErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  CannotFetchTaxRates = 'CANNOT_FETCH_TAX_RATES',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type StaffNotificationRecipientInput = {
  /** The ID of the user subscribed to email notifications.. */
  user?: Maybe<Scalars['ID']>;
  /** Email address of a user subscribed to email notifications. */
  email?: Maybe<Scalars['String']>;
  /** Determines if a notification active. */
  active?: Maybe<Scalars['Boolean']>;
};

/** Updates a staff notification recipient. */
export type StaffNotificationRecipientUpdate = {
  __typename?: 'StaffNotificationRecipientUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

/** Delete staff notification recipient. */
export type StaffNotificationRecipientDelete = {
  __typename?: 'StaffNotificationRecipientDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

/** Updates site domain of the shop. */
export type ShopDomainUpdate = {
  __typename?: 'ShopDomainUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type SiteDomainInput = {
  /** Domain name for shop. */
  domain?: Maybe<Scalars['String']>;
  /** Shop site name. */
  name?: Maybe<Scalars['String']>;
};

/** Updates shop settings. */
export type ShopSettingsUpdate = {
  __typename?: 'ShopSettingsUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type ShopSettingsInput = {
  /** Header text. */
  headerText?: Maybe<Scalars['String']>;
  /** SEO description. */
  description?: Maybe<Scalars['String']>;
  /** Include taxes in prices. */
  includeTaxesInPrices?: Maybe<Scalars['Boolean']>;
  /** Display prices with tax in store. */
  displayGrossPrices?: Maybe<Scalars['Boolean']>;
  /** Charge taxes on shipping. */
  chargeTaxesOnShipping?: Maybe<Scalars['Boolean']>;
  /** Enable inventory tracking. */
  trackInventoryByDefault?: Maybe<Scalars['Boolean']>;
  /** Default weight unit. */
  defaultWeightUnit?: Maybe<WeightUnitsEnum>;
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']>;
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']>;
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']>;
  /** Default email sender's name. */
  defaultMailSenderName?: Maybe<Scalars['String']>;
  /** Default email sender's address. */
  defaultMailSenderAddress?: Maybe<Scalars['String']>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: Maybe<Scalars['String']>;
};

/** Fetch tax rates. */
export type ShopFetchTaxRates = {
  __typename?: 'ShopFetchTaxRates';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

/** Creates/Updates translations for Shop Settings. */
export type ShopSettingsTranslate = {
  __typename?: 'ShopSettingsTranslate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  translationErrors: Array<TranslationError>;
};

export type TranslationError = {
  __typename?: 'TranslationError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: TranslationErrorCode;
};

/** An enumeration. */
export enum TranslationErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type ShopSettingsTranslationInput = {
  headerText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
export type ShopAddressUpdate = {
  __typename?: 'ShopAddressUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop?: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

/** Update shop order settings. */
export type OrderSettingsUpdate = {
  __typename?: 'OrderSettingsUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Order settings. */
  orderSettings?: Maybe<OrderSettings>;
  orderSettingsErrors: Array<OrderSettingsError>;
};

export type OrderSettingsError = {
  __typename?: 'OrderSettingsError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: OrderSettingsErrorCode;
};

/** An enumeration. */
export enum OrderSettingsErrorCode {
  Invalid = 'INVALID'
}

export type OrderSettingsUpdateInput = {
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. */
  automaticallyConfirmAllNewOrders: Scalars['Boolean'];
};

/** Manage shipping method's availability in channels. */
export type ShippingMethodChannelListingUpdate = {
  __typename?: 'ShippingMethodChannelListingUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated shipping method instance. */
  shippingMethod?: Maybe<ShippingMethod>;
  shippingErrors: Array<ShippingError>;
};

export type ShippingError = {
  __typename?: 'ShippingError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: ShippingErrorCode;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']>>;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum ShippingErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MaxLessThanMin = 'MAX_LESS_THAN_MIN',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM'
}

export type ShippingMethodChannelListingInput = {
  /** List of channels to which the shipping method should be assigned. */
  addChannels?: Maybe<Array<ShippingMethodChannelListingAddInput>>;
  /** List of channels from which the shipping method should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>;
};

export type ShippingMethodChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Shipping price of the shipping method in this channel. */
  price?: Maybe<Scalars['PositiveDecimal']>;
  /** Minimum order price to use this shipping method. */
  minimumOrderPrice?: Maybe<Scalars['PositiveDecimal']>;
  /** Maximum order price to use this shipping method. */
  maximumOrderPrice?: Maybe<Scalars['PositiveDecimal']>;
};


/** Create a new zip code exclusion range for shipping method. */
export type ShippingZipCodeRulesCreate = {
  __typename?: 'ShippingZipCodeRulesCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A shipping method zip code range. */
  zipCodeRules?: Maybe<Array<Maybe<ShippingMethodZipCodeRule>>>;
  /** Related shipping method. */
  shippingMethod?: Maybe<ShippingMethod>;
  shippingErrors: Array<ShippingError>;
};

export type ShippingZipCodeRulesCreateInput = {
  /** Zip code rules for shipping method. */
  zipCodeRules: Array<Maybe<ShippingZipCodeRulesCreateInputRange>>;
};

export type ShippingZipCodeRulesCreateInputRange = {
  /** Start range of the zip code. */
  start: Scalars['String'];
  /** End range of the zip code. */
  end?: Maybe<Scalars['String']>;
};

/** Deletes a shipping method zip code. */
export type ShippingZipCodeRulesDelete = {
  __typename?: 'ShippingZipCodeRulesDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Shipping method of deleted zip code rule. */
  shippingMethod?: Maybe<ShippingMethod>;
  shippingErrors: Array<ShippingError>;
  shippingMethodZipCodeRule?: Maybe<ShippingMethodZipCodeRule>;
};

/** Creates a new shipping price. */
export type ShippingPriceCreate = {
  __typename?: 'ShippingPriceCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingErrors: Array<ShippingError>;
};

export type ShippingPriceInput = {
  /** Name of the shipping method. */
  name?: Maybe<Scalars['String']>;
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight?: Maybe<Scalars['WeightScalar']>;
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight?: Maybe<Scalars['WeightScalar']>;
  /** Maximum number of days for delivery. */
  maximumDeliveryDays?: Maybe<Scalars['Int']>;
  /** Minimal number of days for delivery. */
  minimumDeliveryDays?: Maybe<Scalars['Int']>;
  /** Shipping type: price or weight based. */
  type?: Maybe<ShippingMethodTypeEnum>;
  /** Shipping zone this method belongs to. */
  shippingZone?: Maybe<Scalars['ID']>;
};


/** Deletes a shipping price. */
export type ShippingPriceDelete = {
  __typename?: 'ShippingPriceDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A shipping method to delete. */
  shippingMethod?: Maybe<ShippingMethod>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>;
  shippingErrors: Array<ShippingError>;
};

/** Deletes shipping prices. */
export type ShippingPriceBulkDelete = {
  __typename?: 'ShippingPriceBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  shippingErrors: Array<ShippingError>;
};

/** Updates a new shipping price. */
export type ShippingPriceUpdate = {
  __typename?: 'ShippingPriceUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingErrors: Array<ShippingError>;
};

/** Creates/Updates translations for shipping method. */
export type ShippingPriceTranslate = {
  __typename?: 'ShippingPriceTranslate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  shippingMethod?: Maybe<ShippingMethod>;
};

export type NameTranslationInput = {
  name?: Maybe<Scalars['String']>;
};

/** Exclude products from shipping price. */
export type ShippingPriceExcludeProducts = {
  __typename?: 'ShippingPriceExcludeProducts';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A shipping method with new list of excluded products. */
  shippingMethod?: Maybe<ShippingMethod>;
  shippingErrors: Array<ShippingError>;
};

export type ShippingPriceExcludeProductsInput = {
  /** List of products which will be excluded. */
  products: Array<Maybe<Scalars['ID']>>;
};

/** Remove product from excluded list for shipping price. */
export type ShippingPriceRemoveProductFromExclude = {
  __typename?: 'ShippingPriceRemoveProductFromExclude';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A shipping method with new list of excluded products. */
  shippingMethod?: Maybe<ShippingMethod>;
  shippingErrors: Array<ShippingError>;
};

/** Creates a new shipping zone. */
export type ShippingZoneCreate = {
  __typename?: 'ShippingZoneCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneCreateInput = {
  /** Shipping zone's name. Visible only to the staff. */
  name?: Maybe<Scalars['String']>;
  /** Description of the shipping zone. */
  description?: Maybe<Scalars['String']>;
  /** List of countries in this shipping zone. */
  countries?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: Maybe<Scalars['Boolean']>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Deletes a shipping zone. */
export type ShippingZoneDelete = {
  __typename?: 'ShippingZoneDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

/** Deletes shipping zones. */
export type ShippingZoneBulkDelete = {
  __typename?: 'ShippingZoneBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  shippingErrors: Array<ShippingError>;
};

/** Updates a new shipping zone. */
export type ShippingZoneUpdate = {
  __typename?: 'ShippingZoneUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneUpdateInput = {
  /** Shipping zone's name. Visible only to the staff. */
  name?: Maybe<Scalars['String']>;
  /** Description of the shipping zone. */
  description?: Maybe<Scalars['String']>;
  /** List of countries in this shipping zone. */
  countries?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: Maybe<Scalars['Boolean']>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** List of warehouses to unassign from a shipping zone */
  removeWarehouses?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Assign attributes to a given product type. */
export type ProductAttributeAssign = {
  __typename?: 'ProductAttributeAssign';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The updated product type. */
  productType?: Maybe<ProductType>;
  productErrors: Array<ProductError>;
};

export type ProductError = {
  __typename?: 'ProductError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum ProductErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
  AttributeVariantsDisabled = 'ATTRIBUTE_VARIANTS_DISABLED',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  ProductWithoutCategory = 'PRODUCT_WITHOUT_CATEGORY',
  NotProductsImage = 'NOT_PRODUCTS_IMAGE',
  NotProductsVariant = 'NOT_PRODUCTS_VARIANT',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  VariantNoDigitalContent = 'VARIANT_NO_DIGITAL_CONTENT',
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  ProductNotAssignedToChannel = 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL'
}

export type ProductAttributeAssignInput = {
  /** The ID of the attribute to assign. */
  id: Scalars['ID'];
  /** The attribute type to be assigned as. */
  type: ProductAttributeType;
};

export enum ProductAttributeType {
  Product = 'PRODUCT',
  Variant = 'VARIANT'
}

/** Un-assign attributes from a given product type. */
export type ProductAttributeUnassign = {
  __typename?: 'ProductAttributeUnassign';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The updated product type. */
  productType?: Maybe<ProductType>;
  productErrors: Array<ProductError>;
};

/** Creates a new category. */
export type CategoryCreate = {
  __typename?: 'CategoryCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  category?: Maybe<Category>;
};

export type CategoryInput = {
  /** Category description (JSON). */
  description?: Maybe<Scalars['JSONString']>;
  /** Category name. */
  name?: Maybe<Scalars['String']>;
  /** Category slug. */
  slug?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>;
  /** Alt text for an image. */
  backgroundImageAlt?: Maybe<Scalars['String']>;
};

export type SeoInput = {
  /** SEO title. */
  title?: Maybe<Scalars['String']>;
  /** SEO description. */
  description?: Maybe<Scalars['String']>;
};


/** Deletes a category. */
export type CategoryDelete = {
  __typename?: 'CategoryDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  category?: Maybe<Category>;
};

/** Deletes categories. */
export type CategoryBulkDelete = {
  __typename?: 'CategoryBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Updates a category. */
export type CategoryUpdate = {
  __typename?: 'CategoryUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  category?: Maybe<Category>;
};

/** Creates/Updates translations for Category. */
export type CategoryTranslate = {
  __typename?: 'CategoryTranslate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  category?: Maybe<Category>;
};

export type TranslationInput = {
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['JSONString']>;
};

/** Adds products to a collection. */
export type CollectionAddProducts = {
  __typename?: 'CollectionAddProducts';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Collection to which products will be added. */
  collection?: Maybe<Collection>;
  collectionErrors: Array<CollectionError>;
};

export type CollectionError = {
  __typename?: 'CollectionError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of products IDs which causes the error. */
  products?: Maybe<Array<Scalars['ID']>>;
  /** The error code. */
  code: CollectionErrorCode;
};

/** An enumeration. */
export enum CollectionErrorCode {
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT'
}

/** Creates a new collection. */
export type CollectionCreate = {
  __typename?: 'CollectionCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  collectionErrors: Array<CollectionError>;
  collection?: Maybe<Collection>;
};

export type CollectionCreateInput = {
  /** Informs whether a collection is published. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Name of the collection. */
  name?: Maybe<Scalars['String']>;
  /** Slug of the collection. */
  slug?: Maybe<Scalars['String']>;
  /** Description of the collection (JSON). */
  description?: Maybe<Scalars['JSONString']>;
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>;
  /** Alt text for an image. */
  backgroundImageAlt?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>;
  /** List of products to be added to the collection. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Deletes a collection. */
export type CollectionDelete = {
  __typename?: 'CollectionDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  collectionErrors: Array<CollectionError>;
  collection?: Maybe<Collection>;
};

/** Reorder the products of a collection. */
export type CollectionReorderProducts = {
  __typename?: 'CollectionReorderProducts';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Collection from which products are reordered. */
  collection?: Maybe<Collection>;
  collectionErrors: Array<CollectionError>;
};

export type MoveProductInput = {
  /** The ID of the product to move. */
  productId: Scalars['ID'];
  /** The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Deletes collections. */
export type CollectionBulkDelete = {
  __typename?: 'CollectionBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Remove products from a collection. */
export type CollectionRemoveProducts = {
  __typename?: 'CollectionRemoveProducts';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Collection from which products will be removed. */
  collection?: Maybe<Collection>;
  collectionErrors: Array<CollectionError>;
};

/** Updates a collection. */
export type CollectionUpdate = {
  __typename?: 'CollectionUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  collectionErrors: Array<CollectionError>;
  collection?: Maybe<Collection>;
};

export type CollectionInput = {
  /** Informs whether a collection is published. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Name of the collection. */
  name?: Maybe<Scalars['String']>;
  /** Slug of the collection. */
  slug?: Maybe<Scalars['String']>;
  /** Description of the collection (JSON). */
  description?: Maybe<Scalars['JSONString']>;
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>;
  /** Alt text for an image. */
  backgroundImageAlt?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>;
};

/** Creates/Updates translations for collection. */
export type CollectionTranslate = {
  __typename?: 'CollectionTranslate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  collection?: Maybe<Collection>;
};

/** Manage collection's availability in channels. */
export type CollectionChannelListingUpdate = {
  __typename?: 'CollectionChannelListingUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated collection instance. */
  collection?: Maybe<Collection>;
  collectionChannelListingErrors: Array<CollectionChannelListingError>;
};

export type CollectionChannelListingError = {
  __typename?: 'CollectionChannelListingError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>;
};

export type CollectionChannelListingUpdateInput = {
  /** List of channels to which the collection should be assigned. */
  addChannels?: Maybe<Array<PublishableChannelListingInput>>;
  /** List of channels from which the collection should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>;
};

export type PublishableChannelListingInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Determines if object is visible to customers. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>;
};

/** Creates a new product. */
export type ProductCreate = {
  __typename?: 'ProductCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  product?: Maybe<Product>;
};

export type ProductCreateInput = {
  /** List of attributes. */
  attributes?: Maybe<Array<Maybe<AttributeValueInput>>>;
  /** ID of the product's category. */
  category?: Maybe<Scalars['ID']>;
  /** Determine if taxes are being charged for the product. */
  chargeTaxes?: Maybe<Scalars['Boolean']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Product description (JSON). */
  description?: Maybe<Scalars['JSONString']>;
  /** Product name. */
  name?: Maybe<Scalars['String']>;
  /** Product slug. */
  slug?: Maybe<Scalars['String']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Weight of the Product. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Defines the product rating value. */
  rating?: Maybe<Scalars['Float']>;
  /** ID of the type that product belongs to. */
  productType: Scalars['ID'];
};

export type AttributeValueInput = {
  /** ID of the selected attribute. */
  id?: Maybe<Scalars['ID']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URL of the file attribute. Every time, a new value is created. */
  file?: Maybe<Scalars['String']>;
  /** File content type. */
  contentType?: Maybe<Scalars['String']>;
  /** List of entity IDs that will be used as references. */
  references?: Maybe<Array<Scalars['ID']>>;
};

/** Deletes a product. */
export type ProductDelete = {
  __typename?: 'ProductDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  product?: Maybe<Product>;
};

/** Deletes products. */
export type ProductBulkDelete = {
  __typename?: 'ProductBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Updates an existing product. */
export type ProductUpdate = {
  __typename?: 'ProductUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  product?: Maybe<Product>;
};

export type ProductInput = {
  /** List of attributes. */
  attributes?: Maybe<Array<Maybe<AttributeValueInput>>>;
  /** ID of the product's category. */
  category?: Maybe<Scalars['ID']>;
  /** Determine if taxes are being charged for the product. */
  chargeTaxes?: Maybe<Scalars['Boolean']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Product description (JSON). */
  description?: Maybe<Scalars['JSONString']>;
  /** Product name. */
  name?: Maybe<Scalars['String']>;
  /** Product slug. */
  slug?: Maybe<Scalars['String']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Weight of the Product. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Defines the product rating value. */
  rating?: Maybe<Scalars['Float']>;
};

/** Creates/Updates translations for Product. */
export type ProductTranslate = {
  __typename?: 'ProductTranslate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  product?: Maybe<Product>;
};

/** Manage product's availability in channels. */
export type ProductChannelListingUpdate = {
  __typename?: 'ProductChannelListingUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated product instance. */
  product?: Maybe<Product>;
  productChannelListingErrors: Array<ProductChannelListingError>;
};

export type ProductChannelListingError = {
  __typename?: 'ProductChannelListingError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>;
};

export type ProductChannelListingUpdateInput = {
  /** List of channels to which the product should be assigned. */
  addChannels?: Maybe<Array<ProductChannelListingAddInput>>;
  /** List of channels from which the product should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>;
};

export type ProductChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Determines if object is visible to customers. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: Maybe<Scalars['Boolean']>;
  /** Determine if product should be available for purchase. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
  /** A start date from which a product will be available for purchase. When not set and isAvailable is set to True, the current day is assumed. */
  availableForPurchaseDate?: Maybe<Scalars['Date']>;
};

/** Create a product image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type ProductImageCreate = {
  __typename?: 'ProductImageCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product?: Maybe<Product>;
  image?: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
};

export type ProductImageCreateInput = {
  /** Alt text for an image. */
  alt?: Maybe<Scalars['String']>;
  /** Represents an image file in a multipart request. */
  image: Scalars['Upload'];
  /** ID of an product. */
  product: Scalars['ID'];
};

/** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
export type ProductVariantReorder = {
  __typename?: 'ProductVariantReorder';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ReorderInput = {
  /** The ID of the item to move. */
  id: Scalars['ID'];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Deletes a product image. */
export type ProductImageDelete = {
  __typename?: 'ProductImageDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product?: Maybe<Product>;
  image?: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
};

/** Deletes product images. */
export type ProductImageBulkDelete = {
  __typename?: 'ProductImageBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Changes ordering of the product image. */
export type ProductImageReorder = {
  __typename?: 'ProductImageReorder';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product?: Maybe<Product>;
  images?: Maybe<Array<Maybe<ProductImage>>>;
  productErrors: Array<ProductError>;
};

/** Updates a product image. */
export type ProductImageUpdate = {
  __typename?: 'ProductImageUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product?: Maybe<Product>;
  image?: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
};

export type ProductImageUpdateInput = {
  /** Alt text for an image. */
  alt?: Maybe<Scalars['String']>;
};

/** Creates a new product type. */
export type ProductTypeCreate = {
  __typename?: 'ProductTypeCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductTypeInput = {
  /** Name of the product type. */
  name?: Maybe<Scalars['String']>;
  /** Product type slug. */
  slug?: Maybe<Scalars['String']>;
  /** Determines if product of this type has multiple variants. This option mainly simplifies product management in the dashboard. There is always at least one variant created under the hood. */
  hasVariants?: Maybe<Scalars['Boolean']>;
  /** List of attributes shared among all product variants. */
  productAttributes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** List of attributes used to distinguish between different variants of a product. */
  variantAttributes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Determines if shipping is required for products of this variant. */
  isShippingRequired?: Maybe<Scalars['Boolean']>;
  /** Determines if products are digital. */
  isDigital?: Maybe<Scalars['Boolean']>;
  /** Weight of the ProductType items. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: Maybe<Scalars['String']>;
};

/** Deletes a product type. */
export type ProductTypeDelete = {
  __typename?: 'ProductTypeDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

/** Deletes product types. */
export type ProductTypeBulkDelete = {
  __typename?: 'ProductTypeBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Updates an existing product type. */
export type ProductTypeUpdate = {
  __typename?: 'ProductTypeUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

/** Reorder the attributes of a product type. */
export type ProductTypeReorderAttributes = {
  __typename?: 'ProductTypeReorderAttributes';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Product type from which attributes are reordered. */
  productType?: Maybe<ProductType>;
  productErrors: Array<ProductError>;
};

/** Reorder product attribute values. */
export type ProductReorderAttributeValues = {
  __typename?: 'ProductReorderAttributeValues';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Product from which attribute values are reordered. */
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

/** Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type DigitalContentCreate = {
  __typename?: 'DigitalContentCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  variant?: Maybe<ProductVariant>;
  content?: Maybe<DigitalContent>;
  productErrors: Array<ProductError>;
};

export type DigitalContentUploadInput = {
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean'];
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: Maybe<Scalars['Int']>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: Maybe<Scalars['Int']>;
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: Maybe<Scalars['Boolean']>;
  /** Represents an file in a multipart request. */
  contentFile: Scalars['Upload'];
};

/** Remove digital content assigned to given variant. */
export type DigitalContentDelete = {
  __typename?: 'DigitalContentDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  variant?: Maybe<ProductVariant>;
  productErrors: Array<ProductError>;
};

/** Update digital content. */
export type DigitalContentUpdate = {
  __typename?: 'DigitalContentUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  variant?: Maybe<ProductVariant>;
  content?: Maybe<DigitalContent>;
  productErrors: Array<ProductError>;
};

export type DigitalContentInput = {
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean'];
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: Maybe<Scalars['Int']>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: Maybe<Scalars['Int']>;
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: Maybe<Scalars['Boolean']>;
};

/** Generate new URL to digital content. */
export type DigitalContentUrlCreate = {
  __typename?: 'DigitalContentUrlCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  digitalContentUrl?: Maybe<DigitalContentUrl>;
};

export type DigitalContentUrlCreateInput = {
  /** Digital content ID which URL will belong to. */
  content: Scalars['ID'];
};

/** Creates a new variant for a product. */
export type ProductVariantCreate = {
  __typename?: 'ProductVariantCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<Maybe<AttributeValueInput>>;
  /** Stock keeping unit. */
  sku?: Maybe<Scalars['String']>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Product ID of which type is the variant. */
  product: Scalars['ID'];
  /** Stocks of a product available for sale. */
  stocks?: Maybe<Array<StockInput>>;
};

export type StockInput = {
  /** Warehouse in which stock is located. */
  warehouse: Scalars['ID'];
  /** Quantity of items available for sell. */
  quantity?: Maybe<Scalars['Int']>;
};

/** Deletes a product variant. */
export type ProductVariantDelete = {
  __typename?: 'ProductVariantDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

/** Creates product variants for a given product. */
export type ProductVariantBulkCreate = {
  __typename?: 'ProductVariantBulkCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were created. */
  count: Scalars['Int'];
  /** List of the created variants. */
  productVariants: Array<ProductVariant>;
  bulkProductErrors: Array<BulkProductError>;
};

export type BulkProductError = {
  __typename?: 'BulkProductError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>;
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars['Int']>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']>>;
  /** List of channel IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>;
};

export type ProductVariantBulkCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<Maybe<BulkAttributeValueInput>>;
  /** Stock keeping unit. */
  sku: Scalars['String'];
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Stocks of a product available for sale. */
  stocks?: Maybe<Array<StockInput>>;
  /** List of prices assigned to channels. */
  channelListings?: Maybe<Array<ProductVariantChannelListingAddInput>>;
};

export type BulkAttributeValueInput = {
  /** ID of the selected attribute. */
  id?: Maybe<Scalars['ID']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  values: Array<Maybe<Scalars['String']>>;
};

export type ProductVariantChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Price of the particular variant in channel. */
  price: Scalars['PositiveDecimal'];
  /** Cost price of the variant in channel. */
  costPrice?: Maybe<Scalars['PositiveDecimal']>;
};

/** Deletes product variants. */
export type ProductVariantBulkDelete = {
  __typename?: 'ProductVariantBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Creates stocks for product variant. */
export type ProductVariantStocksCreate = {
  __typename?: 'ProductVariantStocksCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>;
  bulkStockErrors: Array<BulkStockError>;
};

export type BulkStockError = {
  __typename?: 'BulkStockError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>;
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars['Int']>;
};

/** Delete stocks from product variant. */
export type ProductVariantStocksDelete = {
  __typename?: 'ProductVariantStocksDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>;
  stockErrors: Array<StockError>;
};

export type StockError = {
  __typename?: 'StockError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: StockErrorCode;
};

/** An enumeration. */
export enum StockErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Update stocks for product variant. */
export type ProductVariantStocksUpdate = {
  __typename?: 'ProductVariantStocksUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>;
  bulkStockErrors: Array<BulkStockError>;
};

/** Updates an existing variant for product. */
export type ProductVariantUpdate = {
  __typename?: 'ProductVariantUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantInput = {
  /** List of attributes specific to this variant. */
  attributes?: Maybe<Array<Maybe<AttributeValueInput>>>;
  /** Stock keeping unit. */
  sku?: Maybe<Scalars['String']>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>;
};

/** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
export type ProductVariantSetDefault = {
  __typename?: 'ProductVariantSetDefault';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

/** Creates/Updates translations for Product Variant. */
export type ProductVariantTranslate = {
  __typename?: 'ProductVariantTranslate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  productVariant?: Maybe<ProductVariant>;
};

/** Manage product variant prices in channels. */
export type ProductVariantChannelListingUpdate = {
  __typename?: 'ProductVariantChannelListingUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated product variant instance. */
  variant?: Maybe<ProductVariant>;
  productChannelListingErrors: Array<ProductChannelListingError>;
};

/** Reorder product variant attribute values. */
export type ProductVariantReorderAttributeValues = {
  __typename?: 'ProductVariantReorderAttributeValues';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Product variant from which attribute values are reordered. */
  productVariant?: Maybe<ProductVariant>;
  productErrors: Array<ProductError>;
};

/** Assign an image to a product variant. */
export type VariantImageAssign = {
  __typename?: 'VariantImageAssign';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productVariant?: Maybe<ProductVariant>;
  image?: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
};

/** Unassign an image from a product variant. */
export type VariantImageUnassign = {
  __typename?: 'VariantImageUnassign';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productVariant?: Maybe<ProductVariant>;
  image?: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
};

/** Captures the authorized payment amount. */
export type PaymentCapture = {
  __typename?: 'PaymentCapture';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated payment. */
  payment?: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
};

export type PaymentError = {
  __typename?: 'PaymentError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: PaymentErrorCode;
};

/** An enumeration. */
export enum PaymentErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  PartialPaymentNotAllowed = 'PARTIAL_PAYMENT_NOT_ALLOWED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  PaymentError = 'PAYMENT_ERROR',
  NotSupportedGateway = 'NOT_SUPPORTED_GATEWAY'
}

/** Refunds the captured payment amount. */
export type PaymentRefund = {
  __typename?: 'PaymentRefund';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated payment. */
  payment?: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
};

/** Voids the authorized payment. */
export type PaymentVoid = {
  __typename?: 'PaymentVoid';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated payment. */
  payment?: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
};

/** Initializes payment process when it is required by gateway. */
export type PaymentInitialize = {
  __typename?: 'PaymentInitialize';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  initializedPayment?: Maybe<PaymentInitialized>;
  paymentErrors: Array<PaymentError>;
};

/** Server-side data generated by a payment gateway. Optional step when the payment provider requires an additional action to initialize payment session. */
export type PaymentInitialized = {
  __typename?: 'PaymentInitialized';
  /** ID of a payment gateway. */
  gateway: Scalars['String'];
  /** Payment gateway name. */
  name: Scalars['String'];
  /** Initialized data by gateway. */
  data?: Maybe<Scalars['JSONString']>;
};

/** Creates a new page. */
export type PageCreate = {
  __typename?: 'PageCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
  page?: Maybe<Page>;
};

export type PageError = {
  __typename?: 'PageError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: PageErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum PageErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED'
}

export type PageCreateInput = {
  /** Page internal name. */
  slug?: Maybe<Scalars['String']>;
  /** Page title. */
  title?: Maybe<Scalars['String']>;
  /** Page content in JSON format. */
  content?: Maybe<Scalars['JSONString']>;
  /** List of attributes. */
  attributes?: Maybe<Array<AttributeValueInput>>;
  /** Determines if page is visible in the storefront. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** ID of the page type that page belongs to. */
  pageType: Scalars['ID'];
};

/** Deletes a page. */
export type PageDelete = {
  __typename?: 'PageDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
  page?: Maybe<Page>;
};

/** Deletes pages. */
export type PageBulkDelete = {
  __typename?: 'PageBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  pageErrors: Array<PageError>;
};

/** Publish pages. */
export type PageBulkPublish = {
  __typename?: 'PageBulkPublish';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  pageErrors: Array<PageError>;
};

/** Updates an existing page. */
export type PageUpdate = {
  __typename?: 'PageUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
  page?: Maybe<Page>;
};

export type PageInput = {
  /** Page internal name. */
  slug?: Maybe<Scalars['String']>;
  /** Page title. */
  title?: Maybe<Scalars['String']>;
  /** Page content in JSON format. */
  content?: Maybe<Scalars['JSONString']>;
  /** List of attributes. */
  attributes?: Maybe<Array<AttributeValueInput>>;
  /** Determines if page is visible in the storefront. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
};

/** Creates/Updates translations for Page. */
export type PageTranslate = {
  __typename?: 'PageTranslate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  page?: Maybe<PageTranslatableContent>;
};

export type PageTranslationInput = {
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSONString']>;
};

/** Create a new page type. */
export type PageTypeCreate = {
  __typename?: 'PageTypeCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeCreateInput = {
  /** Name of the page type. */
  name?: Maybe<Scalars['String']>;
  /** Page type slug. */
  slug?: Maybe<Scalars['String']>;
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: Maybe<Array<Scalars['ID']>>;
};

/** Update page type. */
export type PageTypeUpdate = {
  __typename?: 'PageTypeUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

export type PageTypeUpdateInput = {
  /** Name of the page type. */
  name?: Maybe<Scalars['String']>;
  /** Page type slug. */
  slug?: Maybe<Scalars['String']>;
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: Maybe<Array<Scalars['ID']>>;
  /** List of attribute IDs to be assigned to the page type. */
  removeAttributes?: Maybe<Array<Scalars['ID']>>;
};

/** Delete a page type. */
export type PageTypeDelete = {
  __typename?: 'PageTypeDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
  pageType?: Maybe<PageType>;
};

/** Delete page types. */
export type PageTypeBulkDelete = {
  __typename?: 'PageTypeBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  pageErrors: Array<PageError>;
};

/** Assign attributes to a given page type. */
export type PageAttributeAssign = {
  __typename?: 'PageAttributeAssign';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The updated page type. */
  pageType?: Maybe<PageType>;
  pageErrors: Array<PageError>;
};

/** Unassign attributes from a given page type. */
export type PageAttributeUnassign = {
  __typename?: 'PageAttributeUnassign';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The updated page type. */
  pageType?: Maybe<PageType>;
  pageErrors: Array<PageError>;
};

/** Reorder the attributes of a page type. */
export type PageTypeReorderAttributes = {
  __typename?: 'PageTypeReorderAttributes';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Page type from which attributes are reordered. */
  pageType?: Maybe<PageType>;
  pageErrors: Array<PageError>;
};

/** Reorder page attribute values. */
export type PageReorderAttributeValues = {
  __typename?: 'PageReorderAttributeValues';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Page from which attribute values are reordered. */
  page?: Maybe<Page>;
  pageErrors: Array<PageError>;
};

/** Completes creating an order. */
export type DraftOrderComplete = {
  __typename?: 'DraftOrderComplete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Completed order. */
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderError = {
  __typename?: 'OrderError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: OrderErrorCode;
  /** Warehouse ID which causes the error. */
  warehouse?: Maybe<Scalars['ID']>;
  /** Order line ID which causes the error. */
  orderLine?: Maybe<Scalars['ID']>;
  /** List of product variants that are associated with the error */
  variants?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum OrderErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CannotCancelFulfillment = 'CANNOT_CANCEL_FULFILLMENT',
  CannotCancelOrder = 'CANNOT_CANCEL_ORDER',
  CannotDelete = 'CANNOT_DELETE',
  CannotRefund = 'CANNOT_REFUND',
  CaptureInactivePayment = 'CAPTURE_INACTIVE_PAYMENT',
  NotEditable = 'NOT_EDITABLE',
  FulfillOrderLine = 'FULFILL_ORDER_LINE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  NotFound = 'NOT_FOUND',
  OrderNoShippingAddress = 'ORDER_NO_SHIPPING_ADDRESS',
  PaymentError = 'PAYMENT_ERROR',
  PaymentMissing = 'PAYMENT_MISSING',
  Required = 'REQUIRED',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodRequired = 'SHIPPING_METHOD_REQUIRED',
  TaxError = 'TAX_ERROR',
  Unique = 'UNIQUE',
  VoidInactivePayment = 'VOID_INACTIVE_PAYMENT',
  ZeroQuantity = 'ZERO_QUANTITY',
  InvalidQuantity = 'INVALID_QUANTITY',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  NotAvailableInChannel = 'NOT_AVAILABLE_IN_CHANNEL',
  ChannelInactive = 'CHANNEL_INACTIVE'
}

/** Creates a new draft order. */
export type DraftOrderCreate = {
  __typename?: 'DraftOrderCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  order?: Maybe<Order>;
};

export type DraftOrderCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>;
  user?: Maybe<Scalars['ID']>;
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>;
  /** Discount amount for the order. */
  discount?: Maybe<Scalars['PositiveDecimal']>;
  /** Shipping address of the customer. */
  shippingAddress?: Maybe<AddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: Maybe<Scalars['ID']>;
  /** ID of the voucher associated with the order. */
  voucher?: Maybe<Scalars['ID']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: Maybe<Scalars['String']>;
  /** ID of the channel associated with the order. */
  channel?: Maybe<Scalars['ID']>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>;
  /** Variant line input consisting of variant ID and quantity of products. */
  lines?: Maybe<Array<Maybe<OrderLineCreateInput>>>;
};

export type OrderLineCreateInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int'];
  /** Product variant ID. */
  variantId: Scalars['ID'];
};

/** Deletes a draft order. */
export type DraftOrderDelete = {
  __typename?: 'DraftOrderDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  order?: Maybe<Order>;
};

/** Deletes draft orders. */
export type DraftOrderBulkDelete = {
  __typename?: 'DraftOrderBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  orderErrors: Array<OrderError>;
};

/** Deletes order lines. */
export type DraftOrderLinesBulkDelete = {
  __typename?: 'DraftOrderLinesBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  orderErrors: Array<OrderError>;
};

/** Create order lines for a draft order. */
export type DraftOrderLinesCreate = {
  __typename?: 'DraftOrderLinesCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A related draft order. */
  order?: Maybe<Order>;
  /** List of newly added order lines. */
  orderLines?: Maybe<Array<OrderLine>>;
  orderErrors: Array<OrderError>;
};

/** Deletes an order line from a draft order. */
export type DraftOrderLineDelete = {
  __typename?: 'DraftOrderLineDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A related draft order. */
  order?: Maybe<Order>;
  /** An order line that was deleted. */
  orderLine?: Maybe<OrderLine>;
  orderErrors: Array<OrderError>;
};

/** Updates an order line of a draft order. */
export type DraftOrderLineUpdate = {
  __typename?: 'DraftOrderLineUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A related draft order. */
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
  orderLine?: Maybe<OrderLine>;
};

export type OrderLineInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int'];
};

/** Updates a draft order. */
export type DraftOrderUpdate = {
  __typename?: 'DraftOrderUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  order?: Maybe<Order>;
};

export type DraftOrderInput = {
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>;
  user?: Maybe<Scalars['ID']>;
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>;
  /** Discount amount for the order. */
  discount?: Maybe<Scalars['PositiveDecimal']>;
  /** Shipping address of the customer. */
  shippingAddress?: Maybe<AddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: Maybe<Scalars['ID']>;
  /** ID of the voucher associated with the order. */
  voucher?: Maybe<Scalars['ID']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: Maybe<Scalars['String']>;
  /** ID of the channel associated with the order. */
  channel?: Maybe<Scalars['ID']>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>;
};

/** Adds note to the order. */
export type OrderAddNote = {
  __typename?: 'OrderAddNote';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Order with the note added. */
  order?: Maybe<Order>;
  /** Order note created. */
  event?: Maybe<OrderEvent>;
  orderErrors: Array<OrderError>;
};

export type OrderAddNoteInput = {
  /** Note message. */
  message: Scalars['String'];
};

/** Cancel an order. */
export type OrderCancel = {
  __typename?: 'OrderCancel';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Canceled order. */
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Capture an order. */
export type OrderCapture = {
  __typename?: 'OrderCapture';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Captured order. */
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Confirms an unconfirmed order by changing status to unfulfilled. */
export type OrderConfirm = {
  __typename?: 'OrderConfirm';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Creates new fulfillments for an order. */
export type OrderFulfill = {
  __typename?: 'OrderFulfill';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** List of created fulfillments. */
  fulfillments?: Maybe<Array<Maybe<Fulfillment>>>;
  /** Fulfilled order. */
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderFulfillInput = {
  /** List of items informing how to fulfill the order. */
  lines: Array<OrderFulfillLineInput>;
  /** If true, send an email notification to the customer. */
  notifyCustomer?: Maybe<Scalars['Boolean']>;
};

export type OrderFulfillLineInput = {
  /** The ID of the order line. */
  orderLineId?: Maybe<Scalars['ID']>;
  /** List of stock items to create. */
  stocks: Array<OrderFulfillStockInput>;
};

export type OrderFulfillStockInput = {
  /** The number of line items to be fulfilled from given warehouse. */
  quantity: Scalars['Int'];
  /** ID of the warehouse from which the item will be fulfilled. */
  warehouse: Scalars['ID'];
};

/** Cancels existing fulfillment and optionally restocks items. */
export type FulfillmentCancel = {
  __typename?: 'FulfillmentCancel';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A canceled fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was cancelled. */
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type FulfillmentCancelInput = {
  /** ID of warehouse where items will be restock. */
  warehouseId: Scalars['ID'];
};

/** Updates a fulfillment for an order. */
export type FulfillmentUpdateTracking = {
  __typename?: 'FulfillmentUpdateTracking';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A fulfillment with updated tracking. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order for which fulfillment was updated. */
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type FulfillmentUpdateTrackingInput = {
  /** Fulfillment tracking number. */
  trackingNumber?: Maybe<Scalars['String']>;
  /** If true, send an email notification to the customer. */
  notifyCustomer?: Maybe<Scalars['Boolean']>;
};

/** Refund products. */
export type FulfillmentRefundProducts = {
  __typename?: 'FulfillmentRefundProducts';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A refunded fulfillment. */
  fulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was refunded. */
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderRefundProductsInput = {
  /** List of unfulfilled lines to refund. */
  orderLines?: Maybe<Array<OrderRefundLineInput>>;
  /** List of fulfilled lines to refund. */
  fulfillmentLines?: Maybe<Array<OrderRefundFulfillmentLineInput>>;
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: Maybe<Scalars['PositiveDecimal']>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: Maybe<Scalars['Boolean']>;
};

export type OrderRefundLineInput = {
  /** The ID of the order line to refund. */
  orderLineId: Scalars['ID'];
  /** The number of items to be refunded. */
  quantity: Scalars['Int'];
};

export type OrderRefundFulfillmentLineInput = {
  /** The ID of the fulfillment line to refund. */
  fulfillmentLineId: Scalars['ID'];
  /** The number of items to be refunded. */
  quantity: Scalars['Int'];
};

/** Return products. */
export type FulfillmentReturnProducts = {
  __typename?: 'FulfillmentReturnProducts';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A return fulfillment. */
  returnFulfillment?: Maybe<Fulfillment>;
  /** A replace fulfillment. */
  replaceFulfillment?: Maybe<Fulfillment>;
  /** Order which fulfillment was returned. */
  order?: Maybe<Order>;
  /** A draft order which was created for products with replace flag. */
  replaceOrder?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderReturnProductsInput = {
  /** List of unfulfilled lines to return. */
  orderLines?: Maybe<Array<OrderReturnLineInput>>;
  /** List of fulfilled lines to return. */
  fulfillmentLines?: Maybe<Array<OrderReturnFulfillmentLineInput>>;
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: Maybe<Scalars['PositiveDecimal']>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: Maybe<Scalars['Boolean']>;
  /** If true, Saleor will call refund action for all lines. */
  refund?: Maybe<Scalars['Boolean']>;
};

export type OrderReturnLineInput = {
  /** The ID of the order line to return. */
  orderLineId: Scalars['ID'];
  /** The number of items to be returned. */
  quantity: Scalars['Int'];
  /** Determines, if the line should be added to replace order. */
  replace?: Maybe<Scalars['Boolean']>;
};

export type OrderReturnFulfillmentLineInput = {
  /** The ID of the fulfillment line to return. */
  fulfillmentLineId: Scalars['ID'];
  /** The number of items to be returned. */
  quantity: Scalars['Int'];
  /** Determines, if the line should be added to replace order. */
  replace?: Maybe<Scalars['Boolean']>;
};

/** Mark order as manually paid. */
export type OrderMarkAsPaid = {
  __typename?: 'OrderMarkAsPaid';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Order marked as paid. */
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Refund an order. */
export type OrderRefund = {
  __typename?: 'OrderRefund';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A refunded order. */
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Updates an order. */
export type OrderUpdate = {
  __typename?: 'OrderUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  order?: Maybe<Order>;
};

export type OrderUpdateInput = {
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>;
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>;
  /** Shipping address of the customer. */
  shippingAddress?: Maybe<AddressInput>;
};

/** Updates a shipping method of the order. */
export type OrderUpdateShipping = {
  __typename?: 'OrderUpdateShipping';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Order with updated shipping method. */
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderUpdateShippingInput = {
  /** ID of the selected shipping method. */
  shippingMethod?: Maybe<Scalars['ID']>;
};

/** Void an order. */
export type OrderVoid = {
  __typename?: 'OrderVoid';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A voided order. */
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Cancels orders. */
export type OrderBulkCancel = {
  __typename?: 'OrderBulkCancel';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  orderErrors: Array<OrderError>;
};

/** Delete metadata of an object. */
export type DeleteMetadata = {
  __typename?: 'DeleteMetadata';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  metadataErrors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
};

export type MetadataError = {
  __typename?: 'MetadataError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: MetadataErrorCode;
};

/** An enumeration. */
export enum MetadataErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

/** Delete object's private metadata. */
export type DeletePrivateMetadata = {
  __typename?: 'DeletePrivateMetadata';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  metadataErrors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
};

/** Updates metadata of an object. */
export type UpdateMetadata = {
  __typename?: 'UpdateMetadata';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  metadataErrors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
};

export type MetadataInput = {
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value: Scalars['String'];
};

/** Updates private metadata of an object. */
export type UpdatePrivateMetadata = {
  __typename?: 'UpdatePrivateMetadata';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  metadataErrors: Array<MetadataError>;
  item?: Maybe<ObjectWithMetadata>;
};

/** Assigns storefront's navigation menus. */
export type AssignNavigation = {
  __typename?: 'AssignNavigation';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Assigned navigation menu. */
  menu?: Maybe<Menu>;
  menuErrors: Array<MenuError>;
};

export type MenuError = {
  __typename?: 'MenuError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: MenuErrorCode;
};

/** An enumeration. */
export enum MenuErrorCode {
  CannotAssignNode = 'CANNOT_ASSIGN_NODE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidMenuItem = 'INVALID_MENU_ITEM',
  NoMenuItemProvided = 'NO_MENU_ITEM_PROVIDED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  TooManyMenuItems = 'TOO_MANY_MENU_ITEMS',
  Unique = 'UNIQUE'
}

export enum NavigationType {
  /** Main storefront navigation. */
  Main = 'MAIN',
  /** Secondary storefront navigation. */
  Secondary = 'SECONDARY'
}

/** Creates a new Menu. */
export type MenuCreate = {
  __typename?: 'MenuCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menu?: Maybe<Menu>;
};

export type MenuCreateInput = {
  /** Name of the menu. */
  name: Scalars['String'];
  /** Slug of the menu. Will be generated if not provided. */
  slug?: Maybe<Scalars['String']>;
  /** List of menu items. */
  items?: Maybe<Array<Maybe<MenuItemInput>>>;
};

export type MenuItemInput = {
  /** Name of the menu item. */
  name?: Maybe<Scalars['String']>;
  /** URL of the pointed item. */
  url?: Maybe<Scalars['String']>;
  /** Category to which item points. */
  category?: Maybe<Scalars['ID']>;
  /** Collection to which item points. */
  collection?: Maybe<Scalars['ID']>;
  /** Page to which item points. */
  page?: Maybe<Scalars['ID']>;
};

/** Deletes a menu. */
export type MenuDelete = {
  __typename?: 'MenuDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menu?: Maybe<Menu>;
};

/** Deletes menus. */
export type MenuBulkDelete = {
  __typename?: 'MenuBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  menuErrors: Array<MenuError>;
};

/** Updates a menu. */
export type MenuUpdate = {
  __typename?: 'MenuUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menu?: Maybe<Menu>;
};

export type MenuInput = {
  /** Name of the menu. */
  name?: Maybe<Scalars['String']>;
  /** Slug of the menu. */
  slug?: Maybe<Scalars['String']>;
};

/** Creates a new menu item. */
export type MenuItemCreate = {
  __typename?: 'MenuItemCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export type MenuItemCreateInput = {
  /** Name of the menu item. */
  name: Scalars['String'];
  /** URL of the pointed item. */
  url?: Maybe<Scalars['String']>;
  /** Category to which item points. */
  category?: Maybe<Scalars['ID']>;
  /** Collection to which item points. */
  collection?: Maybe<Scalars['ID']>;
  /** Page to which item points. */
  page?: Maybe<Scalars['ID']>;
  /** Menu to which item belongs. */
  menu: Scalars['ID'];
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parent?: Maybe<Scalars['ID']>;
};

/** Deletes a menu item. */
export type MenuItemDelete = {
  __typename?: 'MenuItemDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

/** Deletes menu items. */
export type MenuItemBulkDelete = {
  __typename?: 'MenuItemBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  menuErrors: Array<MenuError>;
};

/** Updates a menu item. */
export type MenuItemUpdate = {
  __typename?: 'MenuItemUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

/** Creates/Updates translations for Menu Item. */
export type MenuItemTranslate = {
  __typename?: 'MenuItemTranslate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  menuItem?: Maybe<MenuItem>;
};

/** Moves items of menus. */
export type MenuItemMove = {
  __typename?: 'MenuItemMove';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Assigned menu to move within. */
  menu?: Maybe<Menu>;
  menuErrors: Array<MenuError>;
};

export type MenuItemMoveInput = {
  /** The menu item ID to move. */
  itemId: Scalars['ID'];
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parentId?: Maybe<Scalars['ID']>;
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Request an invoice for the order using plugin. */
export type InvoiceRequest = {
  __typename?: 'InvoiceRequest';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Order related to an invoice. */
  order?: Maybe<Order>;
  invoiceErrors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
};

export type InvoiceError = {
  __typename?: 'InvoiceError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: InvoiceErrorCode;
};

/** An enumeration. */
export enum InvoiceErrorCode {
  Required = 'REQUIRED',
  NotReady = 'NOT_READY',
  UrlNotSet = 'URL_NOT_SET',
  EmailNotSet = 'EMAIL_NOT_SET',
  NumberNotSet = 'NUMBER_NOT_SET',
  NotFound = 'NOT_FOUND',
  InvalidStatus = 'INVALID_STATUS'
}

/** Requests deletion of an invoice. */
export type InvoiceRequestDelete = {
  __typename?: 'InvoiceRequestDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  invoiceErrors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
};

/** Creates a ready to send invoice. */
export type InvoiceCreate = {
  __typename?: 'InvoiceCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  invoiceErrors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
};

export type InvoiceCreateInput = {
  /** Invoice number. */
  number: Scalars['String'];
  /** URL of an invoice to download. */
  url: Scalars['String'];
};

/** Deletes an invoice. */
export type InvoiceDelete = {
  __typename?: 'InvoiceDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  invoiceErrors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
};

/** Updates an invoice. */
export type InvoiceUpdate = {
  __typename?: 'InvoiceUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  invoiceErrors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
};

export type UpdateInvoiceInput = {
  /** Invoice number */
  number?: Maybe<Scalars['String']>;
  /** URL of an invoice to download. */
  url?: Maybe<Scalars['String']>;
};

/** Send an invoice by email. */
export type InvoiceSendEmail = {
  __typename?: 'InvoiceSendEmail';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  invoiceErrors: Array<InvoiceError>;
  invoice?: Maybe<Invoice>;
};

/** Activate a gift card. */
export type GiftCardActivate = {
  __typename?: 'GiftCardActivate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A gift card to activate. */
  giftCard?: Maybe<GiftCard>;
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardError = {
  __typename?: 'GiftCardError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: GiftCardErrorCode;
};

/** An enumeration. */
export enum GiftCardErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Creates a new gift card. */
export type GiftCardCreate = {
  __typename?: 'GiftCardCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  giftCardErrors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
};

export type GiftCardCreateInput = {
  /** Start date of the gift card in ISO 8601 format. */
  startDate?: Maybe<Scalars['Date']>;
  /** End date of the gift card in ISO 8601 format. */
  endDate?: Maybe<Scalars['Date']>;
  /** Value of the gift card. */
  balance?: Maybe<Scalars['PositiveDecimal']>;
  /** The customer's email of the gift card buyer. */
  userEmail?: Maybe<Scalars['String']>;
  /** Code to use the gift card. */
  code?: Maybe<Scalars['String']>;
};

/** Deactivate a gift card. */
export type GiftCardDeactivate = {
  __typename?: 'GiftCardDeactivate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A gift card to deactivate. */
  giftCard?: Maybe<GiftCard>;
  giftCardErrors: Array<GiftCardError>;
};

/** Update a gift card. */
export type GiftCardUpdate = {
  __typename?: 'GiftCardUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  giftCardErrors: Array<GiftCardError>;
  giftCard?: Maybe<GiftCard>;
};

export type GiftCardUpdateInput = {
  /** Start date of the gift card in ISO 8601 format. */
  startDate?: Maybe<Scalars['Date']>;
  /** End date of the gift card in ISO 8601 format. */
  endDate?: Maybe<Scalars['Date']>;
  /** Value of the gift card. */
  balance?: Maybe<Scalars['PositiveDecimal']>;
  /** The customer's email of the gift card buyer. */
  userEmail?: Maybe<Scalars['String']>;
};

/** Update plugin configuration. */
export type PluginUpdate = {
  __typename?: 'PluginUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  plugin?: Maybe<Plugin>;
  pluginsErrors: Array<PluginError>;
};

export type PluginError = {
  __typename?: 'PluginError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: PluginErrorCode;
};

/** An enumeration. */
export enum PluginErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  PluginMisconfigured = 'PLUGIN_MISCONFIGURED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PluginUpdateInput = {
  /** Indicates whether the plugin should be enabled. */
  active?: Maybe<Scalars['Boolean']>;
  /** Configuration of the plugin. */
  configuration?: Maybe<Array<Maybe<ConfigurationItemInput>>>;
};

export type ConfigurationItemInput = {
  /** Name of the field to update. */
  name: Scalars['String'];
  /** Value of the given field to update. */
  value?: Maybe<Scalars['String']>;
};

/** Creates a new sale. */
export type SaleCreate = {
  __typename?: 'SaleCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  discountErrors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

export type DiscountError = {
  __typename?: 'DiscountError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** List of products IDs which causes the error. */
  products?: Maybe<Array<Scalars['ID']>>;
  /** The error code. */
  code: DiscountErrorCode;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum DiscountErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM'
}

export type SaleInput = {
  /** Voucher name. */
  name?: Maybe<Scalars['String']>;
  /** Fixed or percentage. */
  type?: Maybe<DiscountValueTypeEnum>;
  /** Value of the voucher. */
  value?: Maybe<Scalars['PositiveDecimal']>;
  /** Products related to the discount. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Categories related to the discount. */
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Collections related to the discount. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: Maybe<Scalars['DateTime']>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: Maybe<Scalars['DateTime']>;
};

/** Deletes a sale. */
export type SaleDelete = {
  __typename?: 'SaleDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  discountErrors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

/** Deletes sales. */
export type SaleBulkDelete = {
  __typename?: 'SaleBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  discountErrors: Array<DiscountError>;
};

/** Updates a sale. */
export type SaleUpdate = {
  __typename?: 'SaleUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  discountErrors: Array<DiscountError>;
  sale?: Maybe<Sale>;
};

/** Adds products, categories, collections to a voucher. */
export type SaleAddCatalogues = {
  __typename?: 'SaleAddCatalogues';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Sale of which catalogue IDs will be modified. */
  sale?: Maybe<Sale>;
  discountErrors: Array<DiscountError>;
};

export type CatalogueInput = {
  /** Products related to the discount. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Categories related to the discount. */
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Collections related to the discount. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Removes products, categories, collections from a sale. */
export type SaleRemoveCatalogues = {
  __typename?: 'SaleRemoveCatalogues';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Sale of which catalogue IDs will be modified. */
  sale?: Maybe<Sale>;
  discountErrors: Array<DiscountError>;
};

/** Creates/updates translations for a sale. */
export type SaleTranslate = {
  __typename?: 'SaleTranslate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  sale?: Maybe<Sale>;
};

/** Manage sale's availability in channels. */
export type SaleChannelListingUpdate = {
  __typename?: 'SaleChannelListingUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated sale instance. */
  sale?: Maybe<Sale>;
  discountErrors: Array<DiscountError>;
};

export type SaleChannelListingInput = {
  /** List of channels to which the sale should be assigned. */
  addChannels?: Maybe<Array<SaleChannelListingAddInput>>;
  /** List of channels from which the sale should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>;
};

export type SaleChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** The value of the discount. */
  discountValue: Scalars['PositiveDecimal'];
};

/** Creates a new voucher. */
export type VoucherCreate = {
  __typename?: 'VoucherCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  discountErrors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherInput = {
  /** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
  type?: Maybe<VoucherTypeEnum>;
  /** Voucher name. */
  name?: Maybe<Scalars['String']>;
  /** Code to use the voucher. */
  code?: Maybe<Scalars['String']>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: Maybe<Scalars['DateTime']>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Choices: fixed or percentage. */
  discountValueType?: Maybe<DiscountValueTypeEnum>;
  /** Products discounted by the voucher. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Collections discounted by the voucher. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Categories discounted by the voucher. */
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Minimal quantity of checkout items required to apply the voucher. */
  minCheckoutItemsQuantity?: Maybe<Scalars['Int']>;
  /** Country codes that can be used with the shipping voucher. */
  countries?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Voucher should be applied to the cheapest item or entire order. */
  applyOncePerOrder?: Maybe<Scalars['Boolean']>;
  /** Voucher should be applied once per customer. */
  applyOncePerCustomer?: Maybe<Scalars['Boolean']>;
  /** Limit number of times this voucher can be used in total. */
  usageLimit?: Maybe<Scalars['Int']>;
};

/** Deletes a voucher. */
export type VoucherDelete = {
  __typename?: 'VoucherDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  discountErrors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

/** Deletes vouchers. */
export type VoucherBulkDelete = {
  __typename?: 'VoucherBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  discountErrors: Array<DiscountError>;
};

/** Updates a voucher. */
export type VoucherUpdate = {
  __typename?: 'VoucherUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  discountErrors: Array<DiscountError>;
  voucher?: Maybe<Voucher>;
};

/** Adds products, categories, collections to a voucher. */
export type VoucherAddCatalogues = {
  __typename?: 'VoucherAddCatalogues';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher?: Maybe<Voucher>;
  discountErrors: Array<DiscountError>;
};

/** Removes products, categories, collections from a voucher. */
export type VoucherRemoveCatalogues = {
  __typename?: 'VoucherRemoveCatalogues';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher?: Maybe<Voucher>;
  discountErrors: Array<DiscountError>;
};

/** Creates/Updates translations for Voucher. */
export type VoucherTranslate = {
  __typename?: 'VoucherTranslate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  voucher?: Maybe<Voucher>;
};

/** Manage voucher's availability in channels. */
export type VoucherChannelListingUpdate = {
  __typename?: 'VoucherChannelListingUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated voucher instance. */
  voucher?: Maybe<Voucher>;
  discountErrors: Array<DiscountError>;
};

export type VoucherChannelListingInput = {
  /** List of channels to which the voucher should be assigned. */
  addChannels?: Maybe<Array<VoucherChannelListingAddInput>>;
  /** List of channels from which the voucher should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>;
};

export type VoucherChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID'];
  /** Value of the voucher. */
  discountValue?: Maybe<Scalars['PositiveDecimal']>;
  /** Min purchase amount required to apply the voucher. */
  minAmountSpent?: Maybe<Scalars['PositiveDecimal']>;
};

/** Export products to csv file. */
export type ExportProducts = {
  __typename?: 'ExportProducts';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created export file job which is responsible for export data. */
  exportFile?: Maybe<ExportFile>;
  exportErrors: Array<ExportError>;
};

export type ExportError = {
  __typename?: 'ExportError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: ExportErrorCode;
};

/** An enumeration. */
export enum ExportErrorCode {
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type ExportProductsInput = {
  /** Determine which products should be exported. */
  scope: ExportScope;
  /** Filtering options for products. */
  filter?: Maybe<ProductFilterInput>;
  /** List of products IDS to export. */
  ids?: Maybe<Array<Scalars['ID']>>;
  /** Input with info about fields which should be exported. */
  exportInfo?: Maybe<ExportInfoInput>;
  /** Type of exported file. */
  fileType: FileTypesEnum;
};

export enum ExportScope {
  /** Export all products. */
  All = 'ALL',
  /** Export products with given ids. */
  Ids = 'IDS',
  /** Export the filtered products. */
  Filter = 'FILTER'
}

export type ExportInfoInput = {
  /** List of attribute ids witch should be exported. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of warehouse ids witch should be exported. */
  warehouses?: Maybe<Array<Scalars['ID']>>;
  /** List of channels ids which should be exported. */
  channels?: Maybe<Array<Scalars['ID']>>;
  /** List of product fields witch should be exported. */
  fields?: Maybe<Array<ProductFieldEnum>>;
};

export enum ProductFieldEnum {
  Name = 'NAME',
  Description = 'DESCRIPTION',
  ProductType = 'PRODUCT_TYPE',
  Category = 'CATEGORY',
  Visible = 'VISIBLE',
  ProductWeight = 'PRODUCT_WEIGHT',
  Collections = 'COLLECTIONS',
  ChargeTaxes = 'CHARGE_TAXES',
  ProductImages = 'PRODUCT_IMAGES',
  VariantSku = 'VARIANT_SKU',
  VariantWeight = 'VARIANT_WEIGHT',
  VariantImages = 'VARIANT_IMAGES'
}

/** An enumeration. */
export enum FileTypesEnum {
  Csv = 'CSV',
  Xlsx = 'XLSX'
}

/** Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type FileUpload = {
  __typename?: 'FileUpload';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  uploadedFile?: Maybe<File>;
  uploadErrors: Array<UploadError>;
};

export type UploadError = {
  __typename?: 'UploadError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: UploadErrorCode;
};

/** An enumeration. */
export enum UploadErrorCode {
  GraphqlError = 'GRAPHQL_ERROR'
}

/** Adds a gift card or a voucher to a checkout. */
export type CheckoutAddPromoCode = {
  __typename?: 'CheckoutAddPromoCode';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The checkout with the added gift card or voucher. */
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

export type CheckoutError = {
  __typename?: 'CheckoutError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: CheckoutErrorCode;
  /** List of varint IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum CheckoutErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CheckoutNotFullyPaid = 'CHECKOUT_NOT_FULLY_PAID',
  GraphqlError = 'GRAPHQL_ERROR',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  NotFound = 'NOT_FOUND',
  PaymentError = 'PAYMENT_ERROR',
  QuantityGreaterThanLimit = 'QUANTITY_GREATER_THAN_LIMIT',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  ShippingNotRequired = 'SHIPPING_NOT_REQUIRED',
  TaxError = 'TAX_ERROR',
  Unique = 'UNIQUE',
  VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE',
  ZeroQuantity = 'ZERO_QUANTITY',
  MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
  ChannelInactive = 'CHANNEL_INACTIVE'
}

/** Update billing address in the existing checkout. */
export type CheckoutBillingAddressUpdate = {
  __typename?: 'CheckoutBillingAddressUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
export type CheckoutComplete = {
  __typename?: 'CheckoutComplete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Placed order. */
  order?: Maybe<Order>;
  /** Set to true if payment needs to be confirmed before checkout is complete. */
  confirmationNeeded: Scalars['Boolean'];
  /** Confirmation data used to process additional authorization steps. */
  confirmationData?: Maybe<Scalars['JSONString']>;
  checkoutErrors: Array<CheckoutError>;
};

/** Create a new checkout. */
export type CheckoutCreate = {
  __typename?: 'CheckoutCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout. */
  created?: Maybe<Scalars['Boolean']>;
  checkoutErrors: Array<CheckoutError>;
  checkout?: Maybe<Checkout>;
};

export type CheckoutCreateInput = {
  /** Slug of a channel in which to create a checkout. */
  channel?: Maybe<Scalars['String']>;
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<Maybe<CheckoutLineInput>>;
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
  /** The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. */
  shippingAddress?: Maybe<AddressInput>;
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>;
};

export type CheckoutLineInput = {
  /** The number of items purchased. */
  quantity: Scalars['Int'];
  /** ID of the product variant. */
  variantId: Scalars['ID'];
};

/** Sets the customer as the owner of the checkout. */
export type CheckoutCustomerAttach = {
  __typename?: 'CheckoutCustomerAttach';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Removes the user assigned as the owner of the checkout. */
export type CheckoutCustomerDetach = {
  __typename?: 'CheckoutCustomerDetach';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Updates email address in the existing checkout object. */
export type CheckoutEmailUpdate = {
  __typename?: 'CheckoutEmailUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Deletes a CheckoutLine. */
export type CheckoutLineDelete = {
  __typename?: 'CheckoutLineDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Adds a checkout line to the existing checkout. */
export type CheckoutLinesAdd = {
  __typename?: 'CheckoutLinesAdd';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Updates checkout line in the existing checkout. */
export type CheckoutLinesUpdate = {
  __typename?: 'CheckoutLinesUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Remove a gift card or a voucher from a checkout. */
export type CheckoutRemovePromoCode = {
  __typename?: 'CheckoutRemovePromoCode';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The checkout with the removed gift card or voucher. */
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Create a new payment for given checkout. */
export type CheckoutPaymentCreate = {
  __typename?: 'CheckoutPaymentCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Related checkout object. */
  checkout?: Maybe<Checkout>;
  /** A newly created payment. */
  payment?: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
};

export type PaymentInput = {
  /** A gateway to use with that payment. */
  gateway: Scalars['String'];
  /** Client-side generated payment token, representing customer's billing data in a secure manner. */
  token?: Maybe<Scalars['String']>;
  /** Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used. */
  amount?: Maybe<Scalars['PositiveDecimal']>;
  /** [Deprecated] Billing address. If empty, the billing address associated with the checkout instance will be used. Use `checkoutCreate` or `checkoutBillingAddressUpdate` mutations to set it. This field will be removed after 2020-07-31. */
  billingAddress?: Maybe<AddressInput>;
  /** URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided. */
  returnUrl?: Maybe<Scalars['String']>;
};

/** Update shipping address in the existing checkout. */
export type CheckoutShippingAddressUpdate = {
  __typename?: 'CheckoutShippingAddressUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Updates the shipping address of the checkout. */
export type CheckoutShippingMethodUpdate = {
  __typename?: 'CheckoutShippingMethodUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Creates new channel. */
export type ChannelCreate = {
  __typename?: 'ChannelCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  channelErrors: Array<ChannelError>;
  channel?: Maybe<Channel>;
};

export type ChannelError = {
  __typename?: 'ChannelError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: ChannelErrorCode;
};

/** An enumeration. */
export enum ChannelErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  ChannelTargetIdMustBeDifferent = 'CHANNEL_TARGET_ID_MUST_BE_DIFFERENT',
  ChannelsCurrencyMustBeTheSame = 'CHANNELS_CURRENCY_MUST_BE_THE_SAME',
  ChannelWithOrders = 'CHANNEL_WITH_ORDERS'
}

export type ChannelCreateInput = {
  /** isActive flag. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Name of the channel. */
  name: Scalars['String'];
  /** Slug of the channel. */
  slug: Scalars['String'];
  /** Currency of the channel. */
  currencyCode: Scalars['String'];
};

/** Update a channel. */
export type ChannelUpdate = {
  __typename?: 'ChannelUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  channelErrors: Array<ChannelError>;
  channel?: Maybe<Channel>;
};

export type ChannelUpdateInput = {
  /** isActive flag. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Name of the channel. */
  name?: Maybe<Scalars['String']>;
  /** Slug of the channel. */
  slug?: Maybe<Scalars['String']>;
};

/** Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed. */
export type ChannelDelete = {
  __typename?: 'ChannelDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  channelErrors: Array<ChannelError>;
  channel?: Maybe<Channel>;
};

export type ChannelDeleteInput = {
  /** ID of channel to migrate orders from origin channel. */
  targetChannel: Scalars['ID'];
};

/** Activate a channel. */
export type ChannelActivate = {
  __typename?: 'ChannelActivate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Activated channel. */
  channel?: Maybe<Channel>;
  channelErrors: Array<ChannelError>;
};

/** Deactivate a channel. */
export type ChannelDeactivate = {
  __typename?: 'ChannelDeactivate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Deactivated channel. */
  channel?: Maybe<Channel>;
  channelErrors: Array<ChannelError>;
};

/** Creates an attribute. */
export type AttributeCreate = {
  __typename?: 'AttributeCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  attribute?: Maybe<Attribute>;
  attributeErrors: Array<AttributeError>;
};

export type AttributeError = {
  __typename?: 'AttributeError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: AttributeErrorCode;
};

/** An enumeration. */
export enum AttributeErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type AttributeCreateInput = {
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>;
  /** The entity type which can be used as a reference. */
  entityType?: Maybe<AttributeEntityTypeEnum>;
  /** Name of an attribute displayed in the interface. */
  name: Scalars['String'];
  /** Internal representation of an attribute name. */
  slug?: Maybe<Scalars['String']>;
  /** The attribute type. */
  type: AttributeTypeEnum;
  /** List of attribute's values. */
  values?: Maybe<Array<Maybe<AttributeValueCreateInput>>>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: Maybe<Scalars['Boolean']>;
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition?: Maybe<Scalars['Int']>;
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid?: Maybe<Scalars['Boolean']>;
};

export type AttributeValueCreateInput = {
  /** Name of a value displayed in the interface. */
  name: Scalars['String'];
};

/** Deletes an attribute. */
export type AttributeDelete = {
  __typename?: 'AttributeDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  attributeErrors: Array<AttributeError>;
  attribute?: Maybe<Attribute>;
};

/** Updates attribute. */
export type AttributeUpdate = {
  __typename?: 'AttributeUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  attribute?: Maybe<Attribute>;
  attributeErrors: Array<AttributeError>;
};

export type AttributeUpdateInput = {
  /** Name of an attribute displayed in the interface. */
  name?: Maybe<Scalars['String']>;
  /** Internal representation of an attribute name. */
  slug?: Maybe<Scalars['String']>;
  /** IDs of values to be removed from this attribute. */
  removeValues?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** New values to be created for this attribute. */
  addValues?: Maybe<Array<Maybe<AttributeValueCreateInput>>>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: Maybe<Scalars['Boolean']>;
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition?: Maybe<Scalars['Int']>;
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid?: Maybe<Scalars['Boolean']>;
};

/** Creates/Updates translations for attribute. */
export type AttributeTranslate = {
  __typename?: 'AttributeTranslate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  attribute?: Maybe<Attribute>;
};

/** Deletes attributes. */
export type AttributeBulkDelete = {
  __typename?: 'AttributeBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  attributeErrors: Array<AttributeError>;
};

/** Deletes values of attributes. */
export type AttributeValueBulkDelete = {
  __typename?: 'AttributeValueBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  attributeErrors: Array<AttributeError>;
};

/** Creates a value for an attribute. */
export type AttributeValueCreate = {
  __typename?: 'AttributeValueCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The updated attribute. */
  attribute?: Maybe<Attribute>;
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
};

/** Deletes a value of an attribute. */
export type AttributeValueDelete = {
  __typename?: 'AttributeValueDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The updated attribute. */
  attribute?: Maybe<Attribute>;
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
};

/** Updates value of an attribute. */
export type AttributeValueUpdate = {
  __typename?: 'AttributeValueUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The updated attribute. */
  attribute?: Maybe<Attribute>;
  attributeErrors: Array<AttributeError>;
  attributeValue?: Maybe<AttributeValue>;
};

/** Creates/Updates translations for attribute value. */
export type AttributeValueTranslate = {
  __typename?: 'AttributeValueTranslate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  attributeValue?: Maybe<AttributeValue>;
};

/** Reorder the values of an attribute. */
export type AttributeReorderValues = {
  __typename?: 'AttributeReorderValues';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Attribute from which values are reordered. */
  attribute?: Maybe<Attribute>;
  attributeErrors: Array<AttributeError>;
};

/** Creates a new app. */
export type AppCreate = {
  __typename?: 'AppCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created authentication token. */
  authToken?: Maybe<Scalars['String']>;
  appErrors: Array<AppError>;
  app?: Maybe<App>;
};

export type AppError = {
  __typename?: 'AppError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: AppErrorCode;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>;
};

/** An enumeration. */
export enum AppErrorCode {
  Forbidden = 'FORBIDDEN',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidStatus = 'INVALID_STATUS',
  InvalidPermission = 'INVALID_PERMISSION',
  InvalidUrlFormat = 'INVALID_URL_FORMAT',
  InvalidManifestFormat = 'INVALID_MANIFEST_FORMAT',
  ManifestUrlCantConnect = 'MANIFEST_URL_CANT_CONNECT',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  OutOfScopeApp = 'OUT_OF_SCOPE_APP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION'
}

export type AppInput = {
  /** Name of the app. */
  name?: Maybe<Scalars['String']>;
  /** DEPRECATED: Use the `appActivate` and `appDeactivate` mutations instead. This field will be removed after 2020-07-31. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** List of permission code names to assign to this app. */
  permissions?: Maybe<Array<Maybe<PermissionEnum>>>;
};

/** Updates an existing app. */
export type AppUpdate = {
  __typename?: 'AppUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  app?: Maybe<App>;
};

/** Deletes an app. */
export type AppDelete = {
  __typename?: 'AppDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  app?: Maybe<App>;
};

/** Creates a new token. */
export type AppTokenCreate = {
  __typename?: 'AppTokenCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created authentication token. */
  authToken?: Maybe<Scalars['String']>;
  appErrors: Array<AppError>;
  appToken?: Maybe<AppToken>;
};

export type AppTokenInput = {
  /** Name of the token. */
  name?: Maybe<Scalars['String']>;
  /** ID of app. */
  app: Scalars['ID'];
};

/** Deletes an authentication token assigned to app. */
export type AppTokenDelete = {
  __typename?: 'AppTokenDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  appToken?: Maybe<AppToken>;
};

/** Verify provided app token. */
export type AppTokenVerify = {
  __typename?: 'AppTokenVerify';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Determine if token is valid or not. */
  valid: Scalars['Boolean'];
  appErrors: Array<AppError>;
};

/** Install new app by using app manifest. */
export type AppInstall = {
  __typename?: 'AppInstall';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
};

export type AppInstallInput = {
  /** Name of the app to install. */
  appName?: Maybe<Scalars['String']>;
  /** Url to app's manifest in JSON format. */
  manifestUrl?: Maybe<Scalars['String']>;
  /** Determine if app will be set active or not. */
  activateAfterInstallation?: Maybe<Scalars['Boolean']>;
  /** List of permission code names to assign to this app. */
  permissions?: Maybe<Array<Maybe<PermissionEnum>>>;
};

/** Retry failed installation of new app. */
export type AppRetryInstall = {
  __typename?: 'AppRetryInstall';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
};

/** Delete failed installation. */
export type AppDeleteFailedInstallation = {
  __typename?: 'AppDeleteFailedInstallation';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
};

/** Fetch and validate manifest. */
export type AppFetchManifest = {
  __typename?: 'AppFetchManifest';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  manifest?: Maybe<Manifest>;
  appErrors: Array<AppError>;
};

/** The manifest definition. */
export type Manifest = {
  __typename?: 'Manifest';
  identifier: Scalars['String'];
  version: Scalars['String'];
  name: Scalars['String'];
  about?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  appUrl?: Maybe<Scalars['String']>;
  configurationUrl?: Maybe<Scalars['String']>;
  tokenTargetUrl?: Maybe<Scalars['String']>;
  dataPrivacy?: Maybe<Scalars['String']>;
  dataPrivacyUrl?: Maybe<Scalars['String']>;
  homepageUrl?: Maybe<Scalars['String']>;
  supportUrl?: Maybe<Scalars['String']>;
};

/** Activate the app. */
export type AppActivate = {
  __typename?: 'AppActivate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  app?: Maybe<App>;
};

/** Deactivate the app. */
export type AppDeactivate = {
  __typename?: 'AppDeactivate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  app?: Maybe<App>;
};

/** Create JWT token. */
export type CreateToken = {
  __typename?: 'CreateToken';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
};

export type AccountError = {
  __typename?: 'AccountError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: AccountErrorCode;
};

/** An enumeration. */
export enum AccountErrorCode {
  ActivateOwnAccount = 'ACTIVATE_OWN_ACCOUNT',
  ActivateSuperuserAccount = 'ACTIVATE_SUPERUSER_ACCOUNT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  DeactivateOwnAccount = 'DEACTIVATE_OWN_ACCOUNT',
  DeactivateSuperuserAccount = 'DEACTIVATE_SUPERUSER_ACCOUNT',
  DeleteNonStaffUser = 'DELETE_NON_STAFF_USER',
  DeleteOwnAccount = 'DELETE_OWN_ACCOUNT',
  DeleteStaffAccount = 'DELETE_STAFF_ACCOUNT',
  DeleteSuperuserAccount = 'DELETE_SUPERUSER_ACCOUNT',
  GraphqlError = 'GRAPHQL_ERROR',
  Inactive = 'INACTIVE',
  Invalid = 'INVALID',
  InvalidPassword = 'INVALID_PASSWORD',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  NotFound = 'NOT_FOUND',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  OutOfScopeGroup = 'OUT_OF_SCOPE_GROUP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  PasswordEntirelyNumeric = 'PASSWORD_ENTIRELY_NUMERIC',
  PasswordTooCommon = 'PASSWORD_TOO_COMMON',
  PasswordTooShort = 'PASSWORD_TOO_SHORT',
  PasswordTooSimilar = 'PASSWORD_TOO_SIMILAR',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
  JwtInvalidToken = 'JWT_INVALID_TOKEN',
  JwtDecodeError = 'JWT_DECODE_ERROR',
  JwtMissingToken = 'JWT_MISSING_TOKEN',
  JwtInvalidCsrfToken = 'JWT_INVALID_CSRF_TOKEN'
}

/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Verify JWT token. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** User assigned to token. */
  user?: Maybe<User>;
  /** Determine if token is valid or not. */
  isValid: Scalars['Boolean'];
  /** JWT payload. */
  payload?: Maybe<Scalars['GenericScalar']>;
  accountErrors: Array<AccountError>;
};


/** Deactivate all JWT tokens of the currently authenticated user. */
export type DeactivateAllUserTokens = {
  __typename?: 'DeactivateAllUserTokens';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
};

/** Sends an email with the account password modification link. */
export type RequestPasswordReset = {
  __typename?: 'RequestPasswordReset';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
};

/** Confirm user account with token sent by email during registration. */
export type ConfirmAccount = {
  __typename?: 'ConfirmAccount';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An activated user account. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
export type SetPassword = {
  __typename?: 'SetPassword';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Change the password of the logged in user. */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance with a new password. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Request email change of the logged in user. */
export type RequestEmailChange = {
  __typename?: 'RequestEmailChange';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Confirm the email change of the logged-in user. */
export type ConfirmEmailChange = {
  __typename?: 'ConfirmEmailChange';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance with a new email. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Create a new address for the customer. */
export type AccountAddressCreate = {
  __typename?: 'AccountAddressCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance for which the address was created. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
};

/** An enumeration. */
export enum AddressTypeEnum {
  Billing = 'BILLING',
  Shipping = 'SHIPPING'
}

/** Updates an address of the logged-in user. */
export type AccountAddressUpdate = {
  __typename?: 'AccountAddressUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user object for which the address was edited. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
};

/** Delete an address of the logged-in user. */
export type AccountAddressDelete = {
  __typename?: 'AccountAddressDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance for which the address was deleted. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
};

/** Sets a default address for the authenticated user. */
export type AccountSetDefaultAddress = {
  __typename?: 'AccountSetDefaultAddress';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Register a new user. */
export type AccountRegister = {
  __typename?: 'AccountRegister';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Informs whether users need to confirm their email address. */
  requiresConfirmation?: Maybe<Scalars['Boolean']>;
  accountErrors: Array<AccountError>;
  user?: Maybe<User>;
};

export type AccountRegisterInput = {
  /** The email address of the user. */
  email: Scalars['String'];
  /** Password. */
  password: Scalars['String'];
  /** Base of frontend URL that will be needed to create confirmation URL. */
  redirectUrl?: Maybe<Scalars['String']>;
};

/** Updates the account of the logged-in user. */
export type AccountUpdate = {
  __typename?: 'AccountUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user?: Maybe<User>;
};

export type AccountInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** Billing address of the customer. */
  defaultBillingAddress?: Maybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: Maybe<AddressInput>;
};

/** Sends an email with the account removal link for the logged-in user. */
export type AccountRequestDeletion = {
  __typename?: 'AccountRequestDeletion';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
};

/** Remove user account. */
export type AccountDelete = {
  __typename?: 'AccountDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user?: Maybe<User>;
};

/** Creates user address. */
export type AddressCreate = {
  __typename?: 'AddressCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance for which the address was created. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
};

/** Updates an address. */
export type AddressUpdate = {
  __typename?: 'AddressUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user object for which the address was edited. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
};

/** Deletes an address. */
export type AddressDelete = {
  __typename?: 'AddressDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance for which the address was deleted. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
};

/** Sets a default address for the given user. */
export type AddressSetDefault = {
  __typename?: 'AddressSetDefault';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Creates a new customer. */
export type CustomerCreate = {
  __typename?: 'CustomerCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user?: Maybe<User>;
};

export type UserCreateInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: Maybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: Maybe<AddressInput>;
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** A note about the user. */
  note?: Maybe<Scalars['String']>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>;
};

/** Updates an existing customer. */
export type CustomerUpdate = {
  __typename?: 'CustomerUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user?: Maybe<User>;
};

export type CustomerInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: Maybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: Maybe<AddressInput>;
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** A note about the user. */
  note?: Maybe<Scalars['String']>;
};

/** Deletes a customer. */
export type CustomerDelete = {
  __typename?: 'CustomerDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user?: Maybe<User>;
};

/** Deletes customers. */
export type CustomerBulkDelete = {
  __typename?: 'CustomerBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  accountErrors: Array<AccountError>;
};

/** Creates a new staff user. */
export type StaffCreate = {
  __typename?: 'StaffCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffError = {
  __typename?: 'StaffError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: AccountErrorCode;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>;
  /** List of permission group IDs which cause the error. */
  groups?: Maybe<Array<Scalars['ID']>>;
  /** List of user IDs which causes the error. */
  users?: Maybe<Array<Scalars['ID']>>;
};

export type StaffCreateInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** A note about the user. */
  note?: Maybe<Scalars['String']>;
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: Maybe<Array<Scalars['ID']>>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>;
};

/** Updates an existing staff user. */
export type StaffUpdate = {
  __typename?: 'StaffUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffUpdateInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** A note about the user. */
  note?: Maybe<Scalars['String']>;
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: Maybe<Array<Scalars['ID']>>;
  /** List of permission group IDs from which user should be unassigned. */
  removeGroups?: Maybe<Array<Scalars['ID']>>;
};

/** Deletes a staff user. */
export type StaffDelete = {
  __typename?: 'StaffDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

/** Deletes staff users. */
export type StaffBulkDelete = {
  __typename?: 'StaffBulkDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  staffErrors: Array<StaffError>;
};

/** Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type UserAvatarUpdate = {
  __typename?: 'UserAvatarUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Deletes a user avatar. Only for staff members. */
export type UserAvatarDelete = {
  __typename?: 'UserAvatarDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user?: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Activate or deactivate users. */
export type UserBulkSetActive = {
  __typename?: 'UserBulkSetActive';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  accountErrors: Array<AccountError>;
};

/** Create new permission group. */
export type PermissionGroupCreate = {
  __typename?: 'PermissionGroupCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  permissionGroupErrors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
};

export type PermissionGroupError = {
  __typename?: 'PermissionGroupError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: PermissionGroupErrorCode;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  users?: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export enum PermissionGroupErrorCode {
  AssignNonStaffMember = 'ASSIGN_NON_STAFF_MEMBER',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  CannotRemoveFromLastGroup = 'CANNOT_REMOVE_FROM_LAST_GROUP',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PermissionGroupCreateInput = {
  /** List of permission code names to assign to this group. */
  addPermissions?: Maybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: Maybe<Array<Scalars['ID']>>;
  /** Group name. */
  name: Scalars['String'];
};

/** Update permission group. */
export type PermissionGroupUpdate = {
  __typename?: 'PermissionGroupUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  permissionGroupErrors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
};

export type PermissionGroupUpdateInput = {
  /** List of permission code names to assign to this group. */
  addPermissions?: Maybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: Maybe<Array<Scalars['ID']>>;
  /** Group name. */
  name?: Maybe<Scalars['String']>;
  /** List of permission code names to unassign from this group. */
  removePermissions?: Maybe<Array<PermissionEnum>>;
  /** List of users to unassign from this group. */
  removeUsers?: Maybe<Array<Scalars['ID']>>;
};

/** Delete permission group. */
export type PermissionGroupDelete = {
  __typename?: 'PermissionGroupDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  permissionGroupErrors: Array<PermissionGroupError>;
  group?: Maybe<Group>;
};

export type Review = Node & ObjectWithMetadata & {
  __typename?: 'Review';
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  user: User;
  product: Product;
  content: Scalars['String'];
  created: Scalars['Date'];
  rating: Scalars['Int'];
};

export type ReviewCountableConnection = {
  __typename?: 'ReviewCountableConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ReviewCountableEdge>;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ReviewCountableEdge = {
  __typename?: 'ReviewCountableEdge';
  /** The item at the end of the edge. */
  node: Review;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type ReviewFilterInput = {
  product?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
  rating?: Maybe<IntRangeInput>;
};

export type ReviewSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort review by the selected field. */
  field: ReviewSortField;
};

export enum ReviewSortField {
  /** Sort reviews by rating. */
  Rating = 'RATING',
  /** Sort reviews by creation date. */
  CreationDate = 'CREATION_DATE'
}

/** Create a review */
export type ReviewCreateMutation = {
  __typename?: 'ReviewCreateMutation';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  review?: Maybe<Review>;
  reviewsErrors: Array<ReviewError>;
};

export type ReviewError = {
  __typename?: 'ReviewError';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
  /** The error code. */
  code: ReviewErrorCode;
};

/** An enumeration. */
export enum ReviewErrorCode {
  Exists = 'EXISTS',
  RequestorNotAuthor = 'REQUESTOR_NOT_AUTHOR'
}

export type ReviewCreateInput = {
  product?: Maybe<Scalars['ID']>;
  rating: Scalars['Int'];
  content: Scalars['String'];
};

/** Update a review by ID */
export type ReviewUpdateMutation = {
  __typename?: 'ReviewUpdateMutation';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  review?: Maybe<Review>;
  reviewsErrors: Array<ReviewError>;
};

export type ReviewUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
};

export type AddressDetailsFragmentFragment = (
  { __typename?: 'Address' }
  & Pick<Address, 'id' | 'firstName' | 'lastName' | 'streetAddress1' | 'streetAddress2' | 'city' | 'cityArea' | 'postalCode' | 'countryArea' | 'phone' | 'isDefaultBillingAddress' | 'isDefaultShippingAddress' | 'companyName'>
  & { country: (
    { __typename?: 'CountryDisplay' }
    & Pick<CountryDisplay, 'code' | 'country'>
  ) }
);

export type DeleteAddressMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAddressMutation = (
  { __typename?: 'Mutation' }
  & { addressDelete?: Maybe<(
    { __typename?: 'AddressDelete' }
    & { accountErrors: Array<(
      { __typename?: 'AccountError' }
      & Pick<AccountError, 'field' | 'code'>
    )> }
  )> }
);

export type AddAddressMutationVariables = Exact<{
  id: Scalars['ID'];
  input: AddressInput;
}>;


export type AddAddressMutation = (
  { __typename?: 'Mutation' }
  & { addressCreate?: Maybe<(
    { __typename?: 'AddressCreate' }
    & { address?: Maybe<(
      { __typename?: 'Address' }
      & AddressDetailsFragmentFragment
    )>, accountErrors: Array<(
      { __typename?: 'AccountError' }
      & Pick<AccountError, 'field' | 'code'>
    )> }
  )> }
);

export type UpdateAddressMutationVariables = Exact<{
  id: Scalars['ID'];
  input: AddressInput;
}>;


export type UpdateAddressMutation = (
  { __typename?: 'Mutation' }
  & { addressUpdate?: Maybe<(
    { __typename?: 'AddressUpdate' }
    & { address?: Maybe<(
      { __typename?: 'Address' }
      & AddressDetailsFragmentFragment
    )>, accountErrors: Array<(
      { __typename?: 'AccountError' }
      & Pick<AccountError, 'field' | 'code'>
    )> }
  )> }
);

export type GetAddressByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAddressByIdQuery = (
  { __typename?: 'Query' }
  & { address?: Maybe<(
    { __typename?: 'Address' }
    & AddressDetailsFragmentFragment
  )> }
);

export type GetAddressListQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAddressListQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & { addresses?: Maybe<Array<Maybe<(
      { __typename?: 'Address' }
      & AddressDetailsFragmentFragment
    )>>> }
  )> }
);

export type AttributeDetailsFragmentFragment = (
  { __typename?: 'Attribute' }
  & Pick<Attribute, 'id' | 'slug' | 'name'>
  & { values?: Maybe<Array<Maybe<(
    { __typename?: 'AttributeValue' }
    & AttributeValuesFragmentFragment
  )>>>, metadata: Array<Maybe<(
    { __typename?: 'MetadataItem' }
    & Pick<MetadataItem, 'key' | 'value'>
  )>>, translation?: Maybe<(
    { __typename?: 'AttributeTranslation' }
    & Pick<AttributeTranslation, 'name'>
  )> }
);

export type AttributeValuesFragmentFragment = (
  { __typename?: 'AttributeValue' }
  & Pick<AttributeValue, 'id' | 'name' | 'slug'>
  & { translation?: Maybe<(
    { __typename?: 'AttributeValueTranslation' }
    & Pick<AttributeValueTranslation, 'name'>
  )> }
);

export type AttributeValuesDetailFragmentFragment = (
  { __typename?: 'SelectedAttribute' }
  & { attribute: (
    { __typename?: 'Attribute' }
    & AttributeDetailsFragmentFragment
  ), values: Array<Maybe<(
    { __typename?: 'AttributeValue' }
    & AttributeValuesFragmentFragment
  )>> }
);

export type GetAttributeBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  languageCode: LanguageCodeEnum;
}>;


export type GetAttributeBySlugQuery = (
  { __typename?: 'Query' }
  & { attribute?: Maybe<(
    { __typename?: 'Attribute' }
    & { translation?: Maybe<(
      { __typename?: 'AttributeTranslation' }
      & Pick<AttributeTranslation, 'name'>
    )> }
    & AttributeDetailsFragmentFragment
  )> }
);

export type CategoryPageInfoFragmentFragment = (
  { __typename?: 'CategoryCountableConnection' }
  & Pick<CategoryCountableConnection, 'totalCount'>
  & { pageInfo: (
    { __typename?: 'PageInfo' }
    & PageInfoFragmentFragment
  ) }
);

export type CategoryDetailFragmentFragment = (
  { __typename?: 'Category' }
  & Pick<Category, 'id' | 'name' | 'slug' | 'level' | 'description' | 'seoTitle' | 'seoDescription'>
  & { backgroundImage?: Maybe<(
    { __typename?: 'Image' }
    & Pick<Image, 'alt' | 'url'>
  )>, translation?: Maybe<(
    { __typename?: 'CategoryTranslation' }
    & Pick<CategoryTranslation, 'name' | 'description' | 'seoTitle' | 'seoDescription'>
  )> }
);

export type CategoryChildrenFragmentFragment = (
  { __typename?: 'Category' }
  & { children?: Maybe<(
    { __typename?: 'CategoryCountableConnection' }
    & { edges: Array<(
      { __typename?: 'CategoryCountableEdge' }
      & { node: (
        { __typename?: 'Category' }
        & { children?: Maybe<(
          { __typename?: 'CategoryCountableConnection' }
          & { edges: Array<(
            { __typename?: 'CategoryCountableEdge' }
            & { node: (
              { __typename?: 'Category' }
              & CategoryDetailFragmentFragment
            ) }
          )> }
        )> }
        & CategoryDetailFragmentFragment
      ) }
    )> }
  )> }
);

export type GetCategoryByIdQueryVariables = Exact<{
  id: Scalars['ID'];
  languageCode: LanguageCodeEnum;
}>;


export type GetCategoryByIdQuery = (
  { __typename?: 'Query' }
  & { category?: Maybe<(
    { __typename?: 'Category' }
    & CategoryDetailFragmentFragment
    & CategoryChildrenFragmentFragment
  )> }
);

export type GetCategoryBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  languageCode: LanguageCodeEnum;
}>;


export type GetCategoryBySlugQuery = (
  { __typename?: 'Query' }
  & { category?: Maybe<(
    { __typename?: 'Category' }
    & CategoryDetailFragmentFragment
    & CategoryChildrenFragmentFragment
  )> }
);

export type GetCategoryListQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<CategoryFilterInput>;
  sortBy?: Maybe<CategorySortingInput>;
  level?: Maybe<Scalars['Int']>;
  languageCode: LanguageCodeEnum;
}>;


export type GetCategoryListQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<(
    { __typename?: 'CategoryCountableConnection' }
    & { edges: Array<(
      { __typename?: 'CategoryCountableEdge' }
      & Pick<CategoryCountableEdge, 'cursor'>
      & { node: (
        { __typename?: 'Category' }
        & CategoryDetailFragmentFragment
        & CategoryChildrenFragmentFragment
      ) }
    )> }
    & CategoryPageInfoFragmentFragment
  )> }
);

export type CheckoutDetailsFragmentFragment = (
  { __typename?: 'Checkout' }
  & Pick<Checkout, 'id' | 'token' | 'created' | 'email' | 'isShippingRequired'>
  & { shippingAddress?: Maybe<(
    { __typename?: 'Address' }
    & AddressDetailsFragmentFragment
  )>, billingAddress?: Maybe<(
    { __typename?: 'Address' }
    & AddressDetailsFragmentFragment
  )>, subtotalPrice?: Maybe<(
    { __typename?: 'TaxedMoney' }
    & TaxedMoneyFragmentFragment
  )>, totalPrice?: Maybe<(
    { __typename?: 'TaxedMoney' }
    & TaxedMoneyFragmentFragment
  )>, lines?: Maybe<Array<Maybe<(
    { __typename?: 'CheckoutLine' }
    & Pick<CheckoutLine, 'id' | 'quantity' | 'requiresShipping'>
    & { totalPrice?: Maybe<(
      { __typename?: 'TaxedMoney' }
      & TaxedMoneyFragmentFragment
    )>, variant: (
      { __typename?: 'ProductVariant' }
      & { product: (
        { __typename?: 'Product' }
        & Pick<Product, 'id'>
      ), attributes: Array<(
        { __typename?: 'SelectedAttribute' }
        & AttributeValuesDetailFragmentFragment
      )> }
    ) }
  )>>>, availablePaymentGateways: Array<(
    { __typename?: 'PaymentGateway' }
    & Pick<PaymentGateway, 'id' | 'name' | 'currencies'>
    & { config: Array<(
      { __typename?: 'GatewayConfigLine' }
      & Pick<GatewayConfigLine, 'field' | 'value'>
    )> }
  )>, availableShippingMethods: Array<Maybe<(
    { __typename?: 'ShippingMethod' }
    & Pick<ShippingMethod, 'id' | 'name' | 'maximumDeliveryDays'>
    & { translation?: Maybe<(
      { __typename?: 'ShippingMethodTranslation' }
      & Pick<ShippingMethodTranslation, 'name'>
    )>, price?: Maybe<(
      { __typename?: 'Money' }
      & Pick<Money, 'amount'>
    )> }
  )>> }
);

export type CreateCheckoutMutationVariables = Exact<{
  input: CheckoutCreateInput;
  languageCode: LanguageCodeEnum;
}>;


export type CreateCheckoutMutation = (
  { __typename?: 'Mutation' }
  & { checkoutCreate?: Maybe<(
    { __typename?: 'CheckoutCreate' }
    & Pick<CheckoutCreate, 'created'>
    & { checkoutErrors: Array<(
      { __typename?: 'CheckoutError' }
      & Pick<CheckoutError, 'code' | 'field'>
    )>, checkout?: Maybe<(
      { __typename?: 'Checkout' }
      & CheckoutDetailsFragmentFragment
    )> }
  )> }
);

export type CompleteCheckoutMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  paymentData?: Maybe<Scalars['JSONString']>;
  redirectUrl?: Maybe<Scalars['String']>;
  storeSource?: Maybe<Scalars['Boolean']>;
}>;


export type CompleteCheckoutMutation = (
  { __typename?: 'Mutation' }
  & { checkoutComplete?: Maybe<(
    { __typename?: 'CheckoutComplete' }
    & Pick<CheckoutComplete, 'confirmationNeeded' | 'confirmationData'>
    & { checkoutErrors: Array<(
      { __typename?: 'CheckoutError' }
      & Pick<CheckoutError, 'field' | 'code'>
    )>, order?: Maybe<(
      { __typename?: 'Order' }
      & OrderDetailsFragmentFragment
    )> }
  )> }
);

export type GetCheckoutByTokenQueryVariables = Exact<{
  token: Scalars['UUID'];
  languageCode: LanguageCodeEnum;
}>;


export type GetCheckoutByTokenQuery = (
  { __typename?: 'Query' }
  & { checkout?: Maybe<(
    { __typename?: 'Checkout' }
    & CheckoutDetailsFragmentFragment
  )> }
);

export type CollectionDetailsFragmentFragment = (
  { __typename?: 'Collection' }
  & Pick<Collection, 'id' | 'name' | 'description' | 'seoTitle' | 'seoDescription'>
  & { translation?: Maybe<(
    { __typename?: 'CollectionTranslation' }
    & Pick<CollectionTranslation, 'name'>
  )>, backgroundImage?: Maybe<(
    { __typename?: 'Image' }
    & Pick<Image, 'url' | 'alt'>
  )>, products?: Maybe<(
    { __typename?: 'ProductCountableConnection' }
    & Pick<ProductCountableConnection, 'totalCount'>
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & PageInfoFragmentFragment
    ), edges: Array<(
      { __typename?: 'ProductCountableEdge' }
      & Pick<ProductCountableEdge, 'cursor'>
      & { node: (
        { __typename?: 'Product' }
        & ProductDetailsFragmentFragment
      ) }
    )> }
  )> }
);

export type GetCollectionBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  languageCode: LanguageCodeEnum;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductFilterInput>;
  sortBy?: Maybe<ProductOrder>;
}>;


export type GetCollectionBySlugQuery = (
  { __typename?: 'Query' }
  & { collection?: Maybe<(
    { __typename?: 'Collection' }
    & CollectionDetailsFragmentFragment
  )> }
);

export type PageInfoFragmentFragment = (
  { __typename?: 'PageInfo' }
  & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
);

export type TaxedMoneyFragmentFragment = (
  { __typename?: 'TaxedMoney' }
  & Pick<TaxedMoney, 'currency'>
  & { gross: (
    { __typename?: 'Money' }
    & Pick<Money, 'amount'>
  ), net: (
    { __typename?: 'Money' }
    & Pick<Money, 'amount'>
  ), tax: (
    { __typename?: 'Money' }
    & Pick<Money, 'amount'>
  ) }
);

export type GetCountriesQueryVariables = Exact<{
  languageCode: LanguageCodeEnum;
}>;


export type GetCountriesQuery = (
  { __typename?: 'Query' }
  & { shop: (
    { __typename?: 'Shop' }
    & { countries: Array<(
      { __typename?: 'CountryDisplay' }
      & Pick<CountryDisplay, 'country' | 'code'>
    )> }
  ) }
);

export type GetPaymentGatewaysQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaymentGatewaysQuery = (
  { __typename?: 'Query' }
  & { shop: (
    { __typename?: 'Shop' }
    & { availablePaymentGateways: Array<(
      { __typename?: 'PaymentGateway' }
      & Pick<PaymentGateway, 'name' | 'id' | 'currencies'>
      & { config: Array<(
        { __typename?: 'GatewayConfigLine' }
        & Pick<GatewayConfigLine, 'field' | 'value'>
      )> }
    )> }
  ) }
);

export type GetSiteDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSiteDetailsQuery = (
  { __typename?: 'Query' }
  & { shop: (
    { __typename?: 'Shop' }
    & Pick<Shop, 'description'>
    & { companyAddress?: Maybe<(
      { __typename?: 'Address' }
      & AddressDetailsFragmentFragment
    )> }
  ) }
);

export type NavigationMenuItemChildrenFragment = (
  { __typename?: 'MenuItem' }
  & Pick<MenuItem, 'name' | 'url'>
  & { category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'slug'>
  )>, collection?: Maybe<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'slug'>
  )>, translation?: Maybe<(
    { __typename?: 'MenuItemTranslation' }
    & Pick<MenuItemTranslation, 'name'>
  )> }
);

export type NavigationMenuItemDetailFragment = (
  { __typename?: 'MenuItem' }
  & Pick<MenuItem, 'name' | 'url'>
  & { translation?: Maybe<(
    { __typename?: 'MenuItemTranslation' }
    & Pick<MenuItemTranslation, 'name'>
  )>, category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'slug'>
  )>, collection?: Maybe<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'slug'>
  )>, children?: Maybe<Array<Maybe<(
    { __typename?: 'MenuItem' }
    & { children?: Maybe<Array<Maybe<(
      { __typename?: 'MenuItem' }
      & { children?: Maybe<Array<Maybe<(
        { __typename?: 'MenuItem' }
        & { children?: Maybe<Array<Maybe<(
          { __typename?: 'MenuItem' }
          & { children?: Maybe<Array<Maybe<(
            { __typename?: 'MenuItem' }
            & { children?: Maybe<Array<Maybe<(
              { __typename?: 'MenuItem' }
              & NavigationMenuItemChildrenFragment
            )>>> }
            & NavigationMenuItemChildrenFragment
          )>>> }
          & NavigationMenuItemChildrenFragment
        )>>> }
        & NavigationMenuItemChildrenFragment
      )>>> }
      & NavigationMenuItemChildrenFragment
    )>>> }
    & NavigationMenuItemChildrenFragment
  )>>> }
);

export type GetMenuQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  languageCode: LanguageCodeEnum;
  channel: Scalars['String'];
}>;


export type GetMenuQuery = (
  { __typename?: 'Query' }
  & { menu?: Maybe<(
    { __typename?: 'Menu' }
    & Pick<Menu, 'name' | 'slug'>
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'MenuItem' }
      & NavigationMenuItemDetailFragment
    )>>> }
  )> }
);

export type OrderDetailsFragmentFragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'id' | 'token' | 'created' | 'isShippingRequired' | 'paymentStatusDisplay' | 'statusDisplay'>
  & { voucher?: Maybe<(
    { __typename?: 'Voucher' }
    & Pick<Voucher, 'id' | 'discountValue'>
  )>, total: (
    { __typename?: 'TaxedMoney' }
    & { gross: (
      { __typename?: 'Money' }
      & Pick<Money, 'amount'>
    ) }
  ), subtotal: (
    { __typename?: 'TaxedMoney' }
    & { net: (
      { __typename?: 'Money' }
      & Pick<Money, 'amount'>
    ) }
  ), shippingAddress?: Maybe<(
    { __typename?: 'Address' }
    & AddressDetailsFragmentFragment
  )> }
);

export type GetOrderByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrderByIdQuery = (
  { __typename?: 'Query' }
  & { order?: Maybe<(
    { __typename?: 'Order' }
    & OrderDetailsFragmentFragment
  )> }
);

export type GetOrderByTokenQueryVariables = Exact<{
  token: Scalars['UUID'];
}>;


export type GetOrderByTokenQuery = (
  { __typename?: 'Query' }
  & { orderByToken?: Maybe<(
    { __typename?: 'Order' }
    & OrderDetailsFragmentFragment
  )> }
);

export type GetOrderListQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<OrderFilterInput>;
  sortBy?: Maybe<OrderSortingInput>;
  channel: Scalars['String'];
}>;


export type GetOrderListQuery = (
  { __typename?: 'Query' }
  & { orders?: Maybe<(
    { __typename?: 'OrderCountableConnection' }
    & { edges: Array<(
      { __typename?: 'OrderCountableEdge' }
      & Pick<OrderCountableEdge, 'cursor'>
      & { node: (
        { __typename?: 'Order' }
        & OrderDetailsFragmentFragment
      ) }
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & PageInfoFragmentFragment
    ) }
  )> }
);

export type GetPageBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  languageCode: LanguageCodeEnum;
}>;


export type GetPageBySlugQuery = (
  { __typename?: 'Query' }
  & { page?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'slug' | 'seoTitle' | 'seoDescription' | 'title'>
    & { translation?: Maybe<(
      { __typename?: 'PageTranslation' }
      & Pick<PageTranslation, 'seoTitle' | 'seoDescription' | 'content' | 'contentJson'>
    )>, attributes: Array<(
      { __typename?: 'SelectedAttribute' }
      & { attribute: (
        { __typename?: 'Attribute' }
        & Pick<Attribute, 'slug' | 'name'>
      ), values: Array<Maybe<(
        { __typename?: 'AttributeValue' }
        & Pick<AttributeValue, 'name' | 'slug'>
        & { translation?: Maybe<(
          { __typename?: 'AttributeValueTranslation' }
          & Pick<AttributeValueTranslation, 'name'>
        )> }
      )>> }
    )> }
  )> }
);

export type PaymentDetailsFragmentFragment = (
  { __typename?: 'Payment' }
  & Pick<Payment, 'id' | 'isActive' | 'actions'>
  & { availableCaptureAmount?: Maybe<(
    { __typename?: 'Money' }
    & Pick<Money, 'amount'>
  )>, availableRefundAmount?: Maybe<(
    { __typename?: 'Money' }
    & Pick<Money, 'amount'>
  )>, capturedAmount?: Maybe<(
    { __typename?: 'Money' }
    & Pick<Money, 'amount'>
  )>, checkout?: Maybe<(
    { __typename?: 'Checkout' }
    & CheckoutDetailsFragmentFragment
  )> }
);

export type CreatePaymentMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  input: PaymentInput;
  languageCode: LanguageCodeEnum;
}>;


export type CreatePaymentMutation = (
  { __typename?: 'Mutation' }
  & { checkoutPaymentCreate?: Maybe<(
    { __typename?: 'CheckoutPaymentCreate' }
    & { checkout?: Maybe<(
      { __typename?: 'Checkout' }
      & CheckoutDetailsFragmentFragment
    )>, payment?: Maybe<(
      { __typename?: 'Payment' }
      & PaymentDetailsFragmentFragment
    )>, paymentErrors: Array<(
      { __typename?: 'PaymentError' }
      & Pick<PaymentError, 'field' | 'code'>
    )> }
  )> }
);

export type ProductVariantDetailsFragment = (
  { __typename?: 'ProductVariant' }
  & Pick<ProductVariant, 'id' | 'sku' | 'name' | 'quantityAvailable'>
  & { pricing?: Maybe<(
    { __typename?: 'VariantPricingInfo' }
    & { price?: Maybe<(
      { __typename?: 'TaxedMoney' }
      & TaxedMoneyFragmentFragment
    )>, priceUndiscounted?: Maybe<(
      { __typename?: 'TaxedMoney' }
      & TaxedMoneyFragmentFragment
    )> }
  )>, attributes: Array<(
    { __typename?: 'SelectedAttribute' }
    & AttributeValuesDetailFragmentFragment
  )> }
);

export type ProductPageInfoFragmentFragment = (
  { __typename?: 'ProductCountableConnection' }
  & Pick<ProductCountableConnection, 'totalCount'>
  & { pageInfo: (
    { __typename?: 'PageInfo' }
    & PageInfoFragmentFragment
  ) }
);

export type ProductDetailsFragmentFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'name' | 'slug' | 'description' | 'seoTitle' | 'seoDescription' | 'isAvailable' | 'isAvailableForPurchase'>
  & { pricing?: Maybe<(
    { __typename?: 'ProductPricingInfo' }
    & Pick<ProductPricingInfo, 'onSale'>
    & { priceRange?: Maybe<(
      { __typename?: 'TaxedMoneyRange' }
      & { start?: Maybe<(
        { __typename?: 'TaxedMoney' }
        & TaxedMoneyFragmentFragment
      )> }
    )>, priceRangeUndiscounted?: Maybe<(
      { __typename?: 'TaxedMoneyRange' }
      & { start?: Maybe<(
        { __typename?: 'TaxedMoney' }
        & TaxedMoneyFragmentFragment
      )> }
    )> }
  )>, images?: Maybe<Array<Maybe<(
    { __typename?: 'ProductImage' }
    & Pick<ProductImage, 'id' | 'alt' | 'url'>
  )>>>, weight?: Maybe<(
    { __typename?: 'Weight' }
    & Pick<Weight, 'unit' | 'value'>
  )>, attributes: Array<(
    { __typename?: 'SelectedAttribute' }
    & AttributeValuesDetailFragmentFragment
  )>, variants?: Maybe<Array<Maybe<(
    { __typename?: 'ProductVariant' }
    & ProductVariantDetailsFragment
  )>>>, defaultVariant?: Maybe<(
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'sku'>
    & { attributes: Array<(
      { __typename?: 'SelectedAttribute' }
      & AttributeValuesDetailFragmentFragment
    )> }
  )>, productType: (
    { __typename?: 'ProductType' }
    & Pick<ProductType, 'name' | 'slug'>
    & { variantAttributes?: Maybe<Array<Maybe<(
      { __typename?: 'Attribute' }
      & Pick<Attribute, 'name' | 'slug'>
      & { translation?: Maybe<(
        { __typename?: 'AttributeTranslation' }
        & Pick<AttributeTranslation, 'name'>
      )> }
    )>>>, productAttributes?: Maybe<Array<Maybe<(
      { __typename?: 'Attribute' }
      & Pick<Attribute, 'name' | 'slug'>
    )>>> }
  ), category?: Maybe<(
    { __typename?: 'Category' }
    & CategoryDetailFragmentFragment
  )>, translation?: Maybe<(
    { __typename?: 'ProductTranslation' }
    & Pick<ProductTranslation, 'seoTitle' | 'seoDescription' | 'name' | 'description'>
    & { language: (
      { __typename?: 'LanguageDisplay' }
      & Pick<LanguageDisplay, 'code' | 'language'>
    ) }
  )> }
);

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
  languageCode: LanguageCodeEnum;
  channel?: Maybe<Scalars['String']>;
}>;


export type GetProductByIdQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & { variants?: Maybe<Array<Maybe<(
      { __typename?: 'ProductVariant' }
      & ProductVariantDetailsFragment
    )>>> }
    & ProductDetailsFragmentFragment
  )> }
);

export type GetProductBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  languageCode: LanguageCodeEnum;
  channel?: Maybe<Scalars['String']>;
}>;


export type GetProductBySlugQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & { variants?: Maybe<Array<Maybe<(
      { __typename?: 'ProductVariant' }
      & ProductVariantDetailsFragment
    )>>> }
    & ProductDetailsFragmentFragment
  )> }
);

export type GetProductListQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductFilterInput>;
  sortBy?: Maybe<ProductOrder>;
  languageCode: LanguageCodeEnum;
  channel?: Maybe<Scalars['String']>;
}>;


export type GetProductListQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<(
    { __typename?: 'ProductCountableConnection' }
    & { edges: Array<(
      { __typename?: 'ProductCountableEdge' }
      & Pick<ProductCountableEdge, 'cursor'>
      & { node: (
        { __typename?: 'Product' }
        & ProductDetailsFragmentFragment
      ) }
    )> }
    & ProductPageInfoFragmentFragment
  )> }
);

export type ReviewPageInfoFragmentFragment = (
  { __typename?: 'ReviewCountableConnection' }
  & Pick<ReviewCountableConnection, 'totalCount'>
  & { pageInfo: (
    { __typename?: 'PageInfo' }
    & PageInfoFragmentFragment
  ) }
);

export type ReviewDetailsFragmentFragment = (
  { __typename?: 'Review' }
  & Pick<Review, 'id' | 'content' | 'rating' | 'created'>
  & { user: (
    { __typename?: 'User' }
    & UserPrivateDetailsFragmentFragment
  ), metadata: Array<Maybe<(
    { __typename?: 'MetadataItem' }
    & Pick<MetadataItem, 'key' | 'value'>
  )>> }
);

export type CreateReviewMutationVariables = Exact<{
  productId: Scalars['ID'];
  rating: Scalars['Int'];
  content: Scalars['String'];
}>;


export type CreateReviewMutation = (
  { __typename?: 'Mutation' }
  & { reviewCreate?: Maybe<(
    { __typename?: 'ReviewCreateMutation' }
    & { review?: Maybe<(
      { __typename?: 'Review' }
      & ReviewDetailsFragmentFragment
    )>, reviewsErrors: Array<(
      { __typename?: 'ReviewError' }
      & Pick<ReviewError, 'field' | 'message' | 'code'>
    )> }
  )> }
);

export type GetReviewsListQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<ReviewFilterInput>;
  sortBy?: Maybe<ReviewSortingInput>;
}>;


export type GetReviewsListQuery = (
  { __typename?: 'Query' }
  & { reviews?: Maybe<(
    { __typename?: 'ReviewCountableConnection' }
    & { edges: Array<(
      { __typename?: 'ReviewCountableEdge' }
      & { node: (
        { __typename?: 'Review' }
        & ReviewDetailsFragmentFragment
      ) }
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & PageInfoFragmentFragment
    ) }
  )> }
);

export type UserPrivateDetailsFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'lastLogin' | 'dateJoined' | 'isActive' | 'isStaff'>
  & { avatar?: Maybe<(
    { __typename?: 'Image' }
    & Pick<Image, 'alt' | 'url'>
  )>, metadata: Array<Maybe<(
    { __typename?: 'MetadataItem' }
    & Pick<MetadataItem, 'key' | 'value'>
  )>> }
);

export type CreateUserTokensMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserTokensMutation = (
  { __typename?: 'Mutation' }
  & { tokenCreate?: Maybe<(
    { __typename?: 'CreateToken' }
    & Pick<CreateToken, 'token' | 'refreshToken' | 'csrfToken'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & UserPrivateDetailsFragmentFragment
    )>, accountErrors: Array<(
      { __typename?: 'AccountError' }
      & Pick<AccountError, 'code' | 'field'>
    )> }
  )> }
);

export type AccountRegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  redirectUrl: Scalars['String'];
}>;


export type AccountRegisterMutation = (
  { __typename?: 'Mutation' }
  & { accountRegister?: Maybe<(
    { __typename?: 'AccountRegister' }
    & Pick<AccountRegister, 'requiresConfirmation'>
    & { accountErrors: Array<(
      { __typename?: 'AccountError' }
      & Pick<AccountError, 'field' | 'code'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & UserPrivateDetailsFragmentFragment
    )> }
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { passwordChange?: Maybe<(
    { __typename?: 'PasswordChange' }
    & { accountErrors: Array<(
      { __typename?: 'AccountError' }
      & Pick<AccountError, 'field' | 'code'>
    )> }
  )> }
);

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyTokenMutation = (
  { __typename?: 'Mutation' }
  & { tokenVerify?: Maybe<(
    { __typename?: 'VerifyToken' }
    & Pick<VerifyToken, 'isValid' | 'payload'>
    & { accountErrors: Array<(
      { __typename?: 'AccountError' }
      & Pick<AccountError, 'code' | 'field'>
    )> }
  )> }
);

export type TokenRenewMutationVariables = Exact<{
  csrfToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
}>;


export type TokenRenewMutation = (
  { __typename?: 'Mutation' }
  & { tokenRefresh?: Maybe<(
    { __typename?: 'RefreshToken' }
    & Pick<RefreshToken, 'token'>
    & { accountErrors: Array<(
      { __typename?: 'AccountError' }
      & Pick<AccountError, 'code' | 'field'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & UserPrivateDetailsFragmentFragment
    )> }
  )> }
);

export type UpdateCustomerMutationVariables = Exact<{
  id: Scalars['ID'];
  input: CustomerInput;
}>;


export type UpdateCustomerMutation = (
  { __typename?: 'Mutation' }
  & { customerUpdate?: Maybe<(
    { __typename?: 'CustomerUpdate' }
    & { accountErrors: Array<(
      { __typename?: 'AccountError' }
      & Pick<AccountError, 'code' | 'field'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & UserPrivateDetailsFragmentFragment
    )> }
  )> }
);

export type UpdateMetadataMutationVariables = Exact<{
  id: Scalars['ID'];
  input: Array<MetadataInput>;
}>;


export type UpdateMetadataMutation = (
  { __typename?: 'Mutation' }
  & { updateMetadata?: Maybe<(
    { __typename?: 'UpdateMetadata' }
    & { metadataErrors: Array<(
      { __typename?: 'MetadataError' }
      & Pick<MetadataError, 'field' | 'code'>
    )>, item?: Maybe<(
      { __typename?: 'App' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'Warehouse' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'ShippingZone' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'ShippingMethod' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'Product' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'ProductType' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'Attribute' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'Category' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'ProductVariant' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'DigitalContent' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'Collection' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'Page' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'PageType' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'MenuItem' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'Menu' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'User' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'Checkout' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'Order' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'Fulfillment' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'Invoice' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    ) | (
      { __typename?: 'Review' }
      & { metadata: Array<Maybe<(
        { __typename?: 'MetadataItem' }
        & Pick<MetadataItem, 'key' | 'value'>
      )>> }
    )> }
  )> }
);

export type GetCurrentAuthUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentAuthUserQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserPrivateDetailsFragmentFragment
  )> }
);

export const PageInfoFragmentFragmentDoc = gql`
    fragment pageInfoFragment on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
    `;
export const CategoryPageInfoFragmentFragmentDoc = gql`
    fragment categoryPageInfoFragment on CategoryCountableConnection {
  pageInfo {
    ...pageInfoFragment
  }
  totalCount
}
    ${PageInfoFragmentFragmentDoc}`;
export const CategoryDetailFragmentFragmentDoc = gql`
    fragment categoryDetailFragment on Category {
  id
  name
  slug
  level
  description
  backgroundImage {
    alt
    url
  }
  description
  seoTitle
  seoDescription
  translation(languageCode: $languageCode) {
    name
    description
    description
    seoTitle
    seoDescription
  }
}
    `;
export const CategoryChildrenFragmentFragmentDoc = gql`
    fragment categoryChildrenFragment on Category {
  children(first: 100) {
    edges {
      node {
        ...categoryDetailFragment
        children(first: 100) {
          edges {
            node {
              ...categoryDetailFragment
            }
          }
        }
      }
    }
  }
}
    ${CategoryDetailFragmentFragmentDoc}`;
export const TaxedMoneyFragmentFragmentDoc = gql`
    fragment taxedMoneyFragment on TaxedMoney {
  currency
  gross {
    amount
  }
  net {
    amount
  }
  tax {
    amount
  }
}
    `;
export const AttributeValuesFragmentFragmentDoc = gql`
    fragment attributeValuesFragment on AttributeValue {
  id
  name
  slug
  translation(languageCode: $languageCode) {
    name
  }
}
    `;
export const AttributeDetailsFragmentFragmentDoc = gql`
    fragment attributeDetailsFragment on Attribute {
  id
  slug
  name
  values {
    ...attributeValuesFragment
  }
  metadata {
    key
    value
  }
  translation(languageCode: $languageCode) {
    name
  }
}
    ${AttributeValuesFragmentFragmentDoc}`;
export const AttributeValuesDetailFragmentFragmentDoc = gql`
    fragment attributeValuesDetailFragment on SelectedAttribute {
  attribute {
    ...attributeDetailsFragment
  }
  values {
    ...attributeValuesFragment
  }
}
    ${AttributeDetailsFragmentFragmentDoc}
${AttributeValuesFragmentFragmentDoc}`;
export const ProductVariantDetailsFragmentDoc = gql`
    fragment productVariantDetails on ProductVariant {
  id
  sku
  name
  pricing {
    price {
      ...taxedMoneyFragment
    }
    priceUndiscounted {
      ...taxedMoneyFragment
    }
  }
  attributes {
    ...attributeValuesDetailFragment
  }
  quantityAvailable
}
    ${TaxedMoneyFragmentFragmentDoc}
${AttributeValuesDetailFragmentFragmentDoc}`;
export const ProductDetailsFragmentFragmentDoc = gql`
    fragment productDetailsFragment on Product {
  id
  name
  slug
  description
  seoTitle
  seoDescription
  pricing {
    onSale
    priceRange {
      start {
        ...taxedMoneyFragment
      }
    }
    priceRangeUndiscounted {
      start {
        ...taxedMoneyFragment
      }
    }
  }
  images {
    id
    alt
    url
  }
  isAvailable
  isAvailableForPurchase
  weight {
    unit
    value
  }
  attributes {
    ...attributeValuesDetailFragment
  }
  variants {
    ...productVariantDetails
  }
  defaultVariant {
    sku
    attributes {
      ...attributeValuesDetailFragment
    }
  }
  productType {
    name
    slug
    variantAttributes {
      name
      slug
      translation(languageCode: $languageCode) {
        name
      }
    }
    productAttributes {
      name
      slug
    }
  }
  category {
    ...categoryDetailFragment
  }
  translation(languageCode: $languageCode) {
    seoTitle
    seoDescription
    name
    description
    description
    language {
      code
      language
    }
  }
}
    ${TaxedMoneyFragmentFragmentDoc}
${AttributeValuesDetailFragmentFragmentDoc}
${ProductVariantDetailsFragmentDoc}
${CategoryDetailFragmentFragmentDoc}`;
export const CollectionDetailsFragmentFragmentDoc = gql`
    fragment collectionDetailsFragment on Collection {
  id
  name
  description
  description
  translation(languageCode: $languageCode) {
    name
  }
  seoTitle
  seoDescription
  backgroundImage {
    url
    alt
  }
  products(first: $first, last: $last, after: $after, before: $before, filter: $filter, sortBy: $sortBy) {
    pageInfo {
      ...pageInfoFragment
    }
    edges {
      node {
        ...productDetailsFragment
      }
      cursor
    }
    totalCount
  }
}
    ${PageInfoFragmentFragmentDoc}
${ProductDetailsFragmentFragmentDoc}`;
export const NavigationMenuItemChildrenFragmentDoc = gql`
    fragment navigationMenuItemChildren on MenuItem {
  name
  category {
    slug
  }
  collection {
    slug
  }
  translation(languageCode: $languageCode) {
    name
  }
  url
}
    `;
export const NavigationMenuItemDetailFragmentDoc = gql`
    fragment navigationMenuItemDetail on MenuItem {
  name
  url
  translation(languageCode: $languageCode) {
    name
  }
  category {
    slug
  }
  collection {
    slug
  }
  translation(languageCode: $languageCode) {
    name
  }
  children {
    ...navigationMenuItemChildren
    children {
      ...navigationMenuItemChildren
      children {
        ...navigationMenuItemChildren
        children {
          ...navigationMenuItemChildren
          children {
            ...navigationMenuItemChildren
            children {
              ...navigationMenuItemChildren
            }
          }
        }
      }
    }
  }
}
    ${NavigationMenuItemChildrenFragmentDoc}`;
export const AddressDetailsFragmentFragmentDoc = gql`
    fragment addressDetailsFragment on Address {
  id
  firstName
  lastName
  streetAddress1
  streetAddress2
  city
  cityArea
  postalCode
  country {
    code
    country
  }
  countryArea
  phone
  isDefaultBillingAddress
  isDefaultShippingAddress
  companyName
}
    `;
export const OrderDetailsFragmentFragmentDoc = gql`
    fragment orderDetailsFragment on Order {
  id
  token
  created
  voucher {
    id
    discountValue
  }
  isShippingRequired
  paymentStatusDisplay
  total {
    gross {
      amount
    }
  }
  subtotal {
    net {
      amount
    }
  }
  statusDisplay
  shippingAddress {
    ...addressDetailsFragment
  }
}
    ${AddressDetailsFragmentFragmentDoc}`;
export const CheckoutDetailsFragmentFragmentDoc = gql`
    fragment checkoutDetailsFragment on Checkout {
  id
  token
  created
  email
  isShippingRequired
  shippingAddress {
    ...addressDetailsFragment
  }
  billingAddress {
    ...addressDetailsFragment
  }
  token
  subtotalPrice {
    ...taxedMoneyFragment
  }
  totalPrice {
    ...taxedMoneyFragment
  }
  lines {
    id
    quantity
    requiresShipping
    totalPrice {
      ...taxedMoneyFragment
    }
    variant {
      product {
        id
      }
      attributes {
        ...attributeValuesDetailFragment
      }
    }
  }
  availablePaymentGateways {
    id
    name
    currencies
    config {
      field
      value
    }
  }
  availableShippingMethods {
    id
    name
    translation(languageCode: $languageCode) {
      name
    }
    maximumDeliveryDays
    price {
      amount
    }
  }
}
    ${AddressDetailsFragmentFragmentDoc}
${TaxedMoneyFragmentFragmentDoc}
${AttributeValuesDetailFragmentFragmentDoc}`;
export const PaymentDetailsFragmentFragmentDoc = gql`
    fragment paymentDetailsFragment on Payment {
  id
  isActive
  actions
  availableCaptureAmount {
    amount
  }
  availableRefundAmount {
    amount
  }
  capturedAmount {
    amount
  }
  checkout {
    ...checkoutDetailsFragment
  }
}
    ${CheckoutDetailsFragmentFragmentDoc}`;
export const ProductPageInfoFragmentFragmentDoc = gql`
    fragment productPageInfoFragment on ProductCountableConnection {
  pageInfo {
    ...pageInfoFragment
  }
  totalCount
}
    ${PageInfoFragmentFragmentDoc}`;
export const ReviewPageInfoFragmentFragmentDoc = gql`
    fragment reviewPageInfoFragment on ReviewCountableConnection {
  pageInfo {
    ...pageInfoFragment
  }
  totalCount
}
    ${PageInfoFragmentFragmentDoc}`;
export const UserPrivateDetailsFragmentFragmentDoc = gql`
    fragment userPrivateDetailsFragment on User {
  id
  email
  avatar {
    alt
    url
  }
  firstName
  lastName
  lastLogin
  dateJoined
  isActive
  isStaff
  metadata {
    key
    value
  }
}
    `;
export const ReviewDetailsFragmentFragmentDoc = gql`
    fragment reviewDetailsFragment on Review {
  id
  content
  rating
  created
  user {
    ...userPrivateDetailsFragment
  }
  metadata {
    key
    value
  }
}
    ${UserPrivateDetailsFragmentFragmentDoc}`;
export const DeleteAddressDocument = gql`
    mutation deleteAddress($id: ID!) {
  addressDelete(id: $id) {
    accountErrors {
      field
      code
    }
  }
}
    `;
export type DeleteAddressMutationFn = Apollo.MutationFunction<DeleteAddressMutation, DeleteAddressMutationVariables>;

/**
 * __useDeleteAddressMutation__
 *
 * To run a mutation, you first call `useDeleteAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAddressMutation, { data, loading, error }] = useDeleteAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAddressMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAddressMutation, DeleteAddressMutationVariables>) {
        return Apollo.useMutation<DeleteAddressMutation, DeleteAddressMutationVariables>(DeleteAddressDocument, baseOptions);
      }
export type DeleteAddressMutationHookResult = ReturnType<typeof useDeleteAddressMutation>;
export type DeleteAddressMutationResult = Apollo.MutationResult<DeleteAddressMutation>;
export type DeleteAddressMutationOptions = Apollo.BaseMutationOptions<DeleteAddressMutation, DeleteAddressMutationVariables>;
export const AddAddressDocument = gql`
    mutation addAddress($id: ID!, $input: AddressInput!) {
  addressCreate(userId: $id, input: $input) {
    address {
      ...addressDetailsFragment
    }
    accountErrors {
      field
      code
    }
  }
}
    ${AddressDetailsFragmentFragmentDoc}`;
export type AddAddressMutationFn = Apollo.MutationFunction<AddAddressMutation, AddAddressMutationVariables>;

/**
 * __useAddAddressMutation__
 *
 * To run a mutation, you first call `useAddAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAddressMutation, { data, loading, error }] = useAddAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddAddressMutation(baseOptions?: Apollo.MutationHookOptions<AddAddressMutation, AddAddressMutationVariables>) {
        return Apollo.useMutation<AddAddressMutation, AddAddressMutationVariables>(AddAddressDocument, baseOptions);
      }
export type AddAddressMutationHookResult = ReturnType<typeof useAddAddressMutation>;
export type AddAddressMutationResult = Apollo.MutationResult<AddAddressMutation>;
export type AddAddressMutationOptions = Apollo.BaseMutationOptions<AddAddressMutation, AddAddressMutationVariables>;
export const UpdateAddressDocument = gql`
    mutation updateAddress($id: ID!, $input: AddressInput!) {
  addressUpdate(id: $id, input: $input) {
    address {
      ...addressDetailsFragment
    }
    accountErrors {
      field
      code
    }
  }
}
    ${AddressDetailsFragmentFragmentDoc}`;
export type UpdateAddressMutationFn = Apollo.MutationFunction<UpdateAddressMutation, UpdateAddressMutationVariables>;

/**
 * __useUpdateAddressMutation__
 *
 * To run a mutation, you first call `useUpdateAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAddressMutation, { data, loading, error }] = useUpdateAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAddressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAddressMutation, UpdateAddressMutationVariables>) {
        return Apollo.useMutation<UpdateAddressMutation, UpdateAddressMutationVariables>(UpdateAddressDocument, baseOptions);
      }
export type UpdateAddressMutationHookResult = ReturnType<typeof useUpdateAddressMutation>;
export type UpdateAddressMutationResult = Apollo.MutationResult<UpdateAddressMutation>;
export type UpdateAddressMutationOptions = Apollo.BaseMutationOptions<UpdateAddressMutation, UpdateAddressMutationVariables>;
export const GetAddressByIdDocument = gql`
    query getAddressById($id: ID!) {
  address(id: $id) {
    ...addressDetailsFragment
  }
}
    ${AddressDetailsFragmentFragmentDoc}`;

/**
 * __useGetAddressByIdQuery__
 *
 * To run a query within a React component, call `useGetAddressByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAddressByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAddressByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAddressByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetAddressByIdQuery, GetAddressByIdQueryVariables>) {
        return Apollo.useQuery<GetAddressByIdQuery, GetAddressByIdQueryVariables>(GetAddressByIdDocument, baseOptions);
      }
export function useGetAddressByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAddressByIdQuery, GetAddressByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetAddressByIdQuery, GetAddressByIdQueryVariables>(GetAddressByIdDocument, baseOptions);
        }
export type GetAddressByIdQueryHookResult = ReturnType<typeof useGetAddressByIdQuery>;
export type GetAddressByIdLazyQueryHookResult = ReturnType<typeof useGetAddressByIdLazyQuery>;
export type GetAddressByIdQueryResult = Apollo.QueryResult<GetAddressByIdQuery, GetAddressByIdQueryVariables>;
export const GetAddressListDocument = gql`
    query getAddressList($id: ID!) {
  user(id: $id) {
    addresses {
      ...addressDetailsFragment
    }
  }
}
    ${AddressDetailsFragmentFragmentDoc}`;

/**
 * __useGetAddressListQuery__
 *
 * To run a query within a React component, call `useGetAddressListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAddressListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAddressListQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAddressListQuery(baseOptions?: Apollo.QueryHookOptions<GetAddressListQuery, GetAddressListQueryVariables>) {
        return Apollo.useQuery<GetAddressListQuery, GetAddressListQueryVariables>(GetAddressListDocument, baseOptions);
      }
export function useGetAddressListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAddressListQuery, GetAddressListQueryVariables>) {
          return Apollo.useLazyQuery<GetAddressListQuery, GetAddressListQueryVariables>(GetAddressListDocument, baseOptions);
        }
export type GetAddressListQueryHookResult = ReturnType<typeof useGetAddressListQuery>;
export type GetAddressListLazyQueryHookResult = ReturnType<typeof useGetAddressListLazyQuery>;
export type GetAddressListQueryResult = Apollo.QueryResult<GetAddressListQuery, GetAddressListQueryVariables>;
export const GetAttributeBySlugDocument = gql`
    query getAttributeBySlug($slug: String!, $languageCode: LanguageCodeEnum!) {
  attribute(slug: $slug) {
    ...attributeDetailsFragment
    translation(languageCode: $languageCode) {
      name
    }
  }
}
    ${AttributeDetailsFragmentFragmentDoc}`;

/**
 * __useGetAttributeBySlugQuery__
 *
 * To run a query within a React component, call `useGetAttributeBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAttributeBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAttributeBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      languageCode: // value for 'languageCode'
 *   },
 * });
 */
export function useGetAttributeBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetAttributeBySlugQuery, GetAttributeBySlugQueryVariables>) {
        return Apollo.useQuery<GetAttributeBySlugQuery, GetAttributeBySlugQueryVariables>(GetAttributeBySlugDocument, baseOptions);
      }
export function useGetAttributeBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAttributeBySlugQuery, GetAttributeBySlugQueryVariables>) {
          return Apollo.useLazyQuery<GetAttributeBySlugQuery, GetAttributeBySlugQueryVariables>(GetAttributeBySlugDocument, baseOptions);
        }
export type GetAttributeBySlugQueryHookResult = ReturnType<typeof useGetAttributeBySlugQuery>;
export type GetAttributeBySlugLazyQueryHookResult = ReturnType<typeof useGetAttributeBySlugLazyQuery>;
export type GetAttributeBySlugQueryResult = Apollo.QueryResult<GetAttributeBySlugQuery, GetAttributeBySlugQueryVariables>;
export const GetCategoryByIdDocument = gql`
    query getCategoryById($id: ID!, $languageCode: LanguageCodeEnum!) {
  category(id: $id) {
    ...categoryDetailFragment
    ...categoryChildrenFragment
  }
}
    ${CategoryDetailFragmentFragmentDoc}
${CategoryChildrenFragmentFragmentDoc}`;

/**
 * __useGetCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      languageCode: // value for 'languageCode'
 *   },
 * });
 */
export function useGetCategoryByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>) {
        return Apollo.useQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(GetCategoryByIdDocument, baseOptions);
      }
export function useGetCategoryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(GetCategoryByIdDocument, baseOptions);
        }
export type GetCategoryByIdQueryHookResult = ReturnType<typeof useGetCategoryByIdQuery>;
export type GetCategoryByIdLazyQueryHookResult = ReturnType<typeof useGetCategoryByIdLazyQuery>;
export type GetCategoryByIdQueryResult = Apollo.QueryResult<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>;
export const GetCategoryBySlugDocument = gql`
    query getCategoryBySlug($slug: String!, $languageCode: LanguageCodeEnum!) {
  category(slug: $slug) {
    ...categoryDetailFragment
    ...categoryChildrenFragment
  }
}
    ${CategoryDetailFragmentFragmentDoc}
${CategoryChildrenFragmentFragmentDoc}`;

/**
 * __useGetCategoryBySlugQuery__
 *
 * To run a query within a React component, call `useGetCategoryBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      languageCode: // value for 'languageCode'
 *   },
 * });
 */
export function useGetCategoryBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>) {
        return Apollo.useQuery<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>(GetCategoryBySlugDocument, baseOptions);
      }
export function useGetCategoryBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>) {
          return Apollo.useLazyQuery<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>(GetCategoryBySlugDocument, baseOptions);
        }
export type GetCategoryBySlugQueryHookResult = ReturnType<typeof useGetCategoryBySlugQuery>;
export type GetCategoryBySlugLazyQueryHookResult = ReturnType<typeof useGetCategoryBySlugLazyQuery>;
export type GetCategoryBySlugQueryResult = Apollo.QueryResult<GetCategoryBySlugQuery, GetCategoryBySlugQueryVariables>;
export const GetCategoryListDocument = gql`
    query GetCategoryList($first: Int, $last: Int, $after: String, $before: String, $filter: CategoryFilterInput, $sortBy: CategorySortingInput, $level: Int, $languageCode: LanguageCodeEnum!) {
  categories(first: $first, last: $last, after: $after, before: $before, level: $level, filter: $filter, sortBy: $sortBy) {
    edges {
      node {
        ...categoryDetailFragment
        ...categoryChildrenFragment
      }
      cursor
    }
    ...categoryPageInfoFragment
  }
}
    ${CategoryDetailFragmentFragmentDoc}
${CategoryChildrenFragmentFragmentDoc}
${CategoryPageInfoFragmentFragmentDoc}`;

/**
 * __useGetCategoryListQuery__
 *
 * To run a query within a React component, call `useGetCategoryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      filter: // value for 'filter'
 *      sortBy: // value for 'sortBy'
 *      level: // value for 'level'
 *      languageCode: // value for 'languageCode'
 *   },
 * });
 */
export function useGetCategoryListQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoryListQuery, GetCategoryListQueryVariables>) {
        return Apollo.useQuery<GetCategoryListQuery, GetCategoryListQueryVariables>(GetCategoryListDocument, baseOptions);
      }
export function useGetCategoryListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryListQuery, GetCategoryListQueryVariables>) {
          return Apollo.useLazyQuery<GetCategoryListQuery, GetCategoryListQueryVariables>(GetCategoryListDocument, baseOptions);
        }
export type GetCategoryListQueryHookResult = ReturnType<typeof useGetCategoryListQuery>;
export type GetCategoryListLazyQueryHookResult = ReturnType<typeof useGetCategoryListLazyQuery>;
export type GetCategoryListQueryResult = Apollo.QueryResult<GetCategoryListQuery, GetCategoryListQueryVariables>;
export const CreateCheckoutDocument = gql`
    mutation createCheckout($input: CheckoutCreateInput!, $languageCode: LanguageCodeEnum!) {
  checkoutCreate(input: $input) {
    created
    checkoutErrors {
      code
      field
    }
    checkout {
      ...checkoutDetailsFragment
    }
  }
}
    ${CheckoutDetailsFragmentFragmentDoc}`;
export type CreateCheckoutMutationFn = Apollo.MutationFunction<CreateCheckoutMutation, CreateCheckoutMutationVariables>;

/**
 * __useCreateCheckoutMutation__
 *
 * To run a mutation, you first call `useCreateCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCheckoutMutation, { data, loading, error }] = useCreateCheckoutMutation({
 *   variables: {
 *      input: // value for 'input'
 *      languageCode: // value for 'languageCode'
 *   },
 * });
 */
export function useCreateCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<CreateCheckoutMutation, CreateCheckoutMutationVariables>) {
        return Apollo.useMutation<CreateCheckoutMutation, CreateCheckoutMutationVariables>(CreateCheckoutDocument, baseOptions);
      }
export type CreateCheckoutMutationHookResult = ReturnType<typeof useCreateCheckoutMutation>;
export type CreateCheckoutMutationResult = Apollo.MutationResult<CreateCheckoutMutation>;
export type CreateCheckoutMutationOptions = Apollo.BaseMutationOptions<CreateCheckoutMutation, CreateCheckoutMutationVariables>;
export const CompleteCheckoutDocument = gql`
    mutation completeCheckout($checkoutId: ID!, $paymentData: JSONString, $redirectUrl: String, $storeSource: Boolean) {
  checkoutComplete(checkoutId: $checkoutId, paymentData: $paymentData, redirectUrl: $redirectUrl, storeSource: $storeSource) {
    checkoutErrors {
      field
      code
    }
    confirmationNeeded
    confirmationData
    order {
      ...orderDetailsFragment
    }
  }
}
    ${OrderDetailsFragmentFragmentDoc}`;
export type CompleteCheckoutMutationFn = Apollo.MutationFunction<CompleteCheckoutMutation, CompleteCheckoutMutationVariables>;

/**
 * __useCompleteCheckoutMutation__
 *
 * To run a mutation, you first call `useCompleteCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeCheckoutMutation, { data, loading, error }] = useCompleteCheckoutMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      paymentData: // value for 'paymentData'
 *      redirectUrl: // value for 'redirectUrl'
 *      storeSource: // value for 'storeSource'
 *   },
 * });
 */
export function useCompleteCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<CompleteCheckoutMutation, CompleteCheckoutMutationVariables>) {
        return Apollo.useMutation<CompleteCheckoutMutation, CompleteCheckoutMutationVariables>(CompleteCheckoutDocument, baseOptions);
      }
export type CompleteCheckoutMutationHookResult = ReturnType<typeof useCompleteCheckoutMutation>;
export type CompleteCheckoutMutationResult = Apollo.MutationResult<CompleteCheckoutMutation>;
export type CompleteCheckoutMutationOptions = Apollo.BaseMutationOptions<CompleteCheckoutMutation, CompleteCheckoutMutationVariables>;
export const GetCheckoutByTokenDocument = gql`
    query getCheckoutByToken($token: UUID!, $languageCode: LanguageCodeEnum!) {
  checkout(token: $token) {
    ...checkoutDetailsFragment
  }
}
    ${CheckoutDetailsFragmentFragmentDoc}`;

/**
 * __useGetCheckoutByTokenQuery__
 *
 * To run a query within a React component, call `useGetCheckoutByTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCheckoutByTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCheckoutByTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *      languageCode: // value for 'languageCode'
 *   },
 * });
 */
export function useGetCheckoutByTokenQuery(baseOptions?: Apollo.QueryHookOptions<GetCheckoutByTokenQuery, GetCheckoutByTokenQueryVariables>) {
        return Apollo.useQuery<GetCheckoutByTokenQuery, GetCheckoutByTokenQueryVariables>(GetCheckoutByTokenDocument, baseOptions);
      }
export function useGetCheckoutByTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCheckoutByTokenQuery, GetCheckoutByTokenQueryVariables>) {
          return Apollo.useLazyQuery<GetCheckoutByTokenQuery, GetCheckoutByTokenQueryVariables>(GetCheckoutByTokenDocument, baseOptions);
        }
export type GetCheckoutByTokenQueryHookResult = ReturnType<typeof useGetCheckoutByTokenQuery>;
export type GetCheckoutByTokenLazyQueryHookResult = ReturnType<typeof useGetCheckoutByTokenLazyQuery>;
export type GetCheckoutByTokenQueryResult = Apollo.QueryResult<GetCheckoutByTokenQuery, GetCheckoutByTokenQueryVariables>;
export const GetCollectionBySlugDocument = gql`
    query getCollectionBySlug($slug: String!, $languageCode: LanguageCodeEnum!, $first: Int, $last: Int, $after: String, $before: String, $filter: ProductFilterInput, $sortBy: ProductOrder) {
  collection(slug: $slug) {
    ...collectionDetailsFragment
  }
}
    ${CollectionDetailsFragmentFragmentDoc}`;

/**
 * __useGetCollectionBySlugQuery__
 *
 * To run a query within a React component, call `useGetCollectionBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      languageCode: // value for 'languageCode'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      filter: // value for 'filter'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useGetCollectionBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetCollectionBySlugQuery, GetCollectionBySlugQueryVariables>) {
        return Apollo.useQuery<GetCollectionBySlugQuery, GetCollectionBySlugQueryVariables>(GetCollectionBySlugDocument, baseOptions);
      }
export function useGetCollectionBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCollectionBySlugQuery, GetCollectionBySlugQueryVariables>) {
          return Apollo.useLazyQuery<GetCollectionBySlugQuery, GetCollectionBySlugQueryVariables>(GetCollectionBySlugDocument, baseOptions);
        }
export type GetCollectionBySlugQueryHookResult = ReturnType<typeof useGetCollectionBySlugQuery>;
export type GetCollectionBySlugLazyQueryHookResult = ReturnType<typeof useGetCollectionBySlugLazyQuery>;
export type GetCollectionBySlugQueryResult = Apollo.QueryResult<GetCollectionBySlugQuery, GetCollectionBySlugQueryVariables>;
export const GetCountriesDocument = gql`
    query getCountries($languageCode: LanguageCodeEnum!) {
  shop {
    countries(languageCode: $languageCode) {
      country
      code
    }
  }
}
    `;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *      languageCode: // value for 'languageCode'
 *   },
 * });
 */
export function useGetCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
        return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, baseOptions);
      }
export function useGetCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, baseOptions);
        }
export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>;
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>;
export type GetCountriesQueryResult = Apollo.QueryResult<GetCountriesQuery, GetCountriesQueryVariables>;
export const GetPaymentGatewaysDocument = gql`
    query getPaymentGateways {
  shop {
    availablePaymentGateways {
      name
      id
      config {
        field
        value
      }
      currencies
    }
  }
}
    `;

/**
 * __useGetPaymentGatewaysQuery__
 *
 * To run a query within a React component, call `useGetPaymentGatewaysQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentGatewaysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentGatewaysQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPaymentGatewaysQuery(baseOptions?: Apollo.QueryHookOptions<GetPaymentGatewaysQuery, GetPaymentGatewaysQueryVariables>) {
        return Apollo.useQuery<GetPaymentGatewaysQuery, GetPaymentGatewaysQueryVariables>(GetPaymentGatewaysDocument, baseOptions);
      }
export function useGetPaymentGatewaysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentGatewaysQuery, GetPaymentGatewaysQueryVariables>) {
          return Apollo.useLazyQuery<GetPaymentGatewaysQuery, GetPaymentGatewaysQueryVariables>(GetPaymentGatewaysDocument, baseOptions);
        }
export type GetPaymentGatewaysQueryHookResult = ReturnType<typeof useGetPaymentGatewaysQuery>;
export type GetPaymentGatewaysLazyQueryHookResult = ReturnType<typeof useGetPaymentGatewaysLazyQuery>;
export type GetPaymentGatewaysQueryResult = Apollo.QueryResult<GetPaymentGatewaysQuery, GetPaymentGatewaysQueryVariables>;
export const GetSiteDetailsDocument = gql`
    query getSiteDetails {
  shop {
    companyAddress {
      ...addressDetailsFragment
    }
    description
  }
}
    ${AddressDetailsFragmentFragmentDoc}`;

/**
 * __useGetSiteDetailsQuery__
 *
 * To run a query within a React component, call `useGetSiteDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSiteDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSiteDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSiteDetailsQuery(baseOptions?: Apollo.QueryHookOptions<GetSiteDetailsQuery, GetSiteDetailsQueryVariables>) {
        return Apollo.useQuery<GetSiteDetailsQuery, GetSiteDetailsQueryVariables>(GetSiteDetailsDocument, baseOptions);
      }
export function useGetSiteDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSiteDetailsQuery, GetSiteDetailsQueryVariables>) {
          return Apollo.useLazyQuery<GetSiteDetailsQuery, GetSiteDetailsQueryVariables>(GetSiteDetailsDocument, baseOptions);
        }
export type GetSiteDetailsQueryHookResult = ReturnType<typeof useGetSiteDetailsQuery>;
export type GetSiteDetailsLazyQueryHookResult = ReturnType<typeof useGetSiteDetailsLazyQuery>;
export type GetSiteDetailsQueryResult = Apollo.QueryResult<GetSiteDetailsQuery, GetSiteDetailsQueryVariables>;
export const GetMenuDocument = gql`
    query getMenu($slug: String, $name: String, $languageCode: LanguageCodeEnum!, $channel: String!) {
  menu(slug: $slug, name: $name, channel: $channel) {
    name
    slug
    items {
      ...navigationMenuItemDetail
    }
  }
}
    ${NavigationMenuItemDetailFragmentDoc}`;

/**
 * __useGetMenuQuery__
 *
 * To run a query within a React component, call `useGetMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      name: // value for 'name'
 *      languageCode: // value for 'languageCode'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useGetMenuQuery(baseOptions?: Apollo.QueryHookOptions<GetMenuQuery, GetMenuQueryVariables>) {
        return Apollo.useQuery<GetMenuQuery, GetMenuQueryVariables>(GetMenuDocument, baseOptions);
      }
export function useGetMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMenuQuery, GetMenuQueryVariables>) {
          return Apollo.useLazyQuery<GetMenuQuery, GetMenuQueryVariables>(GetMenuDocument, baseOptions);
        }
export type GetMenuQueryHookResult = ReturnType<typeof useGetMenuQuery>;
export type GetMenuLazyQueryHookResult = ReturnType<typeof useGetMenuLazyQuery>;
export type GetMenuQueryResult = Apollo.QueryResult<GetMenuQuery, GetMenuQueryVariables>;
export const GetOrderByIdDocument = gql`
    query getOrderById($id: ID!) {
  order(id: $id) {
    ...orderDetailsFragment
  }
}
    ${OrderDetailsFragmentFragmentDoc}`;

/**
 * __useGetOrderByIdQuery__
 *
 * To run a query within a React component, call `useGetOrderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetOrderByIdQuery, GetOrderByIdQueryVariables>) {
        return Apollo.useQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GetOrderByIdDocument, baseOptions);
      }
export function useGetOrderByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderByIdQuery, GetOrderByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GetOrderByIdDocument, baseOptions);
        }
export type GetOrderByIdQueryHookResult = ReturnType<typeof useGetOrderByIdQuery>;
export type GetOrderByIdLazyQueryHookResult = ReturnType<typeof useGetOrderByIdLazyQuery>;
export type GetOrderByIdQueryResult = Apollo.QueryResult<GetOrderByIdQuery, GetOrderByIdQueryVariables>;
export const GetOrderByTokenDocument = gql`
    query getOrderByToken($token: UUID!) {
  orderByToken(token: $token) {
    ...orderDetailsFragment
  }
}
    ${OrderDetailsFragmentFragmentDoc}`;

/**
 * __useGetOrderByTokenQuery__
 *
 * To run a query within a React component, call `useGetOrderByTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderByTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderByTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetOrderByTokenQuery(baseOptions?: Apollo.QueryHookOptions<GetOrderByTokenQuery, GetOrderByTokenQueryVariables>) {
        return Apollo.useQuery<GetOrderByTokenQuery, GetOrderByTokenQueryVariables>(GetOrderByTokenDocument, baseOptions);
      }
export function useGetOrderByTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderByTokenQuery, GetOrderByTokenQueryVariables>) {
          return Apollo.useLazyQuery<GetOrderByTokenQuery, GetOrderByTokenQueryVariables>(GetOrderByTokenDocument, baseOptions);
        }
export type GetOrderByTokenQueryHookResult = ReturnType<typeof useGetOrderByTokenQuery>;
export type GetOrderByTokenLazyQueryHookResult = ReturnType<typeof useGetOrderByTokenLazyQuery>;
export type GetOrderByTokenQueryResult = Apollo.QueryResult<GetOrderByTokenQuery, GetOrderByTokenQueryVariables>;
export const GetOrderListDocument = gql`
    query getOrderList($first: Int, $last: Int, $after: String, $before: String, $filter: OrderFilterInput, $sortBy: OrderSortingInput, $channel: String!) {
  orders(first: $first, last: $last, after: $after, before: $before, filter: $filter, sortBy: $sortBy, channel: $channel) {
    edges {
      node {
        ...orderDetailsFragment
      }
      cursor
    }
    pageInfo {
      ...pageInfoFragment
    }
  }
}
    ${OrderDetailsFragmentFragmentDoc}
${PageInfoFragmentFragmentDoc}`;

/**
 * __useGetOrderListQuery__
 *
 * To run a query within a React component, call `useGetOrderListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      filter: // value for 'filter'
 *      sortBy: // value for 'sortBy'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useGetOrderListQuery(baseOptions?: Apollo.QueryHookOptions<GetOrderListQuery, GetOrderListQueryVariables>) {
        return Apollo.useQuery<GetOrderListQuery, GetOrderListQueryVariables>(GetOrderListDocument, baseOptions);
      }
export function useGetOrderListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderListQuery, GetOrderListQueryVariables>) {
          return Apollo.useLazyQuery<GetOrderListQuery, GetOrderListQueryVariables>(GetOrderListDocument, baseOptions);
        }
export type GetOrderListQueryHookResult = ReturnType<typeof useGetOrderListQuery>;
export type GetOrderListLazyQueryHookResult = ReturnType<typeof useGetOrderListLazyQuery>;
export type GetOrderListQueryResult = Apollo.QueryResult<GetOrderListQuery, GetOrderListQueryVariables>;
export const GetPageBySlugDocument = gql`
    query getPageBySlug($slug: String!, $languageCode: LanguageCodeEnum!) {
  page(slug: $slug) {
    slug
    seoTitle
    seoDescription
    title
    seoDescription
    translation(languageCode: $languageCode) {
      seoTitle
      seoDescription
      content
      contentJson
    }
    attributes {
      attribute {
        slug
        name
      }
      values {
        name
        slug
        translation(languageCode: $languageCode) {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetPageBySlugQuery__
 *
 * To run a query within a React component, call `useGetPageBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      languageCode: // value for 'languageCode'
 *   },
 * });
 */
export function useGetPageBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetPageBySlugQuery, GetPageBySlugQueryVariables>) {
        return Apollo.useQuery<GetPageBySlugQuery, GetPageBySlugQueryVariables>(GetPageBySlugDocument, baseOptions);
      }
export function useGetPageBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageBySlugQuery, GetPageBySlugQueryVariables>) {
          return Apollo.useLazyQuery<GetPageBySlugQuery, GetPageBySlugQueryVariables>(GetPageBySlugDocument, baseOptions);
        }
export type GetPageBySlugQueryHookResult = ReturnType<typeof useGetPageBySlugQuery>;
export type GetPageBySlugLazyQueryHookResult = ReturnType<typeof useGetPageBySlugLazyQuery>;
export type GetPageBySlugQueryResult = Apollo.QueryResult<GetPageBySlugQuery, GetPageBySlugQueryVariables>;
export const CreatePaymentDocument = gql`
    mutation createPayment($checkoutId: ID!, $input: PaymentInput!, $languageCode: LanguageCodeEnum!) {
  checkoutPaymentCreate(checkoutId: $checkoutId, input: $input) {
    checkout {
      ...checkoutDetailsFragment
    }
    payment {
      ...paymentDetailsFragment
    }
    paymentErrors {
      field
      code
    }
  }
}
    ${CheckoutDetailsFragmentFragmentDoc}
${PaymentDetailsFragmentFragmentDoc}`;
export type CreatePaymentMutationFn = Apollo.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      input: // value for 'input'
 *      languageCode: // value for 'languageCode'
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
        return Apollo.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, baseOptions);
      }
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = Apollo.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const GetProductByIdDocument = gql`
    query getProductById($id: ID!, $languageCode: LanguageCodeEnum!, $channel: String) {
  product(id: $id, channel: $channel) {
    ...productDetailsFragment
    variants {
      ...productVariantDetails
    }
  }
}
    ${ProductDetailsFragmentFragmentDoc}
${ProductVariantDetailsFragmentDoc}`;

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      languageCode: // value for 'languageCode'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useGetProductByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
        return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, baseOptions);
      }
export function useGetProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, baseOptions);
        }
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>;
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>;
export type GetProductByIdQueryResult = Apollo.QueryResult<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetProductBySlugDocument = gql`
    query getProductBySlug($slug: String!, $languageCode: LanguageCodeEnum!, $channel: String) {
  product(slug: $slug, channel: $channel) {
    ...productDetailsFragment
    variants {
      ...productVariantDetails
    }
  }
}
    ${ProductDetailsFragmentFragmentDoc}
${ProductVariantDetailsFragmentDoc}`;

/**
 * __useGetProductBySlugQuery__
 *
 * To run a query within a React component, call `useGetProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      languageCode: // value for 'languageCode'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useGetProductBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetProductBySlugQuery, GetProductBySlugQueryVariables>) {
        return Apollo.useQuery<GetProductBySlugQuery, GetProductBySlugQueryVariables>(GetProductBySlugDocument, baseOptions);
      }
export function useGetProductBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductBySlugQuery, GetProductBySlugQueryVariables>) {
          return Apollo.useLazyQuery<GetProductBySlugQuery, GetProductBySlugQueryVariables>(GetProductBySlugDocument, baseOptions);
        }
export type GetProductBySlugQueryHookResult = ReturnType<typeof useGetProductBySlugQuery>;
export type GetProductBySlugLazyQueryHookResult = ReturnType<typeof useGetProductBySlugLazyQuery>;
export type GetProductBySlugQueryResult = Apollo.QueryResult<GetProductBySlugQuery, GetProductBySlugQueryVariables>;
export const GetProductListDocument = gql`
    query getProductList($first: Int, $last: Int, $after: String, $before: String, $filter: ProductFilterInput, $sortBy: ProductOrder, $languageCode: LanguageCodeEnum!, $channel: String) {
  products(first: $first, last: $last, after: $after, before: $before, filter: $filter, sortBy: $sortBy, channel: $channel) {
    edges {
      node {
        ...productDetailsFragment
      }
      cursor
    }
    ...productPageInfoFragment
  }
}
    ${ProductDetailsFragmentFragmentDoc}
${ProductPageInfoFragmentFragmentDoc}`;

/**
 * __useGetProductListQuery__
 *
 * To run a query within a React component, call `useGetProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      filter: // value for 'filter'
 *      sortBy: // value for 'sortBy'
 *      languageCode: // value for 'languageCode'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useGetProductListQuery(baseOptions?: Apollo.QueryHookOptions<GetProductListQuery, GetProductListQueryVariables>) {
        return Apollo.useQuery<GetProductListQuery, GetProductListQueryVariables>(GetProductListDocument, baseOptions);
      }
export function useGetProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductListQuery, GetProductListQueryVariables>) {
          return Apollo.useLazyQuery<GetProductListQuery, GetProductListQueryVariables>(GetProductListDocument, baseOptions);
        }
export type GetProductListQueryHookResult = ReturnType<typeof useGetProductListQuery>;
export type GetProductListLazyQueryHookResult = ReturnType<typeof useGetProductListLazyQuery>;
export type GetProductListQueryResult = Apollo.QueryResult<GetProductListQuery, GetProductListQueryVariables>;
export const CreateReviewDocument = gql`
    mutation createReview($productId: ID!, $rating: Int!, $content: String!) {
  reviewCreate(input: {product: $productId, rating: $rating, content: $content}) {
    review {
      ...reviewDetailsFragment
    }
    reviewsErrors {
      field
      message
      code
    }
  }
}
    ${ReviewDetailsFragmentFragmentDoc}`;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      rating: // value for 'rating'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, baseOptions);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const GetReviewsListDocument = gql`
    query getReviewsList($first: Int, $after: String, $before: String, $filter: ReviewFilterInput, $sortBy: ReviewSortingInput) {
  reviews(first: $first, after: $after, before: $before, filter: $filter, sortBy: $sortBy) {
    edges {
      node {
        ...reviewDetailsFragment
      }
    }
    pageInfo {
      ...pageInfoFragment
    }
  }
}
    ${ReviewDetailsFragmentFragmentDoc}
${PageInfoFragmentFragmentDoc}`;

/**
 * __useGetReviewsListQuery__
 *
 * To run a query within a React component, call `useGetReviewsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewsListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      filter: // value for 'filter'
 *      sortBy: // value for 'sortBy'
 *   },
 * });
 */
export function useGetReviewsListQuery(baseOptions?: Apollo.QueryHookOptions<GetReviewsListQuery, GetReviewsListQueryVariables>) {
        return Apollo.useQuery<GetReviewsListQuery, GetReviewsListQueryVariables>(GetReviewsListDocument, baseOptions);
      }
export function useGetReviewsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReviewsListQuery, GetReviewsListQueryVariables>) {
          return Apollo.useLazyQuery<GetReviewsListQuery, GetReviewsListQueryVariables>(GetReviewsListDocument, baseOptions);
        }
export type GetReviewsListQueryHookResult = ReturnType<typeof useGetReviewsListQuery>;
export type GetReviewsListLazyQueryHookResult = ReturnType<typeof useGetReviewsListLazyQuery>;
export type GetReviewsListQueryResult = Apollo.QueryResult<GetReviewsListQuery, GetReviewsListQueryVariables>;
export const CreateUserTokensDocument = gql`
    mutation createUserTokens($email: String!, $password: String!) {
  tokenCreate(email: $email, password: $password) {
    token
    refreshToken
    csrfToken
    user {
      ...userPrivateDetailsFragment
    }
    accountErrors {
      code
      field
    }
  }
}
    ${UserPrivateDetailsFragmentFragmentDoc}`;
export type CreateUserTokensMutationFn = Apollo.MutationFunction<CreateUserTokensMutation, CreateUserTokensMutationVariables>;

/**
 * __useCreateUserTokensMutation__
 *
 * To run a mutation, you first call `useCreateUserTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserTokensMutation, { data, loading, error }] = useCreateUserTokensMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserTokensMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserTokensMutation, CreateUserTokensMutationVariables>) {
        return Apollo.useMutation<CreateUserTokensMutation, CreateUserTokensMutationVariables>(CreateUserTokensDocument, baseOptions);
      }
export type CreateUserTokensMutationHookResult = ReturnType<typeof useCreateUserTokensMutation>;
export type CreateUserTokensMutationResult = Apollo.MutationResult<CreateUserTokensMutation>;
export type CreateUserTokensMutationOptions = Apollo.BaseMutationOptions<CreateUserTokensMutation, CreateUserTokensMutationVariables>;
export const AccountRegisterDocument = gql`
    mutation accountRegister($email: String!, $password: String!, $redirectUrl: String!) {
  accountRegister(input: {email: $email, password: $password, redirectUrl: $redirectUrl}) {
    requiresConfirmation
    accountErrors {
      field
      code
    }
    user {
      ...userPrivateDetailsFragment
    }
  }
}
    ${UserPrivateDetailsFragmentFragmentDoc}`;
export type AccountRegisterMutationFn = Apollo.MutationFunction<AccountRegisterMutation, AccountRegisterMutationVariables>;

/**
 * __useAccountRegisterMutation__
 *
 * To run a mutation, you first call `useAccountRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountRegisterMutation, { data, loading, error }] = useAccountRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      redirectUrl: // value for 'redirectUrl'
 *   },
 * });
 */
export function useAccountRegisterMutation(baseOptions?: Apollo.MutationHookOptions<AccountRegisterMutation, AccountRegisterMutationVariables>) {
        return Apollo.useMutation<AccountRegisterMutation, AccountRegisterMutationVariables>(AccountRegisterDocument, baseOptions);
      }
export type AccountRegisterMutationHookResult = ReturnType<typeof useAccountRegisterMutation>;
export type AccountRegisterMutationResult = Apollo.MutationResult<AccountRegisterMutation>;
export type AccountRegisterMutationOptions = Apollo.BaseMutationOptions<AccountRegisterMutation, AccountRegisterMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
  passwordChange(oldPassword: $oldPassword, newPassword: $newPassword) {
    accountErrors {
      field
      code
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const VerifyTokenDocument = gql`
    mutation verifyToken($token: String!) {
  tokenVerify(token: $token) {
    isValid
    payload
    accountErrors {
      code
      field
    }
  }
}
    `;
export type VerifyTokenMutationFn = Apollo.MutationFunction<VerifyTokenMutation, VerifyTokenMutationVariables>;

/**
 * __useVerifyTokenMutation__
 *
 * To run a mutation, you first call `useVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyTokenMutation, { data, loading, error }] = useVerifyTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyTokenMutation(baseOptions?: Apollo.MutationHookOptions<VerifyTokenMutation, VerifyTokenMutationVariables>) {
        return Apollo.useMutation<VerifyTokenMutation, VerifyTokenMutationVariables>(VerifyTokenDocument, baseOptions);
      }
export type VerifyTokenMutationHookResult = ReturnType<typeof useVerifyTokenMutation>;
export type VerifyTokenMutationResult = Apollo.MutationResult<VerifyTokenMutation>;
export type VerifyTokenMutationOptions = Apollo.BaseMutationOptions<VerifyTokenMutation, VerifyTokenMutationVariables>;
export const TokenRenewDocument = gql`
    mutation tokenRenew($csrfToken: String, $refreshToken: String) {
  tokenRefresh(csrfToken: $csrfToken, refreshToken: $refreshToken) {
    accountErrors {
      code
      field
    }
    token
    user {
      ...userPrivateDetailsFragment
    }
  }
}
    ${UserPrivateDetailsFragmentFragmentDoc}`;
export type TokenRenewMutationFn = Apollo.MutationFunction<TokenRenewMutation, TokenRenewMutationVariables>;

/**
 * __useTokenRenewMutation__
 *
 * To run a mutation, you first call `useTokenRenewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenRenewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenRenewMutation, { data, loading, error }] = useTokenRenewMutation({
 *   variables: {
 *      csrfToken: // value for 'csrfToken'
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useTokenRenewMutation(baseOptions?: Apollo.MutationHookOptions<TokenRenewMutation, TokenRenewMutationVariables>) {
        return Apollo.useMutation<TokenRenewMutation, TokenRenewMutationVariables>(TokenRenewDocument, baseOptions);
      }
export type TokenRenewMutationHookResult = ReturnType<typeof useTokenRenewMutation>;
export type TokenRenewMutationResult = Apollo.MutationResult<TokenRenewMutation>;
export type TokenRenewMutationOptions = Apollo.BaseMutationOptions<TokenRenewMutation, TokenRenewMutationVariables>;
export const UpdateCustomerDocument = gql`
    mutation updateCustomer($id: ID!, $input: CustomerInput!) {
  customerUpdate(id: $id, input: $input) {
    accountErrors {
      code
      field
    }
    user {
      ...userPrivateDetailsFragment
    }
  }
}
    ${UserPrivateDetailsFragmentFragmentDoc}`;
export type UpdateCustomerMutationFn = Apollo.MutationFunction<UpdateCustomerMutation, UpdateCustomerMutationVariables>;

/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>) {
        return Apollo.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, baseOptions);
      }
export type UpdateCustomerMutationHookResult = ReturnType<typeof useUpdateCustomerMutation>;
export type UpdateCustomerMutationResult = Apollo.MutationResult<UpdateCustomerMutation>;
export type UpdateCustomerMutationOptions = Apollo.BaseMutationOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>;
export const UpdateMetadataDocument = gql`
    mutation updateMetadata($id: ID!, $input: [MetadataInput!]!) {
  updateMetadata(id: $id, input: $input) {
    metadataErrors {
      field
      code
    }
    item {
      metadata {
        key
        value
      }
    }
  }
}
    `;
export type UpdateMetadataMutationFn = Apollo.MutationFunction<UpdateMetadataMutation, UpdateMetadataMutationVariables>;

/**
 * __useUpdateMetadataMutation__
 *
 * To run a mutation, you first call `useUpdateMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMetadataMutation, { data, loading, error }] = useUpdateMetadataMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMetadataMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMetadataMutation, UpdateMetadataMutationVariables>) {
        return Apollo.useMutation<UpdateMetadataMutation, UpdateMetadataMutationVariables>(UpdateMetadataDocument, baseOptions);
      }
export type UpdateMetadataMutationHookResult = ReturnType<typeof useUpdateMetadataMutation>;
export type UpdateMetadataMutationResult = Apollo.MutationResult<UpdateMetadataMutation>;
export type UpdateMetadataMutationOptions = Apollo.BaseMutationOptions<UpdateMetadataMutation, UpdateMetadataMutationVariables>;
export const GetCurrentAuthUserDocument = gql`
    query getCurrentAuthUser {
  me {
    ...userPrivateDetailsFragment
  }
}
    ${UserPrivateDetailsFragmentFragmentDoc}`;

/**
 * __useGetCurrentAuthUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentAuthUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentAuthUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentAuthUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentAuthUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentAuthUserQuery, GetCurrentAuthUserQueryVariables>) {
        return Apollo.useQuery<GetCurrentAuthUserQuery, GetCurrentAuthUserQueryVariables>(GetCurrentAuthUserDocument, baseOptions);
      }
export function useGetCurrentAuthUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentAuthUserQuery, GetCurrentAuthUserQueryVariables>) {
          return Apollo.useLazyQuery<GetCurrentAuthUserQuery, GetCurrentAuthUserQueryVariables>(GetCurrentAuthUserDocument, baseOptions);
        }
export type GetCurrentAuthUserQueryHookResult = ReturnType<typeof useGetCurrentAuthUserQuery>;
export type GetCurrentAuthUserLazyQueryHookResult = ReturnType<typeof useGetCurrentAuthUserLazyQuery>;
export type GetCurrentAuthUserQueryResult = Apollo.QueryResult<GetCurrentAuthUserQuery, GetCurrentAuthUserQueryVariables>;