import { appendChild } from './appendChild.js';
import { charAt } from './charAt.js';
import {charCodeAt} from './charCodeAt.js';
import {filter} from './filter.js';
import {find} from './find.js';

export function app(){
    console.log("Connected to app");
    charCodeAt();
    charAt();
    filter();
    find();
    appendChild();
}
app();