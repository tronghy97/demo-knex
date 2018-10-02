"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("../constants/Config");
const knexfile_js_1 = require("../database/knexfile.js");
exports.knex = require('knex')(knexfile_js_1.database[Config_1.config.evironment]);
//# sourceMappingURL=index.js.map