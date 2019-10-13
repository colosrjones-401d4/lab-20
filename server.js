'use strict';

const Q = require('@nmq/q/server');
Q.start();

// Files
const files = new Q('files');
files.monitorEvent('save');
files.monitorEvent('error');

// Database
const db = new Q('database');
db.monitorEvent('create');
db.monitorEvent('read');
db.monitorEvent('update');
db.monitorEvent('delete');
db.monitorEvent('error');