require("i18n/choose!./file.js"); // chooses the correct file by locale,
					// but it do not merge the objects
require("i18n/concat!./file.js"); // concatinate all fitting locales
require("i18n/merge!./file.js"); // merges the resulting objects
					// ./file.js is excuted while compiling
require("i18n!./file.json") == require("i18n/merge!json!./file.json")