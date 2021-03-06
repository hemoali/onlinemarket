/**
 *		CONSTANTS
 */

const API_LINK = "http://localhost/onlinemarket/api/api.php/";
const WEBSITE_LINK = "http://localhost/onlinemarket/";
const ADMIN_LINK = "http://localhost/onlinemarket/admin";
const LOGIN_ENDPOINT = "login";
const SIGNUP_ENDPOINT = "signup";
const USER_ENDPOINT = "user";
const CHANGE_USER_STATUS_ENDPOINT = "block";
const USER_EDIT_ENDPOINT = "edit";
const USER_CART_ENDPOINT = "cart";
const ORDERS_ENDPOINT = "orders";
const ORDER_ENDPOINT = "order";
const CATEGORY_ENDPOINT = "category";
const CATEGORY_SPEC_ENDPOINT = "categoryspec";
const DELIVERYREQUESTS_ENDPOINT = "deliveryrequests";
const PRODUCT_ENDPOINT = "product";
const PRODUCTS_ENDPOINT = "products";
const RATE_ENDPOINT = "rate";

const OMARKET_PREFIX = "OMarket_";

const OMARKET_JWT = "OMarket_JWT";

const USERS_FLD_ID = '_id';
const USERS_FLD_EMAIL = 'email';
const USERS_FLD_TMP_EMAIL = 'tmpEmail';
const USERS_FLD_PASS = 'pass';
const USERS_FLD_PASS1 = 'pass1';
const USERS_FLD_PASS2 = 'pass2';
const USERS_FLD_USER_TYPE = 'user_type';
const USERS_FLD_NAME = 'name';
const USERS_FLD_TEL = 'tel';
const USERS_FLD_STATUS = 'user_status';

const BUYERS_FLD_USER_ID = 'user_id';
const BUYERS_FLD_ADDRESS = 'address';
const BUYERS_FLD_CCNUMBER = 'creditcard';
const BUYERS_FLD_CC_CCV = 'cc_ccv';
const BUYERS_FLD_CC_MONTH = 'cc_month';
const BUYERS_FLD_CC_YEAR = 'cc_year';

const SELLERS_FLD_USER_ID = 'user_id';
const SELLERS_FLD_ADDRESS = 'address';
const SELLERS_FLD_BANK_ACCOUNT = 'bankaccount';

const USER_BUYER = "1";
const USER_SELLER = "2";
const USER_ACCOUNTANT = "3";
const USER_ADMIN = "4";
const USER_DELIVERYMAN = "5";

const USER_ACTIVE = "1";
const USER_BANNED = "2";


const AUTH_RESPONSE_STATUS_CODE = "statusCode";
const AUTH_RESPONSE_JWT = "jwt";
const AUTH_RESPONSE_RESULT = "result";
const AUTH_RESPONSE_CC_NUMBER = "ccNumber";
const AUTH_RESPONSE_CC_MONTH = "ccMonth";
const AUTH_RESPONSE_CC_YEAR = "ccYear";
const AUTH_RESPONSE_CC_CCV = "ccCCV";
const AUTH_RESPONSE_ERROR_MSG = "errorMsg";

const ORDERS_ID = '_id';
const ORDERS_ISSUEDATE = 'issuedate';
const ORDERS_COST = 'cost';
const ORDERS_BUYER_ID = 'buyer_id';
const ORDERS_STATUS_ID = 'status_id';

const ORDER_STATUS_PENDING = "1";
const ORDER_STATUS_PICKED = "2";
const ORDER_STATUS_SHIPPED = "3";
const ORDER_STATUS_DELIVERED = "4";
const ORDER_STATUS_DELETED = "5";


//THE CART ITEMS TABLE CONSTANTS
const TBL_CART_ITEMS = 'cart_items';
const CART_ITEMS_USER_ID = 'user_id';
const CART_ITEMS_PRODUCT_ID = 'product_id';
const CART_ITEMS_QUANTITY = 'quantity';

// ORDERS FILTERS CONSTANTS
const ORDER_FILTER_COST = 'cost';
const ORDER_FILTER_DATE = 'date';
const ORDER_FILTER_STATUS = 'status';
const ORDER_FILTER_MIN = 'min';
const ORDER_FILTER_MAX = 'max';
const ORDER_FILTER_PENDING = 'pending';
const ORDER_FILTER_PICKED = 'picked';
const ORDER_FILTER_SHPPED = 'shipped';
const ORDER_FILTER_DELIVERED = 'delivered';

const DELIVERYREQUESTS_ID = '_id';
const DELIVERYREQUESTS_ORDERID = 'order_id';
const DELIVERYREQUESTS_DELIVERYMANID = 'deliveryman_id';
const DELIVERYREQUESTS_DUEDATE = 'duedate';
const DELIVERYREQUESTS_STATUS_ID = 'status_id';
const DELIVERYREQUESTS_ORDER_ID = '_id';

const CATEGORIES_FLD_ID = '_id';
const CATEGORIES_FLD_NAME = 'name';
const CATEGORIES_SPEC = 'spec';

const CATEGORIES_SPEC_FLD_NAME = 'name';
const CATEGORIES_SPEC_FLD_CATID = 'category_id';
const CATEGORIES_SPEC_FLD_ID = '_id';

const PRODUCTS_FLD_ID = '_id';
const PRODUCTS_FLD_AVA_QUANTITY = "available_quantity";
const PRODUCTS_FLD_AVA_STATUS = "availability_id";
const PRODUCTS_FLD_CATEGORY_ID = 'category_id';
const PRODUCTS_FLD_RATE = 'rate';
const PRODUCTS_FLD_PRICE = 'price';
const PRODUCTS_FLD_NAME = 'name';
const PRODUCTS_FLD_SIZE = 'size';
const PRODUCTS_FLD_WEIGHT = 'weight';
const PRODUCTS_FLD_AVAILABILITY_ID = 'availability_id';
const PRODUCTS_FLD_ORIGIN = 'origin';
const PRODUCTS_FLD_EARNINGS = 'earnings';
const PRODUCTS_FLD_PROVIDER = 'provider';
const PRODUCTS_FLD_IMAGE = 'image';
const PRODUCTS_FLD_SELLER_ID = 'seller_id';
const PRODUCTS_FLD_SOLDITEMS = 'solditems';
const PRODUCTS_FLD_DESCRIPTION = 'description';



const RATE_FLD_PRODUCT_ID = 'product_id';
const RATE_FLD_RATE = 'rate';
const RATE_FLD_USER_ID = 'user_id';
/**
 * Product availability statuses
 */
const AVAILABILITY_STATUSES = ["Available", "Inavailable"];
const AVAILABILITY_STATUSESID = ["1", "2"];
const PRODUCT_AVAILABLE = "1"; // Relative to DB
const PRODUCT_INAVAILABLE = "2"; // Relative to DB'
const PRODUCT_DELETED = "3"; // Relative to DB (Hidden from sellers, buyers, normal users)


const PRODUCT_SPEC_FLD_PRODUCT_ID = 'product_id';
const PRODUCT_SPEC_FLD_CAT_ID = 'categories_spec_id';
const PRODUCT_SPEC_FLD_VALUE = 'value';
const PRODUCT_SPEC_FLD_ID = '_id';

//Product specs response column names
const PRODUCT_SPEC_PSID = 'PSID';
const PRODUCT_SPEC_CSNAME = 'CSNAME';
const PRODUCT_SPEC_PSVALUE = 'PSVALUE';
const PRODUCT_SELLER_NAME = 'seller_name';
const PRODUCT_CATEGORY_NAME = 'category_name';
const PRODUCT_AVAILABILITY_STATUS = 'availability_status';
/**
 * Sign up operation (1x) constants
 */

const SIGNUP_SUCCESSFUL_SIGNUP = 10;
const SIGNUP_INVALID_EMAIL = 11;
const SIGNUP_PASSWORDS_MISMATCH = 12;
const SIGNUP_INVALID_ROLE = 13;
const SIGNUP_EMAIL_EXISTS = 14;
const SIGNUP_OPERATION_FAILED = 15;
const SIGNUP_EMPTY_DATA = 16;
const SIGNUP_INVALID_CCNUMBER = 17;
const SIGNUP_INVALID_CCCCV = 18;
const SIGNUP_INVALID_CCDATE = 19;

/**
 * Login operation (2x) constants
 */
const LOGIN_SUCCESSFUL_LOGIN = 20;
const LOGIN_INVALID_EMAIL = 21;
const LOGIN_EMPTY_DATA = 22;
const LOGIN_OPERATION_FAILED = 23;
const LOGIN_INCORRECT_DATA = 24;

/**
 * User operations (8x) constants
 */
const USER_EDIT_ACCOUNT_SUCCESSFUL = 800;
const USER_EDIT_ACCOUNT_EMPTY_DATA = 801;
const USER_EDIT_ACCOUNT_FAILED = 802;
const USER_EDIT_ACCOUNT_INVALID_PASS = 803;
const USER_GET_USERS_FAILED = 811;
const USER_GET_USERS_SUCCESSFUL = 810;
const USER_UPDATE_STATUS_INVALID_DATA = 821;
const USER_UPDATE_STATUS_SUCCESSFUL = 820;
const USER_UPDATE_STATUS_FAILED = 823;
const USER_DELETE_FAILED = 831;
const USER_DELETE_SUCCESSFUL = 830;
const USER_INSERT_FAILED = 841;
const USER_INSERT_SUCCESSFUL = 840;
const USER_INSERT_INVALID_DATA = 842;
const USER_INSERT_INVALID_EMAIL = 843;
const USER_INSERT_EMPTY_DATA = 844;
const USER_STATUS_BANNED = 850;


/**
 * Cart operations (9x) constants
 */
const CART_ADD_ITEM_SUCCESSFUL = 901;
const CART_ADD_ITEM_FAILED = 902;
const CART_ADD_ITEM_EMPTY_DATA = 903;
const CART_ADD_ITEM_NOT_AVAILABLE = 904;
const CART_ADD_ITEM_USER_BANNED = 905;
const CART_ADD_ITEM_LIMIT = 906;
const CART_DELETE_ITEM_SUCCESSFUL = 910;
const CART_DELETE_ITEM_FAILED = 911;
const CART_DELETE_ITEM_EMPTY_DATA = 912;
const CART_DECREASE_ITEM_SUCCESSFUL = 920;
const CART_DECREASE_ITEM_FAILED = 921;
const CART_DECREASE_ITEM_EMPTY_DATA = 922;
const CART_GET_ITEMS_SUCCESSFUL = 930;
const CART_GET_ITEMS_FAILED = 931;
/**
 * Order operation functions (4x) constants
 */
const ORDERS_GET_SUCCESSFUL = 40;
const ORDERS_GET_FAILED = 41;
const ORDERS_DELETE_SUCCESS = 42;
const ORDERS_DELETE_FAILED = 43;
const ORDERS_ADD_SUCCESS = 44;
const ORDERS_ADD_FAILED = 45;
const ORDERS_UPDATE_SUCCESS = 46;
const ORDERS_UPDATE_FAILED = 47;

/**
 * DeliveryRequests operation functions (6x) constants
 */
const DELIVERYREQUESTS_GET_SUCCESSFUL = 60;
const DELIVERYREQUESTS_GET_FAILED = 61;

/**
 * Category operation functions (3x) constants
 */
const CATEGORY_INSERT_FAILED = 30;
const CATEGORY_NAME_REPETION = 31;
const CATEGORY_ADD_SUCCESS = 32;
const CATEGORY_DELETE_SUCCESS = 33;
const CATEGORY_EMPTY_DATA = 34;
const CATEGORY_DELETE_FAILED = 35;
const CATEGORY_INVALID_ID = 36;
const CATEGORY_SELECT_FAILED = 37;
const CATEGORY_UPDATE_FAILED = 38;
const CATEGORY_SELECT_SUCCESS = 39;
const CATEGORY_UPDATE_SUCCESS = 301;
const CATEGORY_DELETE_FAILED_FOREIGNKEY = 302;
const CATEGORY_GET_ALL_CATEGORIES_SUCCESS = 303;
const CATEGORY_GET_ALL_CATEGORIES_FAILED = 304;


/**
 * Category Spec operation functions (10x) constants
 */
const CATEGORY_SPECS_INSERT_FAILED = 100;
const CATEGORY_SPECS_NAME_REPEATED = 101;
const CATEGORY_SPECS_ADD_SUCCESS = 102;
const CATEGORY_SPECS_INVALID_CAT_ID = 103;
const CATEGORY_SPECS_EMPTY_DATA = 104;
const CATEGORY_SPECS_UPDATE_FAILED = 105;
const CATEGORY_SPECS_PRIMARY_KEY = 106;
const CATEGORY_SPEC_UPDATE_SUCCESS = 107;
const CATEGORY_SPECS_INVALID_SPEC_ID = 108;
const CATEGORY_SPEC_DELETE_FAILED = 109;
const CATEGORY_SPEC_DELETE_SUCCESS = 110;
const CATEGORY_SPEC_SELECT_SUCCESS = 111;


/**
 * Products operation functions (20x) constants
 */
const PRODUCT_GET_TOP_3_IN_4_CAT_SUCCESS = 200;
const PRODUCT_GET_TOP_3_IN_4_CAT_FAILED = 201;
const PRODUCT_GET_FROM_KEY_SUCCESS = 202;
const PRODUCT_GET_FROM_KEY_FAILED = 203;
const PRODUCT_GET_FROM_KEY_EMPTY = 204;
const PRODUCT_GET_FROM_CAT_EMPTY_DATA = 205;
const PRODUCT_GET_FROM_CAT_SUCCESS = 206;
const PRODUCT_GET_FROM_CAT_FAILED = 207;
const PRODUCT_GET_FROM_SELLER_EMPTY_DATA = 208;
const PRODUCT_GET_FROM_SELLER_SUCCESS = 209;
const PRODUCT_GET_FROM_SELLER_FAILED = 20000;
const PRODUCT_GET_EARNINGS_FAILED = 20001;
const PRODUCT_TOTAL_EARNINGS_SUCCESS = 20002;
const PRODUCT_INVALID_CATEGORY = 20003;
const PRODUCT_INVALID_SELLER = 20004;
const PRODUCT_TOTAL_EARNINGS_EMPTY_DATA = 20005;
const PRODUCT_INVALID_AVAILABILITY = 20006;
const PRODUCT_UPDATE_SUCCESS = 20007;
const PRODUCT_UPDATE_FAILED = 20008;
const PRODUCT_DELETE_EMPTY_DATA = 20009;
const PRODUCT_DELETE_SUCCESS = 20010;
const PRODUCT_DELETE_FAILED = 20011;
const PRODUCT_ADD_SUCCESS = 20012;
const PRODUCT_ADD_FAILED = 20013;
const PRODUCTS_GET_ALL_PRODUCTS_SUCCESS = 20014;
const PRODUCTS_GET_ALL_PRODUCTS_FAILED = 20015;

/**
 * Products Spec operation functions (60x) constants
 */
const PRODUCT_SPEC_EMPTY_DATA = 600;
const PRODUCT_SPEC_GET_PRODUCTS_SUCCESS = 601;
const PRODUCT_SPEC_GET_PRODUCTS_FAILED = 602;
const PRODUCT_SPEC_INVALID_ID = 603;
const PRODUCT_SPEC_DELETE_SUCCESS = 604;
const PRODUCT_SPEC_DELETE_FAILED = 605;
const PRODUCT_SPEC_INVALID_CAT_SPECID = 606;
const PRODUCT_SPEC_INVALID_PRODUCTID = 607;
const PRODUCT_SPEC_UPDATE_SUCCESS = 608;
const PRODUCT_SPECS_UPDATE_FAILED = 6060;
const PRODUCT_SPEC_PRIMARY_KEY_REPEATED = 60001;
const PRODUCT_SPEC_ADD_SUCCESS = 60002;
const PRODUCT_SPEC_ADD_FAILED = 60003;
const PRODUCT_SPEC_ADD_EXISTS = 60004;


/**
 * Rates operation functions (7x) constants
 */
const RATE_INSERT_FAILED = 70;
const RATE_INSERT_SUCCESS = 71;
const RATE_AVGERAGE_FAILED = 72;
const RATE_AVERAGE_SUCCESS = 73;
const RATE_AVERAGE_INVALID_PRODUCT = 74;
const RATE_AVERAGE_EMPTY_DATA = 75;
const RATE_GET_INVALID_PRODUCT = 76;
const RATE_GET_EMPTY_DATA = 77;
const RATE_GET_INVALID_BUYER = 78;
const RATE_GET_SUCCESS = 79;
const RATE_GET_FAILED = 700;
const RATE_UPDATE_SUCCESS = 701;
const SELECT_PRODUCT_SUCCESS = 702;
