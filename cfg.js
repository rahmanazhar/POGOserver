export const MINIMUM_CLIENT_VERSION = "0.33.0";

export const SERVER_GAME_MODE = 0;
export const SERVER_TICK_INTERVAL = 1; // better dont change
export const SERVER_SAVE_INTERVAL = 1e3 * 60; // 1min
export const SERVER_MAX_CONNECTIONS = 64;
export const SERVER_PLAYER_CONNECTION_TIMEOUT = 1e3 * 60 * 30; // 30min

export const SERVER_BOOT_TIMEOUT = 10e3;

export const SERVER_DEFAULT_CONSOLE_COLOR = 32;

// HTTP
export const SERVER_PORT = 3000;
export const SERVER_HOST_IP = "127.0.0.1";

// Either mongo or mysql
export const SERVER_USE_DATABASE = "MONGO";

// MONGODB
export const SERVER_MONGO_PORT = 27017;
export const SERVER_MONGO_HOST_IP = "127.0.0.1";
export const SERVER_MONGO_DB_NAME = "pokemongo";
export const SERVER_MONGO_COLLECTION_USERS = "users";

// MYSQL
export const SERVER_MYSQL_PORT = 3306;
export const SERVER_MYSQL_HOST_IP = "127.0.0.1";
export const SERVER_MYSQL_DB_NAME = "pogosql";
export const SERVER_MYSQL_USERNAME = "root";
export const SERVER_MYSQL_PASSWORD = "";
export const SERVER_MYSQL_TABLE = "users";

// account used for pogo-asset-downloader lib
export const SERVER_POGO_CLIENT_PROVIDER = "GOOGLE"; // either google or ptc
export const SERVER_POGO_CLIENT_USERNAME = "USERNAME";
export const SERVER_POGO_CLIENT_PASSWORD = "PASSWORD";

export const SERVER_GMAPS_API_KEY = "AIzaSyDF9rkP8lhcddBtvH9gVFzjnNo13WtmJIM";

// path to save logs into
export const SERVER_DUMP_PATH = "./logs/";

// save traffic dumps into /logs
export const SERVER_DUMP_TRAFFIC = true;

// show request types in console
export const SERVER_LOG_REQUESTS = true;

// transfer account progress from official servers
export const SERVER_CLONE_NEW_ACCOUNTS_FROM_OFFICIAL_SERVER = false;