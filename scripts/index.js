import { appendChild } from './appendChild.js';
import { charAt } from './charAt.js';
import {charCodeAt} from './charCodeAt.js';
import {filter} from './filter.js';
import {find} from './find.js';
import { splitStr } from './split.js';

export function app(){
    console.log("Connected to app");
    charCodeAt();
    charAt();
    filter();
    find();
    appendChild();
    splitStr();
}
app();