import { config } from '../constants/Config';
import { database } from '../database/knexfile.js';

export const knex = require('knex')(database[config.evironment]);

